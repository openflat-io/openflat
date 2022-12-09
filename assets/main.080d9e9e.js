function y(){}function b(t){return document.createElement(t)}function o(t,e){return t.appendChild(e)}function g(t,e){return t.classList.add(`netless-app-dice-${e}`),t}function d(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function x(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function f(t,e){for(const n in e)x(t,n,e[n])}function k(t){return`rgb(${t[0]}, ${t[1]}, ${t[2]})`}function S(){const t=d("svg");t.style.display="none",f(t,{width:"100",height:"100",viewBox:"0 0 100 100"});for(let e=1;e<=6;e++)o(t,Y(e));return t}function Y(t){const e=d("symbol");return f(e,{id:`dice-face-${t}`,viewBox:"0 0 100 100"}),(t===1||t===3||t===5)&&o(e,c(50,50)),(t===2||t===3||t===4||t===5||t===6)&&(o(e,c(25,75)),o(e,c(75,25))),(t===4||t===5||t===6)&&(o(e,c(25,25)),o(e,c(75,75))),t===6&&(o(e,c(25,50)),o(e,c(75,50))),e}function c(t,e){const n=d("circle");return f(n,{cx:String(t),cy:String(e),r:"8"}),n}function L(t){const e=g(b("div"),"cube"),n=[];for(let r=1;r<=6;++r){const s=X(r,t[r-1]);n.push(s),o(e,s)}return{$cube:e,$faces:n}}function X(t,e){const n=g(g(b("div"),"face"),`face-${t}`),r=d("svg");f(r,{width:"100",height:"100",viewBox:"0 0 100 100",fill:"#fff"});const s=d("use");return f(s,{href:`#dice-face-${e}`}),o(r,s),o(n,r),n}function C(t){const e=g(b("div"),"container"),n=S();o(e,n);const{$cube:r,$faces:s}=L(t);o(e,r);const u="netless-app-dice-reset",a="netless-app-dice-activate";function i(){r.classList.remove(a),r.classList.add(u)}function p(){r.classList.remove(u),r.classList.add(a)}function h(l,v){const w=s[l].querySelector("svg use");x(w,"href",`#dice-face-${v}`)}let m="";function $(l){m!==l&&(m=l,s.forEach(v=>{v.style.backgroundColor=l}))}return{$container:e,$symbols:n,$cube:r,$faces:s,reset:i,activate:p,set_face:h,set_color:$}}const E=`.netless-app-dice-container{width:100%;height:100%;overflow:hidden;display:flex;align-items:center;justify-content:center;perspective:800px;user-select:none;-webkit-user-select:none}.netless-app-dice-cube{display:inline-block;width:100px;height:100px;transform-style:preserve-3d;transform-origin:center;position:relative;cursor:pointer}.netless-app-dice-reset{animation:netless-app-dice-anti-rotate .1s paused}.netless-app-dice-activate{animation:netless-app-dice-rotate 3s running;cursor:not-allowed}.netless-app-dice-face{width:100%;height:100%;border:1px solid;overflow:hidden;position:absolute;transform-origin:0 0;background-color:#68ab5d;transform-style:preserve-3d;backface-visibility:hidden}.netless-app-dice-face-1{transform:translateZ(50px)}.netless-app-dice-face-2{left:100px;transform:translateZ(-50px) rotateY(180deg)}.netless-app-dice-face-3{transform:rotateY(-90deg) translate(-50px)}.netless-app-dice-face-4{left:100px;transform:rotateY(90deg) translate(-50px)}.netless-app-dice-face-5{top:100px;transform:rotateX(-90deg) translateY(-50px)}.netless-app-dice-face-6{transform:rotateX(90deg) translateY(-50px)}@keyframes netless-app-dice-rotate{0%{transform:rotateX(0) rotateY(0) rotate(0)}to{transform:rotateX(1080deg) rotateY(-720deg) rotate(0)}}@keyframes netless-app-dice-anti-rotate{0%{transform:rotateX(1080deg) rotateY(-720deg) rotate(0)}to{transform:rotateX(0) rotateY(0) rotate(0)}}
`,A={kind:"Dice",setup(t){const e=new Set,n=t.createStorage("faces"),r=C(n.state.value||[1,2,3,4,5,6]);r.$cube.onclick=function(){var a;if(r.$cube.classList.contains("netless-app-dice-activate"))return;const i=(a=t.currentMember)==null?void 0:a.memberState.strokeColor;n.setState({value:_([1,2,3,4,5,6]),color:i?k(i):""})};let s=y;function u(){s(),e.delete(s),r.activate(),r.set_color(n.state.color||"");const a=setTimeout(()=>{const p=n.state.value;!p||p.forEach((h,m)=>r.set_face(m,h))},1e3),i=setTimeout(r.reset,3010);s=()=>{clearTimeout(i),clearTimeout(a),r.reset()},e.add(s)}e.add(n.on("stateChanged",u)),t.box.mountStyles(E),t.box.mountContent(r.$container),t.emitter.on("destroy",()=>{e.forEach(a=>a())})}};function _(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}export{A as default};
//# sourceMappingURL=main.080d9e9e.js.map
