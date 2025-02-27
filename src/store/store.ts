import {
  AnyAction,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { citiesReducer } from './cities/citiesReducer';

export const RootReducer = combineReducers({
  cities: citiesReducer,
});

export const store = createStore(RootReducer);

export type RootState = ReturnType<typeof RootReducer>;
export type AppDispatch = ThunkDispatch<RootState, void, AnyAction>;
