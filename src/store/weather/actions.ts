import { IWeatherDataResponse } from '../../types/api/types';
import { IWeatherActionTypes } from '../../types/store/weather/types';
import * as types from './types';

export const getWeatherRequest = (): IWeatherActionTypes => ({
  type: types.GET_WEATHER_REQUEST,
});

export const getWeatherSuccess = (
  data: IWeatherDataResponse
): IWeatherActionTypes => ({
  type: types.GET_WEATHER_SUCCESS,
  payload: data,
});

export const getWeatherFailure = (error: string): IWeatherActionTypes => ({
  type: types.GET_WEATHER_FAILURE,
  payload: error,
});
