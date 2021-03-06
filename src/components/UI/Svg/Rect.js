import React, { useState, useEffect } from "react";

const UISvgRect = ({
  y,
  width,
  SvgComponent,
  title,
  pos = "center",
  active = false
}) => {
  const [x, setX] = useState(0);
  const rectMultiplier = 1 / 6;
  useEffect(() => {
    if (width) {
      if (pos === "center") setX((0.5 - rectMultiplier / 2) * width);
      else if (pos === "left") setX(rectMultiplier * width);
      else if (pos === "right") setX((1 - rectMultiplier * 2) * width);
    }
  }, [width, pos, rectMultiplier]);
  const rectWidth = width * rectMultiplier;
  const actualY = rectWidth * 1.6 * y;
  const svgWidth = (rectWidth * 3) / 5;
  return (
    <>
      <rect
        x={x}
        y={actualY}
        width={rectWidth}
        height={rectWidth}
        rx="15"
        fill="#e8e8e8"
      />
      <SvgComponent
        width={svgWidth}
        x={x + rectWidth / 5}
        y={actualY + 10}
        active={active}
      />
      <text
        x={x + rectWidth / 2}
        y={actualY + rectWidth - 12.5}
        textAnchor="middle"
        fontWeight="bold"
      >
        {title}
      </text>
    </>
  );
};

export default UISvgRect;
