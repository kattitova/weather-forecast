import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import { thunk, ThunkDispatch } from 'redux-thunk';
import { citiesReducer } from './cities/reducer';
import { weatherReducer } from './weather/reducer';
import { searchCitiesReducer } from './searchCities/reducer';
import { loadState, saveState } from '../utils';

export const RootReducer = combineReducers({
  cities: citiesReducer,
  weather: weatherReducer,
  searchCities: searchCitiesReducer,
});

export const store = createStore(
  RootReducer,
  loadState('cities'), //preloadedState
  applyMiddleware(thunk)
);

store.subscribe(() => {
  saveState(store.getState(), 'cities');
});

export type RootState = ReturnType<typeof RootReducer>;
export type AppDispatch = ThunkDispatch<RootState, void, AnyAction>;
