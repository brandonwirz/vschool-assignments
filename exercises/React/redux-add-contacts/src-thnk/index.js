import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";//component
import thunk from "redux-thunk";

import rootReducer from "./redux";
import App from "./components/App"


const store = createStore(rootReducer, applyMiddleware(thunk));// main thing from redux

ReactDOM.render(<Provider store ={store}><App/></Provider>, document.getElementById('root'));
