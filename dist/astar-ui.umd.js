var Pt=Object.defineProperty,Ut=Object.defineProperties;var Ft=Object.getOwnPropertyDescriptors;var s1=Object.getOwnPropertySymbols;var Gt=Object.prototype.hasOwnProperty,Tt=Object.prototype.propertyIsEnumerable;var r1=(o,e,d)=>e in o?Pt(o,e,{enumerable:!0,configurable:!0,writable:!0,value:d}):o[e]=d,a=(o,e)=>{for(var d in e||(e={}))Gt.call(e,d)&&r1(o,d,e[d]);if(s1)for(var d of s1(e))Tt.call(e,d)&&r1(o,d,e[d]);return o},g=(o,e)=>Ut(o,Ft(e));(function(o,e){typeof exports=="object"&&typeof module!="undefined"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(o=typeof globalThis!="undefined"?globalThis:o||self,e(o.AstarUI={},o.Vue))})(this,function(o,e){"use strict";var d="",c=(t,n)=>{const s=t.__vccOpts||t;for(const[l,r]of n)s[l]=r;return s},B;(function(t){t[t.H1=0]="H1",t[t.H2=1]="H2",t[t.H3=2]="H3",t[t.H4=3]="H4",t[t.H5=4]="H5",t[t.H6=5]="H6",t[t.H7=6]="H7"})(B||(B={}));const l1=e.defineComponent({name:"Text",props:{type:{required:!0,type:String,default:"H1"}},setup(t){return a({},e.toRefs(t))}});function i1(t,n,s,l,r,i){return e.openBlock(),e.createElementBlock("span",{class:e.normalizeClass(`text_${t.type}`)},[e.renderSlot(t.$slots,"default",{},void 0,!0)],2)}var y=c(l1,[["render",i1],["__scopeId","data-v-76874ba1"]]);const h={install(t){t.component("astar-text",y)}};var Wt="";const a1=e.defineComponent({}),p=t=>(e.pushScopeId("data-v-6b0ec7d8"),t=t(),e.popScopeId(),t),d1={class:"loader"},_1=[p(()=>e.createElementVNode("div",{class:"one"},null,-1)),p(()=>e.createElementVNode("div",{class:"two"},null,-1)),p(()=>e.createElementVNode("div",{class:"three"},null,-1)),p(()=>e.createElementVNode("div",{class:"four"},null,-1))];function h1(t,n,s,l,r,i){return e.openBlock(),e.createElementBlock("div",d1,_1)}var V=c(a1,[["render",h1],["__scopeId","data-v-6b0ec7d8"]]);const m={install(t){t.component("astar-spinner",V)}},p1={},m1={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},C1=[e.createElementVNode("path",{d:"M12.9399 11.9995L18.4666 6.47281C18.5758 6.34527 18.6329 6.18122 18.6264 6.01344C18.6199 5.84565 18.5504 5.68649 18.4317 5.56776C18.3129 5.44903 18.1538 5.37948 17.986 5.373C17.8182 5.36652 17.6541 5.42359 17.5266 5.53281L11.9999 11.0595L6.47327 5.52614C6.34774 5.4006 6.17748 5.33008 5.99994 5.33008C5.82241 5.33008 5.65214 5.4006 5.52661 5.52614C5.40107 5.65168 5.33055 5.82194 5.33055 5.99947C5.33055 6.17701 5.40107 6.34727 5.52661 6.47281L11.0599 11.9995L5.52661 17.5261C5.45682 17.5859 5.40014 17.6594 5.36012 17.7422C5.32011 17.8249 5.29762 17.915 5.29408 18.0068C5.29053 18.0986 5.306 18.1901 5.33952 18.2757C5.37303 18.3612 5.42387 18.4389 5.48884 18.5039C5.55381 18.5689 5.63151 18.6197 5.71706 18.6532C5.80261 18.6867 5.89416 18.7022 5.98598 18.6987C6.07779 18.6951 6.16788 18.6726 6.25059 18.6326C6.3333 18.5926 6.40684 18.5359 6.46661 18.4661L11.9999 12.9395L17.5266 18.4661C17.6541 18.5754 17.8182 18.6324 17.986 18.6259C18.1538 18.6195 18.3129 18.5499 18.4317 18.4312C18.5504 18.3125 18.6199 18.1533 18.6264 17.9855C18.6329 17.8177 18.5758 17.6537 18.4666 17.5261L12.9399 11.9995Z",fill:"#B1B7C1"},null,-1)];function f1(t,n){return e.openBlock(),e.createElementBlock("svg",m1,C1)}var $1=c(p1,[["render",f1]]),e2="";const k1="fade-in",w1="fade-out",u1="zoom-in",g1=e.defineComponent({components:{IconClose:$1},name:"SimpleModal",props:{show:{type:Boolean,default:!1},title:{type:String},width:{type:Number},height:{type:Number},isCloseIcon:{type:Boolean,require:!1,default:!0},isClosing:{type:Boolean,required:!1,default:!1}},emits:["close"],setup(t,{emit:n}){const s=e.ref(t.show);e.watchEffect(()=>{s.value!==t.show&&(s.value=t.show)});const l=r=>{if(!t.isCloseIcon)return;const i="modal show fade-in";(r.target.className===i||r.target.className.baseVal===""||r.target.className==="column--close")&&n("close")};return g(a({},e.toRefs(t)),{isShow:s,close:l,zoomInClass:u1,fadeInClass:k1,fadeOutClass:w1})}}),B1={key:0,class:"row--close"},y1={class:"column--close"};function V1(t,n,s,l,r,i){const _=e.resolveComponent("IconClose");return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["modal",[t.isShow&&"show",t.isClosing?t.fadeOutClass:t.fadeInClass]]),onClick:n[0]||(n[0]=(...u)=>t.close&&t.close(...u))},[e.createElementVNode("div",{class:e.normalizeClass(["modal-content",t.zoomInClass]),style:e.normalizeStyle(`width: ${t.width}px; height: ${t.height}px;`)},[t.isCloseIcon?(e.openBlock(),e.createElementBlock("div",B1,[e.createElementVNode("div",y1,[e.createVNode(_)])])):e.createCommentVNode("",!0),e.createElementVNode("div",{class:e.normalizeClass(["title",!t.isCloseIcon&&"title--no-close-icon"])},e.toDisplayString(t.title),3),e.renderSlot(t.$slots,"default",{},void 0,!0)],6)],2)}var I=c(g1,[["render",V1],["__scopeId","data-v-1c83a04c"]]),t2="";const E="animate__slideInRight",I1="animate__slideOutRight",E1=e.defineComponent({name:"ModalDrawer",props:{show:{type:Boolean,default:!1},title:{type:String,default:""},isClosing:{type:Boolean,required:!1,default:!1}},emits:["close"],setup(t,{emit:n}){const s=e.ref(E),l=r=>{(r.target.className==="wrapper--modal-drawer"||r.target.className==="close")&&n("close")};return g(a({},e.toRefs(t)),{animation:s,slideOutClass:I1,slideInClass:E,closeHandler:l})}}),S1=t=>(e.pushScopeId("data-v-ec15507a"),t=t(),e.popScopeId(),t),N1={class:"modal-content"},M1=S1(()=>e.createElementVNode("div",{class:"row--close"},[e.createElementVNode("span",{class:"close"},"\xD7")],-1)),H1={class:"title"};function b1(t,n,s,l,r,i){return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(t.show&&"wrapper--modal-drawer"),onClick:n[0]||(n[0]=(..._)=>t.closeHandler&&t.closeHandler(..._))},[e.createElementVNode("div",{class:e.normalizeClass(["animate__animated animate__faster modal",[t.isClosing?t.slideOutClass:t.slideInClass,t.show&&"show"]])},[e.createElementVNode("div",N1,[M1,e.createElementVNode("div",H1,e.toDisplayString(t.title),1),e.renderSlot(t.$slots,"default",{},void 0,!0)])],2)],2)}var S=c(E1,[["render",b1],["__scopeId","data-v-ec15507a"]]);const L1=200,C={install(t){t.component("astar-simple-modal",I),t.component("astar-modal-drawer",S)}};var o2="";const z1=e.defineComponent({name:"IconCloseBtn",setup(t){return a({},e.toRefs(t))}}),x1={type:"button"};function D1(t,n,s,l,r,i){return e.openBlock(),e.createElementBlock("button",x1," \xD7 ")}var N=c(z1,[["render",D1],["__scopeId","data-v-6d08595c"]]),n2="";const Z1=e.defineComponent({name:"IconCopyBtn",setup(t){return a({},e.toRefs(t))}}),j1=t=>(e.pushScopeId("data-v-03b4d7e4"),t=t(),e.popScopeId(),t),R1={type:"button"},v1=[j1(()=>e.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e.createElementVNode("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})],-1))];function A1(t,n,s,l,r,i){return e.openBlock(),e.createElementBlock("button",R1,v1)}var M=c(Z1,[["render",A1],["__scopeId","data-v-03b4d7e4"]]),s2="";const O1=e.defineComponent({name:"IconShareBtn",setup(t){return a({},e.toRefs(t))}}),q1=t=>(e.pushScopeId("data-v-4c791d2f"),t=t(),e.popScopeId(),t),P1={type:"button"},U1=[q1(()=>e.createElementVNode("svg",{viewBox:"0 0 24 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor"},[e.createElementVNode("path",{d:"M21 12V22H0V3H12V5H2V20H19V12H21ZM24 0H13.012L17.047 4L10.07 11.07L12.898 13.898L19.875 6.828L24 11V0Z",fill:"currentColor"})],-1))];function F1(t,n,s,l,r,i){return e.openBlock(),e.createElementBlock("button",P1,U1)}var H=c(O1,[["render",F1],["__scopeId","data-v-4c791d2f"]]);const f={install(t){t.component("astar-icon-close-btn",N),t.component("astar-icon-copy-btn",M),t.component("astar-icon-share-btn",H)}};var l2="";const G1=e.defineComponent({name:"Header",props:{title:{type:String}},setup(t){return a({},e.toRefs(t))}}),T1={class:"header"},W1={class:"header-left"},J1={key:0},K1={key:1},Q1={class:"header-right"};function X1(t,n,s,l,r,i){return e.openBlock(),e.createElementBlock("div",T1,[e.createElementVNode("div",W1,[t.title?(e.openBlock(),e.createElementBlock("div",J1,e.toDisplayString(t.title),1)):(e.openBlock(),e.createElementBlock("div",K1,[e.renderSlot(t.$slots,"left",{},void 0,!0)]))]),e.createElementVNode("div",Q1,[e.renderSlot(t.$slots,"default",{},void 0,!0)])])}var b=c(G1,[["render",X1],["__scopeId","data-v-672b02e9"]]),i2="";const Y1=e.defineComponent({props:{connectionType:{type:String,default:"connected",required:!0},version:{type:String,default:"0.0.0"}},setup(){return{capitalize:n=>typeof n!="string"||!n?n:n.charAt(0).toUpperCase()+n.slice(1).toLowerCase()}},methods:{getDotClass(t){if(t==="connecting")return"orange";if(t==="connected")return"green";if(t==="offline")return"red"}}}),ee={class:"wrapper--indicator"},te={key:0};function oe(t,n,s,l,r,i){return e.openBlock(),e.createElementBlock("div",ee,[e.createElementVNode("div",{class:e.normalizeClass(["dot",t.getDotClass(t.connectionType)])},null,2),e.createElementVNode("div",{class:e.normalizeClass(["txt--status",t.getDotClass(t.connectionType)])},[e.createElementVNode("div",null,[e.createElementVNode("span",null,e.toDisplayString(t.capitalize(t.connectionType)),1)]),t.connectionType==="connected"?(e.openBlock(),e.createElementBlock("div",te,[e.createElementVNode("span",null," v"+e.toDisplayString(t.version),1)])):e.createCommentVNode("",!0)],2)])}var L=c(Y1,[["render",oe],["__scopeId","data-v-7663861b"]]);const $={install(t){t.component("astar-header",b),t.component("astar-connection-indicator",L)}};var a2="";const ne=e.defineComponent({name:"ActionBtn",props:{disabled:{type:Boolean,default:!1},width:{type:Number},height:{type:Number}},setup(t){return a({},e.toRefs(t))}}),ce=["disabled"];function se(t,n,s,l,r,i){return e.openBlock(),e.createElementBlock("button",{type:"button",style:e.normalizeStyle(`width: ${t.width}px; height: ${t.height}px;`),disabled:t.disabled},[e.renderSlot(t.$slots,"default",{},void 0,!0)],12,ce)}var z=c(ne,[["render",se],["__scopeId","data-v-056ab269"]]),d2="";const re=e.defineComponent({name:"Button",props:{disabled:{type:Boolean,default:!1},width:{type:Number},height:{type:Number}},setup(t){return a({},e.toRefs(t))}}),le=["disabled"];function ie(t,n,s,l,r,i){return e.openBlock(),e.createElementBlock("button",{type:"button",style:e.normalizeStyle(`width: ${t.width}px; height: ${t.height}px;`),disabled:t.disabled},[e.renderSlot(t.$slots,"default",{},void 0,!0)],12,le)}var x=c(re,[["render",ie],["__scopeId","data-v-4630c03f"]]),_2="";const ae=e.defineComponent({name:"RadioBtn",props:{checked:{type:Boolean,default:!1}},emits:["change"],setup(t,{emit:n}){const s=()=>{n("change")};return g(a({},e.toRefs(t)),{change:s})}}),de=["checked"];function _e(t,n,s,l,r,i){return e.openBlock(),e.createElementBlock("input",{type:"radio",checked:t.checked,onChange:n[0]||(n[0]=(..._)=>t.change&&t.change(..._))},null,40,de)}var D=c(ae,[["render",_e],["__scopeId","data-v-3c63e1a2"]]),h2="";const he=e.defineComponent({name:"SideNav",props:{title:{type:String},selected:{type:Boolean,default:!1}},setup(t){return a({},e.toRefs(t))}}),pe={class:"fa"},me={class:"title"};function Ce(t,n,s,l,r,i){return e.openBlock(),e.createElementBlock("button",{type:"button",class:e.normalizeClass(t.selected?"selected":"")},[e.createElementVNode("i",pe,[e.renderSlot(t.$slots,"default",{},void 0,!0)]),e.createElementVNode("span",me,e.toDisplayString(t.title),1)],2)}var Z=c(he,[["render",Ce],["__scopeId","data-v-1b9dbc97"]]);const k={install(t){t.component("astar-action-btn",z),t.component("astar-button",x),t.component("astar-radio-btn",D),t.component("astar-side-nav",Z)}},fe=e.defineComponent({props:{iconName:{type:String,default:"box"},width:{type:[Number,String],default:void 0},height:{type:[Number,String],default:void 0},viewBox:{type:String,default:"0 0 24 24"},fill:{type:String,default:"none"},iconColor:{type:String,default:"currentColor"}}}),$e=["width","height","viewBox","fill","aria-labelledby"],ke=["id"],we=["fill"];function ue(t,n,s,l,r,i){return e.openBlock(),e.createElementBlock("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.width,height:t.height,viewBox:t.viewBox,fill:t.fill,"aria-labelledby":t.iconName,role:"presentation"},[e.createElementVNode("title",{id:t.iconName,lang:"en"},e.toDisplayString(t.iconName)+" icon",9,ke),e.createElementVNode("g",{fill:t.iconColor},[e.renderSlot(t.$slots,"default")],8,we)],8,$e)}var j=c(fe,[["render",ue]]);const ge={},Be={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ye=[e.createElementVNode("path",{d:"M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z",fill:"currentColor"},null,-1)];function Ve(t,n){return e.openBlock(),e.createElementBlock("svg",Be,ye)}var R=c(ge,[["render",Ve]]);const Ie={},Ee=[e.createStaticVNode('<circle cx="32" cy="32" fill="#eee" r="32"></circle><circle cx="32" cy="8" fill="hsl(230, 93%, 75%)" r="5"></circle><circle cx="32" cy="20" fill="hsl(90, 93%, 75%)" r="5"></circle><circle cx="21.607695154586736" cy="14" fill="hsl(320, 93%, 35%)" r="5"></circle><circle cx="11.215390309173472" cy="20" fill="hsl(230, 93%, 75%)" r="5"></circle><circle cx="21.607695154586736" cy="26" fill="hsl(90, 93%, 75%)" r="5"></circle><circle cx="11.215390309173472" cy="32" fill="hsl(320, 93%, 35%)" r="5"></circle><circle cx="11.215390309173472" cy="44" fill="hsl(230, 93%, 75%)" r="5"></circle><circle cx="21.607695154586736" cy="38" fill="hsl(90, 93%, 75%)" r="5"></circle><circle cx="21.607695154586736" cy="50" fill="hsl(320, 93%, 35%)" r="5"></circle><circle cx="32" cy="56" fill="hsl(230, 93%, 75%)" r="5"></circle><circle cx="32" cy="44" fill="hsl(90, 93%, 75%)" r="5"></circle><circle cx="42.392304845413264" cy="50" fill="hsl(320, 93%, 35%)" r="5"></circle><circle cx="52.78460969082653" cy="44" fill="hsl(230, 93%, 75%)" r="5"></circle><circle cx="42.392304845413264" cy="38" fill="hsl(90, 93%, 75%)" r="5"></circle><circle cx="52.78460969082653" cy="32" fill="hsl(320, 93%, 35%)" r="5"></circle><circle cx="52.78460969082653" cy="20" fill="hsl(230, 93%, 75%)" r="5"></circle><circle cx="42.392304845413264" cy="26" fill="hsl(90, 93%, 75%)" r="5"></circle><circle cx="42.392304845413264" cy="14" fill="hsl(320, 93%, 35%)" r="5"></circle><circle cx="32" cy="32" fill="hsl(151, 93%, 35%)" r="5"></circle>',20)];function Se(t,n){return e.openBlock(),e.createElementBlock("svg",null,Ee)}var v=c(Ie,[["render",Se]]);const Ne={},Me={width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},He=[e.createElementVNode("path",{d:"M3 19H19M4.25 16.08V10.72M8.80556 16.08V10.72M13.3611 16.08V10.72M17.9167 16.08V10.72M3 7.84L11 3L19 7.84H3Z",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)];function be(t,n){return e.openBlock(),e.createElementBlock("svg",Me,He)}var A=c(Ne,[["render",be]]);const Le={},ze={width:"24",height:"20",viewBox:"0 0 24 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},xe=[e.createElementVNode("path",{d:"M10.3176 4.43951H17.1367V0.999512L23 7.01951L17.1367 13.0295V9.57951H6.86335V6.12951L1 12.1495L6.86335 18.1595V14.7195H13.6724",stroke:"currentColor","stroke-width":"1.7","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)];function De(t,n){return e.openBlock(),e.createElementBlock("svg",ze,xe)}var O=c(Le,[["render",De]]);const Ze={},je={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Re=[e.createElementVNode("path",{d:"M12.9398 11.9995L18.4665 6.47281C18.5757 6.34527 18.6328 6.18122 18.6263 6.01344C18.6198 5.84565 18.5503 5.68649 18.4315 5.56776C18.3128 5.44903 18.1536 5.37948 17.9859 5.373C17.8181 5.36652 17.654 5.42359 17.5265 5.53281L11.9998 11.0595L6.47315 5.52614C6.34762 5.4006 6.17735 5.33008 5.99982 5.33008C5.82228 5.33008 5.65202 5.4006 5.52649 5.52614C5.40095 5.65168 5.33042 5.82194 5.33042 5.99947C5.33042 6.17701 5.40095 6.34727 5.52649 6.47281L11.0598 11.9995L5.52649 17.5261C5.4567 17.5859 5.40002 17.6595 5.36 17.7422C5.31999 17.8249 5.2975 17.915 5.29395 18.0068C5.29041 18.0986 5.30588 18.1901 5.33939 18.2757C5.37291 18.3612 5.42375 18.4389 5.48872 18.5039C5.55369 18.5689 5.63139 18.6197 5.71694 18.6532C5.80249 18.6867 5.89404 18.7022 5.98586 18.6987C6.07767 18.6951 6.16776 18.6726 6.25047 18.6326C6.33318 18.5926 6.40672 18.5359 6.46649 18.4661L11.9998 12.9395L17.5265 18.4661C17.654 18.5754 17.8181 18.6324 17.9859 18.6259C18.1536 18.6195 18.3128 18.5499 18.4315 18.4312C18.5503 18.3125 18.6198 18.1533 18.6263 17.9855C18.6328 17.8177 18.5757 17.6537 18.4665 17.5261L12.9398 11.9995Z",fill:"#5F656F"},null,-1)];function ve(t,n){return e.openBlock(),e.createElementBlock("svg",je,Re)}var q=c(Ze,[["render",ve]]);const Ae={},Oe={width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},qe=[e.createElementVNode("path",{d:"M12 8V20C12 20.5304 12.2107 21.0391 12.5858 21.4142C12.9609 21.7893 13.4696 22 14 22H22C22.5304 22 23.0391 21.7893 23.4142 21.4142C23.7893 21.0391 24 20.5304 24 20V11.242C24 10.9756 23.9467 10.7118 23.8433 10.4662C23.7399 10.2207 23.5885 9.99824 23.398 9.812L20.083 6.57C19.7094 6.20466 19.2076 6.00007 18.685 6H14C13.4696 6 12.9609 6.21071 12.5858 6.58579C12.2107 6.96086 12 7.46957 12 8V8Z","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),e.createElementVNode("path",{d:"M20 22V24C20 24.5304 19.7893 25.0391 19.4142 25.4142C19.0391 25.7893 18.5304 26 18 26H10C9.46957 26 8.96086 25.7893 8.58579 25.4142C8.21071 25.0391 8 24.5304 8 24V13C8 12.4696 8.21071 11.9609 8.58579 11.5858C8.96086 11.2107 9.46957 11 10 11H12","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)];function Pe(t,n){return e.openBlock(),e.createElementBlock("svg",Oe,qe)}var P=c(Ae,[["render",Pe]]);const Ue={},Fe={width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ge=[e.createElementVNode("path",{d:"M3.71111 6.2H18.2889M14.5556 9.4C14.5556 10.2487 14.181 11.0626 13.5142 11.6627C12.8474 12.2629 11.943 12.6 11 12.6C10.057 12.6 9.15264 12.2629 8.48584 11.6627C7.81905 11.0626 7.44444 10.2487 7.44444 9.4M5.66667 3L3 6.2V17.4C3 18.28 3.8 19 4.77778 19H17.2222C17.6937 19 18.1459 18.8314 18.4793 18.5314C18.8127 18.2313 19 17.8243 19 17.4V6.2L16.3333 3H5.66667Z",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)];function Te(t,n){return e.openBlock(),e.createElementBlock("svg",Fe,Ge)}var U=c(Ue,[["render",Te]]);const We={},Je={width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ke=[e.createStaticVNode('<path d="M2.75 8.25V4.125C2.75 3.36561 3.36561 2.75 4.125 2.75H17.875C18.6344 2.75 19.25 3.36561 19.25 4.125V8.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.6665 11V14.2083" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 6.875V14.2083" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.3335 8.70898V14.209" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.75 13.75V17.875C2.75 18.6344 3.36561 19.25 4.125 19.25H17.875C18.6344 19.25 19.25 18.6344 19.25 17.875V13.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>',5)];function Qe(t,n){return e.openBlock(),e.createElementBlock("svg",Je,Ke)}var F=c(We,[["render",Qe]]);const Xe={},Ye={fill:"currentColor",d:"M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"};function et(t,n){return e.openBlock(),e.createElementBlock("path",Ye)}var G=c(Xe,[["render",et]]);const tt={},ot={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},nt=[e.createElementVNode("path",{d:"M12.875 7.78125V3H5.84375C5.37617 3 5 3.37617 5 3.84375V20.1562C5 20.6238 5.37617 21 5.84375 21H17.6562C18.1238 21 18.5 20.6238 18.5 20.1562V8.625H13.7188C13.2547 8.625 12.875 8.24531 12.875 7.78125ZM15.125 16.0781C15.125 16.3102 14.9352 16.5 14.7031 16.5H8.79688C8.56484 16.5 8.375 16.3102 8.375 16.0781V15.7969C8.375 15.5648 8.56484 15.375 8.79688 15.375H14.7031C14.9352 15.375 15.125 15.5648 15.125 15.7969V16.0781ZM15.125 13.8281C15.125 14.0602 14.9352 14.25 14.7031 14.25H8.79688C8.56484 14.25 8.375 14.0602 8.375 13.8281V13.5469C8.375 13.3148 8.56484 13.125 8.79688 13.125H14.7031C14.9352 13.125 15.125 13.3148 15.125 13.5469V13.8281ZM15.125 11.2969V11.5781C15.125 11.8102 14.9352 12 14.7031 12H8.79688C8.56484 12 8.375 11.8102 8.375 11.5781V11.2969C8.375 11.0648 8.56484 10.875 8.79688 10.875H14.7031C14.9352 10.875 15.125 11.0648 15.125 11.2969ZM18.5 7.28555V7.5H14V3H14.2145C14.4395 3 14.6539 3.08789 14.8121 3.24609L18.2539 6.69141C18.4121 6.84961 18.5 7.06406 18.5 7.28555Z",fill:"currentColor"},null,-1)];function ct(t,n){return e.openBlock(),e.createElementBlock("svg",ot,nt)}var T=c(tt,[["render",ct]]);const st={},rt={width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},lt=[e.createElementVNode("path",{d:"M9.68457 9.68457L10.0381 10.0381L9.68457 9.68457C9.42411 9.94504 9.27778 10.2983 9.27778 10.6667V21.3333C9.27778 21.7017 9.42411 22.055 9.68457 22.3154C9.94504 22.5759 10.2983 22.7222 10.6667 22.7222H21.3333C21.7017 22.7222 22.055 22.5759 22.3154 22.3154C22.5759 22.055 22.7222 21.7017 22.7222 21.3333V16C22.7222 15.8969 22.7632 15.7979 22.8361 15.725C22.9091 15.6521 23.008 15.6111 23.1111 15.6111C23.2143 15.6111 23.3132 15.6521 23.3861 15.725C23.459 15.7979 23.5 15.8969 23.5 16V21.3333C23.5 21.908 23.2717 22.4591 22.8654 22.8654C22.4591 23.2717 21.908 23.5 21.3333 23.5H10.6667C10.092 23.5 9.54093 23.2717 9.1346 22.8654C8.72827 22.4591 8.5 21.908 8.5 21.3333V10.6667C8.5 10.092 8.72827 9.54093 9.1346 9.1346C9.54093 8.72827 10.092 8.5 10.6667 8.5H16C16.1031 8.5 16.2021 8.54097 16.275 8.6139C16.3479 8.68683 16.3889 8.78575 16.3889 8.88889C16.3889 8.99203 16.3479 9.09094 16.275 9.16387C16.2021 9.23681 16.1031 9.27778 16 9.27778H10.6667C10.2983 9.27778 9.94504 9.42411 9.68457 9.68457Z"},null,-1),e.createElementVNode("path",{d:"M21.2772 10.1544L22.1314 9.30076H20.9238H19.5026C19.3968 9.30076 19.2953 9.2587 19.2203 9.18367C19.1453 9.10862 19.1031 9.00673 19.1031 8.90038C19.1031 8.79403 19.1453 8.69214 19.2203 8.61709C19.2953 8.54206 19.3968 8.5 19.5026 8.5H23.1005C23.2063 8.5 23.3079 8.54206 23.3828 8.61709C23.4578 8.69214 23.5 8.79403 23.5 8.90038V12.5019C23.5 12.6082 23.4578 12.7101 23.3828 12.7852C23.3079 12.8602 23.2063 12.9023 23.1005 12.9023C22.9947 12.9023 22.8932 12.8602 22.8182 12.7852C22.7433 12.7101 22.701 12.6082 22.701 12.5019V11.0793V9.87269L21.8476 10.7256L16.1899 16.38L16.1881 16.3817C16.151 16.4192 16.1068 16.449 16.0582 16.4693C16.0095 16.4896 15.9574 16.5 15.9047 16.5C15.852 16.5 15.7999 16.4896 15.7512 16.4693C15.7026 16.449 15.6584 16.4192 15.6212 16.3817L15.6183 16.3788C15.5809 16.3416 15.5511 16.2974 15.5308 16.2485C15.5105 16.1997 15.5 16.1473 15.5 16.0944C15.5 16.0415 15.5105 15.9891 15.5308 15.9403C15.5511 15.8914 15.5809 15.8472 15.6183 15.81L15.6195 15.8088L21.2772 10.1544Z"},null,-1)];function it(t,n){return e.openBlock(),e.createElementBlock("svg",rt,lt)}var W=c(st,[["render",it]]);const at={},dt={fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"};function _t(t,n){return e.openBlock(),e.createElementBlock("path",dt)}var J=c(at,[["render",_t]]);const ht={},pt={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},mt=[e.createElementVNode("path",{d:"M17.3997 8.4C18.8909 8.4 20.0997 7.19117 20.0997 5.7C20.0997 4.20883 18.8909 3 17.3997 3C15.9085 3 14.6997 4.20883 14.6997 5.7C14.6997 7.19117 15.9085 8.4 17.3997 8.4Z",stroke:"currentColor","stroke-width":"1.5"},null,-1),e.createElementVNode("path",{d:"M17.3997 20.9996C18.8909 20.9996 20.0997 19.7908 20.0997 18.2996C20.0997 16.8084 18.8909 15.5996 17.3997 15.5996C15.9085 15.5996 14.6997 16.8084 14.6997 18.2996C14.6997 19.7908 15.9085 20.9996 17.3997 20.9996Z",stroke:"currentColor","stroke-width":"1.5"},null,-1),e.createElementVNode("path",{d:"M6.5999 14.7008C8.09107 14.7008 9.2999 13.492 9.2999 12.0008C9.2999 10.5096 8.09107 9.30078 6.5999 9.30078C5.10873 9.30078 3.8999 10.5096 3.8999 12.0008C3.8999 13.492 5.10873 14.7008 6.5999 14.7008Z",stroke:"currentColor","stroke-width":"1.5"},null,-1),e.createElementVNode("path",{d:"M15.0672 16.9389L8.93457 13.3614M15.0672 7.06055L8.93457 10.638L15.0672 7.06055Z",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)];function Ct(t,n){return e.openBlock(),e.createElementBlock("svg",pt,mt)}var K=c(ht,[["render",Ct]]);const ft={},$t={"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"};function kt(t,n){return e.openBlock(),e.createElementBlock("path",$t)}var Q=c(ft,[["render",kt]]);const wt={},ut={"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"};function gt(t,n){return e.openBlock(),e.createElementBlock("path",ut)}var X=c(wt,[["render",gt]]);const Bt={},yt={"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"};function Vt(t,n){return e.openBlock(),e.createElementBlock("path",yt)}var Y=c(Bt,[["render",Vt]]);const It={},Et={width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},St=[e.createElementVNode("path",{d:"M19.2497 19.2507L15.1375 15.1312L19.2497 19.2507ZM17.4163 9.62565C17.4163 11.6921 16.5954 13.674 15.1342 15.1352C13.673 16.5964 11.6912 17.4173 9.62467 17.4173C7.5582 17.4173 5.57636 16.5964 4.11513 15.1352C2.65391 13.674 1.83301 11.6921 1.83301 9.62565C1.83301 7.55917 2.65391 5.57733 4.11513 4.11611C5.57636 2.65489 7.5582 1.83398 9.62467 1.83398C11.6912 1.83398 13.673 2.65489 15.1342 4.11611C16.5954 5.57733 17.4163 7.55917 17.4163 9.62565V9.62565Z","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)];function Nt(t,n){return e.openBlock(),e.createElementBlock("svg",Et,St)}var e1=c(It,[["render",Nt]]);const Mt={},Ht={"fill-rule":"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clip-rule":"evenodd"};function bt(t,n){return e.openBlock(),e.createElementBlock("path",Ht)}var t1=c(Mt,[["render",bt]]);const Lt={},zt={fill:"currentColor",d:"M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"};function xt(t,n){return e.openBlock(),e.createElementBlock("path",zt)}var o1=c(Lt,[["render",xt]]);const Dt={},Zt={fill:"currentColor",d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"};function jt(t,n){return e.openBlock(),e.createElementBlock("path",Zt)}var n1=c(Dt,[["render",jt]]);const Rt={},vt={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},At=[e.createElementVNode("path",{d:"M16.04 15.2598C16.8685 15.2598 17.54 14.5882 17.54 13.7598C17.54 12.9313 16.8685 12.2598 16.04 12.2598C15.2116 12.2598 14.54 12.9313 14.54 13.7598C14.54 14.5882 15.2116 15.2598 16.04 15.2598Z",stroke:"currentColor","stroke-width":"1.5"},null,-1),e.createElementVNode("path",{d:"M19.21 7.49914L19.9 7.43914C19.9 6.90914 19.9 6.11914 19.9 5.80914C19.9 5.36093 19.7219 4.93107 19.405 4.61413C19.0881 4.29719 18.6582 4.11914 18.21 4.11914H5.25C4.65235 4.12179 4.08007 4.36106 3.6584 4.7846C3.23673 5.20815 2.99999 5.78148 3 6.37914V17.6191C2.99999 18.2168 3.23673 18.7901 3.6584 19.2137C4.08007 19.6372 4.65235 19.8765 5.25 19.8791H19.25C19.7047 19.8819 20.1424 19.7067 20.4694 19.3908C20.7965 19.075 20.9869 18.6436 21 18.1891V9.18914C20.9935 8.96061 20.9421 8.7356 20.8486 8.52696C20.7551 8.31832 20.6215 8.13015 20.4552 7.9732C20.289 7.81625 20.0934 7.6936 19.8798 7.61226C19.6661 7.53092 19.4385 7.49248 19.21 7.49914V7.49914Z",stroke:"currentColor","stroke-width":"1.5"},null,-1),e.createElementVNode("path",{d:"M19.8999 7.5H6.62988",stroke:"currentColor","stroke-width":"1.5"},null,-1)];function Ot(t,n){return e.openBlock(),e.createElementBlock("svg",vt,At)}var c1=c(Rt,[["render",Ot]]);const w={install(t){t.component("astar-icon-base",j),t.component("astar-icon-3dots",R),t.component("astar-icon-account-sample",v),t.component("astar-icon-assets",A),t.component("astar-icon-bridge",O),t.component("astar-icon-close",q),t.component("astar-icon-copy",P),t.component("astar-icon-dapp-staking",U),t.component("astar-icon-dashboard",F),t.component("astar-icon-discord",G),t.component("astar-icon-document",T),t.component("astar-icon-external-link",W),t.component("astar-icon-github",J),t.component("astar-icon-network",K),t.component("astar-icon-outline-moon",Q),t.component("astar-icon-outline-sun",X),t.component("astar-icon-plus",Y),t.component("astar-icon-search",e1),t.component("astar-icon-solid-selector",t1),t.component("astar-icon-telegram",o1),t.component("astar-icon-twitter",n1),t.component("astar-icon-wallet",c1)}},qt={install(t){var n,s,l,r,i,_,u;(n=h.install)==null||n.call(h,t),(s=m.install)==null||s.call(m,t),(l=C.install)==null||l.call(C,t),(r=f.install)==null||r.call(f,t),(i=$.install)==null||i.call($,t),(_=k.install)==null||_.call(k,t),(u=w.install)==null||u.call(w,t)}};o.ActionBtn=z,o.Button=x,o.ButtonsPlugin=k,o.ConnectionIndicator=L,o.Header=b,o.HeaderPlugin=$,o.Icon3dots=R,o.IconAccountSample=v,o.IconAssets=A,o.IconBase=j,o.IconBridge=O,o.IconButtonsPlugin=f,o.IconClose=q,o.IconCloseBtn=N,o.IconCopy=P,o.IconCopyBtn=M,o.IconDappStaking=U,o.IconDashboard=F,o.IconDiscord=G,o.IconDocument=T,o.IconExternalLink=W,o.IconGithub=J,o.IconNetwork=K,o.IconOutlineMoon=Q,o.IconOutlineSun=X,o.IconPlus=Y,o.IconSearch=e1,o.IconShareBtn=H,o.IconSolidSelector=t1,o.IconTelegram=o1,o.IconTwitter=n1,o.IconWallet=c1,o.IconsPlugin=w,o.ModalDrawer=S,o.ModalsPlugin=C,o.RadioBtn=D,o.SideNav=Z,o.SimpleModal=I,o.Spinner=V,o.SpinnerPlugin=m,o.Text=y,o.TextPlugin=h,o.default=qt,o.fadeDuration=L1,Object.defineProperty(o,"__esModule",{value:!0}),o[Symbol.toStringTag]="Module"});
