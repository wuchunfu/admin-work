import{u as e}from"./index.6ecc0894.js";import{u as l}from"./useAppInfo.661e3b3e.js";import{d as a,m as t,s,g as o,r as n,o as d,c as u,w as i,a as r,I as c,C as p,P as b,F as f,H as m}from"./vendor.204f34a9.js";const v={class:"text-lg"},y=c("获取源码"),_=r("div",{class:"flex flex-col items-center justify-center"},[r("img",{src:"/admin-work/assets/qrcode.0a69adee.jpg"}),r("div",null,[c("关注公众号："),r("strong",null,"知码前端"),c("获取源码")])],-1);var h=a({setup(a){const{version:h,dependencies:j,devDependencies:w}=l(),x=t(!1),g=e().state,k=s([]),C=s([]);return o((()=>{const e=Object.values(j);Object.keys(j).map(((l,a)=>{k.push({label:l,value:e[a]})}));const l=Object.values(w);Object.keys(w).map(((e,a)=>{C.push({label:e,value:l[a]})}))})),(e,l)=>{const a=n("n-button"),t=n("n-card"),s=n("n-descriptions-item"),o=n("n-descriptions"),j=n("Close"),w=n("n-icon"),O=n("n-modal"),z=n("n-space");return d(),u(z,{vertical:""},{default:i((()=>[r(t,null,{default:i((()=>[r("div",v,[c(" 当前版本号："+p(b(h))+" ",1),r(a,{class:"ml-4",type:"primary",onClick:l[1]||(l[1]=e=>x.value=!0)},{default:i((()=>[y])),_:1})])])),_:1}),r(t,{title:"依赖"},{default:i((()=>[r(o,{"label-placement":"top",bordered:"",column:4,"label-style":{"font-weight":"bold","font-size":"16px"}},{default:i((()=>[(d(!0),u(f,null,m(b(k),(e=>(d(),u(s,{label:e.label,key:e.label},{default:i((()=>[c(p(e.value),1)])),_:2},1032,["label"])))),128))])),_:1})])),_:1}),r(t,{title:"开发依赖"},{default:i((()=>[r(o,{"label-placement":"top",bordered:"",column:4,"label-style":{"font-weight":"bold","font-size":"16px"}},{default:i((()=>[(d(!0),u(f,null,m(b(C),(e=>(d(),u(s,{label:e.label,key:e.label},{default:i((()=>[c(p(e.value),1)])),_:2},1032,["label"])))),128))])),_:1})])),_:1}),r(O,{show:x.value,"onUpdate:show":l[3]||(l[3]=e=>x.value=e),"display-directive":"show",style:{width:"mobile"===b(g).device?"80%":"40%"}},{default:i((()=>[r(t,{title:"获取源码",bordered:!1,preset:"card"},{"header-extra":i((()=>[r(w,{size:"20"},{default:i((()=>[r(j,{onClick:l[2]||(l[2]=e=>x.value=!1)})])),_:1})])),default:i((()=>[_])),_:1})])),_:1},8,["show","style"])])),_:1})}}});export default h;
