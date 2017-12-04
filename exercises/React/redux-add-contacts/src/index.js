import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from "react-redux";//component

import rootReducer from "./redux";
import App from "./components/App"


const store = createStore(rootReducer);// main thing from redux

ReactDOM.render(<Provider store ={store}><App/></Provider>, document.getElementById('root'));
