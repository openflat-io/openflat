import{v as w,bs as C,b9 as l,bb as U,l as f,a$ as x,q as a,ax as _,bt as v}from"./index.ec641b5a.js";import{s as N,e as u,l as L}from"./routes.96a891de.js";import{u as R}from"./lifecycle.f56c70c9.js";const B=(i,e)=>{let t=NaN;const o=w();return(async()=>{try{await N(o)}catch(s){u(s);return}e?e.openExternalBrowser(b(o,l.GITHUB_CALLBACK)):window.open(b(o,l.GITHUB_CALLBACK));const n=async()=>{try{const s=await L(o);if(!s.name){t=window.setTimeout(n,2e3);return}i(s)}catch(s){u(s)}};n()})(),()=>{window.clearTimeout(t)}};function b(i,e){const t=encodeURIComponent(e);return`https://github.com/login/oauth/authorize?client_id=${C.CLIENT_ID}&redirect_uri=${t}&state=${i}`}var r="/Users/yl/github-repo/openflat/packages/flat-pages/src/LoginPage/WeChatLogin.tsx";const $=U(function({setLoginResult:e}){const[t,o]=f.exports.useState(""),n=R(),s=x();return f.exports.useEffect(()=>{const c=w(),m={};o(T(c));const d=(p,h)=>{p.current=window.setTimeout(async()=>{const g=await n(L(h));g.userUUID===""?d(p,h):e(g)},2e3)};return n(N(c)).then(d.bind(null,m,c)).catch(u),()=>{window.clearTimeout(m.current)}},[]),a("div",{className:"wechat-login-container",children:[a("iframe",{className:"wechat-login-iframe",frameBorder:"0",scrolling:"no",src:t,title:"wechat"},void 0,!1,{fileName:r,lineNumber:57,columnNumber:13},this),a("div",{className:"wechat-login-spin",children:a(_,{spin:!0},void 0,!1,{fileName:r,lineNumber:65,columnNumber:17},this)},void 0,!1,{fileName:r,lineNumber:64,columnNumber:13},this),a("span",{className:"wechat-login-text",children:s("wechat-login-tips")},void 0,!1,{fileName:r,lineNumber:67,columnNumber:13},this)]},void 0,!0,{fileName:r,lineNumber:56,columnNumber:9},this)});function T(i,e=l.WECHAT_CALLBACK){const t=encodeURIComponent(`${e}`),o=`
        .impowerBox .qrcode {
            width: 238px;
            margin: 0;
        }
        .impowerBox .title {
            display: none;
        }
        .status_icon {
            display: none;
        }
        .impowerBox .status {
            text-align: center;
        }
        .impowerBox .info {
            display: none;
        }
    `;return`https://open.weixin.qq.com/connect/qrconnect?appid=${v.APP_ID}&scope=snsapi_login&redirect_uri=${t}&state=${i}&login_type=jssdk&self_redirect=true&style=black&href=data:text/css;base64,${window.btoa(o)}`}export{$ as W,T as a,b,B as g};
//# sourceMappingURL=WeChatLogin.29b6893b.js.map
