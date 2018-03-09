import React from "react";

const Square = ({ squareData, handleSquareClick }) => (
  <td onClick={() => handleSquareClick(squareData.id)}>{squareData.st}</td>
);

export default Square;
