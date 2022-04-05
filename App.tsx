import React, {useEffect} from 'react';

import {AppContainer} from 'containers';
import {AppProviders} from 'providers';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';

export const App: React.FC<IAppProps> = () => {
  return (
    <AppProviders>
      <NavigationContainer>
        <AppContainer />
      </NavigationContainer>
    </AppProviders>
  );
};

export type IAppProps = {};

export default App;
