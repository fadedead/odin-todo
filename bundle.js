(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([e.id,':root {\n    --bg-color: #f4f3f3;\n    --sidebar-bg-color: #dfdfdf;\n    --header-bg-color: #505458;\n}\n\n* {\n    margin: 0;\n    box-sizing: border-box;\n}\n\n#content {\n    height: 100vh;\n    width: 100vw;\n\n    background-color: var(--bg-color);\n}\n\n.form-input-container {\n    display: flex;\n    gap: 1rem;\n}\n\n.form-button-container {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.form-button {\n    height: 2rem;\n    width: 4rem;\n\n    border-radius: .2rem;\n    box-shadow: 0 3px 10px rgb(0, 0, 0, 0.2);\n}\n\n.header {\n    height: 5vh;\n\n    display: flex;\n    align-items: center;\n    padding-left: .5rem;\n    font-size: 1.2rem;\n\n    color: whitesmoke;\n    background: var(--header-bg-color);\n}\n\n.container {\n    display: flex;\n}\n\n#category-dialog,\n#todo-dialog,\n#note-dialog {\n    margin: auto;\n\n    border-radius: .6rem;\n}\n\n#category-form,\n#todo-form,\n#note-form {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.sidebar {\n    width: 15vw;\n    height: 95vh;\n\n    display: flex;\n    flex-direction: column;\n    background: var(--sidebar-bg-color);\n}\n\n.sub-type {\n    height: 5%;\n    width: 100%;\n\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: .5rem;\n}\n\nimg[class^="delete-category"] {\n    height: 60%;\n}\n\n.sub-type:hover {\n    cursor: pointer;\n    background: gray;\n}\n\n.type-add-category {\n    width: 98%;\n\n    margin: 0 auto;\n    justify-content: center;\n    border: 2px solid #233142;\n    border-radius: .6rem;\n}\n\n.todo-list {\n    height: 95vh;\n    width: 85vw;\n    padding: .2rem;\n\n    overflow-y: scroll;\n}\n\n.category-title {\n    font-size: 1.2rem;\n    font-weight: 500;\n}\n\n.each-category {\n    display: flex;\n    flex-direction: column;\n    gap: .5rem;\n    padding: 1rem;\n}\n\n.each-todo {\n    height: 5vh;\n\n    padding: .5rem;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    cursor: pointer;\n\n    border-radius: .6rem;\n}\n\n.each-todo-subinfo {\n    display: flex;\n    gap: 1rem;\n    align-items: center;\n}\n\n.todo-priority-p0 {\n    background-color: #ffb6b9;\n}\n\n.todo-priority-p1 {\n    background-color: #fae3d9;\n}\n\n.todo-priority-p2 {\n    background-color: #bbded6;\n}\n\n.delete-todo-button {\n    height: 1.2rem;\n}\n\n.todo-note {\n    height: 30vh;\n    width: 40vw;\n}\n\n.add-button {\n    height: 3rem;\n\n    z-index: 1;\n    position: absolute;\n    right: 3%;\n    bottom: 5%;\n}',""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],s=o.base?d[0]+o.base:d[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var d=o(e,r),s=0;s<a.length;s++){var l=n(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),i=n.n(a),c=n(565),d=n.n(c),s=n(216),l=n.n(s),u=n(589),p=n.n(u),m=n(28),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const g=n.p+"9c6dcc0f7dbbb9b42bb9.svg";function h(e){const t=localStorage.getItem("categories"),n=JSON.parse(t)||{};delete n[e],localStorage.setItem("categories",JSON.stringify(n))}function b(){const e=[],t=localStorage.getItem("categories"),n=JSON.parse(t)||{};for(let[t,o]of Object.entries(n))e.push(t);return e}const y=n.p+"2230aacc39c280685ff8.svg";function v(e){const t=document.createElement("dialog");t.id="note-dialog";const n=document.createElement("form");n.id="note-form";const o=document.createElement("textarea");o.classList.add("todo-note"),o.setAttribute("name","todoNote"),o.setAttribute("rows","50"),o.setAttribute("cols","80"),o.defaultValue=e.todoNote,n.appendChild(o);const r=document.createElement("div");r.classList.add("form-button-container");const a=document.createElement("button");a.classList.add("form-button"),a.setAttribute("type","submit"),a.innerText="confirm",a.addEventListener("click",(o=>{if(!n.checkValidity())return;const r=document.getElementById("note-form"),a=new FormData(r),i={};a.forEach(((e,t)=>{i[t]=e})),e.todoNote=i.todoNote,function(e){const t=JSON.parse(localStorage.getItem("categories"));for(let n of t[e.category])n.category==e.category&&n.todoTitle==e.todoTitle&&n.priority==e.priority&&n.dueDate==e.dueDate&&(n.todoNote=e.todoNote);localStorage.setItem("categories",JSON.stringify(t))}(e),o.preventDefault(),t.close(),document.body.removeChild(t)})),r.appendChild(a);const i=document.createElement("button");return i.classList.add("form-button"),i.setAttribute("type","button"),i.innerHTML="cancel",i.addEventListener("click",(()=>{t.close(),document.body.removeChild(t)})),r.appendChild(i),n.appendChild(r),t.appendChild(n),t}function E(e){const t=document.createElement("div");t.classList.add("todo-list");const n=function(){const e=localStorage.getItem("categories");return JSON.parse(e)||{}}();if("ALL"==e)for(let[e,o]of Object.entries(n)){if(o.length<1)continue;const n=document.createElement("div");n.classList.add("each-category");const r=document.createElement("p");r.classList.add("category-title"),r.innerHTML=e.replace("_"," ")+":",n.appendChild(r);const a=C(o);a.sort(((e,t)=>e[0][1]!=t[0][1]?e[0][1]-t[0][1]:new Date(e[1])-new Date(t[1])));for(let e of a)n.appendChild(e[2]);t.appendChild(n)}else{if(n[e].length<1)return null;const o=document.createElement("div");o.classList.add("each-category");const r=document.createElement("p");r.classList.add("category-title"),r.innerHTML=e.replace("_"," ")+":",o.appendChild(r);const a=C(n[e]);a.sort(((e,t)=>e[0][1]!=t[0][1]?e[0][1]-t[0][1]:new Date(e[1])-new Date(t[1])));for(let e of a)o.appendChild(e[2]);t.appendChild(o)}return t}function C(e){const t=[];for(let n of e){const e=document.createElement("div");e.classList.add("each-todo");const o=document.createElement("div");o.innerHTML=n.todoTitle;const r=document.createElement("div");r.classList.add("each-todo-subinfo");const a=document.createElement("div");switch(a.innerHTML=n.priority,r.append(a),n.priority){case"p0":e.classList.add("todo-priority-p0");break;case"p1":e.classList.add("todo-priority-p1");break;case"p2":e.classList.add("todo-priority-p2")}const i=document.createElement("div");i.innerHTML=n.dueDate,r.appendChild(i),e.appendChild(o),e.appendChild(r),e.addEventListener("click",(()=>{const e=v(n);document.body.appendChild(e),e.showModal()})),L(r,e,n),t.push([n.priority,n.dueDate,e])}return t}function L(e,t,n){const o=new Image;o.classList.add("delete-todo-button"),o.src=g,o.addEventListener("click",(e=>{t.parentNode.removeChild(t),function(e,t,n,o){const r=JSON.parse(localStorage.getItem("categories"));for(let[a,i]of r[e].entries())i.category==e&&i.todoTitle==t&&i.priority==n&&i.dueDate==o&&r[e].splice(a,1);localStorage.setItem("categories",JSON.stringify(r))}(n.category,n.todoTitle,n.priority,n.dueDate),e.stopPropagation()})),e.append(o)}function A(){const e=function(){const e=document.createElement("dialog");e.id="category-dialog";const t=document.createElement("form");t.id="category-form";const n=document.createElement("div");n.classList.add("form-input-container");const o=document.createElement("label");o.innerHTML="Category Name:",o.setAttribute("for","category-name"),n.appendChild(o);const r=document.createElement("input");r.setAttribute("name","category"),r.setAttribute("id","category-name"),r.setAttribute("required",""),n.appendChild(r);const a=document.createElement("div");a.classList.add("form-button-container");const i=document.createElement("button");i.classList.add("form-button"),i.innerText="confirm",i.addEventListener("click",(n=>{if(!t.checkValidity())return;const o=document.getElementById("category-form"),r=new FormData(o),a={};r.forEach(((e,t)=>{a[t]=e})),a.category.includes("_")?alert("Underscore(_) are not allowed in category names"):(function(e){const t=document.getElementsByClassName("sidebar")[0],n=document.createElement("div");n.innerHTML=e.category,n.classList.add("sub-type"),n.addEventListener("click",(()=>{const t=E(e.category);if(!t)return void alert("No todos in that category");const n=document.getElementsByClassName("container")[0],o=document.getElementsByClassName("todo-list")[0];n.removeChild(o),n.appendChild(t)})),w(n,e.category.replace(" ","_")),t.insertBefore(n,t.lastChild)}(a),a.category=a.category.replace(" ","_"),function(e){const t=localStorage.getItem("categories"),n=JSON.parse(t);n[e.category]=[],localStorage.setItem("categories",JSON.stringify(n))}(a),n.preventDefault(),t.reset(),e.close(),document.body.removeChild(e))})),a.appendChild(i);const c=document.createElement("button");return c.classList.add("form-button"),c.setAttribute("type","button"),c.innerHTML="cancel",c.addEventListener("click",(()=>{e.close(),t.reset(),document.body.removeChild(e)})),a.appendChild(c),t.appendChild(n),t.appendChild(a),e.appendChild(t),e}();document.body.appendChild(e),e.showModal()}function w(e,t){const n=new Image;n.classList.add(`delete-category:${t}`),n.src=g,n.addEventListener("click",T),e.append(n)}function T(e){const t=e.target.className.split(":").pop(),n=document.getElementsByClassName("sidebar")[0];for(let e of n.childNodes)if(e.firstChild.textContent==t.replace("_"," ")){n.removeChild(e),h(t);break}location.reload()}!function(){const e=document.getElementById("content");e.appendChild(function(){const e=document.createElement("div");e.classList.add("header");const t=document.createElement("div");return t.innerHTML="TODO",e.appendChild(t),e}());const t=document.createElement("div");t.classList.add("container"),function(){if(null==localStorage.getItem("categories")){const e={ALL_NOTES:[]};localStorage.setItem("categories",JSON.stringify(e))}}(),t.appendChild(function(){const e=document.createElement("div");e.classList.add("sidebar");const t=document.createElement("div");t.innerHTML="All Notes",t.classList.add("sub-type"),t.addEventListener("click",(()=>{const e=document.getElementsByClassName("container")[0],t=document.getElementsByClassName("todo-list")[0];e.removeChild(t),e.appendChild(E("ALL"))})),e.appendChild(t);const n=document.createElement("div");return n.innerHTML="Add category",n.classList.add("sub-type"),n.classList.add("type-add-category"),n.addEventListener("click",A),e.appendChild(n),function(e){const t=b();for(let n of t){if("ALL_NOTES"==n)continue;const t=document.createElement("div");t.innerHTML=n.replace("_"," "),t.classList.add("sub-type"),t.addEventListener("click",(()=>{const e=E(n);if(!e)return void alert("No todos in that category");const t=document.getElementsByClassName("container")[0],o=document.getElementsByClassName("todo-list")[0];t.removeChild(o),t.appendChild(e)})),w(t,n),e.insertBefore(t,e.lastChild)}}(e),e}()),t.appendChild(E("ALL")),t.appendChild(function(){let e=new Image;return e.classList.add("add-button"),e.src=y,e.addEventListener("click",(()=>{const e=b();document.body.appendChild(function(e){const t=document.createElement("dialog");t.id="todo-dialog";const n=document.createElement("form");n.id="todo-form";const o=document.createElement("div");o.classList.add("form-input-container");const r=document.createElement("label");r.innerHTML="Due date:",r.setAttribute("for","dueDate"),o.appendChild(r);const a=document.createElement("input");a.setAttribute("type","date"),a.setAttribute("name","dueDate"),a.setAttribute("id","dueDate"),a.setAttribute("required",""),o.appendChild(a),n.appendChild(o);const i=document.createElement("div");i.classList.add("form-input-container");const c=document.createElement("label");c.innerHTML="Category:",c.setAttribute("for","category"),i.appendChild(c);const d=document.createElement("select");d.setAttribute("form","todo-form"),d.setAttribute("name","category"),d.setAttribute("id","category"),d.setAttribute("required",""),e.forEach((function(e,t){const n=document.createElement("option");n.value=e,n.text=e.replace("_"," "),d.appendChild(n)})),i.appendChild(d),n.appendChild(i);const s=document.createElement("div");s.classList.add("form-input-container");const l=document.createElement("label");l.innerHTML="Priority:",l.setAttribute("for","priority"),s.appendChild(l);const u=document.createElement("select");u.setAttribute("form","todo-form"),u.setAttribute("name","priority"),u.setAttribute("id","priority"),u.setAttribute("required",""),["p2","p1","p0"].forEach((function(e,t){const n=document.createElement("option");n.value=e,n.text=e,u.appendChild(n)})),s.appendChild(u),n.appendChild(s);const p=document.createElement("div");p.classList.add("form-input-container");const m=document.createElement("label");m.innerHTML="Todo:",m.setAttribute("for","todoTitle"),p.appendChild(m);const f=document.createElement("input");f.setAttribute("form","todo-form"),f.setAttribute("name","todoTitle"),f.setAttribute("id","todoTitle"),f.setAttribute("required",""),p.appendChild(f),n.append(p);const g=document.createElement("textarea");g.classList.add("todo-note"),g.setAttribute("name","todoNote"),g.setAttribute("rows","50"),g.setAttribute("cols","80"),n.appendChild(g);const h=document.createElement("div");h.classList.add("form-button-container");const b=document.createElement("button");b.classList.add("form-button"),b.setAttribute("type","submit"),b.innerText="confirm",b.addEventListener("click",(e=>{if(!n.checkValidity())return;const o=document.getElementById("todo-form"),r=new FormData(o),a={};r.forEach(((e,t)=>{a[t]=e})),function(e){const t=JSON.parse(localStorage.getItem("categories"));t[e.category].push(e),localStorage.setItem("categories",JSON.stringify(t))}(a),function(e){const t=document.getElementsByClassName("container")[0],n=document.getElementsByClassName("todo-list")[0];"ALL_NOTES"==e&&(e="ALL"),t.removeChild(n),t.appendChild(E(e))}(a.category),e.preventDefault(),t.close(),document.body.removeChild(t)})),h.appendChild(b);const y=document.createElement("button");return y.classList.add("form-button"),y.setAttribute("type","button"),y.innerHTML="cancel",y.addEventListener("click",(()=>{t.close(),document.body.removeChild(t)})),h.appendChild(y),n.appendChild(h),t.appendChild(n),t}(e)),document.getElementById("todo-dialog").showModal()})),e}()),e.append(t)}()})()})();