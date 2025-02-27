import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import * as S from './styled';
import { CitiesState, CurrentCityData } from '../../store/cities/citiesTypes';

interface ISelectProps {
  onClick: () => void;
  status: string;
}

export const CitySelect: React.FC<ISelectProps> = ({ onClick, status }) => {
  const citiesList: CitiesState = useSelector(
    (state: RootState) => state.cities
  );

  const pinnedCity = citiesList.cities.find(
    (city: CurrentCityData) => city.pin
  );

  if (!pinnedCity) {
    return <p>Loading...</p>;
  }

  return (
    <S.CitySelect onClick={onClick}>
      {pinnedCity.cityName}
      <S.Button $status={status}></S.Button>
    </S.CitySelect>
  );
};
