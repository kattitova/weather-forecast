import * as S from './styled';
import { CurrentCityData, RootState } from '../../store';
import moment from 'moment';
import { WeatherIcon } from '../WeatherIcon';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { DropDownList } from '../DropDownList';

export const CityCard = () => {
  const city: CurrentCityData = useSelector(
    (state: RootState) => state.currentCity.city
  );

  useEffect(() => {
    localStorage.setItem('cities', JSON.stringify([city]));
  }, [city]);

  const { cityName, countryCode, weather, image } = city;

  if (!weather) {
    return <p>Loading...</p>;
  }
  const { current, current_units } = weather;

  const todayData: string = moment().format('dddd, h:mm a');

  return (
    <S.CityCard>
      <S.CityCardHeader>
        <h2>
          {cityName}, {countryCode}
        </h2>
        <DropDownList />
      </S.CityCardHeader>
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
      <img src={image} alt={cityName} />
    </S.CityCard>
  );
};
