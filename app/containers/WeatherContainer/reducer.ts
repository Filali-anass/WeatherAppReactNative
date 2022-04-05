/*
 *
 * WheatherContainer reducer
 *
 */

import produce from 'immer';
import {
  GET_WEATHER_ACTION,
  GET_WEATHER_SUCCESS_ACTION,
  GET_WEATHER_ERROR_ACTION,
} from './constants';

export const initialState = {
  wheatherData: null,
  loading: false,
  error: '',
};

/* eslint-disable default-case, no-param-reassign */
const wheatherContainerReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_WEATHER_ACTION:
      draft.loading = true;
      break;
    case GET_WEATHER_SUCCESS_ACTION:
      draft.loading = false;
      draft.wheatherData = action.wheatherData;
      break;
    case GET_WEATHER_ERROR_ACTION:
      draft.loading = false;
      draft.error = action.error;
      break;
  }
}, initialState);

export default wheatherContainerReducer;
