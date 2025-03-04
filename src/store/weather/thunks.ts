import { AppDispatch } from '../store';
import axios from 'axios';
import { weatherUrl, weatherParams } from '../../api';
import {
  getWeatherFailure,
  getWeatherRequest,
  getWeatherSuccess,
} from './actions';

export const getWeather = (lat: number, lon: number) => {
  return async (dispatch: AppDispatch) => {
    dispatch(getWeatherRequest());
    try {
      const response = await axios.get(weatherUrl, weatherParams(lat, lon));
      dispatch(getWeatherSuccess(response.data));
    } catch (error) {
      dispatch(getWeatherFailure(`Error loading weather data ${error}`));
    }
  };
};
