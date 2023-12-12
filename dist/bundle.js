(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([e.id,'* {\n    margin: 0;\n    box-sizing: border-box;\n\n    /* border: 1px solid limegreen; */\n}\n\n#content {\n    height: 100vh;\n    width: 100vw;\n}\n\n.form-input-container {\n    display: flex;\n    /* flex-direction: column; */\n    gap: 1rem;\n}\n\n.form-button-container {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.form-button {\n    height: 2rem;\n    width: 4rem;\n\n    border-radius: .2rem;\n    box-shadow: 0 3px 10px rgb(0,0,0,0.2);\n}\n\n.header {\n    height: 5vh;\n\n    padding: 1rem;\n    font-size: 1.2rem;\n\n    color: whitesmoke;\n    background: #233142; \n}\n\n.container {\n    /* height: 95vh; */\n    /* width: 100vw; */\n    display: flex;\n}\n\n#category-dialog, #todo-dialog {\n    margin: auto;\n\n    border-radius: .6rem;\n}\n\n#category-form, #todo-form {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.sidebar {\n    width: 15vw;\n    height: 95vh;\n\n    display: flex;\n    flex-direction: column;\n    background: #e3e3e3;\n}\n\n.sub-type {\n    height: 5%;\n    width: 100%;\n\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: .5rem;\n}\n\nimg[class^="delete-category"] {\n    height: 60%;\n}\n\n.sub-type:hover {\n    background: gray ;\n}\n\n.type-add-category {\n    width: 98%;\n\n    margin: 0 auto;\n    justify-content: center;\n    border: 2px solid #233142;\n    border-radius: .6rem;\n}\n\n.todo-list {\n    width: 100%;\n    padding: .2rem;\n}\n\n.each-category {\n    display: flex;\n    flex-direction: column;\n    gap: .5rem;\n}\n\n.each-todo {\n    height: 5vh;\n\n    padding: .5rem;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    background-color: beige;\n}\n\n.each-todo-subinfo {\n    display: flex;\n    gap: 1rem;\n    align-items: center;\n}\n\n.todo-note {\n    height: 30vh;\n    width: 40vw;\n}\n\n.add-button {\n    height: 3rem;\n\n    z-index: 1;\n    position: absolute;\n    right: 3%;\n    bottom: 5%;\n}',""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],s=o.base?d[0]+o.base:d[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var d=o(e,r),s=0;s<a.length;s++){var l=n(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),i=n.n(a),c=n(565),d=n.n(c),s=n(216),l=n.n(s),u=n(589),p=n.n(u),m=n(28),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const g=n.p+"9c6dcc0f7dbbb9b42bb9.svg";function h(e){const t=localStorage.getItem("categories"),n=JSON.parse(t)||{};delete n[e],localStorage.setItem("categories",JSON.stringify(n))}function b(){const e=[],t=localStorage.getItem("categories"),n=JSON.parse(t)||{};for(let[t,o]of Object.entries(n))e.push(t);return e}function y(){document.getElementById("category-dialog").showModal()}function v(e,t){const n=new Image;n.classList.add(`delete-category:${t}`),n.src=g,n.addEventListener("click",E),e.append(n)}function E(e){const t=e.target.className.split(":").pop(),n=document.getElementsByClassName("sidebar")[0];for(let e of n.childNodes)if(e.firstChild.textContent==t.replace("_"," ")){n.removeChild(e),h(t);break}}const L=n.p+"2230aacc39c280685ff8.svg";!function(){const e=document.getElementById("content");e.appendChild(function(){const e=document.createElement("div");e.classList.add("header");const t=document.createElement("div");return t.innerHTML="TODO",e.appendChild(t),e}());const t=document.createElement("div");t.classList.add("container"),function(){if(null==localStorage.getItem("categories")){const e={ALL_NOTES:[]};localStorage.setItem("categories",JSON.stringify(e))}}(),t.appendChild(function(){const e=document.createElement("div");e.classList.add("sidebar");const t=document.createElement("div");t.innerHTML="All Notes",t.classList.add("sub-type"),e.appendChild(t);const n=document.createElement("div");n.innerHTML="Bin",n.classList.add("sub-type"),e.appendChild(n);const o=document.createElement("div");return o.innerHTML="Add category",o.classList.add("sub-type"),o.classList.add("type-add-category"),o.addEventListener("click",y),e.appendChild(o),function(e){const t=b();for(let n of t){if("ALL_NOTES"==n)continue;const t=document.createElement("div");t.innerHTML=n.replace("_"," "),t.classList.add("sub-type"),v(t,n),e.insertBefore(t,e.lastChild)}}(e),e}()),t.appendChild(function(){const e=document.createElement("dialog");e.id="category-dialog";const t=document.createElement("form");t.id="category-form";const n=document.createElement("div");n.classList.add("form-input-container");const o=document.createElement("label");o.innerHTML="Category Name:",o.setAttribute("for","category-name"),n.appendChild(o);const r=document.createElement("input");r.setAttribute("name","category"),r.setAttribute("id","category-name"),r.setAttribute("required",""),n.appendChild(r);const a=document.createElement("div");a.classList.add("form-button-container");const i=document.createElement("button");i.classList.add("form-button"),i.innerText="confirm",i.addEventListener("click",(n=>{if(!t.checkValidity())return;const o=document.getElementById("category-form"),r=new FormData(o),a={};r.forEach(((e,t)=>{a[t]=e})),a.category.includes("_")?alert("Underscore(_) are not allowed in category names"):(function(e){console.log(e);const t=document.getElementsByClassName("sidebar")[0],n=document.createElement("div");n.innerHTML=e.category,n.classList.add("sub-type"),v(n,e.category.replace(" ","_")),t.insertBefore(n,t.lastChild)}(a),a.category=a.category.replace(" ","_"),function(e){const t=localStorage.getItem("categories"),n=JSON.parse(t);n[e.category]=[],localStorage.setItem("categories",JSON.stringify(n))}(a),n.preventDefault(),t.reset(),e.close())})),a.appendChild(i);const c=document.createElement("button");return c.classList.add("form-button"),c.setAttribute("type","button"),c.innerHTML="cancel",c.addEventListener("click",(()=>{e.close(),t.reset()})),a.appendChild(c),t.appendChild(n),t.appendChild(a),e.appendChild(t),e}()),t.appendChild(function(e){const t=document.createElement("div");t.classList.add("todo-list");const n=function(){const e=localStorage.getItem("categories");return JSON.parse(e)||{}}();if("ALL"==e)for(let[e,o]of Object.entries(n)){const n=document.createElement("div");n.classList.add("each-category");const r=document.createElement("p");r.innerHTML=e.replace("_"," ")+":",n.appendChild(r);for(let e of o){const t=document.createElement("div");t.classList.add("each-todo");const o=document.createElement("div");console.log(e),o.innerHTML=e.todoTitle;const r=document.createElement("div");r.classList.add("each-todo-subinfo");const a=document.createElement("div");a.innerHTML=e.priority,r.append(a);const i=document.createElement("div");i.innerHTML=e["due-date"],r.appendChild(i),t.appendChild(o),t.appendChild(r),n.appendChild(t)}t.appendChild(n)}return t}("ALL")),t.appendChild(function(){const e=document.createElement("dialog");e.id="todo-dialog";const t=document.createElement("form");t.id="todo-form";const n=document.createElement("div");n.classList.add("form-input-container");const o=document.createElement("label");o.innerHTML="Due date:",o.setAttribute("for","due-date"),n.appendChild(o);const r=document.createElement("input");r.setAttribute("type","date"),r.setAttribute("name","due-date"),r.setAttribute("id","due-date"),r.setAttribute("required",""),n.appendChild(r),t.appendChild(n);const a=document.createElement("div");a.classList.add("form-input-container");const i=document.createElement("label");i.innerHTML="Category:",i.setAttribute("for","category"),a.appendChild(i);const c=document.createElement("select");c.setAttribute("form","todo-form"),c.setAttribute("name","category"),c.setAttribute("id","category"),c.setAttribute("required",""),b().forEach((function(e,t){const n=document.createElement("option");n.value=e,n.text=e.replace("_"," "),c.appendChild(n)})),a.appendChild(c),t.appendChild(a);const d=document.createElement("div");d.classList.add("form-input-container");const s=document.createElement("label");s.innerHTML="Priority:",s.setAttribute("for","priority"),d.appendChild(s);const l=document.createElement("select");l.setAttribute("form","todo-form"),l.setAttribute("name","priority"),l.setAttribute("id","priority"),l.setAttribute("required",""),["p2","p1","p0"].forEach((function(e,t){const n=document.createElement("option");n.value=e,n.text=e,l.appendChild(n)})),d.appendChild(l),t.appendChild(d);const u=document.createElement("div");u.classList.add("form-input-container");const p=document.createElement("label");p.innerHTML="Todo:",p.setAttribute("for","todoTitle"),u.appendChild(p);const m=document.createElement("input");m.setAttribute("form","todo-form"),m.setAttribute("name","todoTitle"),m.setAttribute("id","todoTitle"),m.setAttribute("required",""),u.appendChild(m),t.append(u);const f=document.createElement("textarea");f.classList.add("todo-note"),f.setAttribute("name","todo"),f.setAttribute("rows","50"),f.setAttribute("cols","80"),t.appendChild(f);const g=document.createElement("div");g.classList.add("form-button-container");const h=document.createElement("button");h.classList.add("form-button"),h.setAttribute("type","submit"),h.innerText="confirm",h.addEventListener("click",(n=>{if(!t.checkValidity())return;const o=document.getElementById("todo-form"),r=new FormData(o),a={};r.forEach(((e,t)=>{a[t]=e})),function(e){const t=JSON.parse(localStorage.getItem("categories"));t[e.category].push(e),localStorage.setItem("categories",JSON.stringify(t))}(a),n.preventDefault(),e.close()})),g.appendChild(h);const y=document.createElement("button");return y.classList.add("form-button"),y.setAttribute("type","button"),y.innerHTML="cancel",y.addEventListener("click",(()=>{e.close()})),g.appendChild(y),t.appendChild(g),e.appendChild(t),e}()),t.appendChild(function(){let e=new Image;return e.classList.add("add-button"),e.src=L,e.addEventListener("click",(()=>{document.getElementById("todo-dialog").showModal()})),e}()),e.append(t)}()})()})();