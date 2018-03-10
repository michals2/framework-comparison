import React from "react";
import board from "../assets/board.jpg";

const boardDim = 500;
const boardPadding = 100;
const containerDim = boardDim + 2 * boardPadding;

const cornerPieceDim = 66;
const propertyWidth = 41;

const Board = () =>
  <svg
    height={containerDim}
    width={containerDim}
    style={{ border: "1px solid black" }}
  >
    <image
      href={board}
      x={boardPadding}
      y={boardPadding}
      height={boardDim}
      width={boardDim}
    />
    <rect
      x={boardPadding}
      y={boardPadding}
      height={boardDim}
      width={boardDim}
      style={{ fill: "none", stroke: "blue", strokeWidth: 1 }}
    />
    <rect
      x={boardPadding}
      y={boardPadding}
      height={cornerPieceDim}
      width={cornerPieceDim}
      style={{ fill: "none", stroke: "green", strokeWidth: 1 }}
    />
    <rect
      x={boardPadding}
      y={boardPadding + cornerPieceDim}
      height={propertyWidth}
      width={cornerPieceDim}
      style={{ fill: "none", stroke: "red", strokeWidth: 1 }}
    />
  </svg>;

export default Board;
