import{m as u,af as h,ak as m,ah as k,z as c,K as _,L as y,U as w,u as t,A as T,C as g,B as v,a3 as l,D as x,ai as B}from"./index-c1c3f66c.js";import{E as V}from"./tag-89837a44.js";const C={class:"tag-container"},j={key:0},E={key:1},L={key:2},M={class:"count"},z=u({__name:"TagView",setup(A){var i;const{locale:p}=h(),a=new Map,n=new Map;for(const r of m)for(const o of r.tags){let s="";typeof o=="string"?s=o:(s=o.en,n.set(s,o)),a.has(s)||a.set(s,[]),(i=a.get(s))==null||i.push(r)}const d=Array.from(a.keys()).sort((r,o)=>a.get(o).length-a.get(r).length);return(r,o)=>{const s=V,f=k("router-link");return c(),_("div",C,[(c(!0),_(y,null,w(t(d),e=>(c(),T(f,{key:e,to:"/project?tag="+e},{default:g(()=>[v(s,{class:"tag",effect:"plain",color:"transparent",size:"large"},{default:g(()=>[t(n).has(e)&&t(p)in t(n).get(e)?(c(),_("span",j,l(t(n).get(e)[t(p)]),1)):t(n).has(e)?(c(),_("span",E,l(t(n).get(e).en),1)):(c(),_("span",L,l(e),1)),x("span",M,l(t(a).get(e).length),1)]),_:2},1024)]),_:2},1032,["to"]))),128))])}}});const N=B(z,[["__scopeId","data-v-50549d1a"]]);export{N as default};