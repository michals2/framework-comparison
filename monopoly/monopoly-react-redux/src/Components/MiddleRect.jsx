import React from "react";

const rectDims = { height: 66, width: 41 };

const MiddleRect = ({ rectData, position }) => {
  return (
    <rect
      x={rectDims.width * position}
      height={rectDims.height}
      width={rectDims.width}
      style={{ fill: "none", stroke: "red", strokeWidth: 1 }}
    />
  );
};
export default MiddleRect;
