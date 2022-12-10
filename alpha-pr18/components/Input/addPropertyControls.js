// src/components/Input/addPropertyControls.ts
import { addPropertyControls, ControlType } from "framer";
import { Input } from "./Input.js";
addPropertyControls(Input, {
  theme: {
    type: ControlType.Enum,
    displaySegmentedControl: true,
    options: ["light", "dark"],
    defaultValue: "light"
  },
  isError: {
    type: ControlType.Boolean,
    defaultValue: true
  },
  errorMessage: {
    type: ControlType.String,
    defaultValue: "\uC5D0\uB7EC \uBA54\uC2DC\uC9C0"
  },
  value: {
    type: ControlType.String,
    defaultValue: ""
  },
  onChange: {
    type: ControlType.EventHandler
  },
  onChangeless: {
    type: ControlType.Boolean,
    defaultValue: false
  },
  placeholder: {
    type: ControlType.String,
    defaultValue: "placeholder"
  }
});
