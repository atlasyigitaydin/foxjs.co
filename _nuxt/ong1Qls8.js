import{s as A}from"./Cj8aJeen.js";import{s as j}from"./D15MpFos.js";import{s as U}from"./CAEkOqvU.js";import{O as q}from"./Re-pS_Zp.js";import{s as W}from"./D6EVNKtz.js";import{B as Z,U as G,Z as w,O as r,D as h,C as J,R as Q,r as b,a as X,o as c,c as f,F as E,d as Y,m as u,e as y,f as P,n as V,t as S,i as k,w as M,T as $,b as K,l as _,g as O,h as x,k as ee}from"./DWC8nucq.js";import{s as R}from"./t1_fGyrX.js";import"./Bxw9PbzP.js";var te={root:function(e){var i=e.props;return{position:i.appendTo==="self"?"relative":void 0}}},ie={root:function(e){var i=e.instance,n=e.props;return["p-cascadeselect p-component p-inputwrapper",{"p-disabled":n.disabled,"p-invalid":n.invalid,"p-variant-filled":n.variant?n.variant==="filled":i.$primevue.config.inputStyle==="filled","p-focus":i.focused,"p-inputwrapper-filled":n.modelValue,"p-inputwrapper-focus":i.focused||i.overlayVisible,"p-overlay-open":i.overlayVisible}]},label:function(e){var i=e.instance,n=e.props;return["p-cascadeselect-label p-inputtext",{"p-placeholder":i.label===n.placeholder,"p-cascadeselect-label-empty":!i.$slots.value&&(i.label==="p-emptylabel"||i.label.length===0)}]},dropdownButton:"p-cascadeselect-trigger",loadingIcon:"p-cascadeselect-trigger-icon",dropdownIcon:"p-cascadeselect-trigger-icon",panel:function(e){e.props;var i=e.instance;return["p-cascadeselect-panel p-component",{"p-ripple-disabled":i.$primevue.config.ripple===!1}]},wrapper:"p-cascadeselect-items-wrapper",list:"p-cascadeselect-panel p-cascadeselect-items",item:function(e){var i=e.instance,n=e.processedOption;return["p-cascadeselect-item",{"p-cascadeselect-item-group":i.isOptionGroup(n),"p-cascadeselect-item-active p-highlight":i.isOptionActive(n),"p-focus":i.isOptionFocused(n),"p-disabled":i.isOptionDisabled(n)}]},content:"p-cascadeselect-item-content",text:"p-cascadeselect-item-text",groupIcon:"p-cascadeselect-group-icon",sublist:"p-cascadeselect-sublist"},ne=Z.extend({name:"cascadeselect",classes:ie,inlineStyles:te}),oe={name:"BaseCascadeSelect",extends:R,props:{modelValue:null,options:Array,optionLabel:null,optionValue:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,placeholder:String,variant:{type:String,default:null},invalid:{type:Boolean,default:!1},disabled:Boolean,dataKey:null,inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},panelClass:{type:[String,Object],default:null},panelStyle:{type:Object,default:null},panelProps:{type:null,default:null},appendTo:{type:[String,Object],default:"body"},loading:{type:Boolean,default:!1},dropdownIcon:{type:String,default:void 0},loadingIcon:{type:String,default:void 0},optionGroupIcon:{type:String,default:void 0},autoOptionFocus:{type:Boolean,default:!1},selectOnFocus:{type:Boolean,default:!1},focusOnHover:{type:Boolean,default:!0},searchLocale:{type:String,default:void 0},searchMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptySearchMessage:{type:String,default:null},emptyMessage:{type:String,default:null},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:ne,provide:function(){return{$parentInstance:this}}},B={name:"CascadeSelectSub",hostName:"CascadeSelect",extends:R,emits:["option-change","option-focus-change"],container:null,props:{selectId:String,focusedOptionId:String,options:Array,optionLabel:String,optionValue:String,optionDisabled:null,optionGroupIcon:String,optionGroupLabel:String,optionGroupChildren:{type:[String,Array],default:null},activeOptionPath:Array,level:Number,templates:null,isParentMount:Boolean},data:function(){return{mounted:!1}},watch:{isParentMount:{handler:function(e){e&&h.nestedPosition(this.container,this.level)}}},mounted:function(){(this.isParentMount||this.level===0)&&h.nestedPosition(this.container,this.level),this.mounted=!0},methods:{getOptionId:function(e){return"".concat(this.selectId,"_").concat(e.key)},getOptionLabel:function(e){return this.optionLabel?r.resolveFieldData(e.option,this.optionLabel):e.option},getOptionValue:function(e){return this.optionValue?r.resolveFieldData(e.option,this.optionValue):e.option},getPTOptions:function(e,i,n){return this.ptm(n,{context:{item:e,index:i,level:this.level,itemGroup:this.isOptionGroup(e),active:this.isOptionActive(e),focused:this.isOptionFocused(e),disabled:this.isOptionDisabled(e)}})},isOptionDisabled:function(e){return this.optionDisabled?r.resolveFieldData(e.option,this.optionDisabled):!1},getOptionGroupLabel:function(e){return this.optionGroupLabel?r.resolveFieldData(e.option,this.optionGroupLabel):null},getOptionGroupChildren:function(e){return e.children},isOptionGroup:function(e){return r.isNotEmpty(e.children)},isOptionSelected:function(e){return!this.isOptionGroup(e)&&this.isOptionActive(e)},isOptionActive:function(e){return this.activeOptionPath.some(function(i){return i.key===e.key})},isOptionFocused:function(e){return this.focusedOptionId===this.getOptionId(e)},getOptionLabelToRender:function(e){return this.isOptionGroup(e)?this.getOptionGroupLabel(e):this.getOptionLabel(e)},onOptionClick:function(e,i){this.$emit("option-change",{originalEvent:e,processedOption:i,isFocus:!0})},onOptionMouseMove:function(e,i){this.$emit("option-focus-change",{originalEvent:e,processedOption:i})},onOptionChange:function(e){this.$emit("option-change",e)},onOptionFocusChange:function(e){this.$emit("option-focus-change",e)},containerRef:function(e){this.container=e},listAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.listLabel:void 0}},directives:{ripple:Q},components:{AngleRightIcon:A}},se=["aria-label"],ae=["id","aria-label","aria-selected","aria-expanded","aria-level","aria-setsize","aria-posinset","data-p-item-group","data-p-highlight","data-p-focus","data-p-disabled"],re=["onClick","onMousemove"];function le(t,e,i,n,s,o){var l=b("AngleRightIcon"),d=b("CascadeSelectSub",!0),v=X("ripple");return c(),f("ul",u({ref:o.containerRef,class:t.cx("list"),"aria-label":o.listAriaLabel},i.level===0?t.ptm("list"):t.ptm("sublist")),[(c(!0),f(E,null,Y(i.options,function(a,p){return c(),f("li",u({key:o.getOptionLabelToRender(a),id:o.getOptionId(a),class:t.cx("item",{processedOption:a}),role:"treeitem","aria-label":o.getOptionLabelToRender(a),"aria-selected":o.isOptionGroup(a)?void 0:o.isOptionSelected(a),"aria-expanded":o.isOptionGroup(a)?o.isOptionActive(a):void 0,"aria-level":i.level+1,"aria-setsize":i.options.length,"aria-posinset":p+1},o.getPTOptions(a,p,"item"),{"data-p-item-group":o.isOptionGroup(a),"data-p-highlight":o.isOptionActive(a),"data-p-focus":o.isOptionFocused(a),"data-p-disabled":o.isOptionDisabled(a)}),[_((c(),f("div",u({class:t.cx("content"),onClick:function(g){return o.onOptionClick(g,a)},onMousemove:function(g){return o.onOptionMouseMove(g,a)}},o.getPTOptions(a,p,"content")),[i.templates.option?(c(),O(x(i.templates.option),{key:0,option:a.option},null,8,["option"])):(c(),f("span",u({key:1,class:t.cx("text")},o.getPTOptions(a,p,"text")),S(o.getOptionLabelToRender(a)),17)),o.isOptionGroup(a)?(c(),f(E,{key:2},[i.templates.optiongroupicon?(c(),O(x(i.templates.optiongroupicon),{key:0,"aria-hidden":"true"})):i.optionGroupIcon?(c(),f("span",u({key:1,class:[t.cx("groupIcon"),i.optionGroupIcon],"aria-hidden":"true"},o.getPTOptions(a,p,"groupIcon")),null,16)):(c(),O(l,u({key:2,class:t.cx("groupIcon"),"aria-hidden":"true"},o.getPTOptions(a,p,"groupIcon")),null,16,["class"]))],64)):K("",!0)],16,re)),[[v]]),o.isOptionGroup(a)&&o.isOptionActive(a)?(c(),O(d,{key:0,role:"group",class:V(t.cx("sublist")),selectId:i.selectId,focusedOptionId:i.focusedOptionId,options:o.getOptionGroupChildren(a),activeOptionPath:i.activeOptionPath,level:i.level+1,templates:i.templates,optionLabel:i.optionLabel,optionValue:i.optionValue,optionDisabled:i.optionDisabled,optionGroupIcon:i.optionGroupIcon,optionGroupLabel:i.optionGroupLabel,optionGroupChildren:i.optionGroupChildren,onOptionChange:o.onOptionChange,onOptionFocusChange:o.onOptionFocusChange,pt:t.pt,unstyled:t.unstyled,isParentMount:s.mounted},null,8,["class","selectId","focusedOptionId","options","activeOptionPath","level","templates","optionLabel","optionValue","optionDisabled","optionGroupIcon","optionGroupLabel","optionGroupChildren","onOptionChange","onOptionFocusChange","pt","unstyled","isParentMount"])):K("",!0)],16,ae)}),128))],16,se)}B.render=le;var ue={name:"CascadeSelect",extends:oe,inheritAttrs:!1,emits:["update:modelValue","change","focus","blur","click","group-change","before-show","before-hide","hide","show"],outsideClickListener:null,scrollHandler:null,resizeListener:null,overlay:null,searchTimeout:null,searchValue:null,data:function(){return{id:this.$attrs.id,clicked:!1,focused:!1,focusedOptionInfo:{index:-1,level:0,parentKey:""},activeOptionPath:[],overlayVisible:!1,dirty:!1}},watch:{"$attrs.id":function(e){this.id=e||G()},options:function(){this.autoUpdateModel()}},mounted:function(){this.id=this.id||G(),this.autoUpdateModel()},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(w.clear(this.overlay),this.overlay=null)},methods:{getOptionLabel:function(e){return this.optionLabel?r.resolveFieldData(e,this.optionLabel):e},getOptionValue:function(e){return this.optionValue?r.resolveFieldData(e,this.optionValue):e},isOptionDisabled:function(e){return this.optionDisabled?r.resolveFieldData(e,this.optionDisabled):!1},getOptionGroupLabel:function(e){return this.optionGroupLabel?r.resolveFieldData(e,this.optionGroupLabel):null},getOptionGroupChildren:function(e,i){return r.isString(this.optionGroupChildren)?r.resolveFieldData(e,this.optionGroupChildren):r.resolveFieldData(e,this.optionGroupChildren[i])},isOptionGroup:function(e,i){return Object.prototype.hasOwnProperty.call(e,this.optionGroupChildren[i])},getProccessedOptionLabel:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=this.isProccessedOptionGroup(e);return i?this.getOptionGroupLabel(e.option,e.level):this.getOptionLabel(e.option)},isProccessedOptionGroup:function(e){return r.isNotEmpty(e==null?void 0:e.children)},show:function(e){if(this.$emit("before-show"),this.overlayVisible=!0,this.activeOptionPath=this.hasSelectedOption?this.findOptionPathByValue(this.modelValue):this.activeOptionPath,this.hasSelectedOption&&r.isNotEmpty(this.activeOptionPath)){var i=this.activeOptionPath[this.activeOptionPath.length-1];this.focusedOptionInfo={index:i.index,level:i.level,parentKey:i.parentKey}}else this.focusedOptionInfo={index:this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.findSelectedOptionIndex(),level:0,parentKey:""};e&&h.focus(this.$refs.focusInput)},hide:function(e){var i=this,n=function(){i.$emit("before-hide"),i.overlayVisible=!1,i.clicked=!1,i.activeOptionPath=[],i.focusedOptionInfo={index:-1,level:0,parentKey:""},e&&h.focus(i.$refs.focusInput)};setTimeout(function(){n()},0)},onFocus:function(e){this.disabled||(this.focused=!0,this.$emit("focus",e))},onBlur:function(e){this.focused=!1,this.focusedOptionInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.$emit("blur",e)},onKeyDown:function(e){if(this.disabled||this.loading){e.preventDefault();return}var i=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!i&&r.isPrintableCharacter(e.key)&&(!this.overlayVisible&&this.show(),this.searchOptions(e,e.key));break}this.clicked=!1},onOptionChange:function(e){var i=e.originalEvent,n=e.processedOption,s=e.isFocus,o=e.isHide;if(!r.isEmpty(n)){var l=n.index,d=n.level,v=n.parentKey,a=n.children,p=r.isNotEmpty(a),C=r.isEmpty(n.parent),g=this.isSelected(n);if(g){var H=n.index,D=n.key,N=n.level,z=n.parentKey;this.focusedOptionInfo={index:H,level:N,parentKey:z},this.activeOptionPath=this.activeOptionPath.filter(function(I){return D!==I.key&&D.startsWith(I.key)}),this.dirty=!C}else{var F=this.activeOptionPath.filter(function(I){return I.parentKey!==v});F.push(n),this.focusedOptionInfo={index:l,level:d,parentKey:v},this.activeOptionPath=F}p?this.onOptionGroupSelect(i,n):this.onOptionSelect(i,n,o),s&&h.focus(this.$refs.focusInput)}},onOptionFocusChange:function(e){if(this.focusOnHover){var i=e.originalEvent,n=e.processedOption,s=n.index,o=n.level,l=n.parentKey;this.focusedOptionInfo={index:s,level:o,parentKey:l},this.changeFocusedOptionIndex(i,s)}},onOptionSelect:function(e,i){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,s=this.getOptionValue(i==null?void 0:i.option);this.activeOptionPath.forEach(function(o){return o.selected=!0}),this.updateModel(e,s),n&&this.hide(!0)},onOptionGroupSelect:function(e,i){this.dirty=!0,this.$emit("group-change",{originalEvent:e,value:i.option})},onContainerClick:function(e){this.disabled||this.loading||((!this.overlay||!this.overlay.contains(e.target))&&(this.overlayVisible?this.hide():this.show(),h.focus(this.$refs.focusInput)),this.clicked=!0,this.$emit("click",e))},onOverlayClick:function(e){q.emit("overlay-click",{originalEvent:e,target:this.$el})},onOverlayKeyDown:function(e){switch(e.code){case"Escape":this.onEscapeKey(e);break}},onArrowDownKey:function(e){if(!this.overlayVisible)this.show();else{var i=this.focusedOptionInfo.index!==-1?this.findNextOptionIndex(this.focusedOptionInfo.index):this.clicked?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,i)}e.preventDefault()},onArrowUpKey:function(e){if(e.altKey){if(this.focusedOptionInfo.index!==-1){var i=this.visibleOptions[this.focusedOptionInfo.index],n=this.isProccessedOptionGroup(i);!n&&this.onOptionChange({originalEvent:e,processedOption:i})}this.overlayVisible&&this.hide(),e.preventDefault()}else{var s=this.focusedOptionInfo.index!==-1?this.findPrevOptionIndex(this.focusedOptionInfo.index):this.clicked?this.findLastOptionIndex():this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,s),!this.overlayVisible&&this.show(),e.preventDefault()}},onArrowLeftKey:function(e){var i=this;if(this.overlayVisible){var n=this.visibleOptions[this.focusedOptionInfo.index],s=this.activeOptionPath.find(function(d){return d.key===(n==null?void 0:n.parentKey)}),o=this.focusedOptionInfo.parentKey===""||s&&s.key===this.focusedOptionInfo.parentKey,l=r.isEmpty(n==null?void 0:n.parent);o&&(this.activeOptionPath=this.activeOptionPath.filter(function(d){return d.parentKey!==i.focusedOptionInfo.parentKey})),l||(this.focusedOptionInfo={index:-1,parentKey:s?s.parentKey:""},this.searchValue="",this.onArrowDownKey(e)),e.preventDefault()}},onArrowRightKey:function(e){if(this.overlayVisible){var i=this.visibleOptions[this.focusedOptionInfo.index],n=this.isProccessedOptionGroup(i);if(n){var s=this.activeOptionPath.some(function(o){return(i==null?void 0:i.key)===o.key});s?(this.focusedOptionInfo={index:-1,parentKey:i==null?void 0:i.key},this.searchValue="",this.onArrowDownKey(e)):this.onOptionChange({originalEvent:e,processedOption:i})}e.preventDefault()}},onHomeKey:function(e){this.changeFocusedOptionIndex(e,this.findFirstOptionIndex()),!this.overlayVisible&&this.show(),e.preventDefault()},onEndKey:function(e){this.changeFocusedOptionIndex(e,this.findLastOptionIndex()),!this.overlayVisible&&this.show(),e.preventDefault()},onEnterKey:function(e){if(!this.overlayVisible)this.focusedOptionInfo.index,this.onArrowDownKey(e);else if(this.focusedOptionInfo.index!==-1){var i=this.visibleOptions[this.focusedOptionInfo.index],n=this.isProccessedOptionGroup(i);this.onOptionChange({originalEvent:e,processedOption:i}),!n&&this.hide()}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){this.overlayVisible&&this.hide(!0),e.preventDefault()},onTabKey:function(e){if(this.focusedOptionInfo.index!==-1){var i=this.visibleOptions[this.focusedOptionInfo.index],n=this.isProccessedOptionGroup(i);!n&&this.onOptionChange({originalEvent:e,processedOption:i})}this.overlayVisible&&this.hide()},onOverlayEnter:function(e){w.set("overlay",e,this.$primevue.config.zIndex.overlay),h.addStyles(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.scrollInView()},onOverlayAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.overlay=null,this.dirty=!1},onOverlayAfterLeave:function(e){w.clear(e)},alignOverlay:function(){this.appendTo==="self"?h.relativePosition(this.overlay,this.$el):(this.overlay.style.minWidth=h.getOuterWidth(this.$el)+"px",h.absolutePosition(this.overlay,this.$el))},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(i){e.overlayVisible&&e.overlay&&!e.$el.contains(i.target)&&!e.overlay.contains(i.target)&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new J(this.$refs.container,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!h.isTouchDevice()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isOptionMatched:function(e){var i;return this.isValidOption(e)&&((i=this.getProccessedOptionLabel(e))===null||i===void 0?void 0:i.toLocaleLowerCase(this.searchLocale).startsWith(this.searchValue.toLocaleLowerCase(this.searchLocale)))},isValidOption:function(e){return r.isNotEmpty(e)&&!this.isOptionDisabled(e.option)},isValidSelectedOption:function(e){return this.isValidOption(e)&&this.isSelected(e)},isSelected:function(e){return this.activeOptionPath.some(function(i){return i.key===e.key})},findFirstOptionIndex:function(){var e=this;return this.visibleOptions.findIndex(function(i){return e.isValidOption(i)})},findLastOptionIndex:function(){var e=this;return r.findLastIndex(this.visibleOptions,function(i){return e.isValidOption(i)})},findNextOptionIndex:function(e){var i=this,n=e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(s){return i.isValidOption(s)}):-1;return n>-1?n+e+1:e},findPrevOptionIndex:function(e){var i=this,n=e>0?r.findLastIndex(this.visibleOptions.slice(0,e),function(s){return i.isValidOption(s)}):-1;return n>-1?n:e},findSelectedOptionIndex:function(){var e=this;return this.visibleOptions.findIndex(function(i){return e.isValidSelectedOption(i)})},findFirstFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e},findLastFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e},findOptionPathByValue:function(e,i){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;if(i=i||n===0&&this.processedOptions,!i)return null;if(r.isEmpty(e))return[];for(var s=0;s<i.length;s++){var o=i[s];if(r.equals(e,this.getOptionValue(o.option),this.equalityKey))return[o];var l=this.findOptionPathByValue(e,o.children,n+1);if(l)return l.unshift(o),l}},searchOptions:function(e,i){var n=this;this.searchValue=(this.searchValue||"")+i;var s=-1,o=!1;return r.isNotEmpty(this.searchValue)&&(this.focusedOptionInfo.index!==-1?(s=this.visibleOptions.slice(this.focusedOptionInfo.index).findIndex(function(l){return n.isOptionMatched(l)}),s=s===-1?this.visibleOptions.slice(0,this.focusedOptionInfo.index).findIndex(function(l){return n.isOptionMatched(l)}):s+this.focusedOptionInfo.index):s=this.visibleOptions.findIndex(function(l){return n.isOptionMatched(l)}),s!==-1&&(o=!0),s===-1&&this.focusedOptionInfo.index===-1&&(s=this.findFirstFocusedOptionIndex()),s!==-1&&this.changeFocusedOptionIndex(e,s)),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){n.searchValue="",n.searchTimeout=null},500),o},changeFocusedOptionIndex:function(e,i){this.focusedOptionInfo.index!==i&&(this.focusedOptionInfo.index=i,this.scrollInView(),this.selectOnFocus&&this.onOptionChange({originalEvent:e,processedOption:this.visibleOptions[i],isHide:!1}))},scrollInView:function(){var e=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;this.$nextTick(function(){var n=i!==-1?"".concat(e.id,"_").concat(i):e.focusedOptionId,s=h.findSingle(e.list,'li[id="'.concat(n,'"]'));s&&s.scrollIntoView&&s.scrollIntoView({block:"nearest",inline:"start"})})},autoUpdateModel:function(){this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption&&(this.focusedOptionInfo.index=this.findFirstFocusedOptionIndex(),this.onOptionChange({processedOption:this.visibleOptions[this.focusedOptionInfo.index],isHide:!1}),!this.overlayVisible&&(this.focusedOptionInfo={index:-1,level:0,parentKey:""}))},updateModel:function(e,i){this.$emit("update:modelValue",i),this.$emit("change",{originalEvent:e,value:i})},createProcessedOptions:function(e){var i=this,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",l=[];return e&&e.forEach(function(d,v){var a=(o!==""?o+"_":"")+v,p={option:d,index:v,level:n,key:a,parent:s,parentKey:o};p.children=i.createProcessedOptions(i.getOptionGroupChildren(d,n),n+1,p,a),l.push(p)}),l},overlayRef:function(e){this.overlay=e}},computed:{hasSelectedOption:function(){return r.isNotEmpty(this.modelValue)},label:function(){var e=this.placeholder||"p-emptylabel";if(this.hasSelectedOption){var i=this.findOptionPathByValue(this.modelValue),n=r.isNotEmpty(i)?i[i.length-1]:null;return n?this.getOptionLabel(n.option):e}return e},processedOptions:function(){return this.createProcessedOptions(this.options||[])},visibleOptions:function(){var e=this,i=this.activeOptionPath.find(function(n){return n.key===e.focusedOptionInfo.parentKey});return i?i.children:this.processedOptions},equalityKey:function(){return this.optionValue?null:this.dataKey},searchResultMessageText:function(){return r.isNotEmpty(this.visibleOptions)?this.searchMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptySearchMessageText},searchMessageText:function(){return this.searchMessage||this.$primevue.config.locale.searchMessage||""},emptySearchMessageText:function(){return this.emptySearchMessage||this.$primevue.config.locale.emptySearchMessage||""},emptyMessageText:function(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage||""},selectionMessageText:function(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText:function(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText:function(){return this.hasSelectedOption?this.selectionMessageText.replaceAll("{0}","1"):this.emptySelectionMessageText},focusedOptionId:function(){return this.focusedOptionInfo.index!==-1?"".concat(this.id).concat(r.isNotEmpty(this.focusedOptionInfo.parentKey)?"_"+this.focusedOptionInfo.parentKey:"","_").concat(this.focusedOptionInfo.index):null}},components:{CascadeSelectSub:B,Portal:W,ChevronDownIcon:j,SpinnerIcon:U,AngleRightIcon:A}};function m(t){"@babel/helpers - typeof";return m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(t)}function T(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),i.push.apply(i,n)}return i}function L(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?T(Object(i),!0).forEach(function(n){ce(t,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):T(Object(i)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(i,n))})}return t}function ce(t,e,i){return e=de(e),e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function de(t){var e=pe(t,"string");return m(e)=="symbol"?e:String(e)}function pe(t,e){if(m(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var n=i.call(t,e||"default");if(m(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var he=["id","disabled","placeholder","tabindex","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-invalid"];function fe(t,e,i,n,s,o){var l=b("SpinnerIcon"),d=b("CascadeSelectSub"),v=b("Portal");return c(),f("div",u({ref:"container",class:t.cx("root"),style:t.sx("root"),onClick:e[5]||(e[5]=function(a){return o.onContainerClick(a)})},t.ptmi("root")),[y("div",u({class:"p-hidden-accessible"},t.ptm("hiddenInputWrapper"),{"data-p-hidden-accessible":!0}),[y("input",u({ref:"focusInput",id:t.inputId,type:"text",class:t.inputClass,style:t.inputStyle,readonly:"",disabled:t.disabled,placeholder:t.placeholder,tabindex:t.disabled?-1:t.tabindex,role:"combobox","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"tree","aria-expanded":s.overlayVisible,"aria-controls":s.id+"_tree","aria-activedescendant":s.focused?o.focusedOptionId:void 0,"aria-invalid":t.invalid||void 0,onFocus:e[0]||(e[0]=function(){return o.onFocus&&o.onFocus.apply(o,arguments)}),onBlur:e[1]||(e[1]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)}),onKeydown:e[2]||(e[2]=function(){return o.onKeyDown&&o.onKeyDown.apply(o,arguments)})},L(L({},t.inputProps),t.ptm("input"))),null,16,he)],16),y("span",u({class:t.cx("label")},t.ptm("label")),[P(t.$slots,"value",{value:t.modelValue,placeholder:t.placeholder},function(){return[ee(S(o.label),1)]})],16),y("div",u({class:t.cx("dropdownButton"),role:"button",tabindex:"-1","aria-hidden":"true"},t.ptm("dropdownButton")),[t.loading?P(t.$slots,"loadingicon",{key:0,class:V(t.cx("loadingIcon"))},function(){return[t.loadingIcon?(c(),f("span",u({key:0,class:[t.cx("loadingIcon"),"pi-spin",t.loadingIcon],"aria-hidden":"true"},t.ptm("loadingIcon")),null,16)):(c(),O(l,u({key:1,class:t.cx("loadingIcon"),spin:"","aria-hidden":"true"},t.ptm("loadingIcon")),null,16,["class"]))]}):P(t.$slots,"dropdownicon",{key:1,class:V(t.cx("dropdownIcon"))},function(){return[(c(),O(x(t.dropdownIcon?"span":"ChevronDownIcon"),u({class:[t.cx("dropdownIcon"),t.dropdownIcon],"aria-hidden":"true"},t.ptm("dropdownIcon")),null,16,["class"]))]})],16),y("span",u({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSearchResult"),{"data-p-hidden-accessible":!0}),S(o.searchResultMessageText),17),k(v,{appendTo:t.appendTo},{default:M(function(){return[k($,u({name:"p-connected-overlay",onEnter:o.onOverlayEnter,onAfterEnter:o.onOverlayAfterEnter,onLeave:o.onOverlayLeave,onAfterLeave:o.onOverlayAfterLeave},t.ptm("transition")),{default:M(function(){return[s.overlayVisible?(c(),f("div",u({key:0,ref:o.overlayRef,class:[t.cx("panel"),t.panelClass],style:t.panelStyle,onClick:e[3]||(e[3]=function(){return o.onOverlayClick&&o.onOverlayClick.apply(o,arguments)}),onKeydown:e[4]||(e[4]=function(){return o.onOverlayKeyDown&&o.onOverlayKeyDown.apply(o,arguments)})},L(L({},t.panelProps),t.ptm("panel"))),[y("div",u({class:t.cx("wrapper")},t.ptm("wrapper")),[k(d,{id:s.id+"_tree",role:"tree","aria-orientation":"horizontal",selectId:s.id,focusedOptionId:s.focused?o.focusedOptionId:void 0,options:o.processedOptions,activeOptionPath:s.activeOptionPath,level:0,templates:t.$slots,optionLabel:t.optionLabel,optionValue:t.optionValue,optionDisabled:t.optionDisabled,optionGroupIcon:t.optionGroupIcon,optionGroupLabel:t.optionGroupLabel,optionGroupChildren:t.optionGroupChildren,onOptionChange:o.onOptionChange,onOptionFocusChange:o.onOptionFocusChange,pt:t.pt,unstyled:t.unstyled},null,8,["id","selectId","focusedOptionId","options","activeOptionPath","templates","optionLabel","optionValue","optionDisabled","optionGroupIcon","optionGroupLabel","optionGroupChildren","onOptionChange","onOptionFocusChange","pt","unstyled"])],16),y("span",u({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSelectedMessage"),{"data-p-hidden-accessible":!0}),S(o.selectedMessageText),17)],16)):K("",!0)]}),_:1},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:1},8,["appendTo"])],16)}ue.render=fe;export{ue as default};
