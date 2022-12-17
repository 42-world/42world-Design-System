// src/components/Button/wrapLinkTag.tsx
import { Link } from "framer";
function wrapLinkTag(herf, children) {
  return /* @__PURE__ */ React.createElement(Link, {
    href: herf
  }, children);
}
export {
  wrapLinkTag
};
//# sourceMappingURL=wrapLinkTag.js.map
