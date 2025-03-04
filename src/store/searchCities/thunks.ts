import { AppDispatch } from '../store';
import axios from 'axios';
import { citiesUrl, citiesParams } from '../../api';
import {
  getSearchCitiesFailure,
  getSearchCitiesRequest,
  getSearchCitiesSuccess,
} from './actions';

export const getSearchCities = (name: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(getSearchCitiesRequest());

    try {
      const response = await axios.get(citiesUrl, citiesParams(name));
      dispatch(getSearchCitiesSuccess(response.data.results));
    } catch (error) {
      dispatch(getSearchCitiesFailure(`Error loading cities data ${error}`));
    }
  };
};
