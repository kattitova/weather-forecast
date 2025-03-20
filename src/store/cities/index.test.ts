import { citiesReducer } from './reducer';
import * as citiesActions from './actions';
import * as citiesTypes from './types';
import * as citiesSelectors from './selectors';
import { mockCitiesInitialState, mockNewCity } from '../../mocks';
import { mockStore } from '../../mocks/store';

describe('Store. Cities', () => {
  describe('Action creators', () => {
    describe('setCities', () => {
      it('should return correct action', () => {
        const action = citiesActions.setCities([mockNewCity]);
        expect(action).toStrictEqual({
          type: citiesTypes.SET_CITIES,
          payload: [mockNewCity],
        });
      });
    });

    describe('addCity', () => {
      it('should return correct action', () => {
        const action = citiesActions.addCity(mockNewCity);
        expect(action).toStrictEqual({
          type: citiesTypes.ADD_CITY,
          payload: mockNewCity,
        });
      });
    });

    describe('setCurrentCity', () => {
      it('should return correct action', () => {
        const action = citiesActions.setCurrentCity(5);
        expect(action).toStrictEqual({
          type: citiesTypes.SET_CURRENT_CITY,
          payload: 5,
        });
      });
    });

    describe('removeCity', () => {
      it('should return correct action', () => {
        const action = citiesActions.removeCity(2);
        expect(action).toStrictEqual({
          type: citiesTypes.REMOVE_CITY,
          payload: 2,
        });
      });
    });
  });

  describe('Reducer', () => {
    // it('should return previous state if action type does not match', () => {
    //   const action = {
    //     type: 'NON_MATCHING_ACTION_TYPE',
    //   };
    //   const newState = citiesReducer(mockCitiesInitialState, action);
    //   expect(newState).toBe(mockCitiesInitialState);
    // });

    describe('setCities', () => {
      it('should set cities to state', () => {
        const action = citiesActions.setCities([mockNewCity]);
        const newState = citiesReducer(mockCitiesInitialState, action);
        expect(newState).toStrictEqual({ data: [mockNewCity] });
      });
    });

    describe('setCurrentCity', () => {
      it('should set current cities pin is true', () => {
        const id = 712345;
        const action = citiesActions.setCurrentCity(id);
        const newState = citiesReducer(mockCitiesInitialState, action);
        expect(newState.data[1].pin).toBe(true);
      });
    });

    describe('addCity', () => {
      it('cities state should contain a new city after adding', () => {
        const action = citiesActions.addCity(mockNewCity);
        const newState = citiesReducer(mockCitiesInitialState, action);
        expect(newState).toStrictEqual({
          data: [...mockCitiesInitialState.data, mockNewCity],
        });
      });
    });

    describe('removeCity', () => {
      it('should delete city by id from state', () => {
        const id = 712345;
        const action = citiesActions.removeCity(id);
        const newState = citiesReducer(mockCitiesInitialState, action);
        const result = mockCitiesInitialState.data.filter(
          (city) => city.cityId !== id
        );
        expect(newState.data).toStrictEqual(result);
      });
    });
  });

  describe('Selectors', () => {
    describe('getCitiesState', () => {
      it('should return slice of state - cities', () => {
        const selector = citiesSelectors.getCitiesState(mockStore);
        expect(selector).toStrictEqual(mockCitiesInitialState);
      });
    });

    describe('selectCitiesList', () => {
      it('should return cities data if it exist', () => {
        const result = citiesSelectors.selectCitiesList.resultFunc(
          mockCitiesInitialState
        );
        expect(result).toStrictEqual(mockCitiesInitialState.data);
      });
    });

    describe('selectCurrentCity', () => {
      it('should return current city', () => {
        const result = citiesSelectors.selectCurrentCity.resultFunc(
          mockCitiesInitialState
        );
        expect(result).toStrictEqual(mockCitiesInitialState.data[0]);
      });
    });

    describe('selectCurrentCityName', () => {
      it('should return current city name', () => {
        const result = citiesSelectors.selectCurrentCityName.resultFunc(
          mockCitiesInitialState.data[0]
        );
        expect(result).toBe('Kyiv');
      });
    });

    describe('selectCurrentCityCode', () => {
      it('should return current city code', () => {
        const result = citiesSelectors.selectCurrentCityCountryCode.resultFunc(
          mockCitiesInitialState.data[0]
        );
        expect(result).toBe('UA');
      });
    });

    describe('selectCurrentCityImage', () => {
      it('should return current city image src', () => {
        const result = citiesSelectors.selectCurrentCityImage.resultFunc(
          mockCitiesInitialState.data[0]
        );
        expect(result).toBe('kyiv.jpg');
      });
    });
  });
});
