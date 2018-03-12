import * as types from "./actionTypes";

export const addPlayer = playerInfo => ({ type: types.ADD_PLAYER, playerInfo });
export const changeTurn = () => ({ type: types.CHANGE_TURN });
