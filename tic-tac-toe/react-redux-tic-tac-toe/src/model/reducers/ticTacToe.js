const ticTacToe = (state = [], action) => {
  switch (action.type) {
    case "CHANGE_TURN":
      console.log("changeTurn");
      break;
    default:
      return state
  }
}
 
export default ticTacToe;