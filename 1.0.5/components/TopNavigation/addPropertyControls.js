// src/components/TopNavigation/addPropertyControls.ts
import { ControlType } from "framer";
import { themeProperty } from "../../common/property/index.js";
import { addStrictPropertyControls } from "../../common/utils/index.js";
import { TopNavigation } from "./TopNavigation.js";
addStrictPropertyControls(TopNavigation, {
  theme: themeProperty,
  links: {
    title: "Links",
    type: ControlType.Object,
    controls: {
      homeLink: { type: ControlType.Link },
      themeLink: { type: ControlType.Link },
      searchLink: { type: ControlType.Link },
      createLink: { type: ControlType.Link },
      alertLink: { type: ControlType.Link }
    }
  },
  user: {
    title: "User",
    type: ControlType.Object,
    controls: {
      profileLink: {
        type: ControlType.Link
      },
      profileImg: {
        type: ControlType.Image
      }
    }
  }
});
//# sourceMappingURL=addPropertyControls.js.map
