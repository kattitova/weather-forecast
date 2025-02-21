import moment from 'moment';
import { IThreeDaysForecast } from '../ThreeDaysForecast';
import * as S from './styled';
import { WeatherIcon } from '../WeatherIcon';

interface IProps {
  daysData: IThreeDaysForecast;
}

export const DailyForecast: React.FC<IProps> = ({ daysData }: IProps) => {
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
          <img
            src='./assets/arrow.png'
            alt='min temperature'
            style={{ rotate: '180deg' }}
          />
          {minTemperature}
          {unit}
        </div>
      </S.TemperatureWrapper>
      <S.DayWrapper>
        {moment(day).format('dddd')}
        <WeatherIcon weatherCode={weatherCode} />
      </S.DayWrapper>
    </S.StyledWrapper>
  );
};
