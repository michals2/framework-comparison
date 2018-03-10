import React from "react";
import Property from "./Property";

const PropertyRow = ({ propertiesData, transformData }) =>
  <g transform={transformData}>
    {propertiesData.map((propertyData, i) =>
      <Property propertyData={propertyData} position={i} key={i} />
    )}
  </g>;

export default PropertyRow;
