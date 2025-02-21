import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  AppDispatch,
  CurrentCityData,
  getWeather,
  RootState,
  setCurrentCityWeather,
} from './store';
import * as S from './styled';
import { CityCard } from './components/CityCard';
import { TodayHighlightsWrapper } from './components/TodayHighlightsWrapper';
import { TemperatureChartWrapper } from './components/TemperatureChartWrapper';
import { RainChance } from './components/RainChance';
import { ThreeDaysForecast } from './components/ThreeDaysForecast';

function App() {
  const dispatch: AppDispatch = useDispatch();
  const { cities, loading, error } = useSelector(
    (state: RootState) => state.weather
  );

  const city: CurrentCityData = useSelector(
    (state: RootState) => state.currentCity.city
  );

  const { latitude, longitude, cityId, cityName } = city;

  useEffect(() => {
    dispatch(getWeather(latitude, longitude, cityId, cityName));
  }, [cityId, cityName, dispatch, latitude, longitude]);

  useEffect(() => {
    const currentCityWeather = cities.find((city) => city.id === cityId);
    if (currentCityWeather?.weatherData) {
      dispatch(setCurrentCityWeather(currentCityWeather.weatherData));
    }
  }, [cities, cityId, dispatch]);

  return (
    <S.Wrapper>
      <header>
        <img src='logo.png' alt='logo' />
        <h1>Weather Forecast</h1>
        <input type='text' placeholder='Search city ...' />

        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
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
