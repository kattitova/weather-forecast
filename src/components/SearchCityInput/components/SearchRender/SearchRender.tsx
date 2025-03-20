import { useDispatch, useSelector } from 'react-redux';
import { ICurrentCityData } from '../../../../types/store/cities/types';
import { AppDispatch } from '../../../../store';
import { addCity, setCurrentCity } from '../../../../store/cities/actions';
import { getImage } from '../../../../api';
import { ISearchCityResponse } from '../../../../types/api/types';
import {
  selectSearchCities,
  selectSearchCitiesLoading,
} from '../../../../store/searchCities/selectors';
import { PHRASES } from '../../../../constants/phrases';
import * as S from '../../styled';

interface IRenderProps {
  onClick: () => void;
  status: string;
}

export const SearchRender: React.FC<IRenderProps> = ({ onClick, status }) => {
  const dispatch: AppDispatch = useDispatch();

  const searchCities = useSelector(selectSearchCities);
  const loading = useSelector(selectSearchCitiesLoading);

  const handlerSelectCity = (searchCity: ISearchCityResponse) => {
    const { id, name, country_code, latitude, longitude } = searchCity;

    const getImageData = async () => {
      const data = await getImage(name);
      return data;
    };

    getImageData()
      .then((data) => {
        const { results } = data;
        const resultsLength = results.length;
        if (resultsLength) {
          const image =
            results[Math.floor(Math.random() * resultsLength)].urls.regular;
          return image;
        }
        return 'assets/noImage.jpg';
      })
      .then((src) => {
        const city: ICurrentCityData = {
          cityId: id,
          cityName: name,
          countryCode: country_code,
          latitude: latitude,
          longitude: longitude,
          image: src,
          pin: false,
        };
        dispatch(addCity(city));
      })
      .then(() => dispatch(setCurrentCity(id)));

    onClick();
  };

  return (
    <S.DropDownList $status={status} data-status={status}>
      {loading && <S.DropDownInfoItem>{PHRASES.LOADING}</S.DropDownInfoItem>}

      {(searchCities &&
        searchCities.map((city: ISearchCityResponse) => (
          <S.DropDownItem key={city.id} onClick={() => handlerSelectCity(city)}>
            {city.name}, {city.country}
          </S.DropDownItem>
        ))) || <S.DropDownInfoItem>{PHRASES.NO_RESULTS}</S.DropDownInfoItem>}
    </S.DropDownList>
  );
};
