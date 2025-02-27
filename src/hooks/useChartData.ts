import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import moment from 'moment';
import { RootState } from '../store';
import { CurrentCityData } from '../store/cities/citiesTypes';

type ChartType = 'temperature' | 'precipitation';
type PeriodType = 'today' | 'week';

export interface IChartData {
  xAxis: string[] | number[];
  yAxis: number[] | string[];
  yAxisWeek?: number[];
  showLegend: boolean;
  title: string;
  units?: string;
}

export const useChartData = (type: ChartType, period?: PeriodType) => {
  const currentCity = useSelector((state: RootState) =>
    state.cities.cities.find((city: CurrentCityData) => city.pin)
  );

  const weather = currentCity?.weather;

  return useMemo(() => {
    if (!weather) return;

    const daily = weather?.daily;
    const hourly = weather?.hourly;
    const daily_units = weather?.daily_units;

    if (type === 'temperature') {
      if (!daily || !hourly) return;
      if (period === 'today') {
        return {
          xAxis: hourly.time
            .slice(0, 24)
            .map((item: string) => moment(item).format('h a')),
          yAxis: hourly.temperature_2m.slice(0, 24),
          showLegend: false,
          title: 'Time',
        };
      }

      return {
        xAxis: daily.time.map((item: string) => moment(item).format('MMM D')),
        yAxis: daily.temperature_2m_max,
        yAxisWeek: daily.temperature_2m_min,
        showLegend: true,
        title: 'Days',
      };
    }

    if (!daily || !daily_units) return;

    return {
      yAxis: daily.time.map((item: string) => moment(item).format('MMM D')),
      xAxis: daily.precipitation_probability_max,
      units: String(daily_units.precipitation_probability_max),
      showLegend: false,
      title: 'Days',
    };
  }, [weather, period, type])!;
};
