import {
  CurrentCityData,
  AddCity,
  ADD_CITY,
  RemoveCity,
  REMOVE_CITY,
  SET_CITIES,
  SetCitiesAction,
  SetCurrentCity,
  SET_CURRENT_CITY,
  SetSearchCities,
  SET_SEARCH_CITIES,
  SearchCity,
} from './citiesTypes';

export const setCities = (cities: CurrentCityData[]): SetCitiesAction => ({
  type: SET_CITIES,
  payload: cities,
});

export const setCurrentCity = (id: number): SetCurrentCity => ({
  type: SET_CURRENT_CITY,
  payload: id,
});

export const addCity = (city: CurrentCityData): AddCity => ({
  type: ADD_CITY,
  payload: city,
});

export const removeCity = (id: number): RemoveCity => ({
  type: REMOVE_CITY,
  payload: id,
});

export const setSearchCities = (searchCity: SearchCity[]): SetSearchCities => ({
  type: SET_SEARCH_CITIES,
  payload: searchCity,
});
