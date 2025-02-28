import { useSelector } from 'react-redux';
import { DailyForecast } from '../DailyForecast';
import * as S from './styled';
import { CurrentCityData, RootState } from '../../store';

export interface IThreeDaysForecast {
  day: string;
  maxTemperature: number;
  minTemperature: number;
  weatherCode: number;
  unit: string;
}

export const ThreeDaysForecast = () => {
  const city: CurrentCityData = useSelector(
    (state: RootState) => state.currentCity.city
  );

  const { weather } = city;
  if (!weather) return;
  const { daily, daily_units } = weather;

  const days: string[] = daily.time.slice(1, 4);
  const maxTemperature: number[] = daily.temperature_2m_max.slice(1, 4);
  const minTemperature: number[] = daily.temperature_2m_min.slice(1, 4);
  const weatherCode: number[] = daily.weather_code.slice(1, 4);
  const unit: string = daily_units.temperature_2m_max;

  const threeDaysForecast: IThreeDaysForecast[] = days.map(
    (day: string, i: number) => ({
      day,
      maxTemperature: maxTemperature[i],
      minTemperature: minTemperature[i],
      weatherCode: weatherCode[i],
      unit: unit,
    })
  );

  return (
    <S.StyledWrapper>
      <h3>3 Days Forecast</h3>
      <section>
        {threeDaysForecast.map((day: IThreeDaysForecast, i: number) => (
          <DailyForecast key={i} daysData={day} />
        ))}
      </section>
    </S.StyledWrapper>
  );
};
