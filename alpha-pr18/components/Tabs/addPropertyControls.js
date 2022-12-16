// src/components/Tabs/addPropertyControls.ts
import { ControlType } from "framer";
import { themeProperty } from "../../common/property/index.js";
import { addStrictPropertyControls } from "../../common/utils/index.js";
import { Tabs } from "./Tabs.js";
addStrictPropertyControls(Tabs, {
  theme: themeProperty,
  label: {
    title: "Label",
    type: ControlType.Array,
    control: {
      type: ControlType.String
    },
    defaultValue: ["text1", "text2", "text3"]
  },
  children: {
    title: "Children",
    type: ControlType.Array,
    control: {
      type: ControlType.ComponentInstance
    }
  },
  align: {
    title: "Align",
    type: ControlType.Enum,
    options: ["left", "center"],
    defaultValue: "left",
    displaySegmentedControl: true
  }
});
//# sourceMappingURL=addPropertyControls.js.map
