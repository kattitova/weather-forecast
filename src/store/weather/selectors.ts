import { createSelector } from 'reselect';
import { RootState } from '../store';
import { ICurrentResponse, ICurrentUnitsResponse } from '../../types/api/types';

const getWeatherState = (state: RootState) => state.weather;

export const selectWeather = createSelector(
  getWeatherState,
  (state) => state.weather
);

export const selectWeatherLoading = createSelector(
  getWeatherState,
  (state) => state.loading
);

export const selectWeatherCurrent = createSelector(
  selectWeather,
  (state) => state?.current ?? ({} as ICurrentResponse)
);

export const selectWeatherCurrentUnits = createSelector(
  selectWeather,
  (state) => state?.current_units ?? ({} as ICurrentUnitsResponse)
);
