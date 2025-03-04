import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import moment from 'moment';
import { selectWeather } from '../store/weather/selectors';
import { PHRASES } from '../constants/phrases';
import { DATE_FORMATS } from '../constants/dateFormats';

type PeriodType = 'today' | 'week';

export interface ITemperatureChartData {
  xAxis: string[];
  yAxis: number[];
  yAxisWeek?: number[];
  showLegend: boolean;
  title: string;
}

export const useTemperatureChartData = (period: PeriodType) => {
  const weather = useSelector(selectWeather);

  return useMemo(() => {
    if (!weather) return;

    const daily = weather?.daily;
    const hourly = weather?.hourly;

    if (!daily || !hourly) return;
    if (period === 'today') {
      return {
        xAxis: hourly.time
          .slice(0, 24)
          .map((item: string) => moment(item).format(DATE_FORMATS.HOURS)),
        yAxis: hourly.temperature_2m.slice(0, 24),
        showLegend: false,
        title: PHRASES.TIME,
      };
    }

    return {
      xAxis: daily.time.map((item: string) =>
        moment(item).format(DATE_FORMATS.MONTH_DAY)
      ),
      yAxis: daily.temperature_2m_max,
      yAxisWeek: daily.temperature_2m_min,
      showLegend: true,
      title: PHRASES.DAYS,
    };
  }, [weather, period])!;
};
