import { createSelector } from 'reselect';
import { RootState } from '../store';

export const getSearchCitiesState = (state: RootState) => state.searchCities;

export const selectSearchCities = createSelector(
  getSearchCitiesState,
  (state) => state.data
);

export const selectSearchCitiesLoading = createSelector(
  getSearchCitiesState,
  (state) => state.loading
);
