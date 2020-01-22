import React, { useEffect, useState } from "react";
import StageThreeBinaryAnalysis from "./Binary/Analysis";
import UILoading from "../../UI/Loading";
import StageThreeDescription from "./Description";

const StageThree = ({ image, setStage, loading, setLoading }) => {
  const [hasDefect, setHasDefect] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, [setLoading]);
  const clickAnalyze = () => null;
  if (loading) {
    return (
      <UILoading title="Loading" description="Communicating with backend" />
    );
  } else {
    return (
      <div className="stage-two-container">
        <div className="stage-two-side">
          <div className="stage-two-image">
            <img src={image} alt="Defect" />
          </div>
          <StageThreeBinaryAnalysis />
          {hasDefect && (
            <div
              style={{
                marginTop: "2vmin",
                display: "flex",
                justifyContent: "center",
                width: "100%"
              }}
            >
              <button className="button is-info" onClick={clickAnalyze}>
                Analyze Defects
              </button>
            </div>
          )}
        </div>
        <StageThreeDescription />
      </div>
    );
  }
};

export default StageThree;
