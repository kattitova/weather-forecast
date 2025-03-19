import { useEffect, useRef } from 'react';
import Plotly from 'plotly.js-dist';
import { useTemperatureChartData } from '../../hooks';
import { PHRASES } from '../../constants/phrases';

interface IProps {
  period: 'today' | 'week';
}

export const TemperatureChart: React.FC<IProps> = ({ period }) => {
  const todayRef = useRef<HTMLDivElement>(null);

  const chartData = useTemperatureChartData(period);

  useEffect(() => {
    if (!chartData) return;
    const { data, layout, config } = chartData;

    if (todayRef.current)
      Plotly.newPlot(todayRef.current, data, layout, config);
  }, [chartData, period]);

  if (!chartData) return <p>{PHRASES.LOADING}</p>;

  return <div ref={todayRef}></div>;
};
