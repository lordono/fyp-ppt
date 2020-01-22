import React from "react";

const StageOneBinaryAnalysis = () => {
  return (
    <div className="stage-one-analytic has-text-grey-dark">
      <h1 className="has-text-grey-dark" style={{ textAlign: "center" }}>
        Binary Defect Analysis
      </h1>
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

export default StageOneBinaryAnalysis;
