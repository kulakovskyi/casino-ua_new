(()=>{var e={4208:()=>{"use strict";function e(e){this.type=e}e.prototype.init=function(){const e=this;this.оbjects=[],this.daClassname="_dynamic_adapt_",this.nodes=document.querySelectorAll("[data-da]");for(let e=0;e<this.nodes.length;e++){const t=this.nodes[e],s=t.dataset.da.trim().split(","),i={};i.element=t,i.parent=t.parentNode,i.destination=document.querySelector(s[0].trim()),i.breakpoint=s[1]?s[1].trim():"767",i.place=s[2]?s[2].trim():"last",i.index=this.indexInParent(i.parent,i.element),this.оbjects.push(i)}this.arraySort(this.оbjects),this.mediaQueries=Array.prototype.map.call(this.оbjects,(function(e){return"("+this.type+"-width: "+e.breakpoint+"px),"+e.breakpoint}),this),this.mediaQueries=Array.prototype.filter.call(this.mediaQueries,(function(e,t,s){return Array.prototype.indexOf.call(s,e)===t}));for(let t=0;t<this.mediaQueries.length;t++){const s=this.mediaQueries[t],i=String.prototype.split.call(s,","),n=window.matchMedia(i[0]),o=i[1],c=Array.prototype.filter.call(this.оbjects,(function(e){return e.breakpoint===o}));n.addListener((function(){e.mediaHandler(n,c)})),this.mediaHandler(n,c)}},e.prototype.mediaHandler=function(e,t){if(e.matches)for(let e=0;e<t.length;e++){const s=t[e];s.index=this.indexInParent(s.parent,s.element),this.moveTo(s.place,s.element,s.destination)}else for(let e=0;e<t.length;e++){const s=t[e];s.element.classList.contains(this.daClassname)&&this.moveBack(s.parent,s.element,s.index)}},e.prototype.moveTo=function(e,t,s){t.classList.add(this.daClassname),"last"===e||e>=s.children.length?s.insertAdjacentElement("beforeend",t):"first"!==e?s.children[e].insertAdjacentElement("beforebegin",t):s.insertAdjacentElement("afterbegin",t)},e.prototype.moveBack=function(e,t,s){t.classList.remove(this.daClassname),void 0!==e.children[s]?e.children[s].insertAdjacentElement("beforebegin",t):e.insertAdjacentElement("beforeend",t)},e.prototype.indexInParent=function(e,t){const s=Array.prototype.slice.call(e.children);return Array.prototype.indexOf.call(s,t)},e.prototype.arraySort=function(e){"min"===this.type?Array.prototype.sort.call(e,(function(e,t){return e.breakpoint===t.breakpoint?e.place===t.place?0:"first"===e.place||"last"===t.place?-1:"last"===e.place||"first"===t.place?1:e.place-t.place:e.breakpoint-t.breakpoint})):Array.prototype.sort.call(e,(function(e,t){return e.breakpoint===t.breakpoint?e.place===t.place?0:"first"===e.place||"last"===t.place?1:"last"===e.place||"first"===t.place?-1:t.place-e.place:t.breakpoint-e.breakpoint}))},new e("max").init()},6769:()=>{const e=document.querySelector(".footer__cookie-btn"),t=document.querySelector(".footer__cookie");e.addEventListener("click",(()=>{t.classList.add("_hidden")}))},6824:()=>{({el:document.querySelector(".footer__btn-top"),show(){this.el.classList.remove("_hidden")},hide(){this.el.classList.add("_hidden")},addEventListener(){window.addEventListener("scroll",(()=>{(window.scrollY||document.documentElement.scrollTop)>400?this.show():this.hide()})),document.querySelector(".footer__btn-top").onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}}}).addEventListener()},811:()=>{const e=document.querySelector(".casino-online__tabs-btn-one"),t=document.querySelector(".casino-online__tabs-btn-two"),s=document.querySelector(".casino-online__list-one"),i=document.querySelector(".casino-online__list-two");e.addEventListener("click",(()=>{e.classList.add("_active"),s.classList.remove("_hidden"),t.classList.remove("_active"),i.classList.add("_hidden")})),t.addEventListener("click",(()=>{t.classList.add("_active"),i.classList.remove("_hidden"),e.classList.remove("_active"),s.classList.add("_hidden")}))},5523:()=>{if(null!=document.querySelector(".accordion")){class e{constructor(e,t){this._el="string"==typeof e?document.querySelector(e):e,this._config=Object.assign({alwaysOpen:!0,duration:350},t),this.addEventListener()}addEventListener(){this._el.addEventListener("click",(e=>{const t=e.target.closest(".accordion__header");if(t){if(!this._config.alwaysOpen){const e=this._el.querySelector(".accordion__item_show");e&&e!==t.parentElement&&this.toggle(e)}this.toggle(t.parentElement)}}))}show(e){const t=e.querySelector(".accordion__body");if(t.classList.contains("collapsing")||e.classList.contains("accordion__item_show"))return;t.style.display="block";const s=t.offsetHeight;t.style.height=0,t.style.overflow="hidden",t.style.transition=`height ${this._config.duration}ms ease`,t.classList.add("collapsing"),e.classList.add("accordion__item_slidedown"),t.offsetHeight,t.style.height=`${s}px`,window.setTimeout((()=>{t.classList.remove("collapsing"),e.classList.remove("accordion__item_slidedown"),t.classList.add("collapse"),e.classList.add("accordion__item_show"),t.style.display="",t.style.height="",t.style.transition="",t.style.overflow=""}),this._config.duration)}hide(e){const t=e.querySelector(".accordion__body");!t.classList.contains("collapsing")&&e.classList.contains("accordion__item_show")&&(t.style.height=`${t.offsetHeight}px`,t.offsetHeight,t.style.display="block",t.style.height=0,t.style.overflow="hidden",t.style.transition=`height ${this._config.duration}ms ease`,t.classList.remove("collapse"),e.classList.remove("accordion__item_show"),t.classList.add("collapsing"),window.setTimeout((()=>{t.classList.remove("collapsing"),t.classList.add("collapse"),t.style.display="",t.style.height="",t.style.transition="",t.style.overflow=""}),this._config.duration))}toggle(e){e.classList.contains("accordion__item_show")?this.hide(e):this.show(e)}}new e(document.querySelector(".accordion"),{alwaysOpen:!1})}},7524:()=>{const e=document.querySelector(".menu__icon"),t=document.querySelector(".header__bottom"),s=document.querySelector("body");if(s.classList.contains("in-cabinet")){const o=document.querySelector(".header__cabinet-save"),c=document.querySelector(".header__cabinet-mob-user");function i(e){o.classList.remove("_open")}function n(){o.classList.add("_open")}e.addEventListener("click",(function(i){o.classList.contains("_open")&&o.classList.remove("_open"),e.classList.toggle("_active"),t.classList.toggle("_active");let n=o.classList.contains("_open");t.classList.contains("_active")||n?s.classList.add("_lock"):s.classList.remove("_lock")})),c.addEventListener("mouseenter",n),c.addEventListener("mouseleave",i),o.addEventListener("mouseleave",i),o.addEventListener("mouseenter",n),window.screen.width<=1024&&(c.removeEventListener("mouseenter",n),c.removeEventListener("mouseleave",i),o.removeEventListener("mouseleave",i),o.removeEventListener("mouseenter",n),c.addEventListener("click",(()=>{o.classList.toggle("_open"),t.classList.contains("_active")&&(o.classList.add("_open"),e.classList.remove("_active"),t.classList.remove("_active"));let i=o.classList.contains("_open");t.classList.contains("_active")||i?s.classList.add("_lock"):s.classList.remove("_lock")})))}else{const a=document.querySelector(".header__btns-wrap"),l=document.querySelector(".header__btns-close"),r=document.querySelector(".header__cabinet-mob");e.addEventListener("click",(function(i){e.classList.toggle("_active"),t.classList.toggle("_active"),s.classList.toggle("_lock")})),l.addEventListener("click",(()=>{a.classList.remove("_open"),t.classList.contains("_active")||s.classList.remove("_lock")})),a.addEventListener("click",(e=>{e.target===a&&(t.classList.contains("_active")||s.classList.remove("_lock"),a.classList.remove("_open"))})),r.addEventListener("click",(()=>{a.classList.toggle("_open"),t.classList.contains("_active")||s.classList.toggle("_lock")}))}document.querySelectorAll(".menu-item").forEach((function(e){const t=e.querySelector(".sub-menu"),s=e.querySelector(".sub-menu-2"),i=e.querySelector(".sub-menu-3"),n=e.querySelector("a");e.addEventListener("mouseenter",(function(){window.innerWidth>1024&&t&&(t.style.display="block")})),e.addEventListener("mouseleave",(function(){window.innerWidth>1024&&t&&(t.style.display="none")})),n.addEventListener("click",(function(t){if(window.innerWidth<=1024){e.classList.toggle("mobile-active");let o=n.nextElementSibling;null!==o&&t.preventDefault(),null!==o&&o.classList.contains("sub-menu-2")&&s.classList.toggle("_open"),null!==o&&o.classList.contains("sub-menu-3")&&i.classList.toggle("_open")}}))}))}},t={};function s(i){var n=t[i];if(void 0!==n)return n.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,s),o.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";s(7524),s(4208),s(5523),s(6769),s(6824),s(811)})()})();