// src/typography/text/addPropertyControls.ts
import { addPropertyControls, ControlType } from "framer";
import { Text } from "./Text.js";
addPropertyControls(Text, {
  theme: {
    type: ControlType.Enum,
    options: ["light", "dark"],
    defaultValue: "light",
    displaySegmentedControl: true
  },
  size: {
    type: ControlType.Enum,
    options: ["Header1", "Header2", "Header3", "Header4", "Body1", "Body2", "Body3", "Caption"],
    defaultValue: "Body1"
  },
  color: {
    type: ControlType.Enum,
    options: ["grey_40", "grey_50", "grey_60", "grey_70", "main_green_10", "red_10"]
  },
  align: {
    type: ControlType.Enum,
    options: ["left", "center", "right"],
    displaySegmentedControl: true
  },
  text: {
    type: ControlType.String,
    defaultValue: "42\uC6D4\uB4DC\uC5D0 \uC624\uC2E0\uAC78 \uD658\uC601\uD569\uB2C8\uB2E4",
    displayTextArea: true
  }
});
