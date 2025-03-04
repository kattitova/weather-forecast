import {
  IWeatherActionTypes,
  IWeatherData,
} from '../../types/store/weather/types';
import * as types from './types';

const initialState: IWeatherData = {
  weather: null,
  loading: false,
  error: null,
};

export const weatherReducer = (
  state = initialState,
  action: IWeatherActionTypes
): IWeatherData => {
  switch (action.type) {
    case types.GET_WEATHER_REQUEST:
      return { ...state, loading: true, error: null };

    case types.GET_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        weather: action.payload,
      };

    case types.GET_WEATHER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
