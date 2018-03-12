// library imports
import { combineReducers } from "redux";

// subreducer imports
import board from "./board";

const monopolyApp = combineReducers({
  board
});

export default monopolyApp;
