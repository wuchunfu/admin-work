import{_ as e}from"./index.00ea6707.js";import{d as a,Q as t,t as d,v as n,r as o,o as i,c as r,a as s,j as l,k as c,D as m}from"./vendor.d8fe5d61.js";var p=a({name:"Markdown",components:{MarkdownEditor:e},data:()=>({editorText:"",priviewContent:""}),methods:{addText(){this.$refs.markdownEditor.addText("\n### 新增内容")},addImage(){this.$refs.markdownEditor.addImage("\n![](https://file.iviewui.com/dist/2ecd3b0452aa197097d5131afacab7b8.png)")},getHTML(){this.priviewContent=t.prototype.markdown(this.editorText)}}});const f=c();d("data-v-1dfbab80");const v={class:"main-container"},k={class:"editor-container"},u={class:"mt-5"},w=m("增加文本"),T=m("增加图片"),h=m("预览HTML");n();const C=f(((e,a,t,d,n,c)=>{const m=o("MarkdownEditor"),p=o("n-button"),C=o("n-space");return i(),r("div",v,[s("div",k,[s(m,{ref:"markdownEditor",modelValue:e.editorText,"onUpdate:modelValue":a[1]||(a[1]=a=>e.editorText=a),height:400,placeholder:"Insert here…"},null,8,["modelValue"])]),s("div",u,[s(C,null,{default:f((()=>[s(p,{size:"small",onClick:e.addText},{default:f((()=>[w])),_:1},8,["onClick"]),s(p,{size:"small",onClick:e.addImage},{default:f((()=>[T])),_:1},8,["onClick"]),s(p,{size:"small",type:"primary",onClick:e.getHTML},{default:f((()=>[h])),_:1},8,["onClick"])])),_:1})]),e.priviewContent?(i(),r("div",{key:0,class:"p-4 mt-4 priview-content",innerHTML:e.priviewContent},null,8,["innerHTML"])):l("v-if",!0)])}));p.render=C,p.__scopeId="data-v-1dfbab80";export default p;
