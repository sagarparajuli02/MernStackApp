import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { PropTypes } from "react-dom";
import { createStore, applyMiddleware, Compose } from "redux";
import thunk from "redux-thunk";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
