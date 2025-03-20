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
  const weekDay = moment(day).format(DATE_FORMATS.DAY);

  return (
    <S.StyledWrapper>
      <S.TemperatureWrapper>
        <S.TemperatureInfo>
          <img src='./assets/arrow.png' alt='max temperature' />
          {maxTemperature}
          {unit}
        </S.TemperatureInfo>
        <S.TemperatureInfo>
          {minTemperature}
          {unit}
          <img src='./assets/arrow.png' alt='min temperature' />
        </S.TemperatureInfo>
      </S.TemperatureWrapper>
      <S.DayWrapper>
        <WeatherIcon weatherCode={weatherCode} />
        {weekDay}
      </S.DayWrapper>
    </S.StyledWrapper>
  );
};
