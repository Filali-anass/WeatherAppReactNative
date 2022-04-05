import React, {useEffect, useState} from 'react';
import useTheme, {ThemeType} from 'hooks/useTheme';
import {StyleSheet, SafeAreaView} from 'react-native';
import {useDispatch} from 'react-redux';
import {GoogleAutoCompleteContainer} from 'containers';
import {WeatherContainerr} from 'containers/WeatherContainer';

export type IAppContainerProps = {};

const HomeScreen: React.FC<IAppContainerProps> = ({}) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const styles = createStyle(theme);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <GoogleAutoCompleteContainer />
        <WeatherContainerr />
      </SafeAreaView>
    </>
  );
};

const createStyle = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.color.background,
    },
  });

export {HomeScreen};
