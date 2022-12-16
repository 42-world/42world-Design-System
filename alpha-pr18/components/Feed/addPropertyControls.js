// src/components/Feed/addPropertyControls.ts
import { addPropertyControls, ControlType } from "framer";
import { themeProperty } from "../../common/property/index.js";
import { Feed } from "./Feed.js";
addPropertyControls(Feed, {
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
  title: {
    title: "Title",
    type: ControlType.String,
    defaultValue: "\uC81C\uBAA9"
  },
  contents: {
    title: "Contents",
    type: ControlType.String,
    defaultValue: "\uB098\uB78F\uB9D0\uC2F8\uBBF8 \uB4D5\uADC1\uC5D0 \uB2EC\uC544 \uBB38\uC790\uC640\uB85C \uC11C\uB974 \uC0AC\uB9DB\uB514 \uC544\uB2C8\uD560\uC384 \uC774\uB7F0 \uC83C\uCC28\uB85C \uC5B4\uB9B0 \uBC31\uC169\uC774 \uB2C8\uB974\uACE0\uC838 \uD640 \uBC30 \uC774\uC154\uB3C4 \uB9C8\uCC38\uB0B4 \uC81C \uB728\uB4E4 \uC2DC\uB7EC\uD3B4\uB514 \uBAAF \uD560 \uB178\uBBF8 \uD558\uB2C8\uB77C"
  },
  isLike: {
    title: "Like",
    type: ControlType.Boolean,
    defaultValue: false
  },
  likeCount: {
    title: "Like Count",
    type: ControlType.Number,
    defaultValue: 1
  },
  commentCount: {
    title: "Comment Count",
    type: ControlType.Number,
    defaultValue: 1
  },
  createdAt: {
    title: "Created At",
    type: ControlType.Number,
    defaultValue: 1,
    min: 0,
    displayStepper: true
  },
  onLikeClick: {
    type: ControlType.EventHandler
  }
});
//# sourceMappingURL=addPropertyControls.js.map
