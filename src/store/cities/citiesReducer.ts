import {
  CurrentCityData,
  ADD_CITY,
  REMOVE_CITY,
  SET_CITIES,
  CitiesState,
  CitiesActionTypes,
  SET_CURRENT_CITY,
  SET_SEARCH_CITIES,
} from './citiesTypes';

export const initialCityData: CurrentCityData = {
  cityId: 703448,
  cityName: 'Kyiv',
  countryCode: 'UA',
  latitude: 50.4547,
  longitude: 30.5238,
  image: 'kyiv.jpg',
  pin: true,
  weather: null,
};

const initialState = {
  cities: [],
  searchCities: [],
};

export const citiesReducer = (
  state = initialState,
  action: CitiesActionTypes
): CitiesState => {
  switch (action.type) {
    case SET_CITIES:
      return { ...state, cities: action.payload };

    case SET_CURRENT_CITY:
      return {
        ...state,
        cities: state.cities.map((city: CurrentCityData) =>
          city.cityId === action.payload
            ? { ...city, pin: true }
            : { ...city, pin: false }
        ),
      };

    case ADD_CITY:
      if (
        state.cities.some(
          (city: CurrentCityData) => city.cityId === action.payload.cityId
        )
      ) {
        return state;
      }
      return { ...state, cities: [...state.cities, action.payload] };

    case REMOVE_CITY:
      return {
        ...state,
        cities: state.cities.filter(
          (city: CurrentCityData) => city.cityId !== action.payload
        ),
      };

    case SET_SEARCH_CITIES:
      return { ...state, searchCities: action.payload };

    default:
      return state;
  }
};
