import{d as i,c,F as d,r as $,o as u,t as p,a as h,b as m,e as T,f as g,l as k,g as _,u as C,_ as b}from"./index-c8097bd9.js";const S=["value"],x=i({__name:"SelectField",props:{selected:null,options:null},emits:["onChange"],setup(l){return(e,t)=>(u(),c("select",{value:l.selected,onChange:t[0]||(t[0]=n=>e.$emit("onChange",n))},[(u(!0),c(d,null,$(l.options,n=>(u(),c("option",{key:n},p(n),1))),128))],40,S))}}),y=i({__name:"SubmitButton",props:{label:null},emits:["onClick"],setup(l){return(e,t)=>(u(),c("button",{onClick:t[0]||(t[0]=n=>e.$emit("onClick"))},p(l.label),1))}}),A=i({__name:"RemovableTag",props:{tag:null},emits:["removeTag"],setup(l){return(e,t)=>(u(),c("div",null,[h(p(l.tag)+" ",1),m("button",{onClick:t[0]||(t[0]=n=>e.$emit("removeTag",l.tag))},"x")]))}}),L=i({__name:"SearchForm",props:{form:null,tags:null},emits:["addTag","removeTag"],setup(l,{emit:e}){const t=l,n=T(""),v=o=>{const a=o.target;n.value=a.value},f=()=>{const o=n.value;o!==""&&t.form.selectedTags.indexOf(o)===-1&&(n.value="",e("addTag",o))};return(o,a)=>(u(),c(d,null,[m("div",null,[g(x,{selected:n.value,options:l.tags,onOnChange:v},null,8,["selected","options"]),g(y,{label:"Add tag",onOnClick:f})]),m("div",null,[m("ul",null,[(u(!0),c(d,null,$(l.form.selectedTags,s=>(u(),c("li",{key:s},[g(A,{tag:s,onRemoveTag:r=>o.$emit("removeTag",r)},null,8,["tag","onRemoveTag"])]))),128))])])],64))}}),B=i({__name:"TagSearch",setup(l){const e=T({selectedTags:[]}),t=T([]);Promise.resolve(k()).then(a=>t.value=a);const n=_(()=>{const a=new Set;return t.value.forEach(s=>s.tags.forEach(r=>a.add(r.toLocaleLowerCase()))),Array.from(a).sort((s,r)=>s.localeCompare(r))}),v=_(()=>t.value.filter(a=>{const s=a.tags.map(r=>r.toLocaleLowerCase());return e.value.selectedTags.every(r=>s.indexOf(r)!==-1)})),f=a=>{e.value.selectedTags=[...e.value.selectedTags,a]},o=a=>{e.value.selectedTags=e.value.selectedTags.filter(s=>s!==a)};return(a,s)=>(u(),c(d,null,[g(L,{form:e.value,tags:C(n),onAddTag:f,onRemoveTag:o},null,8,["form","tags"]),g(b,{articles:C(v)},null,8,["articles"])],64))}});export{B as default};
