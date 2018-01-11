import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import Reboot from 'material-ui/Reboot';
import 'typeface-roboto';
import invariant from 'redux-immutable-state-invariant';

import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers';

/* eslint no-underscore-dangle: 0 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = process.env.NODE_ENV !== 'production' ? [invariant(), thunk] : [thunk];
const store = createStore(reducer, composeEnhancers(applyMiddleware(...middleware)));

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
      <Reboot />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
