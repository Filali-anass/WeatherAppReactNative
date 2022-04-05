import {DEFAULT_THEME} from 'theme';

const colors = (theme: string = DEFAULT_THEME) => ({
  // 	Primary
  primary: {
    light: '#7165e3',
    main: '#7165e3',
    dark: '#648dae',
  }[theme],

  // Secondary
  secondary: {
    light: '#f6a5c0',
    main: '#f48fb1',
    dark: '#aa647b',
  }[theme],

  // Error
  error: {
    light: '#e57373',
    main: '#f44336',
    dark: '#d32f2f',
  }[theme],

  // Warning
  warning: {
    light: '#ffb74d',
    main: '#ff9800',
    dark: '#f57c00',
  }[theme],

  // Info
  info: {
    light: '#64b5f6',
    main: '#2196f3',
    dark: '#1976d2',
  }[theme],

  // Success
  success: {
    light: '#81c784',
    main: '#4caf50',
    dark: '#388e3c',
  }[theme],

  // Text Color
  primaryText: {
    light: '#3b2144',
    main: '#3b2144',
    dark: '#222831',
  }[theme],

  secondaryText: {
    light: '#a6a6a6',
    main: '#a6a6a6',
    dark: '#30475E',
  }[theme],

  // Background
  background: {
    light: '#ffffff',
    main: '#ffffff',
    dark: '#c0c0c0',
  }[theme],

  contrast: {
    light: '#f5f5f5',
    main: '#f5f5f5',
    dark: '#11111a',
  }[theme],
});

/**
 * https://material-ui.com/customization/palette/
 */
export {colors};
