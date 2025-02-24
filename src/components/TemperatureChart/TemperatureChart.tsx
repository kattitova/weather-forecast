import { useSelector } from 'react-redux';
import { CurrentCityData, RootState } from '../../store';
import { useEffect, useMemo, useRef } from 'react';
import Plotly from 'plotly.js-dist';
import moment from 'moment';
import {
  temperatureChartSettings,
  temperatureLayoutSettings,
} from '../../types';

interface IProps {
  period: 'today' | 'week';
}

export const TemperatureChart: React.FC<IProps> = ({ period }: IProps) => {
  const todayRef = useRef<HTMLDivElement>(null);

  const city: CurrentCityData = useSelector(
    (state: RootState) => state.currentCity.city
  );

  const { weather } = city;

  const chartData = useMemo(() => {
    const daily = weather?.daily;
    const hourly = weather?.hourly;
    if (!daily || !hourly) return;

    if (period === 'today') {
      return {
        xAxis: hourly.time
          .slice(0, 24)
          .map((item: string) => moment(item).format('h a')),
        yAxis: hourly.temperature_2m.slice(0, 24),
        yAxisWeek: [],
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
  }, [weather, period])!;

  useEffect(() => {
    if (!chartData && !todayRef.current) return;

    const trace1 = temperatureChartSettings(
      chartData.xAxis,
      chartData.yAxis,
      'rgb(157,146,227)',
      period === 'today' ? 'tonexty' : 'none',
      period === 'today' ? '' : 'Max Temperature'
    );

    const trace2 = temperatureChartSettings(
      chartData.xAxis,
      chartData.yAxisWeek,
      'rgb(163, 28, 77)',
      'none',
      'Min Temperature'
    );

    const layout = temperatureLayoutSettings(
      chartData.showLegend,
      chartData.title
    );

    const data = period === 'today' ? [trace1] : [trace1, trace2];

    const config = {
      displayModeBar: false,
    };

    if (todayRef.current)
      Plotly.newPlot(todayRef.current, data, layout, config);
  }, [chartData, period]);

  if (!weather) {
    return <p>Loading...</p>;
  }

  return <div ref={todayRef}></div>;
};
