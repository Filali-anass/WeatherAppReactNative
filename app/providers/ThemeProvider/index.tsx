import React, {ReactNode} from 'react';
import {useInjectReducer} from 'redux-injectors';

import reducer, {initialState} from './reducer';
export type IThemeProviderProps = {
  children?: ReactNode;
};

const key = 'themeProvider';

const ThemeProvider: React.FC<IThemeProviderProps> = ({children}) => {
  useInjectReducer({key, reducer});
  return <>{children}</>;
};

export {ThemeProvider};
export default ThemeProvider;
