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

    return {
      yAxis: daily.time.map((item: string) =>
        moment(item).format(DATE_FORMATS.MONTH_DAY)
      ),
      xAxis: daily.precipitation_probability_max,
      units: String(daily_units.precipitation_probability_max),
      showLegend: false,
      title: PHRASES.DAYS,
    };
  }, [weather])!;
};
