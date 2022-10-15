// src/MotionButton.tsx
import React from "react";
import { motion } from "framer-motion";
var style = {
  backgroundColor: "red",
  display: "inline-block",
  width: 100,
  height: 100
};
var MotionButton = () => /* @__PURE__ */ React.createElement(motion.button, {
  whileHover: { scale: 0.9 },
  whileTap: { scale: 0.7 },
  style
});
export {
  MotionButton
};
