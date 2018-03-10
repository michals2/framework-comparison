import React from "react";

const cornerDim = 66;

const CornerRect = ({ rectData, position }) => {
  return (
    <rect
      height={cornerDim}
      width={cornerDim}
      style={{ fill: "none", stroke: "green", strokeWidth: 1 }}
    />
  );
};
export default CornerRect;
