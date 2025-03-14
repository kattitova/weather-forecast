import { WEATHER_ICON_DATA } from '../../constants/weatherIconData';
import * as S from './styled';

interface IProps {
  weatherCode: number;
}

export const WeatherIcon: React.FC<IProps> = ({ weatherCode }) => {
  const iconIndex = `icon${weatherCode}` as keyof typeof WEATHER_ICON_DATA;
  return (
    <S.WeatherIconWrapper>
      <img
        src={`./assets/weatherIcons/${weatherCode}.png`}
        alt={WEATHER_ICON_DATA[iconIndex]}
      />
      <span>{WEATHER_ICON_DATA[iconIndex]}</span>
    </S.WeatherIconWrapper>
  );
};
