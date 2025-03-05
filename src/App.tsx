import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from './store';
import * as S from './styled';
import { CityCard } from './components/CityCard';
import { TodayHighlightsWrapper } from './components/TodayHighlightsWrapper';
import { TemperatureChartWrapper } from './components/TemperatureChartWrapper';
import { PrecipitationChance } from './components/PrecipitationChance';
import { ThreeDaysForecast } from './components/ThreeDaysForecast';
import { ICurrentCityData } from './types/store/cities/types';
import { addCity, setCities } from './store/cities/actions';
import { SearchCityInput, SearchRender } from './components/SearchCityInput';
import { DropDownList } from './components/DropDownList';
import { selectCitiesList, selectCurrentCity } from './store/cities/selectors';
import { useLocalStorage } from './hooks/useLocalStorage';
import { getWeather } from './store/weather/thunks';
import { initialCityData } from './constants';

function App() {
  const dispatch: AppDispatch = useDispatch();

  const citiesList: ICurrentCityData[] = useSelector(selectCitiesList);
  const currentCity: ICurrentCityData = useSelector(selectCurrentCity);

  const [savedCities, setSavedCities] = useLocalStorage<ICurrentCityData[]>(
    'cities',
    []
  );

  useEffect(() => {
    if (savedCities.length) dispatch(setCities(savedCities));
    else dispatch(addCity(initialCityData));
  }, []);

  useEffect(() => {
    const { latitude, longitude } = currentCity;
    dispatch(getWeather(latitude, longitude));
  }, [currentCity]);

  useEffect(() => {
    if (citiesList.length > 0) {
      setSavedCities(citiesList);
    }
  }, [citiesList, setSavedCities]);

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
          <PrecipitationChance />
          <ThreeDaysForecast />
        </S.RightBar>
      </main>
    </S.Wrapper>
  );
}

export default App;
