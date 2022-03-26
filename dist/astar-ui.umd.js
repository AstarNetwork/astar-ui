var ye=Object.defineProperty,Be=Object.defineProperties;var be=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var Se=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable;var R=(n,t,d)=>t in n?ye(n,t,{enumerable:!0,configurable:!0,writable:!0,value:d}):n[t]=d,i=(n,t)=>{for(var d in t||(t={}))Se.call(t,d)&&R(n,d,t[d]);if(M)for(var d of M(t))ge.call(t,d)&&R(n,d,t[d]);return n},A=(n,t)=>Be(n,be(t));(function(n,t){typeof exports=="object"&&typeof module!="undefined"?t(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],t):(n=typeof globalThis!="undefined"?globalThis:n||self,t(n.AstarUI={},n.Vue))})(this,function(n,t){"use strict";var d="",l=(e,o)=>{const s=e.__vccOpts||e;for(const[a,r]of o)s[a]=r;return s},B=l(t.defineComponent({emits:["click"],setup(e){return(o,s)=>(t.openBlock(),t.createElementBlock("button",{class:"my-button",onClick:s[0]||(s[0]=a=>o.$emit("click",a))},[t.renderSlot(o.$slots,"default",{},void 0,!0)]))}}),[["__scopeId","data-v-5102a2ab"]]);const _={install(e){e.component("my-button",B)}};var Ie="";const z={},D={class:"my-foo"};function L(e,o){return t.openBlock(),t.createElementBlock("div",D," Foo Astar ")}var b=l(z,[["render",L],["__scopeId","data-v-21e6b128"]]);const p={install(e){e.component("my-foo",b)}};var we="",S;(function(e){e[e.H1=0]="H1",e[e.H2=1]="H2",e[e.H3=2]="H3",e[e.H4=3]="H4",e[e.H5=4]="H5",e[e.H6=5]="H6",e[e.H7=6]="H7"})(S||(S={}));const j=t.defineComponent({name:"Text",props:{type:{required:!0,type:Object,default:"H1"}},setup(e){return i({},t.toRefs(e))}});function F(e,o,s,a,r,c){return t.openBlock(),t.createElementBlock("span",{class:t.normalizeClass(`text_${e.type}`)},[t.renderSlot(e.$slots,"default",{},void 0,!0)],2)}var g=l(j,[["render",F],["__scopeId","data-v-e7c95fbe"]]);const f={install(e){e.component("astar-text",g)}};var Ce="";const O=t.defineComponent({name:"SimpleModal",props:{show:{type:Boolean,default:!1},title:{type:String},width:{type:Number},height:{type:Number}},emits:["close"],setup(e,{emit:o}){const s=t.ref(e.show);t.watchEffect(()=>{s.value!==e.show&&(s.value=e.show)});const a=()=>{o("close")};return A(i({},t.toRefs(e)),{isShow:s,close:a})}}),q={class:"title"};function x(e,o,s,a,r,c){return t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(`modal ${e.isShow?"show":""}`)},[t.createElementVNode("div",{class:"modal-content",style:t.normalizeStyle(`width: ${e.width}px; height: ${e.height}px;`)},[t.createElementVNode("span",{class:"close",onClick:o[0]||(o[0]=(...y)=>e.close&&e.close(...y))},"\xD7"),t.createElementVNode("div",q,t.toDisplayString(e.title),1),t.renderSlot(e.$slots,"default",{},void 0,!0)],4)],2)}var k=l(O,[["render",x],["__scopeId","data-v-7560bdf9"]]);const $={install(e){e.component("astar-simple-modal",k)}};var He="";const P=t.defineComponent({name:"IconCloseBtn",setup(e){return i({},t.toRefs(e))}}),U={type:"button"};function Z(e,o,s,a,r,c){return t.openBlock(),t.createElementBlock("button",U," \xD7 ")}var I=l(P,[["render",Z],["__scopeId","data-v-6d08595c"]]),ve="";const G=t.defineComponent({name:"IconCopyBtn",setup(e){return i({},t.toRefs(e))}}),J=e=>(t.pushScopeId("data-v-03b4d7e4"),e=e(),t.popScopeId(),e),K={type:"button"},Q=[J(()=>t.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t.createElementVNode("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})],-1))];function W(e,o,s,a,r,c){return t.openBlock(),t.createElementBlock("button",K,Q)}var w=l(G,[["render",W],["__scopeId","data-v-03b4d7e4"]]),Ve="";const X=t.defineComponent({name:"IconShareBtn",setup(e){return i({},t.toRefs(e))}}),Y=e=>(t.pushScopeId("data-v-4c791d2f"),e=e(),t.popScopeId(),e),T={type:"button"},ee=[Y(()=>t.createElementVNode("svg",{viewBox:"0 0 24 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor"},[t.createElementVNode("path",{d:"M21 12V22H0V3H12V5H2V20H19V12H21ZM24 0H13.012L17.047 4L10.07 11.07L12.898 13.898L19.875 6.828L24 11V0Z",fill:"currentColor"})],-1))];function te(e,o,s,a,r,c){return t.openBlock(),t.createElementBlock("button",T,ee)}var C=l(X,[["render",te],["__scopeId","data-v-4c791d2f"]]);const h={install(e){e.component("astar-icon-close-btn",I),e.component("astar-icon-copy-btn",w),e.component("astar-icon-share-btn",C)}};var Me="";const ne=t.defineComponent({name:"Header",props:{title:{type:String}},setup(e){return i({},t.toRefs(e))}}),oe={class:"header"},se={class:"header-left"},ae={class:"header-right"};function re(e,o,s,a,r,c){return t.openBlock(),t.createElementBlock("div",oe,[t.createElementVNode("div",se,t.toDisplayString(e.title),1),t.createElementVNode("div",ae,[t.renderSlot(e.$slots,"default",{},void 0,!0)])])}var H=l(ne,[["render",re],["__scopeId","data-v-af9729de"]]);const m={install(e){e.component("astar-header",H)}};var Re="";const de=t.defineComponent({name:"ActionBtn",props:{disabled:{type:Boolean,default:!1},width:{type:Number},height:{type:Number}},setup(e){return i({},t.toRefs(e))}}),le=["disabled"];function ce(e,o,s,a,r,c){return t.openBlock(),t.createElementBlock("button",{type:"button",style:t.normalizeStyle(`width: ${e.width}px; height: ${e.height}px;`),disabled:e.disabled},[t.renderSlot(e.$slots,"default",{},void 0,!0)],12,le)}var v=l(de,[["render",ce],["__scopeId","data-v-7e509d33"]]),Ae="";const ie=t.defineComponent({name:"Button",props:{disabled:{type:Boolean,default:!1},width:{type:Number},height:{type:Number}},setup(e){return i({},t.toRefs(e))}}),_e=["disabled"];function pe(e,o,s,a,r,c){return t.openBlock(),t.createElementBlock("button",{type:"button",style:t.normalizeStyle(`width: ${e.width}px; height: ${e.height}px;`),disabled:e.disabled},[t.renderSlot(e.$slots,"default",{},void 0,!0)],12,_e)}var N=l(ie,[["render",pe],["__scopeId","data-v-6cbde29f"]]),ze="";const fe=t.defineComponent({name:"SideNav",props:{title:{type:String},selected:{type:Boolean,default:!1}},setup(e){return i({},t.toRefs(e))}}),$e={class:"fa"},he={class:"title"};function me(e,o,s,a,r,c){return t.openBlock(),t.createElementBlock("button",{type:"button",class:t.normalizeClass(e.selected?"selected":"")},[t.createElementVNode("i",$e,[t.renderSlot(e.$slots,"default",{},void 0,!0)]),t.createElementVNode("span",he,t.toDisplayString(e.title),1)],2)}var V=l(fe,[["render",me],["__scopeId","data-v-f78a116a"]]);const u={install(e){e.component("astar-action-btn",v),e.component("astar-button",N),e.component("astar-side-nav",V)}},ue={install(e){var o,s,a,r,c,y,E;(o=_.install)==null||o.call(_,e),(s=p.install)==null||s.call(p,e),(a=f.install)==null||a.call(f,e),(r=$.install)==null||r.call($,e),(c=h.install)==null||c.call(h,e),(y=m.install)==null||y.call(m,e),(E=u.install)==null||E.call(u,e)}};n.ActionBtn=v,n.Button=N,n.ButtonPlugin=_,n.ButtonsPlugin=u,n.Foo=b,n.FooPlugin=p,n.Header=H,n.HeaderPlugin=m,n.IconButtonsPlugin=h,n.IconCloseBtn=I,n.IconCopyBtn=w,n.IconShareBtn=C,n.ModalsPlugin=$,n.SideNav=V,n.SimpleModal=k,n.TestButton=B,n.Text=g,n.TextPlugin=f,n.default=ue,Object.defineProperty(n,"__esModule",{value:!0}),n[Symbol.toStringTag]="Module"});
