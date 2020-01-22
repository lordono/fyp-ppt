import React, { useEffect, useState } from "react";
import StageTwoBinaryAnalysis from "./Binary/Analysis";
import UILoading from "../../UI/Loading";
import StageTwoDescription from "./Description";

const StageTwo = ({ image, setStage, loading, setLoading }) => {
  const [hasDefect, setHasDefect] = useState(true);
  useEffect(() => {
    setLoading(false);
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
          <StageTwoBinaryAnalysis />
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
        <StageTwoDescription />
      </div>
    );
  }
};

export default StageTwo;
