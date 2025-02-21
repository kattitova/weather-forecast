import { ApiWeatherData } from './apiResponseType';

export interface WeatherData {
  id: string;
  city: string;
  weatherData: ApiWeatherData;
}

export interface WeatherState {
  cities: WeatherData[];
  loading: boolean;
  error: string | null;
}

export const GET_WEATHER_REQUEST = 'GET_WEATHER_REQUEST';
export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
export const GET_WEATHER_FAILURE = 'GET_WEATHER_FAILURE';

interface GetWeatherRequestAction {
  type: typeof GET_WEATHER_REQUEST;
}

interface GetWeatherSuccessAction {
  type: typeof GET_WEATHER_SUCCESS;
  payload: WeatherData;
}

interface GetWeatherFailureAction {
  type: typeof GET_WEATHER_FAILURE;
  payload: string;
}

export type WeatherActionTypes =
  | GetWeatherRequestAction
  | GetWeatherSuccessAction
  | GetWeatherFailureAction;
