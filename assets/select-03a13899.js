import{c as W,k as M,m as q,t as X,d as J,r as p,a as t,p as G,l as Y,w as Z,b as z,e as a,f as _,o as O,g as B,F as ee,i as te,j,h as K}from"./index-78349c91.js";import{R as oe,a as ne}from"./index-033f1c1a.js";import{L as ae}from"./index-e1943a67.js";import{D as le}from"./index-ec7d5f81.js";import{C as se}from"./index-4f04d5a5.js";import{p as ce,C as re,B as ie}from"./index-c95b5640.js";import{S as ue}from"./index-fc8ecd84.js";import{u as de,e as ve,s as $,f as me,I as pe}from"./api-3876dcb1.js";import{f as Q,u as fe,F as _e}from"./index-110adccf.js";import{g as H,l as ge}from"./cfg-10130fc0.js";import{R as he}from"./index-04279c89.js";const[Ie,w,ke]=W("search"),be=M({},Q,{label:String,shape:q("square"),leftIcon:q("search"),clearable:X,actionText:String,background:String,showAction:Boolean});var Ce=J({name:Ie,props:be,emits:["blur","focus","clear","search","cancel","clickInput","clickLeftIcon","clickRightIcon","update:modelValue"],setup(m,{emit:l,slots:n,attrs:g}){const V=fe(),u=p(),C=()=>{n.action||(l("update:modelValue",""),l("cancel"))},y=e=>{e.keyCode===13&&(ce(e),l("search",m.modelValue))},R=()=>m.id||`${V}-input`,N=()=>{if(n.label||m.label)return t("label",{class:w("label"),for:R()},[n.label?n.label():m.label])},U=()=>{if(m.showAction){const e=m.actionText||ke("cancel");return t("div",{class:w("action"),role:"button",tabindex:0,onClick:C},[n.action?n.action():e])}},E=()=>{var e;return(e=u.value)==null?void 0:e.blur()},P=()=>{var e;return(e=u.value)==null?void 0:e.focus()},x=e=>l("blur",e),b=e=>l("focus",e),A=e=>l("clear",e),D=e=>l("clickInput",e),F=e=>l("clickLeftIcon",e),T=e=>l("clickRightIcon",e),c=Object.keys(Q),d=()=>{const e=M({},g,G(m,c),{id:R()}),r=I=>l("update:modelValue",I);return t(_e,Y({ref:u,type:"search",class:w("field",{"with-message":e.errorMessage}),border:!1,onBlur:x,onFocus:b,onClear:A,onKeypress:y,onClickInput:D,onClickLeftIcon:F,onClickRightIcon:T,"onUpdate:modelValue":r},e),G(n,["left-icon","right-icon"]))};return de({focus:P,blur:E}),()=>{var e;return t("div",{class:w({"show-action":m.showAction}),style:{background:m.background}},[(e=n.left)==null?void 0:e.call(n),t("div",{class:w("content",m.shape)},[N(),d()]),U()])}}});const ye=Z(Ce);const xe={class:"goods"},Se=_("h2",null,"chose your commonder",-1),Le=_("br",null,null,-1),we={style:{display:"flex",width:"100%"}},Ve={style:{flex:1,marginLeft:"16px"}},Re={class:"van-ellipsis"},Ae={class:"van-ellipsis"},Be={class:"van-ellipsis"},Ne=_("br",null,null,-1),Ue=_("br",null,null,-1),He=J({__name:"select",setup(m){const l=()=>{ge()},n=p(!1),g=p(!1),V=p(!1),u=p(""),C=p(""),y=p(""),R=c=>U(),N=()=>E(y.value),U=c=>{},E=c=>{if(c=="")return;V.value=!0;let d=sessionStorage.getItem("globalAccountId"),e=parseInt(d),r=sessionStorage.getItem("selectserver"),I=parseInt(r),S={accountId:e,serverId:I,name:c},h="/api/gaw/Search";n.value=!0,me(h,S).then(i=>{if(n.value=!1,i.code==1){let f=i.users;if(f!=null&&f!=null&&f.length>0){let k=sessionStorage.getItem("selectservername"),o=p([]);for(let L=0;L<f.length;L++){const s=f[L];o.value.push({uid:s.oid,lv:s.lv,lvstr:"lv "+s.lv+" "+k,vipLv:s.vipLv,name:s.name,vipLvstr:"VIP "+s.vipLv+" "+s.name,score:s.score,scorestr:"score: "+s.score,dm:s.dm,imgurl:H(s.headUid)}),C.value=s.oid}u.value=o.value[0].uid,b.value=o.value}else b.value=[]}else i.code==4&&l()}).catch(i=>{$("Check network")})},P=()=>{V.value||g.value==!1&&A()},x=p([]),b=p([]),A=()=>{let c=sessionStorage.getItem("globalAccountId"),d=parseInt(c),e=sessionStorage.getItem("selectserver"),r=parseInt(e),I={accountId:d,serverId:r,oid:C.value},S="/api/gaw/Users";n.value=!0,ve(S,I).then(h=>{if(n.value=!1,h.code==1){let i=h.users;if(i!=null&&i!=null&&i.length>0){let f=sessionStorage.getItem("selectservername");for(let k=0;k<i.length;k++){const o=i[k];x.value.push({uid:o.oid,lv:o.lv,lvstr:"lv "+o.lv+" "+f,vipLv:o.vipLv,name:o.name,vipLvstr:"VIP "+o.vipLv+" "+o.name,score:o.score,scorestr:"score: "+o.score,dm:o.dm,imgurl:H(o.headUid)}),C.value=o.oid}u.value==""&&(u.value=x.value[0].uid),b.value=x.value,i.length<20&&(g.value=!0)}else g.value=!0}else g.value=!0,h.code==4&&l()}).catch(h=>{g.value=!0,$("Check network")})};A();const D=c=>{u.value=c.uid},F=c=>{K.push("main1")},T=c=>{u.value!=""&&(sessionStorage.setItem("commanderkey",u.value),K.push("checkInfo"))};return(c,d)=>{const e=ie,r=re,I=ye,S=pe,h=ue,i=ne,f=he,k=se,o=le,L=ae,s=oe;return O(),z("div",xe,[t(r,{span:"24"},{default:a(()=>[t(e,{plain:"",type:"primary",onClick:l},{default:a(()=>[B("Log out")]),_:1})]),_:1}),t(r,{span:"24",class:"center"},{default:a(()=>[Se]),_:1}),t(I,{modelValue:y.value,"onUpdate:modelValue":d[0]||(d[0]=v=>y.value=v),"show-action":"",placeholder:"commonder name",onSearch:R},{action:a(()=>[t(e,{type:"primary",size:"small",onClick:N},{default:a(()=>[B("Search")]),_:1})]),_:1},8,["modelValue"]),Le,t(s,{modelValue:u.value,"onUpdate:modelValue":d[2]||(d[2]=v=>u.value=v)},{default:a(()=>[t(L,{loading:n.value,"onUpdate:loading":d[1]||(d[1]=v=>n.value=v),finished:g.value,"finished-text":"Nothing more","loading-text":"loading",onLoad:P},{default:a(()=>[(O(!0),z(ee,null,te(b.value,v=>(O(),z("div",null,[t(k,{inset:""},{default:a(()=>[t(f,{gutter:[20,10],justify:"center"},{default:a(()=>[t(r,{span:"20"},{default:a(()=>[t(h,{animate:!1,onClick:Ee=>D(v)},{template:a(()=>[_("div",we,[t(S,{fit:"contain",width:"5rem",height:"5rem",src:v.imgurl},null,8,["src"]),_("div",Ve,[_("div",Re,j(v.lvstr),1),_("div",Ae,j(v.vipLvstr),1),_("div",Be,j(v.scorestr),1)])])]),_:2},1032,["onClick"])]),_:2},1024),t(r,{span:"4",class:"center"},{default:a(()=>[t(i,{name:v.uid},null,8,["name"])]),_:2},1024)]),_:2},1024)]),_:2},1024),t(o,{style:{color:"#1989fa",borderColor:"#1989fa",padding:"0 16px"}})]))),256))]),_:1},8,["loading","finished"])]),_:1},8,["modelValue"]),Ne,t(o,{style:{color:"#1989fa",borderColor:"#1989fa",padding:"0 16px"}}),t(r,{span:"24"},{default:a(()=>[t(e,{type:"primary",size:"large",onClick:T},{default:a(()=>[B("Next")]),_:1})]),_:1}),Ue,t(r,{span:"24"},{default:a(()=>[t(e,{type:"primary",size:"large",onClick:F},{default:a(()=>[B("View application results")]),_:1})]),_:1})])}}});export{He as default};
