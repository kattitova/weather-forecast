import {
  ISearchCitiesActionTypes,
  ISearchCitiesState,
} from '../../types/store/searchCities/types';
import * as types from './types';

export const initialState: ISearchCitiesState = {
  cities: [],
  loading: false,
  error: null,
};

export const searchCitiesReducer = (
  state = initialState,
  action: ISearchCitiesActionTypes
): ISearchCitiesState => {
  switch (action.type) {
    case types.SET_SEARCH_CITIES:
      return { ...state, cities: action.payload };

    case types.GET_SEARCH_CITIES_REQUEST:
      return { ...state, loading: true, error: null };

    case types.GET_SEARCH_CITIES_SUCCESS:
      return {
        ...state,
        loading: false,
        cities: action.payload,
      };

    case types.GET_SEARCH_CITIES_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
