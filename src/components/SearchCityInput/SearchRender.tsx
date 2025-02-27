import { useDispatch, useSelector } from 'react-redux';
import { CitiesState, CurrentCityData } from '../../store/cities/citiesTypes';
import { AppDispatch, RootState } from '../../store';
import { useEffect } from 'react';
import { addCity, setCurrentCity } from '../../store/cities/citiesActions';
import { getImage, getWeather } from '../../api';
import { SearchCity } from '../../api/apiResponseType';

interface IRenderProps {
  onClick: () => void;
}

export const SearchRender: React.FC<IRenderProps> = ({ onClick }) => {
  const dispatch: AppDispatch = useDispatch();
  const citiesList: CitiesState = useSelector(
    (state: RootState) => state.cities
  );

  const { cities } = citiesList;

  useEffect(() => {
    if (cities.length > 0) {
      localStorage.setItem('cities', JSON.stringify(cities));
    }
  }, [cities]);

  const { searchCities } = citiesList;

  if (!searchCities) return;

  const handlerSelectCity = (searchCity: SearchCity) => {
    const { id, name, country_code, latitude, longitude } = searchCity;

    const imgData = async () => {
      const data = await getImage(name);
      return data;
    };

    const fetchWeather = async () => {
      const data = await getWeather(latitude, longitude);
      return data;
    };

    const createCity = async (src: string) => {
      const weatherData = await fetchWeather();
      const city: CurrentCityData = {
        cityId: id,
        cityName: name,
        countryCode: country_code,
        latitude: latitude,
        longitude: longitude,
        image: src,
        pin: false,
        weather: weatherData,
      };

      return city;
    };

    imgData()
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
      .then((image) => createCity(image))
      .then((city) => dispatch(addCity(city)))
      .then(() => dispatch(setCurrentCity(id)));

    onClick();
  };

  return (
    <>
      {searchCities.map((city: SearchCity) => (
        <div key={city.id} onClick={() => handlerSelectCity(city)}>
          {city.name}, {city.country}
        </div>
      ))}
    </>
  );
};
