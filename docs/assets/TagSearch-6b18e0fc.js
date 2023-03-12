import{d as u,c as _,a as r,F as b,r as y,o as d,t as f,_ as i,b as p,e as g,n as C,f as S,l as $,g as T,u as h,A as k}from"./index-12392294.js";const x={class:"select"},F=["value"],A=u({__name:"SelectField",props:{selected:null,options:null},emits:["onChange"],setup(a){return(e,t)=>(d(),_("div",x,[r("select",{value:a.selected,onChange:t[0]||(t[0]=o=>e.$emit("onChange",o))},[(d(!0),_(b,null,y(a.options,o=>(d(),_("option",{key:o},f(o),1))),128))],40,F)]))}});const B=i(A,[["__scopeId","data-v-686dad5d"]]),L=u({__name:"SubmitButton",props:{label:null},emits:["onClick"],setup(a){return(e,t)=>(d(),_("div",null,[r("button",{onClick:t[0]||(t[0]=o=>e.$emit("onClick"))},f(a.label),1)]))}});const R=i(L,[["__scopeId","data-v-272125f1"]]),I={class:"tag"},w=u({__name:"RemovableTag",props:{tag:null},emits:["removeTag"],setup(a){return(e,t)=>(d(),_("div",I,[r("p",null,f(a.tag),1),r("p",{class:"cross",onClick:t[0]||(t[0]=o=>e.$emit("removeTag",a.tag))},"✕")]))}});const O=i(w,[["__scopeId","data-v-b8f6c47f"]]),E={class:"form"},N={class:"tag-select"},V={class:"tag-submit"},z=u({__name:"SearchForm",props:{form:null,tags:null},emits:["addTag","removeTag"],setup(a,{emit:e}){const t=a,o=p(""),m=l=>{const s=l.target;o.value=s.value},v=()=>{const l=o.value;l!==""&&t.form.selectedTags.indexOf(l)===-1&&(o.value="",e("addTag",l))};return(l,s)=>(d(),_("div",null,[r("div",E,[r("div",N,[g(B,{selected:o.value,options:a.tags,onOnChange:m},null,8,["selected","options"])]),r("div",V,[g(R,{label:"Add tag",onOnClick:v})])]),r("div",{class:C(["tags",a.form.selectedTags.length>0?"tags-non-empty":""])},[(d(!0),_(b,null,y(a.form.selectedTags,n=>(d(),S(O,{key:n,tag:n,onRemoveTag:c=>l.$emit("removeTag",c)},null,8,["tag","onRemoveTag"]))),128))],2)]))}});const D=i(z,[["__scopeId","data-v-1cc9b299"]]),P={class:"form"},j=u({__name:"TagSearch",setup(a){const e=p({selectedTags:[]}),t=p([]);Promise.resolve($()).then(s=>t.value=s);const o=T(()=>{const s=new Set;return t.value.forEach(n=>n.tags.forEach(c=>s.add(c.toLocaleLowerCase()))),Array.from(s).sort((n,c)=>n.localeCompare(c))}),m=T(()=>t.value.filter(s=>{const n=s.tags.map(c=>c.toLocaleLowerCase());return e.value.selectedTags.every(c=>n.indexOf(c)!==-1)})),v=s=>{e.value.selectedTags=[...e.value.selectedTags,s]},l=s=>{e.value.selectedTags=e.value.selectedTags.filter(n=>n!==s)};return(s,n)=>(d(),_("div",null,[r("div",P,[g(D,{form:e.value,tags:h(o),onAddTag:v,onRemoveTag:l},null,8,["form","tags"])]),g(k,{articles:h(m)},null,8,["articles"])]))}});const G=i(j,[["__scopeId","data-v-146aeebe"]]);export{G as default};