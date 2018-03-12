import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ticTacToe from "./model/reducers";
import AppContainer from "./containers/AppContainer";

let store = createStore(ticTacToe);

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);
