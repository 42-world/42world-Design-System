// src/components/Comment/addPropertyControls.ts
import { addPropertyControls, ControlType } from "framer";
import { Comment } from "./Comment.js";
addPropertyControls(Comment, {
  theme: {
    type: ControlType.Enum,
    displaySegmentedControl: true,
    options: ["light", "dark"],
    defaultValue: "light"
  },
  text: {
    type: ControlType.String,
    defaultValue: "\uC800\uB3C4 \uB9C8\uCC2C\uAC00\uC9C0\uC5D0\uC694! \uD56D\uC0C1 \uAD70\uB300\uC5D0\uC11C \uBB58 \uC900\uBE44\uD574\uC57C\uD560\uC9C0 \uBAA8\uB974\uACA0\uC5B4\uC694 \u3160\u3160\u315C\u315C\u315C\u315C"
  },
  isThumbed: {
    type: ControlType.Boolean,
    defaultValue: false
  },
  thumbCount: {
    type: ControlType.Number,
    defaultValue: 1,
    min: 0,
    displayStepper: true
  },
  user: {
    type: ControlType.Object,
    controls: {
      username: {
        type: ControlType.String,
        defaultValue: "beson"
      },
      profileImg: {
        type: ControlType.Image
      },
      createdAt: {
        type: ControlType.String,
        defaultValue: "2\uC2DC\uAC04 \uC804"
      }
    }
  }
});
