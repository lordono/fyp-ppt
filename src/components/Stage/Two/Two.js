import React, { useEffect, useContext } from "react";
import axios from "axios";
import StageTwoBinaryAnalysis from "./Binary/Analysis";
import UILoading from "../../UI/Loading";
import StageTwoDescription from "./Description";
import { StoreContext } from "../../../context";

const StageTwo = () => {
  const {
    stageStore: [, setStage],
    nameStore: [name],
    imageStore: [image],
    loadingStore: [loading, setLoading],
    classifyResultStore: [classifyResult],
    detectResultStore: [, setDetectResult]
  } = useContext(StoreContext);
  useEffect(() => {
    setLoading(false);
  }, [setLoading]);
  const clickAnalyze = async () => {
    if (image && name) {
      setLoading(true);
      const postData = {
        image: image.replace(/^data:image\/\w+;base64,/, ""),
        name
      };
      const results = await axios.post(
        `${process.env.REACT_APP_BACKEND_HOST}/detect`,
        postData
      );
      setDetectResult(results.data);
      setStage(3);
    }
  };
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
          <StageTwoBinaryAnalysis result={classifyResult} />

          <div
            style={{
              marginTop: "2vmin",
              display: "flex",
              justifyContent: "center",
              width: "100%"
            }}
          >
            {classifyResult.prediction.defective && (
              <button className="button is-info" onClick={clickAnalyze}>
                Analyze Defects
              </button>
            )}
            <button className="button is-info" onClick={() => setStage(1)}>
              Reset
            </button>
          </div>
        </div>
        <StageTwoDescription />
      </div>
    );
  }
};

export default StageTwo;
