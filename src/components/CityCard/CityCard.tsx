import * as S from './styled';
import moment from 'moment';
import { WeatherIcon } from '../WeatherIcon';
import { useSelector } from 'react-redux';
import { DropDownList } from '../DropDownList';
import { CitySelect, SelectRender } from '../CitySelect';
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
import { ICurrentResponse, ICurrentUnitsResponse } from '../../types/api/types';

export const CityCard = () => {
  const loading = useSelector(selectWeatherLoading);

  const cityName = useSelector(selectCurrentCityName);
  const countryCode = useSelector(selectCurrentCityCountryCode);
  const image = useSelector(selectCurrentCityImage);

  const current: ICurrentResponse = useSelector(selectWeatherCurrent);
  const current_units: ICurrentUnitsResponse = useSelector(
    selectWeatherCurrentUnits
  );

  if (loading) {
    return <p>{PHRASES.LOADING}</p>;
  }

  const todayData: string = moment().format(DATE_FORMATS.DAY_TIME);

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
          <p>{moment().format(DATE_FORMATS.REGULAR)}</p>
          <p>{todayData}</p>
        </S.StyledData>
      </section>
      <img src={image} alt={cityName} />
    </S.CityCard>
  );
};
