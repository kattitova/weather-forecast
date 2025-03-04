import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store';
import { ICurrentCityData } from '../../types/store/cities/types';
import { removeCity, setCurrentCity } from '../../store/cities/actions';
import * as S from './styled';
import { selectCitiesList } from '../../store/cities/selectors';

interface IRenderProps {
  onClick: () => void;
}

export const SelectRender: React.FC<IRenderProps> = ({ onClick }) => {
  const dispatch: AppDispatch = useDispatch();

  const citiesList: ICurrentCityData[] = useSelector(selectCitiesList);

  const handlePinCity = (id: number) => {
    dispatch(setCurrentCity(id));
    onClick();
  };

  const handleDeleteCity = (event: React.MouseEvent, id: number, i: number) => {
    event.stopPropagation();
    if (!citiesList[i].pin) dispatch(removeCity(id));
    onClick();
  };

  return (
    <>
      {citiesList.map((city: ICurrentCityData, index: number) => (
        <div key={city.cityId} onClick={() => handlePinCity(city.cityId)}>
          {city.cityName}
          <S.Icons>
            <img src='/assets/pin.png' alt='city pin' data-pin={city.pin} />
            <S.DeleteIcon
              $pin={city.pin}
              src='/assets/close.png'
              alt='delete city'
              onClick={(e) => handleDeleteCity(e, city.cityId, index)}
            />
          </S.Icons>
        </div>
      ))}
    </>
  );
};
