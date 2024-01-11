import{c as fe,d as re,a as e,T as be,t as ye,m as ge,w as ie,B as se,n as oe,g as r,r as p,b as v,e as t,F as T,i as U,f as I,h as we,o as c,C as y,u as q,j as N,D as H}from"./index-78349c91.js";import{H as ke,I as xe,B as Ie,C as Ce}from"./index-c95b5640.js";import{D as je}from"./index-ec7d5f81.js";import{I as pe,i as Se,s as ae,j as Be,k as de,g as $,m as ze,n as Ae,o as Te,p as Ue,q as Pe,r as Ne,t as De,v as Ve,w as Oe}from"./api-3876dcb1.js";import{G as qe,a as $e}from"./index-e5d5693f.js";import{F as Ge}from"./index-110adccf.js";import{g as Le,l as Re}from"./cfg-10130fc0.js";import{s as Ye,a as me}from"./function-call-d3a64036.js";import{R as Ee}from"./index-04279c89.js";const[Fe,he]=fe("tag"),Me={size:String,mark:Boolean,show:ye,type:ge("default"),color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean};var He=re({name:Fe,props:Me,emits:["close"],setup(i,{slots:s,emit:W}){const K=x=>{x.stopPropagation(),W("close",x)},G=()=>i.plain?{color:i.textColor||i.color,borderColor:i.color}:{color:i.textColor,background:i.color},J=()=>{var x;const{type:Q,mark:D,plain:w,round:V,size:z,closeable:P}=i,C={mark:D,plain:w,round:V};z&&(C[z]=z);const L=P&&e(xe,{name:"cross",class:[he("close"),ke],onClick:K},null);return e("span",{style:G(),class:he([C,Q])},[(x=s.default)==null?void 0:x.call(s),L])};return()=>e(be,{name:i.closeable?"van-fade":void 0},{default:()=>[i.show?J():null]})}});const We=ie(He),[Ke,_]=fe("card"),Je={tag:String,num:oe,desc:String,thumb:String,title:String,price:oe,centered:Boolean,lazyLoad:Boolean,currency:ge("¥"),thumbLink:String,originPrice:oe};var Qe=re({name:Ke,props:Je,emits:["clickThumb"],setup(i,{slots:s,emit:W}){const K=()=>{if(s.title)return s.title();if(i.title)return e("div",{class:[_("title"),"van-multi-ellipsis--l2"]},[i.title])},G=()=>{if(s.tag||i.tag)return e("div",{class:_("tag")},[s.tag?s.tag():e(We,{mark:!0,type:"primary"},{default:()=>[i.tag]})])},J=()=>s.thumb?s.thumb():e(pe,{src:i.thumb,fit:"cover",width:"100%",height:"100%",lazyLoad:i.lazyLoad},null),x=()=>{if(s.thumb||i.thumb)return e("a",{href:i.thumbLink,class:_("thumb"),onClick:w=>W("clickThumb",w)},[J(),G()])},Q=()=>{if(s.desc)return s.desc();if(i.desc)return e("div",{class:[_("desc"),"van-ellipsis"]},[i.desc])},D=()=>{const w=i.price.toString().split(".");return e("div",null,[e("span",{class:_("price-currency")},[i.currency]),e("span",{class:_("price-integer")},[w[0]]),r("."),e("span",{class:_("price-decimal")},[w[1]])])};return()=>{var w,V,z;const P=s.num||se(i.num),C=s.price||se(i.price),L=s["origin-price"]||se(i.originPrice),X=P||C||L||s.bottom,E=C&&e("div",{class:_("price")},[s.price?s.price():D()]),te=L&&e("div",{class:_("origin-price")},[s["origin-price"]?s["origin-price"]():`${i.currency} ${i.originPrice}`]),F=P&&e("div",{class:_("num")},[s.num?s.num():`x${i.num}`]),ce=s.footer&&e("div",{class:_("footer")},[s.footer()]),Z=X&&e("div",{class:_("bottom")},[(w=s["price-top"])==null?void 0:w.call(s),E,te,F,(V=s.bottom)==null?void 0:V.call(s)]);return e("div",{class:_()},[e("div",{class:_("header")},[x(),e("div",{class:_("content",{centered:i.centered})},[e("div",null,[K(),Q(),(z=s.tags)==null?void 0:z.call(s)]),Z])]),ce])}}});const Xe=ie(Qe),Ze=ie(Ye);const et={class:"goods"},tt=I("h2",null,"Commander of your choice",-1),nt=I("br",null,null,-1),at=I("br",null,null,-1),lt=I("br",null,null,-1),st=I("br",null,null,-1),ot=I("br",null,null,-1),rt=I("br",null,null,-1),it={key:0,style:{color:"gray"}},ct={key:1,style:{color:"black"}},ut={key:3},dt=I("br",null,null,-1),mt=I("br",null,null,-1),ht=I("h5",null,"Notice:",-1),ft=I("br",null,null,-1),It=re({__name:"checkInfo",setup(i){const s=p(!1),W=()=>{Re()};function K(){s.value=!0}const G=p(!1);function J(){G.value=!0}const x=p(""),Q=ee=>{let g=sessionStorage.getItem("globalAccountId"),j=parseInt(g),a=sessionStorage.getItem("selectserver"),O=parseInt(a),R=sessionStorage.getItem("commanderkey"),h={accountId:j,serverId:O,userOid:R,cloneCode:x.value};Se("/api/gaw/CommitClone",h).then(l=>{let f=l;if(f&&f.code==1)sessionStorage.removeItem("regetlogs"),sessionStorage.setItem("regetlogs","true"),me({theme:"round-button",title:"apply success!",confirmButtonText:"ok",message:"You have successfully submitted your application! Please be patient as the process may take up to 14 business days. After successful cloning, we will send an email to the cloned commander in Galaxy at War Online."}).then(()=>{we.push("main1")});else{let d="";f.code==15?d="Access frequency too high":f.code==11?d="Unknown account, please log in again":f.code==34?d="This binding code has already cloned 2 commanders, no more cloning allowed":f.code==52?d="Unknown error, please log in again":f.code==35?d="Commander data error, please log in again":f.code==38?d="Binding code incorrect or expired, please confirm and re-enter":f.code==7?d="Commander has already been cloned":f.code==6?d="Data error, please log in again":f.code==21?d="Cloning not available now, please check announcements or try again later":d="error code: "+f.code,me({theme:"round-button",title:"error",confirmButtonText:"ok",message:d}).then(()=>{})}}).catch(l=>{ae("Check network")})},D=p([]),w=p([]),V=p([]),z=p([]),P=p([]),C=p([]),L=p(!1),X=p([]),E=p([]),te=p(!1),F=p([]);(()=>{let ee=sessionStorage.getItem("globalAccountId"),g=parseInt(ee),j=sessionStorage.getItem("selectserver"),a=parseInt(j),O=sessionStorage.getItem("commanderkey");Be("/api/gaw/SyncUser",{accountId:g,serverId:a,userOid:O}).then(S=>{if(S.code==1){let l=S.user;if(l!=null&&l!=null&&l.bases.length>0){let f=sessionStorage.getItem("selectservername");z.value=[],z.value.push({lvinfo:"lv "+l.lv+" "+f,vipinfo:"VIP "+l.vipLv+" "+l.name,scoreinfo:"score: "+l.score,headinfo:Le(l.headUid),dminfo:""+l.dm,taijinginfo:""+l.titanium}),l.dmItems,l.dmShips;let d=[];for(let o=0;o<25;o++)d.push(0);for(let o=0;o<l.bases.length;o++){const u=l.bases[o];for(let m=0;m<u.ships.length;m++)d[m]=d[m]+u.ships[m]}F.value=[];for(let o=0;o<l.ships2dm.length;o++){if(o==21)continue;const u=l.ships2dm[o];let m=d[o],b="f"+(o+1),k=Pe(b),M=Oe(b);for(let A=0;A<6;A++){let ue=16;A%2==1&&(ue=8);let Y="";A==0?Y=M:A==1?Y=u+m+"":A==2?Y="Inheritance quantity":A==3?Y=m+"":A==4?Y="Transforming dark matter":A==5&&(Y="");let _e={span:ue,showtext:Y,dmstr:""+u*k,type:A};F.value.push(_e)}let le={span:24,showtext:"",dmstr:"",type:6};F.value.push(le)}P.value=[],C.value=[];let B=0,n=5;for(const o in l.items2dm){const u=l.items2dm[o];let m=Ne(o),b=ze(o);if(b==0)continue;let k={span:16,namestr:m+" * "+u,dmstr:"",type:0};B<n&&P.value.push(k),C.value.push(k);let M={span:8,namestr:"",dmstr:u*b+"",type:1};B<n&&P.value.push(M),C.value.push(M),B=B+1}C.value.length>n*2&&(L.value=!0),X.value=[],E.value=[],B=0,n=5;for(const o in l.items){const u=l.items[o];let b={namestr:De(o)+" * "+u};B<n&&X.value.push(b),E.value.push(b),B=B+1}E.value.length>n*2&&(te.value=!0),D.value=[];for(let o=0;o<l.techs.length;o++){const u=l.techs[o];let m=Ae(o);D.value.push(m+" lv."+u)}l.techs.length%2!=0&&D.value.push(""),w.value=[];for(let o=0;o<l.skins.length;o++){const u=l.skins[o];let m=Te(u),b=de(u);w.value.push({name:m,imgurl:b})}V.value=[];for(let o=0;o<l.bases.length;o++){const u=l.bases[o];let m={starimg:de(u.skinUid),build:[],name:u.name,jinshu:u.res[0]+"",jingti:u.res[1]+"",gas:u.res[2]+"",shipnum:"0"};for(let k=0;k<u.builds.length;k++){const M=u.builds[k];let le=Ve(k);m.build.push(le+" lv."+M)}let b=0;for(let k=0;k<u.ships.length;k++)b=b+u.ships[k];m.shipnum=b+"",V.value.push(m)}}}}).catch(S=>{ae("Check network")})})();const Z=p(""),ne=p("1095"),ve=()=>{if(ne.value==""){ae("需要输入新账号uid");return}let ee=sessionStorage.getItem("globalAccountId"),g=parseInt(ee),j=ne.value;Ue("/api/gaw/DbgGenCode",{accountId:g,accountUid:j}).then(R=>{let h=R;h.code==1&&(Z.value=h.gawClone.code)}).catch(R=>{ae("Check network")})};return(ee,g)=>{const j=Ie,a=Ce,O=Ge,R=Xe,h=qe,S=$e,l=Ee,f=pe,d=je,B=Ze;return c(),v("div",et,[e(a,{span:"24"},{default:t(()=>[e(j,{plain:"",type:"primary",onClick:W},{default:t(()=>[r("Log out")]),_:1})]),_:1}),e(a,{span:"24"},{default:t(()=>[e(O,{modelValue:ne.value,"onUpdate:modelValue":g[0]||(g[0]=n=>ne.value=n),size:"normal",placeholder:"输入新账号id","input-align":"center"},null,8,["modelValue"]),e(j,{plain:"",type:"primary",onClick:ve},{default:t(()=>[r("获得绑定码(开发测试)")]),_:1}),e(O,{modelValue:Z.value,"onUpdate:modelValue":g[1]||(g[1]=n=>Z.value=n),size:"normal",placeholder:"bind code","input-align":"center"},null,8,["modelValue"])]),_:1}),e(a,{span:"24",class:"center"},{default:t(()=>[tt]),_:1}),nt,(c(!0),v(T,null,U(z.value,n=>(c(),y(l,{gutter:[20,0],justify:"center"},{default:t(()=>[e(a,{span:"22"},{default:t(()=>[e(R,{centered:!0,title:n.lvinfo,desc:n.vipinfo,price:n.scoreinfo,currency:"",thumb:n.headinfo},null,8,["title","desc","price","thumb"])]),_:2},1024),e(a,{span:"10",class:"center"},{default:t(()=>[e(S,{direction:"horizontal","column-num":1},{default:t(()=>[e(h,{icon:q($)("../res/smallIcon5.png"),text:n.dminfo},null,8,["icon","text"])]),_:2},1024)]),_:2},1024),e(a,{span:"12",class:"left"},{default:t(()=>[e(S,{direction:"horizontal","column-num":1},{default:t(()=>[e(h,{icon:q($)("../res/smallIcon4.png"),text:n.taijinginfo},null,8,["icon","text"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),256)),at,e(l,{gutter:[0,0],justify:"center"},{default:t(()=>[e(a,{span:"24",class:"center"},{default:t(()=>[r("Item Exchange")]),_:1}),(c(!0),v(T,null,U(P.value,n=>(c(),y(a,{class:"left",span:n.span},{default:t(()=>[r(N(n.namestr)+" ",1),n.type==1?(c(),y(S,{key:0,direction:"horizontal","column-num":1},{default:t(()=>[e(h,{icon:q($)("../res/smallIcon5.png"),text:n.dmstr},null,8,["icon","text"])]),_:2},1024)):H("",!0)]),_:2},1032,["span"]))),256)),L.value?(c(),y(j,{key:0,type:"primary",size:"large",round:"",onClick:K},{default:t(()=>[r("show all")]),_:1})):H("",!0)]),_:1}),lt,e(l,{gutter:[0,0],justify:"center"},{default:t(()=>[e(a,{span:"24",class:"center"},{default:t(()=>[r("Cloneable Item")]),_:1}),(c(!0),v(T,null,U(X.value,n=>(c(),y(a,{span:"24",class:"left"},{default:t(()=>[r(N(n.namestr),1)]),_:2},1024))),256)),te.value?(c(),y(j,{key:0,type:"primary",size:"large",round:"",onClick:J},{default:t(()=>[r("show all")]),_:1})):H("",!0)]),_:1}),st,e(l,{gutter:[0,10],justify:"center"},{default:t(()=>[e(a,{span:"24",class:"center"},{default:t(()=>[r("technology")]),_:1}),(c(!0),v(T,null,U(D.value,n=>(c(),y(a,{span:"12",class:"left"},{default:t(()=>[r(N(n),1)]),_:2},1024))),256))]),_:1}),ot,(c(!0),v(T,null,U(V.value,n=>(c(),v("div",null,[e(l,{gutter:[0,0],justify:"center"},{default:t(()=>[e(a,{span:"4",class:"center"},{default:t(()=>[e(f,{width:"10rem",height:"10rem",fit:"contain",src:n.starimg},null,8,["src"])]),_:2},1024),e(a,{span:"20",class:"left"},{default:t(()=>[e(S,{direction:"horizontal","column-num":2},{default:t(()=>[e(h,{text:n.name},null,8,["text"]),e(h,{text:""}),e(h,{icon:q($)("../res/smallIcon0.png"),text:n.jinshu},null,8,["icon","text"]),e(h,{icon:q($)("../res/smallIcon1.png"),text:n.jingti},null,8,["icon","text"]),e(h,{icon:q($)("../res/smallIcon2.png"),text:n.gas},null,8,["icon","text"]),e(h,{icon:"",text:""})]),_:2},1024)]),_:2},1024),(c(!0),v(T,null,U(n.build,o=>(c(),y(a,{span:"12",class:"left"},{default:t(()=>[r(N(o),1)]),_:2},1024))),256))]),_:2},1024),rt]))),256)),e(l,{gutter:[0,0],justify:"center"},{default:t(()=>[e(a,{span:"24",class:"center"},{default:t(()=>[r("Number of battleships")]),_:1}),(c(!0),v(T,null,U(F.value,n=>(c(),y(a,{class:"left",span:n.span},{default:t(()=>[n.type==2||n.type==4?(c(),v("div",it,N(n.showtext),1)):(c(),v("div",ct,N(n.showtext),1)),n.type==5?(c(),y(S,{key:2,direction:"horizontal","column-num":1},{default:t(()=>[e(h,{icon:q($)("../res/smallIcon5.png"),text:n.dmstr},null,8,["icon","text"])]),_:2},1024)):H("",!0),n.type==6?(c(),v("div",ut,[e(d,{style:{color:"#1989fa",borderColor:"#1989fa",padding:"0 16px"}})])):H("",!0)]),_:2},1032,["span"]))),256))]),_:1}),dt,e(l,{gutter:[0,10],justify:"center"},{default:t(()=>[e(a,{span:"24",class:"center"},{default:t(()=>[r("Planet Skin")]),_:1}),e(a,{span:"24"},{default:t(()=>[(c(!0),v(T,null,U(w.value,n=>(c(),y(f,{width:"6rem",height:"6rem",fit:"cover",position:"left",src:n.imgurl},{default:t(()=>[r(N(n.name),1)]),_:2},1032,["src"]))),256))]),_:1})]),_:1}),mt,I("div",null,[e(a,{span:"24",class:"center"},{default:t(()=>[ht]),_:1}),e(a,{span:"24",class:"huanhangsuojin"},{default:t(()=>[r("1. You can inherit all technologies.")]),_:1}),e(a,{span:"24",class:"huanhangsuojin"},{default:t(()=>[r("2. You can inherit some items, and items that cannot be inherited will be converted into an equivalent amount of Dark Matter.")]),_:1}),e(a,{span:"24",class:"huanhangsuojin"},{default:t(()=>[r("3. You can inherit some fleets; any fleets exceeding the limit will be converted into an equivalent amount of Dark Matter.")]),_:1}),e(a,{span:"24",class:"huanhangsuojin"},{default:t(()=>[r("4. You can inherit all resources, including Dark Matter.")]),_:1}),e(a,{span:"24",class:"huanhangsuojin"},{default:t(()=>[r("5. You can inherit all planets.")]),_:1}),e(a,{span:"24",class:"huanhangsuojin"},{default:t(()=>[r("6. You can rename your character.")]),_:1}),e(a,{span:"24",class:"huanhangsuojin"},{default:t(()=>[r("7. Alliances cannot undergo inheritance; the alliance leader will receive some Dark Matter as compensation.")]),_:1}),e(a,{span:"24",class:"huanhangsuojin"},{default:t(()=>[r("8. After the clone, there is a waiting period for the clone to be successful, lasting no more than 14 business days.")]),_:1}),e(a,{span:"24",class:"huanhangsuojin"},{default:t(()=>[r("9. After successful cloning, the commander in Galaxy at War Online can still play.")]),_:1}),e(a,{span:"24",class:"huanhangsuojin"},{default:t(()=>[r("10. The cloned commander will be automatically placed on the 200th server of Galaxy at War: Nebula Overlords.")]),_:1}),e(a,{span:"24",class:"huanhangsuojin"},{default:t(()=>[r("11. The cloning process requires a waiting period of up to 14 business days.")]),_:1}),e(a,{span:"24",class:"huanhangsuojin"},{default:t(()=>[r("12. Each bind code can bind with up to 2 commanders.")]),_:1}),e(d,{style:{color:"#1989fa",borderColor:"#1989fa",padding:"0 16px"}}),e(a,{span:"24",class:"center"},{default:t(()=>[r("Enter the binding code for galaxy at war: nebula overlords")]),_:1}),e(a,{span:"24",class:"center"},{default:t(()=>[e(O,{modelValue:x.value,"onUpdate:modelValue":g[2]||(g[2]=n=>x.value=n),size:"normal",placeholder:"input code",round:"","input-align":"center"},null,8,["modelValue"])]),_:1}),e(a,{span:"24",class:"center"},{default:t(()=>[r("we will inform you the latest update by email & in-game-messsage")]),_:1}),e(j,{type:"primary",size:"large",disabled:x.value=="",round:"",onClick:Q},{default:t(()=>[r("Accept terms & Apply")]),_:1},8,["disabled"])]),e(B,{show:s.value,"onUpdate:show":g[3]||(g[3]=n=>s.value=n),title:"item exchange",showConfirmButton:!1,closeOnClickOverlay:!0,width:"90%"},{default:t(()=>[e(l,{gutter:[0,0],justify:"center"},{default:t(()=>[(c(!0),v(T,null,U(C.value,n=>(c(),y(a,{class:"left",span:n.span},{default:t(()=>[r(N(n.namestr)+" ",1),n.type==1?(c(),y(S,{key:0,direction:"horizontal","column-num":1},{default:t(()=>[e(h,{icon:q($)("../res/smallIcon5.png"),text:n.dmstr},null,8,["icon","text"])]),_:2},1024)):H("",!0)]),_:2},1032,["span"]))),256))]),_:1})]),_:1},8,["show"]),e(B,{show:G.value,"onUpdate:show":g[4]||(g[4]=n=>G.value=n),title:"Cloneable Item",showConfirmButton:!1,closeOnClickOverlay:!0,width:"90%",style:{height:"70%","overflow-y":"auto"}},{default:t(()=>[e(l,{gutter:[0,0],justify:"center"},{default:t(()=>[(c(!0),v(T,null,U(E.value,n=>(c(),y(a,{span:"24",class:"left"},{default:t(()=>[r(N(n.namestr),1)]),_:2},1024))),256))]),_:1}),ft]),_:1},8,["show"])])}}});export{It as default};
