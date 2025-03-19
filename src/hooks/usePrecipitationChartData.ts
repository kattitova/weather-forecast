import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import moment from 'moment';
import { selectWeather } from '../store/weather/selectors';
import { PHRASES } from '../constants/phrases';
import { DATE_FORMATS } from '../constants/dateFormats';

export interface IChartData {
  xAxis: number[];
  yAxis: string[];
  showLegend: boolean;
  title: string;
  units?: string;
}

export const usePrecipitationChartData = () => {
  const weather = useSelector(selectWeather);

  return useMemo(() => {
    if (!weather) return;

    const daily = weather?.daily;
    const daily_units = weather?.daily_units;

    if (!daily || !daily_units) return;

    const chartData = {
      yAxis: daily.time.map((item: string) =>
        moment(item).format(DATE_FORMATS.MONTH_DAY)
      ),
      xAxis: daily.precipitation_probability_max,
      units: String(daily_units.precipitation_probability_max),
      showLegend: false,
      title: PHRASES.DAYS,
    };

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
          text: `${PHRASES.PRECIPITATION} (${chartData.units})`,
          font: {
            family: 'Helvetica, Arial, sans-serif',
            size: 12,
          },
        },
        range: [0, 100],
        tickmode: 'array',
        tickvals: [0, 50, 100],
        ticktext: [
          PHRASES.TICK_TEXT_SUNNY,
          PHRASES.TICK_TEXT_RAINY,
          PHRASES.TICK_TEXT_HEAVY_RAIN,
        ],
        showgrid: true,
        tickfont: {
          size: 10,
        },
      },
      yaxis: {
        title: {
          text: PHRASES.DAYS,
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

    return {
      trace,
      layout,
      config,
    };
  }, [weather])!;
};
