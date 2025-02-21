import {
  GET_WEATHER_FAILURE,
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  WeatherActionTypes,
} from './weatherTypes';
import axios from 'axios';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../store';

const api = axios.create({
  baseURL: 'https://api.open-meteo.com/v1',
});

export const getWeather = (
  lat: number,
  lon: number,
  cityID: string,
  cityName: string
) => {
  return async (
    dispatch: ThunkDispatch<RootState, void, WeatherActionTypes>,
    getState: () => RootState
  ) => {
    const { cities } = getState().weather;
    if (cities.some((city) => city.id === cityID)) {
      console.log(
        `City with ID ${cityID} already stored, api request don't apply`
      );
      return;
    }

    dispatch({ type: GET_WEATHER_REQUEST });

    try {
      const response = await api.get(
        `/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,precipitation,rain,weather_code,wind_speed_10m&hourly=temperature_2m,precipitation_probability&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max,wind_speed_10m_max`
      );

      const weatherData = {
        id: cityID,
        city: cityName,
        weatherData: response.data,
      };

      dispatch({ type: GET_WEATHER_SUCCESS, payload: weatherData });
    } catch (error) {
      dispatch({
        type: GET_WEATHER_FAILURE,
        payload: `Error loading weather data ${error}`,
      });
    }
  };
};
