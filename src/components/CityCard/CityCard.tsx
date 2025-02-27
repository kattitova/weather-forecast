import * as S from './styled';
import { RootState } from '../../store';
import moment from 'moment';
import { WeatherIcon } from '../WeatherIcon';
import { useSelector } from 'react-redux';
import { DropDownList } from '../DropDownList';
import { CurrentCityData } from './../../store/cities/citiesTypes';
import { CitySelect, SelectRender } from '../CitySelect';

export const CityCard = () => {
  const currentCity = useSelector((state: RootState) =>
    state.cities.cities.find((city: CurrentCityData) => city.pin)
  );

  if (!currentCity) return;

  const { cityName, countryCode, weather, image } = currentCity;

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
        <DropDownList
          SelectComponent={CitySelect}
          RenderComponent={SelectRender}
        />
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
