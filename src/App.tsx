import React from 'react';
import { Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <div>
      <Typography color={'primary'} variant="h1" component="h2">LANBROS</Typography>
    </div>
  </ThemeProvider>
);

export default App;
