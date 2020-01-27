import React, { useContext } from "react";
import axios from "axios";
import { motion } from "framer-motion";

import { StoreContext } from "../../../context";
import StageOneUpload from "./Upload";
import StageOneDescription from "./Description";
import UILoading from "../../UI/Loading";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const StageOne = () => {
  const {
    stageStore: [, setStage],
    imageStore: [image, setImage],
    nameStore: [name, setName],
    loadingStore: [loading, setLoading],
    classifyResultStore: [, setClassifyResult]
  } = useContext(StoreContext);

  const clickAnalyze = async () => {
    if (image && name) {
      setLoading(true);
      const postData = {
        image: image.replace(/^data:image\/\w+;base64,/, ""),
        name
      };
      // placeholder
      // await sleep(2000);
      // setClassifyResult({
      //   actual: {
      //     defective: false
      //   },
      //   prediction: {
      //     confidence: "0.9444",
      //     defective: true
      //   }
      // });
      const results = await axios.post(
        `${process.env.REACT_APP_BACKEND_HOST}/classify`,
        postData
      );
      setClassifyResult(results.data);
      setStage(2);
    }
  };
  if (loading) {
    return (
      <UILoading title="Loading" description="Communicating with backend" />
    );
  } else {
    return (
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="stage-one-container"
      >
        <div className="stage-one-side">
          <StageOneUpload image={image} setImage={setImage} setName={setName} />
          <div className="stage-one-title" style={{ marginBottom: "1vmin" }}>
            Upload Image taken from manufacturing line
          </div>
          <button className="button is-info" onClick={clickAnalyze}>
            Analyze Image
          </button>
        </div>

        <StageOneDescription />
      </motion.div>
    );
  }
};

export default StageOne;
