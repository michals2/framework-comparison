import React from "react";

const propertyDims = { height: 66, width: 41 };

const Property = ({ propertyData, position }) => {
  return (
    <rect
      x={propertyDims.width * position}
      y={0}
      height={propertyDims.height}
      width={propertyDims.width}
      style={{ fill: "none", stroke: "red", strokeWidth: 1 }}
    />
  );
};
export default Property;
