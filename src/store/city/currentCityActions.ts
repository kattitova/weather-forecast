import { ApiWeatherData } from '../weather/apiResponseType';
import {
  CurrentCityData,
  SET_CURRENT_CITY,
  SET_CURRENT_CITY_WEATHER,
  SetCurrentCityAction,
  SetCurrentCityWeatherAction,
} from './currentCityTypes';

export const setCurrentCity = (
  city: CurrentCityData
): SetCurrentCityAction => ({
  type: SET_CURRENT_CITY,
  payload: city,
});

export const setCurrentCityWeather = (
  weather: ApiWeatherData
): SetCurrentCityWeatherAction => ({
  type: SET_CURRENT_CITY_WEATHER,
  payload: weather,
});
