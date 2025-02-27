import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import * as S from './styled';
import moment from 'moment';
import { CurrentCityData } from '../../store/cities/citiesTypes';

export const TodayHighlightsWrapper = () => {
  const currentCity = useSelector((state: RootState) =>
    state.cities.cities.find((city: CurrentCityData) => city.pin)
  );
  if (!currentCity) {
    return <p>Loading...</p>;
  }
  const { weather } = currentCity;
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
