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
import { SearchCityInput } from './components/SearchCityInput';
import { selectCurrentCity } from './store/cities/selectors';
import { getWeather } from './store/weather/thunks';
import { PHRASES } from './constants';
import { selectWeather } from './store/weather/selectors';

function App() {
  const dispatch: AppDispatch = useDispatch();
  const currentCity: ICurrentCityData = useSelector(selectCurrentCity);
  const weather = useSelector(selectWeather);

  useEffect(() => {
    const { latitude, longitude } = currentCity;
    dispatch(getWeather(latitude, longitude));
  }, [currentCity]);

  return (
    <S.Wrapper>
      <header>
        <img src='logo.png' alt='logo' />
        <h1>{PHRASES.WEATHER_FORECAST}</h1>
        <SearchCityInput />
      </header>
      <main>
        <div>
          <S.CitiesWrapper>
            <CityCard />
          </S.CitiesWrapper>
          {!!weather && <TodayHighlightsWrapper />}
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
