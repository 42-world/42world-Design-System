// src/components/Chip/addPropertyControls.ts
import { ControlType } from "framer";
import { themeProperty } from "../../common/property/index.js";
import { addStrictPropertyControls } from "../../common/utils/index.js";
import { Chip } from "./Chip.js";
addStrictPropertyControls(Chip, {
  theme: themeProperty,
  text: {
    title: "Text",
    type: ControlType.String,
    defaultValue: "\uD14D\uC2A4\uD2B8"
  },
  isSelected: {
    title: "Is Selected",
    type: ControlType.Boolean,
    defaultValue: false
  },
  onClick: {
    title: "onClick",
    type: ControlType.EventHandler
  }
});
//# sourceMappingURL=addPropertyControls.js.map
