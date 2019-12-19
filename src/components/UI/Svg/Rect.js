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
  const rectMultipler = 1 / 6;
  useEffect(() => {
    if (width) {
      if (pos === "center") setX((0.5 - rectMultipler / 2) * width);
      else if (pos === "left") setX(rectMultipler * width);
      else if (pos === "right") setX((1 - rectMultipler * 2) * width);
    }
  }, [width, pos, rectMultipler]);
  const rectWidth = width * rectMultipler;
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
        className={`${active ? "" : "grayscale"}`}
      />
      <SvgComponent width={svgWidth} x={x + rectWidth / 5} y={actualY + 10} />
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
