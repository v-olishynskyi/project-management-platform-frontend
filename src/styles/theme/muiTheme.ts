import { ThemeOptions } from '@mui/material/styles';

const themeTypography: Pick<ThemeOptions, 'typography'> = {
  typography: {
    fontFamily: '"Inter", sans-serif',
    fontSize: 16,
    htmlFontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,

    h1: {
      fontSize: 60,
      fontWeight: 600,
      fontFamily: '"Inter", sans-serif',
    },
    h2: {
      fontFamily: '"Inter", sans-serif',
      fontSize: 50,
      fontWeight: 500,
    },
    h3: {
      fontFamily: '"Inter", sans-serif',
      fontSize: 40,
      fontWeight: 600,
    },
    h4: {
      fontSize: 30,
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontSize: 24,
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Inter", sans-serif',
      fontSize: 20,
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: 20,
      fontFamily: '"Inter", sans-serif',
      lineHeight: 1.5,
    },
    subtitle2: {
      fontFamily: '"Inter", sans-serif',
      fontSize: 20,
      lineHeight: 1.5,
      fontWeight: 400,
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
      fontSize: 18,
      fontWeight: 400,
      lineHeight: 1.35,
    },
    body1M: {
      fontFamily: '"Inter", sans-serif',
      fontSize: 18,
      fontWeight: 500,
      lineHeight: 1.35,
    },
    body2: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.2,
    },
    body2M: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.2,
    },
    button: {
      fontFamily: '"Inter", sans-serif',
      lineHeight: 1.2,
      fontWeight: 500,
    },
    caption: {
      fontFamily: '"Inter", sans-serif',
      fontSize: 13,
      lineHeight: 1.16,
      fontWeight: 400,
    },
    captionM: {
      fontFamily: '"Inter", sans-serif',
      fontSize: 13,
      lineHeight: 1.16,
      fontWeight: 500,
    },
    footnote: {
      fontFamily: '"Inter", sans-serif',
      fontSize: 14,
      lineHeight: 1.42,
      fontWeight: 400,
    },
    footnoteM: {
      fontFamily: '"Inter", sans-serif',
      fontSize: 14,
      lineHeight: 1.42,
      fontWeight: 500,
    },
    small: {
      fontFamily: '"Inter", sans-serif',
      fontSize: 12,
      lineHeight: 1.5,
      fontWeight: 400,
    },
    smallM: {
      fontFamily: '"Inter", sans-serif',
      fontSize: 12,
      lineHeight: 1.5,
      fontWeight: 500,
    },
    overline: {
      fontFamily: '"Inter", sans-serif',
    },
  },
};

const lightThemePalette: Pick<ThemeOptions, 'palette'> = {
  palette: {
    mode: 'light',
    primary: {
      main: '#423df5',
    },
    secondary: {
      main: '#3d899c',
    },
    background: {
      default: '#ffffff',
      paper: '#f0f0f0',
    },
    text: {
      primary: '#000000',
      secondary: 'rgba(0,0,0,0.7)',
    },
    divider: 'rgba(0,0,0,0.1)',
  },
};

const darkThemePalette: Pick<ThemeOptions, 'palette'> = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#423df5',
    },
    secondary: {
      main: '#3d899c',
    },
    background: {
      default: '#1a1a23',
      paper: '#252731',
    },
    text: {
      primary: '#ffffff',
      secondary: '#ffffffb3',
    },
    divider: '#ffffff1a',
  },
};

const componentsOptions: Pick<ThemeOptions, 'components'> = {
  components: {
    MuiTextField: {
      styleOverrides: { root: { fontSize: 16 } },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        sizeSmall: {
          fontSize: 16,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: { fontSize: 12, marginLeft: 8 },
      },
    },
  },
};

export const lightThemeOptions: ThemeOptions = {
  ...lightThemePalette,
  ...themeTypography,
  ...componentsOptions,
};

export const darkThemeOptions: ThemeOptions = {
  ...darkThemePalette,
  ...themeTypography,
  ...componentsOptions,
};
