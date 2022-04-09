import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
// connects react-app with redux devtools
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./App";
import reducers from "./Reducers/reducers";
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(reduxThunk))
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
