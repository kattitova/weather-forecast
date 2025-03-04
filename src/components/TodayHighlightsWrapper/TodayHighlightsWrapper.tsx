import { useSelector } from 'react-redux';
import * as S from './styled';
import moment from 'moment';
import { PHRASES } from '../../constants/phrases';
import { DATE_FORMATS } from '../../constants/dateFormats';
import { selectWeather } from '../../store/weather/selectors';

export const TodayHighlightsWrapper = () => {
  const weather = useSelector(selectWeather);
  if (!weather) return;
  const { current, current_units, daily } = weather;

  return (
    <S.StyledWrapper>
      <h3>{PHRASES.TODAYS_HIGHLIGHTS}</h3>
      <S.StyledHighlights>
        <div>
          <p>{PHRASES.PRECIPITATION}</p>
          <span>
            {current.precipitation}
            {current_units.precipitation}
          </span>
        </div>
        <div>
          <p>{PHRASES.RELATIVE_HUMIDITY}</p>
          <span>
            {current.relative_humidity_2m}
            {current_units.relative_humidity_2m}
          </span>
        </div>
        <div>
          <p>{PHRASES.WIND}</p>
          <span>
            {current.wind_speed_10m}
            {current_units.wind_speed_10m}
          </span>
        </div>
        <div>
          <p>{PHRASES.SUNRISE_SUNSET}</p>
          <span>
            <img src='./assets/arrow.png' />
            {moment(daily.sunrise[0]).format(DATE_FORMATS.TIME)}
            <img src='./assets/arrow.png' />
            {moment(daily.sunset[0]).format(DATE_FORMATS.TIME)}
          </span>
        </div>
      </S.StyledHighlights>
    </S.StyledWrapper>
  );
};
