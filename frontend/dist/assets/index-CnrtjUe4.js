function T0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var tj=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function P0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var op={exports:{}},so={},ap={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mi=Symbol.for("react.element"),F0=Symbol.for("react.portal"),A0=Symbol.for("react.fragment"),M0=Symbol.for("react.strict_mode"),D0=Symbol.for("react.profiler"),R0=Symbol.for("react.provider"),L0=Symbol.for("react.context"),z0=Symbol.for("react.forward_ref"),_0=Symbol.for("react.suspense"),V0=Symbol.for("react.memo"),I0=Symbol.for("react.lazy"),kc=Symbol.iterator;function B0(e){return e===null||typeof e!="object"?null:(e=kc&&e[kc]||e["@@iterator"],typeof e=="function"?e:null)}var lp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},up=Object.assign,cp={};function ar(e,t,n){this.props=e,this.context=t,this.refs=cp,this.updater=n||lp}ar.prototype.isReactComponent={};ar.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ar.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function dp(){}dp.prototype=ar.prototype;function Gl(e,t,n){this.props=e,this.context=t,this.refs=cp,this.updater=n||lp}var Yl=Gl.prototype=new dp;Yl.constructor=Gl;up(Yl,ar.prototype);Yl.isPureReactComponent=!0;var Sc=Array.isArray,fp=Object.prototype.hasOwnProperty,Ql={current:null},pp={key:!0,ref:!0,__self:!0,__source:!0};function hp(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)fp.call(t,r)&&!pp.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:mi,type:e,key:s,ref:o,props:i,_owner:Ql.current}}function O0(e,t){return{$$typeof:mi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ql(e){return typeof e=="object"&&e!==null&&e.$$typeof===mi}function $0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var jc=/\/+/g;function Do(e,t){return typeof e=="object"&&e!==null&&e.key!=null?$0(""+e.key):t.toString(36)}function es(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case mi:case F0:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Do(o,0):r,Sc(i)?(n="",e!=null&&(n=e.replace(jc,"$&/")+"/"),es(i,t,n,"",function(c){return c})):i!=null&&(ql(i)&&(i=O0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(jc,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Sc(e))for(var a=0;a<e.length;a++){s=e[a];var u=r+Do(s,a);o+=es(s,t,n,u,i)}else if(u=B0(e),typeof u=="function")for(e=u.call(e),a=0;!(s=e.next()).done;)s=s.value,u=r+Do(s,a++),o+=es(s,t,n,u,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Pi(e,t,n){if(e==null)return e;var r=[],i=0;return es(e,r,"","",function(s){return t.call(n,s,i++)}),r}function U0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var je={current:null},ts={transition:null},H0={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:ts,ReactCurrentOwner:Ql};function mp(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:Pi,forEach:function(e,t,n){Pi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Pi(e,function(){t++}),t},toArray:function(e){return Pi(e,function(t){return t})||[]},only:function(e){if(!ql(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=ar;z.Fragment=A0;z.Profiler=D0;z.PureComponent=Gl;z.StrictMode=M0;z.Suspense=_0;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H0;z.act=mp;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=up({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Ql.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)fp.call(t,u)&&!pp.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:mi,type:e.type,key:i,ref:s,props:r,_owner:o}};z.createContext=function(e){return e={$$typeof:L0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:R0,_context:e},e.Consumer=e};z.createElement=hp;z.createFactory=function(e){var t=hp.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:z0,render:e}};z.isValidElement=ql;z.lazy=function(e){return{$$typeof:I0,_payload:{_status:-1,_result:e},_init:U0}};z.memo=function(e,t){return{$$typeof:V0,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=ts.transition;ts.transition={};try{e()}finally{ts.transition=t}};z.unstable_act=mp;z.useCallback=function(e,t){return je.current.useCallback(e,t)};z.useContext=function(e){return je.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return je.current.useDeferredValue(e)};z.useEffect=function(e,t){return je.current.useEffect(e,t)};z.useId=function(){return je.current.useId()};z.useImperativeHandle=function(e,t,n){return je.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return je.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return je.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return je.current.useMemo(e,t)};z.useReducer=function(e,t,n){return je.current.useReducer(e,t,n)};z.useRef=function(e){return je.current.useRef(e)};z.useState=function(e){return je.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return je.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return je.current.useTransition()};z.version="18.3.1";ap.exports=z;var b=ap.exports;const gp=P0(b),W0=T0({__proto__:null,default:gp},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K0=b,G0=Symbol.for("react.element"),Y0=Symbol.for("react.fragment"),Q0=Object.prototype.hasOwnProperty,q0=K0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,X0={key:!0,ref:!0,__self:!0,__source:!0};function xp(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Q0.call(t,r)&&!X0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:G0,type:e,key:s,ref:o,props:i,_owner:q0.current}}so.Fragment=Y0;so.jsx=xp;so.jsxs=xp;op.exports=so;var l=op.exports,Ca={},yp={exports:{}},Ie={},vp={exports:{}},wp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,D){var R=P.length;P.push(D);e:for(;0<R;){var B=R-1>>>1,te=P[B];if(0<i(te,D))P[B]=D,P[R]=te,R=B;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var D=P[0],R=P.pop();if(R!==D){P[0]=R;e:for(var B=0,te=P.length,Ni=te>>>1;B<Ni;){var nn=2*(B+1)-1,Mo=P[nn],rn=nn+1,Ti=P[rn];if(0>i(Mo,R))rn<te&&0>i(Ti,Mo)?(P[B]=Ti,P[rn]=R,B=rn):(P[B]=Mo,P[nn]=R,B=nn);else if(rn<te&&0>i(Ti,R))P[B]=Ti,P[rn]=R,B=rn;else break e}}return D}function i(P,D){var R=P.sortIndex-D.sortIndex;return R!==0?R:P.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,f=null,p=3,m=!1,y=!1,v=!1,k=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(P){for(var D=n(c);D!==null;){if(D.callback===null)r(c);else if(D.startTime<=P)r(c),D.sortIndex=D.expirationTime,t(u,D);else break;D=n(c)}}function w(P){if(v=!1,g(P),!y)if(n(u)!==null)y=!0,Ee(S);else{var D=n(c);D!==null&&Ei(w,D.startTime-P)}}function S(P,D){y=!1,v&&(v=!1,x(C),C=-1),m=!0;var R=p;try{for(g(D),f=n(u);f!==null&&(!(f.expirationTime>D)||P&&!L());){var B=f.callback;if(typeof B=="function"){f.callback=null,p=f.priorityLevel;var te=B(f.expirationTime<=D);D=e.unstable_now(),typeof te=="function"?f.callback=te:f===n(u)&&r(u),g(D)}else r(u);f=n(u)}if(f!==null)var Ni=!0;else{var nn=n(c);nn!==null&&Ei(w,nn.startTime-D),Ni=!1}return Ni}finally{f=null,p=R,m=!1}}var E=!1,j=null,C=-1,F=5,N=-1;function L(){return!(e.unstable_now()-N<F)}function G(){if(j!==null){var P=e.unstable_now();N=P;var D=!0;try{D=j(!0,P)}finally{D?ve():(E=!1,j=null)}}else E=!1}var ve;if(typeof h=="function")ve=function(){h(G)};else if(typeof MessageChannel<"u"){var Me=new MessageChannel,Qe=Me.port2;Me.port1.onmessage=G,ve=function(){Qe.postMessage(null)}}else ve=function(){k(G,0)};function Ee(P){j=P,E||(E=!0,ve())}function Ei(P,D){C=k(function(){P(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){y||m||(y=!0,Ee(S))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(P){switch(p){case 1:case 2:case 3:var D=3;break;default:D=p}var R=p;p=D;try{return P()}finally{p=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,D){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var R=p;p=P;try{return D()}finally{p=R}},e.unstable_scheduleCallback=function(P,D,R){var B=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?B+R:B):R=B,P){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=R+te,P={id:d++,callback:D,priorityLevel:P,startTime:R,expirationTime:te,sortIndex:-1},R>B?(P.sortIndex=R,t(c,P),n(u)===null&&P===n(c)&&(v?(x(C),C=-1):v=!0,Ei(w,R-B))):(P.sortIndex=te,t(u,P),y||m||(y=!0,Ee(S))),P},e.unstable_shouldYield=L,e.unstable_wrapCallback=function(P){var D=p;return function(){var R=p;p=D;try{return P.apply(this,arguments)}finally{p=R}}}})(wp);vp.exports=wp;var J0=vp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z0=b,Ve=J0;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bp=new Set,Wr={};function Cn(e,t){Xn(e,t),Xn(e+"Capture",t)}function Xn(e,t){for(Wr[e]=t,e=0;e<t.length;e++)bp.add(t[e])}var bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ea=Object.prototype.hasOwnProperty,ex=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cc={},Ec={};function tx(e){return Ea.call(Ec,e)?!0:Ea.call(Cc,e)?!1:ex.test(e)?Ec[e]=!0:(Cc[e]=!0,!1)}function nx(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function rx(e,t,n,r){if(t===null||typeof t>"u"||nx(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ce(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new Ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new Ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new Ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new Ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new Ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new Ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new Ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new Ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new Ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Xl=/[\-:]([a-z])/g;function Jl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Xl,Jl);he[t]=new Ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Xl,Jl);he[t]=new Ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Xl,Jl);he[t]=new Ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new Ce(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new Ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new Ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Zl(e,t,n,r){var i=he.hasOwnProperty(t)?he[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(rx(t,n,i,r)&&(n=null),r||i===null?tx(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ct=Z0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fi=Symbol.for("react.element"),Pn=Symbol.for("react.portal"),Fn=Symbol.for("react.fragment"),eu=Symbol.for("react.strict_mode"),Na=Symbol.for("react.profiler"),kp=Symbol.for("react.provider"),Sp=Symbol.for("react.context"),tu=Symbol.for("react.forward_ref"),Ta=Symbol.for("react.suspense"),Pa=Symbol.for("react.suspense_list"),nu=Symbol.for("react.memo"),Ft=Symbol.for("react.lazy"),jp=Symbol.for("react.offscreen"),Nc=Symbol.iterator;function gr(e){return e===null||typeof e!="object"?null:(e=Nc&&e[Nc]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,Ro;function Nr(e){if(Ro===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ro=t&&t[1]||""}return`
`+Ro+e}var Lo=!1;function zo(e,t){if(!e||Lo)return"";Lo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=a);break}}}finally{Lo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Nr(e):""}function ix(e){switch(e.tag){case 5:return Nr(e.type);case 16:return Nr("Lazy");case 13:return Nr("Suspense");case 19:return Nr("SuspenseList");case 0:case 2:case 15:return e=zo(e.type,!1),e;case 11:return e=zo(e.type.render,!1),e;case 1:return e=zo(e.type,!0),e;default:return""}}function Fa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Fn:return"Fragment";case Pn:return"Portal";case Na:return"Profiler";case eu:return"StrictMode";case Ta:return"Suspense";case Pa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Sp:return(e.displayName||"Context")+".Consumer";case kp:return(e._context.displayName||"Context")+".Provider";case tu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case nu:return t=e.displayName||null,t!==null?t:Fa(e.type)||"Memo";case Ft:t=e._payload,e=e._init;try{return Fa(e(t))}catch{}}return null}function sx(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fa(t);case 8:return t===eu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Cp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ox(e){var t=Cp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ai(e){e._valueTracker||(e._valueTracker=ox(e))}function Ep(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Cp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function bs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Aa(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Tc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Np(e,t){t=t.checked,t!=null&&Zl(e,"checked",t,!1)}function Ma(e,t){Np(e,t);var n=Gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Da(e,t.type,n):t.hasOwnProperty("defaultValue")&&Da(e,t.type,Gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Pc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Da(e,t,n){(t!=="number"||bs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Tr=Array.isArray;function Hn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Gt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ra(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(Tr(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Gt(n)}}function Tp(e,t){var n=Gt(t.value),r=Gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ac(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Pp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function La(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Pp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Mi,Fp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Mi=Mi||document.createElement("div"),Mi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Mi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Kr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ax=["Webkit","ms","Moz","O"];Object.keys(Mr).forEach(function(e){ax.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mr[t]=Mr[e]})});function Ap(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Mr.hasOwnProperty(e)&&Mr[e]?(""+t).trim():t+"px"}function Mp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ap(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var lx=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function za(e,t){if(t){if(lx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function _a(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Va=null;function ru(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ia=null,Wn=null,Kn=null;function Mc(e){if(e=yi(e)){if(typeof Ia!="function")throw Error(T(280));var t=e.stateNode;t&&(t=co(t),Ia(e.stateNode,e.type,t))}}function Dp(e){Wn?Kn?Kn.push(e):Kn=[e]:Wn=e}function Rp(){if(Wn){var e=Wn,t=Kn;if(Kn=Wn=null,Mc(e),t)for(e=0;e<t.length;e++)Mc(t[e])}}function Lp(e,t){return e(t)}function zp(){}var _o=!1;function _p(e,t,n){if(_o)return e(t,n);_o=!0;try{return Lp(e,t,n)}finally{_o=!1,(Wn!==null||Kn!==null)&&(zp(),Rp())}}function Gr(e,t){var n=e.stateNode;if(n===null)return null;var r=co(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var Ba=!1;if(bt)try{var xr={};Object.defineProperty(xr,"passive",{get:function(){Ba=!0}}),window.addEventListener("test",xr,xr),window.removeEventListener("test",xr,xr)}catch{Ba=!1}function ux(e,t,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var Dr=!1,ks=null,Ss=!1,Oa=null,cx={onError:function(e){Dr=!0,ks=e}};function dx(e,t,n,r,i,s,o,a,u){Dr=!1,ks=null,ux.apply(cx,arguments)}function fx(e,t,n,r,i,s,o,a,u){if(dx.apply(this,arguments),Dr){if(Dr){var c=ks;Dr=!1,ks=null}else throw Error(T(198));Ss||(Ss=!0,Oa=c)}}function En(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Vp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Dc(e){if(En(e)!==e)throw Error(T(188))}function px(e){var t=e.alternate;if(!t){if(t=En(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Dc(i),e;if(s===r)return Dc(i),t;s=s.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function Ip(e){return e=px(e),e!==null?Bp(e):null}function Bp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Bp(e);if(t!==null)return t;e=e.sibling}return null}var Op=Ve.unstable_scheduleCallback,Rc=Ve.unstable_cancelCallback,hx=Ve.unstable_shouldYield,mx=Ve.unstable_requestPaint,ee=Ve.unstable_now,gx=Ve.unstable_getCurrentPriorityLevel,iu=Ve.unstable_ImmediatePriority,$p=Ve.unstable_UserBlockingPriority,js=Ve.unstable_NormalPriority,xx=Ve.unstable_LowPriority,Up=Ve.unstable_IdlePriority,oo=null,dt=null;function yx(e){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(oo,e,void 0,(e.current.flags&128)===128)}catch{}}var nt=Math.clz32?Math.clz32:bx,vx=Math.log,wx=Math.LN2;function bx(e){return e>>>=0,e===0?32:31-(vx(e)/wx|0)|0}var Di=64,Ri=4194304;function Pr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Cs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Pr(a):(s&=o,s!==0&&(r=Pr(s)))}else o=n&~i,o!==0?r=Pr(o):s!==0&&(r=Pr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-nt(t),i=1<<n,r|=e[n],t&=~i;return r}function kx(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sx(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-nt(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=kx(a,t)):u<=t&&(e.expiredLanes|=a),s&=~a}}function $a(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Hp(){var e=Di;return Di<<=1,!(Di&4194240)&&(Di=64),e}function Vo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function gi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-nt(t),e[t]=n}function jx(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-nt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function su(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-nt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var I=0;function Wp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Kp,ou,Gp,Yp,Qp,Ua=!1,Li=[],Vt=null,It=null,Bt=null,Yr=new Map,Qr=new Map,Mt=[],Cx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lc(e,t){switch(e){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":It=null;break;case"mouseover":case"mouseout":Bt=null;break;case"pointerover":case"pointerout":Yr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qr.delete(t.pointerId)}}function yr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=yi(t),t!==null&&ou(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ex(e,t,n,r,i){switch(t){case"focusin":return Vt=yr(Vt,e,t,n,r,i),!0;case"dragenter":return It=yr(It,e,t,n,r,i),!0;case"mouseover":return Bt=yr(Bt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Yr.set(s,yr(Yr.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Qr.set(s,yr(Qr.get(s)||null,e,t,n,r,i)),!0}return!1}function qp(e){var t=cn(e.target);if(t!==null){var n=En(t);if(n!==null){if(t=n.tag,t===13){if(t=Vp(n),t!==null){e.blockedOn=t,Qp(e.priority,function(){Gp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ns(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ha(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Va=r,n.target.dispatchEvent(r),Va=null}else return t=yi(n),t!==null&&ou(t),e.blockedOn=n,!1;t.shift()}return!0}function zc(e,t,n){ns(e)&&n.delete(t)}function Nx(){Ua=!1,Vt!==null&&ns(Vt)&&(Vt=null),It!==null&&ns(It)&&(It=null),Bt!==null&&ns(Bt)&&(Bt=null),Yr.forEach(zc),Qr.forEach(zc)}function vr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ua||(Ua=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,Nx)))}function qr(e){function t(i){return vr(i,e)}if(0<Li.length){vr(Li[0],e);for(var n=1;n<Li.length;n++){var r=Li[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Vt!==null&&vr(Vt,e),It!==null&&vr(It,e),Bt!==null&&vr(Bt,e),Yr.forEach(t),Qr.forEach(t),n=0;n<Mt.length;n++)r=Mt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Mt.length&&(n=Mt[0],n.blockedOn===null);)qp(n),n.blockedOn===null&&Mt.shift()}var Gn=Ct.ReactCurrentBatchConfig,Es=!0;function Tx(e,t,n,r){var i=I,s=Gn.transition;Gn.transition=null;try{I=1,au(e,t,n,r)}finally{I=i,Gn.transition=s}}function Px(e,t,n,r){var i=I,s=Gn.transition;Gn.transition=null;try{I=4,au(e,t,n,r)}finally{I=i,Gn.transition=s}}function au(e,t,n,r){if(Es){var i=Ha(e,t,n,r);if(i===null)Yo(e,t,r,Ns,n),Lc(e,r);else if(Ex(i,e,t,n,r))r.stopPropagation();else if(Lc(e,r),t&4&&-1<Cx.indexOf(e)){for(;i!==null;){var s=yi(i);if(s!==null&&Kp(s),s=Ha(e,t,n,r),s===null&&Yo(e,t,r,Ns,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Yo(e,t,r,null,n)}}var Ns=null;function Ha(e,t,n,r){if(Ns=null,e=ru(r),e=cn(e),e!==null)if(t=En(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Vp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ns=e,null}function Xp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gx()){case iu:return 1;case $p:return 4;case js:case xx:return 16;case Up:return 536870912;default:return 16}default:return 16}}var Rt=null,lu=null,rs=null;function Jp(){if(rs)return rs;var e,t=lu,n=t.length,r,i="value"in Rt?Rt.value:Rt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return rs=i.slice(e,1<r?1-r:void 0)}function is(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zi(){return!0}function _c(){return!1}function Be(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?zi:_c,this.isPropagationStopped=_c,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zi)},persist:function(){},isPersistent:zi}),t}var lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uu=Be(lr),xi=X({},lr,{view:0,detail:0}),Fx=Be(xi),Io,Bo,wr,ao=X({},xi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wr&&(wr&&e.type==="mousemove"?(Io=e.screenX-wr.screenX,Bo=e.screenY-wr.screenY):Bo=Io=0,wr=e),Io)},movementY:function(e){return"movementY"in e?e.movementY:Bo}}),Vc=Be(ao),Ax=X({},ao,{dataTransfer:0}),Mx=Be(Ax),Dx=X({},xi,{relatedTarget:0}),Oo=Be(Dx),Rx=X({},lr,{animationName:0,elapsedTime:0,pseudoElement:0}),Lx=Be(Rx),zx=X({},lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_x=Be(zx),Vx=X({},lr,{data:0}),Ic=Be(Vx),Ix={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ox={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $x(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ox[e])?!!t[e]:!1}function cu(){return $x}var Ux=X({},xi,{key:function(e){if(e.key){var t=Ix[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=is(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Bx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cu,charCode:function(e){return e.type==="keypress"?is(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?is(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hx=Be(Ux),Wx=X({},ao,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bc=Be(Wx),Kx=X({},xi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cu}),Gx=Be(Kx),Yx=X({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qx=Be(Yx),qx=X({},ao,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Xx=Be(qx),Jx=[9,13,27,32],du=bt&&"CompositionEvent"in window,Rr=null;bt&&"documentMode"in document&&(Rr=document.documentMode);var Zx=bt&&"TextEvent"in window&&!Rr,Zp=bt&&(!du||Rr&&8<Rr&&11>=Rr),Oc=" ",$c=!1;function eh(e,t){switch(e){case"keyup":return Jx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function th(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var An=!1;function ey(e,t){switch(e){case"compositionend":return th(t);case"keypress":return t.which!==32?null:($c=!0,Oc);case"textInput":return e=t.data,e===Oc&&$c?null:e;default:return null}}function ty(e,t){if(An)return e==="compositionend"||!du&&eh(e,t)?(e=Jp(),rs=lu=Rt=null,An=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Zp&&t.locale!=="ko"?null:t.data;default:return null}}var ny={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ny[e.type]:t==="textarea"}function nh(e,t,n,r){Dp(r),t=Ts(t,"onChange"),0<t.length&&(n=new uu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Lr=null,Xr=null;function ry(e){ph(e,0)}function lo(e){var t=Rn(e);if(Ep(t))return e}function iy(e,t){if(e==="change")return t}var rh=!1;if(bt){var $o;if(bt){var Uo="oninput"in document;if(!Uo){var Hc=document.createElement("div");Hc.setAttribute("oninput","return;"),Uo=typeof Hc.oninput=="function"}$o=Uo}else $o=!1;rh=$o&&(!document.documentMode||9<document.documentMode)}function Wc(){Lr&&(Lr.detachEvent("onpropertychange",ih),Xr=Lr=null)}function ih(e){if(e.propertyName==="value"&&lo(Xr)){var t=[];nh(t,Xr,e,ru(e)),_p(ry,t)}}function sy(e,t,n){e==="focusin"?(Wc(),Lr=t,Xr=n,Lr.attachEvent("onpropertychange",ih)):e==="focusout"&&Wc()}function oy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return lo(Xr)}function ay(e,t){if(e==="click")return lo(t)}function ly(e,t){if(e==="input"||e==="change")return lo(t)}function uy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var st=typeof Object.is=="function"?Object.is:uy;function Jr(e,t){if(st(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ea.call(t,i)||!st(e[i],t[i]))return!1}return!0}function Kc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gc(e,t){var n=Kc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Kc(n)}}function sh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function oh(){for(var e=window,t=bs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=bs(e.document)}return t}function fu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function cy(e){var t=oh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&sh(n.ownerDocument.documentElement,n)){if(r!==null&&fu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Gc(n,s);var o=Gc(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var dy=bt&&"documentMode"in document&&11>=document.documentMode,Mn=null,Wa=null,zr=null,Ka=!1;function Yc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ka||Mn==null||Mn!==bs(r)||(r=Mn,"selectionStart"in r&&fu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zr&&Jr(zr,r)||(zr=r,r=Ts(Wa,"onSelect"),0<r.length&&(t=new uu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Mn)))}function _i(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Dn={animationend:_i("Animation","AnimationEnd"),animationiteration:_i("Animation","AnimationIteration"),animationstart:_i("Animation","AnimationStart"),transitionend:_i("Transition","TransitionEnd")},Ho={},ah={};bt&&(ah=document.createElement("div").style,"AnimationEvent"in window||(delete Dn.animationend.animation,delete Dn.animationiteration.animation,delete Dn.animationstart.animation),"TransitionEvent"in window||delete Dn.transitionend.transition);function uo(e){if(Ho[e])return Ho[e];if(!Dn[e])return e;var t=Dn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ah)return Ho[e]=t[n];return e}var lh=uo("animationend"),uh=uo("animationiteration"),ch=uo("animationstart"),dh=uo("transitionend"),fh=new Map,Qc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xt(e,t){fh.set(e,t),Cn(t,[e])}for(var Wo=0;Wo<Qc.length;Wo++){var Ko=Qc[Wo],fy=Ko.toLowerCase(),py=Ko[0].toUpperCase()+Ko.slice(1);Xt(fy,"on"+py)}Xt(lh,"onAnimationEnd");Xt(uh,"onAnimationIteration");Xt(ch,"onAnimationStart");Xt("dblclick","onDoubleClick");Xt("focusin","onFocus");Xt("focusout","onBlur");Xt(dh,"onTransitionEnd");Xn("onMouseEnter",["mouseout","mouseover"]);Xn("onMouseLeave",["mouseout","mouseover"]);Xn("onPointerEnter",["pointerout","pointerover"]);Xn("onPointerLeave",["pointerout","pointerover"]);Cn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fr));function qc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,fx(r,t,void 0,e),e.currentTarget=null}function ph(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;qc(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;qc(i,a,c),s=u}}}if(Ss)throw e=Oa,Ss=!1,Oa=null,e}function H(e,t){var n=t[Xa];n===void 0&&(n=t[Xa]=new Set);var r=e+"__bubble";n.has(r)||(hh(t,e,2,!1),n.add(r))}function Go(e,t,n){var r=0;t&&(r|=4),hh(n,e,r,t)}var Vi="_reactListening"+Math.random().toString(36).slice(2);function Zr(e){if(!e[Vi]){e[Vi]=!0,bp.forEach(function(n){n!=="selectionchange"&&(hy.has(n)||Go(n,!1,e),Go(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vi]||(t[Vi]=!0,Go("selectionchange",!1,t))}}function hh(e,t,n,r){switch(Xp(t)){case 1:var i=Tx;break;case 4:i=Px;break;default:i=au}n=i.bind(null,t,n,e),i=void 0,!Ba||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Yo(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=cn(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}_p(function(){var c=s,d=ru(n),f=[];e:{var p=fh.get(e);if(p!==void 0){var m=uu,y=e;switch(e){case"keypress":if(is(n)===0)break e;case"keydown":case"keyup":m=Hx;break;case"focusin":y="focus",m=Oo;break;case"focusout":y="blur",m=Oo;break;case"beforeblur":case"afterblur":m=Oo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Vc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Mx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Gx;break;case lh:case uh:case ch:m=Lx;break;case dh:m=Qx;break;case"scroll":m=Fx;break;case"wheel":m=Xx;break;case"copy":case"cut":case"paste":m=_x;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Bc}var v=(t&4)!==0,k=!v&&e==="scroll",x=v?p!==null?p+"Capture":null:p;v=[];for(var h=c,g;h!==null;){g=h;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,x!==null&&(w=Gr(h,x),w!=null&&v.push(ei(h,w,g)))),k)break;h=h.return}0<v.length&&(p=new m(p,y,null,n,d),f.push({event:p,listeners:v}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",p&&n!==Va&&(y=n.relatedTarget||n.fromElement)&&(cn(y)||y[kt]))break e;if((m||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=c,y=y?cn(y):null,y!==null&&(k=En(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=c),m!==y)){if(v=Vc,w="onMouseLeave",x="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(v=Bc,w="onPointerLeave",x="onPointerEnter",h="pointer"),k=m==null?p:Rn(m),g=y==null?p:Rn(y),p=new v(w,h+"leave",m,n,d),p.target=k,p.relatedTarget=g,w=null,cn(d)===c&&(v=new v(x,h+"enter",y,n,d),v.target=g,v.relatedTarget=k,w=v),k=w,m&&y)t:{for(v=m,x=y,h=0,g=v;g;g=Nn(g))h++;for(g=0,w=x;w;w=Nn(w))g++;for(;0<h-g;)v=Nn(v),h--;for(;0<g-h;)x=Nn(x),g--;for(;h--;){if(v===x||x!==null&&v===x.alternate)break t;v=Nn(v),x=Nn(x)}v=null}else v=null;m!==null&&Xc(f,p,m,v,!1),y!==null&&k!==null&&Xc(f,k,y,v,!0)}}e:{if(p=c?Rn(c):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var S=iy;else if(Uc(p))if(rh)S=ly;else{S=oy;var E=sy}else(m=p.nodeName)&&m.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=ay);if(S&&(S=S(e,c))){nh(f,S,n,d);break e}E&&E(e,p,c),e==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&Da(p,"number",p.value)}switch(E=c?Rn(c):window,e){case"focusin":(Uc(E)||E.contentEditable==="true")&&(Mn=E,Wa=c,zr=null);break;case"focusout":zr=Wa=Mn=null;break;case"mousedown":Ka=!0;break;case"contextmenu":case"mouseup":case"dragend":Ka=!1,Yc(f,n,d);break;case"selectionchange":if(dy)break;case"keydown":case"keyup":Yc(f,n,d)}var j;if(du)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else An?eh(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Zp&&n.locale!=="ko"&&(An||C!=="onCompositionStart"?C==="onCompositionEnd"&&An&&(j=Jp()):(Rt=d,lu="value"in Rt?Rt.value:Rt.textContent,An=!0)),E=Ts(c,C),0<E.length&&(C=new Ic(C,e,null,n,d),f.push({event:C,listeners:E}),j?C.data=j:(j=th(n),j!==null&&(C.data=j)))),(j=Zx?ey(e,n):ty(e,n))&&(c=Ts(c,"onBeforeInput"),0<c.length&&(d=new Ic("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=j))}ph(f,t)})}function ei(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ts(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Gr(e,n),s!=null&&r.unshift(ei(e,s,i)),s=Gr(e,t),s!=null&&r.push(ei(e,s,i))),e=e.return}return r}function Nn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xc(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Gr(n,s),u!=null&&o.unshift(ei(n,u,a))):i||(u=Gr(n,s),u!=null&&o.push(ei(n,u,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var my=/\r\n?/g,gy=/\u0000|\uFFFD/g;function Jc(e){return(typeof e=="string"?e:""+e).replace(my,`
`).replace(gy,"")}function Ii(e,t,n){if(t=Jc(t),Jc(e)!==t&&n)throw Error(T(425))}function Ps(){}var Ga=null,Ya=null;function Qa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qa=typeof setTimeout=="function"?setTimeout:void 0,xy=typeof clearTimeout=="function"?clearTimeout:void 0,Zc=typeof Promise=="function"?Promise:void 0,yy=typeof queueMicrotask=="function"?queueMicrotask:typeof Zc<"u"?function(e){return Zc.resolve(null).then(e).catch(vy)}:qa;function vy(e){setTimeout(function(){throw e})}function Qo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),qr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);qr(t)}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ed(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ur=Math.random().toString(36).slice(2),ct="__reactFiber$"+ur,ti="__reactProps$"+ur,kt="__reactContainer$"+ur,Xa="__reactEvents$"+ur,wy="__reactListeners$"+ur,by="__reactHandles$"+ur;function cn(e){var t=e[ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[kt]||n[ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ed(e);e!==null;){if(n=e[ct])return n;e=ed(e)}return t}e=n,n=e.parentNode}return null}function yi(e){return e=e[ct]||e[kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Rn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function co(e){return e[ti]||null}var Ja=[],Ln=-1;function Jt(e){return{current:e}}function W(e){0>Ln||(e.current=Ja[Ln],Ja[Ln]=null,Ln--)}function U(e,t){Ln++,Ja[Ln]=e.current,e.current=t}var Yt={},ye=Jt(Yt),Pe=Jt(!1),wn=Yt;function Jn(e,t){var n=e.type.contextTypes;if(!n)return Yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Fe(e){return e=e.childContextTypes,e!=null}function Fs(){W(Pe),W(ye)}function td(e,t,n){if(ye.current!==Yt)throw Error(T(168));U(ye,t),U(Pe,n)}function mh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(T(108,sx(e)||"Unknown",i));return X({},n,r)}function As(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Yt,wn=ye.current,U(ye,e),U(Pe,Pe.current),!0}function nd(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=mh(e,t,wn),r.__reactInternalMemoizedMergedChildContext=e,W(Pe),W(ye),U(ye,e)):W(Pe),U(Pe,n)}var xt=null,fo=!1,qo=!1;function gh(e){xt===null?xt=[e]:xt.push(e)}function ky(e){fo=!0,gh(e)}function Zt(){if(!qo&&xt!==null){qo=!0;var e=0,t=I;try{var n=xt;for(I=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}xt=null,fo=!1}catch(i){throw xt!==null&&(xt=xt.slice(e+1)),Op(iu,Zt),i}finally{I=t,qo=!1}}return null}var zn=[],_n=0,Ms=null,Ds=0,Oe=[],$e=0,bn=null,yt=1,vt="";function on(e,t){zn[_n++]=Ds,zn[_n++]=Ms,Ms=e,Ds=t}function xh(e,t,n){Oe[$e++]=yt,Oe[$e++]=vt,Oe[$e++]=bn,bn=e;var r=yt;e=vt;var i=32-nt(r)-1;r&=~(1<<i),n+=1;var s=32-nt(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,yt=1<<32-nt(t)+i|n<<i|r,vt=s+e}else yt=1<<s|n<<i|r,vt=e}function pu(e){e.return!==null&&(on(e,1),xh(e,1,0))}function hu(e){for(;e===Ms;)Ms=zn[--_n],zn[_n]=null,Ds=zn[--_n],zn[_n]=null;for(;e===bn;)bn=Oe[--$e],Oe[$e]=null,vt=Oe[--$e],Oe[$e]=null,yt=Oe[--$e],Oe[$e]=null}var Le=null,Re=null,K=!1,tt=null;function yh(e,t){var n=Ue(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function rd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Le=e,Re=Ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Le=e,Re=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=bn!==null?{id:yt,overflow:vt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ue(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Le=e,Re=null,!0):!1;default:return!1}}function Za(e){return(e.mode&1)!==0&&(e.flags&128)===0}function el(e){if(K){var t=Re;if(t){var n=t;if(!rd(e,t)){if(Za(e))throw Error(T(418));t=Ot(n.nextSibling);var r=Le;t&&rd(e,t)?yh(r,n):(e.flags=e.flags&-4097|2,K=!1,Le=e)}}else{if(Za(e))throw Error(T(418));e.flags=e.flags&-4097|2,K=!1,Le=e}}}function id(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Le=e}function Bi(e){if(e!==Le)return!1;if(!K)return id(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Qa(e.type,e.memoizedProps)),t&&(t=Re)){if(Za(e))throw vh(),Error(T(418));for(;t;)yh(e,t),t=Ot(t.nextSibling)}if(id(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Re=Ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Re=null}}else Re=Le?Ot(e.stateNode.nextSibling):null;return!0}function vh(){for(var e=Re;e;)e=Ot(e.nextSibling)}function Zn(){Re=Le=null,K=!1}function mu(e){tt===null?tt=[e]:tt.push(e)}var Sy=Ct.ReactCurrentBatchConfig;function br(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function Oi(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function sd(e){var t=e._init;return t(e._payload)}function wh(e){function t(x,h){if(e){var g=x.deletions;g===null?(x.deletions=[h],x.flags|=16):g.push(h)}}function n(x,h){if(!e)return null;for(;h!==null;)t(x,h),h=h.sibling;return null}function r(x,h){for(x=new Map;h!==null;)h.key!==null?x.set(h.key,h):x.set(h.index,h),h=h.sibling;return x}function i(x,h){return x=Wt(x,h),x.index=0,x.sibling=null,x}function s(x,h,g){return x.index=g,e?(g=x.alternate,g!==null?(g=g.index,g<h?(x.flags|=2,h):g):(x.flags|=2,h)):(x.flags|=1048576,h)}function o(x){return e&&x.alternate===null&&(x.flags|=2),x}function a(x,h,g,w){return h===null||h.tag!==6?(h=ra(g,x.mode,w),h.return=x,h):(h=i(h,g),h.return=x,h)}function u(x,h,g,w){var S=g.type;return S===Fn?d(x,h,g.props.children,w,g.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ft&&sd(S)===h.type)?(w=i(h,g.props),w.ref=br(x,h,g),w.return=x,w):(w=ds(g.type,g.key,g.props,null,x.mode,w),w.ref=br(x,h,g),w.return=x,w)}function c(x,h,g,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=ia(g,x.mode,w),h.return=x,h):(h=i(h,g.children||[]),h.return=x,h)}function d(x,h,g,w,S){return h===null||h.tag!==7?(h=gn(g,x.mode,w,S),h.return=x,h):(h=i(h,g),h.return=x,h)}function f(x,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=ra(""+h,x.mode,g),h.return=x,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Fi:return g=ds(h.type,h.key,h.props,null,x.mode,g),g.ref=br(x,null,h),g.return=x,g;case Pn:return h=ia(h,x.mode,g),h.return=x,h;case Ft:var w=h._init;return f(x,w(h._payload),g)}if(Tr(h)||gr(h))return h=gn(h,x.mode,g,null),h.return=x,h;Oi(x,h)}return null}function p(x,h,g,w){var S=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:a(x,h,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Fi:return g.key===S?u(x,h,g,w):null;case Pn:return g.key===S?c(x,h,g,w):null;case Ft:return S=g._init,p(x,h,S(g._payload),w)}if(Tr(g)||gr(g))return S!==null?null:d(x,h,g,w,null);Oi(x,g)}return null}function m(x,h,g,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return x=x.get(g)||null,a(h,x,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Fi:return x=x.get(w.key===null?g:w.key)||null,u(h,x,w,S);case Pn:return x=x.get(w.key===null?g:w.key)||null,c(h,x,w,S);case Ft:var E=w._init;return m(x,h,g,E(w._payload),S)}if(Tr(w)||gr(w))return x=x.get(g)||null,d(h,x,w,S,null);Oi(h,w)}return null}function y(x,h,g,w){for(var S=null,E=null,j=h,C=h=0,F=null;j!==null&&C<g.length;C++){j.index>C?(F=j,j=null):F=j.sibling;var N=p(x,j,g[C],w);if(N===null){j===null&&(j=F);break}e&&j&&N.alternate===null&&t(x,j),h=s(N,h,C),E===null?S=N:E.sibling=N,E=N,j=F}if(C===g.length)return n(x,j),K&&on(x,C),S;if(j===null){for(;C<g.length;C++)j=f(x,g[C],w),j!==null&&(h=s(j,h,C),E===null?S=j:E.sibling=j,E=j);return K&&on(x,C),S}for(j=r(x,j);C<g.length;C++)F=m(j,x,C,g[C],w),F!==null&&(e&&F.alternate!==null&&j.delete(F.key===null?C:F.key),h=s(F,h,C),E===null?S=F:E.sibling=F,E=F);return e&&j.forEach(function(L){return t(x,L)}),K&&on(x,C),S}function v(x,h,g,w){var S=gr(g);if(typeof S!="function")throw Error(T(150));if(g=S.call(g),g==null)throw Error(T(151));for(var E=S=null,j=h,C=h=0,F=null,N=g.next();j!==null&&!N.done;C++,N=g.next()){j.index>C?(F=j,j=null):F=j.sibling;var L=p(x,j,N.value,w);if(L===null){j===null&&(j=F);break}e&&j&&L.alternate===null&&t(x,j),h=s(L,h,C),E===null?S=L:E.sibling=L,E=L,j=F}if(N.done)return n(x,j),K&&on(x,C),S;if(j===null){for(;!N.done;C++,N=g.next())N=f(x,N.value,w),N!==null&&(h=s(N,h,C),E===null?S=N:E.sibling=N,E=N);return K&&on(x,C),S}for(j=r(x,j);!N.done;C++,N=g.next())N=m(j,x,C,N.value,w),N!==null&&(e&&N.alternate!==null&&j.delete(N.key===null?C:N.key),h=s(N,h,C),E===null?S=N:E.sibling=N,E=N);return e&&j.forEach(function(G){return t(x,G)}),K&&on(x,C),S}function k(x,h,g,w){if(typeof g=="object"&&g!==null&&g.type===Fn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Fi:e:{for(var S=g.key,E=h;E!==null;){if(E.key===S){if(S=g.type,S===Fn){if(E.tag===7){n(x,E.sibling),h=i(E,g.props.children),h.return=x,x=h;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ft&&sd(S)===E.type){n(x,E.sibling),h=i(E,g.props),h.ref=br(x,E,g),h.return=x,x=h;break e}n(x,E);break}else t(x,E);E=E.sibling}g.type===Fn?(h=gn(g.props.children,x.mode,w,g.key),h.return=x,x=h):(w=ds(g.type,g.key,g.props,null,x.mode,w),w.ref=br(x,h,g),w.return=x,x=w)}return o(x);case Pn:e:{for(E=g.key;h!==null;){if(h.key===E)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(x,h.sibling),h=i(h,g.children||[]),h.return=x,x=h;break e}else{n(x,h);break}else t(x,h);h=h.sibling}h=ia(g,x.mode,w),h.return=x,x=h}return o(x);case Ft:return E=g._init,k(x,h,E(g._payload),w)}if(Tr(g))return y(x,h,g,w);if(gr(g))return v(x,h,g,w);Oi(x,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(x,h.sibling),h=i(h,g),h.return=x,x=h):(n(x,h),h=ra(g,x.mode,w),h.return=x,x=h),o(x)):n(x,h)}return k}var er=wh(!0),bh=wh(!1),Rs=Jt(null),Ls=null,Vn=null,gu=null;function xu(){gu=Vn=Ls=null}function yu(e){var t=Rs.current;W(Rs),e._currentValue=t}function tl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Yn(e,t){Ls=e,gu=Vn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Te=!0),e.firstContext=null)}function Ge(e){var t=e._currentValue;if(gu!==e)if(e={context:e,memoizedValue:t,next:null},Vn===null){if(Ls===null)throw Error(T(308));Vn=e,Ls.dependencies={lanes:0,firstContext:e}}else Vn=Vn.next=e;return t}var dn=null;function vu(e){dn===null?dn=[e]:dn.push(e)}function kh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,vu(t)):(n.next=i.next,i.next=n),t.interleaved=n,St(e,r)}function St(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var At=!1;function wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $t(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,_&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,St(e,n)}return i=r.interleaved,i===null?(t.next=t,vu(r)):(t.next=i.next,i.next=t),r.interleaved=t,St(e,n)}function ss(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,su(e,n)}}function od(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function zs(e,t,n,r){var i=e.updateQueue;At=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,a=s;do{var p=a.lane,m=a.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,v=a;switch(p=t,m=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){f=y.call(m,f,p);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,p=typeof y=="function"?y.call(m,f,p):y,p==null)break e;f=X({},f,p);break e;case 2:At=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else m={eventTime:m,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=m,u=f):d=d.next=m,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Sn|=o,e.lanes=o,e.memoizedState=f}}function ad(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var vi={},ft=Jt(vi),ni=Jt(vi),ri=Jt(vi);function fn(e){if(e===vi)throw Error(T(174));return e}function bu(e,t){switch(U(ri,t),U(ni,e),U(ft,vi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:La(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=La(t,e)}W(ft),U(ft,t)}function tr(){W(ft),W(ni),W(ri)}function jh(e){fn(ri.current);var t=fn(ft.current),n=La(t,e.type);t!==n&&(U(ni,e),U(ft,n))}function ku(e){ni.current===e&&(W(ft),W(ni))}var Y=Jt(0);function _s(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xo=[];function Su(){for(var e=0;e<Xo.length;e++)Xo[e]._workInProgressVersionPrimary=null;Xo.length=0}var os=Ct.ReactCurrentDispatcher,Jo=Ct.ReactCurrentBatchConfig,kn=0,Q=null,se=null,le=null,Vs=!1,_r=!1,ii=0,jy=0;function me(){throw Error(T(321))}function ju(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!st(e[n],t[n]))return!1;return!0}function Cu(e,t,n,r,i,s){if(kn=s,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,os.current=e===null||e.memoizedState===null?Ty:Py,e=n(r,i),_r){s=0;do{if(_r=!1,ii=0,25<=s)throw Error(T(301));s+=1,le=se=null,t.updateQueue=null,os.current=Fy,e=n(r,i)}while(_r)}if(os.current=Is,t=se!==null&&se.next!==null,kn=0,le=se=Q=null,Vs=!1,t)throw Error(T(300));return e}function Eu(){var e=ii!==0;return ii=0,e}function at(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?Q.memoizedState=le=e:le=le.next=e,le}function Ye(){if(se===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=le===null?Q.memoizedState:le.next;if(t!==null)le=t,se=e;else{if(e===null)throw Error(T(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},le===null?Q.memoizedState=le=e:le=le.next=e}return le}function si(e,t){return typeof t=="function"?t(e):t}function Zo(e){var t=Ye(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=se,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var d=c.lane;if((kn&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,Q.lanes|=d,Sn|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,st(r,t.memoizedState)||(Te=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Q.lanes|=s,Sn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ea(e){var t=Ye(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);st(s,t.memoizedState)||(Te=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Ch(){}function Eh(e,t){var n=Q,r=Ye(),i=t(),s=!st(r.memoizedState,i);if(s&&(r.memoizedState=i,Te=!0),r=r.queue,Nu(Ph.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,oi(9,Th.bind(null,n,r,i,t),void 0,null),ue===null)throw Error(T(349));kn&30||Nh(n,t,i)}return i}function Nh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Th(e,t,n,r){t.value=n,t.getSnapshot=r,Fh(t)&&Ah(e)}function Ph(e,t,n){return n(function(){Fh(t)&&Ah(e)})}function Fh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!st(e,n)}catch{return!0}}function Ah(e){var t=St(e,1);t!==null&&rt(t,e,1,-1)}function ld(e){var t=at();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:si,lastRenderedState:e},t.queue=e,e=e.dispatch=Ny.bind(null,Q,e),[t.memoizedState,e]}function oi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Mh(){return Ye().memoizedState}function as(e,t,n,r){var i=at();Q.flags|=e,i.memoizedState=oi(1|t,n,void 0,r===void 0?null:r)}function po(e,t,n,r){var i=Ye();r=r===void 0?null:r;var s=void 0;if(se!==null){var o=se.memoizedState;if(s=o.destroy,r!==null&&ju(r,o.deps)){i.memoizedState=oi(t,n,s,r);return}}Q.flags|=e,i.memoizedState=oi(1|t,n,s,r)}function ud(e,t){return as(8390656,8,e,t)}function Nu(e,t){return po(2048,8,e,t)}function Dh(e,t){return po(4,2,e,t)}function Rh(e,t){return po(4,4,e,t)}function Lh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zh(e,t,n){return n=n!=null?n.concat([e]):null,po(4,4,Lh.bind(null,t,e),n)}function Tu(){}function _h(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ju(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Vh(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ju(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ih(e,t,n){return kn&21?(st(n,t)||(n=Hp(),Q.lanes|=n,Sn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Te=!0),e.memoizedState=n)}function Cy(e,t){var n=I;I=n!==0&&4>n?n:4,e(!0);var r=Jo.transition;Jo.transition={};try{e(!1),t()}finally{I=n,Jo.transition=r}}function Bh(){return Ye().memoizedState}function Ey(e,t,n){var r=Ht(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Oh(e))$h(t,n);else if(n=kh(e,t,n,r),n!==null){var i=Se();rt(n,e,r,i),Uh(n,t,r)}}function Ny(e,t,n){var r=Ht(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Oh(e))$h(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,st(a,o)){var u=t.interleaved;u===null?(i.next=i,vu(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=kh(e,t,i,r),n!==null&&(i=Se(),rt(n,e,r,i),Uh(n,t,r))}}function Oh(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function $h(e,t){_r=Vs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Uh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,su(e,n)}}var Is={readContext:Ge,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},Ty={readContext:Ge,useCallback:function(e,t){return at().memoizedState=[e,t===void 0?null:t],e},useContext:Ge,useEffect:ud,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,as(4194308,4,Lh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return as(4194308,4,e,t)},useInsertionEffect:function(e,t){return as(4,2,e,t)},useMemo:function(e,t){var n=at();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=at();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ey.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var t=at();return e={current:e},t.memoizedState=e},useState:ld,useDebugValue:Tu,useDeferredValue:function(e){return at().memoizedState=e},useTransition:function(){var e=ld(!1),t=e[0];return e=Cy.bind(null,e[1]),at().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Q,i=at();if(K){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),ue===null)throw Error(T(349));kn&30||Nh(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,ud(Ph.bind(null,r,s,e),[e]),r.flags|=2048,oi(9,Th.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=at(),t=ue.identifierPrefix;if(K){var n=vt,r=yt;n=(r&~(1<<32-nt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ii++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=jy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Py={readContext:Ge,useCallback:_h,useContext:Ge,useEffect:Nu,useImperativeHandle:zh,useInsertionEffect:Dh,useLayoutEffect:Rh,useMemo:Vh,useReducer:Zo,useRef:Mh,useState:function(){return Zo(si)},useDebugValue:Tu,useDeferredValue:function(e){var t=Ye();return Ih(t,se.memoizedState,e)},useTransition:function(){var e=Zo(si)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:Ch,useSyncExternalStore:Eh,useId:Bh,unstable_isNewReconciler:!1},Fy={readContext:Ge,useCallback:_h,useContext:Ge,useEffect:Nu,useImperativeHandle:zh,useInsertionEffect:Dh,useLayoutEffect:Rh,useMemo:Vh,useReducer:ea,useRef:Mh,useState:function(){return ea(si)},useDebugValue:Tu,useDeferredValue:function(e){var t=Ye();return se===null?t.memoizedState=e:Ih(t,se.memoizedState,e)},useTransition:function(){var e=ea(si)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:Ch,useSyncExternalStore:Eh,useId:Bh,unstable_isNewReconciler:!1};function Ze(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function nl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ho={isMounted:function(e){return(e=e._reactInternals)?En(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Se(),i=Ht(e),s=wt(r,i);s.payload=t,n!=null&&(s.callback=n),t=$t(e,s,i),t!==null&&(rt(t,e,i,r),ss(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Se(),i=Ht(e),s=wt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=$t(e,s,i),t!==null&&(rt(t,e,i,r),ss(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Se(),r=Ht(e),i=wt(n,r);i.tag=2,t!=null&&(i.callback=t),t=$t(e,i,r),t!==null&&(rt(t,e,r,n),ss(t,e,r))}};function cd(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Jr(n,r)||!Jr(i,s):!0}function Hh(e,t,n){var r=!1,i=Yt,s=t.contextType;return typeof s=="object"&&s!==null?s=Ge(s):(i=Fe(t)?wn:ye.current,r=t.contextTypes,s=(r=r!=null)?Jn(e,i):Yt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ho,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function dd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ho.enqueueReplaceState(t,t.state,null)}function rl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},wu(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Ge(s):(s=Fe(t)?wn:ye.current,i.context=Jn(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(nl(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ho.enqueueReplaceState(i,i.state,null),zs(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function nr(e,t){try{var n="",r=t;do n+=ix(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function ta(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function il(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ay=typeof WeakMap=="function"?WeakMap:Map;function Wh(e,t,n){n=wt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Os||(Os=!0,hl=r),il(e,t)},n}function Kh(e,t,n){n=wt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){il(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){il(e,t),typeof r!="function"&&(Ut===null?Ut=new Set([this]):Ut.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function fd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ay;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Wy.bind(null,e,t,n),t.then(e,e))}function pd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function hd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=wt(-1,1),t.tag=2,$t(n,t,1))),n.lanes|=1),e)}var My=Ct.ReactCurrentOwner,Te=!1;function we(e,t,n,r){t.child=e===null?bh(t,null,n,r):er(t,e.child,n,r)}function md(e,t,n,r,i){n=n.render;var s=t.ref;return Yn(t,i),r=Cu(e,t,n,r,s,i),n=Eu(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,jt(e,t,i)):(K&&n&&pu(t),t.flags|=1,we(e,t,r,i),t.child)}function gd(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!zu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Gh(e,t,s,r,i)):(e=ds(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Jr,n(o,r)&&e.ref===t.ref)return jt(e,t,i)}return t.flags|=1,e=Wt(s,r),e.ref=t.ref,e.return=t,t.child=e}function Gh(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Jr(s,r)&&e.ref===t.ref)if(Te=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Te=!0);else return t.lanes=e.lanes,jt(e,t,i)}return sl(e,t,n,r,i)}function Yh(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(Bn,De),De|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(Bn,De),De|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,U(Bn,De),De|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,U(Bn,De),De|=r;return we(e,t,i,n),t.child}function Qh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function sl(e,t,n,r,i){var s=Fe(n)?wn:ye.current;return s=Jn(t,s),Yn(t,i),n=Cu(e,t,n,r,s,i),r=Eu(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,jt(e,t,i)):(K&&r&&pu(t),t.flags|=1,we(e,t,n,i),t.child)}function xd(e,t,n,r,i){if(Fe(n)){var s=!0;As(t)}else s=!1;if(Yn(t,i),t.stateNode===null)ls(e,t),Hh(t,n,r),rl(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ge(c):(c=Fe(n)?wn:ye.current,c=Jn(t,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&dd(t,o,r,c),At=!1;var p=t.memoizedState;o.state=p,zs(t,r,o,i),u=t.memoizedState,a!==r||p!==u||Pe.current||At?(typeof d=="function"&&(nl(t,n,d,r),u=t.memoizedState),(a=At||cd(t,n,a,r,p,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Sh(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Ze(t.type,a),o.props=c,f=t.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ge(u):(u=Fe(n)?wn:ye.current,u=Jn(t,u));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==u)&&dd(t,o,r,u),At=!1,p=t.memoizedState,o.state=p,zs(t,r,o,i);var y=t.memoizedState;a!==f||p!==y||Pe.current||At?(typeof m=="function"&&(nl(t,n,m,r),y=t.memoizedState),(c=At||cd(t,n,c,r,p,y,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return ol(e,t,n,r,s,i)}function ol(e,t,n,r,i,s){Qh(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&nd(t,n,!1),jt(e,t,s);r=t.stateNode,My.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=er(t,e.child,null,s),t.child=er(t,null,a,s)):we(e,t,a,s),t.memoizedState=r.state,i&&nd(t,n,!0),t.child}function qh(e){var t=e.stateNode;t.pendingContext?td(e,t.pendingContext,t.pendingContext!==t.context):t.context&&td(e,t.context,!1),bu(e,t.containerInfo)}function yd(e,t,n,r,i){return Zn(),mu(i),t.flags|=256,we(e,t,n,r),t.child}var al={dehydrated:null,treeContext:null,retryLane:0};function ll(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xh(e,t,n){var r=t.pendingProps,i=Y.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),U(Y,i&1),e===null)return el(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=xo(o,r,0,null),e=gn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=ll(n),t.memoizedState=al,e):Pu(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Dy(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Wt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Wt(a,s):(s=gn(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?ll(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=al,r}return s=e.child,e=s.sibling,r=Wt(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Pu(e,t){return t=xo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function $i(e,t,n,r){return r!==null&&mu(r),er(t,e.child,null,n),e=Pu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dy(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=ta(Error(T(422))),$i(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=xo({mode:"visible",children:r.children},i,0,null),s=gn(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&er(t,e.child,null,o),t.child.memoizedState=ll(o),t.memoizedState=al,s);if(!(t.mode&1))return $i(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(T(419)),r=ta(s,r,void 0),$i(e,t,o,r)}if(a=(o&e.childLanes)!==0,Te||a){if(r=ue,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,St(e,i),rt(r,e,i,-1))}return Lu(),r=ta(Error(T(421))),$i(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Ky.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Re=Ot(i.nextSibling),Le=t,K=!0,tt=null,e!==null&&(Oe[$e++]=yt,Oe[$e++]=vt,Oe[$e++]=bn,yt=e.id,vt=e.overflow,bn=t),t=Pu(t,r.children),t.flags|=4096,t)}function vd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),tl(e.return,t,n)}function na(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Jh(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(we(e,t,r.children,n),r=Y.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vd(e,n,t);else if(e.tag===19)vd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(Y,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&_s(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),na(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&_s(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}na(t,!0,n,null,s);break;case"together":na(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ls(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function jt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Sn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=Wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ry(e,t,n){switch(t.tag){case 3:qh(t),Zn();break;case 5:jh(t);break;case 1:Fe(t.type)&&As(t);break;case 4:bu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;U(Rs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?Xh(e,t,n):(U(Y,Y.current&1),e=jt(e,t,n),e!==null?e.sibling:null);U(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Jh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),U(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,Yh(e,t,n)}return jt(e,t,n)}var Zh,ul,em,tm;Zh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ul=function(){};em=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,fn(ft.current);var s=null;switch(n){case"input":i=Aa(e,i),r=Aa(e,r),s=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),s=[];break;case"textarea":i=Ra(e,i),r=Ra(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ps)}za(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Wr.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Wr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&H("scroll",e),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(t.updateQueue=c)&&(t.flags|=4)}};tm=function(e,t,n,r){n!==r&&(t.flags|=4)};function kr(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ly(e,t,n){var r=t.pendingProps;switch(hu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(t),null;case 1:return Fe(t.type)&&Fs(),ge(t),null;case 3:return r=t.stateNode,tr(),W(Pe),W(ye),Su(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Bi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,tt!==null&&(xl(tt),tt=null))),ul(e,t),ge(t),null;case 5:ku(t);var i=fn(ri.current);if(n=t.type,e!==null&&t.stateNode!=null)em(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return ge(t),null}if(e=fn(ft.current),Bi(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[ct]=t,r[ti]=s,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<Fr.length;i++)H(Fr[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":Tc(r,s),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},H("invalid",r);break;case"textarea":Fc(r,s),H("invalid",r)}za(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ii(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ii(r.textContent,a,e),i=["children",""+a]):Wr.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&H("scroll",r)}switch(n){case"input":Ai(r),Pc(r,s,!0);break;case"textarea":Ai(r),Ac(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ps)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Pp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[ct]=t,e[ti]=r,Zh(e,t,!1,!1),t.stateNode=e;e:{switch(o=_a(n,r),n){case"dialog":H("cancel",e),H("close",e),i=r;break;case"iframe":case"object":case"embed":H("load",e),i=r;break;case"video":case"audio":for(i=0;i<Fr.length;i++)H(Fr[i],e);i=r;break;case"source":H("error",e),i=r;break;case"img":case"image":case"link":H("error",e),H("load",e),i=r;break;case"details":H("toggle",e),i=r;break;case"input":Tc(e,r),i=Aa(e,r),H("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),H("invalid",e);break;case"textarea":Fc(e,r),i=Ra(e,r),H("invalid",e);break;default:i=r}za(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?Mp(e,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Fp(e,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Kr(e,u):typeof u=="number"&&Kr(e,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Wr.hasOwnProperty(s)?u!=null&&s==="onScroll"&&H("scroll",e):u!=null&&Zl(e,s,u,o))}switch(n){case"input":Ai(e),Pc(e,r,!1);break;case"textarea":Ai(e),Ac(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Gt(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Hn(e,!!r.multiple,s,!1):r.defaultValue!=null&&Hn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ps)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ge(t),null;case 6:if(e&&t.stateNode!=null)tm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=fn(ri.current),fn(ft.current),Bi(t)){if(r=t.stateNode,n=t.memoizedProps,r[ct]=t,(s=r.nodeValue!==n)&&(e=Le,e!==null))switch(e.tag){case 3:Ii(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ii(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ct]=t,t.stateNode=r}return ge(t),null;case 13:if(W(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Re!==null&&t.mode&1&&!(t.flags&128))vh(),Zn(),t.flags|=98560,s=!1;else if(s=Bi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(T(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(T(317));s[ct]=t}else Zn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ge(t),s=!1}else tt!==null&&(xl(tt),tt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?oe===0&&(oe=3):Lu())),t.updateQueue!==null&&(t.flags|=4),ge(t),null);case 4:return tr(),ul(e,t),e===null&&Zr(t.stateNode.containerInfo),ge(t),null;case 10:return yu(t.type._context),ge(t),null;case 17:return Fe(t.type)&&Fs(),ge(t),null;case 19:if(W(Y),s=t.memoizedState,s===null)return ge(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)kr(s,!1);else{if(oe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=_s(e),o!==null){for(t.flags|=128,kr(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(Y,Y.current&1|2),t.child}e=e.sibling}s.tail!==null&&ee()>rr&&(t.flags|=128,r=!0,kr(s,!1),t.lanes=4194304)}else{if(!r)if(e=_s(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),kr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!K)return ge(t),null}else 2*ee()-s.renderingStartTime>rr&&n!==1073741824&&(t.flags|=128,r=!0,kr(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ee(),t.sibling=null,n=Y.current,U(Y,r?n&1|2:n&1),t):(ge(t),null);case 22:case 23:return Ru(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?De&1073741824&&(ge(t),t.subtreeFlags&6&&(t.flags|=8192)):ge(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function zy(e,t){switch(hu(t),t.tag){case 1:return Fe(t.type)&&Fs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tr(),W(Pe),W(ye),Su(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ku(t),null;case 13:if(W(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));Zn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(Y),null;case 4:return tr(),null;case 10:return yu(t.type._context),null;case 22:case 23:return Ru(),null;case 24:return null;default:return null}}var Ui=!1,xe=!1,_y=typeof WeakSet=="function"?WeakSet:Set,A=null;function In(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Z(e,t,r)}else n.current=null}function cl(e,t,n){try{n()}catch(r){Z(e,t,r)}}var wd=!1;function Vy(e,t){if(Ga=Es,e=oh(),fu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break t;if(p===n&&++c===i&&(a=o),p===s&&++d===r&&(u=o),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ya={focusedElem:e,selectionRange:n},Es=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,k=y.memoizedState,x=t.stateNode,h=x.getSnapshotBeforeUpdate(t.elementType===t.type?v:Ze(t.type,v),k);x.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(w){Z(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return y=wd,wd=!1,y}function Vr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&cl(t,n,s)}i=i.next}while(i!==r)}}function mo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function dl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function nm(e){var t=e.alternate;t!==null&&(e.alternate=null,nm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ct],delete t[ti],delete t[Xa],delete t[wy],delete t[by])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function rm(e){return e.tag===5||e.tag===3||e.tag===4}function bd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ps));else if(r!==4&&(e=e.child,e!==null))for(fl(e,t,n),e=e.sibling;e!==null;)fl(e,t,n),e=e.sibling}function pl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(pl(e,t,n),e=e.sibling;e!==null;)pl(e,t,n),e=e.sibling}var ce=null,et=!1;function Tt(e,t,n){for(n=n.child;n!==null;)im(e,t,n),n=n.sibling}function im(e,t,n){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(oo,n)}catch{}switch(n.tag){case 5:xe||In(n,t);case 6:var r=ce,i=et;ce=null,Tt(e,t,n),ce=r,et=i,ce!==null&&(et?(e=ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ce.removeChild(n.stateNode));break;case 18:ce!==null&&(et?(e=ce,n=n.stateNode,e.nodeType===8?Qo(e.parentNode,n):e.nodeType===1&&Qo(e,n),qr(e)):Qo(ce,n.stateNode));break;case 4:r=ce,i=et,ce=n.stateNode.containerInfo,et=!0,Tt(e,t,n),ce=r,et=i;break;case 0:case 11:case 14:case 15:if(!xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&cl(n,t,o),i=i.next}while(i!==r)}Tt(e,t,n);break;case 1:if(!xe&&(In(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Z(n,t,a)}Tt(e,t,n);break;case 21:Tt(e,t,n);break;case 22:n.mode&1?(xe=(r=xe)||n.memoizedState!==null,Tt(e,t,n),xe=r):Tt(e,t,n);break;default:Tt(e,t,n)}}function kd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new _y),t.forEach(function(r){var i=Gy.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function qe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:ce=a.stateNode,et=!1;break e;case 3:ce=a.stateNode.containerInfo,et=!0;break e;case 4:ce=a.stateNode.containerInfo,et=!0;break e}a=a.return}if(ce===null)throw Error(T(160));im(s,o,i),ce=null,et=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Z(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)sm(t,e),t=t.sibling}function sm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qe(t,e),ot(e),r&4){try{Vr(3,e,e.return),mo(3,e)}catch(v){Z(e,e.return,v)}try{Vr(5,e,e.return)}catch(v){Z(e,e.return,v)}}break;case 1:qe(t,e),ot(e),r&512&&n!==null&&In(n,n.return);break;case 5:if(qe(t,e),ot(e),r&512&&n!==null&&In(n,n.return),e.flags&32){var i=e.stateNode;try{Kr(i,"")}catch(v){Z(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Np(i,s),_a(a,o);var c=_a(a,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?Mp(i,f):d==="dangerouslySetInnerHTML"?Fp(i,f):d==="children"?Kr(i,f):Zl(i,d,f,c)}switch(a){case"input":Ma(i,s);break;case"textarea":Tp(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Hn(i,!!s.multiple,m,!1):p!==!!s.multiple&&(s.defaultValue!=null?Hn(i,!!s.multiple,s.defaultValue,!0):Hn(i,!!s.multiple,s.multiple?[]:"",!1))}i[ti]=s}catch(v){Z(e,e.return,v)}}break;case 6:if(qe(t,e),ot(e),r&4){if(e.stateNode===null)throw Error(T(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(v){Z(e,e.return,v)}}break;case 3:if(qe(t,e),ot(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qr(t.containerInfo)}catch(v){Z(e,e.return,v)}break;case 4:qe(t,e),ot(e);break;case 13:qe(t,e),ot(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Mu=ee())),r&4&&kd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(xe=(c=xe)||d,qe(t,e),xe=c):qe(t,e),ot(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(A=e,d=e.child;d!==null;){for(f=A=d;A!==null;){switch(p=A,m=p.child,p.tag){case 0:case 11:case 14:case 15:Vr(4,p,p.return);break;case 1:In(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){Z(r,n,v)}}break;case 5:In(p,p.return);break;case 22:if(p.memoizedState!==null){jd(f);continue}}m!==null?(m.return=p,A=m):jd(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Ap("display",o))}catch(v){Z(e,e.return,v)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(v){Z(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:qe(t,e),ot(e),r&4&&kd(e);break;case 21:break;default:qe(t,e),ot(e)}}function ot(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(rm(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Kr(i,""),r.flags&=-33);var s=bd(e);pl(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=bd(e);fl(e,a,o);break;default:throw Error(T(161))}}catch(u){Z(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Iy(e,t,n){A=e,om(e)}function om(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var i=A,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ui;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||xe;a=Ui;var c=xe;if(Ui=o,(xe=u)&&!c)for(A=i;A!==null;)o=A,u=o.child,o.tag===22&&o.memoizedState!==null?Cd(i):u!==null?(u.return=o,A=u):Cd(i);for(;s!==null;)A=s,om(s),s=s.sibling;A=i,Ui=a,xe=c}Sd(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,A=s):Sd(e)}}function Sd(e){for(;A!==null;){var t=A;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:xe||mo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!xe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ze(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&ad(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ad(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&qr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}xe||t.flags&512&&dl(t)}catch(p){Z(t,t.return,p)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function jd(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function Cd(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{mo(4,t)}catch(u){Z(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){Z(t,i,u)}}var s=t.return;try{dl(t)}catch(u){Z(t,s,u)}break;case 5:var o=t.return;try{dl(t)}catch(u){Z(t,o,u)}}}catch(u){Z(t,t.return,u)}if(t===e){A=null;break}var a=t.sibling;if(a!==null){a.return=t.return,A=a;break}A=t.return}}var By=Math.ceil,Bs=Ct.ReactCurrentDispatcher,Fu=Ct.ReactCurrentOwner,We=Ct.ReactCurrentBatchConfig,_=0,ue=null,re=null,pe=0,De=0,Bn=Jt(0),oe=0,ai=null,Sn=0,go=0,Au=0,Ir=null,Ne=null,Mu=0,rr=1/0,gt=null,Os=!1,hl=null,Ut=null,Hi=!1,Lt=null,$s=0,Br=0,ml=null,us=-1,cs=0;function Se(){return _&6?ee():us!==-1?us:us=ee()}function Ht(e){return e.mode&1?_&2&&pe!==0?pe&-pe:Sy.transition!==null?(cs===0&&(cs=Hp()),cs):(e=I,e!==0||(e=window.event,e=e===void 0?16:Xp(e.type)),e):1}function rt(e,t,n,r){if(50<Br)throw Br=0,ml=null,Error(T(185));gi(e,n,r),(!(_&2)||e!==ue)&&(e===ue&&(!(_&2)&&(go|=n),oe===4&&Dt(e,pe)),Ae(e,r),n===1&&_===0&&!(t.mode&1)&&(rr=ee()+500,fo&&Zt()))}function Ae(e,t){var n=e.callbackNode;Sx(e,t);var r=Cs(e,e===ue?pe:0);if(r===0)n!==null&&Rc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Rc(n),t===1)e.tag===0?ky(Ed.bind(null,e)):gh(Ed.bind(null,e)),yy(function(){!(_&6)&&Zt()}),n=null;else{switch(Wp(r)){case 1:n=iu;break;case 4:n=$p;break;case 16:n=js;break;case 536870912:n=Up;break;default:n=js}n=hm(n,am.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function am(e,t){if(us=-1,cs=0,_&6)throw Error(T(327));var n=e.callbackNode;if(Qn()&&e.callbackNode!==n)return null;var r=Cs(e,e===ue?pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Us(e,r);else{t=r;var i=_;_|=2;var s=um();(ue!==e||pe!==t)&&(gt=null,rr=ee()+500,mn(e,t));do try{Uy();break}catch(a){lm(e,a)}while(!0);xu(),Bs.current=s,_=i,re!==null?t=0:(ue=null,pe=0,t=oe)}if(t!==0){if(t===2&&(i=$a(e),i!==0&&(r=i,t=gl(e,i))),t===1)throw n=ai,mn(e,0),Dt(e,r),Ae(e,ee()),n;if(t===6)Dt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Oy(i)&&(t=Us(e,r),t===2&&(s=$a(e),s!==0&&(r=s,t=gl(e,s))),t===1))throw n=ai,mn(e,0),Dt(e,r),Ae(e,ee()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:an(e,Ne,gt);break;case 3:if(Dt(e,r),(r&130023424)===r&&(t=Mu+500-ee(),10<t)){if(Cs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Se(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=qa(an.bind(null,e,Ne,gt),t);break}an(e,Ne,gt);break;case 4:if(Dt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-nt(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*By(r/1960))-r,10<r){e.timeoutHandle=qa(an.bind(null,e,Ne,gt),r);break}an(e,Ne,gt);break;case 5:an(e,Ne,gt);break;default:throw Error(T(329))}}}return Ae(e,ee()),e.callbackNode===n?am.bind(null,e):null}function gl(e,t){var n=Ir;return e.current.memoizedState.isDehydrated&&(mn(e,t).flags|=256),e=Us(e,t),e!==2&&(t=Ne,Ne=n,t!==null&&xl(t)),e}function xl(e){Ne===null?Ne=e:Ne.push.apply(Ne,e)}function Oy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!st(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dt(e,t){for(t&=~Au,t&=~go,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-nt(t),r=1<<n;e[n]=-1,t&=~r}}function Ed(e){if(_&6)throw Error(T(327));Qn();var t=Cs(e,0);if(!(t&1))return Ae(e,ee()),null;var n=Us(e,t);if(e.tag!==0&&n===2){var r=$a(e);r!==0&&(t=r,n=gl(e,r))}if(n===1)throw n=ai,mn(e,0),Dt(e,t),Ae(e,ee()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,an(e,Ne,gt),Ae(e,ee()),null}function Du(e,t){var n=_;_|=1;try{return e(t)}finally{_=n,_===0&&(rr=ee()+500,fo&&Zt())}}function jn(e){Lt!==null&&Lt.tag===0&&!(_&6)&&Qn();var t=_;_|=1;var n=We.transition,r=I;try{if(We.transition=null,I=1,e)return e()}finally{I=r,We.transition=n,_=t,!(_&6)&&Zt()}}function Ru(){De=Bn.current,W(Bn)}function mn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,xy(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(hu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fs();break;case 3:tr(),W(Pe),W(ye),Su();break;case 5:ku(r);break;case 4:tr();break;case 13:W(Y);break;case 19:W(Y);break;case 10:yu(r.type._context);break;case 22:case 23:Ru()}n=n.return}if(ue=e,re=e=Wt(e.current,null),pe=De=t,oe=0,ai=null,Au=go=Sn=0,Ne=Ir=null,dn!==null){for(t=0;t<dn.length;t++)if(n=dn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}dn=null}return e}function lm(e,t){do{var n=re;try{if(xu(),os.current=Is,Vs){for(var r=Q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Vs=!1}if(kn=0,le=se=Q=null,_r=!1,ii=0,Fu.current=null,n===null||n.return===null){oe=1,ai=t,re=null;break}e:{var s=e,o=n.return,a=n,u=t;if(t=pe,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=pd(o);if(m!==null){m.flags&=-257,hd(m,o,a,s,t),m.mode&1&&fd(s,c,t),t=m,u=c;var y=t.updateQueue;if(y===null){var v=new Set;v.add(u),t.updateQueue=v}else y.add(u);break e}else{if(!(t&1)){fd(s,c,t),Lu();break e}u=Error(T(426))}}else if(K&&a.mode&1){var k=pd(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),hd(k,o,a,s,t),mu(nr(u,a));break e}}s=u=nr(u,a),oe!==4&&(oe=2),Ir===null?Ir=[s]:Ir.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var x=Wh(s,u,t);od(s,x);break e;case 1:a=u;var h=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ut===null||!Ut.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var w=Kh(s,a,t);od(s,w);break e}}s=s.return}while(s!==null)}dm(n)}catch(S){t=S,re===n&&n!==null&&(re=n=n.return);continue}break}while(!0)}function um(){var e=Bs.current;return Bs.current=Is,e===null?Is:e}function Lu(){(oe===0||oe===3||oe===2)&&(oe=4),ue===null||!(Sn&268435455)&&!(go&268435455)||Dt(ue,pe)}function Us(e,t){var n=_;_|=2;var r=um();(ue!==e||pe!==t)&&(gt=null,mn(e,t));do try{$y();break}catch(i){lm(e,i)}while(!0);if(xu(),_=n,Bs.current=r,re!==null)throw Error(T(261));return ue=null,pe=0,oe}function $y(){for(;re!==null;)cm(re)}function Uy(){for(;re!==null&&!hx();)cm(re)}function cm(e){var t=pm(e.alternate,e,De);e.memoizedProps=e.pendingProps,t===null?dm(e):re=t,Fu.current=null}function dm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=zy(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{oe=6,re=null;return}}else if(n=Ly(n,t,De),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);oe===0&&(oe=5)}function an(e,t,n){var r=I,i=We.transition;try{We.transition=null,I=1,Hy(e,t,n,r)}finally{We.transition=i,I=r}return null}function Hy(e,t,n,r){do Qn();while(Lt!==null);if(_&6)throw Error(T(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(jx(e,s),e===ue&&(re=ue=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Hi||(Hi=!0,hm(js,function(){return Qn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=We.transition,We.transition=null;var o=I;I=1;var a=_;_|=4,Fu.current=null,Vy(e,n),sm(n,e),cy(Ya),Es=!!Ga,Ya=Ga=null,e.current=n,Iy(n),mx(),_=a,I=o,We.transition=s}else e.current=n;if(Hi&&(Hi=!1,Lt=e,$s=i),s=e.pendingLanes,s===0&&(Ut=null),yx(n.stateNode),Ae(e,ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Os)throw Os=!1,e=hl,hl=null,e;return $s&1&&e.tag!==0&&Qn(),s=e.pendingLanes,s&1?e===ml?Br++:(Br=0,ml=e):Br=0,Zt(),null}function Qn(){if(Lt!==null){var e=Wp($s),t=We.transition,n=I;try{if(We.transition=null,I=16>e?16:e,Lt===null)var r=!1;else{if(e=Lt,Lt=null,$s=0,_&6)throw Error(T(331));var i=_;for(_|=4,A=e.current;A!==null;){var s=A,o=s.child;if(A.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(A=c;A!==null;){var d=A;switch(d.tag){case 0:case 11:case 15:Vr(8,d,s)}var f=d.child;if(f!==null)f.return=d,A=f;else for(;A!==null;){d=A;var p=d.sibling,m=d.return;if(nm(d),d===c){A=null;break}if(p!==null){p.return=m,A=p;break}A=m}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var k=v.sibling;v.sibling=null,v=k}while(v!==null)}}A=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,A=o;else e:for(;A!==null;){if(s=A,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Vr(9,s,s.return)}var x=s.sibling;if(x!==null){x.return=s.return,A=x;break e}A=s.return}}var h=e.current;for(A=h;A!==null;){o=A;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,A=g;else e:for(o=h;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:mo(9,a)}}catch(S){Z(a,a.return,S)}if(a===o){A=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,A=w;break e}A=a.return}}if(_=i,Zt(),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(oo,e)}catch{}r=!0}return r}finally{I=n,We.transition=t}}return!1}function Nd(e,t,n){t=nr(n,t),t=Wh(e,t,1),e=$t(e,t,1),t=Se(),e!==null&&(gi(e,1,t),Ae(e,t))}function Z(e,t,n){if(e.tag===3)Nd(e,e,n);else for(;t!==null;){if(t.tag===3){Nd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ut===null||!Ut.has(r))){e=nr(n,e),e=Kh(t,e,1),t=$t(t,e,1),e=Se(),t!==null&&(gi(t,1,e),Ae(t,e));break}}t=t.return}}function Wy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Se(),e.pingedLanes|=e.suspendedLanes&n,ue===e&&(pe&n)===n&&(oe===4||oe===3&&(pe&130023424)===pe&&500>ee()-Mu?mn(e,0):Au|=n),Ae(e,t)}function fm(e,t){t===0&&(e.mode&1?(t=Ri,Ri<<=1,!(Ri&130023424)&&(Ri=4194304)):t=1);var n=Se();e=St(e,t),e!==null&&(gi(e,t,n),Ae(e,n))}function Ky(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),fm(e,n)}function Gy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),fm(e,n)}var pm;pm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Pe.current)Te=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Te=!1,Ry(e,t,n);Te=!!(e.flags&131072)}else Te=!1,K&&t.flags&1048576&&xh(t,Ds,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ls(e,t),e=t.pendingProps;var i=Jn(t,ye.current);Yn(t,n),i=Cu(null,t,r,e,i,n);var s=Eu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Fe(r)?(s=!0,As(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,wu(t),i.updater=ho,t.stateNode=i,i._reactInternals=t,rl(t,r,e,n),t=ol(null,t,r,!0,s,n)):(t.tag=0,K&&s&&pu(t),we(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ls(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Qy(r),e=Ze(r,e),i){case 0:t=sl(null,t,r,e,n);break e;case 1:t=xd(null,t,r,e,n);break e;case 11:t=md(null,t,r,e,n);break e;case 14:t=gd(null,t,r,Ze(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ze(r,i),sl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ze(r,i),xd(e,t,r,i,n);case 3:e:{if(qh(t),e===null)throw Error(T(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Sh(e,t),zs(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=nr(Error(T(423)),t),t=yd(e,t,r,n,i);break e}else if(r!==i){i=nr(Error(T(424)),t),t=yd(e,t,r,n,i);break e}else for(Re=Ot(t.stateNode.containerInfo.firstChild),Le=t,K=!0,tt=null,n=bh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zn(),r===i){t=jt(e,t,n);break e}we(e,t,r,n)}t=t.child}return t;case 5:return jh(t),e===null&&el(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Qa(r,i)?o=null:s!==null&&Qa(r,s)&&(t.flags|=32),Qh(e,t),we(e,t,o,n),t.child;case 6:return e===null&&el(t),null;case 13:return Xh(e,t,n);case 4:return bu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=er(t,null,r,n):we(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ze(r,i),md(e,t,r,i,n);case 7:return we(e,t,t.pendingProps,n),t.child;case 8:return we(e,t,t.pendingProps.children,n),t.child;case 12:return we(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,U(Rs,r._currentValue),r._currentValue=o,s!==null)if(st(s.value,o)){if(s.children===i.children&&!Pe.current){t=jt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=wt(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),tl(s.return,n,t),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(T(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),tl(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}we(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Yn(t,n),i=Ge(i),r=r(i),t.flags|=1,we(e,t,r,n),t.child;case 14:return r=t.type,i=Ze(r,t.pendingProps),i=Ze(r.type,i),gd(e,t,r,i,n);case 15:return Gh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ze(r,i),ls(e,t),t.tag=1,Fe(r)?(e=!0,As(t)):e=!1,Yn(t,n),Hh(t,r,i),rl(t,r,i,n),ol(null,t,r,!0,e,n);case 19:return Jh(e,t,n);case 22:return Yh(e,t,n)}throw Error(T(156,t.tag))};function hm(e,t){return Op(e,t)}function Yy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ue(e,t,n,r){return new Yy(e,t,n,r)}function zu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qy(e){if(typeof e=="function")return zu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===tu)return 11;if(e===nu)return 14}return 2}function Wt(e,t){var n=e.alternate;return n===null?(n=Ue(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ds(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")zu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Fn:return gn(n.children,i,s,t);case eu:o=8,i|=8;break;case Na:return e=Ue(12,n,t,i|2),e.elementType=Na,e.lanes=s,e;case Ta:return e=Ue(13,n,t,i),e.elementType=Ta,e.lanes=s,e;case Pa:return e=Ue(19,n,t,i),e.elementType=Pa,e.lanes=s,e;case jp:return xo(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case kp:o=10;break e;case Sp:o=9;break e;case tu:o=11;break e;case nu:o=14;break e;case Ft:o=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=Ue(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function gn(e,t,n,r){return e=Ue(7,e,r,t),e.lanes=n,e}function xo(e,t,n,r){return e=Ue(22,e,r,t),e.elementType=jp,e.lanes=n,e.stateNode={isHidden:!1},e}function ra(e,t,n){return e=Ue(6,e,null,t),e.lanes=n,e}function ia(e,t,n){return t=Ue(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function qy(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vo(0),this.expirationTimes=Vo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _u(e,t,n,r,i,s,o,a,u){return e=new qy(e,t,n,a,u),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ue(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wu(s),e}function Xy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function mm(e){if(!e)return Yt;e=e._reactInternals;e:{if(En(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(Fe(n))return mh(e,n,t)}return t}function gm(e,t,n,r,i,s,o,a,u){return e=_u(n,r,!0,e,i,s,o,a,u),e.context=mm(null),n=e.current,r=Se(),i=Ht(n),s=wt(r,i),s.callback=t??null,$t(n,s,i),e.current.lanes=i,gi(e,i,r),Ae(e,r),e}function yo(e,t,n,r){var i=t.current,s=Se(),o=Ht(i);return n=mm(n),t.context===null?t.context=n:t.pendingContext=n,t=wt(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=$t(i,t,o),e!==null&&(rt(e,i,o,s),ss(e,i,o)),o}function Hs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Td(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Vu(e,t){Td(e,t),(e=e.alternate)&&Td(e,t)}function Jy(){return null}var xm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Iu(e){this._internalRoot=e}vo.prototype.render=Iu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));yo(e,t,null,null)};vo.prototype.unmount=Iu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jn(function(){yo(null,e,null,null)}),t[kt]=null}};function vo(e){this._internalRoot=e}vo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Yp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Mt.length&&t!==0&&t<Mt[n].priority;n++);Mt.splice(n,0,e),n===0&&qp(e)}};function Bu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Pd(){}function Zy(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Hs(o);s.call(c)}}var o=gm(t,r,e,0,null,!1,!1,"",Pd);return e._reactRootContainer=o,e[kt]=o.current,Zr(e.nodeType===8?e.parentNode:e),jn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Hs(u);a.call(c)}}var u=_u(e,0,!1,null,null,!1,!1,"",Pd);return e._reactRootContainer=u,e[kt]=u.current,Zr(e.nodeType===8?e.parentNode:e),jn(function(){yo(t,u,n,r)}),u}function bo(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Hs(o);a.call(u)}}yo(t,o,e,i)}else o=Zy(n,t,e,i,r);return Hs(o)}Kp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pr(t.pendingLanes);n!==0&&(su(t,n|1),Ae(t,ee()),!(_&6)&&(rr=ee()+500,Zt()))}break;case 13:jn(function(){var r=St(e,1);if(r!==null){var i=Se();rt(r,e,1,i)}}),Vu(e,1)}};ou=function(e){if(e.tag===13){var t=St(e,134217728);if(t!==null){var n=Se();rt(t,e,134217728,n)}Vu(e,134217728)}};Gp=function(e){if(e.tag===13){var t=Ht(e),n=St(e,t);if(n!==null){var r=Se();rt(n,e,t,r)}Vu(e,t)}};Yp=function(){return I};Qp=function(e,t){var n=I;try{return I=e,t()}finally{I=n}};Ia=function(e,t,n){switch(t){case"input":if(Ma(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=co(r);if(!i)throw Error(T(90));Ep(r),Ma(r,i)}}}break;case"textarea":Tp(e,n);break;case"select":t=n.value,t!=null&&Hn(e,!!n.multiple,t,!1)}};Lp=Du;zp=jn;var e1={usingClientEntryPoint:!1,Events:[yi,Rn,co,Dp,Rp,Du]},Sr={findFiberByHostInstance:cn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},t1={bundleType:Sr.bundleType,version:Sr.version,rendererPackageName:Sr.rendererPackageName,rendererConfig:Sr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ct.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ip(e),e===null?null:e.stateNode},findFiberByHostInstance:Sr.findFiberByHostInstance||Jy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wi.isDisabled&&Wi.supportsFiber)try{oo=Wi.inject(t1),dt=Wi}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e1;Ie.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bu(t))throw Error(T(200));return Xy(e,t,null,n)};Ie.createRoot=function(e,t){if(!Bu(e))throw Error(T(299));var n=!1,r="",i=xm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=_u(e,1,!1,null,null,n,!1,r,i),e[kt]=t.current,Zr(e.nodeType===8?e.parentNode:e),new Iu(t)};Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=Ip(t),e=e===null?null:e.stateNode,e};Ie.flushSync=function(e){return jn(e)};Ie.hydrate=function(e,t,n){if(!wo(t))throw Error(T(200));return bo(null,e,t,!0,n)};Ie.hydrateRoot=function(e,t,n){if(!Bu(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=xm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=gm(t,null,e,1,n??null,i,!1,s,o),e[kt]=t.current,Zr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new vo(t)};Ie.render=function(e,t,n){if(!wo(t))throw Error(T(200));return bo(null,e,t,!1,n)};Ie.unmountComponentAtNode=function(e){if(!wo(e))throw Error(T(40));return e._reactRootContainer?(jn(function(){bo(null,null,e,!1,function(){e._reactRootContainer=null,e[kt]=null})}),!0):!1};Ie.unstable_batchedUpdates=Du;Ie.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!wo(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return bo(e,t,n,!1,r)};Ie.version="18.3.1-next-f1338f8080-20240426";function ym(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ym)}catch(e){console.error(e)}}ym(),yp.exports=Ie;var n1=yp.exports,Fd=n1;Ca.createRoot=Fd.createRoot,Ca.hydrateRoot=Fd.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function li(){return li=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},li.apply(this,arguments)}var zt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(zt||(zt={}));const Ad="popstate";function r1(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return yl("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ws(i)}return s1(t,n,null,e)}function q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ou(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function i1(){return Math.random().toString(36).substr(2,8)}function Md(e,t){return{usr:e.state,key:e.key,idx:t}}function yl(e,t,n,r){return n===void 0&&(n=null),li({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?cr(t):t,{state:n,key:t&&t.key||r||i1()})}function Ws(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function cr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function s1(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=zt.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(li({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=zt.Pop;let k=d(),x=k==null?null:k-c;c=k,u&&u({action:a,location:v.location,delta:x})}function p(k,x){a=zt.Push;let h=yl(v.location,k,x);c=d()+1;let g=Md(h,c),w=v.createHref(h);try{o.pushState(g,"",w)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(w)}s&&u&&u({action:a,location:v.location,delta:1})}function m(k,x){a=zt.Replace;let h=yl(v.location,k,x);c=d();let g=Md(h,c),w=v.createHref(h);o.replaceState(g,"",w),s&&u&&u({action:a,location:v.location,delta:0})}function y(k){let x=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof k=="string"?k:Ws(k);return h=h.replace(/ $/,"%20"),q(x,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,x)}let v={get action(){return a},get location(){return e(i,o)},listen(k){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Ad,f),u=k,()=>{i.removeEventListener(Ad,f),u=null}},createHref(k){return t(i,k)},createURL:y,encodeLocation(k){let x=y(k);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:p,replace:m,go(k){return o.go(k)}};return v}var Dd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Dd||(Dd={}));function o1(e,t,n){return n===void 0&&(n="/"),a1(e,t,n)}function a1(e,t,n,r){let i=typeof t=="string"?cr(t):t,s=ir(i.pathname||"/",n);if(s==null)return null;let o=vm(e);l1(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let c=v1(s);a=x1(o[u],c)}return a}function vm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(q(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Kt([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(q(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),vm(s.children,t,d,c)),!(s.path==null&&!s.index)&&t.push({path:c,score:m1(c,s.index),routesMeta:d})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of wm(s.path))i(s,o,u)}),t}function wm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=wm(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function l1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:g1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const u1=/^:[\w-]+$/,c1=3,d1=2,f1=1,p1=10,h1=-2,Rd=e=>e==="*";function m1(e,t){let n=e.split("/"),r=n.length;return n.some(Rd)&&(r+=h1),t&&(r+=d1),n.filter(i=>!Rd(i)).reduce((i,s)=>i+(u1.test(s)?c1:s===""?f1:p1),r)}function g1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function x1(e,t,n){let{routesMeta:r}=e,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,d=s==="/"?t:t.slice(s.length)||"/",f=vl({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),p=u.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Kt([s,f.pathname]),pathnameBase:j1(Kt([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=Kt([s,f.pathnameBase]))}return o}function vl(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=y1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:p,isOptional:m}=d;if(p==="*"){let v=a[f]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const y=a[f];return m&&!y?c[p]=void 0:c[p]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:e}}function y1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ou(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function v1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ou(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ir(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const w1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,b1=e=>w1.test(e);function k1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?cr(e):e,s;if(n)if(b1(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Ou(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Ld(n.substring(1),"/"):s=Ld(n,t)}else s=t;return{pathname:s,search:C1(r),hash:E1(i)}}function Ld(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function sa(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function S1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function $u(e,t){let n=S1(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Uu(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=cr(e):(i=li({},e),q(!i.pathname||!i.pathname.includes("?"),sa("?","pathname","search",i)),q(!i.pathname||!i.pathname.includes("#"),sa("#","pathname","hash",i)),q(!i.search||!i.search.includes("#"),sa("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=t.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}a=f>=0?t[f]:"/"}let u=k1(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Kt=e=>e.join("/").replace(/\/\/+/g,"/"),j1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),C1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,E1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function N1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const bm=["post","put","patch","delete"];new Set(bm);const T1=["get",...bm];new Set(T1);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ui(){return ui=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ui.apply(this,arguments)}const ko=b.createContext(null),km=b.createContext(null),Et=b.createContext(null),So=b.createContext(null),en=b.createContext({outlet:null,matches:[],isDataRoute:!1}),Sm=b.createContext(null);function P1(e,t){let{relative:n}=t===void 0?{}:t;dr()||q(!1);let{basename:r,navigator:i}=b.useContext(Et),{hash:s,pathname:o,search:a}=jo(e,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Kt([r,o])),i.createHref({pathname:u,search:a,hash:s})}function dr(){return b.useContext(So)!=null}function Nt(){return dr()||q(!1),b.useContext(So).location}function jm(e){b.useContext(Et).static||b.useLayoutEffect(e)}function Cm(){let{isDataRoute:e}=b.useContext(en);return e?$1():F1()}function F1(){dr()||q(!1);let e=b.useContext(ko),{basename:t,future:n,navigator:r}=b.useContext(Et),{matches:i}=b.useContext(en),{pathname:s}=Nt(),o=JSON.stringify($u(i,n.v7_relativeSplatPath)),a=b.useRef(!1);return jm(()=>{a.current=!0}),b.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=Uu(c,JSON.parse(o),s,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Kt([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,o,s,e])}function jo(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=b.useContext(Et),{matches:i}=b.useContext(en),{pathname:s}=Nt(),o=JSON.stringify($u(i,r.v7_relativeSplatPath));return b.useMemo(()=>Uu(e,JSON.parse(o),s,n==="path"),[e,o,s,n])}function A1(e,t){return M1(e,t)}function M1(e,t,n,r){dr()||q(!1);let{navigator:i}=b.useContext(Et),{matches:s}=b.useContext(en),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Nt(),d;if(t){var f;let k=typeof t=="string"?cr(t):t;u==="/"||(f=k.pathname)!=null&&f.startsWith(u)||q(!1),d=k}else d=c;let p=d.pathname||"/",m=p;if(u!=="/"){let k=u.replace(/^\//,"").split("/");m="/"+p.replace(/^\//,"").split("/").slice(k.length).join("/")}let y=o1(e,{pathname:m}),v=_1(y&&y.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:Kt([u,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?u:Kt([u,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),s,n,r);return t&&v?b.createElement(So.Provider,{value:{location:ui({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:zt.Pop}},v):v}function D1(){let e=O1(),t=N1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,null)}const R1=b.createElement(D1,null);class L1 extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?b.createElement(en.Provider,{value:this.props.routeContext},b.createElement(Sm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function z1(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(ko);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(en.Provider,{value:t},r)}function _1(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||q(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:p,errors:m}=n,y=f.route.loader&&p[f.route.id]===void 0&&(!m||m[f.route.id]===void 0);if(f.route.lazy||y){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,p)=>{let m,y=!1,v=null,k=null;n&&(m=a&&f.route.id?a[f.route.id]:void 0,v=f.route.errorElement||R1,u&&(c<0&&p===0?(U1("route-fallback"),y=!0,k=null):c===p&&(y=!0,k=f.route.hydrateFallbackElement||null)));let x=t.concat(o.slice(0,p+1)),h=()=>{let g;return m?g=v:y?g=k:f.route.Component?g=b.createElement(f.route.Component,null):f.route.element?g=f.route.element:g=d,b.createElement(z1,{match:f,routeContext:{outlet:d,matches:x,isDataRoute:n!=null},children:g})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?b.createElement(L1,{location:n.location,revalidation:n.revalidation,component:v,error:m,children:h(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):h()},null)}var Em=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Em||{}),Nm=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Nm||{});function V1(e){let t=b.useContext(ko);return t||q(!1),t}function I1(e){let t=b.useContext(km);return t||q(!1),t}function B1(e){let t=b.useContext(en);return t||q(!1),t}function Tm(e){let t=B1(),n=t.matches[t.matches.length-1];return n.route.id||q(!1),n.route.id}function O1(){var e;let t=b.useContext(Sm),n=I1(),r=Tm();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function $1(){let{router:e}=V1(Em.UseNavigateStable),t=Tm(Nm.UseNavigateStable),n=b.useRef(!1);return jm(()=>{n.current=!0}),b.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ui({fromRouteId:t},s)))},[e,t])}const zd={};function U1(e,t,n){zd[e]||(zd[e]=!0)}function H1(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function W1(e){let{to:t,replace:n,state:r,relative:i}=e;dr()||q(!1);let{future:s,static:o}=b.useContext(Et),{matches:a}=b.useContext(en),{pathname:u}=Nt(),c=Cm(),d=Uu(t,$u(a,s.v7_relativeSplatPath),u,i==="path"),f=JSON.stringify(d);return b.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function ln(e){q(!1)}function K1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=zt.Pop,navigator:s,static:o=!1,future:a}=e;dr()&&q(!1);let u=t.replace(/^\/*/,"/"),c=b.useMemo(()=>({basename:u,navigator:s,static:o,future:ui({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=cr(r));let{pathname:d="/",search:f="",hash:p="",state:m=null,key:y="default"}=r,v=b.useMemo(()=>{let k=ir(d,u);return k==null?null:{location:{pathname:k,search:f,hash:p,state:m,key:y},navigationType:i}},[u,d,f,p,m,y,i]);return v==null?null:b.createElement(Et.Provider,{value:c},b.createElement(So.Provider,{children:n,value:v}))}function G1(e){let{children:t,location:n}=e;return A1(wl(t),n)}new Promise(()=>{});function wl(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let s=[...t,i];if(r.type===b.Fragment){n.push.apply(n,wl(r.props.children,s));return}r.type!==ln&&q(!1),!r.props.index||!r.props.children||q(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=wl(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ks(){return Ks=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ks.apply(this,arguments)}function Pm(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Y1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Q1(e,t){return e.button===0&&(!t||t==="_self")&&!Y1(e)}const q1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],X1=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],J1="6";try{window.__reactRouterVersion=J1}catch{}const Z1=b.createContext({isTransitioning:!1}),ev="startTransition",_d=W0[ev];function tv(e){let{basename:t,children:n,future:r,window:i}=e,s=b.useRef();s.current==null&&(s.current=r1({window:i,v5Compat:!0}));let o=s.current,[a,u]=b.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=b.useCallback(f=>{c&&_d?_d(()=>u(f)):u(f)},[u,c]);return b.useLayoutEffect(()=>o.listen(d),[o,d]),b.useEffect(()=>H1(r),[r]),b.createElement(K1,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const nv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",rv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,iv=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:c,preventScrollReset:d,viewTransition:f}=t,p=Pm(t,q1),{basename:m}=b.useContext(Et),y,v=!1;if(typeof c=="string"&&rv.test(c)&&(y=c,nv))try{let g=new URL(window.location.href),w=c.startsWith("//")?new URL(g.protocol+c):new URL(c),S=ir(w.pathname,m);w.origin===g.origin&&S!=null?c=S+w.search+w.hash:v=!0}catch{}let k=P1(c,{relative:i}),x=ov(c,{replace:o,state:a,target:u,preventScrollReset:d,relative:i,viewTransition:f});function h(g){r&&r(g),g.defaultPrevented||x(g)}return b.createElement("a",Ks({},p,{href:y||k,onClick:v||s?r:h,ref:n,target:u}))}),Hu=b.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:u,viewTransition:c,children:d}=t,f=Pm(t,X1),p=jo(u,{relative:f.relative}),m=Nt(),y=b.useContext(km),{navigator:v,basename:k}=b.useContext(Et),x=y!=null&&av(p)&&c===!0,h=v.encodeLocation?v.encodeLocation(p).pathname:p.pathname,g=m.pathname,w=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(g=g.toLowerCase(),w=w?w.toLowerCase():null,h=h.toLowerCase()),w&&k&&(w=ir(w,k)||w);const S=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let E=g===h||!o&&g.startsWith(h)&&g.charAt(S)==="/",j=w!=null&&(w===h||!o&&w.startsWith(h)&&w.charAt(h.length)==="/"),C={isActive:E,isPending:j,isTransitioning:x},F=E?r:void 0,N;typeof s=="function"?N=s(C):N=[s,E?"active":null,j?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let L=typeof a=="function"?a(C):a;return b.createElement(iv,Ks({},f,{"aria-current":F,className:N,ref:n,style:L,to:u,viewTransition:c}),typeof d=="function"?d(C):d)});var bl;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(bl||(bl={}));var Vd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Vd||(Vd={}));function sv(e){let t=b.useContext(ko);return t||q(!1),t}function ov(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=t===void 0?{}:t,u=Cm(),c=Nt(),d=jo(e,{relative:o});return b.useCallback(f=>{if(Q1(f,n)){f.preventDefault();let p=r!==void 0?r:Ws(c)===Ws(d);u(e,{replace:p,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[c,u,d,r,i,n,e,s,o,a])}function av(e,t){t===void 0&&(t={});let n=b.useContext(Z1);n==null&&q(!1);let{basename:r}=sv(bl.useViewTransitionState),i=jo(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=ir(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=ir(n.nextLocation.pathname,r)||n.nextLocation.pathname;return vl(i.pathname,o)!=null||vl(i.pathname,s)!=null}const ze="https://jotnosathi-backe.onrender.com",Wu=["Barishal","Chattogram","Dhaka","Khulna","Mymensingh","Rajshahi","Rangpur","Sylhet"],wi={dengue:{color:"#e65100",icon:"🦟",report_type:"outbreak",label:"Dengue — feeds risk map",fields:[{id:"fever_days",label:"Days of fever",type:"number",placeholder:"e.g. 4",min:1,max:14},{id:"rash_present",label:"Rash present?",type:"select",options:[["","Select..."],["true","Yes"],["false","No"]]},{id:"bleeding",label:"Bleeding signs?",type:"select",options:[["","Select..."],["true","Yes — gums/nose"],["false","No"]]}]},measles:{color:"#c62828",icon:"🔴",report_type:"outbreak",label:"Measles — feeds risk map (ACTIVE OUTBREAK 2026)",fields:[{id:"fever_days",label:"Days of fever",type:"number",placeholder:"e.g. 3",min:1,max:14},{id:"rash_present",label:"Rash present?",type:"select",options:[["","Select..."],["true","Yes"],["false","No"]]},{id:"vaccination_status",label:"Vaccination status",type:"select",options:[["","Select..."],["unvaccinated","Unvaccinated"],["vaccinated","Vaccinated"],["partial","Partially vaccinated"],["unknown","Unknown"]]}]},maternal:{color:"#7b1fa2",icon:"🤰",report_type:"registry",label:"Maternal — adds to case registry",fields:[{id:"week",label:"Gestational week",type:"number",placeholder:"e.g. 28",min:1,max:42},{id:"complication_type",label:"Complication type",type:"select",options:[["","Select..."],["bleeding","Bleeding"],["hypertension","Hypertension / Pre-eclampsia"],["no_fetal_movement","No fetal movement"],["preterm_labour","Preterm labour"],["other","Other"]]}]},diabetes:{color:"#1565c0",icon:"🩸",report_type:"registry",label:"Diabetes — adds to case registry",fields:[{id:"fasting_glucose",label:"Fasting glucose (mmol/L)",type:"number",placeholder:"e.g. 7.2",step:"0.1"},{id:"hba1c",label:"HbA1c % (if available)",type:"number",placeholder:"e.g. 6.8",step:"0.1"}]},bp:{color:"#00695c",icon:"💊",report_type:"registry",label:"Blood Pressure — adds to case registry",fields:[{id:"systolic",label:"Systolic (mmHg)",type:"number",placeholder:"e.g. 145",min:60,max:250},{id:"diastolic",label:"Diastolic (mmHg)",type:"number",placeholder:"e.g. 95",min:40,max:150}]}},Fm={CRITICAL:"#c62828",HIGH:"#e65100",MODERATE:"#f57f17",LOW:"#2e7d32"},jr=[{name:"Dhaka Medical College Hospital",lat:23.7261,lng:90.3961,type:"tertiary"},{name:"Sir Salimullah Medical College",lat:23.7099,lng:90.4072,type:"tertiary"},{name:"Gazipur Sadar Hospital",lat:23.9999,lng:90.4203,type:"district"},{name:"Narayanganj District Hospital",lat:23.6238,lng:90.4998,type:"district"},{name:"Manikganj District Hospital",lat:23.8634,lng:89.9816,type:"district"},{name:"Munshiganj District Hospital",lat:23.5423,lng:90.5302,type:"district"},{name:"Narsingdi District Hospital",lat:23.9215,lng:90.7152,type:"district"},{name:"Tangail District Hospital",lat:24.2512,lng:89.9167,type:"district"},{name:"Chittagong Medical College",lat:22.3569,lng:91.8313,type:"tertiary"},{name:"Cox's Bazar District Hospital",lat:21.4272,lng:92.0058,type:"district"},{name:"Cumilla District Hospital",lat:23.4607,lng:91.1809,type:"district"},{name:"Feni District Hospital",lat:23.0159,lng:91.3976,type:"district"},{name:"Sylhet MAG Osmani Hospital",lat:24.8949,lng:91.8687,type:"tertiary"},{name:"Sunamganj District Hospital",lat:24.8815,lng:91.3968,type:"district"},{name:"Moulvibazar District Hospital",lat:24.4826,lng:91.7774,type:"district"},{name:"Rajshahi Medical College",lat:24.3745,lng:88.6042,type:"tertiary"},{name:"Bogura District Hospital",lat:24.8465,lng:89.3773,type:"district"},{name:"Pabna District Hospital",lat:24.0064,lng:89.2372,type:"district"},{name:"Rangpur Medical College",lat:25.7439,lng:89.2752,type:"tertiary"},{name:"Dinajpur District Hospital",lat:25.6217,lng:88.6354,type:"district"},{name:"Kurigram District Hospital",lat:25.8073,lng:89.6364,type:"district"},{name:"Mymensingh Medical College",lat:24.7471,lng:90.4203,type:"tertiary"},{name:"Netrokona District Hospital",lat:24.8703,lng:90.7279,type:"district"},{name:"Jamalpur District Hospital",lat:24.9375,lng:89.9371,type:"district"},{name:"Khulna Medical College",lat:22.8456,lng:89.5403,type:"tertiary"},{name:"Jashore District Hospital",lat:23.1664,lng:89.2081,type:"district"},{name:"Satkhira District Hospital",lat:22.7185,lng:89.0705,type:"district"},{name:"Sher-E-Bangla Medical College",lat:22.701,lng:90.3696,type:"tertiary"},{name:"Patuakhali District Hospital",lat:22.3596,lng:90.3296,type:"district"},{name:"Bhola District Hospital",lat:22.686,lng:90.6481,type:"district"}],fs="/assets/jotno-Cksux5sZ.png",lv=`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;700;800&display=swap');

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
}

.auth-root {
  min-height: 100vh;
  background: linear-gradient(160deg, #0c1f2e 0%, #0F3D38 50%, #0c4a43 100%);
  display: flex; align-items: center; justify-content: center;
  padding: 24px;
  position: relative;
  overflow: hidden;
}

.auth-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(15,118,110,0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(15,118,110,0.07) 1px, transparent 1px);
  background-size: 48px 48px;
  pointer-events: none;
}
.auth-orb {
  position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none;
}
.auth-orb-1 {
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(15,118,110,0.3) 0%, transparent 70%);
  top: -120px; left: -80px;
}
.auth-orb-2 {
  width: 280px; height: 280px;
  background: radial-gradient(circle, rgba(20,184,166,0.18) 0%, transparent 70%);
  bottom: -60px; right: -40px;
}

.auth-card {
  position: relative; z-index: 10;
  width: 100%; max-width: 440px;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 24px 64px rgba(0,0,0,0.3);
}

/* Header */
.auth-header {
  background: linear-gradient(135deg, #0F766E, #115E59);
  padding: 28px 32px 24px;
}
.auth-header-top {
  display: flex; align-items: center; gap: 12px; margin-bottom: 20px;
}
.auth-logo-mark {
  width: 40px; height: 40px; border-radius: 11px;
  background: rgba(255,255,255,0.15);
  display: flex; align-items: center; justify-content: center;
  font-size: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}
.auth-logo-name {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 17px; font-weight: 800; color: white; letter-spacing: -0.3px;
}
.auth-logo-sub { font-size: 11px; color: rgba(255,255,255,0.55); margin-top: 1px; }
.auth-header-badge {
  margin-left: auto;
  font-size: 10px; font-weight: 600;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.2);
  color: rgba(255,255,255,0.85);
  padding: 4px 10px; border-radius: 20px;
}

/* Tab toggle */
.auth-tabs {
  display: flex;
  background: rgba(0,0,0,0.15);
  border-radius: 10px;
  padding: 3px;
}
.auth-tab {
  flex: 1; padding: 8px;
  font-size: 13px; font-weight: 600;
  border: none; border-radius: 8px; cursor: pointer;
  transition: all 160ms ease;
  font-family: 'Inter', sans-serif;
}
.auth-tab-active {
  background: white; color: #0F766E;
  box-shadow: 0 1px 4px rgba(0,0,0,0.12);
}
.auth-tab-inactive {
  background: transparent; color: rgba(255,255,255,0.65);
}

/* Body */
.auth-body { padding: 28px 32px 32px; }

.auth-field { margin-bottom: 16px; }
.auth-label {
  display: block; font-size: 12.5px; font-weight: 600;
  color: #374151; margin-bottom: 6px;
}
.auth-input {
  width: 100%; padding: 11px 14px;
  border: 1.5px solid #E5E7EB;
  border-radius: 10px;
  font-size: 14px; color: #0F172A;
  font-family: 'Inter', sans-serif;
  transition: border-color 150ms, box-shadow 150ms;
  outline: none;
  background: #FAFAFA;
}
.auth-input:focus {
  border-color: #0F766E;
  box-shadow: 0 0 0 3px rgba(15,118,110,0.1);
  background: white;
}
.auth-select {
  width: 100%; padding: 11px 14px;
  border: 1.5px solid #E5E7EB;
  border-radius: 10px;
  font-size: 14px; color: #0F172A;
  font-family: 'Inter', sans-serif;
  transition: border-color 150ms, box-shadow 150ms;
  outline: none;
  background: #FAFAFA;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  padding-right: 38px;
}
.auth-select:focus {
  border-color: #0F766E;
  box-shadow: 0 0 0 3px rgba(15,118,110,0.1);
  background-color: white;
}

.auth-btn {
  width: 100%; padding: 13px;
  background: linear-gradient(135deg, #0F766E, #115E59);
  color: white; font-size: 15px; font-weight: 700;
  border: none; border-radius: 11px; cursor: pointer;
  font-family: 'Inter', sans-serif;
  transition: all 160ms ease;
  margin-top: 8px;
  display: flex; align-items: center; justify-content: center; gap: 8px;
  box-shadow: 0 4px 14px rgba(15,118,110,0.35);
}
.auth-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(15,118,110,0.45); }
.auth-btn:active { transform: translateY(0); }
.auth-btn:disabled { opacity: 0.65; cursor: not-allowed; transform: none; }

.auth-error {
  background: #FEF2F2; border: 1px solid #FECACA;
  color: #DC2626; font-size: 13px; font-weight: 500;
  padding: 10px 14px; border-radius: 8px;
  margin-bottom: 14px;
  display: flex; align-items: center; gap: 7px;
}
.auth-success {
  background: #F0FDFA; border: 1px solid #99F6E4;
  color: #0F766E; font-size: 13px; font-weight: 500;
  padding: 10px 14px; border-radius: 8px;
  margin-bottom: 14px;
  display: flex; align-items: center; gap: 7px;
}

.auth-divider {
  display: flex; align-items: center; gap: 10px;
  margin: 16px 0;
}
.auth-divider-line { flex: 1; height: 1px; background: #E5E7EB; }
.auth-divider-text { font-size: 12px; color: #9CA3AF; font-weight: 500; }

.auth-back {
  text-align: center; margin-top: 18px;
  font-size: 13px; color: #64748B;
}
.auth-back-btn {
  background: none; border: none; cursor: pointer;
  color: #0F766E; font-weight: 600; font-size: 13px;
  font-family: 'Inter', sans-serif;
  text-decoration: underline; padding: 0;
}

/* Bangla note */
.auth-bn {
  background: #F0FDFA;
  border-left: 3px solid #0F766E;
  padding: 10px 14px;
  border-radius: 0 8px 8px 0;
  margin-top: 20px;
}
.auth-bn-main { font-size: 13px; font-weight: 600; color: #0F766E; }
.auth-bn-sub  { font-size: 11px; color: #64748B; margin-top: 2px; }
`;function uv({onLogin:e,onBack:t}){const[n,r]=b.useState("login"),[i,s]=b.useState(""),[o,a]=b.useState(""),[u,c]=b.useState("Dhaka"),[d,f]=b.useState(""),[p,m]=b.useState(""),[y,v]=b.useState(!1);async function k(){f(""),v(!0);try{const g=new URLSearchParams({username:i,password:o,grant_type:"password"}),w=await fetch(`${ze}/auth/login`,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:g});if(w.ok){const S=await w.json();localStorage.setItem("token",S.access_token),e()}else f("Invalid username or password")}catch{f("Could not connect to server")}v(!1)}async function x(){if(f(""),m(""),v(!0),!i||!o){f("Please fill in all fields"),v(!1);return}try{const g=await fetch(`${ze}/auth/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:i,password:o,division:u})});if(g.ok){m("Account created! Signing you in…");const w=new URLSearchParams({username:i,password:o,grant_type:"password"}),S=await fetch(`${ze}/auth/login`,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:w});if(S.ok){const E=await S.json();localStorage.setItem("token",E.access_token),setTimeout(()=>e(),800)}}else{const w=await g.json();f(w.detail||"Registration failed")}}catch{f("Could not connect to server")}v(!1)}function h(g){g.key==="Enter"&&(n==="login"?k():x())}return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:lv}),l.jsxs("div",{className:"auth-root",children:[l.jsx("div",{className:"auth-grid"}),l.jsx("div",{className:"auth-orb auth-orb-1"}),l.jsx("div",{className:"auth-orb auth-orb-2"}),l.jsxs("div",{className:"auth-card",children:[l.jsxs("div",{className:"auth-header",children:[l.jsxs("div",{className:"auth-header-top",children:[l.jsx("div",{className:"auth-logo-mark",children:"🏥"}),l.jsxs("div",{children:[l.jsx("div",{className:"auth-logo-name",children:"JotnoSathi"}),l.jsx("div",{className:"auth-logo-sub",children:"AI Clinical Decision Support"})]}),l.jsx("div",{className:"auth-header-badge",children:"BuildFest 2026"})]}),l.jsxs("div",{className:"auth-tabs",children:[l.jsx("button",{className:`auth-tab ${n==="login"?"auth-tab-active":"auth-tab-inactive"}`,onClick:()=>{r("login"),f(""),m("")},children:"Sign In"}),l.jsx("button",{className:`auth-tab ${n==="signup"?"auth-tab-active":"auth-tab-inactive"}`,onClick:()=>{r("signup"),f(""),m("")},children:"Create Account"})]})]}),l.jsxs("div",{className:"auth-body",children:[d&&l.jsxs("div",{className:"auth-error",children:["⚠ ",d]}),p&&l.jsxs("div",{className:"auth-success",children:["✓ ",p]}),l.jsxs("div",{className:"auth-field",children:[l.jsx("label",{className:"auth-label",children:"Username"}),l.jsx("input",{className:"auth-input",placeholder:"e.g. raisa",value:i,onChange:g=>s(g.target.value),onKeyDown:h,autoFocus:!0})]}),l.jsxs("div",{className:"auth-field",children:[l.jsx("label",{className:"auth-label",children:"Password"}),l.jsx("input",{className:"auth-input",type:"password",placeholder:"••••••••",value:o,onChange:g=>a(g.target.value),onKeyDown:h})]}),n==="signup"&&l.jsxs("div",{className:"auth-field",children:[l.jsx("label",{className:"auth-label",children:"Division"}),l.jsx("select",{className:"auth-select",value:u,onChange:g=>c(g.target.value),children:Wu.map(g=>l.jsx("option",{children:g},g))})]}),l.jsx("button",{className:"auth-btn",onClick:n==="login"?k:x,disabled:y,children:y?"…":n==="login"?"→ Sign In":"→ Create Account"}),l.jsxs("div",{className:"auth-bn",children:[l.jsx("div",{className:"auth-bn-main",children:"তুমি একজন সহায়তাকারী, রোগ নির্ণয় করছ না।"}),l.jsx("div",{className:"auth-bn-sub",children:"You are assisting, not diagnosing · For Shasthya Shebikas only"})]}),t&&l.jsx("div",{className:"auth-back",children:l.jsx("button",{className:"auth-back-btn",onClick:t,children:"← Back to home"})})]})]})]})]})}const cv=`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;700;800&display=swap');

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: 'Inter', sans-serif;
  background: #F8FAFC;
  color: #0F172A;
  -webkit-font-smoothing: antialiased;
}

.land-root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(160deg, #0c1f2e 0%, #0F3D38 45%, #0c4a43 100%);
  position: relative;
  overflow: hidden;
}

/* ── Background grid ── */
.land-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(15,118,110,0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(15,118,110,0.08) 1px, transparent 1px);
  background-size: 48px 48px;
  pointer-events: none;
}

/* ── Glow orbs ── */
.land-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}
.land-orb-1 {
  width: 480px; height: 480px;
  background: radial-gradient(circle, rgba(15,118,110,0.35) 0%, transparent 70%);
  top: -120px; left: -100px;
}
.land-orb-2 {
  width: 320px; height: 320px;
  background: radial-gradient(circle, rgba(20,184,166,0.2) 0%, transparent 70%);
  bottom: 80px; right: -60px;
}

/* ── Nav ── */
.land-nav {
  position: relative; z-index: 10;
  display: flex; align-items: center;
  padding: 20px 40px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
@media (max-width: 600px) { .land-nav { padding: 16px 20px; } }

.land-nav-logo {
  display: flex; align-items: center; gap: 10px;
}
.land-nav-mark {
  width: 36px; height: 36px;
  border-radius: 10px;
  overflow: hidden;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 2px 12px rgba(15,118,110,0.5);
}
.land-nav-name {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 18px; font-weight: 800;
  color: white; letter-spacing: -0.3px;
}
.land-nav-sub {
  font-size: 10px; color: rgba(255,255,255,0.45);
  margin-top: 1px;
}
.land-nav-badge {
  margin-left: auto;
  font-size: 10.5px; font-weight: 600;
  background: rgba(15,118,110,0.3);
  border: 1px solid rgba(15,118,110,0.5);
  color: #5eead4;
  padding: 4px 12px; border-radius: 20px;
}

/* ── Hero ── */
.land-hero {
  position: relative; z-index: 10;
  flex: 1;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  text-align: center;
  padding: 60px 24px 40px;
  gap: 32px;
}

.land-pill {
  display: inline-flex; align-items: center; gap: 7px;
  background: rgba(15,118,110,0.2);
  border: 1px solid rgba(15,118,110,0.4);
  color: #5eead4;
  font-size: 12px; font-weight: 600;
  padding: 6px 16px; border-radius: 20px;
  letter-spacing: 0.3px;
}
.land-pill-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: #2dd4bf;
  animation: pulse-dot 2s ease-in-out infinite;
}
@keyframes pulse-dot {
  0%,100% { box-shadow: 0 0 0 0 rgba(45,212,191,0.4); }
  50%      { box-shadow: 0 0 0 5px rgba(45,212,191,0); }
}

.land-headline {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(36px, 6vw, 64px);
  font-weight: 800;
  color: white;
  line-height: 1.1;
  letter-spacing: -1.5px;
  max-width: 720px;
}
.land-headline-accent {
  background: linear-gradient(135deg, #2dd4bf, #0F766E);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.land-sub {
  font-size: clamp(15px, 2vw, 18px);
  color: rgba(255,255,255,0.55);
  max-width: 520px;
  line-height: 1.7;
}

.land-cta-group {
  display: flex; gap: 12px; flex-wrap: wrap;
  justify-content: center;
}

.land-btn-primary {
  display: inline-flex; align-items: center; gap: 8px;
  background: linear-gradient(135deg, #0F766E, #0d5c56);
  color: white; font-size: 15px; font-weight: 700;
  padding: 14px 32px; border-radius: 12px; border: none;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(15,118,110,0.5);
  transition: all 180ms ease;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
}
.land-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(15,118,110,0.6);
}
.land-btn-primary svg { width: 18px; height: 18px; }

.land-btn-secondary {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  color: rgba(255,255,255,0.85); font-size: 15px; font-weight: 600;
  padding: 14px 28px; border-radius: 12px;
  cursor: pointer; transition: all 180ms ease;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
}
.land-btn-secondary:hover {
  background: rgba(255,255,255,0.13);
  border-color: rgba(255,255,255,0.25);
}

/* ── Stats strip ── */
.land-stats {
  position: relative; z-index: 10;
  display: flex; justify-content: center;
  gap: 0; flex-wrap: wrap;
  padding: 0 24px 24px;
}
.land-stat {
  padding: 20px 40px;
  text-align: center;
  border-right: 1px solid rgba(255,255,255,0.07);
}
.land-stat:last-child { border-right: none; }
@media (max-width: 600px) {
  .land-stat { padding: 14px 24px; border-right: none; border-bottom: 1px solid rgba(255,255,255,0.07); width: 50%; }
}
.land-stat-num {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 26px; font-weight: 800; color: #2dd4bf;
  letter-spacing: -0.5px;
}
.land-stat-label {
  font-size: 11.5px; color: rgba(255,255,255,0.4);
  margin-top: 3px; font-weight: 500;
}

/* ── Feature cards ── */
.land-features {
  position: relative; z-index: 10;
  background: #F8FAFC;
  padding: 64px 40px;
}
@media (max-width: 600px) { .land-features { padding: 40px 20px; } }

.land-features-title {
  text-align: center;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(24px, 4vw, 36px); font-weight: 800;
  color: #0F172A; letter-spacing: -0.8px;
  margin-bottom: 8px;
}
.land-features-sub {
  text-align: center; font-size: 15px;
  color: #64748B; margin-bottom: 48px;
}

.land-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px; max-width: 1000px; margin: 0 auto;
}

.land-card {
  background: white;
  border: 1px solid #E2E8F0;
  border-radius: 16px;
  padding: 28px 24px;
  transition: all 200ms ease;
}
.land-card:hover {
  box-shadow: 0 8px 30px rgba(15,118,110,0.1);
  border-color: rgba(15,118,110,0.25);
  transform: translateY(-2px);
}
.land-card-icon {
  width: 44px; height: 44px; border-radius: 12px;
  background: #F0FDFA;
  display: flex; align-items: center; justify-content: center;
  font-size: 22px; margin-bottom: 16px;
}
.land-card-title {
  font-size: 15px; font-weight: 700; color: #0F172A;
  margin-bottom: 6px;
}
.land-card-desc {
  font-size: 13px; color: #64748B; line-height: 1.65;
}

/* ── Diseases banner ── */
.land-diseases {
  position: relative; z-index: 10;
  background: white;
  border-top: 1px solid #E2E8F0;
  border-bottom: 1px solid #E2E8F0;
  padding: 40px;
  text-align: center;
}
.land-diseases-title {
  font-size: 13px; font-weight: 600; color: #64748B;
  letter-spacing: 1px; text-transform: uppercase;
  margin-bottom: 24px;
}
.land-disease-chips {
  display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;
}
.land-chip {
  display: inline-flex; align-items: center; gap: 7px;
  background: #F8FAFC; border: 1px solid #E2E8F0;
  border-radius: 20px; padding: 8px 16px;
  font-size: 13px; font-weight: 600; color: #334155;
}

/* ── CTA section ── */
.land-cta-section {
  position: relative; z-index: 10;
  background: linear-gradient(135deg, #0F3D38, #0c4a43);
  padding: 80px 40px;
  text-align: center;
  overflow: hidden;
}
.land-cta-section::before {
  content: '';
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(15,118,110,0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(15,118,110,0.1) 1px, transparent 1px);
  background-size: 40px 40px;
}
.land-cta-inner { position: relative; z-index: 1; }
.land-cta-title {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(28px, 4vw, 44px); font-weight: 800;
  color: white; letter-spacing: -1px; margin-bottom: 12px;
}
.land-cta-sub {
  font-size: 16px; color: rgba(255,255,255,0.55);
  margin-bottom: 36px;
}

/* ── Footer ── */
.land-footer {
  background: #0c1f2e;
  padding: 24px 40px;
  display: flex; align-items: center; justify-content: space-between;
  flex-wrap: wrap; gap: 12px;
  border-top: 1px solid rgba(255,255,255,0.06);
}
.land-footer-left {
  font-size: 12px; color: rgba(255,255,255,0.3);
}
.land-footer-right {
  font-size: 11px; color: rgba(255,255,255,0.2);
  font-family: 'DM Mono', monospace;
}

/* ── Bangla hero note ── */
.land-bn-note {
  display: inline-block;
  background: rgba(15,118,110,0.15);
  border: 1px solid rgba(15,118,110,0.3);
  border-radius: 10px;
  padding: 12px 20px;
  font-size: 14px; color: #5eead4;
  font-style: italic;
}
`;function dv({onGetStarted:e,onLogin:t}){return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:cv}),l.jsxs("div",{className:"land-root",children:[l.jsx("div",{className:"land-grid"}),l.jsx("div",{className:"land-orb land-orb-1"}),l.jsx("div",{className:"land-orb land-orb-2"}),l.jsxs("nav",{className:"land-nav",children:[l.jsxs("div",{className:"land-nav-logo",children:[l.jsx("div",{className:"land-nav-mark",children:l.jsx("img",{src:fs,alt:"JotnoSathi",style:{width:36,height:36,objectFit:"contain"}})}),l.jsxs("div",{children:[l.jsx("div",{className:"land-nav-name",children:"JotnoSathi"}),l.jsx("div",{className:"land-nav-sub",children:"AI Health Assistant"})]})]}),l.jsx("span",{className:"land-nav-badge",children:"BuildFest 2026"})]}),l.jsxs("section",{className:"land-hero",children:[l.jsxs("div",{className:"land-pill",children:[l.jsx("span",{className:"land-pill-dot"}),l.jsx("img",{src:fs,alt:"JotnoSathi",style:{width:28,height:28,objectFit:"contain"}}),"Live · JotnoSathi"]}),l.jsxs("h1",{className:"land-headline",children:["AI-powered health",l.jsx("br",{}),l.jsx("span",{className:"land-headline-accent",children:"triage for Bangladesh"})]}),l.jsx("p",{className:"land-sub",children:"Helping 13,000+ Shasthya Shebikas detect disease outbreaks, triage patients in Bangla, and update district risk models — in real time."}),l.jsx("div",{className:"land-bn-note",children:"তুমি একজন সহায়তাকারী, রোগ নির্ণয় করছ না।"}),l.jsxs("div",{className:"land-cta-group",children:[l.jsxs("button",{className:"land-btn-primary",onClick:e,children:[l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}),l.jsx("circle",{cx:"9",cy:"7",r:"4"}),l.jsx("line",{x1:"19",y1:"8",x2:"19",y2:"14"}),l.jsx("line",{x1:"22",y1:"11",x2:"16",y2:"11"})]}),"Create Account"]}),l.jsx("button",{className:"land-btn-secondary",onClick:t,children:"Sign In →"})]})]}),l.jsx("div",{className:"land-stats",children:[{num:"13,000+",label:"Shasthya Shebikas"},{num:"8",label:"WHO/MSF Guidelines"},{num:"5",label:"Disease Domains"},{num:"<10s",label:"AI Response Time"}].map(n=>l.jsxs("div",{className:"land-stat",children:[l.jsx("div",{className:"land-stat-num",children:n.num}),l.jsx("div",{className:"land-stat-label",children:n.label})]},n.label))})]}),l.jsxs("section",{className:"land-features",children:[l.jsx("h2",{className:"land-features-title",children:"Built for frontline workers"}),l.jsx("p",{className:"land-features-sub",children:"Everything a Shebika needs, grounded in real WHO data"}),l.jsx("div",{className:"land-cards",children:[{icon:"🧠",title:"Bangla Triage AI",desc:"Type symptoms in Bangla or English. LLaMA 3.3 70B via Groq delivers clinical advice in under 10 seconds."},{icon:"🗺️",title:"Live District Risk Map",desc:"Choropleth risk scores for all 8 divisions. Auto-updates when field reports reach the retraining threshold."},{icon:"🔄",title:"Self-Learning Model",desc:"Every 5 outbreak reports trigger a genuine model refit. The system gets smarter with every case filed."},{icon:"📋",title:"Auto Field Reports",desc:"Triage silently generates a structured field report in the background — zero extra work for the worker."},{icon:"🏥",title:"30 Referral Hospitals",desc:"Live map of district and tertiary hospitals across all divisions, ready for immediate referral routing."},{icon:"🔒",title:"Ethics First",desc:"Mandatory disclaimer every session. Assists not diagnoses. Protocol-grounded, explainable output."}].map(n=>l.jsxs("div",{className:"land-card",children:[l.jsx("div",{className:"land-card-icon",children:n.icon}),l.jsx("div",{className:"land-card-title",children:n.title}),l.jsx("div",{className:"land-card-desc",children:n.desc})]},n.title))})]}),l.jsxs("div",{className:"land-diseases",children:[l.jsx("div",{className:"land-diseases-title",children:"Supported disease domains"}),l.jsx("div",{className:"land-disease-chips",children:[{icon:"🦟",label:"Dengue"},{icon:"🔴",label:"Measles"},{icon:"🤰",label:"Maternal Health"},{icon:"🩸",label:"Diabetes"},{icon:"💊",label:"Hypertension"}].map(n=>l.jsxs("span",{className:"land-chip",children:[n.icon," ",n.label]},n.label))})]}),l.jsx("section",{className:"land-cta-section",children:l.jsxs("div",{className:"land-cta-inner",children:[l.jsx("h2",{className:"land-cta-title",children:"Ready to get started?"}),l.jsx("p",{className:"land-cta-sub",children:"Create your free account in seconds"}),l.jsxs("div",{className:"land-cta-group",style:{justifyContent:"center"},children:[l.jsx("button",{className:"land-btn-primary",onClick:e,children:"Create Account →"}),l.jsx("button",{className:"land-btn-secondary",onClick:t,children:"Already have an account"})]})]})}),l.jsxs("footer",{className:"land-footer",children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[l.jsx("img",{src:fs,alt:"JotnoSathi",style:{width:28,height:28,objectFit:"contain",borderRadius:7}}),l.jsx("span",{className:"land-footer-left",children:"© 2026 JotnoSathi · Infinity AI BuildFest · HealthTech Domain"})]}),l.jsx("span",{className:"land-footer-right",children:"WHO · HDX · DHS Bangladesh · Kaggle · 13 datasets"})]})]})}function Co({level:e,className:t=""}){return l.jsx("span",{className:`inline-block px-3 py-0.5 rounded-full text-xs font-semibold tracking-wide badge-${e} ${t}`,children:e})}const fv={Dhaka:"ঢাকা",Chattogram:"চট্টগ্রাম",Rajshahi:"রাজশাহী",Khulna:"খুলনা",Barishal:"বরিশাল",Sylhet:"সিলেট",Rangpur:"রংপুর",Mymensingh:"ময়মনসিংহ"},pv=[{id:"dengue",label:"Dengue",bn:"ডেঙ্গু",icon:"🦟",color:"#EF4444"},{id:"measles",label:"Measles",bn:"হাম",icon:"🔴",color:"#F59E0B"},{id:"maternal",label:"Maternal",bn:"মাতৃস্বাস্থ্য",icon:"🤰",color:"#EC4899"},{id:"diabetes",label:"Diabetes",bn:"ডায়াবেটিস",icon:"🩸",color:"#3B82F6"},{id:"bp",label:"Hypertension",bn:"উচ্চ রক্তচাপ",icon:"💊",color:"#10B981"}],hv=`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;700;800&display=swap');

:root{
  --primary:#0F766E;
  --primary-dark:#115E59;
  --primary-soft:#F0FDFA;
  --text:#0F172A;
  --muted:#64748B;
  --border:rgba(15,118,110,0.12);
  --card:#FFFFFF;
  --bg:#F8FAFC;
}

.triage-wrap{
  padding:32px 22px 60px;
  display:flex;
  flex-direction:column;
  gap:24px;
  background:linear-gradient(to bottom,#F8FAFC,#F0FDFA);
  min-height:100%;
  font-family:'Inter',sans-serif;
}

/* HERO */

.hero{
  position:relative;
  overflow:hidden;
  border-radius:28px;
  padding:34px 32px;
  background:
    radial-gradient(circle at top right, rgba(45,212,191,0.18), transparent 32%),
    linear-gradient(135deg,#0F766E 0%,#115E59 100%);
  color:white;
  box-shadow:
    0 10px 40px rgba(15,118,110,0.20),
    inset 0 1px 0 rgba(255,255,255,0.08);
}

.hero::before{
  content:'';
  position:absolute;
  width:240px;
  height:240px;
  border-radius:999px;
  background:rgba(255,255,255,0.05);
  top:-100px;
  right:-60px;
}

.hero-top{
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  gap:20px;
  position:relative;
  z-index:2;
}

.hero-badge{
  background:rgba(255,255,255,0.14);
  border:1px solid rgba(255,255,255,0.15);
  backdrop-filter:blur(8px);
  color:white;
  padding:10px 16px;
  border-radius:999px;
  font-size:12px;
  font-weight:700;
  letter-spacing:.4px;
  white-space:nowrap;
}

.hero-title{
  font-family:'Plus Jakarta Sans',sans-serif;
  font-size:34px;
  line-height:1.1;
  margin:0 0 12px;
  font-weight:800;
  letter-spacing:-1.2px;
}

.hero-desc{
  margin:0;
  max-width:760px;
  line-height:1.8;
  color:rgba(255,255,255,0.82);
  font-size:15px;
}

.hero-stats{
  margin-top:26px;
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(160px,1fr));
  gap:14px;
  position:relative;
  z-index:2;
}

.hero-stat{
  background:rgba(255,255,255,0.08);
  border:1px solid rgba(255,255,255,0.08);
  border-radius:20px;
  padding:16px;
  backdrop-filter:blur(10px);
}

.hero-stat-value{
  font-size:22px;
  font-weight:800;
  margin-bottom:4px;
}

.hero-stat-label{
  font-size:12px;
  color:rgba(255,255,255,0.7);
}

/* CARD */

.card{
  background:rgba(255,255,255,0.92);
  backdrop-filter:blur(10px);
  border:1px solid rgba(255,255,255,0.6);
  border-radius:28px;
  box-shadow:
    0 10px 30px rgba(15,23,42,0.06),
    0 1px 2px rgba(15,23,42,0.04);
  overflow:hidden;
}

.section{
  padding:26px 28px;
  border-bottom:1px solid rgba(148,163,184,0.12);
}

.section:last-child{
  border-bottom:none;
}

.section-title{
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom:18px;
}

.section-title h3{
  margin:0;
  font-size:13px;
  font-weight:800;
  letter-spacing:1.2px;
  text-transform:uppercase;
  color:#0F766E;
}

.section-sub{
  font-size:12px;
  color:#94A3B8;
  font-weight:600;
}

/* GRID */

.grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
  gap:18px;
}

.field{
  display:flex;
  flex-direction:column;
  gap:8px;
}

.label{
  font-size:13px;
  font-weight:700;
  color:#334155;
}

.select,
.textarea{
  width:100%;
  border:none;
  outline:none;
  border-radius:18px;
  background:#F8FAFC;
  border:1.5px solid rgba(148,163,184,0.16);
  transition:all .2s ease;
  color:#0F172A;
  font-size:14px;
  font-family:'Inter',sans-serif;
}

.select{
  padding:14px 16px;
  font-weight:600;
}

.select:hover,
.textarea:hover{
  border-color:rgba(15,118,110,0.24);
}

.select:focus,
.textarea:focus{
  background:white;
  border-color:rgba(15,118,110,0.45);
  box-shadow:0 0 0 4px rgba(20,184,166,0.10);
}

.textarea{
  min-height:150px;
  resize:vertical;
  line-height:1.8;
  padding:18px;
}

/* QUICK DISEASES */

.quick-wrap{
  display:flex;
  flex-wrap:wrap;
  gap:12px;
}

.quick-chip{
  display:flex;
  align-items:center;
  gap:10px;
  padding:12px 16px;
  border-radius:18px;
  background:white;
  border:1.5px solid rgba(148,163,184,0.12);
  cursor:pointer;
  transition:all .18s ease;
  min-width:170px;
}

.quick-chip:hover{
  transform:translateY(-2px);
  border-color:rgba(15,118,110,0.18);
  box-shadow:0 8px 20px rgba(15,23,42,0.06);
}

.quick-chip.active{
  background:#ECFDF5;
  border-color:rgba(16,185,129,0.28);
  box-shadow:0 8px 20px rgba(16,185,129,0.12);
}

.quick-icon{
  width:42px;
  height:42px;
  border-radius:14px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:20px;
  flex-shrink:0;
}

.quick-text{
  display:flex;
  flex-direction:column;
}

.quick-name{
  font-size:13px;
  font-weight:700;
  color:#0F172A;
}

.quick-bn{
  font-size:11px;
  color:#64748B;
  margin-top:2px;
}

/* VOICE */

.voice-btn{
  width:100%;
  min-height:72px;
  border:none;
  outline:none;
  border-radius:22px;
  background:linear-gradient(135deg,#ECFEFF,#F0FDFA);
  border:1.5px solid rgba(15,118,110,0.12);
  display:flex;
  align-items:center;
  justify-content:center;
  gap:14px;
  cursor:pointer;
  transition:all .18s ease;
  padding:18px;
}

.voice-btn:hover{
  transform:translateY(-1px);
  box-shadow:0 10px 24px rgba(15,118,110,0.10);
}

.voice-btn.listening{
  background:linear-gradient(135deg,#FEF2F2,#FFF1F2);
  border-color:rgba(239,68,68,0.22);
}

.voice-circle{
  width:48px;
  height:48px;
  border-radius:16px;
  display:flex;
  align-items:center;
  justify-content:center;
  background:white;
  font-size:20px;
}

.voice-title{
  font-size:15px;
  font-weight:700;
  color:#0F172A;
}

.voice-sub{
  font-size:12px;
  color:#64748B;
  margin-top:2px;
}

/* SUBMIT */

.submit-row{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:18px;
  flex-wrap:wrap;
}

.disclaimer{
  max-width:420px;
  line-height:1.7;
  color:#64748B;
  font-size:13px;
}

.submit-btn{
  border:none;
  outline:none;
  height:56px;
  padding:0 28px;
  border-radius:18px;
  cursor:pointer;
  background:linear-gradient(135deg,#0F766E,#115E59);
  color:white;
  font-weight:800;
  font-size:15px;
  letter-spacing:.2px;
  transition:all .18s ease;
  box-shadow:0 12px 30px rgba(15,118,110,0.20);
}

.submit-btn:hover{
  transform:translateY(-2px);
  box-shadow:0 16px 34px rgba(15,118,110,0.28);
}

.submit-btn:disabled{
  opacity:.5;
  cursor:not-allowed;
  transform:none;
}

/* RESULT */

.result-card{
  background:white;
  border-radius:28px;
  overflow:hidden;
  border:1px solid rgba(148,163,184,0.12);
  box-shadow:0 10px 30px rgba(15,23,42,0.06);
  animation:fadeUp .3s ease;
}

@keyframes fadeUp{
  from{
    opacity:0;
    transform:translateY(14px);
  }
  to{
    opacity:1;
    transform:none;
  }
}

.result-head{
  padding:24px 28px;
  background:linear-gradient(135deg,#F0FDFA,#F8FAFC);
  border-bottom:1px solid rgba(148,163,184,0.12);
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  gap:16px;
  flex-wrap:wrap;
}

.result-title{
  font-size:20px;
  font-weight:800;
  margin-bottom:6px;
  color:#0F172A;
}

.result-sub{
  font-size:13px;
  color:#64748B;
}

.result-tags{
  display:flex;
  flex-wrap:wrap;
  gap:10px;
  margin-top:18px;
}

.tag{
  padding:8px 14px;
  border-radius:999px;
  font-size:12px;
  font-weight:700;
}

.tag.disease{
  background:#EFF6FF;
  color:#1D4ED8;
}

.tag.outbreak{
  background:#FFF7ED;
  color:#C2410C;
}

.tag.registry{
  background:#ECFDF5;
  color:#047857;
}

.result-body{
  padding:28px;
}

.response{
  background:#F8FAFC;
  border:1px solid rgba(148,163,184,0.14);
  border-radius:22px;
  padding:22px;
  line-height:1.9;
  color:#334155;
  font-size:15px;
  white-space:pre-wrap;
}

.queue{
  margin-top:22px;
  padding:20px;
  border-radius:22px;
  background:#F8FAFC;
}

.queue-top{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:12px;
}

.queue-label{
  font-size:13px;
  font-weight:700;
  color:#334155;
}

.queue-count{
  font-size:13px;
  font-weight:800;
}

.queue-track{
  height:12px;
  border-radius:999px;
  overflow:hidden;
  background:rgba(148,163,184,0.16);
}

.queue-fill{
  height:100%;
  border-radius:999px;
  transition:width .5s ease;
}

.queue-msg{
  margin-top:10px;
  font-size:13px;
  font-weight:700;
}

.loading{
  display:flex;
  align-items:center;
  gap:16px;
  padding:26px;
  border-radius:24px;
  background:white;
  border:1px solid rgba(148,163,184,0.12);
}

.loader{
  width:44px;
  height:44px;
  border-radius:999px;
  border:4px solid rgba(15,118,110,0.12);
  border-top-color:#0F766E;
  animation:spin .7s linear infinite;
}

@keyframes spin{
  to{
    transform:rotate(360deg);
  }
}

@media(max-width:640px){
  .hero{
    padding:28px 22px;
  }

  .hero-title{
    font-size:28px;
  }

  .hero-top{
    flex-direction:column;
  }

  .section{
    padding:22px 18px;
  }

  .submit-row{
    flex-direction:column;
    align-items:stretch;
  }

  .submit-btn{
    width:100%;
  }
}
`;function mv({addToLog:e}){const[t,n]=b.useState("en"),[r,i]=b.useState("Unknown"),[s,o]=b.useState(""),[a,u]=b.useState(!1),[c,d]=b.useState(null),[f,p]=b.useState(!1),[m,y]=b.useState("");function v(){if(!("webkitSpeechRecognition"in window||"SpeechRecognition"in window)){alert("Voice input is not supported on this browser. Please use Chrome.");return}const w=window.SpeechRecognition||window.webkitSpeechRecognition,S=new w;S.lang="bn-BD",S.interimResults=!0,S.continuous=!1,p(!0);const E=s;S.onresult=j=>{let C="",F="";for(let N=j.resultIndex;N<j.results.length;N++)j.results[N].isFinal?F+=j.results[N][0].transcript:C+=j.results[N][0].transcript;o(E+(F||C)),F&&p(!1)},S.onerror=j=>{console.error("Voice error:",j.error),p(!1)},S.onend=()=>p(!1),S.start()}async function k(){if(!s.trim()){alert("Please describe symptoms first.");return}u(!0),d(null);try{const S=await(await fetch(`${ze}/triage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({symptoms:s,language:t,division:r,worker_id:"shebika_field"})})).json();d(S),e({time:new Date().toLocaleTimeString(),symptoms:s.substring(0,60)+"...",disease:S.disease_detected,risk:S.risk_level||"UNKNOWN",response:S.raw_response})}catch{alert("Connection error. Please check if backend is running.")}finally{u(!1)}}const x=c?Math.min((c.queue_size||0)/5*100,100):0,h=(c==null?void 0:c.queue_size)>=5?"#059669":(c==null?void 0:c.queue_size)>=3?"#D97706":"#0F766E",g=c!=null&&c.disease_detected?wi[c.disease_detected]:null;return l.jsxs("div",{className:"triage-wrap",children:[l.jsx("style",{children:hv}),l.jsxs("div",{className:"hero",children:[l.jsxs("div",{className:"hero-top",children:[l.jsxs("div",{children:[l.jsx("h1",{className:"hero-title",children:"AI Triage Assistant"}),l.jsx("p",{className:"hero-desc",children:"Smart multilingual patient triage for community healthcare workers. Capture symptoms in Bangla or English and receive real-time clinical recommendations, outbreak alerts, and AI-assisted guidance."})]}),l.jsx("div",{className:"hero-badge",children:"⚡ Live AI Analysis"})]}),l.jsxs("div",{className:"hero-stats",children:[l.jsxs("div",{className:"hero-stat",children:[l.jsx("div",{className:"hero-stat-value",children:"5+"}),l.jsx("div",{className:"hero-stat-label",children:"Disease Domains"})]}),l.jsxs("div",{className:"hero-stat",children:[l.jsx("div",{className:"hero-stat-value",children:"Bangla + English"}),l.jsx("div",{className:"hero-stat-label",children:"Voice & Text Support"})]}),l.jsxs("div",{className:"hero-stat",children:[l.jsx("div",{className:"hero-stat-value",children:"Real-time"}),l.jsx("div",{className:"hero-stat-label",children:"Outbreak Monitoring"})]})]})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"section",children:[l.jsxs("div",{className:"section-title",children:[l.jsx("h3",{children:"Patient Context"}),l.jsx("div",{className:"section-sub",children:"Required before AI analysis"})]}),l.jsxs("div",{className:"grid",children:[l.jsxs("div",{className:"field",children:[l.jsx("label",{className:"label",children:"Division"}),l.jsxs("select",{className:"select",value:r,onChange:w=>i(w.target.value),children:[l.jsx("option",{value:"Unknown",children:t==="bn"?"বিভাগ নির্বাচন করুন":"Select division"}),Wu.map(w=>l.jsx("option",{value:w,children:t==="bn"&&fv[w]||w},w))]})]}),l.jsxs("div",{className:"field",children:[l.jsx("label",{className:"label",children:"Language / ভাষা"}),l.jsxs("select",{className:"select",value:t,onChange:w=>n(w.target.value),children:[l.jsx("option",{value:"en",children:"English"}),l.jsx("option",{value:"bn",children:"বাংলা"})]})]})]})]}),l.jsxs("div",{className:"section",children:[l.jsxs("div",{className:"section-title",children:[l.jsx("h3",{children:"Quick Disease Selection"}),l.jsx("div",{className:"section-sub",children:"Tap to autofill context"})]}),l.jsx("div",{className:"quick-wrap",children:pv.map(w=>l.jsxs("button",{className:`quick-chip ${m===w.id?"active":""}`,onClick:()=>{y(w.id),s||o(`${w.label} symptoms`)},children:[l.jsx("div",{className:"quick-icon",style:{background:`${w.color}15`},children:w.icon}),l.jsxs("div",{className:"quick-text",children:[l.jsx("span",{className:"quick-name",children:t==="bn"?w.bn:w.label}),l.jsx("span",{className:"quick-bn",children:t==="bn"?w.label:w.bn})]})]},w.id))})]}),l.jsxs("div",{className:"section",children:[l.jsxs("div",{className:"section-title",children:[l.jsx("h3",{children:"Voice Input"}),l.jsx("div",{className:"section-sub",children:"Smart speech capture"})]}),l.jsxs("button",{className:`voice-btn ${f?"listening":""}`,onClick:v,disabled:a,children:[l.jsx("div",{className:"voice-circle",children:"🎤"}),l.jsxs("div",{children:[l.jsx("div",{className:"voice-title",children:f?t==="bn"?"শোনা হচ্ছে...":"Listening...":t==="bn"?"উপসর্গ বলতে ট্যাপ করুন":"Tap to speak symptoms"}),l.jsx("div",{className:"voice-sub",children:t==="bn"?"বাংলা ও ইংরেজি সমর্থিত":"Supports Bangla & English"})]})]})]}),l.jsxs("div",{className:"section",children:[l.jsxs("div",{className:"section-title",children:[l.jsx("h3",{children:"Symptom Description"}),l.jsx("div",{className:"section-sub",children:"Detailed input improves AI accuracy"})]}),l.jsx("textarea",{className:"textarea",value:s,onChange:w=>o(w.target.value),placeholder:t==="bn"?"রোগীর উপসর্গ বিস্তারিত লিখুন... যেমন: ৩ দিন জ্বর, শরীর ব্যথা, মাথাব্যথা, কাশি":"Describe symptoms in detail... e.g. Fever for 3 days, severe headache, cough, body pain"}),l.jsxs("div",{style:{marginTop:10,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsx("span",{style:{fontSize:12,color:"#94A3B8"},children:t==="bn"?"বিস্তারিত তথ্য ভালো ফলাফল দেয়":"More detail improves recommendations"}),l.jsxs("span",{style:{fontSize:12,fontWeight:700,color:s.length>180?"#059669":"#94A3B8"},children:[s.length," ","chars"]})]})]}),l.jsx("div",{className:"section",children:l.jsxs("div",{className:"submit-row",children:[l.jsx("div",{className:"disclaimer",children:"AI-generated guidance for preliminary community healthcare support only. Not a replacement for medical diagnosis."}),l.jsx("button",{className:"submit-btn",onClick:k,disabled:a||!s.trim(),children:a?"Analysing Symptoms...":"Get AI Recommendation"})]})})]}),a&&l.jsxs("div",{className:"loading",children:[l.jsx("div",{className:"loader"}),l.jsxs("div",{children:[l.jsx("div",{style:{fontWeight:800,marginBottom:4,color:"#0F172A"},children:"AI Analysis Running"}),l.jsx("div",{style:{color:"#64748B",fontSize:14},children:"Evaluating symptoms, outbreak patterns, and clinical risk..."})]})]}),c&&!a&&l.jsxs("div",{className:"result-card",children:[l.jsxs("div",{className:"result-head",children:[l.jsxs("div",{children:[l.jsx("div",{className:"result-title",children:"AI Recommendation Ready"}),l.jsx("div",{className:"result-sub",children:"Clinical triage summary · AI-powered health analysis"}),l.jsxs("div",{className:"result-tags",children:[g&&c.disease_detected!=="general"&&l.jsxs("div",{className:"tag disease",children:[g.icon," ",c.disease_detected.toUpperCase()]}),c.report_type==="outbreak"?l.jsx("div",{className:"tag outbreak",children:"🚨 Outbreak Monitoring"}):l.jsx("div",{className:"tag registry",children:"✅ Registry Case"})]})]}),l.jsx(Co,{level:c.risk_level||"UNKNOWN"})]}),l.jsxs("div",{className:"result-body",children:[l.jsx("div",{className:"response",children:c.raw_response}),c.report_type==="outbreak"&&c.queue_size!=null&&l.jsxs("div",{className:"queue",children:[l.jsxs("div",{className:"queue-top",children:[l.jsx("div",{className:"queue-label",children:"AI Retraining Queue"}),l.jsxs("div",{className:"queue-count",style:{color:h},children:[c.queue_size," ","/ 5"]})]}),l.jsx("div",{className:"queue-track",children:l.jsx("div",{className:"queue-fill",style:{width:`${x}%`,background:h}})}),l.jsx("div",{className:"queue-msg",style:{color:h},children:5-c.queue_size>0?`${5-c.queue_size} more reports until automatic retraining`:"✓ AI retraining triggered successfully"})]})]})]})]})}/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=e=>{const t=xv(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var oa={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},vv=b.createContext({}),wv=()=>b.useContext(vv),bv=b.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...a},u)=>{const{size:c=24,strokeWidth:d=2,absoluteStrokeWidth:f=!1,color:p="currentColor",className:m=""}=wv()??{},y=r??f?Number(n??d)*24/Number(t??c):n??d;return b.createElement("svg",{ref:u,...oa,width:t??c??oa.width,height:t??c??oa.height,stroke:e??p,strokeWidth:y,className:Am("lucide",m,i),...!s&&!yv(a)&&{"aria-hidden":"true"},...a},[...o.map(([v,k])=>b.createElement(v,k)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=(e,t)=>{const n=b.forwardRef(({className:r,...i},s)=>b.createElement(bv,{ref:s,iconNode:t,className:Am(`lucide-${gv(Id(e))}`,`lucide-${e}`,r),...i}));return n.displayName=Id(e),n};/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],fr=V("activity",kv);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=[["path",{d:"M10 10H6",key:"1bsnug"}],["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14",key:"lrkjwd"}],["path",{d:"M8 8v4",key:"1fwk8c"}],["path",{d:"M9 18h6",key:"x1upvd"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],jv=V("ambulance",Sv);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Ev=V("arrow-right",Cv);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],Gs=V("brain",Nv);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],Pv=V("building-2",Tv);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=[["path",{d:"M16 14v2.2l1.6 1",key:"fo4ql5"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]],Av=V("calendar-clock",Fv);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Dv=V("chevron-down",Mv);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Lv=V("circle-alert",Rv);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Mm=V("circle-check",zv);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],Dm=V("circle-x",_v);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],Ku=V("clipboard-list",Vv);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M9 14h6",key:"159ibu"}],["path",{d:"M12 17v-6",key:"1y8rbf"}]],Bv=V("clipboard-plus",Iv);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6h4",key:"135r8i"}]],$v=V("clock-3",Ov);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=[["path",{d:"M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z",key:"1xbrqy"}]],Hv=V("cross",Uv);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Kv=V("external-link",Wv);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Bd=V("file-text",Gv);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=[["path",{d:"M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762",key:"17lmqv"}]],Qv=V("heart-handshake",Yv);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}],["path",{d:"M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"auskq0"}]],Xv=V("heart-pulse",qv);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=[["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M14 9h-4",key:"1w2s2s"}],["path",{d:"M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2",key:"1tthqt"}],["path",{d:"M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16",key:"dw4p4i"}]],Rm=V("hospital",Jv);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],qn=V("loader-circle",Zv);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],t2=V("map-pin",e2);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=[["path",{d:"M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0",key:"11u0oz"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712",key:"q8zwxj"}]],Gu=V("map-pinned",n2);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Lm=V("phone",r2);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],s2=V("send",i2);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],zm=V("shield-alert",o2);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Ys=V("shield-check",a2);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Eo=V("sparkles",l2);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=[["path",{d:"M11 2v2",key:"1539x4"}],["path",{d:"M5 2v2",key:"1yf1q8"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",key:"rb5t3r"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3",key:"x18d4x"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]],_m=V("stethoscope",u2);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Vm=V("trending-up",c2);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Im=V("triangle-alert",d2);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=[["path",{d:"M2 12q2.5 2 5 0t5 0 5 0 5 0",key:"8ddzzs"}],["path",{d:"M2 19q2.5 2 5 0t5 0 5 0 5 0",key:"1wj4st"}],["path",{d:"M2 5q2.5 2 5 0t5 0 5 0 5 0",key:"69x50u"}]],p2=V("waves-horizontal",f2),Yu=b.createContext({});function Qu(e){const t=b.useRef(null);return t.current===null&&(t.current=e()),t.current}const h2=typeof window<"u",Bm=h2?b.useLayoutEffect:b.useEffect,No=b.createContext(null);function qu(e,t){e.indexOf(t)===-1&&e.push(t)}function Qs(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const ht=(e,t,n)=>n>t?t:n<e?e:n;let Xu=()=>{};const Qt={},Om=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),$m=e=>typeof e=="object"&&e!==null,Um=e=>/^0[^.\s]+$/u.test(e);function Hm(e){let t;return()=>(t===void 0&&(t=e()),t)}const Ke=e=>e,bi=(...e)=>e.reduce((t,n)=>r=>n(t(r))),ci=(e,t,n)=>{const r=t-e;return r?(n-e)/r:1};class Ju{constructor(){this.subscriptions=[]}add(t){return qu(this.subscriptions,t),()=>Qs(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const _e=e=>e*1e3,He=e=>e/1e3,Wm=(e,t)=>t?e*(1e3/t):0,Km=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,m2=1e-7,g2=12;function x2(e,t,n,r,i){let s,o,a=0;do o=t+(n-t)/2,s=Km(o,r,i)-e,s>0?n=o:t=o;while(Math.abs(s)>m2&&++a<g2);return o}function ki(e,t,n,r){if(e===t&&n===r)return Ke;const i=s=>x2(s,0,1,e,n);return s=>s===0||s===1?s:Km(i(s),t,r)}const Gm=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Ym=e=>t=>1-e(1-t),Qm=ki(.33,1.53,.69,.99),Zu=Ym(Qm),qm=Gm(Zu),Xm=e=>e>=1?1:(e*=2)<1?.5*Zu(e):.5*(2-Math.pow(2,-10*(e-1))),ec=e=>1-Math.sin(Math.acos(e)),Jm=Ym(ec),Zm=Gm(ec),y2=ki(.42,0,1,1),v2=ki(0,0,.58,1),eg=ki(.42,0,.58,1),w2=e=>Array.isArray(e)&&typeof e[0]!="number",tg=e=>Array.isArray(e)&&typeof e[0]=="number",b2={linear:Ke,easeIn:y2,easeInOut:eg,easeOut:v2,circIn:ec,circInOut:Zm,circOut:Jm,backIn:Zu,backInOut:qm,backOut:Qm,anticipate:Xm},k2=e=>typeof e=="string",Od=e=>{if(tg(e)){Xu(e.length===4);const[t,n,r,i]=e;return ki(t,n,r,i)}else if(k2(e))return b2[e];return e},Ki=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function S2(e,t){let n=new Set,r=new Set,i=!1,s=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function u(d){o.has(d)&&(c.schedule(d),e()),d(a)}const c={schedule:(d,f=!1,p=!1)=>{const y=p&&i?n:r;return f&&o.add(d),y.add(d),d},cancel:d=>{r.delete(d),o.delete(d)},process:d=>{if(a=d,i){s=!0;return}i=!0;const f=n;n=r,r=f,n.forEach(u),n.clear(),i=!1,s&&(s=!1,c.process(d))}};return c}const j2=40;function ng(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=Ki.reduce((g,w)=>(g[w]=S2(s),g),{}),{setup:a,read:u,resolveKeyframes:c,preUpdate:d,update:f,preRender:p,render:m,postRender:y}=o,v=()=>{const g=Qt.useManualTiming,w=g?i.timestamp:performance.now();n=!1,g||(i.delta=r?1e3/60:Math.max(Math.min(w-i.timestamp,j2),1)),i.timestamp=w,i.isProcessing=!0,a.process(i),u.process(i),c.process(i),d.process(i),f.process(i),p.process(i),m.process(i),y.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(v))},k=()=>{n=!0,r=!0,i.isProcessing||e(v)};return{schedule:Ki.reduce((g,w)=>{const S=o[w];return g[w]=(E,j=!1,C=!1)=>(n||k(),S.schedule(E,j,C)),g},{}),cancel:g=>{for(let w=0;w<Ki.length;w++)o[Ki[w]].cancel(g)},state:i,steps:o}}const{schedule:$,cancel:qt,state:de,steps:aa}=ng(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ke,!0);let ps;function C2(){ps=void 0}const be={now:()=>(ps===void 0&&be.set(de.isProcessing||Qt.useManualTiming?de.timestamp:performance.now()),ps),set:e=>{ps=e,queueMicrotask(C2)}},rg=e=>t=>typeof t=="string"&&t.startsWith(e),ig=rg("--"),E2=rg("var(--"),tc=e=>E2(e)?N2.test(e.split("/*")[0].trim()):!1,N2=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function $d(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const pr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},di={...pr,transform:e=>ht(0,1,e)},Gi={...pr,default:1},Or=e=>Math.round(e*1e5)/1e5,nc=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function T2(e){return e==null}const P2=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,rc=(e,t)=>n=>!!(typeof n=="string"&&P2.test(n)&&n.startsWith(e)||t&&!T2(n)&&Object.prototype.hasOwnProperty.call(n,t)),sg=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,s,o,a]=r.match(nc);return{[e]:parseFloat(i),[t]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},F2=e=>ht(0,255,e),la={...pr,transform:e=>Math.round(F2(e))},pn={test:rc("rgb","red"),parse:sg("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+la.transform(e)+", "+la.transform(t)+", "+la.transform(n)+", "+Or(di.transform(r))+")"};function A2(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const kl={test:rc("#"),parse:A2,transform:pn.transform},Si=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),mt=Si("deg"),pt=Si("%"),M=Si("px"),M2=Si("vh"),D2=Si("vw"),Ud={...pt,parse:e=>pt.parse(e)/100,transform:e=>pt.transform(e*100)},On={test:rc("hsl","hue"),parse:sg("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+pt.transform(Or(t))+", "+pt.transform(Or(n))+", "+Or(di.transform(r))+")"},ne={test:e=>pn.test(e)||kl.test(e)||On.test(e),parse:e=>pn.test(e)?pn.parse(e):On.test(e)?On.parse(e):kl.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?pn.transform(e):On.transform(e),getAnimatableNone:e=>{const t=ne.parse(e);return t.alpha=0,ne.transform(t)}},R2=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function L2(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(nc))==null?void 0:t.length)||0)+(((n=e.match(R2))==null?void 0:n.length)||0)>0}const og="number",ag="color",z2="var",_2="var(",Hd="${}",V2=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function sr(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let s=0;const a=t.replace(V2,u=>(ne.test(u)?(r.color.push(s),i.push(ag),n.push(ne.parse(u))):u.startsWith(_2)?(r.var.push(s),i.push(z2),n.push(u)):(r.number.push(s),i.push(og),n.push(parseFloat(u))),++s,Hd)).split(Hd);return{values:n,split:a,indexes:r,types:i}}function I2(e){return sr(e).values}function lg({split:e,types:t}){const n=e.length;return r=>{let i="";for(let s=0;s<n;s++)if(i+=e[s],r[s]!==void 0){const o=t[s];o===og?i+=Or(r[s]):o===ag?i+=ne.transform(r[s]):i+=r[s]}return i}}function B2(e){return lg(sr(e))}const O2=e=>typeof e=="number"?0:ne.test(e)?ne.getAnimatableNone(e):e,$2=(e,t)=>typeof e=="number"?t!=null&&t.trim().endsWith("/")?e:0:O2(e);function U2(e){const t=sr(e);return lg(t)(t.values.map((r,i)=>$2(r,t.split[i])))}const it={test:L2,parse:I2,createTransformer:B2,getAnimatableNone:U2};function ua(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function H2({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,s=0,o=0;if(!t)i=s=o=n;else{const a=n<.5?n*(1+t):n+t-n*t,u=2*n-a;i=ua(u,a,e+1/3),s=ua(u,a,e),o=ua(u,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:r}}function qs(e,t){return n=>n>0?t:e}const O=(e,t,n)=>e+(t-e)*n,ca=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},W2=[kl,pn,On],K2=e=>W2.find(t=>t.test(e));function Wd(e){const t=K2(e);if(!t)return!1;let n=t.parse(e);return t===On&&(n=H2(n)),n}const Kd=(e,t)=>{const n=Wd(e),r=Wd(t);if(!n||!r)return qs(e,t);const i={...n};return s=>(i.red=ca(n.red,r.red,s),i.green=ca(n.green,r.green,s),i.blue=ca(n.blue,r.blue,s),i.alpha=O(n.alpha,r.alpha,s),pn.transform(i))},Sl=new Set(["none","hidden"]);function G2(e,t){return Sl.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function Y2(e,t){return n=>O(e,t,n)}function ic(e){return typeof e=="number"?Y2:typeof e=="string"?tc(e)?qs:ne.test(e)?Kd:X2:Array.isArray(e)?ug:typeof e=="object"?ne.test(e)?Kd:Q2:qs}function ug(e,t){const n=[...e],r=n.length,i=e.map((s,o)=>ic(s)(s,t[o]));return s=>{for(let o=0;o<r;o++)n[o]=i[o](s);return n}}function Q2(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=ic(e[i])(e[i],t[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}}function q2(e,t){const n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const s=t.types[i],o=e.indexes[s][r[s]],a=e.values[o]??0;n[i]=a,r[s]++}return n}const X2=(e,t)=>{const n=it.createTransformer(t),r=sr(e),i=sr(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Sl.has(e)&&!i.values.length||Sl.has(t)&&!r.values.length?G2(e,t):bi(ug(q2(r,i),i.values),n):qs(e,t)};function cg(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?O(e,t,n):ic(e)(e,t)}const J2=e=>{const t=({timestamp:n})=>e(n);return{start:(n=!0)=>$.update(t,n),stop:()=>qt(t),now:()=>de.isProcessing?de.timestamp:be.now()}},dg=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let s=0;s<i;s++)r+=Math.round(e(s/(i-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},Xs=2e4;function sc(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Xs;)t+=n,r=e.next(t);return t>=Xs?1/0:t}function Z2(e,t=100,n){const r=n({...e,keyframes:[0,t]}),i=Math.min(sc(r),Xs);return{type:"keyframes",ease:s=>r.next(i*s).value/t,duration:He(i)}}const J={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function jl(e,t){return e*Math.sqrt(1-t*t)}const ew=12;function tw(e,t,n){let r=n;for(let i=1;i<ew;i++)r=r-e(r)/t(r);return r}const da=.001;function nw({duration:e=J.duration,bounce:t=J.bounce,velocity:n=J.velocity,mass:r=J.mass}){let i,s,o=1-t;o=ht(J.minDamping,J.maxDamping,o),e=ht(J.minDuration,J.maxDuration,He(e)),o<1?(i=c=>{const d=c*o,f=d*e,p=d-n,m=jl(c,o),y=Math.exp(-f);return da-p/m*y},s=c=>{const f=c*o*e,p=f*n+n,m=Math.pow(o,2)*Math.pow(c,2)*e,y=Math.exp(-f),v=jl(Math.pow(c,2),o);return(-i(c)+da>0?-1:1)*((p-m)*y)/v}):(i=c=>{const d=Math.exp(-c*e),f=(c-n)*e+1;return-da+d*f},s=c=>{const d=Math.exp(-c*e),f=(n-c)*(e*e);return d*f});const a=5/e,u=tw(i,s,a);if(e=_e(e),isNaN(u))return{stiffness:J.stiffness,damping:J.damping,duration:e};{const c=Math.pow(u,2)*r;return{stiffness:c,damping:o*2*Math.sqrt(r*c),duration:e}}}const rw=["duration","bounce"],iw=["stiffness","damping","mass"];function Gd(e,t){return t.some(n=>e[n]!==void 0)}function sw(e){let t={velocity:J.velocity,stiffness:J.stiffness,damping:J.damping,mass:J.mass,isResolvedFromDuration:!1,...e};if(!Gd(e,iw)&&Gd(e,rw))if(t.velocity=0,e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,s=2*ht(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:J.mass,stiffness:i,damping:s}}else{const n=nw({...e,velocity:0});t={...t,...n,mass:J.mass},t.isResolvedFromDuration=!0}return t}function Js(e=J.visualDuration,t=J.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:u,damping:c,mass:d,duration:f,velocity:p,isResolvedFromDuration:m}=sw({...n,velocity:-He(n.velocity||0)}),y=p||0,v=c/(2*Math.sqrt(u*d)),k=o-s,x=He(Math.sqrt(u/d)),h=Math.abs(k)<5;r||(r=h?J.restSpeed.granular:J.restSpeed.default),i||(i=h?J.restDelta.granular:J.restDelta.default);let g,w,S,E,j,C;if(v<1)S=jl(x,v),E=(y+v*x*k)/S,g=N=>{const L=Math.exp(-v*x*N);return o-L*(E*Math.sin(S*N)+k*Math.cos(S*N))},j=v*x*E+k*S,C=v*x*k-E*S,w=N=>Math.exp(-v*x*N)*(j*Math.sin(S*N)+C*Math.cos(S*N));else if(v===1){g=L=>o-Math.exp(-x*L)*(k+(y+x*k)*L);const N=y+x*k;w=L=>Math.exp(-x*L)*(x*N*L-y)}else{const N=x*Math.sqrt(v*v-1);g=Me=>{const Qe=Math.exp(-v*x*Me),Ee=Math.min(N*Me,300);return o-Qe*((y+v*x*k)*Math.sinh(Ee)+N*k*Math.cosh(Ee))/N};const L=(y+v*x*k)/N,G=v*x*L-k*N,ve=v*x*k-L*N;w=Me=>{const Qe=Math.exp(-v*x*Me),Ee=Math.min(N*Me,300);return Qe*(G*Math.sinh(Ee)+ve*Math.cosh(Ee))}}const F={calculatedDuration:m&&f||null,velocity:N=>_e(w(N)),next:N=>{if(!m&&v<1){const G=Math.exp(-v*x*N),ve=Math.sin(S*N),Me=Math.cos(S*N),Qe=o-G*(E*ve+k*Me),Ee=_e(G*(j*ve+C*Me));return a.done=Math.abs(Ee)<=r&&Math.abs(o-Qe)<=i,a.value=a.done?o:Qe,a}const L=g(N);if(m)a.done=N>=f;else{const G=_e(w(N));a.done=Math.abs(G)<=r&&Math.abs(o-L)<=i}return a.value=a.done?o:L,a},toString:()=>{const N=Math.min(sc(F),Xs),L=dg(G=>F.next(N*G).value,N,30);return N+"ms "+L},toTransition:()=>{}};return F}Js.applyToOptions=e=>{const t=Z2(e,100,Js);return e.ease=t.ease,e.duration=_e(t.duration),e.type="keyframes",e};const ow=5;function fg(e,t,n){const r=Math.max(t-ow,0);return Wm(n-e(r),t-r)}function Cl({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:u,restDelta:c=.5,restSpeed:d}){const f=e[0],p={done:!1,value:f},m=C=>a!==void 0&&C<a||u!==void 0&&C>u,y=C=>a===void 0?u:u===void 0||Math.abs(a-C)<Math.abs(u-C)?a:u;let v=n*t;const k=f+v,x=o===void 0?k:o(k);x!==k&&(v=x-f);const h=C=>-v*Math.exp(-C/r),g=C=>x+h(C),w=C=>{const F=h(C),N=g(C);p.done=Math.abs(F)<=c,p.value=p.done?x:N};let S,E;const j=C=>{m(p.value)&&(S=C,E=Js({keyframes:[p.value,y(p.value)],velocity:fg(g,C,p.value),damping:i,stiffness:s,restDelta:c,restSpeed:d}))};return j(0),{calculatedDuration:null,next:C=>{let F=!1;return!E&&S===void 0&&(F=!0,w(C),j(C)),S!==void 0&&C>=S?E.next(C-S):(!F&&w(C),p)}}}function aw(e,t,n){const r=[],i=n||Qt.mix||cg,s=e.length-1;for(let o=0;o<s;o++){let a=i(e[o],e[o+1]);if(t){const u=Array.isArray(t)?t[o]||Ke:t;a=bi(u,a)}r.push(a)}return r}function lw(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const s=e.length;if(Xu(s===t.length),s===1)return()=>t[0];if(s===2&&t[0]===t[1])return()=>t[1];const o=e[0]===e[1];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=aw(t,r,i),u=a.length,c=d=>{if(o&&d<e[0])return t[0];let f=0;if(u>1)for(;f<e.length-2&&!(d<e[f+1]);f++);const p=ci(e[f],e[f+1],d);return a[f](p)};return n?d=>c(ht(e[0],e[s-1],d)):c}function uw(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=ci(0,t,r);e.push(O(n,1,i))}}function cw(e){const t=[0];return uw(t,e.length-1),t}function dw(e,t){return e.map(n=>n*t)}function fw(e,t){return e.map(()=>t||eg).splice(0,e.length-1)}function $r({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=w2(r)?r.map(Od):Od(r),s={done:!1,value:t[0]},o=dw(n&&n.length===t.length?n:cw(t),e),a=lw(o,t,{ease:Array.isArray(i)?i:fw(t,i)});return{calculatedDuration:e,next:u=>(s.value=a(u),s.done=u>=e,s)}}const pw=e=>e!==null;function To(e,{repeat:t,repeatType:n="loop"},r,i=1){const s=e.filter(pw),a=i<0||t&&n!=="loop"&&t%2===1?0:s.length-1;return!a||r===void 0?s[a]:r}const hw={decay:Cl,inertia:Cl,tween:$r,keyframes:$r,spring:Js};function pg(e){typeof e.type=="string"&&(e.type=hw[e.type])}class oc{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const mw=e=>e/100;class Zs extends oc{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var r,i;const{motionValue:n}=this.options;n&&n.updatedAt!==be.now()&&this.tick(be.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(i=(r=this.options).onStop)==null||i.call(r))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;pg(t);const{type:n=$r,repeat:r=0,repeatDelay:i=0,repeatType:s,velocity:o=0}=t;let{keyframes:a}=t;const u=n||$r;u!==$r&&typeof a[0]!="number"&&(this.mixKeyframes=bi(mw,cg(a[0],a[1])),a=[0,100]);const c=u({...t,keyframes:a});s==="mirror"&&(this.mirroredGenerator=u({...t,keyframes:[...a].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=sc(c));const{calculatedDuration:d}=c;this.calculatedDuration=d,this.resolvedDuration=d+i,this.totalDuration=this.resolvedDuration*(r+1)-i,this.generator=c}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:r,totalDuration:i,mixKeyframes:s,mirroredGenerator:o,resolvedDuration:a,calculatedDuration:u}=this;if(this.startTime===null)return r.next(0);const{delay:c=0,keyframes:d,repeat:f,repeatType:p,repeatDelay:m,type:y,onUpdate:v,finalKeyframe:k}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-i/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const x=this.currentTime-c*(this.playbackSpeed>=0?1:-1),h=this.playbackSpeed>=0?x<0:x>i;this.currentTime=Math.max(x,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let g=this.currentTime,w=r;if(f){const C=Math.min(this.currentTime,i)/a;let F=Math.floor(C),N=C%1;!N&&C>=1&&(N=1),N===1&&F--,F=Math.min(F,f+1),!!(F%2)&&(p==="reverse"?(N=1-N,m&&(N-=m/a)):p==="mirror"&&(w=o)),g=ht(0,1,N)*a}let S;h?(this.delayState.value=d[0],S=this.delayState):S=w.next(g),s&&!h&&(S.value=s(S.value));let{done:E}=S;!h&&u!==null&&(E=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const j=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&E);return j&&y!==Cl&&(S.value=To(d,this.options,k,this.speed)),v&&v(S.value),j&&this.finish(),S}then(t,n){return this.finished.then(t,n)}get duration(){return He(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+He(t)}get time(){return He(this.currentTime)}set time(t){t=_e(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=t,this.tick(t))}getGeneratorVelocity(){const t=this.currentTime;if(t<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(t);const n=this.generator.next(t).value;return fg(r=>this.generator.next(r).value,t,n)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;n&&this.driver&&this.updateTime(be.now()),this.playbackSpeed=t,n&&this.driver&&(this.time=He(this.currentTime))}play(){var i,s;if(this.isStopped)return;const{driver:t=J2,startTime:n}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),(s=(i=this.options).onPlay)==null||s.call(i);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=n??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(be.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(t=this.options).onComplete)==null||n.call(t)}cancel(){var t,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(t=this.options).onCancel)==null||n.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),t.observe(this)}}function gw(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const hn=e=>e*180/Math.PI,El=e=>{const t=hn(Math.atan2(e[1],e[0]));return Nl(t)},xw={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:El,rotateZ:El,skewX:e=>hn(Math.atan(e[1])),skewY:e=>hn(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Nl=e=>(e=e%360,e<0&&(e+=360),e),Yd=El,Qd=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),qd=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),yw={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Qd,scaleY:qd,scale:e=>(Qd(e)+qd(e))/2,rotateX:e=>Nl(hn(Math.atan2(e[6],e[5]))),rotateY:e=>Nl(hn(Math.atan2(-e[2],e[0]))),rotateZ:Yd,rotate:Yd,skewX:e=>hn(Math.atan(e[4])),skewY:e=>hn(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Tl(e){return e.includes("scale")?1:0}function Pl(e,t){if(!e||e==="none")return Tl(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=yw,i=n;else{const a=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=xw,i=a}if(!i)return Tl(t);const s=r[t],o=i[1].split(",").map(ww);return typeof s=="function"?s(o):o[s]}const vw=(e,t)=>{const{transform:n="none"}=getComputedStyle(e);return Pl(n,t)};function ww(e){return parseFloat(e.trim())}const hr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],mr=new Set([...hr,"pathRotation"]),Xd=e=>e===pr||e===M,bw=new Set(["x","y","z"]),kw=hr.filter(e=>!bw.has(e));function Sw(e){const t=[];return kw.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const _t={width:({x:e},{paddingLeft:t="0",paddingRight:n="0",boxSizing:r})=>{const i=e.max-e.min;return r==="border-box"?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t="0",paddingBottom:n="0",boxSizing:r})=>{const i=e.max-e.min;return r==="border-box"?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Pl(t,"x"),y:(e,{transform:t})=>Pl(t,"y")};_t.translateX=_t.x;_t.translateY=_t.y;const xn=new Set;let Fl=!1,Al=!1,Ml=!1;function hg(){if(Al){const e=Array.from(xn).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=Sw(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([s,o])=>{var a;(a=r.getValue(s))==null||a.set(o)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Al=!1,Fl=!1,xn.forEach(e=>e.complete(Ml)),xn.clear()}function mg(){xn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Al=!0)})}function jw(){Ml=!0,mg(),hg(),Ml=!1}class ac{constructor(t,n,r,i,s,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=s,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(xn.add(this),Fl||(Fl=!0,$.read(mg),$.resolveKeyframes(hg))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;if(t[0]===null){const s=i==null?void 0:i.get(),o=t[t.length-1];if(s!==void 0)t[0]=s;else if(r&&n){const a=r.readValue(n,o);a!=null&&(t[0]=a)}t[0]===void 0&&(t[0]=o),i&&s===void 0&&i.set(t[0])}gw(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),xn.delete(this)}cancel(){this.state==="scheduled"&&(xn.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const Cw=e=>e.startsWith("--");function gg(e,t,n){Cw(t)?e.style.setProperty(t,n):e.style[t]=n}const Ew={};function xg(e,t){const n=Hm(e);return()=>Ew[t]??n()}const Nw=xg(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),yg=xg(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ar=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Jd={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ar([0,.65,.55,1]),circOut:Ar([.55,0,1,.45]),backIn:Ar([.31,.01,.66,-.59]),backOut:Ar([.33,1.53,.69,.99])};function vg(e,t){if(e)return typeof e=="function"?yg()?dg(e,t):"ease-out":tg(e)?Ar(e):Array.isArray(e)?e.map(n=>vg(n,t)||Jd.easeOut):Jd[e]}function Tw(e,t,n,{delay:r=0,duration:i=300,repeat:s=0,repeatType:o="loop",ease:a="easeOut",times:u}={},c=void 0){const d={[t]:n};u&&(d.offset=u);const f=vg(a,i);Array.isArray(f)&&(d.easing=f);const p={delay:r,duration:i,easing:Array.isArray(f)?"linear":f,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"};return c&&(p.pseudoElement=c),e.animate(d,p)}function wg(e){return typeof e=="function"&&"applyToOptions"in e}function Pw({type:e,...t}){return wg(e)&&yg()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class bg extends oc{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:n,name:r,keyframes:i,pseudoElement:s,allowFlatten:o=!1,finalKeyframe:a,onComplete:u}=t;this.isPseudoElement=!!s,this.allowFlatten=o,this.options=t,Xu(typeof t.type!="string");const c=Pw(t);this.animation=Tw(n,r,i,c,s),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const d=To(i,this.options,a,this.speed);this.updateMotionValue&&this.updateMotionValue(d),gg(n,r,d),this.animation.cancel()}u==null||u(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,n;(n=(t=this.animation).finish)==null||n.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,r,i;const t=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(t!=null&&t.isConnected)&&((i=(r=this.animation).commitStyles)==null||i.call(r))}get duration(){var n,r;const t=((r=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:r.call(n).duration)||0;return He(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+He(t)}get time(){return He(Number(this.animation.currentTime)||0)}set time(t){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=_e(t),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,rangeStart:n,rangeEnd:r,observe:i}){var s;return this.allowFlatten&&((s=this.animation.effect)==null||s.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&Nw()?(this.animation.timeline=t,n&&(this.animation.rangeStart=n),r&&(this.animation.rangeEnd=r),Ke):i(this)}}const kg={anticipate:Xm,backInOut:qm,circInOut:Zm};function Fw(e){return e in kg}function Aw(e){typeof e.ease=="string"&&Fw(e.ease)&&(e.ease=kg[e.ease])}const fa=10;class Mw extends bg{constructor(t){Aw(t),pg(t),super(t),t.startTime!==void 0&&t.autoplay!==!1&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:r,onComplete:i,element:s,...o}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const a=new Zs({...o,autoplay:!1}),u=Math.max(fa,be.now()-this.startTime),c=ht(0,fa,u-fa),d=a.sample(u).value,{name:f}=this.options;s&&f&&gg(s,f,d),n.setWithVelocity(a.sample(Math.max(0,u-c)).value,d,c),a.stop()}}const Zd=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(it.test(e)||e==="0")&&!e.startsWith("url("));function Dw(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function Rw(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const s=e[e.length-1],o=Zd(i,t),a=Zd(s,t);return!o||!a?!1:Dw(e)||(n==="spring"||wg(n))&&r}function Dl(e){e.duration=0,e.type="keyframes"}const Sg=new Set(["opacity","clipPath","filter","transform"]),Lw=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function zw(e){for(let t=0;t<e.length;t++)if(typeof e[t]=="string"&&Lw.test(e[t]))return!0;return!1}const _w=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),Vw=Hm(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function Iw(e){var f;const{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:s,type:o,keyframes:a}=e;if(!(((f=t==null?void 0:t.owner)==null?void 0:f.current)instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:d}=t.owner.getProps();return Vw()&&n&&(Sg.has(n)||_w.has(n)&&zw(a))&&(n!=="transform"||!d)&&!c&&!r&&i!=="mirror"&&s!==0&&o!=="inertia"}const Bw=40;class Ow extends oc{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:o="loop",keyframes:a,name:u,motionValue:c,element:d,...f}){var y;super(),this.stop=()=>{var v,k;this._animation&&(this._animation.stop(),(v=this.stopTimeline)==null||v.call(this)),(k=this.keyframeResolver)==null||k.cancel()},this.createdAt=be.now();const p={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:s,repeatType:o,name:u,motionValue:c,element:d,...f},m=(d==null?void 0:d.KeyframeResolver)||ac;this.keyframeResolver=new m(a,(v,k,x)=>this.onKeyframesResolved(v,k,p,!x),u,c,d),(y=this.keyframeResolver)==null||y.scheduleResolve()}onKeyframesResolved(t,n,r,i){var x,h;this.keyframeResolver=void 0;const{name:s,type:o,velocity:a,delay:u,isHandoff:c,onUpdate:d}=r;this.resolvedAt=be.now();let f=!0;Rw(t,s,o,a)||(f=!1,(Qt.instantAnimations||!u)&&(d==null||d(To(t,r,n))),t[0]=t[t.length-1],Dl(r),r.repeat=0);const m={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>Bw?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...r,keyframes:t},y=f&&!c&&Iw(m),v=(h=(x=m.motionValue)==null?void 0:x.owner)==null?void 0:h.current;let k;if(y)try{k=new Mw({...m,element:v})}catch{k=new Zs(m)}else k=new Zs(m);k.finished.then(()=>{this.notifyFinished()}).catch(Ke),this.pendingTimeline&&(this.stopTimeline=k.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=k}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),jw()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}function jg(e,t,n,r=0,i=1){const s=Array.from(e).sort((c,d)=>c.sortNodePosition(d)).indexOf(t),o=e.size,a=(o-1)*r;return typeof n=="function"?n(s,o):i===1?s*r:a-s*r}const ef=30,$w=e=>!isNaN(parseFloat(e));class Uw{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var s;const i=be.now();if(this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((s=this.events.change)==null||s.notify(this.current),this.dependents))for(const o of this.dependents)o.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=be.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=$w(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Ju);const r=this.events[t].add(n);return t==="change"?()=>{r(),$.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=be.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>ef)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,ef);return Wm(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,n;(t=this.dependents)==null||t.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function or(e,t){return new Uw(e,t)}function Cg(e,t){if(e!=null&&e.inherit&&t){const{inherit:n,...r}=e;return{...t,...r}}return e}function lc(e,t){const n=(e==null?void 0:e[t])??(e==null?void 0:e.default)??e;return n!==e?Cg(n,e):n}const Hw={type:"spring",stiffness:500,damping:25,restSpeed:10},Ww=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Kw={type:"keyframes",duration:.8},Gw={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Yw=(e,{keyframes:t})=>t.length>2?Kw:mr.has(e)?e.startsWith("scale")?Ww(t[1]):Hw:Gw,Qw=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function qw(e){for(const t in e)if(!Qw.has(t))return!0;return!1}const uc=(e,t,n,r={},i,s)=>o=>{const a=lc(r,e)||{},u=a.delay||r.delay||0;let{elapsed:c=0}=r;c=c-_e(u);const d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-c,onUpdate:p=>{t.set(p),a.onUpdate&&a.onUpdate(p)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:s?void 0:i};qw(a)||Object.assign(d,Yw(e,d)),d.duration&&(d.duration=_e(d.duration)),d.repeatDelay&&(d.repeatDelay=_e(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let f=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(Dl(d),d.delay===0&&(f=!0)),(Qt.instantAnimations||Qt.skipAnimations||i!=null&&i.shouldSkipAnimations||a.skipAnimations)&&(f=!0,Dl(d),d.delay=0),d.allowFlatten=!a.type&&!a.ease,f&&!s&&t.get()!==void 0){const p=To(d.keyframes,a);if(p!==void 0){$.update(()=>{d.onUpdate(p),d.onComplete()});return}}return a.isSync?new Zs(d):new Ow(d)},Xw=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Jw(e){const t=Xw.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function Eg(e,t,n=1){const[r,i]=Jw(e);if(!r)return;const s=window.getComputedStyle(t).getPropertyValue(r);if(s){const o=s.trim();return Om(o)?parseFloat(o):o}return tc(i)?Eg(i,t,n+1):i}function tf(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function cc(e,t,n,r){if(typeof t=="function"){const[i,s]=tf(r);t=t(n!==void 0?n:e.custom,i,s)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,s]=tf(r);t=t(n!==void 0?n:e.custom,i,s)}return t}function yn(e,t,n){const r=e.getProps();return cc(r,t,n!==void 0?n:r.custom,e)}const Ng=new Set(["width","height","top","left","right","bottom",...hr]),Rl=e=>Array.isArray(e);function Zw(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,or(n))}function eb(e){return Rl(e)?e[e.length-1]||0:e}function tb(e,t){const n=yn(e,t);let{transitionEnd:r={},transition:i={},...s}=n||{};s={...s,...r};for(const o in s){const a=eb(s[o]);Zw(e,o,a)}}const fe=e=>!!(e&&e.getVelocity);function nb(e){return!!(fe(e)&&e.add)}function Ll(e,t){const n=e.getValue("willChange");if(nb(n))return n.add(t);if(!n&&Qt.WillChange){const r=new Qt.WillChange("auto");e.addValue("willChange",r),r.add(t)}}function dc(e){return e.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const rb="framerAppearId",Tg="data-"+dc(rb);function Pg(e){return e.props[Tg]}function ib({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Fg(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:s,transitionEnd:o,...a}=t;const u=e.getDefaultTransition();s=s?Cg(s,u):u;const c=s==null?void 0:s.reduceMotion,d=s==null?void 0:s.skipAnimations;r&&(s=r);const f=[],p=i&&e.animationState&&e.animationState.getState()[i],m=s==null?void 0:s.path;m&&m.animateVisualElement(e,a,s,n,f);for(const y in a){const v=e.getValue(y,e.latestValues[y]??null),k=a[y];if(k===void 0||p&&ib(p,y))continue;const x={delay:n,...lc(s||{},y)};d&&(x.skipAnimations=!0);const h=v.get();if(h!==void 0&&!v.isAnimating()&&!Array.isArray(k)&&k===h&&!x.velocity){$.update(()=>v.set(k));continue}let g=!1;if(window.MotionHandoffAnimation){const E=Pg(e);if(E){const j=window.MotionHandoffAnimation(E,y,$);j!==null&&(x.startTime=j,g=!0)}}Ll(e,y);const w=c??e.shouldReduceMotion;v.start(uc(y,v,k,w&&Ng.has(y)?{type:!1}:x,e,g));const S=v.animation;S&&f.push(S)}if(o){const y=()=>$.update(()=>{o&&tb(e,o)});f.length?Promise.all(f).then(y):y()}return f}function zl(e,t,n={}){var u;const r=yn(e,t,n.type==="exit"?(u=e.presenceContext)==null?void 0:u.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const s=r?()=>Promise.all(Fg(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(c=0)=>{const{delayChildren:d=0,staggerChildren:f,staggerDirection:p}=i;return sb(e,t,c,d,f,p,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[c,d]=a==="beforeChildren"?[s,o]:[o,s];return c().then(()=>d())}else return Promise.all([s(),o(n.delay)])}function sb(e,t,n=0,r=0,i=0,s=1,o){const a=[];for(const u of e.variantChildren)u.notify("AnimationStart",t),a.push(zl(u,t,{...o,delay:n+(typeof r=="function"?0:r)+jg(e.variantChildren,u,r,i,s)}).then(()=>u.notify("AnimationComplete",t)));return Promise.all(a)}function ob(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(s=>zl(e,s,n));r=Promise.all(i)}else if(typeof t=="string")r=zl(e,t,n);else{const i=typeof t=="function"?yn(e,t,n.custom):t;r=Promise.all(Fg(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const ab={test:e=>e==="auto",parse:e=>e},Ag=e=>t=>t.test(e),Mg=[pr,M,pt,mt,D2,M2,ab],nf=e=>Mg.find(Ag(e));function lb(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Um(e):!0}const ub=new Set(["brightness","contrast","saturate","opacity"]);function cb(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(nc)||[];if(!r)return e;const i=n.replace(r,"");let s=ub.has(t)?1:0;return r!==n&&(s*=100),t+"("+s+i+")"}const db=/\b([a-z-]*)\(.*?\)/gu,_l={...it,getAnimatableNone:e=>{const t=e.match(db);return t?t.map(cb).join(" "):e}},Vl={...it,getAnimatableNone:e=>{const t=it.parse(e);return it.createTransformer(e)(t.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},rf={...pr,transform:Math.round},fb={rotate:mt,pathRotation:mt,rotateX:mt,rotateY:mt,rotateZ:mt,scale:Gi,scaleX:Gi,scaleY:Gi,scaleZ:Gi,skew:mt,skewX:mt,skewY:mt,distance:M,translateX:M,translateY:M,translateZ:M,x:M,y:M,z:M,perspective:M,transformPerspective:M,opacity:di,originX:Ud,originY:Ud,originZ:M},eo={borderWidth:M,borderTopWidth:M,borderRightWidth:M,borderBottomWidth:M,borderLeftWidth:M,borderRadius:M,borderTopLeftRadius:M,borderTopRightRadius:M,borderBottomRightRadius:M,borderBottomLeftRadius:M,width:M,maxWidth:M,height:M,maxHeight:M,top:M,right:M,bottom:M,left:M,inset:M,insetBlock:M,insetBlockStart:M,insetBlockEnd:M,insetInline:M,insetInlineStart:M,insetInlineEnd:M,padding:M,paddingTop:M,paddingRight:M,paddingBottom:M,paddingLeft:M,paddingBlock:M,paddingBlockStart:M,paddingBlockEnd:M,paddingInline:M,paddingInlineStart:M,paddingInlineEnd:M,margin:M,marginTop:M,marginRight:M,marginBottom:M,marginLeft:M,marginBlock:M,marginBlockStart:M,marginBlockEnd:M,marginInline:M,marginInlineStart:M,marginInlineEnd:M,fontSize:M,backgroundPositionX:M,backgroundPositionY:M,...fb,zIndex:rf,fillOpacity:di,strokeOpacity:di,numOctaves:rf},pb={...eo,color:ne,backgroundColor:ne,outlineColor:ne,fill:ne,stroke:ne,borderColor:ne,borderTopColor:ne,borderRightColor:ne,borderBottomColor:ne,borderLeftColor:ne,filter:_l,WebkitFilter:_l,mask:Vl,WebkitMask:Vl},Dg=e=>pb[e],hb=new Set([_l,Vl]);function Rg(e,t){let n=Dg(e);return hb.has(n)||(n=it),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const mb=new Set(["auto","none","0"]);function gb(e,t,n){let r=0,i;for(;r<e.length&&!i;){const s=e[r];typeof s=="string"&&!mb.has(s)&&sr(s).values.length&&(i=e[r]),r++}if(i&&n)for(const s of t)e[s]=Rg(n,i)}class xb extends ac{constructor(t,n,r,i,s){super(t,n,r,i,s,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let d=0;d<t.length;d++){let f=t[d];if(typeof f=="string"&&(f=f.trim(),tc(f))){const p=Eg(f,n.current);p!==void 0&&(t[d]=p),d===t.length-1&&(this.finalKeyframe=f)}}if(this.resolveNoneKeyframes(),!Ng.has(r)||t.length!==2)return;const[i,s]=t,o=nf(i),a=nf(s),u=$d(i),c=$d(s);if(u!==c&&_t[r]){this.needsMeasurement=!0;return}if(o!==a)if(Xd(o)&&Xd(a))for(let d=0;d<t.length;d++){const f=t[d];typeof f=="string"&&(t[d]=parseFloat(f))}else _t[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)(t[i]===null||lb(t[i]))&&r.push(i);r.length&&gb(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=_t[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var a;const{element:t,name:n,unresolvedKeyframes:r}=this;if(!t||!t.current)return;const i=t.getValue(n);i&&i.jump(this.measuredOrigin,!1);const s=r.length-1,o=r[s];r[s]=_t[n](t.measureViewportBox(),window.getComputedStyle(t.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([u,c])=>{t.getValue(u).set(c)}),this.resolveNoneKeyframes()}}function Lg(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e=="string"){let r=document;const i=(n==null?void 0:n[e])??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(r=>r!=null)}const Il=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function hs(e){return $m(e)&&"offsetHeight"in e&&!("ownerSVGElement"in e)}const{schedule:fc}=ng(queueMicrotask,!1),Je={x:!1,y:!1};function zg(){return Je.x||Je.y}function yb(e){return e==="x"||e==="y"?Je[e]?null:(Je[e]=!0,()=>{Je[e]=!1}):Je.x||Je.y?null:(Je.x=Je.y=!0,()=>{Je.x=Je.y=!1})}function _g(e,t){const n=Lg(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function vb(e){return!(e.pointerType==="touch"||zg())}function wb(e,t,n={}){const[r,i,s]=_g(e,n);return r.forEach(o=>{let a=!1,u=!1,c;const d=()=>{o.removeEventListener("pointerleave",y)},f=k=>{c&&(c(k),c=void 0),d()},p=k=>{a=!1,window.removeEventListener("pointerup",p),window.removeEventListener("pointercancel",p),u&&(u=!1,f(k))},m=()=>{a=!0,window.addEventListener("pointerup",p,i),window.addEventListener("pointercancel",p,i)},y=k=>{if(k.pointerType!=="touch"){if(a){u=!0;return}f(k)}},v=k=>{if(!vb(k))return;u=!1;const x=t(o,k);typeof x=="function"&&(c=x,o.addEventListener("pointerleave",y,i))};o.addEventListener("pointerenter",v,i),o.addEventListener("pointerdown",m,i)}),s}const Vg=(e,t)=>t?e===t?!0:Vg(e,t.parentElement):!1,pc=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,bb=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function kb(e){return bb.has(e.tagName)||e.isContentEditable===!0}const Sb=new Set(["INPUT","SELECT","TEXTAREA"]);function jb(e){return Sb.has(e.tagName)||e.isContentEditable===!0}const ms=new WeakSet;function sf(e){return t=>{t.key==="Enter"&&e(t)}}function pa(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const Cb=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=sf(()=>{if(ms.has(n))return;pa(n,"down");const i=sf(()=>{pa(n,"up")}),s=()=>pa(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",s,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function of(e){return pc(e)&&!zg()}const af=new WeakSet;function Eb(e,t,n={}){const[r,i,s]=_g(e,n),o=a=>{const u=a.currentTarget;if(!of(a)||af.has(a))return;ms.add(u),n.stopPropagation&&af.add(a);const c=t(u,a),d=(m,y)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",p),ms.has(u)&&ms.delete(u),of(m)&&typeof c=="function"&&c(m,{success:y})},f=m=>{d(m,u===window||u===document||n.useGlobalTarget||Vg(u,m.target))},p=m=>{d(m,!1)};window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",p,i)};return r.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,i),hs(a)&&(a.addEventListener("focus",c=>Cb(c,i)),!kb(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),s}function hc(e){return $m(e)&&"ownerSVGElement"in e}const gs=new WeakMap;let Pt;const Ig=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+"Size"]:hc(r)&&"getBBox"in r?r.getBBox()[t]:r[n],Nb=Ig("inline","width","offsetWidth"),Tb=Ig("block","height","offsetHeight");function Pb({target:e,borderBoxSize:t}){var n;(n=gs.get(e))==null||n.forEach(r=>{r(e,{get width(){return Nb(e,t)},get height(){return Tb(e,t)}})})}function Fb(e){e.forEach(Pb)}function Ab(){typeof ResizeObserver>"u"||(Pt=new ResizeObserver(Fb))}function Mb(e,t){Pt||Ab();const n=Lg(e);return n.forEach(r=>{let i=gs.get(r);i||(i=new Set,gs.set(r,i)),i.add(t),Pt==null||Pt.observe(r)}),()=>{n.forEach(r=>{const i=gs.get(r);i==null||i.delete(t),i!=null&&i.size||Pt==null||Pt.unobserve(r)})}}const xs=new Set;let $n;function Db(){$n=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};xs.forEach(t=>t(e))},window.addEventListener("resize",$n)}function Rb(e){return xs.add(e),$n||Db(),()=>{xs.delete(e),!xs.size&&typeof $n=="function"&&(window.removeEventListener("resize",$n),$n=void 0)}}function lf(e,t){return typeof e=="function"?Rb(e):Mb(e,t)}function Lb(e){return hc(e)&&e.tagName==="svg"}const zb=[...Mg,ne,it],_b=e=>zb.find(Ag(e)),uf=()=>({translate:0,scale:1,origin:0,originPoint:0}),Un=()=>({x:uf(),y:uf()}),cf=()=>({min:0,max:0}),ie=()=>({x:cf(),y:cf()}),Vb=new WeakMap;function Po(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function fi(e){return typeof e=="string"||Array.isArray(e)}const mc=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],gc=["initial",...mc];function Fo(e){return Po(e.animate)||gc.some(t=>fi(e[t]))}function Bg(e){return!!(Fo(e)||e.variants)}function Ib(e,t,n){for(const r in t){const i=t[r],s=n[r];if(fe(i))e.addValue(r,i);else if(fe(s))e.addValue(r,or(i,{owner:e}));else if(s!==i)if(e.hasValue(r)){const o=e.getValue(r);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=e.getStaticValue(r);e.addValue(r,or(o!==void 0?o:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Bl={current:null},Og={current:!1},Bb=typeof window<"u";function Ob(){if(Og.current=!0,!!Bb)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Bl.current=e.matches;e.addEventListener("change",t),t()}else Bl.current=!1}const df=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let to={};function $g(e){to=e}function $b(){return to}class Ub{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,skipAnimations:s,blockInitialAnimation:o,visualState:a},u={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=ac,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const m=be.now();this.renderScheduledAt<m&&(this.renderScheduledAt=m,$.render(this.render,!1,!0))};const{latestValues:c,renderState:d}=a;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=d,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.skipAnimationsConfig=s,this.options=u,this.blockInitialAnimation=!!o,this.isControllingVariants=Fo(n),this.isVariantNode=Bg(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:f,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const m in p){const y=p[m];c[m]!==void 0&&fe(y)&&y.set(c[m])}}mount(t){var n,r;if(this.hasBeenMounted)for(const i in this.initialValues)(n=this.values.get(i))==null||n.jump(this.initialValues[i]),this.latestValues[i]=this.initialValues[i];this.current=t,Vb.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,s)=>this.bindToMotionValue(s,i)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Og.current||Ob(),this.shouldReduceMotion=Bl.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var t;this.projection&&this.projection.unmount(),qt(this.notifyUpdate),qt(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const r=this.features[n];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){if(this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)(),n.accelerate&&Sg.has(t)&&this.current instanceof HTMLElement){const{factory:o,keyframes:a,times:u,ease:c,duration:d}=n.accelerate,f=new bg({element:this.current,name:t,keyframes:a,times:u,ease:c,duration:_e(d)}),p=o(f);this.valueSubscriptions.set(t,()=>{p(),f.cancel()});return}const r=mr.has(t);r&&this.onBindTransform&&this.onBindTransform();const i=n.on("change",o=>{this.latestValues[t]=o,this.props.onUpdate&&$.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let s;typeof window<"u"&&window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),s&&s()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in to){const n=to[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const s=this.features[t];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ie()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<df.length;r++){const i=df[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s="on"+i,o=t[s];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=Ib(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=or(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){let r=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return r!=null&&(typeof r=="string"&&(Om(r)||Um(r))?r=parseFloat(r):!_b(r)&&it.test(n)&&(r=Rg(t,n)),this.setBaseTarget(t,fe(r)?r.get():r)),fe(r)?r.get():r}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var s;const{initial:n}=this.props;let r;if(typeof n=="string"||typeof n=="object"){const o=cc(this.props,n,(s=this.presenceContext)==null?void 0:s.custom);o&&(r=o[t])}if(n&&r!==void 0)return r;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!fe(i)?i:this.initialValues[t]!==void 0&&r===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Ju),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){fc.render(this.render)}}class Ug extends Ub{constructor(){super(...arguments),this.KeyframeResolver=xb}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){const r=t.style;return r?r[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;fe(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class tn{constructor(t){this.isMounted=!1,this.node=t}update(){}}function Hg({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function Hb({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function Wb(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function ha(e){return e===void 0||e===1}function Ol({scale:e,scaleX:t,scaleY:n}){return!ha(e)||!ha(t)||!ha(n)}function un(e){return Ol(e)||Wg(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Wg(e){return ff(e.x)||ff(e.y)}function ff(e){return e&&e!=="0%"}function no(e,t,n){const r=e-n,i=t*r;return n+i}function pf(e,t,n,r,i){return i!==void 0&&(e=no(e,i,r)),no(e,n,r)+t}function $l(e,t=0,n=1,r,i){e.min=pf(e.min,t,n,r,i),e.max=pf(e.max,t,n,r,i)}function Kg(e,{x:t,y:n}){$l(e.x,t.translate,t.scale,t.originPoint),$l(e.y,n.translate,n.scale,n.originPoint)}const hf=.999999999999,mf=1.0000000000001;function Kb(e,t,n,r=!1){var a;const i=n.length;if(!i)return;t.x=t.y=1;let s,o;for(let u=0;u<i;u++){s=n[u],o=s.projectionDelta;const{visualElement:c}=s.options;c&&c.props.style&&c.props.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&(ut(e.x,-s.scroll.offset.x),ut(e.y,-s.scroll.offset.y)),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Kg(e,o)),r&&un(s.latestValues)&&ys(e,s.latestValues,(a=s.layout)==null?void 0:a.layoutBox))}t.x<mf&&t.x>hf&&(t.x=1),t.y<mf&&t.y>hf&&(t.y=1)}function ut(e,t){e.min+=t,e.max+=t}function gf(e,t,n,r,i=.5){const s=O(e.min,e.max,i);$l(e,t,n,s,r)}function xf(e,t){return typeof e=="string"?parseFloat(e)/100*(t.max-t.min):e}function ys(e,t,n){const r=n??e;gf(e.x,xf(t.x,r.x),t.scaleX,t.scale,t.originX),gf(e.y,xf(t.y,r.y),t.scaleY,t.scale,t.originY)}function Gg(e,t){return Hg(Wb(e.getBoundingClientRect(),t))}function Gb(e,t,n){const r=Gg(e,n),{scroll:i}=t;return i&&(ut(r.x,i.offset.x),ut(r.y,i.offset.y)),r}const Yb={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Qb=hr.length;function qb(e,t,n){let r="",i=!0;for(let o=0;o<Qb;o++){const a=hr[o],u=e[a];if(u===void 0)continue;let c=!0;if(typeof u=="number")c=u===(a.startsWith("scale")?1:0);else{const d=parseFloat(u);c=a.startsWith("scale")?d===1:d===0}if(!c||n){const d=Il(u,eo[a]);if(!c){i=!1;const f=Yb[a]||a;r+=`${f}(${d}) `}n&&(t[a]=d)}}const s=e.pathRotation;return s&&(i=!1,r+=`rotate(${Il(s,eo.pathRotation)}) `),r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function xc(e,t,n){const{style:r,vars:i,transformOrigin:s}=e;let o=!1,a=!1;for(const u in t){const c=t[u];if(mr.has(u)){o=!0;continue}else if(ig(u)){i[u]=c;continue}else{const d=Il(c,eo[u]);u.startsWith("origin")?(a=!0,s[u]=d):r[u]=d}}if(t.transform||(o||n?r.transform=qb(t,e.transform,n):r.transform&&(r.transform="none")),a){const{originX:u="50%",originY:c="50%",originZ:d=0}=s;r.transformOrigin=`${u} ${c} ${d}`}}function Yg(e,{style:t,vars:n},r,i){const s=e.style;let o;for(o in t)s[o]=t[o];i==null||i.applyProjectionStyles(s,r);for(o in n)s.setProperty(o,n[o])}function yf(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Cr={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(M.test(e))e=parseFloat(e);else return e;const n=yf(e,t.target.x),r=yf(e,t.target.y);return`${n}% ${r}%`}},Xb={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=it.parse(e);if(i.length>5)return r;const s=it.createTransformer(e),o=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,u=n.y.scale*t.y;i[0+o]/=a,i[1+o]/=u;const c=O(a,u,.5);return typeof i[2+o]=="number"&&(i[2+o]/=c),typeof i[3+o]=="number"&&(i[3+o]/=c),s(i)}},Ul={borderRadius:{...Cr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Cr,borderTopRightRadius:Cr,borderBottomLeftRadius:Cr,borderBottomRightRadius:Cr,boxShadow:Xb};function Qg(e,{layout:t,layoutId:n}){return mr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Ul[e]||e==="opacity")}function yc(e,t,n){var o;const r=e.style,i=t==null?void 0:t.style,s={};if(!r)return s;for(const a in r)(fe(r[a])||i&&fe(i[a])||Qg(a,e)||((o=n==null?void 0:n.getValue(a))==null?void 0:o.liveStyle)!==void 0)&&(s[a]=r[a]);return s}function Jb(e){return window.getComputedStyle(e)}class Zb extends Ug{constructor(){super(...arguments),this.type="html",this.renderInstance=Yg}readValueFromInstance(t,n){var r;if(mr.has(n))return(r=this.projection)!=null&&r.isProjecting?Tl(n):vw(t,n);{const i=Jb(t),s=(ig(n)?i.getPropertyValue(n):i[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Gg(t,n)}build(t,n,r){xc(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return yc(t,n,r)}}const ek={offset:"stroke-dashoffset",array:"stroke-dasharray"},tk={offset:"strokeDashoffset",array:"strokeDasharray"};function nk(e,t,n=1,r=0,i=!0){e.pathLength=1;const s=i?ek:tk;e[s.offset]=`${-r}`,e[s.array]=`${t} ${n}`}const rk=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function qg(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:s=1,pathOffset:o=0,...a},u,c,d){if(xc(e,a,c),u){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:f,style:p}=e;f.transform&&(p.transform=f.transform,delete f.transform),(p.transform||f.transformOrigin)&&(p.transformOrigin=f.transformOrigin??"50% 50%",delete f.transformOrigin),p.transform&&(p.transformBox=(d==null?void 0:d.transformBox)??"fill-box",delete f.transformBox);for(const m of rk)f[m]!==void 0&&(p[m]=f[m],delete f[m]);t!==void 0&&(f.x=t),n!==void 0&&(f.y=n),r!==void 0&&(f.scale=r),i!==void 0&&nk(f,i,s,o,!1)}const Xg=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Jg=e=>typeof e=="string"&&e.toLowerCase()==="svg";function ik(e,t,n,r){Yg(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Xg.has(i)?i:dc(i),t.attrs[i])}function Zg(e,t,n){const r=yc(e,t,n);for(const i in e)if(fe(e[i])||fe(t[i])){const s=hr.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[s]=e[i]}return r}class sk extends Ug{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ie}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(mr.has(n)){const r=Dg(n);return r&&r.default||0}return n=Xg.has(n)?n:dc(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return Zg(t,n,r)}build(t,n,r){qg(t,n,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(t,n,r,i){ik(t,n,r,i)}mount(t){this.isSVGTag=Jg(t.tagName),super.mount(t)}}const ok=gc.length;function e0(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?e0(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<ok;n++){const r=gc[n],i=e.props[r];(fi(i)||i===!1)&&(t[r]=i)}return t}function t0(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const ak=[...mc].reverse(),lk=mc.length;function uk(e){return t=>Promise.all(t.map(({animation:n,options:r})=>ob(e,n,r)))}function ck(e){let t=uk(e),n=vf(),r=!0,i=!1;const s=c=>(d,f)=>{var m;const p=yn(e,f,c==="exit"?(m=e.presenceContext)==null?void 0:m.custom:void 0);if(p){const{transition:y,transitionEnd:v,...k}=p;d={...d,...k,...v}}return d};function o(c){t=c(e)}function a(c){const{props:d}=e,f=e0(e.parent)||{},p=[],m=new Set;let y={},v=1/0;for(let x=0;x<lk;x++){const h=ak[x],g=n[h],w=d[h]!==void 0?d[h]:f[h],S=fi(w),E=h===c?g.isActive:null;E===!1&&(v=x);let j=w===f[h]&&w!==d[h]&&S;if(j&&(r||i)&&e.manuallyAnimateOnMount&&(j=!1),g.protectedKeys={...y},!g.isActive&&E===null||!w&&!g.prevProp||Po(w)||typeof w=="boolean")continue;if(h==="exit"&&g.isActive&&E!==!0){g.prevResolvedValues&&(y={...y,...g.prevResolvedValues});continue}const C=dk(g.prevProp,w);let F=C||h===c&&g.isActive&&!j&&S||x>v&&S,N=!1;const L=Array.isArray(w)?w:[w];let G=L.reduce(s(h),{});E===!1&&(G={});const{prevResolvedValues:ve={}}=g,Me={...ve,...G},Qe=P=>{F=!0,m.has(P)&&(N=!0,m.delete(P)),g.needsAnimating[P]=!0;const D=e.getValue(P);D&&(D.liveStyle=!1)};for(const P in Me){const D=G[P],R=ve[P];if(y.hasOwnProperty(P))continue;let B=!1;Rl(D)&&Rl(R)?B=!t0(D,R)||C:B=D!==R,B?D!=null?Qe(P):m.add(P):D!==void 0&&m.has(P)?Qe(P):g.protectedKeys[P]=!0}g.prevProp=w,g.prevResolvedValues=G,g.isActive&&(y={...y,...G}),(r||i)&&e.blockInitialAnimation&&(F=!1);const Ee=j&&C;F&&(!Ee||N)&&p.push(...L.map(P=>{const D={type:h};if(typeof P=="string"&&(r||i)&&!Ee&&e.manuallyAnimateOnMount&&e.parent){const{parent:R}=e,B=yn(R,P);if(R.enteringChildren&&B){const{delayChildren:te}=B.transition||{};D.delay=jg(R.enteringChildren,e,te)}}return{animation:P,options:D}}))}if(m.size){const x={};if(typeof d.initial!="boolean"){const h=yn(e,Array.isArray(d.initial)?d.initial[0]:d.initial);h&&h.transition&&(x.transition=h.transition)}m.forEach(h=>{const g=e.getBaseTarget(h),w=e.getValue(h);w&&(w.liveStyle=!0),x[h]=g??null}),p.push({animation:x})}let k=!!p.length;return r&&(d.initial===!1||d.initial===d.animate)&&!e.manuallyAnimateOnMount&&(k=!1),r=!1,i=!1,k?t(p):Promise.resolve()}function u(c,d){var p;if(n[c].isActive===d)return Promise.resolve();(p=e.variantChildren)==null||p.forEach(m=>{var y;return(y=m.animationState)==null?void 0:y.setActive(c,d)}),n[c].isActive=d;const f=a(c);for(const m in n)n[m].protectedKeys={};return f}return{animateChanges:a,setActive:u,setAnimateFunction:o,getState:()=>n,reset:()=>{n=vf(),i=!0}}}function dk(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!t0(t,e):!1}function sn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function vf(){return{animate:sn(!0),whileInView:sn(),whileHover:sn(),whileTap:sn(),whileDrag:sn(),whileFocus:sn(),exit:sn()}}function Hl(e,t){e.min=t.min,e.max=t.max}function Xe(e,t){Hl(e.x,t.x),Hl(e.y,t.y)}function wf(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}const n0=1e-4,fk=1-n0,pk=1+n0,r0=.01,hk=0-r0,mk=0+r0;function ke(e){return e.max-e.min}function gk(e,t,n){return Math.abs(e-t)<=n}function bf(e,t,n,r=.5){e.origin=r,e.originPoint=O(t.min,t.max,e.origin),e.scale=ke(n)/ke(t),e.translate=O(n.min,n.max,e.origin)-e.originPoint,(e.scale>=fk&&e.scale<=pk||isNaN(e.scale))&&(e.scale=1),(e.translate>=hk&&e.translate<=mk||isNaN(e.translate))&&(e.translate=0)}function Ur(e,t,n,r){bf(e.x,t.x,n.x,r?r.originX:void 0),bf(e.y,t.y,n.y,r?r.originY:void 0)}function kf(e,t,n,r=0){const i=r?O(n.min,n.max,r):n.min;e.min=i+t.min,e.max=e.min+ke(t)}function xk(e,t,n,r){kf(e.x,t.x,n.x,r==null?void 0:r.x),kf(e.y,t.y,n.y,r==null?void 0:r.y)}function Sf(e,t,n,r=0){const i=r?O(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+ke(t)}function ro(e,t,n,r){Sf(e.x,t.x,n.x,r==null?void 0:r.x),Sf(e.y,t.y,n.y,r==null?void 0:r.y)}function jf(e,t,n,r,i){return e-=t,e=no(e,1/n,r),i!==void 0&&(e=no(e,1/i,r)),e}function yk(e,t=0,n=1,r=.5,i,s=e,o=e){if(pt.test(t)&&(t=parseFloat(t),t=O(o.min,o.max,t/100)-o.min),typeof t!="number")return;let a=O(s.min,s.max,r);e===s&&(a-=t),e.min=jf(e.min,t,n,a,i),e.max=jf(e.max,t,n,a,i)}function Cf(e,t,[n,r,i],s,o){yk(e,t[n],t[r],t[i],t.scale,s,o)}const vk=["x","scaleX","originX"],wk=["y","scaleY","originY"];function Ef(e,t,n,r){Cf(e.x,t,vk,n?n.x:void 0,r?r.x:void 0),Cf(e.y,t,wk,n?n.y:void 0,r?r.y:void 0)}function Nf(e){return e.translate===0&&e.scale===1}function i0(e){return Nf(e.x)&&Nf(e.y)}function Tf(e,t){return e.min===t.min&&e.max===t.max}function bk(e,t){return Tf(e.x,t.x)&&Tf(e.y,t.y)}function Pf(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function s0(e,t){return Pf(e.x,t.x)&&Pf(e.y,t.y)}function Ff(e){return ke(e.x)/ke(e.y)}function Af(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function lt(e){return[e("x"),e("y")]}function kk(e,t,n){let r="";const i=e.x.translate/t.x,s=e.y.translate/t.y,o=(n==null?void 0:n.z)||0;if((i||s||o)&&(r=`translate3d(${i}px, ${s}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:c,rotate:d,pathRotation:f,rotateX:p,rotateY:m,skewX:y,skewY:v}=n;c&&(r=`perspective(${c}px) ${r}`),d&&(r+=`rotate(${d}deg) `),f&&(r+=`rotate(${f}deg) `),p&&(r+=`rotateX(${p}deg) `),m&&(r+=`rotateY(${m}deg) `),y&&(r+=`skewX(${y}deg) `),v&&(r+=`skewY(${v}deg) `)}const a=e.x.scale*t.x,u=e.y.scale*t.y;return(a!==1||u!==1)&&(r+=`scale(${a}, ${u})`),r||"none"}const o0=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],Sk=o0.length,Mf=e=>typeof e=="string"?parseFloat(e):e,Df=e=>typeof e=="number"||M.test(e);function jk(e,t,n,r,i,s){i?(e.opacity=O(0,n.opacity??1,Ck(r)),e.opacityExit=O(t.opacity??1,0,Ek(r))):s&&(e.opacity=O(t.opacity??1,n.opacity??1,r));for(let o=0;o<Sk;o++){const a=o0[o];let u=Rf(t,a),c=Rf(n,a);if(u===void 0&&c===void 0)continue;u||(u=0),c||(c=0),u===0||c===0||Df(u)===Df(c)?(e[a]=Math.max(O(Mf(u),Mf(c),r),0),(pt.test(c)||pt.test(u))&&(e[a]+="%")):e[a]=c}(t.rotate||n.rotate)&&(e.rotate=O(t.rotate||0,n.rotate||0,r))}function Rf(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const Ck=a0(0,.5,Jm),Ek=a0(.5,.95,Ke);function a0(e,t,n){return r=>r<e?0:r>t?1:n(ci(e,t,r))}function Nk(e,t,n){const r=fe(e)?e:or(e);return r.start(uc("",r,t,n)),r.animation}function pi(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const Tk=(e,t)=>e.depth-t.depth;class Pk{constructor(){this.children=[],this.isDirty=!1}add(t){qu(this.children,t),this.isDirty=!0}remove(t){Qs(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(Tk),this.isDirty=!1,this.children.forEach(t)}}function Fk(e,t){const n=be.now(),r=({timestamp:i})=>{const s=i-n;s>=t&&(qt(r),e(s-t))};return $.setup(r,!0),()=>qt(r)}function vs(e){return fe(e)?e.get():e}class Ak{constructor(){this.members=[]}add(t){qu(this.members,t);for(let n=this.members.length-1;n>=0;n--){const r=this.members[n];if(r===t||r===this.lead||r===this.prevLead)continue;const i=r.instance;(!i||i.isConnected===!1)&&!r.snapshot&&(Qs(this.members,r),r.unmount())}t.scheduleRender()}remove(t){if(Qs(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){var n;for(let r=this.members.indexOf(t)-1;r>=0;r--){const i=this.members[r];if(i.isPresent!==!1&&((n=i.instance)==null?void 0:n.isConnected)!==!1)return this.promote(i),!0}return!1}promote(t,n){var i;const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.updateSnapshot(),t.scheduleRender();const{layoutDependency:s}=r.options,{layoutDependency:o}=t.options;(s===void 0||s!==o)&&(t.resumeFrom=r,n&&(r.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),(i=t.root)!=null&&i.isUpdating&&(t.isLayoutDirty=!0)),t.options.crossfade===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{var n,r,i,s,o;(r=(n=t.options).onExitComplete)==null||r.call(n),(o=(i=t.resumingFrom)==null?void 0:(s=i.options).onExitComplete)==null||o.call(s)})}scheduleRender(){this.members.forEach(t=>t.instance&&t.scheduleRender(!1))}removeLeadSnapshot(){var t;(t=this.lead)!=null&&t.snapshot&&(this.lead.snapshot=void 0)}}const ws={hasAnimatedSinceResize:!0,hasEverUpdated:!1},ma=["","X","Y","Z"],Mk=1e3;let Dk=0;function ga(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function l0(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=Pg(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:s}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",$,!(i||s))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&l0(r)}function u0({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},a=t==null?void 0:t()){this.id=Dk++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(zk),this.nodes.forEach($k),this.nodes.forEach(Uk),this.nodes.forEach(_k)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let u=0;u<this.path.length;u++)this.path[u].shouldResetTransform=!0;this.root===this&&(this.nodes=new Pk)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Ju),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const u=this.eventHandlers.get(o);u&&u.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=hc(o)&&!Lb(o),this.instance=o;const{layoutId:a,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(u||a)&&(this.isLayoutDirty=!0),e){let d,f=0;const p=()=>this.root.updateBlockedByResize=!1;$.read(()=>{f=window.innerWidth}),e(o,()=>{const m=window.innerWidth;m!==f&&(f=m,this.root.updateBlockedByResize=!0,d&&d(),d=Fk(p,250),ws.hasAnimatedSinceResize&&(ws.hasAnimatedSinceResize=!1,this.nodes.forEach(_f)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&c&&(a||u)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f,hasRelativeLayoutChanged:p,layout:m})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||c.getDefaultTransition()||Yk,{onLayoutAnimationStart:v,onLayoutAnimationComplete:k}=c.getProps(),x=!this.targetLayout||!s0(this.targetLayout,m),h=!f&&p;if(this.options.layoutRoot||this.resumeFrom||h||f&&(x||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const g={...lc(y,"layout"),onPlay:v,onComplete:k};(c.shouldReduceMotion||this.options.layoutRoot)&&(g.delay=0,g.type=!1),this.startAnimation(g),this.setAnimationOrigin(d,h,g.path)}else f||_f(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=m})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),qt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Hk),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&l0(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,(typeof f.latestValues.x=="string"||typeof f.latestValues.y=="string")&&(f.isLayoutDirty=!0),f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:u}=this.options;if(a===void 0&&!u)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const u=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),u&&this.nodes.forEach(Ik),this.nodes.forEach(Lf);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(zf);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Bk),this.nodes.forEach(Ok),this.nodes.forEach(Rk),this.nodes.forEach(Lk)):this.nodes.forEach(zf),this.clearAllSnapshots();const a=be.now();de.delta=ht(0,1e3/60,a-de.timestamp),de.timestamp=a,de.isProcessing=!0,aa.update.process(de),aa.preRender.process(de),aa.render.process(de),de.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,fc.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Vk),this.sharedNodes.forEach(Wk)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,$.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){$.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ke(this.snapshot.measuredBox.x)&&!ke(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let u=0;u<this.path.length;u++)this.path[u].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=ie()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&this.instance){const u=r(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:u,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:u}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!i0(this.projectionDelta),u=this.getTransformTemplate(),c=u?u(this.latestValues,""):void 0,d=c!==this.prevTransformTemplateValue;o&&this.instance&&(a||un(this.latestValues)||d)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let u=this.removeElementScroll(a);return o&&(u=this.removeTransform(u)),Qk(u),{animationId:this.root.animationId,measuredBox:a,layoutBox:u,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:o}=this.options;if(!o)return ie();const a=o.measureViewportBox();if(!(((c=this.scroll)==null?void 0:c.wasRoot)||this.path.some(qk))){const{scroll:d}=this.root;d&&(ut(a.x,d.offset.x),ut(a.y,d.offset.y))}return a}removeElementScroll(o){var u;const a=ie();if(Xe(a,o),(u=this.scroll)!=null&&u.wasRoot)return a;for(let c=0;c<this.path.length;c++){const d=this.path[c],{scroll:f,options:p}=d;d!==this.root&&f&&p.layoutScroll&&(f.wasRoot&&Xe(a,o),ut(a.x,f.offset.x),ut(a.y,f.offset.y))}return a}applyTransform(o,a=!1,u){var d,f;const c=u||ie();Xe(c,o);for(let p=0;p<this.path.length;p++){const m=this.path[p];!a&&m.options.layoutScroll&&m.scroll&&m!==m.root&&(ut(c.x,-m.scroll.offset.x),ut(c.y,-m.scroll.offset.y)),un(m.latestValues)&&ys(c,m.latestValues,(d=m.layout)==null?void 0:d.layoutBox)}return un(this.latestValues)&&ys(c,this.latestValues,(f=this.layout)==null?void 0:f.layoutBox),c}removeTransform(o){var u;const a=ie();Xe(a,o);for(let c=0;c<this.path.length;c++){const d=this.path[c];if(!un(d.latestValues))continue;let f;d.instance&&(Ol(d.latestValues)&&d.updateSnapshot(),f=ie(),Xe(f,d.measurePageBox())),Ef(a,d.latestValues,(u=d.snapshot)==null?void 0:u.layoutBox,f)}return un(this.latestValues)&&Ef(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==de.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var m;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==a;if(!(o||u&&this.isSharedProjectionDirty||this.isProjectionDirty||(m=this.parent)!=null&&m.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:f}=this.options;if(!this.layout||!(d||f))return;this.resolvedRelativeTargetAt=de.timestamp;const p=this.getClosestProjectingParent();p&&this.linkedParentVersion!==p.layoutVersion&&!p.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&p&&p.layout?this.createRelativeTarget(p,this.layout.layoutBox,p.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=ie(),this.targetWithTransforms=ie()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),xk(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Xe(this.target,this.layout.layoutBox),Kg(this.target,this.targetDelta)):Xe(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?this.createRelativeTarget(p,this.target,p.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Ol(this.parent.latestValues)||Wg(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(o,a,u){this.relativeParent=o,this.linkedParentVersion=o.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ie(),this.relativeTargetOrigin=ie(),ro(this.relativeTargetOrigin,a,u,this.options.layoutAnchor||void 0),Xe(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var y;const o=this.getLead(),a=!!this.resumingFrom||this!==o;let u=!0;if((this.isProjectionDirty||(y=this.parent)!=null&&y.isProjectionDirty)&&(u=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===de.timestamp&&(u=!1),u)return;const{layout:c,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||d))return;Xe(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,p=this.treeScale.y;Kb(this.layoutCorrected,this.treeScale,this.path,a),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=ie());const{target:m}=o;if(!m){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(wf(this.prevProjectionDelta.x,this.projectionDelta.x),wf(this.prevProjectionDelta.y,this.projectionDelta.y)),Ur(this.projectionDelta,this.layoutCorrected,m,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==p||!Af(this.projectionDelta.x,this.prevProjectionDelta.x)||!Af(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",m))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),o){const u=this.getStack();u&&u.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Un(),this.projectionDelta=Un(),this.projectionDeltaWithTransform=Un()}setAnimationOrigin(o,a=!1,u){const c=this.snapshot,d=c?c.latestValues:{},f={...this.latestValues},p=Un();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const m=ie(),y=c?c.source:void 0,v=this.layout?this.layout.source:void 0,k=y!==v,x=this.getStack(),h=!x||x.members.length<=1,g=!!(k&&!h&&this.options.crossfade===!0&&!this.path.some(Gk));this.animationProgress=0;let w;const S=u==null?void 0:u.interpolateProjection(o);this.mixTargetDelta=E=>{const j=E/1e3,C=S==null?void 0:S(j);C?(p.x.translate=C.x,p.x.scale=O(o.x.scale,1,j),p.x.origin=o.x.origin,p.x.originPoint=o.x.originPoint,p.y.translate=C.y,p.y.scale=O(o.y.scale,1,j),p.y.origin=o.y.origin,p.y.originPoint=o.y.originPoint):(Vf(p.x,o.x,j),Vf(p.y,o.y,j)),this.setTargetDelta(p),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ro(m,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),Kk(this.relativeTarget,this.relativeTargetOrigin,m,j),w&&bk(this.relativeTarget,w)&&(this.isProjectionDirty=!1),w||(w=ie()),Xe(w,this.relativeTarget)),k&&(this.animationValues=f,jk(f,d,this.latestValues,j,g,h)),C&&C.rotate!==void 0&&(this.animationValues||(this.animationValues=f),this.animationValues.pathRotation=C.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=j},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var a,u,c;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(c=(u=this.resumingFrom)==null?void 0:u.currentAnimation)==null||c.stop(),this.pendingAnimation&&(qt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=$.update(()=>{ws.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=or(0)),this.motionValue.jump(0,!1),this.currentAnimation=Nk(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:d=>{this.mixTargetDelta(d),o.onUpdate&&o.onUpdate(d)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Mk),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:u,layout:c,latestValues:d}=o;if(!(!a||!u||!c)){if(this!==o&&this.layout&&c&&c0(this.options.animationType,this.layout.layoutBox,c.layoutBox)){u=this.target||ie();const f=ke(this.layout.layoutBox.x);u.x.min=o.target.x.min,u.x.max=u.x.min+f;const p=ke(this.layout.layoutBox.y);u.y.min=o.target.y.min,u.y.max=u.y.min+p}Xe(a,u),ys(a,d),Ur(this.projectionDeltaWithTransform,this.layoutCorrected,a,d)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new Ak),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:u}={}){const c=this.getStack();c&&c.promote(this,u),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:u}=o;if((u.z||u.rotate||u.rotateX||u.rotateY||u.rotateZ||u.skewX||u.skewY)&&(a=!0),!a)return;const c={};u.z&&ga("z",o,c,this.animationValues);for(let d=0;d<ma.length;d++)ga(`rotate${ma[d]}`,o,c,this.animationValues),ga(`skew${ma[d]}`,o,c,this.animationValues);o.render();for(const d in c)o.setStaticValue(d,c[d]),this.animationValues&&(this.animationValues[d]=c[d]);o.scheduleRender()}applyProjectionStyles(o,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const u=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=vs(a==null?void 0:a.pointerEvents)||"",o.transform=u?u(this.latestValues,""):"none";return}const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=vs(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!un(this.latestValues)&&(o.transform=u?u({},""):"none",this.hasProjected=!1);return}o.visibility="";const d=c.animationValues||c.latestValues;this.applyTransformsToTarget();let f=kk(this.projectionDeltaWithTransform,this.treeScale,d);u&&(f=u(d,f)),o.transform=f;const{x:p,y:m}=this.projectionDelta;o.transformOrigin=`${p.origin*100}% ${m.origin*100}% 0`,c.animationValues?o.opacity=c===this?d.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:o.opacity=c===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const y in Ul){if(d[y]===void 0)continue;const{correct:v,applyTo:k,isCSSVariable:x}=Ul[y],h=f==="none"?d[y]:v(d[y],c);if(k){const g=k.length;for(let w=0;w<g;w++)o[k[w]]=h}else x?this.options.visualElement.renderState.vars[y]=h:o[y]=h}this.options.layoutId&&(o.pointerEvents=c===this?vs(a==null?void 0:a.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(Lf),this.root.sharedNodes.clear()}}}function Rk(e){e.updateLayout()}function Lk(e){var n;const t=((n=e.resumeFrom)==null?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:s}=e.options,o=t.source!==e.layout.source;if(s==="size")lt(f=>{const p=o?t.measuredBox[f]:t.layoutBox[f],m=ke(p);p.min=r[f].min,p.max=p.min+m});else if(s==="x"||s==="y"){const f=s==="x"?"y":"x";Hl(o?t.measuredBox[f]:t.layoutBox[f],r[f])}else c0(s,t.layoutBox,r)&&lt(f=>{const p=o?t.measuredBox[f]:t.layoutBox[f],m=ke(r[f]);p.max=p.min+m,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+m)});const a=Un();Ur(a,r,t.layoutBox);const u=Un();o?Ur(u,e.applyTransform(i,!0),t.measuredBox):Ur(u,r,t.layoutBox);const c=!i0(a);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:m}=f;if(p&&m){const y=e.options.layoutAnchor||void 0,v=ie();ro(v,t.layoutBox,p.layoutBox,y);const k=ie();ro(k,r,m.layoutBox,y),s0(v,k)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=k,e.relativeTargetOrigin=v,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:u,layoutDelta:a,hasLayoutChanged:c,hasRelativeLayoutChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function zk(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function _k(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Vk(e){e.clearSnapshot()}function Lf(e){e.clearMeasurements()}function Ik(e){e.isLayoutDirty=!0,e.updateLayout()}function zf(e){e.isLayoutDirty=!1}function Bk(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function Ok(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function _f(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function $k(e){e.resolveTargetDelta()}function Uk(e){e.calcProjection()}function Hk(e){e.resetSkewAndRotation()}function Wk(e){e.removeLeadSnapshot()}function Vf(e,t,n){e.translate=O(t.translate,0,n),e.scale=O(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function If(e,t,n,r){e.min=O(t.min,n.min,r),e.max=O(t.max,n.max,r)}function Kk(e,t,n,r){If(e.x,t.x,n.x,r),If(e.y,t.y,n.y,r)}function Gk(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const Yk={duration:.45,ease:[.4,0,.1,1]},Bf=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Of=Bf("applewebkit/")&&!Bf("chrome/")?Math.round:Ke;function $f(e){e.min=Of(e.min),e.max=Of(e.max)}function Qk(e){$f(e.x),$f(e.y)}function c0(e,t,n){return e==="position"||e==="preserve-aspect"&&!gk(Ff(t),Ff(n),.2)}function qk(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const Xk=u0({attachResizeListener:(e,t)=>pi(e,"resize",t),measureScroll:()=>{var e,t;return{x:document.documentElement.scrollLeft||((e=document.body)==null?void 0:e.scrollLeft)||0,y:document.documentElement.scrollTop||((t=document.body)==null?void 0:t.scrollTop)||0}},checkIsScrollRoot:()=>!0}),xa={current:void 0},d0=u0({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!xa.current){const e=new Xk({});e.mount(window),e.setOptions({layoutScroll:!0}),xa.current=e}return xa.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),vc=b.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function Uf(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function Jk(...e){return t=>{let n=!1;const r=e.map(i=>{const s=Uf(i,t);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let i=0;i<r.length;i++){const s=r[i];typeof s=="function"?s():Uf(e[i],null)}}}}function Zk(...e){return b.useCallback(Jk(...e),e)}class eS extends b.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(hs(n)&&t.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const r=n.offsetParent,i=hs(r)&&r.offsetWidth||0,s=hs(r)&&r.offsetHeight||0,o=getComputedStyle(n),a=this.props.sizeRef.current;a.height=parseFloat(o.height),a.width=parseFloat(o.width),a.top=n.offsetTop,a.left=n.offsetLeft,a.right=i-a.width-a.left,a.bottom=s-a.height-a.top,a.direction=o.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function tS({children:e,isPresent:t,anchorX:n,anchorY:r,root:i,pop:s}){var p;const o=b.useId(),a=b.useRef(null),u=b.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:c}=b.useContext(vc),d=((p=e.props)==null?void 0:p.ref)??(e==null?void 0:e.ref),f=Zk(a,d);return b.useInsertionEffect(()=>{const{width:m,height:y,top:v,left:k,right:x,bottom:h,direction:g}=u.current;if(t||s===!1||!a.current||!m||!y)return;const w=g==="rtl",S=n==="left"?w?`right: ${x}`:`left: ${k}`:w?`left: ${k}`:`right: ${x}`,E=r==="bottom"?`bottom: ${h}`:`top: ${v}`;a.current.dataset.motionPopId=o;const j=document.createElement("style");c&&(j.nonce=c);const C=i??document.head;return C.appendChild(j),j.sheet&&j.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${m}px !important;
            height: ${y}px !important;
            ${S}px !important;
            ${E}px !important;
          }
        `),()=>{var F;(F=a.current)==null||F.removeAttribute("data-motion-pop-id"),C.contains(j)&&C.removeChild(j)}},[t]),l.jsx(eS,{isPresent:t,childRef:a,sizeRef:u,pop:s,children:s===!1?e:b.cloneElement(e,{ref:f})})}const nS=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:o,anchorX:a,anchorY:u,root:c})=>{const d=Qu(rS),f=b.useId();let p=!0,m=b.useMemo(()=>(p=!1,{id:f,initial:t,isPresent:n,custom:i,onExitComplete:y=>{d.set(y,!0);for(const v of d.values())if(!v)return;r&&r()},register:y=>(d.set(y,!1),()=>d.delete(y))}),[n,d,r]);return s&&p&&(m={...m}),b.useMemo(()=>{d.forEach((y,v)=>d.set(v,!1))},[n]),b.useEffect(()=>{!n&&!d.size&&r&&r()},[n]),e=l.jsx(tS,{pop:o==="popLayout",isPresent:n,anchorX:a,anchorY:u,root:c,children:e}),l.jsx(No.Provider,{value:m,children:e})};function rS(){return new Map}function f0(e=!0){const t=b.useContext(No);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,s=b.useId();b.useEffect(()=>{if(e)return i(s)},[e]);const o=b.useCallback(()=>e&&r&&r(s),[s,r,e]);return!n&&r?[!1,o]:[!0]}const Yi=e=>e.key||"";function Hf(e){const t=[];return b.Children.forEach(e,n=>{b.isValidElement(n)&&t.push(n)}),t}const vn=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:s="sync",propagate:o=!1,anchorX:a="left",anchorY:u="top",root:c})=>{const[d,f]=f0(o),p=b.useMemo(()=>Hf(e),[e]),m=o&&!d?[]:p.map(Yi),y=b.useRef(!0),v=b.useRef(p),k=Qu(()=>new Map),x=b.useRef(new Set),[h,g]=b.useState(p),[w,S]=b.useState(p);Bm(()=>{y.current=!1,v.current=p;for(let C=0;C<w.length;C++){const F=Yi(w[C]);m.includes(F)?(k.delete(F),x.current.delete(F)):k.get(F)!==!0&&k.set(F,!1)}},[w,m.length,m.join("-")]);const E=[];if(p!==h){let C=[...p];for(let F=0;F<w.length;F++){const N=w[F],L=Yi(N);m.includes(L)||(C.splice(F,0,N),E.push(N))}return s==="wait"&&E.length&&(C=E),S(Hf(C)),g(p),null}const{forceRender:j}=b.useContext(Yu);return l.jsx(l.Fragment,{children:w.map(C=>{const F=Yi(C),N=o&&!d?!1:p===w||m.includes(F),L=()=>{if(x.current.has(F))return;if(k.has(F))x.current.add(F),k.set(F,!0);else return;let G=!0;k.forEach(ve=>{ve||(G=!1)}),G&&(j==null||j(),S(v.current),o&&(f==null||f()),r&&r())};return l.jsx(nS,{isPresent:N,initial:!y.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:s,root:c,onExitComplete:N?void 0:L,anchorX:a,anchorY:u,children:C},F)})})},p0=b.createContext({strict:!1}),Wf={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Kf=!1;function iS(){if(Kf)return;const e={};for(const t in Wf)e[t]={isEnabled:n=>Wf[t].some(r=>!!n[r])};$g(e),Kf=!0}function h0(){return iS(),$b()}function sS(e){const t=h0();for(const n in e)t[n]={...t[n],...e[n]};$g(t)}const oS=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function io(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||oS.has(e)}let m0=e=>!io(e);function aS(e){typeof e=="function"&&(m0=t=>t.startsWith("on")?!io(t):e(t))}try{aS(require("@emotion/is-prop-valid").default)}catch{}function lS(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||fe(e[i])||(m0(i)||n===!0&&io(i)||!t&&!io(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}const Ao=b.createContext({});function uS(e,t){if(Fo(e)){const{initial:n,animate:r}=e;return{initial:n===!1||fi(n)?n:void 0,animate:fi(r)?r:void 0}}return e.inherit!==!1?t:{}}function cS(e){const{initial:t,animate:n}=uS(e,b.useContext(Ao));return b.useMemo(()=>({initial:t,animate:n}),[Gf(t),Gf(n)])}function Gf(e){return Array.isArray(e)?e.join(" "):e}const wc=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function g0(e,t,n){for(const r in t)!fe(t[r])&&!Qg(r,n)&&(e[r]=t[r])}function dS({transformTemplate:e},t){return b.useMemo(()=>{const n=wc();return xc(n,t,e),Object.assign({},n.vars,n.style)},[t])}function fS(e,t){const n=e.style||{},r={};return g0(r,n,e),Object.assign(r,dS(e,t)),r}function pS(e,t){const n={},r=fS(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const x0=()=>({...wc(),attrs:{}});function hS(e,t,n,r){const i=b.useMemo(()=>{const s=x0();return qg(s,t,Jg(r),e.transformTemplate,e.style),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};g0(s,e.style,e),i.style={...s,...i.style}}return i}const mS=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function bc(e){return typeof e!="string"||e.includes("-")?!1:!!(mS.indexOf(e)>-1||/[A-Z]/u.test(e))}function gS(e,t,n,{latestValues:r},i,s=!1,o){const u=(o??bc(e)?hS:pS)(t,r,i,e),c=lS(t,typeof e=="string",s),d=e!==b.Fragment?{...c,...u,ref:n}:{},{children:f}=t,p=b.useMemo(()=>fe(f)?f.get():f,[f]);return b.createElement(e,{...d,children:p})}function xS({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:yS(n,r,i,e),renderState:t()}}function yS(e,t,n,r){const i={},s=r(e,{});for(const p in s)i[p]=vs(s[p]);let{initial:o,animate:a}=e;const u=Fo(e),c=Bg(e);t&&c&&!u&&e.inherit!==!1&&(o===void 0&&(o=t.initial),a===void 0&&(a=t.animate));let d=n?n.initial===!1:!1;d=d||o===!1;const f=d?a:o;if(f&&typeof f!="boolean"&&!Po(f)){const p=Array.isArray(f)?f:[f];for(let m=0;m<p.length;m++){const y=cc(e,p[m]);if(y){const{transitionEnd:v,transition:k,...x}=y;for(const h in x){let g=x[h];if(Array.isArray(g)){const w=d?g.length-1:0;g=g[w]}g!==null&&(i[h]=g)}for(const h in v)i[h]=v[h]}}}return i}const y0=e=>(t,n)=>{const r=b.useContext(Ao),i=b.useContext(No),s=()=>xS(e,t,r,i);return n?s():Qu(s)},vS=y0({scrapeMotionValuesFromProps:yc,createRenderState:wc}),wS=y0({scrapeMotionValuesFromProps:Zg,createRenderState:x0}),bS=Symbol.for("motionComponentSymbol");function kS(e,t,n){const r=b.useRef(n);b.useInsertionEffect(()=>{r.current=n});const i=b.useRef(null);return b.useCallback(s=>{var a;s&&((a=e.onMount)==null||a.call(e,s)),t&&(s?t.mount(s):t.unmount());const o=r.current;if(typeof o=="function")if(s){const u=o(s);typeof u=="function"&&(i.current=u)}else i.current?(i.current(),i.current=null):o(s);else o&&(o.current=s)},[t])}const v0=b.createContext({});function Tn(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function SS(e,t,n,r,i,s){var g,w;const{visualElement:o}=b.useContext(Ao),a=b.useContext(p0),u=b.useContext(No),c=b.useContext(vc),d=c.reducedMotion,f=c.skipAnimations,p=b.useRef(null),m=b.useRef(!1);r=r||a.renderer,!p.current&&r&&(p.current=r(e,{visualState:t,parent:o,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:d,skipAnimations:f,isSVG:s}),m.current&&p.current&&(p.current.manuallyAnimateOnMount=!0));const y=p.current,v=b.useContext(v0);y&&!y.projection&&i&&(y.type==="html"||y.type==="svg")&&jS(p.current,n,i,v);const k=b.useRef(!1);b.useInsertionEffect(()=>{y&&k.current&&y.update(n,u)});const x=n[Tg],h=b.useRef(!!x&&typeof window<"u"&&!((g=window.MotionHandoffIsComplete)!=null&&g.call(window,x))&&((w=window.MotionHasOptimisedAnimation)==null?void 0:w.call(window,x)));return Bm(()=>{m.current=!0,y&&(k.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),y.scheduleRenderMicrotask(),h.current&&y.animationState&&y.animationState.animateChanges())}),b.useEffect(()=>{y&&(!h.current&&y.animationState&&y.animationState.animateChanges(),h.current&&(queueMicrotask(()=>{var S;(S=window.MotionHandoffMarkAsComplete)==null||S.call(window,x)}),h.current=!1),y.enteringChildren=void 0)}),y}function jS(e,t,n,r){const{layoutId:i,layout:s,drag:o,dragConstraints:a,layoutScroll:u,layoutRoot:c,layoutAnchor:d,layoutCrossfade:f}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:w0(e.parent)),e.projection.setOptions({layoutId:i,layout:s,alwaysMeasureLayout:!!o||a&&Tn(a),visualElement:e,animationType:typeof s=="string"?s:"both",initialPromotionConfig:r,crossfade:f,layoutScroll:u,layoutRoot:c,layoutAnchor:d})}function w0(e){if(e)return e.options.allowProjection!==!1?e.projection:w0(e.parent)}function ya(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&sS(r);const s=n?n==="svg":bc(e),o=s?wS:vS;function a(c,d){let f;const p={...b.useContext(vc),...c,layoutId:CS(c)},{isStatic:m}=p,y=cS(c),v=o(c,m);if(!m&&typeof window<"u"){ES();const k=NS(p);f=k.MeasureLayout,y.visualElement=SS(e,v,p,i,k.ProjectionNode,s)}return l.jsxs(Ao.Provider,{value:y,children:[f&&y.visualElement?l.jsx(f,{visualElement:y.visualElement,...p}):null,gS(e,c,kS(v,y.visualElement,d),v,m,t,s)]})}a.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const u=b.forwardRef(a);return u[bS]=e,u}function CS({layoutId:e}){const t=b.useContext(Yu).id;return t&&e!==void 0?t+"-"+e:e}function ES(e,t){b.useContext(p0).strict}function NS(e){const t=h0(),{drag:n,layout:r}=t;if(!n&&!r)return{};const i={...n,...r};return{MeasureLayout:n!=null&&n.isEnabled(e)||r!=null&&r.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function TS(e,t){if(typeof Proxy>"u")return ya;const n=new Map,r=(s,o)=>ya(s,o,e,t),i=(s,o)=>r(s,o);return new Proxy(i,{get:(s,o)=>o==="create"?r:(n.has(o)||n.set(o,ya(o,void 0,e,t)),n.get(o))})}const PS=(e,t)=>t.isSVG??bc(e)?new sk(t):new Zb(t,{allowProjection:e!==b.Fragment});class FS extends tn{constructor(t){super(t),t.animationState||(t.animationState=ck(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Po(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let AS=0;class MS extends tn{constructor(){super(...arguments),this.id=AS++,this.isExitComplete=!1}update(){var s;if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;if(t&&r===!1){if(this.isExitComplete){const{initial:o,custom:a}=this.node.getProps();if(typeof o=="string"||typeof o=="object"&&o!==null&&!Array.isArray(o)){const u=yn(this.node,o,a);if(u){const{transition:c,transitionEnd:d,...f}=u;for(const p in f)(s=this.node.getValue(p))==null||s.jump(f[p])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const DS={animation:{Feature:FS},exit:{Feature:MS}};function ji(e){return{point:{x:e.pageX,y:e.pageY}}}const RS=e=>t=>pc(t)&&e(t,ji(t));function Hr(e,t,n,r){return pi(e,t,RS(n),r)}const b0=({current:e})=>e?e.ownerDocument.defaultView:null,Yf=(e,t)=>Math.abs(e-t);function LS(e,t){const n=Yf(e.x,t.x),r=Yf(e.y,t.y);return Math.sqrt(n**2+r**2)}const Qf=new Set(["auto","scroll"]);class k0{constructor(t,n,{transformPagePoint:r,contextWindow:i=window,dragSnapToOrigin:s=!1,distanceThreshold:o=3,element:a}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=m=>{this.handleScroll(m.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Qi(this.lastRawMoveEventInfo,this.transformPagePoint));const m=va(this.lastMoveEventInfo,this.history),y=this.startEvent!==null,v=LS(m.offset,{x:0,y:0})>=this.distanceThreshold;if(!y&&!v)return;const{point:k}=m,{timestamp:x}=de;this.history.push({...k,timestamp:x});const{onStart:h,onMove:g}=this.handlers;y||(h&&h(this.lastMoveEvent,m),this.startEvent=this.lastMoveEvent),g&&g(this.lastMoveEvent,m)},this.handlePointerMove=(m,y)=>{this.lastMoveEvent=m,this.lastRawMoveEventInfo=y,this.lastMoveEventInfo=Qi(y,this.transformPagePoint),$.update(this.updatePoint,!0)},this.handlePointerUp=(m,y)=>{this.end();const{onEnd:v,onSessionEnd:k,resumeAnimation:x}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const h=va(m.type==="pointercancel"?this.lastMoveEventInfo:Qi(y,this.transformPagePoint),this.history);this.startEvent&&v&&v(m,h),k&&k(m,h)},!pc(t))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.distanceThreshold=o,this.contextWindow=i||window;const u=ji(t),c=Qi(u,this.transformPagePoint),{point:d}=c,{timestamp:f}=de;this.history=[{...d,timestamp:f}];const{onSessionStart:p}=n;p&&p(t,va(c,this.history)),this.removeListeners=bi(Hr(this.contextWindow,"pointermove",this.handlePointerMove),Hr(this.contextWindow,"pointerup",this.handlePointerUp),Hr(this.contextWindow,"pointercancel",this.handlePointerUp)),a&&this.startScrollTracking(a)}startScrollTracking(t){let n=t.parentElement;for(;n;){const r=getComputedStyle(n);(Qf.has(r.overflowX)||Qf.has(r.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const n=this.scrollPositions.get(t);if(!n)return;const r=t===window,i=r?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},s={x:i.x-n.x,y:i.y-n.y};s.x===0&&s.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=s.x,this.lastMoveEventInfo.point.y+=s.y):this.history.length>0&&(this.history[0].x-=s.x,this.history[0].y-=s.y),this.scrollPositions.set(t,i),$.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),qt(this.updatePoint)}}function Qi(e,t){return t?{point:t(e.point)}:e}function qf(e,t){return{x:e.x-t.x,y:e.y-t.y}}function va({point:e},t){return{point:e,delta:qf(e,S0(t)),offset:qf(e,zS(t)),velocity:_S(t,.1)}}function zS(e){return e[0]}function S0(e){return e[e.length-1]}function _S(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=S0(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>_e(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>_e(t)*2&&(r=e[1]);const s=He(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const o={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function VS(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?O(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?O(n,e,r.max):Math.min(e,n)),e}function Xf(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function IS(e,{top:t,left:n,bottom:r,right:i}){return{x:Xf(e.x,n,i),y:Xf(e.y,t,r)}}function Jf(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function BS(e,t){return{x:Jf(e.x,t.x),y:Jf(e.y,t.y)}}function OS(e,t){let n=.5;const r=ke(e),i=ke(t);return i>r?n=ci(t.min,t.max-r,e.min):r>i&&(n=ci(e.min,e.max-i,t.min)),ht(0,1,n)}function $S(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Wl=.35;function US(e=Wl){return e===!1?e=0:e===!0&&(e=Wl),{x:Zf(e,"left","right"),y:Zf(e,"top","bottom")}}function Zf(e,t,n){return{min:ep(e,t),max:ep(e,n)}}function ep(e,t){return typeof e=="number"?e:e[t]||0}const HS=new WeakMap;class WS{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ie(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:r}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const s=f=>{n&&this.snapToCursor(ji(f).point),this.stopAnimation()},o=(f,p)=>{const{drag:m,dragPropagation:y,onDragStart:v}=this.getProps();if(m&&!y&&(this.openDragLock&&this.openDragLock(),this.openDragLock=yb(m),!this.openDragLock))return;this.latestPointerEvent=f,this.latestPanInfo=p,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),lt(x=>{let h=this.getAxisMotionValue(x).get()||0;if(pt.test(h)){const{projection:g}=this.visualElement;if(g&&g.layout){const w=g.layout.layoutBox[x];w&&(h=ke(w)*(parseFloat(h)/100))}}this.originPoint[x]=h}),v&&$.update(()=>v(f,p),!1,!0),Ll(this.visualElement,"transform");const{animationState:k}=this.visualElement;k&&k.setActive("whileDrag",!0)},a=(f,p)=>{this.latestPointerEvent=f,this.latestPanInfo=p;const{dragPropagation:m,dragDirectionLock:y,onDirectionLock:v,onDrag:k}=this.getProps();if(!m&&!this.openDragLock)return;const{offset:x}=p;if(y&&this.currentDirection===null){this.currentDirection=GS(x),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",p.point,x),this.updateAxis("y",p.point,x),this.visualElement.render(),k&&$.update(()=>k(f,p),!1,!0)},u=(f,p)=>{this.latestPointerEvent=f,this.latestPanInfo=p,this.stop(f,p),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{const{dragSnapToOrigin:f}=this.getProps();(f||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:d}=this.getProps();this.panSession=new k0(t,{onSessionStart:s,onStart:o,onMove:a,onSessionEnd:u,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,distanceThreshold:r,contextWindow:b0(this.visualElement),element:this.visualElement.current})}stop(t,n){const r=t||this.latestPointerEvent,i=n||this.latestPanInfo,s=this.isDragging;if(this.cancel(),!s||!i||!r)return;const{velocity:o}=i;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&$.postRender(()=>a(r,i))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!qi(t,i,this.currentDirection))return;const s=this.getAxisMotionValue(t);let o=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(o=VS(o,this.constraints[t],this.elastic[t])),s.set(o)}resolveConstraints(){var s;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(s=this.visualElement.projection)==null?void 0:s.layout,i=this.constraints;t&&Tn(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=IS(r.layoutBox,t):this.constraints=!1,this.elastic=US(n),i!==this.constraints&&!Tn(t)&&r&&this.constraints&&!this.hasMutatedConstraints&&lt(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=$S(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Tn(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;i.root&&(i.root.scroll=void 0,i.root.updateScroll());const s=Gb(r,i.root,this.visualElement.getTransformPagePoint());let o=BS(i.layout.layoutBox,s);if(n){const a=n(Hb(o));this.hasMutatedConstraints=!!a,a&&(o=Hg(a))}return o}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),u=this.constraints||{},c=lt(d=>{if(!qi(d,n,this.currentDirection))return;let f=u&&u[d]||{};(o===!0||o===d)&&(f={min:0,max:0});const p=i?200:1e6,m=i?40:1e7,y={type:"inertia",velocity:r?t[d]:0,bounceStiffness:p,bounceDamping:m,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(d,y)});return Promise.all(c).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Ll(this.visualElement,t),r.start(uc(t,r,0,n,this.visualElement,!1))}stopAnimation(){lt(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,i=this.visualElement.getProps()[n];return i||this.visualElement.getValue(t,this.visualElement.latestValues[t]??0)}snapToCursor(t){lt(n=>{const{drag:r}=this.getProps();if(!qi(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:a}=i.layout.layoutBox[n],u=s.get()||0;s.set(t[n]-O(o,a,.5)+u)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Tn(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};lt(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const u=a.get();i[o]=OS({min:u,max:u},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),lt(o=>{if(!qi(o,t,null))return;const a=this.getAxisMotionValue(o),{min:u,max:c}=this.constraints[o];a.set(O(u,c,i[o]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;HS.set(this.visualElement,this);const t=this.visualElement.current,n=Hr(t,"pointerdown",c=>{const{drag:d,dragListener:f=!0}=this.getProps(),p=c.target,m=p!==t&&jb(p);d&&f&&!m&&this.start(c)});let r;const i=()=>{const{dragConstraints:c}=this.getProps();Tn(c)&&c.current&&(this.constraints=this.resolveRefConstraints(),r||(r=KS(t,c.current,()=>this.scalePositionWithinConstraints())))},{projection:s}=this.visualElement,o=s.addEventListener("measure",i);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),$.read(i);const a=pi(window,"resize",()=>this.scalePositionWithinConstraints()),u=s.addEventListener("didUpdate",({delta:c,hasLayoutChanged:d})=>{this.isDragging&&d&&(lt(f=>{const p=this.getAxisMotionValue(f);p&&(this.originPoint[f]+=c[f].translate,p.set(p.get()+c[f].translate))}),this.visualElement.render())});return()=>{a(),n(),o(),u&&u(),r&&r()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=Wl,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function tp(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function KS(e,t,n){const r=lf(e,tp(n)),i=lf(t,tp(n));return()=>{r(),i()}}function qi(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function GS(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class YS extends tn{constructor(t){super(t),this.removeGroupControls=Ke,this.removeListeners=Ke,this.controls=new WS(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ke}update(){const{dragControls:t}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};t!==n&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const wa=e=>(t,n)=>{e&&$.update(()=>e(t,n),!1,!0)};class QS extends tn{constructor(){super(...arguments),this.removePointerDownListener=Ke}onPointerDown(t){this.session=new k0(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:b0(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:wa(t),onStart:wa(n),onMove:wa(r),onEnd:(s,o)=>{delete this.session,i&&$.postRender(()=>i(s,o))}}}mount(){this.removePointerDownListener=Hr(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let ba=!1;class qS extends b.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=t;s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),ba&&s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),ws.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,{projection:o}=r;return o&&(o.isPresent=s,t.layoutDependency!==n&&o.setOptions({...o.options,layoutDependency:n}),ba=!0,i||t.layoutDependency!==n||n===void 0||t.isPresent!==s?o.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?o.promote():o.relegate()||$.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:t,layoutAnchor:n}=this.props,{projection:r}=t;r&&(r.options.layoutAnchor=n,r.root.didUpdate(),fc.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;ba=!0,i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function j0(e){const[t,n]=f0(),r=b.useContext(Yu);return l.jsx(qS,{...e,layoutGroup:r,switchLayoutGroup:b.useContext(v0),isPresent:t,safeToRemove:n})}const XS={pan:{Feature:QS},drag:{Feature:YS,ProjectionNode:d0,MeasureLayout:j0}};function np(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,s=r[i];s&&$.postRender(()=>s(t,ji(t)))}class JS extends tn{mount(){const{current:t}=this.node;t&&(this.unmount=wb(t,(n,r)=>(np(this.node,r,"Start"),i=>np(this.node,i,"End"))))}unmount(){}}class ZS extends tn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=bi(pi(this.node.current,"focus",()=>this.onFocus()),pi(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function rp(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),s=r[i];s&&$.postRender(()=>s(t,ji(t)))}class e5 extends tn{mount(){const{current:t}=this.node;if(!t)return;const{globalTapTarget:n,propagate:r}=this.node.props;this.unmount=Eb(t,(i,s)=>(rp(this.node,s,"Start"),(o,{success:a})=>rp(this.node,o,a?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const Kl=new WeakMap,ka=new WeakMap,t5=e=>{const t=Kl.get(e.target);t&&t(e)},n5=e=>{e.forEach(t5)};function r5({root:e,...t}){const n=e||document;ka.has(n)||ka.set(n,{});const r=ka.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(n5,{root:e,...t})),r[i]}function i5(e,t,n){const r=r5(t);return Kl.set(e,n),r.observe(e),()=>{Kl.delete(e),r.unobserve(e)}}const s5={some:0,all:1};class o5 extends tn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var u;(u=this.stopObserver)==null||u.call(this);const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=t,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:s5[i]},a=c=>{const{isIntersecting:d}=c;if(this.isInView===d||(this.isInView=d,s&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:f,onViewportLeave:p}=this.node.getProps(),m=d?f:p;m&&m(c)};this.stopObserver=i5(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(a5(t,n))&&this.startObserver()}unmount(){var t;(t=this.stopObserver)==null||t.call(this),this.hasEnteredView=!1,this.isInView=!1}}function a5({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const l5={inView:{Feature:o5},tap:{Feature:e5},focus:{Feature:ZS},hover:{Feature:JS}},u5={layout:{ProjectionNode:d0,MeasureLayout:j0}},c5={...DS,...l5,...XS,...u5},ae=TS(c5,PS);function d5({disease:e,prefix:t,values:n,onChange:r}){const i=wi[e];return i?l.jsx("div",{className:"space-y-3",children:i.fields.map(s=>l.jsxs("div",{children:[l.jsx("label",{className:"form-label",children:s.label}),s.type==="select"?l.jsx("select",{className:"form-input",value:n[s.id]??"",onChange:o=>r(s.id,o.target.value),children:s.options.map(([o,a])=>l.jsx("option",{value:o,children:a},o))}):l.jsx("input",{type:"number",className:"form-input",placeholder:s.placeholder,value:n[s.id]??"",min:s.min,max:s.max,step:s.step,onChange:o=>r(s.id,o.target.value)})]},s.id))}):null}function C0(e,t){return t===""||t===null||t===void 0?null:e.type==="number"?parseFloat(t)||null:t==="true"?!0:t==="false"?!1:t}const f5=`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap');

.rt * {
  box-sizing: border-box;
}

.rt {
  font-family: 'Inter', sans-serif;
  background:
    radial-gradient(circle at top left, rgba(26,127,90,.08), transparent 32%),
    radial-gradient(circle at top right, rgba(21,87,176,.08), transparent 28%),
    #F4F7FB;

  min-height: 100vh;

  --bg: #F4F7FB;
  --surface: rgba(255,255,255,.92);
  --surface2: #FFFFFF;
  --border: #E3E8F2;
  --border2: #D1D9E8;

  --t1: #0F172A;
  --t2: #475569;
  --t3: #94A3B8;

  --accent: #1557B0;
  --accent-soft: #EAF2FF;
  --forest: #1A7F5A;
  --forest-soft: #ECFDF5;

  --danger: #C62828;
  --warn: #D97706;
  --ok: #15803D;

  --shadow:
    0 1px 2px rgba(15,23,42,.03),
    0 10px 30px rgba(15,23,42,.05);

  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 24px;
}

/* ───────────────────────────── */
/* Wrapper                       */
/* ───────────────────────────── */

.rt-wrap {
  width: 100%;
  max-width: 860px;
  margin: 0 auto;
  padding: 28px 18px 60px;
}

@media (min-width: 640px) {
  .rt-wrap {
    padding: 38px 24px 80px;
  }
}

/* ───────────────────────────── */
/* Header                        */
/* ───────────────────────────── */

.rt-header {
  margin-bottom: 24px;
}

.rt-page-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 7px;

  padding: 7px 12px;

  border-radius: 999px;
  border: 1px solid #D9E5FF;

  background: rgba(255,255,255,.9);
  color: var(--accent);

  font-size: 11px;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;

  backdrop-filter: blur(10px);

  margin-bottom: 16px;
}

.rt-page-title {
  font-size: 30px;
  font-weight: 800;
  letter-spacing: -.04em;
  color: var(--t1);
  margin: 0 0 10px;
  line-height: 1.1;
}

@media (max-width: 640px) {
  .rt-page-title {
    font-size: 25px;
  }
}

.rt-page-sub {
  font-size: 14px;
  line-height: 1.8;
  color: var(--t2);
  max-width: 680px;
  margin: 0;
}

/* ───────────────────────────── */
/* Vertical layout               */
/* ───────────────────────────── */

.rt-stack {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

/* ───────────────────────────── */
/* Card                          */
/* ───────────────────────────── */

.rt-card {
  background: var(--surface);
  border: 1px solid rgba(255,255,255,.7);
  border-radius: var(--radius-lg);
  overflow: hidden;

  backdrop-filter: blur(16px);

  box-shadow: var(--shadow);
}

.rt-card-head {
  display: flex;
  align-items: center;
  gap: 14px;

  padding: 22px 24px 18px;

  border-bottom: 1px solid var(--border);
}

.rt-card-icon {
  width: 46px;
  height: 46px;

  border-radius: 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;
}

.rt-card-body {
  padding: 24px;
}

@media (max-width: 640px) {
  .rt-card-head,
  .rt-card-body {
    padding: 18px;
  }
}

/* ───────────────────────────── */
/* Form                          */
/* ───────────────────────────── */

.rt-form {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.rt-field-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.rt-label {
  display: flex;
  align-items: center;
  gap: 7px;

  font-size: 11px;
  font-weight: 800;
  letter-spacing: .1em;
  text-transform: uppercase;

  color: var(--t3);
}

.rt-input,
.rt-textarea {
  width: 100%;
  border: 1.5px solid var(--border);

  background: #F8FAFD;
  color: var(--t1);

  font-family: inherit;
  outline: none;

  transition:
    border-color .18s ease,
    box-shadow .18s ease,
    background .18s ease;
}

.rt-input {
  height: 52px;
  padding: 0 16px;
  border-radius: var(--radius-md);

  font-size: 14px;
  font-weight: 600;

  appearance: none;
}

.rt-textarea {
  min-height: 120px;
  resize: vertical;

  padding: 14px 16px;
  border-radius: 18px;

  font-size: 14px;
  line-height: 1.7;
}

.rt-input:focus,
.rt-textarea:focus {
  background: #fff;
  border-color: rgba(21,87,176,.5);

  box-shadow: 0 0 0 4px rgba(21,87,176,.08);
}

.rt-input::placeholder,
.rt-textarea::placeholder {
  color: var(--t3);
}

select.rt-input {
  padding-right: 42px;

  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2394A3B8' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");

  background-repeat: no-repeat;
  background-position: right 16px center;
}

/* ───────────────────────────── */
/* Quick Select                  */
/* ───────────────────────────── */

.rt-section-title {
  display: flex;
  align-items: center;
  gap: 7px;

  font-size: 11px;
  font-weight: 800;
  letter-spacing: .1em;
  text-transform: uppercase;

  color: var(--t3);

  margin-bottom: 12px;
}

.rt-quick-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.rt-quick-btn {
  width: 100%;

  display: flex;
  align-items: center;
  gap: 14px;

  padding: 15px;

  border-radius: 18px;
  border: 1.5px solid var(--border);

  background: #fff;

  cursor: pointer;
  text-align: left;

  transition:
    transform .18s ease,
    border-color .18s ease,
    background .18s ease,
    box-shadow .18s ease;
}

.rt-quick-btn:hover {
  transform: translateY(-1px);

  border-color: #C7D6F8;

  box-shadow:
    0 6px 20px rgba(15,23,42,.05);
}

.rt-quick-btn.active {
  border-color: rgba(21,87,176,.45);

  background: linear-gradient(
    180deg,
    #FFFFFF 0%,
    #F4F8FF 100%
  );

  box-shadow:
    0 0 0 4px rgba(21,87,176,.06);
}

.rt-pill-icon {
  width: 48px;
  height: 48px;

  border-radius: 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;

  background: #F3F6FB;

  flex-shrink: 0;
}

/* ───────────────────────────── */
/* Divider                       */
/* ───────────────────────────── */

.rt-divider {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--border),
    transparent
  );
}

/* ───────────────────────────── */
/* Notice                        */
/* ───────────────────────────── */

.rt-notice {
  display: flex;
  align-items: flex-start;
  gap: 12px;

  padding: 16px;

  border-radius: 18px;
  border: 1px solid;

  font-size: 13px;
  line-height: 1.7;
}

/* ───────────────────────────── */
/* Button                        */
/* ───────────────────────────── */

.rt-btn {
  width: 100%;
  height: 54px;

  border: none;
  border-radius: 18px;

  background:
    linear-gradient(
      135deg,
      #1557B0,
      #1A7F5A
    );

  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  font-family: inherit;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: .01em;

  cursor: pointer;

  transition:
    transform .16s ease,
    opacity .16s ease,
    box-shadow .18s ease;

  box-shadow:
    0 10px 25px rgba(21,87,176,.20);
}

.rt-btn:hover:not(:disabled) {
  transform: translateY(-1px);

  box-shadow:
    0 14px 28px rgba(21,87,176,.24);
}

.rt-btn:disabled {
  opacity: .7;
  cursor: not-allowed;
}

/* ───────────────────────────── */
/* Status                        */
/* ───────────────────────────── */

.rt-status {
  display: flex;
  align-items: flex-start;
  gap: 10px;

  margin-top: 14px;

  padding: 14px 16px;

  border-radius: 16px;
  border: 1px solid;

  font-size: 13px;
  font-weight: 600;
  line-height: 1.6;
}

/* ───────────────────────────── */
/* Queue / Registry              */
/* ───────────────────────────── */

.rt-vertical-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.rt-qbar,
.rt-reg-row {
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 16px;

  border-radius: 18px;

  border: 1px solid var(--border);

  background:
    linear-gradient(
      180deg,
      #FFFFFF 0%,
      #FAFBFD 100%
    );
}

.rt-qbar-top,
.rt-reg-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.rt-progress {
  width: 100%;
  height: 7px;

  border-radius: 999px;
  overflow: hidden;

  background: #E9EEF5;
}

.rt-stat {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 5px 10px;

  border-radius: 999px;

  background: #EAF2FF;
  color: var(--accent);

  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 700;

  white-space: nowrap;
}

/* ───────────────────────────── */
/* Promo                         */
/* ───────────────────────────── */

.rt-promo {
  position: relative;
  overflow: hidden;

  padding: 24px;

  border-radius: 24px;

  background:
    linear-gradient(
      135deg,
      #1557B0,
      #1A7F5A
    );

  color: white;

  box-shadow:
    0 18px 35px rgba(21,87,176,.18);
}

.rt-promo::before {
  content: '';

  position: absolute;
  top: -50px;
  right: -50px;

  width: 140px;
  height: 140px;

  border-radius: 50%;

  background: rgba(255,255,255,.07);
}

.rt-promo::after {
  content: '';

  position: absolute;
  bottom: -40px;
  left: -40px;

  width: 110px;
  height: 110px;

  border-radius: 50%;

  background: rgba(255,255,255,.06);
}

.rt-promo-icon {
  position: relative;
  z-index: 1;

  width: 50px;
  height: 50px;

  border-radius: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(255,255,255,.14);

  margin-bottom: 16px;
}

/* ───────────────────────────── */
/* Helpers                       */
/* ───────────────────────────── */

.rt-loading {
  display: flex;
  align-items: center;
  gap: 8px;

  color: var(--t3);

  font-size: 13px;
}

.rt-muted {
  color: var(--t3);
}

.rt-hint {
  padding: 13px 14px;

  border-radius: 14px;

  background: #F8FAFD;
  border: 1px solid var(--border);

  font-size: 12px;
  line-height: 1.7;
  color: var(--t2);
}
`,p5=[{id:"dengue",label:"Dengue",icon:"🦟"},{id:"measles",label:"Measles",icon:"🧒"},{id:"maternal",label:"Maternal / ANC",icon:"🤱"},{id:"diabetes",label:"Diabetes",icon:"🩸"},{id:"bp",label:"Hypertension",icon:"💓"}];function h5({label:e,count:t,threshold:n}){const r=Math.min(t/n*100,100),i=t>=n;return l.jsxs("div",{className:"rt-qbar",children:[l.jsxs("div",{className:"rt-qbar-top",children:[l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:14,fontWeight:700,color:"var(--t1)",marginBottom:4},children:e}),l.jsx("div",{style:{fontSize:12,color:"var(--t3)"},children:i?"Eligible for AI retraining":`${n-t} reports remaining`})]}),l.jsxs("span",{className:"rt-stat",children:[t,"/",n]})]}),l.jsx("div",{className:"rt-progress",children:l.jsx(ae.div,{initial:{width:0},animate:{width:`${r}%`},transition:{duration:.7},style:{height:"100%",borderRadius:999,background:i?"linear-gradient(90deg,#22C55E,#16A34A)":"linear-gradient(90deg,#1557B0,#1A7F5A)"}})})]})}const m5={blue:{bg:"#1557B0",soft:"#EAF2FF"},teal:{bg:"#1A7F5A",soft:"#ECFDF5"},violet:{bg:"#6B46C1",soft:"#F3EEFF"}};function Sa({title:e,subtitle:t,icon:n,accent:r="blue",children:i}){const s=m5[r];return l.jsxs(ae.div,{className:"rt-card",initial:{opacity:0,y:6},animate:{opacity:1,y:0},transition:{duration:.24},children:[l.jsxs("div",{className:"rt-card-head",children:[l.jsx("div",{className:"rt-card-icon",style:{background:s.soft,color:s.bg},children:n}),l.jsxs("div",{children:[l.jsx("h2",{style:{margin:0,fontSize:16,fontWeight:800,color:"var(--t1)",letterSpacing:"-.02em"},children:e}),l.jsx("p",{style:{margin:"5px 0 0",fontSize:12.5,lineHeight:1.5,color:"var(--t3)"},children:t})]})]}),l.jsx("div",{className:"rt-card-body",children:i})]})}function Xi({label:e,icon:t,children:n}){return l.jsxs("div",{className:"rt-field-group",children:[l.jsxs("label",{className:"rt-label",children:[t,e]}),n]})}function g5(){const[e,t]=b.useState(""),[n,r]=b.useState(""),[i,s]=b.useState("monitoring"),[o,a]=b.useState(""),[u,c]=b.useState({}),[d,f]=b.useState(!1),[p,m]=b.useState(null),[y,v]=b.useState(null),[k,x]=b.useState(null),h=b.useCallback(async()=>{try{const j=await fetch(`${ze}/queue-status`);v(await j.json())}catch{}},[]),g=b.useCallback(async()=>{try{const C=await(await fetch(`${ze}/case-registry`)).json();x(C.registry)}catch{}},[]);b.useEffect(()=>{h(),g()},[h,g]);function w(j){r(j),c({}),m(null)}const S=wi[n];async function E(){if(!e)return alert("Please select a division.");if(!n)return alert("Please select a disease.");f(!0),m(null);const j={division:e,symptoms:o||"Manual field observation",outcome:i,disease_suspected:n,worker_id:"shebika_"+Math.random().toString(36).substr(2,6)};S&&S.fields.forEach(C=>{const F=C0(C,u[C.id]);F!==null&&(j[C.id]=F)});try{const F=await(await fetch(`${ze}/field-report`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(j)})).json();if(F.report_type==="outbreak"){const N=F.queue_size||0;m({ok:!0,msg:F.retrain_triggered?`AI retraining triggered for ${e}.`:`Queue progress: ${N}/5`})}else m({ok:!0,msg:"Case added successfully."});h(),g()}catch{m({ok:!1,msg:"Submission failed. Please try again."})}finally{f(!1)}}return l.jsxs("div",{className:"rt",children:[l.jsx("style",{children:f5}),l.jsxs("div",{className:"rt-wrap",children:[l.jsxs("header",{className:"rt-header",children:[l.jsxs("div",{className:"rt-page-eyebrow",children:[l.jsx(Ys,{size:12}),"Community Health Intelligence"]}),l.jsx("h1",{className:"rt-page-title",children:"Field Reports Dashboard"}),l.jsx("p",{className:"rt-page-sub",children:"Submit disease observations, outbreak reports, and community health records for AI-assisted surveillance and real-time public health monitoring."})]}),l.jsxs("div",{className:"rt-stack",children:[l.jsx(Sa,{title:"Manual Health Report",subtitle:"Create and submit a structured field observation",icon:l.jsx(Xv,{size:18}),accent:"blue",children:l.jsxs("div",{className:"rt-form",children:[l.jsx(Xi,{label:"Division",icon:l.jsx(t2,{size:12}),children:l.jsxs("select",{className:"rt-input",value:e,onChange:j=>t(j.target.value),children:[l.jsx("option",{value:"",children:"Select division"}),Wu.map(j=>l.jsx("option",{value:j,children:j},j))]})}),l.jsx(Xi,{label:"Disease Domain",icon:l.jsx(Ku,{size:12}),children:l.jsxs("select",{className:"rt-input",value:n,onChange:j=>w(j.target.value),children:[l.jsx("option",{value:"",children:"Select disease"}),l.jsx("option",{value:"dengue",children:"Dengue"}),l.jsx("option",{value:"measles",children:"Measles"}),l.jsx("option",{value:"maternal",children:"Maternal / ANC"}),l.jsx("option",{value:"diabetes",children:"Diabetes"}),l.jsx("option",{value:"bp",children:"Hypertension"})]})}),l.jsxs("div",{children:[l.jsxs("div",{className:"rt-section-title",children:[l.jsx(Eo,{size:11,color:"#1557B0"}),"Quick Select"]}),l.jsx("div",{className:"rt-quick-grid",children:p5.map(j=>l.jsxs("button",{type:"button",className:`rt-quick-btn${n===j.id?" active":""}`,onClick:()=>w(j.id),children:[l.jsx("div",{className:"rt-pill-icon",children:j.icon}),l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:14,fontWeight:700,color:"var(--t1)",marginBottom:4},children:j.label}),l.jsx("div",{style:{fontSize:12,color:"var(--t3)"},children:"Tap to select"})]})]},j.id))})]}),l.jsx("div",{className:"rt-divider"}),l.jsx(vn,{children:S&&l.jsxs(ae.div,{initial:{opacity:0,y:4},animate:{opacity:1,y:0},exit:{opacity:0},className:"rt-notice",style:S.report_type==="outbreak"?{background:"#FFF7ED",borderColor:"#FCD34D",color:"var(--warn)"}:{background:"#EFF6FF",borderColor:"#BFDBFE",color:"var(--accent)"},children:[l.jsx(Lv,{size:16,style:{flexShrink:0,marginTop:2}}),l.jsxs("div",{children:[l.jsxs("div",{style:{fontWeight:700,marginBottom:6},children:[S.icon," ",S.report_type==="outbreak"?"Outbreak Monitoring":"Registry Tracking"]}),l.jsx("div",{style:{opacity:.9},children:S.report_type==="outbreak"?"This report contributes to outbreak surveillance and automatic AI retraining workflows.":"This report contributes to long-term chronic disease registry analytics."})]})]},n)}),l.jsx(vn,{children:S&&l.jsx(ae.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},style:{background:"#F8FAFD",border:"1px solid var(--border)",borderRadius:20,padding:18},children:l.jsx(d5,{disease:n,values:u,onChange:(j,C)=>c(F=>({...F,[j]:C}))})},`f-${n}`)}),l.jsx(Xi,{label:"Patient Outcome",icon:l.jsx(fr,{size:12}),children:l.jsxs("select",{className:"rt-input",value:i,onChange:j=>s(j.target.value),children:[l.jsx("option",{value:"monitoring",children:"Monitoring at home"}),l.jsx("option",{value:"treated",children:"Treated on site"}),l.jsx("option",{value:"referred",children:"Referred to facility"})]})}),l.jsxs(Xi,{label:"Additional Notes",icon:l.jsx(Bd,{size:12}),children:[l.jsx("textarea",{className:"rt-textarea",rows:5,value:o,onChange:j=>a(j.target.value),placeholder:"Symptoms, field observations, patient condition, or additional clinical context…"}),l.jsxs("div",{style:{marginTop:8,textAlign:"right",fontSize:12,color:"var(--t3)"},children:[o.length," characters"]})]}),l.jsxs("div",{children:[l.jsx("button",{className:"rt-btn",onClick:E,disabled:d,children:d?l.jsxs(l.Fragment,{children:[l.jsx(qn,{size:16,className:"animate-spin"}),"Submitting…"]}):l.jsxs(l.Fragment,{children:[l.jsx(s2,{size:15}),"Submit Field Report"]})}),l.jsx(vn,{children:p&&l.jsxs(ae.div,{initial:{opacity:0,y:-3},animate:{opacity:1,y:0},exit:{opacity:0},className:"rt-status",style:p.ok?{background:"#ECFDF5",borderColor:"#86EFAC",color:"var(--ok)"}:{background:"#FEF2F2",borderColor:"#FCA5A5",color:"var(--danger)"},children:[p.ok?l.jsx(Mm,{size:15,style:{flexShrink:0,marginTop:1}}):l.jsx(Dm,{size:15,style:{flexShrink:0,marginTop:1}}),p.msg]})})]})]})}),l.jsx(Sa,{title:"Outbreak Queue",subtitle:"AI retraining progress by disease",icon:l.jsx(Gs,{size:18}),accent:"violet",children:y?l.jsxs("div",{className:"rt-vertical-list",children:[["dengue","measles"].map(j=>{const C=y[j]||{count:0,threshold:5};return l.jsx(h5,{label:j.charAt(0).toUpperCase()+j.slice(1),count:C.count,threshold:C.threshold},j)}),l.jsx("div",{className:"rt-hint",children:"AI retraining activates automatically once outbreak thresholds are reached."})]}):l.jsxs("div",{className:"rt-loading",children:[l.jsx(qn,{size:14,className:"animate-spin"}),"Loading queue…"]})}),l.jsx(Sa,{title:"District Registry",subtitle:"Chronic disease case tracking",icon:l.jsx(Vm,{size:18}),accent:"teal",children:k?l.jsx("div",{className:"rt-vertical-list",children:Object.entries(k).map(([j,C])=>l.jsx("div",{className:"rt-reg-row",children:l.jsxs("div",{className:"rt-reg-top",children:[l.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[l.jsx("div",{style:{width:42,height:42,borderRadius:14,background:"#EFF6FF",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--accent)",flexShrink:0},children:l.jsx(Bd,{size:16})}),l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:13,fontWeight:800,color:"var(--t1)",letterSpacing:"-.01em"},children:C.disease.toUpperCase()}),l.jsx("div",{style:{fontSize:12,color:"var(--t3)",marginTop:3},children:C.division})]})]}),l.jsxs("span",{className:"rt-stat",children:[C.case_count," cases"]})]})},j))}):l.jsxs("div",{className:"rt-loading",children:[l.jsx(qn,{size:14,className:"animate-spin"}),"Loading registry…"]})}),l.jsxs("div",{className:"rt-promo",children:[l.jsx("div",{className:"rt-promo-icon",children:l.jsx(Gs,{size:20})}),l.jsx("h3",{style:{position:"relative",zIndex:1,fontSize:20,fontWeight:800,margin:"0 0 10px",letterSpacing:"-.03em"},children:"AI Health Monitoring"}),l.jsx("p",{style:{position:"relative",zIndex:1,fontSize:14,lineHeight:1.8,margin:0,color:"rgba(255,255,255,.86)"},children:"Real-time disease surveillance helps identify outbreaks faster and strengthens healthcare response across communities."})]})]})]})]})}function x5(){return l.jsxs(ae.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"flex flex-col items-center justify-center rounded-3xl border border-[#E6F2EF] bg-white px-6 py-20 text-center shadow-sm",children:[l.jsx("div",{className:"flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#ECFDF5] to-[#F0FDFA] text-[#0F766E] shadow-inner",children:l.jsx(Ku,{size:34})}),l.jsx("h3",{className:"mt-6 text-xl font-black tracking-tight text-[#0F172A]",children:"No cases logged yet"}),l.jsx("p",{className:"mt-2 max-w-sm text-sm leading-relaxed text-[#64748B]",children:"Field observations and patient sessions recorded today will appear here in real time."}),l.jsxs("div",{className:"mt-5 inline-flex items-center gap-2 rounded-full border border-[#A7F3D0] bg-[#ECFDF5] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#0F766E]",children:[l.jsx(Eo,{size:13}),"Live session monitoring active"]})]})}function Ji({icon:e,label:t,value:n,color:r}){return l.jsx(ae.div,{whileHover:{y:-2},className:"rounded-3xl border border-[#E6F2EF] bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg",children:l.jsxs("div",{className:"flex items-start justify-between",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-[11px] font-bold uppercase tracking-[0.18em] text-[#94A3B8]",children:t}),l.jsx("div",{className:"mt-3 text-3xl font-black tracking-tight",style:{color:r},children:n})]}),l.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-2xl",style:{backgroundColor:`${r}15`,color:r},children:e})]})})}function y5({entry:e,index:t}){const n=e.disease?wi[e.disease]:null,r=(n==null?void 0:n.color)||"#0F766E",i=(e.risk||"").toLowerCase(),s=i==="critical"?"from-[#EF4444] to-[#F97316]":i==="high"?"from-[#F59E0B] to-[#FBBF24]":"from-[#0F766E] to-[#14B8A6]";return l.jsxs(ae.div,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:t*.04},whileHover:{y:-2},className:"group overflow-hidden rounded-3xl border border-[#E6F2EF] bg-white shadow-sm transition-all duration-300 hover:shadow-xl",children:[l.jsx("div",{className:`h-1.5 w-full bg-gradient-to-r ${s}`}),l.jsx("div",{className:"p-5",children:l.jsxs("div",{className:"flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between",children:[l.jsxs("div",{className:"min-w-0 flex-1",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-lg shadow-sm",style:{backgroundColor:`${r}15`,color:r},children:(n==null?void 0:n.icon)||"🩺"}),l.jsxs("div",{className:"min-w-0",children:[l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[l.jsx("h3",{className:"truncate text-base font-black tracking-tight text-[#0F172A]",children:e.disease?e.disease.replaceAll("_"," ").replace(/\b\w/g,o=>o.toUpperCase()):"General Case"}),l.jsx(Co,{level:e.risk||"moderate"})]}),l.jsxs("div",{className:"mt-1 flex flex-wrap items-center gap-3 text-xs text-[#94A3B8]",children:[l.jsxs("div",{className:"flex items-center gap-1",children:[l.jsx($v,{size:12}),e.time]}),l.jsxs("div",{className:"flex items-center gap-1",children:[l.jsx(fr,{size:12}),"Session #",t+1]})]})]})]}),l.jsxs("div",{className:"mt-5 rounded-2xl border border-[#E6F2EF] bg-gradient-to-br from-[#F0FDFA] to-[#F8FAFC] p-4",children:[l.jsxs("div",{className:"mb-2 flex items-center gap-2 text-[#0F766E]",children:[l.jsx(_m,{size:14}),l.jsx("span",{className:"text-xs font-bold uppercase tracking-wide",children:"Symptoms & Notes"})]}),l.jsx("p",{className:"text-sm leading-relaxed text-[#334155]",children:e.symptoms||"No symptoms recorded."})]})]}),l.jsxs("div",{className:"flex flex-row gap-3 lg:flex-col",children:[e.followUp&&l.jsxs("div",{className:"inline-flex items-center gap-2 rounded-2xl border border-[#A7F3D0] bg-[#ECFDF5] px-3 py-2 text-xs font-semibold text-[#0F766E]",children:[l.jsx(Av,{size:13}),"Follow-up"]}),i==="critical"?l.jsxs("div",{className:"inline-flex items-center gap-2 rounded-2xl border border-[#FECACA] bg-[#FEF2F2] px-3 py-2 text-xs font-semibold text-[#B91C1C]",children:[l.jsx(Im,{size:13}),"Immediate attention"]}):l.jsxs("div",{className:"inline-flex items-center gap-2 rounded-2xl border border-[#A7F3D0] bg-[#ECFDF5] px-3 py-2 text-xs font-semibold text-[#0F766E]",children:[l.jsx(Ys,{size:13}),"Logged safely"]})]})]})})]})}function v5({sessionLog:e=[]}){const t=e.filter(i=>{var s;return((s=i.risk)==null?void 0:s.toLowerCase())==="critical"}).length,n=e.filter(i=>{var s;return((s=i.risk)==null?void 0:s.toLowerCase())==="high"}).length,r=new Set(e.map(i=>i.disease).filter(Boolean)).size;return l.jsxs("div",{className:"mx-auto max-w-7xl space-y-8 bg-gradient-to-b from-[#F0FDFA] via-white to-[#F8FAFC] px-4 py-8 animate-fadeIn",children:[l.jsxs("div",{className:"flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full border border-[#A7F3D0] bg-[#ECFDF5] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#0F766E]",children:[l.jsx(Eo,{size:13}),"Live Session Registry"]}),l.jsx("h1",{className:"mt-4 text-3xl font-black tracking-tight text-[#0F172A]",children:"Session Log"}),l.jsx("p",{className:"mt-2 max-w-2xl text-sm leading-relaxed text-[#64748B]",children:"Real-time overview of field observations, disease reports, and patient interactions recorded during today’s surveillance session."})]}),l.jsxs("div",{className:"rounded-3xl border border-[#E6F2EF] bg-white px-5 py-4 shadow-sm",children:[l.jsx("p",{className:"text-[11px] font-bold uppercase tracking-wide text-[#94A3B8]",children:"Active Cases Today"}),l.jsxs("div",{className:"mt-2 flex items-end gap-2",children:[l.jsx("span",{className:"text-4xl font-black text-[#0F766E]",children:e.length}),l.jsxs("span",{className:"pb-1 text-sm font-semibold text-[#94A3B8]",children:["case",e.length!==1?"s":""]})]})]})]}),l.jsxs("div",{className:"grid gap-4 sm:grid-cols-2 xl:grid-cols-4",children:[l.jsx(Ji,{label:"Total Cases",value:e.length,color:"#0F766E",icon:l.jsx(Ku,{size:18})}),l.jsx(Ji,{label:"Critical",value:t,color:"#EF4444",icon:l.jsx(Im,{size:18})}),l.jsx(Ji,{label:"High Risk",value:n,color:"#F59E0B",icon:l.jsx(fr,{size:18})}),l.jsx(Ji,{label:"Disease Types",value:r,color:"#14B8A6",icon:l.jsx(_m,{size:18})})]}),l.jsxs("div",{className:"overflow-hidden rounded-3xl border border-[#E6F2EF] bg-white shadow-sm",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-[#E6F2EF] px-6 py-5",children:[l.jsxs("div",{children:[l.jsx("h3",{className:"text-sm font-black text-[#0F172A]",children:"Case Timeline"}),l.jsx("p",{className:"mt-1 text-xs text-[#94A3B8]",children:"Chronological activity from today’s field session"})]}),l.jsx("div",{className:"hidden rounded-full border border-[#FDE68A] bg-[#FFFBEB] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#B45309] sm:block",children:"Live Updates"})]}),l.jsx("div",{className:"px-6 py-6",children:l.jsx(vn,{mode:"popLayout",children:e.length?l.jsx("div",{className:"space-y-5",children:e.map((i,s)=>l.jsx(y5,{entry:i,index:s},`${i.time}-${s}`))}):l.jsx(x5,{})})})]})]})}const w5="rounded-2xl border border-slate-200 bg-white",b5={initial:{opacity:0},animate:{opacity:1}},k5={initial:{opacity:0,y:10},animate:{opacity:1,y:0}},S5=[{value:"dengue",label:"Dengue",icon:"🦟"},{value:"measles",label:"Measles",icon:"🔴"},{value:"maternal",label:"Maternal / ANC",icon:"🤰"},{value:"diabetes",label:"Diabetes",icon:"🩸"},{value:"bp",label:"Hypertension",icon:"💊"}],j5={dengue:{label:"Dengue",icon:"🦟",accent:"#f97316"},measles:{label:"Measles",icon:"🔴",accent:"#ef4444"},maternal:{label:"Maternal / ANC",icon:"🤰",accent:"#ec4899"},diabetes:{label:"Diabetes",icon:"🩸",accent:"#8b5cf6"},bp:{label:"Hypertension",icon:"💊",accent:"#0ea5e9"}};function E0(e){switch((e||"").toLowerCase()){case"critical":return{glow:"shadow-red-100",bg:"bg-red-50",border:"border-red-200",text:"text-red-700"};case"high":return{glow:"shadow-orange-100",bg:"bg-orange-50",border:"border-orange-200",text:"text-orange-700"};default:return{glow:"shadow-amber-100",bg:"bg-amber-50",border:"border-amber-200",text:"text-amber-700"}}}function hi(e){return Math.max(0,Math.min(Number(e||0),100))}function C5(e){switch((e||"").toLowerCase()){case"critical":return"#dc2626";case"high":return"#ea580c";case"moderate":return"#ca8a04";default:return"#16a34a"}}function Zi({label:e,value:t,icon:n,color:r}){return l.jsx(ae.div,{whileHover:{y:-2},className:`${w5} relative overflow-hidden px-5 py-4 shadow-sm`,children:l.jsxs("div",{className:"flex items-start justify-between",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400",children:e}),l.jsx("div",{className:"mt-3 text-3xl font-black tracking-tight",style:{color:r},children:t})]}),l.jsx("div",{className:"flex h-11 w-11 items-center justify-center rounded-2xl",style:{backgroundColor:`${r}14`,color:r},children:n})]})})}function E5({perDiseaseScores:e}){return!e||Object.keys(e).length===0?null:l.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white overflow-hidden",children:[l.jsxs("div",{className:"flex items-center gap-2 border-b border-slate-100 px-5 py-4",children:[l.jsx(fr,{size:16,className:"text-slate-500"}),l.jsx("h4",{className:"text-sm font-bold text-slate-800",children:"Per-Disease Risk Breakdown"})]}),l.jsx("div",{className:"divide-y divide-slate-100",children:Object.entries(e).map(([t,n])=>{var a;const r=j5[t]||{label:t,icon:"🏥"},i=hi(n==null?void 0:n.score),s=C5(n==null?void 0:n.risk_level),o=((a=n==null?void 0:n.top_factors)==null?void 0:a[0])||"";return l.jsxs("div",{className:"px-5 py-4",children:[l.jsxs("div",{className:"flex items-center justify-between mb-3",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-base",children:r.icon}),l.jsx("span",{className:"text-sm font-bold text-slate-700",children:r.label})]}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("span",{className:"rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide",style:{backgroundColor:`${s}18`,color:s},children:(n==null?void 0:n.risk_level)||"N/A"}),l.jsx("span",{className:"text-lg font-black tabular-nums",style:{color:s},children:i})]})]}),l.jsx("div",{className:"h-1.5 overflow-hidden rounded-full bg-slate-100 mb-2",children:l.jsx(ae.div,{initial:{width:0},animate:{width:`${i}%`},transition:{duration:.6,ease:"easeOut"},className:"h-full rounded-full",style:{background:s}})}),o&&l.jsx("p",{className:"text-[11px] text-slate-400 truncate",children:o})]},t)})})]})}function N5({name:e,data:t,selected:n,onClick:r}){var c;const[i,s]=b.useState(0),o=hi(t==null?void 0:t.score),a=Fm[t==null?void 0:t.risk_level]||"#64748b",u=E0(t==null?void 0:t.risk_level);return b.useEffect(()=>{const d=setTimeout(()=>s(o),120);return()=>clearTimeout(d)},[o]),l.jsxs(ae.button,{whileHover:{y:-1},whileTap:{scale:.995},onClick:r,"aria-expanded":n,"aria-label":`View ${e} division details`,className:`group relative w-full overflow-hidden rounded-2xl border bg-white text-left transition-all duration-200 ${n?`border-slate-300 shadow-lg ${u.glow}`:"border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md"}`,children:[l.jsx("div",{className:"absolute left-0 top-0 h-full w-1.5",style:{background:a}}),l.jsxs("div",{className:"px-5 py-4",children:[l.jsxs("div",{className:"flex items-start justify-between gap-4",children:[l.jsxs("div",{className:"min-w-0 flex-1",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Gu,{size:15,className:"text-slate-400"}),l.jsxs("h3",{className:"truncate text-sm font-bold text-slate-800",children:[e," Division"]})]}),l.jsx("p",{className:"mt-1 truncate text-xs text-slate-400",children:((c=t==null?void 0:t.top_factors)==null?void 0:c[0])||"Live outbreak surveillance"})]}),l.jsxs("div",{className:"flex flex-col items-end gap-2",children:[l.jsx(Co,{level:t==null?void 0:t.risk_level}),l.jsx("div",{className:"text-lg font-black tabular-nums",style:{color:a},children:o})]})]}),l.jsxs("div",{className:"mt-4",children:[l.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[l.jsx("span",{className:"text-[11px] font-semibold uppercase tracking-wide text-slate-400",children:"Risk Score"}),l.jsx("span",{className:"text-[11px] font-semibold text-slate-500",children:"/100"})]}),l.jsx("div",{className:"h-2 overflow-hidden rounded-full bg-slate-100",children:l.jsx(ae.div,{initial:{width:0},animate:{width:`${i}%`},transition:{duration:.7,ease:"easeOut"},className:"h-full rounded-full",style:{background:a}})})]}),l.jsxs("div",{className:"mt-4 flex items-center justify-between",children:[l.jsx("span",{className:"text-[11px] font-medium text-slate-400",children:"Tap for live briefing"}),l.jsx(Dv,{size:16,className:`transition-transform duration-200 ${n?"rotate-180 text-slate-700":"text-slate-300"}`})]})]})]})}function T5({division:e}){const[t,n]=b.useState(""),[r,i]=b.useState("monitoring"),[s,o]=b.useState({}),[a,u]=b.useState(null),[c,d]=b.useState(!1),f=wi[t];async function p(){if(!t){u({ok:!1,msg:"Please select a suspected disease."});return}d(!0),u(null);const m={division:e,symptoms:"Field observation",outcome:r,disease_suspected:t,worker_id:"shebika_"+Math.random().toString(36).slice(2,8)};f&&f.fields.slice(0,2).forEach(y=>{const v=C0(y,s[y.id]);v!==null&&(m[y.id]=v)});try{const y=await fetch(`${ze}/field-report`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)});if(!y.ok)throw new Error("Failed to submit report");const v=await y.json();let k="Registry updated successfully.";v.report_type==="outbreak"&&(k=v.retrain_triggered?`AI retraining triggered for ${e}.`:`Queue updated: ${v.queue_size}/5`),u({ok:!0,msg:k}),o({})}catch{u({ok:!1,msg:"Could not submit report."})}finally{d(!1)}}return l.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-slate-50/80 p-5",children:[l.jsxs("div",{className:"mb-5 flex items-center gap-3",children:[l.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-100 text-blue-600",children:l.jsx(Bv,{size:18})}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-sm font-bold text-slate-800",children:"Quick Field Observation"}),l.jsx("p",{className:"text-xs text-slate-400",children:"Submit real-time community health data"})]})]}),l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{className:"grid gap-3 sm:grid-cols-2",children:[l.jsxs("select",{value:t,onChange:m=>{n(m.target.value),o({})},className:"h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 outline-none transition-all focus:border-blue-400 focus:ring-4 focus:ring-blue-100",children:[l.jsx("option",{value:"",children:"Select disease"}),S5.map(m=>l.jsxs("option",{value:m.value,children:[m.icon," ",m.label]},m.value))]}),l.jsxs("select",{value:r,onChange:m=>i(m.target.value),className:"h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 outline-none transition-all focus:border-blue-400 focus:ring-4 focus:ring-blue-100",children:[l.jsx("option",{value:"monitoring",children:"Monitoring"}),l.jsx("option",{value:"treated",children:"Treated"}),l.jsx("option",{value:"referred",children:"Referred"})]})]}),l.jsx(vn,{children:f&&l.jsxs(ae.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"space-y-3 overflow-hidden",children:[l.jsx("div",{className:`rounded-xl border px-4 py-3 text-xs font-semibold ${f.report_type==="outbreak"?"border-orange-200 bg-orange-50 text-orange-700":"border-blue-200 bg-blue-50 text-blue-700"}`,children:l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Eo,{size:13}),l.jsxs("span",{children:[f.icon," ",f.label]})]})}),f.fields.slice(0,2).map(m=>l.jsx("div",{children:m.type==="select"?l.jsx("select",{value:s[m.id]??"",onChange:y=>o(v=>({...v,[m.id]:y.target.value})),className:"h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none transition-all focus:border-blue-400 focus:ring-4 focus:ring-blue-100",children:m.options.map(([y,v])=>l.jsx("option",{value:y,children:v},y))}):l.jsx("input",{type:"number",min:m.min,max:m.max,placeholder:m.placeholder||m.label,value:s[m.id]??"",onChange:y=>o(v=>({...v,[m.id]:y.target.value})),className:"h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 placeholder:text-slate-400 outline-none transition-all focus:border-blue-400 focus:ring-4 focus:ring-blue-100"})},m.id))]})}),l.jsx("button",{onClick:p,disabled:c,className:"flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-sm font-bold text-white shadow-lg shadow-blue-100 transition-all hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60",children:c?l.jsxs(l.Fragment,{children:[l.jsx(qn,{size:15,className:"animate-spin"}),"Submitting..."]}):l.jsxs(l.Fragment,{children:["Submit Observation ",l.jsx(Ev,{size:15})]})}),l.jsx(vn,{children:a&&l.jsxs(ae.div,{...b5,exit:{opacity:0},className:`flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold ${a.ok?"border-emerald-200 bg-emerald-50 text-emerald-700":"border-red-200 bg-red-50 text-red-700"}`,children:[a.ok?l.jsx(Mm,{size:15}):l.jsx(Dm,{size:15}),a.msg]})})]})]})}function P5({division:e,data:t}){const[n,r]=b.useState("Loading briefing..."),i=hi(t==null?void 0:t.score),s=Fm[t==null?void 0:t.risk_level]||"#64748b",o=E0(t==null?void 0:t.risk_level);return b.useEffect(()=>{const a=new AbortController;async function u(){try{r("Loading briefing...");const c=await fetch(`${ze}/risk/${e}`,{signal:a.signal});if(!c.ok)throw new Error;const d=await c.json();r(d.worker_briefing||"No briefing available.")}catch{r(((t==null?void 0:t.top_factors)||[]).map(c=>`• ${c}`).join(`
`)||"Unable to load briefing.")}}return u(),()=>a.abort()},[e,t==null?void 0:t.top_factors]),l.jsxs(ae.div,{...k5,className:"overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-100",children:[l.jsxs("div",{className:`border-b px-6 py-5 ${o.bg} ${o.border}`,children:[l.jsxs("div",{className:"flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between",children:[l.jsx("div",{className:"min-w-0",children:l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-md",style:{background:s},children:l.jsx(zm,{size:20})}),l.jsxs("div",{children:[l.jsxs("h3",{className:"text-xl font-black tracking-tight text-slate-900",children:[e," Division"]}),l.jsxs("p",{className:"mt-1 text-sm text-slate-500",children:[(t==null?void 0:t.district_count)||0," districts monitored · ",t==null?void 0:t.risk_level," risk"]})]})]})}),l.jsxs("div",{className:"flex items-center gap-4",children:[l.jsx(Co,{level:t==null?void 0:t.risk_level}),l.jsxs("div",{className:"text-right",children:[l.jsx("div",{className:"text-4xl font-black leading-none",style:{color:s},children:i}),l.jsx("div",{className:"mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400",children:"Risk Score"})]})]})]}),l.jsx("div",{className:"mt-5",children:l.jsx("div",{className:"h-3 overflow-hidden rounded-full bg-white/60",children:l.jsx(ae.div,{initial:{width:0},animate:{width:`${i}%`},transition:{duration:.8},className:"h-full rounded-full",style:{background:s}})})})]}),l.jsxs("div",{className:"space-y-6 px-6 py-6",children:[l.jsxs("div",{className:"overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-green-50",children:[l.jsxs("div",{className:"flex items-center gap-2 border-b border-emerald-100 px-5 py-4",children:[l.jsx(Gs,{size:16,className:"text-emerald-600"}),l.jsx("h4",{className:"text-sm font-bold text-emerald-700",children:"AI Worker Briefing"})]}),l.jsx("div",{className:"px-5 py-5",children:l.jsx("p",{className:"whitespace-pre-wrap text-sm leading-relaxed text-slate-700",children:n})})]}),l.jsx(E5,{perDiseaseScores:t==null?void 0:t.per_disease_scores}),l.jsx(T5,{division:e})]})]})}function F5({isActive:e}){var k,x,h;const[t,n]=b.useState({}),[r,i]=b.useState({critical:[],high:[],moderate:[]}),[s,o]=b.useState(null),[a,u]=b.useState(null),[c,d]=b.useState(!1),[f,p]=b.useState(!0),m=b.useRef(null),y=b.useCallback(async(g=!1)=>{try{g||p(!0);const[w,S]=await Promise.all([fetch(`${ze}/risk/all`),fetch(`${ze}/alerts`)]);if(!w.ok||!S.ok)throw new Error;const E=await w.json();await S.json(),n(E.divisions||{}),i(E.summary||{critical:[],high:[],moderate:[]}),o(new Date().toLocaleTimeString()),d(!1)}catch{g||d(!0)}finally{p(!1)}},[]);b.useEffect(()=>{if(!e){m.current&&clearInterval(m.current);return}return y(),m.current=setInterval(()=>y(!0),3e4),()=>{m.current&&clearInterval(m.current)}},[e,y]);const v=b.useMemo(()=>Object.entries(t).sort((g,w)=>{var S,E;return hi((S=w[1])==null?void 0:S.score)-hi((E=g[1])==null?void 0:E.score)}),[t]);return l.jsxs("div",{className:"mx-auto max-w-7xl space-y-8 px-4 py-8 animate-fadeIn",children:[l.jsxs("div",{className:"flex flex-col gap-4",children:[l.jsxs("div",{className:"inline-flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-blue-700",children:[l.jsx(p2,{size:13}),"Live Surveillance Network"]}),l.jsxs("div",{className:"flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between",children:[l.jsxs("div",{children:[l.jsx("h1",{className:"text-3xl font-black tracking-tight text-slate-900 sm:text-4xl",children:"Bangladesh Risk Map"}),l.jsx("p",{className:"mt-2 max-w-2xl text-sm leading-relaxed text-slate-500",children:"Real-time division-level outbreak intelligence powered by live field reports, retraining feedback loops, public health datasets, and AI-assisted surveillance."})]}),s&&l.jsxs("div",{className:"flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm",children:[l.jsx("div",{className:"h-2 w-2 rounded-full bg-emerald-500 animate-pulse"}),l.jsxs("div",{children:[l.jsx("p",{className:"text-[11px] font-bold uppercase tracking-wide text-slate-400",children:"Last Updated"}),l.jsx("p",{className:"text-sm font-semibold text-slate-700",children:s})]})]})]})]}),l.jsxs("div",{className:"grid gap-4 sm:grid-cols-2 xl:grid-cols-4",children:[l.jsx(Zi,{label:"Critical",value:((k=r.critical)==null?void 0:k.length)??"–",color:"#dc2626",icon:l.jsx(zm,{size:18})}),l.jsx(Zi,{label:"High Risk",value:((x=r.high)==null?void 0:x.length)??"–",color:"#ea580c",icon:l.jsx(Vm,{size:18})}),l.jsx(Zi,{label:"Moderate",value:((h=r.moderate)==null?void 0:h.length)??"–",color:"#ca8a04",icon:l.jsx(fr,{size:18})}),l.jsx(Zi,{label:"Datasets",value:"13",color:"#0891b2",icon:l.jsx(Gs,{size:18})})]}),l.jsx(vn,{children:a&&t[a]&&l.jsx(P5,{division:a,data:t[a]})}),l.jsxs("div",{className:"overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm",children:[l.jsx("div",{className:"flex items-center justify-between border-b border-slate-100 px-6 py-5",children:l.jsxs("div",{children:[l.jsx("h3",{className:"text-sm font-black text-slate-800",children:"Division Risk Scores"}),l.jsx("p",{className:"mt-1 text-xs text-slate-400",children:"Tap a division to view disease analytics and AI briefing"})]})}),l.jsxs("div",{className:"px-6 py-6",children:[c&&l.jsxs("div",{className:"rounded-2xl border border-red-200 bg-red-50 px-5 py-6 text-center",children:[l.jsx("div",{className:"text-sm font-bold text-red-700",children:"Could not load risk data"}),l.jsx("p",{className:"mt-1 text-xs text-red-500",children:"Is the backend running on port 8000?"})]}),f&&!c&&l.jsx("div",{className:"space-y-4",children:[1,2,3].map(g=>l.jsx("div",{className:"h-28 animate-pulse rounded-2xl bg-slate-100"},g))}),!f&&!v.length&&!c&&l.jsxs("div",{className:"flex items-center justify-center gap-2 py-10 text-sm text-slate-400",children:[l.jsx(qn,{size:16,className:"animate-spin"}),"No live data available"]}),l.jsx("div",{className:"space-y-4",children:v.map(([g,w])=>l.jsx(N5,{name:g,data:w,selected:a===g,onClick:()=>u(S=>S===g?null:g)},g))})]})]})]})}const A5="modulepreload",M5=function(e){return"/"+e},ip={},D5=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=M5(u),u in ip)return;ip[u]=!0;const c=u.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${d}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":A5,c||(f.as="script"),f.crossOrigin="",f.href=u,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((p,m)=>{f.addEventListener("load",p),f.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})},R5=[{icon:jv,label:"National Emergency",number:"999",description:"24/7 emergency ambulance & police support",accent:"from-red-500 to-rose-500"},{icon:Rm,label:"DGHS Hotline",number:"16767",description:"Government health information hotline",accent:"from-blue-500 to-cyan-500"},{icon:Qv,label:"Maternal Care",number:"16743",description:"Maternal & neonatal emergency assistance",accent:"from-pink-500 to-rose-500"},{icon:fr,label:"Dengue Support",number:"10655",description:"Dengue prevention & response hotline",accent:"from-emerald-500 to-teal-500"}];function ja({title:e,subtitle:t,icon:n,children:r,accent:i="blue"}){const s={blue:"from-blue-500 to-cyan-500",emerald:"from-emerald-500 to-teal-500",rose:"from-rose-500 to-red-500"};return l.jsxs(ae.div,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.35},className:"bg-white border border-slate-200/80 rounded-3xl shadow-sm shadow-slate-100 overflow-hidden",children:[l.jsxs("div",{className:"flex items-center gap-4 px-6 py-5 border-b border-slate-100",children:[l.jsx("div",{className:`w-11 h-11 rounded-2xl bg-gradient-to-br ${s[i]} flex items-center justify-center text-white shadow-lg shadow-slate-200 flex-shrink-0`,children:n}),l.jsxs("div",{className:"min-w-0",children:[l.jsx("h2",{className:"text-[15px] font-bold text-slate-900 leading-tight",children:e}),l.jsx("p",{className:"text-xs text-slate-400 mt-1 leading-relaxed",children:t})]})]}),l.jsx("div",{className:"p-6",children:r})]})}function L5({facility:e}){const t=e.type==="tertiary";return l.jsx(ae.div,{whileHover:{y:-2},transition:{duration:.2},className:"group bg-slate-50/80 hover:bg-white border border-slate-200 rounded-2xl p-4 transition-all duration-200 hover:shadow-md",children:l.jsxs("div",{className:"flex items-start gap-4",children:[l.jsx("div",{className:`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm ${t?"bg-red-50 text-red-600":"bg-emerald-50 text-emerald-600"}`,children:t?l.jsx(Rm,{size:20}):l.jsx(Pv,{size:20})}),l.jsxs("div",{className:"min-w-0 flex-1",children:[l.jsxs("div",{className:"flex items-start justify-between gap-3",children:[l.jsxs("div",{className:"min-w-0",children:[l.jsx("h3",{className:"text-sm font-bold text-slate-800 leading-snug",children:e.name}),l.jsx("div",{className:"flex flex-wrap items-center gap-2 mt-2",children:l.jsx("span",{className:`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase ${t?"bg-red-100 text-red-700":"bg-emerald-100 text-emerald-700"}`,children:t?"Tertiary Hospital":"District Facility"})})]}),l.jsx("button",{className:"opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 hover:text-slate-700",title:"View location",children:l.jsx(Kv,{size:15})})]}),l.jsxs("div",{className:"flex items-center gap-1.5 mt-3 text-xs text-slate-500",children:[l.jsx(Gu,{size:13}),l.jsxs("span",{children:[e.lat.toFixed(3),", ",e.lng.toFixed(3)]})]})]})]})})}function z5({icon:e,label:t,number:n,description:r,accent:i}){return l.jsxs(ae.a,{whileHover:{y:-2},transition:{duration:.2},href:`tel:${n}`,className:"group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-200 hover:shadow-lg hover:shadow-slate-200 block",children:[l.jsx("div",{className:`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${i}`}),l.jsxs("div",{className:"flex items-start gap-4",children:[l.jsx("div",{className:`w-12 h-12 rounded-2xl bg-gradient-to-br ${i} text-white flex items-center justify-center shadow-md flex-shrink-0`,children:l.jsx(e,{size:18})}),l.jsxs("div",{className:"min-w-0 flex-1",children:[l.jsxs("div",{className:"flex items-center justify-between gap-3",children:[l.jsx("h3",{className:"text-sm font-bold text-slate-800",children:t}),l.jsx(Lm,{size:15,className:"text-slate-300 group-hover:text-slate-500 transition-colors"})]}),l.jsx("p",{className:"mt-1.5 text-[11px] text-slate-500 leading-relaxed",children:r}),l.jsx("div",{className:"mt-3 font-mono text-2xl font-black tracking-tight text-slate-900",children:n})]})]})]})}function _5({isActive:e}){const t=b.useRef(null),n=b.useRef(!1),[r,i]=b.useState(!0),s=b.useMemo(()=>jr.filter(a=>a.type==="tertiary").length,[]),o=b.useMemo(()=>jr.filter(a=>a.type==="district").length,[]);return b.useEffect(()=>{!e||n.current||D5(()=>import("./leaflet-src-DDvxc2vv.js").then(a=>a.l),[]).then(a=>{if(n.current)return;n.current=!0;const u=a.default.map(t.current,{zoomControl:!1}).setView([23.8103,90.4125],7);a.default.control.zoom({position:"topright"}).addTo(u),a.default.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"© OpenStreetMap"}).addTo(u);const c={tertiary:"#dc2626",district:"#059669"};jr.forEach(d=>{const f=d.type==="tertiary";a.default.circleMarker([d.lat,d.lng],{radius:f?10:8,fillColor:c[d.type],color:"#ffffff",weight:3,fillOpacity:.95}).addTo(u).bindPopup(`
            <div style="padding:4px 2px;min-width:180px">
              <div style="font-weight:700;font-size:14px;color:#0f172a;margin-bottom:6px">
                ${d.name}
              </div>

              <div style="
                display:inline-flex;
                align-items:center;
                gap:6px;
                padding:5px 10px;
                border-radius:999px;
                font-size:11px;
                font-weight:700;
                background:${f?"#fef2f2":"#ecfdf5"};
                color:${f?"#b91c1c":"#047857"};
              ">
                ${f?"🏥 Tertiary Hospital":"🏨 District Facility"}
              </div>
            </div>
          `)}),i(!1)})},[e]),l.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-8 space-y-7 animate-fadeIn",children:[l.jsxs("div",{className:"flex flex-col gap-4",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold tracking-wide uppercase",children:[l.jsx(Ys,{size:13}),"Emergency Referral Network"]}),l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{className:"max-w-3xl",children:[l.jsx("h1",{className:"text-3xl font-black tracking-tight text-slate-900",children:"National Referral Coordination"}),l.jsx("p",{className:"mt-2 text-sm leading-relaxed text-slate-500",children:"Real-time healthcare referral mapping for tertiary hospitals, district facilities, emergency response coordination, and community healthcare escalation pathways across Bangladesh."})]}),l.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:[{label:"Facilities",value:jr.length,color:"bg-blue-50 text-blue-700 border-blue-100"},{label:"Tertiary",value:s,color:"bg-red-50 text-red-700 border-red-100"},{label:"District",value:o,color:"bg-emerald-50 text-emerald-700 border-emerald-100"},{label:"Coverage",value:"8 Div",color:"bg-violet-50 text-violet-700 border-violet-100"}].map(a=>l.jsxs("div",{className:`rounded-2xl border px-4 py-4 ${a.color}`,children:[l.jsx("div",{className:"text-2xl font-black leading-none",children:a.value}),l.jsx("div",{className:"mt-1 text-[11px] font-bold uppercase tracking-wide opacity-80",children:a.label})]},a.label))})]})]}),l.jsxs(ja,{title:"Interactive Referral Map",subtitle:"Live overview of hospitals and district referral facilities",icon:l.jsx(Gu,{size:19}),accent:"blue",children:[l.jsxs("div",{className:"flex flex-wrap items-center gap-4 mb-5",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("div",{className:"w-3.5 h-3.5 rounded-full bg-red-600 ring-4 ring-red-100"}),l.jsx("span",{className:"text-xs font-semibold text-slate-600",children:"Tertiary Hospitals"})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("div",{className:"w-3 h-3 rounded-full bg-emerald-600 ring-4 ring-emerald-100"}),l.jsx("span",{className:"text-xs font-semibold text-slate-600",children:"District Facilities"})]}),l.jsx("div",{className:"text-xs text-slate-400 font-medium md:ml-auto",children:"Tap a marker for facility details"})]}),l.jsxs("div",{className:"relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-50",children:[r&&l.jsxs("div",{className:"absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-white/90 backdrop-blur-sm",children:[l.jsx(qn,{size:24,className:"animate-spin text-blue-500"}),l.jsx("p",{className:"text-sm font-medium text-slate-500",children:"Loading referral map..."})]}),l.jsx("div",{ref:t,className:"w-full",style:{height:540}})]})]}),l.jsx(ja,{title:"Priority Referral Facilities",subtitle:"High-capacity emergency and district healthcare centers",icon:l.jsx(Hv,{size:18}),accent:"emerald",children:l.jsx("div",{className:"space-y-4",children:jr.slice(0,8).map(a=>l.jsx(L5,{facility:a},`${a.name}-${a.lat}`))})}),l.jsx(ja,{title:"Emergency Hotlines",subtitle:"Direct access to national healthcare response services",icon:l.jsx(Lm,{size:18}),accent:"rose",children:l.jsx("div",{className:"space-y-4",children:R5.map(a=>l.jsx(z5,{...a},a.number))})}),l.jsxs("div",{className:"relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white p-6 shadow-xl shadow-emerald-200",children:[l.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_40%)]"}),l.jsx("div",{className:"absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/10"}),l.jsxs("div",{className:"relative z-10",children:[l.jsx("div",{className:"w-12 h-12 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center mb-5",children:l.jsx(Ys,{size:22})}),l.jsx("h3",{className:"text-xl font-black tracking-tight leading-tight",children:"Smart Referral Coordination"}),l.jsx("p",{className:"mt-3 text-sm leading-relaxed text-emerald-50",children:"Integrated emergency routing and referral escalation improve healthcare accessibility, reduce response delays, and support rapid outbreak intervention across divisions."}),l.jsx("div",{className:"mt-6 grid grid-cols-2 md:grid-cols-4 gap-3",children:["24/7 Emergency Support","Division Coverage","Live Referral Mapping","Rapid Escalation"].map(a=>l.jsx("div",{className:"rounded-2xl bg-white/10 backdrop-blur px-3 py-3 text-xs font-semibold text-center",children:a},a))})]})]})]})}function V5({onAcknowledge:e}){return l.jsx("div",{className:"fixed inset-0 z-[9999] flex items-center justify-center p-4",style:{background:"rgba(15,23,42,0.72)"},children:l.jsxs("div",{className:"w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl",children:[l.jsxs("div",{className:"flex items-center gap-3 bg-gradient-to-r from-[#0F766E] to-[#115E59] px-6 py-4",children:[l.jsx("div",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-lg text-white",children:"🏥"}),l.jsxs("div",{children:[l.jsx("div",{className:"text-sm font-semibold text-white",children:"JotnoSathi"}),l.jsx("div",{className:"text-[11px] text-white/70",children:"AI Clinical Decision Support"})]}),l.jsx("div",{className:"ml-auto rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-medium text-white",children:"BuildFest 2026"})]}),l.jsxs("div",{className:"px-6 py-5",children:[l.jsx("p",{className:"mb-4 text-sm font-semibold text-[#0F766E]",children:"⚕️ Important — Please read before use"}),l.jsxs("div",{className:"mb-5 space-y-3",children:[l.jsx(Er,{icon:"🤝",title:"Assists, does not replace",children:"Supports clinical judgment. Final decisions remain with healthcare professionals."}),l.jsx(Er,{icon:"📋",title:"Protocol-grounded",children:"Based on WHO + DGHS guidelines. No diagnosis is provided — only recommendations."}),l.jsxs(Er,{icon:"🚨",title:"Emergency cases",children:["Call"," ",l.jsx("a",{href:"tel:999",className:"font-bold text-red-500 underline",children:"999"})," ","immediately for emergencies. Do not wait for AI output."]}),l.jsx(Er,{icon:"🔒",title:"No personal data stored",children:"Reports are anonymized for district-level risk analysis only."}),l.jsx(Er,{icon:"🇧🇩",title:"For Shasthya Shebikas only",children:"Intended for trained community health workers under DGHS guidelines."})]}),l.jsxs("div",{className:"mb-5 border-l-4 border-[#0F766E] bg-[#F0FDFA] px-4 py-3",children:[l.jsx("p",{className:"text-sm font-medium text-[#0F766E]",children:"তুমি একজন সহায়তাকারী, রোগ নির্ণয় করছ না।"}),l.jsx("p",{className:"mt-0.5 text-xs text-[#64748B]",children:"You are assisting, not diagnosing."})]}),l.jsx("button",{onClick:e,className:"w-full rounded-xl bg-gradient-to-r from-[#0F766E] to-[#115E59] px-4 py-3 text-sm font-bold text-white shadow-md transition hover:opacity-95",children:"✅ I understand — Continue"}),l.jsx("p",{className:"mt-3 text-center text-[11px] text-[#94A3B8]",children:"This appears once per session"})]})]})})}function Er({icon:e,title:t,children:n}){return l.jsxs("div",{className:"flex items-start gap-3",children:[l.jsx("span",{className:"mt-0.5 text-base",children:e}),l.jsxs("div",{className:"text-xs leading-relaxed text-[#64748B]",children:[l.jsxs("span",{className:"font-semibold text-[#0F172A]",children:[t,"."," "]}),n]})]})}const I5=`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

  :root {
    --blue-900: #0B2D5E;
    --blue-700: #1A4F8A;
    --blue-600: #1A6DB5;
    --blue-500: #2E85D4;
    --blue-200: #B8D8F5;
    --blue-100: #D8ECFB;
    --blue-50:  #EEF6FD;
    --orange:   #F07D3A;
    --orange-50:#FEF1E8;
    --red-soft: #FDE8E8;
    --red-text: #C13333;
    --green-50: #E8F5EE;
    --green-600:#2E7D4A;
    --surface:  #F5F7FA;
    --border:   #E4EAF2;
    --border-md:#C8D6E8;
    --text-1:   #0F1E35;
    --text-2:   #3D546E;
    --text-3:   #7A90A8;
    --white:    #FFFFFF;
    --font:     'DM Sans', sans-serif;
    --mono:     'DM Mono', monospace;
    --radius-sm: 6px;
    --radius-md: 10px;
    --radius-lg: 14px;
    --radius-xl: 20px;
    --shadow-sm: 0 1px 3px rgba(11,45,94,0.06), 0 1px 2px rgba(11,45,94,0.04);
    --shadow-md: 0 4px 12px rgba(11,45,94,0.08), 0 2px 4px rgba(11,45,94,0.05);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: var(--font);
    background: var(--surface);
    color: var(--text-1);
    -webkit-font-smoothing: antialiased;
  }

  /* ── Sidebar ─────────────────────────────────────────────────── */
  .sidebar {
    display: none;
    flex-direction: column;
    background: var(--white);
    border-right: 1px solid var(--border);
    transition: width 280ms cubic-bezier(0.4,0,0.2,1);
    flex-shrink: 0;
    overflow: hidden;
  }
  @media (min-width: 768px) { .sidebar { display: flex; } }

  .sidebar-logo {
    display: flex;
    align-items: center;
    height: 64px;
    border-bottom: 1px solid var(--border);
    padding: 0 16px;
    gap: 12px;
    overflow: hidden;
  }
  .logo-mark {
    width: 34px; height: 34px; flex-shrink: 0;
    border-radius: var(--radius-md);
    display: flex; align-items: center; justify-content: center;
    overflow: hidden;
  }
  .logo-mark img { width: 34px; height: 34px; object-fit: contain; }
  .logo-text-wrap { overflow: hidden; white-space: nowrap; }
  .logo-name { font-size: 15px; font-weight: 600; color: var(--text-1); letter-spacing: -0.2px; }
  .logo-sub  { font-size: 10.5px; color: var(--text-3); font-weight: 400; margin-top: 1px; }

  .sidebar-nav { flex: 1; padding: 10px 8px; display: flex; flex-direction: column; gap: 2px; overflow-y: auto; }

  .nav-item {
    display: flex; align-items: center; gap: 10px;
    padding: 9px 10px; border-radius: var(--radius-md);
    font-size: 13.5px; font-weight: 500; color: var(--text-2);
    text-decoration: none; transition: all 150ms ease;
    cursor: pointer; overflow: hidden; white-space: nowrap;
    position: relative;
  }
  .nav-item:hover { background: var(--blue-50); color: var(--blue-700); }
  .nav-item.active {
    background: var(--blue-50);
    color: var(--blue-600);
  }
  .nav-item.active::before {
    content: '';
    position: absolute; left: 0; top: 20%; bottom: 20%;
    width: 3px; border-radius: 0 3px 3px 0;
    background: var(--blue-600);
  }
  .nav-item svg { width: 18px; height: 18px; flex-shrink: 0; opacity: 0.7; }
  .nav-item.active svg { opacity: 1; }
  .nav-dot {
    margin-left: auto; width: 6px; height: 6px;
    border-radius: 50%; background: var(--blue-500);
    flex-shrink: 0;
  }

  /* Tooltip for collapsed state */
  .nav-tooltip {
    position: absolute; left: calc(100% + 12px); top: 50%;
    transform: translateY(-50%);
    background: var(--blue-900); color: white;
    font-size: 12px; font-weight: 500; padding: 5px 10px;
    border-radius: var(--radius-sm); white-space: nowrap;
    opacity: 0; pointer-events: none;
    transition: opacity 120ms ease;
    box-shadow: var(--shadow-md);
    z-index: 999;
  }
  .nav-tooltip::before {
    content: '';
    position: absolute; right: 100%; top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-right-color: var(--blue-900);
  }
  .nav-item:hover .nav-tooltip { opacity: 1; }

  .sidebar-footer {
    border-top: 1px solid var(--border);
    padding: 10px 8px;
    display: flex; flex-direction: column; gap: 6px;
  }
  .status-chip {
    display: flex; align-items: center; gap: 7px;
    padding: 7px 10px; border-radius: var(--radius-md);
    font-size: 12px; font-weight: 500;
    overflow: hidden; white-space: nowrap;
  }
  .status-chip.online  { background: var(--green-50); color: var(--green-600); }
  .status-chip.offline { background: var(--orange-50); color: #A04B1A; }
  .status-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
  .status-dot.online  { background: var(--green-600); animation: pulse-dot 2s ease-in-out infinite; }
  .status-dot.offline { background: var(--orange); }
  @keyframes pulse-dot {
    0%,100% { box-shadow: 0 0 0 0 rgba(46,125,74,0.4); }
    50%      { box-shadow: 0 0 0 4px rgba(46,125,74,0); }
  }
  .collapse-btn {
    display: flex; align-items: center; gap: 8px;
    padding: 7px 10px; border-radius: var(--radius-md);
    font-size: 12px; color: var(--text-3);
    background: none; border: none; cursor: pointer;
    transition: all 150ms ease; width: 100%;
    overflow: hidden; white-space: nowrap;
  }
  .collapse-btn:hover { background: var(--surface); color: var(--text-2); }
  .collapse-btn svg { width: 15px; height: 15px; flex-shrink: 0; transition: transform 280ms ease; }

  /* ── Top bar ─────────────────────────────────────────────────── */
  .topbar {
    height: 64px; background: var(--white);
    border-bottom: 1px solid var(--border);
    display: none; align-items: center;
    padding: 0 24px; gap: 16px; flex-shrink: 0;
  }
  @media (min-width: 768px) { .topbar { display: flex; } }
  .topbar-title { font-size: 16px; font-weight: 600; color: var(--text-1); flex: 1; min-width: 0; }
  .topbar-alert {
    font-size: 11.5px; color: var(--red-text); font-weight: 500;
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }

  /* Alert ticker strip */
  .alert-ticker {
    background: var(--orange-50);
    border-bottom: 1px solid rgba(240,125,58,0.18);
    padding: 6px 24px;
    font-size: 12px; color: #7A3B1A;
    display: flex; align-items: center; gap: 10px;
    overflow: hidden;
  }
  .ticker-badge {
    display: flex; align-items: center; gap: 5px;
    background: var(--orange); color: white;
    font-size: 10.5px; font-weight: 600; padding: 3px 9px;
    border-radius: 20px; white-space: nowrap; flex-shrink: 0;
  }
  .ticker-badge svg { width: 11px; height: 11px; }
  .ticker-scroll { overflow: hidden; white-space: nowrap; }

  .live-badge {
    display: flex; align-items: center; gap: 6px;
    font-size: 12px; font-weight: 500; padding: 5px 12px;
    border-radius: 20px; white-space: nowrap;
    flex-shrink: 0;
  }
  .live-badge.online  { background: var(--green-50); color: var(--green-600); }
  .live-badge.offline { background: var(--orange-50); color: #A04B1A; }
  .live-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
  .live-dot.online  { background: var(--green-600); animation: pulse-dot 2s ease-in-out infinite; }
  .live-dot.offline { background: var(--orange); }

  .emergency-btn {
    display: flex; align-items: center; gap: 6px;
    background: var(--red-soft); color: var(--red-text);
    font-size: 12px; font-weight: 600; padding: 6px 14px;
    border-radius: 20px; text-decoration: none;
    transition: background 150ms ease; white-space: nowrap; flex-shrink: 0;
    border: 1px solid rgba(193,51,51,0.15);
  }
  .emergency-btn:hover { background: #fbd6d6; }
  .emergency-btn svg { width: 13px; height: 13px; }

  /* ── Mobile header / bottom nav ──────────────────────────────── */
  .mobile-header {
    display: flex; height: 56px;
    background: var(--white); border-bottom: 1px solid var(--border);
    align-items: center; padding: 0 16px; gap: 10px;
    flex-shrink: 0; position: sticky; top: 0; z-index: 40;
  }
  @media (min-width: 768px) { .mobile-header { display: none; } }
  .mobile-logo {
    width: 28px; height: 28px;
    background: linear-gradient(145deg, var(--blue-600), var(--blue-900));
    border-radius: 8px; display: flex; align-items: center; justify-content: center;
    box-shadow: 0 1px 6px rgba(26,109,181,0.3);
  }
  .mobile-logo svg { width: 14px; height: 14px; color: white; }
  .mobile-title { font-size: 14px; font-weight: 600; color: var(--text-1); flex: 1; }

  .bottom-nav {
    display: flex;
    position: fixed; bottom: 0; left: 0; right: 0; z-index: 50;
    background: var(--white);
    border-top: 1px solid var(--border);
    box-shadow: 0 -4px 16px rgba(11,45,94,0.06);
  }
  @media (min-width: 768px) { .bottom-nav { display: none; } }
  .bottom-nav-item {
    flex: 1; display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    gap: 3px; padding: 8px 0;
    font-size: 10px; font-weight: 600; color: var(--text-3);
    text-decoration: none; transition: color 150ms ease;
  }
  .bottom-nav-item.active { color: var(--blue-600); }
  .bottom-nav-item svg { width: 20px; height: 20px; }

  /* ── Offline banner ───────────────────────────────────────────── */
  .offline-banner {
    background: var(--orange);
    color: white; text-align: center;
    padding: 7px 16px; font-size: 12px; font-weight: 600;
    letter-spacing: 0.2px; flex-shrink: 0;
  }

  /* ── Main layout ──────────────────────────────────────────────── */
  .app-shell { display: flex; height: 100vh; overflow: hidden; }
  .content-wrap { flex: 1; display: flex; flex-direction: column; min-width: 0; overflow: hidden; }
  .main-scroll { flex: 1; overflow-y: auto; padding-bottom: 64px; }
  @media (min-width: 768px) { .main-scroll { padding-bottom: 0; } }
  .main-inner { max-width: 680px; margin: 0 auto; }

  /* ── Footer ───────────────────────────────────────────────────── */
  .footer {
    margin-top: auto; border-top: 1px solid var(--border);
    padding: 16px 24px; background: var(--white);
  }
  .footer-inner {
    display: flex; flex-wrap: wrap;
    align-items: center; justify-content: space-between; gap: 10px;
  }
  .footer-brand { display: flex; align-items: center; gap: 8px; }
  .footer-logo {
    width: 20px; height: 20px;
    background: linear-gradient(145deg, var(--blue-600), var(--blue-900));
    border-radius: 5px; display: flex; align-items: center; justify-content: center;
  }
  .footer-logo svg { width: 11px; height: 11px; color: white; }
  .footer-name { font-size: 12px; font-weight: 600; color: var(--text-2); }
  .footer-sep  { color: var(--border-md); font-size: 12px; }
  .footer-desc { font-size: 11.5px; color: var(--text-3); }
  .footer-links { display: flex; align-items: center; gap: 16px; }
  .footer-link {
    font-size: 11.5px; color: var(--text-3);
    text-decoration: none; transition: color 150ms;
  }
  .footer-link:hover { color: var(--blue-600); }
  .footer-link.active { color: var(--blue-600); font-weight: 600; }
  .footer-meta { font-size: 10.5px; color: var(--text-3); font-family: var(--mono); }
`,Ci=[{to:"/triage",label:"Triage",icon:B5},{to:"/reports",label:"Reports",icon:O5},{to:"/log",label:"Log",icon:$5},{to:"/riskmap",label:"Risk Map",icon:U5},{to:"/referral",label:"Referral",icon:H5}];function B5({className:e,style:t}){return l.jsx("svg",{className:e,style:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"})})}function O5({className:e,style:t}){return l.jsxs("svg",{className:e,style:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),l.jsx("polyline",{points:"14,2 14,8 20,8"}),l.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),l.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"})]})}function $5({className:e,style:t}){return l.jsxs("svg",{className:e,style:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),l.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),l.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),l.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]})}function U5({className:e,style:t}){return l.jsx("svg",{className:e,style:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("polygon",{points:"3,11 22,2 13,21 11,13 3,11"})})}function H5({className:e,style:t}){return l.jsxs("svg",{className:e,style:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),l.jsx("polyline",{points:"9,22 9,12 15,12 15,22"})]})}function N0({style:e}){return l.jsxs("svg",{style:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"}),l.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),l.jsx("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]})}function W5({style:e,flipped:t}){return l.jsx("svg",{style:{...e,transform:t?"rotate(180deg)":"rotate(0deg)",transition:"transform 280ms ease"},viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("polyline",{points:"9,18 15,12 9,6"})})}function K5({style:e}){return l.jsxs("svg",{style:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("circle",{cx:"12",cy:"12",r:"2"}),l.jsx("path",{d:"M8.56 2.9A10 10 0 1 0 15.44 2.9"}),l.jsx("path",{d:"M6.3 6.3a6 6 0 1 0 11.4 0"})]})}function G5({style:e}){return l.jsxs("svg",{style:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M10 17H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h12l3 4v7a1 1 0 0 1-1 1h-2"}),l.jsx("circle",{cx:"7.5",cy:"17.5",r:"2.5"}),l.jsx("circle",{cx:"17.5",cy:"17.5",r:"2.5"}),l.jsx("path",{d:"M8 9h2v2H8zM11 10h2"})]})}function Y5({collapsed:e,setCollapsed:t,isOnline:n,onLogout:r}){return l.jsxs("aside",{className:"sidebar",style:{width:e?64:220},children:[l.jsxs("div",{className:"sidebar-logo",children:[l.jsx("div",{className:"logo-mark",children:l.jsx("img",{src:fs,alt:"JotnoSathi"})}),!e&&l.jsxs("div",{className:"logo-text-wrap",children:[l.jsx("div",{className:"logo-name",children:"JotnoSathi"}),l.jsx("div",{className:"logo-sub",children:"AI Health Assistant"})]})]}),l.jsx("nav",{className:"sidebar-nav",children:Ci.map(({to:i,label:s,icon:o})=>l.jsx(Hu,{to:i,className:({isActive:a})=>`nav-item${a?" active":""}`,style:{justifyContent:e?"center":void 0},children:({isActive:a})=>l.jsxs(l.Fragment,{children:[l.jsx(o,{style:{width:18,height:18,flexShrink:0,opacity:a?1:.65}}),!e&&l.jsx("span",{style:{flex:1},children:s}),!e&&a&&l.jsx("span",{className:"nav-dot"}),e&&l.jsx("span",{className:"nav-tooltip",children:s})]})},i))}),l.jsxs("div",{className:"sidebar-footer",children:[!e&&l.jsxs("div",{className:`status-chip ${n?"online":"offline"}`,children:[l.jsx("span",{className:`status-dot ${n?"online":"offline"}`}),n?"Connected":"Offline mode"]}),l.jsxs("button",{onClick:r,className:"collapse-btn",style:{justifyContent:e?"center":void 0,color:"var(--red-text)",marginBottom:2},title:"Logout",children:[l.jsxs("svg",{style:{width:15,height:15,flexShrink:0},viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),l.jsx("polyline",{points:"16 17 21 12 16 7"}),l.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),!e&&l.jsx("span",{children:"Logout"})]}),l.jsxs("button",{onClick:()=>t(i=>!i),className:"collapse-btn",style:{justifyContent:e?"center":void 0},children:[l.jsx(W5,{style:{width:15,height:15,flexShrink:0},flipped:!e}),!e&&l.jsx("span",{children:"Collapse"})]})]})]})}function sp({isOnline:e,alerts:t}){const n=Nt(),r=Ci.find(i=>i.to===n.pathname);return l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"topbar",children:[l.jsxs("div",{style:{flex:1,minWidth:0},children:[l.jsx("div",{className:"topbar-title",children:(r==null?void 0:r.label)??"JotnoSathi"}),t.length>0&&l.jsxs("div",{className:"topbar-alert",children:["🔴 ",t[0].message,t.length>1&&l.jsxs("span",{style:{color:"var(--text-3)",marginLeft:4},children:["+",t.length-1," more"]})]})]}),l.jsxs("div",{className:`live-badge ${e?"online":"offline"}`,children:[l.jsx("span",{className:`live-dot ${e?"online":"offline"}`}),e?"Live":"Offline"]}),l.jsxs("a",{href:"tel:999",className:"emergency-btn",children:[l.jsx(G5,{style:{width:13,height:13}}),"999"]})]}),t.length>0&&l.jsxs("div",{className:"alert-ticker",children:[l.jsxs("span",{className:"ticker-badge",children:[l.jsx(K5,{style:{width:11,height:11}}),"Live alerts"]}),l.jsx("div",{className:"ticker-scroll",children:t.map((i,s)=>l.jsxs("span",{children:[s>0&&l.jsx("span",{style:{margin:"0 10px",opacity:.4},children:"·"}),"⚠ ",i.message]},s))})]})]})}function Q5({isOnline:e,alerts:t}){const n=Nt(),r=Ci.find(i=>i.to===n.pathname);return l.jsxs("header",{className:"mobile-header",children:[l.jsx("div",{className:"mobile-logo",children:l.jsx(N0,{style:{width:14,height:14}})}),l.jsx("span",{className:"mobile-title",children:(r==null?void 0:r.label)??"JotnoSathi"}),t.length>0&&l.jsx("span",{style:{fontSize:11,color:"var(--red-text)",fontWeight:600},children:"🔴"}),l.jsx("span",{style:{width:8,height:8,borderRadius:"50%",flexShrink:0,background:e?"var(--green-600)":"var(--orange)",marginLeft:4}})]})}function q5(){return l.jsx("nav",{className:"bottom-nav",children:Ci.map(({to:e,label:t,icon:n})=>l.jsx(Hu,{to:e,className:({isActive:r})=>`bottom-nav-item${r?" active":""}`,children:({isActive:r})=>l.jsxs(l.Fragment,{children:[l.jsx(n,{style:{width:20,height:20,opacity:r?1:.5}}),t]})},e))})}function X5(){return l.jsx("footer",{className:"footer",children:l.jsxs("div",{className:"footer-inner",children:[l.jsxs("div",{className:"footer-brand",children:[l.jsx("div",{className:"footer-logo",children:l.jsx(N0,{style:{width:11,height:11}})}),l.jsx("span",{className:"footer-name",children:"JotnoSathi"}),l.jsx("span",{className:"footer-sep",children:"·"}),l.jsx("span",{className:"footer-desc",children:"AI Health Assistant · Bangladesh"})]}),l.jsx("div",{className:"footer-links",children:Ci.map(({to:e,label:t})=>l.jsx(Hu,{to:e,className:({isActive:n})=>`footer-link${n?" active":""}`,children:t},e))}),l.jsx("p",{className:"footer-meta",children:"WHO · HDX · DHS Bangladesh · Kaggle · 13 datasets"})]})})}function J5({isOnline:e}){return e?null:l.jsx("div",{className:"offline-banner",children:"⚠️ Offline Mode — Using cached data"})}function Z5({isOnline:e,alerts:t,sessionLog:n,addToLog:r,onLogout:i}){const[s,o]=b.useState(!1),a=Nt(),u=a.pathname==="/riskmap",c=a.pathname==="/referral";return l.jsxs("div",{className:"app-shell",children:[l.jsx(Y5,{collapsed:s,setCollapsed:o,isOnline:e,onLogout:i}),l.jsxs("div",{className:"content-wrap",children:[l.jsx(J5,{isOnline:e}),l.jsx(Q5,{isOnline:e,alerts:t}),l.jsx("div",{style:{display:"none"},className:"md-show",children:l.jsx(sp,{isOnline:e,alerts:t})}),l.jsx(sp,{isOnline:e,alerts:t}),l.jsxs("main",{className:"main-scroll",children:[l.jsx("div",{className:"main-inner",children:l.jsxs(G1,{children:[l.jsx(ln,{path:"/",element:l.jsx(W1,{to:"/triage",replace:!0})}),l.jsx(ln,{path:"/triage",element:l.jsx(mv,{addToLog:r})}),l.jsx(ln,{path:"/reports",element:l.jsx(g5,{})}),l.jsx(ln,{path:"/log",element:l.jsx(v5,{sessionLog:n})}),l.jsx(ln,{path:"/riskmap",element:l.jsx(F5,{isActive:u})}),l.jsx(ln,{path:"/referral",element:l.jsx(_5,{isActive:c})})]})}),l.jsx(X5,{})]})]}),l.jsx(q5,{})]})}function ej(){const[e,t]=b.useState(localStorage.getItem("token")?"app":"landing"),[n,r]=b.useState(navigator.onLine),[i,s]=b.useState([]),[o,a]=b.useState(()=>JSON.parse(localStorage.getItem("jotnosathi_log")||"[]")),[u,c]=b.useState(()=>!!sessionStorage.getItem("jotnosathi_disclaimer_ack"));function d(){sessionStorage.setItem("jotnosathi_disclaimer_ack","1"),c(!0)}function f(){t("app")}function p(){localStorage.removeItem("token"),sessionStorage.removeItem("jotnosathi_disclaimer_ack"),c(!1),t("landing")}b.useEffect(()=>{const y=()=>r(!0),v=()=>r(!1);return window.addEventListener("online",y),window.addEventListener("offline",v),()=>{window.removeEventListener("online",y),window.removeEventListener("offline",v)}},[]),b.useEffect(()=>{if(e!=="app")return;fetch(`${ze}/alerts`).then(v=>v.json()).then(v=>{var k;(k=v.alerts)!=null&&k.length&&s(v.alerts)}).catch(()=>{});const y=setInterval(()=>{fetch(`${ze}/health`).catch(()=>{})},10*60*1e3);return()=>clearInterval(y)},[e]);function m(y){a(v=>{const k=[y,...v].slice(0,50);return localStorage.setItem("jotnosathi_log",JSON.stringify(k)),k})}return e==="landing"?l.jsx(dv,{onGetStarted:()=>t("login"),onLogin:()=>t("login")}):e==="login"?l.jsx(uv,{onLogin:f,onBack:()=>t("landing")}):l.jsxs(l.Fragment,{children:[l.jsx("style",{children:I5}),!u&&l.jsx(V5,{onAcknowledge:d}),l.jsx(tv,{children:l.jsx(Z5,{isOnline:n,alerts:i,sessionLog:o,addToLog:m,onLogout:p})})]})}Ca.createRoot(document.getElementById("root")).render(l.jsx(gp.StrictMode,{children:l.jsx(ej,{})}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").catch(e=>console.warn("SW registration failed:",e))});export{tj as c,P0 as g};
