import {
  mockName,
  mockSearchCitiesError,
  mockSearchCitiesInitialState,
  mockSearchCitiesRejectedError,
  mockSearchCityResponse,
} from '../../mocks/searchCities';
import * as searchCitiesAction from './actions';
import { searchCitiesReducer } from './reducer';
import * as types from './types';
import * as searchCitiesSelector from './selectors';
import { mockStore } from '../../mocks/store';
import { getSearchCities } from './thunks';
import * as api from '../../api';

jest.mock('../../api/api', () => ({
  getSearchCities: jest.fn(),
}));

describe('Store. SearchCities', () => {
  describe('Action creators', () => {
    describe('setSearchCities', () => {
      it('should return correct action', () => {
        const action = searchCitiesAction.setSearchCities([]);
        expect(action).toStrictEqual({
          type: types.SET_SEARCH_CITIES,
          payload: [],
        });
      });
    });

    describe('getSearchCitiesRequest', () => {
      it('should return correct action', () => {
        const action = searchCitiesAction.getSearchCitiesRequest();
        expect(action).toStrictEqual({
          type: types.GET_SEARCH_CITIES_REQUEST,
        });
      });
    });

    describe('getSearchCitiesSuccess', () => {
      it('should return correct action', () => {
        const action = searchCitiesAction.getSearchCitiesSuccess([]);
        expect(action).toStrictEqual({
          type: types.GET_SEARCH_CITIES_SUCCESS,
          payload: [],
        });
      });
    });

    describe('getSearchCitiesFailure', () => {
      it('should return correct action', () => {
        const action = searchCitiesAction.getSearchCitiesFailure(null);
        expect(action).toStrictEqual({
          type: types.GET_SEARCH_CITIES_FAILURE,
          payload: null,
        });
      });
    });

    describe('Reducer', () => {
      describe('setSearchCities', () => {
        it('should set search cities to state', () => {
          const action = searchCitiesAction.setSearchCities([
            mockSearchCityResponse,
          ]);
          const newState = searchCitiesReducer(
            mockSearchCitiesInitialState,
            action
          );
          expect(newState).toStrictEqual({
            ...mockSearchCitiesInitialState,
            data: [mockSearchCityResponse],
          });
        });
      });

      describe('getSearchCitiesRequest', () => {
        it('should be status loading is true, error is null', () => {
          const action = searchCitiesAction.getSearchCitiesRequest();
          const newState = searchCitiesReducer(
            mockSearchCitiesInitialState,
            action
          );
          expect(newState).toStrictEqual({
            ...mockSearchCitiesInitialState,
            loading: true,
            error: null,
          });
        });
      });
    });

    describe('getSearchCitiesSuccess', () => {
      it('should set response data to state', () => {
        const action = searchCitiesAction.getSearchCitiesSuccess([
          mockSearchCityResponse,
        ]);
        const newState = searchCitiesReducer(
          mockSearchCitiesInitialState,
          action
        );
        expect(newState).toStrictEqual({
          ...mockSearchCitiesInitialState,
          data: [mockSearchCityResponse],
          loading: false,
        });
      });
    });

    describe('getSearchCitiesFailure', () => {
      it('should set to state error and loading is false', () => {
        const action = searchCitiesAction.getSearchCitiesFailure(
          mockSearchCitiesError
        );
        const newState = searchCitiesReducer(
          mockSearchCitiesInitialState,
          action
        );
        expect(newState).toStrictEqual({
          ...mockSearchCitiesInitialState,
          loading: false,
          error: mockSearchCitiesError,
        });
      });
    });

    describe('Selectors', () => {
      describe('getSearchCitiesState', () => {
        it('should return slice of state - searchCities', () => {
          const selector = searchCitiesSelector.getSearchCitiesState(mockStore);
          expect(selector).toStrictEqual(mockSearchCitiesInitialState);
        });
      });

      describe('selectSearchCities', () => {
        it('should return search cities data if it exist', () => {
          const result = searchCitiesSelector.selectSearchCities.resultFunc(
            mockSearchCitiesInitialState
          );
          expect(result).toStrictEqual(mockSearchCitiesInitialState.data);
        });
      });

      describe('selectSearchCitiesLoading', () => {
        it('should return search cities loading', () => {
          const result =
            searchCitiesSelector.selectSearchCitiesLoading.resultFunc(
              mockSearchCitiesInitialState
            );
          expect(result).toStrictEqual(mockSearchCitiesInitialState.loading);
        });
      });
    });

    describe('Thunks', () => {
      beforeEach(() => {
        jest.clearAllMocks();
      });
      describe('getSearchCities', () => {
        it('should getSearchCities with resolve response', async () => {
          const mockApiGetResponseSuccess = {
            data: { results: mockSearchCityResponse },
            status: 200,
          };

          (api.getSearchCities as jest.Mock).mockResolvedValue(
            mockApiGetResponseSuccess
          );
          const dispatch = jest.fn();
          const thunk = getSearchCities(mockName);

          await thunk(dispatch);

          const expectedCalls = [
            [{ type: types.GET_SEARCH_CITIES_REQUEST }],
            [
              {
                type: types.GET_SEARCH_CITIES_SUCCESS,
                payload: mockSearchCityResponse,
              },
            ],
          ];
          expect(dispatch.mock.calls).toStrictEqual(expectedCalls);
        });

        it('should getSearchCities with rejected response', async () => {
          (api.getSearchCities as jest.Mock).mockRejectedValue({
            response: { data: mockSearchCitiesRejectedError },
          });
          const dispatch = jest.fn();
          const thunk = getSearchCities(mockName);

          await thunk(dispatch);

          const expectedCalls = [
            [{ type: types.GET_SEARCH_CITIES_REQUEST }],
            [
              {
                type: types.GET_SEARCH_CITIES_FAILURE,
                payload: `Error loading cities data: ${mockSearchCitiesRejectedError}`,
              },
            ],
          ];
          expect(dispatch.mock.calls).toStrictEqual(expectedCalls);
        });
      });
    });
  });
});
