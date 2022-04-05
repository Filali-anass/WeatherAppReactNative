import {createSelector} from 'reselect';
import {initialState} from './reducer';

/**
 * Direct selector to the ThemeProvider domain
 */

const selectThemeProviderDomain = (state: any) =>
  state.themeProvider || initialState;

/**
 * Select the Theme
 */

const makeSelectTheme = () =>
  createSelector(selectThemeProviderDomain, state => state.theme);

export {selectThemeProviderDomain, makeSelectTheme};
