function $0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var P5=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function U0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var mp={exports:{}},co={},gp={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vi=Symbol.for("react.element"),H0=Symbol.for("react.portal"),W0=Symbol.for("react.fragment"),K0=Symbol.for("react.strict_mode"),q0=Symbol.for("react.profiler"),G0=Symbol.for("react.provider"),Q0=Symbol.for("react.context"),Y0=Symbol.for("react.forward_ref"),X0=Symbol.for("react.suspense"),J0=Symbol.for("react.memo"),Z0=Symbol.for("react.lazy"),Fc=Symbol.iterator;function ex(e){return e===null||typeof e!="object"?null:(e=Fc&&e[Fc]||e["@@iterator"],typeof e=="function"?e:null)}var xp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yp=Object.assign,vp={};function cr(e,t,n){this.props=e,this.context=t,this.refs=vp,this.updater=n||xp}cr.prototype.isReactComponent={};cr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};cr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function wp(){}wp.prototype=cr.prototype;function tu(e,t,n){this.props=e,this.context=t,this.refs=vp,this.updater=n||xp}var nu=tu.prototype=new wp;nu.constructor=tu;yp(nu,cr.prototype);nu.isPureReactComponent=!0;var Ac=Array.isArray,bp=Object.prototype.hasOwnProperty,ru={current:null},kp={key:!0,ref:!0,__self:!0,__source:!0};function Sp(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)bp.call(t,r)&&!kp.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:vi,type:e,key:s,ref:o,props:i,_owner:ru.current}}function tx(e,t){return{$$typeof:vi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function iu(e){return typeof e=="object"&&e!==null&&e.$$typeof===vi}function nx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Mc=/\/+/g;function Vo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?nx(""+e.key):t.toString(36)}function is(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case vi:case H0:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Vo(o,0):r,Ac(i)?(n="",e!=null&&(n=e.replace(Mc,"$&/")+"/"),is(i,t,n,"",function(c){return c})):i!=null&&(iu(i)&&(i=tx(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Mc,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Ac(e))for(var a=0;a<e.length;a++){s=e[a];var u=r+Vo(s,a);o+=is(s,t,n,u,i)}else if(u=ex(e),typeof u=="function")for(e=u.call(e),a=0;!(s=e.next()).done;)s=s.value,u=r+Vo(s,a++),o+=is(s,t,n,u,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Mi(e,t,n){if(e==null)return e;var r=[],i=0;return is(e,r,"","",function(s){return t.call(n,s,i++)}),r}function rx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var je={current:null},ss={transition:null},ix={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:ss,ReactCurrentOwner:ru};function jp(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:Mi,forEach:function(e,t,n){Mi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Mi(e,function(){t++}),t},toArray:function(e){return Mi(e,function(t){return t})||[]},only:function(e){if(!iu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=cr;z.Fragment=W0;z.Profiler=q0;z.PureComponent=tu;z.StrictMode=K0;z.Suspense=X0;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ix;z.act=jp;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=yp({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=ru.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)bp.call(t,u)&&!kp.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:vi,type:e.type,key:i,ref:s,props:r,_owner:o}};z.createContext=function(e){return e={$$typeof:Q0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:G0,_context:e},e.Consumer=e};z.createElement=Sp;z.createFactory=function(e){var t=Sp.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:Y0,render:e}};z.isValidElement=iu;z.lazy=function(e){return{$$typeof:Z0,_payload:{_status:-1,_result:e},_init:rx}};z.memo=function(e,t){return{$$typeof:J0,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=ss.transition;ss.transition={};try{e()}finally{ss.transition=t}};z.unstable_act=jp;z.useCallback=function(e,t){return je.current.useCallback(e,t)};z.useContext=function(e){return je.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return je.current.useDeferredValue(e)};z.useEffect=function(e,t){return je.current.useEffect(e,t)};z.useId=function(){return je.current.useId()};z.useImperativeHandle=function(e,t,n){return je.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return je.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return je.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return je.current.useMemo(e,t)};z.useReducer=function(e,t,n){return je.current.useReducer(e,t,n)};z.useRef=function(e){return je.current.useRef(e)};z.useState=function(e){return je.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return je.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return je.current.useTransition()};z.version="18.3.1";gp.exports=z;var b=gp.exports;const Cp=U0(b),sx=$0({__proto__:null,default:Cp},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ox=b,ax=Symbol.for("react.element"),lx=Symbol.for("react.fragment"),ux=Object.prototype.hasOwnProperty,cx=ox.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dx={key:!0,ref:!0,__self:!0,__source:!0};function Ep(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)ux.call(t,r)&&!dx.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:ax,type:e,key:s,ref:o,props:i,_owner:cx.current}}co.Fragment=lx;co.jsx=Ep;co.jsxs=Ep;mp.exports=co;var l=mp.exports,Aa={},Np={exports:{}},Ve={},Tp={exports:{}},Pp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(F,D){var R=F.length;F.push(D);e:for(;0<R;){var O=R-1>>>1,ne=F[O];if(0<i(ne,D))F[O]=D,F[R]=ne,R=O;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var D=F[0],R=F.pop();if(R!==D){F[0]=R;e:for(var O=0,ne=F.length,Fi=ne>>>1;O<Fi;){var rn=2*(O+1)-1,Io=F[rn],sn=rn+1,Ai=F[sn];if(0>i(Io,R))sn<ne&&0>i(Ai,Io)?(F[O]=Ai,F[sn]=R,O=sn):(F[O]=Io,F[rn]=R,O=rn);else if(sn<ne&&0>i(Ai,R))F[O]=Ai,F[sn]=R,O=sn;else break e}}return D}function i(F,D){var R=F.sortIndex-D.sortIndex;return R!==0?R:F.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,f=null,p=3,g=!1,y=!1,v=!1,k=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(F){for(var D=n(c);D!==null;){if(D.callback===null)r(c);else if(D.startTime<=F)r(c),D.sortIndex=D.expirationTime,t(u,D);else break;D=n(c)}}function w(F){if(v=!1,m(F),!y)if(n(u)!==null)y=!0,Ee(C);else{var D=n(c);D!==null&&Pi(w,D.startTime-F)}}function C(F,D){y=!1,v&&(v=!1,x(j),j=-1),g=!0;var R=p;try{for(m(D),f=n(u);f!==null&&(!(f.expirationTime>D)||F&&!L());){var O=f.callback;if(typeof O=="function"){f.callback=null,p=f.priorityLevel;var ne=O(f.expirationTime<=D);D=e.unstable_now(),typeof ne=="function"?f.callback=ne:f===n(u)&&r(u),m(D)}else r(u);f=n(u)}if(f!==null)var Fi=!0;else{var rn=n(c);rn!==null&&Pi(w,rn.startTime-D),Fi=!1}return Fi}finally{f=null,p=R,g=!1}}var E=!1,S=null,j=-1,P=5,N=-1;function L(){return!(e.unstable_now()-N<P)}function V(){if(S!==null){var F=e.unstable_now();N=F;var D=!0;try{D=S(!0,F)}finally{D?G():(E=!1,S=null)}}else E=!1}var G;if(typeof h=="function")G=function(){h(V)};else if(typeof MessageChannel<"u"){var De=new MessageChannel,Qe=De.port2;De.port1.onmessage=V,G=function(){Qe.postMessage(null)}}else G=function(){k(V,0)};function Ee(F){S=F,E||(E=!0,G())}function Pi(F,D){j=k(function(){F(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,Ee(C))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(F){switch(p){case 1:case 2:case 3:var D=3;break;default:D=p}var R=p;p=D;try{return F()}finally{p=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,D){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var R=p;p=F;try{return D()}finally{p=R}},e.unstable_scheduleCallback=function(F,D,R){var O=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?O+R:O):R=O,F){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=R+ne,F={id:d++,callback:D,priorityLevel:F,startTime:R,expirationTime:ne,sortIndex:-1},R>O?(F.sortIndex=R,t(c,F),n(u)===null&&F===n(c)&&(v?(x(j),j=-1):v=!0,Pi(w,R-O))):(F.sortIndex=ne,t(u,F),y||g||(y=!0,Ee(C))),F},e.unstable_shouldYield=L,e.unstable_wrapCallback=function(F){var D=p;return function(){var R=p;p=D;try{return F.apply(this,arguments)}finally{p=R}}}})(Pp);Tp.exports=Pp;var fx=Tp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var px=b,Ie=fx;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fp=new Set,Qr={};function En(e,t){Zn(e,t),Zn(e+"Capture",t)}function Zn(e,t){for(Qr[e]=t,e=0;e<t.length;e++)Fp.add(t[e])}var kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ma=Object.prototype.hasOwnProperty,hx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dc={},Rc={};function mx(e){return Ma.call(Rc,e)?!0:Ma.call(Dc,e)?!1:hx.test(e)?Rc[e]=!0:(Dc[e]=!0,!1)}function gx(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function xx(e,t,n,r){if(t===null||typeof t>"u"||gx(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ce(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new Ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new Ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new Ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new Ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new Ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new Ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new Ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new Ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new Ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var su=/[\-:]([a-z])/g;function ou(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(su,ou);me[t]=new Ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(su,ou);me[t]=new Ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(su,ou);me[t]=new Ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new Ce(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new Ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new Ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function au(e,t,n,r){var i=me.hasOwnProperty(t)?me[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(xx(t,n,i,r)&&(n=null),r||i===null?mx(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Et=px.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Di=Symbol.for("react.element"),An=Symbol.for("react.portal"),Mn=Symbol.for("react.fragment"),lu=Symbol.for("react.strict_mode"),Da=Symbol.for("react.profiler"),Ap=Symbol.for("react.provider"),Mp=Symbol.for("react.context"),uu=Symbol.for("react.forward_ref"),Ra=Symbol.for("react.suspense"),La=Symbol.for("react.suspense_list"),cu=Symbol.for("react.memo"),At=Symbol.for("react.lazy"),Dp=Symbol.for("react.offscreen"),Lc=Symbol.iterator;function yr(e){return e===null||typeof e!="object"?null:(e=Lc&&e[Lc]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,Bo;function Fr(e){if(Bo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Bo=t&&t[1]||""}return`
`+Bo+e}var Oo=!1;function $o(e,t){if(!e||Oo)return"";Oo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=a);break}}}finally{Oo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Fr(e):""}function yx(e){switch(e.tag){case 5:return Fr(e.type);case 16:return Fr("Lazy");case 13:return Fr("Suspense");case 19:return Fr("SuspenseList");case 0:case 2:case 15:return e=$o(e.type,!1),e;case 11:return e=$o(e.type.render,!1),e;case 1:return e=$o(e.type,!0),e;default:return""}}function za(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mn:return"Fragment";case An:return"Portal";case Da:return"Profiler";case lu:return"StrictMode";case Ra:return"Suspense";case La:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Mp:return(e.displayName||"Context")+".Consumer";case Ap:return(e._context.displayName||"Context")+".Provider";case uu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case cu:return t=e.displayName||null,t!==null?t:za(e.type)||"Memo";case At:t=e._payload,e=e._init;try{return za(e(t))}catch{}}return null}function vx(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return za(t);case 8:return t===lu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Rp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wx(e){var t=Rp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ri(e){e._valueTracker||(e._valueTracker=wx(e))}function Lp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Rp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Es(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function _a(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function zc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function zp(e,t){t=t.checked,t!=null&&au(e,"checked",t,!1)}function Ia(e,t){zp(e,t);var n=Gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Va(e,t.type,n):t.hasOwnProperty("defaultValue")&&Va(e,t.type,Gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function _c(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Va(e,t,n){(t!=="number"||Es(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ar=Array.isArray;function Kn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Gt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ba(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ic(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(Ar(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Gt(n)}}function _p(e,t){var n=Gt(t.value),r=Gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Vc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ip(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Oa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ip(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Li,Vp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Li=Li||document.createElement("div"),Li.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Li.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Yr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Lr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bx=["Webkit","ms","Moz","O"];Object.keys(Lr).forEach(function(e){bx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Lr[t]=Lr[e]})});function Bp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Lr.hasOwnProperty(e)&&Lr[e]?(""+t).trim():t+"px"}function Op(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Bp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var kx=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $a(e,t){if(t){if(kx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function Ua(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ha=null;function du(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wa=null,qn=null,Gn=null;function Bc(e){if(e=ki(e)){if(typeof Wa!="function")throw Error(T(280));var t=e.stateNode;t&&(t=go(t),Wa(e.stateNode,e.type,t))}}function $p(e){qn?Gn?Gn.push(e):Gn=[e]:qn=e}function Up(){if(qn){var e=qn,t=Gn;if(Gn=qn=null,Bc(e),t)for(e=0;e<t.length;e++)Bc(t[e])}}function Hp(e,t){return e(t)}function Wp(){}var Uo=!1;function Kp(e,t,n){if(Uo)return e(t,n);Uo=!0;try{return Hp(e,t,n)}finally{Uo=!1,(qn!==null||Gn!==null)&&(Wp(),Up())}}function Xr(e,t){var n=e.stateNode;if(n===null)return null;var r=go(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var Ka=!1;if(kt)try{var vr={};Object.defineProperty(vr,"passive",{get:function(){Ka=!0}}),window.addEventListener("test",vr,vr),window.removeEventListener("test",vr,vr)}catch{Ka=!1}function Sx(e,t,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var zr=!1,Ns=null,Ts=!1,qa=null,jx={onError:function(e){zr=!0,Ns=e}};function Cx(e,t,n,r,i,s,o,a,u){zr=!1,Ns=null,Sx.apply(jx,arguments)}function Ex(e,t,n,r,i,s,o,a,u){if(Cx.apply(this,arguments),zr){if(zr){var c=Ns;zr=!1,Ns=null}else throw Error(T(198));Ts||(Ts=!0,qa=c)}}function Nn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function qp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Oc(e){if(Nn(e)!==e)throw Error(T(188))}function Nx(e){var t=e.alternate;if(!t){if(t=Nn(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Oc(i),e;if(s===r)return Oc(i),t;s=s.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function Gp(e){return e=Nx(e),e!==null?Qp(e):null}function Qp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Qp(e);if(t!==null)return t;e=e.sibling}return null}var Yp=Ie.unstable_scheduleCallback,$c=Ie.unstable_cancelCallback,Tx=Ie.unstable_shouldYield,Px=Ie.unstable_requestPaint,te=Ie.unstable_now,Fx=Ie.unstable_getCurrentPriorityLevel,fu=Ie.unstable_ImmediatePriority,Xp=Ie.unstable_UserBlockingPriority,Ps=Ie.unstable_NormalPriority,Ax=Ie.unstable_LowPriority,Jp=Ie.unstable_IdlePriority,fo=null,dt=null;function Mx(e){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(fo,e,void 0,(e.current.flags&128)===128)}catch{}}var nt=Math.clz32?Math.clz32:Lx,Dx=Math.log,Rx=Math.LN2;function Lx(e){return e>>>=0,e===0?32:31-(Dx(e)/Rx|0)|0}var zi=64,_i=4194304;function Mr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Mr(a):(s&=o,s!==0&&(r=Mr(s)))}else o=n&~i,o!==0?r=Mr(o):s!==0&&(r=Mr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-nt(t),i=1<<n,r|=e[n],t&=~i;return r}function zx(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _x(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-nt(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=zx(a,t)):u<=t&&(e.expiredLanes|=a),s&=~a}}function Ga(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Zp(){var e=zi;return zi<<=1,!(zi&4194240)&&(zi=64),e}function Ho(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function wi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-nt(t),e[t]=n}function Ix(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-nt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function pu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-nt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var B=0;function eh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var th,hu,nh,rh,ih,Qa=!1,Ii=[],Vt=null,Bt=null,Ot=null,Jr=new Map,Zr=new Map,Dt=[],Vx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uc(e,t){switch(e){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":Bt=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":Jr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zr.delete(t.pointerId)}}function wr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=ki(t),t!==null&&hu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Bx(e,t,n,r,i){switch(t){case"focusin":return Vt=wr(Vt,e,t,n,r,i),!0;case"dragenter":return Bt=wr(Bt,e,t,n,r,i),!0;case"mouseover":return Ot=wr(Ot,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Jr.set(s,wr(Jr.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Zr.set(s,wr(Zr.get(s)||null,e,t,n,r,i)),!0}return!1}function sh(e){var t=dn(e.target);if(t!==null){var n=Nn(t);if(n!==null){if(t=n.tag,t===13){if(t=qp(n),t!==null){e.blockedOn=t,ih(e.priority,function(){nh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function os(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ya(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ha=r,n.target.dispatchEvent(r),Ha=null}else return t=ki(n),t!==null&&hu(t),e.blockedOn=n,!1;t.shift()}return!0}function Hc(e,t,n){os(e)&&n.delete(t)}function Ox(){Qa=!1,Vt!==null&&os(Vt)&&(Vt=null),Bt!==null&&os(Bt)&&(Bt=null),Ot!==null&&os(Ot)&&(Ot=null),Jr.forEach(Hc),Zr.forEach(Hc)}function br(e,t){e.blockedOn===t&&(e.blockedOn=null,Qa||(Qa=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,Ox)))}function ei(e){function t(i){return br(i,e)}if(0<Ii.length){br(Ii[0],e);for(var n=1;n<Ii.length;n++){var r=Ii[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Vt!==null&&br(Vt,e),Bt!==null&&br(Bt,e),Ot!==null&&br(Ot,e),Jr.forEach(t),Zr.forEach(t),n=0;n<Dt.length;n++)r=Dt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Dt.length&&(n=Dt[0],n.blockedOn===null);)sh(n),n.blockedOn===null&&Dt.shift()}var Qn=Et.ReactCurrentBatchConfig,As=!0;function $x(e,t,n,r){var i=B,s=Qn.transition;Qn.transition=null;try{B=1,mu(e,t,n,r)}finally{B=i,Qn.transition=s}}function Ux(e,t,n,r){var i=B,s=Qn.transition;Qn.transition=null;try{B=4,mu(e,t,n,r)}finally{B=i,Qn.transition=s}}function mu(e,t,n,r){if(As){var i=Ya(e,t,n,r);if(i===null)ea(e,t,r,Ms,n),Uc(e,r);else if(Bx(i,e,t,n,r))r.stopPropagation();else if(Uc(e,r),t&4&&-1<Vx.indexOf(e)){for(;i!==null;){var s=ki(i);if(s!==null&&th(s),s=Ya(e,t,n,r),s===null&&ea(e,t,r,Ms,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ea(e,t,r,null,n)}}var Ms=null;function Ya(e,t,n,r){if(Ms=null,e=du(r),e=dn(e),e!==null)if(t=Nn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=qp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ms=e,null}function oh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fx()){case fu:return 1;case Xp:return 4;case Ps:case Ax:return 16;case Jp:return 536870912;default:return 16}default:return 16}}var Lt=null,gu=null,as=null;function ah(){if(as)return as;var e,t=gu,n=t.length,r,i="value"in Lt?Lt.value:Lt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return as=i.slice(e,1<r?1-r:void 0)}function ls(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vi(){return!0}function Wc(){return!1}function Be(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Vi:Wc,this.isPropagationStopped=Wc,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vi)},persist:function(){},isPersistent:Vi}),t}var dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xu=Be(dr),bi=J({},dr,{view:0,detail:0}),Hx=Be(bi),Wo,Ko,kr,po=J({},bi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kr&&(kr&&e.type==="mousemove"?(Wo=e.screenX-kr.screenX,Ko=e.screenY-kr.screenY):Ko=Wo=0,kr=e),Wo)},movementY:function(e){return"movementY"in e?e.movementY:Ko}}),Kc=Be(po),Wx=J({},po,{dataTransfer:0}),Kx=Be(Wx),qx=J({},bi,{relatedTarget:0}),qo=Be(qx),Gx=J({},dr,{animationName:0,elapsedTime:0,pseudoElement:0}),Qx=Be(Gx),Yx=J({},dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xx=Be(Yx),Jx=J({},dr,{data:0}),qc=Be(Jx),Zx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ey={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ty={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ny(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ty[e])?!!t[e]:!1}function yu(){return ny}var ry=J({},bi,{key:function(e){if(e.key){var t=Zx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ls(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ey[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yu,charCode:function(e){return e.type==="keypress"?ls(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ls(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),iy=Be(ry),sy=J({},po,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gc=Be(sy),oy=J({},bi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yu}),ay=Be(oy),ly=J({},dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),uy=Be(ly),cy=J({},po,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dy=Be(cy),fy=[9,13,27,32],vu=kt&&"CompositionEvent"in window,_r=null;kt&&"documentMode"in document&&(_r=document.documentMode);var py=kt&&"TextEvent"in window&&!_r,lh=kt&&(!vu||_r&&8<_r&&11>=_r),Qc=" ",Yc=!1;function uh(e,t){switch(e){case"keyup":return fy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ch(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dn=!1;function hy(e,t){switch(e){case"compositionend":return ch(t);case"keypress":return t.which!==32?null:(Yc=!0,Qc);case"textInput":return e=t.data,e===Qc&&Yc?null:e;default:return null}}function my(e,t){if(Dn)return e==="compositionend"||!vu&&uh(e,t)?(e=ah(),as=gu=Lt=null,Dn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return lh&&t.locale!=="ko"?null:t.data;default:return null}}var gy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gy[e.type]:t==="textarea"}function dh(e,t,n,r){$p(r),t=Ds(t,"onChange"),0<t.length&&(n=new xu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ir=null,ti=null;function xy(e){kh(e,0)}function ho(e){var t=zn(e);if(Lp(t))return e}function yy(e,t){if(e==="change")return t}var fh=!1;if(kt){var Go;if(kt){var Qo="oninput"in document;if(!Qo){var Jc=document.createElement("div");Jc.setAttribute("oninput","return;"),Qo=typeof Jc.oninput=="function"}Go=Qo}else Go=!1;fh=Go&&(!document.documentMode||9<document.documentMode)}function Zc(){Ir&&(Ir.detachEvent("onpropertychange",ph),ti=Ir=null)}function ph(e){if(e.propertyName==="value"&&ho(ti)){var t=[];dh(t,ti,e,du(e)),Kp(xy,t)}}function vy(e,t,n){e==="focusin"?(Zc(),Ir=t,ti=n,Ir.attachEvent("onpropertychange",ph)):e==="focusout"&&Zc()}function wy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ho(ti)}function by(e,t){if(e==="click")return ho(t)}function ky(e,t){if(e==="input"||e==="change")return ho(t)}function Sy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var st=typeof Object.is=="function"?Object.is:Sy;function ni(e,t){if(st(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ma.call(t,i)||!st(e[i],t[i]))return!1}return!0}function ed(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function td(e,t){var n=ed(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ed(n)}}function hh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function mh(){for(var e=window,t=Es();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Es(e.document)}return t}function wu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jy(e){var t=mh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&hh(n.ownerDocument.documentElement,n)){if(r!==null&&wu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=td(n,s);var o=td(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Cy=kt&&"documentMode"in document&&11>=document.documentMode,Rn=null,Xa=null,Vr=null,Ja=!1;function nd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ja||Rn==null||Rn!==Es(r)||(r=Rn,"selectionStart"in r&&wu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vr&&ni(Vr,r)||(Vr=r,r=Ds(Xa,"onSelect"),0<r.length&&(t=new xu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Rn)))}function Bi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ln={animationend:Bi("Animation","AnimationEnd"),animationiteration:Bi("Animation","AnimationIteration"),animationstart:Bi("Animation","AnimationStart"),transitionend:Bi("Transition","TransitionEnd")},Yo={},gh={};kt&&(gh=document.createElement("div").style,"AnimationEvent"in window||(delete Ln.animationend.animation,delete Ln.animationiteration.animation,delete Ln.animationstart.animation),"TransitionEvent"in window||delete Ln.transitionend.transition);function mo(e){if(Yo[e])return Yo[e];if(!Ln[e])return e;var t=Ln[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in gh)return Yo[e]=t[n];return e}var xh=mo("animationend"),yh=mo("animationiteration"),vh=mo("animationstart"),wh=mo("transitionend"),bh=new Map,rd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jt(e,t){bh.set(e,t),En(t,[e])}for(var Xo=0;Xo<rd.length;Xo++){var Jo=rd[Xo],Ey=Jo.toLowerCase(),Ny=Jo[0].toUpperCase()+Jo.slice(1);Jt(Ey,"on"+Ny)}Jt(xh,"onAnimationEnd");Jt(yh,"onAnimationIteration");Jt(vh,"onAnimationStart");Jt("dblclick","onDoubleClick");Jt("focusin","onFocus");Jt("focusout","onBlur");Jt(wh,"onTransitionEnd");Zn("onMouseEnter",["mouseout","mouseover"]);Zn("onMouseLeave",["mouseout","mouseover"]);Zn("onPointerEnter",["pointerout","pointerover"]);Zn("onPointerLeave",["pointerout","pointerover"]);En("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));En("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));En("onBeforeInput",["compositionend","keypress","textInput","paste"]);En("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));En("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));En("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ty=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));function id(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ex(r,t,void 0,e),e.currentTarget=null}function kh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;id(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;id(i,a,c),s=u}}}if(Ts)throw e=qa,Ts=!1,qa=null,e}function W(e,t){var n=t[rl];n===void 0&&(n=t[rl]=new Set);var r=e+"__bubble";n.has(r)||(Sh(t,e,2,!1),n.add(r))}function Zo(e,t,n){var r=0;t&&(r|=4),Sh(n,e,r,t)}var Oi="_reactListening"+Math.random().toString(36).slice(2);function ri(e){if(!e[Oi]){e[Oi]=!0,Fp.forEach(function(n){n!=="selectionchange"&&(Ty.has(n)||Zo(n,!1,e),Zo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Oi]||(t[Oi]=!0,Zo("selectionchange",!1,t))}}function Sh(e,t,n,r){switch(oh(t)){case 1:var i=$x;break;case 4:i=Ux;break;default:i=mu}n=i.bind(null,t,n,e),i=void 0,!Ka||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ea(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=dn(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Kp(function(){var c=s,d=du(n),f=[];e:{var p=bh.get(e);if(p!==void 0){var g=xu,y=e;switch(e){case"keypress":if(ls(n)===0)break e;case"keydown":case"keyup":g=iy;break;case"focusin":y="focus",g=qo;break;case"focusout":y="blur",g=qo;break;case"beforeblur":case"afterblur":g=qo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Kc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Kx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=ay;break;case xh:case yh:case vh:g=Qx;break;case wh:g=uy;break;case"scroll":g=Hx;break;case"wheel":g=dy;break;case"copy":case"cut":case"paste":g=Xx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Gc}var v=(t&4)!==0,k=!v&&e==="scroll",x=v?p!==null?p+"Capture":null:p;v=[];for(var h=c,m;h!==null;){m=h;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,x!==null&&(w=Xr(h,x),w!=null&&v.push(ii(h,w,m)))),k)break;h=h.return}0<v.length&&(p=new g(p,y,null,n,d),f.push({event:p,listeners:v}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&n!==Ha&&(y=n.relatedTarget||n.fromElement)&&(dn(y)||y[St]))break e;if((g||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=c,y=y?dn(y):null,y!==null&&(k=Nn(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=c),g!==y)){if(v=Kc,w="onMouseLeave",x="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(v=Gc,w="onPointerLeave",x="onPointerEnter",h="pointer"),k=g==null?p:zn(g),m=y==null?p:zn(y),p=new v(w,h+"leave",g,n,d),p.target=k,p.relatedTarget=m,w=null,dn(d)===c&&(v=new v(x,h+"enter",y,n,d),v.target=m,v.relatedTarget=k,w=v),k=w,g&&y)t:{for(v=g,x=y,h=0,m=v;m;m=Pn(m))h++;for(m=0,w=x;w;w=Pn(w))m++;for(;0<h-m;)v=Pn(v),h--;for(;0<m-h;)x=Pn(x),m--;for(;h--;){if(v===x||x!==null&&v===x.alternate)break t;v=Pn(v),x=Pn(x)}v=null}else v=null;g!==null&&sd(f,p,g,v,!1),y!==null&&k!==null&&sd(f,k,y,v,!0)}}e:{if(p=c?zn(c):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var C=yy;else if(Xc(p))if(fh)C=ky;else{C=wy;var E=vy}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=by);if(C&&(C=C(e,c))){dh(f,C,n,d);break e}E&&E(e,p,c),e==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&Va(p,"number",p.value)}switch(E=c?zn(c):window,e){case"focusin":(Xc(E)||E.contentEditable==="true")&&(Rn=E,Xa=c,Vr=null);break;case"focusout":Vr=Xa=Rn=null;break;case"mousedown":Ja=!0;break;case"contextmenu":case"mouseup":case"dragend":Ja=!1,nd(f,n,d);break;case"selectionchange":if(Cy)break;case"keydown":case"keyup":nd(f,n,d)}var S;if(vu)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Dn?uh(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(lh&&n.locale!=="ko"&&(Dn||j!=="onCompositionStart"?j==="onCompositionEnd"&&Dn&&(S=ah()):(Lt=d,gu="value"in Lt?Lt.value:Lt.textContent,Dn=!0)),E=Ds(c,j),0<E.length&&(j=new qc(j,e,null,n,d),f.push({event:j,listeners:E}),S?j.data=S:(S=ch(n),S!==null&&(j.data=S)))),(S=py?hy(e,n):my(e,n))&&(c=Ds(c,"onBeforeInput"),0<c.length&&(d=new qc("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=S))}kh(f,t)})}function ii(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ds(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Xr(e,n),s!=null&&r.unshift(ii(e,s,i)),s=Xr(e,t),s!=null&&r.push(ii(e,s,i))),e=e.return}return r}function Pn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function sd(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Xr(n,s),u!=null&&o.unshift(ii(n,u,a))):i||(u=Xr(n,s),u!=null&&o.push(ii(n,u,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Py=/\r\n?/g,Fy=/\u0000|\uFFFD/g;function od(e){return(typeof e=="string"?e:""+e).replace(Py,`
`).replace(Fy,"")}function $i(e,t,n){if(t=od(t),od(e)!==t&&n)throw Error(T(425))}function Rs(){}var Za=null,el=null;function tl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var nl=typeof setTimeout=="function"?setTimeout:void 0,Ay=typeof clearTimeout=="function"?clearTimeout:void 0,ad=typeof Promise=="function"?Promise:void 0,My=typeof queueMicrotask=="function"?queueMicrotask:typeof ad<"u"?function(e){return ad.resolve(null).then(e).catch(Dy)}:nl;function Dy(e){setTimeout(function(){throw e})}function ta(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ei(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ei(t)}function $t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ld(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var fr=Math.random().toString(36).slice(2),ct="__reactFiber$"+fr,si="__reactProps$"+fr,St="__reactContainer$"+fr,rl="__reactEvents$"+fr,Ry="__reactListeners$"+fr,Ly="__reactHandles$"+fr;function dn(e){var t=e[ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[St]||n[ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ld(e);e!==null;){if(n=e[ct])return n;e=ld(e)}return t}e=n,n=e.parentNode}return null}function ki(e){return e=e[ct]||e[St],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function zn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function go(e){return e[si]||null}var il=[],_n=-1;function Zt(e){return{current:e}}function K(e){0>_n||(e.current=il[_n],il[_n]=null,_n--)}function H(e,t){_n++,il[_n]=e.current,e.current=t}var Qt={},ve=Zt(Qt),Pe=Zt(!1),bn=Qt;function er(e,t){var n=e.type.contextTypes;if(!n)return Qt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Fe(e){return e=e.childContextTypes,e!=null}function Ls(){K(Pe),K(ve)}function ud(e,t,n){if(ve.current!==Qt)throw Error(T(168));H(ve,t),H(Pe,n)}function jh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(T(108,vx(e)||"Unknown",i));return J({},n,r)}function zs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qt,bn=ve.current,H(ve,e),H(Pe,Pe.current),!0}function cd(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=jh(e,t,bn),r.__reactInternalMemoizedMergedChildContext=e,K(Pe),K(ve),H(ve,e)):K(Pe),H(Pe,n)}var yt=null,xo=!1,na=!1;function Ch(e){yt===null?yt=[e]:yt.push(e)}function zy(e){xo=!0,Ch(e)}function en(){if(!na&&yt!==null){na=!0;var e=0,t=B;try{var n=yt;for(B=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}yt=null,xo=!1}catch(i){throw yt!==null&&(yt=yt.slice(e+1)),Yp(fu,en),i}finally{B=t,na=!1}}return null}var In=[],Vn=0,_s=null,Is=0,Oe=[],$e=0,kn=null,vt=1,wt="";function an(e,t){In[Vn++]=Is,In[Vn++]=_s,_s=e,Is=t}function Eh(e,t,n){Oe[$e++]=vt,Oe[$e++]=wt,Oe[$e++]=kn,kn=e;var r=vt;e=wt;var i=32-nt(r)-1;r&=~(1<<i),n+=1;var s=32-nt(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,vt=1<<32-nt(t)+i|n<<i|r,wt=s+e}else vt=1<<s|n<<i|r,wt=e}function bu(e){e.return!==null&&(an(e,1),Eh(e,1,0))}function ku(e){for(;e===_s;)_s=In[--Vn],In[Vn]=null,Is=In[--Vn],In[Vn]=null;for(;e===kn;)kn=Oe[--$e],Oe[$e]=null,wt=Oe[--$e],Oe[$e]=null,vt=Oe[--$e],Oe[$e]=null}var ze=null,Le=null,q=!1,tt=null;function Nh(e,t){var n=Ue(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function dd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ze=e,Le=$t(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ze=e,Le=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=kn!==null?{id:vt,overflow:wt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ue(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ze=e,Le=null,!0):!1;default:return!1}}function sl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ol(e){if(q){var t=Le;if(t){var n=t;if(!dd(e,t)){if(sl(e))throw Error(T(418));t=$t(n.nextSibling);var r=ze;t&&dd(e,t)?Nh(r,n):(e.flags=e.flags&-4097|2,q=!1,ze=e)}}else{if(sl(e))throw Error(T(418));e.flags=e.flags&-4097|2,q=!1,ze=e}}}function fd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function Ui(e){if(e!==ze)return!1;if(!q)return fd(e),q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!tl(e.type,e.memoizedProps)),t&&(t=Le)){if(sl(e))throw Th(),Error(T(418));for(;t;)Nh(e,t),t=$t(t.nextSibling)}if(fd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Le=$t(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Le=null}}else Le=ze?$t(e.stateNode.nextSibling):null;return!0}function Th(){for(var e=Le;e;)e=$t(e.nextSibling)}function tr(){Le=ze=null,q=!1}function Su(e){tt===null?tt=[e]:tt.push(e)}var _y=Et.ReactCurrentBatchConfig;function Sr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function Hi(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function pd(e){var t=e._init;return t(e._payload)}function Ph(e){function t(x,h){if(e){var m=x.deletions;m===null?(x.deletions=[h],x.flags|=16):m.push(h)}}function n(x,h){if(!e)return null;for(;h!==null;)t(x,h),h=h.sibling;return null}function r(x,h){for(x=new Map;h!==null;)h.key!==null?x.set(h.key,h):x.set(h.index,h),h=h.sibling;return x}function i(x,h){return x=Kt(x,h),x.index=0,x.sibling=null,x}function s(x,h,m){return x.index=m,e?(m=x.alternate,m!==null?(m=m.index,m<h?(x.flags|=2,h):m):(x.flags|=2,h)):(x.flags|=1048576,h)}function o(x){return e&&x.alternate===null&&(x.flags|=2),x}function a(x,h,m,w){return h===null||h.tag!==6?(h=ua(m,x.mode,w),h.return=x,h):(h=i(h,m),h.return=x,h)}function u(x,h,m,w){var C=m.type;return C===Mn?d(x,h,m.props.children,w,m.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===At&&pd(C)===h.type)?(w=i(h,m.props),w.ref=Sr(x,h,m),w.return=x,w):(w=ms(m.type,m.key,m.props,null,x.mode,w),w.ref=Sr(x,h,m),w.return=x,w)}function c(x,h,m,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=ca(m,x.mode,w),h.return=x,h):(h=i(h,m.children||[]),h.return=x,h)}function d(x,h,m,w,C){return h===null||h.tag!==7?(h=xn(m,x.mode,w,C),h.return=x,h):(h=i(h,m),h.return=x,h)}function f(x,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=ua(""+h,x.mode,m),h.return=x,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Di:return m=ms(h.type,h.key,h.props,null,x.mode,m),m.ref=Sr(x,null,h),m.return=x,m;case An:return h=ca(h,x.mode,m),h.return=x,h;case At:var w=h._init;return f(x,w(h._payload),m)}if(Ar(h)||yr(h))return h=xn(h,x.mode,m,null),h.return=x,h;Hi(x,h)}return null}function p(x,h,m,w){var C=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:a(x,h,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Di:return m.key===C?u(x,h,m,w):null;case An:return m.key===C?c(x,h,m,w):null;case At:return C=m._init,p(x,h,C(m._payload),w)}if(Ar(m)||yr(m))return C!==null?null:d(x,h,m,w,null);Hi(x,m)}return null}function g(x,h,m,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return x=x.get(m)||null,a(h,x,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Di:return x=x.get(w.key===null?m:w.key)||null,u(h,x,w,C);case An:return x=x.get(w.key===null?m:w.key)||null,c(h,x,w,C);case At:var E=w._init;return g(x,h,m,E(w._payload),C)}if(Ar(w)||yr(w))return x=x.get(m)||null,d(h,x,w,C,null);Hi(h,w)}return null}function y(x,h,m,w){for(var C=null,E=null,S=h,j=h=0,P=null;S!==null&&j<m.length;j++){S.index>j?(P=S,S=null):P=S.sibling;var N=p(x,S,m[j],w);if(N===null){S===null&&(S=P);break}e&&S&&N.alternate===null&&t(x,S),h=s(N,h,j),E===null?C=N:E.sibling=N,E=N,S=P}if(j===m.length)return n(x,S),q&&an(x,j),C;if(S===null){for(;j<m.length;j++)S=f(x,m[j],w),S!==null&&(h=s(S,h,j),E===null?C=S:E.sibling=S,E=S);return q&&an(x,j),C}for(S=r(x,S);j<m.length;j++)P=g(S,x,j,m[j],w),P!==null&&(e&&P.alternate!==null&&S.delete(P.key===null?j:P.key),h=s(P,h,j),E===null?C=P:E.sibling=P,E=P);return e&&S.forEach(function(L){return t(x,L)}),q&&an(x,j),C}function v(x,h,m,w){var C=yr(m);if(typeof C!="function")throw Error(T(150));if(m=C.call(m),m==null)throw Error(T(151));for(var E=C=null,S=h,j=h=0,P=null,N=m.next();S!==null&&!N.done;j++,N=m.next()){S.index>j?(P=S,S=null):P=S.sibling;var L=p(x,S,N.value,w);if(L===null){S===null&&(S=P);break}e&&S&&L.alternate===null&&t(x,S),h=s(L,h,j),E===null?C=L:E.sibling=L,E=L,S=P}if(N.done)return n(x,S),q&&an(x,j),C;if(S===null){for(;!N.done;j++,N=m.next())N=f(x,N.value,w),N!==null&&(h=s(N,h,j),E===null?C=N:E.sibling=N,E=N);return q&&an(x,j),C}for(S=r(x,S);!N.done;j++,N=m.next())N=g(S,x,j,N.value,w),N!==null&&(e&&N.alternate!==null&&S.delete(N.key===null?j:N.key),h=s(N,h,j),E===null?C=N:E.sibling=N,E=N);return e&&S.forEach(function(V){return t(x,V)}),q&&an(x,j),C}function k(x,h,m,w){if(typeof m=="object"&&m!==null&&m.type===Mn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Di:e:{for(var C=m.key,E=h;E!==null;){if(E.key===C){if(C=m.type,C===Mn){if(E.tag===7){n(x,E.sibling),h=i(E,m.props.children),h.return=x,x=h;break e}}else if(E.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===At&&pd(C)===E.type){n(x,E.sibling),h=i(E,m.props),h.ref=Sr(x,E,m),h.return=x,x=h;break e}n(x,E);break}else t(x,E);E=E.sibling}m.type===Mn?(h=xn(m.props.children,x.mode,w,m.key),h.return=x,x=h):(w=ms(m.type,m.key,m.props,null,x.mode,w),w.ref=Sr(x,h,m),w.return=x,x=w)}return o(x);case An:e:{for(E=m.key;h!==null;){if(h.key===E)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(x,h.sibling),h=i(h,m.children||[]),h.return=x,x=h;break e}else{n(x,h);break}else t(x,h);h=h.sibling}h=ca(m,x.mode,w),h.return=x,x=h}return o(x);case At:return E=m._init,k(x,h,E(m._payload),w)}if(Ar(m))return y(x,h,m,w);if(yr(m))return v(x,h,m,w);Hi(x,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(x,h.sibling),h=i(h,m),h.return=x,x=h):(n(x,h),h=ua(m,x.mode,w),h.return=x,x=h),o(x)):n(x,h)}return k}var nr=Ph(!0),Fh=Ph(!1),Vs=Zt(null),Bs=null,Bn=null,ju=null;function Cu(){ju=Bn=Bs=null}function Eu(e){var t=Vs.current;K(Vs),e._currentValue=t}function al(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Yn(e,t){Bs=e,ju=Bn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Te=!0),e.firstContext=null)}function qe(e){var t=e._currentValue;if(ju!==e)if(e={context:e,memoizedValue:t,next:null},Bn===null){if(Bs===null)throw Error(T(308));Bn=e,Bs.dependencies={lanes:0,firstContext:e}}else Bn=Bn.next=e;return t}var fn=null;function Nu(e){fn===null?fn=[e]:fn.push(e)}function Ah(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Nu(t)):(n.next=i.next,i.next=n),t.interleaved=n,jt(e,r)}function jt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Mt=!1;function Tu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,_&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,jt(e,n)}return i=r.interleaved,i===null?(t.next=t,Nu(r)):(t.next=i.next,i.next=t),r.interleaved=t,jt(e,n)}function us(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pu(e,n)}}function hd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Os(e,t,n,r){var i=e.updateQueue;Mt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,a=s;do{var p=a.lane,g=a.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,v=a;switch(p=t,g=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){f=y.call(g,f,p);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,p=typeof y=="function"?y.call(g,f,p):y,p==null)break e;f=J({},f,p);break e;case 2:Mt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else g={eventTime:g,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=g,u=f):d=d.next=g,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);jn|=o,e.lanes=o,e.memoizedState=f}}function md(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var Si={},ft=Zt(Si),oi=Zt(Si),ai=Zt(Si);function pn(e){if(e===Si)throw Error(T(174));return e}function Pu(e,t){switch(H(ai,t),H(oi,e),H(ft,Si),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Oa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Oa(t,e)}K(ft),H(ft,t)}function rr(){K(ft),K(oi),K(ai)}function Dh(e){pn(ai.current);var t=pn(ft.current),n=Oa(t,e.type);t!==n&&(H(oi,e),H(ft,n))}function Fu(e){oi.current===e&&(K(ft),K(oi))}var Q=Zt(0);function $s(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ra=[];function Au(){for(var e=0;e<ra.length;e++)ra[e]._workInProgressVersionPrimary=null;ra.length=0}var cs=Et.ReactCurrentDispatcher,ia=Et.ReactCurrentBatchConfig,Sn=0,Y=null,ae=null,ue=null,Us=!1,Br=!1,li=0,Iy=0;function ge(){throw Error(T(321))}function Mu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!st(e[n],t[n]))return!1;return!0}function Du(e,t,n,r,i,s){if(Sn=s,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,cs.current=e===null||e.memoizedState===null?$y:Uy,e=n(r,i),Br){s=0;do{if(Br=!1,li=0,25<=s)throw Error(T(301));s+=1,ue=ae=null,t.updateQueue=null,cs.current=Hy,e=n(r,i)}while(Br)}if(cs.current=Hs,t=ae!==null&&ae.next!==null,Sn=0,ue=ae=Y=null,Us=!1,t)throw Error(T(300));return e}function Ru(){var e=li!==0;return li=0,e}function at(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?Y.memoizedState=ue=e:ue=ue.next=e,ue}function Ge(){if(ae===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=ue===null?Y.memoizedState:ue.next;if(t!==null)ue=t,ae=e;else{if(e===null)throw Error(T(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},ue===null?Y.memoizedState=ue=e:ue=ue.next=e}return ue}function ui(e,t){return typeof t=="function"?t(e):t}function sa(e){var t=Ge(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=ae,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var d=c.lane;if((Sn&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,Y.lanes|=d,jn|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,st(r,t.memoizedState)||(Te=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Y.lanes|=s,jn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function oa(e){var t=Ge(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);st(s,t.memoizedState)||(Te=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Rh(){}function Lh(e,t){var n=Y,r=Ge(),i=t(),s=!st(r.memoizedState,i);if(s&&(r.memoizedState=i,Te=!0),r=r.queue,Lu(Ih.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,ci(9,_h.bind(null,n,r,i,t),void 0,null),ce===null)throw Error(T(349));Sn&30||zh(n,t,i)}return i}function zh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _h(e,t,n,r){t.value=n,t.getSnapshot=r,Vh(t)&&Bh(e)}function Ih(e,t,n){return n(function(){Vh(t)&&Bh(e)})}function Vh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!st(e,n)}catch{return!0}}function Bh(e){var t=jt(e,1);t!==null&&rt(t,e,1,-1)}function gd(e){var t=at();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ui,lastRenderedState:e},t.queue=e,e=e.dispatch=Oy.bind(null,Y,e),[t.memoizedState,e]}function ci(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Oh(){return Ge().memoizedState}function ds(e,t,n,r){var i=at();Y.flags|=e,i.memoizedState=ci(1|t,n,void 0,r===void 0?null:r)}function yo(e,t,n,r){var i=Ge();r=r===void 0?null:r;var s=void 0;if(ae!==null){var o=ae.memoizedState;if(s=o.destroy,r!==null&&Mu(r,o.deps)){i.memoizedState=ci(t,n,s,r);return}}Y.flags|=e,i.memoizedState=ci(1|t,n,s,r)}function xd(e,t){return ds(8390656,8,e,t)}function Lu(e,t){return yo(2048,8,e,t)}function $h(e,t){return yo(4,2,e,t)}function Uh(e,t){return yo(4,4,e,t)}function Hh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Wh(e,t,n){return n=n!=null?n.concat([e]):null,yo(4,4,Hh.bind(null,t,e),n)}function zu(){}function Kh(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function qh(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Gh(e,t,n){return Sn&21?(st(n,t)||(n=Zp(),Y.lanes|=n,jn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Te=!0),e.memoizedState=n)}function Vy(e,t){var n=B;B=n!==0&&4>n?n:4,e(!0);var r=ia.transition;ia.transition={};try{e(!1),t()}finally{B=n,ia.transition=r}}function Qh(){return Ge().memoizedState}function By(e,t,n){var r=Wt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Yh(e))Xh(t,n);else if(n=Ah(e,t,n,r),n!==null){var i=Se();rt(n,e,r,i),Jh(n,t,r)}}function Oy(e,t,n){var r=Wt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yh(e))Xh(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,st(a,o)){var u=t.interleaved;u===null?(i.next=i,Nu(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=Ah(e,t,i,r),n!==null&&(i=Se(),rt(n,e,r,i),Jh(n,t,r))}}function Yh(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function Xh(e,t){Br=Us=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Jh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pu(e,n)}}var Hs={readContext:qe,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},$y={readContext:qe,useCallback:function(e,t){return at().memoizedState=[e,t===void 0?null:t],e},useContext:qe,useEffect:xd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ds(4194308,4,Hh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ds(4194308,4,e,t)},useInsertionEffect:function(e,t){return ds(4,2,e,t)},useMemo:function(e,t){var n=at();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=at();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=By.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=at();return e={current:e},t.memoizedState=e},useState:gd,useDebugValue:zu,useDeferredValue:function(e){return at().memoizedState=e},useTransition:function(){var e=gd(!1),t=e[0];return e=Vy.bind(null,e[1]),at().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,i=at();if(q){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),ce===null)throw Error(T(349));Sn&30||zh(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,xd(Ih.bind(null,r,s,e),[e]),r.flags|=2048,ci(9,_h.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=at(),t=ce.identifierPrefix;if(q){var n=wt,r=vt;n=(r&~(1<<32-nt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=li++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Iy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Uy={readContext:qe,useCallback:Kh,useContext:qe,useEffect:Lu,useImperativeHandle:Wh,useInsertionEffect:$h,useLayoutEffect:Uh,useMemo:qh,useReducer:sa,useRef:Oh,useState:function(){return sa(ui)},useDebugValue:zu,useDeferredValue:function(e){var t=Ge();return Gh(t,ae.memoizedState,e)},useTransition:function(){var e=sa(ui)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:Rh,useSyncExternalStore:Lh,useId:Qh,unstable_isNewReconciler:!1},Hy={readContext:qe,useCallback:Kh,useContext:qe,useEffect:Lu,useImperativeHandle:Wh,useInsertionEffect:$h,useLayoutEffect:Uh,useMemo:qh,useReducer:oa,useRef:Oh,useState:function(){return oa(ui)},useDebugValue:zu,useDeferredValue:function(e){var t=Ge();return ae===null?t.memoizedState=e:Gh(t,ae.memoizedState,e)},useTransition:function(){var e=oa(ui)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:Rh,useSyncExternalStore:Lh,useId:Qh,unstable_isNewReconciler:!1};function Ze(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ll(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var vo={isMounted:function(e){return(e=e._reactInternals)?Nn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Se(),i=Wt(e),s=bt(r,i);s.payload=t,n!=null&&(s.callback=n),t=Ut(e,s,i),t!==null&&(rt(t,e,i,r),us(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Se(),i=Wt(e),s=bt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Ut(e,s,i),t!==null&&(rt(t,e,i,r),us(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Se(),r=Wt(e),i=bt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ut(e,i,r),t!==null&&(rt(t,e,r,n),us(t,e,r))}};function yd(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!ni(n,r)||!ni(i,s):!0}function Zh(e,t,n){var r=!1,i=Qt,s=t.contextType;return typeof s=="object"&&s!==null?s=qe(s):(i=Fe(t)?bn:ve.current,r=t.contextTypes,s=(r=r!=null)?er(e,i):Qt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=vo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function vd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&vo.enqueueReplaceState(t,t.state,null)}function ul(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Tu(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=qe(s):(s=Fe(t)?bn:ve.current,i.context=er(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(ll(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&vo.enqueueReplaceState(i,i.state,null),Os(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ir(e,t){try{var n="",r=t;do n+=yx(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function aa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function cl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Wy=typeof WeakMap=="function"?WeakMap:Map;function em(e,t,n){n=bt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ks||(Ks=!0,wl=r),cl(e,t)},n}function tm(e,t,n){n=bt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){cl(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){cl(e,t),typeof r!="function"&&(Ht===null?Ht=new Set([this]):Ht.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function wd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Wy;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=sv.bind(null,e,t,n),t.then(e,e))}function bd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function kd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=bt(-1,1),t.tag=2,Ut(n,t,1))),n.lanes|=1),e)}var Ky=Et.ReactCurrentOwner,Te=!1;function we(e,t,n,r){t.child=e===null?Fh(t,null,n,r):nr(t,e.child,n,r)}function Sd(e,t,n,r,i){n=n.render;var s=t.ref;return Yn(t,i),r=Du(e,t,n,r,s,i),n=Ru(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ct(e,t,i)):(q&&n&&bu(t),t.flags|=1,we(e,t,r,i),t.child)}function jd(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Hu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,nm(e,t,s,r,i)):(e=ms(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ni,n(o,r)&&e.ref===t.ref)return Ct(e,t,i)}return t.flags|=1,e=Kt(s,r),e.ref=t.ref,e.return=t,t.child=e}function nm(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(ni(s,r)&&e.ref===t.ref)if(Te=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Te=!0);else return t.lanes=e.lanes,Ct(e,t,i)}return dl(e,t,n,r,i)}function rm(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H($n,Re),Re|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H($n,Re),Re|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,H($n,Re),Re|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,H($n,Re),Re|=r;return we(e,t,i,n),t.child}function im(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function dl(e,t,n,r,i){var s=Fe(n)?bn:ve.current;return s=er(t,s),Yn(t,i),n=Du(e,t,n,r,s,i),r=Ru(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ct(e,t,i)):(q&&r&&bu(t),t.flags|=1,we(e,t,n,i),t.child)}function Cd(e,t,n,r,i){if(Fe(n)){var s=!0;zs(t)}else s=!1;if(Yn(t,i),t.stateNode===null)fs(e,t),Zh(t,n,r),ul(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=qe(c):(c=Fe(n)?bn:ve.current,c=er(t,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&vd(t,o,r,c),Mt=!1;var p=t.memoizedState;o.state=p,Os(t,r,o,i),u=t.memoizedState,a!==r||p!==u||Pe.current||Mt?(typeof d=="function"&&(ll(t,n,d,r),u=t.memoizedState),(a=Mt||yd(t,n,a,r,p,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Mh(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Ze(t.type,a),o.props=c,f=t.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=qe(u):(u=Fe(n)?bn:ve.current,u=er(t,u));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==u)&&vd(t,o,r,u),Mt=!1,p=t.memoizedState,o.state=p,Os(t,r,o,i);var y=t.memoizedState;a!==f||p!==y||Pe.current||Mt?(typeof g=="function"&&(ll(t,n,g,r),y=t.memoizedState),(c=Mt||yd(t,n,c,r,p,y,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return fl(e,t,n,r,s,i)}function fl(e,t,n,r,i,s){im(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&cd(t,n,!1),Ct(e,t,s);r=t.stateNode,Ky.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=nr(t,e.child,null,s),t.child=nr(t,null,a,s)):we(e,t,a,s),t.memoizedState=r.state,i&&cd(t,n,!0),t.child}function sm(e){var t=e.stateNode;t.pendingContext?ud(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ud(e,t.context,!1),Pu(e,t.containerInfo)}function Ed(e,t,n,r,i){return tr(),Su(i),t.flags|=256,we(e,t,n,r),t.child}var pl={dehydrated:null,treeContext:null,retryLane:0};function hl(e){return{baseLanes:e,cachePool:null,transitions:null}}function om(e,t,n){var r=t.pendingProps,i=Q.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),H(Q,i&1),e===null)return ol(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ko(o,r,0,null),e=xn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=hl(n),t.memoizedState=pl,e):_u(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return qy(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Kt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Kt(a,s):(s=xn(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?hl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=pl,r}return s=e.child,e=s.sibling,r=Kt(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function _u(e,t){return t=ko({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Wi(e,t,n,r){return r!==null&&Su(r),nr(t,e.child,null,n),e=_u(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qy(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=aa(Error(T(422))),Wi(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=ko({mode:"visible",children:r.children},i,0,null),s=xn(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&nr(t,e.child,null,o),t.child.memoizedState=hl(o),t.memoizedState=pl,s);if(!(t.mode&1))return Wi(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(T(419)),r=aa(s,r,void 0),Wi(e,t,o,r)}if(a=(o&e.childLanes)!==0,Te||a){if(r=ce,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,jt(e,i),rt(r,e,i,-1))}return Uu(),r=aa(Error(T(421))),Wi(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=ov.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Le=$t(i.nextSibling),ze=t,q=!0,tt=null,e!==null&&(Oe[$e++]=vt,Oe[$e++]=wt,Oe[$e++]=kn,vt=e.id,wt=e.overflow,kn=t),t=_u(t,r.children),t.flags|=4096,t)}function Nd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),al(e.return,t,n)}function la(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function am(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(we(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nd(e,n,t);else if(e.tag===19)Nd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(Q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&$s(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),la(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&$s(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}la(t,!0,n,null,s);break;case"together":la(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),jn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=Kt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Kt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Gy(e,t,n){switch(t.tag){case 3:sm(t),tr();break;case 5:Dh(t);break;case 1:Fe(t.type)&&zs(t);break;case 4:Pu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;H(Vs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?om(e,t,n):(H(Q,Q.current&1),e=Ct(e,t,n),e!==null?e.sibling:null);H(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return am(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,rm(e,t,n)}return Ct(e,t,n)}var lm,ml,um,cm;lm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ml=function(){};um=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,pn(ft.current);var s=null;switch(n){case"input":i=_a(e,i),r=_a(e,r),s=[];break;case"select":i=J({},i,{value:void 0}),r=J({},r,{value:void 0}),s=[];break;case"textarea":i=Ba(e,i),r=Ba(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Rs)}$a(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Qr.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Qr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&W("scroll",e),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(t.updateQueue=c)&&(t.flags|=4)}};cm=function(e,t,n,r){n!==r&&(t.flags|=4)};function jr(e,t){if(!q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Qy(e,t,n){var r=t.pendingProps;switch(ku(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(t),null;case 1:return Fe(t.type)&&Ls(),xe(t),null;case 3:return r=t.stateNode,rr(),K(Pe),K(ve),Au(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ui(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,tt!==null&&(Sl(tt),tt=null))),ml(e,t),xe(t),null;case 5:Fu(t);var i=pn(ai.current);if(n=t.type,e!==null&&t.stateNode!=null)um(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return xe(t),null}if(e=pn(ft.current),Ui(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[ct]=t,r[si]=s,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(i=0;i<Dr.length;i++)W(Dr[i],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":zc(r,s),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},W("invalid",r);break;case"textarea":Ic(r,s),W("invalid",r)}$a(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&$i(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&$i(r.textContent,a,e),i=["children",""+a]):Qr.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&W("scroll",r)}switch(n){case"input":Ri(r),_c(r,s,!0);break;case"textarea":Ri(r),Vc(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Rs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ip(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[ct]=t,e[si]=r,lm(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ua(n,r),n){case"dialog":W("cancel",e),W("close",e),i=r;break;case"iframe":case"object":case"embed":W("load",e),i=r;break;case"video":case"audio":for(i=0;i<Dr.length;i++)W(Dr[i],e);i=r;break;case"source":W("error",e),i=r;break;case"img":case"image":case"link":W("error",e),W("load",e),i=r;break;case"details":W("toggle",e),i=r;break;case"input":zc(e,r),i=_a(e,r),W("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=J({},r,{value:void 0}),W("invalid",e);break;case"textarea":Ic(e,r),i=Ba(e,r),W("invalid",e);break;default:i=r}$a(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?Op(e,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Vp(e,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Yr(e,u):typeof u=="number"&&Yr(e,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Qr.hasOwnProperty(s)?u!=null&&s==="onScroll"&&W("scroll",e):u!=null&&au(e,s,u,o))}switch(n){case"input":Ri(e),_c(e,r,!1);break;case"textarea":Ri(e),Vc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Gt(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Kn(e,!!r.multiple,s,!1):r.defaultValue!=null&&Kn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Rs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return xe(t),null;case 6:if(e&&t.stateNode!=null)cm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=pn(ai.current),pn(ft.current),Ui(t)){if(r=t.stateNode,n=t.memoizedProps,r[ct]=t,(s=r.nodeValue!==n)&&(e=ze,e!==null))switch(e.tag){case 3:$i(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&$i(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ct]=t,t.stateNode=r}return xe(t),null;case 13:if(K(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&Le!==null&&t.mode&1&&!(t.flags&128))Th(),tr(),t.flags|=98560,s=!1;else if(s=Ui(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(T(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(T(317));s[ct]=t}else tr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;xe(t),s=!1}else tt!==null&&(Sl(tt),tt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?le===0&&(le=3):Uu())),t.updateQueue!==null&&(t.flags|=4),xe(t),null);case 4:return rr(),ml(e,t),e===null&&ri(t.stateNode.containerInfo),xe(t),null;case 10:return Eu(t.type._context),xe(t),null;case 17:return Fe(t.type)&&Ls(),xe(t),null;case 19:if(K(Q),s=t.memoizedState,s===null)return xe(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)jr(s,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=$s(e),o!==null){for(t.flags|=128,jr(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(Q,Q.current&1|2),t.child}e=e.sibling}s.tail!==null&&te()>sr&&(t.flags|=128,r=!0,jr(s,!1),t.lanes=4194304)}else{if(!r)if(e=$s(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),jr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!q)return xe(t),null}else 2*te()-s.renderingStartTime>sr&&n!==1073741824&&(t.flags|=128,r=!0,jr(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=te(),t.sibling=null,n=Q.current,H(Q,r?n&1|2:n&1),t):(xe(t),null);case 22:case 23:return $u(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Re&1073741824&&(xe(t),t.subtreeFlags&6&&(t.flags|=8192)):xe(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function Yy(e,t){switch(ku(t),t.tag){case 1:return Fe(t.type)&&Ls(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return rr(),K(Pe),K(ve),Au(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fu(t),null;case 13:if(K(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));tr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(Q),null;case 4:return rr(),null;case 10:return Eu(t.type._context),null;case 22:case 23:return $u(),null;case 24:return null;default:return null}}var Ki=!1,ye=!1,Xy=typeof WeakSet=="function"?WeakSet:Set,A=null;function On(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function gl(e,t,n){try{n()}catch(r){ee(e,t,r)}}var Td=!1;function Jy(e,t){if(Za=As,e=mh(),wu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===e)break t;if(p===n&&++c===i&&(a=o),p===s&&++d===r&&(u=o),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(el={focusedElem:e,selectionRange:n},As=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,k=y.memoizedState,x=t.stateNode,h=x.getSnapshotBeforeUpdate(t.elementType===t.type?v:Ze(t.type,v),k);x.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(w){ee(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return y=Td,Td=!1,y}function Or(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&gl(t,n,s)}i=i.next}while(i!==r)}}function wo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function xl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function dm(e){var t=e.alternate;t!==null&&(e.alternate=null,dm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ct],delete t[si],delete t[rl],delete t[Ry],delete t[Ly])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function fm(e){return e.tag===5||e.tag===3||e.tag===4}function Pd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||fm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Rs));else if(r!==4&&(e=e.child,e!==null))for(yl(e,t,n),e=e.sibling;e!==null;)yl(e,t,n),e=e.sibling}function vl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(vl(e,t,n),e=e.sibling;e!==null;)vl(e,t,n),e=e.sibling}var de=null,et=!1;function Pt(e,t,n){for(n=n.child;n!==null;)pm(e,t,n),n=n.sibling}function pm(e,t,n){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(fo,n)}catch{}switch(n.tag){case 5:ye||On(n,t);case 6:var r=de,i=et;de=null,Pt(e,t,n),de=r,et=i,de!==null&&(et?(e=de,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):de.removeChild(n.stateNode));break;case 18:de!==null&&(et?(e=de,n=n.stateNode,e.nodeType===8?ta(e.parentNode,n):e.nodeType===1&&ta(e,n),ei(e)):ta(de,n.stateNode));break;case 4:r=de,i=et,de=n.stateNode.containerInfo,et=!0,Pt(e,t,n),de=r,et=i;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&gl(n,t,o),i=i.next}while(i!==r)}Pt(e,t,n);break;case 1:if(!ye&&(On(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ee(n,t,a)}Pt(e,t,n);break;case 21:Pt(e,t,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,Pt(e,t,n),ye=r):Pt(e,t,n);break;default:Pt(e,t,n)}}function Fd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Xy),t.forEach(function(r){var i=av.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ye(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:de=a.stateNode,et=!1;break e;case 3:de=a.stateNode.containerInfo,et=!0;break e;case 4:de=a.stateNode.containerInfo,et=!0;break e}a=a.return}if(de===null)throw Error(T(160));pm(s,o,i),de=null,et=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){ee(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)hm(t,e),t=t.sibling}function hm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ye(t,e),ot(e),r&4){try{Or(3,e,e.return),wo(3,e)}catch(v){ee(e,e.return,v)}try{Or(5,e,e.return)}catch(v){ee(e,e.return,v)}}break;case 1:Ye(t,e),ot(e),r&512&&n!==null&&On(n,n.return);break;case 5:if(Ye(t,e),ot(e),r&512&&n!==null&&On(n,n.return),e.flags&32){var i=e.stateNode;try{Yr(i,"")}catch(v){ee(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&zp(i,s),Ua(a,o);var c=Ua(a,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?Op(i,f):d==="dangerouslySetInnerHTML"?Vp(i,f):d==="children"?Yr(i,f):au(i,d,f,c)}switch(a){case"input":Ia(i,s);break;case"textarea":_p(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Kn(i,!!s.multiple,g,!1):p!==!!s.multiple&&(s.defaultValue!=null?Kn(i,!!s.multiple,s.defaultValue,!0):Kn(i,!!s.multiple,s.multiple?[]:"",!1))}i[si]=s}catch(v){ee(e,e.return,v)}}break;case 6:if(Ye(t,e),ot(e),r&4){if(e.stateNode===null)throw Error(T(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(v){ee(e,e.return,v)}}break;case 3:if(Ye(t,e),ot(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ei(t.containerInfo)}catch(v){ee(e,e.return,v)}break;case 4:Ye(t,e),ot(e);break;case 13:Ye(t,e),ot(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Bu=te())),r&4&&Fd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ye=(c=ye)||d,Ye(t,e),ye=c):Ye(t,e),ot(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(A=e,d=e.child;d!==null;){for(f=A=d;A!==null;){switch(p=A,g=p.child,p.tag){case 0:case 11:case 14:case 15:Or(4,p,p.return);break;case 1:On(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){ee(r,n,v)}}break;case 5:On(p,p.return);break;case 22:if(p.memoizedState!==null){Md(f);continue}}g!==null?(g.return=p,A=g):Md(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Bp("display",o))}catch(v){ee(e,e.return,v)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(v){ee(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ye(t,e),ot(e),r&4&&Fd(e);break;case 21:break;default:Ye(t,e),ot(e)}}function ot(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(fm(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Yr(i,""),r.flags&=-33);var s=Pd(e);vl(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Pd(e);yl(e,a,o);break;default:throw Error(T(161))}}catch(u){ee(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Zy(e,t,n){A=e,mm(e)}function mm(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var i=A,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ki;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||ye;a=Ki;var c=ye;if(Ki=o,(ye=u)&&!c)for(A=i;A!==null;)o=A,u=o.child,o.tag===22&&o.memoizedState!==null?Dd(i):u!==null?(u.return=o,A=u):Dd(i);for(;s!==null;)A=s,mm(s),s=s.sibling;A=i,Ki=a,ye=c}Ad(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,A=s):Ad(e)}}function Ad(e){for(;A!==null;){var t=A;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||wo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ye)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ze(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&md(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}md(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ei(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}ye||t.flags&512&&xl(t)}catch(p){ee(t,t.return,p)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function Md(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function Dd(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{wo(4,t)}catch(u){ee(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){ee(t,i,u)}}var s=t.return;try{xl(t)}catch(u){ee(t,s,u)}break;case 5:var o=t.return;try{xl(t)}catch(u){ee(t,o,u)}}}catch(u){ee(t,t.return,u)}if(t===e){A=null;break}var a=t.sibling;if(a!==null){a.return=t.return,A=a;break}A=t.return}}var ev=Math.ceil,Ws=Et.ReactCurrentDispatcher,Iu=Et.ReactCurrentOwner,We=Et.ReactCurrentBatchConfig,_=0,ce=null,ie=null,he=0,Re=0,$n=Zt(0),le=0,di=null,jn=0,bo=0,Vu=0,$r=null,Ne=null,Bu=0,sr=1/0,xt=null,Ks=!1,wl=null,Ht=null,qi=!1,zt=null,qs=0,Ur=0,bl=null,ps=-1,hs=0;function Se(){return _&6?te():ps!==-1?ps:ps=te()}function Wt(e){return e.mode&1?_&2&&he!==0?he&-he:_y.transition!==null?(hs===0&&(hs=Zp()),hs):(e=B,e!==0||(e=window.event,e=e===void 0?16:oh(e.type)),e):1}function rt(e,t,n,r){if(50<Ur)throw Ur=0,bl=null,Error(T(185));wi(e,n,r),(!(_&2)||e!==ce)&&(e===ce&&(!(_&2)&&(bo|=n),le===4&&Rt(e,he)),Ae(e,r),n===1&&_===0&&!(t.mode&1)&&(sr=te()+500,xo&&en()))}function Ae(e,t){var n=e.callbackNode;_x(e,t);var r=Fs(e,e===ce?he:0);if(r===0)n!==null&&$c(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&$c(n),t===1)e.tag===0?zy(Rd.bind(null,e)):Ch(Rd.bind(null,e)),My(function(){!(_&6)&&en()}),n=null;else{switch(eh(r)){case 1:n=fu;break;case 4:n=Xp;break;case 16:n=Ps;break;case 536870912:n=Jp;break;default:n=Ps}n=Sm(n,gm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function gm(e,t){if(ps=-1,hs=0,_&6)throw Error(T(327));var n=e.callbackNode;if(Xn()&&e.callbackNode!==n)return null;var r=Fs(e,e===ce?he:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Gs(e,r);else{t=r;var i=_;_|=2;var s=ym();(ce!==e||he!==t)&&(xt=null,sr=te()+500,gn(e,t));do try{rv();break}catch(a){xm(e,a)}while(!0);Cu(),Ws.current=s,_=i,ie!==null?t=0:(ce=null,he=0,t=le)}if(t!==0){if(t===2&&(i=Ga(e),i!==0&&(r=i,t=kl(e,i))),t===1)throw n=di,gn(e,0),Rt(e,r),Ae(e,te()),n;if(t===6)Rt(e,r);else{if(i=e.current.alternate,!(r&30)&&!tv(i)&&(t=Gs(e,r),t===2&&(s=Ga(e),s!==0&&(r=s,t=kl(e,s))),t===1))throw n=di,gn(e,0),Rt(e,r),Ae(e,te()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:ln(e,Ne,xt);break;case 3:if(Rt(e,r),(r&130023424)===r&&(t=Bu+500-te(),10<t)){if(Fs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Se(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=nl(ln.bind(null,e,Ne,xt),t);break}ln(e,Ne,xt);break;case 4:if(Rt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-nt(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ev(r/1960))-r,10<r){e.timeoutHandle=nl(ln.bind(null,e,Ne,xt),r);break}ln(e,Ne,xt);break;case 5:ln(e,Ne,xt);break;default:throw Error(T(329))}}}return Ae(e,te()),e.callbackNode===n?gm.bind(null,e):null}function kl(e,t){var n=$r;return e.current.memoizedState.isDehydrated&&(gn(e,t).flags|=256),e=Gs(e,t),e!==2&&(t=Ne,Ne=n,t!==null&&Sl(t)),e}function Sl(e){Ne===null?Ne=e:Ne.push.apply(Ne,e)}function tv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!st(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rt(e,t){for(t&=~Vu,t&=~bo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-nt(t),r=1<<n;e[n]=-1,t&=~r}}function Rd(e){if(_&6)throw Error(T(327));Xn();var t=Fs(e,0);if(!(t&1))return Ae(e,te()),null;var n=Gs(e,t);if(e.tag!==0&&n===2){var r=Ga(e);r!==0&&(t=r,n=kl(e,r))}if(n===1)throw n=di,gn(e,0),Rt(e,t),Ae(e,te()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ln(e,Ne,xt),Ae(e,te()),null}function Ou(e,t){var n=_;_|=1;try{return e(t)}finally{_=n,_===0&&(sr=te()+500,xo&&en())}}function Cn(e){zt!==null&&zt.tag===0&&!(_&6)&&Xn();var t=_;_|=1;var n=We.transition,r=B;try{if(We.transition=null,B=1,e)return e()}finally{B=r,We.transition=n,_=t,!(_&6)&&en()}}function $u(){Re=$n.current,K($n)}function gn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ay(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(ku(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ls();break;case 3:rr(),K(Pe),K(ve),Au();break;case 5:Fu(r);break;case 4:rr();break;case 13:K(Q);break;case 19:K(Q);break;case 10:Eu(r.type._context);break;case 22:case 23:$u()}n=n.return}if(ce=e,ie=e=Kt(e.current,null),he=Re=t,le=0,di=null,Vu=bo=jn=0,Ne=$r=null,fn!==null){for(t=0;t<fn.length;t++)if(n=fn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}fn=null}return e}function xm(e,t){do{var n=ie;try{if(Cu(),cs.current=Hs,Us){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Us=!1}if(Sn=0,ue=ae=Y=null,Br=!1,li=0,Iu.current=null,n===null||n.return===null){le=1,di=t,ie=null;break}e:{var s=e,o=n.return,a=n,u=t;if(t=he,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=bd(o);if(g!==null){g.flags&=-257,kd(g,o,a,s,t),g.mode&1&&wd(s,c,t),t=g,u=c;var y=t.updateQueue;if(y===null){var v=new Set;v.add(u),t.updateQueue=v}else y.add(u);break e}else{if(!(t&1)){wd(s,c,t),Uu();break e}u=Error(T(426))}}else if(q&&a.mode&1){var k=bd(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),kd(k,o,a,s,t),Su(ir(u,a));break e}}s=u=ir(u,a),le!==4&&(le=2),$r===null?$r=[s]:$r.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var x=em(s,u,t);hd(s,x);break e;case 1:a=u;var h=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ht===null||!Ht.has(m)))){s.flags|=65536,t&=-t,s.lanes|=t;var w=tm(s,a,t);hd(s,w);break e}}s=s.return}while(s!==null)}wm(n)}catch(C){t=C,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(!0)}function ym(){var e=Ws.current;return Ws.current=Hs,e===null?Hs:e}function Uu(){(le===0||le===3||le===2)&&(le=4),ce===null||!(jn&268435455)&&!(bo&268435455)||Rt(ce,he)}function Gs(e,t){var n=_;_|=2;var r=ym();(ce!==e||he!==t)&&(xt=null,gn(e,t));do try{nv();break}catch(i){xm(e,i)}while(!0);if(Cu(),_=n,Ws.current=r,ie!==null)throw Error(T(261));return ce=null,he=0,le}function nv(){for(;ie!==null;)vm(ie)}function rv(){for(;ie!==null&&!Tx();)vm(ie)}function vm(e){var t=km(e.alternate,e,Re);e.memoizedProps=e.pendingProps,t===null?wm(e):ie=t,Iu.current=null}function wm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Yy(n,t),n!==null){n.flags&=32767,ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,ie=null;return}}else if(n=Qy(n,t,Re),n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);le===0&&(le=5)}function ln(e,t,n){var r=B,i=We.transition;try{We.transition=null,B=1,iv(e,t,n,r)}finally{We.transition=i,B=r}return null}function iv(e,t,n,r){do Xn();while(zt!==null);if(_&6)throw Error(T(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Ix(e,s),e===ce&&(ie=ce=null,he=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qi||(qi=!0,Sm(Ps,function(){return Xn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=We.transition,We.transition=null;var o=B;B=1;var a=_;_|=4,Iu.current=null,Jy(e,n),hm(n,e),jy(el),As=!!Za,el=Za=null,e.current=n,Zy(n),Px(),_=a,B=o,We.transition=s}else e.current=n;if(qi&&(qi=!1,zt=e,qs=i),s=e.pendingLanes,s===0&&(Ht=null),Mx(n.stateNode),Ae(e,te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ks)throw Ks=!1,e=wl,wl=null,e;return qs&1&&e.tag!==0&&Xn(),s=e.pendingLanes,s&1?e===bl?Ur++:(Ur=0,bl=e):Ur=0,en(),null}function Xn(){if(zt!==null){var e=eh(qs),t=We.transition,n=B;try{if(We.transition=null,B=16>e?16:e,zt===null)var r=!1;else{if(e=zt,zt=null,qs=0,_&6)throw Error(T(331));var i=_;for(_|=4,A=e.current;A!==null;){var s=A,o=s.child;if(A.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(A=c;A!==null;){var d=A;switch(d.tag){case 0:case 11:case 15:Or(8,d,s)}var f=d.child;if(f!==null)f.return=d,A=f;else for(;A!==null;){d=A;var p=d.sibling,g=d.return;if(dm(d),d===c){A=null;break}if(p!==null){p.return=g,A=p;break}A=g}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var k=v.sibling;v.sibling=null,v=k}while(v!==null)}}A=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,A=o;else e:for(;A!==null;){if(s=A,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Or(9,s,s.return)}var x=s.sibling;if(x!==null){x.return=s.return,A=x;break e}A=s.return}}var h=e.current;for(A=h;A!==null;){o=A;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,A=m;else e:for(o=h;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:wo(9,a)}}catch(C){ee(a,a.return,C)}if(a===o){A=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,A=w;break e}A=a.return}}if(_=i,en(),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(fo,e)}catch{}r=!0}return r}finally{B=n,We.transition=t}}return!1}function Ld(e,t,n){t=ir(n,t),t=em(e,t,1),e=Ut(e,t,1),t=Se(),e!==null&&(wi(e,1,t),Ae(e,t))}function ee(e,t,n){if(e.tag===3)Ld(e,e,n);else for(;t!==null;){if(t.tag===3){Ld(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ht===null||!Ht.has(r))){e=ir(n,e),e=tm(t,e,1),t=Ut(t,e,1),e=Se(),t!==null&&(wi(t,1,e),Ae(t,e));break}}t=t.return}}function sv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Se(),e.pingedLanes|=e.suspendedLanes&n,ce===e&&(he&n)===n&&(le===4||le===3&&(he&130023424)===he&&500>te()-Bu?gn(e,0):Vu|=n),Ae(e,t)}function bm(e,t){t===0&&(e.mode&1?(t=_i,_i<<=1,!(_i&130023424)&&(_i=4194304)):t=1);var n=Se();e=jt(e,t),e!==null&&(wi(e,t,n),Ae(e,n))}function ov(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),bm(e,n)}function av(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),bm(e,n)}var km;km=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Pe.current)Te=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Te=!1,Gy(e,t,n);Te=!!(e.flags&131072)}else Te=!1,q&&t.flags&1048576&&Eh(t,Is,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;fs(e,t),e=t.pendingProps;var i=er(t,ve.current);Yn(t,n),i=Du(null,t,r,e,i,n);var s=Ru();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Fe(r)?(s=!0,zs(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Tu(t),i.updater=vo,t.stateNode=i,i._reactInternals=t,ul(t,r,e,n),t=fl(null,t,r,!0,s,n)):(t.tag=0,q&&s&&bu(t),we(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(fs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=uv(r),e=Ze(r,e),i){case 0:t=dl(null,t,r,e,n);break e;case 1:t=Cd(null,t,r,e,n);break e;case 11:t=Sd(null,t,r,e,n);break e;case 14:t=jd(null,t,r,Ze(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ze(r,i),dl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ze(r,i),Cd(e,t,r,i,n);case 3:e:{if(sm(t),e===null)throw Error(T(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Mh(e,t),Os(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=ir(Error(T(423)),t),t=Ed(e,t,r,n,i);break e}else if(r!==i){i=ir(Error(T(424)),t),t=Ed(e,t,r,n,i);break e}else for(Le=$t(t.stateNode.containerInfo.firstChild),ze=t,q=!0,tt=null,n=Fh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(tr(),r===i){t=Ct(e,t,n);break e}we(e,t,r,n)}t=t.child}return t;case 5:return Dh(t),e===null&&ol(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,tl(r,i)?o=null:s!==null&&tl(r,s)&&(t.flags|=32),im(e,t),we(e,t,o,n),t.child;case 6:return e===null&&ol(t),null;case 13:return om(e,t,n);case 4:return Pu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=nr(t,null,r,n):we(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ze(r,i),Sd(e,t,r,i,n);case 7:return we(e,t,t.pendingProps,n),t.child;case 8:return we(e,t,t.pendingProps.children,n),t.child;case 12:return we(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,H(Vs,r._currentValue),r._currentValue=o,s!==null)if(st(s.value,o)){if(s.children===i.children&&!Pe.current){t=Ct(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=bt(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),al(s.return,n,t),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(T(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),al(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}we(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Yn(t,n),i=qe(i),r=r(i),t.flags|=1,we(e,t,r,n),t.child;case 14:return r=t.type,i=Ze(r,t.pendingProps),i=Ze(r.type,i),jd(e,t,r,i,n);case 15:return nm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ze(r,i),fs(e,t),t.tag=1,Fe(r)?(e=!0,zs(t)):e=!1,Yn(t,n),Zh(t,r,i),ul(t,r,i,n),fl(null,t,r,!0,e,n);case 19:return am(e,t,n);case 22:return rm(e,t,n)}throw Error(T(156,t.tag))};function Sm(e,t){return Yp(e,t)}function lv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ue(e,t,n,r){return new lv(e,t,n,r)}function Hu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function uv(e){if(typeof e=="function")return Hu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===uu)return 11;if(e===cu)return 14}return 2}function Kt(e,t){var n=e.alternate;return n===null?(n=Ue(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ms(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")Hu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Mn:return xn(n.children,i,s,t);case lu:o=8,i|=8;break;case Da:return e=Ue(12,n,t,i|2),e.elementType=Da,e.lanes=s,e;case Ra:return e=Ue(13,n,t,i),e.elementType=Ra,e.lanes=s,e;case La:return e=Ue(19,n,t,i),e.elementType=La,e.lanes=s,e;case Dp:return ko(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ap:o=10;break e;case Mp:o=9;break e;case uu:o=11;break e;case cu:o=14;break e;case At:o=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=Ue(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function xn(e,t,n,r){return e=Ue(7,e,r,t),e.lanes=n,e}function ko(e,t,n,r){return e=Ue(22,e,r,t),e.elementType=Dp,e.lanes=n,e.stateNode={isHidden:!1},e}function ua(e,t,n){return e=Ue(6,e,null,t),e.lanes=n,e}function ca(e,t,n){return t=Ue(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function cv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ho(0),this.expirationTimes=Ho(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ho(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Wu(e,t,n,r,i,s,o,a,u){return e=new cv(e,t,n,a,u),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ue(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tu(s),e}function dv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:An,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function jm(e){if(!e)return Qt;e=e._reactInternals;e:{if(Nn(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(Fe(n))return jh(e,n,t)}return t}function Cm(e,t,n,r,i,s,o,a,u){return e=Wu(n,r,!0,e,i,s,o,a,u),e.context=jm(null),n=e.current,r=Se(),i=Wt(n),s=bt(r,i),s.callback=t??null,Ut(n,s,i),e.current.lanes=i,wi(e,i,r),Ae(e,r),e}function So(e,t,n,r){var i=t.current,s=Se(),o=Wt(i);return n=jm(n),t.context===null?t.context=n:t.pendingContext=n,t=bt(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ut(i,t,o),e!==null&&(rt(e,i,o,s),us(e,i,o)),o}function Qs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function zd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ku(e,t){zd(e,t),(e=e.alternate)&&zd(e,t)}function fv(){return null}var Em=typeof reportError=="function"?reportError:function(e){console.error(e)};function qu(e){this._internalRoot=e}jo.prototype.render=qu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));So(e,t,null,null)};jo.prototype.unmount=qu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Cn(function(){So(null,e,null,null)}),t[St]=null}};function jo(e){this._internalRoot=e}jo.prototype.unstable_scheduleHydration=function(e){if(e){var t=rh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Dt.length&&t!==0&&t<Dt[n].priority;n++);Dt.splice(n,0,e),n===0&&sh(e)}};function Gu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Co(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _d(){}function pv(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Qs(o);s.call(c)}}var o=Cm(t,r,e,0,null,!1,!1,"",_d);return e._reactRootContainer=o,e[St]=o.current,ri(e.nodeType===8?e.parentNode:e),Cn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Qs(u);a.call(c)}}var u=Wu(e,0,!1,null,null,!1,!1,"",_d);return e._reactRootContainer=u,e[St]=u.current,ri(e.nodeType===8?e.parentNode:e),Cn(function(){So(t,u,n,r)}),u}function Eo(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Qs(o);a.call(u)}}So(t,o,e,i)}else o=pv(n,t,e,i,r);return Qs(o)}th=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Mr(t.pendingLanes);n!==0&&(pu(t,n|1),Ae(t,te()),!(_&6)&&(sr=te()+500,en()))}break;case 13:Cn(function(){var r=jt(e,1);if(r!==null){var i=Se();rt(r,e,1,i)}}),Ku(e,1)}};hu=function(e){if(e.tag===13){var t=jt(e,134217728);if(t!==null){var n=Se();rt(t,e,134217728,n)}Ku(e,134217728)}};nh=function(e){if(e.tag===13){var t=Wt(e),n=jt(e,t);if(n!==null){var r=Se();rt(n,e,t,r)}Ku(e,t)}};rh=function(){return B};ih=function(e,t){var n=B;try{return B=e,t()}finally{B=n}};Wa=function(e,t,n){switch(t){case"input":if(Ia(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=go(r);if(!i)throw Error(T(90));Lp(r),Ia(r,i)}}}break;case"textarea":_p(e,n);break;case"select":t=n.value,t!=null&&Kn(e,!!n.multiple,t,!1)}};Hp=Ou;Wp=Cn;var hv={usingClientEntryPoint:!1,Events:[ki,zn,go,$p,Up,Ou]},Cr={findFiberByHostInstance:dn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mv={bundleType:Cr.bundleType,version:Cr.version,rendererPackageName:Cr.rendererPackageName,rendererConfig:Cr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Et.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Gp(e),e===null?null:e.stateNode},findFiberByHostInstance:Cr.findFiberByHostInstance||fv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gi.isDisabled&&Gi.supportsFiber)try{fo=Gi.inject(mv),dt=Gi}catch{}}Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hv;Ve.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gu(t))throw Error(T(200));return dv(e,t,null,n)};Ve.createRoot=function(e,t){if(!Gu(e))throw Error(T(299));var n=!1,r="",i=Em;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Wu(e,1,!1,null,null,n,!1,r,i),e[St]=t.current,ri(e.nodeType===8?e.parentNode:e),new qu(t)};Ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=Gp(t),e=e===null?null:e.stateNode,e};Ve.flushSync=function(e){return Cn(e)};Ve.hydrate=function(e,t,n){if(!Co(t))throw Error(T(200));return Eo(null,e,t,!0,n)};Ve.hydrateRoot=function(e,t,n){if(!Gu(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Em;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Cm(t,null,e,1,n??null,i,!1,s,o),e[St]=t.current,ri(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new jo(t)};Ve.render=function(e,t,n){if(!Co(t))throw Error(T(200));return Eo(null,e,t,!1,n)};Ve.unmountComponentAtNode=function(e){if(!Co(e))throw Error(T(40));return e._reactRootContainer?(Cn(function(){Eo(null,null,e,!1,function(){e._reactRootContainer=null,e[St]=null})}),!0):!1};Ve.unstable_batchedUpdates=Ou;Ve.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Co(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return Eo(e,t,n,!1,r)};Ve.version="18.3.1-next-f1338f8080-20240426";function Nm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nm)}catch(e){console.error(e)}}Nm(),Np.exports=Ve;var gv=Np.exports,Id=gv;Aa.createRoot=Id.createRoot,Aa.hydrateRoot=Id.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fi(){return fi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fi.apply(this,arguments)}var _t;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(_t||(_t={}));const Vd="popstate";function xv(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return jl("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ys(i)}return vv(t,n,null,e)}function X(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Qu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function yv(){return Math.random().toString(36).substr(2,8)}function Bd(e,t){return{usr:e.state,key:e.key,idx:t}}function jl(e,t,n,r){return n===void 0&&(n=null),fi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?pr(t):t,{state:n,key:t&&t.key||r||yv()})}function Ys(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function pr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function vv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=_t.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(fi({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=_t.Pop;let k=d(),x=k==null?null:k-c;c=k,u&&u({action:a,location:v.location,delta:x})}function p(k,x){a=_t.Push;let h=jl(v.location,k,x);c=d()+1;let m=Bd(h,c),w=v.createHref(h);try{o.pushState(m,"",w)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(w)}s&&u&&u({action:a,location:v.location,delta:1})}function g(k,x){a=_t.Replace;let h=jl(v.location,k,x);c=d();let m=Bd(h,c),w=v.createHref(h);o.replaceState(m,"",w),s&&u&&u({action:a,location:v.location,delta:0})}function y(k){let x=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof k=="string"?k:Ys(k);return h=h.replace(/ $/,"%20"),X(x,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,x)}let v={get action(){return a},get location(){return e(i,o)},listen(k){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Vd,f),u=k,()=>{i.removeEventListener(Vd,f),u=null}},createHref(k){return t(i,k)},createURL:y,encodeLocation(k){let x=y(k);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:p,replace:g,go(k){return o.go(k)}};return v}var Od;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Od||(Od={}));function wv(e,t,n){return n===void 0&&(n="/"),bv(e,t,n)}function bv(e,t,n,r){let i=typeof t=="string"?pr(t):t,s=or(i.pathname||"/",n);if(s==null)return null;let o=Tm(e);kv(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let c=Dv(s);a=Av(o[u],c)}return a}function Tm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(X(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=qt([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(X(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Tm(s.children,t,d,c)),!(s.path==null&&!s.index)&&t.push({path:c,score:Pv(c,s.index),routesMeta:d})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of Pm(s.path))i(s,o,u)}),t}function Pm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Pm(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function kv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Fv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Sv=/^:[\w-]+$/,jv=3,Cv=2,Ev=1,Nv=10,Tv=-2,$d=e=>e==="*";function Pv(e,t){let n=e.split("/"),r=n.length;return n.some($d)&&(r+=Tv),t&&(r+=Cv),n.filter(i=>!$d(i)).reduce((i,s)=>i+(Sv.test(s)?jv:s===""?Ev:Nv),r)}function Fv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Av(e,t,n){let{routesMeta:r}=e,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,d=s==="/"?t:t.slice(s.length)||"/",f=Cl({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),p=u.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:qt([s,f.pathname]),pathnameBase:Iv(qt([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=qt([s,f.pathnameBase]))}return o}function Cl(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Mv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:p,isOptional:g}=d;if(p==="*"){let v=a[f]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const y=a[f];return g&&!y?c[p]=void 0:c[p]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:e}}function Mv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Qu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Dv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Qu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function or(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Rv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Lv=e=>Rv.test(e);function zv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?pr(e):e,s;if(n)if(Lv(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Qu(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Ud(n.substring(1),"/"):s=Ud(n,t)}else s=t;return{pathname:s,search:Vv(r),hash:Bv(i)}}function Ud(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function da(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function _v(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Yu(e,t){let n=_v(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Xu(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=pr(e):(i=fi({},e),X(!i.pathname||!i.pathname.includes("?"),da("?","pathname","search",i)),X(!i.pathname||!i.pathname.includes("#"),da("#","pathname","hash",i)),X(!i.search||!i.search.includes("#"),da("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=t.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}a=f>=0?t[f]:"/"}let u=zv(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const qt=e=>e.join("/").replace(/\/\/+/g,"/"),Iv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Vv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Bv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ov(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Fm=["post","put","patch","delete"];new Set(Fm);const $v=["get",...Fm];new Set($v);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pi(){return pi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pi.apply(this,arguments)}const No=b.createContext(null),Am=b.createContext(null),Nt=b.createContext(null),To=b.createContext(null),tn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),Mm=b.createContext(null);function Uv(e,t){let{relative:n}=t===void 0?{}:t;hr()||X(!1);let{basename:r,navigator:i}=b.useContext(Nt),{hash:s,pathname:o,search:a}=Po(e,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:qt([r,o])),i.createHref({pathname:u,search:a,hash:s})}function hr(){return b.useContext(To)!=null}function Tt(){return hr()||X(!1),b.useContext(To).location}function Dm(e){b.useContext(Nt).static||b.useLayoutEffect(e)}function Rm(){let{isDataRoute:e}=b.useContext(tn);return e?n1():Hv()}function Hv(){hr()||X(!1);let e=b.useContext(No),{basename:t,future:n,navigator:r}=b.useContext(Nt),{matches:i}=b.useContext(tn),{pathname:s}=Tt(),o=JSON.stringify(Yu(i,n.v7_relativeSplatPath)),a=b.useRef(!1);return Dm(()=>{a.current=!0}),b.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=Xu(c,JSON.parse(o),s,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:qt([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,o,s,e])}function Po(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=b.useContext(Nt),{matches:i}=b.useContext(tn),{pathname:s}=Tt(),o=JSON.stringify(Yu(i,r.v7_relativeSplatPath));return b.useMemo(()=>Xu(e,JSON.parse(o),s,n==="path"),[e,o,s,n])}function Wv(e,t){return Kv(e,t)}function Kv(e,t,n,r){hr()||X(!1);let{navigator:i}=b.useContext(Nt),{matches:s}=b.useContext(tn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Tt(),d;if(t){var f;let k=typeof t=="string"?pr(t):t;u==="/"||(f=k.pathname)!=null&&f.startsWith(u)||X(!1),d=k}else d=c;let p=d.pathname||"/",g=p;if(u!=="/"){let k=u.replace(/^\//,"").split("/");g="/"+p.replace(/^\//,"").split("/").slice(k.length).join("/")}let y=wv(e,{pathname:g}),v=Xv(y&&y.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:qt([u,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?u:qt([u,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),s,n,r);return t&&v?b.createElement(To.Provider,{value:{location:pi({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:_t.Pop}},v):v}function qv(){let e=t1(),t=Ov(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,null)}const Gv=b.createElement(qv,null);class Qv extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?b.createElement(tn.Provider,{value:this.props.routeContext},b.createElement(Mm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Yv(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(No);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(tn.Provider,{value:t},r)}function Xv(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||X(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:p,errors:g}=n,y=f.route.loader&&p[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||y){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,p)=>{let g,y=!1,v=null,k=null;n&&(g=a&&f.route.id?a[f.route.id]:void 0,v=f.route.errorElement||Gv,u&&(c<0&&p===0?(r1("route-fallback"),y=!0,k=null):c===p&&(y=!0,k=f.route.hydrateFallbackElement||null)));let x=t.concat(o.slice(0,p+1)),h=()=>{let m;return g?m=v:y?m=k:f.route.Component?m=b.createElement(f.route.Component,null):f.route.element?m=f.route.element:m=d,b.createElement(Yv,{match:f,routeContext:{outlet:d,matches:x,isDataRoute:n!=null},children:m})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?b.createElement(Qv,{location:n.location,revalidation:n.revalidation,component:v,error:g,children:h(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):h()},null)}var Lm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Lm||{}),zm=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(zm||{});function Jv(e){let t=b.useContext(No);return t||X(!1),t}function Zv(e){let t=b.useContext(Am);return t||X(!1),t}function e1(e){let t=b.useContext(tn);return t||X(!1),t}function _m(e){let t=e1(),n=t.matches[t.matches.length-1];return n.route.id||X(!1),n.route.id}function t1(){var e;let t=b.useContext(Mm),n=Zv(),r=_m();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function n1(){let{router:e}=Jv(Lm.UseNavigateStable),t=_m(zm.UseNavigateStable),n=b.useRef(!1);return Dm(()=>{n.current=!0}),b.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,pi({fromRouteId:t},s)))},[e,t])}const Hd={};function r1(e,t,n){Hd[e]||(Hd[e]=!0)}function i1(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function s1(e){let{to:t,replace:n,state:r,relative:i}=e;hr()||X(!1);let{future:s,static:o}=b.useContext(Nt),{matches:a}=b.useContext(tn),{pathname:u}=Tt(),c=Rm(),d=Xu(t,Yu(a,s.v7_relativeSplatPath),u,i==="path"),f=JSON.stringify(d);return b.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function un(e){X(!1)}function o1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=_t.Pop,navigator:s,static:o=!1,future:a}=e;hr()&&X(!1);let u=t.replace(/^\/*/,"/"),c=b.useMemo(()=>({basename:u,navigator:s,static:o,future:pi({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=pr(r));let{pathname:d="/",search:f="",hash:p="",state:g=null,key:y="default"}=r,v=b.useMemo(()=>{let k=or(d,u);return k==null?null:{location:{pathname:k,search:f,hash:p,state:g,key:y},navigationType:i}},[u,d,f,p,g,y,i]);return v==null?null:b.createElement(Nt.Provider,{value:c},b.createElement(To.Provider,{children:n,value:v}))}function a1(e){let{children:t,location:n}=e;return Wv(El(t),n)}new Promise(()=>{});function El(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let s=[...t,i];if(r.type===b.Fragment){n.push.apply(n,El(r.props.children,s));return}r.type!==un&&X(!1),!r.props.index||!r.props.children||X(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=El(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xs(){return Xs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xs.apply(this,arguments)}function Im(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function l1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function u1(e,t){return e.button===0&&(!t||t==="_self")&&!l1(e)}const c1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],d1=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],f1="6";try{window.__reactRouterVersion=f1}catch{}const p1=b.createContext({isTransitioning:!1}),h1="startTransition",Wd=sx[h1];function m1(e){let{basename:t,children:n,future:r,window:i}=e,s=b.useRef();s.current==null&&(s.current=xv({window:i,v5Compat:!0}));let o=s.current,[a,u]=b.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=b.useCallback(f=>{c&&Wd?Wd(()=>u(f)):u(f)},[u,c]);return b.useLayoutEffect(()=>o.listen(d),[o,d]),b.useEffect(()=>i1(r),[r]),b.createElement(o1,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const g1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",x1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,y1=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:c,preventScrollReset:d,viewTransition:f}=t,p=Im(t,c1),{basename:g}=b.useContext(Nt),y,v=!1;if(typeof c=="string"&&x1.test(c)&&(y=c,g1))try{let m=new URL(window.location.href),w=c.startsWith("//")?new URL(m.protocol+c):new URL(c),C=or(w.pathname,g);w.origin===m.origin&&C!=null?c=C+w.search+w.hash:v=!0}catch{}let k=Uv(c,{relative:i}),x=w1(c,{replace:o,state:a,target:u,preventScrollReset:d,relative:i,viewTransition:f});function h(m){r&&r(m),m.defaultPrevented||x(m)}return b.createElement("a",Xs({},p,{href:y||k,onClick:v||s?r:h,ref:n,target:u}))}),Ju=b.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:u,viewTransition:c,children:d}=t,f=Im(t,d1),p=Po(u,{relative:f.relative}),g=Tt(),y=b.useContext(Am),{navigator:v,basename:k}=b.useContext(Nt),x=y!=null&&b1(p)&&c===!0,h=v.encodeLocation?v.encodeLocation(p).pathname:p.pathname,m=g.pathname,w=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(m=m.toLowerCase(),w=w?w.toLowerCase():null,h=h.toLowerCase()),w&&k&&(w=or(w,k)||w);const C=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let E=m===h||!o&&m.startsWith(h)&&m.charAt(C)==="/",S=w!=null&&(w===h||!o&&w.startsWith(h)&&w.charAt(h.length)==="/"),j={isActive:E,isPending:S,isTransitioning:x},P=E?r:void 0,N;typeof s=="function"?N=s(j):N=[s,E?"active":null,S?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let L=typeof a=="function"?a(j):a;return b.createElement(y1,Xs({},f,{"aria-current":P,className:N,ref:n,style:L,to:u,viewTransition:c}),typeof d=="function"?d(j):d)});var Nl;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Nl||(Nl={}));var Kd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Kd||(Kd={}));function v1(e){let t=b.useContext(No);return t||X(!1),t}function w1(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=t===void 0?{}:t,u=Rm(),c=Tt(),d=Po(e,{relative:o});return b.useCallback(f=>{if(u1(f,n)){f.preventDefault();let p=r!==void 0?r:Ys(c)===Ys(d);u(e,{replace:p,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[c,u,d,r,i,n,e,s,o,a])}function b1(e,t){t===void 0&&(t={});let n=b.useContext(p1);n==null&&X(!1);let{basename:r}=v1(Nl.useViewTransitionState),i=Po(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=or(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=or(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Cl(i.pathname,o)!=null||Cl(i.pathname,s)!=null}const Me="https://jotnosathi-backe.onrender.com",Zu=["Barishal","Chattogram","Dhaka","Khulna","Mymensingh","Rajshahi","Rangpur","Sylhet"],ar={dengue:{color:"#e65100",icon:"🦟",report_type:"outbreak",label:"Dengue — feeds risk map",fields:[{id:"fever_days",label:"Days of fever",type:"number",placeholder:"e.g. 4",min:1,max:14},{id:"rash_present",label:"Rash present?",type:"select",options:[["","Select..."],["true","Yes"],["false","No"]]},{id:"bleeding",label:"Bleeding signs?",type:"select",options:[["","Select..."],["true","Yes — gums/nose"],["false","No"]]}]},measles:{color:"#c62828",icon:"🔴",report_type:"outbreak",label:"Measles — feeds risk map (ACTIVE OUTBREAK 2026)",fields:[{id:"fever_days",label:"Days of fever",type:"number",placeholder:"e.g. 3",min:1,max:14},{id:"rash_present",label:"Rash present?",type:"select",options:[["","Select..."],["true","Yes"],["false","No"]]},{id:"vaccination_status",label:"Vaccination status",type:"select",options:[["","Select..."],["unvaccinated","Unvaccinated"],["vaccinated","Vaccinated"],["partial","Partially vaccinated"],["unknown","Unknown"]]}]},maternal:{color:"#7b1fa2",icon:"🤰",report_type:"registry",label:"Maternal — adds to case registry",fields:[{id:"week",label:"Gestational week",type:"number",placeholder:"e.g. 28",min:1,max:42},{id:"complication_type",label:"Complication type",type:"select",options:[["","Select..."],["bleeding","Bleeding"],["hypertension","Hypertension / Pre-eclampsia"],["no_fetal_movement","No fetal movement"],["preterm_labour","Preterm labour"],["other","Other"]]}]},diabetes:{color:"#1565c0",icon:"🩸",report_type:"registry",label:"Diabetes — adds to case registry",fields:[{id:"fasting_glucose",label:"Fasting glucose (mmol/L)",type:"number",placeholder:"e.g. 7.2",step:"0.1"},{id:"hba1c",label:"HbA1c % (if available)",type:"number",placeholder:"e.g. 6.8",step:"0.1"}]},bp:{color:"#00695c",icon:"💊",report_type:"registry",label:"Blood Pressure — adds to case registry",fields:[{id:"systolic",label:"Systolic (mmHg)",type:"number",placeholder:"e.g. 145",min:60,max:250},{id:"diastolic",label:"Diastolic (mmHg)",type:"number",placeholder:"e.g. 95",min:40,max:150}]}},Vm={CRITICAL:"#c62828",HIGH:"#e65100",MODERATE:"#f57f17",LOW:"#2e7d32"},Er=[{name:"Dhaka Medical College Hospital",lat:23.7261,lng:90.3961,type:"tertiary"},{name:"Sir Salimullah Medical College",lat:23.7099,lng:90.4072,type:"tertiary"},{name:"Gazipur Sadar Hospital",lat:23.9999,lng:90.4203,type:"district"},{name:"Narayanganj District Hospital",lat:23.6238,lng:90.4998,type:"district"},{name:"Manikganj District Hospital",lat:23.8634,lng:89.9816,type:"district"},{name:"Munshiganj District Hospital",lat:23.5423,lng:90.5302,type:"district"},{name:"Narsingdi District Hospital",lat:23.9215,lng:90.7152,type:"district"},{name:"Tangail District Hospital",lat:24.2512,lng:89.9167,type:"district"},{name:"Chittagong Medical College",lat:22.3569,lng:91.8313,type:"tertiary"},{name:"Cox's Bazar District Hospital",lat:21.4272,lng:92.0058,type:"district"},{name:"Cumilla District Hospital",lat:23.4607,lng:91.1809,type:"district"},{name:"Feni District Hospital",lat:23.0159,lng:91.3976,type:"district"},{name:"Sylhet MAG Osmani Hospital",lat:24.8949,lng:91.8687,type:"tertiary"},{name:"Sunamganj District Hospital",lat:24.8815,lng:91.3968,type:"district"},{name:"Moulvibazar District Hospital",lat:24.4826,lng:91.7774,type:"district"},{name:"Rajshahi Medical College",lat:24.3745,lng:88.6042,type:"tertiary"},{name:"Bogura District Hospital",lat:24.8465,lng:89.3773,type:"district"},{name:"Pabna District Hospital",lat:24.0064,lng:89.2372,type:"district"},{name:"Rangpur Medical College",lat:25.7439,lng:89.2752,type:"tertiary"},{name:"Dinajpur District Hospital",lat:25.6217,lng:88.6354,type:"district"},{name:"Kurigram District Hospital",lat:25.8073,lng:89.6364,type:"district"},{name:"Mymensingh Medical College",lat:24.7471,lng:90.4203,type:"tertiary"},{name:"Netrokona District Hospital",lat:24.8703,lng:90.7279,type:"district"},{name:"Jamalpur District Hospital",lat:24.9375,lng:89.9371,type:"district"},{name:"Khulna Medical College",lat:22.8456,lng:89.5403,type:"tertiary"},{name:"Jashore District Hospital",lat:23.1664,lng:89.2081,type:"district"},{name:"Satkhira District Hospital",lat:22.7185,lng:89.0705,type:"district"},{name:"Sher-E-Bangla Medical College",lat:22.701,lng:90.3696,type:"tertiary"},{name:"Patuakhali District Hospital",lat:22.3596,lng:90.3296,type:"district"},{name:"Bhola District Hospital",lat:22.686,lng:90.6481,type:"district"}],k1="jotnosathi-offline",S1=1,ht="triage-queue";function Fo(){return new Promise((e,t)=>{const n=indexedDB.open(k1,S1);n.onupgradeneeded=()=>{const r=n.result;r.objectStoreNames.contains(ht)||r.createObjectStore(ht,{keyPath:"id",autoIncrement:!0})},n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)})}async function Bm(e,t="/triage"){const n=await Fo();return new Promise((r,i)=>{const s=n.transaction(ht,"readwrite"),o=s.objectStore(ht).add({payload:e,endpoint:t,queuedAt:new Date().toISOString()});o.onsuccess=()=>r(o.result),s.onerror=()=>i(s.error)})}function j1(e){return Bm(e,"/triage")}async function C1(){const e=await Fo();return new Promise((t,n)=>{const r=e.transaction(ht,"readonly").objectStore(ht).getAll();r.onsuccess=()=>t(r.result||[]),r.onerror=()=>n(r.error)})}async function qd(){const e=await Fo();return new Promise((t,n)=>{const r=e.transaction(ht,"readonly").objectStore(ht).count();r.onsuccess=()=>t(r.result),r.onerror=()=>n(r.error)})}function E1(e){return Fo().then(t=>new Promise((n,r)=>{const i=t.transaction(ht,"readwrite");i.objectStore(ht).delete(e),i.oncomplete=()=>n(!0),i.onerror=()=>r(i.error)}))}async function N1(e){const t=await C1();let n=0;for(const r of t)try{const i=await fetch(`${e}${r.endpoint||"/triage"}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r.payload)});if(!i.ok)throw new Error(`HTTP ${i.status}`);await E1(r.id),n++}catch{break}return{synced:n,remaining:t.length-n}}function Om(){window.dispatchEvent(new Event("jotno-queue-updated"))}const gs="/assets/jotno-Cksux5sZ.png",T1=`
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
`;function P1({onLogin:e,onBack:t}){const[n,r]=b.useState("login"),[i,s]=b.useState(""),[o,a]=b.useState(""),[u,c]=b.useState("Dhaka"),[d,f]=b.useState(""),[p,g]=b.useState(""),[y,v]=b.useState(!1);async function k(){f(""),v(!0);try{const m=new URLSearchParams({username:i,password:o,grant_type:"password"}),w=await fetch(`${Me}/auth/login`,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:m});if(w.ok){const C=await w.json();localStorage.setItem("token",C.access_token),e()}else f("Invalid username or password")}catch{f("Could not connect to server")}v(!1)}async function x(){if(f(""),g(""),v(!0),!i||!o){f("Please fill in all fields"),v(!1);return}try{const m=await fetch(`${Me}/auth/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:i,password:o,division:u})});if(m.ok){g("Account created! Signing you in…");const w=new URLSearchParams({username:i,password:o,grant_type:"password"}),C=await fetch(`${Me}/auth/login`,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:w});if(C.ok){const E=await C.json();localStorage.setItem("token",E.access_token),setTimeout(()=>e(),800)}}else{const w=await m.json();f(w.detail||"Registration failed")}}catch{f("Could not connect to server")}v(!1)}function h(m){m.key==="Enter"&&(n==="login"?k():x())}return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:T1}),l.jsxs("div",{className:"auth-root",children:[l.jsx("div",{className:"auth-grid"}),l.jsx("div",{className:"auth-orb auth-orb-1"}),l.jsx("div",{className:"auth-orb auth-orb-2"}),l.jsxs("div",{className:"auth-card",children:[l.jsxs("div",{className:"auth-header",children:[l.jsxs("div",{className:"auth-header-top",children:[l.jsx("div",{className:"auth-logo-mark",children:"🏥"}),l.jsxs("div",{children:[l.jsx("div",{className:"auth-logo-name",children:"JotnoSathi"}),l.jsx("div",{className:"auth-logo-sub",children:"AI Clinical Decision Support"})]}),l.jsx("div",{className:"auth-header-badge",children:"BuildFest 2026"})]}),l.jsxs("div",{className:"auth-tabs",children:[l.jsx("button",{className:`auth-tab ${n==="login"?"auth-tab-active":"auth-tab-inactive"}`,onClick:()=>{r("login"),f(""),g("")},children:"Sign In"}),l.jsx("button",{className:`auth-tab ${n==="signup"?"auth-tab-active":"auth-tab-inactive"}`,onClick:()=>{r("signup"),f(""),g("")},children:"Create Account"})]})]}),l.jsxs("div",{className:"auth-body",children:[d&&l.jsxs("div",{className:"auth-error",children:["⚠ ",d]}),p&&l.jsxs("div",{className:"auth-success",children:["✓ ",p]}),l.jsxs("div",{className:"auth-field",children:[l.jsx("label",{className:"auth-label",children:"Username"}),l.jsx("input",{className:"auth-input",placeholder:"e.g. raisa",value:i,onChange:m=>s(m.target.value),onKeyDown:h,autoFocus:!0})]}),l.jsxs("div",{className:"auth-field",children:[l.jsx("label",{className:"auth-label",children:"Password"}),l.jsx("input",{className:"auth-input",type:"password",placeholder:"••••••••",value:o,onChange:m=>a(m.target.value),onKeyDown:h})]}),n==="signup"&&l.jsxs("div",{className:"auth-field",children:[l.jsx("label",{className:"auth-label",children:"Division"}),l.jsx("select",{className:"auth-select",value:u,onChange:m=>c(m.target.value),children:Zu.map(m=>l.jsx("option",{children:m},m))})]}),l.jsx("button",{className:"auth-btn",onClick:n==="login"?k:x,disabled:y,children:y?"…":n==="login"?"→ Sign In":"→ Create Account"}),l.jsxs("div",{className:"auth-bn",children:[l.jsx("div",{className:"auth-bn-main",children:"তুমি একজন সহায়তাকারী, রোগ নির্ণয় করছ না।"}),l.jsx("div",{className:"auth-bn-sub",children:"You are assisting, not diagnosing · For Shasthya Shebikas only"})]}),t&&l.jsx("div",{className:"auth-back",children:l.jsx("button",{className:"auth-back-btn",onClick:t,children:"← Back to home"})})]})]})]})]})}const F1=`
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
`;function A1({onGetStarted:e,onLogin:t}){return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:F1}),l.jsxs("div",{className:"land-root",children:[l.jsx("div",{className:"land-grid"}),l.jsx("div",{className:"land-orb land-orb-1"}),l.jsx("div",{className:"land-orb land-orb-2"}),l.jsxs("nav",{className:"land-nav",children:[l.jsxs("div",{className:"land-nav-logo",children:[l.jsx("div",{className:"land-nav-mark",children:l.jsx("img",{src:gs,alt:"JotnoSathi",style:{width:36,height:36,objectFit:"contain"}})}),l.jsxs("div",{children:[l.jsx("div",{className:"land-nav-name",children:"JotnoSathi"}),l.jsx("div",{className:"land-nav-sub",children:"AI Health Assistant"})]})]}),l.jsx("span",{className:"land-nav-badge",children:"BuildFest 2026"})]}),l.jsxs("section",{className:"land-hero",children:[l.jsxs("div",{className:"land-pill",children:[l.jsx("span",{className:"land-pill-dot"}),l.jsx("img",{src:gs,alt:"JotnoSathi",style:{width:28,height:28,objectFit:"contain"}}),"Live · JotnoSathi"]}),l.jsxs("h1",{className:"land-headline",children:["AI-powered health",l.jsx("br",{}),l.jsx("span",{className:"land-headline-accent",children:"triage for Bangladesh"})]}),l.jsx("p",{className:"land-sub",children:"Helping 13,000+ Shasthya Shebikas detect disease outbreaks, triage patients in Bangla, and update district risk models — in real time."}),l.jsx("div",{className:"land-bn-note",children:"তুমি একজন সহায়তাকারী, রোগ নির্ণয় করছ না।"}),l.jsxs("div",{className:"land-cta-group",children:[l.jsxs("button",{className:"land-btn-primary",onClick:e,children:[l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}),l.jsx("circle",{cx:"9",cy:"7",r:"4"}),l.jsx("line",{x1:"19",y1:"8",x2:"19",y2:"14"}),l.jsx("line",{x1:"22",y1:"11",x2:"16",y2:"11"})]}),"Create Account"]}),l.jsx("button",{className:"land-btn-secondary",onClick:t,children:"Sign In →"})]})]}),l.jsx("div",{className:"land-stats",children:[{num:"13,000+",label:"Shasthya Shebikas"},{num:"8",label:"WHO/MSF Guidelines"},{num:"5",label:"Disease Domains"},{num:"<10s",label:"AI Response Time"}].map(n=>l.jsxs("div",{className:"land-stat",children:[l.jsx("div",{className:"land-stat-num",children:n.num}),l.jsx("div",{className:"land-stat-label",children:n.label})]},n.label))})]}),l.jsxs("section",{className:"land-features",children:[l.jsx("h2",{className:"land-features-title",children:"Built for frontline workers"}),l.jsx("p",{className:"land-features-sub",children:"Everything a Shebika needs, grounded in real WHO data"}),l.jsx("div",{className:"land-cards",children:[{icon:"🧠",title:"Bangla Triage AI",desc:"Type symptoms in Bangla or English. LLaMA 3.3 70B via Groq delivers clinical advice in under 10 seconds."},{icon:"🗺️",title:"Live District Risk Map",desc:"Choropleth risk scores for all 8 divisions. Auto-updates when field reports reach the retraining threshold."},{icon:"🔄",title:"Self-Learning Model",desc:"Every 5 outbreak reports trigger a genuine model refit. The system gets smarter with every case filed."},{icon:"📋",title:"Auto Field Reports",desc:"Triage silently generates a structured field report in the background — zero extra work for the worker."},{icon:"🏥",title:"30 Referral Hospitals",desc:"Live map of district and tertiary hospitals across all divisions, ready for immediate referral routing."},{icon:"🔒",title:"Ethics First",desc:"Mandatory disclaimer every session. Assists not diagnoses. Protocol-grounded, explainable output."}].map(n=>l.jsxs("div",{className:"land-card",children:[l.jsx("div",{className:"land-card-icon",children:n.icon}),l.jsx("div",{className:"land-card-title",children:n.title}),l.jsx("div",{className:"land-card-desc",children:n.desc})]},n.title))})]}),l.jsxs("div",{className:"land-diseases",children:[l.jsx("div",{className:"land-diseases-title",children:"Supported disease domains"}),l.jsx("div",{className:"land-disease-chips",children:[{icon:"🦟",label:"Dengue"},{icon:"🔴",label:"Measles"},{icon:"🤰",label:"Maternal Health"},{icon:"🩸",label:"Diabetes"},{icon:"💊",label:"Hypertension"}].map(n=>l.jsxs("span",{className:"land-chip",children:[n.icon," ",n.label]},n.label))})]}),l.jsx("section",{className:"land-cta-section",children:l.jsxs("div",{className:"land-cta-inner",children:[l.jsx("h2",{className:"land-cta-title",children:"Ready to get started?"}),l.jsx("p",{className:"land-cta-sub",children:"Create your free account in seconds"}),l.jsxs("div",{className:"land-cta-group",style:{justifyContent:"center"},children:[l.jsx("button",{className:"land-btn-primary",onClick:e,children:"Create Account →"}),l.jsx("button",{className:"land-btn-secondary",onClick:t,children:"Already have an account"})]})]})}),l.jsxs("footer",{className:"land-footer",children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[l.jsx("img",{src:gs,alt:"JotnoSathi",style:{width:28,height:28,objectFit:"contain",borderRadius:7}}),l.jsx("span",{className:"land-footer-left",children:"© 2026 JotnoSathi · Infinity AI BuildFest · HealthTech Domain"})]}),l.jsx("span",{className:"land-footer-right",children:"WHO · HDX · DHS Bangladesh · Kaggle · 13 datasets"})]})]})}function Ao({level:e,className:t=""}){return l.jsx("span",{className:`inline-block px-3 py-0.5 rounded-full text-xs font-semibold tracking-wide badge-${e} ${t}`,children:e})}let xs=null,Hr=null,Nr=null;const M1=/[a-zA-Z\u0980-\u09FF]+/g;function $m(e){return e.toLowerCase().match(M1)||[]}async function Um(){if(!Hr){if(Nr)return Nr;Nr=(async()=>{const e=await fetch("/who_docs.json");if(!e.ok)throw new Error("Protocol file unavailable");xs=await e.json();const t=xs.length,n=new Map,r=new Array(t);for(let s=0;s<t;s++){const o=new Set($m(xs[s].text));r[s]=o;for(const a of o)n.set(a,(n.get(a)||0)+1)}const i=new Map;for(const[s,o]of n)i.set(s,Math.log(t/(1+o)));Hr={tokenized:r,idf:i,N:t}})();try{await Nr}finally{Nr=null}}}function D1(){Um().catch(()=>{})}async function R1(e,t=3){await Um();const n=new Set($m(e)),r=[];for(let i=0;i<Hr.N;i++){let s=0;const o=Hr.tokenized[i];for(const a of n)if(o.has(a)){const u=Hr.idf.get(a);u&&(s+=u)}s>0&&r.push([i,s])}return r.sort((i,s)=>s[1]-i[1]),r.slice(0,t).map(([i])=>{var a,u;const s=xs[i],o=(((a=s.meta)==null?void 0:a.source)||"WHO guideline").split(/[\\/]/).pop();return{text:s.text,source:o,page:((u=s.meta)==null?void 0:u.page)!=null?s.meta.page+1:null}})}const L1={dengue:["dengue","ডেঙ্গু","dengue fever","aedes","platelet","প্লেটলেট","bone pain","হাড়ে ব্যথা","eye pain","চোখে ব্যথা","retro-orbital","retroorbital","breakbone","dengue shock","bleeding gums","মাড়ি থেকে রক্ত","warning sign dengue","severe abdominal pain vomiting fever"],measles:["measles","হাম","koplik","unvaccinated","টিকা নেই","cough rash","fever rash cough","runny nose rash","সর্দি ফুসকুড়ি","red eyes rash","চোখ লাল ফুসকুড়ি","জ্বর ফুসকুড়ি কাশি","rash cough unvaccinated","fever rash unvaccinated"],maternal:["pregnant","গর্ভবতী","pregnancy","গর্ভাবস্থা","antenatal","prenatal","anc","delivery","প্রসব","labour","labor","প্রসব ব্যথা","postpartum","প্রসব পরবর্তী","bleeding pregnancy","গর্ভাবস্থায় রক্তপাত","eclampsia","preeclampsia","high bp pregnant","week","সপ্তাহ","trimester","kicks","fetal","miscarriage","গর্ভপাত"],diabetes:["diabetes","ডায়াবেটিস","diabetic","sugar","blood sugar","রক্তে শর্করা","glucose","গ্লুকোজ","fasting glucose","hba1c","frequent urination","ঘন ঘন প্রস্রাব","excessive thirst","অতিরিক্ত তৃষ্ণা","slow healing","ধীরে সারছে","numbness feet","পায়ে অসাড়তা","gestational diabetes","গর্ভকালীন ডায়াবেটিস"],bp:["blood pressure","রক্তচাপ","hypertension","উচ্চ রক্তচাপ","systolic","diastolic","bp ","headache dizziness","মাথাব্যথা মাথা ঘোরা","chest pain","বুকে ব্যথা","shortness of breath","শ্বাসকষ্ট","180/","170/","160/","hypertensive","হাইপারটেনসিভ"]},z1=["maternal","bp","diabetes","dengue","measles"];function _1(e){const t=e.toLowerCase();for(const n of z1)if(L1[n].some(r=>t.includes(r.toLowerCase())))return n;return"general"}const I1={Dhaka:"ঢাকা",Chattogram:"চট্টগ্রাম",Rajshahi:"রাজশাহী",Khulna:"খুলনা",Barishal:"বরিশাল",Sylhet:"সিলেট",Rangpur:"রংপুর",Mymensingh:"ময়মনসিংহ"},V1=[{id:"dengue",label:"Dengue",bn:"ডেঙ্গু",icon:"🦟",color:"#EF4444"},{id:"measles",label:"Measles",bn:"হাম",icon:"🔴",color:"#F59E0B"},{id:"maternal",label:"Maternal",bn:"মাতৃস্বাস্থ্য",icon:"🤰",color:"#EC4899"},{id:"diabetes",label:"Diabetes",bn:"ডায়াবেটিস",icon:"🩸",color:"#3B82F6"},{id:"bp",label:"Hypertension",bn:"উচ্চ রক্তচাপ",icon:"💊",color:"#10B981"}],B1=`
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

/* OFFLINE PROTOCOL EXCERPTS */

.protocol-list{
  margin-top:18px;
  display:flex;
  flex-direction:column;
  gap:14px;
}

.protocol-chunk{
  background:#F8FAFC;
  border:1px solid rgba(148,163,184,0.14);
  border-left:4px solid #0F766E;
  border-radius:16px;
  padding:16px 18px;
}

.protocol-source{
  font-size:11px;
  font-weight:700;
  color:#0F766E;
  margin-bottom:8px;
  word-break:break-all;
}

.protocol-text{
  font-size:13.5px;
  line-height:1.8;
  color:#334155;
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
`;function O1({addToLog:e}){const[t,n]=b.useState("en"),[r,i]=b.useState("Unknown"),[s,o]=b.useState(""),[a,u]=b.useState(!1),[c,d]=b.useState(null),[f,p]=b.useState(!1),[g,y]=b.useState(""),[v,k]=b.useState(null);b.useEffect(()=>{D1()},[]);function x(){if(!("webkitSpeechRecognition"in window||"SpeechRecognition"in window)){alert("Voice input is not supported on this browser. Please use Chrome.");return}const S=window.SpeechRecognition||window.webkitSpeechRecognition,j=new S;j.lang="bn-BD",j.interimResults=!0,j.continuous=!1,p(!0);const P=s;j.onresult=N=>{let L="",V="";for(let G=N.resultIndex;G<N.results.length;G++)N.results[G].isFinal?V+=N.results[G][0].transcript:L+=N.results[G][0].transcript;o(P+(V||L)),V&&p(!1)},j.onerror=N=>{console.error("Voice error:",N.error),p(!1)},j.onend=()=>p(!1),j.start()}async function h(){if(!s.trim()){alert("Please describe symptoms first.");return}u(!0),d(null),k(null);const S={symptoms:s,language:t,division:r,worker_id:"shebika_field"};try{const j=await fetch(`${Me}/triage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(S)});if(!j.ok)throw new Error(`HTTP ${j.status}`);const P=await j.json();d(P),e({time:new Date().toLocaleTimeString(),symptoms:s.substring(0,60)+"...",disease:P.disease_detected,risk:P.risk_level||"UNKNOWN",response:P.raw_response})}catch{try{await j1(S),Om();let j="general",P=[];try{j=_1(s),P=await R1(s,3)}catch{}k({symptoms:s.substring(0,80),division:r,disease:j,protocols:P}),e({time:new Date().toLocaleTimeString(),symptoms:s.substring(0,60)+"...",disease:j,risk:"QUEUED",response:"Saved offline — will be submitted automatically when the server is reachable."}),window.dispatchEvent(new Event("jotno-backend-down"))}catch{alert("Connection error, and offline save failed. Please try again.")}}finally{u(!1)}}const m=c?Math.min((c.queue_size||0)/5*100,100):0,w=(c==null?void 0:c.queue_size)>=5?"#059669":(c==null?void 0:c.queue_size)>=3?"#D97706":"#0F766E",C=c!=null&&c.disease_detected?ar[c.disease_detected]:null,E=v!=null&&v.disease&&v.disease!=="general"?ar[v.disease]:null;return l.jsxs("div",{className:"triage-wrap",children:[l.jsx("style",{children:B1}),l.jsxs("div",{className:"hero",children:[l.jsxs("div",{className:"hero-top",children:[l.jsxs("div",{children:[l.jsx("h1",{className:"hero-title",children:"AI Triage Assistant"}),l.jsx("p",{className:"hero-desc",children:"Smart multilingual patient triage for community healthcare workers. Capture symptoms in Bangla or English and receive real-time clinical recommendations, outbreak alerts, and AI-assisted guidance."})]}),l.jsx("div",{className:"hero-badge",children:"⚡ Live AI Analysis"})]}),l.jsxs("div",{className:"hero-stats",children:[l.jsxs("div",{className:"hero-stat",children:[l.jsx("div",{className:"hero-stat-value",children:"5+"}),l.jsx("div",{className:"hero-stat-label",children:"Disease Domains"})]}),l.jsxs("div",{className:"hero-stat",children:[l.jsx("div",{className:"hero-stat-value",children:"Bangla + English"}),l.jsx("div",{className:"hero-stat-label",children:"Voice & Text Support"})]}),l.jsxs("div",{className:"hero-stat",children:[l.jsx("div",{className:"hero-stat-value",children:"Real-time"}),l.jsx("div",{className:"hero-stat-label",children:"Outbreak Monitoring"})]})]})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"section",children:[l.jsxs("div",{className:"section-title",children:[l.jsx("h3",{children:"Patient Context"}),l.jsx("div",{className:"section-sub",children:"Required before AI analysis"})]}),l.jsxs("div",{className:"grid",children:[l.jsxs("div",{className:"field",children:[l.jsx("label",{className:"label",children:"Division"}),l.jsxs("select",{className:"select",value:r,onChange:S=>i(S.target.value),children:[l.jsx("option",{value:"Unknown",children:t==="bn"?"বিভাগ নির্বাচন করুন":"Select division"}),Zu.map(S=>l.jsx("option",{value:S,children:t==="bn"&&I1[S]||S},S))]})]}),l.jsxs("div",{className:"field",children:[l.jsx("label",{className:"label",children:"Language / ভাষা"}),l.jsxs("select",{className:"select",value:t,onChange:S=>n(S.target.value),children:[l.jsx("option",{value:"en",children:"English"}),l.jsx("option",{value:"bn",children:"বাংলা"})]})]})]})]}),l.jsxs("div",{className:"section",children:[l.jsxs("div",{className:"section-title",children:[l.jsx("h3",{children:"Quick Disease Selection"}),l.jsx("div",{className:"section-sub",children:"Tap to autofill context"})]}),l.jsx("div",{className:"quick-wrap",children:V1.map(S=>l.jsxs("button",{className:`quick-chip ${g===S.id?"active":""}`,onClick:()=>{y(S.id),s||o(`${S.label} symptoms`)},children:[l.jsx("div",{className:"quick-icon",style:{background:`${S.color}15`},children:S.icon}),l.jsxs("div",{className:"quick-text",children:[l.jsx("span",{className:"quick-name",children:t==="bn"?S.bn:S.label}),l.jsx("span",{className:"quick-bn",children:t==="bn"?S.label:S.bn})]})]},S.id))})]}),l.jsxs("div",{className:"section",children:[l.jsxs("div",{className:"section-title",children:[l.jsx("h3",{children:"Voice Input"}),l.jsx("div",{className:"section-sub",children:"Smart speech capture"})]}),l.jsxs("button",{className:`voice-btn ${f?"listening":""}`,onClick:x,disabled:a,children:[l.jsx("div",{className:"voice-circle",children:"🎤"}),l.jsxs("div",{children:[l.jsx("div",{className:"voice-title",children:f?t==="bn"?"শোনা হচ্ছে...":"Listening...":t==="bn"?"উপসর্গ বলতে ট্যাপ করুন":"Tap to speak symptoms"}),l.jsx("div",{className:"voice-sub",children:t==="bn"?"বাংলা ও ইংরেজি সমর্থিত":"Supports Bangla & English"})]})]})]}),l.jsxs("div",{className:"section",children:[l.jsxs("div",{className:"section-title",children:[l.jsx("h3",{children:"Symptom Description"}),l.jsx("div",{className:"section-sub",children:"Detailed input improves AI accuracy"})]}),l.jsx("textarea",{className:"textarea",value:s,onChange:S=>o(S.target.value),placeholder:t==="bn"?"রোগীর উপসর্গ বিস্তারিত লিখুন... যেমন: ৩ দিন জ্বর, শরীর ব্যথা, মাথাব্যথা, কাশি":"Describe symptoms in detail... e.g. Fever for 3 days, severe headache, cough, body pain"}),l.jsxs("div",{style:{marginTop:10,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsx("span",{style:{fontSize:12,color:"#94A3B8"},children:t==="bn"?"বিস্তারিত তথ্য ভালো ফলাফল দেয়":"More detail improves recommendations"}),l.jsxs("span",{style:{fontSize:12,fontWeight:700,color:s.length>180?"#059669":"#94A3B8"},children:[s.length," ","chars"]})]})]}),l.jsx("div",{className:"section",children:l.jsxs("div",{className:"submit-row",children:[l.jsx("div",{className:"disclaimer",children:"AI-generated guidance for preliminary community healthcare support only. Not a replacement for medical diagnosis."}),l.jsx("button",{className:"submit-btn",onClick:h,disabled:a||!s.trim(),children:a?"Analysing Symptoms...":"Get AI Recommendation"})]})})]}),a&&l.jsxs("div",{className:"loading",children:[l.jsx("div",{className:"loader"}),l.jsxs("div",{children:[l.jsx("div",{style:{fontWeight:800,marginBottom:4,color:"#0F172A"},children:"AI Analysis Running"}),l.jsx("div",{style:{color:"#64748B",fontSize:14},children:"Evaluating symptoms, outbreak patterns, and clinical risk..."})]})]}),v&&!a&&l.jsxs("div",{className:"result-card",children:[l.jsx("div",{className:"result-head",style:{background:"linear-gradient(135deg,#FFF7ED,#F8FAFC)"},children:l.jsxs("div",{children:[l.jsx("div",{className:"result-title",children:"📦 Saved Offline"}),l.jsx("div",{className:"result-sub",children:"No connection right now — this triage was saved on this device and will be submitted automatically when the server is reachable again."}),l.jsxs("div",{className:"result-tags",children:[l.jsx("div",{className:"tag outbreak",children:"⏳ Pending Sync"}),E&&l.jsxs("div",{className:"tag disease",children:[E.icon," ",v.disease.toUpperCase()]}),v.division!=="Unknown"&&l.jsxs("div",{className:"tag registry",children:["📍 ",v.division]})]})]})}),l.jsxs("div",{className:"result-body",children:[l.jsxs("div",{className:"response",children:[v.symptoms,v.symptoms.length>=80?"…":""]}),v.protocols&&v.protocols.length>0&&l.jsxs("div",{className:"protocol-list",children:[l.jsx("div",{style:{fontSize:13,fontWeight:800,color:"#0F766E",letterSpacing:"0.8px",textTransform:"uppercase"},children:"📖 Offline WHO Protocol Reference"}),l.jsx("div",{style:{fontSize:12,color:"#64748B",marginTop:-6},children:"Matched on this device from WHO/MSF guidelines — exact protocol text, not AI-generated."}),v.protocols.map((S,j)=>l.jsxs("div",{className:"protocol-chunk",children:[l.jsxs("div",{className:"protocol-source",children:[S.source,S.page!=null?` · page ${S.page}`:""]}),l.jsx("div",{className:"protocol-text",children:S.text.length>700?S.text.substring(0,700)+"…":S.text})]},j))]})]})]}),c&&!a&&l.jsxs("div",{className:"result-card",children:[l.jsxs("div",{className:"result-head",children:[l.jsxs("div",{children:[l.jsx("div",{className:"result-title",children:"AI Recommendation Ready"}),l.jsx("div",{className:"result-sub",children:"Clinical triage summary · AI-powered health analysis"}),l.jsxs("div",{className:"result-tags",children:[C&&c.disease_detected!=="general"&&l.jsxs("div",{className:"tag disease",children:[C.icon," ",c.disease_detected.toUpperCase()]}),c.report_type==="outbreak"?l.jsx("div",{className:"tag outbreak",children:"🚨 Outbreak Monitoring"}):l.jsx("div",{className:"tag registry",children:"✅ Registry Case"})]})]}),l.jsx(Ao,{level:c.risk_level||"UNKNOWN"})]}),l.jsxs("div",{className:"result-body",children:[l.jsx("div",{className:"response",children:c.raw_response}),c.report_type==="outbreak"&&c.queue_size!=null&&l.jsxs("div",{className:"queue",children:[l.jsxs("div",{className:"queue-top",children:[l.jsx("div",{className:"queue-label",children:"AI Retraining Queue"}),l.jsxs("div",{className:"queue-count",style:{color:w},children:[c.queue_size," ","/ 5"]})]}),l.jsx("div",{className:"queue-track",children:l.jsx("div",{className:"queue-fill",style:{width:`${m}%`,background:w}})}),l.jsx("div",{className:"queue-msg",style:{color:w},children:5-c.queue_size>0?`${5-c.queue_size} more reports until automatic retraining`:"✓ AI retraining triggered successfully"})]})]})]})]})}/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=e=>{const t=U1(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var fa={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},W1=b.createContext({}),K1=()=>b.useContext(W1),q1=b.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...a},u)=>{const{size:c=24,strokeWidth:d=2,absoluteStrokeWidth:f=!1,color:p="currentColor",className:g=""}=K1()??{},y=r??f?Number(n??d)*24/Number(t??c):n??d;return b.createElement("svg",{ref:u,...fa,width:t??c??fa.width,height:t??c??fa.height,stroke:e??p,strokeWidth:y,className:Hm("lucide",g,i),...!s&&!H1(a)&&{"aria-hidden":"true"},...a},[...o.map(([v,k])=>b.createElement(v,k)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=(e,t)=>{const n=b.forwardRef(({className:r,...i},s)=>b.createElement(q1,{ref:s,iconNode:t,className:Hm(`lucide-${$1(Gd(e))}`,`lucide-${e}`,r),...i}));return n.displayName=Gd(e),n};/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Tn=I("activity",G1);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=[["path",{d:"M10 10H6",key:"1bsnug"}],["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14",key:"lrkjwd"}],["path",{d:"M8 8v4",key:"1fwk8c"}],["path",{d:"M9 18h6",key:"x1upvd"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],Y1=I("ambulance",Q1);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],J1=I("arrow-right",X1);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],Js=I("brain",Z1);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],tw=I("building-2",ew);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=[["path",{d:"M16 14v2.2l1.6 1",key:"fo4ql5"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]],rw=I("calendar-clock",nw);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],sw=I("chevron-down",iw);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aw=I("circle-alert",ow);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Wm=I("circle-check",lw);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],Km=I("circle-x",uw);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],ec=I("clipboard-list",cw);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M9 14h6",key:"159ibu"}],["path",{d:"M12 17v-6",key:"1y8rbf"}]],fw=I("clipboard-plus",dw);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6h4",key:"135r8i"}]],hw=I("clock-3",pw);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=[["path",{d:"M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z",key:"1xbrqy"}]],gw=I("cross",mw);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],yw=I("external-link",xw);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Qd=I("file-text",vw);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=[["path",{d:"M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762",key:"17lmqv"}]],bw=I("heart-handshake",ww);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}],["path",{d:"M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"auskq0"}]],Sw=I("heart-pulse",kw);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=[["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M14 9h-4",key:"1w2s2s"}],["path",{d:"M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2",key:"1tthqt"}],["path",{d:"M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16",key:"dw4p4i"}]],qm=I("hospital",jw);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Jn=I("loader-circle",Cw);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Nw=I("map-pin",Ew);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=[["path",{d:"M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0",key:"11u0oz"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712",key:"q8zwxj"}]],tc=I("map-pinned",Tw);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pw=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Gm=I("phone",Pw);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fw=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Aw=I("send",Fw);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],Qm=I("shield-alert",Mw);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dw=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Zs=I("shield-check",Dw);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rw=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Mo=I("sparkles",Rw);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lw=[["path",{d:"M11 2v2",key:"1539x4"}],["path",{d:"M5 2v2",key:"1yf1q8"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",key:"rb5t3r"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3",key:"x18d4x"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]],Ym=I("stethoscope",Lw);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zw=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Xm=I("trending-up",zw);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Jm=I("triangle-alert",_w);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=[["path",{d:"M2 12q2.5 2 5 0t5 0 5 0 5 0",key:"8ddzzs"}],["path",{d:"M2 19q2.5 2 5 0t5 0 5 0 5 0",key:"1wj4st"}],["path",{d:"M2 5q2.5 2 5 0t5 0 5 0 5 0",key:"69x50u"}]],Vw=I("waves-horizontal",Iw),nc=b.createContext({});function rc(e){const t=b.useRef(null);return t.current===null&&(t.current=e()),t.current}const Bw=typeof window<"u",Zm=Bw?b.useLayoutEffect:b.useEffect,Do=b.createContext(null);function ic(e,t){e.indexOf(t)===-1&&e.push(t)}function eo(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const mt=(e,t,n)=>n>t?t:n<e?e:n;let sc=()=>{};const Yt={},eg=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),tg=e=>typeof e=="object"&&e!==null,ng=e=>/^0[^.\s]+$/u.test(e);function rg(e){let t;return()=>(t===void 0&&(t=e()),t)}const Ke=e=>e,ji=(...e)=>e.reduce((t,n)=>r=>n(t(r))),hi=(e,t,n)=>{const r=t-e;return r?(n-e)/r:1};class oc{constructor(){this.subscriptions=[]}add(t){return ic(this.subscriptions,t),()=>eo(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const _e=e=>e*1e3,He=e=>e/1e3,ig=(e,t)=>t?e*(1e3/t):0,sg=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Ow=1e-7,$w=12;function Uw(e,t,n,r,i){let s,o,a=0;do o=t+(n-t)/2,s=sg(o,r,i)-e,s>0?n=o:t=o;while(Math.abs(s)>Ow&&++a<$w);return o}function Ci(e,t,n,r){if(e===t&&n===r)return Ke;const i=s=>Uw(s,0,1,e,n);return s=>s===0||s===1?s:sg(i(s),t,r)}const og=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,ag=e=>t=>1-e(1-t),lg=Ci(.33,1.53,.69,.99),ac=ag(lg),ug=og(ac),cg=e=>e>=1?1:(e*=2)<1?.5*ac(e):.5*(2-Math.pow(2,-10*(e-1))),lc=e=>1-Math.sin(Math.acos(e)),dg=ag(lc),fg=og(lc),Hw=Ci(.42,0,1,1),Ww=Ci(0,0,.58,1),pg=Ci(.42,0,.58,1),Kw=e=>Array.isArray(e)&&typeof e[0]!="number",hg=e=>Array.isArray(e)&&typeof e[0]=="number",qw={linear:Ke,easeIn:Hw,easeInOut:pg,easeOut:Ww,circIn:lc,circInOut:fg,circOut:dg,backIn:ac,backInOut:ug,backOut:lg,anticipate:cg},Gw=e=>typeof e=="string",Yd=e=>{if(hg(e)){sc(e.length===4);const[t,n,r,i]=e;return Ci(t,n,r,i)}else if(Gw(e))return qw[e];return e},Qi=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function Qw(e,t){let n=new Set,r=new Set,i=!1,s=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function u(d){o.has(d)&&(c.schedule(d),e()),d(a)}const c={schedule:(d,f=!1,p=!1)=>{const y=p&&i?n:r;return f&&o.add(d),y.add(d),d},cancel:d=>{r.delete(d),o.delete(d)},process:d=>{if(a=d,i){s=!0;return}i=!0;const f=n;n=r,r=f,n.forEach(u),n.clear(),i=!1,s&&(s=!1,c.process(d))}};return c}const Yw=40;function mg(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=Qi.reduce((m,w)=>(m[w]=Qw(s),m),{}),{setup:a,read:u,resolveKeyframes:c,preUpdate:d,update:f,preRender:p,render:g,postRender:y}=o,v=()=>{const m=Yt.useManualTiming,w=m?i.timestamp:performance.now();n=!1,m||(i.delta=r?1e3/60:Math.max(Math.min(w-i.timestamp,Yw),1)),i.timestamp=w,i.isProcessing=!0,a.process(i),u.process(i),c.process(i),d.process(i),f.process(i),p.process(i),g.process(i),y.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(v))},k=()=>{n=!0,r=!0,i.isProcessing||e(v)};return{schedule:Qi.reduce((m,w)=>{const C=o[w];return m[w]=(E,S=!1,j=!1)=>(n||k(),C.schedule(E,S,j)),m},{}),cancel:m=>{for(let w=0;w<Qi.length;w++)o[Qi[w]].cancel(m)},state:i,steps:o}}const{schedule:U,cancel:Xt,state:fe,steps:pa}=mg(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ke,!0);let ys;function Xw(){ys=void 0}const be={now:()=>(ys===void 0&&be.set(fe.isProcessing||Yt.useManualTiming?fe.timestamp:performance.now()),ys),set:e=>{ys=e,queueMicrotask(Xw)}},gg=e=>t=>typeof t=="string"&&t.startsWith(e),xg=gg("--"),Jw=gg("var(--"),uc=e=>Jw(e)?Zw.test(e.split("/*")[0].trim()):!1,Zw=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Xd(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const mr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},mi={...mr,transform:e=>mt(0,1,e)},Yi={...mr,default:1},Wr=e=>Math.round(e*1e5)/1e5,cc=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function e2(e){return e==null}const t2=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,dc=(e,t)=>n=>!!(typeof n=="string"&&t2.test(n)&&n.startsWith(e)||t&&!e2(n)&&Object.prototype.hasOwnProperty.call(n,t)),yg=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,s,o,a]=r.match(cc);return{[e]:parseFloat(i),[t]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},n2=e=>mt(0,255,e),ha={...mr,transform:e=>Math.round(n2(e))},hn={test:dc("rgb","red"),parse:yg("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+ha.transform(e)+", "+ha.transform(t)+", "+ha.transform(n)+", "+Wr(mi.transform(r))+")"};function r2(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Tl={test:dc("#"),parse:r2,transform:hn.transform},Ei=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),gt=Ei("deg"),pt=Ei("%"),M=Ei("px"),i2=Ei("vh"),s2=Ei("vw"),Jd={...pt,parse:e=>pt.parse(e)/100,transform:e=>pt.transform(e*100)},Un={test:dc("hsl","hue"),parse:yg("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+pt.transform(Wr(t))+", "+pt.transform(Wr(n))+", "+Wr(mi.transform(r))+")"},re={test:e=>hn.test(e)||Tl.test(e)||Un.test(e),parse:e=>hn.test(e)?hn.parse(e):Un.test(e)?Un.parse(e):Tl.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?hn.transform(e):Un.transform(e),getAnimatableNone:e=>{const t=re.parse(e);return t.alpha=0,re.transform(t)}},o2=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function a2(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(cc))==null?void 0:t.length)||0)+(((n=e.match(o2))==null?void 0:n.length)||0)>0}const vg="number",wg="color",l2="var",u2="var(",Zd="${}",c2=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function lr(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let s=0;const a=t.replace(c2,u=>(re.test(u)?(r.color.push(s),i.push(wg),n.push(re.parse(u))):u.startsWith(u2)?(r.var.push(s),i.push(l2),n.push(u)):(r.number.push(s),i.push(vg),n.push(parseFloat(u))),++s,Zd)).split(Zd);return{values:n,split:a,indexes:r,types:i}}function d2(e){return lr(e).values}function bg({split:e,types:t}){const n=e.length;return r=>{let i="";for(let s=0;s<n;s++)if(i+=e[s],r[s]!==void 0){const o=t[s];o===vg?i+=Wr(r[s]):o===wg?i+=re.transform(r[s]):i+=r[s]}return i}}function f2(e){return bg(lr(e))}const p2=e=>typeof e=="number"?0:re.test(e)?re.getAnimatableNone(e):e,h2=(e,t)=>typeof e=="number"?t!=null&&t.trim().endsWith("/")?e:0:p2(e);function m2(e){const t=lr(e);return bg(t)(t.values.map((r,i)=>h2(r,t.split[i])))}const it={test:a2,parse:d2,createTransformer:f2,getAnimatableNone:m2};function ma(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function g2({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,s=0,o=0;if(!t)i=s=o=n;else{const a=n<.5?n*(1+t):n+t-n*t,u=2*n-a;i=ma(u,a,e+1/3),s=ma(u,a,e),o=ma(u,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:r}}function to(e,t){return n=>n>0?t:e}const $=(e,t,n)=>e+(t-e)*n,ga=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},x2=[Tl,hn,Un],y2=e=>x2.find(t=>t.test(e));function ef(e){const t=y2(e);if(!t)return!1;let n=t.parse(e);return t===Un&&(n=g2(n)),n}const tf=(e,t)=>{const n=ef(e),r=ef(t);if(!n||!r)return to(e,t);const i={...n};return s=>(i.red=ga(n.red,r.red,s),i.green=ga(n.green,r.green,s),i.blue=ga(n.blue,r.blue,s),i.alpha=$(n.alpha,r.alpha,s),hn.transform(i))},Pl=new Set(["none","hidden"]);function v2(e,t){return Pl.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function w2(e,t){return n=>$(e,t,n)}function fc(e){return typeof e=="number"?w2:typeof e=="string"?uc(e)?to:re.test(e)?tf:S2:Array.isArray(e)?kg:typeof e=="object"?re.test(e)?tf:b2:to}function kg(e,t){const n=[...e],r=n.length,i=e.map((s,o)=>fc(s)(s,t[o]));return s=>{for(let o=0;o<r;o++)n[o]=i[o](s);return n}}function b2(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=fc(e[i])(e[i],t[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}}function k2(e,t){const n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const s=t.types[i],o=e.indexes[s][r[s]],a=e.values[o]??0;n[i]=a,r[s]++}return n}const S2=(e,t)=>{const n=it.createTransformer(t),r=lr(e),i=lr(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Pl.has(e)&&!i.values.length||Pl.has(t)&&!r.values.length?v2(e,t):ji(kg(k2(r,i),i.values),n):to(e,t)};function Sg(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?$(e,t,n):fc(e)(e,t)}const j2=e=>{const t=({timestamp:n})=>e(n);return{start:(n=!0)=>U.update(t,n),stop:()=>Xt(t),now:()=>fe.isProcessing?fe.timestamp:be.now()}},jg=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let s=0;s<i;s++)r+=Math.round(e(s/(i-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},no=2e4;function pc(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<no;)t+=n,r=e.next(t);return t>=no?1/0:t}function C2(e,t=100,n){const r=n({...e,keyframes:[0,t]}),i=Math.min(pc(r),no);return{type:"keyframes",ease:s=>r.next(i*s).value/t,duration:He(i)}}const Z={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Fl(e,t){return e*Math.sqrt(1-t*t)}const E2=12;function N2(e,t,n){let r=n;for(let i=1;i<E2;i++)r=r-e(r)/t(r);return r}const xa=.001;function T2({duration:e=Z.duration,bounce:t=Z.bounce,velocity:n=Z.velocity,mass:r=Z.mass}){let i,s,o=1-t;o=mt(Z.minDamping,Z.maxDamping,o),e=mt(Z.minDuration,Z.maxDuration,He(e)),o<1?(i=c=>{const d=c*o,f=d*e,p=d-n,g=Fl(c,o),y=Math.exp(-f);return xa-p/g*y},s=c=>{const f=c*o*e,p=f*n+n,g=Math.pow(o,2)*Math.pow(c,2)*e,y=Math.exp(-f),v=Fl(Math.pow(c,2),o);return(-i(c)+xa>0?-1:1)*((p-g)*y)/v}):(i=c=>{const d=Math.exp(-c*e),f=(c-n)*e+1;return-xa+d*f},s=c=>{const d=Math.exp(-c*e),f=(n-c)*(e*e);return d*f});const a=5/e,u=N2(i,s,a);if(e=_e(e),isNaN(u))return{stiffness:Z.stiffness,damping:Z.damping,duration:e};{const c=Math.pow(u,2)*r;return{stiffness:c,damping:o*2*Math.sqrt(r*c),duration:e}}}const P2=["duration","bounce"],F2=["stiffness","damping","mass"];function nf(e,t){return t.some(n=>e[n]!==void 0)}function A2(e){let t={velocity:Z.velocity,stiffness:Z.stiffness,damping:Z.damping,mass:Z.mass,isResolvedFromDuration:!1,...e};if(!nf(e,F2)&&nf(e,P2))if(t.velocity=0,e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,s=2*mt(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:Z.mass,stiffness:i,damping:s}}else{const n=T2({...e,velocity:0});t={...t,...n,mass:Z.mass},t.isResolvedFromDuration=!0}return t}function ro(e=Z.visualDuration,t=Z.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:u,damping:c,mass:d,duration:f,velocity:p,isResolvedFromDuration:g}=A2({...n,velocity:-He(n.velocity||0)}),y=p||0,v=c/(2*Math.sqrt(u*d)),k=o-s,x=He(Math.sqrt(u/d)),h=Math.abs(k)<5;r||(r=h?Z.restSpeed.granular:Z.restSpeed.default),i||(i=h?Z.restDelta.granular:Z.restDelta.default);let m,w,C,E,S,j;if(v<1)C=Fl(x,v),E=(y+v*x*k)/C,m=N=>{const L=Math.exp(-v*x*N);return o-L*(E*Math.sin(C*N)+k*Math.cos(C*N))},S=v*x*E+k*C,j=v*x*k-E*C,w=N=>Math.exp(-v*x*N)*(S*Math.sin(C*N)+j*Math.cos(C*N));else if(v===1){m=L=>o-Math.exp(-x*L)*(k+(y+x*k)*L);const N=y+x*k;w=L=>Math.exp(-x*L)*(x*N*L-y)}else{const N=x*Math.sqrt(v*v-1);m=De=>{const Qe=Math.exp(-v*x*De),Ee=Math.min(N*De,300);return o-Qe*((y+v*x*k)*Math.sinh(Ee)+N*k*Math.cosh(Ee))/N};const L=(y+v*x*k)/N,V=v*x*L-k*N,G=v*x*k-L*N;w=De=>{const Qe=Math.exp(-v*x*De),Ee=Math.min(N*De,300);return Qe*(V*Math.sinh(Ee)+G*Math.cosh(Ee))}}const P={calculatedDuration:g&&f||null,velocity:N=>_e(w(N)),next:N=>{if(!g&&v<1){const V=Math.exp(-v*x*N),G=Math.sin(C*N),De=Math.cos(C*N),Qe=o-V*(E*G+k*De),Ee=_e(V*(S*G+j*De));return a.done=Math.abs(Ee)<=r&&Math.abs(o-Qe)<=i,a.value=a.done?o:Qe,a}const L=m(N);if(g)a.done=N>=f;else{const V=_e(w(N));a.done=Math.abs(V)<=r&&Math.abs(o-L)<=i}return a.value=a.done?o:L,a},toString:()=>{const N=Math.min(pc(P),no),L=jg(V=>P.next(N*V).value,N,30);return N+"ms "+L},toTransition:()=>{}};return P}ro.applyToOptions=e=>{const t=C2(e,100,ro);return e.ease=t.ease,e.duration=_e(t.duration),e.type="keyframes",e};const M2=5;function Cg(e,t,n){const r=Math.max(t-M2,0);return ig(n-e(r),t-r)}function Al({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:u,restDelta:c=.5,restSpeed:d}){const f=e[0],p={done:!1,value:f},g=j=>a!==void 0&&j<a||u!==void 0&&j>u,y=j=>a===void 0?u:u===void 0||Math.abs(a-j)<Math.abs(u-j)?a:u;let v=n*t;const k=f+v,x=o===void 0?k:o(k);x!==k&&(v=x-f);const h=j=>-v*Math.exp(-j/r),m=j=>x+h(j),w=j=>{const P=h(j),N=m(j);p.done=Math.abs(P)<=c,p.value=p.done?x:N};let C,E;const S=j=>{g(p.value)&&(C=j,E=ro({keyframes:[p.value,y(p.value)],velocity:Cg(m,j,p.value),damping:i,stiffness:s,restDelta:c,restSpeed:d}))};return S(0),{calculatedDuration:null,next:j=>{let P=!1;return!E&&C===void 0&&(P=!0,w(j),S(j)),C!==void 0&&j>=C?E.next(j-C):(!P&&w(j),p)}}}function D2(e,t,n){const r=[],i=n||Yt.mix||Sg,s=e.length-1;for(let o=0;o<s;o++){let a=i(e[o],e[o+1]);if(t){const u=Array.isArray(t)?t[o]||Ke:t;a=ji(u,a)}r.push(a)}return r}function R2(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const s=e.length;if(sc(s===t.length),s===1)return()=>t[0];if(s===2&&t[0]===t[1])return()=>t[1];const o=e[0]===e[1];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=D2(t,r,i),u=a.length,c=d=>{if(o&&d<e[0])return t[0];let f=0;if(u>1)for(;f<e.length-2&&!(d<e[f+1]);f++);const p=hi(e[f],e[f+1],d);return a[f](p)};return n?d=>c(mt(e[0],e[s-1],d)):c}function L2(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=hi(0,t,r);e.push($(n,1,i))}}function z2(e){const t=[0];return L2(t,e.length-1),t}function _2(e,t){return e.map(n=>n*t)}function I2(e,t){return e.map(()=>t||pg).splice(0,e.length-1)}function Kr({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=Kw(r)?r.map(Yd):Yd(r),s={done:!1,value:t[0]},o=_2(n&&n.length===t.length?n:z2(t),e),a=R2(o,t,{ease:Array.isArray(i)?i:I2(t,i)});return{calculatedDuration:e,next:u=>(s.value=a(u),s.done=u>=e,s)}}const V2=e=>e!==null;function Ro(e,{repeat:t,repeatType:n="loop"},r,i=1){const s=e.filter(V2),a=i<0||t&&n!=="loop"&&t%2===1?0:s.length-1;return!a||r===void 0?s[a]:r}const B2={decay:Al,inertia:Al,tween:Kr,keyframes:Kr,spring:ro};function Eg(e){typeof e.type=="string"&&(e.type=B2[e.type])}class hc{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const O2=e=>e/100;class io extends hc{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var r,i;const{motionValue:n}=this.options;n&&n.updatedAt!==be.now()&&this.tick(be.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(i=(r=this.options).onStop)==null||i.call(r))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;Eg(t);const{type:n=Kr,repeat:r=0,repeatDelay:i=0,repeatType:s,velocity:o=0}=t;let{keyframes:a}=t;const u=n||Kr;u!==Kr&&typeof a[0]!="number"&&(this.mixKeyframes=ji(O2,Sg(a[0],a[1])),a=[0,100]);const c=u({...t,keyframes:a});s==="mirror"&&(this.mirroredGenerator=u({...t,keyframes:[...a].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=pc(c));const{calculatedDuration:d}=c;this.calculatedDuration=d,this.resolvedDuration=d+i,this.totalDuration=this.resolvedDuration*(r+1)-i,this.generator=c}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:r,totalDuration:i,mixKeyframes:s,mirroredGenerator:o,resolvedDuration:a,calculatedDuration:u}=this;if(this.startTime===null)return r.next(0);const{delay:c=0,keyframes:d,repeat:f,repeatType:p,repeatDelay:g,type:y,onUpdate:v,finalKeyframe:k}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-i/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const x=this.currentTime-c*(this.playbackSpeed>=0?1:-1),h=this.playbackSpeed>=0?x<0:x>i;this.currentTime=Math.max(x,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let m=this.currentTime,w=r;if(f){const j=Math.min(this.currentTime,i)/a;let P=Math.floor(j),N=j%1;!N&&j>=1&&(N=1),N===1&&P--,P=Math.min(P,f+1),!!(P%2)&&(p==="reverse"?(N=1-N,g&&(N-=g/a)):p==="mirror"&&(w=o)),m=mt(0,1,N)*a}let C;h?(this.delayState.value=d[0],C=this.delayState):C=w.next(m),s&&!h&&(C.value=s(C.value));let{done:E}=C;!h&&u!==null&&(E=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const S=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&E);return S&&y!==Al&&(C.value=Ro(d,this.options,k,this.speed)),v&&v(C.value),S&&this.finish(),C}then(t,n){return this.finished.then(t,n)}get duration(){return He(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+He(t)}get time(){return He(this.currentTime)}set time(t){t=_e(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=t,this.tick(t))}getGeneratorVelocity(){const t=this.currentTime;if(t<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(t);const n=this.generator.next(t).value;return Cg(r=>this.generator.next(r).value,t,n)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;n&&this.driver&&this.updateTime(be.now()),this.playbackSpeed=t,n&&this.driver&&(this.time=He(this.currentTime))}play(){var i,s;if(this.isStopped)return;const{driver:t=j2,startTime:n}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),(s=(i=this.options).onPlay)==null||s.call(i);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=n??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(be.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(t=this.options).onComplete)==null||n.call(t)}cancel(){var t,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(t=this.options).onCancel)==null||n.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),t.observe(this)}}function $2(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const mn=e=>e*180/Math.PI,Ml=e=>{const t=mn(Math.atan2(e[1],e[0]));return Dl(t)},U2={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Ml,rotateZ:Ml,skewX:e=>mn(Math.atan(e[1])),skewY:e=>mn(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Dl=e=>(e=e%360,e<0&&(e+=360),e),rf=Ml,sf=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),of=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),H2={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:sf,scaleY:of,scale:e=>(sf(e)+of(e))/2,rotateX:e=>Dl(mn(Math.atan2(e[6],e[5]))),rotateY:e=>Dl(mn(Math.atan2(-e[2],e[0]))),rotateZ:rf,rotate:rf,skewX:e=>mn(Math.atan(e[4])),skewY:e=>mn(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Rl(e){return e.includes("scale")?1:0}function Ll(e,t){if(!e||e==="none")return Rl(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=H2,i=n;else{const a=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=U2,i=a}if(!i)return Rl(t);const s=r[t],o=i[1].split(",").map(K2);return typeof s=="function"?s(o):o[s]}const W2=(e,t)=>{const{transform:n="none"}=getComputedStyle(e);return Ll(n,t)};function K2(e){return parseFloat(e.trim())}const gr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],xr=new Set([...gr,"pathRotation"]),af=e=>e===mr||e===M,q2=new Set(["x","y","z"]),G2=gr.filter(e=>!q2.has(e));function Q2(e){const t=[];return G2.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const It={width:({x:e},{paddingLeft:t="0",paddingRight:n="0",boxSizing:r})=>{const i=e.max-e.min;return r==="border-box"?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t="0",paddingBottom:n="0",boxSizing:r})=>{const i=e.max-e.min;return r==="border-box"?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Ll(t,"x"),y:(e,{transform:t})=>Ll(t,"y")};It.translateX=It.x;It.translateY=It.y;const yn=new Set;let zl=!1,_l=!1,Il=!1;function Ng(){if(_l){const e=Array.from(yn).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=Q2(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([s,o])=>{var a;(a=r.getValue(s))==null||a.set(o)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}_l=!1,zl=!1,yn.forEach(e=>e.complete(Il)),yn.clear()}function Tg(){yn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(_l=!0)})}function Y2(){Il=!0,Tg(),Ng(),Il=!1}class mc{constructor(t,n,r,i,s,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=s,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(yn.add(this),zl||(zl=!0,U.read(Tg),U.resolveKeyframes(Ng))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;if(t[0]===null){const s=i==null?void 0:i.get(),o=t[t.length-1];if(s!==void 0)t[0]=s;else if(r&&n){const a=r.readValue(n,o);a!=null&&(t[0]=a)}t[0]===void 0&&(t[0]=o),i&&s===void 0&&i.set(t[0])}$2(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),yn.delete(this)}cancel(){this.state==="scheduled"&&(yn.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const X2=e=>e.startsWith("--");function Pg(e,t,n){X2(t)?e.style.setProperty(t,n):e.style[t]=n}const J2={};function Fg(e,t){const n=rg(e);return()=>J2[t]??n()}const Z2=Fg(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Ag=Fg(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Rr=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,lf={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Rr([0,.65,.55,1]),circOut:Rr([.55,0,1,.45]),backIn:Rr([.31,.01,.66,-.59]),backOut:Rr([.33,1.53,.69,.99])};function Mg(e,t){if(e)return typeof e=="function"?Ag()?jg(e,t):"ease-out":hg(e)?Rr(e):Array.isArray(e)?e.map(n=>Mg(n,t)||lf.easeOut):lf[e]}function eb(e,t,n,{delay:r=0,duration:i=300,repeat:s=0,repeatType:o="loop",ease:a="easeOut",times:u}={},c=void 0){const d={[t]:n};u&&(d.offset=u);const f=Mg(a,i);Array.isArray(f)&&(d.easing=f);const p={delay:r,duration:i,easing:Array.isArray(f)?"linear":f,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"};return c&&(p.pseudoElement=c),e.animate(d,p)}function Dg(e){return typeof e=="function"&&"applyToOptions"in e}function tb({type:e,...t}){return Dg(e)&&Ag()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class Rg extends hc{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:n,name:r,keyframes:i,pseudoElement:s,allowFlatten:o=!1,finalKeyframe:a,onComplete:u}=t;this.isPseudoElement=!!s,this.allowFlatten=o,this.options=t,sc(typeof t.type!="string");const c=tb(t);this.animation=eb(n,r,i,c,s),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const d=Ro(i,this.options,a,this.speed);this.updateMotionValue&&this.updateMotionValue(d),Pg(n,r,d),this.animation.cancel()}u==null||u(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,n;(n=(t=this.animation).finish)==null||n.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,r,i;const t=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(t!=null&&t.isConnected)&&((i=(r=this.animation).commitStyles)==null||i.call(r))}get duration(){var n,r;const t=((r=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:r.call(n).duration)||0;return He(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+He(t)}get time(){return He(Number(this.animation.currentTime)||0)}set time(t){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=_e(t),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,rangeStart:n,rangeEnd:r,observe:i}){var s;return this.allowFlatten&&((s=this.animation.effect)==null||s.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&Z2()?(this.animation.timeline=t,n&&(this.animation.rangeStart=n),r&&(this.animation.rangeEnd=r),Ke):i(this)}}const Lg={anticipate:cg,backInOut:ug,circInOut:fg};function nb(e){return e in Lg}function rb(e){typeof e.ease=="string"&&nb(e.ease)&&(e.ease=Lg[e.ease])}const ya=10;class ib extends Rg{constructor(t){rb(t),Eg(t),super(t),t.startTime!==void 0&&t.autoplay!==!1&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:r,onComplete:i,element:s,...o}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const a=new io({...o,autoplay:!1}),u=Math.max(ya,be.now()-this.startTime),c=mt(0,ya,u-ya),d=a.sample(u).value,{name:f}=this.options;s&&f&&Pg(s,f,d),n.setWithVelocity(a.sample(Math.max(0,u-c)).value,d,c),a.stop()}}const uf=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(it.test(e)||e==="0")&&!e.startsWith("url("));function sb(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function ob(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const s=e[e.length-1],o=uf(i,t),a=uf(s,t);return!o||!a?!1:sb(e)||(n==="spring"||Dg(n))&&r}function Vl(e){e.duration=0,e.type="keyframes"}const zg=new Set(["opacity","clipPath","filter","transform"]),ab=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function lb(e){for(let t=0;t<e.length;t++)if(typeof e[t]=="string"&&ab.test(e[t]))return!0;return!1}const ub=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),cb=rg(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function db(e){var f;const{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:s,type:o,keyframes:a}=e;if(!(((f=t==null?void 0:t.owner)==null?void 0:f.current)instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:d}=t.owner.getProps();return cb()&&n&&(zg.has(n)||ub.has(n)&&lb(a))&&(n!=="transform"||!d)&&!c&&!r&&i!=="mirror"&&s!==0&&o!=="inertia"}const fb=40;class pb extends hc{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:o="loop",keyframes:a,name:u,motionValue:c,element:d,...f}){var y;super(),this.stop=()=>{var v,k;this._animation&&(this._animation.stop(),(v=this.stopTimeline)==null||v.call(this)),(k=this.keyframeResolver)==null||k.cancel()},this.createdAt=be.now();const p={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:s,repeatType:o,name:u,motionValue:c,element:d,...f},g=(d==null?void 0:d.KeyframeResolver)||mc;this.keyframeResolver=new g(a,(v,k,x)=>this.onKeyframesResolved(v,k,p,!x),u,c,d),(y=this.keyframeResolver)==null||y.scheduleResolve()}onKeyframesResolved(t,n,r,i){var x,h;this.keyframeResolver=void 0;const{name:s,type:o,velocity:a,delay:u,isHandoff:c,onUpdate:d}=r;this.resolvedAt=be.now();let f=!0;ob(t,s,o,a)||(f=!1,(Yt.instantAnimations||!u)&&(d==null||d(Ro(t,r,n))),t[0]=t[t.length-1],Vl(r),r.repeat=0);const g={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>fb?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...r,keyframes:t},y=f&&!c&&db(g),v=(h=(x=g.motionValue)==null?void 0:x.owner)==null?void 0:h.current;let k;if(y)try{k=new ib({...g,element:v})}catch{k=new io(g)}else k=new io(g);k.finished.then(()=>{this.notifyFinished()}).catch(Ke),this.pendingTimeline&&(this.stopTimeline=k.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=k}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),Y2()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}function _g(e,t,n,r=0,i=1){const s=Array.from(e).sort((c,d)=>c.sortNodePosition(d)).indexOf(t),o=e.size,a=(o-1)*r;return typeof n=="function"?n(s,o):i===1?s*r:a-s*r}const cf=30,hb=e=>!isNaN(parseFloat(e));class mb{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var s;const i=be.now();if(this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((s=this.events.change)==null||s.notify(this.current),this.dependents))for(const o of this.dependents)o.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=be.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=hb(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new oc);const r=this.events[t].add(n);return t==="change"?()=>{r(),U.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=be.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>cf)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,cf);return ig(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,n;(t=this.dependents)==null||t.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ur(e,t){return new mb(e,t)}function Ig(e,t){if(e!=null&&e.inherit&&t){const{inherit:n,...r}=e;return{...t,...r}}return e}function gc(e,t){const n=(e==null?void 0:e[t])??(e==null?void 0:e.default)??e;return n!==e?Ig(n,e):n}const gb={type:"spring",stiffness:500,damping:25,restSpeed:10},xb=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),yb={type:"keyframes",duration:.8},vb={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},wb=(e,{keyframes:t})=>t.length>2?yb:xr.has(e)?e.startsWith("scale")?xb(t[1]):gb:vb,bb=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function kb(e){for(const t in e)if(!bb.has(t))return!0;return!1}const xc=(e,t,n,r={},i,s)=>o=>{const a=gc(r,e)||{},u=a.delay||r.delay||0;let{elapsed:c=0}=r;c=c-_e(u);const d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-c,onUpdate:p=>{t.set(p),a.onUpdate&&a.onUpdate(p)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:s?void 0:i};kb(a)||Object.assign(d,wb(e,d)),d.duration&&(d.duration=_e(d.duration)),d.repeatDelay&&(d.repeatDelay=_e(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let f=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(Vl(d),d.delay===0&&(f=!0)),(Yt.instantAnimations||Yt.skipAnimations||i!=null&&i.shouldSkipAnimations||a.skipAnimations)&&(f=!0,Vl(d),d.delay=0),d.allowFlatten=!a.type&&!a.ease,f&&!s&&t.get()!==void 0){const p=Ro(d.keyframes,a);if(p!==void 0){U.update(()=>{d.onUpdate(p),d.onComplete()});return}}return a.isSync?new io(d):new pb(d)},Sb=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function jb(e){const t=Sb.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function Vg(e,t,n=1){const[r,i]=jb(e);if(!r)return;const s=window.getComputedStyle(t).getPropertyValue(r);if(s){const o=s.trim();return eg(o)?parseFloat(o):o}return uc(i)?Vg(i,t,n+1):i}function df(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function yc(e,t,n,r){if(typeof t=="function"){const[i,s]=df(r);t=t(n!==void 0?n:e.custom,i,s)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,s]=df(r);t=t(n!==void 0?n:e.custom,i,s)}return t}function vn(e,t,n){const r=e.getProps();return yc(r,t,n!==void 0?n:r.custom,e)}const Bg=new Set(["width","height","top","left","right","bottom",...gr]),Bl=e=>Array.isArray(e);function Cb(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,ur(n))}function Eb(e){return Bl(e)?e[e.length-1]||0:e}function Nb(e,t){const n=vn(e,t);let{transitionEnd:r={},transition:i={},...s}=n||{};s={...s,...r};for(const o in s){const a=Eb(s[o]);Cb(e,o,a)}}const pe=e=>!!(e&&e.getVelocity);function Tb(e){return!!(pe(e)&&e.add)}function Ol(e,t){const n=e.getValue("willChange");if(Tb(n))return n.add(t);if(!n&&Yt.WillChange){const r=new Yt.WillChange("auto");e.addValue("willChange",r),r.add(t)}}function vc(e){return e.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const Pb="framerAppearId",Og="data-"+vc(Pb);function $g(e){return e.props[Og]}function Fb({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Ug(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:s,transitionEnd:o,...a}=t;const u=e.getDefaultTransition();s=s?Ig(s,u):u;const c=s==null?void 0:s.reduceMotion,d=s==null?void 0:s.skipAnimations;r&&(s=r);const f=[],p=i&&e.animationState&&e.animationState.getState()[i],g=s==null?void 0:s.path;g&&g.animateVisualElement(e,a,s,n,f);for(const y in a){const v=e.getValue(y,e.latestValues[y]??null),k=a[y];if(k===void 0||p&&Fb(p,y))continue;const x={delay:n,...gc(s||{},y)};d&&(x.skipAnimations=!0);const h=v.get();if(h!==void 0&&!v.isAnimating()&&!Array.isArray(k)&&k===h&&!x.velocity){U.update(()=>v.set(k));continue}let m=!1;if(window.MotionHandoffAnimation){const E=$g(e);if(E){const S=window.MotionHandoffAnimation(E,y,U);S!==null&&(x.startTime=S,m=!0)}}Ol(e,y);const w=c??e.shouldReduceMotion;v.start(xc(y,v,k,w&&Bg.has(y)?{type:!1}:x,e,m));const C=v.animation;C&&f.push(C)}if(o){const y=()=>U.update(()=>{o&&Nb(e,o)});f.length?Promise.all(f).then(y):y()}return f}function $l(e,t,n={}){var u;const r=vn(e,t,n.type==="exit"?(u=e.presenceContext)==null?void 0:u.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const s=r?()=>Promise.all(Ug(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(c=0)=>{const{delayChildren:d=0,staggerChildren:f,staggerDirection:p}=i;return Ab(e,t,c,d,f,p,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[c,d]=a==="beforeChildren"?[s,o]:[o,s];return c().then(()=>d())}else return Promise.all([s(),o(n.delay)])}function Ab(e,t,n=0,r=0,i=0,s=1,o){const a=[];for(const u of e.variantChildren)u.notify("AnimationStart",t),a.push($l(u,t,{...o,delay:n+(typeof r=="function"?0:r)+_g(e.variantChildren,u,r,i,s)}).then(()=>u.notify("AnimationComplete",t)));return Promise.all(a)}function Mb(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(s=>$l(e,s,n));r=Promise.all(i)}else if(typeof t=="string")r=$l(e,t,n);else{const i=typeof t=="function"?vn(e,t,n.custom):t;r=Promise.all(Ug(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const Db={test:e=>e==="auto",parse:e=>e},Hg=e=>t=>t.test(e),Wg=[mr,M,pt,gt,s2,i2,Db],ff=e=>Wg.find(Hg(e));function Rb(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||ng(e):!0}const Lb=new Set(["brightness","contrast","saturate","opacity"]);function zb(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(cc)||[];if(!r)return e;const i=n.replace(r,"");let s=Lb.has(t)?1:0;return r!==n&&(s*=100),t+"("+s+i+")"}const _b=/\b([a-z-]*)\(.*?\)/gu,Ul={...it,getAnimatableNone:e=>{const t=e.match(_b);return t?t.map(zb).join(" "):e}},Hl={...it,getAnimatableNone:e=>{const t=it.parse(e);return it.createTransformer(e)(t.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},pf={...mr,transform:Math.round},Ib={rotate:gt,pathRotation:gt,rotateX:gt,rotateY:gt,rotateZ:gt,scale:Yi,scaleX:Yi,scaleY:Yi,scaleZ:Yi,skew:gt,skewX:gt,skewY:gt,distance:M,translateX:M,translateY:M,translateZ:M,x:M,y:M,z:M,perspective:M,transformPerspective:M,opacity:mi,originX:Jd,originY:Jd,originZ:M},so={borderWidth:M,borderTopWidth:M,borderRightWidth:M,borderBottomWidth:M,borderLeftWidth:M,borderRadius:M,borderTopLeftRadius:M,borderTopRightRadius:M,borderBottomRightRadius:M,borderBottomLeftRadius:M,width:M,maxWidth:M,height:M,maxHeight:M,top:M,right:M,bottom:M,left:M,inset:M,insetBlock:M,insetBlockStart:M,insetBlockEnd:M,insetInline:M,insetInlineStart:M,insetInlineEnd:M,padding:M,paddingTop:M,paddingRight:M,paddingBottom:M,paddingLeft:M,paddingBlock:M,paddingBlockStart:M,paddingBlockEnd:M,paddingInline:M,paddingInlineStart:M,paddingInlineEnd:M,margin:M,marginTop:M,marginRight:M,marginBottom:M,marginLeft:M,marginBlock:M,marginBlockStart:M,marginBlockEnd:M,marginInline:M,marginInlineStart:M,marginInlineEnd:M,fontSize:M,backgroundPositionX:M,backgroundPositionY:M,...Ib,zIndex:pf,fillOpacity:mi,strokeOpacity:mi,numOctaves:pf},Vb={...so,color:re,backgroundColor:re,outlineColor:re,fill:re,stroke:re,borderColor:re,borderTopColor:re,borderRightColor:re,borderBottomColor:re,borderLeftColor:re,filter:Ul,WebkitFilter:Ul,mask:Hl,WebkitMask:Hl},Kg=e=>Vb[e],Bb=new Set([Ul,Hl]);function qg(e,t){let n=Kg(e);return Bb.has(n)||(n=it),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Ob=new Set(["auto","none","0"]);function $b(e,t,n){let r=0,i;for(;r<e.length&&!i;){const s=e[r];typeof s=="string"&&!Ob.has(s)&&lr(s).values.length&&(i=e[r]),r++}if(i&&n)for(const s of t)e[s]=qg(n,i)}class Ub extends mc{constructor(t,n,r,i,s){super(t,n,r,i,s,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let d=0;d<t.length;d++){let f=t[d];if(typeof f=="string"&&(f=f.trim(),uc(f))){const p=Vg(f,n.current);p!==void 0&&(t[d]=p),d===t.length-1&&(this.finalKeyframe=f)}}if(this.resolveNoneKeyframes(),!Bg.has(r)||t.length!==2)return;const[i,s]=t,o=ff(i),a=ff(s),u=Xd(i),c=Xd(s);if(u!==c&&It[r]){this.needsMeasurement=!0;return}if(o!==a)if(af(o)&&af(a))for(let d=0;d<t.length;d++){const f=t[d];typeof f=="string"&&(t[d]=parseFloat(f))}else It[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)(t[i]===null||Rb(t[i]))&&r.push(i);r.length&&$b(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=It[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var a;const{element:t,name:n,unresolvedKeyframes:r}=this;if(!t||!t.current)return;const i=t.getValue(n);i&&i.jump(this.measuredOrigin,!1);const s=r.length-1,o=r[s];r[s]=It[n](t.measureViewportBox(),window.getComputedStyle(t.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([u,c])=>{t.getValue(u).set(c)}),this.resolveNoneKeyframes()}}function Gg(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e=="string"){let r=document;const i=(n==null?void 0:n[e])??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(r=>r!=null)}const Wl=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function vs(e){return tg(e)&&"offsetHeight"in e&&!("ownerSVGElement"in e)}const{schedule:wc}=mg(queueMicrotask,!1),Je={x:!1,y:!1};function Qg(){return Je.x||Je.y}function Hb(e){return e==="x"||e==="y"?Je[e]?null:(Je[e]=!0,()=>{Je[e]=!1}):Je.x||Je.y?null:(Je.x=Je.y=!0,()=>{Je.x=Je.y=!1})}function Yg(e,t){const n=Gg(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function Wb(e){return!(e.pointerType==="touch"||Qg())}function Kb(e,t,n={}){const[r,i,s]=Yg(e,n);return r.forEach(o=>{let a=!1,u=!1,c;const d=()=>{o.removeEventListener("pointerleave",y)},f=k=>{c&&(c(k),c=void 0),d()},p=k=>{a=!1,window.removeEventListener("pointerup",p),window.removeEventListener("pointercancel",p),u&&(u=!1,f(k))},g=()=>{a=!0,window.addEventListener("pointerup",p,i),window.addEventListener("pointercancel",p,i)},y=k=>{if(k.pointerType!=="touch"){if(a){u=!0;return}f(k)}},v=k=>{if(!Wb(k))return;u=!1;const x=t(o,k);typeof x=="function"&&(c=x,o.addEventListener("pointerleave",y,i))};o.addEventListener("pointerenter",v,i),o.addEventListener("pointerdown",g,i)}),s}const Xg=(e,t)=>t?e===t?!0:Xg(e,t.parentElement):!1,bc=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,qb=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Gb(e){return qb.has(e.tagName)||e.isContentEditable===!0}const Qb=new Set(["INPUT","SELECT","TEXTAREA"]);function Yb(e){return Qb.has(e.tagName)||e.isContentEditable===!0}const ws=new WeakSet;function hf(e){return t=>{t.key==="Enter"&&e(t)}}function va(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const Xb=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=hf(()=>{if(ws.has(n))return;va(n,"down");const i=hf(()=>{va(n,"up")}),s=()=>va(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",s,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function mf(e){return bc(e)&&!Qg()}const gf=new WeakSet;function Jb(e,t,n={}){const[r,i,s]=Yg(e,n),o=a=>{const u=a.currentTarget;if(!mf(a)||gf.has(a))return;ws.add(u),n.stopPropagation&&gf.add(a);const c=t(u,a),d=(g,y)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",p),ws.has(u)&&ws.delete(u),mf(g)&&typeof c=="function"&&c(g,{success:y})},f=g=>{d(g,u===window||u===document||n.useGlobalTarget||Xg(u,g.target))},p=g=>{d(g,!1)};window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",p,i)};return r.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,i),vs(a)&&(a.addEventListener("focus",c=>Xb(c,i)),!Gb(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),s}function kc(e){return tg(e)&&"ownerSVGElement"in e}const bs=new WeakMap;let Ft;const Jg=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+"Size"]:kc(r)&&"getBBox"in r?r.getBBox()[t]:r[n],Zb=Jg("inline","width","offsetWidth"),ek=Jg("block","height","offsetHeight");function tk({target:e,borderBoxSize:t}){var n;(n=bs.get(e))==null||n.forEach(r=>{r(e,{get width(){return Zb(e,t)},get height(){return ek(e,t)}})})}function nk(e){e.forEach(tk)}function rk(){typeof ResizeObserver>"u"||(Ft=new ResizeObserver(nk))}function ik(e,t){Ft||rk();const n=Gg(e);return n.forEach(r=>{let i=bs.get(r);i||(i=new Set,bs.set(r,i)),i.add(t),Ft==null||Ft.observe(r)}),()=>{n.forEach(r=>{const i=bs.get(r);i==null||i.delete(t),i!=null&&i.size||Ft==null||Ft.unobserve(r)})}}const ks=new Set;let Hn;function sk(){Hn=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};ks.forEach(t=>t(e))},window.addEventListener("resize",Hn)}function ok(e){return ks.add(e),Hn||sk(),()=>{ks.delete(e),!ks.size&&typeof Hn=="function"&&(window.removeEventListener("resize",Hn),Hn=void 0)}}function xf(e,t){return typeof e=="function"?ok(e):ik(e,t)}function ak(e){return kc(e)&&e.tagName==="svg"}const lk=[...Wg,re,it],uk=e=>lk.find(Hg(e)),yf=()=>({translate:0,scale:1,origin:0,originPoint:0}),Wn=()=>({x:yf(),y:yf()}),vf=()=>({min:0,max:0}),oe=()=>({x:vf(),y:vf()}),ck=new WeakMap;function Lo(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function gi(e){return typeof e=="string"||Array.isArray(e)}const Sc=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],jc=["initial",...Sc];function zo(e){return Lo(e.animate)||jc.some(t=>gi(e[t]))}function Zg(e){return!!(zo(e)||e.variants)}function dk(e,t,n){for(const r in t){const i=t[r],s=n[r];if(pe(i))e.addValue(r,i);else if(pe(s))e.addValue(r,ur(i,{owner:e}));else if(s!==i)if(e.hasValue(r)){const o=e.getValue(r);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=e.getStaticValue(r);e.addValue(r,ur(o!==void 0?o:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Kl={current:null},e0={current:!1},fk=typeof window<"u";function pk(){if(e0.current=!0,!!fk)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Kl.current=e.matches;e.addEventListener("change",t),t()}else Kl.current=!1}const wf=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let oo={};function t0(e){oo=e}function hk(){return oo}class mk{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,skipAnimations:s,blockInitialAnimation:o,visualState:a},u={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=mc,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const g=be.now();this.renderScheduledAt<g&&(this.renderScheduledAt=g,U.render(this.render,!1,!0))};const{latestValues:c,renderState:d}=a;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=d,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.skipAnimationsConfig=s,this.options=u,this.blockInitialAnimation=!!o,this.isControllingVariants=zo(n),this.isVariantNode=Zg(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:f,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const g in p){const y=p[g];c[g]!==void 0&&pe(y)&&y.set(c[g])}}mount(t){var n,r;if(this.hasBeenMounted)for(const i in this.initialValues)(n=this.values.get(i))==null||n.jump(this.initialValues[i]),this.latestValues[i]=this.initialValues[i];this.current=t,ck.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,s)=>this.bindToMotionValue(s,i)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(e0.current||pk(),this.shouldReduceMotion=Kl.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var t;this.projection&&this.projection.unmount(),Xt(this.notifyUpdate),Xt(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const r=this.features[n];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){if(this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)(),n.accelerate&&zg.has(t)&&this.current instanceof HTMLElement){const{factory:o,keyframes:a,times:u,ease:c,duration:d}=n.accelerate,f=new Rg({element:this.current,name:t,keyframes:a,times:u,ease:c,duration:_e(d)}),p=o(f);this.valueSubscriptions.set(t,()=>{p(),f.cancel()});return}const r=xr.has(t);r&&this.onBindTransform&&this.onBindTransform();const i=n.on("change",o=>{this.latestValues[t]=o,this.props.onUpdate&&U.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let s;typeof window<"u"&&window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),s&&s()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in oo){const n=oo[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const s=this.features[t];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):oe()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<wf.length;r++){const i=wf[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s="on"+i,o=t[s];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=dk(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=ur(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){let r=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return r!=null&&(typeof r=="string"&&(eg(r)||ng(r))?r=parseFloat(r):!uk(r)&&it.test(n)&&(r=qg(t,n)),this.setBaseTarget(t,pe(r)?r.get():r)),pe(r)?r.get():r}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var s;const{initial:n}=this.props;let r;if(typeof n=="string"||typeof n=="object"){const o=yc(this.props,n,(s=this.presenceContext)==null?void 0:s.custom);o&&(r=o[t])}if(n&&r!==void 0)return r;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!pe(i)?i:this.initialValues[t]!==void 0&&r===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new oc),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){wc.render(this.render)}}class n0 extends mk{constructor(){super(...arguments),this.KeyframeResolver=Ub}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){const r=t.style;return r?r[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;pe(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class nn{constructor(t){this.isMounted=!1,this.node=t}update(){}}function r0({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function gk({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function xk(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function wa(e){return e===void 0||e===1}function ql({scale:e,scaleX:t,scaleY:n}){return!wa(e)||!wa(t)||!wa(n)}function cn(e){return ql(e)||i0(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function i0(e){return bf(e.x)||bf(e.y)}function bf(e){return e&&e!=="0%"}function ao(e,t,n){const r=e-n,i=t*r;return n+i}function kf(e,t,n,r,i){return i!==void 0&&(e=ao(e,i,r)),ao(e,n,r)+t}function Gl(e,t=0,n=1,r,i){e.min=kf(e.min,t,n,r,i),e.max=kf(e.max,t,n,r,i)}function s0(e,{x:t,y:n}){Gl(e.x,t.translate,t.scale,t.originPoint),Gl(e.y,n.translate,n.scale,n.originPoint)}const Sf=.999999999999,jf=1.0000000000001;function yk(e,t,n,r=!1){var a;const i=n.length;if(!i)return;t.x=t.y=1;let s,o;for(let u=0;u<i;u++){s=n[u],o=s.projectionDelta;const{visualElement:c}=s.options;c&&c.props.style&&c.props.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&(ut(e.x,-s.scroll.offset.x),ut(e.y,-s.scroll.offset.y)),o&&(t.x*=o.x.scale,t.y*=o.y.scale,s0(e,o)),r&&cn(s.latestValues)&&Ss(e,s.latestValues,(a=s.layout)==null?void 0:a.layoutBox))}t.x<jf&&t.x>Sf&&(t.x=1),t.y<jf&&t.y>Sf&&(t.y=1)}function ut(e,t){e.min+=t,e.max+=t}function Cf(e,t,n,r,i=.5){const s=$(e.min,e.max,i);Gl(e,t,n,s,r)}function Ef(e,t){return typeof e=="string"?parseFloat(e)/100*(t.max-t.min):e}function Ss(e,t,n){const r=n??e;Cf(e.x,Ef(t.x,r.x),t.scaleX,t.scale,t.originX),Cf(e.y,Ef(t.y,r.y),t.scaleY,t.scale,t.originY)}function o0(e,t){return r0(xk(e.getBoundingClientRect(),t))}function vk(e,t,n){const r=o0(e,n),{scroll:i}=t;return i&&(ut(r.x,i.offset.x),ut(r.y,i.offset.y)),r}const wk={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},bk=gr.length;function kk(e,t,n){let r="",i=!0;for(let o=0;o<bk;o++){const a=gr[o],u=e[a];if(u===void 0)continue;let c=!0;if(typeof u=="number")c=u===(a.startsWith("scale")?1:0);else{const d=parseFloat(u);c=a.startsWith("scale")?d===1:d===0}if(!c||n){const d=Wl(u,so[a]);if(!c){i=!1;const f=wk[a]||a;r+=`${f}(${d}) `}n&&(t[a]=d)}}const s=e.pathRotation;return s&&(i=!1,r+=`rotate(${Wl(s,so.pathRotation)}) `),r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function Cc(e,t,n){const{style:r,vars:i,transformOrigin:s}=e;let o=!1,a=!1;for(const u in t){const c=t[u];if(xr.has(u)){o=!0;continue}else if(xg(u)){i[u]=c;continue}else{const d=Wl(c,so[u]);u.startsWith("origin")?(a=!0,s[u]=d):r[u]=d}}if(t.transform||(o||n?r.transform=kk(t,e.transform,n):r.transform&&(r.transform="none")),a){const{originX:u="50%",originY:c="50%",originZ:d=0}=s;r.transformOrigin=`${u} ${c} ${d}`}}function a0(e,{style:t,vars:n},r,i){const s=e.style;let o;for(o in t)s[o]=t[o];i==null||i.applyProjectionStyles(s,r);for(o in n)s.setProperty(o,n[o])}function Nf(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Tr={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(M.test(e))e=parseFloat(e);else return e;const n=Nf(e,t.target.x),r=Nf(e,t.target.y);return`${n}% ${r}%`}},Sk={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=it.parse(e);if(i.length>5)return r;const s=it.createTransformer(e),o=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,u=n.y.scale*t.y;i[0+o]/=a,i[1+o]/=u;const c=$(a,u,.5);return typeof i[2+o]=="number"&&(i[2+o]/=c),typeof i[3+o]=="number"&&(i[3+o]/=c),s(i)}},Ql={borderRadius:{...Tr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Tr,borderTopRightRadius:Tr,borderBottomLeftRadius:Tr,borderBottomRightRadius:Tr,boxShadow:Sk};function l0(e,{layout:t,layoutId:n}){return xr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Ql[e]||e==="opacity")}function Ec(e,t,n){var o;const r=e.style,i=t==null?void 0:t.style,s={};if(!r)return s;for(const a in r)(pe(r[a])||i&&pe(i[a])||l0(a,e)||((o=n==null?void 0:n.getValue(a))==null?void 0:o.liveStyle)!==void 0)&&(s[a]=r[a]);return s}function jk(e){return window.getComputedStyle(e)}class Ck extends n0{constructor(){super(...arguments),this.type="html",this.renderInstance=a0}readValueFromInstance(t,n){var r;if(xr.has(n))return(r=this.projection)!=null&&r.isProjecting?Rl(n):W2(t,n);{const i=jk(t),s=(xg(n)?i.getPropertyValue(n):i[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(t,{transformPagePoint:n}){return o0(t,n)}build(t,n,r){Cc(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Ec(t,n,r)}}const Ek={offset:"stroke-dashoffset",array:"stroke-dasharray"},Nk={offset:"strokeDashoffset",array:"strokeDasharray"};function Tk(e,t,n=1,r=0,i=!0){e.pathLength=1;const s=i?Ek:Nk;e[s.offset]=`${-r}`,e[s.array]=`${t} ${n}`}const Pk=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function u0(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:s=1,pathOffset:o=0,...a},u,c,d){if(Cc(e,a,c),u){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:f,style:p}=e;f.transform&&(p.transform=f.transform,delete f.transform),(p.transform||f.transformOrigin)&&(p.transformOrigin=f.transformOrigin??"50% 50%",delete f.transformOrigin),p.transform&&(p.transformBox=(d==null?void 0:d.transformBox)??"fill-box",delete f.transformBox);for(const g of Pk)f[g]!==void 0&&(p[g]=f[g],delete f[g]);t!==void 0&&(f.x=t),n!==void 0&&(f.y=n),r!==void 0&&(f.scale=r),i!==void 0&&Tk(f,i,s,o,!1)}const c0=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),d0=e=>typeof e=="string"&&e.toLowerCase()==="svg";function Fk(e,t,n,r){a0(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(c0.has(i)?i:vc(i),t.attrs[i])}function f0(e,t,n){const r=Ec(e,t,n);for(const i in e)if(pe(e[i])||pe(t[i])){const s=gr.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[s]=e[i]}return r}class Ak extends n0{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=oe}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(xr.has(n)){const r=Kg(n);return r&&r.default||0}return n=c0.has(n)?n:vc(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return f0(t,n,r)}build(t,n,r){u0(t,n,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(t,n,r,i){Fk(t,n,r,i)}mount(t){this.isSVGTag=d0(t.tagName),super.mount(t)}}const Mk=jc.length;function p0(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?p0(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<Mk;n++){const r=jc[n],i=e.props[r];(gi(i)||i===!1)&&(t[r]=i)}return t}function h0(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const Dk=[...Sc].reverse(),Rk=Sc.length;function Lk(e){return t=>Promise.all(t.map(({animation:n,options:r})=>Mb(e,n,r)))}function zk(e){let t=Lk(e),n=Tf(),r=!0,i=!1;const s=c=>(d,f)=>{var g;const p=vn(e,f,c==="exit"?(g=e.presenceContext)==null?void 0:g.custom:void 0);if(p){const{transition:y,transitionEnd:v,...k}=p;d={...d,...k,...v}}return d};function o(c){t=c(e)}function a(c){const{props:d}=e,f=p0(e.parent)||{},p=[],g=new Set;let y={},v=1/0;for(let x=0;x<Rk;x++){const h=Dk[x],m=n[h],w=d[h]!==void 0?d[h]:f[h],C=gi(w),E=h===c?m.isActive:null;E===!1&&(v=x);let S=w===f[h]&&w!==d[h]&&C;if(S&&(r||i)&&e.manuallyAnimateOnMount&&(S=!1),m.protectedKeys={...y},!m.isActive&&E===null||!w&&!m.prevProp||Lo(w)||typeof w=="boolean")continue;if(h==="exit"&&m.isActive&&E!==!0){m.prevResolvedValues&&(y={...y,...m.prevResolvedValues});continue}const j=_k(m.prevProp,w);let P=j||h===c&&m.isActive&&!S&&C||x>v&&C,N=!1;const L=Array.isArray(w)?w:[w];let V=L.reduce(s(h),{});E===!1&&(V={});const{prevResolvedValues:G={}}=m,De={...G,...V},Qe=F=>{P=!0,g.has(F)&&(N=!0,g.delete(F)),m.needsAnimating[F]=!0;const D=e.getValue(F);D&&(D.liveStyle=!1)};for(const F in De){const D=V[F],R=G[F];if(y.hasOwnProperty(F))continue;let O=!1;Bl(D)&&Bl(R)?O=!h0(D,R)||j:O=D!==R,O?D!=null?Qe(F):g.add(F):D!==void 0&&g.has(F)?Qe(F):m.protectedKeys[F]=!0}m.prevProp=w,m.prevResolvedValues=V,m.isActive&&(y={...y,...V}),(r||i)&&e.blockInitialAnimation&&(P=!1);const Ee=S&&j;P&&(!Ee||N)&&p.push(...L.map(F=>{const D={type:h};if(typeof F=="string"&&(r||i)&&!Ee&&e.manuallyAnimateOnMount&&e.parent){const{parent:R}=e,O=vn(R,F);if(R.enteringChildren&&O){const{delayChildren:ne}=O.transition||{};D.delay=_g(R.enteringChildren,e,ne)}}return{animation:F,options:D}}))}if(g.size){const x={};if(typeof d.initial!="boolean"){const h=vn(e,Array.isArray(d.initial)?d.initial[0]:d.initial);h&&h.transition&&(x.transition=h.transition)}g.forEach(h=>{const m=e.getBaseTarget(h),w=e.getValue(h);w&&(w.liveStyle=!0),x[h]=m??null}),p.push({animation:x})}let k=!!p.length;return r&&(d.initial===!1||d.initial===d.animate)&&!e.manuallyAnimateOnMount&&(k=!1),r=!1,i=!1,k?t(p):Promise.resolve()}function u(c,d){var p;if(n[c].isActive===d)return Promise.resolve();(p=e.variantChildren)==null||p.forEach(g=>{var y;return(y=g.animationState)==null?void 0:y.setActive(c,d)}),n[c].isActive=d;const f=a(c);for(const g in n)n[g].protectedKeys={};return f}return{animateChanges:a,setActive:u,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Tf(),i=!0}}}function _k(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!h0(t,e):!1}function on(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Tf(){return{animate:on(!0),whileInView:on(),whileHover:on(),whileTap:on(),whileDrag:on(),whileFocus:on(),exit:on()}}function Yl(e,t){e.min=t.min,e.max=t.max}function Xe(e,t){Yl(e.x,t.x),Yl(e.y,t.y)}function Pf(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}const m0=1e-4,Ik=1-m0,Vk=1+m0,g0=.01,Bk=0-g0,Ok=0+g0;function ke(e){return e.max-e.min}function $k(e,t,n){return Math.abs(e-t)<=n}function Ff(e,t,n,r=.5){e.origin=r,e.originPoint=$(t.min,t.max,e.origin),e.scale=ke(n)/ke(t),e.translate=$(n.min,n.max,e.origin)-e.originPoint,(e.scale>=Ik&&e.scale<=Vk||isNaN(e.scale))&&(e.scale=1),(e.translate>=Bk&&e.translate<=Ok||isNaN(e.translate))&&(e.translate=0)}function qr(e,t,n,r){Ff(e.x,t.x,n.x,r?r.originX:void 0),Ff(e.y,t.y,n.y,r?r.originY:void 0)}function Af(e,t,n,r=0){const i=r?$(n.min,n.max,r):n.min;e.min=i+t.min,e.max=e.min+ke(t)}function Uk(e,t,n,r){Af(e.x,t.x,n.x,r==null?void 0:r.x),Af(e.y,t.y,n.y,r==null?void 0:r.y)}function Mf(e,t,n,r=0){const i=r?$(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+ke(t)}function lo(e,t,n,r){Mf(e.x,t.x,n.x,r==null?void 0:r.x),Mf(e.y,t.y,n.y,r==null?void 0:r.y)}function Df(e,t,n,r,i){return e-=t,e=ao(e,1/n,r),i!==void 0&&(e=ao(e,1/i,r)),e}function Hk(e,t=0,n=1,r=.5,i,s=e,o=e){if(pt.test(t)&&(t=parseFloat(t),t=$(o.min,o.max,t/100)-o.min),typeof t!="number")return;let a=$(s.min,s.max,r);e===s&&(a-=t),e.min=Df(e.min,t,n,a,i),e.max=Df(e.max,t,n,a,i)}function Rf(e,t,[n,r,i],s,o){Hk(e,t[n],t[r],t[i],t.scale,s,o)}const Wk=["x","scaleX","originX"],Kk=["y","scaleY","originY"];function Lf(e,t,n,r){Rf(e.x,t,Wk,n?n.x:void 0,r?r.x:void 0),Rf(e.y,t,Kk,n?n.y:void 0,r?r.y:void 0)}function zf(e){return e.translate===0&&e.scale===1}function x0(e){return zf(e.x)&&zf(e.y)}function _f(e,t){return e.min===t.min&&e.max===t.max}function qk(e,t){return _f(e.x,t.x)&&_f(e.y,t.y)}function If(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function y0(e,t){return If(e.x,t.x)&&If(e.y,t.y)}function Vf(e){return ke(e.x)/ke(e.y)}function Bf(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function lt(e){return[e("x"),e("y")]}function Gk(e,t,n){let r="";const i=e.x.translate/t.x,s=e.y.translate/t.y,o=(n==null?void 0:n.z)||0;if((i||s||o)&&(r=`translate3d(${i}px, ${s}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:c,rotate:d,pathRotation:f,rotateX:p,rotateY:g,skewX:y,skewY:v}=n;c&&(r=`perspective(${c}px) ${r}`),d&&(r+=`rotate(${d}deg) `),f&&(r+=`rotate(${f}deg) `),p&&(r+=`rotateX(${p}deg) `),g&&(r+=`rotateY(${g}deg) `),y&&(r+=`skewX(${y}deg) `),v&&(r+=`skewY(${v}deg) `)}const a=e.x.scale*t.x,u=e.y.scale*t.y;return(a!==1||u!==1)&&(r+=`scale(${a}, ${u})`),r||"none"}const v0=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],Qk=v0.length,Of=e=>typeof e=="string"?parseFloat(e):e,$f=e=>typeof e=="number"||M.test(e);function Yk(e,t,n,r,i,s){i?(e.opacity=$(0,n.opacity??1,Xk(r)),e.opacityExit=$(t.opacity??1,0,Jk(r))):s&&(e.opacity=$(t.opacity??1,n.opacity??1,r));for(let o=0;o<Qk;o++){const a=v0[o];let u=Uf(t,a),c=Uf(n,a);if(u===void 0&&c===void 0)continue;u||(u=0),c||(c=0),u===0||c===0||$f(u)===$f(c)?(e[a]=Math.max($(Of(u),Of(c),r),0),(pt.test(c)||pt.test(u))&&(e[a]+="%")):e[a]=c}(t.rotate||n.rotate)&&(e.rotate=$(t.rotate||0,n.rotate||0,r))}function Uf(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const Xk=w0(0,.5,dg),Jk=w0(.5,.95,Ke);function w0(e,t,n){return r=>r<e?0:r>t?1:n(hi(e,t,r))}function Zk(e,t,n){const r=pe(e)?e:ur(e);return r.start(xc("",r,t,n)),r.animation}function xi(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const eS=(e,t)=>e.depth-t.depth;class tS{constructor(){this.children=[],this.isDirty=!1}add(t){ic(this.children,t),this.isDirty=!0}remove(t){eo(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(eS),this.isDirty=!1,this.children.forEach(t)}}function nS(e,t){const n=be.now(),r=({timestamp:i})=>{const s=i-n;s>=t&&(Xt(r),e(s-t))};return U.setup(r,!0),()=>Xt(r)}function js(e){return pe(e)?e.get():e}class rS{constructor(){this.members=[]}add(t){ic(this.members,t);for(let n=this.members.length-1;n>=0;n--){const r=this.members[n];if(r===t||r===this.lead||r===this.prevLead)continue;const i=r.instance;(!i||i.isConnected===!1)&&!r.snapshot&&(eo(this.members,r),r.unmount())}t.scheduleRender()}remove(t){if(eo(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){var n;for(let r=this.members.indexOf(t)-1;r>=0;r--){const i=this.members[r];if(i.isPresent!==!1&&((n=i.instance)==null?void 0:n.isConnected)!==!1)return this.promote(i),!0}return!1}promote(t,n){var i;const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.updateSnapshot(),t.scheduleRender();const{layoutDependency:s}=r.options,{layoutDependency:o}=t.options;(s===void 0||s!==o)&&(t.resumeFrom=r,n&&(r.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),(i=t.root)!=null&&i.isUpdating&&(t.isLayoutDirty=!0)),t.options.crossfade===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{var n,r,i,s,o;(r=(n=t.options).onExitComplete)==null||r.call(n),(o=(i=t.resumingFrom)==null?void 0:(s=i.options).onExitComplete)==null||o.call(s)})}scheduleRender(){this.members.forEach(t=>t.instance&&t.scheduleRender(!1))}removeLeadSnapshot(){var t;(t=this.lead)!=null&&t.snapshot&&(this.lead.snapshot=void 0)}}const Cs={hasAnimatedSinceResize:!0,hasEverUpdated:!1},ba=["","X","Y","Z"],iS=1e3;let sS=0;function ka(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function b0(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=$g(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:s}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",U,!(i||s))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&b0(r)}function k0({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},a=t==null?void 0:t()){this.id=sS++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(lS),this.nodes.forEach(hS),this.nodes.forEach(mS),this.nodes.forEach(uS)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let u=0;u<this.path.length;u++)this.path[u].shouldResetTransform=!0;this.root===this&&(this.nodes=new tS)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new oc),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const u=this.eventHandlers.get(o);u&&u.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=kc(o)&&!ak(o),this.instance=o;const{layoutId:a,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(u||a)&&(this.isLayoutDirty=!0),e){let d,f=0;const p=()=>this.root.updateBlockedByResize=!1;U.read(()=>{f=window.innerWidth}),e(o,()=>{const g=window.innerWidth;g!==f&&(f=g,this.root.updateBlockedByResize=!0,d&&d(),d=nS(p,250),Cs.hasAnimatedSinceResize&&(Cs.hasAnimatedSinceResize=!1,this.nodes.forEach(Kf)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&c&&(a||u)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f,hasRelativeLayoutChanged:p,layout:g})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||c.getDefaultTransition()||wS,{onLayoutAnimationStart:v,onLayoutAnimationComplete:k}=c.getProps(),x=!this.targetLayout||!y0(this.targetLayout,g),h=!f&&p;if(this.options.layoutRoot||this.resumeFrom||h||f&&(x||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const m={...gc(y,"layout"),onPlay:v,onComplete:k};(c.shouldReduceMotion||this.options.layoutRoot)&&(m.delay=0,m.type=!1),this.startAnimation(m),this.setAnimationOrigin(d,h,m.path)}else f||Kf(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=g})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Xt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(gS),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&b0(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,(typeof f.latestValues.x=="string"||typeof f.latestValues.y=="string")&&(f.isLayoutDirty=!0),f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:u}=this.options;if(a===void 0&&!u)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const u=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),u&&this.nodes.forEach(dS),this.nodes.forEach(Hf);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Wf);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(fS),this.nodes.forEach(pS),this.nodes.forEach(oS),this.nodes.forEach(aS)):this.nodes.forEach(Wf),this.clearAllSnapshots();const a=be.now();fe.delta=mt(0,1e3/60,a-fe.timestamp),fe.timestamp=a,fe.isProcessing=!0,pa.update.process(fe),pa.preRender.process(fe),pa.render.process(fe),fe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,wc.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(cS),this.sharedNodes.forEach(xS)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,U.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){U.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ke(this.snapshot.measuredBox.x)&&!ke(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let u=0;u<this.path.length;u++)this.path[u].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=oe()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&this.instance){const u=r(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:u,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:u}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!x0(this.projectionDelta),u=this.getTransformTemplate(),c=u?u(this.latestValues,""):void 0,d=c!==this.prevTransformTemplateValue;o&&this.instance&&(a||cn(this.latestValues)||d)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let u=this.removeElementScroll(a);return o&&(u=this.removeTransform(u)),bS(u),{animationId:this.root.animationId,measuredBox:a,layoutBox:u,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:o}=this.options;if(!o)return oe();const a=o.measureViewportBox();if(!(((c=this.scroll)==null?void 0:c.wasRoot)||this.path.some(kS))){const{scroll:d}=this.root;d&&(ut(a.x,d.offset.x),ut(a.y,d.offset.y))}return a}removeElementScroll(o){var u;const a=oe();if(Xe(a,o),(u=this.scroll)!=null&&u.wasRoot)return a;for(let c=0;c<this.path.length;c++){const d=this.path[c],{scroll:f,options:p}=d;d!==this.root&&f&&p.layoutScroll&&(f.wasRoot&&Xe(a,o),ut(a.x,f.offset.x),ut(a.y,f.offset.y))}return a}applyTransform(o,a=!1,u){var d,f;const c=u||oe();Xe(c,o);for(let p=0;p<this.path.length;p++){const g=this.path[p];!a&&g.options.layoutScroll&&g.scroll&&g!==g.root&&(ut(c.x,-g.scroll.offset.x),ut(c.y,-g.scroll.offset.y)),cn(g.latestValues)&&Ss(c,g.latestValues,(d=g.layout)==null?void 0:d.layoutBox)}return cn(this.latestValues)&&Ss(c,this.latestValues,(f=this.layout)==null?void 0:f.layoutBox),c}removeTransform(o){var u;const a=oe();Xe(a,o);for(let c=0;c<this.path.length;c++){const d=this.path[c];if(!cn(d.latestValues))continue;let f;d.instance&&(ql(d.latestValues)&&d.updateSnapshot(),f=oe(),Xe(f,d.measurePageBox())),Lf(a,d.latestValues,(u=d.snapshot)==null?void 0:u.layoutBox,f)}return cn(this.latestValues)&&Lf(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==fe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var g;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==a;if(!(o||u&&this.isSharedProjectionDirty||this.isProjectionDirty||(g=this.parent)!=null&&g.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:f}=this.options;if(!this.layout||!(d||f))return;this.resolvedRelativeTargetAt=fe.timestamp;const p=this.getClosestProjectingParent();p&&this.linkedParentVersion!==p.layoutVersion&&!p.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&p&&p.layout?this.createRelativeTarget(p,this.layout.layoutBox,p.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=oe(),this.targetWithTransforms=oe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Uk(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Xe(this.target,this.layout.layoutBox),s0(this.target,this.targetDelta)):Xe(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?this.createRelativeTarget(p,this.target,p.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||ql(this.parent.latestValues)||i0(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(o,a,u){this.relativeParent=o,this.linkedParentVersion=o.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=oe(),this.relativeTargetOrigin=oe(),lo(this.relativeTargetOrigin,a,u,this.options.layoutAnchor||void 0),Xe(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var y;const o=this.getLead(),a=!!this.resumingFrom||this!==o;let u=!0;if((this.isProjectionDirty||(y=this.parent)!=null&&y.isProjectionDirty)&&(u=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===fe.timestamp&&(u=!1),u)return;const{layout:c,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||d))return;Xe(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,p=this.treeScale.y;yk(this.layoutCorrected,this.treeScale,this.path,a),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=oe());const{target:g}=o;if(!g){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Pf(this.prevProjectionDelta.x,this.projectionDelta.x),Pf(this.prevProjectionDelta.y,this.projectionDelta.y)),qr(this.projectionDelta,this.layoutCorrected,g,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==p||!Bf(this.projectionDelta.x,this.prevProjectionDelta.x)||!Bf(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",g))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),o){const u=this.getStack();u&&u.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Wn(),this.projectionDelta=Wn(),this.projectionDeltaWithTransform=Wn()}setAnimationOrigin(o,a=!1,u){const c=this.snapshot,d=c?c.latestValues:{},f={...this.latestValues},p=Wn();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const g=oe(),y=c?c.source:void 0,v=this.layout?this.layout.source:void 0,k=y!==v,x=this.getStack(),h=!x||x.members.length<=1,m=!!(k&&!h&&this.options.crossfade===!0&&!this.path.some(vS));this.animationProgress=0;let w;const C=u==null?void 0:u.interpolateProjection(o);this.mixTargetDelta=E=>{const S=E/1e3,j=C==null?void 0:C(S);j?(p.x.translate=j.x,p.x.scale=$(o.x.scale,1,S),p.x.origin=o.x.origin,p.x.originPoint=o.x.originPoint,p.y.translate=j.y,p.y.scale=$(o.y.scale,1,S),p.y.origin=o.y.origin,p.y.originPoint=o.y.originPoint):(qf(p.x,o.x,S),qf(p.y,o.y,S)),this.setTargetDelta(p),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(lo(g,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),yS(this.relativeTarget,this.relativeTargetOrigin,g,S),w&&qk(this.relativeTarget,w)&&(this.isProjectionDirty=!1),w||(w=oe()),Xe(w,this.relativeTarget)),k&&(this.animationValues=f,Yk(f,d,this.latestValues,S,m,h)),j&&j.rotate!==void 0&&(this.animationValues||(this.animationValues=f),this.animationValues.pathRotation=j.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=S},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var a,u,c;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(c=(u=this.resumingFrom)==null?void 0:u.currentAnimation)==null||c.stop(),this.pendingAnimation&&(Xt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=U.update(()=>{Cs.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=ur(0)),this.motionValue.jump(0,!1),this.currentAnimation=Zk(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:d=>{this.mixTargetDelta(d),o.onUpdate&&o.onUpdate(d)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(iS),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:u,layout:c,latestValues:d}=o;if(!(!a||!u||!c)){if(this!==o&&this.layout&&c&&S0(this.options.animationType,this.layout.layoutBox,c.layoutBox)){u=this.target||oe();const f=ke(this.layout.layoutBox.x);u.x.min=o.target.x.min,u.x.max=u.x.min+f;const p=ke(this.layout.layoutBox.y);u.y.min=o.target.y.min,u.y.max=u.y.min+p}Xe(a,u),Ss(a,d),qr(this.projectionDeltaWithTransform,this.layoutCorrected,a,d)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new rS),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:u}={}){const c=this.getStack();c&&c.promote(this,u),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:u}=o;if((u.z||u.rotate||u.rotateX||u.rotateY||u.rotateZ||u.skewX||u.skewY)&&(a=!0),!a)return;const c={};u.z&&ka("z",o,c,this.animationValues);for(let d=0;d<ba.length;d++)ka(`rotate${ba[d]}`,o,c,this.animationValues),ka(`skew${ba[d]}`,o,c,this.animationValues);o.render();for(const d in c)o.setStaticValue(d,c[d]),this.animationValues&&(this.animationValues[d]=c[d]);o.scheduleRender()}applyProjectionStyles(o,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const u=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=js(a==null?void 0:a.pointerEvents)||"",o.transform=u?u(this.latestValues,""):"none";return}const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=js(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!cn(this.latestValues)&&(o.transform=u?u({},""):"none",this.hasProjected=!1);return}o.visibility="";const d=c.animationValues||c.latestValues;this.applyTransformsToTarget();let f=Gk(this.projectionDeltaWithTransform,this.treeScale,d);u&&(f=u(d,f)),o.transform=f;const{x:p,y:g}=this.projectionDelta;o.transformOrigin=`${p.origin*100}% ${g.origin*100}% 0`,c.animationValues?o.opacity=c===this?d.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:o.opacity=c===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const y in Ql){if(d[y]===void 0)continue;const{correct:v,applyTo:k,isCSSVariable:x}=Ql[y],h=f==="none"?d[y]:v(d[y],c);if(k){const m=k.length;for(let w=0;w<m;w++)o[k[w]]=h}else x?this.options.visualElement.renderState.vars[y]=h:o[y]=h}this.options.layoutId&&(o.pointerEvents=c===this?js(a==null?void 0:a.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(Hf),this.root.sharedNodes.clear()}}}function oS(e){e.updateLayout()}function aS(e){var n;const t=((n=e.resumeFrom)==null?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:s}=e.options,o=t.source!==e.layout.source;if(s==="size")lt(f=>{const p=o?t.measuredBox[f]:t.layoutBox[f],g=ke(p);p.min=r[f].min,p.max=p.min+g});else if(s==="x"||s==="y"){const f=s==="x"?"y":"x";Yl(o?t.measuredBox[f]:t.layoutBox[f],r[f])}else S0(s,t.layoutBox,r)&&lt(f=>{const p=o?t.measuredBox[f]:t.layoutBox[f],g=ke(r[f]);p.max=p.min+g,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+g)});const a=Wn();qr(a,r,t.layoutBox);const u=Wn();o?qr(u,e.applyTransform(i,!0),t.measuredBox):qr(u,r,t.layoutBox);const c=!x0(a);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:g}=f;if(p&&g){const y=e.options.layoutAnchor||void 0,v=oe();lo(v,t.layoutBox,p.layoutBox,y);const k=oe();lo(k,r,g.layoutBox,y),y0(v,k)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=k,e.relativeTargetOrigin=v,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:u,layoutDelta:a,hasLayoutChanged:c,hasRelativeLayoutChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function lS(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function uS(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function cS(e){e.clearSnapshot()}function Hf(e){e.clearMeasurements()}function dS(e){e.isLayoutDirty=!0,e.updateLayout()}function Wf(e){e.isLayoutDirty=!1}function fS(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function pS(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Kf(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function hS(e){e.resolveTargetDelta()}function mS(e){e.calcProjection()}function gS(e){e.resetSkewAndRotation()}function xS(e){e.removeLeadSnapshot()}function qf(e,t,n){e.translate=$(t.translate,0,n),e.scale=$(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Gf(e,t,n,r){e.min=$(t.min,n.min,r),e.max=$(t.max,n.max,r)}function yS(e,t,n,r){Gf(e.x,t.x,n.x,r),Gf(e.y,t.y,n.y,r)}function vS(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const wS={duration:.45,ease:[.4,0,.1,1]},Qf=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Yf=Qf("applewebkit/")&&!Qf("chrome/")?Math.round:Ke;function Xf(e){e.min=Yf(e.min),e.max=Yf(e.max)}function bS(e){Xf(e.x),Xf(e.y)}function S0(e,t,n){return e==="position"||e==="preserve-aspect"&&!$k(Vf(t),Vf(n),.2)}function kS(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const SS=k0({attachResizeListener:(e,t)=>xi(e,"resize",t),measureScroll:()=>{var e,t;return{x:document.documentElement.scrollLeft||((e=document.body)==null?void 0:e.scrollLeft)||0,y:document.documentElement.scrollTop||((t=document.body)==null?void 0:t.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Sa={current:void 0},j0=k0({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Sa.current){const e=new SS({});e.mount(window),e.setOptions({layoutScroll:!0}),Sa.current=e}return Sa.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),Nc=b.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function Jf(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function jS(...e){return t=>{let n=!1;const r=e.map(i=>{const s=Jf(i,t);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let i=0;i<r.length;i++){const s=r[i];typeof s=="function"?s():Jf(e[i],null)}}}}function CS(...e){return b.useCallback(jS(...e),e)}class ES extends b.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(vs(n)&&t.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const r=n.offsetParent,i=vs(r)&&r.offsetWidth||0,s=vs(r)&&r.offsetHeight||0,o=getComputedStyle(n),a=this.props.sizeRef.current;a.height=parseFloat(o.height),a.width=parseFloat(o.width),a.top=n.offsetTop,a.left=n.offsetLeft,a.right=i-a.width-a.left,a.bottom=s-a.height-a.top,a.direction=o.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function NS({children:e,isPresent:t,anchorX:n,anchorY:r,root:i,pop:s}){var p;const o=b.useId(),a=b.useRef(null),u=b.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:c}=b.useContext(Nc),d=((p=e.props)==null?void 0:p.ref)??(e==null?void 0:e.ref),f=CS(a,d);return b.useInsertionEffect(()=>{const{width:g,height:y,top:v,left:k,right:x,bottom:h,direction:m}=u.current;if(t||s===!1||!a.current||!g||!y)return;const w=m==="rtl",C=n==="left"?w?`right: ${x}`:`left: ${k}`:w?`left: ${k}`:`right: ${x}`,E=r==="bottom"?`bottom: ${h}`:`top: ${v}`;a.current.dataset.motionPopId=o;const S=document.createElement("style");c&&(S.nonce=c);const j=i??document.head;return j.appendChild(S),S.sheet&&S.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${g}px !important;
            height: ${y}px !important;
            ${C}px !important;
            ${E}px !important;
          }
        `),()=>{var P;(P=a.current)==null||P.removeAttribute("data-motion-pop-id"),j.contains(S)&&j.removeChild(S)}},[t]),l.jsx(ES,{isPresent:t,childRef:a,sizeRef:u,pop:s,children:s===!1?e:b.cloneElement(e,{ref:f})})}const TS=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:o,anchorX:a,anchorY:u,root:c})=>{const d=rc(PS),f=b.useId();let p=!0,g=b.useMemo(()=>(p=!1,{id:f,initial:t,isPresent:n,custom:i,onExitComplete:y=>{d.set(y,!0);for(const v of d.values())if(!v)return;r&&r()},register:y=>(d.set(y,!1),()=>d.delete(y))}),[n,d,r]);return s&&p&&(g={...g}),b.useMemo(()=>{d.forEach((y,v)=>d.set(v,!1))},[n]),b.useEffect(()=>{!n&&!d.size&&r&&r()},[n]),e=l.jsx(NS,{pop:o==="popLayout",isPresent:n,anchorX:a,anchorY:u,root:c,children:e}),l.jsx(Do.Provider,{value:g,children:e})};function PS(){return new Map}function C0(e=!0){const t=b.useContext(Do);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,s=b.useId();b.useEffect(()=>{if(e)return i(s)},[e]);const o=b.useCallback(()=>e&&r&&r(s),[s,r,e]);return!n&&r?[!1,o]:[!0]}const Xi=e=>e.key||"";function Zf(e){const t=[];return b.Children.forEach(e,n=>{b.isValidElement(n)&&t.push(n)}),t}const wn=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:s="sync",propagate:o=!1,anchorX:a="left",anchorY:u="top",root:c})=>{const[d,f]=C0(o),p=b.useMemo(()=>Zf(e),[e]),g=o&&!d?[]:p.map(Xi),y=b.useRef(!0),v=b.useRef(p),k=rc(()=>new Map),x=b.useRef(new Set),[h,m]=b.useState(p),[w,C]=b.useState(p);Zm(()=>{y.current=!1,v.current=p;for(let j=0;j<w.length;j++){const P=Xi(w[j]);g.includes(P)?(k.delete(P),x.current.delete(P)):k.get(P)!==!0&&k.set(P,!1)}},[w,g.length,g.join("-")]);const E=[];if(p!==h){let j=[...p];for(let P=0;P<w.length;P++){const N=w[P],L=Xi(N);g.includes(L)||(j.splice(P,0,N),E.push(N))}return s==="wait"&&E.length&&(j=E),C(Zf(j)),m(p),null}const{forceRender:S}=b.useContext(nc);return l.jsx(l.Fragment,{children:w.map(j=>{const P=Xi(j),N=o&&!d?!1:p===w||g.includes(P),L=()=>{if(x.current.has(P))return;if(k.has(P))x.current.add(P),k.set(P,!0);else return;let V=!0;k.forEach(G=>{G||(V=!1)}),V&&(S==null||S(),C(v.current),o&&(f==null||f()),r&&r())};return l.jsx(TS,{isPresent:N,initial:!y.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:s,root:c,onExitComplete:N?void 0:L,anchorX:a,anchorY:u,children:j},P)})})},E0=b.createContext({strict:!1}),ep={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let tp=!1;function FS(){if(tp)return;const e={};for(const t in ep)e[t]={isEnabled:n=>ep[t].some(r=>!!n[r])};t0(e),tp=!0}function N0(){return FS(),hk()}function AS(e){const t=N0();for(const n in e)t[n]={...t[n],...e[n]};t0(t)}const MS=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function uo(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||MS.has(e)}let T0=e=>!uo(e);function DS(e){typeof e=="function"&&(T0=t=>t.startsWith("on")?!uo(t):e(t))}try{DS(require("@emotion/is-prop-valid").default)}catch{}function RS(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||pe(e[i])||(T0(i)||n===!0&&uo(i)||!t&&!uo(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}const _o=b.createContext({});function LS(e,t){if(zo(e)){const{initial:n,animate:r}=e;return{initial:n===!1||gi(n)?n:void 0,animate:gi(r)?r:void 0}}return e.inherit!==!1?t:{}}function zS(e){const{initial:t,animate:n}=LS(e,b.useContext(_o));return b.useMemo(()=>({initial:t,animate:n}),[np(t),np(n)])}function np(e){return Array.isArray(e)?e.join(" "):e}const Tc=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function P0(e,t,n){for(const r in t)!pe(t[r])&&!l0(r,n)&&(e[r]=t[r])}function _S({transformTemplate:e},t){return b.useMemo(()=>{const n=Tc();return Cc(n,t,e),Object.assign({},n.vars,n.style)},[t])}function IS(e,t){const n=e.style||{},r={};return P0(r,n,e),Object.assign(r,_S(e,t)),r}function VS(e,t){const n={},r=IS(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const F0=()=>({...Tc(),attrs:{}});function BS(e,t,n,r){const i=b.useMemo(()=>{const s=F0();return u0(s,t,d0(r),e.transformTemplate,e.style),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};P0(s,e.style,e),i.style={...s,...i.style}}return i}const OS=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Pc(e){return typeof e!="string"||e.includes("-")?!1:!!(OS.indexOf(e)>-1||/[A-Z]/u.test(e))}function $S(e,t,n,{latestValues:r},i,s=!1,o){const u=(o??Pc(e)?BS:VS)(t,r,i,e),c=RS(t,typeof e=="string",s),d=e!==b.Fragment?{...c,...u,ref:n}:{},{children:f}=t,p=b.useMemo(()=>pe(f)?f.get():f,[f]);return b.createElement(e,{...d,children:p})}function US({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:HS(n,r,i,e),renderState:t()}}function HS(e,t,n,r){const i={},s=r(e,{});for(const p in s)i[p]=js(s[p]);let{initial:o,animate:a}=e;const u=zo(e),c=Zg(e);t&&c&&!u&&e.inherit!==!1&&(o===void 0&&(o=t.initial),a===void 0&&(a=t.animate));let d=n?n.initial===!1:!1;d=d||o===!1;const f=d?a:o;if(f&&typeof f!="boolean"&&!Lo(f)){const p=Array.isArray(f)?f:[f];for(let g=0;g<p.length;g++){const y=yc(e,p[g]);if(y){const{transitionEnd:v,transition:k,...x}=y;for(const h in x){let m=x[h];if(Array.isArray(m)){const w=d?m.length-1:0;m=m[w]}m!==null&&(i[h]=m)}for(const h in v)i[h]=v[h]}}}return i}const A0=e=>(t,n)=>{const r=b.useContext(_o),i=b.useContext(Do),s=()=>US(e,t,r,i);return n?s():rc(s)},WS=A0({scrapeMotionValuesFromProps:Ec,createRenderState:Tc}),KS=A0({scrapeMotionValuesFromProps:f0,createRenderState:F0}),qS=Symbol.for("motionComponentSymbol");function GS(e,t,n){const r=b.useRef(n);b.useInsertionEffect(()=>{r.current=n});const i=b.useRef(null);return b.useCallback(s=>{var a;s&&((a=e.onMount)==null||a.call(e,s)),t&&(s?t.mount(s):t.unmount());const o=r.current;if(typeof o=="function")if(s){const u=o(s);typeof u=="function"&&(i.current=u)}else i.current?(i.current(),i.current=null):o(s);else o&&(o.current=s)},[t])}const M0=b.createContext({});function Fn(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function QS(e,t,n,r,i,s){var m,w;const{visualElement:o}=b.useContext(_o),a=b.useContext(E0),u=b.useContext(Do),c=b.useContext(Nc),d=c.reducedMotion,f=c.skipAnimations,p=b.useRef(null),g=b.useRef(!1);r=r||a.renderer,!p.current&&r&&(p.current=r(e,{visualState:t,parent:o,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:d,skipAnimations:f,isSVG:s}),g.current&&p.current&&(p.current.manuallyAnimateOnMount=!0));const y=p.current,v=b.useContext(M0);y&&!y.projection&&i&&(y.type==="html"||y.type==="svg")&&YS(p.current,n,i,v);const k=b.useRef(!1);b.useInsertionEffect(()=>{y&&k.current&&y.update(n,u)});const x=n[Og],h=b.useRef(!!x&&typeof window<"u"&&!((m=window.MotionHandoffIsComplete)!=null&&m.call(window,x))&&((w=window.MotionHasOptimisedAnimation)==null?void 0:w.call(window,x)));return Zm(()=>{g.current=!0,y&&(k.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),y.scheduleRenderMicrotask(),h.current&&y.animationState&&y.animationState.animateChanges())}),b.useEffect(()=>{y&&(!h.current&&y.animationState&&y.animationState.animateChanges(),h.current&&(queueMicrotask(()=>{var C;(C=window.MotionHandoffMarkAsComplete)==null||C.call(window,x)}),h.current=!1),y.enteringChildren=void 0)}),y}function YS(e,t,n,r){const{layoutId:i,layout:s,drag:o,dragConstraints:a,layoutScroll:u,layoutRoot:c,layoutAnchor:d,layoutCrossfade:f}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:D0(e.parent)),e.projection.setOptions({layoutId:i,layout:s,alwaysMeasureLayout:!!o||a&&Fn(a),visualElement:e,animationType:typeof s=="string"?s:"both",initialPromotionConfig:r,crossfade:f,layoutScroll:u,layoutRoot:c,layoutAnchor:d})}function D0(e){if(e)return e.options.allowProjection!==!1?e.projection:D0(e.parent)}function ja(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&AS(r);const s=n?n==="svg":Pc(e),o=s?KS:WS;function a(c,d){let f;const p={...b.useContext(Nc),...c,layoutId:XS(c)},{isStatic:g}=p,y=zS(c),v=o(c,g);if(!g&&typeof window<"u"){JS();const k=ZS(p);f=k.MeasureLayout,y.visualElement=QS(e,v,p,i,k.ProjectionNode,s)}return l.jsxs(_o.Provider,{value:y,children:[f&&y.visualElement?l.jsx(f,{visualElement:y.visualElement,...p}):null,$S(e,c,GS(v,y.visualElement,d),v,g,t,s)]})}a.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const u=b.forwardRef(a);return u[qS]=e,u}function XS({layoutId:e}){const t=b.useContext(nc).id;return t&&e!==void 0?t+"-"+e:e}function JS(e,t){b.useContext(E0).strict}function ZS(e){const t=N0(),{drag:n,layout:r}=t;if(!n&&!r)return{};const i={...n,...r};return{MeasureLayout:n!=null&&n.isEnabled(e)||r!=null&&r.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function ej(e,t){if(typeof Proxy>"u")return ja;const n=new Map,r=(s,o)=>ja(s,o,e,t),i=(s,o)=>r(s,o);return new Proxy(i,{get:(s,o)=>o==="create"?r:(n.has(o)||n.set(o,ja(o,void 0,e,t)),n.get(o))})}const tj=(e,t)=>t.isSVG??Pc(e)?new Ak(t):new Ck(t,{allowProjection:e!==b.Fragment});class nj extends nn{constructor(t){super(t),t.animationState||(t.animationState=zk(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Lo(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let rj=0;class ij extends nn{constructor(){super(...arguments),this.id=rj++,this.isExitComplete=!1}update(){var s;if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;if(t&&r===!1){if(this.isExitComplete){const{initial:o,custom:a}=this.node.getProps();if(typeof o=="string"||typeof o=="object"&&o!==null&&!Array.isArray(o)){const u=vn(this.node,o,a);if(u){const{transition:c,transitionEnd:d,...f}=u;for(const p in f)(s=this.node.getValue(p))==null||s.jump(f[p])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const sj={animation:{Feature:nj},exit:{Feature:ij}};function Ni(e){return{point:{x:e.pageX,y:e.pageY}}}const oj=e=>t=>bc(t)&&e(t,Ni(t));function Gr(e,t,n,r){return xi(e,t,oj(n),r)}const R0=({current:e})=>e?e.ownerDocument.defaultView:null,rp=(e,t)=>Math.abs(e-t);function aj(e,t){const n=rp(e.x,t.x),r=rp(e.y,t.y);return Math.sqrt(n**2+r**2)}const ip=new Set(["auto","scroll"]);class L0{constructor(t,n,{transformPagePoint:r,contextWindow:i=window,dragSnapToOrigin:s=!1,distanceThreshold:o=3,element:a}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=g=>{this.handleScroll(g.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Ji(this.lastRawMoveEventInfo,this.transformPagePoint));const g=Ca(this.lastMoveEventInfo,this.history),y=this.startEvent!==null,v=aj(g.offset,{x:0,y:0})>=this.distanceThreshold;if(!y&&!v)return;const{point:k}=g,{timestamp:x}=fe;this.history.push({...k,timestamp:x});const{onStart:h,onMove:m}=this.handlers;y||(h&&h(this.lastMoveEvent,g),this.startEvent=this.lastMoveEvent),m&&m(this.lastMoveEvent,g)},this.handlePointerMove=(g,y)=>{this.lastMoveEvent=g,this.lastRawMoveEventInfo=y,this.lastMoveEventInfo=Ji(y,this.transformPagePoint),U.update(this.updatePoint,!0)},this.handlePointerUp=(g,y)=>{this.end();const{onEnd:v,onSessionEnd:k,resumeAnimation:x}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const h=Ca(g.type==="pointercancel"?this.lastMoveEventInfo:Ji(y,this.transformPagePoint),this.history);this.startEvent&&v&&v(g,h),k&&k(g,h)},!bc(t))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.distanceThreshold=o,this.contextWindow=i||window;const u=Ni(t),c=Ji(u,this.transformPagePoint),{point:d}=c,{timestamp:f}=fe;this.history=[{...d,timestamp:f}];const{onSessionStart:p}=n;p&&p(t,Ca(c,this.history)),this.removeListeners=ji(Gr(this.contextWindow,"pointermove",this.handlePointerMove),Gr(this.contextWindow,"pointerup",this.handlePointerUp),Gr(this.contextWindow,"pointercancel",this.handlePointerUp)),a&&this.startScrollTracking(a)}startScrollTracking(t){let n=t.parentElement;for(;n;){const r=getComputedStyle(n);(ip.has(r.overflowX)||ip.has(r.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const n=this.scrollPositions.get(t);if(!n)return;const r=t===window,i=r?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},s={x:i.x-n.x,y:i.y-n.y};s.x===0&&s.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=s.x,this.lastMoveEventInfo.point.y+=s.y):this.history.length>0&&(this.history[0].x-=s.x,this.history[0].y-=s.y),this.scrollPositions.set(t,i),U.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Xt(this.updatePoint)}}function Ji(e,t){return t?{point:t(e.point)}:e}function sp(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ca({point:e},t){return{point:e,delta:sp(e,z0(t)),offset:sp(e,lj(t)),velocity:uj(t,.1)}}function lj(e){return e[0]}function z0(e){return e[e.length-1]}function uj(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=z0(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>_e(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>_e(t)*2&&(r=e[1]);const s=He(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const o={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function cj(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?$(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?$(n,e,r.max):Math.min(e,n)),e}function op(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function dj(e,{top:t,left:n,bottom:r,right:i}){return{x:op(e.x,n,i),y:op(e.y,t,r)}}function ap(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function fj(e,t){return{x:ap(e.x,t.x),y:ap(e.y,t.y)}}function pj(e,t){let n=.5;const r=ke(e),i=ke(t);return i>r?n=hi(t.min,t.max-r,e.min):r>i&&(n=hi(e.min,e.max-i,t.min)),mt(0,1,n)}function hj(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Xl=.35;function mj(e=Xl){return e===!1?e=0:e===!0&&(e=Xl),{x:lp(e,"left","right"),y:lp(e,"top","bottom")}}function lp(e,t,n){return{min:up(e,t),max:up(e,n)}}function up(e,t){return typeof e=="number"?e:e[t]||0}const gj=new WeakMap;class xj{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=oe(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:r}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const s=f=>{n&&this.snapToCursor(Ni(f).point),this.stopAnimation()},o=(f,p)=>{const{drag:g,dragPropagation:y,onDragStart:v}=this.getProps();if(g&&!y&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Hb(g),!this.openDragLock))return;this.latestPointerEvent=f,this.latestPanInfo=p,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),lt(x=>{let h=this.getAxisMotionValue(x).get()||0;if(pt.test(h)){const{projection:m}=this.visualElement;if(m&&m.layout){const w=m.layout.layoutBox[x];w&&(h=ke(w)*(parseFloat(h)/100))}}this.originPoint[x]=h}),v&&U.update(()=>v(f,p),!1,!0),Ol(this.visualElement,"transform");const{animationState:k}=this.visualElement;k&&k.setActive("whileDrag",!0)},a=(f,p)=>{this.latestPointerEvent=f,this.latestPanInfo=p;const{dragPropagation:g,dragDirectionLock:y,onDirectionLock:v,onDrag:k}=this.getProps();if(!g&&!this.openDragLock)return;const{offset:x}=p;if(y&&this.currentDirection===null){this.currentDirection=vj(x),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",p.point,x),this.updateAxis("y",p.point,x),this.visualElement.render(),k&&U.update(()=>k(f,p),!1,!0)},u=(f,p)=>{this.latestPointerEvent=f,this.latestPanInfo=p,this.stop(f,p),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{const{dragSnapToOrigin:f}=this.getProps();(f||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:d}=this.getProps();this.panSession=new L0(t,{onSessionStart:s,onStart:o,onMove:a,onSessionEnd:u,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,distanceThreshold:r,contextWindow:R0(this.visualElement),element:this.visualElement.current})}stop(t,n){const r=t||this.latestPointerEvent,i=n||this.latestPanInfo,s=this.isDragging;if(this.cancel(),!s||!i||!r)return;const{velocity:o}=i;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&U.postRender(()=>a(r,i))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Zi(t,i,this.currentDirection))return;const s=this.getAxisMotionValue(t);let o=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(o=cj(o,this.constraints[t],this.elastic[t])),s.set(o)}resolveConstraints(){var s;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(s=this.visualElement.projection)==null?void 0:s.layout,i=this.constraints;t&&Fn(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=dj(r.layoutBox,t):this.constraints=!1,this.elastic=mj(n),i!==this.constraints&&!Fn(t)&&r&&this.constraints&&!this.hasMutatedConstraints&&lt(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=hj(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Fn(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;i.root&&(i.root.scroll=void 0,i.root.updateScroll());const s=vk(r,i.root,this.visualElement.getTransformPagePoint());let o=fj(i.layout.layoutBox,s);if(n){const a=n(gk(o));this.hasMutatedConstraints=!!a,a&&(o=r0(a))}return o}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),u=this.constraints||{},c=lt(d=>{if(!Zi(d,n,this.currentDirection))return;let f=u&&u[d]||{};(o===!0||o===d)&&(f={min:0,max:0});const p=i?200:1e6,g=i?40:1e7,y={type:"inertia",velocity:r?t[d]:0,bounceStiffness:p,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(d,y)});return Promise.all(c).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Ol(this.visualElement,t),r.start(xc(t,r,0,n,this.visualElement,!1))}stopAnimation(){lt(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,i=this.visualElement.getProps()[n];return i||this.visualElement.getValue(t,this.visualElement.latestValues[t]??0)}snapToCursor(t){lt(n=>{const{drag:r}=this.getProps();if(!Zi(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:a}=i.layout.layoutBox[n],u=s.get()||0;s.set(t[n]-$(o,a,.5)+u)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Fn(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};lt(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const u=a.get();i[o]=pj({min:u,max:u},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),lt(o=>{if(!Zi(o,t,null))return;const a=this.getAxisMotionValue(o),{min:u,max:c}=this.constraints[o];a.set($(u,c,i[o]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;gj.set(this.visualElement,this);const t=this.visualElement.current,n=Gr(t,"pointerdown",c=>{const{drag:d,dragListener:f=!0}=this.getProps(),p=c.target,g=p!==t&&Yb(p);d&&f&&!g&&this.start(c)});let r;const i=()=>{const{dragConstraints:c}=this.getProps();Fn(c)&&c.current&&(this.constraints=this.resolveRefConstraints(),r||(r=yj(t,c.current,()=>this.scalePositionWithinConstraints())))},{projection:s}=this.visualElement,o=s.addEventListener("measure",i);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),U.read(i);const a=xi(window,"resize",()=>this.scalePositionWithinConstraints()),u=s.addEventListener("didUpdate",({delta:c,hasLayoutChanged:d})=>{this.isDragging&&d&&(lt(f=>{const p=this.getAxisMotionValue(f);p&&(this.originPoint[f]+=c[f].translate,p.set(p.get()+c[f].translate))}),this.visualElement.render())});return()=>{a(),n(),o(),u&&u(),r&&r()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=Xl,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function cp(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function yj(e,t,n){const r=xf(e,cp(n)),i=xf(t,cp(n));return()=>{r(),i()}}function Zi(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function vj(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class wj extends nn{constructor(t){super(t),this.removeGroupControls=Ke,this.removeListeners=Ke,this.controls=new xj(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ke}update(){const{dragControls:t}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};t!==n&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Ea=e=>(t,n)=>{e&&U.update(()=>e(t,n),!1,!0)};class bj extends nn{constructor(){super(...arguments),this.removePointerDownListener=Ke}onPointerDown(t){this.session=new L0(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:R0(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Ea(t),onStart:Ea(n),onMove:Ea(r),onEnd:(s,o)=>{delete this.session,i&&U.postRender(()=>i(s,o))}}}mount(){this.removePointerDownListener=Gr(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Na=!1;class kj extends b.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=t;s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),Na&&s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Cs.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,{projection:o}=r;return o&&(o.isPresent=s,t.layoutDependency!==n&&o.setOptions({...o.options,layoutDependency:n}),Na=!0,i||t.layoutDependency!==n||n===void 0||t.isPresent!==s?o.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?o.promote():o.relegate()||U.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:t,layoutAnchor:n}=this.props,{projection:r}=t;r&&(r.options.layoutAnchor=n,r.root.didUpdate(),wc.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;Na=!0,i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function _0(e){const[t,n]=C0(),r=b.useContext(nc);return l.jsx(kj,{...e,layoutGroup:r,switchLayoutGroup:b.useContext(M0),isPresent:t,safeToRemove:n})}const Sj={pan:{Feature:bj},drag:{Feature:wj,ProjectionNode:j0,MeasureLayout:_0}};function dp(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,s=r[i];s&&U.postRender(()=>s(t,Ni(t)))}class jj extends nn{mount(){const{current:t}=this.node;t&&(this.unmount=Kb(t,(n,r)=>(dp(this.node,r,"Start"),i=>dp(this.node,i,"End"))))}unmount(){}}class Cj extends nn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ji(xi(this.node.current,"focus",()=>this.onFocus()),xi(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function fp(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),s=r[i];s&&U.postRender(()=>s(t,Ni(t)))}class Ej extends nn{mount(){const{current:t}=this.node;if(!t)return;const{globalTapTarget:n,propagate:r}=this.node.props;this.unmount=Jb(t,(i,s)=>(fp(this.node,s,"Start"),(o,{success:a})=>fp(this.node,o,a?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const Jl=new WeakMap,Ta=new WeakMap,Nj=e=>{const t=Jl.get(e.target);t&&t(e)},Tj=e=>{e.forEach(Nj)};function Pj({root:e,...t}){const n=e||document;Ta.has(n)||Ta.set(n,{});const r=Ta.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(Tj,{root:e,...t})),r[i]}function Fj(e,t,n){const r=Pj(t);return Jl.set(e,n),r.observe(e),()=>{Jl.delete(e),r.unobserve(e)}}const Aj={some:0,all:1};class Mj extends nn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var u;(u=this.stopObserver)==null||u.call(this);const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=t,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:Aj[i]},a=c=>{const{isIntersecting:d}=c;if(this.isInView===d||(this.isInView=d,s&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:f,onViewportLeave:p}=this.node.getProps(),g=d?f:p;g&&g(c)};this.stopObserver=Fj(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(Dj(t,n))&&this.startObserver()}unmount(){var t;(t=this.stopObserver)==null||t.call(this),this.hasEnteredView=!1,this.isInView=!1}}function Dj({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const Rj={inView:{Feature:Mj},tap:{Feature:Ej},focus:{Feature:Cj},hover:{Feature:jj}},Lj={layout:{ProjectionNode:j0,MeasureLayout:_0}},zj={...sj,...Rj,...Sj,...Lj},se=ej(zj,tj);function _j({disease:e,prefix:t,values:n,onChange:r}){const i=ar[e];return i?l.jsx("div",{className:"space-y-3",children:i.fields.map(s=>l.jsxs("div",{children:[l.jsx("label",{className:"form-label",children:s.label}),s.type==="select"?l.jsx("select",{className:"form-input",value:n[s.id]??"",onChange:o=>r(s.id,o.target.value),children:s.options.map(([o,a])=>l.jsx("option",{value:o,children:a},o))}):l.jsx("input",{type:"number",className:"form-input",placeholder:s.placeholder,value:n[s.id]??"",min:s.min,max:s.max,step:s.step,onChange:o=>r(s.id,o.target.value)})]},s.id))}):null}function I0(e,t){return t===""||t===null||t===void 0?null:e.type==="number"?parseFloat(t)||null:t==="true"?!0:t==="false"?!1:t}const V0="jotnosathi_cache_";function Zl(e,t){try{localStorage.setItem(V0+e,JSON.stringify({data:t,savedAt:new Date().toISOString()}))}catch{}}function eu(e){try{const t=localStorage.getItem(V0+e);return t?JSON.parse(t):null}catch{return null}}const Ij=`
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
`,Vj=[{id:"dengue",label:"Dengue",icon:"🦟"},{id:"measles",label:"Measles",icon:"🧒"},{id:"maternal",label:"Maternal / ANC",icon:"🤱"},{id:"diabetes",label:"Diabetes",icon:"🩸"},{id:"bp",label:"Hypertension",icon:"💓"}];function Bj({label:e,count:t,threshold:n}){const r=Math.min(t/n*100,100),i=t>=n;return l.jsxs("div",{className:"rt-qbar",children:[l.jsxs("div",{className:"rt-qbar-top",children:[l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:14,fontWeight:700,color:"var(--t1)",marginBottom:4},children:e}),l.jsx("div",{style:{fontSize:12,color:"var(--t3)"},children:i?"Eligible for AI retraining":`${n-t} reports remaining`})]}),l.jsxs("span",{className:"rt-stat",children:[t,"/",n]})]}),l.jsx("div",{className:"rt-progress",children:l.jsx(se.div,{initial:{width:0},animate:{width:`${r}%`},transition:{duration:.7},style:{height:"100%",borderRadius:999,background:i?"linear-gradient(90deg,#22C55E,#16A34A)":"linear-gradient(90deg,#1557B0,#1A7F5A)"}})})]})}const Oj={blue:{bg:"#1557B0",soft:"#EAF2FF"},teal:{bg:"#1A7F5A",soft:"#ECFDF5"},violet:{bg:"#6B46C1",soft:"#F3EEFF"}};function Pa({title:e,subtitle:t,icon:n,accent:r="blue",children:i}){const s=Oj[r];return l.jsxs(se.div,{className:"rt-card",initial:{opacity:0,y:6},animate:{opacity:1,y:0},transition:{duration:.24},children:[l.jsxs("div",{className:"rt-card-head",children:[l.jsx("div",{className:"rt-card-icon",style:{background:s.soft,color:s.bg},children:n}),l.jsxs("div",{children:[l.jsx("h2",{style:{margin:0,fontSize:16,fontWeight:800,color:"var(--t1)",letterSpacing:"-.02em"},children:e}),l.jsx("p",{style:{margin:"5px 0 0",fontSize:12.5,lineHeight:1.5,color:"var(--t3)"},children:t})]})]}),l.jsx("div",{className:"rt-card-body",children:i})]})}function es({label:e,icon:t,children:n}){return l.jsxs("div",{className:"rt-field-group",children:[l.jsxs("label",{className:"rt-label",children:[t,e]}),n]})}function $j(){const[e,t]=b.useState(""),[n,r]=b.useState(""),[i,s]=b.useState("monitoring"),[o,a]=b.useState(""),[u,c]=b.useState({}),[d,f]=b.useState(!1),[p,g]=b.useState(null),[y,v]=b.useState(null),[k,x]=b.useState(null),h=b.useCallback(async()=>{try{const j=await(await fetch(`${Me}/queue-status`)).json();v(j),Zl("queue-status",j)}catch{const S=eu("queue-status");S&&v(S.data)}},[]),m=b.useCallback(async()=>{try{const j=await(await fetch(`${Me}/case-registry`)).json();x(j.registry),Zl("case-registry",j.registry)}catch{const S=eu("case-registry");S&&x(S.data)}},[]);b.useEffect(()=>{h(),m()},[h,m]);function w(S){r(S),c({}),g(null)}const C=ar[n];async function E(){if(!e)return alert("Please select a division.");if(!n)return alert("Please select a disease.");f(!0),g(null);const S={division:e,symptoms:o||"Manual field observation",outcome:i,disease_suspected:n,worker_id:"shebika_"+Math.random().toString(36).substr(2,6)};C&&C.fields.forEach(j=>{const P=I0(j,u[j.id]);P!==null&&(S[j.id]=P)});try{const P=await(await fetch(`${Me}/field-report`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(S)})).json();if(P.report_type==="outbreak"){const N=P.queue_size||0;g({ok:!0,msg:P.retrain_triggered?`AI retraining triggered for ${e}.`:`Queue progress: ${N}/5`})}else g({ok:!0,msg:"Case added successfully."});h(),m()}catch{try{await Bm(S,"/field-report"),Om(),window.dispatchEvent(new Event("jotno-backend-down")),g({ok:!0,msg:"No connection — report saved on this device and will sync automatically."})}catch{g({ok:!1,msg:"Submission failed. Please try again."})}}finally{f(!1)}}return l.jsxs("div",{className:"rt",children:[l.jsx("style",{children:Ij}),l.jsxs("div",{className:"rt-wrap",children:[l.jsxs("header",{className:"rt-header",children:[l.jsxs("div",{className:"rt-page-eyebrow",children:[l.jsx(Zs,{size:12}),"Community Health Intelligence"]}),l.jsx("h1",{className:"rt-page-title",children:"Field Reports Dashboard"}),l.jsx("p",{className:"rt-page-sub",children:"Submit disease observations, outbreak reports, and community health records for AI-assisted surveillance and real-time public health monitoring."})]}),l.jsxs("div",{className:"rt-stack",children:[l.jsx(Pa,{title:"Manual Health Report",subtitle:"Create and submit a structured field observation",icon:l.jsx(Sw,{size:18}),accent:"blue",children:l.jsxs("div",{className:"rt-form",children:[l.jsx(es,{label:"Division",icon:l.jsx(Nw,{size:12}),children:l.jsxs("select",{className:"rt-input",value:e,onChange:S=>t(S.target.value),children:[l.jsx("option",{value:"",children:"Select division"}),Zu.map(S=>l.jsx("option",{value:S,children:S},S))]})}),l.jsx(es,{label:"Disease Domain",icon:l.jsx(ec,{size:12}),children:l.jsxs("select",{className:"rt-input",value:n,onChange:S=>w(S.target.value),children:[l.jsx("option",{value:"",children:"Select disease"}),l.jsx("option",{value:"dengue",children:"Dengue"}),l.jsx("option",{value:"measles",children:"Measles"}),l.jsx("option",{value:"maternal",children:"Maternal / ANC"}),l.jsx("option",{value:"diabetes",children:"Diabetes"}),l.jsx("option",{value:"bp",children:"Hypertension"})]})}),l.jsxs("div",{children:[l.jsxs("div",{className:"rt-section-title",children:[l.jsx(Mo,{size:11,color:"#1557B0"}),"Quick Select"]}),l.jsx("div",{className:"rt-quick-grid",children:Vj.map(S=>l.jsxs("button",{type:"button",className:`rt-quick-btn${n===S.id?" active":""}`,onClick:()=>w(S.id),children:[l.jsx("div",{className:"rt-pill-icon",children:S.icon}),l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:14,fontWeight:700,color:"var(--t1)",marginBottom:4},children:S.label}),l.jsx("div",{style:{fontSize:12,color:"var(--t3)"},children:"Tap to select"})]})]},S.id))})]}),l.jsx("div",{className:"rt-divider"}),l.jsx(wn,{children:C&&l.jsxs(se.div,{initial:{opacity:0,y:4},animate:{opacity:1,y:0},exit:{opacity:0},className:"rt-notice",style:C.report_type==="outbreak"?{background:"#FFF7ED",borderColor:"#FCD34D",color:"var(--warn)"}:{background:"#EFF6FF",borderColor:"#BFDBFE",color:"var(--accent)"},children:[l.jsx(aw,{size:16,style:{flexShrink:0,marginTop:2}}),l.jsxs("div",{children:[l.jsxs("div",{style:{fontWeight:700,marginBottom:6},children:[C.icon," ",C.report_type==="outbreak"?"Outbreak Monitoring":"Registry Tracking"]}),l.jsx("div",{style:{opacity:.9},children:C.report_type==="outbreak"?"This report contributes to outbreak surveillance and automatic AI retraining workflows.":"This report contributes to long-term chronic disease registry analytics."})]})]},n)}),l.jsx(wn,{children:C&&l.jsx(se.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},style:{background:"#F8FAFD",border:"1px solid var(--border)",borderRadius:20,padding:18},children:l.jsx(_j,{disease:n,values:u,onChange:(S,j)=>c(P=>({...P,[S]:j}))})},`f-${n}`)}),l.jsx(es,{label:"Patient Outcome",icon:l.jsx(Tn,{size:12}),children:l.jsxs("select",{className:"rt-input",value:i,onChange:S=>s(S.target.value),children:[l.jsx("option",{value:"monitoring",children:"Monitoring at home"}),l.jsx("option",{value:"treated",children:"Treated on site"}),l.jsx("option",{value:"referred",children:"Referred to facility"})]})}),l.jsxs(es,{label:"Additional Notes",icon:l.jsx(Qd,{size:12}),children:[l.jsx("textarea",{className:"rt-textarea",rows:5,value:o,onChange:S=>a(S.target.value),placeholder:"Symptoms, field observations, patient condition, or additional clinical context…"}),l.jsxs("div",{style:{marginTop:8,textAlign:"right",fontSize:12,color:"var(--t3)"},children:[o.length," characters"]})]}),l.jsxs("div",{children:[l.jsx("button",{className:"rt-btn",onClick:E,disabled:d,children:d?l.jsxs(l.Fragment,{children:[l.jsx(Jn,{size:16,className:"animate-spin"}),"Submitting…"]}):l.jsxs(l.Fragment,{children:[l.jsx(Aw,{size:15}),"Submit Field Report"]})}),l.jsx(wn,{children:p&&l.jsxs(se.div,{initial:{opacity:0,y:-3},animate:{opacity:1,y:0},exit:{opacity:0},className:"rt-status",style:p.ok?{background:"#ECFDF5",borderColor:"#86EFAC",color:"var(--ok)"}:{background:"#FEF2F2",borderColor:"#FCA5A5",color:"var(--danger)"},children:[p.ok?l.jsx(Wm,{size:15,style:{flexShrink:0,marginTop:1}}):l.jsx(Km,{size:15,style:{flexShrink:0,marginTop:1}}),p.msg]})})]})]})}),l.jsx(Pa,{title:"Outbreak Queue",subtitle:"AI retraining progress by disease",icon:l.jsx(Js,{size:18}),accent:"violet",children:y?l.jsxs("div",{className:"rt-vertical-list",children:[["dengue","measles"].map(S=>{const j=y[S]||{count:0,threshold:5};return l.jsx(Bj,{label:S.charAt(0).toUpperCase()+S.slice(1),count:j.count,threshold:j.threshold},S)}),l.jsx("div",{className:"rt-hint",children:"AI retraining activates automatically once outbreak thresholds are reached."})]}):l.jsxs("div",{className:"rt-loading",children:[l.jsx(Jn,{size:14,className:"animate-spin"}),"Loading queue…"]})}),l.jsx(Pa,{title:"District Registry",subtitle:"Chronic disease case tracking",icon:l.jsx(Xm,{size:18}),accent:"teal",children:k?l.jsx("div",{className:"rt-vertical-list",children:Object.entries(k).map(([S,j])=>l.jsx("div",{className:"rt-reg-row",children:l.jsxs("div",{className:"rt-reg-top",children:[l.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[l.jsx("div",{style:{width:42,height:42,borderRadius:14,background:"#EFF6FF",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--accent)",flexShrink:0},children:l.jsx(Qd,{size:16})}),l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:13,fontWeight:800,color:"var(--t1)",letterSpacing:"-.01em"},children:j.disease.toUpperCase()}),l.jsx("div",{style:{fontSize:12,color:"var(--t3)",marginTop:3},children:j.division})]})]}),l.jsxs("span",{className:"rt-stat",children:[j.case_count," cases"]})]})},S))}):l.jsxs("div",{className:"rt-loading",children:[l.jsx(Jn,{size:14,className:"animate-spin"}),"Loading registry…"]})}),l.jsxs("div",{className:"rt-promo",children:[l.jsx("div",{className:"rt-promo-icon",children:l.jsx(Js,{size:20})}),l.jsx("h3",{style:{position:"relative",zIndex:1,fontSize:20,fontWeight:800,margin:"0 0 10px",letterSpacing:"-.03em"},children:"AI Health Monitoring"}),l.jsx("p",{style:{position:"relative",zIndex:1,fontSize:14,lineHeight:1.8,margin:0,color:"rgba(255,255,255,.86)"},children:"Real-time disease surveillance helps identify outbreaks faster and strengthens healthcare response across communities."})]})]})]})]})}function Uj(){return l.jsxs(se.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"flex flex-col items-center justify-center rounded-3xl border border-[#E6F2EF] bg-white px-6 py-20 text-center shadow-sm",children:[l.jsx("div",{className:"flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#ECFDF5] to-[#F0FDFA] text-[#0F766E] shadow-inner",children:l.jsx(ec,{size:34})}),l.jsx("h3",{className:"mt-6 text-xl font-black tracking-tight text-[#0F172A]",children:"No cases logged yet"}),l.jsx("p",{className:"mt-2 max-w-sm text-sm leading-relaxed text-[#64748B]",children:"Field observations and patient sessions recorded today will appear here in real time."}),l.jsxs("div",{className:"mt-5 inline-flex items-center gap-2 rounded-full border border-[#A7F3D0] bg-[#ECFDF5] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#0F766E]",children:[l.jsx(Mo,{size:13}),"Live session monitoring active"]})]})}function ts({icon:e,label:t,value:n,color:r}){return l.jsx(se.div,{whileHover:{y:-2},className:"rounded-3xl border border-[#E6F2EF] bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg",children:l.jsxs("div",{className:"flex items-start justify-between",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-[11px] font-bold uppercase tracking-[0.18em] text-[#94A3B8]",children:t}),l.jsx("div",{className:"mt-3 text-3xl font-black tracking-tight",style:{color:r},children:n})]}),l.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-2xl",style:{backgroundColor:`${r}15`,color:r},children:e})]})})}function Hj({entry:e,index:t}){const n=e.disease?ar[e.disease]:null,r=(n==null?void 0:n.color)||"#0F766E",i=(e.risk||"").toLowerCase(),s=i==="critical"?"from-[#EF4444] to-[#F97316]":i==="high"?"from-[#F59E0B] to-[#FBBF24]":"from-[#0F766E] to-[#14B8A6]";return l.jsxs(se.div,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:t*.04},whileHover:{y:-2},className:"group overflow-hidden rounded-3xl border border-[#E6F2EF] bg-white shadow-sm transition-all duration-300 hover:shadow-xl",children:[l.jsx("div",{className:`h-1.5 w-full bg-gradient-to-r ${s}`}),l.jsx("div",{className:"p-5",children:l.jsxs("div",{className:"flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between",children:[l.jsxs("div",{className:"min-w-0 flex-1",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-lg shadow-sm",style:{backgroundColor:`${r}15`,color:r},children:(n==null?void 0:n.icon)||"🩺"}),l.jsxs("div",{className:"min-w-0",children:[l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[l.jsx("h3",{className:"truncate text-base font-black tracking-tight text-[#0F172A]",children:e.disease?e.disease.replaceAll("_"," ").replace(/\b\w/g,o=>o.toUpperCase()):"General Case"}),l.jsx(Ao,{level:e.risk||"moderate"})]}),l.jsxs("div",{className:"mt-1 flex flex-wrap items-center gap-3 text-xs text-[#94A3B8]",children:[l.jsxs("div",{className:"flex items-center gap-1",children:[l.jsx(hw,{size:12}),e.time]}),l.jsxs("div",{className:"flex items-center gap-1",children:[l.jsx(Tn,{size:12}),"Session #",t+1]})]})]})]}),l.jsxs("div",{className:"mt-5 rounded-2xl border border-[#E6F2EF] bg-gradient-to-br from-[#F0FDFA] to-[#F8FAFC] p-4",children:[l.jsxs("div",{className:"mb-2 flex items-center gap-2 text-[#0F766E]",children:[l.jsx(Ym,{size:14}),l.jsx("span",{className:"text-xs font-bold uppercase tracking-wide",children:"Symptoms & Notes"})]}),l.jsx("p",{className:"text-sm leading-relaxed text-[#334155]",children:e.symptoms||"No symptoms recorded."})]})]}),l.jsxs("div",{className:"flex flex-row gap-3 lg:flex-col",children:[e.followUp&&l.jsxs("div",{className:"inline-flex items-center gap-2 rounded-2xl border border-[#A7F3D0] bg-[#ECFDF5] px-3 py-2 text-xs font-semibold text-[#0F766E]",children:[l.jsx(rw,{size:13}),"Follow-up"]}),i==="critical"?l.jsxs("div",{className:"inline-flex items-center gap-2 rounded-2xl border border-[#FECACA] bg-[#FEF2F2] px-3 py-2 text-xs font-semibold text-[#B91C1C]",children:[l.jsx(Jm,{size:13}),"Immediate attention"]}):l.jsxs("div",{className:"inline-flex items-center gap-2 rounded-2xl border border-[#A7F3D0] bg-[#ECFDF5] px-3 py-2 text-xs font-semibold text-[#0F766E]",children:[l.jsx(Zs,{size:13}),"Logged safely"]})]})]})})]})}function Wj({sessionLog:e=[]}){const t=e.filter(i=>{var s;return((s=i.risk)==null?void 0:s.toLowerCase())==="critical"}).length,n=e.filter(i=>{var s;return((s=i.risk)==null?void 0:s.toLowerCase())==="high"}).length,r=new Set(e.map(i=>i.disease).filter(Boolean)).size;return l.jsxs("div",{className:"mx-auto max-w-7xl space-y-8 bg-gradient-to-b from-[#F0FDFA] via-white to-[#F8FAFC] px-4 py-8 animate-fadeIn",children:[l.jsxs("div",{className:"flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full border border-[#A7F3D0] bg-[#ECFDF5] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#0F766E]",children:[l.jsx(Mo,{size:13}),"Live Session Registry"]}),l.jsx("h1",{className:"mt-4 text-3xl font-black tracking-tight text-[#0F172A]",children:"Session Log"}),l.jsx("p",{className:"mt-2 max-w-2xl text-sm leading-relaxed text-[#64748B]",children:"Real-time overview of field observations, disease reports, and patient interactions recorded during today’s surveillance session."})]}),l.jsxs("div",{className:"rounded-3xl border border-[#E6F2EF] bg-white px-5 py-4 shadow-sm",children:[l.jsx("p",{className:"text-[11px] font-bold uppercase tracking-wide text-[#94A3B8]",children:"Active Cases Today"}),l.jsxs("div",{className:"mt-2 flex items-end gap-2",children:[l.jsx("span",{className:"text-4xl font-black text-[#0F766E]",children:e.length}),l.jsxs("span",{className:"pb-1 text-sm font-semibold text-[#94A3B8]",children:["case",e.length!==1?"s":""]})]})]})]}),l.jsxs("div",{className:"grid gap-4 sm:grid-cols-2 xl:grid-cols-4",children:[l.jsx(ts,{label:"Total Cases",value:e.length,color:"#0F766E",icon:l.jsx(ec,{size:18})}),l.jsx(ts,{label:"Critical",value:t,color:"#EF4444",icon:l.jsx(Jm,{size:18})}),l.jsx(ts,{label:"High Risk",value:n,color:"#F59E0B",icon:l.jsx(Tn,{size:18})}),l.jsx(ts,{label:"Disease Types",value:r,color:"#14B8A6",icon:l.jsx(Ym,{size:18})})]}),l.jsxs("div",{className:"overflow-hidden rounded-3xl border border-[#E6F2EF] bg-white shadow-sm",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-[#E6F2EF] px-6 py-5",children:[l.jsxs("div",{children:[l.jsx("h3",{className:"text-sm font-black text-[#0F172A]",children:"Case Timeline"}),l.jsx("p",{className:"mt-1 text-xs text-[#94A3B8]",children:"Chronological activity from today’s field session"})]}),l.jsx("div",{className:"hidden rounded-full border border-[#FDE68A] bg-[#FFFBEB] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#B45309] sm:block",children:"Live Updates"})]}),l.jsx("div",{className:"px-6 py-6",children:l.jsx(wn,{mode:"popLayout",children:e.length?l.jsx("div",{className:"space-y-5",children:e.map((i,s)=>l.jsx(Hj,{entry:i,index:s},`${i.time}-${s}`))}):l.jsx(Uj,{})})})]})]})}const Kj="rounded-2xl border border-slate-200 bg-white",qj={initial:{opacity:0},animate:{opacity:1}},Gj={initial:{opacity:0,y:10},animate:{opacity:1,y:0}},Qj=[{value:"dengue",label:"Dengue",icon:"🦟"},{value:"measles",label:"Measles",icon:"🔴"},{value:"maternal",label:"Maternal / ANC",icon:"🤰"},{value:"diabetes",label:"Diabetes",icon:"🩸"},{value:"bp",label:"Hypertension",icon:"💊"}],Yj={dengue:{label:"Dengue",icon:"🦟",accent:"#f97316"},measles:{label:"Measles",icon:"🔴",accent:"#ef4444"},maternal:{label:"Maternal / ANC",icon:"🤰",accent:"#ec4899"},diabetes:{label:"Diabetes",icon:"🩸",accent:"#8b5cf6"},bp:{label:"Hypertension",icon:"💊",accent:"#0ea5e9"}};function B0(e){switch((e||"").toLowerCase()){case"critical":return{glow:"shadow-red-100",bg:"bg-red-50",border:"border-red-200",text:"text-red-700"};case"high":return{glow:"shadow-orange-100",bg:"bg-orange-50",border:"border-orange-200",text:"text-orange-700"};default:return{glow:"shadow-amber-100",bg:"bg-amber-50",border:"border-amber-200",text:"text-amber-700"}}}function yi(e){return Math.max(0,Math.min(Number(e||0),100))}function Xj(e){switch((e||"").toLowerCase()){case"critical":return"#dc2626";case"high":return"#ea580c";case"moderate":return"#ca8a04";default:return"#16a34a"}}function ns({label:e,value:t,icon:n,color:r}){return l.jsx(se.div,{whileHover:{y:-2},className:`${Kj} relative overflow-hidden px-5 py-4 shadow-sm`,children:l.jsxs("div",{className:"flex items-start justify-between",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400",children:e}),l.jsx("div",{className:"mt-3 text-3xl font-black tracking-tight",style:{color:r},children:t})]}),l.jsx("div",{className:"flex h-11 w-11 items-center justify-center rounded-2xl",style:{backgroundColor:`${r}14`,color:r},children:n})]})})}function Jj({perDiseaseScores:e}){return!e||Object.keys(e).length===0?null:l.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white overflow-hidden",children:[l.jsxs("div",{className:"flex items-center gap-2 border-b border-slate-100 px-5 py-4",children:[l.jsx(Tn,{size:16,className:"text-slate-500"}),l.jsx("h4",{className:"text-sm font-bold text-slate-800",children:"Per-Disease Risk Breakdown"})]}),l.jsx("div",{className:"divide-y divide-slate-100",children:Object.entries(e).map(([t,n])=>{var a;const r=Yj[t]||{label:t,icon:"🏥"},i=yi(n==null?void 0:n.score),s=Xj(n==null?void 0:n.risk_level),o=((a=n==null?void 0:n.top_factors)==null?void 0:a[0])||"";return l.jsxs("div",{className:"px-5 py-4",children:[l.jsxs("div",{className:"flex items-center justify-between mb-3",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-base",children:r.icon}),l.jsx("span",{className:"text-sm font-bold text-slate-700",children:r.label})]}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("span",{className:"rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide",style:{backgroundColor:`${s}18`,color:s},children:(n==null?void 0:n.risk_level)||"N/A"}),l.jsx("span",{className:"text-lg font-black tabular-nums",style:{color:s},children:i})]})]}),l.jsx("div",{className:"h-1.5 overflow-hidden rounded-full bg-slate-100 mb-2",children:l.jsx(se.div,{initial:{width:0},animate:{width:`${i}%`},transition:{duration:.6,ease:"easeOut"},className:"h-full rounded-full",style:{background:s}})}),o&&l.jsx("p",{className:"text-[11px] text-slate-400 truncate",children:o})]},t)})})]})}function Zj({name:e,data:t,selected:n,onClick:r}){var c;const[i,s]=b.useState(0),o=yi(t==null?void 0:t.score),a=Vm[t==null?void 0:t.risk_level]||"#64748b",u=B0(t==null?void 0:t.risk_level);return b.useEffect(()=>{const d=setTimeout(()=>s(o),120);return()=>clearTimeout(d)},[o]),l.jsxs(se.button,{whileHover:{y:-1},whileTap:{scale:.995},onClick:r,"aria-expanded":n,"aria-label":`View ${e} division details`,className:`group relative w-full overflow-hidden rounded-2xl border bg-white text-left transition-all duration-200 ${n?`border-slate-300 shadow-lg ${u.glow}`:"border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md"}`,children:[l.jsx("div",{className:"absolute left-0 top-0 h-full w-1.5",style:{background:a}}),l.jsxs("div",{className:"px-5 py-4",children:[l.jsxs("div",{className:"flex items-start justify-between gap-4",children:[l.jsxs("div",{className:"min-w-0 flex-1",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(tc,{size:15,className:"text-slate-400"}),l.jsxs("h3",{className:"truncate text-sm font-bold text-slate-800",children:[e," Division"]})]}),l.jsx("p",{className:"mt-1 truncate text-xs text-slate-400",children:((c=t==null?void 0:t.top_factors)==null?void 0:c[0])||"Live outbreak surveillance"})]}),l.jsxs("div",{className:"flex flex-col items-end gap-2",children:[l.jsx(Ao,{level:t==null?void 0:t.risk_level}),l.jsx("div",{className:"text-lg font-black tabular-nums",style:{color:a},children:o})]})]}),l.jsxs("div",{className:"mt-4",children:[l.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[l.jsx("span",{className:"text-[11px] font-semibold uppercase tracking-wide text-slate-400",children:"Risk Score"}),l.jsx("span",{className:"text-[11px] font-semibold text-slate-500",children:"/100"})]}),l.jsx("div",{className:"h-2 overflow-hidden rounded-full bg-slate-100",children:l.jsx(se.div,{initial:{width:0},animate:{width:`${i}%`},transition:{duration:.7,ease:"easeOut"},className:"h-full rounded-full",style:{background:a}})})]}),l.jsxs("div",{className:"mt-4 flex items-center justify-between",children:[l.jsx("span",{className:"text-[11px] font-medium text-slate-400",children:"Tap for live briefing"}),l.jsx(sw,{size:16,className:`transition-transform duration-200 ${n?"rotate-180 text-slate-700":"text-slate-300"}`})]})]})]})}function e5({division:e}){const[t,n]=b.useState(""),[r,i]=b.useState("monitoring"),[s,o]=b.useState({}),[a,u]=b.useState(null),[c,d]=b.useState(!1),f=ar[t];async function p(){if(!t){u({ok:!1,msg:"Please select a suspected disease."});return}d(!0),u(null);const g={division:e,symptoms:"Field observation",outcome:r,disease_suspected:t,worker_id:"shebika_"+Math.random().toString(36).slice(2,8)};f&&f.fields.slice(0,2).forEach(y=>{const v=I0(y,s[y.id]);v!==null&&(g[y.id]=v)});try{const y=await fetch(`${Me}/field-report`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)});if(!y.ok)throw new Error("Failed to submit report");const v=await y.json();let k="Registry updated successfully.";v.report_type==="outbreak"&&(k=v.retrain_triggered?`AI retraining triggered for ${e}.`:`Queue updated: ${v.queue_size}/5`),u({ok:!0,msg:k}),o({})}catch{u({ok:!1,msg:"Could not submit report."})}finally{d(!1)}}return l.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-slate-50/80 p-5",children:[l.jsxs("div",{className:"mb-5 flex items-center gap-3",children:[l.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-100 text-blue-600",children:l.jsx(fw,{size:18})}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-sm font-bold text-slate-800",children:"Quick Field Observation"}),l.jsx("p",{className:"text-xs text-slate-400",children:"Submit real-time community health data"})]})]}),l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{className:"grid gap-3 sm:grid-cols-2",children:[l.jsxs("select",{value:t,onChange:g=>{n(g.target.value),o({})},className:"h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 outline-none transition-all focus:border-blue-400 focus:ring-4 focus:ring-blue-100",children:[l.jsx("option",{value:"",children:"Select disease"}),Qj.map(g=>l.jsxs("option",{value:g.value,children:[g.icon," ",g.label]},g.value))]}),l.jsxs("select",{value:r,onChange:g=>i(g.target.value),className:"h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 outline-none transition-all focus:border-blue-400 focus:ring-4 focus:ring-blue-100",children:[l.jsx("option",{value:"monitoring",children:"Monitoring"}),l.jsx("option",{value:"treated",children:"Treated"}),l.jsx("option",{value:"referred",children:"Referred"})]})]}),l.jsx(wn,{children:f&&l.jsxs(se.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"space-y-3 overflow-hidden",children:[l.jsx("div",{className:`rounded-xl border px-4 py-3 text-xs font-semibold ${f.report_type==="outbreak"?"border-orange-200 bg-orange-50 text-orange-700":"border-blue-200 bg-blue-50 text-blue-700"}`,children:l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Mo,{size:13}),l.jsxs("span",{children:[f.icon," ",f.label]})]})}),f.fields.slice(0,2).map(g=>l.jsx("div",{children:g.type==="select"?l.jsx("select",{value:s[g.id]??"",onChange:y=>o(v=>({...v,[g.id]:y.target.value})),className:"h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none transition-all focus:border-blue-400 focus:ring-4 focus:ring-blue-100",children:g.options.map(([y,v])=>l.jsx("option",{value:y,children:v},y))}):l.jsx("input",{type:"number",min:g.min,max:g.max,placeholder:g.placeholder||g.label,value:s[g.id]??"",onChange:y=>o(v=>({...v,[g.id]:y.target.value})),className:"h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 placeholder:text-slate-400 outline-none transition-all focus:border-blue-400 focus:ring-4 focus:ring-blue-100"})},g.id))]})}),l.jsx("button",{onClick:p,disabled:c,className:"flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-sm font-bold text-white shadow-lg shadow-blue-100 transition-all hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60",children:c?l.jsxs(l.Fragment,{children:[l.jsx(Jn,{size:15,className:"animate-spin"}),"Submitting..."]}):l.jsxs(l.Fragment,{children:["Submit Observation ",l.jsx(J1,{size:15})]})}),l.jsx(wn,{children:a&&l.jsxs(se.div,{...qj,exit:{opacity:0},className:`flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold ${a.ok?"border-emerald-200 bg-emerald-50 text-emerald-700":"border-red-200 bg-red-50 text-red-700"}`,children:[a.ok?l.jsx(Wm,{size:15}):l.jsx(Km,{size:15}),a.msg]})})]})]})}const rs={dengue:.28,measles:.22,maternal:.22,diabetes:.15,bp:.13},t5={dengue:{label:"Dengue",icon:"🦟"},measles:{label:"Measles",icon:"🔴"},maternal:{label:"Maternal",icon:"🤰"},diabetes:{label:"Diabetes",icon:"🩸"},bp:{label:"Hypertension",icon:"💊"}};function n5({score:e,perDiseaseScores:t}){if(!t||!Object.keys(t).length)return null;const n=Object.keys(t).filter(a=>rs[a]),r=n.reduce((a,u)=>a+rs[u],0),i=Object.values(rs).reduce((a,u)=>a+u,0);if(!r)return null;const s=n.map(a=>{const u=t[a],c=u.score*rs[a]/r*i;return{id:a,...t5[a],contribution:Math.round(c*10)/10,factor:u.top_factors&&u.top_factors[0]||null}}).sort((a,u)=>u.contribution-a.contribution),o=Math.max(...s.map(a=>a.contribution),1);return l.jsxs("div",{className:"overflow-hidden rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-blue-50",children:[l.jsxs("div",{className:"flex items-center gap-2 border-b border-indigo-100 px-5 py-4",children:[l.jsx(Tn,{size:16,className:"text-indigo-600"}),l.jsx("h4",{className:"text-sm font-bold text-indigo-700",children:"Why this score? — Explainable Risk Attribution"})]}),l.jsxs("div",{className:"space-y-3 px-5 py-5",children:[s.map(a=>l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center justify-between text-xs font-semibold text-slate-600",children:[l.jsxs("span",{children:[a.icon," ",a.label]}),l.jsxs("span",{className:"font-black text-slate-800",children:["+",a.contribution.toFixed(1)," pts"]})]}),l.jsx("div",{className:"mt-1 h-2.5 overflow-hidden rounded-full bg-white/70",children:l.jsx(se.div,{initial:{width:0},animate:{width:`${a.contribution/o*100}%`},transition:{duration:.6},className:"h-full rounded-full bg-indigo-500"})}),a.factor&&l.jsx("div",{className:"mt-1 text-[11px] text-slate-400",children:a.factor})]},a.id)),l.jsxs("p",{className:"pt-1 text-[11px] leading-relaxed text-slate-400",children:["Additive attribution: each disease model's exact point contribution to the composite score of ",Number(e).toFixed(1),". Weights from the district risk model (v2.2) — contributions sum to the score."]})]})]})}function r5({division:e,data:t}){const[n,r]=b.useState("Loading briefing..."),i=yi(t==null?void 0:t.score),s=Vm[t==null?void 0:t.risk_level]||"#64748b",o=B0(t==null?void 0:t.risk_level);return b.useEffect(()=>{const a=new AbortController;async function u(){try{r("Loading briefing...");const c=await fetch(`${Me}/risk/${e}`,{signal:a.signal});if(!c.ok)throw new Error;const d=await c.json();r(d.worker_briefing||"No briefing available.")}catch{r(((t==null?void 0:t.top_factors)||[]).map(c=>`• ${c}`).join(`
`)||"Unable to load briefing.")}}return u(),()=>a.abort()},[e,t==null?void 0:t.top_factors]),l.jsxs(se.div,{...Gj,className:"overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-100",children:[l.jsxs("div",{className:`border-b px-6 py-5 ${o.bg} ${o.border}`,children:[l.jsxs("div",{className:"flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between",children:[l.jsx("div",{className:"min-w-0",children:l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-md",style:{background:s},children:l.jsx(Qm,{size:20})}),l.jsxs("div",{children:[l.jsxs("h3",{className:"text-xl font-black tracking-tight text-slate-900",children:[e," Division"]}),l.jsxs("p",{className:"mt-1 text-sm text-slate-500",children:[(t==null?void 0:t.district_count)||0," districts monitored · ",t==null?void 0:t.risk_level," risk"]})]})]})}),l.jsxs("div",{className:"flex items-center gap-4",children:[l.jsx(Ao,{level:t==null?void 0:t.risk_level}),l.jsxs("div",{className:"text-right",children:[l.jsx("div",{className:"text-4xl font-black leading-none",style:{color:s},children:i}),l.jsx("div",{className:"mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400",children:"Risk Score"})]})]})]}),l.jsx("div",{className:"mt-5",children:l.jsx("div",{className:"h-3 overflow-hidden rounded-full bg-white/60",children:l.jsx(se.div,{initial:{width:0},animate:{width:`${i}%`},transition:{duration:.8},className:"h-full rounded-full",style:{background:s}})})})]}),l.jsxs("div",{className:"space-y-6 px-6 py-6",children:[l.jsxs("div",{className:"overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-green-50",children:[l.jsxs("div",{className:"flex items-center gap-2 border-b border-emerald-100 px-5 py-4",children:[l.jsx(Js,{size:16,className:"text-emerald-600"}),l.jsx("h4",{className:"text-sm font-bold text-emerald-700",children:"AI Worker Briefing"})]}),l.jsx("div",{className:"px-5 py-5",children:l.jsx("p",{className:"whitespace-pre-wrap text-sm leading-relaxed text-slate-700",children:n})})]}),l.jsx(n5,{score:i,perDiseaseScores:t==null?void 0:t.per_disease_scores}),l.jsx(Jj,{perDiseaseScores:t==null?void 0:t.per_disease_scores}),l.jsx(e5,{division:e})]})]})}function i5({isActive:e}){var k,x,h;const[t,n]=b.useState({}),[r,i]=b.useState({critical:[],high:[],moderate:[]}),[s,o]=b.useState(null),[a,u]=b.useState(null),[c,d]=b.useState(!1),[f,p]=b.useState(!0),g=b.useRef(null),y=b.useCallback(async(m=!1)=>{try{m||p(!0);const[w,C]=await Promise.all([fetch(`${Me}/risk/all`),fetch(`${Me}/alerts`)]);if(!w.ok||!C.ok)throw new Error;const E=await w.json();await C.json(),n(E.divisions||{}),i(E.summary||{critical:[],high:[],moderate:[]}),o(new Date().toLocaleTimeString()),d(!1),Zl("risk-all",E)}catch{const w=eu("risk-all");w?(n(w.data.divisions||{}),i(w.data.summary||{critical:[],high:[],moderate:[]}),o("cached · "+new Date(w.savedAt).toLocaleTimeString()),d(!1)):m||d(!0)}finally{p(!1)}},[]);b.useEffect(()=>{if(!e){g.current&&clearInterval(g.current);return}return y(),g.current=setInterval(()=>y(!0),3e4),()=>{g.current&&clearInterval(g.current)}},[e,y]);const v=b.useMemo(()=>Object.entries(t).sort((m,w)=>{var C,E;return yi((C=w[1])==null?void 0:C.score)-yi((E=m[1])==null?void 0:E.score)}),[t]);return l.jsxs("div",{className:"mx-auto max-w-7xl space-y-8 px-4 py-8 animate-fadeIn",children:[l.jsxs("div",{className:"flex flex-col gap-4",children:[l.jsxs("div",{className:"inline-flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-blue-700",children:[l.jsx(Vw,{size:13}),"Live Surveillance Network"]}),l.jsxs("div",{className:"flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between",children:[l.jsxs("div",{children:[l.jsx("h1",{className:"text-3xl font-black tracking-tight text-slate-900 sm:text-4xl",children:"Bangladesh Risk Map"}),l.jsx("p",{className:"mt-2 max-w-2xl text-sm leading-relaxed text-slate-500",children:"Real-time division-level outbreak intelligence powered by live field reports, retraining feedback loops, public health datasets, and AI-assisted surveillance."})]}),s&&l.jsxs("div",{className:"flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm",children:[l.jsx("div",{className:"h-2 w-2 rounded-full bg-emerald-500 animate-pulse"}),l.jsxs("div",{children:[l.jsx("p",{className:"text-[11px] font-bold uppercase tracking-wide text-slate-400",children:"Last Updated"}),l.jsx("p",{className:"text-sm font-semibold text-slate-700",children:s})]})]})]})]}),l.jsxs("div",{className:"grid gap-4 sm:grid-cols-2 xl:grid-cols-4",children:[l.jsx(ns,{label:"Critical",value:((k=r.critical)==null?void 0:k.length)??"–",color:"#dc2626",icon:l.jsx(Qm,{size:18})}),l.jsx(ns,{label:"High Risk",value:((x=r.high)==null?void 0:x.length)??"–",color:"#ea580c",icon:l.jsx(Xm,{size:18})}),l.jsx(ns,{label:"Moderate",value:((h=r.moderate)==null?void 0:h.length)??"–",color:"#ca8a04",icon:l.jsx(Tn,{size:18})}),l.jsx(ns,{label:"Datasets",value:"13",color:"#0891b2",icon:l.jsx(Js,{size:18})})]}),l.jsx(wn,{children:a&&t[a]&&l.jsx(r5,{division:a,data:t[a]})}),l.jsxs("div",{className:"overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm",children:[l.jsx("div",{className:"flex items-center justify-between border-b border-slate-100 px-6 py-5",children:l.jsxs("div",{children:[l.jsx("h3",{className:"text-sm font-black text-slate-800",children:"Division Risk Scores"}),l.jsx("p",{className:"mt-1 text-xs text-slate-400",children:"Tap a division to view disease analytics and AI briefing"})]})}),l.jsxs("div",{className:"px-6 py-6",children:[c&&l.jsxs("div",{className:"rounded-2xl border border-red-200 bg-red-50 px-5 py-6 text-center",children:[l.jsx("div",{className:"text-sm font-bold text-red-700",children:"Could not load risk data"}),l.jsx("p",{className:"mt-1 text-xs text-red-500",children:"Is the backend running on port 8000?"})]}),f&&!c&&l.jsx("div",{className:"space-y-4",children:[1,2,3].map(m=>l.jsx("div",{className:"h-28 animate-pulse rounded-2xl bg-slate-100"},m))}),!f&&!v.length&&!c&&l.jsxs("div",{className:"flex items-center justify-center gap-2 py-10 text-sm text-slate-400",children:[l.jsx(Jn,{size:16,className:"animate-spin"}),"No live data available"]}),l.jsx("div",{className:"space-y-4",children:v.map(([m,w])=>l.jsx(Zj,{name:m,data:w,selected:a===m,onClick:()=>u(C=>C===m?null:m)},m))})]})]})]})}const s5="modulepreload",o5=function(e){return"/"+e},pp={},a5=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=o5(u),u in pp)return;pp[u]=!0;const c=u.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${d}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":s5,c||(f.as="script"),f.crossOrigin="",f.href=u,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((p,g)=>{f.addEventListener("load",p),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})},l5=[{icon:Y1,label:"National Emergency",number:"999",description:"24/7 emergency ambulance & police support",accent:"from-red-500 to-rose-500"},{icon:qm,label:"DGHS Hotline",number:"16767",description:"Government health information hotline",accent:"from-blue-500 to-cyan-500"},{icon:bw,label:"Maternal Care",number:"16743",description:"Maternal & neonatal emergency assistance",accent:"from-pink-500 to-rose-500"},{icon:Tn,label:"Dengue Support",number:"10655",description:"Dengue prevention & response hotline",accent:"from-emerald-500 to-teal-500"}];function Fa({title:e,subtitle:t,icon:n,children:r,accent:i="blue"}){const s={blue:"from-blue-500 to-cyan-500",emerald:"from-emerald-500 to-teal-500",rose:"from-rose-500 to-red-500"};return l.jsxs(se.div,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.35},className:"bg-white border border-slate-200/80 rounded-3xl shadow-sm shadow-slate-100 overflow-hidden",children:[l.jsxs("div",{className:"flex items-center gap-4 px-6 py-5 border-b border-slate-100",children:[l.jsx("div",{className:`w-11 h-11 rounded-2xl bg-gradient-to-br ${s[i]} flex items-center justify-center text-white shadow-lg shadow-slate-200 flex-shrink-0`,children:n}),l.jsxs("div",{className:"min-w-0",children:[l.jsx("h2",{className:"text-[15px] font-bold text-slate-900 leading-tight",children:e}),l.jsx("p",{className:"text-xs text-slate-400 mt-1 leading-relaxed",children:t})]})]}),l.jsx("div",{className:"p-6",children:r})]})}function u5({facility:e}){const t=e.type==="tertiary";return l.jsx(se.div,{whileHover:{y:-2},transition:{duration:.2},className:"group bg-slate-50/80 hover:bg-white border border-slate-200 rounded-2xl p-4 transition-all duration-200 hover:shadow-md",children:l.jsxs("div",{className:"flex items-start gap-4",children:[l.jsx("div",{className:`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm ${t?"bg-red-50 text-red-600":"bg-emerald-50 text-emerald-600"}`,children:t?l.jsx(qm,{size:20}):l.jsx(tw,{size:20})}),l.jsxs("div",{className:"min-w-0 flex-1",children:[l.jsxs("div",{className:"flex items-start justify-between gap-3",children:[l.jsxs("div",{className:"min-w-0",children:[l.jsx("h3",{className:"text-sm font-bold text-slate-800 leading-snug",children:e.name}),l.jsx("div",{className:"flex flex-wrap items-center gap-2 mt-2",children:l.jsx("span",{className:`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase ${t?"bg-red-100 text-red-700":"bg-emerald-100 text-emerald-700"}`,children:t?"Tertiary Hospital":"District Facility"})})]}),l.jsx("button",{className:"opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 hover:text-slate-700",title:"View location",children:l.jsx(yw,{size:15})})]}),l.jsxs("div",{className:"flex items-center gap-1.5 mt-3 text-xs text-slate-500",children:[l.jsx(tc,{size:13}),l.jsxs("span",{children:[e.lat.toFixed(3),", ",e.lng.toFixed(3)]})]})]})]})})}function c5({icon:e,label:t,number:n,description:r,accent:i}){return l.jsxs(se.a,{whileHover:{y:-2},transition:{duration:.2},href:`tel:${n}`,className:"group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-200 hover:shadow-lg hover:shadow-slate-200 block",children:[l.jsx("div",{className:`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${i}`}),l.jsxs("div",{className:"flex items-start gap-4",children:[l.jsx("div",{className:`w-12 h-12 rounded-2xl bg-gradient-to-br ${i} text-white flex items-center justify-center shadow-md flex-shrink-0`,children:l.jsx(e,{size:18})}),l.jsxs("div",{className:"min-w-0 flex-1",children:[l.jsxs("div",{className:"flex items-center justify-between gap-3",children:[l.jsx("h3",{className:"text-sm font-bold text-slate-800",children:t}),l.jsx(Gm,{size:15,className:"text-slate-300 group-hover:text-slate-500 transition-colors"})]}),l.jsx("p",{className:"mt-1.5 text-[11px] text-slate-500 leading-relaxed",children:r}),l.jsx("div",{className:"mt-3 font-mono text-2xl font-black tracking-tight text-slate-900",children:n})]})]})]})}function d5({isActive:e}){const t=b.useRef(null),n=b.useRef(!1),[r,i]=b.useState(!0),s=b.useMemo(()=>Er.filter(a=>a.type==="tertiary").length,[]),o=b.useMemo(()=>Er.filter(a=>a.type==="district").length,[]);return b.useEffect(()=>{!e||n.current||a5(()=>import("./leaflet-src-CIMfXRdd.js").then(a=>a.l),[]).then(a=>{if(n.current)return;n.current=!0;const u=a.default.map(t.current,{zoomControl:!1}).setView([23.8103,90.4125],7);a.default.control.zoom({position:"topright"}).addTo(u),a.default.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"© OpenStreetMap"}).addTo(u);const c={tertiary:"#dc2626",district:"#059669"};Er.forEach(d=>{const f=d.type==="tertiary";a.default.circleMarker([d.lat,d.lng],{radius:f?10:8,fillColor:c[d.type],color:"#ffffff",weight:3,fillOpacity:.95}).addTo(u).bindPopup(`
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
          `)}),i(!1)})},[e]),l.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-8 space-y-7 animate-fadeIn",children:[l.jsxs("div",{className:"flex flex-col gap-4",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold tracking-wide uppercase",children:[l.jsx(Zs,{size:13}),"Emergency Referral Network"]}),l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{className:"max-w-3xl",children:[l.jsx("h1",{className:"text-3xl font-black tracking-tight text-slate-900",children:"National Referral Coordination"}),l.jsx("p",{className:"mt-2 text-sm leading-relaxed text-slate-500",children:"Real-time healthcare referral mapping for tertiary hospitals, district facilities, emergency response coordination, and community healthcare escalation pathways across Bangladesh."})]}),l.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:[{label:"Facilities",value:Er.length,color:"bg-blue-50 text-blue-700 border-blue-100"},{label:"Tertiary",value:s,color:"bg-red-50 text-red-700 border-red-100"},{label:"District",value:o,color:"bg-emerald-50 text-emerald-700 border-emerald-100"},{label:"Coverage",value:"8 Div",color:"bg-violet-50 text-violet-700 border-violet-100"}].map(a=>l.jsxs("div",{className:`rounded-2xl border px-4 py-4 ${a.color}`,children:[l.jsx("div",{className:"text-2xl font-black leading-none",children:a.value}),l.jsx("div",{className:"mt-1 text-[11px] font-bold uppercase tracking-wide opacity-80",children:a.label})]},a.label))})]})]}),l.jsxs(Fa,{title:"Interactive Referral Map",subtitle:"Live overview of hospitals and district referral facilities",icon:l.jsx(tc,{size:19}),accent:"blue",children:[l.jsxs("div",{className:"flex flex-wrap items-center gap-4 mb-5",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("div",{className:"w-3.5 h-3.5 rounded-full bg-red-600 ring-4 ring-red-100"}),l.jsx("span",{className:"text-xs font-semibold text-slate-600",children:"Tertiary Hospitals"})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("div",{className:"w-3 h-3 rounded-full bg-emerald-600 ring-4 ring-emerald-100"}),l.jsx("span",{className:"text-xs font-semibold text-slate-600",children:"District Facilities"})]}),l.jsx("div",{className:"text-xs text-slate-400 font-medium md:ml-auto",children:"Tap a marker for facility details"})]}),l.jsxs("div",{className:"relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-50",children:[r&&l.jsxs("div",{className:"absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-white/90 backdrop-blur-sm",children:[l.jsx(Jn,{size:24,className:"animate-spin text-blue-500"}),l.jsx("p",{className:"text-sm font-medium text-slate-500",children:"Loading referral map..."})]}),l.jsx("div",{ref:t,className:"w-full",style:{height:540}})]})]}),l.jsx(Fa,{title:"Priority Referral Facilities",subtitle:"High-capacity emergency and district healthcare centers",icon:l.jsx(gw,{size:18}),accent:"emerald",children:l.jsx("div",{className:"space-y-4",children:Er.slice(0,8).map(a=>l.jsx(u5,{facility:a},`${a.name}-${a.lat}`))})}),l.jsx(Fa,{title:"Emergency Hotlines",subtitle:"Direct access to national healthcare response services",icon:l.jsx(Gm,{size:18}),accent:"rose",children:l.jsx("div",{className:"space-y-4",children:l5.map(a=>l.jsx(c5,{...a},a.number))})}),l.jsxs("div",{className:"relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white p-6 shadow-xl shadow-emerald-200",children:[l.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_40%)]"}),l.jsx("div",{className:"absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/10"}),l.jsxs("div",{className:"relative z-10",children:[l.jsx("div",{className:"w-12 h-12 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center mb-5",children:l.jsx(Zs,{size:22})}),l.jsx("h3",{className:"text-xl font-black tracking-tight leading-tight",children:"Smart Referral Coordination"}),l.jsx("p",{className:"mt-3 text-sm leading-relaxed text-emerald-50",children:"Integrated emergency routing and referral escalation improve healthcare accessibility, reduce response delays, and support rapid outbreak intervention across divisions."}),l.jsx("div",{className:"mt-6 grid grid-cols-2 md:grid-cols-4 gap-3",children:["24/7 Emergency Support","Division Coverage","Live Referral Mapping","Rapid Escalation"].map(a=>l.jsx("div",{className:"rounded-2xl bg-white/10 backdrop-blur px-3 py-3 text-xs font-semibold text-center",children:a},a))})]})]})]})}function f5({onAcknowledge:e}){return l.jsx("div",{className:"fixed inset-0 z-[9999] flex items-center justify-center p-4",style:{background:"rgba(15,23,42,0.72)"},children:l.jsxs("div",{className:"w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl",children:[l.jsxs("div",{className:"flex items-center gap-3 bg-gradient-to-r from-[#0F766E] to-[#115E59] px-6 py-4",children:[l.jsx("div",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-lg text-white",children:"🏥"}),l.jsxs("div",{children:[l.jsx("div",{className:"text-sm font-semibold text-white",children:"JotnoSathi"}),l.jsx("div",{className:"text-[11px] text-white/70",children:"AI Clinical Decision Support"})]}),l.jsx("div",{className:"ml-auto rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-medium text-white",children:"BuildFest 2026"})]}),l.jsxs("div",{className:"px-6 py-5",children:[l.jsx("p",{className:"mb-4 text-sm font-semibold text-[#0F766E]",children:"⚕️ Important — Please read before use"}),l.jsxs("div",{className:"mb-5 space-y-3",children:[l.jsx(Pr,{icon:"🤝",title:"Assists, does not replace",children:"Supports clinical judgment. Final decisions remain with healthcare professionals."}),l.jsx(Pr,{icon:"📋",title:"Protocol-grounded",children:"Based on WHO + DGHS guidelines. No diagnosis is provided — only recommendations."}),l.jsxs(Pr,{icon:"🚨",title:"Emergency cases",children:["Call"," ",l.jsx("a",{href:"tel:999",className:"font-bold text-red-500 underline",children:"999"})," ","immediately for emergencies. Do not wait for AI output."]}),l.jsx(Pr,{icon:"🔒",title:"No personal data stored",children:"Reports are anonymized for district-level risk analysis only."}),l.jsx(Pr,{icon:"🇧🇩",title:"For Shasthya Shebikas only",children:"Intended for trained community health workers under DGHS guidelines."})]}),l.jsxs("div",{className:"mb-5 border-l-4 border-[#0F766E] bg-[#F0FDFA] px-4 py-3",children:[l.jsx("p",{className:"text-sm font-medium text-[#0F766E]",children:"তুমি একজন সহায়তাকারী, রোগ নির্ণয় করছ না।"}),l.jsx("p",{className:"mt-0.5 text-xs text-[#64748B]",children:"You are assisting, not diagnosing."})]}),l.jsx("button",{onClick:e,className:"w-full rounded-xl bg-gradient-to-r from-[#0F766E] to-[#115E59] px-4 py-3 text-sm font-bold text-white shadow-md transition hover:opacity-95",children:"✅ I understand — Continue"}),l.jsx("p",{className:"mt-3 text-center text-[11px] text-[#94A3B8]",children:"This appears once per session"})]})]})})}function Pr({icon:e,title:t,children:n}){return l.jsxs("div",{className:"flex items-start gap-3",children:[l.jsx("span",{className:"mt-0.5 text-base",children:e}),l.jsxs("div",{className:"text-xs leading-relaxed text-[#64748B]",children:[l.jsxs("span",{className:"font-semibold text-[#0F172A]",children:[t,"."," "]}),n]})]})}const p5=`
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
  .sync-banner {
    background: var(--blue-600);
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
`,Ti=[{to:"/triage",label:"Triage",icon:h5},{to:"/reports",label:"Reports",icon:m5},{to:"/log",label:"Log",icon:g5},{to:"/riskmap",label:"Risk Map",icon:x5},{to:"/referral",label:"Referral",icon:y5}];function h5({className:e,style:t}){return l.jsx("svg",{className:e,style:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"})})}function m5({className:e,style:t}){return l.jsxs("svg",{className:e,style:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),l.jsx("polyline",{points:"14,2 14,8 20,8"}),l.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),l.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"})]})}function g5({className:e,style:t}){return l.jsxs("svg",{className:e,style:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),l.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),l.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),l.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]})}function x5({className:e,style:t}){return l.jsx("svg",{className:e,style:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("polygon",{points:"3,11 22,2 13,21 11,13 3,11"})})}function y5({className:e,style:t}){return l.jsxs("svg",{className:e,style:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),l.jsx("polyline",{points:"9,22 9,12 15,12 15,22"})]})}function O0({style:e}){return l.jsxs("svg",{style:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"}),l.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),l.jsx("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]})}function v5({style:e,flipped:t}){return l.jsx("svg",{style:{...e,transform:t?"rotate(180deg)":"rotate(0deg)",transition:"transform 280ms ease"},viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("polyline",{points:"9,18 15,12 9,6"})})}function w5({style:e}){return l.jsxs("svg",{style:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("circle",{cx:"12",cy:"12",r:"2"}),l.jsx("path",{d:"M8.56 2.9A10 10 0 1 0 15.44 2.9"}),l.jsx("path",{d:"M6.3 6.3a6 6 0 1 0 11.4 0"})]})}function b5({style:e}){return l.jsxs("svg",{style:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M10 17H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h12l3 4v7a1 1 0 0 1-1 1h-2"}),l.jsx("circle",{cx:"7.5",cy:"17.5",r:"2.5"}),l.jsx("circle",{cx:"17.5",cy:"17.5",r:"2.5"}),l.jsx("path",{d:"M8 9h2v2H8zM11 10h2"})]})}function k5({collapsed:e,setCollapsed:t,isOnline:n,onLogout:r}){return l.jsxs("aside",{className:"sidebar",style:{width:e?64:220},children:[l.jsxs("div",{className:"sidebar-logo",children:[l.jsx("div",{className:"logo-mark",children:l.jsx("img",{src:gs,alt:"JotnoSathi"})}),!e&&l.jsxs("div",{className:"logo-text-wrap",children:[l.jsx("div",{className:"logo-name",children:"JotnoSathi"}),l.jsx("div",{className:"logo-sub",children:"AI Health Assistant"})]})]}),l.jsx("nav",{className:"sidebar-nav",children:Ti.map(({to:i,label:s,icon:o})=>l.jsx(Ju,{to:i,className:({isActive:a})=>`nav-item${a?" active":""}`,style:{justifyContent:e?"center":void 0},children:({isActive:a})=>l.jsxs(l.Fragment,{children:[l.jsx(o,{style:{width:18,height:18,flexShrink:0,opacity:a?1:.65}}),!e&&l.jsx("span",{style:{flex:1},children:s}),!e&&a&&l.jsx("span",{className:"nav-dot"}),e&&l.jsx("span",{className:"nav-tooltip",children:s})]})},i))}),l.jsxs("div",{className:"sidebar-footer",children:[!e&&l.jsxs("div",{className:`status-chip ${n?"online":"offline"}`,children:[l.jsx("span",{className:`status-dot ${n?"online":"offline"}`}),n?"Connected":"Offline mode"]}),l.jsxs("button",{onClick:r,className:"collapse-btn",style:{justifyContent:e?"center":void 0,color:"var(--red-text)",marginBottom:2},title:"Logout",children:[l.jsxs("svg",{style:{width:15,height:15,flexShrink:0},viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),l.jsx("polyline",{points:"16 17 21 12 16 7"}),l.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),!e&&l.jsx("span",{children:"Logout"})]}),l.jsxs("button",{onClick:()=>t(i=>!i),className:"collapse-btn",style:{justifyContent:e?"center":void 0},children:[l.jsx(v5,{style:{width:15,height:15,flexShrink:0},flipped:!e}),!e&&l.jsx("span",{children:"Collapse"})]})]})]})}function hp({isOnline:e,alerts:t}){const n=Tt(),r=Ti.find(i=>i.to===n.pathname);return l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"topbar",children:[l.jsxs("div",{style:{flex:1,minWidth:0},children:[l.jsx("div",{className:"topbar-title",children:(r==null?void 0:r.label)??"JotnoSathi"}),t.length>0&&l.jsxs("div",{className:"topbar-alert",children:["🔴 ",t[0].message,t.length>1&&l.jsxs("span",{style:{color:"var(--text-3)",marginLeft:4},children:["+",t.length-1," more"]})]})]}),l.jsxs("div",{className:`live-badge ${e?"online":"offline"}`,children:[l.jsx("span",{className:`live-dot ${e?"online":"offline"}`}),e?"Live":"Offline"]}),l.jsxs("a",{href:"tel:999",className:"emergency-btn",children:[l.jsx(b5,{style:{width:13,height:13}}),"999"]})]}),t.length>0&&l.jsxs("div",{className:"alert-ticker",children:[l.jsxs("span",{className:"ticker-badge",children:[l.jsx(w5,{style:{width:11,height:11}}),"Live alerts"]}),l.jsx("div",{className:"ticker-scroll",children:t.map((i,s)=>l.jsxs("span",{children:[s>0&&l.jsx("span",{style:{margin:"0 10px",opacity:.4},children:"·"}),"⚠ ",i.message]},s))})]})]})}function S5({isOnline:e,alerts:t}){const n=Tt(),r=Ti.find(i=>i.to===n.pathname);return l.jsxs("header",{className:"mobile-header",children:[l.jsx("div",{className:"mobile-logo",children:l.jsx(O0,{style:{width:14,height:14}})}),l.jsx("span",{className:"mobile-title",children:(r==null?void 0:r.label)??"JotnoSathi"}),t.length>0&&l.jsx("span",{style:{fontSize:11,color:"var(--red-text)",fontWeight:600},children:"🔴"}),l.jsx("span",{style:{width:8,height:8,borderRadius:"50%",flexShrink:0,background:e?"var(--green-600)":"var(--orange)",marginLeft:4}})]})}function j5(){return l.jsx("nav",{className:"bottom-nav",children:Ti.map(({to:e,label:t,icon:n})=>l.jsx(Ju,{to:e,className:({isActive:r})=>`bottom-nav-item${r?" active":""}`,children:({isActive:r})=>l.jsxs(l.Fragment,{children:[l.jsx(n,{style:{width:20,height:20,opacity:r?1:.5}}),t]})},e))})}function C5(){return l.jsx("footer",{className:"footer",children:l.jsxs("div",{className:"footer-inner",children:[l.jsxs("div",{className:"footer-brand",children:[l.jsx("div",{className:"footer-logo",children:l.jsx(O0,{style:{width:11,height:11}})}),l.jsx("span",{className:"footer-name",children:"JotnoSathi"}),l.jsx("span",{className:"footer-sep",children:"·"}),l.jsx("span",{className:"footer-desc",children:"AI Health Assistant · Bangladesh"})]}),l.jsx("div",{className:"footer-links",children:Ti.map(({to:e,label:t})=>l.jsx(Ju,{to:e,className:({isActive:n})=>`footer-link${n?" active":""}`,children:t},e))}),l.jsx("p",{className:"footer-meta",children:"WHO · HDX · DHS Bangladesh · Kaggle · 13 datasets"})]})})}function E5({browserOnline:e,backendUp:t,pendingSync:n}){if(e&&t&&n===0)return null;if(e&&t&&n>0)return l.jsxs("div",{className:"sync-banner",children:["🔄 Syncing ",n," saved triage",n>1?"s":"","…"]});const r=n>0?` · ${n} triage${n>1?"s":""} saved for sync`:"";return l.jsx("div",{className:"offline-banner",children:e?`⚠️ Server unreachable — reconnecting in the background${r}`:`⚠️ Offline Mode — Using cached data${r}`})}function N5({isOnline:e,browserOnline:t,backendUp:n,pendingSync:r,alerts:i,sessionLog:s,addToLog:o,onLogout:a}){const[u,c]=b.useState(!1),d=Tt(),f=d.pathname==="/riskmap",p=d.pathname==="/referral";return l.jsxs("div",{className:"app-shell",children:[l.jsx(k5,{collapsed:u,setCollapsed:c,isOnline:e,onLogout:a}),l.jsxs("div",{className:"content-wrap",children:[l.jsx(E5,{browserOnline:t,backendUp:n,pendingSync:r}),l.jsx(S5,{isOnline:e,alerts:i}),l.jsx("div",{style:{display:"none"},className:"md-show",children:l.jsx(hp,{isOnline:e,alerts:i})}),l.jsx(hp,{isOnline:e,alerts:i}),l.jsxs("main",{className:"main-scroll",children:[l.jsx("div",{className:"main-inner",children:l.jsxs(a1,{children:[l.jsx(un,{path:"/",element:l.jsx(s1,{to:"/triage",replace:!0})}),l.jsx(un,{path:"/triage",element:l.jsx(O1,{addToLog:o})}),l.jsx(un,{path:"/reports",element:l.jsx($j,{})}),l.jsx(un,{path:"/log",element:l.jsx(Wj,{sessionLog:s})}),l.jsx(un,{path:"/riskmap",element:l.jsx(i5,{isActive:f})}),l.jsx(un,{path:"/referral",element:l.jsx(d5,{isActive:p})})]})}),l.jsx(C5,{})]})]}),l.jsx(j5,{})]})}function T5(){const[e,t]=b.useState(localStorage.getItem("token")?"app":"landing"),[n,r]=b.useState(navigator.onLine),[i,s]=b.useState(!0),[o,a]=b.useState(0),[u,c]=b.useState([]),[d,f]=b.useState(()=>JSON.parse(localStorage.getItem("jotnosathi_log")||"[]")),[p,g]=b.useState(()=>!!sessionStorage.getItem("jotnosathi_disclaimer_ack"));function y(){sessionStorage.setItem("jotnosathi_disclaimer_ack","1"),g(!0)}function v(){t("app")}function k(){localStorage.removeItem("token"),sessionStorage.removeItem("jotnosathi_disclaimer_ack"),g(!1),t("landing")}b.useEffect(()=>{const m=()=>r(!0),w=()=>{r(!1),s(!1)};return window.addEventListener("online",m),window.addEventListener("offline",w),()=>{window.removeEventListener("online",m),window.removeEventListener("offline",w)}},[]),b.useEffect(()=>{if(e!=="app")return;fetch(`${Me}/alerts`).then(P=>P.json()).then(P=>{var N;(N=P.alerts)!=null&&N.length&&c(P.alerts)}).catch(()=>{});let m=!1;async function w(){try{const P=await qd();m||a(P)}catch{}}async function C(){if(!navigator.onLine){s(!1);return}try{const P=new AbortController,N=setTimeout(()=>P.abort(),8e3),L=await fetch(`${Me}/health`,{signal:P.signal});if(clearTimeout(N),m)return;if(s(L.ok),L.ok){const V=await qd();if(V>0){a(V);const{remaining:G}=await N1(Me);m||a(G)}else m||a(0)}}catch{m||s(!1)}}const E=()=>w(),S=()=>s(!1);w(),C();const j=setInterval(C,2*60*1e3);return window.addEventListener("online",C),window.addEventListener("jotno-queue-updated",E),window.addEventListener("jotno-backend-down",S),()=>{m=!0,clearInterval(j),window.removeEventListener("online",C),window.removeEventListener("jotno-queue-updated",E),window.removeEventListener("jotno-backend-down",S)}},[e]);function x(m){f(w=>{const C=[m,...w].slice(0,50);return localStorage.setItem("jotnosathi_log",JSON.stringify(C)),C})}if(e==="landing")return l.jsx(A1,{onGetStarted:()=>t("login"),onLogin:()=>t("login")});if(e==="login")return l.jsx(P1,{onLogin:v,onBack:()=>t("landing")});const h=n&&i;return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:p5}),!p&&l.jsx(f5,{onAcknowledge:y}),l.jsx(m1,{children:l.jsx(N5,{isOnline:h,browserOnline:n,backendUp:i,pendingSync:o,alerts:u,sessionLog:d,addToLog:x,onLogout:k})})]})}Aa.createRoot(document.getElementById("root")).render(l.jsx(Cp.StrictMode,{children:l.jsx(T5,{})}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").catch(e=>console.warn("SW registration failed:",e))});export{P5 as c,U0 as g};
