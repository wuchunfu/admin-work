import{d as a,a1 as e,s,g as t,t as l,v as n,r as o,o as r,c as i,a as c,C as d,k as f,D as m}from"./vendor.d8fe5d61.js";import{I as b}from"./index.00ea6707.js";var g=a({name:"CardDraggable",components:{draggable:e},setup(){const a=b.glyphs.slice(0,100),e=s([]),l=["#e54d42","#f37b1d","#fbbd08","#8dc63f","#39b54a","#1cbbb4","#0081ff","#6739b6","#9c26b0","#e03997","#a5673f","#8799a3"],n=()=>l[Math.floor(Math.random()*l.length)];return t((()=>{e.push(...a.map(((a,e)=>({label:`第 ${e+1} 个元素`,icon:a.font_class,id:a.icon_id,color:n()}))))})),{drag:!1,list:e,resetElements:()=>{e.length=0,e.push(...a.map(((a,e)=>({label:`第 ${e+1} 个元素`,icon:a.font_class,id:a.icon_id,color:n()}))))}}}});const p=f();l("data-v-02f9cf28");const u={class:"main-container"},_=m("重置元素位置"),h={class:"card-item"},v={class:"label"};n();const y=p(((a,e,s,t,l,n)=>{const f=o("n-button"),m=o("SvgIcon"),b=o("draggable"),g=o("n-card");return r(),i("div",u,[c(g,{title:"拖动更换图标位置"},{"header-extra":p((()=>[c(f,{size:"small",type:"primary",onClick:a.resetElements},{default:p((()=>[_])),_:1},8,["onClick"])])),default:p((()=>[c(b,{list:a.list,animation:"500",onStart:e[1]||(e[1]=e=>a.drag=!0),onEnd:e[2]||(e[2]=e=>a.drag=!1),"item-key":"id",tag:"ul"},{item:p((({element:a})=>[c("li",h,[c(m,{prefix:"iconfont",name:a.icon,style:[{"font-size":"30px"},{color:a.color}]},null,8,["name","style"]),c("div",v,d(a.label),1)])])),_:1},8,["list"])])),_:1})])}));g.render=y,g.__scopeId="data-v-02f9cf28";export default g;
