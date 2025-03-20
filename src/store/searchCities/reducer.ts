import { ISearchCityResponse } from '../../types/api/types';
import { ISearchCitiesActionTypes } from '../../types/store/searchCities/types';
import { IStoreAsyncElement } from '../../types/store/types';
import * as types from './types';

const initialState: IStoreAsyncElement<ISearchCityResponse[]> = {
  data: null,
  loading: false,
  error: null,
};

export const searchCitiesReducer = (
  state = initialState,
  action: ISearchCitiesActionTypes
): IStoreAsyncElement<ISearchCityResponse[]> => {
  switch (action.type) {
    case types.SET_SEARCH_CITIES:
      return { ...state, data: action.payload };

    case types.GET_SEARCH_CITIES_REQUEST:
      return { ...state, loading: true, error: null };

    case types.GET_SEARCH_CITIES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case types.GET_SEARCH_CITIES_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
