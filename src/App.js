import React, { useState } from "react";
import UIIllustration from "./components/UI/Illustration";

const App = () => {
  const [stage, setStage] = useState(0);
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
              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <br />
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
