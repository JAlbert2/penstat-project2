/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),s=new Map;class i{constructor(t,s){if(this._$cssResult$=!0,s!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=s.get(this.cssText);return t&&void 0===e&&(s.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const n=(t,...s)=>{const n=1===t.length?t[0]:s.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new i(n,e)},r=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let s="";for(const e of t.cssRules)s+=e.cssText;return(t=>new i("string"==typeof t?t:t+"",e))(s)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var o;const l=window.reactiveElementPolyfillSupport,a={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},h=(t,e)=>e!==t&&(e==e||t==t),d={attribute:!0,type:String,converter:a,reflect:!1,hasChanged:h};class c extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const i=this._$Eh(s,e);void 0!==i&&(this._$Eu.set(i,s),t.push(i))})),t}static createProperty(t,e=d){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||d}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eh(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$Em)&&void 0!==e?e:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$Em)||void 0===e||e.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const s=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,s)=>{t?e.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((t=>{const s=document.createElement("style"),i=window.litNonce;void 0!==i&&s.setAttribute("nonce",i),s.textContent=t.cssText,e.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$Eg(t,e,s=d){var i,n;const r=this.constructor._$Eh(t,s);if(void 0!==r&&!0===s.reflect){const o=(null!==(n=null===(i=s.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==n?n:a.toAttribute)(e,s.type);this._$Ei=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Ei=null}}_$AK(t,e){var s,i,n;const r=this.constructor,o=r._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=r.getPropertyOptions(o),l=t.converter,h=null!==(n=null!==(i=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==i?i:"function"==typeof l?l:null)&&void 0!==n?n:a.fromAttribute;this._$Ei=o,this[o]=h(e,t.type),this._$Ei=null}}requestUpdate(t,e,s){let i=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||h)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Em)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,e)=>this._$Eg(e,this[e],t))),this._$ES=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var u;c.finalized=!0,c.elementProperties=new Map,c.elementStyles=[],c.shadowRootOptions={mode:"open"},null==l||l({ReactiveElement:c}),(null!==(o=globalThis.reactiveElementVersions)&&void 0!==o?o:globalThis.reactiveElementVersions=[]).push("1.0.1");const p=globalThis.trustedTypes,v=p?p.createPolicy("lit-html",{createHTML:t=>t}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,m="?"+$,_=`<${m}>`,g=document,f=(t="")=>g.createComment(t),y=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,b=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,S=/>/g,w=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,x=/'/g,C=/"/g,U=/^(?:script|style|textarea)$/i,P=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),T=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),N=new WeakMap,R=(t,e,s)=>{var i,n;const r=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new B(e.insertBefore(f(),t),t,void 0,null!=s?s:{})}return o._$AI(t),o},M=g.createTreeWalker(g,129,null,!1),O=(t,e)=>{const s=t.length-1,i=[];let n,r=2===e?"<svg>":"",o=b;for(let e=0;e<s;e++){const s=t[e];let l,a,h=-1,d=0;for(;d<s.length&&(o.lastIndex=d,a=o.exec(s),null!==a);)d=o.lastIndex,o===b?"!--"===a[1]?o=E:void 0!==a[1]?o=S:void 0!==a[2]?(U.test(a[2])&&(n=RegExp("</"+a[2],"g")),o=w):void 0!==a[3]&&(o=w):o===w?">"===a[0]?(o=null!=n?n:b,h=-1):void 0===a[1]?h=-2:(h=o.lastIndex-a[2].length,l=a[1],o=void 0===a[3]?w:'"'===a[3]?C:x):o===C||o===x?o=w:o===E||o===S?o=b:(o=w,n=void 0);const c=o===w&&t[e+1].startsWith("/>")?" ":"";r+=o===b?s+_:h>=0?(i.push(l),s.slice(0,h)+"$lit$"+s.slice(h)+$+c):s+$+(-2===h?(i.push(void 0),e):c)}const l=r+(t[s]||"<?>")+(2===e?"</svg>":"");return[void 0!==v?v.createHTML(l):l,i]};class k{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,r=0;const o=t.length-1,l=this.parts,[a,h]=O(t,e);if(this.el=k.createElement(a,s),M.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=M.nextNode())&&l.length<o;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith($)){const s=h[r++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+"$lit$").split($),e=/([.?@])?(.*)/.exec(s);l.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?I:"?"===e[1]?j:"@"===e[1]?q:D})}else l.push({type:6,index:n})}for(const e of t)i.removeAttribute(e)}if(U.test(i.tagName)){const t=i.textContent.split($),e=t.length-1;if(e>0){i.textContent=p?p.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],f()),M.nextNode(),l.push({type:2,index:++n});i.append(t[e],f())}}}else if(8===i.nodeType)if(i.data===m)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf($,t+1));)l.push({type:7,index:n}),t+=$.length-1}n++}}static createElement(t,e){const s=g.createElement("template");return s.innerHTML=t,s}}function L(t,e,s=t,i){var n,r,o,l;if(e===T)return e;let a=void 0!==i?null===(n=s._$Cl)||void 0===n?void 0:n[i]:s._$Cu;const h=y(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(r=null==a?void 0:a._$AO)||void 0===r||r.call(a,!1),void 0===h?a=void 0:(a=new h(t),a._$AT(t,s,i)),void 0!==i?(null!==(o=(l=s)._$Cl)&&void 0!==o?o:l._$Cl=[])[i]=a:s._$Cu=a),void 0!==a&&(e=L(t,a._$AS(t,e.values),a,i)),e}class z{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:s},parts:i}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:g).importNode(s,!0);M.currentNode=n;let r=M.nextNode(),o=0,l=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new B(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new V(r,this,t)),this.v.push(e),a=i[++l]}o!==(null==a?void 0:a.index)&&(r=M.nextNode(),o++)}return n}m(t){let e=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class B{constructor(t,e,s,i){var n;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cg=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=L(this,t,e),y(t)?t===H||null==t||""===t?(this._$AH!==H&&this._$AR(),this._$AH=H):t!==this._$AH&&t!==T&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return A(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==H&&y(this._$AH)?this._$AA.nextSibling.data=t:this.S(g.createTextNode(t)),this._$AH=t}T(t){var e;const{values:s,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=k.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(s);else{const t=new z(n,this),e=t.p(this.options);t.m(s),this.S(e),this._$AH=t}}_$AC(t){let e=N.get(t.strings);return void 0===e&&N.set(t.strings,e=new k(t)),e}M(t){A(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new B(this.A(f()),this.A(f()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class D{constructor(t,e,s,i,n){this.type=1,this._$AH=H,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=H}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const n=this.strings;let r=!1;if(void 0===n)t=L(this,t,e,0),r=!y(t)||t!==this._$AH&&t!==T,r&&(this._$AH=t);else{const i=t;let o,l;for(t=n[0],o=0;o<n.length-1;o++)l=L(this,i[s+o],e,o),l===T&&(l=this._$AH[o]),r||(r=!y(l)||l!==this._$AH[o]),l===H?t=H:t!==H&&(t+=(null!=l?l:"")+n[o+1]),this._$AH[o]=l}r&&!i&&this.k(t)}k(t){t===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class I extends D{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===H?void 0:t}}class j extends D{constructor(){super(...arguments),this.type=4}k(t){t&&t!==H?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class q extends D{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=L(this,t,e,0))&&void 0!==s?s:H)===T)return;const i=this._$AH,n=t===H&&i!==H||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==H&&(i===H||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class V{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){L(this,t)}}const W=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var J,K;null==W||W(k,B),(null!==(u=globalThis.litHtmlVersions)&&void 0!==u?u:globalThis.litHtmlVersions=[]).push("2.0.1");class Y extends c{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=R(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return T}}Y.finalized=!0,Y._$litElement$=!0,null===(J=globalThis.litElementHydrateSupport)||void 0===J||J.call(globalThis,{LitElement:Y});const Z=globalThis.litElementPolyfillSupport;null==Z||Z({LitElement:Y}),(null!==(K=globalThis.litElementVersions)&&void 0!==K?K:globalThis.litElementVersions=[]).push("3.0.1");class F extends Y{static get tag(){return"card-frame"}static get properties(){return{}}static get styles(){return n`:host{display:block;border:1px solid #000}`}render(){return P` <div> <slot id="top-part" name="banner"></slot> <slot id="bottom-part" name="content"></slot> </div> `}}customElements.define(F.tag,F);const G=new URL(new URL("8e69de73.svg",import.meta.url).href,import.meta.url).href;class Q extends Y{static get tag(){return"learning-card"}constructor(){super(),this.type="objective",this.arrow=G,this.visible=!1,setTimeout((()=>{import("./79398c54.js"),import("./2dc426d6.js")}),0)}static get properties(){return{type:{type:String,reflect:!0}}}updated(t){t.forEach(((t,e)=>{"type"===e&&"objective"===this[e]&&(this.icon="lightbulb"),"type"===e&&"science"===this[e]&&(this.icon="beaker"),"type"===e&&"question"===this[e]&&(this.icon="question")}))}firstUpdated(t){super.firstUpdated&&super.firstUpdated(t),this.shadowRoot.querySelector("img").addEventListener("click",this.toggleContent.bind(this))}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}static get styles(){return n`:host{display:block;min-width:20em}:host([type=math]) img{background-color:purple}img{display:inline-flex;height:var(--learning-card-height,100px);width:var(--learning-card-width,100px)}.rotate{transition:transform .5s ease-in}.hidden{transform:scale(0) translateY(-100%);min-height:40px;max-height:40px;transition:transform .5s ease-in,max-height .5s ease-in}.visible{overflow:hidden;transform:scale(100%) translateY(-100%);min-height:40px;max-height:1000px;transition:max-height .5s ease-in,transform .5s ease-in}`}toggleContent(){const t=this.shadowRoot.querySelector("img");if(this.visible){const e=this.shadowRoot.querySelector(".visible");t.style.transform="rotate(0deg)",e.className="hidden"}else{const e=this.shadowRoot.querySelector(".hidden");t.style.transform="rotate(90deg)",e.className="visible"}this.visible=!this.visible}render(){return P` <card-frame> <card-header slot="banner" type="${this.type}"> <h1 slot="header" aria-label="Main header" style="font-family:'Open Sans',sans-serif;font-weight:300"> <slot name="header"></slot> </h1> <h2 slot="subheader" aria-label="Sub Header" style='font-family:"Open Sans",sans-serif;font-weight:500'> <slot name="subheader"></slot> </h2> </card-header> <div slot="content" style="margin-right:5em;min-height:40px;display:flex"> <img src="${this.arrow}" class="rotate" alt="Dropdown arrow" style="max-height:40px;max-width:40px;rotation:90deg;display:inline-flex"> <div class="hidden"> <slot></slot> </div> </div> </card-frame> `}static get haxProperties(){return{canScale:!1,canPosition:!1,canEditSource:!0,contentEditable:!0,gizmo:{title:"Learning Card",description:"An element that you have to replace / fix / improve",icon:"credit-card",color:"blue",groups:["Content","Presentation","Education"]},settings:{configure:[{property:"type",title:"Type",description:"Identifies the card",inputMethod:"select",options:{science:"Science",math:"Math"}}],advanced:[]},demoSchema:[{tag:Q.tag,properties:{type:"science"}}]}}}customElements.define(Q.tag,Q);export{T as b,c as n,P as p,n as r,R as w};
