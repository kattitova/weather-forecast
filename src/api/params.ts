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

export const citiesParams = (name: string) => ({
  params: {
    name: name,
    count: 10,
    language: 'en',
    format: 'json',
  },
});
