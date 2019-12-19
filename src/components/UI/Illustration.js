import React, { useRef, useState, useEffect } from "react";
import UISvgRect from "./Svg/Rect";
import UISvgLine from "./Svg/Line";
import UISvgImage from "./Svg/Image";
import UISvgBinaryCheck from "./Svg/BinaryCheck";
import UISvgCheck from "./Svg/Check";
import UISvgBug from "./Svg/Bug";
import UISvgMagnifying from "./Svg/Magnifying";
import UISvgCamera from "./Svg/Camera";
import UISvgDefectCheck from "./Svg/DefectCheck";

const UIIllustration = ({ stage }) => {
  const svgRef = useRef(null);
  const [width, setWidth] = useState(1);
  useEffect(() => {
    if (svgRef) {
      setWidth(svgRef.current.clientWidth);
    }
  }, [svgRef]);

  const rectMultipler = 1 / 6;
  const y = 1.65;
  const x = (0.375 - rectMultipler / 2) * width;
  const rectWidth = width * rectMultipler;
  const actualY = rectWidth * 1.6 * y;
  const svgWidth = (rectWidth * 2) / 5;
  return (
    <div className="illustration-container">
      <svg className="illustration-svg" ref={svgRef}>
        {/* Lines */}
        <UISvgLine width={width} pos1="c" pos2="c" y={0} animate={false} />
        <UISvgLine width={width} pos1="c" pos2="l" y={1} animate={true} />
        <UISvgLine width={width} pos1="c" pos2="r" y={1} animate={false} />
        <UISvgLine width={width} pos1="l" pos2="l" y={2} animate={false} />
        <UISvgLine width={width} pos1="l" pos2="l" y={3} animate={false} />

        {/* Image */}
        <UISvgImage width={svgWidth} x={x + rectWidth / 5} y={actualY + 10} />
        {/* Rects */}
        <UISvgRect
          y={0}
          width={width}
          SvgComponent={UISvgCamera}
          title="Camera"
        />
        <UISvgRect
          y={1}
          width={width}
          SvgComponent={UISvgBinaryCheck}
          title="Binary Check"
        />
        <UISvgRect
          y={2}
          width={width}
          SvgComponent={UISvgBug}
          pos="left"
          title="Defect Found"
        />
        <UISvgRect
          y={2}
          width={width}
          SvgComponent={UISvgCheck}
          pos="right"
          title="No Defect"
        />
        <UISvgRect
          y={3}
          width={width}
          SvgComponent={UISvgDefectCheck}
          pos="left"
          title="Defect Check"
        />
        <UISvgRect
          y={4}
          width={width}
          SvgComponent={UISvgMagnifying}
          pos="left"
          title="Defect Details"
        />
      </svg>
    </div>
  );
};

export default UIIllustration;
