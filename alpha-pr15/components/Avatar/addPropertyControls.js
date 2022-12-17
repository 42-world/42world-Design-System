// src/components/Avatar/addPropertyControls.ts
import { ControlType } from "framer";
import { themeProperty } from "../../common/property/index.js";
import { addStrictPropertyControls } from "../../common/utils/index.js";
import { Avatar } from "./Avatar.js";
addStrictPropertyControls(Avatar, {
  theme: themeProperty,
  img: {
    title: "Profile Image",
    type: ControlType.ResponsiveImage
  },
  name: {
    title: "Name",
    type: ControlType.String
  },
  seconderyText: {
    title: "Secondery Text",
    type: ControlType.String
  }
});
//# sourceMappingURL=addPropertyControls.js.map
