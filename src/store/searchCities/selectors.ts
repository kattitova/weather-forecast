import { createSelector } from 'reselect';
import { RootState } from '../store';

const getSearchCitiesState = (state: RootState) => state.searchCities;

export const selectSearchCities = createSelector(
  getSearchCitiesState,
  (state) => state.cities
);

export const selectSearchCitiesLoading = createSelector(
  getSearchCitiesState,
  (state) => state.loading
);
