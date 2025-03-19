import { AppDispatch } from '../store';
import {
  getSearchCitiesFailure,
  getSearchCitiesRequest,
  getSearchCitiesSuccess,
} from './actions';
import * as api from '../../api';
import { AxiosError } from 'axios';

export const getSearchCities = (name: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(getSearchCitiesRequest());

    try {
      const response = await api.getSearchCities(name);
      dispatch(getSearchCitiesSuccess(response.data.results));
    } catch (error) {
      const axiosError = error as AxiosError;
      const errorMessage =
        axiosError.response?.data || axiosError.message || 'Unknown error';
      dispatch(
        getSearchCitiesFailure(`Error loading cities data: ${errorMessage}`)
      );
    }
  };
};
