import {
  GET_WEATHER_FAILURE,
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  WeatherActionTypes,
  WeatherState,
} from './weatherTypes';

const initialState: WeatherState = {
  cities: [],
  loading: false,
  error: null,
};

export const weatherReducer = (
  state = initialState,
  action: WeatherActionTypes
): WeatherState => {
  switch (action.type) {
    case GET_WEATHER_REQUEST:
      return { ...state, loading: true, error: null };

    case GET_WEATHER_SUCCESS:
      if (state.cities.some((city) => city.id === action.payload.id)) {
        return state;
      }

      return {
        ...state,
        loading: false,
        cities: [...state.cities, action.payload],
      };

    case GET_WEATHER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
