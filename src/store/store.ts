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

export const RootReducer = combineReducers({
  cities: citiesReducer,
  weather: weatherReducer,
  searchCities: searchCitiesReducer,
});

export const store = createStore(
  RootReducer,
  undefined, //preloadedState ??
  applyMiddleware(thunk)
);

export type RootState = ReturnType<typeof RootReducer>;
export type AppDispatch = ThunkDispatch<RootState, void, AnyAction>;
