import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';

import {createStore} from "redux";
import reducers from "./reducers";

import {Provider} from "react-redux";

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

let Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'));
