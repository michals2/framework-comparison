import React from "react";
import board from "../assets/board.jpg";

import PropertyRow from "./PropertyRow";

const boardDim = 500;
const boardPadding = 100;
const containerDim = boardDim + 2 * boardPadding;

const cornerPieceDim = 66;
const propertyDims = { height: 66, width: 41 };
const propertyRow = 9 * propertyDims.width;

const rowsData = [
  {
    transform: `translate(${propertyRow + cornerPieceDim}, ${propertyRow +
      2 * cornerPieceDim}) rotate(${180}, 0, 0)`,
    propertiesData: [0, 1, 2, 3, 4, 5, 6, 7, 8]
  },
  {
    transform: `translate(${0}, ${propertyRow +
      cornerPieceDim}) rotate(${-90}, 0, 0)`,
    propertiesData: [9, 10, 11, 12, 13, 14, 15, 16, 17]
  },
  {
    transform: `translate(${cornerPieceDim}, ${0}) rotate(${0}, 0, 0)`,
    propertiesData: [18, 19, 20, 21, 22, 23, 24, 25, 26]
  },
  {
    transform: `translate(${propertyRow +
      2 * cornerPieceDim}, ${cornerPieceDim}) rotate(${90}, 0, 0)`,
    propertiesData: [27, 28, 29, 30, 31, 32, 33, 34, 35]
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
      <rect
        height={cornerPieceDim}
        width={cornerPieceDim}
        style={{ fill: "none", stroke: "green", strokeWidth: 1 }}
      />
      {rowsData.map(r =>
        <PropertyRow
          propertiesData={r.propertiesData}
          transformData={r.transform}
        />
      )}
    </g>
  </svg>;

export default Board;
