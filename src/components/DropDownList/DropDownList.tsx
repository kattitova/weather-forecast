import { CurrentCityData } from '../../store/city/currentCityTypes';
import * as S from './styled';

export const DropDownList = () => {
  const citiesList = JSON.parse(localStorage.getItem('cities') || '[]');
  const pinnedCity = citiesList.find((city: CurrentCityData) => city.pin);

  return (
    <S.StyledWrapper>
      {citiesList.map((city: CurrentCityData) => (
        <S.CitySelect key={city.cityId}>
          {pinnedCity.cityName}
          <S.Button></S.Button>
        </S.CitySelect>
      ))}
    </S.StyledWrapper>
  );
};
