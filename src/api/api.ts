export const url = 'https://api.open-meteo.com/v1/forecast';

export const params = (lat: number, lon: number) => ({
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

// GET CITY IMAGE FROM UNSPLASH - BE LATER
// const city = 'Kyiv';
// const API_KEY = '6j8Sb6xo1VOeEIVYxolnmnjK72lBJMUHMjRzQmg86zk';
// const url = `https://api.unsplash.com/search/photos?query=${city}&client_id=${API_KEY}`;

// fetch(url)
//   .then((res) => res.json())
//   .then((data) => console.log(data.results[0].urls.regular));
