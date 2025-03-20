import { useSelector } from 'react-redux';
import * as S from './styled';
import moment from 'moment';
import { PHRASES } from '../../constants/phrases';
import { DATE_FORMATS } from '../../constants/dateFormats';
import { selectWeather } from '../../store/weather/selectors';

export const TodayHighlightsWrapper = () => {
  const weather = useSelector(selectWeather);
  //if (!weather) return;
  const { current, current_units, daily } = weather;
  const sunriseTime = moment(daily.sunrise[0]).format(DATE_FORMATS.TIME);
  const sunsetTime = moment(daily.sunset[0]).format(DATE_FORMATS.TIME);

  return (
    <S.StyledWrapper>
      <h3>{PHRASES.TODAYS_HIGHLIGHTS}</h3>
      <S.StyledHighlights>
        <S.Highlight>
          <S.HighlightTitle>{PHRASES.PRECIPITATION}</S.HighlightTitle>
          <S.HighlightText>
            {current.precipitation}
            {current_units.precipitation}
          </S.HighlightText>
        </S.Highlight>
        <S.Highlight>
          <S.HighlightTitle>{PHRASES.RELATIVE_HUMIDITY}</S.HighlightTitle>
          <S.HighlightText>
            {current.relative_humidity_2m}
            {current_units.relative_humidity_2m}
          </S.HighlightText>
        </S.Highlight>
        <S.Highlight>
          <S.HighlightTitle>{PHRASES.WIND}</S.HighlightTitle>
          <S.HighlightText>
            {current.wind_speed_10m}
            {current_units.wind_speed_10m}
          </S.HighlightText>
        </S.Highlight>
        <S.Highlight>
          <S.HighlightTitle>{PHRASES.SUNRISE_SUNSET}</S.HighlightTitle>
          <S.HighlightText>
            <img src='./assets/arrow.png' />
            {sunriseTime}
            <img src='./assets/arrow.png' />
            {sunsetTime}
          </S.HighlightText>
        </S.Highlight>
      </S.StyledHighlights>
    </S.StyledWrapper>
  );
};
