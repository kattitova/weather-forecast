import {
  CurrentCityActionTypes,
  CurrentCityData,
  CurrentCityState,
  SET_CURRENT_CITY,
  SET_CURRENT_CITY_WEATHER,
} from './currentCityTypes';

const initialData: CurrentCityData = {
  cityId: '703448',
  cityName: 'Kyiv',
  countryCode: 'UA',
  latitude: 50.4547,
  longitude: 30.5238,
  weather: null,
};

const initialState = {
  city: initialData,
};

export const currentCityReducer = (
  state = initialState,
  action: CurrentCityActionTypes
): CurrentCityState => {
  switch (action.type) {
    case SET_CURRENT_CITY:
      return { ...state, city: action.payload };

    case SET_CURRENT_CITY_WEATHER:
      return { ...state, city: { ...state.city, weather: action.payload } };

    default:
      return state;
  }
};
