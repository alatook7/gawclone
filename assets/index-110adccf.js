import{l as he,s as be,m as ve,f as ye,F as Ie,n as Se,c as ke,a as Ce,p as A,I as P,o as xe}from"./index-c95b5640.js";import{N as Ve,O as Ee,L as we,P as Me,c as Te,n as _,m as w,z as Le,k as Ae,E as Pe,d as Re,I as Be,r as R,s as I,H,Q as _e,v as ze,A as E,y as Ne,a as d,B as S,R as K,S as Oe,l as De,g as Fe,w as We}from"./index-78349c91.js";import{u as $e}from"./api-3876dcb1.js";let qe=0;function je(){const t=Ve(),{name:r="unknown"}=(t==null?void 0:t.type)||{};return`${r}-${++qe}`}function J(t){return Array.isArray(t)?!t.length:t===0?!1:!t}function He(t,r){if(J(t)){if(r.required)return!1;if(r.validateEmpty===!1)return!0}return!(r.pattern&&!r.pattern.test(String(t)))}function Ke(t,r){return new Promise(l=>{const f=r.validator(t,r);if(Ee(f)){f.then(l);return}l(f)})}function U(t,r){const{message:l}=r;return we(l)?l(t,r):l||""}function Ue({target:t}){t.composing=!0}function Y({target:t}){t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}function Ye(t,r){const l=he();t.style.height="auto";let f=t.scrollHeight;if(Me(r)){const{maxHeight:i,minHeight:c}=r;i!==void 0&&(f=Math.min(f,i)),c!==void 0&&(f=Math.max(f,c))}f&&(t.style.height=`${f}px`,be(l))}function Je(t){return t==="number"?{type:"text",inputmode:"decimal"}:t==="digit"?{type:"tel",inputmode:"numeric"}:{type:t}}function v(t){return[...t].length}function B(t,r){return[...t].slice(0,r).join("")}const[Qe,m]=Te("field"),Ge={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:_,formatter:Function,clearIcon:w("clear"),modelValue:Le(""),inputAlign:String,placeholder:String,autocomplete:String,autocapitalize:String,autocorrect:String,errorMessage:String,enterkeyhint:String,clearTrigger:w("focus"),formatTrigger:w("onChange"),spellcheck:{type:Boolean,default:null},error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null}},Xe=Ae({},ve,Ge,{rows:_,type:w("text"),rules:Array,autosize:[Boolean,Object],labelWidth:_,labelClass:Pe,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}});var Ze=Re({name:Qe,props:Xe,emits:["blur","focus","clear","keypress","clickInput","endValidate","startValidate","clickLeftIcon","clickRightIcon","update:modelValue"],setup(t,{emit:r,slots:l}){const f=je(),i=Be({status:"unvalidated",focused:!1,validateMessage:""}),c=R(),z=R(),M=R(),{parent:h}=ye(Ie),y=()=>{var e;return String((e=t.modelValue)!=null?e:"")},u=e=>{if(S(t[e]))return t[e];if(h&&S(h.props[e]))return h.props[e]},Q=I(()=>{const e=u("readonly");if(t.clearable&&!e){const n=y()!=="",a=t.clearTrigger==="always"||t.clearTrigger==="focus"&&i.focused;return n&&a}return!1}),N=I(()=>M.value&&l.input?M.value():t.modelValue),G=I(()=>{var e;const n=u("required");return n==="auto"?(e=t.rules)==null?void 0:e.some(a=>a.required):n}),X=e=>e.reduce((n,a)=>n.then(()=>{if(i.status==="failed")return;let{value:o}=N;if(a.formatter&&(o=a.formatter(o,a)),!He(o,a)){i.status="failed",i.validateMessage=U(o,a);return}if(a.validator)return J(o)&&a.validateEmpty===!1?void 0:Ke(o,a).then(s=>{s&&typeof s=="string"?(i.status="failed",i.validateMessage=s):s===!1&&(i.status="failed",i.validateMessage=U(o,a))})}),Promise.resolve()),k=()=>{i.status="unvalidated",i.validateMessage=""},O=()=>r("endValidate",{status:i.status,message:i.validateMessage}),D=(e=t.rules)=>new Promise(n=>{k(),e?(r("startValidate"),X(e).then(()=>{i.status==="failed"?(n({name:t.name,message:i.validateMessage}),O()):(i.status="passed",n(),O())})):n()}),T=e=>{if(h&&t.rules){const{validateTrigger:n}=h.props,a=K(n).includes(e),o=t.rules.filter(s=>s.trigger?K(s.trigger).includes(e):a);o.length&&D(o)}},Z=e=>{var n;const{maxlength:a}=t;if(S(a)&&v(e)>+a){const o=y();if(o&&v(o)===+a)return o;const s=(n=c.value)==null?void 0:n.selectionEnd;if(i.focused&&s){const g=[...e],b=g.length-+a;return g.splice(s-b,b),g.join("")}return B(e,+a)}return e},C=(e,n="onChange")=>{const a=e;e=Z(e);const o=v(a)-v(e);if(t.type==="number"||t.type==="digit"){const g=t.type==="number";e=Oe(e,g,g)}let s=0;if(t.formatter&&n===t.formatTrigger){const{formatter:g,maxlength:b}=t;if(e=g(e),S(b)&&v(e)>+b&&(e=B(e,+b)),c.value&&i.focused){const{selectionEnd:V}=c.value,j=B(a,V);s=v(g(j))-v(j)}}if(c.value&&c.value.value!==e)if(i.focused){let{selectionStart:g,selectionEnd:b}=c.value;if(c.value.value=e,S(g)&&S(b)){const V=v(e);o?(g-=o,b-=o):s&&(g+=s,b+=s),c.value.setSelectionRange(Math.min(g,V),Math.min(b,V))}}else c.value.value=e;e!==t.modelValue&&r("update:modelValue",e)},p=e=>{e.target.composing||C(e.target.value)},L=()=>{var e;return(e=c.value)==null?void 0:e.blur()},F=()=>{var e;return(e=c.value)==null?void 0:e.focus()},x=()=>{const e=c.value;t.type==="textarea"&&t.autosize&&e&&Ye(e,t.autosize)},ee=e=>{i.focused=!0,r("focus",e),E(x),u("readonly")&&L()},te=e=>{i.focused=!1,C(y(),"onBlur"),r("blur",e),!u("readonly")&&(T("onBlur"),E(x),xe())},W=e=>r("clickInput",e),ne=e=>r("clickLeftIcon",e),ae=e=>r("clickRightIcon",e),re=e=>{A(e),r("update:modelValue",""),r("clear",e)},$=I(()=>{if(typeof t.error=="boolean")return t.error;if(h&&h.props.showError&&i.status==="failed")return!0}),ie=I(()=>{const e=u("labelWidth"),n=u("labelAlign");if(e&&n!=="top")return{width:H(e)}}),le=e=>{e.keyCode===13&&(!(h&&h.props.submitOnEnter)&&t.type!=="textarea"&&A(e),t.type==="search"&&L()),r("keypress",e)},q=()=>t.id||`${f}-input`,oe=()=>i.status,se=()=>{const e=m("control",[u("inputAlign"),{error:$.value,custom:!!l.input,"min-height":t.type==="textarea"&&!t.autosize}]);if(l.input)return d("div",{class:e,onClick:W},[l.input()]);const n={id:q(),ref:c,name:t.name,rows:t.rows!==void 0?+t.rows:void 0,class:e,disabled:u("disabled"),readonly:u("readonly"),autofocus:t.autofocus,placeholder:t.placeholder,autocomplete:t.autocomplete,autocapitalize:t.autocapitalize,autocorrect:t.autocorrect,enterkeyhint:t.enterkeyhint,spellcheck:t.spellcheck,"aria-labelledby":t.label?`${f}-label`:void 0,onBlur:te,onFocus:ee,onInput:p,onClick:W,onChange:Y,onKeypress:le,onCompositionend:Y,onCompositionstart:Ue};return t.type==="textarea"?d("textarea",n,null):d("input",De(Je(t.type),n),null)},ce=()=>{const e=l["left-icon"];if(t.leftIcon||e)return d("div",{class:m("left-icon"),onClick:ne},[e?e():d(P,{name:t.leftIcon,classPrefix:t.iconPrefix},null)])},ue=()=>{const e=l["right-icon"];if(t.rightIcon||e)return d("div",{class:m("right-icon"),onClick:ae},[e?e():d(P,{name:t.rightIcon,classPrefix:t.iconPrefix},null)])},de=()=>{if(t.showWordLimit&&t.maxlength){const e=v(y());return d("div",{class:m("word-limit")},[d("span",{class:m("word-num")},[e]),Fe("/"),t.maxlength])}},fe=()=>{if(h&&h.props.showErrorMessage===!1)return;const e=t.errorMessage||i.validateMessage;if(e){const n=l["error-message"],a=u("errorMessageAlign");return d("div",{class:m("error-message",a)},[n?n({message:e}):e])}},ge=()=>{const e=u("labelWidth"),n=u("labelAlign"),a=u("colon")?":":"";if(l.label)return[l.label(),a];if(t.label)return d("label",{id:`${f}-label`,for:l.input?void 0:q(),onClick:o=>{A(o),F()},style:n==="top"&&e?{width:H(e)}:void 0},[t.label+a])},me=()=>[d("div",{class:m("body")},[se(),Q.value&&d(P,{ref:z,name:t.clearIcon,class:m("clear")},null),ue(),l.button&&d("div",{class:m("button")},[l.button()])]),de(),fe()];return $e({blur:L,focus:F,validate:D,formValue:N,resetValidation:k,getValidationStatus:oe}),_e(Se,{customValue:M,resetValidation:k,validateWithTrigger:T}),ze(()=>t.modelValue,()=>{C(y()),k(),T("onChange"),E(x)}),Ne(()=>{C(y(),t.formatTrigger),E(x)}),ke("touchstart",re,{target:I(()=>{var e;return(e=z.value)==null?void 0:e.$el})}),()=>{const e=u("disabled"),n=u("labelAlign"),a=ce(),o=()=>{const s=ge();return n==="top"?[a,s].filter(Boolean):s||[]};return d(Ce,{size:t.size,class:m({error:$.value,disabled:e,[`label-${n}`]:n}),center:t.center,border:t.border,isLink:t.isLink,clickable:t.clickable,titleStyle:ie.value,valueClass:m("value"),titleClass:[m("label",[n,{required:G.value}]),t.labelClass],arrowDirection:t.arrowDirection},{icon:a&&n!=="top"?()=>a:null,title:o,value:me,extra:l.extra})}}});const nt=We(Ze);export{nt as F,Ge as f,je as u};
