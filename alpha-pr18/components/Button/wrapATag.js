// src/components/Button/wrapATag.tsx
function wrapATag(herf, children) {
  return /* @__PURE__ */ React.createElement("a", {
    href: herf
  }, children);
}
export {
  wrapATag
};
