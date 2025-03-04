import * as types from '../../../store/cities/types';

export interface ICurrentCityData {
  cityId: number;
  cityName: string;
  countryCode: string;
  latitude: number;
  longitude: number;
  image: string;
  pin: boolean;
  // weather: IWeatherDataResponse | null;
}

// export interface ISearchCitiesData {
//   cities: ISearchCityResponse[];
//   loading: boolean;
//   error: string | null;
// }

export interface ICitiesState {
  cities: ICurrentCityData[];
  // searchCities: ISearchCitiesData;
}

// export interface ICitiesState {
//   cities: ICurrentCityData[];
//   searchCities: ISearchCityResponse[];
// }

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

// export interface ISetSearchCitiesAction {
//   type: typeof types.SET_SEARCH_CITIES;
//   payload: ISearchCityResponse[];
// }

// export interface IGetSearchCitiesFailureAction {
//   type: typeof types.GET_SEARCH_CITIES_FAILURE;
//   payload: string;
// }
// export interface IGetSearchCitiesRequestAction {
//   type: typeof types.GET_SEARCH_CITIES_REQUEST;
// }
// export interface IGetSearchCitiesSuccessAction {
//   type: typeof types.GET_SEARCH_CITIES_SUCCESS;
//   payload: ISearchCityResponse[];
// }

export type ICitiesActionTypes =
  | ISetCitiesAction
  | IAddCityAction
  | IRemoveCityAction
  | ISetCurrentCityAction;
// | ISetSearchCitiesAction
// | IGetSearchCitiesFailureAction
// | IGetSearchCitiesRequestAction
// | IGetSearchCitiesSuccessAction;
