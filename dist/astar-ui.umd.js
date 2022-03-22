var Be=Object.defineProperty;var M=Object.getOwnPropertySymbols;var ye=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable;var R=(o,t,r)=>t in o?Be(o,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[t]=r,_=(o,t)=>{for(var r in t||(t={}))ye.call(t,r)&&R(o,r,t[r]);if(M)for(var r of M(t))be.call(t,r)&&R(o,r,t[r]);return o};(function(o,t){typeof exports=="object"&&typeof module!="undefined"?t(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],t):(o=typeof globalThis!="undefined"?globalThis:o||self,t(o.AstarUI={},o.Vue))})(this,function(o,t){"use strict";var r="",d=(e,n)=>{const s=e.__vccOpts||e;for(const[a,c]of n)s[a]=c;return s},y=d(t.defineComponent({emits:["click"],setup(e){return(n,s)=>(t.openBlock(),t.createElementBlock("button",{class:"my-button",onClick:s[0]||(s[0]=a=>n.$emit("click",a))},[t.renderSlot(n.$slots,"default",{},void 0,!0)]))}}),[["__scopeId","data-v-5102a2ab"]]);const i={install(e){e.component("my-button",y)}};var ke="";const A={},D={class:"my-foo"};function L(e,n){return t.openBlock(),t.createElementBlock("div",D," Foo Astar ")}var b=d(A,[["render",L],["__scopeId","data-v-21e6b128"]]);const p={install(e){e.component("my-foo",b)}};var Ie="",S;(function(e){e[e.H1=0]="H1",e[e.H2=1]="H2",e[e.H3=2]="H3",e[e.H4=3]="H4",e[e.H5=4]="H5",e[e.H6=5]="H6",e[e.H7=6]="H7"})(S||(S={}));const j=t.defineComponent({name:"Text",props:{type:{required:!0,type:Object,default:"H1"}},setup(e){return _({},t.toRefs(e))}});function z(e,n,s,a,c,l){return t.openBlock(),t.createElementBlock("span",{class:t.normalizeClass(`text_${e.type}`)},[t.renderSlot(e.$slots,"default",{},void 0,!0)],2)}var k=d(j,[["render",z],["__scopeId","data-v-e7c95fbe"]]);const f={install(e){e.component("astar-text",k)}};var ge="";const F=t.defineComponent({name:"SimpleModal",props:{show:{type:Boolean,default:!1},title:{type:String}},emits:["close"],setup(e,{emit:n}){const s=t.ref(e.show);return t.watchEffect(()=>{s.value!==e.show&&(s.value=e.show)}),{isShow:s,close:()=>{n("close")}}}}),O={class:"modal-content"},q={class:"title"};function x(e,n,s,a,c,l){return t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(`modal ${e.isShow?"show":""}`)},[t.createElementVNode("div",O,[t.createElementVNode("span",{class:"close",onClick:n[0]||(n[0]=(...B)=>e.close&&e.close(...B))},"\xD7"),t.createElementVNode("p",q,t.toDisplayString(e.title),1),t.renderSlot(e.$slots,"default",{},void 0,!0)])],2)}var I=d(F,[["render",x],["__scopeId","data-v-3bf40420"]]);const $={install(e){e.component("astar-simple-modal",I)}};var Ce="";const P=t.defineComponent({name:"IconCloseBtn",setup(e){return _({},t.toRefs(e))}}),U={type:"button"};function Z(e,n,s,a,c,l){return t.openBlock(),t.createElementBlock("button",U," \xD7 ")}var g=d(P,[["render",Z],["__scopeId","data-v-6d08595c"]]),He="";const G=t.defineComponent({name:"IconCopyBtn",setup(e){return _({},t.toRefs(e))}}),J=e=>(t.pushScopeId("data-v-03b4d7e4"),e=e(),t.popScopeId(),e),K={type:"button"},Q=[J(()=>t.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t.createElementVNode("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})],-1))];function W(e,n,s,a,c,l){return t.openBlock(),t.createElementBlock("button",K,Q)}var C=d(G,[["render",W],["__scopeId","data-v-03b4d7e4"]]),we="";const X=t.defineComponent({name:"IconShareBtn",setup(e){return _({},t.toRefs(e))}}),Y=e=>(t.pushScopeId("data-v-4c791d2f"),e=e(),t.popScopeId(),e),T={type:"button"},ee=[Y(()=>t.createElementVNode("svg",{viewBox:"0 0 24 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor"},[t.createElementVNode("path",{d:"M21 12V22H0V3H12V5H2V20H19V12H21ZM24 0H13.012L17.047 4L10.07 11.07L12.898 13.898L19.875 6.828L24 11V0Z",fill:"currentColor"})],-1))];function te(e,n,s,a,c,l){return t.openBlock(),t.createElementBlock("button",T,ee)}var H=d(X,[["render",te],["__scopeId","data-v-4c791d2f"]]);const m={install(e){e.component("astar-icon-close-btn",g),e.component("astar-icon-copy-btn",C),e.component("astar-icon-share-btn",H)}};var Ne="";const oe=t.defineComponent({name:"Header",props:{title:{type:String}},setup(e){return _({},t.toRefs(e))}}),ne={class:"header"},se={class:"header-left"},ae={class:"header-right"};function ce(e,n,s,a,c,l){return t.openBlock(),t.createElementBlock("div",ne,[t.createElementVNode("div",se,t.toDisplayString(e.title),1),t.createElementVNode("div",ae,[t.renderSlot(e.$slots,"default",{},void 0,!0)])])}var v=d(oe,[["render",ce],["__scopeId","data-v-c6d6d994"]]);const u={install(e){e.component("astar-header",v)}};var Ee="";const re=t.defineComponent({name:"ActionBtn",props:{disabled:{type:Boolean,default:!1}},setup(e){return _({},t.toRefs(e))}}),de=["disabled"];function le(e,n,s,a,c,l){return t.openBlock(),t.createElementBlock("button",{type:"button",disabled:e.disabled},[t.renderSlot(e.$slots,"default",{},void 0,!0)],8,de)}var w=d(re,[["render",le],["__scopeId","data-v-0fc3d816"]]),Me="";const _e=t.defineComponent({name:"Button",props:{disabled:{type:Boolean,default:!1}},setup(e){return _({},t.toRefs(e))}}),ie=["disabled"];function pe(e,n,s,a,c,l){return t.openBlock(),t.createElementBlock("button",{type:"button",disabled:e.disabled},[t.renderSlot(e.$slots,"default",{},void 0,!0)],8,ie)}var V=d(_e,[["render",pe],["__scopeId","data-v-1dd6b214"]]),Re="";const fe=t.defineComponent({name:"SideNav",props:{title:{type:String},selected:{type:Boolean,default:!1}},setup(e){return _({},t.toRefs(e))}}),$e={class:"fa"},me={class:"title"};function ue(e,n,s,a,c,l){return t.openBlock(),t.createElementBlock("button",{type:"button",class:t.normalizeClass(e.selected?"selected":"")},[t.createElementVNode("i",$e,[t.renderSlot(e.$slots,"default",{},void 0,!0)]),t.createElementVNode("span",me,t.toDisplayString(e.title),1)],2)}var N=d(fe,[["render",ue],["__scopeId","data-v-f78a116a"]]);const h={install(e){e.component("astar-action-btn",w),e.component("astar-button",V),e.component("astar-side-nav",N)}},he={install(e){var n,s,a,c,l,B,E;(n=i.install)==null||n.call(i,e),(s=p.install)==null||s.call(p,e),(a=f.install)==null||a.call(f,e),(c=$.install)==null||c.call($,e),(l=m.install)==null||l.call(m,e),(B=u.install)==null||B.call(u,e),(E=h.install)==null||E.call(h,e)}};o.ActionBtn=w,o.Button=V,o.ButtonPlugin=i,o.ButtonsPlugin=h,o.Foo=b,o.FooPlugin=p,o.Header=v,o.HeaderPlugin=u,o.IconButtonsPlugin=m,o.IconCloseBtn=g,o.IconCopyBtn=C,o.IconShareBtn=H,o.ModalsPlugin=$,o.SideNav=N,o.SimpleModal=I,o.TestButton=y,o.Text=k,o.TextPlugin=f,o.default=he,Object.defineProperty(o,"__esModule",{value:!0}),o[Symbol.toStringTag]="Module"});
