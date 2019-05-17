import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index.js";

import "./index.css";
import App from "./App";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, storeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
