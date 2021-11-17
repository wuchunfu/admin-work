import{u as n,D as s}from"./index.6ecc0894.js";import o from"./LoginComponent.1ba21db6.js";import{d as e,m as i,f as a,g as t,r as l,o as r,c,j as d,a as v,F as g,k as p}from"./vendor.204f34a9.js";import"./useAppInfo.661e3b3e.js";var m=e({name:"Login",components:{LoginComponent:o},setup(){const o=i(!1),e=i(!1),l=i(!1);const r=n(),c=a((()=>r.state.device===s.MOBILE));return t((()=>{setTimeout((()=>o.value=!0),500),setTimeout((()=>{e.value=!0}),6200)})),{isMobile:c,showAnimation:o,showArrow:e,showLoginPage:l,onNextLogin:function(){l.value=!l.value}}}});const h=p()(((n,s,o,e,i,a)=>{const t=l("LoginComponent");return r(),c(g,null,[d(' <div v-if="!isMobile">\n    <div class="relative overflow-hidden">\n      <div\n        class="flex items-center justify-center splash-container"\n        :class="{ \'hidden-splash\': showLoginPage, \'show-splash\': !showLoginPage }"\n      >\n        <div class="top-line" :class="{ \'animation-line\': showAnimation }"> </div>\n        <div class="text-white center-text">\n          <span class="mr-4 the">the</span>\n          <span class="p-text"><strong>P</strong> = vite + v3 + ts + naive-ui </span>\n        </div>\n        <div class="bottom-line" :class="{ \'animation-line\': showAnimation }"></div>\n      </div>\n      <div\n        class="login-wrapper"\n        :class="{ \'show-login\': showLoginPage, \'hidden-login\': !showLoginPage }"\n      >\n        <LoginComponent />\n      </div>\n      <div\n        class="arrow"\n        v-if="showArrow"\n        :style="{ transform: showLoginPage ? \'rotate(90deg)\' : \'rotate(-90deg)\' }"\n      >\n        <span @click="onNextLogin" class="iconfont icon-doubleleft arrow-icon"></span>\n      </div>\n    </div>\n  </div> '),v(t)],2112)}));m.render=h,m.__scopeId="data-v-00aea9ee";export default m;
