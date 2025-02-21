import { useEffect, useRef } from 'react';
import { CurrentCityData, RootState } from '../../store';
import { useSelector } from 'react-redux';
import moment from 'moment';
import Plotly from 'plotly.js-dist';
import * as S from './styled';

export const RainChance = () => {
  const todayRef = useRef<HTMLDivElement>(null);

  const city: CurrentCityData = useSelector(
    (state: RootState) => state.currentCity.city
  );

  const weather = city?.weather;

  useEffect(() => {
    if (!weather && !todayRef.current) return;

    const daily = weather?.daily;
    const daily_units = weather?.daily_units;
    if (!daily || !daily_units) return;

    const yAxis: string[] = daily.time.map((item: string) =>
      moment(item).format('MMM D')
    );
    const xAxis: number[] = daily.precipitation_probability_max;

    const mes = daily_units.precipitation_probability_max;

    const trace: Partial<Plotly.Data>[] = [
      {
        x: xAxis,
        y: yAxis,
        type: 'bar',
        orientation: 'h',
        marker: { color: 'rgb(157,146,227)' },
        hovertemplate: `(%{y}, %{x}${mes})<extra></extra>`,
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
          text: `Precipitation (${mes})`,
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
  }, [weather]);

  if (!weather) {
    return <p>Loading...</p>;
  }

  return (
    <S.StyledWrapper>
      <h3>Chance of Precipitation</h3>
      <div ref={todayRef}></div>
    </S.StyledWrapper>
  );
};
