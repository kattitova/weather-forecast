import * as S from './styled';
import moment from 'moment';
import { WeatherIcon } from '../WeatherIcon';
import { useSelector } from 'react-redux';
import { CitySelect } from '../CitySelect';
import { PHRASES } from '../../constants/phrases';
import { DATE_FORMATS } from '../../constants/dateFormats';
import {
  selectCurrentCityCountryCode,
  selectCurrentCityImage,
  selectCurrentCityName,
} from '../../store/cities/selectors';
import {
  selectWeatherCurrent,
  selectWeatherCurrentUnits,
  selectWeatherLoading,
} from '../../store/weather/selectors';

export const CityCard = () => {
  const loading = useSelector(selectWeatherLoading);

  const cityName = useSelector(selectCurrentCityName);
  const countryCode = useSelector(selectCurrentCityCountryCode);
  const image = useSelector(selectCurrentCityImage);

  const current = useSelector(selectWeatherCurrent);
  const current_units = useSelector(selectWeatherCurrentUnits);

  if (loading) {
    return <p>{PHRASES.LOADING}</p>;
  }

  const todayDay = moment().format(DATE_FORMATS.REGULAR);
  const todayData = moment().format(DATE_FORMATS.DAY_TIME);

  return (
    <S.CityCard>
      <S.CityCardHeader>
        <S.Title>
          {cityName}, {countryCode}
        </S.Title>
        <CitySelect />
      </S.CityCardHeader>
      <S.WeatherInfo>
        <WeatherIcon weatherCode={current.weather_code} />
        <S.CurrentTemp>
          <p>{current['temperature_2m']}</p>
          <span>{current_units['temperature_2m']}</span>
        </S.CurrentTemp>
        <S.StyledData>
          <p>{todayDay}</p>
          <p>{todayData}</p>
        </S.StyledData>
      </S.WeatherInfo>
      <S.Background src={image} alt={cityName} />
    </S.CityCard>
  );
};
