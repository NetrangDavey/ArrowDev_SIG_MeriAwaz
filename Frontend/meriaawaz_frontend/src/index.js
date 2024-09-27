import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./components/app/store";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
