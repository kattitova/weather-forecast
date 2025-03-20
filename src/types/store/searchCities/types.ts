import { ISearchCityResponse } from '../../api/types';
import * as types from '../../../store/searchCities/types';

export interface ISearchCitiesState {
  cities: ISearchCityResponse[];
  loading: boolean;
  error: string | null;
}

export interface ISetSearchCitiesAction {
  type: typeof types.SET_SEARCH_CITIES;
  payload: ISearchCityResponse[];
}

export interface IGetSearchCitiesFailureAction {
  type: typeof types.GET_SEARCH_CITIES_FAILURE;
  payload: string;
}
export interface IGetSearchCitiesRequestAction {
  type: typeof types.GET_SEARCH_CITIES_REQUEST;
}
export interface IGetSearchCitiesSuccessAction {
  type: typeof types.GET_SEARCH_CITIES_SUCCESS;
  payload: ISearchCityResponse[];
}

export type ISearchCitiesActionTypes =
  | ISetSearchCitiesAction
  | IGetSearchCitiesFailureAction
  | IGetSearchCitiesRequestAction
  | IGetSearchCitiesSuccessAction;
