import{n as b,s as h}from"./scheduler.7a274a43.js";const e=[];function d(o,l=b){let n;const i=new Set;function r(t){if(h(o,t)&&(o=t,n)){const f=!e.length;for(const s of i)s[1](),e.push(s,o);if(f){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function c(t){r(t(o))}function _(t,f=b){const s=[t,f];return i.add(s),i.size===1&&(n=l(r,c)||b),t(o),()=>{i.delete(s),i.size===0&&n&&(n(),n=null)}}return{set:r,update:c,subscribe:_}}var u;const g=((u=globalThis.__sveltekit_h6fo9g)==null?void 0:u.base)??"/PersonalPortfolio";var a;const q=((a=globalThis.__sveltekit_h6fo9g)==null?void 0:a.assets)??g;export{q as a,g as b,d as w};
