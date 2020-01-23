import React, { useState } from "react";
import useWindowSize from "./functions/useWindowSize";

export const StoreContext = React.createContext(null);

export default ({ children }) => {
  const size = useWindowSize();
  const [stage, setStage] = useState(1);
  const [loading, setLoading] = useState(false);

  // stage 1
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [classifyResult, setClassifyResult] = useState({});

  // stage 2
  const [detectResult, setDetectResult] = useState({});

  const store = {
    isMobile: size.width < 1440,
    stageStore: [stage, setStage],
    loadingStore: [loading, setLoading],
    imageStore: [image, setImage],
    nameStore: [name, setName],
    classifyResultStore: [classifyResult, setClassifyResult],
    detectResultStore: [detectResult, setDetectResult]
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
