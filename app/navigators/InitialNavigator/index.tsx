import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {NAVIGATORS, SCREENS} from 'navigators/constants';
import {HomeScreen} from 'screens';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import useTheme, {ThemeType} from 'hooks/useTheme';

const Stack = createNativeStackNavigator();

const InitialNavigator: React.FC<IInitialNavigatorProps> = ({}) => {
  const theme = useTheme();
  const styles = createStyle(theme);

  return (
    <Stack.Navigator>
      <Stack.Screen name={SCREENS.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
};

const createStyle = (theme: ThemeType) => StyleSheet.create({});

export type IInitialNavigatorProps = {};

export default InitialNavigator;
