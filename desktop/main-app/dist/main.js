"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
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

// package.json
var require_package = __commonJS({
  "package.json"(exports, module2) {
    module2.exports = {
      name: "flat",
      productName: "Flat",
      version: "2.0.3",
      private: true,
      description: "",
      homepage: "https://github.com/netless-io/flat",
      author: {
        email: "flat@agora.io",
        name: "Agora"
      },
      repository: {
        url: "https://github.com/netless-io/flat"
      },
      scripts: {
        _start: "cross-env NODE_ENV=development webpack --config webpack/webpack.dev.js",
        "start:cn": "cross-env FLAT_REGION=CN pnpm start",
        "start:us": "cross-env FLAT_REGION=US pnpm start",
        "_start:esbuild": "esbuild-dev --cjs scripts/esbuild/esbuild.dev.ts",
        start: "cross-env NODE_ENV=development pnpm run _start:esbuild",
        _build: "cross-env NODE_ENV=production webpack --config webpack/webpack.prod.js",
        "build:cn": "cross-env FLAT_REGION=CN pnpm build",
        "build:us": "cross-env FLAT_REGION=US pnpm build",
        "_build:esbuild": "esbuild-dev --cjs scripts/esbuild/esbuild.prod.ts",
        build: "cross-env NODE_ENV=production pnpm run _build:esbuild",
        "build:debug": "cross-env FLAT_DEBUG=debug webpack --config webpack/webpack.debug.js",
        "pack:win": "node ./scripts/pack win",
        "pack:mac": "node ./scripts/pack mac",
        ship: "pnpm build && node ./scripts/pack auto",
        "ship:win": "pnpm build && pnpm pack:win",
        "ship:mac": "pnpm build && pnpm pack:mac",
        "_launch:electron": "node --trace-uncaught ./scripts/launch/electron.js"
      },
      devDependencies: {
        "@types/dotenv-flow": "^3.2.0",
        "@types/webpack-env": "^1.18.0",
        "dotenv-flow": "^3.2.0",
        "dotenv-flow-webpack": "^1.1.0",
        electron: "12.0.15",
        "electron-builder": "^23.3.3",
        "electron-devtools-vendor": "^1.1.0",
        "electron-notarize": "^1.2.1",
        "file-loader": "^6.2.0",
        "flat-types": "workspace:*",
        "js-yaml": "^4.1.0",
        "move-cli": "^2.0.0",
        nodemon: "^2.0.20",
        rimraf: "^3.0.2",
        "ts-loader": "^9.3.1",
        "webpack-cli": "^4.10.0",
        "webpack-merge": "^5.8.0",
        "webpack-node-externals": "^3.0.0"
      },
      dependencies: {
        "@netless/flat-service-provider-agora-rtc-electron": "workspace:*",
        "electron-updater": "^5.2.1",
        "fs-extra": "^10.1.0",
        jquery: "^3.6.1",
        semver: "^7.3.7",
        "value-enhancer": "^1.3.2"
      },
      license: "MIT"
    };
  }
});

// src/utils/bootup-flow.ts
var bootup_flow_default = async (itemNames) => {
  for (const item of itemNames) {
    await item();
  }
};

// src/bootup/init-env.ts
var import_electron = require("electron");
var init_env_default = () => {
  process.env.EVENT_NOKQUEUE = 1;
  import_electron.app.setAsDefaultProtocolClient("x-agora-flat-client");
  import_electron.app.commandLine.appendSwitch("max-active-webgl-contexts", "40");
};

// src/bootup/init-window.ts
var import_electron7 = require("electron");

// ../../packages/flat-types/src/constants/index.ts
var constants_exports = {};
__export(constants_exports, {
  PageSize: () => PageSize,
  Portal: () => Portal,
  WindowsName: () => WindowsName
});
var WindowsName = /* @__PURE__ */ ((WindowsName2) => {
  WindowsName2["Main"] = "Main";
  WindowsName2["ShareScreenTip"] = "ShareScreenTip";
  WindowsName2["PreviewFile"] = "PreviewFile";
  return WindowsName2;
})(WindowsName || {});
var PageSize = {
  Splash: {
    width: 960,
    height: 640
  },
  Login: {
    width: 960,
    height: 640
  },
  Main: {
    width: 960,
    height: 640
  },
  Class: {
    width: 1280,
    height: 720
  },
  Replay: {
    width: 1280,
    height: 720
  },
  ShareScreenTip: {
    width: 320,
    height: 48
  },
  PreviewFile: {
    width: 889,
    height: 500
  }
};
var Portal = "portal;";

// src/window-manager/window-store.ts
var WindowStore = class {
  constructor(wins) {
    this.wins = wins;
  }
  windowType(name) {
    return this.wins[name];
  }
};

// src/utils/ipc-actions.ts
var import_electron3 = require("electron");

// src/utils/runtime.ts
var import_path = __toESM(require("path"));
var import_electron2 = require("electron");
var import_os = require("os");
var isDevelopment = false;
var isProduction = true;
var isDebug = process.env.FLAT_DEBUG === "debug";
var assetsPath = isProduction ? import_path.default.resolve(__dirname, "..", "static") : import_path.default.resolve(__dirname, "..", "..", "..", "renderer-app");
var startURL = isProduction ? `file://${import_path.default.resolve(__dirname, "..", "static", "index.html")}` : "http://localhost:3000";
var isMac = (0, import_os.platform)() === "darwin";
var isWin = (0, import_os.platform)() === "win32";
var staticPath = isProduction ? import_path.default.join(__dirname, "..", "static") : import_path.default.resolve(__dirname, "..", "..", "static");
var preloadPath = isProduction || isDebug ? import_path.default.join(__dirname, "preload.js") : import_path.default.resolve(__dirname, "..", "..", "dist", "preload.js");
var appVersion = isProduction ? import_electron2.app.getVersion() : require_package().version;
var downloadsDirectory = import_path.default.join(import_electron2.app.getPath("userData"), "downloads");
var runtime = {
  isDevelopment,
  isProduction,
  startURL,
  isMac,
  isWin,
  staticPath,
  preloadPath,
  appVersion,
  downloadsDirectory,
  assetsPath
};
var runtime_default = runtime;

// src/utils/update-service.ts
var import_electron_updater = require("electron-updater");

// src/utils/ipc-emit.ts
var sendIPC = (customWindow, eventName, args) => {
  if (customWindow) {
    customWindow.window.webContents.send(eventName, args);
  } else if (runtime_default.isDevelopment) {
    throw new Error("send ipc failed: window does not exist");
  }
};
var ipcEmitByMain = (eventName, args) => {
  const win = windowManager.windowType(constants_exports.WindowsName.Main).getWin();
  sendIPC(win, eventName, args);
};
var ipcEmitByShareScreenTip = (eventName, args) => {
  const win = windowManager.windowType(constants_exports.WindowsName.ShareScreenTip).getWin();
  sendIPC(win, eventName, args);
};
var ipcEmit = (windowName) => {
  switch (windowName) {
    case constants_exports.WindowsName.Main: {
      return ipcEmitByMain;
    }
    case constants_exports.WindowsName.ShareScreenTip: {
      return ipcEmitByShareScreenTip;
    }
    default: {
      throw new Error(`not found window name: ${windowName}`);
    }
  }
};

// src/utils/update-service.ts
var UpdateService = class {
  check(prereleaseTag) {
    import_electron_updater.autoUpdater.autoDownload = false;
    UpdateService.setUpdateURL(prereleaseTag);
    return new Promise((resolve, reject) => {
      const updateAvailable = (info) => {
        removeListeners();
        return resolve({
          hasNewVersion: true,
          version: info.version,
          releaseNotes: typeof info.releaseNotes === "string" ? JSON.parse(info.releaseNotes) : void 0,
          prereleaseTag
        });
      };
      const updateNotAvailable = () => {
        removeListeners();
        return resolve({
          hasNewVersion: false
        });
      };
      const onCheckUpdateResult = (result) => {
        if (result) {
          updateAvailable(result.updateInfo);
        } else {
          updateNotAvailable();
        }
      };
      const error = (err) => {
        removeListeners();
        reject(err);
      };
      import_electron_updater.autoUpdater.once("update-available", updateAvailable);
      import_electron_updater.autoUpdater.once("update-not-available", updateNotAvailable);
      import_electron_updater.autoUpdater.once("error", error);
      const removeListeners = () => {
        import_electron_updater.autoUpdater.removeListener("update-available", updateAvailable);
        import_electron_updater.autoUpdater.removeListener("update-not-available", updateNotAvailable);
        import_electron_updater.autoUpdater.removeListener("error", error);
      };
      import_electron_updater.autoUpdater.checkForUpdates().then(onCheckUpdateResult).catch((err) => {
        reject(err);
      });
    });
  }
  update(prereleaseTag) {
    import_electron_updater.autoUpdater.autoDownload = true;
    import_electron_updater.autoUpdater.autoInstallOnAppQuit = false;
    UpdateService.setUpdateURL(prereleaseTag);
    const updateNotAvailable = () => {
      removeListeners();
    };
    const downloadProgress = ({
      total,
      transferred,
      percent,
      bytesPerSecond
    }) => {
      ipcEmitByMain("update-progress", {
        status: true,
        total,
        transferred,
        percent,
        bytesPerSecond
      });
    };
    const updateDownloaded = () => {
      removeListeners();
      import_electron_updater.autoUpdater.quitAndInstall();
    };
    const error = (err) => {
      removeListeners();
      console.error(err.message);
      ipcEmitByMain("update-progress", {
        status: false
      });
    };
    import_electron_updater.autoUpdater.once("update-not-available", updateNotAvailable);
    import_electron_updater.autoUpdater.on("download-progress", downloadProgress);
    import_electron_updater.autoUpdater.once("update-downloaded", updateDownloaded);
    import_electron_updater.autoUpdater.once("error", error);
    const removeListeners = () => {
      import_electron_updater.autoUpdater.removeListener("update-not-available", updateNotAvailable);
      import_electron_updater.autoUpdater.removeListener("download-progress", downloadProgress);
      import_electron_updater.autoUpdater.removeListener("update-downloaded", updateDownloaded);
      import_electron_updater.autoUpdater.removeListener("error", error);
    };
    void import_electron_updater.autoUpdater.checkForUpdates().then((d) => {
      this.cancellationToken = d == null ? void 0 : d.cancellationToken;
    }).catch(error);
  }
  cancel() {
    var _a;
    (_a = this.cancellationToken) == null ? void 0 : _a.cancel();
  }
  static setUpdateURL(prereleaseTag) {
    const osName = runtime_default.isWin ? "win" : "mac";
    const updateURL = `${"https://flat-storage.oss-cn-hangzhou.aliyuncs.com/versions"}/latest/${prereleaseTag}/${osName}`;
    import_electron_updater.autoUpdater.setFeedURL({
      provider: "generic",
      url: updateURL,
      useMultipleRangeRequest: false
    });
  }
};
var updateService = new UpdateService();

// src/utils/ipc-actions.ts
var import_semver = require("semver");
var windowActionAsync = (customWindow) => {
  const { window, options } = customWindow;
  return {
    "set-win-size": (args) => {
      const isExitMaximized = window.isMaximizable() && !args.maximizable;
      if (isExitMaximized) {
        window.unmaximize();
        args.autoCenter = true;
      }
      window.resizable = !!args.resizable;
      window.maximizable = !!args.maximizable;
      switch (typeof args.setMinimumSize) {
        case "undefined": {
          window.setMinimumSize(1, 1);
          break;
        }
        case "boolean": {
          window.setMinimumSize(args.width, args.height);
          break;
        }
        case "object": {
          window.setMinimumSize(
            args.setMinimumSize.minWidth,
            args.setMinimumSize.minHeight
          );
          break;
        }
        default: {
          break;
        }
      }
      window.setSize(args.width, args.height);
      if (args.autoCenter) {
        window.center();
      }
    },
    "set-aspect-ratio": (_args) => {
    },
    "intercept-native-window-close": (args) => {
      options.interceptClose = args.intercept;
    },
    "set-title": (args) => {
      window.setTitle(args.title);
    },
    "force-close-window": () => {
      windowManager.remove(customWindow);
    },
    "set-visual-zoom-level": (args) => {
      customWindow.window.webContents.setVisualZoomLevelLimits(args.minimumLevel, args.maximumLevel).catch(console.error);
    },
    "set-win-status": (args) => {
      switch (args.windowStatus) {
        case "minimize": {
          window.minimize();
          break;
        }
        case "maximize": {
          if (window.isMaximized()) {
            window.unmaximize();
          } else {
            window.maximize();
          }
          break;
        }
        case "close": {
          window.close();
          break;
        }
        default: {
          break;
        }
      }
    }
  };
};
var appActionAsync = {
  "set-open-at-login": (args) => {
    import_electron3.app.setLoginItemSettings({
      openAtLogin: args.isOpenAtLogin,
      openAsHidden: false
    });
  },
  "set-prevent-sleep": (args) => (() => {
    let powerSaveBlockerId = 0;
    return () => {
      if (args.enable) {
        if (!import_electron3.powerSaveBlocker.isStarted(powerSaveBlockerId)) {
          powerSaveBlockerId = import_electron3.powerSaveBlocker.start("prevent-display-sleep");
        }
      } else {
        if (import_electron3.powerSaveBlocker.isStarted(powerSaveBlockerId)) {
          import_electron3.powerSaveBlocker.stop(powerSaveBlockerId);
        }
      }
    };
  })(),
  "start-update": (args) => {
    updateService.update(args.prereleaseTag);
  },
  "cancel-update": () => {
    updateService.cancel();
  }
};
var appActionSync = {
  "get-runtime": () => {
    return Promise.resolve(runtime_default);
  },
  "get-open-at-login": () => {
    return Promise.resolve(import_electron3.app.getLoginItemSettings().openAtLogin);
  },
  "get-update-info": async () => {
    const warpUpdateCheck = async (prereleaseTag) => {
      return await updateService.check(prereleaseTag).catch((err) => {
        console.error(err.message);
        return {
          hasNewVersion: false
        };
      });
    };
    const beta = await warpUpdateCheck("beta");
    const stable = await warpUpdateCheck("stable");
    if (beta.hasNewVersion && stable.hasNewVersion) {
      return (0, import_semver.gt)(beta.version, stable.version) ? beta : stable;
    }
    return beta.hasNewVersion ? beta : stable;
  },
  "can-create-window": (args) => {
    const customWindow = windowManager.windowType(args.windowName);
    const result = customWindow.isMultiInstance || customWindow.isEmpty();
    return Promise.resolve(result);
  }
};
var injectionWindowIPCAction = (customWindow) => {
  import_electron3.ipcMain.on(
    customWindow.options.name,
    (_event, args) => {
      const realCustomWindow = windowManager.windowType(customWindow.options.name).getWin(args.browserWindowID);
      if (realCustomWindow) {
        windowActionAsync(realCustomWindow)[args.actions](args.args);
      }
    }
  );
};

// src/window-manager/window-manager.ts
var WindowManager = class extends WindowStore {
  constructor(wins) {
    super(wins);
  }
  create(name, option) {
    const customWindow = this.wins[name].create(option || {});
    this.interceptPortalNewWindow(customWindow);
    injectionWindowIPCAction(customWindow);
    return customWindow;
  }
  remove(customWindow) {
    this.wins[customWindow.options.name].remove(customWindow);
  }
  interceptPortalNewWindow(customWindow) {
    customWindow.window.webContents.on(
      "new-window",
      (event, _url, frameName, _disposition, options) => {
        if (!frameName.startsWith(constants_exports.Portal)) {
          return;
        }
        event.preventDefault();
        const customOptions = JSON.parse(
          frameName.substring(constants_exports.Portal.length)
        );
        const window = this.create(customOptions.name, options).window;
        event.newGuest = window;
        window.webContents.executeJavaScript(`window.browserWindowID = ${window.id}`).catch(console.error);
      }
    );
  }
};

// src/window-manager/abstract.ts
var import_electron4 = require("electron");

// src/utils/window-event.ts
var import_electron_updater2 = require("electron-updater");
var windowHookClose = (customWindow) => {
  customWindow.window.on("close", (e) => {
    if (!import_electron_updater2.autoUpdater.autoInstallOnAppQuit) {
      return;
    }
    if (customWindow.options.interceptClose) {
      e.preventDefault();
      ipcEmit(customWindow.options.name)("window-will-close", {});
    }
  });
};
var windowHookClosed = (customWindow, cb) => {
  customWindow.window.on("closed", cb);
};
var windowReadyToShow = (customWindow) => {
  customWindow.window.on("ready-to-show", () => {
    if (customWindow.options.isPortal) {
      setTimeout(() => {
        if (!customWindow.window.isDestroyed()) {
          customWindow.window.show();
        }
      }, 100);
    } else {
      customWindow.window.show();
    }
  });
};
var windowOpenDevTools = (customWindow) => {
  customWindow.window.webContents.once("dom-ready", () => {
    if (customWindow.options.isOpenDevTools) {
      customWindow.window.webContents.once("devtools-opened", () => {
        customWindow.window.focus();
      });
      customWindow.window.webContents.openDevTools();
    }
  });
};

// src/window-manager/default-options.ts
var defaultWindowOptions = {
  interceptClose: false,
  isOpenDevTools: false
};
var defaultBrowserWindowOptions = {
  resizable: false,
  show: false,
  fullscreenable: false,
  maximizable: false,
  autoHideMenuBar: true,
  frame: runtime_default.isMac,
  titleBarStyle: "hidden",
  webPreferences: {
    autoplayPolicy: "no-user-gesture-required",
    nodeIntegration: true,
    contextIsolation: false,
    webSecurity: false,
    webviewTag: true,
    nativeWindowOpen: true,
    backgroundThrottling: false,
    nodeIntegrationInSubFrames: false
  }
};

// src/window-manager/abstract.ts
var AbstractWindow = class {
  constructor(isMultiInstance, name) {
    this.isMultiInstance = isMultiInstance;
    this.name = name;
    this.wins = [];
  }
  remove(id) {
    const win = typeof id === "number" ? this.getWin(id) : id;
    if (win === null) {
      return;
    }
    AbstractWindow.closeWindow(win);
    if (this.isMultiInstance) {
      this.wins = this.wins.filter(({ window }) => {
        if (window.isDestroyed()) {
          return false;
        }
        return window.id !== id;
      });
      return;
    }
    this.wins = [];
  }
  createWindow(windowOptions, browserWindowOptions) {
    const window = new import_electron4.BrowserWindow({
      ...defaultBrowserWindowOptions,
      ...browserWindowOptions,
      webPreferences: {
        ...defaultBrowserWindowOptions.webPreferences,
        ...browserWindowOptions.webPreferences
      }
    });
    const options = {
      ...defaultWindowOptions,
      ...windowOptions
    };
    const win = {
      options,
      window,
      didFinishLoad: options.isPortal ? Promise.resolve() : window.loadURL(options.url)
    };
    if (this.isMultiInstance) {
      this.wins.push(win);
    } else {
      this.wins[0] = win;
    }
    windowOpenDevTools(win);
    windowHookClose(win);
    windowHookClosed(win, () => {
      this.remove(win);
    });
    windowReadyToShow(win);
    return win;
  }
  getWin(...ids) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.isMultiInstance) {
      const id = ids[0];
      for (const win of this.wins) {
        if (!win.window.isDestroyed() && win.window.id === id) {
          return win;
        }
      }
      return null;
    }
    return this.wins[0].window.isDestroyed() ? null : this.wins[0];
  }
  isEmpty() {
    return this.wins.length === 0;
  }
  static closeWindow(win) {
    if (!win.window.isDestroyed()) {
      win.options.interceptClose = false;
      win.window.close();
    }
  }
};

// src/window-manager/window-main/index.ts
var import_value_enhancer = require("value-enhancer");
var import_electron5 = require("electron");
var WindowMain = class extends AbstractWindow {
  constructor() {
    super(false, constants_exports.WindowsName.Main);
    this._mainWindow$ = new import_value_enhancer.Val(null);
  }
  create() {
    this.setupDOMReady();
    const customWindow = this.createWindow(
      {
        url: runtime_default.startURL,
        name: constants_exports.WindowsName.Main,
        isOpenDevTools: runtime_default.isDevelopment,
        isPortal: false
      },
      {
        center: true,
        ...constants_exports.PageSize.Main,
        webPreferences: {
          preload: runtime_default.preloadPath
        }
      }
    );
    this._mainWindow$.setValue(customWindow);
    return customWindow;
  }
  async assertWindow() {
    return this._mainWindow$.value ?? new Promise((resolve) => {
      const disposer = this._mainWindow$.subscribe((win) => {
        if (win) {
          resolve(win);
          disposer();
        }
      });
    });
  }
  static loadExtensions(win, extensionName) {
    const { REACT_DEVELOPER_TOOLS } = require("electron-devtools-vendor");
    win.window.webContents.session.loadExtension(REACT_DEVELOPER_TOOLS, {
      allowFileAccess: true
    }).catch((error) => {
      console.error(
        `install ${extensionName} extensions failed! error message: ${error.message}. error stack: ${error.stack}`
      );
    });
  }
  setupDOMReady() {
    const domReady$ = new import_value_enhancer.Val(null);
    const preloaded$ = new import_value_enhancer.Val(null);
    (0, import_value_enhancer.combine)([domReady$, preloaded$]).subscribe(([domReady, event]) => {
      if (domReady && event) {
        if (!event.sender.isDestroyed()) {
          event.sender.send("preload-dom-ready");
        }
      }
    });
    this._mainWindow$.subscribe((win) => {
      if (win) {
        win.window.webContents.on("dom-ready", (event) => {
          domReady$.setValue(event);
        });
      }
    });
    import_electron5.ipcMain.on("preload-loaded", (event) => {
      const win = this._mainWindow$.value;
      if (win && event.sender.id === win.window.webContents.id) {
        preloaded$.setValue(event);
      }
    });
  }
};

// src/window-manager/window-portal/utils.ts
var import_electron6 = require("electron");
var getDisplayByMainWindow = () => {
  const mainBounds = windowManager.windowType(constants_exports.WindowsName.Main).getWin().window.getBounds();
  return import_electron6.screen.getDisplayNearestPoint({
    x: mainBounds.x,
    y: mainBounds.y
  });
};
var getXCenterPoint = (display, windowWidth) => {
  const { x, width } = display.workArea;
  return Math.floor(x + (width / 2 - windowWidth / 2));
};

// src/window-manager/window-portal/window-share-screen-tip.ts
var WindowShareScreenTip = class extends AbstractWindow {
  constructor() {
    super(false, constants_exports.WindowsName.ShareScreenTip);
  }
  create(options) {
    const display = getDisplayByMainWindow();
    const win = this.createWindow(
      {
        url: "",
        name: constants_exports.WindowsName.ShareScreenTip,
        isOpenDevTools: false,
        isPortal: true,
        interceptClose: true
      },
      {
        x: getXCenterPoint(display, constants_exports.PageSize.ShareScreenTip.width),
        y: display.workArea.y + 32,
        webContents: options.webContents,
        ...constants_exports.PageSize.ShareScreenTip,
        frame: false,
        titleBarStyle: "default"
      }
    );
    win.window.setAlwaysOnTop(true, "modal-panel");
    return win;
  }
};

// src/window-manager/window-portal/window-preview-file.ts
var WindowPreviewFile = class extends AbstractWindow {
  constructor() {
    super(true, constants_exports.WindowsName.PreviewFile);
  }
  create(options) {
    return this.createWindow(
      {
        url: "",
        name: constants_exports.WindowsName.PreviewFile,
        isOpenDevTools: false,
        isPortal: true
      },
      {
        ...constants_exports.PageSize.PreviewFile,
        maximizable: true,
        fullscreenable: true,
        resizable: true,
        webContents: options.webContents,
        frame: true,
        titleBarStyle: "default"
      }
    );
  }
};

// src/window-manager/index.ts
var windowManager = new WindowManager({
  [constants_exports.WindowsName.Main]: new WindowMain(),
  [constants_exports.WindowsName.ShareScreenTip]: new WindowShareScreenTip(),
  [constants_exports.WindowsName.PreviewFile]: new WindowPreviewFile()
});

// src/bootup/init-window.ts
var init_window_default = () => {
  import_electron7.app.allowRendererProcessReuse = false;
  windowManager.create(constants_exports.WindowsName.Main);
};

// src/bootup/init-webRequest.ts
var import_electron8 = require("electron");
var import_fs_extra = __toESM(require("fs-extra"));
var import_path2 = __toESM(require("path"));
var init_webRequest_default = () => {
  import_electron8.protocol.registerFileProtocol("file", (request, callback) => {
    const pathname = decodeURI(request.url.replace("file:///", ""));
    callback(pathname);
  });
  const filter = {
    urls: [
      "https://convertcdn.netless.link/*",
      "https://convertcdn-us-sv.netless.link/*",
      "https://convertcdn-gb-lon.netless.link/*",
      "https://convertcdn-sg.netless.link/*",
      "https://convertcdn-in-mum.netless.link/*"
    ]
  };
  import_electron8.session.defaultSession.webRequest.onBeforeRequest(filter, (details, callback) => {
    const p = details.url.replace(/^https:\/\/convertcdn\S*\.netless\.link\//, "");
    const localPath = import_path2.default.join(runtime_default.downloadsDirectory, p);
    if (import_fs_extra.default.existsSync(localPath)) {
      callback({
        redirectURL: `file://${localPath}`
      });
    } else {
      callback({});
    }
  });
};

// src/bootup/init-menus.ts
var import_electron9 = require("electron");
var init_menus_default = () => {
  const appByMacMenu = {
    label: import_electron9.app.name,
    submenu: [
      { role: "about" },
      { type: "separator" },
      { role: "services" },
      { type: "separator" },
      { role: "hide" },
      { role: "hideOthers" },
      { role: "unhide" },
      { type: "separator" },
      { role: "quit" }
    ]
  };
  const fileMenu = {
    label: "File",
    submenu: [{ role: "close" }]
  };
  if (runtime_default.isWin) {
    fileMenu.submenu = [{ role: "quit" }];
  }
  const editMenu = {
    label: "Edit",
    submenu: [
      { role: "undo" },
      { role: "redo" },
      { type: "separator" },
      { role: "cut" },
      { role: "copy" },
      { role: "paste" }
    ]
  };
  if (runtime_default.isWin) {
    editMenu.submenu.push({ role: "delete" }, { type: "separator" }, { role: "selectAll" });
  } else {
    editMenu.submenu.push(
      { role: "pasteAndMatchStyle" },
      { role: "delete" },
      { role: "selectAll" },
      { type: "separator" },
      {
        label: "Speech",
        submenu: [{ role: "startSpeaking" }, { role: "stopSpeaking" }]
      }
    );
  }
  const windowMenu = {
    label: "Window",
    submenu: [{ role: "minimize" }, { role: "zoom" }]
  };
  if (runtime_default.isWin) {
    windowMenu.submenu.push({ role: "close" });
  } else {
    windowMenu.submenu.push(
      { type: "separator" },
      { role: "front" },
      { type: "separator" },
      { role: "window" }
    );
  }
  const template = [
    editMenu,
    fileMenu,
    {
      label: "View",
      submenu: [
        { role: "reload" },
        { role: "forceReload" },
        { role: "toggleDevTools" },
        { type: "separator" },
        { role: "resetZoom" },
        { type: "separator" },
        { role: "togglefullscreen" }
      ]
    },
    windowMenu
  ];
  if (runtime_default.isMac) {
    template.unshift(appByMacMenu);
  }
  const menu = import_electron9.Menu.buildFromTemplate(template);
  import_electron9.Menu.setApplicationMenu(menu);
};

// src/bootup/init-app-ipc.ts
var import_electron10 = require("electron");
var init_app_ipc_default = () => {
  const appActionAsyncKeys = Object.keys(appActionAsync);
  appActionAsyncKeys.forEach((k) => {
    import_electron10.ipcMain.on(k, (_event, args) => {
      appActionAsync[k](args);
    });
  });
  const appActionSyncKeys = Object.keys(appActionSync);
  appActionSyncKeys.forEach((k) => {
    import_electron10.ipcMain.handle(k, (_event, args) => appActionSync[k](args));
  });
};

// src/bootup/init-app-listener.ts
var import_electron12 = require("electron");

// src/utils/close-app.ts
var import_electron11 = require("electron");
var closeAPP = () => {
  import_electron11.app.exit(0);
};
var close_app_default = closeAPP;

// src/bootup/init-app-listener.ts
var init_app_listener_default = () => {
  const windowAllClosed = () => {
    import_electron12.app.on("window-all-closed", () => {
      close_app_default();
    });
  };
  const appQuit = () => {
    import_electron12.app.on("quit", () => {
      close_app_default();
    });
  };
  [windowAllClosed, appQuit].forEach((f) => {
    f();
  });
};

// src/bootup/init-other.ts
var import_electron13 = require("electron");
var init_other_default = () => {
  const redirectURL = "data:application/x-javascript;base64,UHJvZHVjdFJlZ2lzdHJ5SW1wbC5SZWdpc3RyeT1jbGFzc3tjb25zdHJ1Y3Rvcigpe31uYW1lRm9yVXJsKHIpe3JldHVybiBudWxsfWVudHJ5Rm9yVXJsKHIpe3JldHVybiBudWxsfXR5cGVGb3JVcmwocil7cmV0dXJuIG51bGx9fSxQcm9kdWN0UmVnaXN0cnlJbXBsLl9oYXNoRm9yRG9tYWluPWZ1bmN0aW9uKHIpe3JldHVybiIifSxQcm9kdWN0UmVnaXN0cnlJbXBsLnJlZ2lzdGVyPWZ1bmN0aW9uKHIsdCl7UHJvZHVjdFJlZ2lzdHJ5SW1wbC5fcHJvZHVjdHNCeURvbWFpbkhhc2g9bmV3IE1hcH0sUHJvZHVjdFJlZ2lzdHJ5SW1wbC5fcHJvZHVjdHNCeURvbWFpbkhhc2g9bmV3IE1hcCxQcm9kdWN0UmVnaXN0cnlJbXBsLnJlZ2lzdGVyKFtdLFtdKSxQcm9kdWN0UmVnaXN0cnlJbXBsLnNoYTE9ZnVuY3Rpb24ocil7cmV0dXJuIiJ9Ow==";
  import_electron13.session.defaultSession.webRequest.onBeforeRequest((details, callback) => {
    if (/^devtools:\/\/devtools\/remote\/serve_file\/@[0-9a-f]{40}\/product_registry_impl\/product_registry_impl_module.js$/iu.test(
      details.url
    )) {
      callback({
        redirectURL
      });
      return;
    }
    callback({});
  });
};

// src/bootup/init-url-protocol.ts
var import_electron14 = require("electron");
var init_url_protocol_default = async () => {
  const protocol2 = new URLProtocolHandler({
    active: () => {
    },
    joinRoom: (args, innerWindow) => {
      if (args.has("roomUUID")) {
        innerWindow.window.webContents.send("request-join-room", {
          roomUUID: args.get("roomUUID")
        });
      }
    }
  });
  if (runtime_default.isMac) {
    import_electron14.app.on("open-url", (event, url) => {
      event.preventDefault();
      protocol2.execute(url);
    });
  }
  await import_electron14.app.whenReady();
  if (runtime_default.isWin) {
    const lock = import_electron14.app.requestSingleInstanceLock();
    const url = process.argv.slice().pop();
    if (url.startsWith("x-agora-flat-client://") && !lock) {
      return close_app_default();
    }
    protocol2.execute(url);
    import_electron14.app.on("second-instance", (_event, command) => {
      protocol2.execute(command.pop());
    });
  }
};
var URLProtocolHandler = class {
  constructor(handlers) {
    this.handlers = Object.freeze(handlers);
  }
  execute(url) {
    const actionInfo = this.getActionInfo(url);
    if (actionInfo) {
      URLProtocolHandler.focus().then((innerWindow) => {
        this.handlers[actionInfo.name](actionInfo.args, innerWindow);
      }).catch(() => {
      });
    }
  }
  static async focus() {
    const innerWindow = await windowManager.windowType(constants_exports.WindowsName.Main).assertWindow();
    const mainWindow = innerWindow.window;
    if (mainWindow) {
      if (mainWindow.isMinimized()) {
        mainWindow.restore();
      }
      mainWindow.focus();
    }
    return innerWindow.didFinishLoad.then(() => innerWindow);
  }
  getActionInfo(url) {
    try {
      const data = new URL(url);
      const actionName = data.hostname;
      if (!this.handlers[actionName]) {
        return null;
      }
      return {
        name: actionName,
        args: data.searchParams
      };
    } catch (_err) {
      return null;
    }
  }
};

// src/index.ts
void bootup_flow_default([
  init_env_default,
  init_url_protocol_default,
  init_app_ipc_default,
  init_window_default,
  init_menus_default,
  init_app_listener_default,
  init_other_default,
  init_webRequest_default
]);
//# sourceMappingURL=main.js.map
