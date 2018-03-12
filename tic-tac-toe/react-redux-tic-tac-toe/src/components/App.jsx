import React from "react";
import "./App.css";
import Row from "./Row";

const App = ({ state, actions }) => {
  // deconstruction
  const { boardState, turn, message } = state;
  const { changeTurn, checkForWinner, resetBoard, setSquare } = actions;

  const dataByRows = [
    boardState.slice(0, 3),
    boardState.slice(3, 6),
    boardState.slice(6)
  ];

  const handleSquareClick = id => {
    if (state.gameOver) return;

    setSquare(id);
    checkForWinner();

    changeTurn();
  };

  return (
    <div className="App">
      <table>
        <tbody>
          {dataByRows.map((rowData, i) =>
            <Row
              key={i}
              rowData={rowData}
              handleSquareClick={handleSquareClick}
            />
          )}
        </tbody>
      </table>
      <p>
        It's currently {turn}'s turn
      </p>
      <button onClick={resetBoard}>Reset Board</button>
      <p>
        {message}
      </p>
    </div>
  );
};

export default App;
