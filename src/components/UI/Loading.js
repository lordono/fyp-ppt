import React from "react";
import { motion } from "framer-motion";

const UILoading = ({ title, description }) => {
  return (
    <motion.div
      className="stage-one-loading has-text-grey-dark"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>{description}</div>
      <div style={{ marginTop: "calc(20% - 12vmin)" }} className="load-gif">
        <motion.div
          className="has-background-white-bis"
          style={{
            position: "relative",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
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
        ></motion.div>
        {/* <h1
          className="has-text-grey-dark"
          style={{ position: "relative", top: "50%", left: "50%", zIndex: 2 }}
        >
          {title}
        </h1> */}
      </div>
    </motion.div>
  );
};

export default UILoading;
