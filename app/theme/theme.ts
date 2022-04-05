import {Dimensions} from 'react-native';

export interface DeviceDimensions {
  width: number;
  height: number;
}

export interface Sizing {
  default: Array<number>;
}

export interface Theme {
  spacing: Sizing;
  fontSizing: Sizing;
  dimensions: DeviceDimensions;
}

const spacing: Sizing = {
  default: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 256, 384, 512, 640, 768],
};

const fontSizing: Sizing = {
  default: [12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72],
};

const dimensions: DeviceDimensions = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

const theme: Theme = {
  spacing,
  fontSizing,
  dimensions,
};

export default theme;
