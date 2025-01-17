import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';

import { store } from './store'

console.log(store)


ReactDOM.render(
    <Provider store={ store }>
      {/* @ts-ignore */}
      <App />
    </Provider>,
  document.getElementById('root')
);