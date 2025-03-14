import * as types from '../../../store/cities/types';

export interface ICurrentCityData {
  cityId: number;
  cityName: string;
  countryCode: string;
  latitude: number;
  longitude: number;
  image: string;
  pin: boolean;
}

export interface ICitiesState {
  data: ICurrentCityData[];
}

export interface ISetCitiesAction {
  type: typeof types.SET_CITIES;
  payload: ICurrentCityData[];
}

export interface ISetCurrentCityAction {
  type: typeof types.SET_CURRENT_CITY;
  payload: number;
}

export interface IAddCityAction {
  type: typeof types.ADD_CITY;
  payload: ICurrentCityData;
}

export interface IRemoveCityAction {
  type: typeof types.REMOVE_CITY;
  payload: number;
}

export type ICitiesActionTypes =
  | ISetCitiesAction
  | IAddCityAction
  | IRemoveCityAction
  | ISetCurrentCityAction;
