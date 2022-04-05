import React from 'react';
import {Text, View} from 'react-native';
interface IWheatherProps {
  wheather: {
    coord: {lon: number; lat: number};
    weather: [{id: number; main: string; description: string; icon: string}];
    base: string;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
      sea_level: number;
      grnd_level: number;
    };
    visibility: number;
    wind: {speed: number; deg: number; gust: number};
    clouds: {all: number};
    dt: number;
    sys: {sunrise: number; sunset: number};
    timezone: number;
    id: number;
    name: string;
    cod: number;
  };
}

const WeatherDisplayComponent = ({wheather}: IWheatherProps) => {
  const {
    main: {temp, temp_max, temp_min},
  } = wheather;
  return (
    <View>
      <Text>Temperature {temp}</Text>
      <Text>temperature Max {temp_max}</Text>
      <Text> Temperature Min {temp_min}</Text>
    </View>
  );
};

export {WeatherDisplayComponent};
