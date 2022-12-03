// src/typography/text/utils/getFontWeight.ts
var getFontWeight = (size) => size === "Header1" ? 600 : size === "Header2" ? 600 : size === "Header3" ? 600 : size === "Header4" ? 600 : size === "Body1" ? 500 : 500;
export {
  getFontWeight
};
