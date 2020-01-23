import React from "react";
import { motion } from "framer-motion";

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
    stroke: animate ? "orange" : "gray"
  };
  if (animate) {
    return (
      <motion.line
        initial={{
          strokeDashoffset: 10
        }}
        animate={{ strokeDashoffset: -300 }}
        transition={{
          duration: 10,
          ease: "linear",
          loop: Infinity
        }}
        {...coordProps}
        strokeDasharray={3}
        strokeWidth="3"
      />
    );
  } else {
    return <line {...coordProps} strokeWidth="3" />;
  }
};

export default UISvgLine;
