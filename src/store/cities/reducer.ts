import {
  ICitiesActionTypes,
  ICitiesState,
} from '../../types/store/cities/types';
import * as types from './types';

const initialState: ICitiesState = {
  cities: [],
};

export const citiesReducer = (
  state = initialState,
  action: ICitiesActionTypes
): ICitiesState => {
  switch (action.type) {
    case types.SET_CITIES:
      return { ...state, cities: action.payload };

    case types.SET_CURRENT_CITY:
      return {
        ...state,
        cities: state.cities.map((city) =>
          city.cityId === action.payload
            ? { ...city, pin: true }
            : { ...city, pin: false }
        ),
      };

    case types.ADD_CITY:
      if (state.cities.some((city) => city.cityId === action.payload.cityId)) {
        return state;
      }
      return { ...state, cities: [...state.cities, action.payload] };

    case types.REMOVE_CITY:
      return {
        ...state,
        cities: state.cities.filter((city) => city.cityId !== action.payload),
      };

    default:
      return state;
  }
};
