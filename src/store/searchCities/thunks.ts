import { AppDispatch } from '../store';
import {
  getSearchCitiesFailure,
  getSearchCitiesRequest,
  getSearchCitiesSuccess,
} from './actions';
import * as api from '../../api';

export const getSearchCities = (name: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(getSearchCitiesRequest());

    try {
      const response = await api.getSearchCities(name);
      dispatch(getSearchCitiesSuccess(response.data.results));
    } catch (error) {
      dispatch(getSearchCitiesFailure(`Error loading cities data ${error}`));
    }
  };
};
