import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import configureStore from 'configureStore';
import ThemeProvider from 'providers/ThemeProvider';

const initialState = {};
const store = configureStore(initialState);

export type IAppProvidersProps = {};

const AppProviders: React.FC<IAppProvidersProps> = ({children}) => {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
          <SafeAreaProvider>
            <>{children}</>
          </SafeAreaProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
};

export {AppProviders};
