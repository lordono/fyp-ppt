import React, { useRef, useState, useEffect, useContext } from "react";
import UISvgRect from "./Svg/Rect";
import UISvgLine from "./Svg/Line";
import UISvgImage from "./Svg/Image";
import UISvgBinaryCheck from "./Svg/BinaryCheck";
import UISvgCheck from "./Svg/Check";
import UISvgBug from "./Svg/Bug";
import UISvgMagnifying from "./Svg/Magnifying";
import UISvgCamera from "./Svg/Camera";
import UISvgDefectCheck from "./Svg/DefectCheck";
import { StoreContext } from "../../context";

const UIIllustration = () => {
  const {
    stageStore: [stage],
    loadingStore: [loading],
    classifyResultStore: [classifyResult]
  } = useContext(StoreContext);
  const svgRef = useRef(null);
  const [width, setWidth] = useState(1);
  useEffect(() => {
    if (svgRef) {
      setWidth(svgRef.current.clientWidth);
    }
  }, [svgRef]);

  return (
    <div className="illustration-container">
      <svg className="illustration-svg" ref={svgRef}>
        {/* Lines */}
        <UISvgLine
          width={width}
          pos1="c"
          pos2="c"
          y={0}
          animate={stage === 1 && loading}
        />
        <UISvgLine
          width={width}
          pos1="c"
          pos2="l"
          y={1}
          animate={
            stage === 2 && classifyResult.prediction.defective && !loading
          }
        />
        <UISvgLine
          width={width}
          pos1="c"
          pos2="r"
          y={1}
          animate={
            stage === 2 && !classifyResult.prediction.defective && !loading
          }
        />
        <UISvgLine
          width={width}
          pos1="l"
          pos2="l"
          y={2}
          animate={stage === 2 && loading}
        />
        <UISvgLine
          width={width}
          pos1="l"
          pos2="l"
          y={3}
          animate={stage === 3}
        />

        {/* Rects */}
        <UISvgRect
          y={0}
          width={width}
          SvgComponent={UISvgCamera}
          title="Camera"
          active={stage === 1}
        />
        <UISvgRect
          y={1}
          width={width}
          SvgComponent={UISvgBinaryCheck}
          title="Binary Check"
          active={(stage === 1 && loading) || (stage === 2 && !loading)}
        />
        <UISvgRect
          y={2}
          width={width}
          SvgComponent={UISvgBug}
          pos="left"
          title="Defect Found"
          active={
            (stage === 2 && classifyResult.prediction.defective) ||
            (stage === 3 && loading)
          }
        />
        <UISvgRect
          y={2}
          width={width}
          SvgComponent={UISvgCheck}
          pos="right"
          title="No Defect"
          active={stage === 2 && !classifyResult.prediction.defective}
        />
        <UISvgRect
          y={3}
          width={width}
          SvgComponent={UISvgDefectCheck}
          pos="left"
          title="Defect Check"
          active={stage === 3 || (stage === 2 && loading)}
        />
        <UISvgRect
          y={4}
          width={width}
          SvgComponent={UISvgMagnifying}
          pos="left"
          title="Defect Details"
          active={stage === 3 && !loading}
        />
      </svg>
    </div>
  );
};

export default UIIllustration;
