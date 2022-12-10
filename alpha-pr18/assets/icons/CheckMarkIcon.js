// src/assets/icons/CheckMarkIcon.tsx
import { token } from "../../common/token/index.js";
var CheckMarkIcon = ({ color: colorName }) => {
  return /* @__PURE__ */ React.createElement("svg", {
    className: "checkmarkSvg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    width: "24",
    height: "24",
    color: token.color[colorName]
  }, /* @__PURE__ */ React.createElement("path", {
    "fill-rule": "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
    "clip-rule": "evenodd"
  }));
};
export {
  CheckMarkIcon
};
