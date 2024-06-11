import{s as F,a as B}from"./index.esm-C478_XH2.js";import{B as N,s as D,U as H,m as d,D as p,R as U,o as s,c as l,F as P,i as _,e as v,j as u,k as g,t as C,h as w,b as E,T as L,w as T,l as y,v as R,n as $,d as z,p as K,q as V,x as q,f as m,y as M}from"./app-JuXS6bLS.js";import{s as G}from"./image.esm-Egj_XVbG.js";var J={root:"p-accordion p-component",tab:{root:function(e){var n=e.instance,a=e.index;return["p-accordion-tab",{"p-accordion-tab-active":n.isTabActive(a)}]},header:function(e){var n=e.instance,a=e.tab,o=e.index;return["p-accordion-header",{"p-highlight":n.isTabActive(o),"p-disabled":n.getTabProp(a,"disabled")}]},headerAction:"p-accordion-header-link p-accordion-header-action",headerIcon:"p-accordion-toggle-icon",headerTitle:"p-accordion-header-text",toggleableContent:"p-toggleable-content",content:"p-accordion-content"}},Q=N.extend({name:"accordion",classes:J}),W={name:"BaseAccordion",extends:D,props:{multiple:{type:Boolean,default:!1},activeIndex:{type:[Number,Array],default:null},lazy:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:Q,provide:function(){return{$parentInstance:this}}},O={name:"Accordion",extends:W,inheritAttrs:!1,emits:["update:activeIndex","tab-open","tab-close","tab-click"],data:function(){return{id:this.$attrs.id,d_activeIndex:this.activeIndex}},watch:{"$attrs.id":function(e){this.id=e||H()},activeIndex:function(e){this.d_activeIndex=e}},mounted:function(){this.id=this.id||H()},methods:{isAccordionTab:function(e){return e.type.name==="AccordionTab"},isTabActive:function(e){return this.multiple?this.d_activeIndex&&this.d_activeIndex.includes(e):this.d_activeIndex===e},getTabProp:function(e,n){return e.props?e.props[n]:void 0},getKey:function(e,n){return this.getTabProp(e,"header")||n},getTabHeaderActionId:function(e){return"".concat(this.id,"_").concat(e,"_header_action")},getTabContentId:function(e){return"".concat(this.id,"_").concat(e,"_content")},getTabPT:function(e,n,a){var o=this.tabs.length,r={props:e.props||{},parent:{instance:this,props:this.$props,state:this.$data},context:{index:a,count:o,first:a===0,last:a===o-1,active:this.isTabActive(a)}};return d(this.ptm("tab.".concat(n),{tab:r}),this.ptm("accordiontab.".concat(n),{accordiontab:r}),this.ptm("accordiontab.".concat(n),r),this.ptmo(this.getTabProp(e,"pt"),n,r))},onTabClick:function(e,n,a){this.changeActiveIndex(e,n,a),this.$emit("tab-click",{originalEvent:e,index:a})},onTabKeyDown:function(e,n,a){switch(e.code){case"ArrowDown":this.onTabArrowDownKey(e);break;case"ArrowUp":this.onTabArrowUpKey(e);break;case"Home":this.onTabHomeKey(e);break;case"End":this.onTabEndKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onTabEnterKey(e,n,a);break}},onTabArrowDownKey:function(e){var n=this.findNextHeaderAction(e.target.parentElement.parentElement);n?this.changeFocusedTab(e,n):this.onTabHomeKey(e),e.preventDefault()},onTabArrowUpKey:function(e){var n=this.findPrevHeaderAction(e.target.parentElement.parentElement);n?this.changeFocusedTab(e,n):this.onTabEndKey(e),e.preventDefault()},onTabHomeKey:function(e){var n=this.findFirstHeaderAction();this.changeFocusedTab(e,n),e.preventDefault()},onTabEndKey:function(e){var n=this.findLastHeaderAction();this.changeFocusedTab(e,n),e.preventDefault()},onTabEnterKey:function(e,n,a){this.changeActiveIndex(e,n,a),e.preventDefault()},findNextHeaderAction:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=n?e:e.nextElementSibling,o=p.findSingle(a,'[data-pc-section="header"]');return o?p.getAttribute(o,"data-p-disabled")?this.findNextHeaderAction(o.parentElement):p.findSingle(o,'[data-pc-section="headeraction"]'):null},findPrevHeaderAction:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=n?e:e.previousElementSibling,o=p.findSingle(a,'[data-pc-section="header"]');return o?p.getAttribute(o,"data-p-disabled")?this.findPrevHeaderAction(o.parentElement):p.findSingle(o,'[data-pc-section="headeraction"]'):null},findFirstHeaderAction:function(){return this.findNextHeaderAction(this.$el.firstElementChild,!0)},findLastHeaderAction:function(){return this.findPrevHeaderAction(this.$el.lastElementChild,!0)},changeActiveIndex:function(e,n,a){if(!this.getTabProp(n,"disabled")){var o=this.isTabActive(a),r=o?"tab-close":"tab-open";this.multiple?o?this.d_activeIndex=this.d_activeIndex.filter(function(i){return i!==a}):this.d_activeIndex?this.d_activeIndex.push(a):this.d_activeIndex=[a]:this.d_activeIndex=this.d_activeIndex===a?null:a,this.$emit("update:activeIndex",this.d_activeIndex),this.$emit(r,{originalEvent:e,index:a})}},changeFocusedTab:function(e,n){if(n&&(p.focus(n),this.selectOnFocus)){var a=parseInt(n.parentElement.parentElement.dataset.pcIndex,10),o=this.tabs[a];this.changeActiveIndex(e,o,a)}}},computed:{tabs:function(){var e=this;return this.$slots.default().reduce(function(n,a){return e.isAccordionTab(a)?n.push(a):a.children&&a.children instanceof Array&&a.children.forEach(function(o){e.isAccordionTab(o)&&n.push(o)}),n},[])}},components:{ChevronDownIcon:F,ChevronRightIcon:B},directives:{ripple:U}};function A(t){"@babel/helpers - typeof";return A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(t)}function k(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,a)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?k(Object(n),!0).forEach(function(a){X(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function X(t,e,n){return e=Y(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Y(t){var e=Z(t,"string");return A(e)=="symbol"?e:String(e)}function Z(t,e){if(A(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(A(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var ee=["data-pc-index","data-p-active"],te=["data-p-highlight","data-p-disabled"],ne=["id","tabindex","aria-disabled","aria-expanded","aria-controls","onClick","onKeydown"],ae=["id","aria-labelledby"];function re(t,e,n,a,o,r){return s(),l("div",d({class:t.cx("root")},t.ptmi("root")),[(s(!0),l(P,null,_(r.tabs,function(i,c){return s(),l("div",d({key:r.getKey(i,c),class:t.cx("tab.root",{tab:i,index:c})},r.getTabPT(i,"root",c),{"data-pc-name":"accordiontab","data-pc-index":c,"data-p-active":r.isTabActive(c)}),[v("div",d({style:r.getTabProp(i,"headerStyle"),class:[t.cx("tab.header",{tab:i,index:c}),r.getTabProp(i,"headerClass")]},b(b({},r.getTabProp(i,"headerProps")),r.getTabPT(i,"header",c)),{"data-p-highlight":r.isTabActive(c),"data-p-disabled":r.getTabProp(i,"disabled")}),[v("a",d({id:r.getTabHeaderActionId(c),class:t.cx("tab.headerAction"),tabindex:r.getTabProp(i,"disabled")?-1:t.tabindex,role:"button","aria-disabled":r.getTabProp(i,"disabled"),"aria-expanded":r.isTabActive(c),"aria-controls":r.getTabContentId(c),onClick:function(f){return r.onTabClick(f,i,c)},onKeydown:function(f){return r.onTabKeyDown(f,i,c)}},b(b({},r.getTabProp(i,"headeractionprops")),r.getTabPT(i,"headeraction",c))),[i.children&&i.children.headericon?(s(),u(g(i.children.headericon),{key:0,isTabActive:r.isTabActive(c),active:r.isTabActive(c),index:c},null,8,["isTabActive","active","index"])):r.isTabActive(c)?(s(),u(g(t.$slots.collapseicon?t.$slots.collapseicon:t.collapseIcon?"span":"ChevronDownIcon"),d({key:1,class:[t.cx("tab.headerIcon"),t.collapseIcon],"aria-hidden":"true"},r.getTabPT(i,"headericon",c)),null,16,["class"])):(s(),u(g(t.$slots.expandicon?t.$slots.expandicon:t.expandIcon?"span":"ChevronRightIcon"),d({key:2,class:[t.cx("tab.headerIcon"),t.expandIcon],"aria-hidden":"true"},r.getTabPT(i,"headericon",c)),null,16,["class"])),i.props&&i.props.header?(s(),l("span",d({key:3,class:t.cx("tab.headerTitle")},r.getTabPT(i,"headertitle",c)),C(i.props.header),17)):w("",!0),i.children&&i.children.header?(s(),u(g(i.children.header),{key:4})):w("",!0)],16,ne)],16,te),E(L,d({name:"p-toggleable-content"},r.getTabPT(i,"transition",c)),{default:T(function(){return[!t.lazy||r.isTabActive(c)?y((s(),l("div",d({key:0,id:r.getTabContentId(c),style:r.getTabProp(i,"contentStyle"),class:[t.cx("tab.toggleableContent"),r.getTabProp(i,"contentClass")],role:"region","aria-labelledby":r.getTabHeaderActionId(c)},b(b({},r.getTabProp(i,"contentProps")),r.getTabPT(i,"toggleablecontent",c))),[v("div",d({class:t.cx("tab.content")},r.getTabPT(i,"content",c)),[(s(),u(g(i)))],16)],16,ae)),[[R,t.lazy?!0:r.isTabActive(c)]]):w("",!0)]}),_:2},1040)],16,ee)}),128))],16)}O.render=re;var ie={},oe={name:"BaseAccordionTab",extends:D,props:{header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:ie,provide:function(){return{$parentInstance:this}}},j={name:"AccordionTab",extends:oe,inheritAttrs:!1};function ce(t,e,n,a,o,r){return $(t.$slots,"default")}j.render=ce;const se={key:0,class:"flex justify-content-between overflow-hidden gap-5 w-full h-full"},de={class:"w-full overflow-hidden m-5 border-round-xl animation-duration-1000 animation-ease-in-out"},le={key:1,class:"h-full overflow-auto"},ue={class:"h-screen"},he={class:"overflow-hidden m-4 border-round-xl animation-duration-1000 animation-ease-in-out"},ve=z({__name:"projects",props:{works:null},setup(t){const e=t,n=K(0),a=K(n.value),o=i=>{i!==void 0&&(a.value=i)},r=V(()=>e.works.length===0||a.value<0||a.value>=e.works.length?"":e.works[a.value].img);return(i,c)=>{const x=G,f=j,S=O,I=q("animateonscroll");return m(M)().responsive?(s(),l("div",le,[v("div",ue,[y((s(),l("div",he,[E(x,{preview:"","image-style":"width: 100%; height: 100%;",src:m(r)},null,8,["src"])])),[[I,{enterClass:"fadeinleft"}]]),y((s(),u(S,{class:"flex flex-column animation-duration-1000 animation-ease-in-out h-full","collapse-icon":"none","active-index":m(n),"onUpdate:activeIndex":o},{default:T(()=>[(s(!0),l(P,null,_(t.works,h=>(s(),u(f,{key:h.id,class:"w-full","content-class":"w-full",header:h.name},{default:T(()=>[v("label",null,C(h.about),1)]),_:2},1032,["header"]))),128))]),_:1},8,["active-index"])),[[I,{enterClass:"fadeinright"}]])])])):(s(),l("div",se,[y((s(),l("div",de,[E(x,{preview:"","image-style":"width: 100%; height: 100%;",src:m(r)},null,8,["src"])])),[[I,{enterClass:"fadeinleft"}]]),y((s(),u(S,{class:"flex flex-column mt-5 gap-2 animation-duration-1000 animation-ease-in-out w-full","collapse-icon":"none","active-index":m(n),"onUpdate:activeIndex":o},{default:T(()=>[(s(!0),l(P,null,_(t.works,h=>(s(),u(f,{key:h.id,class:"w-full","content-class":"w-full",header:h.name},{default:T(()=>[v("label",null,C(h.about),1)]),_:2},1032,["header"]))),128))]),_:1},8,["active-index"])),[[I,{enterClass:"fadeinright"}]])]))}}});export{ve as default};
