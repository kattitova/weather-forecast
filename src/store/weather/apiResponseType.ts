interface Currentunits {
  time: string;
  interval: string;
  temperature_2m: string;
  precipitation: string;
  rain: string;
  wind_speed_10m: string;
  relative_humidity_2m: string;
}

interface Current {
  time: string;
  interval: number;
  temperature_2m: number;
  precipitation: number;
  rain: number;
  weather_code: number;
  wind_speed_10m: number;
  relative_humidity_2m: number;
}

interface Hourlyunits {
  time: string;
  temperature_2m: string;
  precipitation_probability: string;
}

interface Hourly {
  time: string[];
  temperature_2m: number[];
  precipitation_probability: number[];
}

interface Dailyunits {
  time: string;
  sunrise: string;
  sunset: string;
  precipitation_hours: string;
  wind_speed_10m_max: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  precipitation_probability_max: number;
}

interface Daily {
  time: string[];
  sunrise: string[];
  sunset: string[];
  precipitation_probability_max: number[];
  wind_speed_10m_max: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  weather_code: number[];
}

export interface ApiWeatherData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: Currentunits;
  current: Current;
  hourly_units: Hourlyunits;
  hourly: Hourly;
  daily_units: Dailyunits;
  daily: Daily;
}
