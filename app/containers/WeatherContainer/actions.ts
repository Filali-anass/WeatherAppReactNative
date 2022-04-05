import {AnyAction} from 'redux';
import {
  GET_WEATHER_ACTION,
  GET_WEATHER_SUCCESS_ACTION,
  GET_WEATHER_ERROR_ACTION,
} from './constants';

export function getWeatherAction({lat, lng}: {lat: number; lng: number}) {
  return {
    type: GET_WEATHER_ACTION,
    lat,
    lng,
  };
}
export function getWeatherSuccessAction(wheatherData: any) {
  return {
    type: GET_WEATHER_SUCCESS_ACTION,
    wheatherData,
  };
}

export function getWeatherErrorAction(error: any) {
  return {
    type: GET_WEATHER_ERROR_ACTION,
    error,
  };
}
