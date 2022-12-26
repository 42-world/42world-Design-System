// src/components/Button/addPropertyControls.ts
import { ControlType } from "framer";
import { themeProperty } from "../../common/property/index.js";
import { addStrictPropertyControls } from "../../common/utils/index.js";
import { Button } from "./Button.js";
addStrictPropertyControls(Button, {
  theme: themeProperty,
  type: {
    title: "Type",
    type: ControlType.Enum,
    options: ["text", "link"],
    defaultValue: "text",
    displaySegmentedControl: true
  },
  text: {
    title: "Text",
    type: ControlType.String,
    defaultValue: "text"
  },
  link: {
    title: "Link",
    type: ControlType.Link,
    defaultValue: "https://42world.kr",
    hidden: ({ type }) => !(type === "link")
  },
  size: {
    title: "Size",
    type: ControlType.Enum,
    options: ["normal", "small"],
    defaultValue: "normal",
    displaySegmentedControl: true
  },
  style: {
    title: "Style",
    type: ControlType.Enum,
    options: ["default", "primary", "danger"],
    defaultValue: "default",
    displaySegmentedControl: true
  },
  onClick: {
    title: "onClick",
    type: ControlType.EventHandler,
    hidden: ({ type }) => !(type === "text")
  }
});
//# sourceMappingURL=addPropertyControls.js.map