import * as moxios from 'moxios';
import { mockName, mockSearchCityResponse } from '../mocks/searchCities';
import { getSearchCities } from './api';
import { AxiosError } from 'axios';

describe('API - getSearchCities', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('should work correctly if request successful', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      return request.respondWith({
        status: 200,
        response: mockSearchCityResponse,
      });
    });

    const result = await getSearchCities(mockName);

    expect(result.data).toEqual(mockSearchCityResponse);
  });

  it('should work correctly if request is not successful', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      return request.respondWith({
        status: 404,
        response: { message: 'Not Found' },
      });
    });

    try {
      await getSearchCities(mockName);
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      expect(axiosError.response.status).toBe(404);
      expect(axiosError.response.data.message).toBe('Not Found');
    }
  });
});
