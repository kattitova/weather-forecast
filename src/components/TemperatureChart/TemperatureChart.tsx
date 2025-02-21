import { useSelector } from 'react-redux';
import { CurrentCityData, RootState } from '../../store';
import { useEffect, useRef } from 'react';
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

  useEffect(() => {
    if (!weather && !todayRef.current) return;

    const daily = weather?.daily;
    const hourly = weather?.hourly;
    if (!daily || !hourly) return;

    let xAxis: string[];
    let yAxis: number[];
    let yAxis1: number[] = [];

    switch (period) {
      case 'today':
        xAxis = hourly.time
          .slice(0, 24)
          .map((item: string) => moment(item).format('h a'));
        yAxis = hourly.temperature_2m.slice(0, 24);
        break;
      case 'week':
        xAxis = daily.time.map((item: string) => moment(item).format('MMM D'));
        yAxis = daily.temperature_2m_max;
        yAxis1 = daily.temperature_2m_min;
        break;
      default:
        return;
    }

    const trace1 = temperatureChartSettings(
      xAxis,
      yAxis,
      'rgb(157,146,227)',
      period === 'today' ? 'tonexty' : 'none',
      period === 'today' ? '' : 'Max Temperature'
    );
    const trace2 = temperatureChartSettings(
      xAxis,
      yAxis1,
      'rgb(163, 28, 77)',
      'none',
      'Min Temperature'
    );
    const layout = temperatureLayoutSettings(period === 'today' ? false : true);

    const data = period === 'today' ? [trace1] : [trace1, trace2];

    const config = {
      displayModeBar: false,
    };

    if (todayRef.current)
      Plotly.newPlot(todayRef.current, data, layout, config);
  }, [weather, period]);

  if (!weather) {
    return <p>Loading...</p>;
  }

  return <div ref={todayRef}></div>;
};
