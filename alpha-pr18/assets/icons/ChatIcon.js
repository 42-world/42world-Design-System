// src/assets/icons/ChatIcon.tsx
import { token } from "../../common/token/index.js";
var ChatIcon = ({ color: colorName }) => {
  return /* @__PURE__ */ React.createElement("svg", {
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    width: "18",
    height: "18",
    color: token.color[colorName]
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
  }));
};
export {
  ChatIcon
};
