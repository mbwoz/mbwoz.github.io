import{d as u,b as r,h as n,c as o,e as a,L as l,F as i,i as c,o as v}from"./index-b1aa38c8.js";const b=u({__name:"ArticleDetails",setup(m){const s=c(),e=r({id:-1,issue:"",title:"",tags:[]});return Promise.resolve(n(Number(s.params.id))).then(t=>e.value=t),(t,p)=>(v(),o(i,null,[a(l,{label:"issue:",value:e.value.issue},null,8,["value"]),a(l,{label:"title:",value:e.value.title},null,8,["value"]),a(l,{label:"tags:",value:e.value.tags.join(", ")},null,8,["value"])],64))}});export{b as default};
