!function(r){var e={};function t(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return r[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=r,t.c=e,t.d=function(r,e,n){t.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:n})},t.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,e){if(1&e&&(r=t(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var o in r)t.d(n,o,function(e){return r[e]}.bind(null,o));return n},t.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(e,"a",e),e},t.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},t.p="",t(t.s=1)}([function(r,e){r.exports=react},function(r,e,t){"use strict";t.r(e),t.d(e,"Context",(function(){return s})),t.d(e,"ViewController",(function(){return m}));var n={};t.r(n),t.d(n,"Emitter",(function(){return a})),t.d(n,"create",(function(){return f}));var o={};t.r(o),t.d(o,"isObject",(function(){return b})),t.d(o,"isArray",(function(){return d}));var u={};t.r(u),t.d(u,"create",(function(){return v})),t.d(u,"observe",(function(){return p})),t.d(u,"observeObject",(function(){return h})),t.d(u,"observeArray",(function(){return y})),t.d(u,"patchMethod",(function(){return j}));var i=t(0),c=t.n(i);function s(r,e){return function(t,n){var o=t.render;t.render=function(){for(var t=arguments.length,u=new Array(t),i=0;i<t;i++)u[i]=arguments[i];return c.a.createElement(r.Consumer,{children:r=>{var t=r;return e&&(t=e(r)),t._onchange&&t._onchange(()=>this.forceUpdate()),this[n]=t,o.bind(this)(...u)}})}}}class a{constructor(){this.subscribers=[]}subscribe(r){return this.subscribers.push(r),{unsubscribe:()=>this.subscribers=this.subscribers.filter(e=>e!==r)}}emit(r){for(var e of this.subscribers)e(r)}}var f=()=>new a;function b(r){return r&&"object"==typeof r}function d(r){return Array.isArray(r)}var l=["push","pop","shift","unshift","splice","sort","reverse"];function v(r){var e=n.create(),t=p(r,e);return t._onchange=e.subscribe.bind(e),t}function p(r,e){return o.isArray(r)?y(r,e):o.isObject(r)?h(r,e):void 0}var h=(r,e)=>{var t={},n=function(n){return o.isArray(r[n])?(t[n]=y(r[n],e),"continue"):o.isObject(r[n])?(t[n]=h(r[n],e),"continue"):void Object.defineProperty(t,n,{enumerable:!0,get:()=>r[n],set:t=>{if(r[n]===t)return!0;r[n]=t,e.emit()}})};for(var u in r)n(u);return t},y=(r,e)=>{for(var t=[...r],n=0;n<t.length;n++)o.isArray(t[n])?t[n]=y(t[n],e):o.isObject(t[n])&&(t[n]=h(t[n],e));var u=function(n){j(t,n,(function(){r[n](...arguments),e.emit()}))};for(var i of l)u(i);return t},j=(r,e,t)=>{var n=r[e];r["$"+e]=r[e],r[e]=function(){n.apply(r,arguments),t(...arguments)}},O=["state","_reactInternalFiber","_reactInternalInstance","props","context","refs","updater","isReactComponent","setState","forceUpdate"];function m(){return function(r){return class extends r{constructor(){var r;super(...arguments),r=this;var e={};for(var t of Object.keys(this).filter(r=>!O.includes(r)))e[t]=this[t];var n=u.create(e);n._onchange(()=>this.forceUpdate());var o=function(t){Object.defineProperty(r,t,{enumerable:!0,get:()=>n[t],set:r=>{if(e[t]===r)return!0;n[t]=r}})};for(var i of Object.keys(e))o(i)}}}}}]);