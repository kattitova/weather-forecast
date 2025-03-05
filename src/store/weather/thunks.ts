import { AppDispatch } from '../store';
import {
  getWeatherFailure,
  getWeatherRequest,
  getWeatherSuccess,
} from './actions';
import * as api from '../../api';

export const getWeather = (lat: number, lon: number) => {
  return async (dispatch: AppDispatch) => {
    dispatch(getWeatherRequest());
    try {
      const response = await api.getWeather(lat, lon);
      dispatch(getWeatherSuccess(response.data));
    } catch (error) {
      dispatch(getWeatherFailure(`Error loading weather data ${error}`));
    }
  };
};
