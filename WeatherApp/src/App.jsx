import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
import { router } from './router/index';
import { Loader } from '@components';
import { getDesignTokens } from '@services';
import { selectTheme } from '@store';

function App() {
  const mode = useSelector(selectTheme);
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
      <ThemeProvider theme={responsiveFontSizes(theme)}>
        <CssBaseline>
          <RouterProvider
            router={router}
            fallbackElement={<Loader />}
            future={{ v7_startTransition: true }}
          />
        </CssBaseline>
      </ThemeProvider>
  );
}

export default App;