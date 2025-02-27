import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { CitiesState, CurrentCityData } from '../../store/cities/citiesTypes';
import { removeCity, setCurrentCity } from '../../store/cities/citiesActions';
import * as S from './styled';

interface IRenderProps {
  onClick: () => void;
}

export const SelectRender: React.FC<IRenderProps> = ({ onClick }) => {
  const dispatch: AppDispatch = useDispatch();

  const citiesList: CitiesState = useSelector(
    (state: RootState) => state.cities
  );

  const handlePinCity = (id: number) => {
    dispatch(setCurrentCity(id));
    onClick();
  };

  const handleDeleteCity = (event: React.MouseEvent, id: number, i: number) => {
    event.stopPropagation();
    if (!citiesList.cities[i].pin) dispatch(removeCity(id));
    onClick();
  };

  return (
    <>
      {citiesList.cities.map((city: CurrentCityData, index: number) => (
        <div key={city.cityId} onClick={() => handlePinCity(city.cityId)}>
          {city.cityName}
          <S.Icons>
            <img src='/assets/pin.png' alt='city pin' data-pin={city.pin} />
            <img
              src='/assets/close.png'
              alt='delete city'
              onClick={(e) => handleDeleteCity(e, city.cityId, index)}
              style={{
                opacity: city.pin ? '0.1' : '0.5',
                cursor: city.pin ? 'not-allowed' : 'pointer',
              }}
            />
          </S.Icons>
        </div>
      ))}
    </>
  );
};
