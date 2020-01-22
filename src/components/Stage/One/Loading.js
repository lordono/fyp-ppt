import React from "react";
import { motion } from "framer-motion";

const StageOneLoading = ({ title, description }) => {
  return (
    <motion.div className="stage-one-loading has-text-grey-dark">
      {/* <motion.div
        className="has-background-white-bis load-gif"
        style={{ position: "absolute", top: "45%" }}
        animate={{
          scale: [1, 1.5, 1.5, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"]
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          loop: Infinity,
          repeatDelay: 1
        }}
      ></motion.div> */}
      <h1
        className="has-text-grey-dark"
        style={{ position: "absolute", top: "50%" }}
      >
        {title}
      </h1>
      <div style={{ position: "absolute", top: "32.5%" }}>{description}</div>
    </motion.div>
  );
};

export default StageOneLoading;
