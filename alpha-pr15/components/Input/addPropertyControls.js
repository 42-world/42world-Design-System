// src/components/Input/addPropertyControls.ts
import { ControlType } from "framer";
import { themeProperty } from "../../common/property/index.js";
import { addStrictPropertyControls } from "../../common/utils/index.js";
import { Input } from "./Input.js";
addStrictPropertyControls(Input, {
  theme: themeProperty,
  value: {
    title: "Value",
    type: ControlType.String,
    defaultValue: "value"
  },
  onChangeless: {
    title: "onChangeless",
    type: ControlType.Boolean,
    defaultValue: false
  },
  hasError: {
    title: "Error",
    type: ControlType.Boolean,
    defaultValue: false
  },
  errorMessage: {
    title: "Error Message",
    type: ControlType.String,
    defaultValue: "\uC5D0\uB7EC \uBA54\uC2DC\uC9C0"
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  },
  onChange: {
    title: "onChange",
    type: ControlType.EventHandler
  }
});
//# sourceMappingURL=addPropertyControls.js.map
