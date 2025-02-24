import { useEffect, useRef } from 'react';
import Plotly from 'plotly.js-dist';
import * as S from './styled';
import { useChartData } from '../../hooks';

export const RainChance = () => {
  const todayRef = useRef<HTMLDivElement>(null);

  const chartData = useChartData('precipitation');

  useEffect(() => {
    if (!chartData && !todayRef.current) return;

    const trace: Partial<Plotly.Data>[] = [
      {
        x: chartData.xAxis,
        y: chartData.yAxis,
        type: 'bar',
        orientation: 'h',
        marker: { color: 'rgb(157,146,227)' },
        hovertemplate: `(%{y}, %{x}${chartData.units})<extra></extra>`,
      },
    ];

    const layout: Partial<Plotly.Layout> = {
      margin: {
        l: 60,
        r: 50,
        b: 30,
        t: 20,
        pad: 4,
      },
      xaxis: {
        title: {
          text: `Precipitation (${chartData.units})`,
          font: {
            family: 'Helvetica, Arial, sans-serif',
            size: 12,
          },
        },
        range: [0, 100],
        tickmode: 'array',
        tickvals: [0, 50, 100],
        ticktext: ['Sunny', 'Rainy', 'Heavy Rain'],
        showgrid: true,
        tickfont: {
          size: 10,
        },
      },
      yaxis: {
        title: {
          text: 'Days',
          font: {
            family: 'Helvetica, Arial, sans-serif',
            size: 12,
          },
          standoff: 20,
        },
        showgrid: true,
        tickfont: {
          size: 10,
        },
      },
      barcornerradius: 5,
      height: 400,
      plot_bgcolor: '#f6f4fc',
      paper_bgcolor: '#f6f4fc',
    };

    const config = {
      displayModeBar: false,
    };

    if (todayRef.current)
      Plotly.newPlot(todayRef.current, trace, layout, config);
  }, [chartData]);

  if (!chartData) {
    return <p>Loading...</p>;
  }

  return (
    <S.StyledWrapper>
      <h3>Chance of Precipitation</h3>
      <div ref={todayRef}></div>
    </S.StyledWrapper>
  );
};
