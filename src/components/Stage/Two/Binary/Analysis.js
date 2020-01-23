import React from "react";

const StageTwoBinaryAnalysis = ({ result }) => {
  const bgPrediction = `card has-background-${
    result.prediction.defective ? "danger" : "success"
  }`;
  const bgActual = `card has-background-${
    result.actual.defective ? "danger" : "success"
  }`;
  return (
    <div className="stage-two-analytic has-text-grey-dark">
      <div className="analysis-container">
        <div className={bgPrediction}>
          <h1>{result.prediction.defective ? "Fail" : "Pass"}</h1>
          <div>Prediction</div>
        </div>
        <div className="card">
          <h1>{Math.round(result.prediction.confidence * 100)}%</h1>
          <div>Confidence</div>
        </div>
        <div className={bgActual}>
          <h1>{result.actual.defective ? "Fail" : "Pass"}</h1>
          <div>Actual</div>
        </div>
      </div>
    </div>
  );
};

export default StageTwoBinaryAnalysis;
