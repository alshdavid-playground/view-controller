!function(r){var e={};function t(n){if(e[n])return e[n].exports;var u=e[n]={i:n,l:!1,exports:{}};return r[n].call(u.exports,u,u.exports,t),u.l=!0,u.exports}t.m=r,t.c=e,t.d=function(r,e,n){t.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:n})},t.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,e){if(1&e&&(r=t(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var u in r)t.d(n,u,function(e){return r[e]}.bind(null,u));return n},t.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(e,"a",e),e},t.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},t.p="",t(t.s=1)}([function(r,e){r.exports=react},function(r,e,t){"use strict";t.r(e),t.d(e,"Context",(function(){return j})),t.d(e,"ViewController",(function(){return m}));var n={};t.r(n),t.d(n,"Emitter",(function(){return s})),t.d(n,"create",(function(){return a}));var u={};t.r(u),t.d(u,"isObject",(function(){return f})),t.d(u,"isArray",(function(){return b}));var i={};t.r(i),t.d(i,"create",(function(){return l})),t.d(i,"observe",(function(){return v})),t.d(i,"observeObject",(function(){return p})),t.d(i,"observeArray",(function(){return y})),t.d(i,"patchMethod",(function(){return h}));var o=t(0),c=t.n(o);class s{constructor(){this.subscribers=[]}subscribe(r){return this.subscribers.push(r),{unsubscribe:()=>this.subscribers=this.subscribers.filter(e=>e!==r)}}emit(r){for(var e of this.subscribers)e(r)}}var a=()=>new s;function f(r){return r&&"object"==typeof r}function b(r){return Array.isArray(r)}var d=["push","pop","shift","unshift","splice","sort","reverse"];function l(r){var e=n.create(),t=v(r,e);return t.subscribe=e.subscribe.bind(e),t}function v(r,e){return u.isArray(r)?y(r,e):u.isObject(r)?p(r,e):void 0}var p=(r,e)=>{var t={},n=function(n){return u.isArray(r[n])?(t[n]=y(r[n],e),"continue"):u.isObject(r[n])?(t[n]=p(r[n],e),"continue"):void Object.defineProperty(t,n,{enumerable:!0,get:()=>r[n],set:t=>{if(r[n]===t)return!0;r[n]=t,e.emit()}})};for(var i in r)n(i);return t},y=(r,e)=>{for(var t=[...r],n=0;n<t.length;n++)u.isArray(t[n])?t[n]=y(t[n],e):u.isObject(t[n])&&(t[n]=p(t[n],e));var i=function(n){h(t,n,(function(){r[n](...arguments),e.emit()}))};for(var o of d)i(o);return t},h=(r,e,t)=>{var n=r[e];r["$"+e]=r[e],r[e]=function(){n.apply(r,arguments),t(...arguments)}};function j(r,e){return function(t,n){var u=t.render;t.render=function(){for(var t=arguments.length,o=new Array(t),s=0;s<t;s++)o[s]=arguments[s];return c.a.createElement(r.Consumer,{children:r=>{var t=r;e&&(t=e(r));var c=i.create(t);return c.subscribe(()=>this.forceUpdate()),this[n]=c,u.bind(this)(...o)}})}}}var O=["state","_reactInternalFiber","_reactInternalInstance","props","context","refs","updater","isReactComponent","setState","forceUpdate"];function m(){return function(r){return class extends r{constructor(){var r;super(...arguments),r=this;var e={};for(var t of Object.keys(this).filter(r=>!O.includes(r)))e[t]=this[t];var n=i.create(e);n.subscribe(()=>this.forceUpdate());var u=function(t){Object.defineProperty(r,t,{enumerable:!0,get:()=>n[t],set:r=>{if(e[t]===r)return!0;n[t]=r}})};for(var o of Object.keys(e))u(o)}}}}}]);