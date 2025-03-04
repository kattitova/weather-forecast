import {
  ICitiesActionTypes,
  ICitiesState,
  ICurrentCityData,
} from '../../types/store/cities/types';
import * as types from './types';

export const initialCityData: ICurrentCityData = {
  cityId: 703448,
  cityName: 'Kyiv',
  countryCode: 'UA',
  latitude: 50.4547,
  longitude: 30.5238,
  image: 'kyiv.jpg',
  pin: true,
  // weather: null,
};

const initialState = {
  cities: [],
  // searchCities: {
  //   cities: [],
  //   loading: false,
  //   error: null,
  // },
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
        cities: state.cities.map((city: ICurrentCityData) =>
          city.cityId === action.payload
            ? { ...city, pin: true }
            : { ...city, pin: false }
        ),
      };

    case types.ADD_CITY:
      if (
        state.cities.some(
          (city: ICurrentCityData) => city.cityId === action.payload.cityId
        )
      ) {
        return state;
      }
      return { ...state, cities: [...state.cities, action.payload] };

    case types.REMOVE_CITY:
      return {
        ...state,
        cities: state.cities.filter(
          (city: ICurrentCityData) => city.cityId !== action.payload
        ),
      };

    // case types.SET_SEARCH_CITIES:
    //   return { ...state, searchCities: action.payload };

    // case types.GET_SEARCH_CITIES_REQUEST:
    //   return { ...state, loading: true, error: null };

    // case types.GET_SEARCH_CITIES_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     weather: action.payload,
    //   };

    // case types.GET_SEARCH_CITIES_FAILURE:
    //   return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
