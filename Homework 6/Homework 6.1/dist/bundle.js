!function(t){var e={};function r(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);r(1),r(2)},function(t,e){let r,n=document.querySelector(".item-container"),a=document.querySelectorAll(".item"),c=document.querySelector(".item").clientWidth,l=document.querySelectorAll(".img"),i=a.length-1,s=document.querySelector(".leftBtn"),o=document.querySelector(".rightBtn"),u=document.querySelector(".circleDiv");function d(){document.querySelector(".circleActive").classList.remove("circleActive");let t=document.querySelector(".activeItem");return t.classList.remove("activeItem"),+t.getAttribute("data-id")}function f(t,e){t===i+1?(a[0].classList.add("activeItem"),r[0].classList.add("circleActive"),p(t,e,"rightLast")):(a[t].classList.add("activeItem"),r[t].classList.add("circleActive"),p(t,e,"right"))}function m(t,e){1===t?(a[i].classList.add("activeItem"),r[i].classList.add("circleActive"),p(t,e,"leftLast")):(a[t-2].classList.add("activeItem"),r[t-2].classList.add("circleActive"),p(t,e,"left"))}function p(t,e,r){let a,l=Math.abs(e)||c*t;a="right"===r||"rightLast"===r?setInterval(()=>{l>=c*(t+1)?(clearInterval(a),"rightLast"===r&&(n.style.transform=`translateX(${-c}px)`)):((l+=c/10)>c*(t+1)&&(l=c*(t+1)),n.style.transform=`translateX(${-l}px)`)},40):setInterval(()=>{l<=c*(t-1)?(clearInterval(a),"leftLast"===r&&(n.style.transform=`translateX(${-c*(i+1)}px)`)):((l-=c/10)<c*(t-1)&&(l=c*(t-1)),n.style.transform=`translateX(${-l}px)`)},40)}n.style.transform=`translateX(${-c}px)`,Array.prototype.forEach.call(l,(t,e)=>{t.ondragstart=function(){return!1},t.parentElement.setAttribute("data-id",e)}),function(){for(let t=0;t<a.length;t++){let e=document.createElement("span");e.classList.add("circle"),e.setAttribute("data-id",t),u.appendChild(e)}(r=document.querySelectorAll(".circle"))[0].classList.add("circleActive")}(),u.addEventListener("click",t=>{if(t.target.classList.contains("circle")){d();let e=+t.target.getAttribute("data-id");a[e].classList.add("activeItem"),t.target.classList.add("circleActive"),n.style.transform=`translateX(${-(e+1)*c}px)`}}),o.addEventListener("click",()=>{f(d())}),s.addEventListener("click",()=>{m(d())}),n.addEventListener("mousedown",t=>{let e=t.pageX,r=+document.querySelector(".activeItem").getAttribute("data-id");n.onmousemove=function(t){e>t.pageX?n.style.transform=`translateX(${-(c*r+(e-t.pageX))}px)`:n.style.transform=`translateX(${-(c*r-(t.pageX-e))}px)`},document.onmouseup=function(){let t=+n.style.transform.replace(/\D/g,"");t-20>c*r?(d(),f(r,t)):t+20<c*r?(d(),m(r,t)):n.style.transform=`translateX(${-c*r}px)`,n.onmousemove=null,document.onmouseup=null}})},function(t,e){}]);