import { createSelector } from 'reselect';
import { RootState } from '../store';
import { initialCityData } from '../../constants';

const getCitiesState = (state: RootState) => state.cities;

export const selectCitiesList = createSelector(
  getCitiesState,
  (state) => state.cities
);

export const selectCurrentCity = createSelector(
  getCitiesState,
  (state) => state.cities.find((city) => city.pin) || initialCityData
);

export const selectCurrentCityName = createSelector(
  selectCurrentCity,
  (state) => state.cityName
);

export const selectCurrentCityCountryCode = createSelector(
  selectCurrentCity,
  (state) => state.countryCode
);

export const selectCurrentCityImage = createSelector(
  selectCurrentCity,
  (state) => state.image
);
