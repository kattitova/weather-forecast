import {
  GET_WEATHER_FAILURE,
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  WeatherActionTypes,
} from './weatherTypes';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../store';
import { params, url } from '../../api';
import axios from 'axios';

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
      const response = await axios.get(url, params(lat, lon));

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
