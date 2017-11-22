import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import 'typeface-roboto';

import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers';

const store = createStore(reducer);

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
    type: 'dark',
  },
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
