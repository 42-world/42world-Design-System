// src/assets/icons/ThumbIcon.tsx
import { token } from "../../common/token/index.js";
var ThumbIcon = ({ color: colorName }) => {
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
    d: "M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
  }));
};
export {
  ThumbIcon
};
//# sourceMappingURL=ThumbIcon.js.map
