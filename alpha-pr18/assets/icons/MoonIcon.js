// src/assets/icons/MoonIcon.tsx
import { token } from "../../common/token/index.js";
var MoonIcon = ({ color: colorName }) => {
  return /* @__PURE__ */ React.createElement("svg", {
    viewBox: "0 0 20 20",
    fill: "currentColor",
    width: "24",
    height: "24",
    color: token.color[colorName]
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
  }));
};
export {
  MoonIcon
};
