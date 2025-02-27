import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';
import * as S from './styled';
import { CityCard } from './components/CityCard';
import { TodayHighlightsWrapper } from './components/TodayHighlightsWrapper';
import { TemperatureChartWrapper } from './components/TemperatureChartWrapper';
import { RainChance } from './components/RainChance';
import { ThreeDaysForecast } from './components/ThreeDaysForecast';
import { CitiesState, CurrentCityData } from './store/cities/citiesTypes';
import { addCity, setCities } from './store/cities/citiesActions';
import { initialCityData } from './store/cities/citiesReducer';
import { SearchCityInput, SearchRender } from './components/SearchCityInput';
import { DropDownList } from './components/DropDownList';
import { getWeather } from './api';

function App() {
  const dispatch: AppDispatch = useDispatch();

  const citiesList: CitiesState = useSelector(
    (state: RootState) => state.cities
  );

  const [updatedCities, setUpdatedCities] = useState(false);

  useEffect(() => {
    const savedCities = JSON.parse(localStorage.getItem('cities') || '[]');
    if (savedCities.length) dispatch(setCities(savedCities));
    else dispatch(addCity(initialCityData));
    setUpdatedCities(true);
  }, [dispatch]);

  useEffect(() => {
    Promise.all(
      citiesList.cities.map(async (city: CurrentCityData) => {
        const weatherData = await getWeather(city.latitude, city.longitude);
        return { ...city, weather: weatherData };
      })
    ).then((updatedCities) => {
      if (updatedCities) {
        dispatch(setCities(updatedCities));
        setUpdatedCities(false);
      }
    });
  }, [dispatch, updatedCities]);

  return (
    <S.Wrapper>
      <header>
        <img src='logo.png' alt='logo' />
        <h1>Weather Forecast</h1>
        <DropDownList
          SelectComponent={SearchCityInput}
          RenderComponent={SearchRender}
        />
      </header>
      <main>
        <div>
          <S.CitiesWrapper>
            <CityCard />
          </S.CitiesWrapper>
          <TodayHighlightsWrapper />
          <TemperatureChartWrapper />
        </div>
        <S.RightBar>
          <RainChance />
          <ThreeDaysForecast />
        </S.RightBar>
      </main>
    </S.Wrapper>
  );
}

export default App;
