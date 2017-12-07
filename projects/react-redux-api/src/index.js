import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import { BrowserRouter } from "react-router-dom";
import rootReducer from "./redux";
import App from "./components/App";
import thunk from "redux-thunk";

// const reducer = combineReducers({authReducer, mainReducer});
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
            <Provider store ={store}>
                  <BrowserRouter>
                        <App/>
                  </BrowserRouter>
            </Provider>,
  document.getElementById("root"));
