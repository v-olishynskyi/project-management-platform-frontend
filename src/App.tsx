import React from 'react';
import '@styles/variables.css';
import './App.scss';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import { RootRouter, useRouter } from '@navigation';
import { storeGetter } from '@store';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useMuiTheme } from '@hooks';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RootLayout } from '@components';

// Create a client
const queryClient = new QueryClient();

function App() {
  const theme = storeGetter.app._theme();
  const muiTheme = useMuiTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={muiTheme}>
        <RootLayout>
          <RootRouter />
        </RootLayout>

        <CssBaseline enableColorScheme />
        <ToastContainer theme={theme} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

declare module '@mui/material/styles' {
  interface TypographyVariants {
    body1M: React.CSSProperties;
    body2M: React.CSSProperties;
    footnote: React.CSSProperties;
    footnoteM: React.CSSProperties;
    small: React.CSSProperties;
    smallM: React.CSSProperties;
    captionM: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body1M?: React.CSSProperties;
    body2M?: React.CSSProperties;
    footnote?: React.CSSProperties;
    footnoteM?: React.CSSProperties;
    small?: React.CSSProperties;
    smallM?: React.CSSProperties;
    captionM?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body1M: true;
    body2M: true;
    footnote: true;
    footnoteM: true;
    small: true;
    smallM: true;
    captionM: true;
  }
}
