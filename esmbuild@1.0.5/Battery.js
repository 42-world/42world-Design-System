var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __reExport = (target, module, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module) => {
  return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
};

// node_modules/fast-deep-equal/react.js
var require_react = __commonJS({
  "node_modules/fast-deep-equal/react.js"(exports, module) {
    "use strict";
    module.exports = function equal(a, b) {
      if (a === b)
        return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor)
          return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length)
            return false;
          for (i = length; i-- !== 0; )
            if (!equal(a[i], b[i]))
              return false;
          return true;
        }
        if (a.constructor === RegExp)
          return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf)
          return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString)
          return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length)
          return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
            return false;
        for (i = length; i-- !== 0; ) {
          var key = keys[i];
          if (key === "_owner" && a.$$typeof) {
            continue;
          }
          if (!equal(a[key], b[key]))
            return false;
        }
        return true;
      }
      return a !== a && b !== b;
    };
  }
});

// src/Battery.tsx
import React from "react";

// node_modules/react-use/esm/useBattery.js
import { useEffect, useState } from "react";

// node_modules/react-use/esm/misc/util.js
function on(obj) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
  if (obj && obj.addEventListener) {
    obj.addEventListener.apply(obj, args);
  }
}
function off(obj) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
  if (obj && obj.removeEventListener) {
    obj.removeEventListener.apply(obj, args);
  }
}
var isNavigator = typeof navigator !== "undefined";

// node_modules/react-use/esm/misc/isDeepEqual.js
var import_react = __toModule(require_react());
var isDeepEqual_default = import_react.default;

// node_modules/react-use/esm/useBattery.js
var nav = isNavigator ? navigator : void 0;
var isBatteryApiSupported = nav && typeof nav.getBattery === "function";
function useBatteryMock() {
  return { isSupported: false };
}
function useBattery() {
  var _a = useState({ isSupported: true, fetched: false }), state = _a[0], setState = _a[1];
  useEffect(function() {
    var isMounted = true;
    var battery = null;
    var handleChange = function() {
      if (!isMounted || !battery) {
        return;
      }
      var newState = {
        isSupported: true,
        fetched: true,
        level: battery.level,
        charging: battery.charging,
        dischargingTime: battery.dischargingTime,
        chargingTime: battery.chargingTime
      };
      !isDeepEqual_default(state, newState) && setState(newState);
    };
    nav.getBattery().then(function(bat) {
      if (!isMounted) {
        return;
      }
      battery = bat;
      on(battery, "chargingchange", handleChange);
      on(battery, "chargingtimechange", handleChange);
      on(battery, "dischargingtimechange", handleChange);
      on(battery, "levelchange", handleChange);
      handleChange();
    });
    return function() {
      isMounted = false;
      if (battery) {
        off(battery, "chargingchange", handleChange);
        off(battery, "chargingtimechange", handleChange);
        off(battery, "dischargingtimechange", handleChange);
        off(battery, "levelchange", handleChange);
      }
    };
  }, []);
  return state;
}
var useBattery_default = isBatteryApiSupported ? useBattery : useBatteryMock;

// src/Battery.tsx
var Battery = () => {
  const batteryState = useBattery_default();
  if (!batteryState.isSupported) {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("strong", null, "Battery sensor"), ": ", /* @__PURE__ */ React.createElement("span", null, "not supported"));
  }
  if (!batteryState.fetched) {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("strong", null, "Battery sensor"), ": ", /* @__PURE__ */ React.createElement("span", null, "supported"), " ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("strong", null, "Battery state"), ": ", /* @__PURE__ */ React.createElement("span", null, "fetching"));
  }
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("strong", null, "Battery sensor"), ":\xA0\xA0 ", /* @__PURE__ */ React.createElement("span", null, "supported"), " ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("strong", null, "Battery state"), ": ", /* @__PURE__ */ React.createElement("span", null, "fetched"), " ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("strong", null, "Charge level"), ":\xA0\xA0", " ", /* @__PURE__ */ React.createElement("span", null, (batteryState.level * 100).toFixed(0), "%"), " ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("strong", null, "Charging"), ":\xA0\xA0", " ", /* @__PURE__ */ React.createElement("span", null, batteryState.charging ? "yes" : "no"), " ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("strong", null, "Charging time"), ":\xA0\xA0", /* @__PURE__ */ React.createElement("span", null, batteryState.chargingTime ? batteryState.chargingTime : "finished"), " ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("strong", null, "Discharging time"), ":\xA0\xA0", " ", /* @__PURE__ */ React.createElement("span", null, batteryState.dischargingTime));
};
export {
  Battery
};
