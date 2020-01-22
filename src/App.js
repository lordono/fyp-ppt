import React, { useState } from "react";
import UIIllustration from "./components/UI/Illustration";
import StageOne from "./components/Stage/One/One";
import StageTwo from "./components/Stage/Two/Two";
import { AnimatePresence } from "framer-motion";
import UILoading from "./components/UI/Loading";

const App = () => {
  const [stage, setStage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const stageProps = {
    image,
    setImage,
    name,
    setName,
    setStage,
    loading,
    setLoading
  };
  console.log(loading);
  return (
    <div className="container is-fluid h-100">
      <div className="columns h-100">
        <div className="is-two-thirds column h-100">
          <div className="card card-main">
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <h1 className="title-with-subtitles">Deflecter</h1>
                  <h4 className="light-bold">by talented ISS students</h4>
                </div>
              </div>
              <div className="content stage-content">
                <AnimatePresence>
                  {stage === 1 && <StageOne {...stageProps} />}
                  {stage === 2 && <StageTwo {...stageProps} />}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
        <div className="column h-100">
          <UIIllustration stage={stage} setStage={setStage} />
        </div>
      </div>
    </div>
  );
};

export default App;
