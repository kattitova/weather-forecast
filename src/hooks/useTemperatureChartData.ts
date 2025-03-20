import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import moment from 'moment';
import { selectWeather } from '../store/weather/selectors';
import { PHRASES } from '../constants/phrases';
import { DATE_FORMATS } from '../constants/dateFormats';
import { temperatureChartSettings, temperatureLayoutSettings } from '../utils';

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
    const chartData =
      period === 'today'
        ? {
            xAxis: hourly.time
              .slice(0, 24)
              .map((item: string) => moment(item).format(DATE_FORMATS.HOURS)),
            yAxis: hourly.temperature_2m.slice(0, 24),
            showLegend: false,
            title: PHRASES.TIME,
          }
        : {
            xAxis: daily.time.map((item: string) =>
              moment(item).format(DATE_FORMATS.MONTH_DAY)
            ),
            yAxis: daily.temperature_2m_max,
            yAxisWeek: daily.temperature_2m_min,
            showLegend: true,
            title: PHRASES.DAYS,
          };

    const trace1 = temperatureChartSettings(
      chartData.xAxis,
      chartData.yAxis,
      'rgb(157,146,227)',
      period === 'today' ? 'tonexty' : 'none',
      period === 'today' ? '' : PHRASES.MAX_TEMPERATURE
    );

    const trace2 = temperatureChartSettings(
      chartData.xAxis,
      chartData.yAxisWeek || [],
      'rgb(163, 28, 77)',
      'none',
      PHRASES.MIN_TEMPERATURE
    );

    const layout = temperatureLayoutSettings(
      chartData.showLegend,
      chartData.title
    );

    const data = period === 'today' ? [trace1] : [trace1, trace2];

    const config = {
      displayModeBar: false,
    };

    return { data, layout, config };
  }, [weather, period])!;
};
