import { ISearchCityResponse } from '../../types/api/types';
import {
  ISearchCitiesActionTypes,
  ISetSearchCitiesAction,
} from '../../types/store/searchCities/types';
import * as types from './types';

export const setSearchCities = (
  searchCity: ISearchCityResponse[]
): ISetSearchCitiesAction => ({
  type: types.SET_SEARCH_CITIES,
  payload: searchCity,
});

export const getSearchCitiesRequest = (): ISearchCitiesActionTypes => ({
  type: types.GET_SEARCH_CITIES_REQUEST,
});

export const getSearchCitiesSuccess = (
  data: ISearchCityResponse[]
): ISearchCitiesActionTypes => ({
  type: types.GET_SEARCH_CITIES_SUCCESS,
  payload: data,
});

export const getSearchCitiesFailure = (
  error: string
): ISearchCitiesActionTypes => ({
  type: types.GET_SEARCH_CITIES_FAILURE,
  payload: error,
});
