import{l as x}from"./LabelValue-91f78209.js";import{A}from"./ArticlesList-a0a4578e.js";import{d as v,c as i,a as r,F as C,h as $,o as d,t as b,_ as p,r as h,b as m,n as F,i as R,e as y,u as S,f as k,g as q}from"./index-547fbf53.js";import{S as L}from"./SubmitButton-3b705a12.js";const B={class:"select"},w=["value"],I=v({__name:"SelectField",props:{selected:null,options:null},emits:["onChange"],setup(a){return(e,o)=>(d(),i("div",B,[r("select",{value:a.selected,onChange:o[0]||(o[0]=s=>e.$emit("onChange",s))},[(d(!0),i(C,null,$(a.options,s=>(d(),i("option",{key:s},b(s),1))),128))],40,w)]))}});const O=p(I,[["__scopeId","data-v-686dad5d"]]),E={class:"tag"},N=v({__name:"RemovableTag",props:{tag:null},emits:["removeTag"],setup(a){return(e,o)=>(d(),i("div",E,[r("p",null,b(a.tag),1),r("p",{class:"cross",onClick:o[0]||(o[0]=s=>e.$emit("removeTag",a.tag))},"✕")]))}});const V=p(N,[["__scopeId","data-v-b8f6c47f"]]),z={class:"form"},D={class:"tag-select"},j={class:"tag-submit"},G=v({__name:"SearchForm",props:{form:null,tags:null},emits:["addTag","removeTag"],setup(a,{emit:e}){const o=a,s=h(""),u=n=>{const g=n.target;s.value=g.value},f=()=>{const n=s.value;n!==""&&o.form.selectedTags.indexOf(n)===-1&&(s.value="",e("addTag",n))};return(n,g)=>(d(),i("div",null,[r("div",z,[r("div",D,[m(O,{selected:s.value,options:a.tags,onOnChange:u},null,8,["selected","options"])]),r("div",j,[m(L,{label:"Add tag",onOnClick:f})])]),r("div",{class:F(["tags",a.form.selectedTags.length>0?"tags-non-empty":""])},[(d(!0),i(C,null,$(a.form.selectedTags,_=>(d(),R(V,{key:_,tag:_,onRemoveTag:T=>n.$emit("removeTag",T)},null,8,["tag","onRemoveTag"]))),128))],2)]))}});const H=p(G,[["__scopeId","data-v-5f9b4345"]]),J={class:"form"},K=v({__name:"TagSearch",setup(a){const e=h({selectedTags:[]}),o=h([]);x().then(t=>o.value=t.sort((l,c)=>l.title.localeCompare(c.title)||l.issue.localeCompare(c.issue)));const s=q(),u=k(),f=Array.isArray(u.query.selectedTags)?u.query.selectedTags:[u.query.selectedTags];e.value.selectedTags=f.filter(t=>t!=null);const n=y(()=>{const t=new Set;return o.value.forEach(l=>l.tags.forEach(c=>t.add(c.toLocaleLowerCase()))),Array.from(t).sort((l,c)=>l.localeCompare(c))}),g=y(()=>o.value.filter(t=>{const l=t.tags.map(c=>c.toLocaleLowerCase());return e.value.selectedTags.every(c=>l.indexOf(c)!==-1)})),_=t=>{e.value.selectedTags=[...e.value.selectedTags,t],s.replace({path:u.path,query:{selectedTags:[...e.value.selectedTags]}})},T=t=>{e.value.selectedTags=e.value.selectedTags.filter(l=>l!==t),s.replace({path:u.path,query:{selectedTags:[...e.value.selectedTags]}})};return(t,l)=>(d(),i("div",null,[r("div",J,[m(H,{form:e.value,tags:S(n),onAddTag:_,onRemoveTag:T},null,8,["form","tags"])]),m(A,{articles:S(g)},null,8,["articles"])]))}});const W=p(K,[["__scopeId","data-v-6993f913"]]);export{W as default};