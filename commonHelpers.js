import{a as v,i as p,S as u}from"./assets/vendor-483db976.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=n(e);fetch(e.href,a)}})();const b="https://pixabay.com/api/",s={key:"42137546-386b5be41212ccd429cab5a80",image_type:"photo",orientation:"horizontal",safeSearch:!0,per_page:15,q:void 0,page:1};async function y(r="flower",t=20){return s.q=r,s.page=t,v.get(b,{params:{...s,page:t,q:r}})}const F="/vanilla-app-template/assets/iconClose-75a7952d.svg",L="/vanilla-app-template/assets/iconSuccess-55aec323.svg",S="/vanilla-app-template/assets/iconWarning-75a3a476.svg",d={titleColor:"#FFFFFF",messageColor:"#FFFFFF",messageSize:"16px",position:"topRight",displayMode:"replace",closeOnEscape:!0,pauseOnHover:!1,maxWidth:432,messageSize:"16px",messageLineHeight:"24px"};function g(r){p.show({message:r,backgroundColor:"#EF4040",progressBarColor:"#FFE0AC",iconUrl:F,...d})}function $(r){p.show({message:r,backgroundColor:"#59A10D",progressBarColor:"#B5EA7C",iconUrl:L,...d})}function q(r){p.show({message:r,backgroundColor:"#FFA500",progressBarColor:"#708090",iconUrl:S,...d})}const m="gallery-link";function f({largeImageURL:r,tags:t,webformatURL:n,likes:i,views:e,comments:a,downloads:l}){return`<a href="${r}" class="${m}">
    <figure>
     <img src="${n}" alt="${t}" class="gallery-image">
     <figcaption class="gallery__figcaption">
       <div class="image-item">Likes <span class="image-elem">${i}</span></div>
       <div class="image-item">Views <span class="image-elem">${e}</span></div>
       <div class="image-item">Comments <span class="image-elem">${a}</span></div>
       <div class="image-item">Downloads <span class="image-elem">${l}</span></div>
  </figcaption>
  </figure>
  </a>
  `}const w=document.querySelector(".gallery"),E=document.querySelector(".search-form"),x=document.querySelector(".loader"),A=document.querySelector(".loader-scroll"),o={galleryContainer:w,searchForm:E,loaderContainer:x,loaderScrollContainer:A};let h,c;const C=new IntersectionObserver(O,{threshold:0});o.searchForm.addEventListener("submit",async function(r){if(r.preventDefault(),s.q=r.target.elements.query.value,s.q!==""){o.galleryContainer.innerHTML="",o.loaderContainer.style.display="block";try{s.page=1;const{data:{hits:t,totalHits:n}}=await y(s.q,s.page);if(Array.isArray(t)&&t.length>0){const i=t.map(f).join("");o.galleryContainer.innerHTML+=i,new u(`.${m}`).refresh(),c=o.galleryContainer.children[o.galleryContainer.children.length-1],C.observe(c),h=n,$(`Was found: ${n} images`)}else g("Sorry, there are no images matching your search query. Please try again!")}catch(t){g(`Error fetching images: ${t}`)}finally{o.searchForm.reset(),o.loaderContainer.style.display="none"}}});async function O(r){const t=r[0];if(Math.ceil(h/s.per_page)<=s.page)return q("We're sorry, but you've reached the end of search results.");if(t.isIntersecting){o.loaderScrollContainer.style.display="block",s.page++;try{const{data:{hits:n}}=await y(s.q,s.page);if(Array.isArray(n)&&n.length>0){const i=n.map(f).join("");o.galleryContainer.innerHTML+=i,new u(`.${m}`).refresh(),c=o.galleryContainer.children[o.galleryContainer.children.length-1],C.observe(c)}}catch(n){g(`Error loading images: ${n.message}`)}finally{o.loaderScrollContainer.style.display="none"}}}
//# sourceMappingURL=commonHelpers.js.map
