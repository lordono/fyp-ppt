import React from "react";

const calcX = (width, rectMultipler, position) => {
  if (position === "c") {
    return 0.5 * width;
  } else if (position === "l") {
    return rectMultipler * width * 1.5;
  } else {
    return (1 - rectMultipler * 1.5) * width;
  }
};

const UISvgLine = ({ width, pos1, pos2, y, animate = false }) => {
  const rectMultipler = 1 / 6;
  const rectWidth = width * rectMultipler;
  const actualY = rectWidth * 1.6 * y;
  const coordProps = {
    x1: calcX(width, rectMultipler, pos1),
    x2: calcX(width, rectMultipler, pos2),
    y1: actualY + rectWidth / 2,
    y2: actualY + rectWidth * 2,
    strokeDasharray: animate ? "3" : "0",
    stroke: animate ? "orange" : "gray"
  };
  return <line {...coordProps} strokeWidth="3" />;
};

export default UISvgLine;
