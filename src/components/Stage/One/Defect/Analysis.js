import React from "react";

const StageOneDefectAnalysis = () => {
  return (
    <div className="stage-one-description has-text-grey-dark">
      <h1 className="has-text-grey-dark">Defect Analysis</h1>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nibh
        arcu, sagittis eget enim sit amet, dignissim aliquam sem. Quisque tellus
        nisi, eleifend sed metus eget, iaculis placerat diam. Vivamus felis leo,
        laoreet pretium elementum et, facilisis fermentum eros. Aliquam vitae
        elit cursus, ultrices nulla quis, rutrum lectus. Proin est orci,
        venenatis at suscipit in, posuere ut purus. Aenean ultrices nunc non
        orci tristique bibendum. Aenean porttitor nunc nec nisl pretium
        elementum.
      </div>
      <br />
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

export default StageOneDefectAnalysis;
