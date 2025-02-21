import { useSelector } from 'react-redux';
import { CurrentCityData, RootState } from '../../store';
import * as S from './styled';
import moment from 'moment';

export const TodayHighlightsWrapper = () => {
  const city: CurrentCityData = useSelector(
    (state: RootState) => state.currentCity.city
  );

  const { weather } = city;
  if (!weather) {
    return <p>Loading...</p>;
  }
  const { current, current_units, daily } = weather;

  return (
    <S.StyledWrapper>
      <h3>Today's Highlights</h3>
      <S.StyledHighlights>
        <div>
          <p>Precipitation</p>
          <span>
            {current.precipitation}
            {current_units.precipitation}
          </span>
        </div>
        <div>
          <p>Relative Humidity</p>
          <span>
            {current.relative_humidity_2m}
            {current_units.relative_humidity_2m}
          </span>
        </div>
        <div>
          <p>Wind</p>
          <span>
            {current.wind_speed_10m}
            {current_units.wind_speed_10m}
          </span>
        </div>
        <div>
          <p>Sunrise & Sunset</p>
          <span>
            <img src='./assets/arrow.png' />{' '}
            {moment(daily.sunrise[0]).format('h:mm a')}
            <img src='./assets/arrow.png' />{' '}
            {moment(daily.sunset[0]).format('h:mm a')}
          </span>
        </div>
      </S.StyledHighlights>
    </S.StyledWrapper>
  );
};
