import { ApiWeatherData, SearchCity } from '../../api/apiResponseType';

export interface CurrentCityData {
  cityId: number;
  cityName: string;
  countryCode: string;
  latitude: number;
  longitude: number;
  image: string;
  pin: boolean;
  weather: ApiWeatherData | null;
}

export interface SearchCities {
  results: SearchCity[];
}

export interface CitiesState {
  cities: CurrentCityData[];
  searchCities: SearchCity[];
}

export const SET_CITIES = 'SET_CITIES';
export const ADD_CITY = 'ADD_CITY';
export const REMOVE_CITY = 'REMOVE_CITY';
export const GET_CURRENT_CITY = 'GET_CURRENT_CITY';
export const SET_CURRENT_CITY = 'SET_CURRENT_CITY';
export const SET_SEARCH_CITIES = 'SET_SEARCH_CITIES';

export interface SetCitiesAction {
  type: typeof SET_CITIES;
  payload: CurrentCityData[];
}

export interface SetCurrentCity {
  type: typeof SET_CURRENT_CITY;
  payload: number;
}

export interface AddCity {
  type: typeof ADD_CITY;
  payload: CurrentCityData;
}

export interface RemoveCity {
  type: typeof REMOVE_CITY;
  payload: number;
}

export interface SetSearchCities {
  type: typeof SET_SEARCH_CITIES;
  payload: SearchCity[];
}

export type CitiesActionTypes =
  | SetCitiesAction
  | AddCity
  | RemoveCity
  | SetCurrentCity
  | SetSearchCities;
