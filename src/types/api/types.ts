export interface ICurrentUnitsResponse {
  time: string;
  interval: string;
  temperature_2m: string;
  precipitation: string;
  rain: string;
  wind_speed_10m: string;
  relative_humidity_2m: string;
}

export interface ICurrentResponse {
  time: string;
  interval: number;
  temperature_2m: number;
  precipitation: number;
  rain: number;
  weather_code: number;
  wind_speed_10m: number;
  relative_humidity_2m: number;
}

export interface IHourlyUnitsResponse {
  time: string;
  temperature_2m: string;
  precipitation_probability: string;
}

export interface IHourlyResponse {
  time: string[];
  temperature_2m: number[];
  precipitation_probability: number[];
}

export interface IDailyUnitsResponse {
  time: string;
  sunrise: string;
  sunset: string;
  precipitation_hours: string;
  wind_speed_10m_max: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  precipitation_probability_max: number;
}

export interface IDailyResponse {
  time: string[];
  sunrise: string[];
  sunset: string[];
  precipitation_probability_max: number[];
  wind_speed_10m_max: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  weather_code: number[];
}

export interface IWeatherDataResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: ICurrentUnitsResponse;
  current: ICurrentResponse;
  hourly_units: IHourlyUnitsResponse;
  hourly: IHourlyResponse;
  daily_units: IDailyUnitsResponse;
  daily: IDailyResponse;
}

export interface ISearchCityResponse {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  elevation: number;
  feature_code: string;
  country_code: string;
  admin1_id: number;
  admin2_id: number;
  admin3_id: number;
  admin4_id: number;
  timezone: string;
  population: number;
  postcodes: string[];
  country_id: number;
  country: string;
  admin1: string;
  admin2: string;
  admin3: string;
  admin4: string;
}
