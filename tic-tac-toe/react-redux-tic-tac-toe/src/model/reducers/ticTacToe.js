import { initialState } from "../state/initialState";

const ticTacToe = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_TURN":
      console.log("changeTurn");
      break;
    default:
      return state;
  }
};
export default ticTacToe;

// winningCombos = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ];

// const handleSquareClick = id => {
//   const { boardState, turn, gameOver } = this.state;

//   if (gameOver) return;

//   const upNext = turn === "X" ? "O" : "X";

//   // check if square has already been played
//   if (boardState[id].st) {
//     this.setState({ message: "That square has already been played" });
//     return;
//   }
//   const newBoardState = [
//     ...boardState.slice(0, id),
//     { id, st: turn },
//     ...boardState.slice(id + 1)
//   ];

//   this.setState({ boardState: newBoardState, turn: upNext, message: "" }, () =>
//     this.checkForWinner(turn)
//   );
// };

// const checkForWinner = possibleWinner => {
//   const { boardState } = this.state;
//   const winnerFound = this.winningCombos.some(combo => {
//     return combo.every(squareId => {
//       return boardState[squareId].st === possibleWinner;
//     });
//   });
//   if (winnerFound)
//     this.setState({
//       message: `${possibleWinner} is the winner!`,
//       gameOver: true
//     });
// };

// const resetBoard = () => {
//   this.setState({
//     ...initialState,
//     boardState: [...initialState.boardState]
//   });
// };
