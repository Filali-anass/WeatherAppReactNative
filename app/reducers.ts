/**
 * Combine all reducers in this file and export the combined reducers.
 */

import {combineReducers} from 'redux';
import produce from 'immer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const DefaultReducer = produce((draft, action) => {
    switch (action.type) {
      case 'DEFAULT_ACTION':
        break;
    }
  }, {});

  const rootReducer = combineReducers({
    DefaultReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
