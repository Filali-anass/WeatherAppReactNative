import {AnyAction} from 'redux';
import {take, call, put, select, takeLatest} from 'redux-saga/effects';
import {AxiosRequestConfig} from 'axios';

import {API_KEY, GET_WEATHER_ACTION} from './constants';
import {getWeatherErrorAction, getWeatherSuccessAction} from './actions';
import request from '../../utils/request';

function* getWeather({lat, lng}: AnyAction) {
  try {
    const config: AxiosRequestConfig = {
      method: 'get',
      url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`,
    };
    const response: object = yield call(async () => {
      const {data}: {data: object} = await request(config);
      return data;
    });

    yield put(getWeatherSuccessAction(response));
  } catch (error) {
    yield put(getWeatherErrorAction(error));
  }
}

export default function* homeScreenSaga() {
  yield takeLatest(GET_WEATHER_ACTION, getWeather);
}
