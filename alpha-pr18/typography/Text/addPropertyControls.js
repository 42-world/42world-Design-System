// src/typography/Text/addPropertyControls.ts
import { addPropertyControls, ControlType } from "framer";
import { Text } from "./Text.js";
addPropertyControls(Text, {
  theme: {
    title: "\uD14C\uB9C8",
    type: ControlType.Enum,
    options: ["light", "dark"],
    defaultValue: "light",
    displaySegmentedControl: true
  },
  size: {
    title: "\uD06C\uAE30",
    type: ControlType.Enum,
    options: ["header1", "header2", "header3", "header4", "body1", "body2", "body3", "caption"],
    defaultValue: "Body1"
  },
  color: {
    title: "\uC0C9\uAE54",
    type: ControlType.Enum,
    options: ["grey_40", "grey_50", "grey_60", "grey_70", "main_green_10", "red_10"]
  },
  align: {
    title: "\uC815\uB82C",
    type: ControlType.Enum,
    options: ["left", "center", "right"],
    displaySegmentedControl: true
  },
  text: {
    title: "\uB0B4\uC6A9",
    type: ControlType.String,
    defaultValue: "42\uC6D4\uB4DC\uC5D0 \uC624\uC2E0\uAC78 \uD658\uC601\uD569\uB2C8\uB2E4",
    displayTextArea: true
  }
});
