import React, { useEffect, useState, useContext, useRef } from "react";
import UILoading from "../../UI/Loading";
import StageThreeDescription from "./Description";
import { StoreContext } from "../../../context";
import StageThreeBinaryAnalysis from "./Binary/Analysis";

const StageThree = () => {
  const [clicked, setClicked] = useState({});
  const imageRef = useRef(null);
  const {
    stageStore: [, setStage],
    imageStore: [image],
    loadingStore: [loading, setLoading],
    detectResultStore: [detectResult]
  } = useContext(StoreContext);
  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  if (imageRef.current)
    console.log(imageRef.current.width, imageRef.current.naturalWidth);

  const drawCanvas = () => {
    if (imageRef.current && clicked !== {}) {
      const bbox = clicked.bounding_box;
      const widthScale = imageRef.current.width / imageRef.current.naturalWidth;
      const heightScale =
        imageRef.current.height / imageRef.current.naturalHeight;
      return (
        <svg
          width={imageRef.current.width}
          height={imageRef.current.height}
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <rect
            x={bbox[0] * widthScale}
            y={bbox[1] * heightScale}
            width={(bbox[2] - bbox[0]) * widthScale}
            height={(bbox[3] - bbox[1]) * heightScale}
            stroke="red"
            fill="transparent"
            stroke-width="2"
          />
        </svg>
      );
    } else {
      return null;
    }
  };

  if (loading) {
    return (
      <UILoading title="Loading" description="Communicating with backend" />
    );
  } else {
    return (
      <div className="stage-two-container">
        <div className="stage-two-side" style={{ position: "relative" }}>
          <div className="stage-two-image">
            <img src={image} alt="Defect" ref={imageRef} />
            {drawCanvas()}
          </div>
          <StageThreeBinaryAnalysis
            results={detectResult}
            setClicked={setClicked}
          />
          <div
            style={{
              marginTop: "2vmin",
              display: "flex",
              justifyContent: "center",
              width: "100%"
            }}
          >
            <button className="button is-info" onClick={() => setStage(1)}>
              Reset
            </button>
          </div>
        </div>
        <StageThreeDescription />
      </div>
    );
  }
};

export default StageThree;
