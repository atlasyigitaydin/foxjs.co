import{s as O}from"./t1_fGyrX.js";import{B as z,D as b,r as k,o as s,c as r,e as a,p as N,m as i,g as y,h as f,b as g,F as m,d as v,q as P,i as w}from"./DWC8nucq.js";import{s as S}from"./D15MpFos.js";import{s as D}from"./Bya4jDaP.js";import"./Bxw9PbzP.js";var j={root:"p-organizationchart p-component",table:"p-organizationchart-table",node:function(t){var n=t.instance;return["p-organizationchart-node-content",{"p-organizationchart-selectable-node":n.selectable,"p-highlight":n.selected}]},nodeToggler:"p-node-toggler",nodeTogglerIcon:"p-node-toggler-icon",lines:"p-organizationchart-lines",lineDown:"p-organizationchart-line-down",lineLeft:function(t){var n=t.index;return["p-organizationchart-line-left",{"p-organizationchart-line-top":n!==0}]},lineRight:function(t){var n=t.props,o=t.index;return["p-organizationchart-line-right",{"p-organizationchart-line-top":o!==n.node.children.length-1}]},nodes:"p-organizationchart-nodes"},M=z.extend({name:"organizationchart",classes:j}),B={name:"BaseOrganizationChart",extends:O,props:{value:{type:null,default:null},selectionKeys:{type:null,default:null},selectionMode:{type:String,default:null},collapsible:{type:Boolean,default:!1},collapsedKeys:{type:null,default:null}},style:M,provide:function(){return{$parentInstance:this}}},T={name:"OrganizationChartNode",hostName:"OrganizationChart",extends:O,emits:["node-click","node-toggle"],props:{node:{type:null,default:null},templates:{type:null,default:null},collapsible:{type:Boolean,default:!1},collapsedKeys:{type:null,default:null},selectionKeys:{type:null,default:null},selectionMode:{type:String,default:null}},methods:{getPTOptions:function(t){return this.ptm(t,{context:{expanded:this.expanded,selectable:this.selectable,selected:this.selected,toggleable:this.toggleable,active:this.selected}})},getNodeOptions:function(t,n){return this.ptm(n,{context:{lineTop:t}})},onNodeClick:function(t){b.getAttribute(t.target,"nodeToggler")||b.getAttribute(t.target,"nodeTogglerIcon")||this.selectionMode&&this.$emit("node-click",this.node)},onChildNodeClick:function(t){this.$emit("node-click",t)},toggleNode:function(){this.$emit("node-toggle",this.node)},onChildNodeToggle:function(t){this.$emit("node-toggle",t)},onKeydown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.toggleNode(),t.preventDefault())}},computed:{leaf:function(){return this.node.leaf===!1?!1:!(this.node.children&&this.node.children.length)},colspan:function(){return this.node.children&&this.node.children.length?this.node.children.length*2:null},childStyle:function(){return{visibility:!this.leaf&&this.expanded?"inherit":"hidden"}},expanded:function(){return this.collapsedKeys[this.node.key]===void 0},selectable:function(){return this.selectionMode&&this.node.selectable!==!1},selected:function(){return this.selectable&&this.selectionKeys&&this.selectionKeys[this.node.key]===!0},toggleable:function(){return this.collapsible&&this.node.collapsible!==!1&&!this.leaf}},components:{ChevronDownIcon:S,ChevronUpIcon:D}},I=["colspan"],E=["colspan"],x=["colspan"];function L(e,t,n,o,c,l){var h=k("OrganizationChartNode",!0);return s(),r("table",i({class:e.cx("table")},e.ptm("table")),[a("tbody",N(P(e.ptm("body"))),[n.node?(s(),r("tr",N(i({key:0},e.ptm("row"))),[a("td",i({colspan:l.colspan},e.ptm("cell")),[a("div",i({class:[e.cx("node"),n.node.styleClass],onClick:t[2]||(t[2]=function(){return l.onNodeClick&&l.onNodeClick.apply(l,arguments)})},l.getPTOptions("node")),[(s(),y(f(n.templates[n.node.type]||n.templates.default),{node:n.node},null,8,["node"])),l.toggleable?(s(),r("a",i({key:0,tabindex:"0",class:e.cx("nodeToggler"),onClick:t[0]||(t[0]=function(){return l.toggleNode&&l.toggleNode.apply(l,arguments)}),onKeydown:t[1]||(t[1]=function(){return l.onKeydown&&l.onKeydown.apply(l,arguments)})},l.getPTOptions("nodeToggler")),[n.templates.togglericon?(s(),y(f(n.templates.togglericon),{key:0,expanded:l.expanded,class:"p-node-toggler-icon"},null,8,["expanded"])):(s(),y(f(l.expanded?"ChevronDownIcon":"ChevronUpIcon"),i({key:1,class:e.cx("nodeTogglerIcon")},l.getPTOptions("nodeTogglerIcon")),null,16,["class"]))],16)):g("",!0)],16)],16,I)],16)):g("",!0),a("tr",i({style:l.childStyle,class:e.cx("lines")},e.ptm("lines")),[a("td",i({colspan:l.colspan},e.ptm("lineCell")),[a("div",i({class:e.cx("lineDown")},e.ptm("lineDown")),null,16)],16,E)],16),a("tr",i({style:l.childStyle,class:e.cx("lines")},e.ptm("lines")),[n.node.children&&n.node.children.length===1?(s(),r("td",i({key:0,colspan:l.colspan},e.ptm("lineCell")),[a("div",i({class:e.cx("lineDown")},e.ptm("lineDown")),null,16)],16,x)):g("",!0),n.node.children&&n.node.children.length>1?(s(!0),r(m,{key:1},v(n.node.children,function(u,p){return s(),r(m,{key:u.key},[a("td",i({class:e.cx("lineLeft",{index:p})},l.getNodeOptions(p!==0,"lineLeft"))," ",16),a("td",i({class:e.cx("lineRight",{index:p})},l.getNodeOptions(p!==n.node.children.length-1,"lineRight"))," ",16)],64)}),128)):g("",!0)],16),a("tr",i({style:l.childStyle,class:e.cx("nodes")},e.ptm("nodes")),[(s(!0),r(m,null,v(n.node.children,function(u){return s(),r("td",i({key:u.key,colspan:"2"},e.ptm("nodeCell")),[w(h,{node:u,templates:n.templates,collapsedKeys:n.collapsedKeys,onNodeToggle:l.onChildNodeToggle,collapsible:n.collapsible,selectionMode:n.selectionMode,selectionKeys:n.selectionKeys,onNodeClick:l.onChildNodeClick,pt:e.pt,unstyled:e.unstyled},null,8,["node","templates","collapsedKeys","onNodeToggle","collapsible","selectionMode","selectionKeys","onNodeClick","pt","unstyled"])],16)}),128))],16)],16)],16)}T.render=L;function d(e){"@babel/helpers - typeof";return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(e)}function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),n.push.apply(n,o)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?C(Object(n),!0).forEach(function(o){R(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function R(e,t,n){return t=A(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e){var t=V(e,"string");return d(t)=="symbol"?t:String(t)}function V(e,t){if(d(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(d(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var F={name:"OrganizationChart",extends:B,inheritAttrs:!1,emits:["node-unselect","node-select","update:selectionKeys","node-expand","node-collapse","update:collapsedKeys"],data:function(){return{d_collapsedKeys:this.collapsedKeys||{}}},watch:{collapsedKeys:function(t){this.d_collapsedKeys=t}},methods:{onNodeClick:function(t){var n=t.key;if(this.selectionMode){var o=this.selectionKeys?K({},this.selectionKeys):{};o[n]?(delete o[n],this.$emit("node-unselect",t)):(this.selectionMode==="single"&&(o={}),o[n]=!0,this.$emit("node-select",t)),this.$emit("update:selectionKeys",o)}},onNodeToggle:function(t){var n=t.key;this.d_collapsedKeys[n]?(delete this.d_collapsedKeys[n],this.$emit("node-expand",t)):(this.d_collapsedKeys[n]=!0,this.$emit("node-collapse",t)),this.d_collapsedKeys=K({},this.d_collapsedKeys),this.$emit("update:collapsedKeys",this.d_collapsedKeys)}},components:{OrganizationChartNode:T}};function U(e,t,n,o,c,l){var h=k("OrganizationChartNode");return s(),r("div",i({class:e.cx("root")},e.ptmi("root")),[w(h,{node:e.value,templates:e.$slots,onNodeToggle:l.onNodeToggle,collapsedKeys:c.d_collapsedKeys,collapsible:e.collapsible,onNodeClick:l.onNodeClick,selectionMode:e.selectionMode,selectionKeys:e.selectionKeys,pt:e.pt,unstyled:e.unstyled},null,8,["node","templates","onNodeToggle","collapsedKeys","collapsible","onNodeClick","selectionMode","selectionKeys","pt","unstyled"])],16)}F.render=U;export{F as default};
