import { IWeatherDataResponse } from '../../types/api/types';
import { IStoreAsyncElement } from '../../types/store/types';
import { IWeatherActionTypes } from '../../types/store/weather/types';
import * as types from './types';

const initialState: IStoreAsyncElement<IWeatherDataResponse> = {
  data: null,
  loading: false,
  error: null,
};

export const weatherReducer = (
  state = initialState,
  action: IWeatherActionTypes
): IStoreAsyncElement<IWeatherDataResponse> => {
  switch (action.type) {
    case types.GET_WEATHER_REQUEST:
      return { ...state, loading: true, error: null };

    case types.GET_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case types.GET_WEATHER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
