import React from "react";
import Square from "./Square";

const Row = ({ rowData, handleSquareClick }) => (
  <tr>
    {rowData.map(squareData => (
      <Square
        key={squareData.id}
        squareData={squareData}
        handleSquareClick={handleSquareClick}
      />
    ))}
  </tr>
);

export default Row;
