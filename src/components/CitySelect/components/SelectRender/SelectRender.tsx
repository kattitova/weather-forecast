import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../../store';
import { ICurrentCityData } from '../../../../types/store/cities/types';
import { removeCity, setCurrentCity } from '../../../../store/cities/actions';
import * as S from '../../styled';
import { selectCitiesList } from '../../../../store/cities/selectors';

interface IRenderProps {
  onClick: () => void;
  status: string;
}

export const SelectRender: React.FC<IRenderProps> = ({ onClick, status }) => {
  const dispatch: AppDispatch = useDispatch();

  const citiesList = useSelector(selectCitiesList);

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
    <S.DropDownList $status={status} data-status={status}>
      {citiesList.map((city: ICurrentCityData, index: number) => (
        <S.DropDownItem
          key={city.cityId}
          onClick={() => handlePinCity(city.cityId)}
        >
          {city.cityName}
          <S.Icons>
            <S.PinIcon
              src='/assets/pin.png'
              alt='city pin'
              data-pin={city.pin}
            />
            <S.DeleteIcon
              $pin={city.pin}
              src='/assets/close.png'
              alt='delete city'
              onClick={(e) => handleDeleteCity(e, city.cityId, index)}
            />
          </S.Icons>
        </S.DropDownItem>
      ))}
    </S.DropDownList>
  );
};
