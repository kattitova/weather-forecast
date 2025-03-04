import { useSelector } from 'react-redux';
import * as S from './styled';
import { selectCurrentCity } from '../../store/cities/selectors';

interface ISelectProps {
  onClick: () => void;
  status: string;
}

export const CitySelect: React.FC<ISelectProps> = ({ onClick, status }) => {
  const pinnedCity = useSelector(selectCurrentCity);

  return (
    <S.CitySelect onClick={onClick}>
      {pinnedCity.cityName}
      <S.Button $status={status} />
    </S.CitySelect>
  );
};
