var e=Object.defineProperty,l=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,a=Object.prototype.propertyIsEnumerable,c=(l,o,a)=>o in l?e(l,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[o]=a,u=(e,u)=>{for(var d in u||(u={}))l.call(u,d)&&c(e,d,u[d]);if(o)for(var d of o(u))a.call(u,d)&&c(e,d,u[d]);return e};import{c as d}from"./mobile.6ac844be.js";import{a as h,k as s,z as n,s as b,x as t,r,o as m,c as p,f as k,t as x,q as i,j as V}from"./vendor.80bf15c7.js";import"./index.42d325ee.js";const{createDemo:g}=d("checkbox");var f=g({setup(e,l){const o=h({checkbox1:!1,checkbox2:!1,checkbox3:!0,checkbox4:!0,checkbox5:!0,checkbox6:!0,checkbox7:!1,checkbox8:!0,checkbox9:!1,checkbox10:!0,checkbox11:!1,checkbox12:!0,checkbox13:!1,checkboxGroup1:["选项一"],checkboxGroup2:["选项一"],checkboxGroup3:[],checkboxGroup4:["没有动效1"],checkboxGroup5:["选项一"],checkboxGroup6:[],checkboxGroup7:[]}),a=h({result1:"",result2:"",result3:"",result4:""}),c=s(null);return u(u({changeBox1:e=>{o.checkbox1=e},checkboxChange:(e,l)=>{a.result1=e},checkboxGroupDemo:c,getChange:e=>{a.result2="选中状态选项："+e},getChange2:e=>{a.result3="选中状态选项："+e},getChange3:e=>{a.result4="选中状态选项："+e},chooseAll:e=>{c.value.toggleAll(e)}},n(o)),n(a))}});const G=i("data-v-6ced69e3");b("data-v-6ced69e3");const v={class:"demo-list"},C=k("h4",null,"基础用法",-1),_={class:"show-demo"},w=V("复选框"),U=k("p",{class:"p-word"},"组合使用 checkbox 时推荐使用 checkboxgroup 组件，见下方示例",-1),y=k("h4",null,"CheckboxGroup基本用法",-1),z={class:"show-demo"},j=k("h4",null,"禁用状态",-1),O={class:"show-demo show-demo-block"},A=V("未选时禁用状态"),D=V("已选时禁用状态"),P=k("h4",null,"CheckboxGroup整体禁用",-1),B={class:"show-demo"},I=k("h4",null,"自定义尺寸",-1),q={class:"show-demo show-demo-block"},E=V("小号1"),S=V("默认"),F=V("大号"),H=k("p",null,"size可选值：'small', 'base', 'large'",-1),J=k("h4",null,"CheckboxGroup整体尺寸",-1),K={class:"show-demo"},L=k("h4",null,"禁用动效",-1),M={class:"show-demo"},N=V("没有动效"),Q=k("p",null,"animation属性值为false时，禁用自带动效",-1),R=k("h4",null,"CheckboxGroup整体禁用动效",-1),T={class:"show-demo"},W=k("h4",null,"事件",-1),X={class:"show-demo"},Y={class:"demo-box"},Z=V("备选项"),$=k("h4",null,"CheckboxGroup整体事件",-1),ee={class:"show-demo"},le=k("h4",null,"自定义Class",-1),oe={class:"show-demo"},ae=V('自定义Class:"my-checkbox"'),ce=k("h4",null,"全选与反选",-1),ue={class:"show-demo"},de=V("全选"),he=V("反选"),se=V("取消"),ne=k("h4",null,"CheckboxGroup排列方向",-1),be={class:"show-demo"};t();const te=G(((e,l,o,a,c,u)=>{const d=r("nut-checkbox"),h=r("nut-checkboxgroup"),s=r("nut-button");return m(),p("div",v,[C,k("div",_,[k(d,{modelValue:e.checkbox1,"onUpdate:modelValue":l[1]||(l[1]=l=>e.checkbox1=l),onChange:e.changeBox1},{default:G((()=>[w])),_:1},8,["modelValue","onChange"]),k("span",null,x(e.checkbox1),1)]),U,y,k("div",z,[k(h,{modelValue:e.checkboxGroup1,"onUpdate:modelValue":l[2]||(l[2]=l=>e.checkboxGroup1=l)},{default:G((()=>[k(d,{label:"选项一"}),k(d,{label:"选项二"})])),_:1},8,["modelValue"]),k("p",null,"选择状态："+x(e.checkboxGroup1),1)]),j,k("div",O,[k(d,{modelValue:e.checkbox2,"onUpdate:modelValue":l[3]||(l[3]=l=>e.checkbox2=l),disabled:""},{default:G((()=>[A])),_:1},8,["modelValue"]),k(d,{modelValue:e.checkbox3,"onUpdate:modelValue":l[4]||(l[4]=l=>e.checkbox3=l),disabled:""},{default:G((()=>[D])),_:1},8,["modelValue"])]),P,k("div",B,[k(h,{modelValue:e.checkboxGroup2,"onUpdate:modelValue":l[5]||(l[5]=l=>e.checkboxGroup2=l),disabled:""},{default:G((()=>[k(d,{label:"选项一"}),k(d,{label:"选项二"})])),_:1},8,["modelValue"]),k("p",null,"选择状态："+x(e.checkboxGroup2),1)]),I,k("div",q,[k(d,{modelValue:e.checkbox4,"onUpdate:modelValue":l[6]||(l[6]=l=>e.checkbox4=l),size:"small"},{default:G((()=>[E])),_:1},8,["modelValue"]),k(d,{modelValue:e.checkbox5,"onUpdate:modelValue":l[7]||(l[7]=l=>e.checkbox5=l),size:"base"},{default:G((()=>[S])),_:1},8,["modelValue"]),k(d,{modelValue:e.checkbox6,"onUpdate:modelValue":l[8]||(l[8]=l=>e.checkbox6=l),size:"large"},{default:G((()=>[F])),_:1},8,["modelValue"]),H]),J,k("div",K,[k(h,{modelValue:e.checkboxGroup3,"onUpdate:modelValue":l[9]||(l[9]=l=>e.checkboxGroup3=l),size:"small"},{default:G((()=>[k(d,{label:"选项一"}),k(d,{label:"选项二"})])),_:1},8,["modelValue"])]),L,k("div",M,[k(d,{modelValue:e.checkbox7,"onUpdate:modelValue":l[10]||(l[10]=l=>e.checkbox7=l),animation:!1},{default:G((()=>[N])),_:1},8,["modelValue"]),Q]),R,k("div",T,[k(h,{modelValue:e.checkboxGroup4,"onUpdate:modelValue":l[11]||(l[11]=l=>e.checkboxGroup4=l),animation:!1},{default:G((()=>[k(d,{label:"没有动效1"}),k(d,{label:"没有动效2"})])),_:1},8,["modelValue"])]),W,k("div",X,[k("div",Y,[k(d,{modelValue:e.checkbox9,"onUpdate:modelValue":l[12]||(l[12]=l=>e.checkbox9=l),label:"change事件",onChange:e.checkboxChange},{default:G((()=>[Z])),_:1},8,["modelValue","onChange"]),k("span",null,x(e.result1),1)])]),$,k("div",ee,[k("div",null,[k(h,{modelValue:e.checkboxGroup5,"onUpdate:modelValue":l[13]||(l[13]=l=>e.checkboxGroup5=l),onChange:e.getChange},{default:G((()=>[k(d,{label:"选项一"}),k(d,{label:"选项二"})])),_:1},8,["modelValue","onChange"])]),k("span",null,x(e.result2),1)]),le,k("div",oe,[k(d,{class:"my-checkbox",modelValue:e.checkbox12,"onUpdate:modelValue":l[14]||(l[14]=l=>e.checkbox12=l)},{default:G((()=>[ae])),_:1},8,["modelValue"])]),ce,k("div",ue,[k("div",null,[k(h,{ref:"checkboxGroupDemo",modelValue:e.checkboxGroup6,"onUpdate:modelValue":l[15]||(l[15]=l=>e.checkboxGroup6=l),onChange:e.getChange2},{default:G((()=>[k(d,{label:"选项一"}),k(d,{label:"选项二"}),k(d,{label:"选项三"})])),_:1},8,["modelValue","onChange"])]),k("div",null,[k("span",null,x(e.result3),1)]),k(s,{size:"small",type:"primary",onClick:l[16]||(l[16]=l=>e.chooseAll(!0))},{default:G((()=>[de])),_:1}),k(s,{size:"small",type:"primary",onClick:l[17]||(l[17]=l=>e.chooseAll())},{default:G((()=>[he])),_:1}),k(s,{size:"small",type:"primary",onClick:l[18]||(l[18]=l=>e.chooseAll(!1))},{default:G((()=>[se])),_:1})]),ne,k("div",be,[k("div",null,[k(h,{modelValue:e.checkboxGroup7,"onUpdate:modelValue":l[19]||(l[19]=l=>e.checkboxGroup7=l),direction:"vertical",onChange:e.getChange3},{default:G((()=>[k(d,{label:"选项一"}),k(d,{label:"选项二"}),k(d,{label:"选项三"})])),_:1},8,["modelValue","onChange"])]),k("span",null,x(e.result2),1)])])}));f.render=te,f.__scopeId="data-v-6ced69e3";export default f;
