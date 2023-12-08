(()=>{var e={28:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"* {\n    margin: 0;\n    box-sizing: border-box;\n\n    /* border: 1px solid limegreen; */\n}\n\n#content {\n    height: 100vh;\n    width: 100vw;\n}\n\n.form-input-container {\n    display: flex;\n    gap: 1rem;\n}\n\n.form-button-container {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.form-button {\n    height: 2rem;\n    width: 4rem;\n\n    border-radius: .2rem;\n    box-shadow: 0 3px 10px rgb(0,0,0,0.2);\n}\n\n.header {\n    height: 5vh;\n\n    padding: 1rem;\n    font-size: 1.2rem;\n\n    color: whitesmoke;\n    background: #233142; \n}\n\n.container {\n    /* height: 95vh; */\n    /* width: 100vw; */\n}\n\n#category-dialog {\n    margin: auto;\n\n    border-radius: .6rem;\n}\n\n#category-form {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.sidebar {\n    width: 15vw;\n    height: 95vh;\n\n    display: flex;\n    flex-direction: column;\n    background: #e3e3e3;\n}\n\n.sub-type {\n    height: 5%;\n    width: 100%;\n\n    display: flex;\n    align-items: center;\n    padding: .5rem;\n}\n",""]);const c=i},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},319:e=>{e.exports={addCategory:function(e){console.log(e);let t=localStorage.getItem("categories");if(null!=t){let n=JSON.parse(t);n[e.category]=[],localStorage.setItem("categories",JSON.stringify(n))}else{let t={};t[e.category]=[],localStorage.setItem("categories",JSON.stringify(t))}}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),c=n(565),s=n.n(c),d=n(216),l=n.n(d),u=n(589),p=n.n(u),m=n(28),f={};function h(e){document.getElementById("category-dialog").showModal()}f.styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var v=n(319);!function(){const e=document.getElementById("content");e.appendChild(function(){const e=document.createElement("div");e.classList.add("header");const t=document.createElement("div");return t.innerHTML="TODO",e.appendChild(t),e}());const t=document.createElement("div");t.classList.add("container"),t.appendChild(function(){const e=document.createElement("div");e.classList.add("sidebar");const t=document.createElement("div");t.innerHTML="All Notes",t.classList.add("sub-type"),e.appendChild(t);const n=document.createElement("div");n.innerHTML="Bin",n.classList.add("sub-type"),e.appendChild(n);const r=document.createElement("div");return r.innerHTML="Add category",r.classList.add("sub-type"),r.addEventListener("click",h),e.appendChild(r),e}()),t.appendChild(function(){const e=document.createElement("dialog");e.id="category-dialog";const t=document.createElement("form");t.id="category-form";const n=document.createElement("div");n.classList.add("form-input-container");const r=document.createElement("label");r.innerHTML="Category Name:",r.setAttribute("for","category-name"),n.appendChild(r);const o=document.createElement("input");o.setAttribute("name","category"),o.setAttribute("id","category-name"),o.setAttribute("required",!0),n.appendChild(o);const a=document.createElement("div");a.classList.add("form-button-container");const i=document.createElement("button");i.classList.add("form-button"),i.innerText="confirm",i.addEventListener("click",(t=>{const n=document.getElementById("category-form"),r=new FormData(n),o={};r.forEach(((e,t)=>{o[t]=e})),(0,v.addCategory)(o),t.preventDefault(),e.close()})),a.appendChild(i);const c=document.createElement("button");return c.classList.add("form-button"),c.setAttribute("type","button"),c.innerHTML="cancel",c.addEventListener("click",(()=>{e.close()})),a.appendChild(c),t.appendChild(n),t.appendChild(a),e.appendChild(t),e}()),e.append(t)}()})()})();