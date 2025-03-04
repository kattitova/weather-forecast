import axios from 'axios';

export const weatherUrl = 'https://api.open-meteo.com/v1/forecast';

export const weatherParams = (lat: number, lon: number) => ({
  params: {
    latitude: lat,
    longitude: lon,
    current:
      'temperature_2m,relative_humidity_2m,precipitation,rain,weather_code,wind_speed_10m',
    hourly: 'temperature_2m,precipitation_probability',
    daily:
      'weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max,wind_speed_10m_max',
  },
});

export const citiesUrl = 'https://geocoding-api.open-meteo.com/v1/search';

export const citiesParams = (name: string) => ({
  params: {
    name: name,
    count: 10,
    language: 'en',
    format: 'json',
  },
});

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
