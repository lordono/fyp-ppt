import React from "react";

const StageTwoBinaryAnalysis = () => {
  return (
    <div className="stage-two-analytic has-text-grey-dark">
      <div className="analysis-container">
        <div className="card has-background-success">
          <h1>Pass</h1>
          <div>Prediction</div>
        </div>
        <div className="card">
          <h1>90%</h1>
          <div>Confidence</div>
        </div>
        <div className="card has-background-success">
          <h1>Pass</h1>
          <div>Actual</div>
        </div>
      </div>
    </div>
  );
};

export default StageTwoBinaryAnalysis;
