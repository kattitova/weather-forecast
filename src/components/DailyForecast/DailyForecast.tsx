import moment from 'moment';
import { IThreeDaysForecast } from '../ThreeDaysForecast';
import * as S from './styled';
import { WeatherIcon } from '../WeatherIcon';
import { DATE_FORMATS } from '../../constants/dateFormats';

interface IProps {
  daysData: IThreeDaysForecast;
}

export const DailyForecast: React.FC<IProps> = ({ daysData }) => {
  const { day, maxTemperature, minTemperature, weatherCode, unit } = daysData;
  return (
    <S.StyledWrapper>
      <S.TemperatureWrapper>
        <div>
          <img src='./assets/arrow.png' alt='max temperature' />
          {maxTemperature}
          {unit}
        </div>
        <div>
          {minTemperature}
          {unit}
          <img src='./assets/arrow.png' alt='min temperature' />
        </div>
      </S.TemperatureWrapper>
      <S.DayWrapper>
        <WeatherIcon weatherCode={weatherCode} />
        {moment(day).format(DATE_FORMATS.DAY)}
      </S.DayWrapper>
    </S.StyledWrapper>
  );
};
