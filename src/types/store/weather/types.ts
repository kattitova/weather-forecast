import { IWeatherDataResponse } from '../../api/types';
import * as types from '../../../store/weather/types';

interface IWeatherRequestAction {
  type: typeof types.GET_WEATHER_REQUEST;
}

interface IWeatherSuccessAction {
  type: typeof types.GET_WEATHER_SUCCESS;
  payload: IWeatherDataResponse;
}

interface IWeatherFailureAction {
  type: typeof types.GET_WEATHER_FAILURE;
  payload: string;
}

export type IWeatherActionTypes =
  | IWeatherRequestAction
  | IWeatherSuccessAction
  | IWeatherFailureAction;
