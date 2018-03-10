import React from "react";
import board from "../assets/board.jpg";
import boardData from "../assets/boardData.js";
import Row from "./Row";

const boardDim = 500;
const boardPadding = 100;
const containerDim = boardDim + 2 * boardPadding;

const rowsData = [
  {
    transform: `translate(${boardDim}, ${boardDim}) rotate(${180}, 0, 0)`,
    rectData: boardData.slice(0, 10)
  },
  {
    transform: `translate(${0}, ${boardDim}) rotate(${-90}, 0, 0)`,
    rectData: boardData.slice(10, 20)
  },
  {
    transform: `translate(${0}, ${0}) rotate(${0}, 0, 0)`,
    rectData: boardData.slice(20, 30)
  },
  {
    transform: `translate(${boardDim}, ${0}) rotate(${90}, 0, 0)`,
    rectData: boardData.slice(30)
  }
];

const Board = () =>
  <svg
    height={containerDim}
    width={containerDim}
    style={{ border: "1px solid black" }}
  >
    <g transform={`translate(${boardPadding}, ${boardPadding})`}>
      <image href={board} height={boardDim} width={boardDim} />
      <rect
        height={boardDim}
        width={boardDim}
        style={{ fill: "none", stroke: "blue", strokeWidth: 1 }}
      />
      {rowsData.map(r =>
        <Row rectsData={r.rectData} transformData={r.transform} />
      )}
    </g>
  </svg>;

export default Board;
