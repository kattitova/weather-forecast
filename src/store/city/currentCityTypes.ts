import { ApiWeatherData } from '../weather/apiResponseType';

export interface CurrentCityData {
  cityId: string;
  cityName: string;
  countryCode: string;
  latitude: number;
  longitude: number;
  weather: ApiWeatherData | null;
}

export interface CurrentCityState {
  city: CurrentCityData;
}

export const SET_CURRENT_CITY = 'SET_CURRENT_CITY';
export const SET_CURRENT_CITY_WEATHER = 'SET_CURRENT_CITY_WEATHER';

export interface SetCurrentCityAction {
  type: typeof SET_CURRENT_CITY;
  payload: CurrentCityData;
}

export interface SetCurrentCityWeatherAction {
  type: typeof SET_CURRENT_CITY_WEATHER;
  payload: ApiWeatherData;
}

export type CurrentCityActionTypes =
  | SetCurrentCityAction
  | SetCurrentCityWeatherAction;
