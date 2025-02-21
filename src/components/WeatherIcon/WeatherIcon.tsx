import { weatherIconData } from './weatherIconData';
import * as S from './styled';

interface IProps {
  weatherCode: number;
}

export const WeatherIcon: React.FC<IProps> = ({ weatherCode }: IProps) => {
  const iconIndex = `icon${weatherCode}` as keyof typeof weatherIconData;
  return (
    <S.WeatherIconWrapper>
      <img
        src={`./assets/weatherIcons/${weatherCode}.png`}
        alt={weatherIconData[iconIndex]}
      />
      <span>{weatherIconData[iconIndex]}</span>
    </S.WeatherIconWrapper>
  );
};
