if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,i,t)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const c={uri:location.origin+r.slice(1)};return Promise.all(i.map((r=>{switch(r){case"exports":return s;case"module":return c;default:return e(r)}}))).then((e=>{const r=t(...e);return s.default||(s.default=r),s}))})))}}define("./sw.js",["./workbox-d9ace124"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"3c51237f.js",revision:"c984f12d49a78d905ec112cf4df42a4c"},{url:"82f85a00.js",revision:"da70dbc8d0cafb8978d99e0361189bf4"},{url:"fac9364a.js",revision:"0eb699938552b802efd61108cc9e861e"},{url:"fbd0539a.js",revision:"5c0dbb7470073a1b57e5b21dea1cd58a"},{url:"index.html",revision:"4b8e3e10361053c4d11c686f50da5ad0"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html")))}));
//# sourceMappingURL=sw.js.map
