// src/typography/Text/utils/getThemeColor.ts
import { token } from "../../../common/token/index.js";
function getThemeColor(theme, color) {
  return theme === "light" ? getLightColor(color) : getDarkColor(color);
}
var getLightColor = (color) => color === "grey_40" ? token.color.grey_40_light : color === "grey_50" ? token.color.grey_50_light : color === "grey_60" ? token.color.grey_60_light : color === "grey_70" ? token.color.grey_70_light : color === "main_green_10" ? token.color.main_green_10 : color === "red_10" ? token.color.red_10_light : token.color.grey_50_light;
var getDarkColor = (color) => color === "grey_40" ? token.color.grey_40_dark : color === "grey_50" ? token.color.grey_50_dark : color === "grey_60" ? token.color.grey_60_dark : color === "grey_70" ? token.color.grey_70_dark : color === "main_green_10" ? token.color.main_green_10 : color === "red_10" ? token.color.red_10_light : token.color.grey_50_light;
export {
  getThemeColor
};
