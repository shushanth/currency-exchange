import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import CurrencyExchange from '../src/containers/CurrencyExchange';

import { currencyExchangeReducer } from '../src/store/reducers';

const store = createStore(currencyExchangeReducer);
const rootElement = document.getElementById('root');

ReactDOM.render(
  <Fragment>
    <Provider store={store}>
      <CurrencyExchange />
    </Provider>
  </Fragment>,
  rootElement
);
