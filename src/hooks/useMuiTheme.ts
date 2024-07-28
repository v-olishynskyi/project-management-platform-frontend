import React from 'react';
import { createTheme } from '@mui/material';
import { darkThemeOptions, lightThemeOptions } from '@theme';
import { useStore } from '@store';

export const useMuiTheme = () => {
  const isDarkMode = useStore().app.isDark();

  const themeByMode = React.useMemo(
    () => createTheme(isDarkMode ? darkThemeOptions : lightThemeOptions),
    [isDarkMode]
  );

  return themeByMode;
};
