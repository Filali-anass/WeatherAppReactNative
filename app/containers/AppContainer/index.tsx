import useTheme from 'hooks/useTheme';
import InitialNavigator from 'navigators/InitialNavigator';
import {changeThemeAction} from 'providers/ThemeProvider/actions';
import React from 'react';
import {StyleSheet} from 'react-native';
export type IAppContainerProps = {};

const AppContainer: React.FC<IAppContainerProps> = ({}) => {
  return (
    <>
      <InitialNavigator />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
});

export {AppContainer};
