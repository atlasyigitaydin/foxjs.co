import{d as u,i as d,v as a,x as o,J as m,K as i,L as _,t as s,M as k,N as p,y as f,u as y,m as e,_ as v}from"./BAclGRL-.js";const b=["onClick"],C=u({__name:"default",setup(h){const n=d(()=>y().currentRoute.value.name),r=[{key:"me",label:"Me",to:()=>{e({name:"me"})}},{key:"projects",label:"Projects",to:()=>{e({name:"projects"})}},{key:"works",label:"Works",to:()=>{e({name:"works"})}},{key:"contact",label:"Contact me",to:()=>{e({name:"contact"})}}];return(l,B)=>(s(),a("div",null,[o("header",null,[(s(),a(m,null,i(r,(t,c)=>o("div",{key:c,class:k(["headerButtons",t.key===p(n)?"headerButtonsClick":""]),onClick:t.to},f(t.label),11,b)),64))]),_(l.$slots,"default",{},void 0)]))}}),j=v(C,[["__scopeId","data-v-fbd21167"]]);export{j as default};