import {key} from './constants';
import {createSelector} from 'reselect';
import {initialState} from './reducer';

const selectWeatherContainerDomain = (state: any) => state[key] || initialState;

const makeSelectWeatherLoading = createSelector(
  selectWeatherContainerDomain,
  substate => substate.loading,
);

const makeSelectWeatherData = createSelector(
  selectWeatherContainerDomain,
  substate => substate.wheatherData,
);

export {makeSelectWeatherLoading, makeSelectWeatherData};
