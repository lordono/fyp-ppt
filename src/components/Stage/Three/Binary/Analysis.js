import React from "react";

const StageThreeBinaryAnalysis = ({ results, setClicked }) => {
  return (
    <div className="stage-two-analytic has-text-grey-dark">
      <div className="analysis-container">
        <table className="table is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>No.</th>
              <th>Type</th>
              <th>Confidence</th>
              <th>x1</th>
              <th>y1</th>
              <th>x2</th>
              <th>y2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th colSpan="7" style={{ textAlign: "center" }}>
                Prediction
              </th>
            </tr>
            {results.prediction.map((row, num) => {
              return (
                <tr onPointerEnter={() => setClicked(row)}>
                  <th>{num + 1}</th>
                  <td>{row.type}</td>
                  <td>{Math.round(row.confidence * 100)}%</td>
                  <td>{Math.round(row.bounding_box[0])}</td>
                  <td>{Math.round(row.bounding_box[1])}</td>
                  <td>{Math.round(row.bounding_box[2])}</td>
                  <td>{Math.round(row.bounding_box[3])}</td>
                </tr>
              );
            })}
            <tr>
              <th colSpan="7" style={{ textAlign: "center" }}>
                Actual
              </th>
            </tr>
            {results.actual.map((row, num) => {
              return (
                <tr onPointerEnter={() => setClicked(row)}>
                  <th>{num + 1}</th>
                  <td>{row.type}</td>
                  <td>{Math.round(row.confidence * 100)}%</td>
                  <td>{Math.round(row.bounding_box[0])}</td>
                  <td>{Math.round(row.bounding_box[1])}</td>
                  <td>{Math.round(row.bounding_box[2])}</td>
                  <td>{Math.round(row.bounding_box[3])}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StageThreeBinaryAnalysis;
