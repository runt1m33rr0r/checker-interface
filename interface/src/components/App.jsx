import React from 'react';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import 'typeface-roboto';

import Main from './Main';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
    type: 'dark',
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Main />
  </MuiThemeProvider>
);

export default App;
