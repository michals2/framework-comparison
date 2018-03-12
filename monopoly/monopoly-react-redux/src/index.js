// library imports
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

// model imports
import monopolyApp from "./model/reducers";

// component imports
import App from "./components/App";

let store = createStore(monopolyApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
