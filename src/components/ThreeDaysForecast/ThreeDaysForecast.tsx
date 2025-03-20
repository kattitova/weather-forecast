import { useSelector } from 'react-redux';
import * as S from './styled';
import { selectWeather } from '../../store/weather/selectors';
import { PHRASES } from '../../constants';
import { DailyForecast } from './components/DailyForecast';

export interface IThreeDaysForecast {
  day: string;
  maxTemperature: number;
  minTemperature: number;
  weatherCode: number;
  unit: string;
}

export const ThreeDaysForecast = () => {
  const weather = useSelector(selectWeather);

  if (!weather) return;
  const { daily, daily_units } = weather;

  const days: string[] = daily.time.slice(1, 4);
  const maxTemperature: number[] = daily.temperature_2m_max.slice(1, 4);
  const minTemperature: number[] = daily.temperature_2m_min.slice(1, 4);
  const weatherCode: number[] = daily.weather_code.slice(1, 4);
  const unit: string = daily_units.temperature_2m_max;

  const threeDaysForecast = days.map((day: string, i: number) => {
    const dayData = {
      day,
      maxTemperature: maxTemperature[i],
      minTemperature: minTemperature[i],
      weatherCode: weatherCode[i],
      unit: unit,
    };
    return <DailyForecast key={i} daysData={dayData} />;
  });

  return (
    <S.StyledWrapper>
      <h3>{PHRASES.TREE_DAYS_FORECAST}</h3>
      <S.ForecastWrapper>{threeDaysForecast}</S.ForecastWrapper>
    </S.StyledWrapper>
  );
};
