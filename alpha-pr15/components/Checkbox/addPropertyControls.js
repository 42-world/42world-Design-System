// src/components/Checkbox/addPropertyControls.ts
import { ControlType } from "framer";
import { themeProperty } from "../../common/property/index.js";
import { addStrictPropertyControls } from "../../common/utils/index.js";
import { Checkbox } from "./Checkbox.js";
addStrictPropertyControls(Checkbox, {
  theme: themeProperty,
  text: {
    title: "Text",
    type: ControlType.String,
    defaultValue: "text"
  },
  isChecked: {
    title: "Checked",
    type: ControlType.Boolean,
    defaultValue: false
  },
  onClick: {
    title: "onClick",
    type: ControlType.EventHandler
  }
});
//# sourceMappingURL=addPropertyControls.js.map
