import { useDispatch, useSelector } from 'react-redux';
import { ICurrentCityData } from '../../types/store/cities/types';
import { AppDispatch } from '../../store';
import { addCity, setCurrentCity } from '../../store/cities/actions';
import { getImage } from '../../api';
import { ISearchCityResponse } from '../../types/api/types';
import {
  selectSearchCities,
  selectSearchCitiesLoading,
} from '../../store/searchCities/selectors';
import { PHRASES } from './../../constants/phrases';

interface IRenderProps {
  onClick: () => void;
}

export const SearchRender: React.FC<IRenderProps> = ({ onClick }) => {
  const dispatch: AppDispatch = useDispatch();

  const searchCities: ISearchCityResponse[] = useSelector(selectSearchCities);
  const loading: boolean = useSelector(selectSearchCitiesLoading);

  if (!searchCities) return <div>{PHRASES.NO_RESULTS}</div>;
  if (loading) return <div>{PHRASES.LOADING}</div>;

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
    <>
      {searchCities.map((city: ISearchCityResponse) => (
        <div key={city.id} onClick={() => handlerSelectCity(city)}>
          {city.name}, {city.country}
        </div>
      ))}
    </>
  );
};
