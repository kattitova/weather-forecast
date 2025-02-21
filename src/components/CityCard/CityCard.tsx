import * as S from './styled';
import { CurrentCityData, RootState } from '../../store';
import moment from 'moment';
import { WeatherIcon } from '../WeatherIcon';
import { useSelector } from 'react-redux';

export const CityCard = () => {
  const city: CurrentCityData = useSelector(
    (state: RootState) => state.currentCity.city
  );

  const { cityName, countryCode, weather } = city;
  console.log('code', countryCode);
  if (!weather) {
    return <p>Loading...</p>;
  }
  const { current, current_units } = weather;

  const todayData: string = moment().format('dddd, h:mm a');

  return (
    <S.CityCard>
      <h2>
        {cityName}, {countryCode}
      </h2>
      <section>
        <WeatherIcon weatherCode={current.weather_code} />
        <S.CurrentTemp>
          <p>{current['temperature_2m']}</p>
          <span>{current_units['temperature_2m']}</span>
        </S.CurrentTemp>
        <S.StyledData>
          <p>{moment().format('MMMM D YYYY')}</p>
          <p>{todayData}</p>
        </S.StyledData>
      </section>
      <img src='kyiv.jpg' alt='Kyiv' />
    </S.CityCard>
  );
};
