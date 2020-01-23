import React, { useState, useContext } from "react";
import UIIllustration from "./components/UI/Illustration";
import StageOne from "./components/Stage/One/One";
import StageTwo from "./components/Stage/Two/Two";
import { AnimatePresence } from "framer-motion";
import UILoading from "./components/UI/Loading";
import { StoreContext } from "./context";

const App = () => {
  const {
    stageStore: [stage, setStage]
  } = useContext(StoreContext);
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
                  {stage === 1 && <StageOne />}
                  {stage === 2 && <StageTwo />}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
        <div className="column h-100">
          <UIIllustration />
        </div>
      </div>
    </div>
  );
};

export default App;
