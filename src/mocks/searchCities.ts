import { ISearchCityResponse } from '../types/api/types';
import { IStoreAsyncElement } from '../types/store/types';

export const mockSearchCitiesInitialState: IStoreAsyncElement<
  ISearchCityResponse[]
> = {
  data: null,
  loading: false,
  error: null,
};

export const mockName = 'Kyiv';

export const mockSearchCityResponse: ISearchCityResponse = {
  id: 123456,
  name: 'Kyiv',
  latitude: 50.4501,
  longitude: 30.5234,
  elevation: 179,
  feature_code: 'PPLC',
  country_code: 'UA',
  admin1_id: 1,
  admin2_id: 2,
  admin3_id: 3,
  admin4_id: 4,
  timezone: 'Europe/Kiev',
  population: 2884000,
  postcodes: ['01001', '01002', '01003'],
  country_id: 804,
  country: 'Ukraine',
  admin1: 'Kyiv City',
  admin2: 'Kyiv',
  admin3: '',
  admin4: '',
};

export const mockSearchCitiesError = 'Error loading cities data';
export const mockSearchCitiesRejectedError =
  'Request failed with status code 400';
