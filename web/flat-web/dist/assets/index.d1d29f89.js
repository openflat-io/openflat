import{U as h}from"./UserSettingLayoutContainer.b068cc9d.js";import{a$ as y,q as a}from"./index.003b8e05.js";import{T as i}from"./Table.82ec6d73.js";import"./SVGCircleInfoOutlined.8c4b8628.js";import"./use-login-check.9050cee0.js";import"./routes.05c6fbf3.js";import"./index.f0f03b6c.js";var n="/Users/honey/GithubRep/flat/packages/flat-pages/src/UserSettingPage/HotKeySettingPage/index.tsx";const S=()=>{const e=y(),s=[{title:e("shortcut-name"),dataIndex:"desc"},{title:e("shortcut-tips"),dataIndex:""}],m=[e("toolbar"),e("editor")],c=[{dataIndex:"name"},{dataIndex:"hotKey"}],l={tools:[{name:e("tool-selector"),hotKey:"S"},{name:e("tool-pen"),hotKey:"P"},{name:e("tool-eraser"),hotKey:"E"},{name:e("tool-circle"),hotKey:"C"},{name:e("tool-rectangle"),hotKey:"R"},{name:e("tool-arrow"),hotKey:"A"},{name:e("tool-line"),hotKey:"L"},{name:e("tool-laser-pointer"),hotKey:"Z"},{name:e("tool-hand"),hotKey:"H"}],edit:[{name:e("delete-object"),hotKey:"Backspace / Delete"},{name:e("proportional-zoom"),hotKey:"Shift / \u21E7"},{name:e("switch-to-next-color"),hotKey:"Alt + Q / \u2325 + Q"},{name:e("switch-to-previous-color"),hotKey:"Alt + Shift + Q / \u2325 + Shift + Q"},{name:e("pencil-tool-draws-circle"),hotKey:"Shift + Mouse"},{name:e("draw-circles-from-center"),hotKey:"Ctrl + Mouse / \u2318 + Mouse "},{name:e("undo"),hotKey:"Ctrl + Z / \u2318 + Z"},{name:e("redo"),hotKey:"Ctrl + Y / \u2318 + Y"},{name:e("copy"),hotKey:"Ctrl + C / \u2318 + C"},{name:e("paste"),hotKey:"Ctrl + V / \u2318 + V"}]},r=Object.freeze(Object.keys(l));r.forEach(t=>{l[t].forEach((o,u)=>{o.key=`${o.name+String(u)}`})});const d=r.map((t,o)=>({name:t,key:`${t+String(o)}`,desc:m[o]}));return a(h,{children:a("div",{className:"hotkey-setting-container",children:a("div",{className:"hotkey-setting-content",children:a(i,{columns:s,dataSource:d,expandable:{expandedRowRender:t=>a(i,{columns:c,dataSource:l[t.name],pagination:!1},void 0,!1,{fileName:n,lineNumber:149,columnNumber:13},void 0)},pagination:!1,scroll:{y:500}},void 0,!1,{fileName:n,lineNumber:161,columnNumber:21},void 0)},void 0,!1,{fileName:n,lineNumber:160,columnNumber:17},void 0)},void 0,!1,{fileName:n,lineNumber:159,columnNumber:13},void 0)},void 0,!1,{fileName:n,lineNumber:158,columnNumber:9},void 0)};export{S as HotKeySettingPage,S as default};
//# sourceMappingURL=index.d1d29f89.js.map
