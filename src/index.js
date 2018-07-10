import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./redux/App";
import { reducers } from "./redux/reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";
//import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
//registerServiceWorker();
