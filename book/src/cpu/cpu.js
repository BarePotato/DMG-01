var CPU=function(e){var t={};function r(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(1),s=r(2);function i(e,t=2){const r=e.toString(16),n=t-r.length;return`${"0".repeat(n>0?n:0)}${r}`}t.toHex=i;class c extends n.Component{register(e,t){return t>255&&console.warn(`Register ${e} is over max: ${t}.`),t<0&&console.warn(`Register ${e} is under 0.`),n.createElement("div",{className:"reg"},n.createElement("div",{className:"regLabel"},e),n.createElement("div",{className:"regValue"},"0x",i(t,2)))}pc(){return n.createElement("div",{className:"pc"},n.createElement("div",{className:"pcLabel"},"PC"),n.createElement("div",{className:"pcValue"},"0x00"))}registers(){return n.createElement("div",{className:"registers"},n.createElement("div",{className:"column1"},this.register("A",0),this.register("B",0),this.register("D",0),this.register("H",0)),n.createElement("div",{className:"column2"},this.register("F",0),this.register("C",0),this.register("E",0),this.register("L",0)))}render(){return n.createElement("div",{className:"cpu"},this.pc(),this.registers())}}t.mount=function(e){s.render(n.createElement(c,null),e)}},function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM}]);
//# sourceMappingURL=cpu.js.map