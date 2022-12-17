// src/components/Comment/addPropertyControls.ts
import { ControlType } from "framer";
import { themeProperty } from "../../common/property/index.js";
import { addStrictPropertyControls } from "../../common/utils/index.js";
import { Comment } from "./Comment.js";
addStrictPropertyControls(Comment, {
  theme: themeProperty,
  writerName: {
    title: "Writer Name",
    type: ControlType.String,
    defaultValue: "beson"
  },
  writerImg: {
    title: "Writer Image",
    type: ControlType.Image
  },
  text: {
    title: "Text",
    type: ControlType.String,
    defaultValue: "\uC800\uB3C4 \uB9C8\uCC2C\uAC00\uC9C0\uC5D0\uC694! \uD56D\uC0C1 \uAD70\uB300\uC5D0\uC11C \uBB58 \uC900\uBE44\uD574\uC57C\uD560\uC9C0 \uBAA8\uB974\uACA0\uC5B4\uC694 \u3160\u3160\u315C\u315C\u315C\u315C"
  },
  isLike: {
    title: "Like",
    type: ControlType.Boolean,
    defaultValue: false
  },
  likeCount: {
    title: "Like Count",
    type: ControlType.Number,
    defaultValue: 0,
    min: 0,
    displayStepper: true
  },
  createdAt: {
    title: "Created At",
    type: ControlType.String,
    defaultValue: "1\uBD84 \uC804"
  }
});
//# sourceMappingURL=addPropertyControls.js.map
