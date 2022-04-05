import useTheme from 'hooks/useTheme';
import React, {useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {API_KEY} from './constants';
import {getWeatherAction} from '../WeatherContainer/actions';

export type IGoogleAutoCompleteContainerProps = {};

const GoogleAutoCompleteContainer: React.FC<
  IGoogleAutoCompleteContainerProps
> = ({}) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <>
      <GooglePlacesAutocomplete
        renderLeftButton={() => <></>}
        renderRightButton={() => <></>}
        placeholder="Chercher une adresse"
        styles={{
          container: styles.googleAutocompletContainer,
          textInputContainer: styles.googleAutocompletInputContainer,
          textInput: styles.googleAutocompletInput,
          listView: styles.googleAutocompleteListView,
          row: styles.row,
        }}
        fetchDetails={true}
        onPress={(data, details) => {
          if (details?.geometry?.location) {
            dispatch(
              getWeatherAction({
                lat: details.geometry.location.lat,
                lng: details?.geometry.location.lng,
              }),
            );
          }
        }}
        query={{
          key: API_KEY,
          language: 'en',
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  googleAutocompletContainer: {
    // backgroundColor: 'blue',
  },
  googleAutocompletInputContainer: {
    borderRadius: 50,
    height: 45,
  },
  googleAutocompletInput: {
    color: 'black',
    borderRadius: 50,
    fontSize: 14,
  },
  googleAutocompleteListView: {
    paddingTop: 8,
    borderRadius: 5,
  },
  row: {},
});

export {GoogleAutoCompleteContainer};
