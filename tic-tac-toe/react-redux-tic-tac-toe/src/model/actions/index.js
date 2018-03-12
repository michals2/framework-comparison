import * as types from "./actionTypes";

export const changeTurn = () => ({ type: types.CHANGE_TURN });
export const checkForWinner = potentialWinner => ({
  type: types.CHECK_FOR_WINNER,
  potentialWinner
});
export const resetBoard = () => ({ type: types.RESET_BOARD });
export const setSquare = id => ({ type: types.SET_SQUARE, id });
