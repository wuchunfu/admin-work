import{V as c,k as a,l as r,au as f,m as d}from"./vendor.e0f74c14.js";const C=async function(e){const t=document.body.clientHeight;return new Promise(n=>{setTimeout(()=>{if(e){let o=0;if(e.refs.tableHeaderRef){const s=e.refs.tableHeaderRef.$el.nextElementSibling;o+=s.offsetTop+s.clientHeight}e.refs.tableFooterRef?o+=e.refs.tableFooterRef.$el.clientHeight+65:o+=60,n(t-o)}n(150)},1e3)})},S=function(){const e=c([]),t=c([]),n=a(null),o=a(null),s=a(200),u=a(!1),l=a(!0);return{dataList:e,tableHeaderRef:n,tableFooterRef:o,tableHeight:s,bordered:u,selectRows:t,tableLoading:l,handleSuccess:({data:i=[]})=>(l.value=!1,e.length=0,e.push(...i),Promise.resolve(i)),handleSelectionChange:i=>{t.length=0,t.push(...i)},useTableColumn:g,selectionColumn:{type:"selection"},indexColumn:h()}},H=function(e){return e.map(n=>r(f,{type:n.type||"primary",size:"small",disabled:n.disabled,onClick:n.onClick},{default:()=>n.label}))},R=function(e){return function(t){return t[e]}},g=function(e,t){return e.map(n=>Object.assign(n,t))},h=function(){return{title:"\u5E8F\u53F7",key:"index",width:80,render:(e,t)=>r("div",null,{default:()=>t+1})}},y=function(e){function t(){e()}function n(){e()}const o=d({page:1,pageSize:10,showSizePicker:!0,pageCount:1,pageSizes:[10,20,30,40],onChange:t,onPageSizeChange:n,setTotalSize(s){o.pageCount=Math.ceil(s/o.pageSize)}});return o};export{S as a,R as b,g as c,H as d,C as e,y as u};
