parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"CkS7":[function(require,module,exports) {
var e=document.querySelector(".c-main-menu__hamburguer"),c=document.querySelector(".c-main-menu__list");e.addEventListener("click",function(){c.classList.toggle("c-main-menu__list--isactive"),e.classList.toggle("c-main-menu__hamburguer--noactive")});
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=t(require("./assets/js/responsive-menu"));function t(e){return e&&e.__esModule?e:{default:e}}var r="Modern WorkFlow";console.log("Hello ".concat(r));var n=document.querySelector(".c-main-menu__brand");n.addEventListener("mouseenter",function(e){e.target.style.transform="rotateY(180deg)"}),n.addEventListener("mouseleave",function(e){e.target.style.transform="rotateY(0deg)"});
},{"./assets/js/responsive-menu":"CkS7"}]},{},["Focm"], null)