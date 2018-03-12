import React from "react";
import "./App.css";
import Row from "./Row";

const App = ({ state, actions }) => {
  console.log({ state, actions });
  const { boardState, turn, message } = state;
  const dataByRows = [
    boardState.slice(0, 3),
    boardState.slice(3, 6),
    boardState.slice(6)
  ];

  const handleSquareClick = () => {
    console.log("click");
  };

  const resetBoard = () => {
    console.log("reset");
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
