// src/components/Comment.tsx
import { Text } from "../typography/Text.js";
import { Avatar } from "./Avatar.js";
function Comment({ theme, text, isThumbed, thumbCount, user }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: containerStyle
  }, /* @__PURE__ */ React.createElement(Avatar, {
    createdAt: user.createdAt,
    profileImg: user.profileImg,
    theme,
    username: user.username
  }), /* @__PURE__ */ React.createElement("div", {
    className: textWrapperStyle
  }, /* @__PURE__ */ React.createElement(Text, {
    size: "Body3",
    align: "left",
    color: "grey_50",
    text,
    theme
  }), /* @__PURE__ */ React.createElement(Text, {
    size: "Caption",
    align: "left",
    color: isThumbed ? "main_green_10" : "grey_50",
    text: `\uC88B\uC544\uC694 ${thumbCount}`,
    theme
  })));
}
var containerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
var textWrapperStyle = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 52px;
`;
export {
  Comment
};
