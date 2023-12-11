(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),o=n.n(r),a=n(645),c=n.n(a)()(o());c.push([e.id,'* {\n    margin: 0;\n    box-sizing: border-box;\n\n    /* border: 1px solid limegreen; */\n}\n\n#content {\n    height: 100vh;\n    width: 100vw;\n}\n\n.form-input-container {\n    display: flex;\n    /* flex-direction: column; */\n    gap: 1rem;\n}\n\n.form-button-container {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.form-button {\n    height: 2rem;\n    width: 4rem;\n\n    border-radius: .2rem;\n    box-shadow: 0 3px 10px rgb(0,0,0,0.2);\n}\n\n.header {\n    height: 5vh;\n\n    padding: 1rem;\n    font-size: 1.2rem;\n\n    color: whitesmoke;\n    background: #233142; \n}\n\n.container {\n    /* height: 95vh; */\n    /* width: 100vw; */\n}\n\n#category-dialog, #todo-dialog {\n    margin: auto;\n\n    border-radius: .6rem;\n}\n\n#category-form, #todo-form {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.sidebar {\n    width: 15vw;\n    height: 95vh;\n\n    display: flex;\n    flex-direction: column;\n    background: #e3e3e3;\n}\n\n.sub-type {\n    height: 5%;\n    width: 100%;\n\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: .5rem;\n}\n\nimg[class^="delete-category"] {\n    height: 60%;\n}\n\n.sub-type:hover {\n    background: gray ;\n}\n\n.type-add-category {\n    width: 98%;\n\n    margin: 0 auto;\n    justify-content: center;\n    border: 2px solid #233142;\n    border-radius: .6rem;\n}\n\n.todo-list {\n\n}\n\n.todo-note {\n    height: 30vh;\n    width: 40vw;\n}\n\n.add-button {\n    height: 3rem;\n\n    z-index: 1;\n    position: absolute;\n    right: 3%;\n    bottom: 5%;\n}',""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var d=e[i],s=r.base?d[0]+r.base:d[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var d=r(e,o),s=0;s<a.length;s++){var l=n(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),c=n.n(a),i=n(565),d=n.n(i),s=n(216),l=n.n(s),u=n(589),p=n.n(u),m=n(28),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=c().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const g=n.p+"9c6dcc0f7dbbb9b42bb9.svg";function h(e){const t=localStorage.getItem("categories"),n=JSON.parse(t)||{};delete n[e],localStorage.setItem("categories",JSON.stringify(n))}function b(){const e=[],t=localStorage.getItem("categories"),n=JSON.parse(t)||{};for(let[t,r]of Object.entries(n))e.push(t);return e}function y(){document.getElementById("category-dialog").showModal()}function v(e,t){const n=new Image;n.classList.add(`delete-category:${t}`),n.src=g,n.addEventListener("click",E),e.append(n)}function E(e){const t=e.target.className.split(":").pop(),n=document.getElementsByClassName("sidebar")[0];for(let e of n.childNodes)if(e.firstChild.textContent==t.replace("_"," ")){n.removeChild(e),h(t);break}}const L=n.p+"2230aacc39c280685ff8.svg";!function(){const e=document.getElementById("content");e.appendChild(function(){const e=document.createElement("div");e.classList.add("header");const t=document.createElement("div");return t.innerHTML="TODO",e.appendChild(t),e}());const t=document.createElement("div");t.classList.add("container"),localStorage.setItem("categories",JSON.stringify({ALL_NOTES:[]})),t.appendChild(function(){const e=document.createElement("div");e.classList.add("sidebar");const t=document.createElement("div");t.innerHTML="All Notes",t.classList.add("sub-type"),e.appendChild(t);const n=document.createElement("div");n.innerHTML="Bin",n.classList.add("sub-type"),e.appendChild(n);const r=document.createElement("div");return r.innerHTML="Add category",r.classList.add("sub-type"),r.classList.add("type-add-category"),r.addEventListener("click",y),e.appendChild(r),function(e){const t=b();for(let n of t){if("ALL_NOTES"==n)continue;const t=document.createElement("div");t.innerHTML=n.replace("_"," "),t.classList.add("sub-type"),v(t,n),e.insertBefore(t,e.lastChild)}}(e),e}()),t.appendChild(function(){const e=document.createElement("dialog");e.id="category-dialog";const t=document.createElement("form");t.id="category-form";const n=document.createElement("div");n.classList.add("form-input-container");const r=document.createElement("label");r.innerHTML="Category Name:",r.setAttribute("for","category-name"),n.appendChild(r);const o=document.createElement("input");o.setAttribute("name","category"),o.setAttribute("id","category-name"),o.setAttribute("required",!0),n.appendChild(o);const a=document.createElement("div");a.classList.add("form-button-container");const c=document.createElement("button");c.classList.add("form-button"),c.innerText="confirm",c.addEventListener("click",(n=>{const r=document.getElementById("category-form"),o=new FormData(r),a={};o.forEach(((e,t)=>{a[t]=e})),a.category.includes("_")?alert("Underscore(_) are not allowed in category names"):(function(e){console.log(e);const t=document.getElementsByClassName("sidebar")[0],n=document.createElement("div");n.innerHTML=e.category,n.classList.add("sub-type"),v(n,e.category.replace(" ","_")),t.insertBefore(n,t.lastChild)}(a),a.category=a.category.replace(" ","_"),function(e){const t=localStorage.getItem("categories"),n=JSON.parse(t);n[e.category]=[],localStorage.setItem("categories",JSON.stringify(n))}(a),n.preventDefault(),t.reset(),e.close())})),a.appendChild(c);const i=document.createElement("button");return i.classList.add("form-button"),i.setAttribute("type","button"),i.innerHTML="cancel",i.addEventListener("click",(()=>{e.close(),t.reset()})),a.appendChild(i),t.appendChild(n),t.appendChild(a),e.appendChild(t),e}()),t.appendChild(function(e){const t=document.createElement("div");t.classList.add("todo-list");const n=function(){const e=localStorage.getItem("categories");return JSON.parse(e)||{}}();if("ALL"==e)for(let[e,t]of Object.entries(n)){const e=document.createElement("div"),n=document.createElement("p");n.innerHTML=n,e.appendChild(n);for(let e of t);}return t}("ALL")),t.appendChild(function(){const e=document.createElement("dialog");e.id="todo-dialog";const t=document.createElement("form");t.id="todo-form";const n=document.createElement("div");n.classList.add("form-input-container");const r=document.createElement("label");r.innerHTML="Due date:",r.setAttribute("for","due-date"),n.appendChild(r);const o=document.createElement("input");o.setAttribute("type","date"),o.setAttribute("name","due-date"),o.setAttribute("id","due-date"),o.setAttribute("required",!0),n.appendChild(o),t.appendChild(n);const a=document.createElement("div");a.classList.add("form-input-container");const c=document.createElement("label");c.innerHTML="Category:",c.setAttribute("for","category"),a.appendChild(c);const i=document.createElement("select");i.setAttribute("form","todo-form"),i.setAttribute("name","category"),i.setAttribute("id","category"),i.setAttribute("required",!0),b().forEach((function(e,t){const n=document.createElement("option");n.value=e,n.text=e.replace("_"," "),i.appendChild(n)})),a.appendChild(i),t.appendChild(a);const d=document.createElement("div");d.classList.add("form-input-container");const s=document.createElement("label");s.innerHTML="Priority:",s.setAttribute("for","priority"),d.appendChild(s);const l=document.createElement("select");l.setAttribute("form","todo-form"),l.setAttribute("type","select"),l.setAttribute("name","priority"),l.setAttribute("id","priority"),l.setAttribute("required",!0),["p2","p1","p0"].forEach((function(e,t){const n=document.createElement("option");n.value=e,n.text=e,l.appendChild(n)})),d.appendChild(l),t.appendChild(d);const u=document.createElement("textarea");u.classList.add("todo-note"),u.setAttribute("name","todo"),u.setAttribute("rows","50"),u.setAttribute("cols","80"),t.appendChild(u);const p=document.createElement("div");p.classList.add("form-button-container");const m=document.createElement("button");m.classList.add("form-button"),m.setAttribute("type","submit"),m.innerText="confirm",m.addEventListener("click",(t=>{const n=document.getElementById("todo-form"),r=new FormData(n),o={};r.forEach(((e,t)=>{o[t]=e})),function(e){const t=JSON.parse(localStorage.getItem("categories"));t[e.category].push(e),localStorage.setItem("categories",JSON.stringify(t))}(o),t.preventDefault(),e.close()})),p.appendChild(m);const f=document.createElement("button");return f.classList.add("form-button"),f.setAttribute("type","button"),f.innerHTML="cancel",f.addEventListener("click",(()=>{e.close()})),p.appendChild(f),t.appendChild(p),e.appendChild(t),e}()),t.appendChild(function(){let e=new Image;return e.classList.add("add-button"),e.src=L,e.addEventListener("click",(()=>{document.getElementById("todo-dialog").showModal()})),e}()),e.append(t)}()})()})();