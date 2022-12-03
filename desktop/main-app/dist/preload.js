"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // src/preload.ts
  var import_os = __toESM(__require("os"));
  var import_path = __toESM(__require("path"));
  var { ipcRenderer, shell } = __require("electron");
  var {
    agoraRTCElectronPreload
  } = __require("@netless/flat-service-provider-agora-rtc-electron/preload");
  ipcRenderer.once("preload-dom-ready", () => {
    agoraRTCElectronPreload("931b86d6781e49a2a255db4ce6e8e804");
  });
  Object.defineProperties(window, {
    $: {
      get() {
        return __require("jquery");
      }
    },
    jQuery: {
      get() {
        return __require("jquery");
      }
    }
  });
  ipcRenderer.send("preload-loaded");
  window.electron = {
    ipcRenderer: {
      on: (channel, listeners) => ipcRenderer.on(channel, listeners),
      send: (channel, ...args) => ipcRenderer.send(channel, ...args),
      invoke: (channel, ...args) => ipcRenderer.invoke(channel, ...args),
      removeAllListeners: (channel) => ipcRenderer.removeAllListeners(channel)
    },
    shell: {
      openExternal: (url, options) => shell.openExternal(url, options)
    }
  };
  window.node = {
    os: {
      cpus: () => import_os.default.cpus(),
      freemem: () => import_os.default.freemem(),
      platform: () => import_os.default.platform()
    },
    path: {
      join: (...paths) => import_path.default.join(...paths),
      dirname: (p) => import_path.default.dirname(p),
      basename: (p, ext) => import_path.default.basename(p, ext)
    }
  };
  window.isElectron = true;
})();
