import{d as u,c as _,a as r,F as C,r as y,o as d,t as f,_ as i,b as p,e as g,n as b,f as S,l as $,g as T,u as h,A as k}from"./index-b1aa38c8.js";const x={class:"select"},F=["value"],A=u({__name:"SelectField",props:{selected:null,options:null},emits:["onChange"],setup(o){return(e,t)=>(d(),_("div",x,[r("select",{value:o.selected,onChange:t[0]||(t[0]=l=>e.$emit("onChange",l))},[(d(!0),_(C,null,y(o.options,l=>(d(),_("option",{key:l},f(l),1))),128))],40,F)]))}});const B=i(A,[["__scopeId","data-v-686dad5d"]]),L=u({__name:"SubmitButton",props:{label:null},emits:["onClick"],setup(o){return(e,t)=>(d(),_("div",null,[r("button",{onClick:t[0]||(t[0]=l=>e.$emit("onClick"))},f(o.label),1)]))}});const R=i(L,[["__scopeId","data-v-272125f1"]]),I={class:"tag"},w=u({__name:"RemovableTag",props:{tag:null},emits:["removeTag"],setup(o){return(e,t)=>(d(),_("div",I,[r("p",null,f(o.tag),1),r("p",{class:"cross",onClick:t[0]||(t[0]=l=>e.$emit("removeTag",o.tag))},"✕")]))}});const O=i(w,[["__scopeId","data-v-b8f6c47f"]]),E={class:"form"},N={class:"tag-select"},V={class:"tag-submit"},z=u({__name:"SearchForm",props:{form:null,tags:null},emits:["addTag","removeTag"],setup(o,{emit:e}){const t=o,l=p(""),m=c=>{const s=c.target;l.value=s.value},v=()=>{const c=l.value;c!==""&&t.form.selectedTags.indexOf(c)===-1&&(l.value="",e("addTag",c))};return(c,s)=>(d(),_("div",null,[r("div",E,[r("div",N,[g(B,{selected:l.value,options:o.tags,onOnChange:m},null,8,["selected","options"])]),r("div",V,[g(R,{label:"Add tag",onOnClick:v})])]),r("div",{class:b(["tags",o.form.selectedTags.length>0?"tags-non-empty":""])},[(d(!0),_(C,null,y(o.form.selectedTags,a=>(d(),S(O,{key:a,tag:a,onRemoveTag:n=>c.$emit("removeTag",n)},null,8,["tag","onRemoveTag"]))),128))],2)]))}});const D=i(z,[["__scopeId","data-v-1cc9b299"]]),P={class:"form"},j=u({__name:"TagSearch",setup(o){const e=p({selectedTags:[]}),t=p([]);Promise.resolve($()).then(s=>t.value=s.sort((a,n)=>a.title.localeCompare(n.title)||a.issue.localeCompare(n.issue)));const l=T(()=>{const s=new Set;return t.value.forEach(a=>a.tags.forEach(n=>s.add(n.toLocaleLowerCase()))),Array.from(s).sort((a,n)=>a.localeCompare(n))}),m=T(()=>t.value.filter(s=>{const a=s.tags.map(n=>n.toLocaleLowerCase());return e.value.selectedTags.every(n=>a.indexOf(n)!==-1)})),v=s=>{e.value.selectedTags=[...e.value.selectedTags,s]},c=s=>{e.value.selectedTags=e.value.selectedTags.filter(a=>a!==s)};return(s,a)=>(d(),_("div",null,[r("div",P,[g(D,{form:e.value,tags:h(l),onAddTag:v,onRemoveTag:c},null,8,["form","tags"])]),g(k,{articles:h(m)},null,8,["articles"])]))}});const G=i(j,[["__scopeId","data-v-dd926687"]]);export{G as default};