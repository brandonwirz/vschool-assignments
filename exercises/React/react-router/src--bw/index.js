import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import "./app.css";
import { BrowserRouter } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));
