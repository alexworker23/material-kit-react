import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { GlobalStyles } from './layouts/GlobalStyles';
import './utils/mixins/chart';
import { theme } from './theme';
import { routes } from './routes';

const App = () => {
  const routing = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        {routing}
    </ThemeProvider>
  );
};

export default App;
