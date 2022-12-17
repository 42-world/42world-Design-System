// src/components/SortSelector/addPropertyControls.ts
import { ControlType } from "framer";
import { themeProperty } from "../../common/property/index.js";
import { addStrictPropertyControls } from "../../common/utils/index.js";
import { SortSelector } from "./SortSelector.js";
addStrictPropertyControls(SortSelector, {
  theme: themeProperty,
  selectedIndex: {
    title: "SelectedIndex",
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
        link: {
          type: ControlType.Link
        }
      }
    },
    defaultValue: [{ text: "sort1" }, { text: "sort2" }, { text: "sort3" }]
  },
  onClick: {
    title: "onClick",
    type: ControlType.EventHandler
  }
});
//# sourceMappingURL=addPropertyControls.js.map
