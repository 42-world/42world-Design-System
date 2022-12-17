// src/components/SideNavigation/addPropertyControls.ts
import { ControlType } from "framer";
import { themeProperty } from "../../common/property/index.js";
import { addStrictPropertyControls } from "../../common/utils/index.js";
import { SideNavigation } from "./SideNavigation.js";
addStrictPropertyControls(SideNavigation, {
  theme: themeProperty,
  hasIcon: {
    title: "Icon",
    type: ControlType.Boolean
  },
  focus: {
    title: "Focus",
    type: ControlType.Number,
    displayStepper: true,
    defaultValue: 0,
    min: 0
  },
  list: {
    title: "List",
    type: ControlType.Array,
    control: {
      type: ControlType.Object,
      controls: {
        text: {
          type: ControlType.String
        },
        icon: {
          type: ControlType.String
        },
        link: {
          type: ControlType.Link
        }
      }
    },
    defaultValue: [
      { text: "text1", icon: "Home" },
      { text: "text2", icon: "Map" },
      { text: "text3", icon: "Globe" }
    ]
  }
});
//# sourceMappingURL=addPropertyControls.js.map
