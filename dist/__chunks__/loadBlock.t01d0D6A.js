import{_ as p}from"./preload-helper.DX1wzJSG.js";import{m as d}from"./index.module.DQI0LCqS.js";import{g as f}from"./getUrlForEndpoint.CxBBQRxT.js";function l(t){return t.toLowerCase().replace(/[^0-9a-z]/gi,"-").replace(/-+/g,"-").replace(/^-|-$/g,"")}function C(t){t==null||t.querySelectorAll("a").forEach(e=>{if(e.title=e.title||e.textContent,e.href!==e.textContent){const s=e.parentElement,a=e.parentElement.parentElement;e.querySelector("img")||(s.childNodes.length===1&&(s.tagName==="P"||s.tagName==="DIV")&&(e.className="button",s.classList.add("button-container")),s.childNodes.length===1&&s.tagName==="STRONG"&&a.childNodes.length===1&&a.tagName==="P"&&(e.className="button primary",a.classList.add("button-container")),s.childNodes.length===1&&s.tagName==="EM"&&a.childNodes.length===1&&a.tagName==="P"&&(e.className="button secondary",a.classList.add("button-container")))}})}function h(t){return new Promise((e,s)=>{const{href:a}=f(t);if(document.querySelector(`head > link[href="${a}"]`))e();else{const r=document.createElement("link");r.rel="stylesheet",r.href=a,r.onload=()=>e(),r.onerror=s,document.head.append(r)}})}function m(){document.querySelectorAll(".default-content-wrapper picture").forEach(e=>{const s=e.parentElement;s&&s.classList.add("image","main")})}function g(t){const e=[];let s=!1;[...t.children].forEach(a=>{if(a.tagName==="DIV"||!s){const r=document.createElement("div");e.push(r),s=a.tagName!=="DIV",s&&r.classList.add("default-content-wrapper")}e[e.length-1].append(a)}),e.forEach(a=>t.append(a)),m(),t.classList.add("section"),t.dataset.sectionStatus="initialized",t.style.display="none"}function E(t){return/^[a-z][A-Za-z0-9]*$/.test(t)?t:/^[A-Z][A-Za-z0-9]*$/.test(t)?t.charAt(0).toLowerCase()+t.slice(1):l(t).replace(/-([a-z])/g,e=>e[1].toUpperCase())}function y(t){const e={};return t.querySelectorAll(":scope > div").forEach(s=>{if(s.children){const a=[...s.children];if(a[1]){const r=a[1],o=l(a[0].textContent??"");let c="";if(r.querySelector("a")){const n=[...r.querySelectorAll("a")];n.length===1?c=n[0].href:c=n.map(i=>i.href)}else if(r.querySelector("img")){const n=[...r.querySelectorAll("img")];n.length===1?c=n[0].src:c=n.map(i=>i.src)}else if(r.querySelector("p")){const n=[...r.querySelectorAll("p")];n.length===1?c=n[0].textContent:c=n.map(i=>i.textContent)}else c=s.children[1].textContent;e[o]=c}}}),e}function S(t){const e=t.querySelector("div.section-metadata");if(e){const s=y(e);Object.keys(s).forEach(a=>{a==="style"?s.style.split(",").filter(o=>o).map(o=>l(o.trim())).forEach(o=>t.classList.add(o)):t.dataset[E(a)]=s[a]}),e.parentElement&&e.parentElement.remove()}}function P(t){t==null||t.querySelectorAll(":scope > div").forEach(e=>{g(e),S(e)})}function N(t){const e=["P","PRE","UL","OL","PICTURE","TABLE","H1","H2","H3","H4","H5","H6"],s=a=>{const r=document.createElement("p");r.append(...a.childNodes),[...a.attributes].filter(({nodeName:o})=>o==="class"||o.startsWith("data-aue")||o.startsWith("data-richtext")).forEach(({nodeName:o,nodeValue:c})=>{r.setAttribute(o,c||""),a.removeAttribute(o)}),a.append(r)};t.querySelectorAll(":scope > div > div").forEach(a=>{var r,o;a.hasChildNodes()&&(!!a.firstElementChild&&e.some(n=>{var i;return((i=a==null?void 0:a.firstElementChild)==null?void 0:i.tagName)===n})?((r=a.firstElementChild)==null?void 0:r.tagName)==="PICTURE"&&(a.children.length>1||(o=a.textContent)!=null&&o.trim())&&s(a):s(a))})}function A(t){if(t){const e=t.classList[0];if(e&&!t.dataset.blockStatus){t.classList.add("block"),t.dataset.blockName=e,t.dataset.blockStatus="initialized",N(t);const s=t.parentElement;s==null||s.classList.add(`${e}-wrapper`);const a=t.closest(".section");a&&a.classList.add(`${e}-container`)}}}function x(t){t==null||t.querySelectorAll("div.section > div > div").forEach(e=>{A(e)})}function u(t){return{name:t.dataset.blockName,element:t}}async function L(t){const{name:e,element:s}=u(t),a=s.dataset.blockStatus??"unloaded";if(a==="unloaded"||a==="initialized")try{s.dataset.blockStatus="loading";const{href:r}=f(`dist/${e}/${e}.js`),o=await p(()=>import(r),__vite__mapDeps([]));o.default&&await o.default(s),s.dataset.blockStatus="loaded"}catch(r){s.dataset.blockStatus="error",d.error("loadBlockModules:",r)}}async function q(t){const{name:e}=u(t);try{await h(`dist/${e}/${e}.css`)}catch(s){d.error("loadBlockStyles: Could not load css styles.",s)}}async function $(t){await Promise.all([L(t),q(t)])}export{L as a,q as b,$ as c,C as d,P as e,x as f,u as g,h as l,l as t};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=loadBlock.t01d0D6A.js.map
