import axios from 'axios';
import { citiesParams, weatherParams } from './params';
import { IWeatherDataResponse } from '../types/api/types';

export const weatherUrl = 'https://api.open-meteo.com/v1/forecast';
export const citiesUrl = 'https://geocoding-api.open-meteo.com/v1/search';

export const getWeather = async (lat: number, lon: number) =>
  await axios.get<IWeatherDataResponse>(weatherUrl, weatherParams(lat, lon));

export const getSearchCities = async (name: string) =>
  await axios.get(citiesUrl, citiesParams(name));

export const getImage = async (cityName: string) => {
  const API_KEY = '6j8Sb6xo1VOeEIVYxolnmnjK72lBJMUHMjRzQmg86zk';
  const imageUrl = 'https://api.unsplash.com/search/photos';
  const params = {
    params: {
      query: cityName,
      client_id: API_KEY,
    },
  };
  try {
    const response = await axios.get(imageUrl, params);
    return response.data;
  } catch (error) {
    console.log('Error fetch city image', error);
  }
};
