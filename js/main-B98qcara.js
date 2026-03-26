const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["js/orus-web-editor-p2PDtbsM.js","js/three.module-CIzvuMnW.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();const fe="modulepreload",ve=function(t){return"/cgs-public/"+t},X={},K=function(e,i,a){let s=Promise.resolve();if(i&&i.length>0){let o=function(l){return Promise.all(l.map(u=>Promise.resolve(u).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),d=n?.nonce||n?.getAttribute("nonce");s=o(i.map(l=>{if(l=ve(l),l in X)return;X[l]=!0;const u=l.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${p}`))return;const g=document.createElement("link");if(g.rel=u?"stylesheet":fe,u||(g.as="script"),g.crossOrigin="",g.href=l,d&&g.setAttribute("nonce",d),document.head.appendChild(g),u)return new Promise((v,T)=>{g.addEventListener("load",v),g.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=o,window.dispatchEvent(n),!n.defaultPrevented)throw o}return s.then(o=>{for(const n of o||[])n.status==="rejected"&&r(n.reason);return e().catch(r)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=globalThis,H=R.ShadowRoot&&(R.ShadyCSS===void 0||R.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol(),Q=new WeakMap;let ce=class{constructor(e,i,a){if(this._$cssResult$=!0,a!==W)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=i}get styleSheet(){let e=this.o;const i=this.t;if(H&&e===void 0){const a=i!==void 0&&i.length===1;a&&(e=Q.get(i)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),a&&Q.set(i,e))}return e}toString(){return this.cssText}};const be=t=>new ce(typeof t=="string"?t:t+"",void 0,W),le=(t,...e)=>{const i=t.length===1?t[0]:e.reduce((a,s,r)=>a+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[r+1],t[0]);return new ce(i,t,W)},ye=(t,e)=>{if(H)t.adoptedStyleSheets=e.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of e){const a=document.createElement("style"),s=R.litNonce;s!==void 0&&a.setAttribute("nonce",s),a.textContent=i.cssText,t.appendChild(a)}},J=H?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let i="";for(const a of e.cssRules)i+=a.cssText;return be(i)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:xe,defineProperty:we,getOwnPropertyDescriptor:Ae,getOwnPropertyNames:Se,getOwnPropertySymbols:Ce,getPrototypeOf:Te}=Object,F=globalThis,Z=F.trustedTypes,Ie=Z?Z.emptyScript:"",ke=F.reactiveElementPolyfillSupport,L=(t,e)=>t,N={toAttribute(t,e){switch(e){case Boolean:t=t?Ie:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=t!==null;break;case Number:i=t===null?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},V=(t,e)=>!xe(t,e),ee={attribute:!0,type:String,converter:N,reflect:!1,useDefault:!1,hasChanged:V};Symbol.metadata??=Symbol("metadata"),F.litPropertyMetadata??=new WeakMap;let I=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,i=ee){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(e,i),!i.noAccessor){const a=Symbol(),s=this.getPropertyDescriptor(e,a,i);s!==void 0&&we(this.prototype,e,s)}}static getPropertyDescriptor(e,i,a){const{get:s,set:r}=Ae(this.prototype,e)??{get(){return this[i]},set(o){this[i]=o}};return{get:s,set(o){const n=s?.call(this);r?.call(this,o),this.requestUpdate(e,n,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ee}static _$Ei(){if(this.hasOwnProperty(L("elementProperties")))return;const e=Te(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(L("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(L("properties"))){const i=this.properties,a=[...Se(i),...Ce(i)];for(const s of a)this.createProperty(s,i[s])}const e=this[Symbol.metadata];if(e!==null){const i=litPropertyMetadata.get(e);if(i!==void 0)for(const[a,s]of i)this.elementProperties.set(a,s)}this._$Eh=new Map;for(const[i,a]of this.elementProperties){const s=this._$Eu(i,a);s!==void 0&&this._$Eh.set(s,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const i=[];if(Array.isArray(e)){const a=new Set(e.flat(1/0).reverse());for(const s of a)i.unshift(J(s))}else e!==void 0&&i.push(J(e));return i}static _$Eu(e,i){const a=i.attribute;return a===!1?void 0:typeof a=="string"?a:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,i=this.constructor.elementProperties;for(const a of i.keys())this.hasOwnProperty(a)&&(e.set(a,this[a]),delete this[a]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ye(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,i,a){this._$AK(e,a)}_$ET(e,i){const a=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,a);if(s!==void 0&&a.reflect===!0){const r=(a.converter?.toAttribute!==void 0?a.converter:N).toAttribute(i,a.type);this._$Em=e,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(e,i){const a=this.constructor,s=a._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const r=a.getPropertyOptions(s),o=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:N;this._$Em=s;const n=o.fromAttribute(i,r.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(e,i,a,s=!1,r){if(e!==void 0){const o=this.constructor;if(s===!1&&(r=this[e]),a??=o.getPropertyOptions(e),!((a.hasChanged??V)(r,i)||a.useDefault&&a.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,a))))return;this.C(e,i,a)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,i,{useDefault:a,reflect:s,wrapped:r},o){a&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??i??this[e]),r!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||a||(i=void 0),this._$AL.set(e,i)),s===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}const a=this.constructor.elementProperties;if(a.size>0)for(const[s,r]of a){const{wrapped:o}=r,n=this[s];o!==!0||this._$AL.has(s)||n===void 0||this.C(s,void 0,r,n)}}let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),this._$EO?.forEach(a=>a.hostUpdate?.()),this.update(i)):this._$EM()}catch(a){throw e=!1,this._$EM(),a}e&&this._$AE(i)}willUpdate(e){}_$AE(e){this._$EO?.forEach(i=>i.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(i=>this._$ET(i,this[i])),this._$EM()}updated(e){}firstUpdated(e){}};I.elementStyles=[],I.shadowRootOptions={mode:"open"},I[L("elementProperties")]=new Map,I[L("finalized")]=new Map,ke?.({ReactiveElement:I}),(F.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=globalThis,te=t=>t,U=j.trustedTypes,ie=U?U.createPolicy("lit-html",{createHTML:t=>t}):void 0,pe="$lit$",w=`lit$${Math.random().toFixed(9).slice(2)}$`,ue="?"+w,Pe=`<${ue}>`,C=document,D=()=>C.createComment(""),E=t=>t===null||typeof t!="object"&&typeof t!="function",q=Array.isArray,Me=t=>q(t)||typeof t?.[Symbol.iterator]=="function",B=`[ 	
\f\r]`,_=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ae=/-->/g,se=/>/g,A=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),re=/'/g,oe=/"/g,ge=/^(?:script|style|textarea|title)$/i,Oe=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),c=Oe(1),P=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),ne=new WeakMap,S=C.createTreeWalker(C,129);function he(t,e){if(!q(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return ie!==void 0?ie.createHTML(e):e}const _e=(t,e)=>{const i=t.length-1,a=[];let s,r=e===2?"<svg>":e===3?"<math>":"",o=_;for(let n=0;n<i;n++){const d=t[n];let l,u,p=-1,g=0;for(;g<d.length&&(o.lastIndex=g,u=o.exec(d),u!==null);)g=o.lastIndex,o===_?u[1]==="!--"?o=ae:u[1]!==void 0?o=se:u[2]!==void 0?(ge.test(u[2])&&(s=RegExp("</"+u[2],"g")),o=A):u[3]!==void 0&&(o=A):o===A?u[0]===">"?(o=s??_,p=-1):u[1]===void 0?p=-2:(p=o.lastIndex-u[2].length,l=u[1],o=u[3]===void 0?A:u[3]==='"'?oe:re):o===oe||o===re?o=A:o===ae||o===se?o=_:(o=A,s=void 0);const v=o===A&&t[n+1].startsWith("/>")?" ":"";r+=o===_?d+Pe:p>=0?(a.push(l),d.slice(0,p)+pe+d.slice(p)+w+v):d+w+(p===-2?n:v)}return[he(t,r+(t[i]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),a]};class z{constructor({strings:e,_$litType$:i},a){let s;this.parts=[];let r=0,o=0;const n=e.length-1,d=this.parts,[l,u]=_e(e,i);if(this.el=z.createElement(l,a),S.currentNode=this.el.content,i===2||i===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(s=S.nextNode())!==null&&d.length<n;){if(s.nodeType===1){if(s.hasAttributes())for(const p of s.getAttributeNames())if(p.endsWith(pe)){const g=u[o++],v=s.getAttribute(p).split(w),T=/([.?@])?(.*)/.exec(g);d.push({type:1,index:r,name:T[2],strings:v,ctor:T[1]==="."?De:T[1]==="?"?Ee:T[1]==="@"?ze:G}),s.removeAttribute(p)}else p.startsWith(w)&&(d.push({type:6,index:r}),s.removeAttribute(p));if(ge.test(s.tagName)){const p=s.textContent.split(w),g=p.length-1;if(g>0){s.textContent=U?U.emptyScript:"";for(let v=0;v<g;v++)s.append(p[v],D()),S.nextNode(),d.push({type:2,index:++r});s.append(p[g],D())}}}else if(s.nodeType===8)if(s.data===ue)d.push({type:2,index:r});else{let p=-1;for(;(p=s.data.indexOf(w,p+1))!==-1;)d.push({type:7,index:r}),p+=w.length-1}r++}}static createElement(e,i){const a=C.createElement("template");return a.innerHTML=e,a}}function M(t,e,i=t,a){if(e===P)return e;let s=a!==void 0?i._$Co?.[a]:i._$Cl;const r=E(e)?void 0:e._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),r===void 0?s=void 0:(s=new r(t),s._$AT(t,i,a)),a!==void 0?(i._$Co??=[])[a]=s:i._$Cl=s),s!==void 0&&(e=M(t,s._$AS(t,e.values),s,a)),e}class Le{constructor(e,i){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:i},parts:a}=this._$AD,s=(e?.creationScope??C).importNode(i,!0);S.currentNode=s;let r=S.nextNode(),o=0,n=0,d=a[0];for(;d!==void 0;){if(o===d.index){let l;d.type===2?l=new $(r,r.nextSibling,this,e):d.type===1?l=new d.ctor(r,d.name,d.strings,this,e):d.type===6&&(l=new $e(r,this,e)),this._$AV.push(l),d=a[++n]}o!==d?.index&&(r=S.nextNode(),o++)}return S.currentNode=C,s}p(e){let i=0;for(const a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(e,a,i),i+=a.strings.length-2):a._$AI(e[i])),i++}}class ${get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,i,a,s){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=a,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&e?.nodeType===11&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=M(this,e,i),E(e)?e===h||e==null||e===""?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==P&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Me(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==h&&E(this._$AH)?this._$AA.nextSibling.data=e:this.T(C.createTextNode(e)),this._$AH=e}$(e){const{values:i,_$litType$:a}=e,s=typeof a=="number"?this._$AC(e):(a.el===void 0&&(a.el=z.createElement(he(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===s)this._$AH.p(i);else{const r=new Le(s,this),o=r.u(this.options);r.p(i),this.T(o),this._$AH=r}}_$AC(e){let i=ne.get(e.strings);return i===void 0&&ne.set(e.strings,i=new z(e)),i}k(e){q(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let a,s=0;for(const r of e)s===i.length?i.push(a=new $(this.O(D()),this.O(D()),this,this.options)):a=i[s],a._$AI(r),s++;s<i.length&&(this._$AR(a&&a._$AB.nextSibling,s),i.length=s)}_$AR(e=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);e!==this._$AB;){const a=te(e).nextSibling;te(e).remove(),e=a}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class G{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,i,a,s,r){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=i,this._$AM=s,this.options=r,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=h}_$AI(e,i=this,a,s){const r=this.strings;let o=!1;if(r===void 0)e=M(this,e,i,0),o=!E(e)||e!==this._$AH&&e!==P,o&&(this._$AH=e);else{const n=e;let d,l;for(e=r[0],d=0;d<r.length-1;d++)l=M(this,n[a+d],i,d),l===P&&(l=this._$AH[d]),o||=!E(l)||l!==this._$AH[d],l===h?e=h:e!==h&&(e+=(l??"")+r[d+1]),this._$AH[d]=l}o&&!s&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class De extends G{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}}class Ee extends G{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}}class ze extends G{constructor(e,i,a,s,r){super(e,i,a,s,r),this.type=5}_$AI(e,i=this){if((e=M(this,e,i,0)??h)===P)return;const a=this._$AH,s=e===h&&a!==h||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,r=e!==h&&(a===h||s);s&&this.element.removeEventListener(this.name,this,a),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class $e{constructor(e,i,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){M(this,e)}}const Re=j.litHtmlPolyfillSupport;Re?.(z,$),(j.litHtmlVersions??=[]).push("3.3.2");const Ne=(t,e,i)=>{const a=i?.renderBefore??e;let s=a._$litPart$;if(s===void 0){const r=i?.renderBefore??null;a._$litPart$=s=new $(e.insertBefore(D(),r),r,void 0,i??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=globalThis;class k extends I{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ne(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return P}}k._$litElement$=!0,k.finalized=!0,Y.litElementHydrateSupport?.({LitElement:k});const Ue=Y.litElementPolyfillSupport;Ue?.({LitElement:k});(Y.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me=t=>(e,i)=>{i!==void 0?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fe={attribute:!0,type:String,converter:N,reflect:!1,hasChanged:V},Ge=(t=Fe,e,i)=>{const{kind:a,metadata:s}=i;let r=globalThis.litPropertyMetadata.get(s);if(r===void 0&&globalThis.litPropertyMetadata.set(s,r=new Map),a==="setter"&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),a==="accessor"){const{name:o}=i;return{set(n){const d=e.get.call(this);e.set.call(this,n),this.requestUpdate(o,d,t,!0,n)},init(n){return n!==void 0&&this.C(o,void 0,t,n),n}}}if(a==="setter"){const{name:o}=i;return function(n){const d=this[o];e.call(this,n),this.requestUpdate(o,d,t,!0,n)}}throw Error("Unsupported decorator location: "+a)};function O(t){return(e,i)=>typeof i=="object"?Ge(t,e,i):((a,s,r)=>{const o=s.hasOwnProperty(r);return s.constructor.createProperty(r,a),o?Object.getOwnPropertyDescriptor(s,r):void 0})(t,e,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function m(t){return O({...t,state:!0,attribute:!1})}var Be=Object.defineProperty,He=Object.getOwnPropertyDescriptor,x=(t,e,i,a)=>{for(var s=a>1?void 0:a?He(e,i):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(s=(a?o(e,i,s):o(s))||s);return a&&s&&Be(e,i,s),s};let b=class extends k{constructor(){super(...arguments),this.open=!1,this.fullPage=!1,this.position=null,this.size={width:1360,height:600},this.activeTab="about",this.isDragging=!1,this.isResizing=!1,this.currentCardIndex=0,this.isCardDragging=!1,this.dragStartX=0,this.dragStartY=0,this.dragStartPosX=0,this.dragStartPosY=0,this.resizeStartWidth=0,this.resizeStartHeight=0,this.cardDragThreshold=40,this._tabCardCounts={about:12,privacy:4,eula:4,"third-party":4,safety:4,disclaimers:4},this._touchStartX=0,this._touchStartY=0,this._nextCard=()=>{this.currentCardIndex=(this.currentCardIndex+1)%this._currentTabCardCount},this._prevCard=()=>{this.currentCardIndex=(this.currentCardIndex-1+this._currentTabCardCount)%this._currentTabCardCount},this._goToCard=t=>{this.currentCardIndex=Math.max(0,Math.min(t,this._currentTabCardCount-1))},this._onKeyDown=t=>{this.fullPage&&(t.key==="ArrowRight"?(t.preventDefault(),this._nextCard()):t.key==="ArrowLeft"&&(t.preventDefault(),this._prevCard()))},this._onTouchStart=t=>{this._touchStartX=t.touches[0].clientX,this._touchStartY=t.touches[0].clientY},this._onTouchEnd=t=>{if(!this.fullPage)return;const e=t.changedTouches[0].clientX-this._touchStartX,i=t.changedTouches[0].clientY-this._touchStartY;this.isCardDragging=!1,Math.abs(e)>Math.abs(i)&&Math.abs(e)>this.cardDragThreshold&&(e<0?this._nextCard():this._prevCard())},this._onDragStart=t=>{if(t.target.closest(".about-close-btn"))return;this.isDragging=!0,this.dragStartX=t.clientX,this.dragStartY=t.clientY;const e=this.position||this._defaultPosition();this.dragStartPosX=e.x,this.dragStartPosY=e.y,t.preventDefault()},this._onResizeStart=t=>{this.isResizing=!0,this.dragStartX=t.clientX,this.dragStartY=t.clientY,this.resizeStartWidth=this.size.width,this.resizeStartHeight=this.size.height,t.preventDefault(),t.stopPropagation()},this._onMouseMove=t=>{if(this.isDragging){const e=t.clientX-this.dragStartX,i=t.clientY-this.dragStartY,a={x:this.dragStartPosX+e,y:this.dragStartPosY+i};this.position=a,this.dispatchEvent(new CustomEvent("position-changed",{detail:a}))}if(this.isResizing){const e=t.clientX-this.dragStartX,i=t.clientY-this.dragStartY,a={width:Math.max(500,this.resizeStartWidth+e),height:Math.max(400,this.resizeStartHeight+i)};this.size=a,this.dispatchEvent(new CustomEvent("size-changed",{detail:a}))}},this._onMouseUp=()=>{this.isDragging=!1,this.isResizing=!1},this.TAB_ITEMS=[{id:"about",icon:"ℹ️",label:"About"},{id:"privacy",icon:"🔒",label:"Privacy Policy"},{id:"eula",icon:"📜",label:"EULA"},{id:"third-party",icon:"📦",label:"Third Party Notice"},{id:"safety",icon:"🛡️",label:"Safety"},{id:"disclaimers",icon:"⚠️",label:"Disclaimers"}]}get _currentTabCardCount(){return this._tabCardCounts[this.activeTab]??1}connectedCallback(){super.connectedCallback(),window.addEventListener("mousemove",this._onMouseMove),window.addEventListener("mouseup",this._onMouseUp),window.addEventListener("keydown",this._onKeyDown),window.addEventListener("touchstart",this._onTouchStart,{passive:!0}),window.addEventListener("touchend",this._onTouchEnd,{passive:!0})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mousemove",this._onMouseMove),window.removeEventListener("mouseup",this._onMouseUp),window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("touchstart",this._onTouchStart),window.removeEventListener("touchend",this._onTouchEnd)}willUpdate(t){t.has("activeTab")&&(this.currentCardIndex=0)}_effectiveSize(){const t=Math.max(500,window.innerWidth*.94),e=Math.max(400,window.innerHeight*.92);return{width:Math.min(this.size.width,t),height:Math.min(this.size.height,e)}}_defaultPosition(){const{width:t,height:e}=this._effectiveSize();return{x:Math.max(20,(window.innerWidth-t)/2),y:Math.max(20,(window.innerHeight-e)/2)}}render(){if(!this.open&&!this.fullPage)return c``;const t=c`
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
            ${this.TAB_ITEMS.map(e=>c`
              <button
                class="about-nav-btn ${this.activeTab===e.id?"active":""}"
                @click=${()=>{this.activeTab=e.id}}
              >
                <span class="about-nav-icon">${e.icon}</span>
                ${e.label}
              </button>
            `)}
          </div>
          <button
            class="about-home-btn"
            @click=${()=>this.dispatchEvent(new CustomEvent("navigate-home",{bubbles:!0,composed:!0}))}
            title="Back to Home"
          >
            <span style="font-size:14px;">🏠</span>
            Home
          </button>
        </div>

        <!-- Main content area -->
        <div class="about-main">
          <div class="about-header" @mousedown=${this.fullPage?void 0:this._onDragStart}>
            <span class="about-header-title">${this.TAB_ITEMS.find(e=>e.id===this.activeTab)?.label??"About"}</span>
            ${this.fullPage?"":c`
              <button class="about-close-btn" @click=${()=>this.dispatchEvent(new CustomEvent("close"))} title="Close">✕</button>
            `}
          </div>
          <div class="about-content ${this.fullPage?"":"scroll-mode"}">
            ${this.activeTab==="about"&&this.fullPage?this._renderAboutCarousel():""}
            ${this.activeTab==="about"&&!this.fullPage?this._renderAbout():""}
            ${this.activeTab==="privacy"&&this.fullPage?this._renderPrivacyCarousel():""}
            ${this.activeTab==="privacy"&&!this.fullPage?this._renderPrivacy():""}
            ${this.activeTab==="eula"&&this.fullPage?this._renderEULACarousel():""}
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
      <div class="about-overlay" @mousedown=${e=>{e.target.classList.contains("about-overlay")&&this.dispatchEvent(new CustomEvent("close"))}}>
        ${t}
      </div>
    `}_renderAbout(){return c`
      <div class="about-hero">
        <div class="about-hero-logo">◉</div>
        <h1>Orus <span class="version-badge">v1.0.1 — March 2026</span></h1>
        <p>Locally Hosted Personal Assistant &amp; 3D Visualisation Engine</p>
      </div>

      <p>
        Orus AI System is a locally hosted personal assistant licensed per host device, providing
        browser-based access to connected client devices within the same local network, with
        memory-enabled operational assistance and local-first processing.
        Built on the Phi-4 Multimodal language model with GPU-accelerated vLLM inference, Orus delivers
        a seamless bridge between human intent and machine intelligence.
      </p>

      <!-- ─────────────────────────────────────────────────────────────────── -->
      <!-- Data Path Summary                                                  -->
      <!-- ─────────────────────────────────────────────────────────────────── -->
      <h3>Data Path</h3>
      <div class="disclaimer-card">
        <p>
          <strong>Host device:</strong> Orus runs on a licensed host device.<br/>
          <strong>Client access:</strong> Devices on the same local network can connect via browser.<br/>
          <strong>File staging:</strong> Files may be staged locally before encrypted transmission.<br/>
          <strong>Platform telemetry:</strong> Microsoft Store and Windows platform services may collect their own telemetry under their own terms.<br/>
          <strong>Orus telemetry:</strong> Orus itself is designed to minimise Orus-originated telemetry.
        </p>
      </div>

      <!-- ─────────────────────────────────────────────────────────────────── -->
      <!-- Architecture Overview                                              -->
      <!-- ─────────────────────────────────────────────────────────────────── -->
      <h3>Architecture Overview</h3>
      <div class="about-arch-grid">
        <div class="about-arch-card">
          <div class="about-arch-card-title">🧠 AI Engine</div>
          <div class="about-arch-card-value">Designed by <strong>Comet Game Studio Ltd</strong> and powered by Microsoft's Phi-4 Multimodal (14B) via vLLM with Paged Attention, Phi's LoRA adapters for vision/audio, constrained generation, and semantic intent calculations.</div>
        </div>
        <div class="about-arch-card">
          <div class="about-arch-card-title">🎨 3D Renderer</div>
          <div class="about-arch-card-value">Three.js with procedural shaders, Living Machine effects, bloom/vignette post-processing, WebGPU support, and audio-reactive geometry</div>
        </div>
        <div class="about-arch-card">
          <div class="about-arch-card-title">🎤 Voice Pipeline</div>
          <div class="about-arch-card-value">Whisper Speech-To-Text & Orpheus Text-To-Speech + Soprano ONNX with multi-speaker diarization and voice profiles</div>
        </div>
        <div class="about-arch-card">
          <div class="about-arch-card-title">📡 Connectivity</div>
          <div class="about-arch-card-value">Real-time WebSocket streaming, browser-based client access on local network, GPU memory budgeting, and VRAM management</div>
        </div>
        <div class="about-arch-card">
          <div class="about-arch-card-title">🧬 Memory System</div>
          <div class="about-arch-card-value">Long-term memory with intelligent retrieval, automatic organisation, Memory Lab UI, and contextual query routing</div>
        </div>
        <div class="about-arch-card">
          <div class="about-arch-card-title">📦 Distribution</div>
          <div class="about-arch-card-value">Available on the Microsoft Store with per-host-device licensing and seamless updates</div>
        </div>
      </div>

      <!-- Early Access Notice -->
      <div style="background: linear-gradient(135deg, #422006 0%, #713f12 100%); border: 1px solid #f59e0b; border-radius: 12px; padding: 16px 20px; margin: 16px 0;">
        <div style="font-size: 13px; font-weight: 600; color: #fbbf24; margin-bottom: 6px;">⚡ Early Access Notice</div>
        <div style="font-size: 12px; color: #fde68a; line-height: 1.6;">
          Orus is still stabilising. You can currently enjoy all features available in Orus without the planned
          tiered subscription system. Subscription tiers listed in the EULA reflect the intended commercial
          structure and will be enforced in a future release.
        </div>
      </div>

      <!-- ─────────────────────────────────────────────────────────────────── -->
      <!-- Core AI & Voice                                                     -->
      <!-- ─────────────────────────────────────────────────────────────────── -->
      <h3>Core AI &amp; Voice</h3>
      <ul>
        <li><strong>Real-time voice conversation</strong> — Multi-speaker diarization, per-app audio capture, voice profiles with multi-language support</li>
        <li><strong>Orpheus &amp; Soprano TTS</strong> — Dual TTS engines: Orpheus (LLM-based, English, emotion tags + SNAC neural codec) and Soprano (ONNX)</li>
        <li><strong>TTS Orchestrator</strong> — Priority-based audio harmonization preventing voice overlap across responses, backchannels, and system announcements</li>
        <li><strong>Meeting Mode</strong> — Discord/Teams/WhatsApp call transcription via WASAPI loopback capture with per-app audio and multi-speaker detection</li>
        <li><strong>Interruption Handler</strong> — Detects user speech during playback, stops audio, and plays cached reaction clips for natural conversation flow</li>
        <li><strong>Semantic Intent System</strong> —  Menu/Feature routing mapping natural language to ring menu actions and popup windows</li>
        <li><strong>Text Chat</strong> — Keyboard-based text chat popup for non-voice interaction</li>
      </ul>

      <!-- ─────────────────────────────────────────────────────────────────── -->
      <!-- 3D Visualization & Creative                                         -->
      <!-- ─────────────────────────────────────────────────────────────────── -->
      <h3>3D Visualization &amp; Creative</h3>
      <ul>
        <li><strong>Procedural 3D visualization</strong> — Audio-reactive Living Machine effects and procedural shader generation</li>
        <li><strong>Living Menu</strong> — Interactive 3D radial menu with scene-adapted colors, page navigation, debounced rebuild guards, hitbox isolation, and transition animations</li>
        <li><strong>Boltzmann Brain (OBB)</strong> — Procedural 3D object creation; user describes objects, Orus generates orbiting geometry with Second Brain conversational AI</li>
        <li><strong>Iterative Self Visualisation (ISV)</strong> — LLM generates constrained visual commands from screenshots with auto-exposure protection and camera control</li>
        <li><strong>Face capture</strong> — MediaPipe-driven mesh deformation with real-time 3D visualization (Apache 2.0)</li>
        <li><strong>3D asset creation</strong> — Stability AI SF3D single-image to 3D mesh generation</li>
        <li><strong>Screen Lock</strong> — Configurable lock overlay with camera targets, animation targets, and custom lock configuration</li>
      </ul>

      <!-- ─────────────────────────────────────────────────────────────────── -->
      <!-- Document Intelligence & Knowledge                                   -->
      <!-- ─────────────────────────────────────────────────────────────────── -->
      <h3>Document Intelligence &amp; Knowledge</h3>
      <ul>
        <li><strong>Document ingestion</strong> — PDF, DOCX, Excel, and image processing with AI-assisted analysis and OCR</li>
        <li><strong>Categorizer</strong> — AI-powered file categorization wizard with templates, constrained output, and batch processing panel</li>
        <li><strong>Processor Panel</strong> — Batch document processing pipeline with constrained output modes (JSON, categorizer)</li>
        <li><strong>Validator</strong> — Stage 3 pipeline validating processor outputs (failed chunks, valid JSON, confidence threshold, required fields)</li>
        <li><strong>Defrag 3D</strong> — 3D spatial text review with AI chunk summarization, persistent sessions, and interactive 3D visualizer</li>
        <li><strong>Webber (Web Research Agent)</strong> — Google-powered web research with search, fetch, compile, and AI-processed summaries</li>
        <li><strong>Discord Integration</strong> — OCR-based Discord chat extraction via Windows Bridge, file watcher, and full popup UI</li>
      </ul>

      <!-- ─────────────────────────────────────────────────────────────────── -->
      <!-- AI Tools & Reasoning                                                -->
      <!-- ─────────────────────────────────────────────────────────────────── -->
      <h3>AI Tools &amp; Reasoning</h3>
      <ul>
        <li><strong>BrainStorm</strong> — Cognitive brainstorming with multiple reasoning frameworks and streaming sessions</li>
        <li><strong>Canvas (AI Code Editor)</strong> — Iterative Self-Loop code editor with AI-assisted generation, validation, and intelligent diff preview for safe code replacement</li>
        <li><strong>Presenter (Adaptive Learning)</strong> — Learning presentation module with AI-generated agendas, voice interruption handling, and revision support for dynamic teaching</li>
        <li><strong>System Dialogue</strong> — Health diagnostics and system information retrieval with natural language interaction</li>
        <li><strong>Prompt Creator</strong> — Interactive prompt engineering tool with iterative refinement and testing</li>
        <li><strong>UI Interpreter</strong> — Advanced screen/UI element analysis with visual reasoning and GUI assistance</li>
        <li><strong>Bulk Intelligence</strong> — Batch question automation with CSV audit export, evaluation criteria, and result ranking</li>
        <li><strong>Activity Transition System</strong> — Voice-driven voice-driven popup/panel switching across 30+ transitional activities (brainstorm, taskchat, memory-lab, presenter, canvas, minigames, training-lab, defrag, and more) with intelligent context awareness</li>
        <li><strong>Minigames</strong> — 30 pen-and-paper games (TTT, Hangman, NIM, riddle games, trivia, word games, logic puzzles) with voice ordinal navigation and streaming responses</li>
      </ul>

      <!-- ─────────────────────────────────────────────────────────────────── -->
      <!-- Session & Productivity                                              -->
      <!-- ─────────────────────────────────────────────────────────────────── -->
      <h3>Session &amp; Productivity</h3>
      <ul>
        <li><strong>Multi-session management</strong> — Persistent memory across conversations with session state save/restore</li>
        <li><strong>Memory Lab</strong> — Memory management UI for viewing, editing, and configuring the persistent RAG system</li>
        <li><strong>TaskChat</strong> — Voice-driven Q&amp;A session wizard with transcript save/load and TTS-cached template questions</li>
        <li><strong>Task Manager</strong> — Calendar-based task scheduling with AI-powered task extraction, ordering, and completion checking</li>
        <li><strong>Editor Recorder</strong> — Session-based state recorder with undo/redo, timeline navigation, state reconstruction, and export</li>
        <li><strong>Conversation Player</strong> — Video player-like UI for replaying dialogue flow with variable speed (1x–8x), TTS export, and intent analysis</li>
        <li><strong>Music Manager</strong> — Music library upload, playlists, mode-based playback, and integrated streaming player</li>
        <li><strong>Onboarding Wizard</strong> — First-run setup with pre-cached TTS phrases (English &amp; Turkish)</li>
        <li><strong>Storage Manager</strong> — File storage browser with session-based file management and settings</li>
      </ul>

      <!-- ─────────────────────────────────────────────────────────────────── -->
      <!-- Platform & Infrastructure                                           -->
      <!-- ─────────────────────────────────────────────────────────────────── -->
      <h3>Platform &amp; Infrastructure</h3>
      <ul>
        <li><strong>Game Engine</strong> — Interactive 3D world building with Shell Director, popup window management, and auth state forwarding</li>
        <li><strong>Live Vision</strong> — Real-time screen capture and AI analysis with constrained visual command generation, cognitive overlays, and WebSocket streaming</li>
        <li><strong>Webcam streaming</strong> — Real-time AI vision with visual input modes</li>
        <li><strong>Remote Pixel pipeline</strong> — Server-side rendering via Playwright headless browser</li>
        <li><strong>VRAM Manager</strong> — Centralized GPU memory dashboard with model load/unload controls and compute utilization metrics</li>
        <li><strong>GUI Launcher</strong> — Pre-launch mode selector for server configuration, preload modules, and dependency checks</li>
        <li><strong>Mouse Input Bridge</strong> — Windows mouse/keyboard event capture and forwarding to the AI system (configurable via JSON)</li>
        <li><strong>Notification inbox</strong> — TTS commentary with text cleansing, first-launch welcome, boot-aware scheduling, and toggleable voice narration</li>
      </ul>

      <!-- ─────────────────────────────────────────────────────────────────── -->
      <!-- Add-On Packs (Consumable)                                           -->
      <!-- ─────────────────────────────────────────────────────────────────── -->
      <h3>Add-On Packs</h3>
      <p style="font-size: 12px; color: #94a3b8; margin-bottom: 10px;">
        Purchasable individually from the Microsoft Store as consumable add-ons. 
        These unlock specific features without requiring a full subscription tier.
      </p>
      <div class="about-arch-grid">
        <div class="about-arch-card">
          <div class="about-arch-card-title">👁️ ISV Credit Pack</div>
          <div class="about-arch-card-value">Unlock Iterative Self-Visualization credits — AI-driven visual command generation from screenshots with auto-exposure protection and Living Machine state saving. Credits are consumed per save action.</div>
          <div style="font-size: 10px; color: #a78bfa; margin-top: 4px;">Consumable · Managed via the Microsoft Store</div>
        </div>
      </div>

      <h3>Subscription Periods</h3>
      <p style="font-size: 12px; color: #94a3b8;">
        3-Day Pass (72 hrs) · Monthly (30 days) · Quarterly (90 days) · Bi-Annual (180 days) · Annual (365 days) ·
        All licences are per-host-device. Add-On Packs are available via the Microsoft Store and tied to your Microsoft account.
        See the EULA tab for full terms.
      </p>

      <h3>System Requirements</h3>
      <ul>
        <li>NVIDIA GPU with 16 GB+ VRAM (24 GB+ recommended for advanced features)</li>
        <li>64-bit Windows 10 or Windows 11</li>
        <li>16 GB+ system RAM (32 GB recommended)</li>
        <li>10 GB free disk space for installation and models</li>
        <li>NVIDIA CUDA Toolkit — supported versions:
          <strong>13.0</strong>, 12.9, 12.8, 12.7, 12.6, 12.5, 12.4, 12.3, 12.2, 12.1, 12.0
          <br/><span style="font-size: 10px; color: #64748b;">(Orus auto-detects installed CUDA toolkits and registers DLL directories at startup. PyTorch ships with CUDA 12.8 binaries.)</span>
        </li>
      </ul>

      <p style="color: #64748b; font-size: 11px; margin-top: 20px; text-align: center;">
        © 2026 Comet Game Studio Ltd. All rights reserved.<br/>
        Powered by the Microsoft Phi-4 model family. 40+ integrated features.<br/>
      </p>
    `}_renderAboutCarousel(){return c`
      <div class="about-content-carousel">
        <!-- Card 0: Hero -->
        <div class="about-card hero ${this.currentCardIndex===0?"active":this.currentCardIndex>0?"prev":"next"} ${this.isCardDragging?"dragging":""}">
          <div class="about-hero-logo">◉</div>
          <h1>Orus</h1>
          <span class="version-badge">v1.0.1 — March 2026</span>
          <p>Locally Hosted Personal Assistant &amp; 3D Visualisation Engine</p>

          <!-- Key stats -->
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:18px 0 14px;text-align:center;">
            <div style="background:rgba(99,102,241,0.08);border:1px solid rgba(99,102,241,0.2);border-radius:8px;padding:14px 8px;">
              <div style="font-family:'Orbitron',sans-serif;font-size:28px;color:#a5b4fc;font-weight:700;">40+</div>
              <div style="font-size:12px;color:#64748b;margin-top:4px;">Integrated Features</div>
            </div>
            <div style="background:rgba(99,102,241,0.08);border:1px solid rgba(99,102,241,0.2);border-radius:8px;padding:14px 8px;">
              <div style="font-family:'Orbitron',sans-serif;font-size:28px;color:#a5b4fc;font-weight:700;">14B</div>
              <div style="font-size:12px;color:#64748b;margin-top:4px;">Phi-4 Parameters</div>
            </div>
            <div style="background:rgba(99,102,241,0.08);border:1px solid rgba(99,102,241,0.2);border-radius:8px;padding:14px 8px;">
              <div style="font-family:'Orbitron',sans-serif;font-size:28px;color:#a5b4fc;font-weight:700;">100%</div>
              <div style="font-size:12px;color:#64748b;margin-top:4px;">Local-First Privacy</div>
            </div>
          </div>

          <!-- Capability list — tap any row to navigate to that section -->
          <div style="display:flex;flex-direction:column;gap:6px;margin:0 0 16px;">
            <button @click=${()=>this._goToCard(3)} class="about-chip-btn" style="display:flex;align-items:center;gap:10px;text-align:left;border-radius:8px;padding:10px 14px;font-size:13px;justify-content:space-between;" title="View Core AI & Voice">
              <span>🎤 Voice AI</span><span style="opacity:0.5;font-size:11px;">›</span>
            </button>
            <button @click=${()=>this._goToCard(4)} class="about-chip-btn" style="display:flex;align-items:center;gap:10px;text-align:left;border-radius:8px;padding:10px 14px;font-size:13px;justify-content:space-between;" title="View 3D Visualisation">
              <span>🎨 3D Visualisation</span><span style="opacity:0.5;font-size:11px;">›</span>
            </button>
            <button @click=${()=>this._goToCard(5)} class="about-chip-btn" style="display:flex;align-items:center;gap:10px;text-align:left;border-radius:8px;padding:10px 14px;font-size:13px;justify-content:space-between;" title="View Document Intelligence">
              <span>📄 Document AI</span><span style="opacity:0.5;font-size:11px;">›</span>
            </button>
            <button @click=${()=>this._goToCard(7)} class="about-chip-btn" style="display:flex;align-items:center;gap:10px;text-align:left;border-radius:8px;padding:10px 14px;font-size:13px;justify-content:space-between;" title="View Memory System">
              <span>🧠 Memory System</span><span style="opacity:0.5;font-size:11px;">›</span>
            </button>
            <button @click=${()=>this._goToCard(8)} class="about-chip-btn" style="display:flex;align-items:center;gap:10px;text-align:left;border-radius:8px;padding:10px 14px;font-size:13px;justify-content:space-between;" title="View Platform & Infrastructure">
              <span>⚡ GPU-Accelerated</span><span style="opacity:0.5;font-size:11px;">›</span>
            </button>
            <button @click=${()=>this._goToCard(9)} class="about-chip-btn" style="display:flex;align-items:center;gap:10px;text-align:left;border-radius:8px;padding:10px 14px;font-size:13px;justify-content:space-between;" title="View Add-On Packs">
              <span>🏪 Microsoft Store</span><span style="opacity:0.5;font-size:11px;">›</span>
            </button>
          </div>

          <p style="font-size:12px;color:#64748b;margin-top:4px;">
            By <strong style="color:#a5b4fc;">Comet Game Studio Ltd</strong> · Powered by Microsoft Phi-4 Multimodal
          </p>
        </div>

        <!-- Card 1: Intro & Data Path -->
        <div class="about-card ${this.currentCardIndex===1?"active":this.currentCardIndex>1?"prev":"next"} ${this.isCardDragging?"dragging":""}">
          <h2>🌐 Data Path</h2>
          <p>Orus AI System is a locally hosted personal assistant licensed per host device, providing browser-based access to connected client devices within the same local network, with memory-enabled operational assistance and local-first processing. Built on the Phi-4 Multimodal language model with GPU-accelerated vLLM inference, Orus delivers a seamless bridge between human intent and machine intelligence.</p>
          <div class="disclaimer-card">
            <p><strong>Host device:</strong> Orus runs on a licensed host device.<br/><strong>Client access:</strong> Devices on the same local network can connect via browser.<br/><strong>File staging:</strong> Files may be staged locally before encrypted transmission.<br/><strong>Platform telemetry:</strong> Microsoft Store and Windows platform services may collect their own telemetry under their own terms.<br/><strong>Orus telemetry:</strong> Orus itself is designed to minimise Orus-originated telemetry.</p>
          </div>
        </div>

        <!-- Card 2: Architecture Overview -->
        <div class="about-card ${this.currentCardIndex===2?"active":this.currentCardIndex>2?"prev":"next"} ${this.isCardDragging?"dragging":""}">
          <h2>🏗️ Architecture Overview</h2>
          <h3>🧠 AI Engine</h3>
          <p>Designed by Comet Game Studio Ltd and powered by Microsoft's Phi-4 Multimodal (14B) via vLLM with Paged Attention, Phi's LoRA adapters for vision/audio, constrained generation, and semantic intent calculations.</p>
          <h3>🎨 3D Renderer</h3>
          <p>Three.js with procedural shaders, Living Machine effects, bloom/vignette post-processing, WebGPU support, and audio-reactive geometry</p>
          <h3>🎤 Voice Pipeline</h3>
          <p>Whisper Speech-To-Text & Orpheus Text-To-Speech + Soprano ONNX with multi-speaker diarization and voice profiles</p>
          <h3>📡 Connectivity</h3>
          <p>Real-time WebSocket streaming, browser-based client access on local network, GPU memory budgeting, and VRAM management</p>
          <h3>🧬 Memory System</h3>
          <p>Long-term memory with intelligent retrieval, automatic organisation, Memory Lab UI, and contextual query routing</p>
          <h3>📦 Distribution</h3>
          <p>Available on the Microsoft Store with per-host-device licensing and seamless updates</p>
        </div>

        <!-- Card 3: Core AI & Voice -->
        <div class="about-card ${this.currentCardIndex===3?"active":this.currentCardIndex>3?"prev":"next"} ${this.isCardDragging?"dragging":""}">
          <h2>🎤 Core AI &amp; Voice</h2>
          <ul>
            <li><strong>Real-time voice conversation</strong> — Multi-speaker diarization, per-app audio capture, voice profiles with multi-language support</li>
            <li><strong>Orpheus &amp; Soprano TTS</strong> — Dual TTS engines: Orpheus (LLM-based, English, emotion tags + SNAC neural codec) and Soprano (ONNX)</li>
            <li><strong>TTS Orchestrator</strong> — Priority-based audio harmonization preventing voice overlap across responses, backchannels, and system announcements</li>
            <li><strong>Meeting Mode</strong> — Discord/Teams/WhatsApp call transcription via WASAPI loopback capture with per-app audio and multi-speaker detection</li>
            <li><strong>Interruption Handler</strong> — Detects user speech during playback, stops audio, and plays cached reaction clips for natural conversation flow</li>
            <li><strong>Semantic Intent System</strong> — Menu/Feature routing mapping natural language to ring menu actions and popup windows</li>
            <li><strong>Text Chat</strong> — Keyboard-based text chat popup for non-voice interaction</li>
          </ul>
        </div>

        <!-- Card 4: 3D Visualization & Creative -->
        <div class="about-card ${this.currentCardIndex===4?"active":this.currentCardIndex>4?"prev":"next"} ${this.isCardDragging?"dragging":""}">
          <h2>🎨 3D Visualization & Creative</h2>
          <ul>
            <li><strong>Procedural 3D visualization</strong> — Audio-reactive Living Machine effects and procedural shader generation</li>
            <li><strong>Living Menu</strong> — Interactive 3D radial menu with scene-adapted colors, page navigation, debounced rebuild guards, hitbox isolation, and transition animations</li>
            <li><strong>Boltzmann Brain (OBB)</strong> — Procedural 3D object creation; user describes objects, Orus generates orbiting geometry with Second Brain conversational AI</li>
            <li><strong>Iterative Self Visualisation (ISV)</strong> — LLM generates constrained visual commands from screenshots with auto-exposure protection and camera control</li>
            <li><strong>Face capture</strong> — MediaPipe-driven mesh deformation with real-time 3D visualization (Apache 2.0)</li>
            <li><strong>3D asset creation</strong> — Stability AI SF3D single-image to 3D mesh generation</li>
            <li><strong>Screen Lock</strong> — Configurable lock overlay with camera targets, animation targets, and custom lock configuration</li>
          </ul>
        </div>

        <!-- Card 5: Document Intelligence & Knowledge -->
        <div class="about-card ${this.currentCardIndex===5?"active":this.currentCardIndex>5?"prev":"next"} ${this.isCardDragging?"dragging":""}">
          <h2>📄 Document Intelligence & Knowledge</h2>
          <ul>
            <li><strong>Document ingestion</strong> — PDF, DOCX, Excel, and image processing with AI-assisted analysis and OCR</li>
            <li><strong>Categorizer</strong> — AI-powered file categorization wizard with templates, constrained output, and batch processing panel</li>
            <li><strong>Processor Panel</strong> — Batch document processing pipeline with constrained output modes (JSON, categorizer)</li>
            <li><strong>Validator</strong> — Stage 3 pipeline validating processor outputs (failed chunks, valid JSON, confidence threshold, required fields)</li>
            <li><strong>Defrag 3D</strong> — 3D spatial text review with AI chunk summarization, persistent sessions, and interactive 3D visualizer</li>
            <li><strong>Webber (Web Research Agent)</strong> — Google-powered web research with search, fetch, compile, and AI-processed summaries</li>
            <li><strong>Discord Integration</strong> — OCR-based Discord chat extraction via Windows Bridge, file watcher, and full popup UI</li>
          </ul>
        </div>

        <!-- Card 6: AI Tools & Reasoning -->
        <div class="about-card ${this.currentCardIndex===6?"active":this.currentCardIndex>6?"prev":"next"} ${this.isCardDragging?"dragging":""}">
          <h2>⚙️ AI Tools & Reasoning</h2>
          <ul>
            <li><strong>BrainStorm</strong> — Cognitive brainstorming with multiple reasoning frameworks and streaming sessions</li>
            <li><strong>Canvas (AI Code Editor)</strong> — Iterative Self-Loop code editor with AI-assisted generation, validation, and intelligent diff preview for safe code replacement</li>
            <li><strong>Presenter (Adaptive Learning)</strong> — Learning presentation module with AI-generated agendas, voice interruption handling, and revision support for dynamic teaching</li>
            <li><strong>System Dialogue</strong> — Health diagnostics and system information retrieval with natural language interaction</li>
            <li><strong>Prompt Creator</strong> — Interactive prompt engineering tool with iterative refinement and testing</li>
            <li><strong>UI Interpreter</strong> — Advanced screen/UI element analysis with visual reasoning and GUI assistance</li>
            <li><strong>Bulk Intelligence</strong> — Batch question automation with CSV audit export, evaluation criteria, and result ranking</li>
            <li><strong>Activity Transition System</strong> — Voice-driven popup/panel switching across 30+ transitional activities with intelligent context awareness</li>
            <li><strong>Minigames</strong> — 30 pen-and-paper games (TTT, Hangman, NIM, riddle games, trivia, word games, logic puzzles) with voice ordinal navigation</li>
          </ul>
        </div>

        <!-- Card 7: Session & Productivity -->
        <div class="about-card ${this.currentCardIndex===7?"active":this.currentCardIndex>7?"prev":"next"}">
          <h2>📊 Session & Productivity</h2>
          <ul>
            <li><strong>Multi-session management</strong> — Persistent memory across conversations with session state save/restore</li>
            <li><strong>Memory Lab</strong> — Memory management UI for viewing, editing, and configuring the persistent RAG system</li>
            <li><strong>TaskChat</strong> — Voice-driven Q&amp;A session wizard with transcript save/load and TTS-cached template questions</li>
            <li><strong>Task Manager</strong> — Calendar-based task scheduling with AI-powered task extraction, ordering, and completion checking</li>
            <li><strong>Editor Recorder</strong> — Session-based state recorder with undo/redo, timeline navigation, state reconstruction, and export</li>
            <li><strong>Conversation Player</strong> — Video player-like UI for replaying dialogue flow with variable speed (1x–8x), TTS export, and intent analysis</li>
            <li><strong>Music Manager</strong> — Music library upload, playlists, mode-based playback, and integrated streaming player</li>
            <li><strong>Onboarding Wizard</strong> — First-run setup with pre-cached TTS phrases (English &amp; Turkish)</li>
            <li><strong>Storage Manager</strong> — File storage browser with session-based file management and settings</li>
          </ul>
        </div>

        <!-- Card 8: Platform & Infrastructure -->
        <div class="about-card ${this.currentCardIndex===8?"active":this.currentCardIndex>8?"prev":"next"}">
          <h2>🖥️ Platform & Infrastructure</h2>
          <ul>
            <li><strong>Game Engine</strong> — Interactive 3D world building with Shell Director, popup window management, and auth state forwarding</li>
            <li><strong>Live Vision</strong> — Real-time screen capture and AI analysis with constrained visual command generation, cognitive overlays, and WebSocket streaming</li>
            <li><strong>Webcam streaming</strong> — Real-time AI vision with visual input modes</li>
            <li><strong>Remote Pixel pipeline</strong> — Server-side rendering via Playwright headless browser</li>
            <li><strong>VRAM Manager</strong> — Centralized GPU memory dashboard with model load/unload controls and compute utilization metrics</li>
            <li><strong>GUI Launcher</strong> — Pre-launch mode selector for server configuration, preload modules, and dependency checks</li>
            <li><strong>Mouse Input Bridge</strong> — Windows mouse/keyboard event capture and forwarding to the AI system (configurable via JSON)</li>
            <li><strong>Notification inbox</strong> — TTS commentary with text cleansing, first-launch welcome, boot-aware scheduling, and toggleable voice narration</li>
          </ul>
        </div>

        <!-- Card 9: Add-On Packs -->
        <div class="about-card ${this.currentCardIndex===9?"active":this.currentCardIndex>9?"prev":"next"}">
          <h2>📦 Add-On Packs</h2>
          <p style="font-size: 12px; color: #94a3b8; margin-bottom: 10px;">Purchasable individually from the Microsoft Store as consumable add-ons. These unlock specific features without requiring a full subscription tier.</p>
          <h3>👁️ ISV Credit Pack</h3>
          <p>Unlock Iterative Self-Visualization credits — AI-driven visual command generation from screenshots with auto-exposure protection and Living Machine state saving. Credits are consumed per save action.</p>
          <p style="font-size: 10px; color: #a78bfa; margin-top: 4px;">Consumable · Managed via the Microsoft Store</p>
        </div>

        <!-- Card 10: Subscription Periods -->
        <div class="about-card ${this.currentCardIndex===10?"active":this.currentCardIndex>10?"prev":"next"}">
          <h2>💳 Subscription Periods</h2>
          <p style="font-size: 12px; color: #94a3b8; margin-bottom: 16px;">Per-host-device licensing via the Microsoft Store. All licences are non-transferable and valid on one licensed host device.</p>
          <div class="about-arch-grid">
            <div class="about-arch-card">
              <div class="about-arch-card-title">⚡ 3-Day Pass</div>
              <div class="about-arch-card-value">72 hours · Full Pro-tier access</div>
            </div>
            <div class="about-arch-card">
              <div class="about-arch-card-title">📅 Monthly</div>
              <div class="about-arch-card-value">30 days · Flexible access</div>
            </div>
          </div>
          <div class="disclaimer-card" style="margin-top: 12px;">
            <div class="disclaimer-card-title">🛍️ Add-On Packs</div>
            <p>Purchasable individually via the Microsoft Store: <strong>ISV Credit Pack</strong> — Iterative Self-Visualisation credits (consumable). Add-On Packs are tied to your Microsoft account, not the host device. See the EULA tab for full licence terms.</p>
          </div>
        </div>

        <!-- Card 11: System Requirements -->
        <div class="about-card ${this.currentCardIndex===11?"active":this.currentCardIndex>11?"prev":"next"}">
          <h2>🖲️ System Requirements</h2>
          <ul>
            <li>NVIDIA GPU with 16 GB+ VRAM (24 GB+ recommended for advanced features)</li>
            <li>64-bit Windows 10 or Windows 11</li>
            <li>16 GB+ system RAM (32 GB recommended)</li>
            <li>10 GB free disk space for installation and models</li>
            <li>NVIDIA CUDA Toolkit — supported versions: <strong>13.0</strong>, 12.9, 12.8, 12.7, 12.6, 12.5, 12.4, 12.3, 12.2, 12.1, 12.0
            <br/><span style="font-size: 10px; color: #64748b;">(Orus auto-detects installed CUDA toolkits and registers DLL directories at startup. PyTorch ships with CUDA 12.8 binaries.)</span></li>
          </ul>
          <p style="color: #64748b; font-size: 11px; margin-top: 20px; text-align: center;">
            © 2026 Comet Game Studio Ltd. All rights reserved.<br/>
            Powered by the Microsoft Phi-4 model family. 40+ integrated features.<br/>
            Visit us at <a href="https://www.cometgamestudio.com">cometgamestudio.com</a>
          </p>
        </div>

        <!-- Navigation: side arrows + bottom dots -->
        ${this._renderCarouselDots(this._tabCardCounts.about)}
      </div>
    `}_cardClass(t){return this.currentCardIndex===t?"active":this.currentCardIndex>t?"prev":"next"}_renderCarouselDots(t){return c`
      <div class="about-arrow-row" role="navigation" aria-label="Slide navigation">
        <button
          class="about-nav-side-arrow"
          @click=${e=>{e.stopPropagation(),this._prevCard()}}
          title="Previous slide"
          aria-label="Previous slide"
          tabindex="0"
        >◀</button>
        <div class="about-arrow-spacer" aria-hidden="true"></div>
        <button
          class="about-nav-side-arrow"
          @click=${e=>{e.stopPropagation(),this._nextCard()}}
          title="Next slide"
          aria-label="Next slide"
          tabindex="0"
        >▶</button>
      </div>
      <div class="about-carousel-dots" role="tablist" aria-label="Slide indicator">
        ${Array.from({length:t},(e,i)=>c`
          <button
            class="about-carousel-dot ${i===this.currentCardIndex?"active":""}"
            @click=${()=>this._goToCard(i)}
            title="Slide ${i+1} of ${t}"
            role="tab"
            aria-selected="${i===this.currentCardIndex}"
            aria-label="Slide ${i+1} of ${t}"
            tabindex="${i===this.currentCardIndex?"0":"-1"}"
          ></button>
        `)}
      </div>
    `}_renderPrivacyCarousel(){return c`
      <div class="about-content-carousel">
        <div class="about-card ${this._cardClass(0)} ${this.isCardDragging?"dragging":""}">
          <h2>🔒 Privacy Policy</h2>
          <p style="font-size: 11px; color: #64748b; margin-bottom: 16px;">Last Updated: March 24, 2026</p>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">🏠 Local-First Architecture</div>
            <p>Orus is designed with a local-first privacy philosophy. Core AI models — including
               Phi-4 (reasoning), Whisper (speech-to-text), Orpheus (text-to-speech), and vision models —
               run on the licensed host device. No collaborative cloud processing is used for inference.
               Your prompts, voice input, and generated content are processed locally wherever possible.</p>
          </div>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">📁 File Submissions and Staging</div>
            <p>Users may submit files through Orus's in-app interface. Depending on platform and
               deployment mode, files may be staged locally in Windows app data or MSIX-managed
               storage before encrypted transmission to Orus services. Submitted files are processed
               on the host device.</p>
          </div>
        </div>

        <div class="about-card ${this._cardClass(1)} ${this.isCardDragging?"dragging":""}">
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

        <div class="about-card ${this._cardClass(2)}">
          <h2>🔒 Privacy Policy</h2>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">🖥️ Screen &amp; Audio Data</div>
            <p>Live Vision (screen capture) and audio listening (microphone) features operate over a
               strictly local loopback connection (localhost). Audio is transcribed by local instances
               of Whisper. Screen pixels are analysed by local vision models. This high-bandwidth
               sensory data is processed locally and is not transmitted over the public internet.</p>
          </div>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">💳 Payments &amp; Subscriptions</div>
            <p>Comet Game Studio Ltd does not process or store any payment card information (PCI).
               All subscriptions and pass purchases are handled securely and exclusively by the
               <strong>Microsoft Store</strong> commerce platform. Orus solely queries the Microsoft
               Store API to validate the existence of an active licence token on the host device.</p>
          </div>
        </div>

        <div class="about-card ${this._cardClass(3)} ${this.isCardDragging?"dragging":""}">
          <h2>🔒 Privacy Policy</h2>
          <div class="tp-section-header">📧 Privacy Contact</div>
          <div style="background: rgba(30,41,59,0.5); border: 1px solid rgba(148,163,184,0.1); border-radius: 8px; padding: 16px; margin-top: 12px;">
            <p style="margin: 0;">For any questions regarding this privacy policy or to exercise your privacy rights,
               please contact Comet Game Studio Ltd at the support channels provided within the Software
               or at: <a href="https://www.cometgamestudio.com">cometgamestudio.com</a></p>
          </div>
        </div>

        ${this._renderCarouselDots(4)}
      </div>
    `}_renderEULACarousel(){return c`
      <div class="about-content-carousel">
        <div class="about-card ${this._cardClass(0)} ${this.isCardDragging?"dragging":""}">
          <h2>📜 End-User Licence Agreement</h2>
          <div class="legal-effective-date">Effective Date: March 24, 2026</div>
          <div class="legal-section">
            <p>This Agreement is between you ("User") and Comet Game Studio Ltd ("Licensor") for the
               Orus AI System software ("Software"). By installing or using the Software you agree to these terms.</p>
          </div>
          <div class="legal-section">
            <h3>1. Grant of Licence</h3>
            <p>Subject to a valid subscription, the Licensor grants you a limited, non-exclusive,
               non-transferable, revocable licence to install and use the Software on a single host device
               identified by its hardware fingerprint (HWID). The licence is personal and may not be shared,
               sublicensed, or transferred without prior written consent. The licensed host may permit
               browser-based client access from devices on the same local network.</p>
          </div>
        </div>

        <div class="about-card ${this._cardClass(1)} ${this.isCardDragging?"dragging":""}">
          <h2>📜 EULA — Subscription Tiers</h2>
          <div class="legal-section">
            <h3>2. Subscription Tiers &amp; Add-On Packs</h3>
            <p>Access is provided through tiered subscriptions. The Licensor may modify tier features,
               pricing, and availability at any time with reasonable notice. Current tiers:</p>
            <ul>
              <li><strong>3-Day Access Pass:</strong> Full Pro-tier access for 72 hours</li>
              <li><strong>Starter (8–12 GB VRAM):</strong> TTS, STT, Memory RAG, Living Menu, Text Chat, Music Manager</li>
              <li><strong>Pro (12–16 GB VRAM):</strong> All Starter + Vision, LoRA, Face Capture, ISV, BrainStorm, Presenter, Canvas, Webber, TaskChat, Discord, Meeting Mode</li>
              <li><strong>Enterprise (16–24 GB VRAM):</strong> All Pro + SF3D, Boltzmann Brain, Game Engine, Live Vision, Defrag 3D, all models</li>
            </ul>
            <p>Periods include: Monthly, Quarterly, Semi-Annual, Annual, and Lifetime. Annual discounts available.
               Consumable add-on packs (e.g. ISV Credit Pack) are managed by the Microsoft Store and tied
               to your Microsoft account — not hardware-bound.</p>
          </div>
        </div>

        <div class="about-card ${this._cardClass(2)}">
          <h2>📜 EULA — Device Model &amp; Restrictions</h2>
          <div class="legal-section">
            <h3>3. Host-Device Licence Model</h3>
            <p>Your licence is bound to the host device via a SHA-256 hash of motherboard UUID and CPU ID.
               If hardware changes alter the HWID, contact the Licensor to transfer your licence.</p>
          </div>
          <div class="legal-section">
            <h3>4. Restrictions</h3>
            <p>You may not: reverse engineer or decompile the Software; redistribute or sublicense it;
               remove proprietary notices; use it unlawfully; circumvent hardware-binding or authentication;
               misuse AI outputs in violation of law or third-party rights; or host it as a public internet
               service unless expressly permitted in a later version of these terms.</p>
          </div>
          <div class="legal-section">
            <h3>5. AI-Generated Content</h3>
            <p>The Software uses AI models to generate text, speech, visual effects, and other content.
               The Licensor does not guarantee accuracy or appropriateness of AI-generated content.
               The User is solely responsible for reviewing and verifying any content before production use.</p>
          </div>
          <div class="legal-section">
            <h3>6. Data and Privacy</h3>
            <p>User data is stored locally on the host device. The Software does not transmit personal data
               to external servers unless the User explicitly enables integrations. See the Privacy Policy tab for full details.</p>
          </div>
        </div>

        <div class="about-card ${this._cardClass(3)}">
          <h2>📜 EULA — Termination &amp; Legal</h2>
          <div class="legal-section">
            <h3>7. Termination</h3>
            <p>This Agreement is effective until terminated. The Licensor may terminate immediately upon
               breach. A 3-day grace period is provided after subscription expiration before feature access is revoked.</p>
          </div>
          <div class="legal-section">
            <h3>8. Disclaimer of Warranties</h3>
            <p>THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. THE LICENSOR DOES NOT WARRANT
               THAT THE SOFTWARE WILL BE ERROR-FREE OR UNINTERRUPTED.</p>
          </div>
          <div class="legal-section">
            <h3>9. Limitation of Liability</h3>
            <p>THE LICENSOR'S TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID IN THE TWELVE (12) MONTHS
               PRECEDING THE CLAIM. No liability for indirect, incidental, or consequential damages.</p>
          </div>
          <div class="legal-section">
            <h3>10. Governing Law</h3>
            <p>Governed by the laws of England and Wales. Disputes subject to the exclusive jurisdiction
               of the courts of England and Wales.</p>
          </div>
          <div class="legal-section">
            <h3>11. Contact</h3>
            <p>For questions contact Comet Game Studio Ltd via support channels in the Software or at
               <a href="https://www.cometgamestudio.com">cometgamestudio.com</a>.</p>
          </div>
        </div>

        ${this._renderCarouselDots(4)}
      </div>
    `}_renderThirdPartyCarousel(){return c`
      <div class="about-content-carousel">
        <div class="about-card ${this._cardClass(0)} ${this.isCardDragging?"dragging":""}">
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
          <div class="tp-section-header" style="margin-top: 12px;">🖥️ Backend (npm)</div>
          <table class="tp-table"><thead><tr><th>Package</th><th>License</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td>express</td><td><span class="tp-license-badge mit">MIT</span></td><td>Web framework</td></tr>
              <tr><td>axios / cors / form-data</td><td><span class="tp-license-badge mit">MIT</span></td><td>HTTP · CORS · Forms</td></tr>
              <tr><td>multer</td><td><span class="tp-license-badge mit">MIT</span></td><td>File upload parsing</td></tr>
              <tr><td>ws</td><td><span class="tp-license-badge mit">MIT</span></td><td>WebSocket streaming</td></tr>
              <tr><td>xlsx</td><td><span class="tp-license-badge apache">Apache-2.0</span></td><td>Spreadsheet parsing</td></tr>
            </tbody>
          </table>
        </div>

        <div class="about-card ${this._cardClass(1)}">
          <h2>📦 Third Party — Python (pip)</h2>
          <table class="tp-table"><thead><tr><th>Package</th><th>License</th><th>Description</th></tr></thead>
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

        <div class="about-card ${this._cardClass(2)}">
          <h2>📦 Third Party — Models &amp; Media</h2>
          <div class="tp-section-header">🔧 Build Tools</div>
          <table class="tp-table"><thead><tr><th>Package</th><th>License</th></tr></thead>
            <tbody>
              <tr><td>vite / esbuild / typescript</td><td><span class="tp-license-badge mit">MIT/Apache</span></td></tr>
              <tr><td>@vitejs/plugin-react / eslint</td><td><span class="tp-license-badge mit">MIT</span></td></tr>
              <tr><td>pyinstaller</td><td><span class="tp-license-badge other">GPLv2+Exception</span></td></tr>
            </tbody>
          </table>
          <div class="tp-section-header" style="margin-top:10px;">🤖 AI Models</div>
          <table class="tp-table"><thead><tr><th>Model</th><th>License</th></tr></thead>
            <tbody>
              <tr><td>Microsoft Phi-4 Multimodal</td><td><span class="tp-license-badge mit">MIT</span></td></tr>
              <tr><td>OpenAI Whisper Large v3 Turbo</td><td><span class="tp-license-badge mit">MIT</span></td></tr>
              <tr><td>Orpheus TTS (GGUF)</td><td><span class="tp-license-badge apache">Apache-2.0</span></td></tr>
              <tr><td>Soprano TTS (ONNX)</td><td><span class="tp-license-badge apache">Apache-2.0</span></td></tr>
              <tr><td>Stability AI SF3D</td><td><span class="tp-license-badge other">Community</span></td></tr>
              <tr><td>MediaPipe (Google)</td><td><span class="tp-license-badge apache">Apache-2.0</span></td></tr>
              <tr><td>SpeechBrain ECAPA-TDNN</td><td><span class="tp-license-badge apache">Apache-2.0</span></td></tr>
              <tr><td>SNAC 24kHz Codec</td><td><span class="tp-license-badge mit">MIT</span></td></tr>
              <tr><td>BGE-small-en-v1.5 (Safety)</td><td><span class="tp-license-badge mit">MIT</span></td></tr>
              <tr><td>NVIDIA CUDA / cuDNN / TensorRT</td><td><span class="tp-license-badge other">Proprietary</span></td></tr>
            </tbody>
          </table>
          <div class="tp-section-header" style="margin-top:10px;">🎵 Licensed Media</div>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">SoundMorph — UI Sound Effects</div>
            <p>Certain UI audio feedback sounds are sourced from SoundMorph under the SoundMorph MEDIA LICENSE
               (Commercial). Used solely as functional audio effects within Orus — not distributed as standalone
               assets nor used for AI training. The MEDIA LICENSE expressly prohibits use of licensed sounds for
               generating or training AI/ML systems.</p>
          </div>
        </div>

        <div class="about-card ${this._cardClass(3)}">
          <h2>📦 Third Party — Legal Attributions</h2>
          <p style="font-size: 11.5px; color: #94a3b8; margin-bottom: 12px;">Required by Apache-2.0 §4.4, BSD-3 §1, and MIT license terms.</p>
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

        ${this._renderCarouselDots(4)}
      </div>
    `}_renderSafetyCarousel(){return c`
      <div class="about-content-carousel">
        <div class="about-card ${this._cardClass(0)} ${this.isCardDragging?"dragging":""}">
          <h2>🛡️ Safety &amp; Content Governance</h2>
          <p style="font-size: 11px; color: #64748b; margin-bottom: 12px;">Last Updated: March 24, 2026 · UK Online Safety Act 2023 Compliance</p>
          <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border: 1px solid rgba(56,189,248,0.3); border-radius: 10px; padding: 16px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 700; color: #e2e8f0; margin-bottom: 6px;">🛡️ Online Safety Act 2023 Compliance</div>
            <p style="font-size: 12px; color: #cbd5e1; line-height: 1.6; margin: 0;">Orus implements on-device safety measures aligned with the UK Online Safety Act 2023. Content safety
               checks run on-device before queries reach the AI model — no queries are transmitted to external moderation services.</p>
          </div>
          <div class="tp-section-header">🔀 Answer Router — Deterministic Safety Layer</div>
          <div class="disclaimer-card">
            <p>The <strong>Answer Router</strong> intercepts user queries against a curated table of safety-critical phrases
               using semantic embedding similarity (cosine similarity, threshold 0.55). On a match, a predetermined safe
               response is returned <em>without invoking the generative AI model</em> — preventing jailbreak and prompt injection vulnerabilities.</p>
            <p style="margin-top: 8px; font-size: 12px; color: #94a3b8;">Your input → local semantic check → safe route or proceed. No centralised logging of safety checks.</p>
          </div>
        </div>

        <div class="about-card ${this._cardClass(1)}">
          <h2>🛡️ Priority Illegal Content Categories</h2>
          <p style="font-size: 12px; color: #94a3b8; margin-bottom: 10px;">Categories aligned with OSA 2023 Schedule 7 and Ofcom's 17 priority illegal content groupings.</p>
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
          <p style="font-size: 11px; color: #64748b; margin-top: 10px;">Age-aware routing provides differentiated responses for children, teens, and adults where appropriate.</p>
        </div>

        <div class="about-card ${this._cardClass(2)}">
          <h2>🛡️ Local Safety &amp; Crisis Support</h2>
          <div class="tp-section-header">🏠 Local-First Safety Architecture</div>
          <div class="disclaimer-card">
            <p>All safety checks execute locally. No queries are sent to external content moderation APIs.</p>
            <div style="display: flex; flex-direction: column; gap: 5px; font-size: 12px; margin-top: 8px; color: #94a3b8;">
              <div>• <strong>On-device safety model</strong> — lightweight LM runs locally, no cloud dependency</div>
              <div>• <strong>Smart semantic matching</strong> — catches paraphrases, not just keywords</div>
              <div>• <strong>No centralised logging</strong> — safety checks not reported externally</div>
            </div>
          </div>
          <div class="tp-section-header">📞 Crisis Support Signposting</div>
          <div class="disclaimer-card">
            <p>When the Answer Router detects crisis-related queries, it returns compassionate refusals with direct signposting:</p>
            <div style="display: flex; flex-direction: column; gap: 7px; font-size: 12px; margin-top: 8px;">
              <div>📞 <strong>Samaritans</strong> — Call 116 123 (free, 24/7)</div>
              <div>💬 <strong>SHOUT</strong> — Text "SHOUT" to 85258</div>
              <div>👦 <strong>Childline</strong> — Call 0800 1111 (under 18)</div>
              <div>🆘 <strong>HOPELINE247</strong> — Call 0800 068 4141</div>
              <div>🤝 <strong>Victim Support</strong> — Call 08 08 16 89 111</div>
            </div>
          </div>
        </div>

        <div class="about-card ${this._cardClass(3)}">
          <h2>🛡️ Limitations &amp; Regulatory Alignment</h2>
          <div class="tp-section-header">⚠️ Honest Limitations</div>
          <div class="disclaimer-card">
            <div style="display: flex; flex-direction: column; gap: 5px; font-size: 12px; color: #94a3b8;">
              <div>• The Answer Router uses <strong>semantic similarity</strong> matching — it catches paraphrases but cannot intercept every adversarial prompt.</div>
              <div>• Phi-4 has its own safety training; the Answer Router adds a <em>deterministic</em> layer independent of model behaviour.</div>
              <div>• Coverage is based on the 17 OSA priority offence categories. Novel harms may not be intercepted at router level.</div>
              <div>• Age-aware routing depends on the user's configured age setting — Orus does not perform independent age verification.</div>
            </div>
          </div>
          <div class="tp-section-header">👤 User Responsibilities</div>
          <div class="disclaimer-card">
            <p>Users must obtain consent for all recordings. <strong>Do not use Orus to impersonate real people, public figures, or organisations.</strong> Generating content that falsely represents another person is prohibited and may violate applicable law.</p>
          </div>
          <div class="tp-section-header">📜 Regulatory Alignment</div>
          <div style="background: rgba(30,41,59,0.4); border: 1px solid rgba(148,163,184,0.1); border-radius: 8px; padding: 12px; font-size: 12px;">
            <div>• <strong>Online Safety Act 2023</strong> — §§9, 11, 12 (duty of care)</div>
            <div>• <strong>Schedule 7</strong> — 17 priority offence categories implemented</div>
            <div>• <strong>Ofcom Codes of Practice</strong> — proportionate content safety measures</div>
            <div>• <strong>Fraud Act 2006 / Terrorism Acts / Suicide Act 1961</strong></div>
            <div>• <strong>National Security Act 2023</strong> — foreign interference prevention</div>
          </div>
        </div>

        ${this._renderCarouselDots(4)}
      </div>
    `}_renderDisclaimersCarousel(){return c`
      <div class="about-content-carousel">
        <div class="about-card ${this._cardClass(0)} ${this.isCardDragging?"dragging":""}">
          <h2>⚠️ Disclaimers</h2>
          <p style="font-size: 12px; color: #94a3b8; margin-bottom: 12px;">Orus is a local-first AI assistant. AI outputs may be inaccurate. Users remain responsible for verifying important outputs, obtaining consent, and securing the host device.</p>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">🤖 AI-Generated Content</div>
            <p>Orus uses Phi-4, Whisper, and Orpheus TTS to generate text, speech, visual effects, 3D assets, and video.
               AI outputs may be inaccurate, contain hallucinations, biases, or inappropriate content.
               Users remain responsible for reviewing all AI-generated content before professional, commercial, legal, medical, or public use.</p>
          </div>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">🔒 Privacy &amp; Data Storage</div>
            <p>User data — including conversations, memories, documents, and voice recordings — is stored locally.
               Microsoft Store and Windows platform services have their own telemetry policies. The User is responsible
               for complying with applicable privacy laws (GDPR, CCPA, etc.) in their jurisdiction.</p>
          </div>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">🎤 Voice &amp; Audio Processing</div>
            <p>Audio is processed locally via Whisper. In Meeting Mode, Orus may process system audio via loopback.
               Users must obtain appropriate consent before recording or processing audio from other participants.</p>
          </div>
        </div>

        <div class="about-card ${this._cardClass(1)}">
          <h2>⚠️ Disclaimers</h2>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">📹 Webcam &amp; Face Capture</div>
            <p>Face detection uses MediaPipe (Apache 2.0) — no facial data is transmitted externally.
               Face mesh data is used solely for real-time 3D visualisation and is not stored unless the user explicitly saves a session state.</p>
          </div>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">⚡ GPU &amp; Hardware Usage</div>
            <p>Orus performs GPU-intensive operations. Extended use may increase GPU temperature and power consumption.
               Comet Game Studio Ltd is not liable for hardware damage resulting from use of the Software.</p>
          </div>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">🌐 Network &amp; Access</div>
            <p>No remote access is enabled by default. The User is solely responsible for securing the host device
               and local network, managing access credentials, and understanding security implications of any network exposure.</p>
          </div>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">📊 Memory &amp; RAG System</div>
            <p>The memory system stores conversation summaries in local JSON and SQLite files. The system may occasionally
               retrieve incorrect or outdated information. Users should periodically review stored memories for accuracy.</p>
          </div>
        </div>

        <div class="about-card ${this._cardClass(2)}">
          <h2>⚠️ Disclaimers</h2>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">📄 Document Processing</div>
            <p>Documents (PDF, DOCX, Excel, images) are processed using pdfplumber, python-docx, openpyxl, and Tesseract OCR.
               OCR accuracy varies by document quality. Verify extracted content before critical decisions. All processing is local.</p>
          </div>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">🏪 Microsoft Store &amp; Licensing</div>
            <p>Licence validation requires periodic connectivity to Microsoft Store services. A 3-day offline grace period applies.
               Hardware ID changes (e.g., motherboard replacement) may require licence transfer via customer support.</p>
          </div>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">🔬 Experimental Features</div>
            <p>SF3D, Boltzmann Brain, and Game Engine are experimental and may be unstable or change significantly between versions.
               Provided on an "as-is" basis without warranty.</p>
          </div>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">🗣️ Text-to-Speech Limitations</div>
            <p>TTS may malfunction with special characters, malformed text, or unusually long sequences.
               If voice output is stuck or looping, click Stop or refresh your browser.</p>
          </div>
        </div>

        <div class="about-card ${this._cardClass(3)}">
          <h2>⚠️ Disclaimers</h2>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">⚠️ AI Accuracy &amp; Knowledge Limitations</div>
            <p>Phi-4 Multimodal (14B) can and does make mistakes. Always double-check important outputs before relying on them in professional, legal, medical, or business contexts.</p>
          </div>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">📅 Phi-4 Knowledge Cutoff</div>
            <p>Training data cutoff: approximately <strong>October–November 2024</strong>. Responses about current affairs, recent software releases, or recent regulatory changes may be outdated. Use the Webber research agent to introduce more recent context.</p>
          </div>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">🔧 Feature Availability</div>
            <p>Features may be enabled, disabled, or modified due to development needs, legal obligations, business decisions, or security considerations. Significant changes will be communicated via release notes where practical.</p>
          </div>
          <div class="disclaimer-card">
            <div class="disclaimer-card-title">🏷️ Content Rating &amp; Accessibility</div>
            <p>Designed for general audiences with an Answer Router safety layer. Parental discretion advised for AI probabilistic outputs.
               Orus supports keyboard navigation and system-level accessibility settings. 3D and voice-first modes may present challenges for some users. Accessibility feedback is welcome.</p>
          </div>
          <p style="color: #64748b; font-size: 11px; margin-top: 16px; text-align: center;">
            Last updated: March 24, 2026 · Continued use constitutes acceptance of updates.
          </p>
        </div>

        ${this._renderCarouselDots(4)}
      </div>
    `}_renderEULA(){return c`
      <h2>End-User Licence Agreement</h2>
      <div class="legal-effective-date">Effective Date: March 24, 2026</div>

      <div class="legal-section">
        <p>
          This End-User Licence Agreement ("Agreement") is a legal agreement between you ("User") and
          Comet Game Studio Ltd ("Licensor") for the use of the Orus AI System software ("Software").
          By installing, copying, or otherwise using the Software, you agree to be bound by the terms of this Agreement.
        </p>
      </div>

      <div class="legal-section">
        <h3>1. Grant of Licence</h3>
        <p>
          Subject to the terms of this Agreement and your valid subscription, the Licensor grants you a limited,
          non-exclusive, non-transferable, revocable licence to install and use the Software on a single host
          device identified by its hardware fingerprint (HWID). The licence is personal and may not be shared,
          sublicensed, or transferred to another party or device without prior written consent from the Licensor.
        </p>
        <p>
          The licensed host device may permit browser-based client access from other devices on the same local
          network or authorised environment. No remote internet access is included unless expressly stated in
          a later version of these terms.
        </p>
      </div>

      <div class="legal-section">
        <h3>2. Subscription Tiers &amp; Add-On Packs</h3>
        <p>
          Access to the Software is provided through tiered subscriptions. Available tiers and their features
          are described at the time of purchase. The Licensor reserves the right to modify tier features,
          pricing, and availability at any time with reasonable notice. The following tiers are currently offered:
        </p>
        <ul>
          <li><strong>3-Day Access Pass:</strong> Full Pro-tier access for 72 hours</li>
          <li><strong>Starter (8–12 GB VRAM):</strong> TTS, STT, Memory RAG, Living Menu, Text Chat, Music Manager</li>
          <li><strong>Pro (12–16 GB VRAM):</strong> All Starter features + Vision, LoRA, Training Lab, Face Capture, ISV, BrainStorm, Presenter, Canvas, Webber, TaskChat, Discord, Meeting Mode</li>
          <li><strong>Enterprise (16–24 GB VRAM):</strong> All Pro features + SF3D, Boltzmann Brain, Game Engine, Live Vision, Defrag 3D, all models</li>
        </ul>
        <p>
          Current pricing for each tier is displayed in the Microsoft Store at the time of purchase.
          Annual subscription discounts are available. Periods include: Monthly, Quarterly, Semi-Annual, Annual, and Lifetime.
        </p>
        <p>
          The following consumable add-on packs are available for individual purchase via the Microsoft Store.
          These are credit-based consumables that unlock specific features:
        </p>
        <ul>
          <li><strong>ISV Credit Pack:</strong> Unlocks Iterative Self-Visualisation credits — AI-driven visual command generation from screenshots and Living Machine state saving (Product ID: orus.isv)</li>
        </ul>
        <p>
          Consumable add-ons are managed by the Microsoft Store and tied to your Microsoft account. They are not hardware-bound.
        </p>
        <p>
          Subscription controls orchestration and service access, not the existence of the local AI stack.
          The AI models and software remain on the host device regardless of subscription status.
        </p>
      </div>

      <div class="legal-section">
        <h3>3. Host-Device Licence Model</h3>
        <p>
          Your licence is bound to the specific host device on which it is activated, using a SHA-256
          hash of motherboard UUID and CPU processor ID. The licensed host runs the Orus service,
          and devices on the same local network may connect as browser clients. If you replace hardware
          components that alter the HWID, you must contact the Licensor to transfer your licence.
        </p>
      </div>

      <div class="legal-section">
        <h3>4. Restrictions</h3>
        <p>You may not:</p>
        <ol>
          <li>Reverse engineer, decompile, or disassemble the Software, except where applicable law explicitly permits such activity.</li>
          <li>Redistribute, sublicense, lease, or rent the Software to third parties.</li>
          <li>Remove, alter, or obscure any proprietary notices, labels, or marks on the Software.</li>
          <li>Use the Software for any unlawful purpose, or in violation of any applicable laws or regulations.</li>
          <li>Circumvent or attempt to circumvent the hardware-binding, licensing, or authentication mechanisms.</li>
          <li>Use outputs generated by the Software (including AI-generated text, audio, video, or 3D assets) in a manner that violates applicable law or the rights of any third party.</li>
          <li>Host the Software as a remote service accessible over the public internet unless expressly stated in a later version of these terms.</li>
        </ol>
      </div>

      <div class="legal-section">
        <h3>5. AI-Generated Content</h3>
        <p>
          The Software utilises artificial intelligence models to generate text, speech, visual effects,
          and other content. The Licensor does not guarantee the accuracy, completeness, or appropriateness
          of AI-generated content. The User is solely responsible for reviewing and verifying any content
          generated by the Software before use in any production, commercial, or public context.
        </p>
      </div>

      <div class="legal-section">
        <h3>6. Data and Privacy</h3>
        <p>
          User data, including conversation history, memory files, submitted documents, and voice recordings,
          is stored locally on the host device. The Software does not transmit personal data to external
          servers unless the User explicitly enables integrations. Microsoft Store and Windows platform
          services may collect their own telemetry under their own terms. The Licensor respects user privacy
          and processes data in accordance with applicable data protection laws. See the Privacy Policy tab
          for full details.
        </p>
      </div>

      <div class="legal-section">
        <h3>7. Termination</h3>
        <p>
          This Agreement is effective until terminated. The Licensor may terminate this Agreement immediately
          if you breach any of its terms. Upon termination, you must cease all use of the Software and destroy
          all copies. A 3-day grace period is provided after subscription expiration before feature access is revoked.
        </p>
      </div>

      <div class="legal-section">
        <h3>8. Disclaimer of Warranties</h3>
        <p>
          THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
          LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT.
          THE LICENSOR DOES NOT WARRANT THAT THE SOFTWARE WILL BE ERROR-FREE OR UNINTERRUPTED.
        </p>
      </div>

      <div class="legal-section">
        <h3>9. Limitation of Liability</h3>
        <p>
          IN NO EVENT SHALL THE LICENSOR BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
          OR PUNITIVE DAMAGES ARISING OUT OF OR IN CONNECTION WITH THE USE OF THE SOFTWARE, REGARDLESS
          OF THE CAUSE OF ACTION OR THE THEORY OF LIABILITY, EVEN IF THE LICENSOR HAS BEEN ADVISED
          OF THE POSSIBILITY OF SUCH DAMAGES. THE LICENSOR'S TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT
          PAID BY THE USER FOR THE SOFTWARE IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
        </p>
      </div>

      <div class="legal-section">
        <h3>10. Governing Law</h3>
        <p>
          This Agreement shall be governed by and construed in accordance with the laws of England and Wales,
          without regard to its conflict of law provisions. Any disputes arising under this Agreement shall
          be subject to the exclusive jurisdiction of the courts of England and Wales.
        </p>
      </div>

      <div class="legal-section">
        <h3>11. Contact</h3>
        <p>
          For questions regarding this Agreement, contact Comet Game Studio Ltd at the support channels
          provided within the Software or at the Licensor's official website.
        </p>
      </div>
    `}_renderThirdParty(){return c`
      <h2>Third Party Notices</h2>
      <p>
        Orus incorporates third-party open source software components. The following is a summary
        of those components and their respective licenses. Full license texts are available in each package's
        repository or distribution.
      </p>

      <!-- Frontend (npm) Dependencies -->
      <div class="tp-section-header">🌐 Frontend Dependencies (npm)</div>
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
      <div class="tp-section-header">🖥️ Backend Dependencies (npm)</div>
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
      <div class="tp-section-header">🐍 Python Dependencies (pip — verified via pip-licenses)</div>
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
      <div class="tp-section-header">🔧 Build &amp; Development Tools</div>
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
      <div class="tp-section-header">🤖 AI Models &amp; Weights</div>
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
      <div class="tp-section-header">�️ Previously Replaced Dependencies</div>
      <p style="color: #94a3b8; font-size: 12px; margin-bottom: 8px;">The following packages were replaced with better alternatives during development:</p>
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
        Dependency information last verified March 2026.
      </p>

      <!-- ================================================================= -->
      <!-- LEGAL ATTRIBUTIONS — Required by Apache-2.0 §4.4, BSD-3, MIT     -->
      <!-- ================================================================= -->
      <div class="tp-section-header">📜 Legally Required Attributions &amp; NOTICE Texts</div>
      <p style="color: #94a3b8; font-size: 11.5px; line-height: 1.6; margin-bottom: 16px;">
        The following copyright notices, NOTICE file contents, and attribution statements are
        reproduced here as required by Apache License 2.0 §4.4 (NOTICE file reproduction),
        BSD 3-Clause §1 (copyright retention), and MIT License (copyright + permission notice).
        This section constitutes the Third Party Notices for the Orus distribution.
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
        <div class="disclaimer-card-title">NVIDIA Nemotron OCR</div>
        <p style="font-size: 11px; color: #a5b4fc;">NVIDIA Open Model License</p>
        <p>Copyright (c) NVIDIA Corporation. Licensed by NVIDIA Corporation under the
        NVIDIA Open Model License. Commercial use permitted with attribution.
        <a href="https://build.nvidia.com/nvidia/ocr" style="color: #818cf8;">build.nvidia.com/nvidia/ocr</a></p>
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
        <div class="disclaimer-card-title">BGE-small-en-v1.5 (Safety Embeddings)</div>
        <p style="font-size: 11px; color: #a5b4fc;">MIT</p>
        <p>Copyright (c) BAAI (Beijing Academy of Artificial Intelligence).<br/>
        Model: BAAI/bge-small-en-v1.5 (ONNX). Used for Answer Router semantic safety matching.
        <a href="https://huggingface.co/BAAI/bge-small-en-v1.5" style="color: #818cf8;">huggingface.co/BAAI/bge-small-en-v1.5</a></p>
      </div>

      <!-- Licensed Media Assets -->
      <div class="tp-section-header">🎵 Licensed Media Assets</div>
      <div class="disclaimer-card">
        <div class="disclaimer-card-title">SoundMorph — UI Sound Effects</div>
        <p style="font-size: 11px; color: #a5b4fc;">SoundMorph MEDIA LICENSE (Commercial)</p>
        <p>
          Certain UI audio feedback sounds (interaction cues, confirmation tones, notification sounds)
          used in Orus are sourced from <strong>SoundMorph</strong> sound libraries and licensed under
          the <strong>SoundMorph MEDIA LICENSE</strong>. These sounds are used solely as functional
          audio effects within the Orus interface — they are not distributed as standalone assets,
          embedded in an audio library, nor used in any form as training data for AI or machine
          learning systems.
        </p>
        <p>
          The MEDIA LICENSE grants worldwide, unlimited-time rights covering mechanical reproduction,
          synchronization, and public performance/broadcast as part of the Orus product. No source
          attribution to SoundMorph is contractually required for commercial use under this license;
          however, we acknowledge SoundMorph's contribution here for transparency.
        </p>
        <p style="font-size: 11px; color: #64748b;">
          <strong>Important:</strong> The SoundMorph MEDIA LICENSE expressly prohibits use of the
          licensed sounds — in whole or in part — as a basis for creating or training AI models,
          machine learning algorithms, or any computational systems designed to generate sound or
          music. Orus users may not extract or repurpose these sounds for AI training purposes.
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
        Attributions last verified: March 2026.<br/>
        This section satisfies Apache-2.0 &sect;4.4, BSD-3-Clause &sect;1, and MIT license attribution requirements.
      </p>
    `}_renderSafety(){return c`
      <h2>Safety &amp; Content Governance</h2>
      <p style="font-size: 11px; color: #64748b; margin-bottom: 20px;">
        Last Updated: March 24, 2026
      </p>

      <!-- OSA Banner -->
      <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
          <span style="font-size: 24px;">🛡️</span>
          <div>
            <div style="font-size: 16px; font-weight: 700; color: #e2e8f0;">Online Safety Act 2023 Compliance</div>
            <div style="font-size: 12px; color: #94a3b8;">UK Regulatory Framework — Orus Safety Architecture</div>
          </div>
        </div>
        <p style="font-size: 12px; color: #cbd5e1; line-height: 1.7; margin: 0;">
          Orus implements safety measures aligned with the UK Online Safety Act 2023. As a local-first AI assistant,
          Orus applies content safety checks on-device before queries reach the AI model. This architecture
          enables content safety without transmitting user queries to external moderation services.
        </p>
      </div>

      <!-- Answer Router -->
      <div class="tp-section-header">🔀 Answer Router — Deterministic Safety Layer</div>
      <div class="disclaimer-card">
        <p>
          The <strong>Answer Router</strong> is a pre-generation interception layer that compares user queries
          against a curated table of safety-critical phrases using semantic embedding similarity (cosine similarity,
          threshold 0.55). When a query matches a safety entry, the system returns a predetermined response
          <em>without</em> invoking the generative AI model. This prevents potential jailbreak or prompt injection
          vulnerabilities that can affect purely generative safety systems.
        </p>
        <p style="margin-top: 8px; font-size: 12px; color: #94a3b8;">
          <strong>How it works:</strong> Your input is checked against a library of known harmful phrases
          using intelligent matching. If a match is found, a safe predetermined response is returned
          instantly — the AI model is never involved.
        </p>
      </div>

      <!-- Coverage -->
      <div class="tp-section-header">📋 Priority Illegal Content Categories Covered</div>
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
          Categories aligned with OSA 2023 Schedule 7 and Ofcom's 17 priority illegal content groupings.
          Age-aware routing provides differentiated responses for children, teens, and adults where appropriate.
        </p>
      </div>

      <!-- Local-First Safety -->
      <div class="tp-section-header">🏠 Local-First Safety Architecture</div>
      <div class="disclaimer-card">
        <p>
          All safety checks execute locally on the host device. No queries or content are sent to external
          content moderation APIs. Voice, webcam, and local document processing are local unless a specific
          feature says otherwise. No remote access is enabled by default.
        </p>
        <div style="display: flex; flex-direction: column; gap: 6px; font-size: 12px; margin-top: 10px; color: #94a3b8;">
          <div>• <strong>On-device safety model</strong> — lightweight language model runs locally with no cloud dependency</div>
          <div>• <strong>Smart matching</strong> — your input is compared against curated safety phrases</div>
          <div>• <strong>Fully local processing</strong> — input → local check → safe route or proceed</div>
          <div>• <strong>No centralised logging</strong> — safety checks are not reported to external servers</div>
        </div>
      </div>

      <!-- Crisis Signposting -->
      <div class="tp-section-header">📞 Crisis Support Signposting</div>
      <div class="disclaimer-card">
        <p>
          When the Answer Router detects queries related to suicide, self-harm, or personal crisis,
          it returns compassionate refusals with direct signposting to UK support services:
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
      <div class="tp-section-header">⚠️ Honest Limitations</div>
      <div class="disclaimer-card">
        <p>
          AI outputs can be wrong and must be reviewed. Orus's safety measures are real and functional,
          but we are transparent about their scope:
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
      <div class="tp-section-header">👤 User Responsibilities</div>
      <div class="disclaimer-card">
        <p>
          Users are responsible for consent and lawful recording/processing. When using voice, webcam,
          or document processing features, users must ensure they have appropriate consent from all
          parties involved. Hardware stress and GPU load are user responsibilities.
        </p>
        <p>
          <strong>Do not use Orus to impersonate real people, public figures, or organisations.</strong>
          Generating speech, text, or visual content that falsely represents itself as originating from
          another person — including voice cloning, fake statements, or deepfake-style outputs — is
          prohibited under these terms and may violate applicable law. Orus will decline requests that
          it identifies as impersonation attempts.
        </p>
      </div>

      <!-- Regulatory -->
      <div class="tp-section-header">📜 Regulatory Alignment</div>
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
        Safety architecture last updated March 2026. For concerns about Orus safety measures,
        contact Comet Game Studio Ltd at: <a href="https://www.cometgamestudio.com" style="color: #818cf8;">cometgamestudio.com</a>
      </p>
    `}_renderDisclaimers(){return c`
      <h2>Disclaimers</h2>
      <p>
        Orus is a local-first personal assistant with memory and operational assistance features.
        AI outputs may be inaccurate. Users remain responsible for verifying important outputs,
        obtaining consent where required, and securing the host device and local network.
      </p>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">🤖 AI-Generated Content</div>
        <p>
          Orus uses artificial intelligence models (including Microsoft Phi-4, Whisper, and Orpheus TTS) to generate
          text, speech, visual effects, 3D assets, and video content. AI outputs may be inaccurate, contain
          hallucinations, biases, or inappropriate content. Users remain responsible for reviewing, verifying,
          and editing all AI-generated content before use in any professional, commercial, legal, medical, or public context.
          Comet Game Studio Ltd disclaims all liability for decisions made or actions taken based on AI-generated content.
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">🔒 Privacy &amp; Data Storage</div>
        <p>
          User data — including conversation history, memory files, submitted documents, voice recordings,
          and session states — is stored locally on the host device. Voice, webcam, and local document
          processing are local unless a specific feature says otherwise. Microsoft Store and Windows platform
          services may collect their own telemetry under their own terms. Orus itself is designed to
          minimise Orus-originated telemetry. The User is responsible for understanding which integrations
          are enabled and for complying with applicable privacy laws (GDPR, CCPA, etc.) in their jurisdiction.
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">🎤 Voice &amp; Audio Processing</div>
        <p>
          When voice mode is active, Orus captures audio from the user's microphone for speech-to-text processing.
          Audio is processed locally using the Whisper model. In Meeting Mode or per-app audio capture,
          Orus may process system audio output via loopback devices. Users are responsible for obtaining
          appropriate consent before recording or processing audio from other participants in conversations or meetings.
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">📹 Webcam &amp; Face Capture</div>
        <p>
          When webcam or face capture features are enabled, Orus accesses the user's camera feed.
          Face detection is performed locally using MediaPipe (Apache 2.0 licensed) — no facial data is
          transmitted externally. Face mesh data is used solely for real-time 3D visualisation effects
          and is not stored persistently unless the user explicitly saves a session state.
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">⚡ GPU &amp; Hardware Usage</div>
        <p>
          Orus performs GPU-intensive operations including LLM inference, 3D rendering, and audio processing.
          Extended use may increase GPU temperature and power consumption. Hardware stress and GPU load are
          user responsibilities. The software includes GPU memory budgeting to prevent out-of-memory errors,
          but the User should ensure adequate cooling and power supply for their hardware.
          Comet Game Studio Ltd is not liable for any hardware damage resulting from use of the Software.
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">🌐 Network &amp; Access</div>
        <p>
          Orus runs on a licensed host device. Devices on the same local network may connect as browser clients.
          No remote access is enabled by default. The User is solely responsible for securing the host device
          and local network, managing access credentials, and understanding the security implications of any
          network exposure.
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">📊 Memory &amp; RAG System</div>
        <p>
          The Orus memory system stores user-provided information and conversation summaries for retrieval
          in future sessions. This data is stored in local JSON and SQLite files. The memory system may
          occasionally retrieve incorrect or outdated information due to semantic similarity matching.
          Memory reconciliation and garbage collection features are provided to help maintain data quality.
          The User should periodically review stored memories for accuracy.
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">📄 Document Processing</div>
        <p>
          When processing documents (PDF, DOCX, Excel, images), Orus extracts text and data using third-party
          libraries (pdfplumber, python-docx, openpyxl, Tesseract OCR). Extraction accuracy depends on document
          quality and format. OCR results from scanned documents may contain errors. The User should verify
          extracted content before relying on it for critical decisions. Documents are processed locally.
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">🏪 Microsoft Store &amp; Licensing</div>
        <p>
          Orus integrates with the Microsoft Store for subscription management and entitlement validation.
          Licence validation requires periodic connectivity to Microsoft Store services. Offline usage is
          supported within the licence grace period (3 days after expiration). Hardware ID changes (e.g., motherboard
          replacement) may require licence transfer via customer support.
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">🔬 Experimental Features</div>
        <p>
          Certain features in Orus (including but not limited to: 3D Asset Generation
          via SF3D, Boltzmann Brain, and the Game Engine) are experimental and may be unstable, produce unexpected
          results, or change significantly between versions. These features are provided on an "as-is" basis
          without warranty.
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">🗣️ Text-to-Speech Limitations</div>
        <p>
          The text-to-speech system may malfunction if Orus attempts to speak special characters,
          malformed text, or unusually long sequences. In case of stuck or looping voice outputs,
          click the Stop button or refresh your browser to restore normal operation.
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">⚠️ AI Accuracy &amp; Knowledge Limitations</div>
        <p>
          The Orus AI system — powered by Microsoft's Phi-4 Multimodal (14B) — can and does make mistakes.
          Always double-check important outputs before relying on them in professional, legal, medical, or
          business contexts. Running inside a web browser means some features of Orus are restricted compared
          to a native desktop application. Browser security policies, memory limits, and tab lifecycle
          management may affect long-running sessions.
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">📅 Phi-4 Multimodal Knowledge Cutoff</div>
        <p>
          The AI model powering Orus is <strong>Microsoft Phi-4 Multimodal (14B)</strong>, whose training data
          has a knowledge cutoff of approximately <strong>October – November 2024</strong>. This means the model
          has no inherent awareness of events, publications, software releases, or developments that occurred
          after that date. Responses about current affairs, recent research, product versions, or recent legal
          and regulatory changes may be outdated or incorrect. Always supplement AI responses with up-to-date
          sources when currency of information is critical. The Orus memory system and Webber research agent
          can be used to introduce more recent context into sessions.
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">🔧 Feature Availability</div>
        <p>
          Features within Orus may be enabled, disabled, modified, or removed at any time subject to
          decisions arising from ongoing <strong>development</strong> (technical readiness, stability, or
          platform requirements), <strong>legal or regulatory obligations</strong> (compliance with applicable
          law, content standards, or licensing terms), <strong>business decisions</strong> (commercial
          positioning, partnership terms, or subscription tier restructuring), or <strong>security
          considerations</strong> (protection against identified vulnerabilities or abuse vectors).
          Comet Game Studio Ltd provides no guarantee that any specific feature will remain available
          in any given release. Where practical, significant feature changes will be communicated through
          release notes or in-app notices.
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">♿ Accessibility</div>
        <p>
          Orus aims to be accessible to users of all abilities. The interface supports keyboard navigation,
          screen reader compatibility for standard UI elements, and respects system-level accessibility settings
          (high contrast, reduced motion). However, 3D visualisation and voice-first interaction modes may
          present challenges for users with visual, auditory, or motor impairments. We welcome accessibility
          feedback and are committed to improving the experience in future releases.
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">🏷️ Content Rating</div>
        <p>
          Orus is designed for general audiences. The system includes an Answer Router safety layer
          that intercepts queries related to priority illegal content categories (per the UK Online Safety Act 2023)
          before they reach the AI model, providing deterministic refusals for harmful requests.
          Age-aware routing provides differentiated responses for children, teens, and adults.
          However, AI-generated outputs are inherently probabilistic and may occasionally produce
          content unsuitable for minors despite these safeguards. Parental discretion is advised.
          See the Safety tab for full details on implemented safety measures.
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">🔄 System Maturity &amp; Resilience</div>
        <p>
          Orus is an actively evolving system. As the global agentic AI infrastructure grows,
          constrained, self-restoring systems like Orus are expected to become more resilient
          and accurate over time. Current capabilities reflect the state of the art as of the
          release date and will be refined through ongoing updates.
        </p>
      </div>

      <p style="color: #64748b; font-size: 11px; margin-top: 20px; text-align: center;">
        Last updated: March 24, 2026<br/>
        These disclaimers are subject to change. Continued use of the Software constitutes acceptance of any updates.
      </p>
    `}_renderPrivacy(){return c`
      <h2>Privacy Policy</h2>
      <p style="font-size: 11px; color: #64748b; margin-bottom: 20px;">
        Last Updated: March 24, 2026
      </p>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">🏠 Local-First Architecture</div>
        <p>
          Orus is designed with a local-first privacy philosophy. Core AI models — including
          Phi-4 (reasoning), Whisper (speech-to-text), Orpheus (text-to-speech), and vision models —
          run on the licensed host device. No collaborative cloud processing is used for inference.
          Your prompts, voice input, and generated content are processed locally wherever possible.
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">📁 File Submissions and Staging</div>
        <p>
          Users may submit files through Orus's in-app interface. Depending on platform and
          deployment mode, files may be staged locally in Windows app data or MSIX-managed
          storage before encrypted transmission to Orus services. Submitted files are processed
          on the host device.
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">🛡️ Local Data Artifacts</div>
        <p>
          Orus may create and store local artifacts on the host device, including conversation history,
          session states, memory vectors and RAG data, operational logs, TTS cache files, voice profiles,
          and document processing outputs. You own your data. You are responsible for backing up your own data.
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">📊 Platform Telemetry Separation</div>
        <p>
          Orus's own data handling is separate from Microsoft Store and Windows platform telemetry.
          Microsoft Store and Windows platform services may collect telemetry or diagnostic data
          under their own terms and policies. Orus itself is designed to minimise Orus-originated telemetry.
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">🖥️ Screen &amp; Audio Data</div>
        <p>
          Live Vision (screen capture) and audio listening (microphone) features operate over a
          strictly local loopback connection (localhost). Audio is transcribed by local instances
          of Whisper. Screen pixels are analysed by local vision models. This high-bandwidth
          sensory data is processed locally and is not transmitted over the public internet.
        </p>
      </div>

      <div class="disclaimer-card">
        <div class="disclaimer-card-title">💳 Payments &amp; Subscriptions</div>
        <p>
          Comet Game Studio Ltd does not process or store any payment card information (PCI).
          All subscriptions and pass purchases are handled securely and exclusively by the
          <strong>Microsoft Store</strong> commerce platform. Orus solely queries the Microsoft
          Store API to validate the existence of an active licence token on the host device.
        </p>
      </div>

      <div class="tp-section-header">📧 Privacy Contact</div>
      <div style="background: rgba(30,41,59,0.5); border: 1px solid rgba(148,163,184,0.1); border-radius: 8px; padding: 16px;">
         <p style="margin: 0;">
           For any questions regarding this privacy policy or to exercise your privacy rights,
           please contact Comet Game Studio Ltd at the support channels provided within the Software
           or at: <a href="https://www.cometgamestudio.com">cometgamestudio.com</a>
         </p>
      </div>
    `}};b.styles=le`
    :host {
      display: block;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      /* Layout spacing variables — prevent header overlap */
      --about-header-height: 52px;
      --about-mobile-nav-height: 48px;
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
      /* Content starts below fixed header in full-page mode */
      margin-top: 0;
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
    }

    /* ── Carousel Gallery Container ─────────────────────────────── */
    .about-content-carousel {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
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
      bottom: 16px;
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
        width: 100vw !important;
        height: 100vh !important;
        height: 100dvh !important;
        border-radius: 0 !important;
        flex-direction: column !important;
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
        overflow: hidden !important;
        z-index: 32 !important;
        background: var(--ui-popup-bg-secondary, rgba(8, 8, 18, 0.98)) !important;
      }

      /* Hide logo header on mobile — save space for the nav tabs */
      .about-sidebar-header {
        display: none !important;
      }

      /* Horizontal scrollable nav row */
      .about-nav {
        flex-direction: row !important;
        flex-wrap: nowrap !important;
        overflow-x: auto !important;
        overflow-y: hidden !important;
        padding: 0 8px !important;
        gap: 2px !important;
        align-items: center !important;
        width: 100% !important;
        scrollbar-width: none;
        -webkit-overflow-scrolling: touch;
      }

      .about-nav::-webkit-scrollbar {
        display: none;
      }

      .about-nav-btn {
        flex-shrink: 0 !important;
        padding: 6px 10px !important;
        font-size: 11px !important;
        white-space: nowrap !important;
        word-break: unset !important;
      }

      .about-nav-icon {
        display: inline !important;
        font-size: 12px !important;
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
        left: 2% !important;
        top: 3% !important;
        width: 96% !important;
        max-width: unset !important;
        height: calc(94% - 80px) !important;
        max-height: unset !important;
      }

      .about-nav-side-arrow {
        width: 38px !important;
        height: 38px !important;
        font-size: 15px !important;
        border-width: 1.5px !important;
      }

      .about-arrow-spacer {
        width: 92% !important;
        max-width: unset !important;
      }

      /* Carousel: allow vertical pan inside card; horizontal swipe handled by JS */
      .about-content-carousel {
        touch-action: pan-y;
        overscroll-behavior: contain;
      }

      /* Non-carousel scrollable tab content on mobile */
      .about-content.scroll-mode {
        overflow-y: auto !important;
        -webkit-overflow-scrolling: touch !important;
        overscroll-behavior: contain !important;
        padding: 14px !important;
        touch-action: pan-y !important;
        font-size: 14px !important;
      }
      .about-content.scroll-mode h2 {
        font-size: 17px !important;
      }
      .about-content.scroll-mode h3 {
        font-size: 14px !important;
      }
    }

    @media (max-width: 480px) {
      .about-sidebar-header {
        display: none !important;
      }
      .about-nav-btn {
        font-size: 10px !important;
        padding: 5px 8px !important;
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
  `;x([O({type:Boolean})],b.prototype,"open",2);x([O({type:Boolean,attribute:"full-page"})],b.prototype,"fullPage",2);x([O({type:Object})],b.prototype,"position",2);x([O({type:Object})],b.prototype,"size",2);x([m()],b.prototype,"activeTab",2);x([m()],b.prototype,"isDragging",2);x([m()],b.prototype,"isResizing",2);x([m()],b.prototype,"currentCardIndex",2);x([m()],b.prototype,"isCardDragging",2);b=x([me("orus-about-dialog")],b);var We=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,y=(t,e,i,a)=>{for(var s=a>1?void 0:a?Ve(e,i):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(s=(a?o(e,i,s):o(s))||s);return a&&s&&We(e,i,s),s};const je=!0,qe=!0,Ye=!0,Xe=!0;globalThis.WEBSITE_MODE=je;globalThis.PRODUCTION_MODE=qe;globalThis.NO_INFERENCE_MODE=Ye;globalThis.NO_AUTH_REQUIRED=Xe;let f=class extends k{constructor(){super(...arguments),this._loading=!0,this._loadingMessage="Loading CometGameStudio.com...",this._loadingProgress=0,this._ready=!1,this._errorMessage=null,this._activeSection="home",this._threeCanvasReady=!1,this._aboutOpen=!1,this._editorOpen=!1,this._editorError=null,this.siteUrl="https://www.cometgamestudio.com",this._threeRenderer=null,this._threeScene=null,this._threeCamera=null,this._animationFrameId=0,this._canvasRef=null,this._editorModuleLoaded=!1}get _imgBase(){return"images"}connectedCallback(){super.connectedCallback(),this._bootSequence()}disconnectedCallback(){super.disconnectedCallback(),this._animationFrameId&&cancelAnimationFrame(this._animationFrameId)}firstUpdated(){}updated(t){super.updated(t),t.has("_ready")&&this._ready&&!this._threeCanvasReady&&!this._threeRenderer&&this._initThreeScene()}async _bootSequence(){try{this._loadingMessage="Preparing 3D experience...",this._loadingProgress=80,this._loadingProgress=100,this._loadingMessage="Ready",this._loading=!1,this._ready=!0}catch(t){this._errorMessage=`Failed to load: ${t instanceof Error?t.message:String(t)}`,this._loading=!1}}async _initThreeScene(){try{const t=this.shadowRoot?.querySelector("#cgs-canvas");if(!t)return;this._canvasRef=t;const e=await K(()=>import("./three.module-CIzvuMnW.js"),[]),i=new e.Scene,a=new e.PerspectiveCamera(60,t.clientWidth/t.clientHeight,.1,1e3);a.position.set(0,0,8);const s=new e.WebGLRenderer({canvas:t,antialias:!0,alpha:!0});s.setSize(t.clientWidth,t.clientHeight),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.setClearColor(657935,1);const r=new e.IcosahedronGeometry(2,15),o=new e.MeshStandardMaterial({color:6514417,emissive:3900150,emissiveIntensity:.4,metalness:.8,roughness:.2,wireframe:!1}),n=new e.Mesh(r,o);i.add(n);const d=new e.AmbientLight(16777215,.3);i.add(d);const l=new e.PointLight(6333946,1.5,20);l.position.set(5,5,5),i.add(l),this._threeRenderer=s,this._threeScene=i,this._threeCamera=a,this._threeCanvasReady=!0;const u=()=>{this._animationFrameId=requestAnimationFrame(u),!document.hidden&&(n.rotation.y+=.003,n.rotation.x+=.001,s.render(i,a))};u(),new ResizeObserver(()=>{if(!t.parentElement)return;const g=t.clientWidth,v=t.clientHeight;a.aspect=g/v,a.updateProjectionMatrix(),s.setSize(g,v)}).observe(t)}catch{this._threeCanvasReady=!1}}_navigateTo(t){this._activeSection=t}async _openEditor(){this._editorError=null;try{this._editorModuleLoaded||(await K(()=>import("./orus-web-editor-p2PDtbsM.js").then(t=>t.b),__vite__mapDeps([0,1])),this._editorModuleLoaded=!0),this._editorOpen=!0}catch(t){console.error("[CGS] Failed to load Orus editor:",t),this._editorError=t instanceof Error?t.message:String(t)}}render(){return this._loading?c`
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
            <div class="cgs-main${this._activeSection==="orus-ai"?" cgs-main--fullscreen":""}">
                <!-- 3D Background Canvas — canvas is always rendered once ready; Three.js init fires via updated() -->
                <div class="cgs-canvas-container">
                    ${this._threeCanvasReady?c`<canvas id="cgs-canvas"></canvas>`:c`
                            <canvas id="cgs-canvas"></canvas>
                            <div class="css-fallback-bg" style="position:absolute;inset:0;z-index:-1"></div>
                        `}
                </div>

                <!-- Top Navigation — hidden in full-page orus-ai mode -->
                ${this._activeSection!=="orus-ai"?c`
                <nav class="cgs-nav">
                    <div class="cgs-logo" @click=${()=>this._navigateTo("home")}>
                        Comet Game Studio
                    </div>
                    <div class="cgs-nav-links">
                        <button class="cgs-nav-link ${this._activeSection==="home"?"active":""}"
                                @click=${()=>this._navigateTo("home")}>Home</button>
                        <button class="cgs-nav-link ${this._activeSection==="products"?"active":""}"
                                @click=${()=>this._navigateTo("products")}>Products</button>
                        <button class="cgs-nav-link"
                                @click=${()=>this._navigateTo("orus-ai")}>ORUS AI System</button>
                        <button class="cgs-nav-link ${this._activeSection==="about"?"active":""}"
                                @click=${()=>this._navigateTo("about")}>About</button>
                    </div>
                </nav>`:""}

                <!-- Content Area -->
                <div class="cgs-content${this._activeSection==="orus-ai"?" cgs-content--full":""}">
                    ${this._renderActiveSection()}
                </div>

                <!-- Footer — hidden in full-page orus-ai mode -->
                ${this._activeSection!=="orus-ai"?c`
                <footer class="cgs-footer">
                    <div class="cgs-footer-links">
                        <button class="cgs-footer-link" @click=${()=>this._navigateTo("privacy")}>Privacy Policy</button>
                        <span class="cgs-footer-sep">·</span>
                        <button class="cgs-footer-link" @click=${()=>this._navigateTo("terms")}>Terms of Use</button>
                        <span class="cgs-footer-sep">·</span>
                        <button class="cgs-footer-link" @click=${()=>this._navigateTo("safety")}>Safety</button>
                        <span class="cgs-footer-sep">·</span>
                        <button class="cgs-footer-link" @click=${()=>this._navigateTo("notices")}>Third-Party Notices</button>
                        <span class="cgs-footer-sep">·</span>
                        <a class="cgs-footer-link" href="mailto:support@cometgamestudio.com">Contact</a>
                    </div>
                    <div style="margin-top: 8px;">
                        &copy; ${new Date().getFullYear()} Comet Game Studio Ltd. All rights reserved.
                    </div>
                    <div class="cgs-footer-disclaimer">
                        AI outputs may be inaccurate — always verify important information independently.
                        Governing law: England and Wales.
                    </div>
                </footer>`:""}

                <!-- About Orus Dialog -->
                <orus-about-dialog
                    .open=${this._aboutOpen}
                    @close=${()=>{this._aboutOpen=!1}}
                    @navigate-home=${()=>{this._aboutOpen=!1,this._navigateTo("home")}}
                ></orus-about-dialog>

                <!-- Orus Editor Popup (Website Demo) -->
                ${this._editorOpen?c`
                <div class="cgs-editor-overlay" @click=${t=>{t.target.classList.contains("cgs-editor-overlay")&&(this._editorOpen=!1)}}>
                    <div class="cgs-editor-window">
                        <div class="cgs-editor-titlebar">
                            <span class="cgs-editor-win-title">◎ Orus Editor — Web Demo</span>
                            <button class="cgs-editor-close"
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


        `}_renderActiveSection(){switch(this._activeSection){case"home":return this._renderHome();case"products":return this._renderProducts();case"about":return this._renderAbout();case"privacy":return this._renderPrivacy();case"terms":return this._renderTerms();case"safety":return this._renderSafety();case"notices":return this._renderNotices();case"orus-ai":return this._renderOrusAiPage();default:return this._renderHome()}}_renderHome(){return c`
            <div class="cgs-hero">
                <div class="cgs-hero-tagline">AI · VR · Music</div>
                <h1 class="cgs-hero-title">Comet Game Studio</h1>
                <p class="cgs-hero-subtitle">
                    Building tomorrow's AI and immersive reality today.
                    From Orus the Living Machine to Islands of Life — privacy-first, locally-powered, crafted with passion.
                </p>
                <a class="cgs-store-btn disabled"
                   href="#"
                   aria-disabled="true"
                   tabindex="-1">
                    Orus is not public on Microsoft Store yet
                </a>
                <button class="cgs-editor-btn" @click=${()=>this._openEditor()}>
                    ✨ Try the Orus Editor
                </button>
                ${this._editorError?c`
                <p style="color:#f87171;font-size:12px;margin-top:8px;max-width:340px;text-align:center;">
                    ⚠️ Editor failed to load. Please try again or use the desktop app.<br>
                    <span style="opacity:0.6;font-size:11px;">${this._editorError}</span>
                </p>`:""}
            </div>

            <!-- Media Showcases -->
            <div class="cgs-media-grid single-column" style="margin-top: 48px;">
                <!-- Orus AI System Introduction -->
                <div class="cgs-media-card">
                    <div class="cgs-media-embed">
                        <iframe
                            src="https://www.youtube.com/embed/GA5QfkVvVlw?start=2&rel=0&modestbranding=1"
                            title="Orus Multimodal AI System — Introduction"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            loading="lazy"
                            allowfullscreen>
                        </iframe>
                    </div>
                    <div class="cgs-media-info">
                        <div class="cgs-media-tag">Flagship Product</div>
                        <div class="cgs-media-title">Orus the Living Machine</div>
                        <div class="cgs-media-desc">
                            Meet Orus — a privacy-first, multimodal AI assistant running entirely on your local hardware.
                            Powered by the advanced Phi-4 model architecture, Orus is not just a chatbot; it is a
                            persistent digital entity that evolves with you. Speak, share your screen, or drop documents
                            for instant insight. Your data never leaves your device unless you choose otherwise.
                        </div>
                    </div>
                </div>

                <!-- Islands of Life VR -->
                <div class="cgs-media-card">
                    <div class="cgs-media-embed">
                        <iframe
                            src="https://www.youtube.com/embed/9D_ARBMGh9A?rel=0&modestbranding=1"
                            title="Islands of Life — Virtual Reality Adventure Game"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            loading="lazy"
                            allowfullscreen>
                        </iframe>
                    </div>
                    <div class="cgs-media-info">
                        <div class="cgs-media-tag">VR Experience</div>
                        <div class="cgs-media-title">Islands of Life — A Cinematic VR Adventure</div>
                        <div class="cgs-media-desc">
                            Immerse yourself in a new universe with Islands of Life, a cinematic VR experience
                            that outdoes traditional storytelling. Take on the role of Denid, an explorer &amp; miner,
                            as you answer a distress signal from your friend Veni. Traverse alien landscapes,
                            encounter enigmatic celestial beings, and experience an original soundtrack that
                            resonates with the universe's heartbeat. Rated PEGI 12.
                        </div>
                    </div>
                </div>

                <!-- Islands of Life — Official Soundtrack Preview -->
                <div class="cgs-media-card">
                    <div class="cgs-media-embed">
                        <iframe
                            src="https://www.youtube.com/embed/qJRQyZk3m8g?rel=0&modestbranding=1"
                            title="Islands of Life — Official Soundtrack Preview"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            loading="lazy"
                            allowfullscreen>
                        </iframe>
                    </div>
                    <div class="cgs-media-info">
                        <div class="cgs-media-tag">Original Soundtrack</div>
                        <div class="cgs-media-title">Islands of Life — Official Soundtrack Preview</div>
                        <div class="cgs-media-desc">
                            Every note of the Islands of Life original soundtrack resonates with the universe's
                            heartbeat. Composed exclusively for the game, each track enhances the atmosphere
                            and emotion of Denid's journey through alien landscapes and celestial mysteries.
                            Subscribe for the latest videos and updates from Comet Game Studio Ltd.
                        </div>
                    </div>
                </div>
            </div>
        `}_renderProducts(){return c`
            <div class="cgs-hero">
                <div class="cgs-hero-tagline">Our Products</div>
                <h1 class="cgs-hero-title">What We Build</h1>
            </div>

            <div class="cgs-products">
                <div class="cgs-product-card">
                    <div class="cgs-product-icon">
                        <img src="${this._imgBase}/Orus.avif" alt="Orus the Living Machine" class="cgs-product-img" />
                    </div>
                    <div class="cgs-product-title">Orus the Living Machine</div>
                    <div class="cgs-product-desc">
                        A privacy-first, multimodal AI assistant running entirely on your local hardware.
                        Powered by the Phi-4 model architecture — speak, share your screen, or type to interact.
                        Features persistent memory, a 3D audio-reactive Orb, Orpheus TTS voice engine, and 40+
                        productivity tools including Categorizer, Processor, Memory Lab, and Training Lab.
                        Orus is designed to process your data locally. No cloud dependency by default.
                        Designed to minimise Orus-originated telemetry.
                    </div>
                </div>

                <div class="cgs-product-card">
                    <div class="cgs-product-icon">
                        <img src="${this._imgBase}/IOL.avif" alt="Islands of Life" class="cgs-product-img" />
                    </div>
                    <div class="cgs-product-title">Islands of Life</div>
                    <div class="cgs-product-desc">
                        A cinematic VR adventure. Take on the role of Denid — explorer and miner — as
                        you answer a distress signal from your friend Veni. Traverse alien landscapes,
                        uncover mysteries, and encounter enigmatic celestial beings. Original score
                        composed exclusively for the game. Designed for players aged 12+. Rated PEGI 12.
                    </div>
                </div>

                <div class="cgs-product-card">
                    <div class="cgs-product-icon">🎵</div>
                    <div class="cgs-product-title">Original Soundtracks</div>
                    <div class="cgs-product-desc">
                        Atmospheric orchestral compositions and immersive soundscapes
                        crafted in-house for our gaming and AI experiences.
                    </div>
                </div>
            </div>

            <!-- Product Deep-Dive Media -->
            <div class="cgs-media-grid" style="margin-top: 40px;">
                <div class="cgs-media-card">
                    <div class="cgs-media-embed">
                        <iframe
                            src="https://www.youtube.com/embed/GA5QfkVvVlw?start=2&rel=0&modestbranding=1"
                            title="Orus AI System — Full Demonstration"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            loading="lazy"
                            allowfullscreen>
                        </iframe>
                    </div>
                    <div class="cgs-media-info">
                        <div class="cgs-media-tag">AI System Demo</div>
                        <div class="cgs-media-title">Orus the Living Machine — Full Product Demonstration</div>
                        <div class="cgs-media-desc">
                            Watch Orus in action: speak naturally, share your screen, or drop documents for instant insight.
                            Features an audio-reactive 3D Orb that visualises the system's thought process, Orpheus TTS
                            voice engine with interruption awareness, persistent Memory Lab, Training Lab, Categorizer,
                            Processor, and 40+ integrated tools — all running locally via the vLLM engine.
                            Licensed per host device via the Microsoft Store; other devices on your local
                            network can connect through a browser.
                        </div>
                    </div>
                </div>

                <div class="cgs-media-card">
                    <div class="cgs-media-embed">
                        <iframe
                            src="https://www.youtube.com/embed/9D_ARBMGh9A?rel=0&modestbranding=1"
                            title="Islands of Life VR — Gameplay Trailer"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            loading="lazy"
                            allowfullscreen>
                        </iframe>
                    </div>
                    <div class="cgs-media-info">
                        <div class="cgs-media-tag">VR Game Trailer</div>
                        <div class="cgs-media-title">Islands of Life — Gameplay Preview</div>
                        <div class="cgs-media-desc">
                            Embark on a quest as Denid, an explorer and miner who answers a distress signal
                            from his friend Veni. Traverse alien landscapes, uncover mysteries, and encounter
                            enigmatic celestial beings in this cinematic VR adventure crafted with passion by
                            Comet Game Studio Ltd. Designed for players aged 12 and up. Rated PEGI 12.
                        </div>
                    </div>
                </div>

                <!-- Islands of Life — Official Soundtrack Preview -->
                <div class="cgs-media-card">
                    <div class="cgs-media-embed">
                        <iframe
                            src="https://www.youtube.com/embed/qJRQyZk3m8g?rel=0&modestbranding=1"
                            title="Islands of Life — Official Soundtrack Preview"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            loading="lazy"
                            allowfullscreen>
                        </iframe>
                    </div>
                    <div class="cgs-media-info">
                        <div class="cgs-media-tag">Original Soundtrack</div>
                        <div class="cgs-media-title">Islands of Life — Official Soundtrack Preview</div>
                        <div class="cgs-media-desc">
                            Enjoy melodies composed exclusively for Islands of Life. Each track enhances the
                            atmosphere and emotion of your journey through alien worlds and celestial mysteries.
                            Subscribe for the latest videos and updates from Comet Game Studio Ltd.
                        </div>
                    </div>
                </div>
            </div>
        `}_renderOrusAiPage(){return c`
            <orus-about-dialog full-page></orus-about-dialog>
        `}_renderAbout(){return c`
            <div class="cgs-about-section">
                <div class="cgs-about-icon">
                    <img src="${this._imgBase}/Orus.avif" alt="Orus the Living Machine"
                         style="width:80px;height:80px;object-fit:cover;border-radius:50%;border:2px solid rgba(99,102,241,0.5);" />
                </div>
                <div class="cgs-about-icon-text">Comet Game Studio Ltd</div>
                <h2>About Comet Game Studio Ltd</h2>
                <p>
                    Comet Game Studio Ltd is a dedicated independent studio specialising in
                    AI-powered creative tools and immersive virtual reality experiences.
                    Founded with the vision of making advanced AI accessible and local-first,
                    we prioritize user privacy and data sovereignty above all else.
                </p>
                <p>
                    Our flagship product, <strong>Orus the Living Machine</strong>, is a privacy-first
                    multimodal AI assistant running entirely on your local hardware. Powered by the
                    advanced Phi-4 model architecture, Orus is not just a chatbot — it is a persistent
                    digital entity that evolves with you. All processing runs via the vLLM engine on
                    your device: no cloud dependency. Orus is designed to minimise Orus-originated
                    telemetry. Microsoft Store and Windows platform telemetry operates independently of Orus.
                </p>
                <p>
                    True Multimodal Interaction naturally through voice, text, or vision.
                    Speak to Orus using the emotive Orpheus TTS engine — it understands interruptions,
                    tone, and context. Share your camera, screen, or drop images for instant analysis,
                    OCR, and UI feedback. Orus can even type directly into your Windows applications
                    based on your voice commands.
                </p>
                <p>
                    We also craft immersive VR experiences, including <strong>Islands of Life</strong> —
                    a cinematic VR adventure placing you in the role of Denid, an explorer uncovering
                    the mysteries of alien worlds to an original orchestral soundtrack. Rated PEGI 12.
                </p>
                <p>
                    Comet Game Studio Ltd is registered in England and Wales.
                    Governing law: England and Wales.
                </p>

                <!-- Orus Product Details — shown first, above social links -->
                <div style="margin-top: 32px; width: 100%; background: rgba(15, 15, 25, 0.85); border: 1px solid rgba(99, 102, 241, 0.3); border-radius: 12px; padding: 28px 32px; text-align: center;">
                    <div style="font-size: 32px; margin-bottom: 12px;">◉</div>
                    <div style="font-family: 'Orbitron', sans-serif; font-size: 18px; color: #c4b5fd; margin-bottom: 8px;">Orus the Living Machine</div>
                    <p style="color: #94a3b8; font-size: 13px; line-height: 1.7; margin-bottom: 20px;">
                        Explore Orus in detail — features, architecture, privacy policy, EULA,
                        third-party notices, safety compliance, and system requirements.
                    </p>
                    <button
                        style="display: inline-flex; align-items: center; gap: 8px; padding: 12px 28px; background: linear-gradient(135deg, #6366f1, #8b5cf6); border: none; border-radius: 10px; color: #fff; font-size: 14px; font-weight: 600; cursor: pointer;"
                        @click=${()=>{this._aboutOpen=!0}}
                    >ℹ️ View Full Product Details</button>
                </div>

                <!-- Find us online -->
                <div class="cgs-about-links" style="margin-top: 28px;">
                    <a class="cgs-about-link youtube"
                       href="https://www.youtube.com/@CometGameStudio"
                       target="_blank"
                       rel="noopener noreferrer">
                        ▶ YouTube Channel
                    </a>
                    <span class="cgs-about-link ms-store disabled"
                          title="Coming to Microsoft Store soon"
                          aria-disabled="true">
                        🪟 Microsoft Store — Coming Soon
                    </span>
                </div>

                <!-- Get In Touch -->
                <div class="cgs-contact-section" style="margin-top: 48px;">
                    <h2>Get In Touch</h2>
                    <p style="color: #94a3b8; font-size: 14px; line-height: 1.8;">
                        Have questions about our products or interested in collaboration?
                        We'd love to hear from you.
                    </p>
                    <a class="cgs-contact-link"
                       href="mailto:support@cometgamestudio.com">
                        ✉️ support@cometgamestudio.com
                    </a>
                </div>
            </div>
        `}_renderPrivacy(){return c`
            <div class="cgs-legal-section">
                <button class="cgs-legal-back" @click=${()=>this._navigateTo("home")}>← Back to Home</button>
                <h2>Privacy Policy</h2>
                <p class="cgs-legal-meta">Effective: March 2026 · Comet Game Studio Ltd</p>

                <h3>Local-First Design</h3>
                <p>Orus AI System is designed to run entirely on your local hardware. Your voice, camera feed,
                documents, and chat history are processed on your device. By default, no personal data is sent
                to Comet Game Studio Ltd or any remote server.</p>

                <h3>Data Orus Handles Locally</h3>
                <ul>
                    <li><strong>Session data</strong> — conversation history stored in local files on your device.</li>
                    <li><strong>Memory files</strong> — persistent notes and context stored in your local AppData folder.</li>
                    <li><strong>Log files</strong> — operational logs stored locally for diagnostics.</li>
                    <li><strong>Document staging</strong> — files you submit for analysis are processed locally;
                    they are not transmitted to remote servers unless a specific feature explicitly requires it
                    and you consent.</li>
                    <li><strong>Voice and audio</strong> — microphone audio is processed locally via the on-device
                    speech-to-text engine. Audio is not transmitted to remote servers.</li>
                    <li><strong>Camera and screen captures</strong> — images are processed locally by the on-device
                    vision model. They are not transmitted to remote servers.</li>
                </ul>

                <h3>Orus-Originated Telemetry</h3>
                <p>Orus is designed to minimise Orus-originated telemetry. The Orus application does not
                independently collect or transmit usage analytics, crash reports, or personal identifiers
                to Comet Game Studio Ltd.</p>

                <h3>Platform Telemetry</h3>
                <p>Orus AI System is distributed via the Microsoft Store on Windows. Microsoft Store and the
                Windows platform may independently collect telemetry in accordance with Microsoft's privacy
                policies. This is separate from and outside the control of Comet Game Studio Ltd.
                Please refer to Microsoft's Privacy Statement for details.</p>

                <h3>Your Rights</h3>
                <ul>
                    <li>You may delete local session, memory, and log files at any time from your device.</li>
                    <li>You may contact us at <a class="cgs-legal-link"
                        href="mailto:support@cometgamestudio.com">support@cometgamestudio.com</a>
                        with any privacy enquiries.</li>
                    <li>Residents of the UK and EEA may exercise rights under applicable data protection law.</li>
                </ul>

                <h3>Contact</h3>
                <p>Comet Game Studio Ltd ·
                <a class="cgs-legal-link" href="mailto:support@cometgamestudio.com">support@cometgamestudio.com</a></p>
            </div>
        `}_renderTerms(){return c`
            <div class="cgs-legal-section">
                <button class="cgs-legal-back" @click=${()=>this._navigateTo("home")}>← Back to Home</button>
                <h2>Terms of Use</h2>
                <p class="cgs-legal-meta">Effective: March 2026 · Licensor: Comet Game Studio Ltd · Governing law: England and Wales</p>

                <h3>1. Licence</h3>
                <p>Comet Game Studio Ltd grants you a non-exclusive, non-transferable licence to use Orus AI System
                on a single host device. The licence is personal to you and covers one host device at a time.</p>

                <h3>2. Local Network Access</h3>
                <p>Other devices on the same local network or Wi-Fi may connect to Orus through a browser
                without additional licences. Orus does not provide remote access outside your local network.
                If you configure port forwarding or VPN access, that is your sole responsibility.</p>

                <h3>3. Subscription</h3>
                <p>Your subscription controls access to Orus AI System orchestration and service-layer functionality —
                including the interface, voice engine, memory, tools, and productivity features. It does not grant
                ownership of or exclusive rights to the underlying AI models, which are separately licenced by their
                respective copyright holders (see Third-Party Notices).</p>

                <h3>4. Restrictions</h3>
                <ul>
                    <li>Do not reverse engineer, decompile, or extract the Orus proprietary vault or compiled binaries.</li>
                    <li>Do not redistribute Orus or sublicence it to others.</li>
                    <li>Do not use Orus to generate content that is unlawful, harmful, or that you are not authorised to create.</li>
                </ul>

                <h3>5. Warranty Disclaimer</h3>
                <p>Orus AI System is provided "as is" without warranties of any kind, express or implied, including
                but not limited to fitness for a particular purpose or accuracy of AI outputs. AI models can produce
                incorrect, incomplete, or misleading information. Always verify important information independently.</p>

                <h3>6. Limitation of Liability</h3>
                <p>To the maximum extent permitted by applicable law, Comet Game Studio Ltd shall not be liable for
                any indirect, incidental, special, consequential, or punitive damages arising from your use of
                Orus AI System.</p>

                <h3>7. Governing Law</h3>
                <p>These Terms of Use are governed by the laws of England and Wales. Any disputes shall be subject
                to the exclusive jurisdiction of the courts of England and Wales.</p>

                <h3>Contact</h3>
                <p>Comet Game Studio Ltd ·
                <a class="cgs-legal-link" href="mailto:support@cometgamestudio.com">support@cometgamestudio.com</a></p>
            </div>
        `}_renderSafety(){return c`
            <div class="cgs-legal-section">
                <button class="cgs-legal-back" @click=${()=>this._navigateTo("home")}>← Back to Home</button>
                <h2>Safety &amp; Responsible Use</h2>
                <p class="cgs-legal-meta">Comet Game Studio Ltd · Orus AI System</p>

                <h3>AI Accuracy</h3>
                <p>Orus AI System uses advanced language and multimodal models. AI models can and do produce
                incorrect, incomplete, or misleading outputs. Always verify important information from authoritative
                sources before acting on it. Orus is a tool to assist, not a substitute for professional advice.</p>

                <h3>Local Processing</h3>
                <p>Voice, camera, screen, and document inputs are processed locally on your device by default.
                This does not remove your legal responsibilities regarding how you use and handle the
                information processed by Orus.</p>

                <h3>Consent</h3>
                <p>You are responsible for obtaining appropriate consent from any person whose voice, image,
                or personal data is recorded or processed through Orus. Recording others without their consent
                may be unlawful in your jurisdiction.</p>

                <h3>No Remote Access by Default</h3>
                <p>Orus does not send data to remote servers by default. Other devices on your local network
                may connect via browser. Orus does not provide internet-facing remote access unless you explicitly
                configure it — that configuration and its security implications are your responsibility.</p>

                <h3>Hardware Responsibility</h3>
                <p>Orus AI System requires a compatible GPU and hardware to function effectively. Hardware selection,
                maintenance, thermal management, and energy costs are your responsibility. Comet Game Studio Ltd
                is not liable for hardware damage resulting from running AI workloads.</p>

                <h3>Contact</h3>
                <p>To report safety concerns, contact us at
                <a class="cgs-legal-link" href="mailto:support@cometgamestudio.com">support@cometgamestudio.com</a>.</p>
            </div>
        `}_renderNotices(){return c`
            <div class="cgs-legal-section">
                <button class="cgs-legal-back" @click=${()=>this._navigateTo("home")}>← Back to Home</button>
                <h2>Third-Party Notices</h2>
                <p class="cgs-legal-meta">Comet Game Studio Ltd · Orus AI System</p>
                <p>Orus AI System includes components from third-party open-source projects. The following notices
                are provided in compliance with their respective licences.</p>

                <h3>AI Models</h3>
                <ul>
                    <li><strong>Phi-4 Multimodal</strong> — Copyright © Microsoft Corporation. MIT Licence.</li>
                    <li><strong>Whisper</strong> — Copyright © OpenAI. MIT Licence.</li>
                    <li><strong>Orpheus TTS</strong> — Copyright © Canopy Labs. Apache 2.0 Licence.</li>
                    <li><strong>Stable Fast 3D (SF3D)</strong> — Copyright © Stability AI. Stability AI Research Licence.</li>
                </ul>

                <h3>Inference &amp; Runtime</h3>
                <ul>
                    <li><strong>vLLM</strong> — Copyright © vLLM contributors. Apache 2.0 Licence.</li>
                    <li><strong>PyTorch</strong> — Copyright © PyTorch contributors. BSD 3-Clause Licence.</li>
                    <li><strong>FastAPI</strong> — Copyright © Sebastián Ramírez. MIT Licence.</li>
                    <li><strong>Python</strong> — Copyright © Python Software Foundation. PSF Licence.</li>
                    <li><strong>Uvicorn</strong> — Copyright © Encode OSS Ltd. BSD 3-Clause Licence.</li>
                </ul>

                <h3>Frontend</h3>
                <ul>
                    <li><strong>LitElement / Lit</strong> — Copyright © Google LLC. BSD 3-Clause Licence.</li>
                    <li><strong>Three.js</strong> — Copyright © mrdoob and contributors. MIT Licence.</li>
                    <li><strong>Vite</strong> — Copyright © Evan You and contributors. MIT Licence.</li>
                    <li><strong>TypeScript</strong> — Copyright © Microsoft Corporation. Apache 2.0 Licence.</li>
                </ul>

                <h3>Apache 2.0 NOTICE</h3>
                <p>For Apache 2.0 licenced packages (vLLM, Orpheus TTS, TypeScript), the full NOTICE file
                contents are reproduced in the NOTICE file distributed with the Orus AI System installation.
                Source code for these components is available at their respective repositories.</p>

                <p class="cgs-legal-note">This list is a summary. For the complete and authoritative list of
                dependencies and their licences, refer to the NOTICE file included in your Orus installation,
                or run <code>pip-licenses</code> and <code>npm ls</code> in your Orus installation environment.</p>
            </div>
        `}};f.styles=le`
        :host {
            display: block;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background: #0a0a0f;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            color: #e2e8f0;
            -webkit-user-select: none;
            user-select: none;
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
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 16px 32px;
            background: rgba(10, 10, 15, 0.9);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid rgba(99, 102, 241, 0.15);
        }

        .cgs-logo {
            font-family: 'Orbitron', sans-serif;
            font-size: 18px;
            font-weight: 700;
            color: #c4b5fd;
            letter-spacing: 3px;
            text-transform: uppercase;
            cursor: pointer;
        }

        .cgs-nav-links {
            display: flex;
            gap: 24px;
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
        }

        .cgs-nav-link:hover {
            color: #c4b5fd;
            background: rgba(99, 102, 241, 0.1);
        }

        .cgs-nav-link.active {
            color: #a78bfa;
            background: rgba(99, 102, 241, 0.15);
        }

        /* ── Content Area ──────────────────────────────────── */

        .cgs-content {
            position: relative;
            z-index: 5;
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding: 40px 32px;
            overflow-y: auto;
        }

        /* ── Hero Section ──────────────────────────────────── */

        .cgs-hero {
            text-align: center;
            max-width: 720px;
            padding-top: 48px;
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
            margin-bottom: 48px;
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
            padding: 16px 32px;
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
                --cgs-nav-height: 56px;
            }

            /* Nav — shrink logo & links so nothing overflows */
            .cgs-nav {
                padding: 10px 14px;
                gap: 8px;
            }
            .cgs-logo {
                font-size: 13px;
                letter-spacing: 1px;
                flex-shrink: 0;
            }
            .cgs-nav-links {
                gap: 4px;
            }
            .cgs-nav-link {
                font-size: 11px;
                padding: 5px 8px;
                letter-spacing: 0.5px;
            }

            /* Hero */
            .cgs-hero {
                padding-top: 24px;
                max-width: 100%;
            }
            .cgs-hero-title {
                font-size: 30px;
                letter-spacing: 1px;
            }
            .cgs-hero-subtitle {
                font-size: 16px;
                margin-bottom: 20px;
            }
            .cgs-hero-tagline {
                font-size: 18px;
                letter-spacing: 4px;
                margin-bottom: 28px;
            }

            /* Content area */
            .cgs-content {
                padding: 20px 14px;
            }

            /* Products */
            .cgs-products {
                grid-template-columns: 1fr;
                gap: 14px;
            }
            .cgs-product-card {
                padding: 20px 16px;
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
            }
            .cgs-about-section h2 {
                font-size: 22px;
            }
            .cgs-about-section p {
                font-size: 13px;
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
            }

            /* Footer — collapse separators so links wrap readably */
            .cgs-footer {
                padding: 10px 14px;
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
                --cgs-nav-height: 50px;
            }

            .cgs-nav {
                padding: 8px 10px;
                gap: 4px;
            }
            .cgs-logo {
                font-size: 11px;
                letter-spacing: 0.3px;
            }
            .cgs-nav-links {
                gap: 2px;
            }
            .cgs-nav-link {
                font-size: 10px;
                padding: 4px 6px;
                letter-spacing: 0;
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

            .cgs-content {
                padding: 14px 10px;
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
            .cgs-editor-btn {
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
        }
    `;y([m()],f.prototype,"_loading",2);y([m()],f.prototype,"_loadingMessage",2);y([m()],f.prototype,"_loadingProgress",2);y([m()],f.prototype,"_ready",2);y([m()],f.prototype,"_errorMessage",2);y([m()],f.prototype,"_activeSection",2);y([m()],f.prototype,"_threeCanvasReady",2);y([m()],f.prototype,"_aboutOpen",2);y([m()],f.prototype,"_editorOpen",2);y([m()],f.prototype,"_editorError",2);y([O({type:String,attribute:"site-url"})],f.prototype,"siteUrl",2);f=y([me("orus-cgs-home")],f);const de={log:console.log.bind(console),warn:console.warn.bind(console),error:console.error.bind(console)};function Ke(){const t=()=>{};console.debug=t,console.trace=t,console.dir=t,console.dirxml=t,console.table=t;try{console.clear()}catch{}de.log("%c Comet Game Studio %c Orus AI System %c","background: #6366f1; color: #fff; padding: 4px 8px; border-radius: 4px 0 0 4px; font-weight: 700;","background: #1e1b4b; color: #c4b5fd; padding: 4px 8px; border-radius: 0 4px 4px 0;",""),de.log("%chttps://www.cometgamestudio.com","color: #94a3b8; font-size: 11px;")}function Qe(){document.addEventListener("keydown",t=>{t.ctrlKey&&!t.shiftKey&&(t.key==="u"||t.key==="U")&&t.preventDefault()},!0),document.addEventListener("contextmenu",t=>(t.preventDefault(),!1))}function Je(){typeof performance<"u"&&performance.clearResourceTimings&&setInterval(()=>{try{performance.clearResourceTimings()}catch{}},1e4)}Ke();Qe();Je();export{h as A,K as _,le as a,c as b,k as i,O as n,m as r,me as t};
