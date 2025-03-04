import { useEffect, useRef } from 'react';
import Plotly from 'plotly.js-dist';
import {
  temperatureChartSettings,
  temperatureLayoutSettings,
} from '../../utils';
import { ITemperatureChartData, useTemperatureChartData } from '../../hooks';
import { PHRASES } from '../../constants/phrases';

interface IProps {
  period: 'today' | 'week';
}

export const TemperatureChart: React.FC<IProps> = ({ period }: IProps) => {
  const todayRef = useRef<HTMLDivElement>(null);

  const chartData: ITemperatureChartData = useTemperatureChartData(period);

  useEffect(() => {
    if (!chartData && !todayRef.current) return;

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

    if (todayRef.current)
      Plotly.newPlot(todayRef.current, data, layout, config);
  }, [chartData, period]);

  if (!chartData) return <p>{PHRASES.LOADING}</p>;

  return <div ref={todayRef}></div>;
};
