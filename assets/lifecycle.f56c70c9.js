import{l as s}from"./index.ec641b5a.js";function f(){const e=s.exports.useRef(!1);return s.exports.useEffect(()=>()=>{e.current=!0},[]),e}function i(){const e=f();function n(o,t){return new Promise(async(u,c)=>{try{const r=await o;e.current||u(r)}catch(r){e.current?t?t(r):console.error("An error occurs from a promise after a component is unmounted",r):c(r)}})}return s.exports.useCallback(n,[e])}export{i as u};
//# sourceMappingURL=lifecycle.f56c70c9.js.map
