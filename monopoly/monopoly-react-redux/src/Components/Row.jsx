import React from "react";
import MiddleRect from "./MiddleRect";
import CornerRect from "./CornerRect";

const Row = ({ rectsData, transformData }) =>
  <g transform={transformData}>
    <CornerRect rectData={rectsData[0]} />
    <g transform={`translate(66, 0)`}>
      {rectsData
        .slice(1)
        .map((rectData, i) =>
          <MiddleRect rectData={rectData} position={i} key={i} />
        )}
    </g>
  </g>;

export default Row;
