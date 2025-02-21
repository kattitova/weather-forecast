import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import { thunk, ThunkDispatch, ThunkMiddleware } from 'redux-thunk';
import { weatherReducer } from './weather/weatherReducer';
import { WeatherActionTypes } from './weather/weatherTypes';
import { currentCityReducer } from './city/currentCityReducer';

export const RootReducer = combineReducers({
  weather: weatherReducer,
  currentCity: currentCityReducer,
});

export const store = createStore(
  RootReducer,
  applyMiddleware(thunk as ThunkMiddleware<RootState, WeatherActionTypes>)
);

export type RootState = ReturnType<typeof RootReducer>;
export type AppDispatch = ThunkDispatch<RootState, void, AnyAction>;
