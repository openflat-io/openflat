import{q as i,b3 as h,cG as w,ad as o,dD as f,cu as F,dC as p}from"./index.ec641b5a.js";var d="/Users/yl/github-repo/openflat/packages/flat-components/src/components/FilePreview/FilePreviewImage/index.tsx";const P=({file:e})=>i("div",{className:"file-preview-image-container",children:i("img",{alt:e.fileName,src:e.fileURL},void 0,!1,{fileName:d,lineNumber:12,columnNumber:13},void 0)},void 0,!1,{fileName:d,lineNumber:11,columnNumber:9},void 0);var N="/Users/yl/github-repo/openflat/packages/flat-components/src/components/FilePreview/FilePreviewAudio/index.tsx";const x=({file:e})=>i("div",{className:"file-preview-audio-container",children:i("audio",{controls:!0,src:e.fileURL},void 0,!1,{fileName:N,lineNumber:13,columnNumber:13},void 0)},void 0,!1,{fileName:N,lineNumber:12,columnNumber:9},void 0);var v="/Users/yl/github-repo/openflat/packages/flat-components/src/components/FilePreview/FilePreviewVideo/index.tsx";const y=({file:e})=>i("div",{className:"file-preview-video-container",children:i("video",{controls:!0,src:e.fileURL},void 0,!1,{fileName:v,lineNumber:13,columnNumber:13},void 0)},void 0,!1,{fileName:v,lineNumber:12,columnNumber:9},void 0);var s="/Users/yl/github-repo/openflat/packages/flat-pages/src/FilePreviewPage/index.tsx";const I=e=>{const t=h(),u=w(),[m,b]=o.useState(null),[n,g]=o.useState(),r=o.useMemo(()=>{if(e.file)return e.file;try{return JSON.parse(decodeURIComponent(u.file))}catch{return null}},[e.file,u]),c=o.useMemo(()=>(/\.([^.]+)$/.exec((r==null?void 0:r.fileName)||"")||["",""])[1].toLowerCase(),[r]);return f(()=>{let l=null;return t(F.getInstance().requestService(`file-preview:${c}`,!1)).then(a=>{l=a,g(a)}),()=>{var a;(a=l==null?void 0:l.destroy)==null||a.call(l)}},[]),f(()=>{r&&m&&n&&n.preview(r,m)},[r,m,n]),r?i("div",{ref:b,className:"file-preview-container",style:{height:"100%",overflow:"hidden"},children:n===null&&U(r,c)},void 0,!1,{fileName:s,lineNumber:69,columnNumber:9},void 0):i(p,{},void 0,!1,{fileName:s,lineNumber:65,columnNumber:16},void 0)};function U(e,t){switch(t){case"jpg":case"jpeg":case"png":case"webp":return i(P,{file:e},void 0,!1,{fileName:s,lineNumber:87,columnNumber:20},this);case"mp3":return i(x,{file:e},void 0,!1,{fileName:s,lineNumber:90,columnNumber:20},this);case"mp4":return i(y,{file:e},void 0,!1,{fileName:s,lineNumber:93,columnNumber:20},this)}return i(p,{},void 0,!1,{fileName:s,lineNumber:96,columnNumber:12},this)}export{I as FilePreviewPage,I as default};
//# sourceMappingURL=index.fb64c068.js.map
