(()=>{var e={4208:()=>{"use strict";function e(e){this.type=e}e.prototype.init=function(){const e=this;this.оbjects=[],this.daClassname="_dynamic_adapt_",this.nodes=document.querySelectorAll("[data-da]");for(let e=0;e<this.nodes.length;e++){const t=this.nodes[e],n=t.dataset.da.trim().split(","),o={};o.element=t,o.parent=t.parentNode,o.destination=document.querySelector(n[0].trim()),o.breakpoint=n[1]?n[1].trim():"767",o.place=n[2]?n[2].trim():"last",o.index=this.indexInParent(o.parent,o.element),this.оbjects.push(o)}this.arraySort(this.оbjects),this.mediaQueries=Array.prototype.map.call(this.оbjects,(function(e){return"("+this.type+"-width: "+e.breakpoint+"px),"+e.breakpoint}),this),this.mediaQueries=Array.prototype.filter.call(this.mediaQueries,(function(e,t,n){return Array.prototype.indexOf.call(n,e)===t}));for(let t=0;t<this.mediaQueries.length;t++){const n=this.mediaQueries[t],o=String.prototype.split.call(n,","),i=window.matchMedia(o[0]),r=o[1],s=Array.prototype.filter.call(this.оbjects,(function(e){return e.breakpoint===r}));i.addListener((function(){e.mediaHandler(i,s)})),this.mediaHandler(i,s)}},e.prototype.mediaHandler=function(e,t){if(e.matches)for(let e=0;e<t.length;e++){const n=t[e];n.index=this.indexInParent(n.parent,n.element),this.moveTo(n.place,n.element,n.destination)}else for(let e=0;e<t.length;e++){const n=t[e];n.element.classList.contains(this.daClassname)&&this.moveBack(n.parent,n.element,n.index)}},e.prototype.moveTo=function(e,t,n){t.classList.add(this.daClassname),"last"===e||e>=n.children.length?n.insertAdjacentElement("beforeend",t):"first"!==e?n.children[e].insertAdjacentElement("beforebegin",t):n.insertAdjacentElement("afterbegin",t)},e.prototype.moveBack=function(e,t,n){t.classList.remove(this.daClassname),void 0!==e.children[n]?e.children[n].insertAdjacentElement("beforebegin",t):e.insertAdjacentElement("beforeend",t)},e.prototype.indexInParent=function(e,t){const n=Array.prototype.slice.call(e.children);return Array.prototype.indexOf.call(n,t)},e.prototype.arraySort=function(e){"min"===this.type?Array.prototype.sort.call(e,(function(e,t){return e.breakpoint===t.breakpoint?e.place===t.place?0:"first"===e.place||"last"===t.place?-1:"last"===e.place||"first"===t.place?1:e.place-t.place:e.breakpoint-t.breakpoint})):Array.prototype.sort.call(e,(function(e,t){return e.breakpoint===t.breakpoint?e.place===t.place?0:"first"===e.place||"last"===t.place?1:"last"===e.place||"first"===t.place?-1:t.place-e.place:t.breakpoint-e.breakpoint}))},new e("max").init()},6769:()=>{const e=document.querySelector(".footer__cookie-btn"),t=document.querySelector(".footer__cookie");e.addEventListener("click",(()=>{t.classList.add("_hidden")}))},1822:()=>{null!==document.querySelectorAll(".slot__item")&&document.querySelectorAll(".slot__item").forEach((e=>{let t=e.querySelector(".slot__item-text"),n=e.querySelector(".slot__item-showMore");n.addEventListener("click",(()=>{t.classList.toggle("_show"),n.textContent="Приховати"}))}))},6824:()=>{({el:document.querySelector(".footer__btn-top"),show(){this.el.classList.remove("_hidden")},hide(){this.el.classList.add("_hidden")},addEventListener(){window.addEventListener("scroll",(()=>{(window.scrollY||document.documentElement.scrollTop)>400?this.show():this.hide()})),document.querySelector(".footer__btn-top").onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}}}).addEventListener()},811:()=>{const e=document.querySelector(".casino-online__tabs-btn-one"),t=document.querySelector(".casino-online__tabs-btn-two"),n=document.querySelector(".casino-online__list-one"),o=document.querySelector(".casino-online__list-two");e.addEventListener("click",(()=>{e.classList.add("_active"),n.classList.remove("_hidden"),t.classList.remove("_active"),o.classList.add("_hidden")})),t.addEventListener("click",(()=>{t.classList.add("_active"),o.classList.remove("_hidden"),e.classList.remove("_active"),n.classList.add("_hidden")}))},7524:()=>{const e=document.querySelector(".menu__icon"),t=document.querySelector(".header__bottom"),n=document.querySelector("body"),o=document.querySelector(".header__cabinet-mob"),i=document.querySelector(".header__btns");e.addEventListener("click",(function(o){e.classList.toggle("_active"),t.classList.toggle("_active"),n.classList.toggle("_lock")})),o.addEventListener("click",(()=>{i.classList.toggle("_open")})),document.querySelectorAll(".menu-item").forEach((function(e){const t=e.querySelector(".sub-menu"),n=e.querySelector(".sub-menu-2"),o=e.querySelector(".sub-menu-3"),i=e.querySelector("a");e.addEventListener("mouseenter",(function(){window.innerWidth>1024&&t&&(t.style.display="block")})),e.addEventListener("mouseleave",(function(){window.innerWidth>1024&&t&&(t.style.display="none")})),i.addEventListener("click",(function(t){if(window.innerWidth<=1024){e.classList.toggle("mobile-active");let r=i.nextElementSibling;null!==r&&t.preventDefault(),null!==r&&r.classList.contains("sub-menu-2")&&n.classList.toggle("_open"),null!==r&&r.classList.contains("sub-menu-3")&&o.classList.toggle("_open")}}))}))}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(7524),n(4208),n(6769),n(6824),n(811),n(1822)})()})();