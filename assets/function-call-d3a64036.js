import{z as M,u as U,A as W,B as j,P as J,C as V,D as Y,E as q}from"./api-3876dcb1.js";import{r as S,y as G,A as O,v as Q,a as s,c as T,d as A,t as k,w as R,k as v,s as D,n as X,E as Z,m as ee,I as te,J as ne,l as I,p as oe,H as ae,K as E,L as le,M as se}from"./index-78349c91.js";import{w as ce,g as re,d as ie,u as ue,r as de,h as fe,f as me,B as x,j as Be,k as ge}from"./index-c95b5640.js";const he=(e,a)=>{const n=S(),o=()=>{n.value=ie(e).height};return G(()=>{if(O(o),a)for(let l=1;l<=3;l++)setTimeout(o,100*l)}),M(()=>O(o)),Q([ce,re],o),n};function we(e,a){const n=he(e,!0);return o=>s("div",{class:a("placeholder"),style:{height:n.value?`${n.value}px`:void 0}},[o()])}const[N,_]=T("action-bar"),F=Symbol(N),ve={placeholder:Boolean,safeAreaInsetBottom:k};var Ce=A({name:N,props:ve,setup(e,{slots:a}){const n=S(),o=we(n,_),{linkChildren:l}=ue(F);l();const f=()=>{var m;return s("div",{ref:n,class:[_(),{"van-safe-area-bottom":e.safeAreaInsetBottom}]},[(m=a.default)==null?void 0:m.call(a)])};return()=>e.placeholder?o(f):f()}});const be=R(Ce),[ye,Pe]=T("action-bar-button"),ke=v({},de,{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean});var xe=A({name:ye,props:ke,setup(e,{slots:a}){const n=fe(),{parent:o,index:l}=me(F),f=D(()=>{if(o){const r=o.children[l.value-1];return!(r&&"isButton"in r)}}),m=D(()=>{if(o){const r=o.children[l.value+1];return!(r&&"isButton"in r)}});return U({isButton:!0}),()=>{const{type:r,icon:B,text:g,color:C,loading:b,disabled:y}=e;return s(x,{class:Pe([r,{last:m.value,first:f.value}]),size:"large",type:r,icon:B,color:C,loading:b,disabled:y,onClick:n},{default:()=>[a.default?a.default():g]})}}});const H=R(xe),[pe,i,w]=T("dialog"),Se=v({},W,{title:String,theme:String,width:X,message:[String,Function],callback:Function,allowHtml:Boolean,className:Z,transition:ee("van-dialog-bounce"),messageAlign:String,closeOnPopstate:k,showCancelButton:Boolean,cancelButtonText:String,cancelButtonColor:String,cancelButtonDisabled:Boolean,confirmButtonText:String,confirmButtonColor:String,confirmButtonDisabled:Boolean,showConfirmButton:k,closeOnClickOverlay:Boolean}),Te=[...j,"transition","closeOnPopstate"];var Ae=A({name:pe,props:Se,emits:["confirm","cancel","keydown","update:show"],setup(e,{emit:a,slots:n}){const o=S(),l=te({confirm:!1,cancel:!1}),f=t=>a("update:show",t),m=t=>{var c;f(!1),(c=e.callback)==null||c.call(e,t)},r=t=>()=>{e.show&&(a(t),e.beforeClose?(l[t]=!0,V(e.beforeClose,{args:[t],done(){m(t),l[t]=!1},canceled(){l[t]=!1}})):m(t))},B=r("cancel"),g=r("confirm"),C=ne(t=>{var c,u;if(t.target!==((u=(c=o.value)==null?void 0:c.popupRef)==null?void 0:u.value))return;({Enter:e.showConfirmButton?g:E,Escape:e.showCancelButton?B:E})[t.key](),a("keydown",t)},["enter","esc"]),b=()=>{const t=n.title?n.title():e.title;if(t)return s("div",{class:i("header",{isolated:!e.message&&!n.default})},[t])},y=t=>{const{message:c,allowHtml:u,messageAlign:d}=e,h=i("message",{"has-title":t,[d]:d}),P=le(c)?c():c;return u&&typeof P=="string"?s("div",{class:h,innerHTML:P},null):s("div",{class:h},[P])},K=()=>{if(n.default)return s("div",{class:i("content")},[n.default()]);const{title:t,message:c,allowHtml:u}=e;if(c){const d=!!(t||n.title);return s("div",{key:u?1:0,class:i("content",{isolated:!d})},[y(d)])}},$=()=>s("div",{class:[ge,i("footer")]},[e.showCancelButton&&s(x,{size:"large",text:e.cancelButtonText||w("cancel"),class:i("cancel"),style:{color:e.cancelButtonColor},loading:l.cancel,disabled:e.cancelButtonDisabled,onClick:B},null),e.showConfirmButton&&s(x,{size:"large",text:e.confirmButtonText||w("confirm"),class:[i("confirm"),{[Be]:e.showCancelButton}],style:{color:e.confirmButtonColor},loading:l.confirm,disabled:e.confirmButtonDisabled,onClick:g},null)]),L=()=>s(be,{class:i("footer")},{default:()=>[e.showCancelButton&&s(H,{type:"warning",text:e.cancelButtonText||w("cancel"),class:i("cancel"),color:e.cancelButtonColor,loading:l.cancel,disabled:e.cancelButtonDisabled,onClick:B},null),e.showConfirmButton&&s(H,{type:"danger",text:e.confirmButtonText||w("confirm"),class:i("confirm"),color:e.confirmButtonColor,loading:l.confirm,disabled:e.confirmButtonDisabled,onClick:g},null)]}),z=()=>n.footer?n.footer():e.theme==="round-button"?L():$();return()=>{const{width:t,title:c,theme:u,message:d,className:h}=e;return s(J,I({ref:o,role:"dialog",class:[i([u]),h],style:{width:ae(t)},tabindex:0,"aria-labelledby":c||d,onKeydown:C,"onUpdate:show":f},oe(e,Te)),{default:()=>[b(),K(),z()]})}}});let p;const Oe={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,cancelButtonDisabled:!1,confirmButtonText:"",confirmButtonColor:null,confirmButtonDisabled:!1,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1};let De=v({},Oe);function Ee(){({instance:p}=Y({setup(){const{state:a,toggle:n}=q();return()=>s(Ae,I(a,{"onUpdate:show":n}),null)}}))}function Ie(e){return se?new Promise((a,n)=>{p||Ee(),p.open(v({},De,e,{callback:o=>{(o==="confirm"?a:n)(o)}}))}):Promise.resolve(void 0)}export{Ie as a,Ae as s};
