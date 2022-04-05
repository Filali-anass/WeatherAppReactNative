import {makeSelectTheme} from 'providers/ThemeProvider/selectors';
import {useSelector} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {theme, colors} from 'theme';

const stateSelector = createStructuredSelector({
  theme: makeSelectTheme(),
});

// let appearanceListener;
export const useTheme = () => {
  const {theme: selectedTheme} = useSelector(stateSelector);

  const color = colors(selectedTheme);

  const spacing = (step: number) =>
    theme.spacing.default[Math.min(step, theme.spacing.default.length - 1)];

  const fontSizing = (step: number) =>
    theme.fontSizing.default[
      Math.min(step, theme.fontSizing.default.length - 1)
    ];

  const insets = useSafeAreaInsets();

  return {
    selectedTheme,
    dimensions: theme.dimensions,
    color,
    spacing,
    fontSizing,
    insets,
  };
};

export type ThemeType = ReturnType<typeof useTheme>; // string

export default useTheme;
