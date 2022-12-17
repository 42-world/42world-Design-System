// src/typography/Text/addPropertyControls.ts
import { ControlType } from "framer";
import { addStrictPropertyControls } from "../../common/utils/index.js";
import { Text } from "./Text.js";
addStrictPropertyControls(Text, {
  theme: {
    title: "Theme",
    type: ControlType.Enum,
    options: ["light", "dark"],
    defaultValue: "light",
    displaySegmentedControl: true
  },
  text: {
    title: "Text",
    type: ControlType.String,
    defaultValue: "42\uC6D4\uB4DC\uC5D0 \uC624\uC2E0\uAC78 \uD658\uC601\uD569\uB2C8\uB2E4",
    displayTextArea: true
  },
  size: {
    title: "Size",
    type: ControlType.Enum,
    options: ["header1", "header2", "header3", "header4", "body1", "body2", "body3", "caption"],
    defaultValue: "Body1"
  },
  color: {
    title: "Color",
    type: ControlType.Enum,
    options: ["grey_40", "grey_50", "grey_60", "grey_70", "main_green_10", "red_10"]
  },
  align: {
    title: "Align",
    type: ControlType.Enum,
    options: ["left", "center", "right"],
    displaySegmentedControl: true
  }
});
//# sourceMappingURL=addPropertyControls.js.map
