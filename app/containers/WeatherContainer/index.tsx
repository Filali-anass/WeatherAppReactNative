import React, {useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {key} from './constants';
import {useInjectReducer, useInjectSaga} from 'redux-injectors';
import reducer from './reducer';
import saga from './saga';
import {createStructuredSelector} from 'reselect';
import {makeSelectWeatherData, makeSelectWeatherLoading} from './selectors';
import {WeatherDisplayComponent} from '../../components/WeatherDisplayComponent';

const stateSelector = createStructuredSelector({
  loading: makeSelectWeatherLoading,
  WeatherData: makeSelectWeatherData,
});

export type IWeatherContainerrProps = {};

const WeatherContainerr: React.FC<IWeatherContainerrProps> = ({}) => {
  useInjectReducer({key, reducer});
  useInjectSaga({key, saga});

  const {loading, WeatherData} = useSelector(stateSelector);

  return (
    <>
      {loading ? (
        <ActivityIndicator />
      ) : WeatherData ? (
        <WeatherDisplayComponent wheather={WeatherData} />
      ) : (
        <Text>Error</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({});

export {WeatherContainerr};
