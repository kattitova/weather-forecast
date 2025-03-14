import {
  IAddCityAction,
  ICurrentCityData,
  IRemoveCityAction,
  ISetCitiesAction,
  ISetCurrentCityAction,
} from '../../types/store/cities/types';
import * as types from './types';

export const setCities = (cities: ICurrentCityData[]): ISetCitiesAction => ({
  type: types.SET_CITIES,
  payload: cities,
});

export const setCurrentCity = (id: number): ISetCurrentCityAction => ({
  type: types.SET_CURRENT_CITY,
  payload: id,
});

export const addCity = (city: ICurrentCityData): IAddCityAction => ({
  type: types.ADD_CITY,
  payload: city,
});

export const removeCity = (id: number): IRemoveCityAction => ({
  type: types.REMOVE_CITY,
  payload: id,
});
