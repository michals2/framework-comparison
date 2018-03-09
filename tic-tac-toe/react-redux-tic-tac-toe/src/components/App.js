import React, { Component } from "react";
import "./App.css";
import Row from "./Row";

const initialState = {
  boardState: [
    { id: 0, st: null },
    { id: 1, st: null },
    { id: 2, st: null },
    { id: 3, st: null },
    { id: 4, st: null },
    { id: 5, st: null },
    { id: 6, st: null },
    { id: 7, st: null },
    { id: 8, st: null }
  ],
  turn: "X",
  message: "",
  gameOver: false
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      ...initialState,
      boardState: [...initialState.boardState]
    };
  }

  /**
   * 0 1 2
   * 3 4 5
   * 6 7 8
   */

  winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  handleSquareClick = id => {
    const { boardState, turn, gameOver } = this.state;

    if (gameOver) return;

    const upNext = turn === "X" ? "O" : "X";

    // check if square has already been played
    if (boardState[id].st) {
      this.setState({ message: "That square has already been played" });
      return;
    }
    const newBoardState = [
      ...boardState.slice(0, id),
      { id, st: turn },
      ...boardState.slice(id + 1)
    ];

    this.setState(
      { boardState: newBoardState, turn: upNext, message: "" },
      () => this.checkForWinner(turn)
    );
  };

  checkForWinner = possibleWinner => {
    const { boardState } = this.state;
    const winnerFound = this.winningCombos.some(combo => {
      return combo.every(squareId => {
        return boardState[squareId].st === possibleWinner;
      });
    });
    if (winnerFound)
      this.setState({
        message: `${possibleWinner} is the winner!`,
        gameOver: true
      });
  };

  resetBoard = () => {
    this.setState({
      ...initialState,
      boardState: [...initialState.boardState]
    });
  };

  render() {
    const { boardState } = this.state;
    const dataByRows = [
      boardState.slice(0, 3),
      boardState.slice(3, 6),
      boardState.slice(6)
    ];
    return (
      <div className="App">
        <table>
          <tbody>
            {dataByRows.map((rowData, i) =>
              <Row
                key={i}
                rowData={rowData}
                handleSquareClick={this.handleSquareClick}
              />
            )}
          </tbody>
        </table>
        <p>
          It's currently {this.state.turn}'s turn
        </p>
        <button onClick={this.resetBoard}>Reset Board</button>
        <p>
          {this.state.message}
        </p>
      </div>
    );
  }
}

export default App;
