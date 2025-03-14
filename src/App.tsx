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
import { SearchCityInput, SearchRender } from './components/SearchCityInput';
import { DropDownList } from './components/DropDownList';
import { selectCurrentCity } from './store/cities/selectors';
import { getWeather } from './store/weather/thunks';

function App() {
  const dispatch: AppDispatch = useDispatch();
  const currentCity: ICurrentCityData = useSelector(selectCurrentCity);

  useEffect(() => {
    const { latitude, longitude } = currentCity;
    dispatch(getWeather(latitude, longitude));
  }, [currentCity]);

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
