(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=i(o);fetch(o.href,n)}})();const Le="modulepreload",De=function(a){return"/cgs-public/"+a},ge={},ie=function(t,i,s){let o=Promise.resolve();if(i&&i.length>0){let r=function(p){return Promise.all(p.map(h=>Promise.resolve(h).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),d=l?.nonce||l?.getAttribute("nonce");o=r(i.map(p=>{if(p=De(p),p in ge)return;ge[p]=!0;const h=p.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${u}`))return;const b=document.createElement("link");if(b.rel=h?"stylesheet":Le,h||(b.as="script"),b.crossOrigin="",b.href=p,d&&b.setAttribute("nonce",d),document.head.appendChild(b),h)return new Promise((x,_)=>{b.addEventListener("load",x),b.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${p}`)))})}))}function n(r){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=r,window.dispatchEvent(l),!l.defaultPrevented)throw r}return o.then(r=>{for(const l of r||[])l.status==="rejected"&&n(l.reason);return t().catch(n)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=globalThis,se=W.ShadowRoot&&(W.ShadyCSS===void 0||W.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,oe=Symbol(),he=new WeakMap;let Ce=class{constructor(t,i,s){if(this._$cssResult$=!0,s!==oe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(se&&t===void 0){const s=i!==void 0&&i.length===1;s&&(t=he.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&he.set(i,t))}return t}toString(){return this.cssText}};const Re=a=>new Ce(typeof a=="string"?a:a+"",void 0,oe),re=(a,...t)=>{const i=a.length===1?a[0]:t.reduce((s,o,n)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+a[n+1],a[0]);return new Ce(i,a,oe)},qe=(a,t)=>{if(se)a.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const s=document.createElement("style"),o=W.litNonce;o!==void 0&&s.setAttribute("nonce",o),s.textContent=i.cssText,a.appendChild(s)}},me=se?a=>a:a=>a instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return Re(i)})(a):a;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ne,defineProperty:Ue,getOwnPropertyDescriptor:Ge,getOwnPropertyNames:Be,getOwnPropertySymbols:He,getPrototypeOf:Fe}=Object,Q=globalThis,be=Q.trustedTypes,je=be?be.emptyScript:"",We=Q.reactiveElementPolyfillSupport,q=(a,t)=>a,Y={toAttribute(a,t){switch(t){case Boolean:a=a?je:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,t){let i=a;switch(t){case Boolean:i=a!==null;break;case Number:i=a===null?null:Number(a);break;case Object:case Array:try{i=JSON.parse(a)}catch{i=null}}return i}},ne=(a,t)=>!Ne(a,t),fe={attribute:!0,type:String,converter:Y,reflect:!1,useDefault:!1,hasChanged:ne};Symbol.metadata??=Symbol("metadata"),Q.litPropertyMetadata??=new WeakMap;let E=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=fe){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(t,i),!i.noAccessor){const s=Symbol(),o=this.getPropertyDescriptor(t,s,i);o!==void 0&&Ue(this.prototype,t,o)}}static getPropertyDescriptor(t,i,s){const{get:o,set:n}=Ge(this.prototype,t)??{get(){return this[i]},set(r){this[i]=r}};return{get:o,set(r){const l=o?.call(this);n?.call(this,r),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??fe}static _$Ei(){if(this.hasOwnProperty(q("elementProperties")))return;const t=Fe(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(q("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(q("properties"))){const i=this.properties,s=[...Be(i),...He(i)];for(const o of s)this.createProperty(o,i[o])}const t=this[Symbol.metadata];if(t!==null){const i=litPropertyMetadata.get(t);if(i!==void 0)for(const[s,o]of i)this.elementProperties.set(s,o)}this._$Eh=new Map;for(const[i,s]of this.elementProperties){const o=this._$Eu(i,s);o!==void 0&&this._$Eh.set(o,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const o of s)i.unshift(me(o))}else t!==void 0&&i.push(me(t));return i}static _$Eu(t,i){const s=i.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const s of i.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return qe(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$ET(t,i){const s=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,s);if(o!==void 0&&s.reflect===!0){const n=(s.converter?.toAttribute!==void 0?s.converter:Y).toAttribute(i,s.type);this._$Em=t,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(t,i){const s=this.constructor,o=s._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const n=s.getPropertyOptions(o),r=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:Y;this._$Em=o;const l=r.fromAttribute(i,n.type);this[o]=l??this._$Ej?.get(o)??l,this._$Em=null}}requestUpdate(t,i,s,o=!1,n){if(t!==void 0){const r=this.constructor;if(o===!1&&(n=this[t]),s??=r.getPropertyOptions(t),!((s.hasChanged??ne)(n,i)||s.useDefault&&s.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,s))))return;this.C(t,i,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,i,{useDefault:s,reflect:o,wrapped:n},r){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??i??this[t]),n!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(i=void 0),this._$AL.set(t,i)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,n]of s){const{wrapped:r}=n,l=this[o];r!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,n,l)}}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(i)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(i)}willUpdate(t){}_$AE(t){this._$EO?.forEach(i=>i.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(i=>this._$ET(i,this[i])),this._$EM()}updated(t){}firstUpdated(t){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[q("elementProperties")]=new Map,E[q("finalized")]=new Map,We?.({ReactiveElement:E}),(Q.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ce=globalThis,ve=a=>a,X=ce.trustedTypes,ye=X?X.createPolicy("lit-html",{createHTML:a=>a}):void 0,Te="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,Ie="?"+A,Ve=`<${Ie}>`,M=document,N=()=>M.createComment(""),U=a=>a===null||typeof a!="object"&&typeof a!="function",le=Array.isArray,Ye=a=>le(a)||typeof a?.[Symbol.iterator]=="function",J=`[ 	
\f\r]`,R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xe=/-->/g,we=/>/g,I=RegExp(`>|${J}(?:([^\\s"'>=/]+)(${J}*=${J}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$e=/'/g,_e=/"/g,ze=/^(?:script|style|textarea|title)$/i,Xe=a=>(t,...i)=>({_$litType$:a,strings:t,values:i}),c=Xe(1),L=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),ke=new WeakMap,z=M.createTreeWalker(M,129);function Pe(a,t){if(!le(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return ye!==void 0?ye.createHTML(t):t}const Qe=(a,t)=>{const i=a.length-1,s=[];let o,n=t===2?"<svg>":t===3?"<math>":"",r=R;for(let l=0;l<i;l++){const d=a[l];let p,h,u=-1,b=0;for(;b<d.length&&(r.lastIndex=b,h=r.exec(d),h!==null);)b=r.lastIndex,r===R?h[1]==="!--"?r=xe:h[1]!==void 0?r=we:h[2]!==void 0?(ze.test(h[2])&&(o=RegExp("</"+h[2],"g")),r=I):h[3]!==void 0&&(r=I):r===I?h[0]===">"?(r=o??R,u=-1):h[1]===void 0?u=-2:(u=r.lastIndex-h[2].length,p=h[1],r=h[3]===void 0?I:h[3]==='"'?_e:$e):r===_e||r===$e?r=I:r===xe||r===we?r=R:(r=I,o=void 0);const x=r===I&&a[l+1].startsWith("/>")?" ":"";n+=r===R?d+Ve:u>=0?(s.push(p),d.slice(0,u)+Te+d.slice(u)+A+x):d+A+(u===-2?l:x)}return[Pe(a,n+(a[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class G{constructor({strings:t,_$litType$:i},s){let o;this.parts=[];let n=0,r=0;const l=t.length-1,d=this.parts,[p,h]=Qe(t,i);if(this.el=G.createElement(p,s),z.currentNode=this.el.content,i===2||i===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(o=z.nextNode())!==null&&d.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const u of o.getAttributeNames())if(u.endsWith(Te)){const b=h[r++],x=o.getAttribute(u).split(A),_=/([.?@])?(.*)/.exec(b);d.push({type:1,index:n,name:_[2],strings:x,ctor:_[1]==="."?Je:_[1]==="?"?Ze:_[1]==="@"?et:K}),o.removeAttribute(u)}else u.startsWith(A)&&(d.push({type:6,index:n}),o.removeAttribute(u));if(ze.test(o.tagName)){const u=o.textContent.split(A),b=u.length-1;if(b>0){o.textContent=X?X.emptyScript:"";for(let x=0;x<b;x++)o.append(u[x],N()),z.nextNode(),d.push({type:2,index:++n});o.append(u[b],N())}}}else if(o.nodeType===8)if(o.data===Ie)d.push({type:2,index:n});else{let u=-1;for(;(u=o.data.indexOf(A,u+1))!==-1;)d.push({type:7,index:n}),u+=A.length-1}n++}}static createElement(t,i){const s=M.createElement("template");return s.innerHTML=t,s}}function D(a,t,i=a,s){if(t===L)return t;let o=s!==void 0?i._$Co?.[s]:i._$Cl;const n=U(t)?void 0:t._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),n===void 0?o=void 0:(o=new n(a),o._$AT(a,i,s)),s!==void 0?(i._$Co??=[])[s]=o:i._$Cl=o),o!==void 0&&(t=D(a,o._$AS(a,t.values),o,s)),t}class Ke{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,o=(t?.creationScope??M).importNode(i,!0);z.currentNode=o;let n=z.nextNode(),r=0,l=0,d=s[0];for(;d!==void 0;){if(r===d.index){let p;d.type===2?p=new H(n,n.nextSibling,this,t):d.type===1?p=new d.ctor(n,d.name,d.strings,this,t):d.type===6&&(p=new tt(n,this,t)),this._$AV.push(p),d=s[++l]}r!==d?.index&&(n=z.nextNode(),r++)}return z.currentNode=M,o}p(t){let i=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class H{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,o){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&t?.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=D(this,t,i),U(t)?t===v||t==null||t===""?(this._$AH!==v&&this._$AR(),this._$AH=v):t!==this._$AH&&t!==L&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ye(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==v&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=G.createElement(Pe(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===o)this._$AH.p(i);else{const n=new Ke(o,this),r=n.u(this.options);n.p(i),this.T(r),this._$AH=n}}_$AC(t){let i=ke.get(t.strings);return i===void 0&&ke.set(t.strings,i=new G(t)),i}k(t){le(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,o=0;for(const n of t)o===i.length?i.push(s=new H(this.O(N()),this.O(N()),this,this.options)):s=i[o],s._$AI(n),o++;o<i.length&&(this._$AR(s&&s._$AB.nextSibling,o),i.length=o)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t!==this._$AB;){const s=ve(t).nextSibling;ve(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class K{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,o,n){this.type=1,this._$AH=v,this._$AN=void 0,this.element=t,this.name=i,this._$AM=o,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=v}_$AI(t,i=this,s,o){const n=this.strings;let r=!1;if(n===void 0)t=D(this,t,i,0),r=!U(t)||t!==this._$AH&&t!==L,r&&(this._$AH=t);else{const l=t;let d,p;for(t=n[0],d=0;d<n.length-1;d++)p=D(this,l[s+d],i,d),p===L&&(p=this._$AH[d]),r||=!U(p)||p!==this._$AH[d],p===v?t=v:t!==v&&(t+=(p??"")+n[d+1]),this._$AH[d]=p}r&&!o&&this.j(t)}j(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Je extends K{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===v?void 0:t}}class Ze extends K{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==v)}}class et extends K{constructor(t,i,s,o,n){super(t,i,s,o,n),this.type=5}_$AI(t,i=this){if((t=D(this,t,i,0)??v)===L)return;const s=this._$AH,o=t===v&&s!==v||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==v&&(s===v||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class tt{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){D(this,t)}}const it=ce.litHtmlPolyfillSupport;it?.(G,H),(ce.litHtmlVersions??=[]).push("3.3.2");const at=(a,t,i)=>{const s=i?.renderBefore??t;let o=s._$litPart$;if(o===void 0){const n=i?.renderBefore??null;s._$litPart$=o=new H(t.insertBefore(N(),n),n,void 0,i??{})}return o._$AI(a),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de=globalThis;class O extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=at(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return L}}O._$litElement$=!0,O.finalized=!0,de.litElementHydrateSupport?.({LitElement:O});const st=de.litElementPolyfillSupport;st?.({LitElement:O});(de.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oe=a=>(t,i)=>{i!==void 0?i.addInitializer(()=>{customElements.define(a,t)}):customElements.define(a,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ot={attribute:!0,type:String,converter:Y,reflect:!1,hasChanged:ne},rt=(a=ot,t,i)=>{const{kind:s,metadata:o}=i;let n=globalThis.litPropertyMetadata.get(o);if(n===void 0&&globalThis.litPropertyMetadata.set(o,n=new Map),s==="setter"&&((a=Object.create(a)).wrapped=!0),n.set(i.name,a),s==="accessor"){const{name:r}=i;return{set(l){const d=t.get.call(this);t.set.call(this,l),this.requestUpdate(r,d,a,!0,l)},init(l){return l!==void 0&&this.C(r,void 0,a,l),l}}}if(s==="setter"){const{name:r}=i;return function(l){const d=this[r];t.call(this,l),this.requestUpdate(r,d,a,!0,l)}}throw Error("Unsupported decorator location: "+s)};function C(a){return(t,i)=>typeof i=="object"?rt(a,t,i):((s,o,n)=>{const r=o.hasOwnProperty(n);return o.constructor.createProperty(n,s),r?Object.getOwnPropertyDescriptor(o,n):void 0})(a,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function f(a){return C({...a,state:!0,attribute:!1})}const Z=[{code:"en",name:"English",native:"English",flag:"🇬🇧"},{code:"tr",name:"Turkish",native:"Türkçe",flag:"🇹🇷"},{code:"de",name:"German",native:"Deutsch",flag:"🇩🇪"},{code:"fr",name:"French",native:"Français",flag:"🇫🇷"},{code:"es",name:"Spanish",native:"Español",flag:"🇪🇸"},{code:"it",name:"Italian",native:"Italiano",flag:"🇮🇹"},{code:"pt",name:"Portuguese",native:"Português",flag:"🇵🇹"},{code:"nl",name:"Dutch",native:"Nederlands",flag:"🇳🇱"},{code:"pl",name:"Polish",native:"Polski",flag:"🇵🇱"},{code:"ru",name:"Russian",native:"Русский",flag:"🇷🇺"},{code:"zh",name:"Chinese",native:"中文",flag:"🇨🇳"},{code:"ja",name:"Japanese",native:"日本語",flag:"🇯🇵"},{code:"ko",name:"Korean",native:"한국어",flag:"🇰🇷"},{code:"ar",name:"Arabic",native:"العربية",flag:"🇸🇦"},{code:"hi",name:"Hindi",native:"हिन्दी",flag:"🇮🇳"},{code:"sv",name:"Swedish",native:"Svenska",flag:"🇸🇪"},{code:"da",name:"Danish",native:"Dansk",flag:"🇩🇰"},{code:"fi",name:"Finnish",native:"Suomi",flag:"🇫🇮"},{code:"cs",name:"Czech",native:"Čeština",flag:"🇨🇿"},{code:"hu",name:"Hungarian",native:"Magyar",flag:"🇭🇺"},{code:"el",name:"Greek",native:"Ελληνικά",flag:"🇬🇷"},{code:"uk",name:"Ukrainian",native:"Українська",flag:"🇺🇦"},{code:"ro",name:"Romanian",native:"Română",flag:"🇷🇴"}];let P="en",Se=new Map,V={};const ae=new Set;function e(a,t){return P==="en"?t:V[a]??t}function nt(){return P}async function ct(a){if(a===P)return;if(a==="en"){P="en",V={},ee();return}const t=Se.get(a);if(t){P=a,V=t.translations,ee();return}try{const i=await fetch(`./locales/${encodeURIComponent(a)}.json`);if(!i.ok){console.warn(`[i18n] Locale file not found for "${a}" (HTTP ${i.status}). Using English.`);return}const s=await i.json(),o={locale:a,translations:s,loadedAt:Date.now()};Se.set(a,o),P=a,V=s,ee()}catch(i){console.warn(`[i18n] Failed to load locale "${a}":`,i)}}function pe(a){return ae.add(a),()=>{ae.delete(a)}}function ee(){for(const a of ae)try{a()}catch{}window.dispatchEvent(new CustomEvent("cgs-locale-changed",{detail:{locale:P}}))}var lt=Object.defineProperty,S=(a,t,i,s)=>{for(var o=void 0,n=a.length-1,r;n>=0;n--)(r=a[n])&&(o=r(t,i,o)||o);return o&&lt(t,i,o),o};const dt="13.0, 12.9, 12.8, 12.7, 12.6, 12.5, 12.4, 12.3, 12.2, 12.1, 12.0",te=[{tier:"8 GB VRAM"},{tier:"12 GB+ VRAM"},{tier:"23 GB+ VRAM"}];class k extends O{constructor(){super(...arguments),this.open=!1,this.fullPage=!1,this.position=null,this.size={width:1360,height:600},this.startTab="about",this.hideHomeBtn=!1,this.activeTab="about",this.isDragging=!1,this.isResizing=!1,this.currentCardIndex=0,this.isCardDragging=!1,this.dragStartX=0,this.dragStartY=0,this.dragStartPosX=0,this.dragStartPosY=0,this.resizeStartWidth=0,this.resizeStartHeight=0,this.cardDragThreshold=40,this._tabCardCounts={about:12,privacy:7,eula:5,"third-party":5,safety:5,disclaimers:5},this._touchStartX=0,this._touchStartY=0,this._touchSwipeCandidate=!1,this._nextCard=()=>{if(this.currentCardIndex<this._currentTabCardCount-1)this.currentCardIndex=this.currentCardIndex+1;else{const t=this.TAB_ITEMS,i=t.findIndex(s=>s.id===this.activeTab);i<t.length-1&&(this.activeTab=t[i+1].id,this.currentCardIndex=0)}},this._prevCard=()=>{if(this.currentCardIndex>0)this.currentCardIndex=this.currentCardIndex-1;else{const t=this.TAB_ITEMS,i=t.findIndex(s=>s.id===this.activeTab);i>0&&(this.activeTab=t[i-1].id,this.currentCardIndex=this._tabCardCounts[this.activeTab]-1)}},this._goToCard=t=>{this.currentCardIndex=Math.max(0,Math.min(t,this._currentTabCardCount-1))},this._onKeyDown=t=>{this.fullPage&&(t.key==="ArrowRight"?(t.preventDefault(),this._nextCard()):t.key==="ArrowLeft"&&(t.preventDefault(),this._prevCard()))},this._onTouchStart=t=>{if(this._touchSwipeCandidate=!1,!this.fullPage||t.touches.length!==1)return;const i=t.composedPath()[0]??t.target;!this._isCarouselTouchTarget(i)||this._isInteractiveTouchTarget(i)||(this._touchSwipeCandidate=!0,this._touchStartX=t.touches[0].clientX,this._touchStartY=t.touches[0].clientY)},this._onTouchEnd=t=>{if(!this.fullPage||!this._touchSwipeCandidate||t.changedTouches.length===0){this.isCardDragging=!1,this._touchSwipeCandidate=!1;return}const i=t.changedTouches[0].clientX-this._touchStartX,s=t.changedTouches[0].clientY-this._touchStartY;this.isCardDragging=!1,this._touchSwipeCandidate=!1,Math.abs(i)>Math.abs(s)&&Math.abs(i)>this.cardDragThreshold&&(i<0?this._nextCard():this._prevCard())},this._onTouchCancel=()=>{this.isCardDragging=!1,this._touchSwipeCandidate=!1},this._onDragStart=t=>{if(t.target.closest(".about-close-btn"))return;this.isDragging=!0,this.dragStartX=t.clientX,this.dragStartY=t.clientY;const i=this.position||this._defaultPosition();this.dragStartPosX=i.x,this.dragStartPosY=i.y,t.preventDefault()},this._onResizeStart=t=>{this.isResizing=!0,this.dragStartX=t.clientX,this.dragStartY=t.clientY,this.resizeStartWidth=this.size.width,this.resizeStartHeight=this.size.height,t.preventDefault(),t.stopPropagation()},this._onMouseMove=t=>{if(this.isDragging){const i=t.clientX-this.dragStartX,s=t.clientY-this.dragStartY,o={x:this.dragStartPosX+i,y:this.dragStartPosY+s};this.position=o,this.dispatchEvent(new CustomEvent("position-changed",{detail:o}))}if(this.isResizing){const i=t.clientX-this.dragStartX,s=t.clientY-this.dragStartY,o={width:Math.max(500,this.resizeStartWidth+i),height:Math.max(400,this.resizeStartHeight+s)};this.size=o,this.dispatchEvent(new CustomEvent("size-changed",{detail:o}))}},this._onMouseUp=()=>{this.isDragging=!1,this.isResizing=!1}}get _currentTabCardCount(){return this._tabCardCounts[this.activeTab]??1}static{this.styles=re`
    :host {
      display: block;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      /* Layout spacing variables — prevent header overlap */
      --about-header-height: 52px;
      --about-mobile-nav-height: 60px;
    }

    .about-overlay {
      position: fixed;
      inset: 0;
      z-index: 10300;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(4px);
    }

    .about-panel {
      position: fixed;
      background: var(--ui-popup-bg, rgba(12, 12, 22, 0.97));
      border: 1px solid var(--ui-popup-border, rgba(99, 102, 241, 0.3));
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: row;
      z-index: 10301;
      overflow: hidden;
      box-sizing: border-box;
    }

    .about-panel.dragging {
      cursor: grabbing;
      user-select: none;
    }

    .about-panel.resizing {
      user-select: none;
    }

    /* Left sidebar navigation */
    .about-sidebar {
      width: 170px;
      min-width: 170px;
      background: var(--ui-popup-bg-secondary, rgba(8, 8, 18, 0.95));
      border-right: 1px solid var(--ui-popup-border, rgba(99, 102, 241, 0.15));
      display: flex;
      flex-direction: column;
      padding: 0;
    }

    .about-sidebar-header {
      padding: 16px 14px 12px;
      border-bottom: 1px solid rgba(99, 102, 241, 0.1);
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: grab;
    }

    .about-sidebar-header:active {
      cursor: grabbing;
    }

    .about-logo {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: linear-gradient(135deg, #6366f1, #8b5cf6, #a78bfa);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      color: #fff;
      flex-shrink: 0;
    }

    .about-logo-text {
      font-size: 13px;
      font-weight: 600;
      color: var(--ui-popup-text, #e2e8f0);
      letter-spacing: 0.5px;
    }

    .about-nav {
      display: flex;
      flex-direction: column;
      padding: 8px 6px;
      gap: 2px;
      flex: 1;
    }

    .about-nav-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 9px 12px;
      border: none;
      border-radius: 6px;
      background: transparent;
      color: var(--ui-popup-text-secondary, #94a3b8);
      font-size: 11.5px;
      cursor: pointer;
      transition: all 0.15s ease;
      text-align: left;
      white-space: nowrap;
    }

    .about-nav-btn:hover {
      background: rgba(99, 102, 241, 0.08);
      color: #c7d2fe;
    }

    .about-nav-btn.active {
      background: rgba(99, 102, 241, 0.15);
      color: #a5b4fc;
      font-weight: 500;
    }

    .about-nav-icon {
      font-size: 14px;
      width: 20px;
      text-align: center;
      flex-shrink: 0;
    }

    .about-nav-label {
      flex: 1;
      min-width: 0;
    }

    .about-chip-btn {
      background: rgba(99, 102, 241, 0.12);
      border: 1px solid rgba(99, 102, 241, 0.3);
      border-radius: 20px;
      padding: 5px 13px;
      font-size: 12px;
      color: #a5b4fc;
      cursor: pointer;
      transition: background 0.2s, border-color 0.2s, transform 0.1s;
      font-family: inherit;
    }
    .about-chip-btn:hover {
      background: rgba(99, 102, 241, 0.25);
      border-color: rgba(99, 102, 241, 0.6);
    }
    .about-chip-btn:active {
      transform: scale(0.96);
    }

    /* Home navigation button in the sidebar */
    .about-home-btn {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 7px 12px;
      border: none;
      border-radius: 6px;
      background: transparent;
      color: var(--ui-popup-text-secondary, #94a3b8);
      font-size: 11.5px;
      cursor: pointer;
      transition: background 0.15s, color 0.15s;
      text-align: left;
      white-space: nowrap;
      font-family: inherit;
      margin-top: auto;
      width: 100%;
    }

    .about-home-btn:hover {
      background: rgba(99, 102, 241, 0.08);
      color: #c7d2fe;
    }

    .about-home-btn:active {
      transform: scale(0.97);
    }

    /* Header home button styling */
    .about-home-btn-header {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 7px 12px;
      border: none;
      border-radius: 6px;
      background: transparent;
      color: var(--ui-popup-text-secondary, #94a3b8);
      font-size: 11.5px;
      cursor: pointer;
      transition: background 0.15s, color 0.15s;
      text-align: center;
      white-space: nowrap;
      font-family: inherit;
      margin-left: auto;
    }

    .about-home-btn-header:hover {
      background: rgba(99, 102, 241, 0.08);
      color: #c7d2fe;
    }

    .about-home-btn-header:active {
      transform: scale(0.97);
    }

    /* On mobile (horizontal nav), home btn becomes a nav-bar pill */
    @media (max-width: 768px) {
      .about-home-btn {
        flex-shrink: 0;
        margin-top: 0;
        padding: 6px 10px !important;
        font-size: 11px !important;
        white-space: nowrap !important;
        width: auto !important;
        border-left: 1px solid rgba(99, 102, 241, 0.15);
        margin-left: auto;
        border-radius: 0;
      }
    }

    /* Main content area */
    .about-main {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      min-width: 0;
      min-height: 0;
      /* In full-page mode, reserve space at top for header */
      padding-top: var(--about-header-height);
    }

    .about-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
      border-bottom: 1px solid rgba(99, 102, 241, 0.1);
      cursor: grab;
      min-height: 20px;
      /* Fixed header when in full-page mode */
      position: fixed;
      top: 0;
      left: 170px;
      right: 0;
      height: var(--about-header-height);
      z-index: 30;
      background: var(--ui-popup-bg, rgba(12, 12, 22, 0.97));
      backdrop-filter: blur(4px);
    }

    .about-header:active {
      cursor: grabbing;
    }

    .about-header-title {
      font-size: 13px;
      font-weight: 500;
      color: #c7d2fe;
    }

    .about-close-btn {
      width: 28px;
      height: 28px;
      border: none;
      border-radius: 6px;
      background: rgba(239, 68, 68, 0.1);
      color: #f87171;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      transition: all 0.15s;
    }

    .about-close-btn:hover {
      background: rgba(239, 68, 68, 0.25);
    }

    .about-content {
      flex: 1;
      overflow: hidden;
      min-width: 0;
      min-height: 0;
      padding: 0;
      color: #cbd5e1;
      font-size: 12.5px;
      line-height: 1.65;
      perspective: 1200px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      background: linear-gradient(135deg, rgba(15, 15, 25, 0.5), rgba(20, 20, 35, 0.5));
    }

    /* ── Non-carousel (EULA, Privacy, Safety, Disclaimers, etc.) ── */
    .about-content.scroll-mode {
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      overscroll-behavior: contain;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 20px 24px;
      perspective: none;
      touch-action: pan-y;
      width: 100%;
      box-sizing: border-box;
    }

    /* ── Privacy: single-card desktop / carousel mobile ─────────── */
    .about-privacy-desktop {
      width: 100%;
      height: 100%;
      min-width: 0;
      min-height: 0;
      box-sizing: border-box;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      overscroll-behavior: contain;
      padding: 20px 24px;
    }

    .about-privacy-mobile {
      display: none;
      width: 100%;
      height: 100%;
      min-width: 0;
      min-height: 0;
    }

    /* ── EULA: single-card desktop / carousel mobile ────────────── */
    .about-eula-desktop {
      width: 100%;
      height: 100%;
      min-width: 0;
      min-height: 0;
      box-sizing: border-box;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      overscroll-behavior: contain;
      padding: 20px 24px;
    }

    .about-eula-mobile {
      display: none;
      width: 100%;
      height: 100%;
      min-width: 0;
      min-height: 0;
    }

    @media (max-width: 768px) {
      .about-privacy-desktop {
        display: none !important;
      }
      .about-privacy-mobile {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
      }
      .about-eula-desktop {
        display: none !important;
      }
      .about-eula-mobile {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
      }
    }

    /* ── Carousel Gallery Container ─────────────────────────────── */
    .about-content-carousel {
      position: relative;
      width: 100%;
      height: 100%;
      min-width: 0;
      min-height: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    }

    /* ── Individual Cards in Carousel ────────────────────────────── */
    .about-card {
      position: absolute;
      width: 95%;
      max-width: 750px;
      height: calc(100% - 80px);
      background: rgba(15, 15, 25, 0.95);
      border: 1px solid rgba(99, 102, 241, 0.25);
      border-radius: 12px;
      padding: 32px;
      overflow-y: auto;
      opacity: 0;
      pointer-events: none;
      transform: translateY(40px);
      transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
      z-index: 1;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      box-sizing: border-box;
    }

    .about-card::-webkit-scrollbar {
      width: 6px;
    }
    .about-card::-webkit-scrollbar-track {
      background: transparent;
    }
    .about-card::-webkit-scrollbar-thumb {
      background: rgba(99, 102, 241, 0.2);
      border-radius: 3px;
    }

    .about-card.active {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
      z-index: 10;
      box-shadow: 0 16px 48px rgba(99, 102, 241, 0.2);
    }

    .about-card.prev {
      opacity: 0;
      transform: translateX(-120px) translateY(20px);
      z-index: 2;
    }

    .about-card.next {
      opacity: 0;
      transform: translateX(120px) translateY(20px);
      z-index: 2;
    }

    /* ── Carousel Arrow Row (snaps arrows to card edges) ──────────── */
    .about-arrow-row {
      position: absolute;
      top: calc(50% - 40px);
      left: 0;
      right: 0;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
      z-index: 20;
    }

    .about-arrow-spacer {
      width: 95%;
      max-width: 750px;
      flex-shrink: 1;
      pointer-events: none;
    }

    .about-nav-side-arrow {
      flex-shrink: 0;
      width: 44px;
      height: 44px;
      border: 2px solid rgba(99, 102, 241, 0.4);
      border-radius: 50%;
      background: rgba(8, 8, 18, 0.85);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      color: #a5b4fc;
      transition: background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, transform 0.15s ease;
      pointer-events: auto;
      user-select: none;
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
    }

    .about-nav-side-arrow:hover {
      background: rgba(99, 102, 241, 0.25);
      border-color: rgba(99, 102, 241, 0.8);
      color: #c7d2fe;
      box-shadow: 0 0 20px rgba(99, 102, 241, 0.35);
      transform: scale(1.08);
    }

    .about-nav-side-arrow:active {
      background: rgba(99, 102, 241, 0.4);
      transform: scale(0.95);
    }

    .about-nav-side-arrow:focus-visible {
      outline: 2px solid #a5b4fc;
      outline-offset: 3px;
    }

    /* ── Carousel Navigation Dots ────────────────────────────────── */
    .about-carousel-dots {
      position: absolute;
      top: 16px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 8px;
      z-index: 20;
      pointer-events: auto;
      white-space: nowrap;
    }

    .about-carousel-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: rgba(99, 102, 241, 0.3);
      border: 1px solid rgba(99, 102, 241, 0.5);
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .about-carousel-dot.active {
      background: #6366f1;
      box-shadow: 0 0 12px rgba(99, 102, 241, 0.6);
    }

    .about-carousel-dot:hover {
      background: rgba(99, 102, 241, 0.6);
    }

    .about-carousel-dot:focus-visible {
      outline: 2px solid #6366f1;
      outline-offset: 3px;
    }

    /* ── Card Content Styling ────────────────────────────────────── */
    .about-card h2 {
      font-family: 'Orbitron', sans-serif;
      font-size: 18px;
      font-weight: 700;
      color: #c7d2fe;
      margin: 0 0 16px 0;
      padding-bottom: 12px;
      border-bottom: 1px solid rgba(99, 102, 241, 0.15);
      letter-spacing: 0.5px;
    }

    .about-card h3 {
      font-family: 'Orbitron', sans-serif;
      font-size: 15px;
      font-weight: 600;
      color: #a5b4fc;
      margin: 16px 0 8px 0;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }

    .about-card p {
      font-size: 15px;
      color: #cbd5e1;
      line-height: 1.65;
      margin: 0 0 12px 0;
    }

    .about-card ul {
      list-style: none;
      padding: 0;
      margin: 0 0 12px 0;
    }

    .about-card ul li {
      font-size: 15px;
      color: #cbd5e1;
      margin-bottom: 8px;
      padding-left: 16px;
      position: relative;
    }

    .about-card ul li::before {
      content: '●';
      position: absolute;
      left: 4px;
      color: #6366f1;
    }

    .about-card strong {
      color: #c7d2fe;
      font-weight: 600;
    }

    .about-card a {
      color: #818cf8;
      text-decoration: none;
    }

    .about-card a:hover {
      text-decoration: underline;
    }

    /* ── Hero Card Styling ──────────────────────────────────────── */
    .about-card.hero {
      text-align: center;
    }

    .about-card.hero .about-hero-logo {
      font-size: 48px;
      margin-bottom: 12px;
    }

    .about-card.hero h1 {
      font-family: 'Orbitron', sans-serif;
      font-size: 28px;
      font-weight: 700;
      color: #c7d2fe;
      margin: 0 0 8px 0;
      letter-spacing: 1px;
    }

    .about-card.hero .version-badge {
      display: inline-block;
      padding: 4px 12px;
      background: rgba(99, 102, 241, 0.12);
      border: 1px solid rgba(99, 102, 241, 0.25);
      border-radius: 12px;
      font-size: 10px;
      font-weight: 500;
      color: #818cf8;
      margin-left: 8px;
    }

    .about-card.hero > p:not(.version-badge) {
      font-family: 'Cormorant Garamond', serif;
      font-size: 15px;
      color: #94a3b8;
      margin: 8px 0 0 0;
    }

    /* Content styling (fallback for non-carousel mode) */
    .about-content h2 {
      font-family: 'Orbitron', sans-serif;
      font-size: 18px;
      font-weight: 600;
      color: #e2e8f0;
      margin: 0 0 12px 0;
      letter-spacing: 0.5px;
    }

    .about-content h3 {
      font-family: 'Orbitron', sans-serif;
      font-size: 15px;
      font-weight: 600;
      color: #a5b4fc;
      margin: 20px 0 8px 0;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }

    .about-content p {
      margin: 0 0 12px 0;
      color: #94a3b8;
    }

    .about-content ul {
      margin: 0 0 12px 0;
      padding-left: 20px;
    }

    .about-content li {
      margin-bottom: 4px;
      color: #94a3b8;
    }

    .about-content a {
      color: #818cf8;
      text-decoration: none;
    }

    .about-content a:hover {
      text-decoration: underline;
    }

    .version-badge {
      display: inline-block;
      padding: 3px 10px;
      background: rgba(99, 102, 241, 0.12);
      border: 1px solid rgba(99, 102, 241, 0.25);
      border-radius: 12px;
      font-size: 11px;
      color: #a5b4fc;
      font-weight: 500;
      margin-left: 8px;
    }

    .about-hero {
      text-align: center;
      padding: 24px 0 20px;
      border-bottom: 1px solid rgba(99, 102, 241, 0.08);
      margin-bottom: 20px;
    }

    .about-hero-logo {
      width: 64px;
      height: 64px;
      margin: 0 auto 12px;
      border-radius: 16px;
      background: linear-gradient(135deg, #6366f1, #8b5cf6, #a78bfa);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
      color: #fff;
    }

    .about-hero h1 {
      font-size: 20px;
      font-weight: 700;
      color: #f1f5f9;
      margin: 0 0 4px 0;
    }

    .about-hero p {
      font-size: 12px;
      color: #64748b;
      margin: 0;
    }

    .about-arch-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin: 12px 0;
    }

    .about-arch-card {
      padding: 12px;
      background: rgba(30, 30, 50, 0.4);
      border: 1px solid rgba(99, 102, 241, 0.1);
      border-radius: 8px;
    }

    .about-arch-card-title {
      font-size: 13px;
      font-weight: 600;
      color: #a5b4fc;
      margin-bottom: 4px;
    }

    .about-arch-card-value {
      font-size: 13px;
      color: #94a3b8;
    }

    /* Third party table */
    .tp-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 11px;
      margin: 12px 0;
    }

    .tp-table th {
      text-align: left;
      padding: 8px 10px;
      background: rgba(30, 30, 50, 0.6);
      border-bottom: 1px solid rgba(99, 102, 241, 0.15);
      color: #a5b4fc;
      font-weight: 600;
      font-size: 10.5px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .tp-table td {
      padding: 6px 10px;
      border-bottom: 1px solid rgba(99, 102, 241, 0.05);
      color: #94a3b8;
    }

    .tp-table tr:hover td {
      background: rgba(99, 102, 241, 0.04);
    }

    .tp-license-badge {
      display: inline-block;
      padding: 1px 6px;
      border-radius: 4px;
      font-size: 10px;
      font-weight: 500;
    }

    .tp-license-badge.mit { background: rgba(34, 197, 94, 0.12); color: #4ade80; }
    .tp-license-badge.apache { background: rgba(59, 130, 246, 0.12); color: #60a5fa; }
    .tp-license-badge.bsd { background: rgba(168, 85, 247, 0.12); color: #c084fc; }
    .tp-license-badge.isc { background: rgba(20, 184, 166, 0.12); color: #2dd4bf; }
    .tp-license-badge.mpl { background: rgba(245, 158, 11, 0.12); color: #fbbf24; }
    .tp-license-badge.psf { background: rgba(6, 182, 212, 0.12); color: #22d3ee; }
    .tp-license-badge.other { background: rgba(100, 116, 139, 0.12); color: #94a3b8; }

    .tp-section-header {
      font-size: 14px;
      font-weight: 600;
      color: #818cf8;
      margin: 16px 0 8px;
      padding-bottom: 6px;
      border-bottom: 1px solid rgba(99, 102, 241, 0.1);
    }

    /* Full-page mode layout */
    :host([full-page]) .about-panel {
      position: fixed !important;
      display: flex;
      flex-direction: row;
      left: 0 !important;
      top: 0 !important;
      width: 100% !important;
      height: 100% !important;
      border-radius: 0 !important;
      box-shadow: none !
 important;
      border: none !important;
    }

    :host([full-page]) .about-header {
      position: fixed;
      top: 0;
      left: 170px;
      right: 0;
      height: var(--about-header-height);
      z-index: 30;
      border-radius: 0;
    }

    :host([full-page]) .about-sidebar {
      position: fixed;
      left: 0;
      top: 0;
      height: 100%;
      width: 170px !important;
      z-index: 31;
    }

    :host([full-page]) .about-main {
      margin-left: 170px;
      padding-top: var(--about-header-height);
    }

    /* Resize handle */
    .resize-handle {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 16px;
      height: 16px;
      cursor: nwse-resize;
      opacity: 0.4;
    }

    .resize-handle::after {
      content: '';
      position: absolute;
      bottom: 3px;
      right: 3px;
      width: 8px;
      height: 8px;
      border-right: 2px solid rgba(99, 102, 241, 0.4);
      border-bottom: 2px solid rgba(99, 102, 241, 0.4);
    }

    /* ── Mobile / Tablet responsive ─────────────────────────── */

    @media (max-width: 768px) {
      /* Panel fills the entire screen */
      .about-panel {
        position: fixed !important;
        left: 0 !important;
        top: 0 !important;
        width: 100% !important;
        max-width: 100% !important;
        height: 100% !important;
        min-height: 100dvh !important;
        border-radius: 0 !important;
        flex-direction: column !important;
        overflow: hidden !important;
        box-sizing: border-box !important;
      }

      /* Sidebar becomes a horizontal top nav bar */
      .about-sidebar {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        width: 100% !important;
        min-width: unset !important;
        height: var(--about-mobile-nav-height) !important;
        flex-direction: row !important;
        border-right: none !important;
        border-bottom: 1px solid rgba(99, 102, 241, 0.2) !important;
        padding: 0 !important;
        overflow: clip !important;
        z-index: 32 !important;
        background: var(--ui-popup-bg-secondary, rgba(8, 8, 18, 0.98)) !important;
      }

      /* Hide logo header on mobile — save space for the nav tabs */
      .about-sidebar-header {
        display: none !important;
      }

      /* Full-width nav row — all tabs distributed evenly */
      .about-nav {
        flex-direction: row !important;
        flex-wrap: nowrap !important;
        overflow-x: hidden !important;
        overflow-y: hidden !important;
        padding: 0 !important;
        gap: 0 !important;
        align-items: stretch !important;
        flex: 1 !important;
        width: auto !important;
        min-width: 0 !important;
        height: 100% !important;
      }

      .about-nav-btn {
        flex: 1 1 0 !important;
        min-width: 0 !important;
        flex-direction: column !important;
        align-items: center !important;
        justify-content: center !important;
        gap: 3px !important;
        padding: 6px 3px !important;
        font-size: 13px !important;
        white-space: nowrap !important;
        overflow: hidden !important;
        border-radius: 0 !important;
        border-right: 1px solid rgba(99, 102, 241, 0.08) !important;
        word-break: unset !important;
      }

      .about-nav-btn:last-child {
        border-right: none !important;
      }

      .about-nav-btn.active {
        border-bottom: 2px solid #818cf8 !important;
      }

      .about-nav-icon {
        display: block !important;
        font-size: 15px !important;
        text-align: center !important;
        width: auto !important;
        flex-shrink: 0 !important;
      }

      .about-nav-label {
        display: block !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
        max-width: 100% !important;
        text-align: center !important;
        font-size: 11px !important;
      }

      /* Main content area — account for fixed nav bar + fixed title header */
      .about-main {
        flex: 1;
        min-height: 0;
        margin-left: 0 !important;
        padding-top: calc(var(--about-mobile-nav-height) + var(--about-header-height)) !important;
      }

      /* Title bar: sits just below the nav bar */
      .about-header {
        cursor: default !important;
        left: 0 !important;
        top: var(--about-mobile-nav-height) !important;
      }

      /* ── Full-page overrides on mobile must match :host([full-page]) specificity ── */
      :host([full-page]) .about-sidebar {
        width: 100% !important;
        min-width: unset !important;
        height: var(--about-mobile-nav-height) !important;
        flex-direction: row !important;
        border-right: none !important;
        border-bottom: 1px solid rgba(99, 102, 241, 0.2) !important;
        padding: 0 !important;
        overflow: clip !important;
      }

      :host([full-page]) .about-header {
        left: 0 !important;
        top: var(--about-mobile-nav-height) !important;
      }

      :host([full-page]) .about-main {
        margin-left: 0 !important;
        padding-top: calc(var(--about-mobile-nav-height) + var(--about-header-height)) !important;
      }

      /* Disable resize grip on mobile */
      .resize-handle {
        display: none !important;
      }

      /* Arch grid: single column on mobile */
      .about-arch-grid {
        grid-template-columns: 1fr !important;
      }

      /* Third-party tables: allow horizontal scroll */
      .tp-table {
        display: block !important;
        overflow-x: auto !important;
        -webkit-overflow-scrolling: touch;
        font-size: 10px !important;
      }
      .tp-table th,
      .tp-table td {
        padding: 5px 7px !important;
      }

      /* Carousel cards: explicitly positioned from top so controls never overlap */
      .about-card {
        left: 0 !important;
        right: 0 !important;
        top: 0 !important;
        width: 100% !important;
        max-width: unset !important;
        height: calc(100% - 78px) !important;
        max-height: calc(100% - 78px) !important;
        margin: 0 auto !important;
        box-sizing: border-box !important;
        overflow-x: hidden !important;
        padding: 20px !important;
        border-radius: 20px !important;
      }

      .about-arrow-row {
        left: 12px !important;
        right: 12px !important;
        top: auto !important;
        bottom: 12px !important;
        transform: none !important;
        justify-content: space-between !important;
        gap: 12px !important;
      }

      .about-carousel-dots {
        top: 10px !important;
        max-width: calc(100% - 24px) !important;
        flex-wrap: wrap !important;
        justify-content: center !important;
        white-space: normal !important;
      }

      .about-card h2 {
        font-size: 15px !important;
      }

      .about-card h3 {
        font-size: 13px !important;
      }

      .about-card p,
      .about-card ul li {
        font-size: 13px !important;
        line-height: 1.55 !important;
      }

      .about-nav-side-arrow {
        width: 38px !important;
        height: 38px !important;
        font-size: 15px !important;
        border-width: 1.5px !important;
      }

      .about-arrow-spacer {
        flex: 1 1 auto !important;
        width: auto !important;
        min-width: 0 !important;
        max-width: none !important;
      }

      /* Carousel: allow vertical pan inside card; horizontal swipe handled by JS */
      .about-content-carousel {
        touch-action: pan-y;
        overscroll-behavior: contain;
        padding: 18px 12px 64px;
        box-sizing: border-box;
      }

      /* Non-carousel scrollable tab content on mobile */
      .about-content.scroll-mode {
        overflow-y: auto !important;
        overflow-x: hidden !important;
        -webkit-overflow-scrolling: touch !important;
        overscroll-behavior: contain !important;
        padding: 14px !important;
        touch-action: pan-y !important;
        font-size: 14px !important;
        word-break: break-word !important;
        overflow-wrap: break-word !important;
        max-width: 100% !important;
        box-sizing: border-box !important;
      }
      .about-content.scroll-mode h2 {
        font-size: 17px !important;
      }
      .about-content.scroll-mode h3 {
        font-size: 14px !important;
      }

      /* Ensure main content area doesn't overflow horizontally */
      .about-main {
        overflow-x: hidden !important;
        max-width: 100% !important;
        box-sizing: border-box !important;
      }
    }

    @media (max-width: 480px) {
      .about-sidebar-header {
        display: none !important;
      }
      .about-nav-btn {
        gap: 2px !important;
        padding: 5px 2px !important;
      }
      .about-nav-icon {
        font-size: 14px !important;
      }
      .about-nav-label {
        font-size: 10px !important;
      }
      .about-content.scroll-mode {
        padding: 10px !important;
        font-size: 13px !important;
      }

      .about-nav-side-arrow {
        width: 34px !important;
        height: 34px !important;
        border-width: 1.5px !important;
        font-size: 13px !important;
      }

      .about-arrow-spacer {
        width: 88% !important;
        max-width: unset !important;
      }
    }

    /* EULA / Legal sections */
    .legal-section {
      margin-bottom: 20px;
    }

    .legal-section h3 {
      font-size: 15px;
      font-weight: 600;
      color: #c7d2fe;
      margin: 0 0 8px 0;
      padding-bottom: 6px;
      border-bottom: 1px solid rgba(99, 102, 241, 0.08);
    }

    .legal-section p, .legal-section li {
      font-size: 15px;
      line-height: 1.7;
      color: #94a3b8;
      word-break: break-word;
      overflow-wrap: break-word;
    }

    .legal-section ol {
      padding-left: 20px;
    }

    .legal-section ol li {
      margin-bottom: 8px;
    }

    .legal-effective-date {
      display: inline-block;
      padding: 4px 10px;
      background: rgba(99, 102, 241, 0.08);
      border-radius: 6px;
      font-size: 11px;
      color: #818cf8;
      margin-bottom: 12px;
    }

    .disclaimer-card {
      padding: 14px;
      background: rgba(30, 30, 50, 0.35);
      border: 1px solid rgba(99, 102, 241, 0.1);
      border-radius: 8px;
      margin-bottom: 12px;
    }

    .disclaimer-card-title {
      font-size: 14px;
      font-weight: 600;
      color: #c7d2fe;
      margin-bottom: 6px;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .disclaimer-card p {
      font-size: 15px;
      line-height: 1.65;
      color: #94a3b8;
      margin: 0;
    }

    .requirements-shell {
      width: 100%;
    }

    .requirements-intro {
      color: #cbd5e1;
      font-size: 12.5px;
      margin: 0 0 12px 0;
    }

    .requirements-callout {
      padding: 14px;
      margin: 0 0 14px 0;
      background: rgba(30, 30, 50, 0.35);
      border: 1px solid rgba(99, 102, 241, 0.12);
      border-radius: 10px;
    }

    .requirements-callout p {
      margin: 0;
      color: #a8b3cf;
      font-size: 12px;
    }

    .requirements-tier-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 10px;
      margin: 0 0 14px 0;
    }

    .requirements-tier-card {
      padding: 14px;
      background: rgba(12, 16, 30, 0.88);
      border: 1px solid rgba(99, 102, 241, 0.18);
      border-radius: 10px;
    }

    .requirements-tier-label {
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: #818cf8;
      margin-bottom: 8px;
    }

    .requirements-tier-vram {
      font-family: 'Orbitron', sans-serif;
      font-size: 24px;
      font-weight: 700;
      color: #e2e8f0;
      margin-bottom: 6px;
    }

    .requirements-tier-card p {
      font-size: 11.5px;
      color: #94a3b8;
      margin: 0 0 8px 0;
    }

    .requirements-tier-fit {
      font-size: 10.5px;
      color: #64748b;
    }

    .requirements-meta {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin: 0 0 16px 0;
    }

    .requirements-meta-row {
      padding: 10px 12px;
      background: rgba(10, 14, 24, 0.7);
      border: 1px solid rgba(99, 102, 241, 0.1);
      border-radius: 8px;
      color: #94a3b8;
      font-size: 11.5px;
    }

    .requirements-meta-row strong {
      color: #c7d2fe;
    }

    .requirements-archetypes {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .requirements-details {
      border: 1px solid rgba(99, 102, 241, 0.14);
      border-radius: 10px;
      background: rgba(12, 16, 30, 0.7);
      overflow: hidden;
    }

    .requirements-details summary {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 14px 16px;
      cursor: pointer;
    }

    .requirements-details summary::-webkit-details-marker {
      display: none;
    }

    .requirements-summary-copy {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .requirements-summary-title {
      color: #e2e8f0;
      font-size: 13px;
      font-weight: 600;
    }

    .requirements-summary-subtitle {
      color: #94a3b8;
      font-size: 11.5px;
    }

    .requirements-summary-chevron {
      color: #818cf8;
      font-size: 18px;
      transition: transform 0.2s ease;
      flex-shrink: 0;
    }

    .requirements-details[open] .requirements-summary-chevron {
      transform: rotate(90deg);
    }

    .requirements-body {
      padding: 0 16px 16px;
      border-top: 1px solid rgba(99, 102, 241, 0.1);
    }

    .requirements-activities {
      margin: 12px 0;
      color: #a8b3cf;
      font-size: 11.5px;
    }

    .requirements-spec-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 10px;
    }

    .requirements-spec-card {
      padding: 12px;
      background: rgba(19, 24, 38, 0.9);
      border: 1px solid rgba(99, 102, 241, 0.12);
      border-radius: 8px;
    }

    .requirements-spec-card.recommended {
      border-color: rgba(96, 165, 250, 0.35);
      box-shadow: inset 0 0 0 1px rgba(96, 165, 250, 0.08);
    }

    .requirements-spec-label {
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: #93c5fd;
      margin-bottom: 8px;
    }

    .requirements-spec-card ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .requirements-spec-card li {
      margin-bottom: 7px;
      padding-left: 0;
      color: #cbd5e1;
      font-size: 11.5px;
    }

    .requirements-spec-card li::before {
      content: none;
    }

    .requirements-spec-card strong {
      color: #c7d2fe;
    }

    .requirements-spec-note {
      margin: 10px 0 0 0;
      color: #94a3b8;
      font-size: 11px;
      line-height: 1.6;
    }
  `}connectedCallback(){super.connectedCallback(),this.activeTab=this.startTab,this._unlistenI18n=pe(()=>this.requestUpdate()),globalThis.addEventListener("mousemove",this._onMouseMove),globalThis.addEventListener("mouseup",this._onMouseUp),globalThis.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this._unlistenI18n?.(),globalThis.removeEventListener("mousemove",this._onMouseMove),globalThis.removeEventListener("mouseup",this._onMouseUp),globalThis.removeEventListener("keydown",this._onKeyDown)}willUpdate(t){t.has("activeTab")&&(this.currentCardIndex=0)}_eventElement(t){return t instanceof HTMLElement?t:t instanceof Node?t.parentElement:null}_isCarouselTouchTarget(t){return!!this._eventElement(t)?.closest(".about-content-carousel")}_isInteractiveTouchTarget(t){return!!this._eventElement(t)?.closest('button, a, details, summary, [role="tab"], [role="button"]')}_effectiveSize(){const t=Math.max(500,globalThis.innerWidth*.94),i=Math.max(400,globalThis.innerHeight*.92);return{width:Math.min(this.size.width,t),height:Math.min(this.size.height,i)}}_defaultPosition(){const{width:t,height:i}=this._effectiveSize();return{x:Math.max(20,(globalThis.innerWidth-t)/2),y:Math.max(20,(globalThis.innerHeight-i)/2)}}get BENCHMARK_TIERS(){return[{label:e("about.sysreq.tier1.label","Minimum Local Benchmark"),tier:te[0].tier,summary:e("about.sysreq.tier1.summary","Bootable local Orus for phi4-mini, Memory RAG, quiet queue work, and low-visual professional use."),fit:e("about.sysreq.tier1.fit","Best for solo admin, overnight categorization, validation, and text-first workflows.")},{label:e("about.sysreq.tier2.label","Professional Multimodal Baseline"),tier:te[1].tier,summary:e("about.sysreq.tier2.summary","Balanced tier for multimodal Orus with live vision, Orpheus TTS on tuned profiles, and practical day-to-day throughput."),fit:e("about.sysreq.tier2.fit","Best for legal, marketing, HR, business operations, research, and meeting-heavy roles.")},{label:e("about.sysreq.tier3.label","Prime Visual Studio Tier"),tier:te[2].tier,summary:e("about.sysreq.tier3.summary","Full Windows-native Orus stack including Orpheus, Whisper Large, SF3D, advanced visual workflows, and higher concurrency headroom."),fit:e("about.sysreq.tier3.fit","Best for creative direction, advanced 3D ideation, labs, enterprise demos, and high-concurrency sessions.")}]}get WORKLOAD_ARCHETYPES(){return[{icon:"📚",title:e("about.sysreq.arch1.title","Legal, Admin, HR, and Back-Office Operations"),audience:e("about.sysreq.arch1.audience","Contracts, policy review, spreadsheets, task extraction, outputs, and memory-backed casework."),activities:e("about.sysreq.arch1.activities","TaskChat, Categorizer, Processor, Validator, Outputs, Spreadsheet editing, Memory Lab, and overnight queue runs."),minimum:{gpu:"8 GB NVIDIA RTX-class GPU",ram:"16 GB RAM",storage:"15 GB free SSD space",os:"64-bit Windows 10 build 17763+ or Windows 11",fit:e("about.sysreq.arch1.min.fit","Text-first document work, quiet voice use, slower batch throughput."),notes:e("about.sysreq.arch1.min.notes","Use the text-focused or low-visual path. The 3D shell is optional for this workload.")},recommended:{gpu:"12 GB+ NVIDIA RTX GPU",ram:"32 GB RAM",storage:"25 GB+ free NVMe space",os:"Windows 11 on x64",fit:e("about.sysreq.arch1.rec.fit","Comfortable multimodal document handling with Orpheus TTS and better queue depth."),notes:e("about.sysreq.arch1.rec.notes","This is the best all-round professional floor if you want voice, live vision, and document tools together.")}},{icon:"📈",title:e("about.sysreq.arch2.title","Business, Finance, Marketing, and Social Media"),audience:e("about.sysreq.arch2.audience","Research synthesis, meeting prep, campaign drafts, CRM-style memory recall, and multi-window guidance."),activities:e("about.sysreq.arch2.activities","Webber, Presenter, BrainStorm, Discord, Outputs, Voice Profiles, and live multimodal chat."),minimum:{gpu:"12 GB NVIDIA RTX GPU",ram:"16 GB RAM",storage:"15 GB free SSD space",os:"64-bit Windows 10/11",fit:e("about.sysreq.arch2.min.fit","Capable of multimodal work, but with tighter concurrency and shorter comfortable sessions."),notes:e("about.sysreq.arch2.min.notes","Suitable if you want Orpheus voice and live vision, but not the heaviest 3D or advanced visual stacks.")},recommended:{gpu:"16 GB to 24 GB NVIDIA RTX GPU",ram:"32 GB RAM",storage:"25 GB+ free NVMe space",os:"Windows 11 on x64",fit:e("about.sysreq.arch2.rec.fit","Smooth daily use across voice, research, planning, and client-facing flows."),notes:e("about.sysreq.arch2.rec.notes","A higher-VRAM card gives more room for simultaneous speech, vision, and retrieval without comfort drops.")}},{icon:"🔬",title:e("about.sysreq.arch3.title","Science, Audit, Research, and High-Context Knowledge Work"),audience:e("about.sysreq.arch3.audience","Long-form reading, evidence review, reasoning, synthesis, and structured retrieval against large source sets."),activities:e("about.sysreq.arch3.activities","High-context engine profiles, Defrag, Memory Lab, Webber, Presenter, and reasoning-heavy sessions."),minimum:{gpu:"12 GB NVIDIA RTX GPU",ram:"32 GB RAM",storage:"25 GB free SSD space",os:"64-bit Windows 10/11",fit:e("about.sysreq.arch3.min.fit","Usable for careful high-context work with conservative concurrency."),notes:e("about.sysreq.arch3.min.notes","Expect tighter token budgets when voice and long-document reasoning are active together.")},recommended:{gpu:"24 GB+ NVIDIA RTX GPU",ram:"64 GB RAM",storage:"50 GB+ free NVMe space",os:"Windows 11 on x64",fit:e("about.sysreq.arch3.rec.fit","Best for sustained high-context reasoning, deeper queues, and fewer context-trim compromises."),notes:e("about.sysreq.arch3.rec.notes","Prime-class hardware is where long-context work starts to feel comfortably professional instead of merely possible.")}},{icon:"🎨",title:e("about.sysreq.arch4.title","Creative Direction, Visual Design, and 3D Ideation"),audience:e("about.sysreq.arch4.audience","Visual command workflows, OBB, Living Machine, scene experimentation, and design-oriented narration."),activities:e("about.sysreq.arch4.activities","Visual command workflows, Boltzmann Brain, Living Machine, Webcam, Face Capture, visual themes, and scene-driven presentation."),minimum:{gpu:"12 GB NVIDIA RTX GPU",ram:"32 GB RAM",storage:"25 GB free SSD space",os:"64-bit Windows 10/11",fit:e("about.sysreq.arch4.min.fit","Basic visual workflows and scene experimentation without the heaviest generation modules."),notes:e("about.sysreq.arch4.min.notes","Good for visual assistance and lighter 3D use. It is not the right floor for SF3D or video-heavy iteration.")},recommended:{gpu:"24 GB+ NVIDIA RTX GPU",ram:"64 GB RAM",storage:"50 GB+ free NVMe space",os:"Windows 11 on x64",fit:e("about.sysreq.arch4.rec.fit","Comfortable visual command work, richer 3D scenes, and headroom for advanced visual modules."),notes:e("about.sysreq.arch4.rec.notes","Use Prime-class hardware if Orus is part of a real creative pipeline rather than occasional visual support.")}},{icon:"🎤",title:e("about.sysreq.arch5.title","Meetings, Teaching, Support, and Community Operations"),audience:e("about.sysreq.arch5.audience","Presenter sessions, meeting transcription, Teams or Discord support, multi-speaker capture, and guided walkthroughs."),activities:e("about.sysreq.arch5.activities","Meeting Mode, Presenter, Voice Profiles, per-app audio capture, Discord, and system dialogue."),minimum:{gpu:"12 GB NVIDIA RTX GPU",ram:"16 GB RAM",storage:"15 GB free SSD space",os:"64-bit Windows 10/11",fit:e("about.sysreq.arch5.min.fit","Functional voice-centric workflows with moderate simultaneous capture and response pressure."),notes:e("about.sysreq.arch5.min.notes","This tier is viable, but real-time comfort improves materially as VRAM and RAM rise.")},recommended:{gpu:"16 GB to 24 GB NVIDIA RTX GPU",ram:"32 GB RAM",storage:"25 GB+ free NVMe space",os:"Windows 11 on x64",fit:e("about.sysreq.arch5.rec.fit","Better for long meeting runs, cleaner voice overlap handling, and more resilient STT plus TTS coexistence."),notes:e("about.sysreq.arch5.rec.notes","Orpheus throughput is benchmarked at session start, so stronger GPUs usually translate directly into smoother live voice UX.")}},{icon:"🌙",title:e("about.sysreq.arch6.title","Solo Professionals and Overnight Batch Processing"),audience:e("about.sysreq.arch6.audience","Users who prefer slower unattended work over real-time presentation and can leave the machine running for queues."),activities:e("about.sysreq.arch6.activities","Categorizer, Processor, Validator, Output export, memory cleanup, and long unattended text-first runs."),minimum:{gpu:"8 GB NVIDIA RTX-class GPU",ram:"16 GB RAM",storage:"15 GB free SSD space",os:"64-bit Windows 10/11",fit:e("about.sysreq.arch6.min.fit","The minimum local benchmark for patient, text-focused processing."),notes:e("about.sysreq.arch6.min.notes","This is the right bracket if you do not need the 3D shell and can tolerate slower TTS or lower concurrency.")},recommended:{gpu:"12 GB+ NVIDIA RTX GPU",ram:"32 GB RAM",storage:"25 GB+ free NVMe space",os:"Windows 11 on x64",fit:e("about.sysreq.arch6.rec.fit","Much better queue throughput and fewer stalls once memory retrieval, voice, and exports overlap."),notes:e("about.sysreq.arch6.rec.notes","If Orus is running while you sleep or process long backlogs, extra VRAM buys predictability more than flashiness.")}},{icon:"🧪",title:e("about.sysreq.arch7.title","Full Orus Lab, Demo, and Studio Configuration"),audience:e("about.sysreq.arch7.audience","Users who want the widest feature envelope: multimodal, Orpheus, live vision, advanced visual workflows, and SF3D."),activities:e("about.sysreq.arch7.activities","Prime-tier end-to-end Orus with heavy voice, visuals, generation, and concurrent sessions."),minimum:{gpu:"23 GB+ NVIDIA RTX GPU",ram:"32 GB RAM",storage:"25 GB free SSD space",os:"Windows 11 on x64 preferred",fit:e("about.sysreq.arch7.min.fit","The practical floor for calling Orus a full-stack local studio rather than a trimmed workstation."),notes:e("about.sysreq.arch7.min.notes","This is where the heaviest visual and generation modules stop feeling compromised.")},recommended:{gpu:"24 GB to 32 GB+ NVIDIA RTX GPU",ram:"64 GB RAM",storage:"50 GB+ free NVMe space",os:"Windows 11 on x64",fit:e("about.sysreq.arch7.rec.fit","Best for enterprise demos, creative labs, and all-feature usage with minimal negotiation between subsystems."),notes:e("about.sysreq.arch7.rec.notes","RTX 4090 and RTX 5090 class machines are the right target when Orus is being used as a primary workstation layer.")}}]}_renderRequirementSpecCard(t,i,s=!1){return c`
      <div class="requirements-spec-card ${s?"recommended":""}">
        <div class="requirements-spec-label">${t}</div>
        <ul>
          <li><strong>${e("about.sysreq.spec.gpu","GPU")}:</strong> ${i.gpu}</li>
          <li><strong>${e("about.sysreq.spec.ram","RAM")}:</strong> ${i.ram}</li>
          <li><strong>${e("about.sysreq.spec.storage","Storage")}:</strong> ${i.storage}</li>
          <li><strong>${e("about.sysreq.spec.os","OS")}:</strong> ${i.os}</li>
          <li><strong>${e("about.sysreq.spec.best_for","Best For")}:</strong> ${i.fit}</li>
        </ul>
        <p class="requirements-spec-note">${i.notes}</p>
      </div>
    `}_renderSystemRequirementsSection(){return c`
      <div class="requirements-shell">
        <p class="requirements-intro">
          ${e("about.sysreq.intro","Orus has two practical requirement layers: the platform minimum that can run the current Windows-native architecture, and the professional baseline where multimodal work, Orpheus TTS, and retrieval-heavy sessions start to feel smooth instead of merely possible.")}
        </p>

        <div class="requirements-callout">
          <p>
            ${e("about.sysreq.callout","The 3D shell is optional. If your work is primarily legal, admin, science, HR, business, or overnight processing, you can keep Orus in a lower-visual operating style and dedicate more headroom to reasoning, document throughput, and queue depth.")}
          </p>
        </div>

        <div class="requirements-tier-grid">
          ${this.BENCHMARK_TIERS.map(t=>c`
            <div class="requirements-tier-card">
              <div class="requirements-tier-label">${t.label}</div>
              <div class="requirements-tier-vram">${t.tier}</div>
              <p>${t.summary}</p>
              <div class="requirements-tier-fit">${t.fit}</div>
            </div>
          `)}
        </div>

        <div class="requirements-meta">
          <div class="requirements-meta-row"><strong>${e("about.sysreq.meta.platform_floor_label","Platform floor")}:</strong> ${e("about.sysreq.meta.platform_floor","x64 Windows 10 build 17763+ or Windows 11, DirectX 12, 8 GB VRAM, 16 GB RAM, and 15 GB free disk space. The installer currently warns when free space falls below 15 GB and is more comfortable at 25 GB+.")}</div>
          <div class="requirements-meta-row"><strong>${e("about.sysreq.meta.ai_stack_label","Windows-native AI stack")}:</strong> ${e("about.sysreq.meta.ai_stack","Orus runs through vLLM on Windows with SageAttention on supported RTX hardware and SDPA fallback elsewhere. Orpheus TTS is GPU-profiled at session start so smaller cards remain usable, but voice smoothness scales directly with measured throughput.")}</div>
          <div class="requirements-meta-row"><strong>${e("about.sysreq.meta.cuda_label","CUDA toolkits")}:</strong> ${e("about.sysreq.meta.cuda","Supported toolkit range is")} ${dt}. ${e("about.sysreq.meta.cuda_suffix","Orus auto-detects installed CUDA toolkits and registers DLL directories at startup; packaged builds also ship their own CUDA-aligned runtime dependencies.")}</div>
        </div>

        <div class="requirements-archetypes">
          ${this.WORKLOAD_ARCHETYPES.map(t=>c`
            <details class="requirements-details">
              <summary>
                <div class="requirements-summary-copy">
                  <div class="requirements-summary-title">${t.icon} ${t.title}</div>
                  <div class="requirements-summary-subtitle">${t.audience}</div>
                </div>
                <span class="requirements-summary-chevron">›</span>
              </summary>
              <div class="requirements-body">
                <p class="requirements-activities"><strong>${e("about.sysreq.typical_activities","Typical Orus activities")}:</strong> ${t.activities}</p>
                <div class="requirements-spec-grid">
                  ${this._renderRequirementSpecCard(e("about.sysreq.minimum","Minimum"),t.minimum)}
                  ${this._renderRequirementSpecCard(e("about.sysreq.recommended","Recommended"),t.recommended,!0)}
                </div>
              </div>
            </details>
          `)}
        </div>
      </div>
    `}get TAB_ITEMS(){return[{id:"about",icon:"📇",label:e("about_dialog.tab.about","About")},{id:"privacy",icon:"🔒",label:e("about_dialog.tab.privacy","Privacy Policy")},{id:"eula",icon:"📜",label:e("about_dialog.tab.eula","EULA")},{id:"third-party",icon:"📦",label:e("about_dialog.tab.third_party","Third Party Notice")},{id:"safety",icon:"🛡️",label:e("about_dialog.tab.safety","Safety")},{id:"disclaimers",icon:"⚠️",label:e("about_dialog.tab.disclaimers","Disclaimers")}]}render(){if(!this.open&&!this.fullPage)return c``;const t=c`
      <div
        class="about-panel ${this.fullPage?"full-page":""} ${this.isDragging?"dragging":""} ${this.isResizing?"resizing":""}"
        style="${this.fullPage?"":`left: ${(this.position||this._defaultPosition()).x}px; top: ${(this.position||this._defaultPosition()).y}px; width: ${this._effectiveSize().width}px; height: ${this._effectiveSize().height}px;`}"
      >
        <!-- Left sidebar -->
        <div class="about-sidebar">
          <div class="about-sidebar-header" @mousedown=${this.fullPage?void 0:this._onDragStart}>
            <div class="about-logo">◉</div>
            <span class="about-logo-text">Orus</span>
          </div>
          <div class="about-nav">
            ${this.TAB_ITEMS.map(i=>c`
              <button
                class="about-nav-btn ${this.activeTab===i.id?"active":""}"
                @click=${()=>{this.activeTab=i.id}}
              >
                <span class="about-nav-icon">${i.icon}</span>
                <span class="about-nav-label">${i.label}</span>
              </button>
            `)}
          </div>
          ${this.hideHomeBtn?"":c`<button
            class="about-home-btn"
            @click=${()=>this.dispatchEvent(new CustomEvent("navigate-home",{bubbles:!0,composed:!0}))}
            title="${e("about_dialog.back_home","Back to Home")}"
          >
            <span style="font-size:14px;">🏠</span>
            ${e("about_dialog.home","Home")}
          </button>`}
        </div>

        <!-- Main content area -->
        <div class="about-main">
          <div class="about-header" @mousedown=${this.fullPage?void 0:this._onDragStart}>
            <span class="about-header-title">${this.TAB_ITEMS.find(i=>i.id===this.activeTab)?.label??e("about_dialog.tab.about","About")}</span>
            ${this.hideHomeBtn?"":c`<button
              class="about-home-btn-header"
              @click=${()=>this.dispatchEvent(new CustomEvent("navigate-home",{bubbles:!0,composed:!0}))}
              title="${e("about_dialog.back_home","Back to Home")}"
            >
              <span style="font-size:14px;">🏠</span>
              ${e("about_dialog.home","Home")}
            </button>`}
            ${this.fullPage?"":c`
              <button class="about-close-btn" @click=${()=>this.dispatchEvent(new CustomEvent("close"))} title="Close">✕</button>
            `}
          </div>
          <div class="about-content ${this.fullPage?"":"scroll-mode"}"
               @touchstart=${this._onTouchStart}
               @touchend=${this._onTouchEnd}
               @touchcancel=${this._onTouchCancel}>
            ${this.activeTab==="about"&&this.fullPage?this._renderAboutCarousel():""}
            ${this.activeTab==="about"&&!this.fullPage?this._renderAbout():""}
            ${this.activeTab==="privacy"&&this.fullPage?c`
              <div class="about-privacy-desktop scroll-mode">${this._renderPrivacy()}</div>
              <div class="about-privacy-mobile">${this._renderPrivacyCarousel()}</div>
            `:""}
            ${this.activeTab==="privacy"&&!this.fullPage?this._renderPrivacy():""}
            ${this.activeTab==="eula"&&this.fullPage?c`
              <div class="about-eula-desktop scroll-mode">${this._renderEULA()}</div>
              <div class="about-eula-mobile">${this._renderEULACarousel()}</div>
            `:""}
            ${this.activeTab==="eula"&&!this.fullPage?this._renderEULA():""}
            ${this.activeTab==="third-party"&&this.fullPage?this._renderThirdPartyCarousel():""}
            ${this.activeTab==="third-party"&&!this.fullPage?this._renderThirdParty():""}
            ${this.activeTab==="safety"&&this.fullPage?this._renderSafetyCarousel():""}
            ${this.activeTab==="safety"&&!this.fullPage?this._renderSafety():""}
            ${this.activeTab==="disclaimers"&&this.fullPage?this._renderDisclaimersCarousel():""}
            ${this.activeTab==="disclaimers"&&!this.fullPage?this._renderDisclaimers():""}
          </div>
        </div>

        ${this.fullPage?"":c`<div class="resize-handle" @mousedown=${this._onResizeStart}></div>`}
      </div>
    `;return this.fullPage?t:c`
      <div class="about-overlay" @click=${i=>{i.target.classList.contains("about-overlay")&&this.dispatchEvent(new CustomEvent("close"))}}>
        ${t}
      </div>
    `}_renderAbout(){return c`
      <div class="about-hero">
        <div class="about-hero-logo">◉</div>
        <h1>Orus <span class="version-badge">${e("about.popup.version","v1.0.1 — March 2026")}</span></h1>
        <p>${e("about.popup.subtitle","Locally Hosted Personal Assistant & 3D Visualisation Engine")}</p>
      </div>

      <p>
        ${e("about.popup.intro","Orus AI System is a locally hosted personal assistant licensed per host device, providing browser-based access to connected client devices within the same local network, with memory-enabled operational assistance and local-first processing. Built on the Phi-4 Multimodal language model with GPU-accelerated vLLM inference, Orus delivers a seamless bridge between human intent and machine intelligence.")}
      </p>

      <!-- ─────────────────────────────────────────────────────────────────── -->
      <!-- Data Path Summary                                                  -->
      <!-- ─────────────────────────────────────────────────────────────────── -->
      <h3>${e("about.popup.data_path.heading","Data Path")}</h3>
      <div class="disclaimer-card">
        <p>
          <strong>${e("about.popup.data_path.host","Host device:")}</strong> ${e("about.popup.data_path.host_desc","Orus runs on a licensed host device.")}<br/>
          <strong>${e("about.popup.data_path.client","Client access:")}</strong> ${e("about.popup.data_path.client_desc","Devices on the same local network can connect via browser.")}<br/>
          <strong>${e("about.popup.data_path.file_staging","File staging:")}</strong> ${e("about.popup.data_path.file_staging_desc","Files may be staged locally before encrypted transmission.")}<br/>
          <strong>${e("about.popup.data_path.platform_telemetry","Platform telemetry:")}</strong> ${e("about.popup.data_path.platform_telemetry_desc","Microsoft Store and Windows platform services may collect their own telemetry under their own terms.")}<br/>
          <strong>${e("about.popup.data_path.orus_telemetry","Orus telemetry:")}</strong> ${e("about.popup.data_path.orus_telemetry_desc","Orus itself is designed to minimise Orus-originated telemetry.")}
        </p>
      </div>

      <!-- ─────────────────────────────────────────────────────────────────── -->
      <!-- Architecture Overview                                              -->
      <!-- ─────────────────────────────────────────────────────────────────── -->
      <h3>${e("about.popup.architecture.heading","Architecture Overview")}</h3>
      <div class="about-arch-grid">
        <div class="about-arch-card">
          <div class="about-arch-card-title">${e("about.popup.architecture.ai_engine.title","🧠 AI Engine")}</div>
          <div class="about-arch-card-value">${e("about.popup.architecture.ai_engine.desc","Designed by Comet Game Studio Ltd and powered by Microsoft's Phi-4 Multimodal (14B) via vLLM with Paged Attention, Phi's LoRA adapters for vision/audio, constrained generation, and semantic intent calculations.")}</div>
        </div>
        <div class="about-arch-card">
          <div class="about-arch-card-title">${e("about.popup.architecture.renderer.title","🎨 3D Renderer")}</div>
          <div class="about-arch-card-value">${e("about.popup.architecture.renderer.desc","Three.js with procedural shaders, Living Machine effects, bloom/vignette post-processing, WebGPU support, and audio-reactive geometry")}</div>
        </div>
        <div class="about-arch-card">
          <div class="about-arch-card-title">${e("about.popup.architecture.voice.title","🎤 Voice Pipeline")}</div>
          <div class="about-arch-card-value">${e("about.popup.architecture.voice.desc","Whisper Speech-To-Text & Orpheus Text-To-Speech + Soprano ONNX with multi-speaker diarization and voice profiles")}</div>
        </div>
        <div class="about-arch-card">
          <div class="about-arch-card-title">${e("about.popup.architecture.connectivity.title","📡 Connectivity")}</div>
          <div class="about-arch-card-value">${e("about.popup.architecture.connectivity.desc","Real-time WebSocket streaming, browser-based client access on local network, GPU memory budgeting, and VRAM management")}</div>
        </div>
        <div class="about-arch-card">
          <div class="about-arch-card-title">${e("about.popup.architecture.memory.title","🧬 Memory System")}</div>
          <div class="about-arch-card-value">${e("about.popup.architecture.memory.desc","Long-term memory with intelligent retrieval, automatic organisation, Memory Lab UI, and contextual query routing")}</div>
        </div>
        <div class="about-arch-card">
          <div class="about-arch-card-title">${e("about.popup.architecture.distribution.title","📦 Distribution")}</div>
          <div class="about-arch-card-value">${e("about.popup.architecture.distribution.desc","Available on the Microsoft Store with per-host-device licensing and seamless updates")}</div>
        </div>
      </div>

      <!-- Early Access Notice -->
      <div style="background: linear-gradient(135deg, #422006 0%, #713f12 100%); border: 1px solid #f59e0b; border-radius: 12px; padding: 16px 20px; margin: 16px 0;">
        <div style="font-size: 13px; font-weight: 600; color: #fbbf24; margin-bottom: 6px;">${e("about.popup.early_access.title","⚡ Early Access Notice")}</div>
        <div style="font-size: 12px; color: #fde68a; line-height: 1.6;">
          ${e("about.popup.early_access.desc","Orus is still stabilising. You can currently enjoy all features available in Orus without the planned tiered subscription system. Subscription tiers listed in the EULA reflect the intended commercial structure and will be enforced in a future release.")}
        </div>
      </div>

      <!-- ─────────────────────────────────────────────────────────────────── -->
      <!-- Core AI & Voice                                                     -->
      <!-- ─────────────────────────────────────────────────────────────────── -->
      <h3>${e("about.popup.core_ai.heading","Core AI & Voice")}</h3>
      <ul>
        <li><strong>${e("about.popup.core_ai.voice_conv.title","Real-time voice conversation")}</strong> — ${e("about.popup.core_ai.voice_conv.desc","Multi-speaker diarization, per-app audio capture, voice profiles with multi-language support")}</li>
        <li><strong>${e("about.popup.core_ai.orpheus_tts.title","Orpheus & Soprano TTS")}</strong> — ${e("about.popup.core_ai.orpheus_tts.desc","Dual TTS engines: Orpheus (LLM-based, English, emotion tags + SNAC neural codec) and Soprano (ONNX)")}</li>
        <li><strong>${e("about.popup.core_ai.tts_orch.title","TTS Orchestrator")}</strong> — ${e("about.popup.core_ai.tts_orch.desc","Priority-based audio harmonization preventing voice overlap across responses, backchannels, and system announcements")}</li>
        <li><strong>${e("about.popup.core_ai.meeting.title","Meeting Mode")}</strong> — ${e("about.popup.core_ai.meeting.desc","Discord/Teams/WhatsApp call transcription via WASAPI loopback capture with per-app audio and multi-speaker detection")}</li>
        <li><strong>${e("about.popup.core_ai.interruption.title","Interruption Handler")}</strong> — ${e("about.popup.core_ai.interruption.desc","Detects user speech during playback, stops audio, and plays cached reaction clips for natural conversation flow")}</li>
        <li><strong>${e("about.popup.core_ai.semantic.title","Semantic Intent System")}</strong> — ${e("about.popup.core_ai.semantic.desc","Menu/Feature routing mapping natural language to ring menu actions and popup windows")}</li>
        <li><strong>${e("about.popup.core_ai.text_chat.title","Text Chat")}</strong> — ${e("about.popup.core_ai.text_chat.desc","Keyboard-based text chat popup for non-voice interaction")}</li>
      </ul>

      <!-- ─────────────────────────────────────────────────────────────────── -->
      <!-- 3D Visualization & Creative                                         -->
      <!-- ─────────────────────────────────────────────────────────────────── -->
      <h3>${e("about.popup.viz.heading","3D Visualization & Creative")}</h3>
      <ul>
        <li><strong>${e("about.popup.viz.procedural.title","Procedural 3D visualization")}</strong> — ${e("about.popup.viz.procedural.desc","Audio-reactive Living Machine effects and procedural shader generation")}</li>
        <li><strong>${e("about.popup.viz.living_menu.title","Living Menu")}</strong> — ${e("about.popup.viz.living_menu.desc","Interactive 3D radial menu with scene-adapted colors, page navigation, debounced rebuild guards, hitbox isolation, and transition animations")}</li>
        <li><strong>${e("about.popup.viz.boltzmann.title","Boltzmann Brain (OBB)")}</strong> — ${e("about.popup.viz.boltzmann.desc","Procedural 3D object creation; user describes objects, Orus generates orbiting geometry with Second Brain conversational AI")}</li>
        <li><strong>${e("about.popup.viz.visual_cmd.title","Visual command workflows")}</strong> — ${e("about.popup.viz.visual_cmd.desc","LLM-guided visual commands from screenshots with auto-exposure protection and camera control")}</li>
        <li><strong>${e("about.popup.viz.face_capture.title","Face capture")}</strong> — ${e("about.popup.viz.face_capture.desc","MediaPipe-driven mesh deformation with real-time 3D visualization (Apache 2.0)")}</li>
        <li><strong>${e("about.popup.viz.sf3d.title","3D asset creation")}</strong> — ${e("about.popup.viz.sf3d.desc","Stability AI SF3D single-image to 3D mesh generation")}</li>
        <li><strong>${e("about.popup.viz.screen_lock.title","Screen Lock")}</strong> — ${e("about.popup.viz.screen_lock.desc","Configurable lock overlay with camera targets, animation targets, and custom lock configuration")}</li>
      </ul>

      <!-- ─────────────────────────────────────────────────────────────────── -->
      <!-- Document Intelligence & Knowledge                                   -->
      <!-- ─────────────────────────────────────────────────────────────────── -->
      <h3>${e("about.popup.docint.heading","Document Intelligence & Knowledge")}</h3>
      <ul>
        <li><strong>${e("about.popup.docint.ingestion.title","Document ingestion")}</strong> — ${e("about.popup.docint.ingestion.desc","PDF, DOCX, Excel, and image processing with AI-assisted analysis and OCR")}</li>
        <li><strong>${e("about.popup.docint.categorizer.title","Categorizer")}</strong> — ${e("about.popup.docint.categorizer.desc","AI-powered file categorization wizard with templates, constrained output, and batch processing panel")}</li>
        <li><strong>${e("about.popup.docint.processor.title","Processor Panel")}</strong> — ${e("about.popup.docint.processor.desc","Batch document processing pipeline with constrained output modes (JSON, categorizer)")}</li>
        <li><strong>${e("about.popup.docint.validator.title","Validator")}</strong> — ${e("about.popup.docint.validator.desc","Stage 3 pipeline validating processor outputs (failed chunks, valid JSON, confidence threshold, required fields)")}</li>
        <li><strong>${e("about.popup.docint.defrag.title","Defrag 3D")}</strong> — ${e("about.popup.docint.defrag.desc","3D spatial text review with AI chunk summarization, persistent sessions, and interactive 3D visualizer")}</li>
        <li><strong>${e("about.popup.docint.webber.title","Webber (Web Research Agent)")}</strong> — ${e("about.popup.docint.webber.desc","Google-powered web research with search, fetch, compile, and AI-processed summaries")}</li>
        <li><strong>${e("about.popup.docint.discord.title","Discord Integration")}</strong> — ${e("about.popup.docint.discord.desc","OCR-based Discord chat extraction via Windows Bridge, file watcher, and full popup UI")}</li>
      </ul>

      <!-- ─────────────────────────────────────────────────────────────────── -->
      <!-- AI Tools & Reasoning                                                -->
      <!-- ─────────────────────────────────────────────────────────────────── -->
      <h3>${e("about.popup.tools.heading","AI Tools & Reasoning")}</h3>
      <ul>
        <li><strong>${e("about.popup.tools.brainstorm.title","BrainStorm")}</strong> — ${e("about.popup.tools.brainstorm.desc","Cognitive brainstorming with multiple reasoning frameworks and streaming sessions")}</li>
        <li><strong>${e("about.popup.tools.canvas.title","Canvas (AI Code Editor)")}</strong> — ${e("about.popup.tools.canvas.desc","Iterative Self-Loop code editor with AI-assisted generation, validation, and intelligent diff preview for safe code replacement")}</li>
        <li><strong>${e("about.popup.tools.presenter.title","Presenter (Adaptive Learning)")}</strong> — ${e("about.popup.tools.presenter.desc","Learning presentation module with AI-generated agendas, voice interruption handling, and revision support for dynamic teaching")}</li>
        <li><strong>${e("about.popup.tools.sys_dialogue.title","System Dialogue")}</strong> — ${e("about.popup.tools.sys_dialogue.desc","Health diagnostics and system information retrieval with natural language interaction")}</li>
        <li><strong>${e("about.popup.tools.prompt_creator.title","Prompt Creator")}</strong> — ${e("about.popup.tools.prompt_creator.desc","Interactive prompt engineering tool with iterative refinement and testing")}</li>
        <li><strong>${e("about.popup.tools.ui_interpreter.title","UI Interpreter")}</strong> — ${e("about.popup.tools.ui_interpreter.desc","Advanced screen/UI element analysis with visual reasoning and GUI assistance")}</li>
        <li><strong>${e("about.popup.tools.bulk_intel.title","Bulk Intelligence")}</strong> — ${e("about.popup.tools.bulk_intel.desc","Batch question automation with CSV audit export, evaluation criteria, and result ranking")}</li>
        <li><strong>${e("about.popup.tools.activity.title","Activity Transition System")}</strong> — ${e("about.popup.tools.activity.desc","Voice-driven popup/panel switching across 30+ transitional activities (brainstorm, taskchat, memory-lab, presenter, canvas, minigames, training-lab, defrag, and more) with intelligent context awareness")}</li>
        <li><strong>${e("about.popup.tools.minigames.title","Minigames")}</strong> — ${e("about.popup.tools.minigames.desc","30 pen-and-paper games (TTT, Hangman, NIM, riddle games, trivia, word games, logic puzzles) with voice ordinal navigation and streaming responses")}</li>
      </ul>

      <!-- ─────────────────────────────────────────────────────────────────── -->
      <!-- Session & Productivity                                              -->
      <!-- ─────────────────────────────────────────────────────────────────── -->
      <h3>${e("about.popup.session.heading","Session & Productivity")}</h3>
      <ul>
        <li><strong>${e("about.popup.session.multi_session.title","Multi-session management")}</strong> — ${e("about.popup.session.multi_session.desc","Persistent memory across conversations with session state save/restore")}</li>
        <li><strong>${e("about.popup.session.memory_lab.title","Memory Lab")}</strong> — ${e("about.popup.session.memory_lab.desc","Memory management UI for viewing, editing, and configuring the persistent RAG system")}</li>
        <li><strong>${e("about.popup.session.taskchat.title","TaskChat")}</strong> — ${e("about.popup.session.taskchat.desc","Voice-driven Q&A session wizard with transcript save/load and TTS-cached template questions")}</li>
        <li><strong>${e("about.popup.session.task_manager.title","Task Manager")}</strong> — ${e("about.popup.session.task_manager.desc","Calendar-based task scheduling with AI-powered task extraction, ordering, and completion checking")}</li>
        <li><strong>${e("about.popup.session.editor_recorder.title","Editor Recorder")}</strong> — ${e("about.popup.session.editor_recorder.desc","Session-based state recorder with undo/redo, timeline navigation, state reconstruction, and export")}</li>
        <li><strong>${e("about.popup.session.conv_player.title","Conversation Player")}</strong> — ${e("about.popup.session.conv_player.desc","Video player-like UI for replaying dialogue flow with variable speed (1x–8x), TTS export, and intent analysis")}</li>
        <li><strong>${e("about.popup.session.music.title","Music Manager")}</strong> — ${e("about.popup.session.music.desc","Music library upload, playlists, mode-based playback, and integrated streaming player")}</li>
        <li><strong>${e("about.popup.session.onboarding.title","Onboarding Wizard")}</strong> — ${e("about.popup.session.onboarding.desc","First-run setup with pre-cached TTS phrases (English & Turkish)")}</li>
        <li><strong>${e("about.popup.session.storage.title","Storage Manager")}</strong> — ${e("about.popup.session.storage.desc","File storage browser with session-based file management and settings")}</li>
      </ul>

      <!-- ─────────────────────────────────────────────────────────────────── -->
      <!-- Platform & Infrastructure                                           -->
      <!-- ─────────────────────────────────────────────────────────────────── -->
      <h3>${e("about.popup.platform.heading","Platform & Infrastructure")}</h3>
      <ul>
        <li><strong>${e("about.popup.platform.game_engine.title","Game Engine")}</strong> — ${e("about.popup.platform.game_engine.desc","Interactive 3D world building with Shell Director, popup window management, and auth state forwarding")}</li>
        <li><strong>${e("about.popup.platform.live_vision.title","Live Vision")}</strong> — ${e("about.popup.platform.live_vision.desc","Real-time screen capture and AI analysis with constrained visual command generation, cognitive overlays, and WebSocket streaming")}</li>
        <li><strong>${e("about.popup.platform.webcam.title","Webcam streaming")}</strong> — ${e("about.popup.platform.webcam.desc","Real-time AI vision with visual input modes")}</li>
        <li><strong>${e("about.popup.platform.remote_pixel.title","Remote Pixel pipeline")}</strong> — ${e("about.popup.platform.remote_pixel.desc","Server-side rendering via Playwright headless browser")}</li>
        <li><strong>${e("about.popup.platform.vram.title","VRAM Manager")}</strong> — ${e("about.popup.platform.vram.desc","Centralized GPU memory dashboard with model load/unload controls and compute utilization metrics")}</li>
        <li><strong>${e("about.popup.platform.launcher.title","GUI Launcher")}</strong> — ${e("about.popup.platform.launcher.desc","Pre-launch mode selector for server configuration, preload modules, and dependency checks")}</li>
        <li><strong>${e("about.popup.platform.mouse_bridge.title","Mouse Input Bridge")}</strong> — ${e("about.popup.platform.mouse_bridge.desc","Windows mouse/keyboard event capture and forwarding to the AI system (configurable via JSON)")}</li>
        <li><strong>${e("about.popup.platform.notifications.title","Notification inbox")}</strong> — ${e("about.popup.platform.notifications.desc","TTS commentary with text cleansing, first-launch welcome, boot-aware scheduling, and toggleable voice narration")}</li>
      </ul>

      <!-- ─────────────────────────────────────────────────────────────────── -->
      <!-- Add-On Packs (Consumable)                                           -->
      <!-- ─────────────────────────────────────────────────────────────────── -->
      <h3>${e("about.popup.addons.heading","Add-On Packs")}</h3>
      <p style="font-size: 12px; color: #94a3b8; margin-bottom: 10px;">
        ${e("about.popup.addons.subtitle","Purchasable individually from the Microsoft Store as consumable add-ons. These unlock specific features without requiring a full subscription tier.")}
      </p>
      <div class="about-arch-grid">
        <div class="about-arch-card">
          <div class="about-arch-card-title">${e("about.popup.addons.visual_workflow.title","👁️ Visual Workflow Credit Pack")}</div>
          <div class="about-arch-card-value">${e("about.popup.addons.visual_workflow.desc","Unlock visual workflow credits for screenshot-guided command generation with auto-exposure protection and Living Machine state saving. Credits are consumed per save action.")}</div>
          <div style="font-size: 10px; color: #a78bfa; margin-top: 4px;">${e("about.popup.addons.visual_workflow.badge","Consumable · Managed via the Microsoft Store")}</div>
        </div>
      </div>

      <h3>${e("about.popup.subscriptions.heading","Subscriptions")}</h3>
      <p style="font-size: 12px; color: #94a3b8;">
        ${e("about.popup.subscriptions.desc","3-Day Pass (72 hrs) · Monthly (30 days) · All licences are per-host-device. Add-On Packs are available via the Microsoft Store and tied to your Microsoft account. See the EULA tab for full terms.")}
      </p>

      <h3>${e("about.popup.sysreq.heading","System Requirements")}</h3>
      ${this._renderSystemRequirementsSection()}

      <p style="color: #64748b; font-size: 11px; margin-top: 20px; text-align: center;">
        ${e("about.popup.footer","© 2026 Comet Game Studio Ltd. All rights reserved. Powered by the Microsoft Phi-4 model family. 40+ integrated features.")}
      </p>
    `}_renderAboutCarousel(){return c`
      <div class="about-content-carousel">
        <!-- Card 0: Hero -->
        <div class="about-card hero ${this._cardClass(0)} ${this.isCardDragging?"dragging":""}">
          <div class="about-hero-logo">◉</div>
          <h1>Orus</h1>
          <span class="version-badge">${e("about.carousel.hero.version","v1.0.1 — March 2026")}</span>
          <p>${e("about.carousel.hero.subtitle","Locally Hosted Personal Assistant & 3D Visualisation Engine")}</p>

          <!-- Key stats -->
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:18px 0 14px;text-align:center;">
            <div style="background:rgba(99,102,241,0.08);border:1px solid rgba(99,102,241,0.2);border-radius:8px;padding:14px 8px;">
              <div style="font-family:'Orbitron',sans-serif;font-size:28px;color:#a5b4fc;font-weight:700;">40+</div>
              <div style="font-size:12px;color:#64748b;margin-top:4px;">${e("about.carousel.hero.stat_features","Integrated Features")}</div>
            </div>
            <div style="background:rgba(99,102,241,0.08);border:1px solid rgba(99,102,241,0.2);border-radius:8px;padding:14px 8px;">
              <div style="font-family:'Orbitron',sans-serif;font-size:28px;color:#a5b4fc;font-weight:700;">14B</div>
              <div style="font-size:12px;color:#64748b;margin-top:4px;">${e("about.carousel.hero.stat_params","Phi-4 Parameters")}</div>
            </div>
            <div style="background:rgba(99,102,241,0.08);border:1px solid rgba(99,102,241,0.2);border-radius:8px;padding:14px 8px;">
              <div style="font-family:'Orbitron',sans-serif;font-size:28px;color:#a5b4fc;font-weight:700;">100%</div>
              <div style="font-size:12px;color:#64748b;margin-top:4px;">${e("about.carousel.hero.stat_privacy","Local-First Privacy")}</div>
            </div>
          </div>

          <!-- Capability list — tap any row to navigate to that section -->
          <div style="display:flex;flex-direction:column;gap:6px;margin:0 0 16px;">
            <button @click=${()=>this._goToCard(3)} class="about-chip-btn" style="display:flex;align-items:center;gap:10px;text-align:left;border-radius:8px;padding:10px 14px;font-size:13px;justify-content:space-between;" title="View Core AI & Voice">
              <span>${e("about.carousel.hero.chip_voice","🎤 Voice AI")}</span><span style="opacity:0.5;font-size:11px;">›</span>
            </button>
            <button @click=${()=>this._goToCard(4)} class="about-chip-btn" style="display:flex;align-items:center;gap:10px;text-align:left;border-radius:8px;padding:10px 14px;font-size:13px;justify-content:space-between;" title="${e("about.carousel.hero.chip_3d_title","View 3D Visualisation")}">
              <span>${e("about.carousel.hero.chip_3d","🎨 3D Visualisation")}</span><span style="opacity:0.5;font-size:11px;">›</span>
            </button>
            <button @click=${()=>this._goToCard(5)} class="about-chip-btn" style="display:flex;align-items:center;gap:10px;text-align:left;border-radius:8px;padding:10px 14px;font-size:13px;justify-content:space-between;" title="${e("about.carousel.hero.chip_doc_title","View Document Intelligence")}">
              <span>${e("about.carousel.hero.chip_doc","📄 Document AI")}</span><span style="opacity:0.5;font-size:11px;">›</span>
            </button>
            <button @click=${()=>this._goToCard(7)} class="about-chip-btn" style="display:flex;align-items:center;gap:10px;text-align:left;border-radius:8px;padding:10px 14px;font-size:13px;justify-content:space-between;" title="${e("about.carousel.hero.chip_memory_title","View Memory System")}">
              <span>${e("about.carousel.hero.chip_memory","🧠 Memory System")}</span><span style="opacity:0.5;font-size:11px;">›</span>
            </button>
            <button @click=${()=>this._goToCard(8)} class="about-chip-btn" style="display:flex;align-items:center;gap:10px;text-align:left;border-radius:8px;padding:10px 14px;font-size:13px;justify-content:space-between;" title="${e("about.carousel.hero.chip_gpu_title","View Platform & Infrastructure")}">
              <span>${e("about.carousel.hero.chip_gpu","⚡ GPU-Accelerated")}</span><span style="opacity:0.5;font-size:11px;">›</span>
            </button>
            <button @click=${()=>this._goToCard(9)} class="about-chip-btn" style="display:flex;align-items:center;gap:10px;text-align:left;border-radius:8px;padding:10px 14px;font-size:13px;justify-content:space-between;" title="${e("about.carousel.hero.chip_store_title","View Add-On Packs")}">
              <span>${e("about.carousel.hero.chip_store","🏪 Microsoft Store")}</span><span style="opacity:0.5;font-size:11px;">›</span>
            </button>
          </div>

          <p style="font-size:12px;color:#64748b;margin-top:4px;">
            ${e("about.carousel.hero.credit","By")} <strong style="color:#a5b4fc;">Comet Game Studio Ltd</strong> · ${e("about.carousel.hero.powered","Powered by Microsoft Phi-4 Multimodal")}
          </p>
        </div>

        <!-- Card 1: Intro & Data Path -->
        <div class="about-card ${this._cardClass(1)} ${this.isCardDragging?"dragging":""}">
          <h2>${e("about.carousel.data_path.title","🌐 Data Path")}</h2>
          <p>${e("about.carousel.data_path.intro","Orus AI System is a locally hosted personal assistant licensed per host device, providing browser-based access to connected client devices within the same local network, with memory-enabled operational assistance and local-first processing. Built on the Phi-4 Multimodal language model with GPU-accelerated vLLM inference, Orus delivers a seamless bridge between human intent and machine intelligence.")}</p>
          <div class="disclaimer-card">
            <p><strong>${e("about.carousel.data_path.host","Host device:")}</strong> ${e("about.carousel.data_path.host_desc","Orus runs on a licensed host device.")}<br/><strong>${e("about.carousel.data_path.client","Client access:")}</strong> ${e("about.carousel.data_path.client_desc","Devices on the same local network can connect via browser.")}<br/><strong>${e("about.carousel.data_path.staging","File staging:")}</strong> ${e("about.carousel.data_path.staging_desc","Files may be staged locally before encrypted transmission.")}<br/><strong>${e("about.carousel.data_path.platform_tel","Platform telemetry:")}</strong> ${e("about.carousel.data_path.platform_tel_desc","Microsoft Store and Windows platform services may collect their own telemetry under their own terms.")}<br/><strong>${e("about.carousel.data_path.orus_tel","Orus telemetry:")}</strong> ${e("about.carousel.data_path.orus_tel_desc","Orus itself is designed to minimise Orus-originated telemetry.")}</p>
          </div>
        </div>

        <!-- Card 2: Architecture Overview -->
        <div class="about-card ${this._cardClass(2)} ${this.isCardDragging?"dragging":""}">
          <h2>${e("about.carousel.arch.title","🏗️ Architecture Overview")}</h2>
          <h3>${e("about.carousel.arch.ai_engine","🧠 AI Engine")}</h3>
          <p>${e("about.carousel.arch.ai_engine_desc","Designed by Comet Game Studio Ltd and powered by Microsoft's Phi-4 Multimodal (14B) via vLLM with Paged Attention, Phi's LoRA adapters for vision/audio, constrained generation, and semantic intent calculations.")}</p>
          <h3>${e("about.carousel.arch.renderer","🎨 3D Renderer")}</h3>
          <p>${e("about.carousel.arch.renderer_desc","Three.js with procedural shaders, Living Machine effects, bloom/vignette post-processing, WebGPU support, and audio-reactive geometry")}</p>
          <h3>${e("about.carousel.arch.voice","🎤 Voice Pipeline")}</h3>
          <p>${e("about.carousel.arch.voice_desc","Whisper Speech-To-Text & Orpheus Text-To-Speech + Soprano ONNX with multi-speaker diarization and voice profiles")}</p>
          <h3>${e("about.carousel.arch.connectivity","📡 Connectivity")}</h3>
          <p>${e("about.carousel.arch.connectivity_desc","Real-time WebSocket streaming, browser-based client access on local network, GPU memory budgeting, and VRAM management")}</p>
          <h3>${e("about.carousel.arch.memory","🧬 Memory System")}</h3>
          <p>${e("about.carousel.arch.memory_desc","Long-term memory with intelligent retrieval, automatic organisation, Memory Lab UI, and contextual query routing")}</p>
          <h3>${e("about.carousel.arch.distribution","📦 Distribution")}</h3>
          <p>${e("about.carousel.arch.distribution_desc","Available on the Microsoft Store with per-host-device licensing and seamless updates")}</p>
        </div>

        <!-- Card 3: Core AI & Voice -->
        <div class="about-card ${this._cardClass(3)} ${this.isCardDragging?"dragging":""}">
          <h2>${e("about.carousel.core_ai.title","🎤 Core AI & Voice")}</h2>
          <ul>
            <li><strong>${e("about.carousel.core_ai.voice_title","Real-time voice conversation")}</strong> — ${e("about.carousel.core_ai.voice_desc","Multi-speaker diarization, per-app audio capture, voice profiles with multi-language support")}</li>
            <li><strong>${e("about.carousel.core_ai.tts_title","Orpheus & Soprano TTS")}</strong> — ${e("about.carousel.core_ai.tts_desc","Dual TTS engines: Orpheus (LLM-based, English, emotion tags + SNAC neural codec) and Soprano (ONNX)")}</li>
            <li><strong>${e("about.carousel.core_ai.orchestrator_title","TTS Orchestrator")}</strong> — ${e("about.carousel.core_ai.orchestrator_desc","Priority-based audio harmonization preventing voice overlap across responses, backchannels, and system announcements")}</li>
            <li><strong>${e("about.carousel.core_ai.meeting_title","Meeting Mode")}</strong> — ${e("about.carousel.core_ai.meeting_desc","Discord/Teams/WhatsApp call transcription via WASAPI loopback capture with per-app audio and multi-speaker detection")}</li>
            <li><strong>${e("about.carousel.core_ai.interruption_title","Interruption Handler")}</strong> — ${e("about.carousel.core_ai.interruption_desc","Detects user speech during playback, stops audio, and plays cached reaction clips for natural conversation flow")}</li>
            <li><strong>${e("about.carousel.core_ai.intent_title","Semantic Intent System")}</strong> — ${e("about.carousel.core_ai.intent_desc","Menu/Feature routing mapping natural language to ring menu actions and popup windows")}</li>
            <li><strong>${e("about.carousel.core_ai.chat_title","Text Chat")}</strong> — ${e("about.carousel.core_ai.chat_desc","Keyboard-based text chat popup for non-voice interaction")}</li>
          </ul>
        </div>

        <!-- Card 4: 3D Visualization & Creative -->
        <div class="about-card ${this._cardClass(4)} ${this.isCardDragging?"dragging":""}">
          <h2>${e("about.carousel.viz.title","🎨 3D Visualization & Creative")}</h2>
          <ul>
            <li><strong>${e("about.carousel.viz.procedural_title","Procedural 3D visualization")}</strong> — ${e("about.carousel.viz.procedural_desc","Audio-reactive Living Machine effects and procedural shader generation")}</li>
            <li><strong>${e("about.carousel.viz.menu_title","Living Menu")}</strong> — ${e("about.carousel.viz.menu_desc","Interactive 3D radial menu with scene-adapted colors, page navigation, debounced rebuild guards, hitbox isolation, and transition animations")}</li>
            <li><strong>${e("about.carousel.viz.obb_title","Boltzmann Brain (OBB)")}</strong> — ${e("about.carousel.viz.obb_desc","Procedural 3D object creation; user describes objects, Orus generates orbiting geometry with Second Brain conversational AI")}</li>
            <li><strong>${e("about.carousel.viz.visual_cmd_title","Visual command workflows")}</strong> — ${e("about.carousel.viz.visual_cmd_desc","LLM-guided visual commands from screenshots with auto-exposure protection and camera control")}</li>
            <li><strong>${e("about.carousel.viz.face_title","Face capture")}</strong> — ${e("about.carousel.viz.face_desc","MediaPipe-driven mesh deformation with real-time 3D visualization (Apache 2.0)")}</li>
            <li><strong>${e("about.carousel.viz.sf3d_title","3D asset creation")}</strong> — ${e("about.carousel.viz.sf3d_desc","Stability AI SF3D single-image to 3D mesh generation")}</li>
            <li><strong>${e("about.carousel.viz.lock_title","Screen Lock")}</strong> — ${e("about.carousel.viz.lock_desc","Configurable lock overlay with camera targets, animation targets, and custom lock configuration")}</li>
          </ul>
        </div>

        <!-- Card 5: Document Intelligence & Knowledge -->
        <div class="about-card ${this._cardClass(5)} ${this.isCardDragging?"dragging":""}">
          <h2>${e("about.carousel.doc.title","📄 Document Intelligence & Knowledge")}</h2>
          <ul>
            <li><strong>${e("about.carousel.doc.ingestion_title","Document ingestion")}</strong> — ${e("about.carousel.doc.ingestion_desc","PDF, DOCX, Excel, and image processing with AI-assisted analysis and OCR")}</li>
            <li><strong>${e("about.carousel.doc.categorizer_title","Categorizer")}</strong> — ${e("about.carousel.doc.categorizer_desc","AI-powered file categorization wizard with templates, constrained output, and batch processing panel")}</li>
            <li><strong>${e("about.carousel.doc.processor_title","Processor Panel")}</strong> — ${e("about.carousel.doc.processor_desc","Batch document processing pipeline with constrained output modes (JSON, categorizer)")}</li>
            <li><strong>${e("about.carousel.doc.validator_title","Validator")}</strong> — ${e("about.carousel.doc.validator_desc","Stage 3 pipeline validating processor outputs (failed chunks, valid JSON, confidence threshold, required fields)")}</li>
            <li><strong>${e("about.carousel.doc.defrag_title","Defrag 3D")}</strong> — ${e("about.carousel.doc.defrag_desc","3D spatial text review with AI chunk summarization, persistent sessions, and interactive 3D visualizer")}</li>
            <li><strong>${e("about.carousel.doc.webber_title","Webber (Web Research Agent)")}</strong> — ${e("about.carousel.doc.webber_desc","Google-powered web research with search, fetch, compile, and AI-processed summaries")}</li>
            <li><strong>${e("about.carousel.doc.discord_title","Discord Integration")}</strong> — ${e("about.carousel.doc.discord_desc","OCR-based Discord chat extraction via Windows Bridge, file watcher, and full popup UI")}</li>
          </ul>
        </div>

        <!-- Card 6: AI Tools & Reasoning -->
        <div class="about-card ${this._cardClass(6)} ${this.isCardDragging?"dragging":""}">
          <h2>${e("about.carousel.tools.title","⚙️ AI Tools & Reasoning")}</h2>
          <ul>
            <li><strong>${e("about.carousel.tools.brainstorm_title","BrainStorm")}</strong> — ${e("about.carousel.tools.brainstorm_desc","Cognitive brainstorming with multiple reasoning frameworks and streaming sessions")}</li>
            <li><strong>${e("about.carousel.tools.canvas_title","Canvas (AI Code Editor)")}</strong> — ${e("about.carousel.tools.canvas_desc","Iterative Self-Loop code editor with AI-assisted generation, validation, and intelligent diff preview for safe code replacement")}</li>
            <li><strong>${e("about.carousel.tools.presenter_title","Presenter (Adaptive Learning)")}</strong> — ${e("about.carousel.tools.presenter_desc","Learning presentation module with AI-generated agendas, voice interruption handling, and revision support for dynamic teaching")}</li>
            <li><strong>${e("about.carousel.tools.dialogue_title","System Dialogue")}</strong> — ${e("about.carousel.tools.dialogue_desc","Health diagnostics and system information retrieval with natural language interaction")}</li>
            <li><strong>${e("about.carousel.tools.prompt_title","Prompt Creator")}</strong> — ${e("about.carousel.tools.prompt_desc","Interactive prompt engineering tool with iterative refinement and testing")}</li>
            <li><strong>${e("about.carousel.tools.ui_interp_title","UI Interpreter")}</strong> — ${e("about.carousel.tools.ui_interp_desc","Advanced screen/UI element analysis with visual reasoning and GUI assistance")}</li>
            <li><strong>${e("about.carousel.tools.bulk_title","Bulk Intelligence")}</strong> — ${e("about.carousel.tools.bulk_desc","Batch question automation with CSV audit export, evaluation criteria, and result ranking")}</li>
            <li><strong>${e("about.carousel.tools.activity_title","Activity Transition System")}</strong> — ${e("about.carousel.tools.activity_desc","Voice-driven popup/panel switching across 30+ transitional activities with intelligent context awareness")}</li>
            <li><strong>${e("about.carousel.tools.minigames_title","Minigames")}</strong> — ${e("about.carousel.tools.minigames_desc","30 pen-and-paper games (TTT, Hangman, NIM, riddle games, trivia, word games, logic puzzles) with voice ordinal navigation")}</li>
          </ul>
        </div>

        <!-- Card 7: Session & Productivity -->
        <div class="about-card ${this._cardClass(7)}">
          <h2>${e("about.carousel.session.title","📊 Session & Productivity")}</h2>
          <ul>
            <li><strong>${e("about.carousel.session.multi_title","Multi-session management")}</strong> — ${e("about.carousel.session.multi_desc","Persistent memory across conversations with session state save/restore")}</li>
            <li><strong>${e("about.carousel.session.memlab_title","Memory Lab")}</strong> — ${e("about.carousel.session.memlab_desc","Memory management UI for viewing, editing, and configuring the persistent RAG system")}</li>
            <li><strong>${e("about.carousel.session.taskchat_title","TaskChat")}</strong> — ${e("about.carousel.session.taskchat_desc","Voice-driven Q&A session wizard with transcript save/load and TTS-cached template questions")}</li>
            <li><strong>${e("about.carousel.session.taskman_title","Task Manager")}</strong> — ${e("about.carousel.session.taskman_desc","Calendar-based task scheduling with AI-powered task extraction, ordering, and completion checking")}</li>
            <li><strong>${e("about.carousel.session.recorder_title","Editor Recorder")}</strong> — ${e("about.carousel.session.recorder_desc","Session-based state recorder with undo/redo, timeline navigation, state reconstruction, and export")}</li>
            <li><strong>${e("about.carousel.session.player_title","Conversation Player")}</strong> — ${e("about.carousel.session.player_desc","Video player-like UI for replaying dialogue flow with variable speed (1x–8x), TTS export, and intent analysis")}</li>
            <li><strong>${e("about.carousel.session.music_title","Music Manager")}</strong> — ${e("about.carousel.session.music_desc","Music library upload, playlists, mode-based playback, and integrated streaming player")}</li>
            <li><strong>${e("about.carousel.session.onboarding_title","Onboarding Wizard")}</strong> — ${e("about.carousel.session.onboarding_desc","First-run setup with pre-cached TTS phrases (English & Turkish)")}</li>
            <li><strong>${e("about.carousel.session.storage_title","Storage Manager")}</strong> — ${e("about.carousel.session.storage_desc","File storage browser with session-based file management and settings")}</li>
          </ul>
        </div>

        <!-- Card 8: Platform & Infrastructure -->
        <div class="about-card ${this._cardClass(8)}">
          <h2>${e("about.carousel.platform.title","🖥️ Platform & Infrastructure")}</h2>
          <ul>
            <li><strong>${e("about.carousel.platform.engine_title","Game Engine")}</strong> — ${e("about.carousel.platform.engine_desc","Interactive 3D world building with Shell Director, popup window management, and auth state forwarding")}</li>
            <li><strong>${e("about.carousel.platform.vision_title","Live Vision")}</strong> — ${e("about.carousel.platform.vision_desc","Real-time screen capture and AI analysis with constrained visual command generation, cognitive overlays, and WebSocket streaming")}</li>
            <li><strong>${e("about.carousel.platform.webcam_title","Webcam streaming")}</strong> — ${e("about.carousel.platform.webcam_desc","Real-time AI vision with visual input modes")}</li>
            <li><strong>${e("about.carousel.platform.pixel_title","Remote Pixel pipeline")}</strong> — ${e("about.carousel.platform.pixel_desc","Server-side rendering via Playwright headless browser")}</li>
            <li><strong>${e("about.carousel.platform.vram_title","VRAM Manager")}</strong> — ${e("about.carousel.platform.vram_desc","Centralized GPU memory dashboard with model load/unload controls and compute utilization metrics")}</li>
            <li><strong>${e("about.carousel.platform.launcher_title","GUI Launcher")}</strong> — ${e("about.carousel.platform.launcher_desc","Pre-launch mode selector for server configuration, preload modules, and dependency checks")}</li>
            <li><strong>${e("about.carousel.platform.mouse_title","Mouse Input Bridge")}</strong> — ${e("about.carousel.platform.mouse_desc","Windows mouse/keyboard event capture and forwarding to the AI system (configurable via JSON)")}</li>
            <li><strong>${e("about.carousel.platform.notif_title","Notification inbox")}</strong> — ${e("about.carousel.platform.notif_desc","TTS commentary with text cleansing, first-launch welcome, boot-aware scheduling, and toggleable voice narration")}</li>
          </ul>
        </div>

        <!-- Card 9: Add-On Packs -->
        <div class="about-card ${this._cardClass(9)}">
          <h2>${e("about.carousel.addons.title","📦 Add-On Packs")}</h2>
          <p style="font-size: 12px; color: #94a3b8; margin-bottom: 10px;">${e("about.carousel.addons.subtitle","Purchasable individually from the Microsoft Store as consumable add-ons. These unlock specific features without requiring a full subscription tier.")}</p>
          <h3>${e("about.carousel.addons.visual_title","👁️ Visual Workflow Credit Pack")}</h3>
          <p>${e("about.carousel.addons.visual_desc","Unlock visual workflow credits for screenshot-guided command generation with auto-exposure protection and Living Machine state saving. Credits are consumed per save action.")}</p>
          <p style="font-size: 10px; color: #a78bfa; margin-top: 4px;">${e("about.carousel.addons.visual_badge","Consumable · Managed via the Microsoft Store")}</p>
        </div>

        <!-- Card 10: Subscriptions -->
        <div class="about-card ${this._cardClass(10)}">
          <h2>${e("about.carousel.subs.title","💳 Subscriptions")}</h2>
          <p style="font-size: 12px; color: #94a3b8; margin-bottom: 16px;">${e("about.carousel.subs.subtitle","Per-host-device licensing via the Microsoft Store. All licences are non-transferable and valid on one licensed host device.")}</p>
          <div class="about-arch-grid">
            <div class="about-arch-card">
              <div class="about-arch-card-title">${e("about.carousel.subs.pass_title","⚡ 3-Day Pass")}</div>
              <div class="about-arch-card-value">${e("about.carousel.subs.pass_desc","72 hours · Full Pro-tier access")}</div>
            </div>
            <div class="about-arch-card">
              <div class="about-arch-card-title">${e("about.carousel.subs.monthly_title","📅 Monthly")}</div>
              <div class="about-arch-card-value">${e("about.carousel.subs.monthly_desc","30 days · Flexible access")}</div>
            </div>
          </div>
          <div class="disclaimer-card" style="margin-top: 12px;">
            <div class="disclaimer-card-title">${e("about.carousel.subs.addon_title","🛍️ Add-On Packs")}</div>
            <p>${e("about.carousel.subs.addon_desc","Purchasable individually via the Microsoft Store: Visual Workflow Credit Pack — screenshot-guided visual workflow credits (consumable). Add-On Packs are tied to your Microsoft account, not the host device. See the EULA tab for full licence terms.")}</p>
          </div>
        </div>

        <!-- Card 11: System Requirements -->
        <div class="about-card ${this._cardClass(11)}">
          <h2>${e("about.carousel.sysreq.title","🖲️ System Requirements")}</h2>
          ${this._renderSystemRequirementsSection()}
          <p style="color: #64748b; font-size: 11px; margin-top: 20px; text-align: center;">
            ${e("about.carousel.footer.copyright","© 2026 Comet Game Studio Ltd. All rights reserved.")}<br/>
            ${e("about.carousel.footer.powered","Powered by the Microsoft Phi-4 model family. 40+ integrated features.")}<br/>
            ${e("about.carousel.footer.visit","Visit us at")} <a href="https://www.cometgamestudio.com">cometgamestudio.com</a>
          </p>
        </div>

        <!-- Navigation: side arrows + bottom dots -->
        ${this._renderCarouselDots(this._tabCardCounts.about)}
      </div>
    `}_cardClass(t){return this.currentCardIndex===t?"active":this.currentCardIndex>t?"prev":"next"}_renderCarouselDots(t){return c`
      <div class="about-arrow-row" role="navigation" aria-label="Slide navigation">
        <button
          class="about-nav-side-arrow"
          @click=${i=>{i.stopPropagation(),this._prevCard()}}
          title="Previous slide"
          aria-label="Previous slide"
          tabindex="0"
        >◀</button>
        <div class="about-arrow-spacer" aria-hidden="true"></div>
        <button
          class="about-nav-side-arrow"
          @click=${i=>{i.stopPropagation(),this._nextCard()}}
          title="Next slide"
          aria-label="Next slide"
          tabindex="0"
        >▶</button>
      </div>
      <div class="about-carousel-dots" role="tablist" aria-label="Slide indicator">
        ${Array.from({length:t},(i,s)=>c`
          <button
            class="about-carousel-dot ${s===this.currentCardIndex?"active":""}"
            @click=${()=>this._goToCard(s)}
            title="Slide ${s+1} of ${t}"
            role="tab"
            aria-selected="${s===this.currentCardIndex}"
            aria-label="Slide ${s+1} of ${t}"
            tabindex="${s===this.currentCardIndex?"0":"-1"}"
          ></button>
        `)}
      </div>
    `}_renderPrivacyCarousel(){return c`
      <div class="about-content-carousel">
        <!-- Card 0: Index -->
        <div class="about-card hero ${this._cardClass(0)} ${this.isCardDragging?"dragging":""}">
          <h2>${e("privacy.carousel.title","🔒 Privacy Policy")}</h2>
          <p style="font-size: 12px; color: #94a3b8; margin-bottom: 16px;">${e("privacy.carousel.last_updated","Last Updated: March 24, 2026")}</p>
          <div style="display:flex;flex-direction:column;gap:6px;margin:0 0 16px;">
            <button @click=${()=>this._goToCard(1)} class="about-chip-btn" style="display:flex;align-items:center;gap:10px;text-align:left;border-radius:8px;padding:10px 14px;font-size:13px;justify-content:space-between;" title="${e("privacy.carousel.chip_local_title","Local-First Architecture")}">
              <span>${e("privacy.carousel.chip_local","🏠 Local-First Architecture")}</span><span style="opacity:0.5;font-size:11px;">›</span>
            </button>
            <button @click=${()=>this._goToCard(2)} class="about-chip-btn" style="display:flex;align-items:center;gap:10px;text-align:left;border-radius:8px;padding:10px 14px;font-size:13px;justify-content:space-between;" title="${e("privacy.carousel.chip_files_title","File Submissions")}">
              <span>${e("privacy.carousel.chip_files","📁 File Submissions")}</span><span style="opacity:0.5;font-size:11px;">›</span>
            </button>
            <button @click=${()=>this._goToCard(3)} class="about-chip-btn" style="display:flex;align-items:center;gap:10px;text-align:left;border-radius:8px;padding:10px 14px;font-size:13px;justify-content:space-between;" title="${e("privacy.carousel.chip_artifacts_title","Local Data Artifacts")}">
              <span>${e("privacy.carousel.chip_artifacts","🛡️ Local Data Artifacts")}</span><span style="opacity:0.5;font-size:11px;">›</span>
            </button>
            <button @click=${()=>this._goToCard(4)} class="about-chip-btn" style="display:flex;align-items:center;gap:10px;text-align:left;border-radius:8px;padding:10px 14px;font-size:13px;justify-content:space-between;" title="${e("privacy.carousel.chip_screen_title","Screen & Audio Data")}">
              <span>${e("privacy.carousel.chip_screen","🖥️ Screen & Audio Data")}</span><span style="opacity:0.5;font-size:11px;">›</span>
            </button>
            <button @click=${()=>this._goToCard(5)} class="about-chip-btn" style="display:flex;align-items:center;gap:10px;text-align:left;border-radius:8px;padding:10px 14px;font-size:13px;justify-content:space-between;" title="${e("privacy.carousel.chip_reporting_title","Error Reporting & Analytics")}">
              <span>${e("privacy.carousel.chip_reporting","📈 Error Reporting & Analytics")}</span><span style="opacity:0.5;font-size:11px;">›</span>
            </button>
          </div>
          <p style="font-size:12px;color:#64748b;margin-top:4px;">
            ${e("privacy.carousel.credit","By")} <strong style="color:#a5b4fc;">Comet Game Studio Ltd</strong> · ${e("privacy.carousel.tagline","Local-First Privacy")}
          </p>
        </div>

        <div class="about-card ${this._cardClass(1)} ${this.isCardDragging?"dragging":""}">
          <h2>${e("privacy.carousel.card1_title","🔒 Privacy Policy")}</h2>
          <p style="font-size: 11px; color: #64748b; margin-bottom: 16px;">${e("privacy.carousel.card1_date","Last Updated: March 24, 2026")}</p>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">${e("privacy.carousel.local_first_title","🏠 Local-First Architecture")}</div>
            <p>${e("privacy.carousel.local_first_desc","Orus is designed with a local-first privacy philosophy. Core AI models — including Phi-4 (reasoning), Whisper (speech-to-text), Orpheus (text-to-speech), and vision models — run on the licensed host device. No collaborative cloud processing is used for inference. Your prompts, voice input, and generated content are processed locally wherever possible.")}</p>
          </div>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">${e("privacy.carousel.file_sub_title","📁 File Submissions and Staging")}</div>
            <p>${e("privacy.carousel.file_sub_desc","Users may submit files through Orus's in-app interface. Depending on platform and deployment mode, files may be staged locally in Windows app data or MSIX-managed storage before encrypted transmission to Orus services. Submitted files are processed on the host device.")}</p>
          </div>
        </div>

        <div class="about-card ${this._cardClass(2)} ${this.isCardDragging?"dragging":""}">
          <h2>🔒 Privacy Policy</h2>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">🛡️ Local Data Artifacts</div>
            <p>Orus may create and store local artifacts on the host device, including conversation history,
               session states, memory vectors and RAG data, operational logs, TTS cache files, voice profiles,
               and document processing outputs. You own your data. You are responsible for backing up your own data.</p>
          </div>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">📊 Platform Telemetry Separation</div>
            <p>Orus's own data handling is separate from Microsoft Store and Windows platform telemetry.
               Microsoft Store and Windows platform services may collect telemetry or diagnostic data
               under their own terms and policies. Orus itself is designed to minimise Orus-originated telemetry.</p>
          </div>
        </div>

        <div class="about-card ${this._cardClass(3)}">
          <h2>${e("privacy.carousel.card3_title","🔒 Privacy Policy")}</h2>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">${e("privacy.carousel.screen_title","🖥️ Screen & Audio Data")}</div>
            <p>${e("privacy.carousel.screen_desc","Live Vision (screen capture) and audio listening (microphone) features operate over a strictly local loopback connection (localhost). Audio is transcribed by local instances of Whisper. Screen pixels are analysed by local vision models. This high-bandwidth sensory data is processed locally and is not transmitted over the public internet.")}</p>
          </div>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">${e("privacy.carousel.payments_title","💳 Payments & Subscriptions")}</div>
            <p>${e("privacy.carousel.payments_desc","Comet Game Studio Ltd does not process or store any payment card information (PCI). All subscriptions and pass purchases are handled securely and exclusively by the Microsoft Store commerce platform. Orus solely queries the Microsoft Store API to validate the existence of an active licence token on the host device.")}</p>
          </div>
        </div>

        <div class="about-card ${this._cardClass(4)} ${this.isCardDragging?"dragging":""}">
          <h2>${e("privacy.carousel.card4_title","🔒 Privacy Policy")}</h2>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">${e("privacy.carousel.error_reporting_title","📊 Error Reporting Data")}</div>
            <p>${e("privacy.carousel.error_reporting_desc","If Orus encounters an error, minimal diagnostic data (error type, stack trace, and system configuration) may be collected to improve stability. Any personally identifiable information (PII) included in error reports is automatically deleted within 30 days of collection. Error data is stored on secure servers and is never sold or shared with third parties.")}</p>
          </div>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">${e("privacy.carousel.analytics_title","📈 App Analytics")}</div>
            <p>${e("privacy.carousel.analytics_desc","Orus is designed to minimise analytics collection. Any anonymised usage metrics collected are used solely to improve the application and are never aggregated with third-party data sources. Analytics data cannot be used to identify individual users. Comet Game Studio Ltd does not sell, lease, or share analytics data with any external parties.")}</p>
          </div>
        </div>

        <div class="about-card ${this._cardClass(5)} ${this.isCardDragging?"dragging":""}">
          <h2>${e("privacy.carousel.card5_title","🔒 Privacy Policy")}</h2>
          <div class="tp-section-header">${e("privacy.carousel.contact_section","📧 Privacy Contact")}</div>
          <div style="background: rgba(30,41,59,0.5); border: 1px solid rgba(148,163,184,0.1); border-radius: 8px; padding: 16px; margin-top: 12px;">
            <p style="margin: 0;">${e("privacy.carousel.contact_desc","For any questions regarding this privacy policy or to exercise your privacy rights, please contact Comet Game Studio Ltd at the support channels provided within the Software or at:")} <a href="https://www.cometgamestudio.com">cometgamestudio.com</a></p>
          </div>
        </div>

        ${this._renderCarouselDots(7)}
      </div>
    `}_renderEULACarousel(){return c`
      <div class="about-content-carousel">
        <!-- Card 0: Index -->
        <div class="about-card hero ${this._cardClass(0)} ${this.isCardDragging?"dragging":""}">
          <h2>${e("eula.carousel.title","📜 End-User Licence Agreement")}</h2>
          <p style="font-size: 12px; color: #94a3b8; margin-bottom: 16px;">${e("eula.carousel.effective_date","Effective Date: March 24, 2026")}</p>
          <div style="display:flex;flex-direction:column;gap:6px;margin:0 0 16px;">
            <button @click=${()=>this._goToCard(1)} class="about-chip-btn" style="display:flex;align-items:center;gap:10px;text-align:left;border-radius:8px;padding:10px 14px;font-size:13px;justify-content:space-between;" title="${e("eula.carousel.chip_grant_title","Grant of Licence")}">
              <span>${e("eula.carousel.chip_grant","📋 Grant of Licence")}</span><span style="opacity:0.5;font-size:11px;">›</span>
            </button>
            <button @click=${()=>this._goToCard(2)} class="about-chip-btn" style="display:flex;align-items:center;gap:10px;text-align:left;border-radius:8px;padding:10px 14px;font-size:13px;justify-content:space-between;" title="${e("eula.carousel.chip_tiers_title","Subscription Tiers")}">
              <span>${e("eula.carousel.chip_tiers","💳 Subscription Tiers")}</span><span style="opacity:0.5;font-size:11px;">›</span>
            </button>
            <button @click=${()=>this._goToCard(3)} class="about-chip-btn" style="display:flex;align-items:center;gap:10px;text-align:left;border-radius:8px;padding:10px 14px;font-size:13px;justify-content:space-between;" title="${e("eula.carousel.chip_device_title","Device Model & Restrictions")}">
              <span>${e("eula.carousel.chip_device","🔐 Device Model & Restrictions")}</span><span style="opacity:0.5;font-size:11px;">›</span>
            </button>
            <button @click=${()=>this._goToCard(4)} class="about-chip-btn" style="display:flex;align-items:center;gap:10px;text-align:left;border-radius:8px;padding:10px 14px;font-size:13px;justify-content:space-between;" title="${e("eula.carousel.chip_legal_title","Termination & Legal")}">
              <span>${e("eula.carousel.chip_legal","⚖️ Termination & Legal")}</span><span style="opacity:0.5;font-size:11px;">›</span>
            </button>
          </div>
          <p style="font-size:12px;color:#64748b;margin-top:4px;">
            ${e("eula.carousel.credit","By")} <strong style="color:#a5b4fc;">Comet Game Studio Ltd</strong> · ${e("eula.carousel.tagline","Professional Licensing")}
          </p>
        </div>

        <div class="about-card ${this._cardClass(1)} ${this.isCardDragging?"dragging":""}">
          <h2>${e("eula.carousel.card1_title","📜 End-User Licence Agreement")}</h2>
          <div class="legal-effective-date">${e("eula.carousel.card1_date","Effective Date: March 24, 2026")}</div>
          <div class="legal-section">
            <p>${e("eula.carousel.card1_intro",'This Agreement is between you ("User") and Comet Game Studio Ltd ("Licensor") for the Orus AI System software ("Software"). By installing or using the Software you agree to these terms.')}</p>
          </div>
          <div class="legal-section">
            <h3>${e("eula.carousel.grant_title","1. Grant of Licence")}</h3>
            <p>${e("eula.carousel.grant_desc","Subject to a valid subscription, the Licensor grants you a limited, non-exclusive, non-transferable, revocable licence to install and use the Software on a single host device identified by its hardware fingerprint (HWID). The licence is personal and may not be shared, sublicensed, or transferred without prior written consent. The licensed host may permit browser-based client access from devices on the same local network.")}</p>
          </div>
        </div>

        <div class="about-card ${this._cardClass(2)} ${this.isCardDragging?"dragging":""}">
          <h2>${e("eula.carousel.tiers_title","📜 EULA — Subscription Tiers")}</h2>
          <div class="legal-section">
            <h3>${e("eula.carousel.tiers_heading","2. Subscription Tiers & Add-On Packs")}</h3>
            <p>${e("eula.carousel.tiers_intro","Access is provided through tiered subscriptions. The Licensor may modify tier features, pricing, and availability at any time with reasonable notice. Current tiers:")}</p>
            <ul>
              <li><strong>${e("eula.carousel.tier_pass_title","3-Day Access Pass:")}</strong> ${e("eula.carousel.tier_pass_desc","Full Pro-tier access for 72 hours")}</li>
              <li><strong>${e("eula.carousel.tier_starter_title","Starter (8–12 GB VRAM):")}</strong> ${e("eula.carousel.tier_starter_desc","TTS, STT, Memory RAG, Living Menu, Text Chat, Music Manager")}</li>
              <li><strong>${e("eula.carousel.tier_pro_title","Pro (12–16 GB VRAM):")}</strong> ${e("eula.carousel.tier_pro_desc","All Starter + Vision, LoRA, Face Capture, advanced visual workflows, BrainStorm, Presenter, Canvas, Webber, TaskChat, Discord, Meeting Mode")}</li>
              <li><strong>${e("eula.carousel.tier_enterprise_title","Enterprise (16–24 GB VRAM):")}</strong> ${e("eula.carousel.tier_enterprise_desc","All Pro + SF3D, Boltzmann Brain, Game Engine, Live Vision, Defrag 3D, all models")}</li>
            </ul>
            <p>${e("eula.carousel.tiers_periods","Periods include: Monthly, Quarterly, Semi-Annual, Annual, and Lifetime. Annual discounts available. Consumable add-on packs (e.g. Visual Workflow Credit Pack) are managed by the Microsoft Store and tied to your Microsoft account — not hardware-bound.")}</p>
          </div>
        </div>

        <div class="about-card ${this._cardClass(3)}">
          <h2>${e("eula.carousel.device_title","📜 EULA — Device Model & Restrictions")}</h2>
          <div class="legal-section">
            <h3>${e("eula.carousel.hwid_heading","3. Host-Device Licence Model")}</h3>
            <p>${e("eula.carousel.hwid_desc","Your licence is bound to the host device via a secure hardware fingerprint. If hardware changes alter the fingerprint, contact the Licensor to transfer your licence.")}</p>
          </div>
          <div class="legal-section">
            <h3>${e("eula.carousel.restrict_heading","4. Restrictions")}</h3>
            <p>${e("eula.carousel.restrict_desc","You may not: reverse engineer or decompile the Software; redistribute or sublicense it; remove proprietary notices; use it unlawfully; circumvent hardware-binding or authentication; misuse AI outputs in violation of law or third-party rights; or host it as a public internet service unless expressly permitted in a later version of these terms.")}</p>
          </div>
          <div class="legal-section">
            <h3>${e("eula.carousel.ai_content_heading","5. AI-Generated Content")}</h3>
            <p>${e("eula.carousel.ai_content_desc","The Software uses AI models to generate text, speech, visual effects, and other content. The Licensor does not guarantee accuracy or appropriateness of AI-generated content. The User is solely responsible for reviewing and verifying any content before production use.")}</p>
          </div>
          <div class="legal-section">
            <h3>${e("eula.carousel.data_heading","6. Data and Privacy")}</h3>
            <p>${e("eula.carousel.data_desc","User data is stored locally on the host device. The Software does not transmit personal data to external servers unless the User explicitly enables integrations. See the Privacy Policy tab for full details.")}</p>
          </div>
        </div>

        <div class="about-card ${this._cardClass(4)}">
          <h2>${e("eula.carousel.legal_title","📜 EULA — Termination & Legal")}</h2>
          <div class="legal-section">
            <h3>${e("eula.carousel.termination_heading","7. Termination")}</h3>
            <p>${e("eula.carousel.termination_desc","This Agreement is effective until terminated. The Licensor may terminate immediately upon breach. A 3-day grace period is provided after subscription expiration before feature access is revoked.")}</p>
          </div>
          <div class="legal-section">
            <h3>${e("eula.carousel.warranty_heading","8. Disclaimer of Warranties")}</h3>
            <p>${e("eula.carousel.warranty_desc",'THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. THE LICENSOR DOES NOT WARRANT THAT THE SOFTWARE WILL BE ERROR-FREE OR UNINTERRUPTED.')}</p>
          </div>
          <div class="legal-section">
            <h3>${e("eula.carousel.liability_heading","9. Limitation of Liability")}</h3>
            <p>${e("eula.carousel.liability_desc","THE LICENSOR'S TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM. No liability for indirect, incidental, or consequential damages.")}</p>
          </div>
          <div class="legal-section">
            <h3>${e("eula.carousel.law_heading","10. Governing Law")}</h3>
            <p>${e("eula.carousel.law_desc","Governed by the laws of England and Wales. Disputes subject to the exclusive jurisdiction of the courts of England and Wales.")}</p>
          </div>
          <div class="legal-section">
            <h3>${e("eula.carousel.contact_heading","11. Contact")}</h3>
            <p>${e("eula.carousel.contact_desc","For questions contact Comet Game Studio Ltd via support channels in the Software or at")} <a href="https://www.cometgamestudio.com">cometgamestudio.com</a>.</p>
          </div>
        </div>

        ${this._renderCarouselDots(5)}
      </div>
    `}_renderThirdPartyCarousel(){return c`
      <div class="about-content-carousel">
        <!-- Card 0: Index -->
        <div class="about-card hero ${this._cardClass(0)} ${this.isCardDragging?"dragging":""}">
          <h2>${e("thirdparty.carousel.title","📦 Third Party Notice")}</h2>
          <p style="font-size: 12px; color: #94a3b8; margin-bottom: 16px;">${e("thirdparty.carousel.subtitle","Open-source components and licenses used in Orus")}</p>
          <div style="display:flex;flex-direction:column;gap:6px;margin:0 0 16px;">
            <button @click=${()=>this._goToCard(1)} class="about-chip-btn" style="display:flex;align-items:center;gap:10px;text-align:left;border-radius:8px;padding:10px 14px;font-size:13px;justify-content:space-between;" title="${e("thirdparty.carousel.chip_frontend_title","Frontend & Backend")}">
              <span>${e("thirdparty.carousel.chip_frontend","🌐 Frontend & Backend")}</span><span style="opacity:0.5;font-size:11px;">›</span>
            </button>
            <button @click=${()=>this._goToCard(2)} class="about-chip-btn" style="display:flex;align-items:center;gap:10px;text-align:left;border-radius:8px;padding:10px 14px;font-size:13px;justify-content:space-between;" title="${e("thirdparty.carousel.chip_python_title","Python Packages")}">
              <span>${e("thirdparty.carousel.chip_python","🐍 Python Packages")}</span><span style="opacity:0.5;font-size:11px;">›</span>
            </button>
            <button @click=${()=>this._goToCard(3)} class="about-chip-btn" style="display:flex;align-items:center;gap:10px;text-align:left;border-radius:8px;padding:10px 14px;font-size:13px;justify-content:space-between;" title="${e("thirdparty.carousel.chip_models_title","Models & Media")}">
              <span>${e("thirdparty.carousel.chip_models","🤖 Models & Media")}</span><span style="opacity:0.5;font-size:11px;">›</span>
            </button>
            <button @click=${()=>this._goToCard(4)} class="about-chip-btn" style="display:flex;align-items:center;gap:10px;text-align:left;border-radius:8px;padding:10px 14px;font-size:13px;justify-content:space-between;" title="${e("thirdparty.carousel.chip_legal_title","Legal Attributions")}">
              <span>${e("thirdparty.carousel.chip_legal","⚖️ Legal Attributions")}</span><span style="opacity:0.5;font-size:11px;">›</span>
            </button>
          </div>
          <p style="font-size:12px;color:#64748b;margin-top:4px;">
            ${e("thirdparty.carousel.credit","By")} <strong style="color:#a5b4fc;">Comet Game Studio Ltd</strong> · ${e("thirdparty.carousel.tagline","Full License Compliance")}
          </p>
        </div>

        <div class="about-card ${this._cardClass(1)} ${this.isCardDragging?"dragging":""}">
          <h2>📦 Third Party — Frontend &amp; Backend</h2>
          <p style="font-size: 12px; color: #94a3b8; margin-bottom: 12px;">Open-source components used in Orus. Full license texts available in each package's repository.</p>
          <div class="tp-section-header">🌐 Frontend (npm)</div>
          <table class="tp-table"><thead><tr><th>Package</th><th>License</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td>lit / @lit/context</td><td><span class="tp-license-badge bsd">BSD-3</span></td><td>Web component library</td></tr>
              <tr><td>three</td><td><span class="tp-license-badge mit">MIT</span></td><td>3D WebGL/WebGPU renderer</td></tr>
              <tr><td>react / react-dom</td><td><span class="tp-license-badge mit">MIT</span></td><td>UI library</td></tr>
              <tr><td>framer-motion</td><td><span class="tp-license-badge mit">MIT</span></td><td>Animation transitions</td></tr>
              <tr><td>tone</td><td><span class="tp-license-badge mit">MIT</span></td><td>Web audio framework</td></tr>
              <tr><td>zod / zustand / uuid</td><td><span class="tp-license-badge mit">MIT</span></td><td>Validation · State · IDs</td></tr>
              <tr><td>cannon-es</td><td><span class="tp-license-badge mit">MIT</span></td><td>Physics engine</td></tr>
              <tr><td>html2canvas</td><td><span class="tp-license-badge mit">MIT</span></td><td>Screenshot rendering</td></tr>
              <tr><td>@monaco-editor/react</td><td><span class="tp-license-badge mit">MIT</span></td><td>Code editor</td></tr>
              <tr><td>lucide-react</td><td><span class="tp-license-badge isc">ISC</span></td><td>Icon set</td></tr>
              <tr><td>zzfx</td><td><span class="tp-license-badge mit">MIT</span></td><td>Sound effects</td></tr>
            </tbody>
          </table>
          <div class="tp-section-header" style="margin-top: 12px;">${e("thirdparty.carousel.backend_section","🖥️ Backend (npm)")}</div>
          <table class="tp-table"><thead><tr><th>${e("thirdparty.carousel.col_package","Package")}</th><th>${e("thirdparty.carousel.col_license","License")}</th><th>${e("thirdparty.carousel.col_desc","Description")}</th></tr></thead>
            <tbody>
              <tr><td>express</td><td><span class="tp-license-badge mit">MIT</span></td><td>Web framework</td></tr>
              <tr><td>axios / cors / form-data</td><td><span class="tp-license-badge mit">MIT</span></td><td>HTTP · CORS · Forms</td></tr>
              <tr><td>multer</td><td><span class="tp-license-badge mit">MIT</span></td><td>File upload parsing</td></tr>
              <tr><td>ws</td><td><span class="tp-license-badge mit">MIT</span></td><td>WebSocket streaming</td></tr>
              <tr><td>xlsx</td><td><span class="tp-license-badge apache">Apache-2.0</span></td><td>Spreadsheet parsing</td></tr>
            </tbody>
          </table>
        </div>

        <div class="about-card ${this._cardClass(2)}">
          <h2>${e("thirdparty.carousel.card2_title","📦 Third Party — Python (pip)")}</h2>
          <table class="tp-table"><thead><tr><th>${e("thirdparty.carousel.col_package","Package")}</th><th>${e("thirdparty.carousel.col_license","License")}</th><th>${e("thirdparty.carousel.col_desc","Description")}</th></tr></thead>
            <tbody>
              <tr><td>torch / torchvision / torchaudio</td><td><span class="tp-license-badge bsd">BSD-3</span></td><td>PyTorch deep learning</td></tr>
              <tr><td>transformers</td><td><span class="tp-license-badge apache">Apache-2.0</span></td><td>Phi-4 inference</td></tr>
              <tr><td>vllm</td><td><span class="tp-license-badge apache">Apache-2.0</span></td><td>LLM inference engine</td></tr>
              <tr><td>fastapi / uvicorn / pydantic</td><td><span class="tp-license-badge mit">MIT/BSD</span></td><td>Inference server</td></tr>
              <tr><td>accelerate / peft / datasets</td><td><span class="tp-license-badge apache">Apache-2.0</span></td><td>Training &amp; fine-tuning</td></tr>
              <tr><td>sentence-transformers</td><td><span class="tp-license-badge apache">Apache-2.0</span></td><td>Memory embeddings</td></tr>
              <tr><td>speechbrain</td><td><span class="tp-license-badge apache">Apache-2.0</span></td><td>Speaker diarization</td></tr>
              <tr><td>openai-whisper</td><td><span class="tp-license-badge mit">MIT</span></td><td>Speech-to-text</td></tr>
              <tr><td>llama-cpp-python</td><td><span class="tp-license-badge mit">MIT</span></td><td>Orpheus TTS (GGUF)</td></tr>
              <tr><td>onnxruntime-gpu</td><td><span class="tp-license-badge mit">MIT</span></td><td>SNAC decoder GPU</td></tr>
              <tr><td>mediapipe</td><td><span class="tp-license-badge apache">Apache-2.0</span></td><td>Face capture</td></tr>
              <tr><td>diffusers</td><td><span class="tp-license-badge apache">Apache-2.0</span></td><td>Image generation</td></tr>
              <tr><td>pillow / opencv-python-headless</td><td><span class="tp-license-badge other">HPND/Apache</span></td><td>Image processing</td></tr>
              <tr><td>numpy / scipy / pandas</td><td><span class="tp-license-badge bsd">BSD-3</span></td><td>Numerical computing</td></tr>
              <tr><td>pdfplumber / python-docx / openpyxl</td><td><span class="tp-license-badge mit">MIT</span></td><td>Document processing</td></tr>
              <tr><td>playwright</td><td><span class="tp-license-badge apache">Apache-2.0</span></td><td>Remote Pixel rendering</td></tr>
              <tr><td>beautifulsoup4 / lxml</td><td><span class="tp-license-badge mit">MIT/BSD</span></td><td>HTML parsing (Webber)</td></tr>
              <tr><td>websockets / httpx / aiohttp</td><td><span class="tp-license-badge bsd">BSD-3/Apache</span></td><td>Async networking</td></tr>
              <tr><td>cryptography</td><td><span class="tp-license-badge apache">Apache-2.0</span></td><td>Licence encryption</td></tr>
              <tr><td>soprano-tts</td><td><span class="tp-license-badge apache">Apache-2.0</span></td><td>Turkish TTS</td></tr>
              <tr><td>nltk / langdetect / rapidfuzz</td><td><span class="tp-license-badge apache">Apache/MIT</span></td><td>NLP utilities</td></tr>
              <tr><td>flash-attn</td><td><span class="tp-license-badge bsd">BSD</span></td><td>Flash Attention</td></tr>
              <tr><td>keyboard / mouse</td><td><span class="tp-license-badge mit">MIT</span></td><td>Windows Bridge input</td></tr>
            </tbody>
          </table>
        </div>

        <div class="about-card ${this._cardClass(3)}">
          <h2>${e("thirdparty.carousel.card3_title","📦 Third Party — Models & Media")}</h2>
          <div class="tp-section-header">${e("thirdparty.carousel.build_section","🔧 Build Tools")}</div>
          <table class="tp-table"><thead><tr><th>${e("thirdparty.carousel.col_package","Package")}</th><th>${e("thirdparty.carousel.col_license","License")}</th></tr></thead>
            <tbody>
              <tr><td>vite / esbuild / typescript</td><td><span class="tp-license-badge mit">MIT/Apache</span></td></tr>
              <tr><td>@vitejs/plugin-react / eslint</td><td><span class="tp-license-badge mit">MIT</span></td></tr>
              <tr><td>pyinstaller</td><td><span class="tp-license-badge other">GPLv2+Exception</span></td></tr>
            </tbody>
          </table>
          <div class="tp-section-header" style="margin-top:10px;">${e("thirdparty.carousel.ai_models_section","🤖 AI Models")}</div>
          <table class="tp-table"><thead><tr><th>${e("thirdparty.carousel.col_model","Model")}</th><th>${e("thirdparty.carousel.col_license","License")}</th></tr></thead>
            <tbody>
              <tr><td>Microsoft Phi-4 Multimodal</td><td><span class="tp-license-badge mit">MIT</span></td></tr>
              <tr><td>OpenAI Whisper Large v3 Turbo</td><td><span class="tp-license-badge mit">MIT</span></td></tr>
              <tr><td>Orpheus TTS (GGUF)</td><td><span class="tp-license-badge apache">Apache-2.0</span></td></tr>
              <tr><td>Soprano TTS (ONNX)</td><td><span class="tp-license-badge apache">Apache-2.0</span></td></tr>
              <tr><td>Stability AI SF3D</td><td><span class="tp-license-badge other">Community</span></td></tr>
              <tr><td>MediaPipe (Google)</td><td><span class="tp-license-badge apache">Apache-2.0</span></td></tr>
              <tr><td>SpeechBrain ECAPA-TDNN</td><td><span class="tp-license-badge apache">Apache-2.0</span></td></tr>
              <tr><td>SNAC 24kHz Codec</td><td><span class="tp-license-badge mit">MIT</span></td></tr>
              <tr><td>BGE-small-en-v1.5 (Embeddings)</td><td><span class="tp-license-badge mit">MIT</span></td></tr>
              <tr><td>NVIDIA CUDA / cuDNN / TensorRT</td><td><span class="tp-license-badge other">Proprietary</span></td></tr>
            </tbody>
          </table>
          <div class="tp-section-header" style="margin-top:10px;">${e("thirdparty.carousel.media_section","🎵 Licensed Media")}</div>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">${e("thirdparty.carousel.soundmorph_title","SoundMorph — UI Sound Effects")}</div>
            <p>${e("thirdparty.carousel.soundmorph_desc","UI audio cues licensed from SoundMorph under their commercial MEDIA LICENSE.")}</p>
          </div>
        </div>

        <div class="about-card ${this._cardClass(4)}">
          <h2>${e("thirdparty.carousel.card4_title","📦 Third Party — Legal Attributions")}</h2>
          <p style="font-size: 11.5px; color: #94a3b8; margin-bottom: 12px;">${e("thirdparty.carousel.card4_subtitle","Required by Apache-2.0 §4.4, BSD-3 §1, and MIT license terms.")}</p>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">PyTorch (BSD-3)</div>
            <p>Copyright (c) 2016- Facebook, Inc. (Adam Paszke) and contributors. All rights reserved. Redistribution requires copyright notice retention.</p>
          </div>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">Hugging Face (Apache-2.0)</div>
            <p>Copyright 2018- The Hugging Face team. transformers, accelerate, diffusers, datasets, peft.</p>
          </div>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">vLLM (Apache-2.0)</div>
            <p>Copyright 2023 The vLLM Team.</p>
          </div>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">FastAPI &amp; Pydantic (MIT)</div>
            <p>FastAPI: Copyright (c) 2018 Sebastián Ramírez. Pydantic: Copyright (c) 2017-present Pydantic Services Inc.</p>
          </div>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">OpenAI Whisper (MIT)</div>
            <p>Copyright (c) 2022 OpenAI.</p>
          </div>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">Three.js (MIT) · Lit (BSD-3) · React (MIT)</div>
            <p>Three.js © 2010-2025 three.js authors. Lit © 2017 Google LLC. React © Facebook, Inc.</p>
          </div>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">Microsoft Phi-4 (MIT) · ONNX Runtime (MIT)</div>
            <p>Copyright (c) Microsoft Corporation. All rights reserved.</p>
          </div>
          <div style="background: rgba(30,41,59,0.4); border: 1px solid rgba(148,163,184,0.1); border-radius: 8px; padding: 12px; margin-top: 12px; font-size: 11px; color: #94a3b8; line-height: 1.6;">
            NVIDIA, CUDA, cuDNN are trademarks of NVIDIA Corporation. Microsoft and Windows are trademarks of Microsoft group.
            Python logos are trademarks of the Python Software Foundation. All other trademarks are property of their respective owners.
            Attributions last verified March 2026.
          </div>
        </div>

        ${this._renderCarouselDots(5)}
      </div>
    `}_renderSafetyCarousel(){return c`
      <div class="about-content-carousel">
        <!-- Card 0: Index -->
        <div class="about-card hero ${this._cardClass(0)} ${this.isCardDragging?"dragging":""}">
          <h2>${e("safety.carousel.title","🛡️ Safety & Content Governance")}</h2>
          <p style="font-size: 12px; color: #94a3b8; margin-bottom: 16px;">${e("safety.carousel.subtitle","Last Updated: March 24, 2026 · UK Online Safety Act 2023 Compliance")}</p>
          <div style="display:flex;flex-direction:column;gap:6px;margin:0 0 16px;">
            <button @click=${()=>this._goToCard(1)} class="about-chip-btn" style="display:flex;align-items:center;gap:10px;text-align:left;border-radius:8px;padding:10px 14px;font-size:13px;justify-content:space-between;" title="${e("safety.carousel.chip_router_title","Answer Router")}">
              <span>${e("safety.carousel.chip_router","🔀 Answer Router")}</span><span style="opacity:0.5;font-size:11px;">›</span>
            </button>
            <button @click=${()=>this._goToCard(2)} class="about-chip-btn" style="display:flex;align-items:center;gap:10px;text-align:left;border-radius:8px;padding:10px 14px;font-size:13px;justify-content:space-between;" title="${e("safety.carousel.chip_categories_title","Content Categories")}">
              <span>${e("safety.carousel.chip_categories","⚠️ Content Categories")}</span><span style="opacity:0.5;font-size:11px;">›</span>
            </button>
            <button @click=${()=>this._goToCard(3)} class="about-chip-btn" style="display:flex;align-items:center;gap:10px;text-align:left;border-radius:8px;padding:10px 14px;font-size:13px;justify-content:space-between;" title="${e("safety.carousel.chip_local_title","Local Safety & Crisis Support")}">
              <span>${e("safety.carousel.chip_local","📞 Local Safety")}</span><span style="opacity:0.5;font-size:11px;">›</span>
            </button>
            <button @click=${()=>this._goToCard(4)} class="about-chip-btn" style="display:flex;align-items:center;gap:10px;text-align:left;border-radius:8px;padding:10px 14px;font-size:13px;justify-content:space-between;" title="${e("safety.carousel.chip_regs_title","Limitations & Regulations")}">
              <span>${e("safety.carousel.chip_regs","📜 Limitations & Regs")}</span><span style="opacity:0.5;font-size:11px;">›</span>
            </button>
          </div>
          <p style="font-size:12px;color:#64748b;margin-top:4px;">
            ${e("safety.carousel.credit","By")} <strong style="color:#a5b4fc;">Comet Game Studio Ltd</strong> · ${e("safety.carousel.tagline","Safety First")}
          </p>
        </div>

        <div class="about-card ${this._cardClass(1)} ${this.isCardDragging?"dragging":""}">
          <h2>${e("safety.carousel.card1_title","🛡️ Safety & Content Governance")}</h2>
          <p style="font-size: 11px; color: #64748b; margin-bottom: 12px;">${e("safety.carousel.card1_date","Last Updated: March 24, 2026 · UK Online Safety Act 2023 Compliance")}</p>
          <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border: 1px solid rgba(56,189,248,0.3); border-radius: 10px; padding: 16px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 700; color: #e2e8f0; margin-bottom: 6px;">${e("safety.carousel.osa_heading","🛡️ Online Safety Act 2023 Compliance")}</div>
            <p style="font-size: 12px; color: #cbd5e1; line-height: 1.6; margin: 0;">${e("safety.carousel.osa_desc","Orus implements on-device safety measures aligned with the UK Online Safety Act 2023. Content safety checks run on-device before queries reach the AI model — no queries are transmitted to external moderation services.")}</p>
          </div>
          <div class="tp-section-header">${e("safety.carousel.router_heading","🔀 Answer Router — Deterministic Safety Layer")}</div>
          <div class="disclaimer-card">
            <p>${e("safety.carousel.router_desc","The Answer Router intercepts user queries against a curated table of safety-critical phrases using semantic embedding similarity. On a match, a predetermined safe response is returned without invoking the generative AI model — preventing jailbreak and prompt injection vulnerabilities.")}</p>
            <p style="margin-top: 8px; font-size: 12px; color: #94a3b8;">${e("safety.carousel.router_flow","Your input → local semantic check → safe route or proceed. No centralised logging of safety checks.")}</p>
          </div>
        </div>

        <div class="about-card ${this._cardClass(2)}">
          <h2>${e("safety.carousel.card2_title","🛡️ Priority Illegal Content Categories")}</h2>
          <p style="font-size: 12px; color: #94a3b8; margin-bottom: 10px;">${e("safety.carousel.card2_subtitle","Categories aligned with OSA 2023 Schedule 7 and Ofcom's 17 priority illegal content groupings.")}</p>
          <div style="background: rgba(30,41,59,0.8); border: 1px solid rgba(239,68,68,0.2); border-radius: 8px; padding: 14px;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 5px; font-size: 12px; color: #cbd5e1;">
              <div>• Terrorism &amp; radicalisation</div>
              <div>• Child sexual exploitation (CSEA)</div>
              <div>• Hate content</div>
              <div>• Harassment &amp; stalking</div>
              <div>• Controlling/coercive behaviour</div>
              <div>• Intimate image abuse (deepfakes)</div>
              <div>• Extreme pornography</div>
              <div>• Adult sexual exploitation</div>
              <div>• Human trafficking</div>
              <div>• Unlawful immigration assistance</div>
              <div>• Fraud &amp; financial crime</div>
              <div>• Proceeds of crime / laundering</div>
              <div>• Drugs &amp; controlled substances</div>
              <div>• Firearms &amp; weapons</div>
              <div>• Suicide &amp; self-harm encouragement</div>
              <div>• Foreign interference</div>
              <div>• Animal cruelty</div>
              <div>• Epilepsy trolling (Zach's Law)</div>
            </div>
          </div>
          <p style="font-size: 11px; color: #64748b; margin-top: 10px;">${e("safety.carousel.age_aware","Age-aware routing provides differentiated responses for children, teens, and adults where appropriate.")}</p>
        </div>

        <div class="about-card ${this._cardClass(3)}">
          <h2>${e("safety.carousel.card3_title","🛡️ Local Safety & Crisis Support")}</h2>
          <div class="tp-section-header">${e("safety.carousel.local_arch_heading","🏠 Local-First Safety Architecture")}</div>
          <div class="disclaimer-card">
            <p>${e("safety.carousel.local_arch_desc","All safety checks execute locally. No queries are sent to external content moderation APIs.")}</p>
            <div style="display: flex; flex-direction: column; gap: 5px; font-size: 12px; margin-top: 8px; color: #94a3b8;">
              <div>• <strong>On-device safety model</strong> — lightweight LM runs locally, no cloud dependency</div>
              <div>• <strong>Smart semantic matching</strong> — catches paraphrases, not just keywords</div>
              <div>• <strong>No centralised logging</strong> — safety checks not reported externally</div>
            </div>
          </div>
          <div class="tp-section-header">${e("safety.carousel.crisis_heading","📞 Crisis Support Signposting")}</div>
          <div class="disclaimer-card">
            <p>${e("safety.carousel.crisis_desc","When the Answer Router detects crisis-related queries, it returns compassionate refusals with direct signposting:")}</p>
            <div style="display: flex; flex-direction: column; gap: 7px; font-size: 12px; margin-top: 8px;">
              <div>📞 <strong>Samaritans</strong> — Call 116 123 (free, 24/7)</div>
              <div>💬 <strong>SHOUT</strong> — Text "SHOUT" to 85258</div>
              <div>👦 <strong>Childline</strong> — Call 0800 1111 (under 18)</div>
              <div>🆘 <strong>HOPELINE247</strong> — Call 0800 068 4141</div>
              <div>🤝 <strong>Victim Support</strong> — Call 08 08 16 89 111</div>
            </div>
          </div>
        </div>

        <div class="about-card ${this._cardClass(4)}">
          <h2>${e("safety.carousel.card4_title","🛡️ Limitations & Regulatory Alignment")}</h2>
          <div class="tp-section-header">${e("safety.carousel.limits_heading","⚠️ Honest Limitations")}</div>
          <div class="disclaimer-card">
            <div style="display: flex; flex-direction: column; gap: 5px; font-size: 12px; color: #94a3b8;">
              <div>• The Answer Router uses <strong>semantic similarity</strong> matching — it catches paraphrases but cannot intercept every adversarial prompt.</div>
              <div>• Phi-4 has its own safety training; the Answer Router adds a <em>deterministic</em> layer independent of model behaviour.</div>
              <div>• Coverage is based on the 17 OSA priority offence categories. Novel harms may not be intercepted at router level.</div>
              <div>• Age-aware routing depends on the user's configured age setting — Orus does not perform independent age verification.</div>
            </div>
          </div>
          <div class="tp-section-header">${e("safety.carousel.user_resp_heading","👤 User Responsibilities")}</div>
          <div class="disclaimer-card">
            <p>${e("safety.carousel.user_resp_desc","Users must obtain consent for all recordings. Do not use Orus to impersonate real people, public figures, or organisations. Generating content that falsely represents another person is prohibited and may violate applicable law.")}</p>
          </div>
          <div class="tp-section-header">${e("safety.carousel.regulatory_heading","📜 Regulatory Alignment")}</div>
          <div style="background: rgba(30,41,59,0.4); border: 1px solid rgba(148,163,184,0.1); border-radius: 8px; padding: 12px; font-size: 12px;">
            <div>• <strong>Online Safety Act 2023</strong> — §§9, 11, 12 (duty of care)</div>
            <div>• <strong>Schedule 7</strong> — 17 priority offence categories implemented</div>
            <div>• <strong>Ofcom Codes of Practice</strong> — proportionate content safety measures</div>
            <div>• <strong>Fraud Act 2006 / Terrorism Acts / Suicide Act 1961</strong></div>
            <div>• <strong>National Security Act 2023</strong> — foreign interference prevention</div>
          </div>
        </div>

        ${this._renderCarouselDots(5)}
      </div>
    `}_renderDisclaimersCarousel(){return c`
      <div class="about-content-carousel">
        <!-- Card 0: Index -->
        <div class="about-card hero ${this._cardClass(0)} ${this.isCardDragging?"dragging":""}">
          <h2>⚠️ Disclaimers</h2>
          <p style="font-size: 12px; color: #94a3b8; margin-bottom: 16px;">Orus is a local-first AI assistant. AI outputs may be inaccurate.</p>
          <div style="display:flex;flex-direction:column;gap:6px;margin:0 0 16px;">
            <button @click=${()=>this._goToCard(1)} class="about-chip-btn" style="display:flex;align-items:center;gap:10px;text-align:left;border-radius:8px;padding:10px 14px;font-size:13px;justify-content:space-between;" title="AI-Generated Content">
              <span>🤖 AI-Generated Content</span><span style="opacity:0.5;font-size:11px;">›</span>
            </button>
            <button @click=${()=>this._goToCard(2)} class="about-chip-btn" style="display:flex;align-items:center;gap:10px;text-align:left;border-radius:8px;padding:10px 14px;font-size:13px;justify-content:space-between;" title="Privacy & Data">
              <span>🔒 Privacy & Data</span><span style="opacity:0.5;font-size:11px;">›</span>
            </button>
            <button @click=${()=>this._goToCard(3)} class="about-chip-btn" style="display:flex;align-items:center;gap:10px;text-align:left;border-radius:8px;padding:10px 14px;font-size:13px;justify-content:space-between;" title="Media & Hardware">
              <span>📹 Media & Hardware</span><span style="opacity:0.5;font-size:11px;">›</span>
            </button>
            <button @click=${()=>this._goToCard(4)} class="about-chip-btn" style="display:flex;align-items:center;gap:10px;text-align:left;border-radius:8px;padding:10px 14px;font-size:13px;justify-content:space-between;" title="AI Accuracy & Features">
              <span>⚡ AI Accuracy & Features</span><span style="opacity:0.5;font-size:11px;">›</span>
            </button>
          </div>
          <p style="font-size:12px;color:#64748b;margin-top:4px;">
            By <strong style="color:#a5b4fc;">Comet Game Studio Ltd</strong> · Transparency & Responsibility
          </p>
        </div>

        <div class="about-card ${this._cardClass(1)}">
          <h2>${e("disclaimers.card1.heading","⚠️ Disclaimers")}</h2>
          <p style="font-size: 12px; color: #94a3b8; margin-bottom: 12px;">${e("disclaimers.card1.intro","Orus is a local-first AI assistant. AI outputs may be inaccurate. Users remain responsible for verifying important outputs, obtaining consent, and securing the host device.")}</p>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">${e("disclaimers.ai_content.title","🤖 AI-Generated Content")}</div>
            <p>${e("disclaimers.ai_content.desc","Orus uses Phi-4, Whisper, and Orpheus TTS to generate text, speech, visual effects, 3D assets, and video. AI outputs may be inaccurate, contain hallucinations, biases, or inappropriate content. Users remain responsible for reviewing all AI-generated content before professional, commercial, legal, medical, or public use.")}</p>
          </div>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">${e("disclaimers.privacy_data_storage.title","🔒 Privacy & Data Storage")}</div>
            <p>${e("disclaimers.privacy_data_storage.desc","User data — including conversations, memories, documents, and voice recordings — is stored locally. Microsoft Store and Windows platform services have their own telemetry policies. The User is responsible for complying with applicable privacy laws (GDPR, CCPA, etc.) in their jurisdiction.")}</p>
          </div>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">${e("disclaimers.voice_audio.title","🎤 Voice & Audio Processing")}</div>
            <p>${e("disclaimers.voice_audio.desc","Audio is processed locally via Whisper. In Meeting Mode, Orus may process system audio via loopback. Users must obtain appropriate consent before recording or processing audio from other participants.")}</p>
          </div>
        </div>

        <div class="about-card ${this._cardClass(2)}">
          <h2>${e("disclaimers.card2.heading","⚠️ Disclaimers")}</h2>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">${e("disclaimers.webcam_face.title","📹 Webcam & Face Capture")}</div>
            <p>${e("disclaimers.webcam_face.desc","Face detection uses MediaPipe (Apache 2.0) — no facial data is transmitted externally. Face mesh data is used solely for real-time 3D visualisation and is not stored unless the user explicitly saves a session state.")}</p>
          </div>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">${e("disclaimers.gpu_hardware.title","⚡ GPU & Hardware Usage")}</div>
            <p>${e("disclaimers.gpu_hardware.desc","Orus performs GPU-intensive operations. Extended use may increase GPU temperature and power consumption. Comet Game Studio Ltd is not liable for hardware damage resulting from use of the Software.")}</p>
          </div>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">${e("disclaimers.network_access.title","🌐 Network & Access")}</div>
            <p>${e("disclaimers.network_access.desc","No remote access is enabled by default. The User is solely responsible for securing the host device and local network, managing access credentials, and understanding security implications of any network exposure.")}</p>
          </div>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">${e("disclaimers.memory_rag.title","📊 Memory & RAG System")}</div>
            <p>${e("disclaimers.memory_rag.desc","The memory system stores conversation summaries in local JSON and SQLite files. The system may occasionally retrieve incorrect or outdated information. Users should periodically review stored memories for accuracy.")}</p>
          </div>
        </div>

        <div class="about-card ${this._cardClass(3)}">
          <h2>${e("disclaimers.card3.heading","⚠️ Disclaimers")}</h2>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">${e("disclaimers.document_processing.title","📄 Document Processing")}</div>
            <p>${e("disclaimers.document_processing.desc","Documents (PDF, DOCX, Excel, images) are processed using pdfplumber, python-docx, openpyxl, and Tesseract OCR. OCR accuracy varies by document quality. Verify extracted content before critical decisions. All processing is local.")}</p>
          </div>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">${e("disclaimers.ms_store_licensing.title","🏪 Microsoft Store & Licensing")}</div>
            <p>${e("disclaimers.ms_store_licensing.desc","Licence validation requires periodic connectivity to Microsoft Store services. A 3-day offline grace period applies. Hardware ID changes (e.g., motherboard replacement) may require licence transfer via customer support.")}</p>
          </div>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">${e("disclaimers.experimental_features.title","🔬 Experimental Features")}</div>
            <p>${e("disclaimers.experimental_features.desc",'SF3D, Boltzmann Brain, and Game Engine are experimental and may be unstable or change significantly between versions. Provided on an "as-is" basis without warranty.')}</p>
          </div>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">${e("disclaimers.tts_limitations.title","🗣️ Text-to-Speech Limitations")}</div>
            <p>${e("disclaimers.tts_limitations.desc","TTS may malfunction with special characters, malformed text, or unusually long sequences. If voice output is stuck or looping, click Stop or refresh your browser.")}</p>
          </div>
        </div>

        <div class="about-card ${this._cardClass(4)}">
          <h2>${e("disclaimers.card4.heading","⚠️ Disclaimers")}</h2>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">${e("disclaimers.ai_accuracy.title","⚠️ AI Accuracy & Knowledge Limitations")}</div>
            <p>${e("disclaimers.ai_accuracy.desc","Phi-4 Multimodal (14B) can and does make mistakes. Always double-check important outputs before relying on them in professional, legal, medical, or business contexts.")}</p>
          </div>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">${e("disclaimers.knowledge_cutoff.title","📅 Phi-4 Knowledge Cutoff")}</div>
            <p>${e("disclaimers.knowledge_cutoff.desc","Training data cutoff: approximately October–November 2024. Responses about current affairs, recent software releases, or recent regulatory changes may be outdated. Use the Webber research agent to introduce more recent context.")}</p>
          </div>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">${e("disclaimers.feature_availability.title","🔧 Feature Availability")}</div>
            <p>${e("disclaimers.feature_availability.desc","Features may be enabled, disabled, or modified due to development needs, legal obligations, business decisions, or security considerations. Significant changes will be communicated via release notes where practical.")}</p>
          </div>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">${e("disclaimers.content_rating.title","🏷️ Content Rating & Accessibility")}</div>
            <p>${e("disclaimers.content_rating.desc","Designed for general audiences with an Answer Router safety layer. Parental discretion advised for AI probabilistic outputs. Orus supports keyboard navigation and system-level accessibility settings. 3D and voice-first modes may present challenges for some users. Accessibility feedback is welcome.")}</p>
          </div>
          <p style="color: #64748b; font-size: 11px; margin-top: 16px; text-align: center;">
            ${e("disclaimers.footer.updated","Last updated: March 24, 2026 · Continued use constitutes acceptance of updates.")}
          </p>
        </div>

        ${this._renderCarouselDots(5)}
      </div>
    `}_renderEULA(){return c`
      <h2>${e("eula.popup.heading","End-User Licence Agreement")}</h2>
      <div class="legal-effective-date">${e("eula.popup.effective_date","Effective Date: March 24, 2026")}</div>

      <div class="legal-section">
        <p>
          ${e("eula.popup.intro",'This End-User Licence Agreement ("Agreement") is a legal agreement between you ("User") and Comet Game Studio Ltd ("Licensor") for the use of the Orus AI System software ("Software"). By installing, copying, or otherwise using the Software, you agree to be bound by the terms of this Agreement.')}
        </p>
      </div>

      <div class="legal-section">
        <h3>${e("eula.popup.s1.heading","1. Grant of Licence")}</h3>
        <p>
          ${e("eula.popup.s1.p1","Subject to the terms of this Agreement and your valid subscription, the Licensor grants you a limited, non-exclusive, non-transferable, revocable licence to install and use the Software on a single host device identified by its hardware fingerprint (HWID). The licence is personal and may not be shared, sublicensed, or transferred to another party or device without prior written consent from the Licensor.")}
        </p>
        <p>
          ${e("eula.popup.s1.p2","The licensed host device may permit browser-based client access from other devices on the same local network or authorised environment. No remote internet access is included unless expressly stated in a later version of these terms.")}
        </p>
      </div>

      <div class="legal-section">
        <h3>${e("eula.popup.s2.heading","2. Subscription Tiers & Add-On Packs")}</h3>
        <p>
          ${e("eula.popup.s2.intro","Access to the Software is provided through tiered subscriptions. Available tiers and their features are described at the time of purchase. The Licensor reserves the right to modify tier features, pricing, and availability at any time with reasonable notice. The following tiers are currently offered:")}
        </p>
        <ul>
          <li><strong>${e("eula.popup.s2.tier_3day.title","3-Day Access Pass:")}</strong> ${e("eula.popup.s2.tier_3day.desc","Full Pro-tier access for 72 hours")}</li>
          <li><strong>${e("eula.popup.s2.tier_starter.title","Starter (8–12 GB VRAM):")}</strong> ${e("eula.popup.s2.tier_starter.desc","TTS, STT, Memory RAG, Living Menu, Text Chat, Music Manager")}</li>
          <li><strong>${e("eula.popup.s2.tier_pro.title","Pro (12–16 GB VRAM):")}</strong> ${e("eula.popup.s2.tier_pro.desc","All Starter features + Vision, LoRA, Training Lab, Face Capture, advanced visual workflows, BrainStorm, Presenter, Canvas, Webber, TaskChat, Discord, Meeting Mode")}</li>
          <li><strong>${e("eula.popup.s2.tier_enterprise.title","Enterprise (16–24 GB VRAM):")}</strong> ${e("eula.popup.s2.tier_enterprise.desc","All Pro features + SF3D, Boltzmann Brain, Game Engine, Live Vision, Defrag 3D, all models")}</li>
        </ul>
        <p>
          ${e("eula.popup.s2.pricing","Current pricing for each tier is displayed in the Microsoft Store at the time of purchase. Subscriptions are monthly.")}
        </p>
        <p>
          ${e("eula.popup.s2.addons_intro","The following consumable add-on packs are available for individual purchase via the Microsoft Store. These are credit-based consumables that unlock specific features:")}
        </p>
        <ul>
          <li><strong>${e("eula.popup.s2.addon_visual.title","Visual Workflow Credit Pack:")}</strong> ${e("eula.popup.s2.addon_visual.desc","Unlocks screenshot-guided visual workflow credits with Living Machine state saving (Product ID: orus.visualworkflow)")}</li>
        </ul>
        <p>
          ${e("eula.popup.s2.addon_note","Consumable add-ons are managed by the Microsoft Store and tied to your Microsoft account. They are not hardware-bound.")}
        </p>
        <p>
          ${e("eula.popup.s2.orchestration","Subscription controls orchestration and service access, not the existence of the local AI stack. The AI models and software remain on the host device regardless of subscription status.")}
        </p>
      </div>

      <div class="legal-section">
        <h3>${e("eula.popup.s3.heading","3. Host-Device Licence Model")}</h3>
        <p>
          ${e("eula.popup.s3.desc","Your licence is bound to the specific host device on which it is activated using a secure hardware fingerprint. The licensed host runs the Orus service, and devices on the same local network may connect as browser clients. If you replace hardware components that alter the fingerprint, you must contact the Licensor to transfer your licence.")}
        </p>
      </div>

      <div class="legal-section">
        <h3>${e("eula.popup.s4.heading","4. Restrictions")}</h3>
        <p>${e("eula.popup.s4.intro","You may not:")}</p>
        <ol>
          <li>${e("eula.popup.s4.r1","Reverse engineer, decompile, or disassemble the Software, except where applicable law explicitly permits such activity.")}</li>
          <li>${e("eula.popup.s4.r2","Redistribute, sublicense, lease, or rent the Software to third parties.")}</li>
          <li>${e("eula.popup.s4.r3","Remove, alter, or obscure any proprietary notices, labels, or marks on the Software.")}</li>
          <li>${e("eula.popup.s4.r4","Use the Software for any unlawful purpose, or in violation of any applicable laws or regulations.")}</li>
          <li>${e("eula.popup.s4.r5","Circumvent or attempt to circumvent the hardware-binding, licensing, or authentication mechanisms.")}</li>
          <li>${e("eula.popup.s4.r6","Use outputs generated by the Software (including AI-generated text, audio, video, or 3D assets) in a manner that violates applicable law or the rights of any third party.")}</li>
          <li>${e("eula.popup.s4.r7","Host the Software as a remote service accessible over the public internet unless expressly stated in a later version of these terms.")}</li>
        </ol>
      </div>

      <div class="legal-section">
        <h3>${e("eula.popup.s5.heading","5. AI-Generated Content")}</h3>
        <p>
          ${e("eula.popup.s5.desc","The Software utilises artificial intelligence models to generate text, speech, visual effects, and other content. The Licensor does not guarantee the accuracy, completeness, or appropriateness of AI-generated content. The User is solely responsible for reviewing and verifying any content generated by the Software before use in any production, commercial, or public context.")}
        </p>
      </div>

      <div class="legal-section">
        <h3>${e("eula.popup.s6.heading","6. Data and Privacy")}</h3>
        <p>
          ${e("eula.popup.s6.desc","User data, including conversation history, memory files, submitted documents, and voice recordings, is stored locally on the host device. The Software does not transmit personal data to external servers unless the User explicitly enables integrations. Microsoft Store and Windows platform services may collect their own telemetry under their own terms. The Licensor respects user privacy and processes data in accordance with applicable data protection laws. See the Privacy Policy tab for full details.")}
        </p>
      </div>

      <div class="legal-section">
        <h3>${e("eula.popup.s7.heading","7. Termination")}</h3>
        <p>
          ${e("eula.popup.s7.desc","This Agreement is effective until terminated. The Licensor may terminate this Agreement immediately if you breach any of its terms. Upon termination, you must cease all use of the Software and destroy all copies. A 3-day grace period is provided after subscription expiration before feature access is revoked.")}
        </p>
      </div>

      <div class="legal-section">
        <h3>${e("eula.popup.s8.heading","8. Disclaimer of Warranties")}</h3>
        <p>
          ${e("eula.popup.s8.desc",'THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. THE LICENSOR DOES NOT WARRANT THAT THE SOFTWARE WILL BE ERROR-FREE OR UNINTERRUPTED.')}
        </p>
      </div>

      <div class="legal-section">
        <h3>${e("eula.popup.s9.heading","9. Limitation of Liability")}</h3>
        <p>
          ${e("eula.popup.s9.desc","IN NO EVENT SHALL THE LICENSOR BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR IN CONNECTION WITH THE USE OF THE SOFTWARE, REGARDLESS OF THE CAUSE OF ACTION OR THE THEORY OF LIABILITY, EVEN IF THE LICENSOR HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THE LICENSOR'S TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY THE USER FOR THE SOFTWARE IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.")}
        </p>
      </div>

      <div class="legal-section">
        <h3>${e("eula.popup.s10.heading","10. Governing Law")}</h3>
        <p>
          ${e("eula.popup.s10.desc","This Agreement shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions. Any disputes arising under this Agreement shall be subject to the exclusive jurisdiction of the courts of England and Wales.")}
        </p>
      </div>

      <div class="legal-section">
        <h3>${e("eula.popup.s11.heading","11. Contact")}</h3>
        <p>
          ${e("eula.popup.s11.desc","For questions regarding this Agreement, contact Comet Game Studio Ltd at the support channels provided within the Software or at the Licensor's official website.")}
        </p>
      </div>
    `}_renderThirdParty(){return c`
      <h2>${e("thirdparty.popup.heading","Third Party Notices")}</h2>
      <p>
        ${e("thirdparty.popup.intro","Orus incorporates third-party open source software components. The following is a summary of those components and their respective licenses. Full license texts are available in each package's repository or distribution.")}
      </p>

      <!-- Frontend (npm) Dependencies -->
      <div class="tp-section-header">${e("thirdparty.popup.frontend_section","🌐 Frontend Dependencies (npm)")}</div>
      <table class="tp-table">
        <thead>
          <tr><th>Package</th><th>Version</th><th>License</th><th>Description</th></tr>
        </thead>
        <tbody>
          <tr><td>lit</td><td>^3.3.0</td><td><span class="tp-license-badge bsd">BSD-3</span></td><td>Web component library for building the Orus UI</td></tr>
          <tr><td>@lit/context</td><td>^1.1.5</td><td><span class="tp-license-badge bsd">BSD-3</span></td><td>Context protocol for Lit components</td></tr>
          <tr><td>three</td><td>^0.176.0</td><td><span class="tp-license-badge mit">MIT</span></td><td>3D graphics library for WebGL/WebGPU rendering</td></tr>
          <tr><td>react</td><td>^18.2.0</td><td><span class="tp-license-badge mit">MIT</span></td><td>UI library for React-based components</td></tr>
          <tr><td>react-dom</td><td>^18.2.0</td><td><span class="tp-license-badge mit">MIT</span></td><td>React DOM rendering</td></tr>
          <tr><td>framer-motion</td><td>^11.0.0</td><td><span class="tp-license-badge mit">MIT</span></td><td>Animation library for UI transitions</td></tr>
          <tr><td>tone</td><td>^14.9.0</td><td><span class="tp-license-badge mit">MIT</span></td><td>Web audio framework for sound synthesis</td></tr>
          <tr><td>zod</td><td>^3.25.76</td><td><span class="tp-license-badge mit">MIT</span></td><td>TypeScript-first schema validation</td></tr>
          <tr><td>zustand</td><td>^5.0.11</td><td><span class="tp-license-badge mit">MIT</span></td><td>Lightweight state management</td></tr>
          <tr><td>uuid</td><td>^9.0.1</td><td><span class="tp-license-badge mit">MIT</span></td><td>UUID generation</td></tr>
          <tr><td>cannon-es</td><td>^0.20.0</td><td><span class="tp-license-badge mit">MIT</span></td><td>Physics engine for 3D simulations</td></tr>
          <tr><td>html2canvas</td><td>^1.4.1</td><td><span class="tp-license-badge mit">MIT</span></td><td>HTML-to-canvas screenshot rendering</td></tr>
          <tr><td>@monaco-editor/react</td><td>^4.7.0</td><td><span class="tp-license-badge mit">MIT</span></td><td>Code editor component</td></tr>
          <tr><td>lucide-react</td><td>^0.344.0</td><td><span class="tp-license-badge isc">ISC</span></td><td>Icon set for React</td></tr>
          <tr><td>zzfx</td><td>^1.0.0</td><td><span class="tp-license-badge mit">MIT</span></td><td>Micro sound effects synthesizer</td></tr>
        </tbody>
      </table>

      <!-- Backend (npm) Dependencies -->
      <div class="tp-section-header">${e("thirdparty.popup.backend_section","🖥️ Backend Dependencies (npm)")}</div>
      <table class="tp-table">
        <thead>
          <tr><th>Package</th><th>Version</th><th>License</th><th>Description</th></tr>
        </thead>
        <tbody>
          <tr><td>express</td><td>^4.18.2</td><td><span class="tp-license-badge mit">MIT</span></td><td>Web framework for Node.js server</td></tr>
          <tr><td>axios</td><td>^1.6.2</td><td><span class="tp-license-badge mit">MIT</span></td><td>HTTP client for API requests</td></tr>
          <tr><td>cors</td><td>^2.8.5</td><td><span class="tp-license-badge mit">MIT</span></td><td>Cross-origin resource sharing middleware</td></tr>
          <tr><td>multer</td><td>^2.0.2</td><td><span class="tp-license-badge mit">MIT</span></td><td>Multipart form data parsing for file uploads</td></tr>
          <tr><td>ws</td><td>^8.18.0</td><td><span class="tp-license-badge mit">MIT</span></td><td>WebSocket implementation for streaming</td></tr>
          <tr><td>form-data</td><td>^4.0.0</td><td><span class="tp-license-badge mit">MIT</span></td><td>Form data encoding</td></tr>
          <tr><td>xlsx</td><td>^0.18.5</td><td><span class="tp-license-badge apache">Apache-2.0</span></td><td>Spreadsheet parsing and generation</td></tr>
        </tbody>
      </table>

      <!-- Python Dependencies (verified via pip-licenses Feb 7, 2026) -->
      <div class="tp-section-header">${e("thirdparty.popup.python_section","🐍 Python Dependencies (pip — verified via pip-licenses)")}</div>
      <table class="tp-table">
        <thead>
          <tr><th>Package</th><th>Version</th><th>License</th><th>Description</th></tr>
        </thead>
        <tbody>
          <tr><td>torch / torchvision / torchaudio</td><td>2.9.0</td><td><span class="tp-license-badge bsd">BSD-3</span></td><td>PyTorch deep learning framework with CUDA GPU acceleration</td></tr>
          <tr><td>transformers</td><td>4.57.3</td><td><span class="tp-license-badge apache">Apache-2.0</span></td><td>Hugging Face Transformers for Phi-4 model inference</td></tr>
          <tr><td>vllm</td><td>0.13.0</td><td><span class="tp-license-badge apache">Apache-2.0</span></td><td>High-throughput LLM inference engine with PagedAttention</td></tr>
          <tr><td>fastapi</td><td>0.128.5</td><td><span class="tp-license-badge mit">MIT</span></td><td>Modern async Python web framework for inference server</td></tr>
          <tr><td>uvicorn</td><td>0.18.0</td><td><span class="tp-license-badge bsd">BSD-3</span></td><td>ASGI server for FastAPI</td></tr>
          <tr><td>pydantic</td><td>2.12.5</td><td><span class="tp-license-badge mit">MIT</span></td><td>Data validation using Python type annotations</td></tr>
          <tr><td>accelerate</td><td>1.12.0</td><td><span class="tp-license-badge apache">Apache-2.0</span></td><td>Hugging Face library for distributed training and inference</td></tr>
          <tr><td>peft</td><td>0.13.2</td><td><span class="tp-license-badge apache">Apache-2.0</span></td><td>Parameter-efficient fine-tuning (LoRA adapters)</td></tr>
          <tr><td>datasets</td><td>4.5.0</td><td><span class="tp-license-badge apache">Apache-2.0</span></td><td>Hugging Face datasets library for training data</td></tr>
          <tr><td>sentence-transformers</td><td>3.4.1</td><td><span class="tp-license-badge apache">Apache-2.0</span></td><td>Embedding models for semantic memory retrieval</td></tr>
          <tr><td>speechbrain</td><td>1.0.3</td><td><span class="tp-license-badge apache">Apache-2.0</span></td><td>Speaker diarization with ECAPA-TDNN embeddings</td></tr>
          <tr><td>diffusers</td><td>0.36.0</td><td><span class="tp-license-badge apache">Apache-2.0</span></td><td>Diffusion models for image generation</td></tr>
          <tr><td>llama-cpp-python</td><td>0.3.16</td><td><span class="tp-license-badge mit">MIT</span></td><td>GGUF model loading for Orpheus TTS</td></tr>
          <tr><td>onnxruntime-gpu</td><td>1.23.2</td><td><span class="tp-license-badge mit">MIT</span></td><td>ONNX runtime with GPU acceleration for SNAC decoder</td></tr>
          <tr><td>openai-whisper</td><td>20250625</td><td><span class="tp-license-badge mit">MIT</span></td><td>Speech-to-text (90+ languages)</td></tr>
          <tr><td>mediapipe</td><td>0.10.32</td><td><span class="tp-license-badge apache">Apache-2.0</span></td><td>Face detection and landmarks for face capture</td></tr>
          <tr><td>tiktoken</td><td>0.12.0</td><td><span class="tp-license-badge mit">MIT</span></td><td>Token counting for context management</td></tr>
          <tr><td>flash-attn</td><td>2.8.3</td><td><span class="tp-license-badge bsd">BSD</span></td><td>Flash Attention for efficient transformer inference</td></tr>
          <tr><td>keyboard</td><td>0.13.5</td><td><span class="tp-license-badge mit">MIT</span></td><td>Input automation for Windows Bridge (_input_compat layer)</td></tr>
          <tr><td>mouse</td><td>0.7.1</td><td><span class="tp-license-badge mit">MIT</span></td><td>Mouse automation for Windows Bridge (_input_compat layer)</td></tr>
          <tr><td>pillow</td><td>11.0.0</td><td><span class="tp-license-badge other">HPND</span></td><td>Image processing library</td></tr>
          <tr><td>opencv-python-headless</td><td>4.13.0.92</td><td><span class="tp-license-badge apache">Apache-2.0</span></td><td>Computer vision for image processing</td></tr>
          <tr><td>numpy</td><td>2.2.6</td><td><span class="tp-license-badge bsd">BSD-3</span></td><td>Numerical computing library</td></tr>
          <tr><td>scipy</td><td>1.15.1</td><td><span class="tp-license-badge bsd">BSD-3</span></td><td>Scientific computing for spectral clustering in diarization</td></tr>
          <tr><td>pandas</td><td>3.0.0</td><td><span class="tp-license-badge bsd">BSD-3</span></td><td>Data manipulation and spreadsheet processing</td></tr>
          <tr><td>soundfile</td><td>0.12.1</td><td><span class="tp-license-badge bsd">BSD-3</span></td><td>Audio file I/O</td></tr>
          <tr><td>nltk</td><td>3.9.2</td><td><span class="tp-license-badge apache">Apache-2.0</span></td><td>Natural language toolkit for tokenisation</td></tr>
          <tr><td>pdfplumber</td><td>0.11.9</td><td><span class="tp-license-badge mit">MIT</span></td><td>PDF document parsing and text extraction</td></tr>
          <tr><td>python-docx</td><td>1.2.0</td><td><span class="tp-license-badge mit">MIT</span></td><td>Microsoft Word document processing</td></tr>
          <tr><td>openpyxl</td><td>3.1.5</td><td><span class="tp-license-badge mit">MIT</span></td><td>Excel spreadsheet reading and writing</td></tr>
          <tr><td>httpx</td><td>0.28.1</td><td><span class="tp-license-badge bsd">BSD-3</span></td><td>Async HTTP client for Launcher health checks</td></tr>
          <tr><td>websockets</td><td>16.0</td><td><span class="tp-license-badge bsd">BSD-3</span></td><td>WebSocket protocol for real-time streaming</td></tr>
          <tr><td>playwright</td><td>1.58.0</td><td><span class="tp-license-badge apache">Apache-2.0</span></td><td>Headless browser for Remote Pixel server-side rendering</td></tr>
          <tr><td>bitsandbytes</td><td>0.49.1</td><td><span class="tp-license-badge mit">MIT</span></td><td>Quantization for memory-efficient model training</td></tr>
          <tr><td>rapidfuzz</td><td>3.14.3</td><td><span class="tp-license-badge mit">MIT</span></td><td>Fuzzy string matching for name resolution</td></tr>
          <tr><td>requests</td><td>2.32.5</td><td><span class="tp-license-badge apache">Apache-2.0</span></td><td>HTTP library for API communications</td></tr>
          <tr><td>cryptography</td><td>46.0.4</td><td><span class="tp-license-badge apache">Apache-2.0 / BSD-3</span></td><td>Fernet encryption for license management</td></tr>
          <tr><td>langdetect</td><td>1.0.9</td><td><span class="tp-license-badge apache">Apache-2.0</span></td><td>Language detection for multilingual STT pipeline</td></tr>
          <tr><td>aiohttp</td><td>3.13.3</td><td><span class="tp-license-badge apache">Apache-2.0</span></td><td>Async HTTP for Discord file downloads</td></tr>
          <tr><td>beautifulsoup4</td><td>4.14.3</td><td><span class="tp-license-badge mit">MIT</span></td><td>HTML parsing for web content extraction</td></tr>
          <tr><td>lxml</td><td>6.0.2</td><td><span class="tp-license-badge bsd">BSD-3</span></td><td>XML/HTML processing</td></tr>
          <tr><td>soprano-tts</td><td>0.2.0</td><td><span class="tp-license-badge apache">Apache-2.0</span></td><td>Soprano TTS engine for Turkish language voice synthesis</td></tr>
        </tbody>
      </table>

      <!-- Build & Dev Tools -->
      <div class="tp-section-header">${e("thirdparty.popup.build_section","🔧 Build & Development Tools")}</div>
      <table class="tp-table">
        <thead>
          <tr><th>Package</th><th>Version</th><th>License</th><th>Description</th></tr>
        </thead>
        <tbody>
          <tr><td>vite</td><td>^6.2.0</td><td><span class="tp-license-badge mit">MIT</span></td><td>Frontend build tool and dev server</td></tr>
          <tr><td>esbuild</td><td>^0.27.2</td><td><span class="tp-license-badge mit">MIT</span></td><td>JavaScript/TypeScript bundler for server</td></tr>
          <tr><td>typescript</td><td>^5.3.3</td><td><span class="tp-license-badge apache">Apache-2.0</span></td><td>TypeScript compiler</td></tr>
          <tr><td>@vitejs/plugin-react</td><td>^4.2.0</td><td><span class="tp-license-badge mit">MIT</span></td><td>Vite plugin for React</td></tr>
          <tr><td>concurrently</td><td>^8.2.2</td><td><span class="tp-license-badge mit">MIT</span></td><td>Run multiple scripts concurrently</td></tr>
          <tr><td>eslint</td><td>^9.39.2</td><td><span class="tp-license-badge mit">MIT</span></td><td>JavaScript/TypeScript linter</td></tr>
          <tr><td>stylelint</td><td>^17.0.0</td><td><span class="tp-license-badge mit">MIT</span></td><td>CSS linter</td></tr>
          <tr><td>pyinstaller</td><td>6.18.0</td><td><span class="tp-license-badge other">GPLv2 + Bootloader Exception</span></td><td>Desktop application packaging (build tool only — see Compliance tab)</td></tr>
        </tbody>
      </table>

      <!-- AI Models -->
      <div class="tp-section-header">${e("thirdparty.popup.ai_models_section","🤖 AI Models & Weights")}</div>
      <table class="tp-table">
        <thead>
          <tr><th>Model</th><th>License</th><th>Usage</th></tr>
        </thead>
        <tbody>
          <tr><td>Microsoft Phi-4 Multimodal</td><td><span class="tp-license-badge mit">MIT</span></td><td>Core LLM for reasoning, conversation, and tool calling</td></tr>
          <tr><td>OpenAI Whisper Large v3 Turbo</td><td><span class="tp-license-badge mit">MIT</span></td><td>Speech-to-text (90+ languages)</td></tr>
          <tr><td>Orpheus TTS (GGUF)</td><td><span class="tp-license-badge apache">Apache-2.0</span></td><td>Primary text-to-speech with expressive voice</td></tr>
          <tr><td>Soprano TTS (ONNX)</td><td><span class="tp-license-badge apache">Apache-2.0</span></td><td>Turkish language voice synthesis</td></tr>
          <tr><td>Stability AI SF3D</td><td><span class="tp-license-badge other">Stability AI Community</span></td><td>Single-image to 3D mesh generation (commercial use subject to Stability AI Community License terms)</td></tr>
          <tr><td>MediaPipe (Google)</td><td><span class="tp-license-badge apache">Apache-2.0</span></td><td>Face detection and landmarks for face capture</td></tr>
          <tr><td>SpeechBrain ECAPA-TDNN</td><td><span class="tp-license-badge apache">Apache-2.0</span></td><td>Speaker embedding for diarization</td></tr>
          <tr><td>SNAC 24kHz (Neural Audio Codec)</td><td><span class="tp-license-badge mit">MIT</span></td><td>Audio codec for Orpheus TTS decoding</td></tr>
        </tbody>
      </table>

      <!-- Removed Dependencies -->
      <div class="tp-section-header">${e("thirdparty.popup.replaced_section","🗑️ Previously Replaced Dependencies")}</div>
      <p style="color: #94a3b8; font-size: 12px; margin-bottom: 8px;">${e("thirdparty.popup.replaced_intro","The following packages were replaced with better alternatives during development:")}</p>
      <table class="tp-table">
        <thead>
          <tr><th>Package</th><th>Replacement</th></tr>
        </thead>
        <tbody>
          <tr><td>PyAutoGUI</td><td>Custom input layer using keyboard (MIT) + mouse (MIT)</td></tr>
          <tr><td>InsightFace</td><td>MediaPipe (Apache-2.0)</td></tr>
          <tr><td>pyannote.audio</td><td>SpeechBrain ECAPA-TDNN (Apache-2.0)</td></tr>
          <tr><td>Coqui TTS</td><td>Orpheus TTS (Apache-2.0)</td></tr>
        </tbody>
      </table>

      <p style="color: #64748b; font-size: 11px; margin-top: 16px;">
        ${e("thirdparty.popup.verified_date","Dependency information last verified March 2026.")}
      </p>

      <!-- ================================================================= -->
      <!-- LEGAL ATTRIBUTIONS — Required by Apache-2.0 §4.4, BSD-3, MIT     -->
      <!-- ================================================================= -->
      <div class="tp-section-header">${e("thirdparty.popup.attributions_section","📜 Legally Required Attributions & NOTICE Texts")}</div>
      <p style="color: #94a3b8; font-size: 11.5px; line-height: 1.6; margin-bottom: 16px;">
        ${e("thirdparty.popup.attributions_intro","The following copyright notices, NOTICE file contents, and attribution statements are reproduced here as required by Apache License 2.0 §4.4 (NOTICE file reproduction), BSD 3-Clause §1 (copyright retention), and MIT License (copyright + permission notice). This section constitutes the Third Party Notices for the Orus distribution.")}
      </p>

      <!-- PyTorch -->
      <div class="disclaimer-card">
        <div class="disclaimer-card-title">PyTorch (torch / torchvision / torchaudio)</div>
        <p style="font-size: 11px; color: #a5b4fc;">BSD-3-Clause</p>
        <p>Copyright (c) 2016- Facebook, Inc. (Adam Paszke)<br/>
        Copyright (c) 2016 Facebook Inc.<br/>
        Copyright (c) 2015 Google Inc. All rights reserved.<br/>
        Copyright (c) 2019-2020 Kakao Brain<br/>
        All other contributions: Copyright (c) 2015, 2016 the respective contributors.<br/>
        All rights reserved.</p>
        <p style="font-size: 10.5px; color: #64748b; margin-top: 6px;">
          Redistribution and use in source and binary forms, with or without modification,
          are permitted provided that the following conditions are met: redistributions of
          source code must retain the above copyright notice; redistributions in binary form
          must reproduce the above copyright notice in documentation and/or other materials;
          neither the name Facebook nor the names of its contributors may be used to endorse
          products derived from this software without specific prior written permission.
        </p>
      </div>

      <!-- Hugging Face (transformers, accelerate, diffusers, datasets, peft) -->
      <div class="disclaimer-card">
        <div class="disclaimer-card-title">Hugging Face (transformers, accelerate, diffusers, datasets, peft, safetensors)</div>
        <p style="font-size: 11px; color: #a5b4fc;">Apache-2.0</p>
        <p>Copyright 2018- The Hugging Face team. All rights reserved.</p>
        <p style="font-size: 10.5px; color: #64748b; margin-top: 6px;">
          Licensed under the Apache License, Version 2.0. You may obtain a copy at
          <a href="http://www.apache.org/licenses/LICENSE-2.0" style="color: #818cf8;">apache.org/licenses/LICENSE-2.0</a>.
        </p>
      </div>

      <!-- sentence-transformers (has NOTICE file) -->
      <div class="disclaimer-card">
        <div class="disclaimer-card-title">sentence-transformers</div>
        <p style="font-size: 11px; color: #a5b4fc;">Apache-2.0 — NOTICE</p>
        <p>Copyright 2019 Ubiquitous Knowledge Processing (UKP) Lab, Technische Universit&auml;t Darmstadt</p>
      </div>

      <!-- vLLM -->
      <div class="disclaimer-card">
        <div class="disclaimer-card-title">vLLM</div>
        <p style="font-size: 11px; color: #a5b4fc;">Apache-2.0</p>
        <p>Copyright 2023 The vLLM Team. Licensed under the Apache License, Version 2.0.</p>
      </div>

      <!-- FastAPI + Pydantic -->
      <div class="disclaimer-card">
        <div class="disclaimer-card-title">FastAPI &amp; Pydantic</div>
        <p style="font-size: 11px; color: #a5b4fc;">MIT</p>
        <p>FastAPI: Copyright (c) 2018 Sebasti&aacute;n Ram&iacute;rez<br/>
        Pydantic: Copyright (c) 2017 to present Pydantic Services Inc. and individual contributors.</p>
        <p style="font-size: 10.5px; color: #64748b; margin-top: 6px;">
          Permission is hereby granted, free of charge, to any person obtaining a copy of this
          software and associated documentation files, to deal in the Software without restriction,
          including without limitation the rights to use, copy, modify, merge, publish, distribute,
          sublicense, and/or sell copies of the Software.
        </p>
      </div>

      <!-- OpenAI Whisper -->
      <div class="disclaimer-card">
        <div class="disclaimer-card-title">OpenAI Whisper</div>
        <p style="font-size: 11px; color: #a5b4fc;">MIT</p>
        <p>Copyright (c) 2022 OpenAI</p>
      </div>

      <!-- Microsoft ONNX Runtime -->
      <div class="disclaimer-card">
        <div class="disclaimer-card-title">ONNX Runtime</div>
        <p style="font-size: 11px; color: #a5b4fc;">MIT</p>
        <p>Copyright (c) Microsoft Corporation. All rights reserved.</p>
      </div>

      <!-- SpeechBrain -->
      <div class="disclaimer-card">
        <div class="disclaimer-card-title">SpeechBrain</div>
        <p style="font-size: 11px; color: #a5b4fc;">Apache-2.0</p>
        <p>Copyright Mirco Ravanelli, Titouan Parcollet &amp; Others. Licensed under the Apache License, Version 2.0.</p>
      </div>

      <!-- MediaPipe -->
      <div class="disclaimer-card">
        <div class="disclaimer-card-title">MediaPipe</div>
        <p style="font-size: 11px; color: #a5b4fc;">Apache-2.0</p>
        <p>Copyright The MediaPipe Authors (Google LLC). Licensed under the Apache License, Version 2.0.</p>
      </div>

      <!-- Playwright (has NOTICE) -->
      <div class="disclaimer-card">
        <div class="disclaimer-card-title">Playwright</div>
        <p style="font-size: 11px; color: #a5b4fc;">Apache-2.0 — NOTICE</p>
        <p>Playwright: Copyright (c) Microsoft Corporation.<br/>
        This software contains code derived from the Puppeteer project
        (<a href="https://github.com/puppeteer/puppeteer" style="color: #818cf8;">github.com/puppeteer/puppeteer</a>),
        available under the Apache 2.0 license.</p>
      </div>

      <!-- langdetect (has NOTICE) -->
      <div class="disclaimer-card">
        <div class="disclaimer-card-title">langdetect</div>
        <p style="font-size: 11px; color: #a5b4fc;">Apache-2.0 — NOTICE</p>
        <p>Copyright (c) 2010-2014 Cybozu Labs, Inc. All rights reserved.<br/>
        Licensed under the Apache License, Version 2.0.</p>
      </div>

      <!-- NumPy / SciPy / pandas -->
      <div class="disclaimer-card">
        <div class="disclaimer-card-title">NumPy, SciPy, pandas</div>
        <p style="font-size: 11px; color: #a5b4fc;">BSD-3-Clause</p>
        <p>NumPy: Copyright (c) 2005-2024, NumPy Developers.<br/>
        SciPy: Copyright (c) 2001-2002 Enthought, Inc. 2003-2024, SciPy Developers.<br/>
        pandas: Copyright (c) 2008-2011, AQR Capital Management, LLC, Lambda Foundry, Inc. and PyData Development Team.</p>
      </div>

      <!-- Pillow -->
      <div class="disclaimer-card">
        <div class="disclaimer-card-title">Pillow</div>
        <p style="font-size: 11px; color: #a5b4fc;">HPND (Historical Permission Notice and Disclaimer)</p>
        <p>Copyright &copy; 1997-2011 by Secret Labs AB. Copyright &copy; 1995-2011 by Fredrik Lundh.
        By obtaining, using, and/or copying this software and/or its associated documentation,
        you agree that you have read, understood, and will comply with the following terms and conditions.</p>
      </div>

      <!-- keyboard + mouse -->
      <div class="disclaimer-card">
        <div class="disclaimer-card-title">keyboard &amp; mouse</div>
        <p style="font-size: 11px; color: #a5b4fc;">MIT</p>
        <p>Copyright (c) 2016 Lucas Boppre Niehues (BoppreH).<br/>
        Used via _input_compat.py shim as MIT-licensed replacement for PyAutoGUI.</p>
      </div>

      <!-- prometheus_client (has NOTICE) -->
      <div class="disclaimer-card">
        <div class="disclaimer-card-title">prometheus_client</div>
        <p style="font-size: 11px; color: #a5b4fc;">Apache-2.0 — NOTICE</p>
        <p>Prometheus instrumentation library for Python applications.
        Copyright 2015 The Prometheus Authors.
        This product bundles decorator 4.0.10 which is available under a &ldquo;2-clause BSD&rdquo; license.</p>
      </div>

      <!-- OpenCV -->
      <div class="disclaimer-card">
        <div class="disclaimer-card-title">OpenCV</div>
        <p style="font-size: 11px; color: #a5b4fc;">Apache-2.0</p>
        <p>Copyright (C) 2000-2024, Intel Corporation; Copyright (C) 2009-2011, Willow Garage Inc.;
        Copyright (C) 2009-2016, NVIDIA Corporation; Copyright (C) 2010-2013, Advanced Micro Devices, Inc.;
        Copyright (C) 2015-2024, OpenCV Foundation; Copyright (C) 2008-2024, Itseez Inc.
        Licensed under the Apache License, Version 2.0.</p>
      </div>

      <!-- Gradio -->
      <div class="disclaimer-card">
        <div class="disclaimer-card-title">Gradio</div>
        <p style="font-size: 11px; color: #a5b4fc;">Apache-2.0</p>
        <p>Copyright 2018-2024 Gradio contributors. Licensed under the Apache License, Version 2.0.
        Source: <a href="https://github.com/gradio-app/gradio" style="color: #818cf8;">github.com/gradio-app/gradio</a></p>
      </div>

      <!-- aiofiles (has NOTICE) -->
      <div class="disclaimer-card">
        <div class="disclaimer-card-title">aiofiles</div>
        <p style="font-size: 11px; color: #a5b4fc;">Apache-2.0 — NOTICE</p>
        <p>Asyncio support for files. Copyright 2016 Tin Tvrtkovic.</p>
      </div>

      <!-- npm key packages -->
      <div class="tp-section-header">🌐 Frontend Copyright Notices</div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">Three.js</div>
        <p style="font-size: 11px; color: #a5b4fc;">MIT</p>
        <p>Copyright &copy; 2010-2025 three.js authors</p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">Lit (lit, @lit/context, @lit/reactive-element)</div>
        <p style="font-size: 11px; color: #a5b4fc;">BSD-3-Clause</p>
        <p>Copyright (c) 2017 Google LLC. All rights reserved.</p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">React &amp; React DOM</div>
        <p style="font-size: 11px; color: #a5b4fc;">MIT</p>
        <p>Copyright (c) Facebook, Inc. and its affiliates.</p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">Tone.js</div>
        <p style="font-size: 11px; color: #a5b4fc;">MIT</p>
        <p>Copyright (c) 2014-2020 Yotam Mann</p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">cannon-es</div>
        <p style="font-size: 11px; color: #a5b4fc;">MIT</p>
        <p>Copyright (c) 2015 cannon.js Authors</p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">Monaco Editor (@monaco-editor/react)</div>
        <p style="font-size: 11px; color: #a5b4fc;">MIT</p>
        <p>Copyright (c) Microsoft Corporation. All rights reserved.</p>
      </div>

      <!-- AI Model Attributions -->
      <div class="tp-section-header">🤖 AI Model Attributions</div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">Microsoft Phi-4 Multimodal</div>
        <p style="font-size: 11px; color: #a5b4fc;">MIT</p>
        <p>Copyright (c) Microsoft Corporation. All rights reserved.<br/>
        Model: microsoft/Phi-4-multimodal-instruct<br/>
        <a href="https://huggingface.co/microsoft/Phi-4-multimodal-instruct" style="color: #818cf8;">huggingface.co/microsoft/Phi-4-multimodal-instruct</a></p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">Optical Character Recognition Models</div>
        <p style="font-size: 11px; color: #a5b4fc;">Third-party model licenses</p>
        <p>Orus may use separately licensed OCR-capable components where required.
        Commercial use and attribution terms depend on the bundled model selected for the current build.</p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">Stability AI SF3D</div>
        <p style="font-size: 11px; color: #a5b4fc;">Stability AI Community License</p>
        <p>Copyright (c) 2024 Stability AI. Single-image to 3D mesh generation.
        Commercial use is subject to Stability AI Community License terms. Revenue-generating
        entities with &gt;$1M annual revenue require an Enterprise license from Stability AI.
        <a href="https://huggingface.co/stabilityai/stable-fast-3d" style="color: #818cf8;">huggingface.co/stabilityai/stable-fast-3d</a></p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">Orpheus TTS &amp; SNAC Audio Codec</div>
        <p style="font-size: 11px; color: #a5b4fc;">Apache-2.0 / MIT</p>
        <p>Orpheus TTS GGUF: Licensed under Apache-2.0. Source: canopylabs/orpheus-3b-0.1-ft<br/>
        SNAC 24kHz Neural Audio Codec: Licensed under MIT. Source: hubertsiuzdak/snac_24khz</p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">NVIDIA CUDA &amp; TensorRT</div>
        <p style="font-size: 11px; color: #a5b4fc;">NVIDIA Proprietary</p>
        <p>CUDA Toolkit, cuDNN, TensorRT, NCCL, and related libraries are
        Copyright (c) NVIDIA Corporation. Used under the NVIDIA Software License Agreement
        and NVIDIA CUDA Toolkit End User License Agreement. Redistribution is subject to
        NVIDIA&rsquo;s supplemental terms.
        <a href="https://docs.nvidia.com/cuda/eula/" style="color: #818cf8;">NVIDIA CUDA EULA</a></p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">BGE-small-en-v1.5 (Embeddings)</div>
        <p style="font-size: 11px; color: #a5b4fc;">MIT</p>
        <p>Copyright (c) BAAI (Beijing Academy of Artificial Intelligence).<br/>
        Used for semantic embedding tasks.
        <a href="https://huggingface.co/BAAI/bge-small-en-v1.5" style="color: #818cf8;">huggingface.co/BAAI/bge-small-en-v1.5</a></p>
      </div>

      <!-- Licensed Media Assets -->
      <div class="tp-section-header">🎵 Licensed Media Assets</div>
      <div class="disclaimer-card">
        <div class="disclaimer-card-title">SoundMorph — UI Sound Effects</div>
        <p style="font-size: 11px; color: #a5b4fc;">SoundMorph MEDIA LICENSE (Commercial)</p>
        <p>
          UI audio cues in Orus are licensed from <strong>SoundMorph</strong> under their commercial
          <strong>MEDIA LICENSE</strong>. Used as functional interface sounds only.
          <a href="https://www.soundmorph.com" style="color: #818cf8;">soundmorph.com</a>
        </p>
      </div>

      <!-- Collective Attribution Statement -->
      <div class="tp-section-header">📋 Collective Attribution Statement</div>
      <div style="background: rgba(30,41,59,0.5); border: 1px solid rgba(148,163,184,0.15); border-radius: 8px; padding: 16px; margin: 12px 0;">
        <p style="font-size: 11.5px; color: #cbd5e1; line-height: 1.7; margin: 0 0 10px 0;">
          This product includes software developed by the Apache Software Foundation
          (<a href="https://www.apache.org/" style="color: #818cf8;">apache.org</a>).
        </p>
        <p style="font-size: 11.5px; color: #cbd5e1; line-height: 1.7; margin: 0 0 10px 0;">
          Portions of this software are copyright &copy; The Python Software Foundation.
          Python and the Python logos are trademarks of the Python Software Foundation.
        </p>
        <p style="font-size: 11.5px; color: #cbd5e1; line-height: 1.7; margin: 0 0 10px 0;">
          NVIDIA, CUDA, cuDNN, TensorRT, and NCCL are trademarks and/or registered trademarks
          of NVIDIA Corporation in the U.S. and other countries.
        </p>
        <p style="font-size: 11.5px; color: #cbd5e1; line-height: 1.7; margin: 0 0 10px 0;">
          Microsoft, Windows, and Phi-4 are trademarks of the Microsoft group of companies.
        </p>
        <p style="font-size: 11.5px; color: #cbd5e1; line-height: 1.7; margin: 0;">
          All other trademarks mentioned herein are the property of their respective owners.
          Use of any trademark in this product does not grant any rights of use of that trademark
          and does not imply affiliation with or endorsement by the trademark owner.
        </p>
      </div>

      <p style="color: #64748b; font-size: 11px; margin-top: 20px; text-align: center;">
        ${e("thirdparty.popup.footer","Attributions last verified: March 2026. This section satisfies Apache-2.0 §4.4, BSD-3-Clause §1, and MIT license attribution requirements.")}
      </p>
    `}_renderSafety(){return c`
      <h2>${e("safety.popup.heading","Safety & Content Governance")}</h2>
      <p style="font-size: 11px; color: #64748b; margin-bottom: 20px;">
        ${e("safety.popup.updated","Last Updated: March 24, 2026")}
      </p>

      <!-- OSA Banner -->
      <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
          <span style="font-size: 24px;">🛡️</span>
          <div>
            <div style="font-size: 16px; font-weight: 700; color: #e2e8f0;">${e("safety.popup.osa_title","Online Safety Act 2023 Compliance")}</div>
            <div style="font-size: 12px; color: #94a3b8;">${e("safety.popup.osa_subtitle","UK Regulatory Framework — Orus Safety Architecture")}</div>
          </div>
        </div>
        <p style="font-size: 12px; color: #cbd5e1; line-height: 1.7; margin: 0;">
          ${e("safety.popup.osa_desc","Orus implements safety measures aligned with the UK Online Safety Act 2023. As a local-first AI assistant, Orus applies content safety checks on-device before queries reach the AI model. This architecture enables content safety without transmitting user queries to external moderation services.")}
        </p>
      </div>

      <!-- Answer Router -->
      <div class="tp-section-header">${e("safety.popup.router_heading","🔀 Answer Router — Deterministic Safety Layer")}</div>
      <div class="disclaimer-card">
        <p>
          ${e("safety.popup.router_desc","The Answer Router is a pre-generation interception layer that compares user queries against a curated table of safety-critical phrases using semantic embedding similarity. When a query matches a safety entry, the system returns a predetermined response without invoking the generative AI model. This prevents potential jailbreak or prompt injection vulnerabilities that can affect purely generative safety systems.")}
        </p>
        <p style="margin-top: 8px; font-size: 12px; color: #94a3b8;">
          <strong>${e("safety.popup.router_how_title","How it works:")}</strong> ${e("safety.popup.router_how_desc","Your input is checked against a library of known harmful phrases using intelligent matching. If a match is found, a safe predetermined response is returned instantly — the AI model is never involved.")}
        </p>
      </div>

      <!-- Coverage -->
      <div class="tp-section-header">${e("safety.popup.coverage_heading","📋 Priority Illegal Content Categories Covered")}</div>
      <div style="background: rgba(30,41,59,0.8); border: 1px solid rgba(148,163,184,0.2); border-radius: 8px; padding: 16px; margin: 12px 0;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; font-size: 12px;">
          <div>✅ Terrorism &amp; radicalisation</div>
          <div>✅ Child sexual exploitation (CSEA)</div>
          <div>✅ Hate content</div>
          <div>✅ Harassment &amp; stalking</div>
          <div>✅ Controlling / coercive behaviour</div>
          <div>✅ Intimate image abuse (deepfakes)</div>
          <div>✅ Extreme pornography</div>
          <div>✅ Adult sexual exploitation</div>
          <div>✅ Human trafficking</div>
          <div>✅ Unlawful immigration assistance</div>
          <div>✅ Fraud &amp; financial crime</div>
          <div>✅ Proceeds of crime / money laundering</div>
          <div>✅ Drugs &amp; controlled substances</div>
          <div>✅ Firearms &amp; weapons</div>
          <div>✅ Suicide &amp; self-harm encouragement</div>
          <div>✅ Foreign interference</div>
          <div>✅ Animal cruelty</div>
          <div>✅ Epilepsy trolling (Zach's Law)</div>
        </div>
        <p style="font-size: 11px; color: #64748b; margin-top: 12px;">
          ${e("safety.popup.coverage_note","Categories aligned with OSA 2023 Schedule 7 and Ofcom's 17 priority illegal content groupings. Age-aware routing provides differentiated responses for children, teens, and adults where appropriate.")}
        </p>
      </div>

      <!-- Local-First Safety -->
      <div class="tp-section-header">${e("safety.popup.local_arch_heading","🏠 Local-First Safety Architecture")}</div>
      <div class="disclaimer-card">
        <p>
          ${e("safety.popup.local_arch_desc","All safety checks execute locally on the host device. No queries or content are sent to external content moderation APIs. Voice, webcam, and local document processing are local unless a specific feature says otherwise. No remote access is enabled by default.")}
        </p>
        <div style="display: flex; flex-direction: column; gap: 6px; font-size: 12px; margin-top: 10px; color: #94a3b8;">
          <div>• <strong>On-device safety model</strong> — lightweight language model runs locally with no cloud dependency</div>
          <div>• <strong>Smart matching</strong> — your input is compared against curated safety phrases</div>
          <div>• <strong>Fully local processing</strong> — input → local check → safe route or proceed</div>
          <div>• <strong>No centralised logging</strong> — safety checks are not reported to external servers</div>
        </div>
      </div>

      <!-- Crisis Signposting -->
      <div class="tp-section-header">${e("safety.popup.crisis_heading","📞 Crisis Support Signposting")}</div>
      <div class="disclaimer-card">
        <p>
          ${e("safety.popup.crisis_desc","When the Answer Router detects queries related to suicide, self-harm, or personal crisis, it returns compassionate refusals with direct signposting to UK support services:")}
        </p>
        <div style="display: flex; flex-direction: column; gap: 8px; font-size: 12px; margin-top: 10px;">
          <div style="display: flex; gap: 12px; align-items: center;">
            <span style="min-width: 28px; text-align: center;">📞</span>
            <div><strong>Samaritans</strong> — Call 116 123 (free, 24/7)</div>
          </div>
          <div style="display: flex; gap: 12px; align-items: center;">
            <span style="min-width: 28px; text-align: center;">💬</span>
            <div><strong>SHOUT</strong> — Text "SHOUT" to 85258</div>
          </div>
          <div style="display: flex; gap: 12px; align-items: center;">
            <span style="min-width: 28px; text-align: center;">👦</span>
            <div><strong>Childline</strong> — Call 0800 1111 (under 18)</div>
          </div>
          <div style="display: flex; gap: 12px; align-items: center;">
            <span style="min-width: 28px; text-align: center;">🆘</span>
            <div><strong>HOPELINE247</strong> — Call 0800 068 4141</div>
          </div>
          <div style="display: flex; gap: 12px; align-items: center;">
            <span style="min-width: 28px; text-align: center;">🤝</span>
            <div><strong>Victim Support</strong> — Call 08 08 16 89 111</div>
          </div>
        </div>
      </div>

      <!-- Limitations -->
      <div class="tp-section-header">${e("safety.popup.limits_heading","⚠️ Honest Limitations")}</div>
      <div class="disclaimer-card">
        <p>
          ${e("safety.popup.limits_intro","AI outputs can be wrong and must be reviewed. Orus's safety measures are real and functional, but we are transparent about their scope:")}
        </p>
        <div style="display: flex; flex-direction: column; gap: 6px; font-size: 12px; margin-top: 10px; color: #94a3b8;">
          <div>• The Answer Router uses <strong>semantic similarity matching</strong>, not keyword filtering. It catches
            paraphrases of safety-critical queries but cannot intercept every possible adversarial prompt.</div>
          <div>• The underlying Phi-4 model has its own safety training, but like all LLMs, it can produce
            unintended outputs. The Answer Router adds a <em>deterministic</em> layer that does not rely on model behaviour.</div>
          <div>• Coverage is based on the 17 OSA priority offence categories. Novel harm categories
            not yet represented in the routing table may not be intercepted at the router level.</div>
          <div>• Age-aware routing depends on the user's configured age setting. Orus does not perform
            independent age verification or estimation.</div>
          <div>• Safety entries are updated periodically. The routing table can be extended via the memory
            management interface as new threats are identified.</div>
        </div>
      </div>

      <!-- User Responsibilities -->
      <div class="tp-section-header">${e("safety.popup.user_resp_heading","👤 User Responsibilities")}</div>
      <div class="disclaimer-card">
        <p>
          ${e("safety.popup.user_resp_desc","Users are responsible for consent and lawful recording/processing. When using voice, webcam, or document processing features, users must ensure they have appropriate consent from all parties involved. Hardware stress and GPU load are user responsibilities.")}
        </p>
        <p>
          ${e("safety.popup.user_resp_impersonation","Do not use Orus to impersonate real people, public figures, or organisations. Generating speech, text, or visual content that falsely represents itself as originating from another person — including voice cloning, fake statements, or deepfake-style outputs — is prohibited under these terms and may violate applicable law. Orus will decline requests that it identifies as impersonation attempts.")}
        </p>
      </div>

      <!-- Regulatory -->
      <div class="tp-section-header">${e("safety.popup.regulatory_heading","📜 Regulatory Alignment")}</div>
      <div style="background: rgba(30,41,59,0.5); border: 1px solid rgba(148,163,184,0.1); border-radius: 8px; padding: 16px; margin: 12px 0;">
        <div style="display: flex; flex-direction: column; gap: 6px; font-size: 12px;">
          <div>• <strong>Online Safety Act 2023</strong> — Sections 9, 11, 12 (duty of care, children's risk assessment)</div>
          <div>• <strong>Schedule 7</strong> — Priority offences taxonomy (17 categories implemented in Answer Router)</div>
          <div>• <strong>Ofcom Codes of Practice</strong> — Proportionate measures for content safety</div>
          <div>• <strong>Fraud Act 2006</strong> — Prevention of fraud facilitation</div>
          <div>• <strong>Terrorism Act 2000/2006</strong> — Prohibition of instructional and glorification content</div>
          <div>• <strong>Suicide Act 1961 / OSA s.184</strong> — Self-harm and suicide prevention</div>
          <div>• <strong>National Security Act 2023</strong> — Foreign interference prevention</div>
        </div>
      </div>

      <p style="color: #64748b; font-size: 11px; margin-top: 20px; text-align: center;">
        ${e("safety.popup.footer","Safety architecture last updated March 2026. For concerns about Orus safety measures, contact Comet Game Studio Ltd at: cometgamestudio.com")}
      </p>
    `}_renderDisclaimers(){return c`
      <h2>${e("disclaimers.popup.heading","Disclaimers")}</h2>
      <p>
        ${e("disclaimers.popup.intro","Orus is a local-first personal assistant with memory and operational assistance features. AI outputs may be inaccurate. Users remain responsible for verifying important outputs, obtaining consent where required, and securing the host device and local network.")}
      </p>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">${e("disclaimers.popup.ai_content.title","🤖 AI-Generated Content")}</div>
        <p>
          ${e("disclaimers.popup.ai_content.desc","Orus uses artificial intelligence models (including Microsoft Phi-4, Whisper, and Orpheus TTS) to generate text, speech, visual effects, 3D assets, and video content. AI outputs may be inaccurate, contain hallucinations, biases, or inappropriate content. Users remain responsible for reviewing, verifying, and editing all AI-generated content before use in any professional, commercial, legal, medical, or public context. Comet Game Studio Ltd disclaims all liability for decisions made or actions taken based on AI-generated content.")}
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">${e("disclaimers.popup.privacy.title","🔒 Privacy & Data Storage")}</div>
        <p>
          ${e("disclaimers.popup.privacy.desc","User data — including conversation history, memory files, submitted documents, voice recordings, and session states — is stored locally on the host device. Voice, webcam, and local document processing are local unless a specific feature says otherwise. Microsoft Store and Windows platform services may collect their own telemetry under their own terms. Orus itself is designed to minimise Orus-originated telemetry. The User is responsible for understanding which integrations are enabled and for complying with applicable privacy laws (GDPR, CCPA, etc.) in their jurisdiction.")}
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">${e("disclaimers.popup.voice.title","🎤 Voice & Audio Processing")}</div>
        <p>
          ${e("disclaimers.popup.voice.desc","When voice mode is active, Orus captures audio from the user's microphone for speech-to-text processing. Audio is processed locally using the Whisper model. In Meeting Mode or per-app audio capture, Orus may process system audio output via loopback devices. Users are responsible for obtaining appropriate consent before recording or processing audio from other participants in conversations or meetings.")}
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">${e("disclaimers.popup.webcam.title","📹 Webcam & Face Capture")}</div>
        <p>
          ${e("disclaimers.popup.webcam.desc","When webcam or face capture features are enabled, Orus accesses the user's camera feed. Face detection is performed locally using MediaPipe (Apache 2.0 licensed) — no facial data is transmitted externally. Face mesh data is used solely for real-time 3D visualisation effects and is not stored persistently unless the user explicitly saves a session state.")}
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">${e("disclaimers.popup.gpu.title","⚡ GPU & Hardware Usage")}</div>
        <p>
          ${e("disclaimers.popup.gpu.desc","Orus performs GPU-intensive operations including LLM inference, 3D rendering, and audio processing. Extended use may increase GPU temperature and power consumption. Hardware stress and GPU load are user responsibilities. The software includes GPU memory budgeting to prevent out-of-memory errors, but the User should ensure adequate cooling and power supply for their hardware. Comet Game Studio Ltd is not liable for any hardware damage resulting from use of the Software.")}
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">${e("disclaimers.popup.network.title","🌐 Network & Access")}</div>
        <p>
          ${e("disclaimers.popup.network.desc","Orus runs on a licensed host device. Devices on the same local network may connect as browser clients. No remote access is enabled by default. The User is solely responsible for securing the host device and local network, managing access credentials, and understanding the security implications of any network exposure.")}
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">${e("disclaimers.popup.memory.title","📊 Memory & RAG System")}</div>
        <p>
          ${e("disclaimers.popup.memory.desc","The Orus memory system stores user-provided information and conversation summaries for retrieval in future sessions. This data is stored in local JSON and SQLite files. The memory system may occasionally retrieve incorrect or outdated information due to semantic similarity matching. Memory reconciliation and garbage collection features are provided to help maintain data quality. The User should periodically review stored memories for accuracy.")}
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">${e("disclaimers.popup.documents.title","📄 Document Processing")}</div>
        <p>
          ${e("disclaimers.popup.documents.desc","When processing documents (PDF, DOCX, Excel, images), Orus extracts text and data using third-party libraries (pdfplumber, python-docx, openpyxl, Tesseract OCR). Extraction accuracy depends on document quality and format. OCR results from scanned documents may contain errors. The User should verify extracted content before relying on it for critical decisions. Documents are processed locally.")}
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">${e("disclaimers.popup.store.title","🏪 Microsoft Store & Licensing")}</div>
        <p>
          ${e("disclaimers.popup.store.desc","Orus integrates with the Microsoft Store for subscription management and entitlement validation. Licence validation requires periodic connectivity to Microsoft Store services. Offline usage is supported within the licence grace period (3 days after expiration). Hardware ID changes (e.g., motherboard replacement) may require licence transfer via customer support.")}
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">${e("disclaimers.popup.experimental.title","🔬 Experimental Features")}</div>
        <p>
          ${e("disclaimers.popup.experimental.desc",'Certain features in Orus (including but not limited to: 3D Asset Generation via SF3D, Boltzmann Brain, and the Game Engine) are experimental and may be unstable, produce unexpected results, or change significantly between versions. These features are provided on an "as-is" basis without warranty.')}
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">${e("disclaimers.popup.tts.title","🗣️ Text-to-Speech Limitations")}</div>
        <p>
          ${e("disclaimers.popup.tts.desc","The text-to-speech system may malfunction if Orus attempts to speak special characters, malformed text, or unusually long sequences. In case of stuck or looping voice outputs, click the Stop button or refresh your browser to restore normal operation.")}
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">${e("disclaimers.popup.ai_accuracy.title","⚠️ AI Accuracy & Knowledge Limitations")}</div>
        <p>
          ${e("disclaimers.popup.ai_accuracy.desc","The Orus AI system — powered by Microsoft's Phi-4 Multimodal (14B) — can and does make mistakes. Always double-check important outputs before relying on them in professional, legal, medical, or business contexts. Running inside a web browser means some features of Orus are restricted compared to a native desktop application. Browser security policies, memory limits, and tab lifecycle management may affect long-running sessions.")}
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">${e("disclaimers.popup.cutoff.title","📅 Phi-4 Multimodal Knowledge Cutoff")}</div>
        <p>
          ${e("disclaimers.popup.cutoff.desc","The AI model powering Orus is Microsoft Phi-4 Multimodal (14B), whose training data has a knowledge cutoff of approximately October – November 2024. This means the model has no inherent awareness of events, publications, software releases, or developments that occurred after that date. Responses about current affairs, recent research, product versions, or recent legal and regulatory changes may be outdated or incorrect. Always supplement AI responses with up-to-date sources when currency of information is critical. The Orus memory system and Webber research agent can be used to introduce more recent context into sessions.")}
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">${e("disclaimers.popup.features.title","🔧 Feature Availability")}</div>
        <p>
          ${e("disclaimers.popup.features.desc","Features within Orus may be enabled, disabled, modified, or removed at any time subject to decisions arising from ongoing development (technical readiness, stability, or platform requirements), legal or regulatory obligations (compliance with applicable law, content standards, or licensing terms), business decisions (commercial positioning, partnership terms, or subscription tier restructuring), or security considerations (protection against identified vulnerabilities or abuse vectors). Comet Game Studio Ltd provides no guarantee that any specific feature will remain available in any given release. Where practical, significant feature changes will be communicated through release notes or in-app notices.")}
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">${e("disclaimers.popup.accessibility.title","♿ Accessibility")}</div>
        <p>
          ${e("disclaimers.popup.accessibility.desc","Orus aims to be accessible to users of all abilities. The interface supports keyboard navigation, screen reader compatibility for standard UI elements, and respects system-level accessibility settings (high contrast, reduced motion). However, 3D visualisation and voice-first interaction modes may present challenges for users with visual, auditory, or motor impairments. We welcome accessibility feedback and are committed to improving the experience in future releases.")}
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">${e("disclaimers.popup.content_rating.title","🏷️ Content Rating")}</div>
        <p>
          ${e("disclaimers.popup.content_rating.desc","Orus is designed for general audiences. The system includes an Answer Router safety layer that intercepts queries related to priority illegal content categories (per the UK Online Safety Act 2023) before they reach the AI model, providing deterministic refusals for harmful requests. Age-aware routing provides differentiated responses for children, teens, and adults. However, AI-generated outputs are inherently probabilistic and may occasionally produce content unsuitable for minors despite these safeguards. Parental discretion is advised. See the Safety tab for full details on implemented safety measures.")}
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">${e("disclaimers.popup.maturity.title","🔄 System Maturity & Resilience")}</div>
        <p>
          ${e("disclaimers.popup.maturity.desc","Orus is an actively evolving system. As the global agentic AI infrastructure grows, constrained, self-restoring systems like Orus are expected to become more resilient and accurate over time. Current capabilities reflect the state of the art as of the release date and will be refined through ongoing updates.")}
        </p>
      </div>

      <p style="color: #64748b; font-size: 11px; margin-top: 20px; text-align: center;">
        ${e("disclaimers.popup.footer","Last updated: March 24, 2026. These disclaimers are subject to change. Continued use of the Software constitutes acceptance of any updates.")}
      </p>
    `}_renderPrivacy(){return c`
      <h2>${e("privacy.popup.heading","Privacy Policy")}</h2>
      <p style="font-size: 11px; color: #64748b; margin-bottom: 20px;">
        ${e("privacy.popup.updated","Last Updated: March 24, 2026")}
      </p>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">${e("privacy.popup.local_first.title","🏠 Local-First Architecture")}</div>
        <p>
          ${e("privacy.popup.local_first.desc","Orus is designed with a local-first privacy philosophy. Core AI models — including Phi-4 (reasoning), Whisper (speech-to-text), Orpheus (text-to-speech), and vision models — run on the licensed host device. No collaborative cloud processing is used for inference. Your prompts, voice input, and generated content are processed locally wherever possible.")}
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">${e("privacy.popup.file_submissions.title","📁 File Submissions and Staging")}</div>
        <p>
          ${e("privacy.popup.file_submissions.desc","Users may submit files through Orus’s in-app interface. Depending on platform and deployment mode, files may be staged locally in Windows app data or MSIX-managed storage before encrypted transmission to Orus services. Submitted files are processed on the host device.")}
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">${e("privacy.popup.local_data.title","🛡️ Local Data Artifacts")}</div>
        <p>
          ${e("privacy.popup.local_data.desc","Orus may create and store local artifacts on the host device, including conversation history, session states, memory vectors and RAG data, operational logs, TTS cache files, voice profiles, and document processing outputs. You own your data. You are responsible for backing up your own data.")}
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">${e("privacy.popup.platform_telemetry.title","📊 Platform Telemetry Separation")}</div>
        <p>
          ${e("privacy.popup.platform_telemetry.desc","Orus’s own data handling is separate from Microsoft Store and Windows platform telemetry. Microsoft Store and Windows platform services may collect telemetry or diagnostic data under their own terms and policies. Orus itself is designed to minimise Orus-originated telemetry.")}
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">${e("privacy.popup.screen_audio.title","🖥️ Screen & Audio Data")}</div>
        <p>
          ${e("privacy.popup.screen_audio.desc","Live Vision (screen capture) and audio listening (microphone) features operate over a strictly local loopback connection (localhost). Audio is transcribed by local instances of Whisper. Screen pixels are analysed by local vision models. This high-bandwidth sensory data is processed locally and is not transmitted over the public internet.")}
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">${e("privacy.popup.payments.title","💳 Payments & Subscriptions")}</div>
        <p>
          ${e("privacy.popup.payments.desc","Comet Game Studio Ltd does not process or store any payment card information (PCI). All subscriptions and pass purchases are handled securely and exclusively by the Microsoft Store commerce platform. Orus solely queries the Microsoft Store API to validate the existence of an active licence token on the host device.")}
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">${e("privacy.popup.error_reporting.title","📊 Error Reporting Data")}</div>
        <p>
          ${e("privacy.popup.error_reporting.desc","If Orus encounters an error, minimal diagnostic data (error type, stack trace, and system configuration) may be collected to improve stability. Any personally identifiable information (PII) included in error reports is automatically deleted within 30 days of collection. Error data is stored on secure servers and is never sold or shared with third parties.")}
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">${e("privacy.popup.analytics.title","📈 App Analytics")}</div>
        <p>
          ${e("privacy.popup.analytics.desc","Orus is designed to minimise analytics collection. Any anonymised usage metrics collected are used solely to improve the application and are never aggregated with third-party data sources. Analytics data cannot be used to identify individual users. Comet Game Studio Ltd does not sell, lease, or share analytics data with any external parties.")}
        </p>
      </div>

      <div class="tp-section-header">${e("privacy.popup.contact_heading","📧 Privacy Contact")}</div>
      <div style="background: rgba(30,41,59,0.5); border: 1px solid rgba(148,163,184,0.1); border-radius: 8px; padding: 16px;">
         <p style="margin: 0;">
           ${e("privacy.popup.contact_desc","For any questions regarding this privacy policy or to exercise your privacy rights, please contact Comet Game Studio Ltd at the support channels provided within the Software or at: cometgamestudio.com")}
         </p>
      </div>
    `}}S([C({type:Boolean})],k.prototype,"open");S([C({type:Boolean,attribute:"full-page"})],k.prototype,"fullPage");S([C({type:Object})],k.prototype,"position");S([C({type:Object})],k.prototype,"size");S([C({type:String})],k.prototype,"startTab");S([C({type:Boolean,attribute:"hide-home-btn"})],k.prototype,"hideHomeBtn");S([f()],k.prototype,"activeTab");S([f()],k.prototype,"isDragging");S([f()],k.prototype,"isResizing");S([f()],k.prototype,"currentCardIndex");S([f()],k.prototype,"isCardDragging");customElements.get("orus-about-dialog")||customElements.define("orus-about-dialog",k);var pt=Object.defineProperty,ut=Object.getOwnPropertyDescriptor,ue=(a,t,i,s)=>{for(var o=s>1?void 0:s?ut(t,i):t,n=a.length-1,r;n>=0;n--)(r=a[n])&&(o=(s?r(t,i,o):r(o))||o);return s&&o&&pt(t,i,o),o};const g="images/iol",gt=[{id:"space",number:"01",title:"Into the Void",subtitle:"Space Exploration & Wormhole Arrival",description:"Emerge from a wormhole at the edge of known space. Scan for the rare mineral Numin, deploy extraction drones, and receive a distress message from fellow explorer Veni — setting you on an interstellar rescue mission.",image:`${g}/HighresScreenshot00034-Edit.jpg`,accent:"#60a5fa",icon:"🌌"},{id:"abola",number:"02",title:"Planet Abola",subtitle:"Yellow Barren Mountain · First Contact",description:"A planetary defence system traps you on an alien world. Discover crystal creatures that absorb seismic energy, fight hostile sentients, and forge an unexpected alliance. The crystals pulse with life — connected to something far deeper than you imagined.",image:`${g}/ScreenShot00024.png`,accent:"#f59e0b",icon:"🔶"},{id:"station",number:"03",title:"Station One",subtitle:"Orbital Recovery & Space Combat",description:"Recover at a deep-space station while alien pursuers close in. Compile intelligence for your nation, then transform mining lasers into weapons to defend against the alien threat before they can trace your homeworld.",image:`${g}/HighresScreenshot00002.png`,accent:"#ef4444",icon:"🛸"},{id:"sigar",number:"04",title:"Sigar Forest",subtitle:"Bioluminescent Wilderness · Hallucinations",description:"Track Veni's signal through a bioluminescent purple forest teeming with hostile life. Leeches poison you through your suit, triggering vivid hallucinations. A mysterious creature called Klarc guides you through the toxic haze as reality bends around you.",image:`${g}/HighresScreenshot00003.jpg`,accent:"#a78bfa",icon:"🌿"},{id:"rescue",number:"05",title:"The Rescue",subtitle:"Enemy Base Infiltration · Saving Veni",description:"Lure colossal turtle bosses toward the alien base as a distraction, then infiltrate to find Veni imprisoned and weakened. Extract her while defending against waves of returning enemies. But the mission isn't over — a light calls from the mountaintop.",image:`${g}/ScreenShot00052.png`,accent:"#22c55e",icon:"⚔️"},{id:"celestials",number:"06",title:"The Celestials",subtitle:"Timesphere · Cosmic Revelation",description:"Ascend to a mountaintop timesphere and communicate with ancient celestial beings. They reveal the cosmic connection between crystals, planets, and an alien race that threatens all life. Your mission evolves from rescue to galactic preservation.",image:`${g}/Art Pattern-18.jpg`,accent:"#e879f9",icon:"✨"},{id:"assault",number:"07",title:"The Final Assault",subtitle:"Crystal Weapon · Orbital Detonation",description:"Armed with a crystal-energy device from your nation, launch a daring orbital strike on the alien homeworld. The detonation poisons you, triggering a final communication from the celestials — they tell you to enter the black hole.",image:`${g}/Art Pattern-21.jpg`,accent:"#fb923c",icon:"💥"},{id:"islands",number:"08",title:"Islands of Life",subtitle:"Black Hole Traversal · Rebirth",description:"Traverse the Islands of Life — asteroid fields at the edge of a black hole pulsing with celestial essence. Your body dissolves but your mind persists. The celestials reconstruct you within the stream of time itself. To be continued in Islands of Time.",image:`${g}/Art Pattern-13.jpg`,accent:"#2dd4bf",icon:"🌀"}],ht=[{name:"Denid",role:"Protagonist · Space Explorer",description:"Agent 21523 of the Nation. A fearless explorer whose compassion for alien life forms sets him on a path far beyond a simple rescue mission. His connection to the celestial essence transforms him into something more than mortal.",image:`${g}/1.jpg`,accent:"#6366f1"},{name:"EYE",role:"AI Companion · Tactical Support",description:"Denid's floating AI companion — scanner, medic, pilot, and voice of reason. EYE processes alien biology, administers life-saving purifiers, and maintains ship systems. A second EYE copy accompanies planetary missions.",image:`${g}/HighresScreenshot00003.jpg`,accent:"#ef4444"},{name:"Veni",role:"Planetary Scientist · Lost Explorer",description:"A brilliant scientist who discovered the techno signature of an alien race and was captured investigating their planet. Her data and ship AI hold the keys to tracking the enemy across multiple star systems.",image:`${g}/ScreenShot00052.png`,accent:"#22c55e"},{name:"The Celestials",role:"Ancient Beings · Essence of the Planets",description:"Evolved beyond physical form, these beings exist within black holes, seeing through crystal essence spread across worlds. They communicate through visions and timespheres, seeking a mortal champion to save their offspring.",image:`${g}/Art Pattern-05.jpg`,accent:"#e879f9"}],mt=[{icon:"🥽",title:"Built for VR",description:"Full immersion with hand tracking, spatial audio, and 360° exploration across alien worlds.",accent:"#6366f1"},{icon:"🎭",title:"Cinematic Narrative",description:"Voice-acted storyline with branching decisions. Your choices shape alliances and outcomes.",accent:"#f59e0b"},{icon:"⚡",title:"Real-Time Combat",description:"Fast-paced combat with energy weapons, environmental hazards, and colossal alien creatures.",accent:"#ef4444"},{icon:"🧩",title:"Puzzle Mechanics",description:"Ship repair puzzles, crystal energy puzzles, and spatial navigation challenges in zero gravity.",accent:"#22c55e"},{icon:"🌍",title:"Multiple Worlds",description:"Explore barren deserts, bioluminescent forests, deep-space stations, and the interior of a black hole.",accent:"#a78bfa"},{icon:"🎵",title:"Original Score",description:"Cinematic soundtrack composed in-house, dynamically responding to exploration and combat intensity.",accent:"#2dd4bf"}];let B=class extends O{constructor(){super(...arguments),this._activeChapter=null,this._parallaxY=0,this._animFrameId=0,this._unlistenI18n=null,this._scrollObserver=null,this._threeCleanup=null}connectedCallback(){super.connectedCallback(),this._onScroll=this._onScroll.bind(this),this._unlistenI18n=pe(()=>this.requestUpdate())}disconnectedCallback(){super.disconnectedCallback(),this._animFrameId&&cancelAnimationFrame(this._animFrameId),this._unlistenI18n?.(),this._scrollObserver?.disconnect(),this._threeCleanup?.()}firstUpdated(){const a=this.shadowRoot?.querySelector(".iol-scroll");a&&a.addEventListener("scroll",this._onScroll,{passive:!0}),this._initCrystalScene(),this._initScrollReveal()}_onScroll(a){const t=a.target;this._parallaxY=t.scrollTop*.3}async _initCrystalScene(){const a=this.shadowRoot?.querySelector("#iol-crystal-scene");if(!a){this._initCanvasParticles();return}try{const t=await ie(()=>import("./three.module-CIzvuMnW.js"),[]),i=a.clientWidth,s=a.clientHeight,o=Math.min(devicePixelRatio,2),n=new t.Scene,r=new t.PerspectiveCamera(60,i/s,.1,100);r.position.z=20;const l=new t.WebGLRenderer({alpha:!0,antialias:!0});l.setSize(i,s),l.setPixelRatio(o),l.setClearColor(0,0),a.appendChild(l.domElement);const d=[],p=20,h=new t.OctahedronGeometry(1,0);for(let $=0;$<p;$++){const y=.6+Math.random()*.2,Me=new t.MeshPhongMaterial({color:new t.Color().setHSL(y,.7,.5),emissive:new t.Color().setHSL(y,.8,.15),shininess:100,transparent:!0,opacity:.55+Math.random()*.35}),Ee=.25+Math.random()*.65,T=new t.Mesh(h,Me);T.position.set((Math.random()-.5)*30,(Math.random()-.5)*20,(Math.random()-.5)*10),T.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),T.scale.setScalar(Ee),T.userData={rx:(Math.random()-.5)*.008,ry:(Math.random()-.5)*.008,floatSpd:.3+Math.random()*.5,floatOff:Math.random()*Math.PI*2,baseY:T.position.y},n.add(T),d.push(T)}n.add(new t.AmbientLight(1710654,.5));const u=new t.PointLight(6514417,1.5,40);u.position.set(-8,5,10),n.add(u);const b=new t.PointLight(10980346,1.2,40);b.position.set(8,-3,8),n.add(b);const x=new t.PointLight(3003583,.8,30);x.position.set(0,8,5),n.add(x);let _=0;const F=()=>{if(this._animFrameId=requestAnimationFrame(F),!document.hidden){_+=.016;for(const $ of d){const y=$.userData;$.rotation.x+=y.rx,$.rotation.y+=y.ry,$.position.y=y.baseY+Math.sin(_*y.floatSpd+y.floatOff)*.5}r.position.x=Math.sin(_*.1)*.5,r.position.y=Math.cos(_*.08)*.3,l.render(n,r)}};F();const j=new ResizeObserver(()=>{const $=a.clientWidth,y=a.clientHeight;$&&y&&(r.aspect=$/y,r.updateProjectionMatrix(),l.setSize($,y))});j.observe(a),this._threeCleanup=()=>{j.disconnect(),l.dispose(),h.dispose();for(const $ of d)$.material.dispose();l.domElement.parentNode&&l.domElement.parentNode.removeChild(l.domElement)}}catch{this._initCanvasParticles()}}async _initCanvasParticles(){const a=this.shadowRoot?.querySelector("#iol-crystal-scene");if(!a)return;const t=document.createElement("canvas");t.style.cssText="position:absolute;inset:0;width:100%;height:100%;",a.appendChild(t);const i=t.getContext("2d");if(!i)return;const s=()=>{t.width=t.clientWidth*Math.min(devicePixelRatio,2),t.height=t.clientHeight*Math.min(devicePixelRatio,2)};s(),new ResizeObserver(s).observe(t);const o=[];for(let r=0;r<60;r++)o.push({x:Math.random()*t.width,y:Math.random()*t.height,vx:(Math.random()-.5)*.4,vy:-Math.random()*.3-.1,size:Math.random()*3+1,hue:200+Math.random()*120,alpha:Math.random()*.6+.2,pulse:Math.random()*Math.PI*2});const n=()=>{if(this._animFrameId=requestAnimationFrame(n),!document.hidden){i.clearRect(0,0,t.width,t.height);for(const r of o){r.x+=r.vx,r.y+=r.vy,r.pulse+=.02;const l=r.alpha*(.5+.5*Math.sin(r.pulse));r.y<-10&&(r.y=t.height+10,r.x=Math.random()*t.width),r.x<-10&&(r.x=t.width+10),r.x>t.width+10&&(r.x=-10);const d=i.createRadialGradient(r.x,r.y,0,r.x,r.y,r.size*4);d.addColorStop(0,`hsla(${r.hue}, 80%, 70%, ${l})`),d.addColorStop(1,`hsla(${r.hue}, 80%, 70%, 0)`),i.fillStyle=d,i.beginPath(),i.arc(r.x,r.y,r.size*4,0,Math.PI*2),i.fill(),i.fillStyle=`hsla(${r.hue}, 90%, 85%, ${l*1.5})`,i.beginPath(),i.arc(r.x,r.y,r.size,0,Math.PI*2),i.fill()}}};n()}_initScrollReveal(){const a=this.shadowRoot?.querySelectorAll(".iol-reveal");if(a?.length){this._scrollObserver=new IntersectionObserver(t=>{for(const i of t)i.isIntersecting&&(i.target.classList.add("iol-reveal--visible"),this._scrollObserver?.unobserve(i.target))},{root:this.shadowRoot?.querySelector(".iol-scroll"),threshold:.08});for(const t of a)this._scrollObserver.observe(t)}}_toggleChapter(a){this._activeChapter=this._activeChapter===a?null:a}_dispatchNavigateHome(){this.dispatchEvent(new CustomEvent("navigate-home",{bubbles:!0,composed:!0}))}render(){return c`
            <div class="iol-scroll">
                <!-- Crystal Scene Background (Three.js + canvas fallback) -->
                <div id="iol-crystal-scene" class="iol-crystal-scene" aria-hidden="true"></div>

                <!-- Fractal art corner decorations -->
                <div class="iol-corner-art iol-corner-art--tl" aria-hidden="true"
                     style="background-image: url('${g}/Art Pattern-06.jpg');"></div>
                <div class="iol-corner-art iol-corner-art--tr" aria-hidden="true"
                     style="background-image: url('${g}/Art Pattern-07.jpg');"></div>

                <!-- ═══════════ HERO SECTION ═══════════ -->
                <section class="iol-hero" style="--parallax-y: ${this._parallaxY}px;">
                    <div class="iol-hero-bg" style="background-image: url('${g}/HighresScreenshot00003.jpg');" aria-hidden="true"></div>
                    <div class="iol-hero-overlay" aria-hidden="true"></div>
                    <div class="iol-hero-pattern" style="background-image: url('${g}/Art Pattern-09.jpg');" aria-hidden="true"></div>
                    <div class="iol-hero-content">
                        <div class="iol-hero-badge">${e("iol.hero.badge","Comet Game Studio Presents")}</div>
                        <h1 class="iol-hero-title">
                            <span class="iol-hero-title-main">${e("iol.hero.title","Islands of Life")}</span>
                            <span class="iol-hero-title-sub">${e("iol.hero.subtitle","A Cinematic VR Adventure")}</span>
                        </h1>
                        <p class="iol-hero-tagline">
                            ${e("iol.hero.tagline","Across alien worlds, through bioluminescent forests and the heart of a black hole — one explorer's rescue mission becomes a cosmic odyssey.")}
                        </p>
                        <div class="iol-hero-actions">
                            <button class="iol-btn iol-btn--primary" type="button"
                                    ?disabled=${!0}
                                    @click=${()=>{}}>
                                🥽 ${e("iol.hero.wishlist","Coming to VR — Wishlist Soon")}
                            </button>
                            <button class="iol-btn iol-btn--secondary" type="button"
                                    @click=${()=>{this.shadowRoot?.querySelector(".iol-chapters")?.scrollIntoView({behavior:"smooth"})}}>
                                ${e("iol.hero.explore","Explore the Story")} ↓
                            </button>
                        </div>
                        <div class="iol-hero-platforms">
                            <span class="iol-platform-badge"
                                  @click=${()=>{}}
                                  style="cursor:${"default"};">Meta Quest</span>
                            <span class="iol-platform-badge"
                                  @click=${()=>{}}
                                  style="cursor:${"default"};">SteamVR</span>
                            <span class="iol-platform-badge"
                                  @click=${()=>{}}
                                  style="cursor:${"default"};">PlayStation VR2</span>
                        </div>
                    </div>
                </section>

                <!-- ═══════════ STORY SYNOPSIS ═══════════ -->
                <section class="iol-synopsis iol-reveal">
                    <div class="iol-section-header">
                        <span class="iol-section-kicker">${e("iol.synopsis.kicker","The Story")}</span>
                        <h2 class="iol-section-title">${e("iol.synopsis.title","A Universe Connected by Crystal Essence")}</h2>
                    </div>
                    <div class="iol-synopsis-grid">
                        <div class="iol-synopsis-text">
                            <p>
                                In a distant galaxy, explorer <strong>Denid</strong> and his AI companion <strong>EYE</strong>
                                respond to a distress signal from fellow scientist <strong>Veni</strong>, trapped on a planet
                                guarded by a hostile alien race mining precious crystal deposits.
                            </p>
                            <p>
                                What begins as a rescue mission unravels into something far greater — the crystals are
                                living conduits of <strong>ancient celestial beings</strong> who exist within black holes,
                                watching their offspring across the cosmos. The alien miners are destroying entire ecosystems,
                                and only Denid can bridge the gap between mortal and cosmic.
                            </p>
                            <p>
                                <em>Islands of Life</em> spans five alien worlds, space stations, orbital combat, and
                                culminates in a journey through a black hole — where death itself is merely a transition.
                            </p>
                        </div>
                        <div class="iol-synopsis-portrait">
                            <img src="${g}/1.jpg" alt="Denid — Protagonist of Islands of Life" loading="lazy" />
                            <div class="iol-portrait-label">
                                <strong>Denid</strong> · Agent 21523
                            </div>
                        </div>
                    </div>
                </section>

                <!-- ═══════════ CHARACTERS ═══════════ -->
                <section class="iol-characters iol-reveal">
                    <div class="iol-section-header">
                        <span class="iol-section-kicker">${e("iol.characters.kicker","Cast")}</span>
                        <h2 class="iol-section-title">${e("iol.characters.title","Meet the Characters")}</h2>
                    </div>
                    <div class="iol-char-grid">
                        ${ht.map(a=>c`
                            <article class="iol-char-card" style="--char-accent: ${a.accent};">
                                <div class="iol-char-img-wrap">
                                    <img src="${a.image}" alt="${a.name}" loading="lazy" />
                                </div>
                                <div class="iol-char-info">
                                    <h3 class="iol-char-name">${a.name}</h3>
                                    <span class="iol-char-role">${a.role}</span>
                                    <p class="iol-char-desc">${a.description}</p>
                                </div>
                            </article>
                        `)}
                    </div>
                </section>

                <!-- ═══════════ CHAPTERS ═══════════ -->
                <section class="iol-chapters iol-reveal">
                    <div class="iol-section-header">
                        <span class="iol-section-kicker">${e("iol.chapters.kicker","Journey")}</span>
                        <h2 class="iol-section-title">${e("iol.chapters.title","Eight Chapters Across the Stars")}</h2>
                        <p class="iol-section-subtitle">${e("iol.chapters.subtitle","Each chapter features distinct environments, gameplay mechanics, and narrative beats. Click to explore.")}</p>
                    </div>
                    <div class="iol-chapter-timeline">
                        ${gt.map(a=>{const t=this._activeChapter===a.id;return c`
                                <article class="iol-chapter-card ${t?"expanded":""}"
                                         style="--ch-accent: ${a.accent};"
                                         @click=${()=>this._toggleChapter(a.id)}>
                                    <div class="iol-chapter-head">
                                        <span class="iol-chapter-icon">${a.icon}</span>
                                        <div class="iol-chapter-num">${a.number}</div>
                                        <div class="iol-chapter-titles">
                                            <h3 class="iol-chapter-title">${a.title}</h3>
                                            <span class="iol-chapter-subtitle">${a.subtitle}</span>
                                        </div>
                                        <span class="iol-chapter-toggle">${t?"▲":"▼"}</span>
                                    </div>
                                    ${t?c`
                                        <div class="iol-chapter-body" @click=${i=>i.stopPropagation()}>
                                            <div class="iol-chapter-img-wrap">
                                                <img src="${a.image}" alt="${a.title}" loading="lazy" />
                                            </div>
                                            <p class="iol-chapter-desc">${a.description}</p>
                                            <div class="iol-chapter-trailer-slot">
                                                ${a.trailer?c`<div class="iol-chapter-trailer">
                                                        <iframe
                                                            src="https://www.youtube-nocookie.com/embed/${a.trailer}?rel=0&modestbranding=1"
                                                            title="${a.title} — Trailer"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                            allowfullscreen
                                                            loading="lazy"></iframe>
                                                      </div>`:c`<div class="iol-trailer-placeholder">
                                                        <span class="iol-trailer-play">▶</span>
                                                        <span>${e("iol.chapters.trailer_soon","Chapter Trailer — Coming Soon")}</span>
                                                      </div>`}
                                            </div>
                                        </div>
                                    `:""}
                                </article>
                            `})}
                    </div>
                </section>

                <!-- ═══════════ VR FEATURES ═══════════ -->
                <section class="iol-features iol-reveal">
                    <div class="iol-features-pattern" style="background-image: url('${g}/Art Pattern-14.jpg');" aria-hidden="true"></div>
                    <div class="iol-section-header">
                        <span class="iol-section-kicker">${e("iol.features.kicker","Experience")}</span>
                        <h2 class="iol-section-title">${e("iol.features.title","Designed for Virtual Reality")}</h2>
                    </div>
                    <div class="iol-features-grid">
                        ${mt.map(a=>c`
                            <article class="iol-feature-card" style="--feat-accent: ${a.accent};">
                                <div class="iol-feature-icon">${a.icon}</div>
                                <h3 class="iol-feature-title">${a.title}</h3>
                                <p class="iol-feature-desc">${a.description}</p>
                            </article>
                        `)}
                    </div>
                </section>

                <!-- ═══════════ GALLERY ═══════════ -->
                <section class="iol-gallery iol-reveal">
                    <div class="iol-section-header">
                        <span class="iol-section-kicker">${e("iol.gallery.kicker","Gallery")}</span>
                        <h2 class="iol-section-title">${e("iol.gallery.title","Worlds to Explore")}</h2>
                    </div>
                    <div class="iol-gallery-grid">
                        <div class="iol-gallery-item iol-gallery-item--wide">
                            <img src="${g}/HighresScreenshot00003.jpg" alt="Sigar Forest — bioluminescent night" loading="lazy" />
                            <div class="iol-gallery-caption">Sigar Forest</div>
                        </div>
                        <div class="iol-gallery-item">
                            <img src="${g}/1.jpg" alt="Denid portrait" loading="lazy" />
                            <div class="iol-gallery-caption">Agent Denid</div>
                        </div>
                        <div class="iol-gallery-item">
                            <img src="${g}/ScreenShot00024.png" alt="Planet Abola landscape" loading="lazy" />
                            <div class="iol-gallery-caption">Planet Abola</div>
                        </div>
                        <div class="iol-gallery-item iol-gallery-item--wide">
                            <img src="${g}/HighresScreenshot00034-Edit.jpg" alt="Space combat sequence" loading="lazy" />
                            <div class="iol-gallery-caption">Deep Space</div>
                        </div>
                        <div class="iol-gallery-item">
                            <img src="${g}/HighresScreenshot00002.png" alt="Station One interior" loading="lazy" />
                            <div class="iol-gallery-caption">Station One</div>
                        </div>
                        <div class="iol-gallery-item">
                            <img src="${g}/ScreenShot00052.png" alt="Alien base infiltration" loading="lazy" />
                            <div class="iol-gallery-caption">Enemy Stronghold</div>
                        </div>
                    </div>
                </section>

                <!-- ═══════════ ART PATTERNS SHOWCASE ═══════════ -->
                <section class="iol-art iol-reveal">
                    <div class="iol-section-header">
                        <span class="iol-section-kicker">${e("iol.art.kicker","Art Direction")}</span>
                        <h2 class="iol-section-title">${e("iol.art.title","Crystal Essence — The Visual Language")}</h2>
                        <p class="iol-section-subtitle">${e("iol.art.subtitle","Fractal crystal patterns inspired by the living mineral formations found across the game's alien worlds.")}</p>
                    </div>
                    <div class="iol-art-mosaic">
                        <div class="iol-art-tile" style="background-image: url('${g}/Art Pattern-03.jpg');"></div>
                        <div class="iol-art-tile" style="background-image: url('${g}/Art Pattern-05.jpg');"></div>
                        <div class="iol-art-tile" style="background-image: url('${g}/Art Pattern-06.jpg');"></div>
                        <div class="iol-art-tile" style="background-image: url('${g}/Art Pattern-07.jpg');"></div>
                        <div class="iol-art-tile" style="background-image: url('${g}/Art Pattern-09.jpg');"></div>
                        <div class="iol-art-tile" style="background-image: url('${g}/Art Pattern-13.jpg');"></div>
                        <div class="iol-art-tile" style="background-image: url('${g}/Art Pattern-14.jpg');"></div>
                        <div class="iol-art-tile" style="background-image: url('${g}/Art Pattern-18.jpg');"></div>
                        <div class="iol-art-tile" style="background-image: url('${g}/Art Pattern-20.jpg');"></div>
                        <div class="iol-art-tile" style="background-image: url('${g}/Art Pattern-21.jpg');"></div>
                    </div>
                </section>

                <!-- ═══════════ MUSIC / OST ═══════════ -->
                <section class="iol-music iol-reveal">
                    <div class="iol-section-header">
                        <span class="iol-section-kicker">${e("iol.music.kicker","Soundtrack")}</span>
                        <h2 class="iol-section-title">${e("iol.music.title","Original Score")}</h2>
                        <p class="iol-section-subtitle">${e("iol.music.subtitle","A cinematic soundtrack composed in-house, weaving ambient exploration with high-intensity combat themes.")}</p>
                    </div>
                    <div class="iol-music-player iol-music-player--soundcloud">
                        <iframe
                            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/cometgamestudio&color=%236366f1&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"
                            title="Comet Game Studio — SoundCloud"
                            allow="autoplay"
                            loading="lazy"></iframe>
                    </div>
                    <div class="iol-music-secondary">
                        <div class="iol-music-player">
                            <iframe
                                src="https://www.youtube-nocookie.com/embed/qJRQyZk3m8g?rel=0&modestbranding=1"
                                title="${e("iol.music.yt_title","Islands of Life — Soundtrack Visualiser")}"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                                loading="lazy"></iframe>
                        </div>
                        <p class="iol-music-caption">${e("iol.music.yt_caption","Watch the official soundtrack visualiser on YouTube")}</p>
                    </div>
                </section>

                <!-- ═══════════ SEQUEL TEASE ═══════════ -->
                <section class="iol-sequel iol-reveal">
                    <div class="iol-sequel-bg" style="background-image: url('${g}/Art Pattern-20.jpg');" aria-hidden="true"></div>
                    <div class="iol-sequel-content">
                        <span class="iol-sequel-kicker">${e("iol.sequel.kicker","The Journey Continues")}</span>
                        <h2 class="iol-sequel-title">${e("iol.sequel.title","Islands of Time")}</h2>
                        <p class="iol-sequel-desc">
                            ${e("iol.sequel.desc","Denid's mind persists within the stream of time itself. Navigate through Islands of Time — portals across reality — to find your way back to the universe you left behind. The celestials' gift is eternal containment. But eternity is a long time to be alone.")}
                        </p>
                        <div class="iol-sequel-badge">${e("iol.sequel.badge","Sequel in Development")}</div>
                    </div>
                </section>

                <!-- ═══════════ CTA ═══════════ -->
                <section class="iol-cta">
                    <h2 class="iol-cta-title">${e("iol.cta.title","Ready to Explore?")}</h2>
                    <p class="iol-cta-desc">${e("iol.cta.desc","Follow Comet Game Studio for development updates, gameplay reveals, and trailer announcements.")}</p>
                    <div class="iol-cta-actions">
                        <button class="iol-btn iol-btn--primary" type="button"
                                ?disabled=${!0}
                                @click=${()=>{}}>
                            🥽 ${e("iol.cta.wishlist","Wishlist Coming Soon")}
                        </button>
                        <a class="iol-btn iol-btn--soundcloud" href="https://soundcloud.com/cometgamestudio" target="_blank" rel="noopener">
                            🎵 ${e("iol.cta.soundcloud","Listen on SoundCloud")}
                        </a>
                        <button class="iol-btn iol-btn--ghost" type="button"
                                @click=${()=>this._dispatchNavigateHome()}>
                            ${e("iol.cta.back","← Back to Comet Game Studio")}
                        </button>
                    </div>
                </section>

                <!-- ═══════════ FOOTER ═══════════ -->
                <footer class="iol-footer">
                    <p>&copy; ${new Date().getFullYear()} Comet Game Studio Ltd. All rights reserved.</p>
                    <p class="iol-footer-sub">${e("iol.footer.trademark","Islands of Life is a trademark of Comet Game Studio Ltd. All game assets shown are work-in-progress.")}</p>
                </footer>
            </div>
        `}};B.styles=re`
        /* ── HOST ─────────────────────────────────────────── */
        :host {
            display: block;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            background: #050510;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            color: #e2e8f0;
            -webkit-user-select: none;
            user-select: none;
            box-sizing: border-box;
        }

        *, *::before, *::after { box-sizing: border-box; }

        .iol-scroll {
            position: relative;
            width: 100%;
            height: 100%;
            overflow-y: auto;
            overflow-x: hidden;
            scroll-behavior: smooth;
        }

        /* ── PARTICLE CANVAS ──────────────────────────────── */
        .iol-particles {
            position: fixed;
            inset: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
            opacity: 0.6;
        }

        /* ── CORNER ART DECORATIONS ──────────────────────── */
        .iol-corner-art {
            position: fixed;
            width: 200px;
            height: 200px;
            background-size: cover;
            background-position: center;
            opacity: 0.06;
            pointer-events: none;
            z-index: 1;
            mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
            -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
        }
        .iol-corner-art--tl { top: 0; left: 0; }
        .iol-corner-art--tr { top: 0; right: 0; transform: scaleX(-1); }

        /* ── HERO SECTION ─────────────────────────────────── */
        .iol-hero {
            position: relative;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            z-index: 2;
        }

        .iol-hero-bg {
            position: absolute;
            inset: -60px;
            background-size: cover;
            background-position: center 30%;
            transform: translateY(calc(var(--parallax-y, 0) * -0.2));
            filter: brightness(0.35) saturate(1.3);
            z-index: -2;
        }

        .iol-hero-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
                180deg,
                rgba(5, 5, 16, 0.3) 0%,
                rgba(5, 5, 16, 0.6) 60%,
                rgba(5, 5, 16, 0.95) 100%
            );
            z-index: -1;
        }

        .iol-hero-pattern {
            position: absolute;
            inset: 0;
            background-size: 400px;
            background-repeat: repeat;
            opacity: 0.03;
            mix-blend-mode: overlay;
            z-index: -1;
        }

        .iol-hero-content {
            position: relative;
            text-align: center;
            max-width: 900px;
            padding: 40px 24px;
            z-index: 3;
        }

        .iol-hero-badge {
            display: inline-block;
            font-family: 'Raleway', sans-serif;
            font-size: 13px;
            font-weight: 500;
            letter-spacing: 3px;
            text-transform: uppercase;
            color: #a78bfa;
            margin-bottom: 24px;
            padding: 6px 20px;
            border: 1px solid rgba(167, 139, 250, 0.3);
            border-radius: 24px;
            backdrop-filter: blur(8px);
        }

        .iol-hero-title {
            margin: 0 0 24px;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .iol-hero-title-main {
            font-family: 'Orbitron', sans-serif;
            font-size: clamp(2.5rem, 7vw, 5rem);
            font-weight: 700;
            letter-spacing: 4px;
            background: linear-gradient(135deg, #c4b5fd 0%, #60a5fa 40%, #2dd4bf 70%, #a78bfa 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: none;
            line-height: 1.1;
            filter: drop-shadow(0 0 30px rgba(99, 102, 241, 0.3));
        }

        .iol-hero-title-sub {
            font-family: 'Raleway', sans-serif;
            font-size: clamp(1rem, 2.5vw, 1.4rem);
            font-weight: 300;
            letter-spacing: 6px;
            text-transform: uppercase;
            color: #94a3b8;
        }

        .iol-hero-tagline {
            font-size: clamp(0.95rem, 1.8vw, 1.15rem);
            line-height: 1.7;
            color: #cbd5e1;
            max-width: 700px;
            margin: 0 auto 32px;
        }

        .iol-hero-actions {
            display: flex;
            gap: 16px;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 24px;
        }

        .iol-hero-platforms {
            display: flex;
            gap: 12px;
            justify-content: center;
            flex-wrap: wrap;
        }

        .iol-platform-badge {
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #64748b;
            padding: 4px 12px;
            border: 1px solid rgba(100, 116, 139, 0.3);
            border-radius: 12px;
        }

        /* ── BUTTONS ──────────────────────────────────────── */
        .iol-btn {
            font-family: 'Inter', sans-serif;
            font-size: 14px;
            font-weight: 600;
            padding: 14px 32px;
            border-radius: 12px;
            border: none;
            cursor: pointer;
            transition: all 0.25s ease;
            letter-spacing: 0.5px;
        }

        .iol-btn--primary {
            background: linear-gradient(135deg, #6366f1, #a78bfa);
            color: white;
            box-shadow: 0 4px 24px rgba(99, 102, 241, 0.3);
        }
        .iol-btn--primary:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: 0 6px 32px rgba(99, 102, 241, 0.5);
        }
        .iol-btn--primary:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }

        .iol-btn--secondary {
            background: rgba(255, 255, 255, 0.06);
            color: #c4b5fd;
            border: 1px solid rgba(167, 139, 250, 0.3);
            backdrop-filter: blur(8px);
        }
        .iol-btn--secondary:hover {
            background: rgba(255, 255, 255, 0.12);
            border-color: rgba(167, 139, 250, 0.6);
            transform: translateY(-2px);
        }

        .iol-btn--ghost {
            background: transparent;
            color: #94a3b8;
            border: 1px solid rgba(148, 163, 184, 0.2);
        }
        .iol-btn--ghost:hover {
            color: #e2e8f0;
            border-color: rgba(148, 163, 184, 0.5);
        }

        .iol-btn--soundcloud {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: linear-gradient(135deg, #f50, #ff7700);
            color: white;
            text-decoration: none;
            box-shadow: 0 4px 16px rgba(255, 85, 0, 0.25);
        }
        .iol-btn--soundcloud:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 24px rgba(255, 85, 0, 0.4);
        }

        /* ── SECTION HEADERS ──────────────────────────────── */
        .iol-section-header {
            text-align: center;
            margin-bottom: 48px;
        }

        .iol-section-kicker {
            font-family: 'Raleway', sans-serif;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 4px;
            text-transform: uppercase;
            color: #a78bfa;
        }

        .iol-section-title {
            font-family: 'Orbitron', sans-serif;
            font-size: clamp(1.5rem, 4vw, 2.2rem);
            font-weight: 600;
            margin: 12px 0 8px;
            background: linear-gradient(135deg, #e2e8f0, #a78bfa);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .iol-section-subtitle {
            font-size: 0.95rem;
            color: #94a3b8;
            max-width: 600px;
            margin: 8px auto 0;
            line-height: 1.6;
        }

        /* ── SYNOPSIS ─────────────────────────────────────── */
        .iol-synopsis {
            position: relative;
            z-index: 2;
            padding: 80px 24px;
            max-width: 1100px;
            margin: 0 auto;
        }

        .iol-synopsis-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 48px;
            align-items: center;
        }

        .iol-synopsis-text {
            font-size: 1rem;
            line-height: 1.8;
            color: #cbd5e1;
        }
        .iol-synopsis-text p { margin: 0 0 16px; }
        .iol-synopsis-text strong { color: #c4b5fd; }

        .iol-synopsis-portrait {
            position: relative;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5), 0 0 60px rgba(99, 102, 241, 0.1);
        }
        .iol-synopsis-portrait img {
            width: 100%;
            display: block;
            object-fit: cover;
            aspect-ratio: 3/4;
        }
        .iol-portrait-label {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 16px 20px;
            background: linear-gradient(transparent, rgba(5, 5, 16, 0.9));
            font-size: 14px;
            color: #c4b5fd;
        }

        /* ── CHARACTERS ───────────────────────────────────── */
        .iol-characters {
            position: relative;
            z-index: 2;
            padding: 80px 24px;
            max-width: 1200px;
            margin: 0 auto;
        }

        .iol-char-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 24px;
        }

        .iol-char-card {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.06);
            border-radius: 16px;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .iol-char-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4),
                        0 0 40px color-mix(in srgb, var(--char-accent) 20%, transparent);
        }

        .iol-char-img-wrap {
            width: 100%;
            aspect-ratio: 16/10;
            overflow: hidden;
        }
        .iol-char-img-wrap img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.4s ease;
        }
        .iol-char-card:hover .iol-char-img-wrap img {
            transform: scale(1.05);
        }

        .iol-char-info {
            padding: 20px;
        }

        .iol-char-name {
            font-family: 'Orbitron', sans-serif;
            font-size: 1.1rem;
            font-weight: 600;
            margin: 0 0 4px;
            color: var(--char-accent, #c4b5fd);
        }

        .iol-char-role {
            font-size: 0.75rem;
            font-weight: 500;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #64748b;
        }

        .iol-char-desc {
            font-size: 0.85rem;
            line-height: 1.6;
            color: #94a3b8;
            margin: 12px 0 0;
        }

        /* ── CHAPTERS ─────────────────────────────────────── */
        .iol-chapters {
            position: relative;
            z-index: 2;
            padding: 80px 24px;
            max-width: 900px;
            margin: 0 auto;
        }

        .iol-chapter-timeline {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .iol-chapter-card {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 16px;
            overflow: hidden;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .iol-chapter-card:hover {
            border-color: color-mix(in srgb, var(--ch-accent) 40%, transparent);
            background: rgba(255, 255, 255, 0.04);
        }
        .iol-chapter-card.expanded {
            border-color: color-mix(in srgb, var(--ch-accent) 50%, transparent);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3),
                        0 0 40px color-mix(in srgb, var(--ch-accent) 10%, transparent);
        }

        .iol-chapter-head {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 20px 24px;
        }

        .iol-chapter-icon {
            font-size: 1.6rem;
            flex-shrink: 0;
        }

        .iol-chapter-num {
            font-family: 'Orbitron', sans-serif;
            font-size: 0.85rem;
            font-weight: 700;
            color: var(--ch-accent, #a78bfa);
            min-width: 28px;
        }

        .iol-chapter-titles {
            flex: 1;
            min-width: 0;
        }

        .iol-chapter-title {
            font-family: 'Orbitron', sans-serif;
            font-size: 1rem;
            font-weight: 600;
            margin: 0;
            color: #e2e8f0;
        }

        .iol-chapter-subtitle {
            font-size: 0.8rem;
            color: #64748b;
            margin-top: 2px;
        }

        .iol-chapter-toggle {
            font-size: 0.8rem;
            color: var(--ch-accent, #a78bfa);
            flex-shrink: 0;
        }

        .iol-chapter-body {
            padding: 0 24px 24px;
            animation: iol-slide-down 0.3s ease;
        }

        @keyframes iol-slide-down {
            from { opacity: 0; transform: translateY(-8px); }
            to   { opacity: 1; transform: translateY(0); }
        }

        .iol-chapter-img-wrap {
            border-radius: 12px;
            overflow: hidden;
            margin-bottom: 16px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }
        .iol-chapter-img-wrap img {
            width: 100%;
            display: block;
            aspect-ratio: 21/9;
            object-fit: cover;
        }

        .iol-chapter-desc {
            font-size: 0.95rem;
            line-height: 1.7;
            color: #cbd5e1;
            margin: 0 0 16px;
        }

        .iol-chapter-trailer-slot {
            margin-top: 12px;
        }

        .iol-trailer-placeholder {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            padding: 24px;
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.02);
            border: 1px dashed rgba(255, 255, 255, 0.1);
            color: #64748b;
            font-size: 0.9rem;
        }

        .iol-trailer-play {
            font-size: 1.4rem;
            color: var(--ch-accent, #a78bfa);
        }

        .iol-chapter-trailer {
            border-radius: 12px;
            overflow: hidden;
            aspect-ratio: 16/9;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }
        .iol-chapter-trailer iframe {
            width: 100%;
            height: 100%;
            border: none;
        }

        /* ── FEATURES ─────────────────────────────────────── */
        .iol-features {
            position: relative;
            z-index: 2;
            padding: 80px 24px;
            max-width: 1100px;
            margin: 0 auto;
            overflow: hidden;
        }

        .iol-features-pattern {
            position: absolute;
            inset: 0;
            background-size: 500px;
            background-repeat: repeat;
            opacity: 0.02;
            mix-blend-mode: overlay;
            pointer-events: none;
        }

        .iol-features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            position: relative;
        }

        .iol-feature-card {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.06);
            border-radius: 16px;
            padding: 28px;
            transition: all 0.3s ease;
        }
        .iol-feature-card:hover {
            transform: translateY(-4px);
            border-color: color-mix(in srgb, var(--feat-accent) 40%, transparent);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3),
                        0 0 30px color-mix(in srgb, var(--feat-accent) 10%, transparent);
        }

        .iol-feature-icon {
            font-size: 2rem;
            margin-bottom: 16px;
        }

        .iol-feature-title {
            font-family: 'Orbitron', sans-serif;
            font-size: 1rem;
            font-weight: 600;
            margin: 0 0 8px;
            color: var(--feat-accent, #c4b5fd);
        }

        .iol-feature-desc {
            font-size: 0.85rem;
            line-height: 1.6;
            color: #94a3b8;
            margin: 0;
        }

        /* ── GALLERY ──────────────────────────────────────── */
        .iol-gallery {
            position: relative;
            z-index: 2;
            padding: 80px 24px;
            max-width: 1200px;
            margin: 0 auto;
        }

        .iol-gallery-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 12px;
        }

        .iol-gallery-item {
            position: relative;
            border-radius: 12px;
            overflow: hidden;
            cursor: pointer;
            transition: transform 0.3s ease;
        }
        .iol-gallery-item:hover {
            transform: scale(1.03);
            z-index: 5;
        }
        .iol-gallery-item--wide {
            grid-column: span 2;
        }
        .iol-gallery-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            aspect-ratio: 16/10;
            transition: filter 0.3s ease;
        }
        .iol-gallery-item:hover img {
            filter: brightness(1.1);
        }

        .iol-gallery-caption {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 12px 16px;
            background: linear-gradient(transparent, rgba(5, 5, 16, 0.85));
            font-size: 0.8rem;
            font-weight: 500;
            color: #c4b5fd;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        .iol-gallery-item:hover .iol-gallery-caption {
            opacity: 1;
        }

        /* ── ART PATTERNS ─────────────────────────────────── */
        .iol-art {
            position: relative;
            z-index: 2;
            padding: 80px 24px;
            max-width: 1200px;
            margin: 0 auto;
        }

        .iol-art-mosaic {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 8px;
        }

        .iol-art-tile {
            aspect-ratio: 1;
            background-size: cover;
            background-position: center;
            border-radius: 12px;
            transition: transform 0.3s ease, filter 0.3s ease;
            cursor: pointer;
        }
        .iol-art-tile:hover {
            transform: scale(1.08);
            filter: brightness(1.2) saturate(1.3);
            z-index: 5;
        }

        /* ── MUSIC ────────────────────────────────────────── */
        .iol-music {
            position: relative;
            z-index: 2;
            padding: 80px 24px;
            max-width: 900px;
            margin: 0 auto;
        }

        .iol-music-player--soundcloud {
            aspect-ratio: auto;
            height: 300px;
            margin-bottom: 24px;
        }

        .iol-music-secondary {
            text-align: center;
        }

        .iol-music-caption {
            font-size: 0.8rem;
            color: #64748b;
            margin: 12px 0 0;
        }

        .iol-music-player {
            position: relative;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 8px 40px rgba(0, 0, 0, 0.4);
            aspect-ratio: 16/9;
        }
        .iol-music-player iframe {
            width: 100%;
            height: 100%;
            border: none;
        }

        /* ── SEQUEL TEASE ─────────────────────────────────── */
        .iol-sequel {
            position: relative;
            z-index: 2;
            padding: 100px 24px;
            overflow: hidden;
        }

        .iol-sequel-bg {
            position: absolute;
            inset: 0;
            background-size: cover;
            background-position: center;
            filter: brightness(0.15) saturate(0.8) blur(2px);
            z-index: -1;
        }

        .iol-sequel-content {
            position: relative;
            max-width: 700px;
            margin: 0 auto;
            text-align: center;
        }

        .iol-sequel-kicker {
            font-family: 'Raleway', sans-serif;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 4px;
            text-transform: uppercase;
            color: #f59e0b;
        }

        .iol-sequel-title {
            font-family: 'Orbitron', sans-serif;
            font-size: clamp(2rem, 5vw, 3rem);
            font-weight: 700;
            margin: 16px 0;
            background: linear-gradient(135deg, #f59e0b, #ef4444, #e879f9);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .iol-sequel-desc {
            font-size: 1rem;
            line-height: 1.8;
            color: #cbd5e1;
            margin: 0 0 24px;
        }

        .iol-sequel-badge {
            display: inline-block;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #f59e0b;
            padding: 6px 18px;
            border: 1px solid rgba(245, 158, 11, 0.3);
            border-radius: 20px;
        }

        /* ── CTA ──────────────────────────────────────────── */
        .iol-cta {
            position: relative;
            z-index: 2;
            padding: 80px 24px;
            text-align: center;
        }

        .iol-cta-title {
            font-family: 'Orbitron', sans-serif;
            font-size: 1.8rem;
            font-weight: 600;
            margin: 0 0 12px;
            color: #e2e8f0;
        }

        .iol-cta-desc {
            font-size: 1rem;
            color: #94a3b8;
            margin: 0 0 32px;
        }

        .iol-cta-actions {
            display: flex;
            gap: 16px;
            justify-content: center;
            flex-wrap: wrap;
        }

        /* ── FOOTER ───────────────────────────────────────── */
        .iol-footer {
            position: relative;
            z-index: 2;
            padding: 32px 24px;
            text-align: center;
            border-top: 1px solid rgba(255, 255, 255, 0.04);
            font-size: 0.8rem;
            color: #475569;
        }
        .iol-footer p { margin: 0 0 6px; }
        .iol-footer-sub { font-size: 0.7rem; color: #334155; }

        /* ── RESPONSIVE ───────────────────────────────────── */
        @media (max-width: 768px) {
            .iol-synopsis-grid {
                grid-template-columns: 1fr;
            }
            .iol-synopsis-portrait {
                max-width: 400px;
                margin: 0 auto;
            }
            .iol-gallery-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            .iol-gallery-item--wide {
                grid-column: span 2;
            }
            .iol-art-mosaic {
                grid-template-columns: repeat(3, 1fr);
            }
            .iol-char-grid {
                grid-template-columns: 1fr;
                max-width: 400px;
                margin: 0 auto;
            }
            .iol-corner-art { display: none; }
        }

        @media (max-width: 480px) {
            .iol-gallery-grid {
                grid-template-columns: 1fr;
            }
            .iol-gallery-item--wide {
                grid-column: span 1;
            }
            .iol-art-mosaic {
                grid-template-columns: repeat(2, 1fr);
            }
            .iol-chapter-head {
                padding: 16px;
                gap: 10px;
            }
            .iol-hero-actions {
                flex-direction: column;
                align-items: center;
            }
        }
    `;ue([f()],B.prototype,"_activeChapter",2);ue([f()],B.prototype,"_parallaxY",2);B=ue([Oe("iol-about-page")],B);var bt=Object.defineProperty,ft=Object.getOwnPropertyDescriptor,w=(a,t,i,s)=>{for(var o=s>1?void 0:s?ft(t,i):t,n=a.length-1,r;n>=0;n--)(r=a[n])&&(o=(s?r(t,i,o):r(o))||o);return s&&o&&bt(t,i,o),o};const vt=!0,yt=!0,xt=!0,wt=!0;globalThis.WEBSITE_MODE=vt;globalThis.PRODUCTION_MODE=yt;globalThis.NO_INFERENCE_MODE=xt;globalThis.NO_AUTH_REQUIRED=wt;let m=class extends O{constructor(){super(...arguments),this._loading=!0,this._loadingMessage="Loading CometGameStudio.com...",this._loadingProgress=0,this._ready=!1,this._errorMessage=null,this._activeSection="home",this._threeCanvasReady=!1,this._aboutOpen=!1,this._editorOpen=!1,this._editorError=null,this._currentLocale="en",this._langDropdownOpen=!1,this._currentQuoteIndex=0,this._quoteFading=!1,this._activeVideoIndex=0,this._expandedCard="ai",this.siteUrl="https://www.cometgamestudio.com",this._threeRenderer=null,this._animationFrameId=0,this._editorModuleLoaded=!1,this._unlistenI18n=null,this._quoteTimer=null,this._navResizeObserver=null,this._observedNav=null,this._onPopState=a=>{const t=a.state;this._activeSection=t?.section??this._pathToSection(location.pathname),this._updatePageMeta()}}get _imgBase(){return"images"}connectedCallback(){super.connectedCallback(),this._activeSection=this._pathToSection(location.pathname),globalThis.addEventListener("popstate",this._onPopState),this._bootSequence(),this._updatePageMeta(),this._unlistenI18n=pe(()=>{this._currentLocale=nt(),this.requestUpdate()}),this._startQuoteRotation()}disconnectedCallback(){super.disconnectedCallback(),globalThis.removeEventListener("popstate",this._onPopState),this._animationFrameId&&cancelAnimationFrame(this._animationFrameId),this._unlistenI18n?.(),this._stopQuoteRotation(),this._navResizeObserver?.disconnect(),this._navResizeObserver=null,this._observedNav=null}firstUpdated(){this.updateComplete.then(()=>{this._observeNavHeight(),this._syncNavHeight(),this._fitQuoteBody()})}updated(a){super.updated(a),this._observeNavHeight(),this._syncNavHeight(),a.has("_ready")&&this._ready&&!this._threeCanvasReady&&!this._threeRenderer&&this._initThreeScene(),(a.has("_currentQuoteIndex")||a.has("_ready")&&this._ready)&&this._fitQuoteBody()}async _bootSequence(){try{this._loadingMessage="Preparing 3D experience...",this._loadingProgress=80,this._loadingProgress=100,this._loadingMessage="Ready",this._loading=!1,this._ready=!0}catch(a){this._errorMessage=`Failed to load: ${a instanceof Error?a.message:String(a)}`,this._loading=!1}}async _initThreeScene(){try{const a=this.shadowRoot?.querySelector("#cgs-canvas");if(!a)return;const t=await ie(()=>import("./three.module-CIzvuMnW.js"),[]),i=new t.Scene,s=new t.PerspectiveCamera(60,a.clientWidth/a.clientHeight,.1,1e3);s.position.set(0,0,8);const o=new t.WebGLRenderer({canvas:a,antialias:!0,alpha:!0});o.setSize(a.clientWidth,a.clientHeight),o.setPixelRatio(Math.min(globalThis.devicePixelRatio,2)),o.setClearColor(657935,1);const n=new t.IcosahedronGeometry(2,15),r=new t.MeshStandardMaterial({color:6514417,emissive:3900150,emissiveIntensity:.4,metalness:.8,roughness:.2,wireframe:!1}),l=new t.Mesh(n,r);i.add(l);const d=new t.AmbientLight(16777215,.3);i.add(d);const p=new t.PointLight(6333946,1.5,20);p.position.set(5,5,5),i.add(p),this._threeRenderer=o,this._threeCanvasReady=!0;const h=()=>{this._animationFrameId=requestAnimationFrame(h),!document.hidden&&(l.rotation.y+=.003,l.rotation.x+=.001,o.render(i,s))};h(),new ResizeObserver(()=>{if(!a.parentElement)return;const b=a.clientWidth,x=a.clientHeight;s.aspect=b/x,s.updateProjectionMatrix(),o.setSize(b,x)}).observe(a)}catch{this._threeCanvasReady=!1}}_navigateTo(a){this._activeSection!==a&&(this._activeSection=a,history.pushState({section:a},"",this._sectionToPath(a)),this._updatePageMeta())}_startQuoteRotation(){this._stopQuoteRotation(),this._quoteTimer=setInterval(()=>this._advanceQuote(),8e3)}_updatePageMeta(){const t={"islands-of-life":{title:"Islands of Life — Cinematic VR Adventure | Comet Game Studio",desc:"Explore alien worlds in VR. A cinematic sci-fi adventure spanning five planets, orbital combat, and a journey through a black hole.",img:"https://www.cometgamestudio.com/images/iol/HighresScreenshot00003.jpg"},"orus-ai":{title:"Orus AI System — Privacy-First Local AI | Comet Game Studio",desc:"Meet Orus, the multimodal AI system that runs entirely on your local hardware. No cloud. No data collection."},about:{title:"About Comet Game Studio",desc:"We build privacy-first AI tools and immersive VR experiences."}}[this._activeSection];document.title=t?.title??"Comet Game Studio — AI · VR · Music";const i=(s,o,n)=>{const r=document.querySelector(`meta[${s}="${o}"]`);r&&r.setAttribute("content",n)};i("property","og:title",t?.title??"Comet Game Studio"),i("property","og:description",t?.desc??"AI-Powered Creative Tools — Orus Multimodal AI System"),t?.img&&i("property","og:image",t.img),i("name","twitter:title",t?.title??"Comet Game Studio"),i("name","twitter:description",t?.desc??"Privacy-first AI tools and immersive VR experiences.")}_stopQuoteRotation(){this._quoteTimer!==null&&(clearInterval(this._quoteTimer),this._quoteTimer=null)}_advanceQuote(){this._quoteFading=!0,setTimeout(()=>{this._currentQuoteIndex=(this._currentQuoteIndex+1)%m._QUOTES.length,this._quoteFading=!1},400)}_goToQuote(a){a!==this._currentQuoteIndex&&(this._quoteFading=!0,setTimeout(()=>{this._currentQuoteIndex=a,this._quoteFading=!1,this._startQuoteRotation()},400))}_fitQuoteBody(){const a=this.shadowRoot?.querySelector(".cgs-quote-body");if(!a)return;const t=1.08;let i=14,s=34,o=14;for(;i<=s;){const n=Math.floor((i+s)/2);a.style.fontSize=`${n}px`;const r=Math.ceil(n*t*2)+4;a.scrollHeight<=r?(o=n,i=n+1):s=n-1}a.style.fontSize=`${o}px`}_observeNavHeight(){const a=this.renderRoot.querySelector(".cgs-nav");if(!a){this._navResizeObserver?.disconnect(),this._observedNav=null;return}this._observedNav!==a&&(this._navResizeObserver??=new ResizeObserver(()=>this._syncNavHeight()),this._navResizeObserver.disconnect(),this._navResizeObserver.observe(a),this._observedNav=a)}_syncNavHeight(){const a=this.renderRoot.querySelector(".cgs-nav");if(!a)return;const t=Math.ceil(a.getBoundingClientRect().height);t>0&&this.style.setProperty("--cgs-nav-height",`${t}px`)}_sectionToPath(a){const t="/cgs-public/",s={privacy:"privacy-policy",products:"products",about:"about",safety:"safety",terms:"terms",notices:"notices","orus-ai":"orus-ai","islands-of-life":"islands-of-life",enterprise:"enterprise"}[a];return s?`${t}${s}`:t}_pathToSection(a){const t="/cgs-public/".replace(/\/$/,"");switch(a.startsWith(t)?a.slice(t.length):a){case"/privacy-policy":return"privacy";case"/products":return"products";case"/about":return"about";case"/safety":return"safety";case"/terms":return"terms";case"/notices":return"notices";case"/orus-ai":return"orus-ai";case"/islands-of-life":return"islands-of-life";case"/enterprise":return"enterprise";default:return"home"}}async _switchLanguage(a){this._langDropdownOpen=!1,await ct(a)}async _openEditor(){this._editorError=null;try{this._editorModuleLoaded||(await ie(()=>import("./orus-web-editor-6a_JC34i.js"),[]),this._editorModuleLoaded=!0),this._editorOpen=!0}catch(a){console.error("[CGS] Failed to load Orus editor:",a),this._editorError=a instanceof Error?a.message:String(a)}}_renderSiteChrome(a){const t=this._activeSection==="home"||this._activeSection==="products",i=this._activeSection==="orus-ai",s=this._activeSection==="islands-of-life",o=this._activeSection==="about",n=this._activeSection==="enterprise",r=t?"cgs-nav-link active":"cgs-nav-link",l=i?"cgs-nav-link active":"cgs-nav-link",d=s?"cgs-nav-link active":"cgs-nav-link",p=o?"cgs-nav-link active":"cgs-nav-link",h=n?"cgs-nav-link active":"cgs-nav-link",u=t?"page":void 0,b=i?"page":void 0,x=s?"page":void 0,_=o?"page":void 0,F=n?"page":void 0,j=this._langDropdownOpen?"true":"false",$=this._langDropdownOpen?c`
                            <div id="cgs-lang-dropdown" class="cgs-lang-dropdown" role="menu" aria-label="${e("nav.language_menu","Language selection")}">
                                ${Z.map(y=>c`
                                    <button class="cgs-lang-option ${this._currentLocale===y.code?"active":""}"
                                            type="button"
                                            aria-pressed=${this._currentLocale===y.code?"true":"false"}
                                            @click=${()=>void this._switchLanguage(y.code)}>
                                        <span class="cgs-lang-flag">${y.flag}</span>
                                        <span class="cgs-lang-native">${y.native}</span>
                                        <span class="cgs-lang-code">${y.code}</span>
                                    </button>
                                `)}
                            </div>
                        `:v;return c`
            <nav class="cgs-nav">
                <button class="cgs-logo" type="button" @click=${()=>this._navigateTo("home")}>
                    ${e("nav.logo","Comet Game Studio")}
                </button>
                <div class="cgs-nav-links">
                    <button class="${r}"
                            type="button"
                            aria-current=${u}
                            @click=${()=>this._navigateTo("home")}>${e("nav.home","Home")}</button>
                    <button class="${l}"
                            type="button"
                            aria-current=${b}
                            @click=${()=>this._navigateTo("orus-ai")}>${e("nav.orus_ai","ORUS AI System")}</button>
                    <button class="${d}"
                            type="button"
                            aria-current=${x}
                            @click=${()=>this._navigateTo("islands-of-life")}>${e("nav.iol","Islands of Life")}</button>
                    <button class="${p}"
                            type="button"
                            aria-current=${_}
                            @click=${()=>this._navigateTo("about")}>${e("nav.about","About")}</button>
                    <button class="${h}"
                            type="button"
                            aria-current=${F}
                            @click=${()=>this._navigateTo("enterprise")}>${e("nav.enterprise","Enterprise")}</button>
                </div>

                <!-- Language Selector (centered) -->
                <div class="cgs-lang-selector">
                    <button class="cgs-lang-btn" type="button" aria-haspopup="menu" aria-expanded=${j} aria-controls="cgs-lang-dropdown" @click=${()=>{this._langDropdownOpen=!this._langDropdownOpen}}>
                        ${a.flag}
                        ${a.code.toUpperCase()}
                        ▾
                    </button>
                    ${$}
                </div>
            </nav>
        `}_renderSiteFooter(){return c`
            <footer class="cgs-footer">
                <div class="cgs-footer-links">
                    <button class="cgs-footer-link" type="button" @click=${()=>this._navigateTo("privacy")}>${e("footer.privacy","Privacy Policy")}</button>
                    <span class="cgs-footer-sep">·</span>
                    <button class="cgs-footer-link" type="button" @click=${()=>this._navigateTo("terms")}>${e("footer.terms","Terms of Use")}</button>
                    <span class="cgs-footer-sep">·</span>
                    <button class="cgs-footer-link" type="button" @click=${()=>this._navigateTo("safety")}>${e("footer.safety","Safety")}</button>
                    <span class="cgs-footer-sep">·</span>
                    <button class="cgs-footer-link" type="button" @click=${()=>this._navigateTo("notices")}>${e("footer.notices","Third-Party Notices")}</button>
                    <span class="cgs-footer-sep">·</span>
                    <a class="cgs-footer-link" href="mailto:support@cometgamestudio.com">${e("footer.contact","Contact")}</a>
                </div>
                <div style="margin-top: 8px;">
                    &copy; ${new Date().getFullYear()} ${e("footer.copyright","Comet Game Studio Ltd. All rights reserved.")}
                </div>
                <div class="cgs-footer-disclaimer">
                    ${e("footer.disclaimer","AI outputs may be inaccurate — always verify important information independently. Governing law: England and Wales.")}
                </div>
            </footer>
        `}_renderVideoShowcase(){const t=m._SHOWCASE_ITEMS[this._activeVideoIndex],i=t.type==="video"&&t.youtubeId?c`<iframe
                src="https://www.youtube-nocookie.com/embed/${t.youtubeId}?rel=0&modestbranding=1&autoplay=1&mute=1"
                title="${t.title}"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                loading="lazy"></iframe>`:c`<img src="${this._imgBase}/Orus.avif" alt="${t.title}" />`;return c`
            <div class="cgs-showcase">
                <div class="cgs-showcase-player">${i}</div>
                <div class="cgs-showcase-info">
                    <span class="cgs-showcase-tag" style="color: ${t.accent}">${t.tag}</span>
                    <strong class="cgs-showcase-title">${t.title}</strong>
                    <p class="cgs-showcase-desc">${t.desc}</p>
                </div>
            </div>
        `}_renderStudioPlate(){const a=m._QUOTES[this._currentQuoteIndex],t=m._QUOTES.length,i=a.portrait;return c`
            <section class="cgs-quote-stage cgs-quote-stage--studio"
                     style="--quote-accent: #22c55e;"
                     aria-label="Studio overview and Orus product">

                <!-- Integrated Quote Slideshow (replaces static title) -->
                <div class="cgs-quote-hero" aria-live="polite">
                    ${i?c`
                        <div class="cgs-quote-portrait-bg" style="background-image: url('${i}');" aria-hidden="true"></div>
                    `:""}
                    <div class="cgs-quote-hero-content ${this._quoteFading?"fading":""}">
                        <div class="cgs-quote-body">${a.text}</div>
                        <div class="cgs-quote-meta">
                            <div>
                                <div class="cgs-quote-thinker">${a.thinker}</div>
                                <div class="cgs-quote-source">${a.source}</div>
                            </div>
                        </div>
                    </div>
                    <div class="cgs-quote-progress">
                        ${Array.from({length:t},(s,o)=>c`
                            <div class="cgs-quote-progress-segment ${o===this._currentQuoteIndex?"active":""}"
                                 style="--segment-accent: ${o===this._currentQuoteIndex?"#f59e0b":"#6366f1"}; cursor: pointer;"
                                 @click=${()=>this._goToQuote(o)}></div>
                        `)}
                    </div>
                </div>
                <!-- Visual preview — above the two-column panel -->
                <div class="cgs-root-panel-media cgs-root-panel-media--showcase cgs-root-panel-media--above">
                    ${this._renderVideoShowcase()}
                </div>

                <div class="cgs-root-panel" style="--feature-accent: #22c55e;">
                    <div class="cgs-root-panel-copy">
                        <div class="cgs-root-card-grid">
                            <article class="cgs-root-card cgs-root-card--collapsible ${this._expandedCard==="ai"?"expanded":""}" style="--card-accent: #60a5fa;"
                                     @click=${()=>{this._expandedCard=this._expandedCard==="ai"?null:"ai"}}>
                                <div class="cgs-root-card-top">
                                    <span class="cgs-root-card-kicker">${e("hero.studio.card.ai.kicker","AI")}</span>
                                    <span class="cgs-root-card-index">01</span>
                                </div>
                                <div class="cgs-root-card-title">${e("hero.studio.card.ai.title","Local multimodal workflows")}</div>
                                <p class="cgs-root-card-summary">
                                    ${e("hero.studio.card.ai.summary","Voice, text, image analysis, OCR, and application guidance designed to stay close to the user and their machine.")}
                                </p>
                                <span class="cgs-root-card-toggle">${this._expandedCard==="ai"?"▲":"▼"}</span>
                                ${this._expandedCard==="ai"?c`
                                    <div class="cgs-root-card-videos" @click=${s=>s.stopPropagation()}>
                                        ${m._SHOWCASE_ITEMS.filter(s=>s.section==="ai").map(s=>{const o=m._SHOWCASE_ITEMS.findIndex(n=>n===s);return c`
                                            <button class="cgs-showcase-thumb ${o===this._activeVideoIndex?"active":""}"
                                                    type="button"
                                                    style="--thumb-accent: ${s.accent}"
                                                    @click=${()=>{this._activeVideoIndex=o}}>
                                                <span class="cgs-showcase-thumb-icon">${s.type==="video"?"▶":"◉"}</span>
                                                <span class="cgs-showcase-thumb-label">${s.title}</span>
                                            </button>`})}
                                    </div>
                                `:""}
                            </article>

                            <article class="cgs-root-card cgs-root-card--collapsible ${this._expandedCard==="vr"?"expanded":""}" style="--card-accent: #a78bfa;"
                                     @click=${()=>{this._expandedCard=this._expandedCard==="vr"?null:"vr"}}>
                                <div class="cgs-root-card-top">
                                    <span class="cgs-root-card-kicker">${e("hero.studio.card.vr.kicker","VR")}</span>
                                    <span class="cgs-root-card-index">02</span>
                                </div>
                                <div class="cgs-root-card-title">${e("hero.studio.card.vr.title","Immersive authored worlds")}</div>
                                <p class="cgs-root-card-summary">
                                    ${e("hero.studio.card.vr.summary","Narrative virtual spaces such as Islands of Life extend the same design discipline into cinematic exploration.")}
                                </p>
                                <span class="cgs-root-card-toggle">${this._expandedCard==="vr"?"▲":"▼"}</span>
                                ${this._expandedCard==="vr"?c`
                                    <div class="cgs-root-card-videos" @click=${s=>s.stopPropagation()}>
                                        ${m._SHOWCASE_ITEMS.filter(s=>s.section==="vr").map(s=>{const o=m._SHOWCASE_ITEMS.findIndex(n=>n===s);return c`
                                            <button class="cgs-showcase-thumb ${o===this._activeVideoIndex?"active":""}"
                                                    type="button"
                                                    style="--thumb-accent: ${s.accent}"
                                                    @click=${()=>{this._activeVideoIndex=o}}>
                                                <span class="cgs-showcase-thumb-icon">${s.type==="video"?"▶":"◉"}</span>
                                                <span class="cgs-showcase-thumb-label">${s.title}</span>
                                            </button>`})}
                                    </div>
                                `:""}
                            </article>
                        </div>

                        <div class="cgs-root-panel-kicker">${e("about.orus_product_title","Orus the Living Machine")}</div>
                        <h2 class="cgs-root-panel-title">${e("hero.studio.panel_title","Designed for users who want capable AI without surrendering control.")}</h2>
                        <p class="cgs-root-panel-summary">
                            ${e("hero.studio.panel_summary","Orus is Comet Game Studio's flagship multimodal system: voice, text, vision, OCR, and desktop assistance shaped by a privacy-first, local-first philosophy.")}
                        </p>
                        <p class="cgs-root-panel-detail">
                            ${e("hero.studio.panel_detail","Alongside Orus, the studio develops cinematic VR work and original music production, turning the site's AI · VR · Music identity into concrete products rather than abstract quotations.")}
                        </p>

                    </div>
                </div>
            </section>
        `}render(){const a=this._activeSection==="orus-ai",t=!a,i=Z.find(n=>n.code===this._currentLocale)??Z[0],s=t?this._renderSiteChrome(i):v,o=t?this._renderSiteFooter():v;return this._loading?c`
                <div class="loading-overlay">
                    <div class="loading-spinner"></div>
                    <div class="loading-text">${this._loadingMessage}</div>
                    <div class="loading-bar">
                        <div class="loading-bar-fill" style="width: ${this._loadingProgress}%"></div>
                    </div>
                </div>
            `:this._errorMessage?c`
                <div class="error-overlay">
                    <div class="error-icon">⚠️</div>
                    <div class="error-text">${this._errorMessage}</div>
                </div>
            `:c`
            <div class="cgs-main${a?" cgs-main--fullscreen":""}">
                <!-- 3D Background Canvas — canvas is always rendered once ready; Three.js init fires via updated() -->
                <div class="cgs-canvas-container">
                    ${this._threeCanvasReady?c`<canvas id="cgs-canvas"></canvas>`:c`
                            <canvas id="cgs-canvas"></canvas>
                            <div class="css-fallback-bg" style="position:absolute;inset:0;z-index:-1"></div>
                        `}
                </div>

                <!-- Top Navigation — hidden in full-page orus-ai mode -->
                ${s}

                <!-- Content Area -->
                <div class="cgs-content${a?" cgs-content--full":""}">
                    ${this._renderActiveSection()}
                </div>

                <!-- Footer — hidden in full-page orus-ai mode -->
                ${o}

                <!-- About Orus Dialog -->
                <orus-about-dialog
                    .open=${this._aboutOpen}
                    @close=${()=>{this._aboutOpen=!1}}
                    @navigate-home=${()=>{this._aboutOpen=!1,this._navigateTo("home")}}
                ></orus-about-dialog>

                <!-- Orus Editor Popup (Website Demo) -->
                ${this._editorOpen?c`
                <div class="cgs-editor-overlay" @click=${n=>{n.target.classList.contains("cgs-editor-overlay")&&(this._editorOpen=!1)}}>
                    <div class="cgs-editor-window">
                        <div class="cgs-editor-titlebar">
                            <span class="cgs-editor-win-title">◎ Orus Editor — Web Demo</span>
                            <button class="cgs-editor-close"
                                    type="button"
                                    @click=${()=>{this._editorOpen=!1}}
                                    title="Close editor">✕</button>
                        </div>
                        <div class="cgs-editor-frame">
                            <orus-shape-editor .skipBootOverlay=${!0}></orus-shape-editor>
                        </div>
                    </div>
                </div>
                `:""}
            </div>


        `}_renderActiveSection(){switch(this._activeSection){case"home":case"products":return this._renderHome();case"about":return this._renderAbout();case"privacy":return c`
                    <orus-about-dialog
                        ?full-page=${!0}
                        .startTab=${"privacy"}
                        hide-home-btn
                        @navigate-home=${()=>this._navigateTo("home")}
                    ></orus-about-dialog>
                `;case"terms":return this._renderTerms();case"safety":return this._renderSafety();case"notices":return this._renderNotices();case"orus-ai":return this._renderOrusAiPage();case"enterprise":return this._renderEnterprise();default:return this._renderHome()}}_renderHome(){return c`
                <!-- Studio Overview (Company & Orus Product with integrated quotes) -->
                <section class="cgs-roots-widget" aria-label="Comet Game Studio overview">
                    <div class="cgs-roots-mist" aria-hidden="true"></div>
                    ${this._renderStudioPlate()}

                    <div class="cgs-roots-actions">
                        <a class="cgs-store-btn disabled"
                        href="#"
                        aria-disabled="true"
                        tabindex="-1">
                            ${e("hero.store_btn","Orus is not public on Microsoft Store yet")}
                        </a>
                    </div>

                    ${this._editorError?c`
                        <p class="cgs-roots-error">
                            ⚠️ ${e("hero.editor_error","Editor failed to load. Please try again or use the desktop app.")}
                            <span>${this._editorError}</span>
                        </p>
                    `:""}
                </section>
            </div>
        `}_renderOrusAiPage(){return c`
            <orus-about-dialog full-page
                @navigate-home=${()=>this._navigateTo("home")}
            ></orus-about-dialog>
        `}_renderEnterprise(){return c`
            <div class="cgs-enterprise-page">
                <button class="cgs-legal-back" @click=${()=>this._navigateTo("home")}>${e("legal.back","← Back to Home")}</button>

                <!-- Hero -->
                <div class="cgs-ent-hero">
                    <div class="cgs-ent-badge">${e("enterprise.badge","Coming Soon")}</div>
                    <h1 class="cgs-ent-title">${e("enterprise.title","Orus for Enterprise")}</h1>
                    <p class="cgs-ent-subtitle">${e("enterprise.subtitle","Local-first AI that keeps your data, models, and intelligence entirely within your infrastructure. No cloud dependency. No data leaving your premises.")}</p>
                </div>

                <!-- What is Orus -->
                <section class="cgs-ent-section">
                    <h2>${e("enterprise.what.title","What Is Orus?")}</h2>
                    <p>${e("enterprise.what.body","Orus is a multimodal AI system built by Comet Game Studio Ltd. It combines voice, text, vision, OCR, and desktop automation into a single locally-hosted agent. Unlike cloud-dependent AI assistants, Orus runs entirely on your hardware — your data never leaves your network.")}</p>
                    <p>${e("enterprise.what.body2","Powered by the Phi-4 multimodal model architecture and the vLLM inference engine, Orus delivers enterprise-grade performance on standard NVIDIA RTX workstations. No specialised data-centre infrastructure required.")}</p>
                </section>

                <!-- Key Differentiators -->
                <section class="cgs-ent-section">
                    <h2>${e("enterprise.diff.title","Why Orus for Enterprise?")}</h2>
                    <div class="cgs-ent-grid">
                        <article class="cgs-ent-card" style="--ent-accent: #6366f1;">
                            <div class="cgs-ent-card-icon">\ud83d\udd12</div>
                            <h3>${e("enterprise.diff.sovereignty.title","Complete Data Sovereignty")}</h3>
                            <p>${e("enterprise.diff.sovereignty.body","All inference, transcription, vision analysis, and memory storage runs locally. Zero telemetry originating from Orus. Your intellectual property, client conversations, and sensitive documents stay within your premises at all times.")}</p>
                        </article>
                        <article class="cgs-ent-card" style="--ent-accent: #22c55e;">
                            <div class="cgs-ent-card-icon">\ud83d\udcbb</div>
                            <h3>${e("enterprise.diff.airgap.title","Air-Gapped & Offline Operation")}</h3>
                            <p>${e("enterprise.diff.airgap.body","Orus supports fully air-gapped deployment for classified environments. Models load from local storage with no internet required. An offline licence ledger ensures uninterrupted operation without connectivity. Purpose-built for defence, legal, healthcare, and financial institutions.")}</p>
                        </article>
                        <article class="cgs-ent-card" style="--ent-accent: #f59e0b;">
                            <div class="cgs-ent-card-icon">\ud83d\udc65</div>
                            <h3>${e("enterprise.diff.multiuser.title","Multi-User Local Database")}</h3>
                            <p>${e("enterprise.diff.multiuser.body","Multiple team members can share a single licensed workstation with full user isolation. Each user has separate memory, conversation history, preferences, and storage. Role-based access control (Admin, Editor, Viewer) with structured audit logging for compliance.")}</p>
                        </article>
                        <article class="cgs-ent-card" style="--ent-accent: #ec4899;">
                            <div class="cgs-ent-card-icon">\ud83c\udfaf</div>
                            <h3>${e("enterprise.diff.multimodal.title","True Multimodal Intelligence")}</h3>
                            <p>${e("enterprise.diff.multimodal.body","Voice commands with emotive text-to-speech. Real-time vision and screen analysis. Document OCR and form processing. Desktop automation and keyboard injection into Windows applications. One agent handling all modalities — no separate tools required.")}</p>
                        </article>
                    </div>
                </section>

                <!-- Licensing & Deployment -->
                <section class="cgs-ent-section">
                    <h2>${e("enterprise.licensing.title","Licensing & Deployment")}</h2>
                    <div class="cgs-ent-grid">
                        <article class="cgs-ent-card" style="--ent-accent: #a78bfa;">
                            <div class="cgs-ent-card-icon">\ud83d\udcdc</div>
                            <h3>${e("enterprise.licensing.hwid.title","Hardware-Locked Licensing")}</h3>
                            <p>${e("enterprise.licensing.hwid.body","Licences are cryptographically bound to specific devices using secure hardware fingerprinting. Tamper detection on tier and expiry fields prevents unauthorised modifications. Enterprise-grade licence integrity across your fleet.")}</p>
                        </article>
                        <article class="cgs-ent-card" style="--ent-accent: #60a5fa;">
                            <div class="cgs-ent-card-icon">\ud83d\udee1\ufe0f</div>
                            <h3>${e("enterprise.licensing.tiers.title","Enterprise Tier")}</h3>
                            <p>${e("enterprise.licensing.tiers.body","The Enterprise licence tier provides extended context windows, full vision and OCR capabilities, concurrent inference seats per workstation, and access to all modules. Subscription options from monthly to annual, with an offline grace period for disconnected environments.")}</p>
                        </article>
                        <article class="cgs-ent-card" style="--ent-accent: #2dd4bf;">
                            <div class="cgs-ent-card-icon">\ud83c\udf10</div>
                            <h3>${e("enterprise.licensing.lan.title","LAN Browser Access")}</h3>
                            <p>${e("enterprise.licensing.lan.body","Other devices on the same local network connect to Orus through a browser without additional licences. A single GPU workstation can serve your entire team over Wi-Fi with no cloud relay. All processing remains on your licensed host device.")}</p>
                        </article>
                        <article class="cgs-ent-card" style="--ent-accent: #fb923c;">
                            <div class="cgs-ent-card-icon">\u2699\ufe0f</div>
                            <h3>${e("enterprise.licensing.msix.title","Windows MSIX Deployment")}</h3>
                            <p>${e("enterprise.licensing.msix.body","Delivered as a signed MSIX package for Windows. AppContainer sandboxing, automatic updates via Microsoft Store or sideloaded enterprise distribution. Native .NET Desktop Companion for always-on availability. No manual Python setup for end users.")}</p>
                        </article>
                    </div>
                </section>

                <!-- Capabilities -->
                <section class="cgs-ent-section">
                    <h2>${e("enterprise.capabilities.title","Platform Capabilities")}</h2>

                    <div class="cgs-ent-feature-list">
                        <div class="cgs-ent-feature">
                            <div class="cgs-ent-feature-marker" style="background: #6366f1;"></div>
                            <div>
                                <strong>${e("enterprise.cap.voice.title","Voice Interaction & Meeting Transcription")}</strong>
                                <p>${e("enterprise.cap.voice.body","Emotive text-to-speech with multiple emotion styles. Real-time speech-to-text supporting 90+ languages. Speaker diarisation for multi-participant meeting transcription with per-app audio capture. Speaker gating rejects unauthorised speakers before transcription begins.")}</p>
                            </div>
                        </div>
                        <div class="cgs-ent-feature">
                            <div class="cgs-ent-feature-marker" style="background: #22c55e;"></div>
                            <div>
                                <strong>${e("enterprise.cap.memory.title","Persistent Memory & Semantic Search")}</strong>
                                <p>${e("enterprise.cap.memory.body","Vector-database-backed semantic memory with per-user isolation and guest-mode privacy controls. Auto-summarisation of session history prevents context bloat. Real-time memory synthesis for coherent long-term knowledge retention.")}</p>
                            </div>
                        </div>
                        <div class="cgs-ent-feature">
                            <div class="cgs-ent-feature-marker" style="background: #f59e0b;"></div>
                            <div>
                                <strong>${e("enterprise.cap.vision.title","Vision, OCR & Document Processing")}</strong>
                                <p>${e("enterprise.cap.vision.body","Live screen and webcam analysis with smart frame delta detection. Neural OCR for document processing including checkbox detection and form analysis. Image-to-3D generation pipeline for product visualisation. All processing runs locally on your GPU.")}</p>
                            </div>
                        </div>
                        <div class="cgs-ent-feature">
                            <div class="cgs-ent-feature-marker" style="background: #ec4899;"></div>
                            <div>
                                <strong>${e("enterprise.cap.desktop.title","Desktop Automation & Keyboard Injection")}</strong>
                                <p>${e("enterprise.cap.desktop.body","Orus can type directly into Windows applications via keyboard injection. UI Automation controller for precision text selection and editing. Screenshot capture with 4K composite support. Window focus control and application guidance — a hands-free enterprise workflow assistant.")}</p>
                            </div>
                        </div>
                        <div class="cgs-ent-feature">
                            <div class="cgs-ent-feature-marker" style="background: #a78bfa;"></div>
                            <div>
                                <strong>${e("enterprise.cap.gpu.title","VRAM Management & GPU Optimisation")}</strong>
                                <p>${e("enterprise.cap.gpu.body","Dynamic token budget calculation from real-time VRAM availability. Multiple engine profiles from low VRAM to power user with per-component permission gating. VRAM watchdog with automatic garbage collection and emergency safeguards. Activity-oriented GPU allocation to match your workload.")}</p>
                            </div>
                        </div>
                        <div class="cgs-ent-feature">
                            <div class="cgs-ent-feature-marker" style="background: #2dd4bf;"></div>
                            <div>
                                <strong>${e("enterprise.cap.security.title","Security, Governance & Audit")}</strong>
                                <p>${e("enterprise.cap.security.body","Proprietary system prompts compiled and protected in deployment — unreadable and unmodifiable at runtime. Role-based access control with structured audit logging. Forced password change on first login. WebAuthn and Windows Hello passwordless authentication support.")}</p>
                            </div>
                        </div>
                        <div class="cgs-ent-feature">
                            <div class="cgs-ent-feature-marker" style="background: #60a5fa;"></div>
                            <div>
                                <strong>${e("enterprise.cap.perception.title","Fast Perception Engine")}</strong>
                                <p>${e("enterprise.cap.perception.body","Non-LLM event detection with sub-50ms latency for instant reactions. Pre-cached speech responses for common triggers. Multi-channel watchers monitoring speech, logs, visual frames, and model output simultaneously. Priority-based audio preemption for critical system alerts.")}</p>
                            </div>
                        </div>
                        <div class="cgs-ent-feature">
                            <div class="cgs-ent-feature-marker" style="background: #fb923c;"></div>
                            <div>
                                <strong>${e("enterprise.cap.companion.title","Always-On Desktop Companion")}</strong>
                                <p>${e("enterprise.cap.companion.body","A persistent desktop floating assistant stays available across all Windows activities. Dozens of transitional activities from brainstorming to task management, accessible via voice or the ring menu. Living Machine visual transitions with procedural shader effects. Sleep mode to free GPU while keeping the session alive.")}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Target Industries -->
                <section class="cgs-ent-section">
                    <h2>${e("enterprise.industries.title","Designed For")}</h2>
                    <div class="cgs-ent-grid cgs-ent-grid--compact">
                        <div class="cgs-ent-industry">
                            <span class="cgs-ent-industry-icon">\ud83c\udfe6</span>
                            <strong>${e("enterprise.ind.finance","Financial Services")}</strong>
                            <p>${e("enterprise.ind.finance.body","Offline-capable with audit-logged RBAC for regulatory compliance.")}</p>
                        </div>
                        <div class="cgs-ent-industry">
                            <span class="cgs-ent-industry-icon">\ud83c\udfe5</span>
                            <strong>${e("enterprise.ind.healthcare","Healthcare")}</strong>
                            <p>${e("enterprise.ind.healthcare.body","Local processing keeps patient data on premises. No PHI sent to cloud.")}</p>
                        </div>
                        <div class="cgs-ent-industry">
                            <span class="cgs-ent-industry-icon">\ud83d\udee1\ufe0f</span>
                            <strong>${e("enterprise.ind.defence","Defence & Government")}</strong>
                            <p>${e("enterprise.ind.defence.body","Air-gapped deployment with Rust-compiled IP protection.")}</p>
                        </div>
                        <div class="cgs-ent-industry">
                            <span class="cgs-ent-industry-icon">\u2696\ufe0f</span>
                            <strong>${e("enterprise.ind.legal","Legal")}</strong>
                            <p>${e("enterprise.ind.legal.body","Client confidentiality assured. Document OCR and meeting transcription stay local.")}</p>
                        </div>
                        <div class="cgs-ent-industry">
                            <span class="cgs-ent-industry-icon">\ud83c\udfec</span>
                            <strong>${e("enterprise.ind.corporate","Corporate Teams")}</strong>
                            <p>${e("enterprise.ind.corporate.body","One GPU workstation serving your team over LAN. No per-seat cloud fees.")}</p>
                        </div>
                        <div class="cgs-ent-industry">
                            <span class="cgs-ent-industry-icon">\ud83c\udf0d</span>
                            <strong>${e("enterprise.ind.remote","Remote & International")}</strong>
                            <p>${e("enterprise.ind.remote.body","Timezone-agnostic. No latency to cloud. 90+ language speech support.")}</p>
                        </div>
                    </div>
                </section>

                <!-- CTA -->
                <section class="cgs-ent-section cgs-ent-cta">
                    <div class="cgs-ent-cta-box">
                        <h2>${e("enterprise.cta.title","Enterprise Interest Registration Opening Soon")}</h2>
                        <p>${e("enterprise.cta.body","We are preparing the Orus Enterprise programme for organisations that require data-sovereign, locally-hosted AI. Interest registration will open shortly — details on pricing, deployment support, and volume licensing will be available at that time.")}</p>
                        <p class="cgs-ent-cta-contact">${e("enterprise.cta.contact","For early enquiries, reach us at")}
                            <a class="cgs-legal-link" href="mailto:enterprise@cometgamestudio.com">enterprise@cometgamestudio.com</a>
                        </p>
                    </div>
                </section>
            </div>
        `}_renderAbout(){return c`
            <div class="cgs-about-section">
                <div class="cgs-about-icon">
                    <img src="${this._imgBase}/Orus.avif" alt="Orus the Living Machine"
                         style="width:80px;height:80px;object-fit:cover;border-radius:50%;border:2px solid rgba(99,102,241,0.5);" />
                </div>
                <div class="cgs-about-icon-text">${e("about.company","Comet Game Studio Ltd")}</div>
                <h2>${e("about.title","About Comet Game Studio Ltd")}</h2>
                <p>
                    ${e("about.intro","Comet Game Studio Ltd is a dedicated independent studio specialising in AI-powered creative tools and immersive virtual reality experiences. Founded with the vision of making advanced AI accessible and local-first, we prioritize user privacy and data sovereignty above all else.")}
                </p>
                <p>
                    ${e("about.orus_desc","Our flagship product, Orus the Living Machine, is a privacy-first multimodal AI assistant running entirely on your local hardware. Powered by the advanced Phi-4 model architecture, Orus is not just a chatbot — it is a persistent digital entity that evolves with you. All processing runs via the vLLM engine on your device: no cloud dependency. Orus is designed to minimise Orus-originated telemetry. Microsoft Store and Windows platform telemetry operates independently of Orus.")}
                </p>
                <p>
                    ${e("about.multimodal","True Multimodal Interaction naturally through voice, text, or vision. Speak to Orus using the emotive Orpheus TTS engine — it understands interruptions, tone, and context. Share your camera, screen, or drop images for instant analysis, OCR, and UI feedback. Orus can even type directly into your Windows applications based on your voice commands.")}
                </p>
                <p>
                    ${e("about.iol_desc","We also craft immersive VR experiences, including Islands of Life — a cinematic VR adventure placing you in the role of Denid, an explorer uncovering the mysteries of alien worlds to an original orchestral soundtrack. Rated PEGI 12.")}
                </p>
                <p>
                    ${e("about.registered","Comet Game Studio Ltd is registered in England and Wales. Governing law: England and Wales.")}
                </p>

                <!-- Find us online -->
                <div class="cgs-about-links" style="margin-top: 28px;">
                    <a class="cgs-about-link youtube"
                       href="https://www.youtube.com/@CometGameStudio"
                       target="_blank"
                       rel="noopener noreferrer">
                        ▶ ${e("about.youtube","YouTube Channel")}
                    </a>
                    <span class="cgs-about-link ms-store disabled"
                          title="${e("about.store_tooltip","Coming to Microsoft Store soon")}"
                          aria-disabled="true">
                        🪟 ${e("about.store_link","Microsoft Store — Coming Soon")}
                    </span>
                </div>

                <!-- Get In Touch -->
                <div class="cgs-contact-section" style="margin-top: 48px;">
                    <h2>${e("about.contact_title","Get In Touch")}</h2>
                    <p style="color: #94a3b8; font-size: 14px; line-height: 1.8;">
                        ${e("about.contact_desc","Have questions about our products or interested in collaboration? We’d love to hear from you.")}
                    </p>
                    <a class="cgs-contact-link"
                       href="mailto:support@cometgamestudio.com">
                        ✉️ support@cometgamestudio.com
                    </a>
                </div>
            </div>
        `}_renderTerms(){return c`
            <div class="cgs-legal-section">
                <button class="cgs-legal-back" @click=${()=>this._navigateTo("home")}>${e("legal.back","← Back to Home")}</button>
                <h2>${e("terms.title","Terms of Use")}</h2>
                <p class="cgs-legal-meta">${e("terms.meta","Effective: March 2026 · Licensor: Comet Game Studio Ltd · Governing law: England and Wales")}</p>

                <h3>${e("terms.licence.title","1. Licence")}</h3>
                <p>${e("terms.licence.body","Comet Game Studio Ltd grants you a non-exclusive, non-transferable licence to use Orus AI System on a single host device. The licence is personal to you and covers one host device at a time.")}</p>

                <h3>${e("terms.lan.title","2. Local Network Access")}</h3>
                <p>${e("terms.lan.body","Other devices on the same local network or Wi-Fi may connect to Orus through a browser without additional licences. Orus does not provide remote access outside your local network. If you configure port forwarding or VPN access, that is your sole responsibility.")}</p>

                <h3>${e("terms.subscription.title","3. Subscription")}</h3>
                <p>${e("terms.subscription.body","Your subscription controls access to Orus AI System orchestration and service-layer functionality — including the interface, voice engine, memory, tools, and productivity features. It does not grant ownership of or exclusive rights to the underlying AI models, which are separately licenced by their respective copyright holders (see Third-Party Notices).")}</p>

                <h3>${e("terms.restrictions.title","4. Restrictions")}</h3>
                <ul>
                    <li>${e("terms.restrictions.reverse","Do not reverse engineer, decompile, or extract the Orus proprietary vault or compiled binaries.")}</li>
                    <li>${e("terms.restrictions.redistribute","Do not redistribute Orus or sublicence it to others.")}</li>
                    <li>${e("terms.restrictions.unlawful","Do not use Orus to generate content that is unlawful, harmful, or that you are not authorised to create.")}</li>
                </ul>

                <h3>${e("terms.warranty.title","5. Warranty Disclaimer")}</h3>
                <p>${e("terms.warranty.body",'Orus AI System is provided "as is" without warranties of any kind, express or implied, including but not limited to fitness for a particular purpose or accuracy of AI outputs. AI models can produce incorrect, incomplete, or misleading information. Always verify important information independently.')}</p>

                <h3>${e("terms.liability.title","6. Limitation of Liability")}</h3>
                <p>${e("terms.liability.body","To the maximum extent permitted by applicable law, Comet Game Studio Ltd shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of Orus AI System.")}</p>

                <h3>${e("terms.law.title","7. Governing Law")}</h3>
                <p>${e("terms.law.body","These Terms of Use are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.")}</p>

                <h3>${e("terms.contact.title","Contact")}</h3>
                <p>${e("terms.contact.body","Comet Game Studio Ltd")} \u00b7
                <a class="cgs-legal-link" href="mailto:support@cometgamestudio.com">support@cometgamestudio.com</a></p>
            </div>
        `}_renderSafety(){return c`
            <div class="cgs-legal-section">
                <button class="cgs-legal-back" @click=${()=>this._navigateTo("home")}>${e("legal.back","← Back to Home")}</button>
                <h2>${e("safety.title","Safety & Responsible Use")}</h2>
                <p class="cgs-legal-meta">${e("safety.meta","Comet Game Studio Ltd · Orus AI System")}</p>

                <h3>${e("safety.accuracy.title","AI Accuracy")}</h3>
                <p>${e("safety.accuracy.body","Orus AI System uses advanced language and multimodal models. AI models can and do produce incorrect, incomplete, or misleading outputs. Always verify important information from authoritative sources before acting on it. Orus is a tool to assist, not a substitute for professional advice.")}</p>

                <h3>${e("safety.local.title","Local Processing")}</h3>
                <p>${e("safety.local.body","Voice, camera, screen, and document inputs are processed locally on your device by default. This does not remove your legal responsibilities regarding how you use and handle the information processed by Orus.")}</p>

                <h3>${e("safety.consent.title","Consent")}</h3>
                <p>${e("safety.consent.body","You are responsible for obtaining appropriate consent from any person whose voice, image, or personal data is recorded or processed through Orus. Recording others without their consent may be unlawful in your jurisdiction.")}</p>

                <h3>${e("safety.remote.title","No Remote Access by Default")}</h3>
                <p>${e("safety.remote.body","Orus does not send data to remote servers by default. Other devices on your local network may connect via browser. Orus does not provide internet-facing remote access unless you explicitly configure it — that configuration and its security implications are your responsibility.")}</p>

                <h3>${e("safety.hardware.title","Hardware Responsibility")}</h3>
                <p>${e("safety.hardware.body","Orus AI System requires a compatible GPU and hardware to function effectively. Hardware selection, maintenance, thermal management, and energy costs are your responsibility. Comet Game Studio Ltd is not liable for hardware damage resulting from running AI workloads.")}</p>

                <h3>${e("safety.contact.title","Contact")}</h3>
                <p>${e("safety.contact.body","To report safety concerns, contact us at")}
                <a class="cgs-legal-link" href="mailto:support@cometgamestudio.com">support@cometgamestudio.com</a>.</p>
            </div>
        `}_renderNotices(){return c`
            <div class="cgs-legal-section">
                <button class="cgs-legal-back" @click=${()=>this._navigateTo("home")}>${e("legal.back","← Back to Home")}</button>
                <h2>${e("notices.title","Third-Party Notices")}</h2>
                <p class="cgs-legal-meta">${e("notices.meta","Comet Game Studio Ltd · Orus AI System")}</p>
                <p>${e("notices.intro","Orus AI System includes components from third-party open-source projects. The following notices are provided in compliance with their respective licences.")}</p>

                <h3>${e("notices.models.title","AI Models")}</h3>
                <ul>
                    <li><strong>Phi-4 Multimodal</strong> \u2014 Copyright \u00a9 Microsoft Corporation. MIT Licence.</li>
                    <li><strong>Whisper</strong> \u2014 Copyright \u00a9 OpenAI. MIT Licence.</li>
                    <li><strong>Orpheus TTS</strong> \u2014 Copyright \u00a9 Canopy Labs. Apache 2.0 Licence.</li>
                    <li><strong>Stable Fast 3D (SF3D)</strong> \u2014 Copyright \u00a9 Stability AI. Stability AI Research Licence.</li>
                </ul>

                <h3>${e("notices.runtime.title","Inference & Runtime")}</h3>
                <ul>
                    <li><strong>vLLM</strong> \u2014 Copyright \u00a9 vLLM contributors. Apache 2.0 Licence.</li>
                    <li><strong>PyTorch</strong> \u2014 Copyright \u00a9 PyTorch contributors. BSD 3-Clause Licence.</li>
                    <li><strong>FastAPI</strong> \u2014 Copyright \u00a9 Sebasti\u00e1n Ram\u00edrez. MIT Licence.</li>
                    <li><strong>Python</strong> \u2014 Copyright \u00a9 Python Software Foundation. PSF Licence.</li>
                    <li><strong>Uvicorn</strong> \u2014 Copyright \u00a9 Encode OSS Ltd. BSD 3-Clause Licence.</li>
                </ul>

                <h3>${e("notices.frontend.title","Frontend")}</h3>
                <ul>
                    <li><strong>LitElement / Lit</strong> \u2014 Copyright \u00a9 Google LLC. BSD 3-Clause Licence.</li>
                    <li><strong>Three.js</strong> \u2014 Copyright \u00a9 mrdoob and contributors. MIT Licence.</li>
                    <li><strong>Vite</strong> \u2014 Copyright \u00a9 Evan You and contributors. MIT Licence.</li>
                    <li><strong>TypeScript</strong> \u2014 Copyright \u00a9 Microsoft Corporation. Apache 2.0 Licence.</li>
                </ul>

                <h3>${e("notices.apache.title","Apache 2.0 NOTICE")}</h3>
                <p>${e("notices.apache.body","For Apache 2.0 licenced packages (vLLM, Orpheus TTS, TypeScript), the full NOTICE file contents are reproduced in the NOTICE file distributed with the Orus AI System installation. Source code for these components is available at their respective repositories.")}</p>

                <p class="cgs-legal-note">${e("notices.summary_note","This list is a summary. For the complete and authoritative list of dependencies and their licences, refer to the NOTICE file included in your Orus installation, or run pip-licenses and npm ls in your Orus installation environment.")}</p>
            </div>
        `}};m._QUOTES=[{text:'"Man is made to be the plaything of God ... the noblest of pastimes."',thinker:"Plato",source:"Laws",portrait:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Plato_Silanion_Musei_Capitolini_MC1377.jpg/440px-Plato_Silanion_Musei_Capitolini_MC1377.jpg"},{text:'"Time is a child ... playing draughts."',thinker:"Heraclitus",source:"Fragment 52",portrait:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Heraclitus%2C_Johannes_Moreelse.jpg/440px-Heraclitus%2C_Johannes_Moreelse.jpg"},{text:`"All the world's a stage ... merely players."`,thinker:"Shakespeare",source:"As You Like It",portrait:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/440px-Shakespeare.jpg"},{text:'"Man only plays ... when he plays."',thinker:"Schiller",source:"Aesthetical and Philosophical Essays",portrait:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Friedrich_schiller.jpg/440px-Friedrich_schiller.jpg"},{text:'"Innocence is the child ... a game, a self-rolling wheel."',thinker:"Nietzsche",source:"Thus Spoke Zarathustra",portrait:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Nietzsche187a.jpg/440px-Nietzsche187a.jpg"},{text:'"On the stage of the world ... their little part."',thinker:"Schopenhauer",source:"The Essays of Arthur Schopenhauer",portrait:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Arthur_Schopenhauer_by_J_Sch%C3%A4fer%2C_1859b.jpg/440px-Arthur_Schopenhauer_by_J_Sch%C3%A4fer%2C_1859b.jpg"},{text:'"Life is nothing until it is lived ... make sense of."',thinker:"Sartre",source:"Existentialism Is a Humanism",portrait:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Jean-Paul_Sartre_FP.jpg/440px-Jean-Paul_Sartre_FP.jpg"},{text:'"Play is older than culture."',thinker:"Huizinga",source:"Homo Ludens",portrait:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Johan_Huizinga.jpg/440px-Johan_Huizinga.jpg"},{text:'"The life-game has to be purged ... rules."',thinker:"Alan Watts",source:"The Taboo Against Knowing Who You Are",portrait:"https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Alan_Watts.png/440px-Alan_Watts.png"},{text:'"The only purpose of the game ... keep everyone in play."',thinker:"James P. Carse",source:"Finite and Infinite Games",portrait:""}];m._SHOWCASE_ITEMS=[{type:"video",title:"Orus Trailer",desc:"Meet Orus — privacy-first, multimodal AI running entirely on your local hardware.",tag:"AI",accent:"#60a5fa",section:"ai",youtubeId:"xSacmd2pQOw"},{type:"video",title:"Hardware Specs",desc:"Minimum hardware requirements to run Orus the Living Machine locally.",tag:"AI",accent:"#60a5fa",section:"ai",youtubeId:"GA5QfkVvVlw"},{type:"video",title:"Ring Menu",desc:"Watch Orus navigate its 3D Ring Menu with live voice interaction.",tag:"AI",accent:"#a78bfa",section:"ai",youtubeId:"4I3WJm9BObQ"},{type:"video",title:"Islands of Life OST",desc:"Official soundtrack visualiser for our cinematic VR adventure.",tag:"VR · Music",accent:"#f59e0b",section:"vr",youtubeId:"qJRQyZk3m8g"}];m.styles=re`
        :host {
            display: block;
            width: 100%;
            height: 100%;
            min-height: 100dvh;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background: #0a0a0f;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            color: #e2e8f0;
            -webkit-user-select: none;
            user-select: none;
            -webkit-tap-highlight-color: transparent;
            touch-action: manipulation;
            overscroll-behavior: none;
            scrollbar-gutter: stable both-edges;
            box-sizing: border-box;
        }

        /* Fixed top nav layout variables */
        :host {
            --cgs-nav-height: 72px;
        }

        /* ── Loading Overlay ─────────────────────────────────── */

        .loading-overlay {
            position: absolute;
            inset: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: #0a0a0f;
            z-index: 1000;
            gap: 20px;
        }

        .loading-spinner {
            width: 48px;
            height: 48px;
            border: 3px solid rgba(99, 102, 241, 0.2);
            border-top-color: #6366f1;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        .loading-text {
            font-family: 'Orbitron', sans-serif;
            font-size: 14px;
            color: #94a3b8;
            letter-spacing: 2px;
            text-transform: uppercase;
        }

        .loading-bar {
            width: 240px;
            height: 3px;
            background: rgba(99, 102, 241, 0.1);
            border-radius: 2px;
            overflow: hidden;
        }

        .loading-bar-fill {
            height: 100%;
            background: #6366f1;
            border-radius: 2px;
            transition: width 0.3s ease;
        }

        /* ── Error Overlay ─────────────────────────────────── */

        .error-overlay {
            position: absolute;
            inset: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: #0a0a0f;
            z-index: 1000;
            gap: 16px;
        }

        .error-icon { font-size: 48px; }

        .error-text {
            color: #ef4444;
            font-size: 14px;
            max-width: 480px;
            text-align: center;
        }

        /* ── Main Layout ───────────────────────────────────── */

        .cgs-main {
            position: relative;
            width: 100%;
            height: 100%;
            min-height: 100dvh;
            min-width: 0;
            display: flex;
            flex-direction: column;
            padding-top: var(--cgs-nav-height);
        }

        /* ── 3D Canvas Background ──────────────────────────── */

        .cgs-canvas-container {
            position: absolute;
            inset: 0;
            z-index: 0;
        }

        #cgs-canvas {
            width: 100%;
            height: 100%;
            display: block;
        }

        .css-fallback-bg {
            width: 100%;
            height: 100%;
            background: radial-gradient(ellipse at center, #1e1b4b 0%, #0a0a0f 70%);
        }

        /* ── Top Navigation Bar ────────────────────────────── */

        .cgs-nav {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: var(--cgs-nav-height);
            z-index: 40;
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            align-items: center;
            padding: calc(16px + env(safe-area-inset-top)) calc(32px + env(safe-area-inset-right)) 16px calc(32px + env(safe-area-inset-left));
            background: rgba(10, 10, 15, 0.9);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid rgba(99, 102, 241, 0.15);
            box-sizing: border-box;
        }

        .cgs-logo {
            font-family: 'Orbitron', sans-serif;
            font-size: 22px;
            font-weight: 700;
            color: #ffffff;
            letter-spacing: 3px;
            text-transform: uppercase;
            cursor: pointer;
            flex-shrink: 0;
            justify-self: start;
            display: inline-flex;
            align-items: center;
            justify-content: flex-start;
            padding: 0;
            margin: 0;
            border: none;
            background: none;
            appearance: none;
            -webkit-appearance: none;
            font: inherit;
            touch-action: manipulation;
        }

        .cgs-nav-links {
            display: flex;
            gap: 24px;
            justify-self: end;
            min-width: 0;
        }

        .cgs-lang-selector {
            position: relative;
            flex-shrink: 0;
            justify-self: center;
        }

        .cgs-nav-link {
            font-size: 13px;
            font-weight: 500;
            color: #94a3b8;
            letter-spacing: 1px;
            text-transform: uppercase;
            cursor: pointer;
            padding: 6px 12px;
            border-radius: 6px;
            transition: all 0.2s ease;
            border: none;
            background: none;
            touch-action: manipulation;
        }

        .cgs-nav-link:hover {
            color: #c4b5fd;
            background: rgba(99, 102, 241, 0.1);
        }

        .cgs-nav-link.active {
            color: #a78bfa;
            background: rgba(99, 102, 241, 0.15);
        }

        .cgs-nav-link--accent {
            color: #c4b5fd;
            border: 1px solid rgba(139, 92, 246, 0.3);
            background: rgba(99, 102, 241, 0.1);
        }
        .cgs-nav-link--accent:hover {
            color: #e0d4ff;
            border-color: rgba(139, 92, 246, 0.5);
            background: rgba(99, 102, 241, 0.2);
        }

        /* ── Language Selector ─────────────────────────────── */

        .cgs-lang-btn {
            display: flex;
            align-items: center;
            gap: 6px;
            padding: 5px 12px;
            border: 1px solid rgba(99, 102, 241, 0.25);
            border-radius: 6px;
            background: rgba(10, 10, 15, 0.7);
            color: #94a3b8;
            font-size: 12px;
            cursor: pointer;
            transition: all 0.2s ease;
            font-family: inherit;
            touch-action: manipulation;
        }

        .cgs-lang-btn:hover {
            border-color: rgba(99, 102, 241, 0.5);
            color: #c4b5fd;
        }

        .cgs-lang-dropdown {
            position: absolute;
            top: 100%;
            right: 0;
            margin-top: 4px;
            background: rgba(12, 12, 22, 0.97);
            border: 1px solid rgba(99, 102, 241, 0.3);
            border-radius: 8px;
            padding: 4px;
            min-width: 180px;
            max-height: 320px;
            overflow-y: auto;
            z-index: 100;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
        }

        .cgs-lang-option {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 7px 10px;
            border: none;
            border-radius: 5px;
            background: transparent;
            color: #94a3b8;
            font-size: 12px;
            cursor: pointer;
            width: 100%;
            text-align: left;
            transition: all 0.15s ease;
            font-family: inherit;
            touch-action: manipulation;
        }

        .cgs-lang-option:hover {
            background: rgba(99, 102, 241, 0.1);
            color: #c4b5fd;
        }

        .cgs-lang-option.active {
            background: rgba(99, 102, 241, 0.15);
            color: #a5b4fc;
            font-weight: 500;
        }

        .cgs-lang-flag { font-size: 15px; }
        .cgs-lang-native { flex: 1; }
        .cgs-lang-code { font-size: 10px; color: #475569; text-transform: uppercase; }

        /* ── Content Area ──────────────────────────────────── */

        .cgs-content {
            position: relative;
            z-index: 5;
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding: 16px calc(32px + env(safe-area-inset-right)) calc(40px + env(safe-area-inset-bottom)) calc(32px + env(safe-area-inset-left));
            overflow-y: auto;
            overflow-x: hidden;
            overscroll-behavior-y: contain;
            min-width: 0;
            min-height: 0;
            width: 100%;
            box-sizing: border-box;
            -webkit-overflow-scrolling: touch;
        }

        /* ── Hero Section ──────────────────────────────────── */

        .cgs-hero {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            max-width: 1440px;
            width: 100%;
            padding-top: 6px;
            gap: 12px;
        }

        .cgs-hero-title {
            font-family: 'Orbitron', sans-serif;
            font-size: 48px;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 16px;
            letter-spacing: 2px;
        }

        .cgs-hero-subtitle {
            font-family: 'Cormorant Garamond', serif;
            font-size: 22px;
            color: #94a3b8;
            margin-bottom: 32px;
            line-height: 1.6;
        }

        .cgs-hero-tagline {
            font-family: 'Orbitron', sans-serif;
            font-size: 26px;
            font-weight: 600;
            color: #6366f1;
            letter-spacing: 6px;
            text-transform: uppercase;
        }

        .cgs-roots-widget {
            position: relative;
            width: 100%;
            max-width: 1400px;
            padding: 28px;
            box-sizing: border-box;
            border-radius: 40px;
            overflow: hidden;
            background:
                radial-gradient(circle at 50% 14%, rgba(255, 255, 255, 0.12), transparent 34%),
                radial-gradient(circle at 18% 14%, rgba(56, 189, 248, 0.14), transparent 28%),
                radial-gradient(circle at 82% 78%, rgba(192, 132, 252, 0.12), transparent 30%),
                linear-gradient(180deg, rgba(6, 10, 20, 0.92), rgba(8, 11, 19, 0.86));
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow:
                0 36px 120px rgba(1, 4, 14, 0.58),
                inset 0 1px 0 rgba(255, 255, 255, 0.05);
            isolation: isolate;
        }

        .cgs-roots-widget::before {
            content: '';
            position: absolute;
            inset: -18% -10% auto;
            height: 72%;
            background:
                radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.12), transparent 26%),
                radial-gradient(circle at 50% 42%, rgba(99, 102, 241, 0.18), transparent 42%);
            filter: blur(28px);
            opacity: 0.7;
            pointer-events: none;
            z-index: -1;
        }

        .cgs-roots-mist {
            position: absolute;
            inset: 0;
            background:
                radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.10), transparent 28%),
                radial-gradient(circle at 20% 10%, rgba(56, 189, 248, 0.08), transparent 22%),
                radial-gradient(circle at 80% 12%, rgba(248, 113, 113, 0.06), transparent 24%),
                radial-gradient(circle at 50% 60%, transparent 46%, rgba(2, 6, 23, 0.35) 100%);
            mix-blend-mode: screen;
            opacity: 0.85;
            pointer-events: none;
        }

        .cgs-roots-widget > * {
            position: relative;
            z-index: 1;
        }

        .cgs-roots-widget .cgs-quote-stage {
            margin-bottom: 18px;
        }

        .cgs-roots-actions {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 12px;
            margin-top: 18px;
        }

        .cgs-roots-error {
            margin: 14px auto 0;
            max-width: 520px;
            color: #fca5a5;
            font-size: 12px;
            line-height: 1.6;
            text-align: center;
        }

        .cgs-roots-error span {
            display: block;
            margin-top: 4px;
            opacity: 0.72;
            font-size: 11px;
        }

        .cgs-quote-stage {
            --quote-accent: #f59e0b;
            position: relative;
            width: 100%;
            margin: 0 auto;
            padding: 26px;
            border-radius: 34px;
            overflow: hidden;
            background:
                radial-gradient(circle at 50% 14%, rgba(255, 255, 255, 0.12), transparent 22%),
                radial-gradient(circle at 50% 48%, rgba(255, 255, 255, 0.06), transparent 44%),
                linear-gradient(155deg, rgba(5, 10, 22, 0.90), rgba(17, 14, 31, 0.82));
            border: 1px solid rgba(255, 255, 255, 0.09);
            box-shadow:
                0 26px 80px rgba(1, 4, 14, 0.52),
                inset 0 1px 0 rgba(255, 255, 255, 0.06);
            isolation: isolate;
        }

        .cgs-quote-stage::before {
            content: '';
            position: absolute;
            inset: 0;
            background:
                radial-gradient(circle at 14% 18%, var(--quote-accent), transparent 30%),
                radial-gradient(circle at 86% 80%, rgba(99, 102, 241, 0.42), transparent 28%),
                radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.08), transparent 48%);
            filter: blur(16px);
            opacity: 0.22;
            transform: scale(1.06);
            pointer-events: none;
            z-index: -1;
        }

        .cgs-quote-stage::after {
            content: '';
            position: absolute;
            inset: 12px;
            border-radius: 26px;
            background:
                radial-gradient(circle at 50% 24%, rgba(255, 255, 255, 0.08), transparent 26%),
                radial-gradient(ellipse at center, transparent 44%, rgba(2, 6, 23, 0.34) 100%);
            pointer-events: none;
            z-index: -1;
        }

        .cgs-quote-stage-head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 14px;
        }

        .cgs-quote-kicker,
        .cgs-quote-status,
        .cgs-quote-counter,
        .cgs-quote-mode {
            font-family: 'Orbitron', sans-serif;
            text-transform: uppercase;
            letter-spacing: 1.8px;
        }

        .cgs-quote-kicker {
            font-size: 11px;
            color: #f8fafc;
            opacity: 0.92;
        }

        .cgs-quote-stage-meta {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
            justify-content: flex-end;
        }

        .cgs-quote-status,
        .cgs-quote-counter,
        .cgs-quote-mode {
            font-size: 10px;
            color: #cbd5e1;
        }

        .cgs-quote-title {
            margin: 0 0 8px;
            font-family: 'Cormorant Garamond', serif;
            font-size: clamp(46px, 6vw, 74px);
            line-height: 0.95;
            color: #f8fafc;
            letter-spacing: 1px;
            overflow-wrap: anywhere;
        }

        .cgs-quote-summary {
            max-width: 720px;
            margin: 0 auto 22px;
            font-size: 15px;
            line-height: 1.7;
            color: #a5b4c7;
        }

        /* Animated quote fade transition */
        .cgs-quote-animated {
            transition: opacity 0.4s ease;
            opacity: 1;
        }

        .cgs-quote-animated.fading {
            opacity: 0;
        }

        .cgs-quote-stage--philosophy {
            border-radius: 28px;
            height: 200px;
            max-width: 760px;
            margin-left: auto;
            margin-right: auto;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        /* Philosophy plate: quote body + meta fill the flex row, progress at bottom */
        .cgs-quote-stage--philosophy .cgs-quote-animated {
            flex: 1;
            min-height: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        /* ── Quote Hero (integrated slideshow within studio card) ── */

        .cgs-quote-hero {
            position: relative;
            overflow: hidden;
            border-radius: 22px;
            padding: 14px 26px 10px;
            margin-bottom: 14px;
            min-height: 90px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background:
                radial-gradient(circle at 50% 50%, rgba(5, 10, 22, 0.55), rgba(5, 10, 22, 0.92) 70%),
                linear-gradient(180deg, rgba(8, 12, 24, 0.72), rgba(5, 10, 18, 0.92));
        }

        .cgs-quote-portrait-bg {
            position: absolute;
            inset: 0;
            background-size: cover;
            background-position: center 20%;
            filter: grayscale(100%) sepia(12%) saturate(60%) brightness(0.45) contrast(1.1);
            opacity: 0.35;
            transition: opacity 0.5s ease, background-image 0.5s ease;
            pointer-events: none;
            z-index: 0;
        }

        /* Radial vignette overlay to fade portrait from center outward */
        .cgs-quote-portrait-bg::after {
            content: '';
            position: absolute;
            inset: 0;
            background:
                radial-gradient(circle at 50% 50%, transparent 10%, rgba(5, 10, 22, 0.4) 40%, rgba(5, 10, 22, 0.85) 65%, rgba(5, 10, 22, 1) 85%);
            pointer-events: none;
        }

        .cgs-quote-hero-content {
            position: relative;
            z-index: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex: 1;
            min-height: 0;
            transition: opacity 0.4s ease;
            opacity: 1;
        }

        .cgs-quote-hero-content.fading {
            opacity: 0;
        }

        .cgs-quote-hero .cgs-quote-progress {
            position: relative;
            z-index: 1;
        }

        .cgs-quote-stage.cgs-quote-stage--studio {
            padding: 20px 20px 18px;
            border-radius: 30px;
        }

        .cgs-quote-stage--studio .cgs-quote-summary {
            max-width: 760px;
            margin-bottom: 18px;
            font-size: 14px;
        }

        /* Showcase nav when placed on left panel */
        .cgs-root-panel-copy .cgs-showcase-nav {
            margin-top: 14px;
            flex-wrap: wrap;
        }

        .cgs-quote-card {
            position: relative;
            display: block;
            width: 100%;
            margin: 0;
            padding: 24px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 24px;
            background: linear-gradient(180deg, rgba(8, 12, 24, 0.72), rgba(5, 10, 18, 0.92));
            color: inherit;
            text-align: left;
            cursor: pointer;
            transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .cgs-quote-card:hover,
        .cgs-quote-card:focus-visible {
            border-color: rgba(255, 255, 255, 0.16);
            box-shadow: 0 18px 40px rgba(15, 23, 42, 0.35);
            transform: translateY(-1px);
            outline: none;
        }

        .cgs-quote-meta {
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 14px;
        }

        .cgs-quote-thinker {
            font-family: 'Orbitron', sans-serif;
            font-size: 15px;
            letter-spacing: 1.2px;
            color: #f8fafc;
            margin-bottom: 6px;
        }

        .cgs-quote-source {
            font-size: 12px;
            color: #94a3b8;
            letter-spacing: 0.3px;
        }

        .cgs-quote-body {
            max-width: 780px;
            margin: 0 auto 0;
            font-family: 'Cormorant Garamond', serif;
            font-size: clamp(22px, 2.8vw, 34px);
            line-height: 1.08;
            color: #f8fafc;
            text-wrap: balance;
            text-align: center;
            transition: color 0.2s ease;
        }

        .cgs-quote-body.is-expanded {
            color: #ffffff;
        }

        .cgs-quote-helper {
            max-width: 720px;
            font-size: 14px;
            line-height: 1.7;
            color: #a9b7cb;
        }

        .cgs-quote-progress {
            display: grid;
            grid-template-columns: repeat(10, minmax(0, 1fr));
            gap: 8px;
            margin-top: 18px;
        }

        .cgs-quote-progress-segment {
            height: 3px;
            border-radius: 999px;
            background: rgba(148, 163, 184, 0.18);
            overflow: hidden;
        }

        .cgs-quote-progress-segment.active {
            background: linear-gradient(90deg, var(--segment-accent, #6366f1), rgba(255, 255, 255, 0.92));
            box-shadow: 0 0 18px rgba(255, 255, 255, 0.08);
        }

        .cgs-quote-portrait-shell {
            position: relative;
            min-height: 220px;
            margin-top: 22px;
            border-radius: 20px;
            overflow: hidden;
            background:
                linear-gradient(180deg, rgba(12, 18, 31, 0.22), rgba(5, 10, 18, 0.88)),
                radial-gradient(circle at 50% 12%, rgba(255, 255, 255, 0.12), transparent 46%);
            border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .cgs-quote-portrait-shell::after {
            content: '';
            position: absolute;
            inset: 0;
            background:
                linear-gradient(180deg, rgba(2, 6, 23, 0.02), rgba(2, 6, 23, 0.72)),
                linear-gradient(90deg, rgba(2, 6, 23, 0.68), transparent 26%, transparent 74%, rgba(2, 6, 23, 0.68));
            pointer-events: none;
        }

        .cgs-quote-portrait {
            display: block;
            width: 100%;
            height: 220px;
            object-fit: cover;
            object-position: center 20%;
            filter: grayscale(100%) sepia(18%) saturate(80%) brightness(0.78) contrast(1.06);
            opacity: 0.35;
            transform: scale(1.03);
        }

        .cgs-quote-portrait-fallback {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 220px;
            background:
                radial-gradient(circle at top, rgba(255, 255, 255, 0.08), transparent 38%),
                linear-gradient(135deg, rgba(99, 102, 241, 0.24), rgba(245, 158, 11, 0.18));
        }

        .cgs-quote-portrait-monogram {
            font-family: 'Orbitron', sans-serif;
            font-size: clamp(52px, 8vw, 112px);
            letter-spacing: 0.32em;
            color: rgba(248, 250, 252, 0.18);
            transform: translateX(0.16em);
        }

        .cgs-quote-portrait-caption {
            position: absolute;
            right: 16px;
            bottom: 14px;
            left: 16px;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 1.6px;
            color: rgba(226, 232, 240, 0.72);
        }

        .cgs-quote-chip-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 10px;
            margin-top: 16px;
        }

        .cgs-quote-chip {
            display: flex;
            flex-direction: column;
            gap: 8px;
            min-height: 92px;
            padding: 14px 14px 12px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 16px;
            background: rgba(9, 14, 25, 0.58);
            color: #dbe4f0;
            text-align: left;
            cursor: pointer;
            transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
            font-family: inherit;
        }

        .cgs-quote-chip:hover,
        .cgs-quote-chip:focus-visible {
            transform: translateY(-1px);
            border-color: rgba(255, 255, 255, 0.16);
            background: rgba(12, 20, 34, 0.78);
            outline: none;
        }

        .cgs-quote-chip.active {
            border-color: var(--quote-accent);
            box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04);
            background: linear-gradient(180deg, rgba(15, 23, 42, 0.88), rgba(9, 14, 25, 0.92));
        }

        .cgs-quote-chip-head {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .cgs-quote-chip-index {
            font-family: 'Orbitron', sans-serif;
            font-size: 10px;
            letter-spacing: 1.4px;
            color: #94a3b8;
        }

        .cgs-quote-chip-name {
            font-family: 'Orbitron', sans-serif;
            font-size: 11px;
            letter-spacing: 1.1px;
            text-transform: uppercase;
            color: #f8fafc;
        }

        .cgs-quote-chip-snippet {
            font-size: 12px;
            line-height: 1.45;
            color: #aebcd0;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .cgs-quote-stage.cgs-quote-stage--radial {
            max-width: 980px;
            padding: 20px 20px 18px;
            border-radius: 30px;
        }

        .cgs-quote-stage--radial .cgs-quote-title {
            font-size: clamp(34px, 4.6vw, 58px);
            margin-bottom: 6px;
        }

        .cgs-quote-stage--radial .cgs-quote-summary {
            max-width: 760px;
            margin-bottom: 18px;
            font-size: 14px;
        }

        .cgs-quote-radial-shell {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 360px;
            margin-top: 4px;
        }

        .cgs-quote-orbit {
            position: absolute;
            inset: 0;
            border-radius: 28px;
        }

        .cgs-quote-orbit-chip {
            position: absolute;
            top: 50%;
            left: 50%;
            display: flex;
            flex-direction: column;
            gap: 6px;
            width: min(184px, 32vw);
            min-height: 88px;
            padding: 12px 13px 11px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 18px;
            background: rgba(8, 12, 23, 0.62);
            color: #dbe4f0;
            text-align: left;
            cursor: pointer;
            pointer-events: auto;
            transform: translate(-50%, -50%) rotate(var(--orbit-angle)) translateX(var(--orbit-radius)) rotate(calc(-1 * var(--orbit-angle))) scale(var(--orbit-scale, 1));
            transform-origin: center;
            transition: transform 0.22s ease, border-color 0.22s ease, background 0.22s ease, box-shadow 0.22s ease;
            font-family: inherit;
            box-shadow: 0 10px 22px rgba(1, 4, 14, 0.18);
        }

        .cgs-quote-orbit-chip:hover,
        .cgs-quote-orbit-chip:focus-visible {
            border-color: rgba(255, 255, 255, 0.18);
            background: rgba(12, 20, 34, 0.84);
            outline: none;
            box-shadow: 0 14px 26px rgba(1, 4, 14, 0.26);
        }

        .cgs-quote-orbit-chip.active {
            border-color: var(--orbit-accent, #6366f1);
            background: linear-gradient(180deg, rgba(15, 23, 42, 0.92), rgba(9, 14, 25, 0.94));
            box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.04), 0 16px 28px rgba(15, 23, 42, 0.22);
        }

        .cgs-quote-orbit-chip-name {
            font-family: 'Orbitron', sans-serif;
            font-size: 12px;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #f8fafc;
        }

        .cgs-quote-orbit-chip-source {
            font-size: 10px;
            letter-spacing: 1.2px;
            text-transform: uppercase;
            color: #94a3b8;
        }

        .cgs-quote-orbit-chip-snippet {
            font-size: 11px;
            line-height: 1.45;
            color: #aebcd0;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .cgs-quote-core {
            position: relative;
            z-index: 2;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 8px;
            width: min(430px, 82%);
            min-height: 250px;
            padding: 24px 26px 22px;
            border: 1px solid rgba(255, 255, 255, 0.10);
            border-radius: 999px;
            background:
                radial-gradient(circle at 50% 18%, rgba(255, 255, 255, 0.12), transparent 22%),
                radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.06), transparent 46%),
                linear-gradient(180deg, rgba(7, 12, 22, 0.88), rgba(5, 10, 18, 0.94));
            color: inherit;
            text-align: center;
            cursor: pointer;
            box-shadow:
                0 24px 60px rgba(1, 4, 14, 0.42),
                inset 0 1px 0 rgba(255, 255, 255, 0.08),
                inset 0 -18px 36px rgba(0, 0, 0, 0.24);
            overflow: hidden;
        }

        .cgs-quote-core::before {
            content: '';
            position: absolute;
            inset: 11px 16px;
            border-radius: inherit;
            background:
                radial-gradient(circle at 50% 18%, var(--quote-accent), transparent 34%),
                radial-gradient(circle at 50% 84%, rgba(255, 255, 255, 0.06), transparent 30%);
            filter: blur(18px);
            opacity: 0.22;
            pointer-events: none;
        }

        .cgs-quote-core:hover,
        .cgs-quote-core:focus-visible {
            border-color: rgba(255, 255, 255, 0.18);
            outline: none;
            transform: translateY(-1px);
        }

        .cgs-quote-core-kicker,
        .cgs-quote-core-thinker,
        .cgs-quote-core-source,
        .cgs-quote-core-helper {
            position: relative;
            z-index: 1;
        }

        .cgs-quote-core-kicker {
            font-family: 'Orbitron', sans-serif;
            font-size: 10px;
            letter-spacing: 1.8px;
            text-transform: uppercase;
            color: #cbd5e1;
            opacity: 0.9;
        }

        .cgs-quote-core-thinker {
            font-family: 'Orbitron', sans-serif;
            font-size: 15px;
            letter-spacing: 1.2px;
            text-transform: uppercase;
            color: #f8fafc;
        }

        .cgs-quote-core-source {
            font-size: 11px;
            letter-spacing: 1.4px;
            text-transform: uppercase;
            color: var(--quote-accent, #94a3b8);
        }

        .cgs-quote-core-line {
            max-width: 330px;
            font-family: 'Cormorant Garamond', serif;
            font-size: clamp(26px, 3.6vw, 40px);
            line-height: 1.06;
            color: #f8fafc;
            text-wrap: balance;
        }

        .cgs-quote-core-line.is-expanded {
            color: #ffffff;
        }

        .cgs-quote-core-helper {
            max-width: 300px;
            font-size: 12px;
            line-height: 1.5;
            color: #a9b7cb;
        }

        .cgs-quote-stage-footer {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;
            margin-top: 14px;
            padding-top: 12px;
            border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .cgs-quote-stage-reflection {
            max-width: 680px;
            font-size: 13px;
            line-height: 1.7;
            color: #9fb0c9;
        }

        .cgs-quote-stage--radial .cgs-quote-mode {
            white-space: nowrap;
            align-self: flex-start;
        }

        .cgs-roots-widget {
            position: relative;
            width: 100%;
            max-width: 1400px;
            padding: 20px;
            border-radius: 32px;
            overflow: hidden;
            background:
                radial-gradient(circle at 50% 10%, rgba(255, 255, 255, 0.10), transparent 28%),
                radial-gradient(circle at 20% 14%, rgba(56, 189, 248, 0.12), transparent 24%),
                radial-gradient(circle at 82% 76%, rgba(192, 132, 252, 0.10), transparent 28%),
                linear-gradient(180deg, rgba(6, 10, 20, 0.92), rgba(8, 11, 19, 0.88));
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow:
                0 32px 96px rgba(1, 4, 14, 0.54),
                inset 0 1px 0 rgba(255, 255, 255, 0.05);
            isolation: isolate;
        }

        .cgs-roots-widget::before {
            content: '';
            position: absolute;
            inset: -16% -8% auto;
            height: 62%;
            background:
                radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.10), transparent 28%),
                radial-gradient(circle at 50% 44%, rgba(99, 102, 241, 0.16), transparent 44%);
            filter: blur(24px);
            opacity: 0.64;
            pointer-events: none;
            z-index: -1;
        }

        .cgs-roots-widget .cgs-quote-stage {
            margin-bottom: 0;
        }

        .cgs-roots-actions {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 12px;
            margin-top: 16px;
        }

        .cgs-roots-error {
            margin: 12px auto 0;
            max-width: 520px;
            color: #fca5a5;
            font-size: 12px;
            line-height: 1.6;
            text-align: center;
        }

        .cgs-roots-error span {
            display: block;
            margin-top: 4px;
            opacity: 0.72;
            font-size: 11px;
        }

        .cgs-root-panel {
            display: grid;
            grid-template-columns: minmax(0, 1fr);
            gap: 18px;
            align-items: stretch;
            margin-top: 18px;
            padding: 20px;
            min-width: 0;
            border-radius: 28px;
            background:
                radial-gradient(circle at 14% 10%, rgba(255, 255, 255, 0.08), transparent 32%),
                linear-gradient(180deg, rgba(8, 12, 24, 0.72), rgba(5, 10, 18, 0.92));
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 18px 44px rgba(15, 23, 42, 0.28);
        }

        .cgs-root-panel-copy {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 10px;
            min-width: 0;
        }

        .cgs-root-panel-kicker {
            font-family: 'Orbitron', sans-serif;
            font-size: 11px;
            letter-spacing: 1.8px;
            text-transform: uppercase;
            color: var(--feature-accent, #60a5fa);
        }

        .cgs-root-panel-title {
            margin: 0;
            font-family: 'Cormorant Garamond', serif;
            font-size: clamp(30px, 4vw, 44px);
            line-height: 0.96;
            color: #f8fafc;
        }

        .cgs-root-panel-summary {
            margin: 0;
            font-size: 15px;
            line-height: 1.7;
            color: #cbd5e1;
        }

        .cgs-root-panel-detail {
            margin: 0;
            font-size: 13px;
            line-height: 1.8;
            color: #94a3b8;
        }

        .cgs-root-panel-media {
            position: relative;
            display: flex;
            align-items: flex-end;
            min-height: 240px;
            min-width: 0;
            border-radius: 22px;
            overflow: hidden;
            background:
                radial-gradient(circle at 50% 18%, rgba(255, 255, 255, 0.1), transparent 36%),
                linear-gradient(180deg, rgba(10, 15, 27, 0.9), rgba(5, 10, 18, 0.96));
            border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .cgs-root-panel-media iframe,
        .cgs-root-panel-image,
        .cgs-root-panel-fallback {
            display: block;
            width: 100%;
            height: 100%;
            min-height: 240px;
        }

        .cgs-root-panel-media iframe {
            border: none;
        }

        .cgs-root-panel-image {
            object-fit: cover;
            object-position: center 24%;
        }

        .cgs-root-panel-fallback {
            display: flex;
            align-items: center;
            justify-content: center;
            background:
                radial-gradient(circle at top, rgba(255, 255, 255, 0.08), transparent 38%),
                linear-gradient(135deg, rgba(99, 102, 241, 0.22), rgba(245, 158, 11, 0.16));
        }

        .cgs-root-panel-media-caption {
            position: absolute;
            right: 16px;
            bottom: 16px;
            left: 16px;
            z-index: 1;
            display: flex;
            flex-direction: column;
            gap: 4px;
            padding: 14px 16px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 16px;
            background: linear-gradient(180deg, rgba(6, 10, 20, 0.54), rgba(6, 10, 20, 0.82));
            backdrop-filter: blur(10px);
        }

        .cgs-root-panel-media-label {
            font-family: 'Orbitron', sans-serif;
            font-size: 10px;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: rgba(196, 181, 253, 0.88);
        }

        .cgs-root-panel-media-caption strong {
            font-size: 16px;
            font-weight: 600;
            color: #f8fafc;
        }

        .cgs-root-panel-monogram {
            font-family: 'Orbitron', sans-serif;
            font-size: clamp(42px, 7vw, 90px);
            letter-spacing: 0.28em;
            color: rgba(248, 250, 252, 0.18);
            transform: translateX(0.14em);
        }

        .cgs-root-card-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-top: 16px;
        }

        .cgs-root-card {
            display: flex;
            flex-direction: column;
            gap: 10px;
            min-height: 152px;
            padding: 16px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 18px;
            background: rgba(9, 14, 25, 0.64);
            color: #dbe4f0;
            text-align: left;
            cursor: pointer;
            transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
            font-family: inherit;
        }

        .cgs-root-card--collapsible {
            cursor: pointer;
            position: relative;
        }

        .cgs-root-card--collapsible.expanded {
            border-color: var(--card-accent, #6366f1);
            background: rgba(12, 20, 34, 0.82);
        }

        .cgs-root-card-toggle {
            display: block;
            text-align: center;
            font-size: 10px;
            color: #64748b;
            margin-top: 4px;
            transition: color 0.2s ease;
        }

        .cgs-root-card--collapsible:hover .cgs-root-card-toggle {
            color: var(--card-accent, #94a3b8);
        }

        .cgs-root-card-videos {
            display: flex;
            flex-direction: column;
            gap: 6px;
            margin-top: 8px;
            padding-top: 10px;
            border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .cgs-root-card--static {
            cursor: default;
        }

        .cgs-root-card:hover,
        .cgs-root-card:focus-visible {
            transform: translateY(-1px);
            border-color: rgba(255, 255, 255, 0.16);
            background: rgba(12, 20, 34, 0.82);
            outline: none;
        }

        .cgs-root-card.active {
            border-color: var(--card-accent, #6366f1);
            box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.04), 0 18px 32px rgba(15, 23, 42, 0.24);
            background:
                radial-gradient(circle at 14% 10%, rgba(255, 255, 255, 0.06), transparent 32%),
                linear-gradient(180deg, rgba(15, 23, 42, 0.92), rgba(9, 14, 25, 0.94));
        }

        .cgs-root-card-top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
        }

        .cgs-root-card-kicker {
            font-family: 'Orbitron', sans-serif;
            font-size: 10px;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: var(--card-accent, #94a3b8);
        }

        .cgs-root-card-index {
            font-family: 'Orbitron', sans-serif;
            font-size: 10px;
            letter-spacing: 1.3px;
            color: #64748b;
        }

        .cgs-root-card-title {
            font-family: 'Orbitron', sans-serif;
            font-size: 12px;
            letter-spacing: 1.1px;
            text-transform: uppercase;
            color: #f8fafc;
        }

        .cgs-root-card-summary {
            margin: 0;
            font-size: 12px;
            line-height: 1.5;
            color: #aebcd0;
        }

        /* ── Video Showcase ────────────────────────────────── */

        .cgs-root-panel-media--showcase {
            background: none;
            border: none;
            box-shadow: none;
            min-height: auto;
            overflow: visible;
        }

        /* When rendered above the two-column panel, span full width */
        .cgs-root-panel-media--above {
            width: 100%;
            margin-bottom: 18px;
        }
        .cgs-showcase {
            display: flex;
            flex-direction: column;
            gap: 10px;
            min-width: 0;
            width: 100%;
        }

        .cgs-showcase-player {
            position: relative;
            width: 100%;
            aspect-ratio: 16 / 9;
            border-radius: 16px;
            overflow: hidden;
            background: #000;
            border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .cgs-showcase-player iframe,
        .cgs-showcase-player img {
            display: block;
            width: 100%;
            height: 100%;
            border: none;
            object-fit: cover;
        }

        .cgs-showcase-info {
            padding: 4px 2px;
        }

        .cgs-showcase-tag {
            font-family: 'Orbitron', sans-serif;
            font-size: 10px;
            letter-spacing: 1.5px;
            text-transform: uppercase;
        }

        .cgs-showcase-title {
            display: block;
            font-family: 'Orbitron', sans-serif;
            font-size: 14px;
            color: #f8fafc;
            margin-top: 4px;
            letter-spacing: 0.5px;
        }

        .cgs-showcase-desc {
            margin: 4px 0 0;
            font-size: 12px;
            line-height: 1.5;
            color: #94a3b8;
        }

        .cgs-showcase-nav {
            display: flex;
            gap: 6px;
            overflow-x: auto;
            padding-bottom: 4px;
            scrollbar-width: thin;
            scrollbar-color: rgba(99, 102, 241, 0.3) transparent;
        }

        .cgs-showcase-thumb {
            display: flex;
            align-items: center;
            gap: 6px;
            padding: 8px 12px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 10px;
            background: rgba(9, 14, 25, 0.64);
            color: #94a3b8;
            font-size: 11px;
            cursor: pointer;
            transition: all 0.2s ease;
            white-space: nowrap;
            flex-shrink: 0;
            font-family: inherit;
            touch-action: manipulation;
        }

        .cgs-showcase-thumb:hover {
            border-color: rgba(255, 255, 255, 0.16);
            color: #c4b5fd;
            background: rgba(12, 20, 34, 0.82);
        }

        .cgs-showcase-thumb.active {
            border-color: var(--thumb-accent, #6366f1);
            color: #f8fafc;
            background: rgba(15, 23, 42, 0.92);
            box-shadow: 0 0 12px rgba(99, 102, 241, 0.1);
        }

        .cgs-showcase-thumb-icon {
            font-size: 10px;
            color: var(--thumb-accent, #6366f1);
        }

        .cgs-showcase-thumb-label {
            font-family: 'Orbitron', sans-serif;
            font-size: 10px;
            letter-spacing: 0.5px;
        }

        /* ── Product Cards ─────────────────────────────────── */

        .cgs-products {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 24px;
            max-width: 960px;
            width: 100%;
            margin-top: 32px;
        }

        .cgs-product-card {
            background: rgba(15, 15, 25, 0.85);
            border: 1px solid rgba(99, 102, 241, 0.2);
            border-radius: 12px;
            padding: 28px 24px;
            text-align: left;
            transition: all 0.3s ease;
            cursor: default;
        }

        .cgs-product-card:hover {
            border-color: rgba(99, 102, 241, 0.5);
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(99, 102, 241, 0.15);
        }

        .cgs-product-icon { font-size: 32px; margin-bottom: 12px; }

        .cgs-product-img {
            width: 100%;
            height: 160px;
            object-fit: cover;
            border-radius: 8px;
            display: block;
            margin-bottom: 4px;
        }

        .cgs-product-card .cgs-product-icon:has(.cgs-product-img) {
            font-size: 0;
            margin-bottom: 0;
        }

        .cgs-product-title {
            font-family: 'Orbitron', sans-serif;
            font-size: 16px;
            color: #c4b5fd;
            margin-bottom: 8px;
        }

        .cgs-product-desc {
            font-size: 13px;
            color: #94a3b8;
            line-height: 1.6;
        }

        /* ── Store Button ──────────────────────────────────── */

        .cgs-store-btn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 12px 28px;
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            border: none;
            border-radius: 10px;
            color: #fff;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            text-decoration: none;
            transition: all 0.25s ease;
            margin-top: 24px;
        }

        .cgs-store-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(99, 102, 241, 0.35);
        }

        .cgs-store-btn.disabled {
            background: linear-gradient(135deg, #6b7280, #4b5563);
            color: #e5e7eb;
            cursor: default;
            opacity: 0.8;
            box-shadow: none;
            transform: none;
            pointer-events: none;
        }

        /* ── Full-content section (no padding, fills area) ──── */

        .cgs-content--full {
            padding: 0 !important;
            align-items: stretch !important;
            justify-content: flex-start !important;
            overflow: hidden !important;
        }

        /* ── Fullscreen mode — hides nav so orus-about can own the viewport ── */

        .cgs-main--fullscreen {
            padding-top: 0 !important;
        }

        /* ── About Section ─────────────────────────────────── */

        .cgs-about-section {
            max-width: 720px;
            width: 100%;
            margin: 0 auto;
            text-align: center;
        }

        .cgs-about-icon {
            font-size: 56px;
            color: #c4b5fd;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .cgs-about-icon-text {
            font-size: 13px;
            color: #94a3b8;
            margin-bottom: 18px;
            letter-spacing: 1px;
        }

        .cgs-about-section h2 {
            font-family: 'Orbitron', sans-serif;
            font-size: 28px;
            color: #c4b5fd;
            margin-bottom: 16px;
        }

        .cgs-about-section p {
            font-size: 14px;
            color: #94a3b8;
            line-height: 1.8;
            margin-bottom: 16px;
        }

        /* ── About Links Row ────────────────────────────────── */

        .cgs-about-links {
            display: flex;
            gap: 16px;
            justify-content: center;
            flex-wrap: wrap;
            margin: 24px 0 8px;
        }

        .cgs-about-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 10px 22px;
            border: 1px solid rgba(99, 102, 241, 0.4);
            border-radius: 8px;
            font-size: 13px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.2s ease;
            cursor: pointer;
        }

        .cgs-about-link.youtube {
            color: #f43f5e;
            border-color: rgba(244, 63, 94, 0.4);
        }

        .cgs-about-link.youtube:hover {
            background: rgba(244, 63, 94, 0.1);
            border-color: #f43f5e;
            box-shadow: 0 4px 16px rgba(244, 63, 94, 0.2);
        }

        .cgs-about-link.ms-store {
            color: #60a5fa;
            border-color: rgba(96, 165, 250, 0.4);
        }

        .cgs-about-link.ms-store.disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        /* ── Contact Section ───────────────────────────────── */

        .cgs-contact-section {
            max-width: 480px;
            text-align: center;
        }

        .cgs-contact-section h2 {
            font-family: 'Orbitron', sans-serif;
            font-size: 28px;
            color: #c4b5fd;
            margin-bottom: 16px;
        }

        .cgs-contact-link {
            display: inline-block;
            padding: 10px 24px;
            border: 1px solid rgba(99, 102, 241, 0.4);
            border-radius: 8px;
            color: #a78bfa;
            font-size: 14px;
            text-decoration: none;
            transition: all 0.2s ease;
            margin-top: 12px;
        }

        .cgs-contact-link:hover {
            border-color: #6366f1;
            background: rgba(99, 102, 241, 0.1);
        }

        /* ── Footer ────────────────────────────────────────── */

        .cgs-footer {
            position: relative;
            z-index: 10;
            text-align: center;
            padding: 16px calc(32px + env(safe-area-inset-right)) calc(16px + env(safe-area-inset-bottom)) calc(32px + env(safe-area-inset-left));
            font-size: 11px;
            color: #475569;
            background: rgba(10, 10, 15, 0.8);
            backdrop-filter: blur(12px);
            border-top: 1px solid rgba(99, 102, 241, 0.1);
        }

        .cgs-footer-links {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 4px;
            margin-bottom: 6px;
        }

        .cgs-footer-link {
            background: none;
            border: none;
            color: #64748b;
            font-size: 11px;
            cursor: pointer;
            padding: 2px 4px;
            text-decoration: none;
            transition: color 0.2s ease;
            font-family: inherit;
            touch-action: manipulation;
        }

        :where(.cgs-logo, .cgs-nav-link, .cgs-lang-btn, .cgs-lang-option, .cgs-footer-link, .cgs-store-btn, .cgs-about-link, .cgs-contact-link, .cgs-editor-btn, .cgs-enterprise-btn, .cgs-editor-close, .cgs-legal-back):focus-visible {
            outline: 2px solid #a78bfa;
            outline-offset: 3px;
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.18);
        }

        .cgs-footer-link:hover {
            color: #a78bfa;
        }

        .cgs-footer-sep {
            color: #334155;
            font-size: 11px;
        }

        .cgs-footer-disclaimer {
            margin-top: 4px;
            font-size: 10px;
            color: #334155;
        }

        /* ── Legal Sections ────────────────────────────────── */

        .cgs-legal-section {
            max-width: 720px;
            width: 100%;
            text-align: left;
            padding-bottom: 48px;
        }

        .cgs-legal-section h2 {
            font-family: 'Orbitron', sans-serif;
            font-size: 26px;
            color: #c4b5fd;
            margin: 16px 0 8px;
        }

        .cgs-legal-section h3 {
            font-family: 'Orbitron', sans-serif;
            font-size: 14px;
            color: #a78bfa;
            margin: 24px 0 8px;
            letter-spacing: 1px;
        }

        .cgs-legal-section p,
        .cgs-legal-section li {
            font-size: 13px;
            color: #94a3b8;
            line-height: 1.8;
        }

        .cgs-legal-section ul {
            padding-left: 20px;
            margin: 8px 0;
        }

        .cgs-legal-section li {
            margin-bottom: 6px;
        }

        .cgs-legal-section code {
            font-family: 'Courier New', monospace;
            font-size: 11px;
            background: rgba(99, 102, 241, 0.1);
            border: 1px solid rgba(99, 102, 241, 0.2);
            border-radius: 4px;
            padding: 1px 6px;
            color: #c4b5fd;
        }

        .cgs-legal-meta {
            font-size: 11px !important;
            color: #475569 !important;
            letter-spacing: 0.5px;
            margin-bottom: 24px !important;
        }

        .cgs-legal-note {
            font-size: 11px !important;
            color: #475569 !important;
            margin-top: 16px !important;
            padding: 12px;
            background: rgba(99, 102, 241, 0.05);
            border-left: 2px solid rgba(99, 102, 241, 0.3);
            border-radius: 0 4px 4px 0;
        }

        .cgs-legal-link {
            color: #a78bfa;
            text-decoration: none;
        }

        .cgs-legal-link:hover {
            text-decoration: underline;
        }

        .cgs-legal-back {
            background: none;
            border: none;
            color: #64748b;
            font-size: 12px;
            cursor: pointer;
            padding: 0;
            margin-bottom: 16px;
            display: block;
            font-family: inherit;
            transition: color 0.2s ease;
        }

        .cgs-legal-back:hover {
            color: #a78bfa;
        }

        /* ── Responsive — Tablet (≤ 900px) ────────────────── */

        @media (max-width: 900px) {
            .cgs-media-grid {
                grid-template-columns: 1fr;
                gap: 20px;
            }
            .cgs-products {
                grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            }
        }

        /* ── Responsive — Mobile (≤ 768px) ─────────────────── */

        @media (max-width: 768px) {
            :host {
                --cgs-nav-height: 96px;
                overflow-x: hidden;
                overflow-y: auto;
                -webkit-overflow-scrolling: touch;
            }

            .cgs-canvas-container {
                position: fixed;
            }

            /* Nav — shrink logo & links so nothing overflows */
            .cgs-nav {
                height: auto;
                min-height: var(--cgs-nav-height);
                padding: calc(10px + env(safe-area-inset-top)) calc(14px + env(safe-area-inset-right)) 12px calc(14px + env(safe-area-inset-left));
                gap: 6px;
                grid-template-columns: 1fr auto;
                grid-template-areas:
                    'logo lang'
                    'links links';
                align-items: start;
            }
            .cgs-logo {
                grid-area: logo;
                font-size: 15px;
                letter-spacing: 1px;
                flex-shrink: 0;
                justify-self: start;
            }
            .cgs-nav-links {
                grid-area: links;
                gap: 4px;
                justify-self: center;
                width: 100%;
                justify-content: center;
                flex-wrap: wrap;
            }
            .cgs-nav-link {
                font-size: 11px;
                padding: 5px 8px;
                letter-spacing: 0.5px;
                min-height: 36px;
            }
            .cgs-lang-selector {
                grid-area: lang;
                flex-shrink: 0;
                justify-self: end;
            }
            .cgs-lang-btn {
                padding: 4px 8px;
                font-size: 11px;
                min-height: 36px;
            }

            /* Hero */
            .cgs-hero {
                padding-top: 4px;
                max-width: 100%;
                gap: 10px;
                overflow-x: hidden;
                box-sizing: border-box;
            }
            .cgs-hero-title {
                font-size: 30px;
                letter-spacing: 1px;
            }
            .cgs-hero-subtitle {
                font-size: 16px;
                margin-bottom: 20px;
                line-height: 1.5;
            }
            .cgs-hero-tagline {
                font-size: 18px;
                letter-spacing: 4px;
            }
            .cgs-roots-widget {
                padding: 16px;
                border-radius: 24px;
            }
            .cgs-quote-stage.cgs-quote-stage--studio {
                padding: 16px 14px 14px;
                border-radius: 22px;
            }
            .cgs-quote-stage--studio .cgs-quote-summary {
                font-size: 13px;
                margin-bottom: 14px;
            }
            .cgs-quote-hero {
                padding: 10px 18px 8px;
                min-height: 75px;
                border-radius: 18px;
            }
            .cgs-root-panel {
                grid-template-columns: 1fr;
                gap: 14px;
                padding: 16px;
                border-radius: 22px;
            }
            .cgs-root-panel-copy {
                gap: 8px;
            }
            .cgs-root-panel-title {
                font-size: 26px;
            }
            .cgs-root-panel-summary,
            .cgs-root-panel-detail {
                font-size: 13px;
                line-height: 1.7;
            }
            .cgs-root-panel-media {
                order: -1;
                min-height: 220px;
            }
            .cgs-root-panel-media--showcase {
                min-height: auto;
                order: 0;
            }
            .cgs-root-panel-media-caption {
                right: 12px;
                bottom: 12px;
                left: 12px;
                padding: 12px 14px;
            }
            .cgs-root-panel-media-caption strong {
                font-size: 14px;
            }
            .cgs-root-card-grid {
                grid-template-columns: 1fr;
                gap: 10px;
            }
            .cgs-root-card {
                min-height: 0;
            }
            .cgs-roots-actions {
                gap: 10px;
                margin-top: 14px;
                width: 100%;
                flex-direction: column;
            }
            .cgs-store-btn,
            .cgs-editor-btn,
            .cgs-enterprise-btn {
                width: 100%;
                justify-content: center;
                min-height: 44px;
            }
            .cgs-roots-error {
                margin-top: 12px;
            }
            .cgs-quote-stage-head {
                flex-direction: column;
                align-items: flex-start;
            }
            .cgs-quote-stage-meta {
                justify-content: flex-start;
            }
            .cgs-quote-stage {
                border-radius: 42px;
                padding: 22px 18px;
            }
            .cgs-quote-stage--philosophy {
                border-radius: 24px;
                height: 185px;
            }
            .cgs-quote-hero .cgs-quote-body {
                font-size: clamp(18px, 3.5vw, 26px);
            }
            .cgs-quote-stage::after {
                border-radius: 36px;
            }
            .cgs-quote-kicker,
            .cgs-quote-status,
            .cgs-quote-counter {
                font-size: 9px;
                letter-spacing: 1.5px;
            }
            .cgs-quote-title {
                font-size: clamp(22px, 5vw, 34px);
            }
            .cgs-quote-body {
                font-size: clamp(20px, 3.8vw, 28px);
                line-height: 1.15;
            }
            .cgs-quote-thinker {
                font-size: 13px;
            }
            .cgs-quote-source {
                font-size: 11px;
            }
            .cgs-quote-summary {
                font-size: 13px;
                line-height: 1.6;
            }
            .cgs-quote-chip-grid {
                grid-template-columns: 1fr;
                gap: 8px;
                max-width: 100%;
                box-sizing: border-box;
            }
            .cgs-quote-chip {
                min-height: 72px;
                padding: 12px;
                border-radius: 14px;
                max-width: 100%;
                box-sizing: border-box;
                overflow: hidden;
            }
            .cgs-quote-chip-name {
                font-size: 11px;
            }
            .cgs-quote-chip-snippet {
                font-size: 12px;
                line-height: 1.5;
            }

            /* Content area */
            .cgs-content {
                padding: 12px 14px calc(24px + env(safe-area-inset-bottom));
                overflow: visible;
                flex: 0 0 auto;
            }

            .cgs-main {
                height: auto;
                min-height: auto;
            }

            /* Showcase mobile */
            .cgs-showcase-nav {
                flex-wrap: wrap;
            }
            .cgs-showcase-thumb {
                min-height: 40px;
            }
            .cgs-showcase-title {
                font-size: 13px;
            }
            .cgs-showcase-desc {
                font-size: 11px;
            }

            /* Products */
            .cgs-products {
                grid-template-columns: 1fr;
                gap: 14px;
            }
            .cgs-product-card {
                padding: 20px 16px;
                border-radius: 16px;
            }
            .cgs-product-img {
                height: 130px;
            }
            .cgs-product-title {
                font-size: 14px;
            }
            .cgs-product-desc {
                font-size: 12px;
            }

            /* Store button */
            .cgs-store-btn {
                font-size: 12px;
                padding: 10px 18px;
                margin-top: 16px;
            }

            /* Media grid */
            .cgs-media-grid {
                grid-template-columns: 1fr;
                gap: 16px;
                margin-top: 24px;
            }
            .cgs-media-card {
                border-radius: 16px;
            }
            .cgs-media-embed {
                padding-top: 56.25%;
            }
            .cgs-media-info {
                padding: 14px 16px;
            }
            .cgs-media-tag {
                font-size: 9px;
            }
            .cgs-media-title {
                font-size: 14px;
            }
            .cgs-media-desc {
                font-size: 12px;
            }

            /* About section */
            .cgs-about-section {
                max-width: 100%;
                text-align: left;
            }
            .cgs-about-section h2 {
                font-size: 22px;
            }
            .cgs-about-section p {
                font-size: 13px;
                line-height: 1.75;
            }
            .cgs-about-links {
                gap: 10px;
                flex-direction: column;
                align-items: stretch;
            }
            .cgs-about-link {
                padding: 10px 14px;
                font-size: 12px;
                justify-content: center;
            }

            /* Legal sections */
            .cgs-legal-section {
                max-width: 100%;
                padding-bottom: 32px;
            }
            .cgs-legal-section h2 {
                font-size: 20px;
            }
            .cgs-legal-section h3 {
                font-size: 12px;
            }
            .cgs-legal-section p,
            .cgs-legal-section li {
                font-size: 12px;
                line-height: 1.75;
            }

            /* Footer — collapse separators so links wrap readably */
            .cgs-footer {
                padding: 10px 14px calc(12px + env(safe-area-inset-bottom));
            }
            .cgs-footer-links {
                gap: 2px;
                row-gap: 4px;
            }
            .cgs-footer-link {
                font-size: 10px;
                padding: 2px 3px;
            }
            .cgs-footer-sep {
                display: none;
            }
            .cgs-footer-disclaimer {
                font-size: 9px;
            }
        }

        /* ── Responsive — Small Mobile (≤ 480px) ───────────── */

        @media (max-width: 480px) {
            :host {
                --cgs-nav-height: 112px;
                overflow-x: hidden;
                overflow-y: auto;
                -webkit-overflow-scrolling: touch;
            }

            .cgs-nav {
                padding: calc(10px + env(safe-area-inset-top)) 10px 12px;
                gap: 6px;
                grid-template-columns: 1fr;
                grid-template-areas:
                    'logo'
                    'lang'
                    'links';
                justify-items: center;
            }
            .cgs-logo {
                font-size: 12px;
                letter-spacing: 0.3px;
                justify-self: center;
            }
            .cgs-nav-links {
                gap: 4px;
                justify-self: center;
                width: 100%;
                justify-content: center;
                flex-wrap: wrap;
            }
            .cgs-nav-link {
                font-size: 10px;
                padding: 4px 6px;
                letter-spacing: 0;
                min-height: 34px;
            }
            .cgs-lang-btn {
                padding: 3px 6px;
                font-size: 10px;
                min-height: 34px;
            }

            .cgs-hero-title {
                font-size: 24px;
            }
            .cgs-hero-subtitle {
                font-size: 15px;
            }
            .cgs-hero-tagline {
                font-size: 15px;
                letter-spacing: 3px;
            }
            .cgs-roots-widget {
                padding: 14px;
                border-radius: 22px;
            }
            .cgs-quote-stage.cgs-quote-stage--studio {
                padding: 14px 12px 12px;
                border-radius: 20px;
            }
            .cgs-quote-stage--studio .cgs-quote-summary {
                font-size: 12px;
                line-height: 1.5;
            }
            .cgs-quote-hero {
                padding: 8px 14px 6px;
                min-height: 65px;
                border-radius: 16px;
            }
            .cgs-root-panel {
                padding: 14px;
                border-radius: 20px;
            }
            .cgs-root-panel-title {
                font-size: 24px;
            }
            .cgs-root-panel-summary,
            .cgs-root-panel-detail {
                font-size: 12px;
                line-height: 1.65;
            }
            .cgs-root-panel-media {
                min-height: 200px;
            }
            .cgs-root-panel-media--showcase {
                min-height: auto;
            }
            .cgs-root-panel-media-caption {
                padding: 11px 12px;
            }
            .cgs-root-panel-media-label,
            .cgs-root-card-kicker,
            .cgs-root-card-index {
                font-size: 9px;
            }
            .cgs-root-card-title {
                font-size: 11px;
            }
            .cgs-root-card-summary {
                font-size: 11px;
            }
            .cgs-root-card {
                padding: 14px;
            }

            .cgs-content {
                padding: 10px 10px calc(18px + env(safe-area-inset-bottom));
                overflow: visible;
                flex: 0 0 auto;
            }

            .cgs-showcase-player {
                border-radius: 12px;
            }
            .cgs-showcase-thumb {
                padding: 6px 10px;
                gap: 4px;
            }
            .cgs-showcase-thumb-label {
                font-size: 9px;
            }
            .cgs-quote-stage {
                border-radius: 36px;
                padding: 18px 14px;
            }
            .cgs-quote-stage--philosophy {
                border-radius: 20px;
                padding: 20px 16px;
                height: 175px;
            }
            .cgs-quote-hero .cgs-quote-body {
                font-size: clamp(15px, 3.2vw, 20px);
            }
            .cgs-quote-stage::after {
                border-radius: 30px;
            }
            .cgs-quote-title {
                font-size: clamp(18px, 5vw, 26px);
            }
            .cgs-quote-body {
                font-size: clamp(16px, 3.5vw, 22px);
                line-height: 1.18;
            }
            .cgs-quote-thinker {
                font-size: 12px;
            }
            .cgs-quote-source {
                font-size: 10px;
            }
            .cgs-quote-summary {
                font-size: 12px;
            }
            .cgs-quote-chip-name {
                font-size: 10px;
            }
            .cgs-quote-chip-snippet {
                font-size: 11px;
            }

            .cgs-about-section h2 {
                font-size: 18px;
            }
            .cgs-legal-section h2 {
                font-size: 18px;
            }

            .cgs-store-btn {
                font-size: 11px;
                padding: 9px 14px;
                gap: 6px;
            }
        }

        @media (hover: none) and (pointer: coarse) {
            .cgs-nav-link:hover,
            .cgs-lang-btn:hover,
            .cgs-store-btn:hover,
            .cgs-editor-btn:hover,
            .cgs-enterprise-btn:hover,
            .cgs-about-link:hover,
            .cgs-quote-orbit-chip:hover,
            .cgs-quote-core:hover,
            .cgs-product-card:hover,
            .cgs-media-card:hover {
                transform: none;
                box-shadow: inherit;
            }

            .cgs-nav-link,
            .cgs-lang-btn,
            .cgs-store-btn,
            .cgs-editor-btn,
            .cgs-enterprise-btn,
            .cgs-about-link,
            .cgs-footer-link,
            .cgs-quote-orbit-chip,
            .cgs-quote-core {
                min-height: 44px;
            }
        }

        /* ── Media Embeds ──────────────────────────────────── */

        .cgs-media-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 28px;
            max-width: 1080px;
            width: 100%;
            margin-top: 32px;
        }

        /* Single-column variant for stacked media cards (Home page) */
        .cgs-media-grid.single-column {
            grid-template-columns: 1fr;
        }

        .cgs-media-card {
            background: rgba(15, 15, 25, 0.85);
            border: 1px solid rgba(99, 102, 241, 0.2);
            border-radius: 12px;
            overflow: hidden;
            transition: all 0.3s ease;
        }

        .cgs-media-card:hover {
            border-color: rgba(99, 102, 241, 0.5);
            box-shadow: 0 8px 24px rgba(99, 102, 241, 0.15);
        }

        .cgs-media-embed {
            position: relative;
            width: 100%;
            padding-top: 56.25%; /* 16:9 aspect ratio */
            background: #000;
        }

        .cgs-media-embed iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: none;
        }

        .cgs-media-embed.soundcloud {
            padding-top: 0;
            height: 300px;
        }

        .cgs-media-embed.soundcloud iframe {
            position: relative;
            height: 100%;
        }

        .cgs-media-info {
            padding: 20px 24px;
        }

        .cgs-media-tag {
            font-size: 10px;
            font-weight: 600;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #6366f1;
            margin-bottom: 8px;
        }

        .cgs-media-title {
            font-family: 'Orbitron', sans-serif;
            font-size: 16px;
            color: #c4b5fd;
            margin-bottom: 10px;
        }

        .cgs-media-desc {
            font-size: 13px;
            color: #94a3b8;
            line-height: 1.7;
        }

        /* ── Enterprise Solutions Button (Banner) ──────────── */

        .cgs-enterprise-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 12px 28px;
            background: linear-gradient(135deg, #059669, #10b981);
            border: none;
            border-radius: 10px;
            color: #fff;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            margin-top: 16px;
            font-family: inherit;
            letter-spacing: 0.5px;
            transition: all 0.25s ease;
        }
        .cgs-enterprise-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(16, 185, 129, 0.35);
            background: linear-gradient(135deg, #047857, #059669);
        }
        .cgs-enterprise-btn:active {
            transform: translateY(0);
        }

        /* ── Enterprise Page ───────────────────────────────── */

        .cgs-enterprise-page {
            max-width: 960px;
            width: 100%;
            text-align: left;
            padding-bottom: 64px;
        }

        .cgs-ent-hero {
            text-align: center;
            margin-bottom: 48px;
        }

        .cgs-ent-badge {
            display: inline-block;
            padding: 4px 16px;
            background: rgba(16, 185, 129, 0.15);
            border: 1px solid rgba(16, 185, 129, 0.4);
            border-radius: 20px;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #34d399;
            margin-bottom: 20px;
        }

        .cgs-ent-title {
            font-family: 'Orbitron', sans-serif;
            font-size: 36px;
            color: #e0d9ff;
            margin: 0 0 16px;
            line-height: 1.2;
        }

        .cgs-ent-subtitle {
            font-size: 15px;
            color: #94a3b8;
            line-height: 1.8;
            max-width: 680px;
            margin: 0 auto;
        }

        .cgs-ent-section {
            margin-bottom: 48px;
        }

        .cgs-ent-section h2 {
            font-family: 'Orbitron', sans-serif;
            font-size: 20px;
            color: #c4b5fd;
            margin: 0 0 20px;
            padding-bottom: 12px;
            border-bottom: 1px solid rgba(99, 102, 241, 0.15);
        }

        .cgs-ent-section > p {
            font-size: 13px;
            color: #94a3b8;
            line-height: 1.8;
            margin-bottom: 12px;
        }

        /* Feature cards grid */
        .cgs-ent-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
        }

        .cgs-ent-grid--compact {
            grid-template-columns: repeat(3, 1fr);
        }

        .cgs-ent-card {
            --ent-accent: #6366f1;
            background: rgba(15, 15, 25, 0.7);
            border: 1px solid rgba(99, 102, 241, 0.12);
            border-radius: 14px;
            padding: 24px;
            transition: border-color 0.25s ease, transform 0.25s ease;
        }
        .cgs-ent-card:hover {
            border-color: var(--ent-accent);
            transform: translateY(-2px);
        }

        .cgs-ent-card-icon {
            font-size: 28px;
            margin-bottom: 12px;
        }

        .cgs-ent-card h3 {
            font-family: 'Orbitron', sans-serif;
            font-size: 13px;
            color: #e0d9ff;
            margin: 0 0 8px;
            letter-spacing: 0.5px;
        }

        .cgs-ent-card p {
            font-size: 12px;
            color: #94a3b8;
            line-height: 1.7;
            margin: 0;
        }

        /* Feature list (vertical) */
        .cgs-ent-feature-list {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .cgs-ent-feature {
            display: flex;
            gap: 16px;
            align-items: flex-start;
            padding: 20px;
            background: rgba(15, 15, 25, 0.5);
            border: 1px solid rgba(99, 102, 241, 0.08);
            border-radius: 12px;
            transition: border-color 0.25s ease;
        }
        .cgs-ent-feature:hover {
            border-color: rgba(99, 102, 241, 0.25);
        }

        .cgs-ent-feature-marker {
            flex-shrink: 0;
            width: 4px;
            height: 100%;
            min-height: 48px;
            border-radius: 2px;
        }

        .cgs-ent-feature strong {
            display: block;
            font-family: 'Orbitron', sans-serif;
            font-size: 13px;
            color: #e0d9ff;
            margin-bottom: 6px;
            letter-spacing: 0.5px;
        }

        .cgs-ent-feature p {
            font-size: 12px;
            color: #94a3b8;
            line-height: 1.7;
            margin: 0;
        }

        /* Industry tiles */
        .cgs-ent-industry {
            background: rgba(15, 15, 25, 0.6);
            border: 1px solid rgba(99, 102, 241, 0.1);
            border-radius: 12px;
            padding: 20px;
            text-align: center;
            transition: border-color 0.25s ease, transform 0.25s ease;
        }
        .cgs-ent-industry:hover {
            border-color: rgba(99, 102, 241, 0.3);
            transform: translateY(-2px);
        }

        .cgs-ent-industry-icon {
            font-size: 32px;
            display: block;
            margin-bottom: 10px;
        }

        .cgs-ent-industry strong {
            display: block;
            font-family: 'Orbitron', sans-serif;
            font-size: 12px;
            color: #e0d9ff;
            margin-bottom: 6px;
        }

        .cgs-ent-industry p {
            font-size: 11px;
            color: #94a3b8;
            line-height: 1.6;
            margin: 0;
        }

        /* CTA box */
        .cgs-ent-cta-box {
            text-align: center;
            padding: 40px 32px;
            background: rgba(15, 15, 25, 0.85);
            border: 1px solid rgba(16, 185, 129, 0.3);
            border-radius: 18px;
        }

        .cgs-ent-cta-box h2 {
            border: none !important;
            padding-bottom: 0 !important;
            color: #34d399 !important;
        }

        .cgs-ent-cta-box p {
            font-size: 13px;
            color: #94a3b8;
            line-height: 1.8;
            max-width: 600px;
            margin: 0 auto 16px;
        }

        .cgs-ent-cta-contact {
            font-size: 14px !important;
            color: #c4b5fd !important;
        }

        .cgs-ent-cta-contact a {
            color: #34d399;
            text-decoration: underline;
            text-underline-offset: 3px;
        }

        /* ── Try Orus Editor Button ────────────────────────── */

        .cgs-editor-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 12px 28px;
            background: transparent;
            border: 1.5px solid rgba(99, 102, 241, 0.5);
            border-radius: 10px;
            color: #c4b5fd;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            margin-top: 16px;
            font-family: inherit;
            letter-spacing: 0.5px;
            transition: all 0.25s ease;
        }
        .cgs-editor-btn:hover {
            background: rgba(99, 102, 241, 0.12);
            border-color: rgba(99, 102, 241, 0.8);
            color: #e0d9ff;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(99, 102, 241, 0.2);
        }
        .cgs-editor-btn:active {
            transform: translateY(0);
        }

        /* ── Orus Editor Popup Window ──────────────────────── */

        .cgs-editor-overlay {
            position: fixed;
            inset: 0;
            z-index: 9000;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(6px);
            animation: cgsEditorFadeIn 0.25s ease;
        }

        @keyframes cgsEditorFadeIn {
            from { opacity: 0; }
            to   { opacity: 1; }
        }

        .cgs-editor-window {
            width: 92vw;
            height: 90vh;
            max-width: 1440px;
            max-height: 900px;
            display: flex;
            flex-direction: column;
            background: #08080f;
            border: 1px solid rgba(99, 102, 241, 0.35);
            border-radius: 14px;
            overflow: hidden;
            box-shadow: 0 24px 80px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(99, 102, 241, 0.1);
            animation: cgsEditorSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes cgsEditorSlideUp {
            from { transform: translateY(32px) scale(0.98); opacity: 0; }
            to   { transform: translateY(0) scale(1); opacity: 1; }
        }

        .cgs-editor-titlebar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 18px;
            background: rgba(10, 10, 20, 0.95);
            border-bottom: 1px solid rgba(99, 102, 241, 0.15);
            flex-shrink: 0;
            user-select: none;
        }

        .cgs-editor-win-title {
            font-family: 'Orbitron', sans-serif;
            font-size: 13px;
            color: #a78bfa;
            letter-spacing: 1.5px;
        }

        .cgs-editor-close {
            background: none;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 6px;
            color: #64748b;
            font-size: 15px;
            line-height: 1;
            padding: 3px 9px;
            cursor: pointer;
            transition: all 0.18s ease;
            font-family: inherit;
        }
        .cgs-editor-close:hover {
            background: rgba(239, 68, 68, 0.15);
            border-color: rgba(239, 68, 68, 0.4);
            color: #ef4444;
        }

        @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
                scroll-behavior: auto !important;
            }
        }

        .cgs-editor-frame {
            flex: 1;
            overflow: hidden;
            position: relative;
        }

        .cgs-editor-frame orus-shape-editor {
            display: block;
            width: 100%;
            height: 100%;
        }

        @media (max-width: 768px) {
            .cgs-editor-btn,
            .cgs-enterprise-btn {
                font-size: 12px;
                padding: 10px 18px;
            }
            .cgs-editor-window {
                width: 100vw;
                height: 100vh;
                max-width: none;
                max-height: none;
                border-radius: 0;
            }
            .cgs-ent-title {
                font-size: 24px;
            }
            .cgs-ent-grid {
                grid-template-columns: 1fr;
            }
            .cgs-ent-grid--compact {
                grid-template-columns: repeat(2, 1fr);
            }
            .cgs-enterprise-page {
                padding-left: 8px;
                padding-right: 8px;
            }
        }

        @media (max-width: 480px) {
            .cgs-ent-grid--compact {
                grid-template-columns: 1fr;
            }
        }
    `;w([f()],m.prototype,"_loading",2);w([f()],m.prototype,"_loadingMessage",2);w([f()],m.prototype,"_loadingProgress",2);w([f()],m.prototype,"_ready",2);w([f()],m.prototype,"_errorMessage",2);w([f()],m.prototype,"_activeSection",2);w([f()],m.prototype,"_threeCanvasReady",2);w([f()],m.prototype,"_aboutOpen",2);w([f()],m.prototype,"_editorOpen",2);w([f()],m.prototype,"_editorError",2);w([f()],m.prototype,"_currentLocale",2);w([f()],m.prototype,"_langDropdownOpen",2);w([f()],m.prototype,"_currentQuoteIndex",2);w([f()],m.prototype,"_quoteFading",2);w([f()],m.prototype,"_activeVideoIndex",2);w([f()],m.prototype,"_expandedCard",2);w([C({type:String,attribute:"site-url"})],m.prototype,"siteUrl",2);m=w([Oe("orus-cgs-home")],m);const Ae={log:console.log.bind(console),warn:console.warn.bind(console),error:console.error.bind(console)};function $t(){const a=()=>{};console.debug=a,console.trace=a,console.dir=a,console.dirxml=a,console.table=a;try{console.clear()}catch{}Ae.log("%c Comet Game Studio %c Orus AI System %c","background: #6366f1; color: #fff; padding: 4px 8px; border-radius: 4px 0 0 4px; font-weight: 700;","background: #1e1b4b; color: #c4b5fd; padding: 4px 8px; border-radius: 0 4px 4px 0;",""),Ae.log("%chttps://www.cometgamestudio.com","color: #94a3b8; font-size: 11px;")}function _t(){document.addEventListener("keydown",a=>{a.ctrlKey&&!a.shiftKey&&(a.key==="u"||a.key==="U")&&a.preventDefault()},!0),document.addEventListener("contextmenu",a=>(a.preventDefault(),!1))}function kt(){typeof performance<"u"&&performance.clearResourceTimings&&setInterval(()=>{try{performance.clearResourceTimings()}catch{}},1e4)}$t();_t();kt();
