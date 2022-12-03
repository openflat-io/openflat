import{q as e,a$ as x,l as t,b6 as w,J as L,bb as D}from"./index.003b8e05.js";import{U as C}from"./UserSettingLayoutContainer.b068cc9d.js";import{r as y,S as G,l as R,a as F,u as $}from"./hooks.98da4540.js";import{u as S}from"./lifecycle.d6023d27.js";import{T as M}from"./Table.82ec6d73.js";import{n as V}from"./noop.c988f9cd.js";import"./SVGCircleInfoOutlined.8c4b8628.js";import"./use-login-check.9050cee0.js";import"./routes.05c6fbf3.js";import"./index.f0f03b6c.js";var g="/Users/honey/GithubRep/flat/packages/flat-components/src/components/FlatIcons/icons/SVGCircleCheckFilled.tsx";const P=({active:o,className:l="",...i})=>e("svg",{className:`${l} flat-icon ${o?"is-active":""}`,fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...i,children:e("path",{className:"flat-icon-fill-color",clipRule:"evenodd",d:"M3.375 12a8.625 8.625 0 1 1 17.25 0 8.625 8.625 0 0 1-17.25 0Zm13.067-2.058-.884-.884L11 13.617l-2.558-2.559-.884.884 3 3 .087.072c.243.169.58.145.797-.072l5-5Z",fill:"#5D6066",fillRule:"evenodd"},void 0,!1,{fileName:g,lineNumber:20,columnNumber:13},void 0)},void 0,!1,{fileName:g,lineNumber:11,columnNumber:9},void 0);var k="/Users/honey/GithubRep/flat/packages/flat-components/src/components/FlatIcons/icons/SVGUser.tsx";const j=({active:o,className:l="",...i})=>e("svg",{className:`${l} flat-icon ${o?"is-active":""}`,fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...i,children:e("path",{className:"flat-icon-fill-color",d:"m7.265 14.925.294.552-.294-.552Zm-.03.724.324-.172-.588-1.103-.324.173.588 1.102Zm3.203-3.128.121-.242-1.118-.559-.12.242 1.117.559Zm-.813-2.935V7h-1.25v2.586h1.25ZM14.375 7v2.586h1.25V7h-1.25Zm-.934 5.28.12.241 1.119-.559-.121-.242-1.118.56Zm3 3.197.324.172.588-1.102-.324-.173-.588 1.103Zm.324.172A4.93 4.93 0 0 1 19.375 20h1.25a6.18 6.18 0 0 0-3.272-5.453l-.588 1.102Zm-3.203-3.128a6.793 6.793 0 0 0 2.879 2.956l.588-1.103a5.543 5.543 0 0 1-2.35-2.412l-1.117.559Zm.813-2.935c0 .74-.294 1.449-.817 1.972l.884.884a4.04 4.04 0 0 0 1.183-2.856h-1.25ZM9.625 7A2.375 2.375 0 0 1 12 4.625v-1.25A3.625 3.625 0 0 0 8.375 7h1.25Zm.817 4.558a2.79 2.79 0 0 1-.817-1.972h-1.25c0 1.071.426 2.098 1.183 2.856l.884-.884Zm-2.883 3.919a6.793 6.793 0 0 0 2.88-2.956l-1.119-.559a5.543 5.543 0 0 1-2.349 2.412l.588 1.103ZM12 4.625A2.375 2.375 0 0 1 14.375 7h1.25A3.625 3.625 0 0 0 12 3.375v1.25ZM4.625 20a4.93 4.93 0 0 1 2.61-4.35l-.588-1.103A6.18 6.18 0 0 0 3.375 20h1.25Z",fill:"#5D6066"},void 0,!1,{fileName:k,lineNumber:16,columnNumber:13},void 0)},void 0,!1,{fileName:k,lineNumber:7,columnNumber:9},void 0);var N="/Users/honey/GithubRep/flat/packages/flat-components/src/components/FlatIcons/icons/SVGWeb.tsx";const _=({active:o,className:l="",...i})=>e("svg",{className:`${l} flat-icon ${o?"is-active":""}`,fill:"none",height:"18",viewBox:"0 0 18 18",width:"18",xmlns:"http://www.w3.org/2000/svg",...i,children:[e("circle",{className:"flat-icon-stroke-color",cx:"9",cy:"9",r:"6",stroke:"#5D6066",strokeLinejoin:"round"},void 0,!1,{fileName:N,lineNumber:16,columnNumber:13},void 0),e("path",{className:"flat-icon-stroke-color",d:"M3 9H15M9 3V15",stroke:"#5D6066"},void 0,!1,{fileName:N,lineNumber:24,columnNumber:13},void 0),e("path",{className:"flat-icon-stroke-color",d:"M9 3L8.65686 3.34314C5.53266 6.46734 5.53266 11.5327 8.65686 14.6569L9 15",stroke:"#5D6066"},void 0,!1,{fileName:N,lineNumber:25,columnNumber:13},void 0),e("path",{className:"flat-icon-stroke-color",d:"M9 3L9.34314 3.34314C12.4673 6.46734 12.4673 11.5327 9.34314 14.6569L9 15",stroke:"#5D6066"},void 0,!1,{fileName:N,lineNumber:30,columnNumber:13},void 0)]},void 0,!0,{fileName:N,lineNumber:7,columnNumber:9},void 0);var c="/Users/honey/GithubRep/flat/packages/flat-pages/src/UserSettingPage/ApplicationsPage/ApplicationsList.tsx";const I=({navigate:o})=>{const l=x(),i=S(),[m,s]=t.exports.useState(!0),[r,p]=t.exports.useState([]),d=t.exports.useCallback(n=>{w.confirm({content:l("apps-revoke-confirm",{appName:n.appName}),onOk:async()=>{await i(y(n.oauthUUID)),p(r.filter(u=>u!==n))}})},[r,i,l]),f=t.exports.useMemo(()=>[{key:"appName",dataIndex:"appName",title:l("oauth-app-name"),render:(n,u)=>e("a",{className:"applications-app-name-wrapper",onClick:()=>o(u),children:[e("img",{alt:"logo",className:"applications-app-logo",src:u.logoURL,title:n},void 0,!1,{fileName:c,lineNumber:39,columnNumber:25},void 0),e("span",{className:"applications-app-name",children:n},void 0,!1,{fileName:c,lineNumber:45,columnNumber:25},void 0)]},void 0,!0,{fileName:c,lineNumber:38,columnNumber:21},void 0)},{key:"ownerName",dataIndex:"ownerName",title:l("oauth-app-creator")},{key:"homepageURL",dataIndex:"homepageURL",title:l("oauth-homepage"),render:n=>e("a",{href:n,rel:"noreferrer",target:"_blank",children:n},void 0,!1,{fileName:c,lineNumber:59,columnNumber:21},void 0)},{key:"action",render:(n,u)=>e("button",{className:"applications-revoke-btn",title:l("delete"),onClick:()=>d(u),children:e(G,{className:"applications-revoke-icon"},void 0,!1,{fileName:c,lineNumber:72,columnNumber:25},void 0)},void 0,!1,{fileName:c,lineNumber:67,columnNumber:21},void 0)}],[o,d,l]);return t.exports.useEffect(()=>{s(!0),i(R(1,50)).then(n=>{p(n),s(!1)})},[i]),e("div",{className:"applications",children:[r.length?e("p",{className:"applications-stats",children:l("apps-stats",{count:r.length})},void 0,!1,{fileName:c,lineNumber:91,columnNumber:17},void 0):null,e(M,{columns:f,dataSource:r,loading:m,locale:{emptyText:l("no-data")},pagination:!1,rowKey:"oauthUUID"},void 0,!1,{fileName:c,lineNumber:93,columnNumber:13},void 0)]},void 0,!0,{fileName:c,lineNumber:89,columnNumber:9},void 0)};var a="/Users/honey/GithubRep/flat/packages/flat-pages/src/UserSettingPage/ApplicationsPage/ApplicationDetail.tsx";const q=({oauthUUID:o,navigate:l})=>{const i=x(),m=S(),[s,r]=t.exports.useState(null),[p,d]=t.exports.useState(!1);t.exports.useEffect(()=>{d(!1),m(F(o)).then(r).catch(()=>{d(!0)})},[o,m]);const f=t.exports.useCallback(()=>{!s||w.confirm({content:i("apps-revoke-confirm",{appName:s.appName}),onOk:async()=>{await m(y(o).catch(V)),l(null)}})},[s,l,o,m,i]);if(p)return e("div",{className:"application-detail-error",children:['Failed to fetch application detail of "',o,'"']},void 0,!0,{fileName:a,lineNumber:49,columnNumber:13},void 0);if(s===null)return e("div",{className:"application-detail-loading",children:[i("loading"),"\u2026"]},void 0,!0,{fileName:a,lineNumber:56,columnNumber:16},void 0);const{logoURL:n,appName:u,ownerName:U,homepageURL:h,appDesc:A,scopes:Z}=s;return e("section",{className:"application-detail",children:[e("header",{className:"application-detail-brand",children:[e("div",{className:"application-detail-brand-logo",children:e("img",{alt:"logo",src:n},void 0,!1,{fileName:a,lineNumber:65,columnNumber:21},void 0)},void 0,!1,{fileName:a,lineNumber:64,columnNumber:17},void 0),e("div",{className:"application-detail-brand-info",children:[e("div",{className:"application-detail-name",children:u},void 0,!1,{fileName:a,lineNumber:68,columnNumber:21},void 0),e("div",{className:"application-detail-owner-url",children:[e("span",{className:"application-detail-owner",children:[e(j,{},void 0,!1,{fileName:a,lineNumber:71,columnNumber:29},void 0),e("span",{children:U},void 0,!1,{fileName:a,lineNumber:72,columnNumber:29},void 0)]},void 0,!0,{fileName:a,lineNumber:70,columnNumber:25},void 0),e("span",{className:"application-detail-url",children:[e(_,{},void 0,!1,{fileName:a,lineNumber:75,columnNumber:29},void 0),e("a",{href:h,children:h},void 0,!1,{fileName:a,lineNumber:76,columnNumber:29},void 0)]},void 0,!0,{fileName:a,lineNumber:74,columnNumber:25},void 0)]},void 0,!0,{fileName:a,lineNumber:69,columnNumber:21},void 0)]},void 0,!0,{fileName:a,lineNumber:67,columnNumber:17},void 0),e("div",{className:"application-detail-brand-action",children:e(L,{danger:!0,onClick:f,children:i("apps-revoke")},void 0,!1,{fileName:a,lineNumber:81,columnNumber:21},void 0)},void 0,!1,{fileName:a,lineNumber:80,columnNumber:17},void 0)]},void 0,!0,{fileName:a,lineNumber:63,columnNumber:13},void 0),e("p",{className:"application-detail-desc",children:A},void 0,!1,{fileName:a,lineNumber:86,columnNumber:13},void 0),e("div",{className:"application-detail-scopes",children:[e("h4",{children:i("apps-permissions")},void 0,!1,{fileName:a,lineNumber:88,columnNumber:17},void 0),e("ul",{children:Z.map(v=>e("li",{className:"application-detail-scope","data-scope":v,children:[e(P,{},void 0,!1,{fileName:a,lineNumber:92,columnNumber:29},void 0),e("span",{className:"application-detail-scope-text",children:i("oauth-scope-"+v.replace(/[.:]/g,"-"))},void 0,!1,{fileName:a,lineNumber:93,columnNumber:29},void 0)]},v,!0,{fileName:a,lineNumber:91,columnNumber:25},void 0))},void 0,!1,{fileName:a,lineNumber:89,columnNumber:17},void 0)]},void 0,!0,{fileName:a,lineNumber:87,columnNumber:13},void 0)]},void 0,!0,{fileName:a,lineNumber:62,columnNumber:9},void 0)};var b="/Users/honey/GithubRep/flat/packages/flat-pages/src/UserSettingPage/ApplicationsPage/index.tsx";const X=D(function(){const[l,i]=$(),m=t.exports.useCallback(r=>{i({q:r==null?void 0:r.oauthUUID})},[i]),s=l.get("q");return e(C,{children:s?e(q,{navigate:m,oauthUUID:s},void 0,!1,{fileName:b,lineNumber:24,columnNumber:17},this):e(I,{navigate:m},void 0,!1,{fileName:b,lineNumber:26,columnNumber:17},this)},void 0,!1,{fileName:b,lineNumber:22,columnNumber:9},this)});export{X as ApplicationsPage,X as default};
//# sourceMappingURL=index.13bab292.js.map
