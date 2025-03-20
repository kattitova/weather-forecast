import { initialCityData } from '../../constants';
import {
  ICitiesActionTypes,
  ICitiesState,
} from '../../types/store/cities/types';
import * as types from './types';

export const initialState: ICitiesState = {
  data: [initialCityData],
};

export const citiesReducer = (
  state = initialState,
  action: ICitiesActionTypes
): ICitiesState => {
  switch (action.type) {
    case types.SET_CITIES:
      return { ...state, data: action.payload };

    case types.SET_CURRENT_CITY:
      return {
        ...state,
        data: state.data.map((city) =>
          city.cityId === action.payload
            ? { ...city, pin: true }
            : { ...city, pin: false }
        ),
      };

    case types.ADD_CITY:
      if (state.data.some((city) => city.cityId === action.payload.cityId)) {
        return state;
      }
      return { ...state, data: [...state.data, action.payload] };

    case types.REMOVE_CITY:
      return {
        ...state,
        data: state.data.filter((city) => city.cityId !== action.payload),
      };

    default:
      return state;
  }
};
