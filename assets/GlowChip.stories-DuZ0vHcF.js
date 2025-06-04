import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as N}from"./createSvgIcon-DyKWnwtn.js";import{s as H}from"./styled-DketRv4I.js";import{I as O}from"./IconButton-jhZesD6s.js";import{k as T}from"./emotion-react.browser.esm-CzyYH6Xe.js";import{S as F}from"./Star-DLM1c_Pb.js";import"./index-D4lIrffr.js";import"./generateUtilityClasses-CPRdC64H.js";import"./DefaultPropsProvider-Bcp8l54b.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-DF_PSzS1.js";import"./ButtonBase-IUfDptLI.js";import"./useTimeout-COwD6Zpp.js";import"./useForkRef-zqhjcRVs.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DcGBhv6q.js";const J=N(e.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12z"})),K=T`
  0%,100% {
    box-shadow: 0 0 17px 3px #8b5cf6aa, 0 0 34px 17px #05ffa1bb;
    border-color: #8b5cf6;
  }
  40% {
    box-shadow: 0 0 27px 7px #f472b6c0, 0 0 50px 18px #05ffa1bb;
    border-color: #f472b6;
  }
`,Q=H("div")(({background:l,borderColor:n,borderWidth:i,glowColor:a,textColor:s,borderRadius:b,animated:t,disabled:r,clickable:o})=>({display:"inline-flex",alignItems:"center",gap:7,minHeight:34,fontWeight:700,fontSize:15.2,letterSpacing:"0.04em",padding:"0 14px",borderRadius:b,background:l,color:s,border:`${i}px solid ${n}`,boxShadow:`0 0 17px 3px ${a}a5, 0 0 28px 9px ${n}60`,transition:"box-shadow 0.18s, border 0.18s, background 0.16s, color 0.18s, transform 0.12s",userSelect:"none",cursor:r?"not-allowed":o?"pointer":"default",opacity:r?.56:1,...t&&!r?{animation:`${K} 3.2s alternate infinite`}:{},position:"relative",outline:"none","&:hover":o&&!r?{boxShadow:`0 0 37px 12px ${a}bb, 0 0 48px 18px ${n}bb`,transform:"scale(1.06)",background:l}:void 0,"&:active":o&&!r?{transform:"scale(0.96)",borderColor:a}:void 0})),g=({label:l,startIcon:n,endIcon:i,onDelete:a,clickable:s,onClick:b,disabled:t=!1,background:r="linear-gradient(100deg, #6366f1 35%, #05ffa1 100%)",glowColor:o="#8b5cf6",borderColor:L="#05ffa1",borderWidth:E=2.5,borderRadius:M=20,textColor:x="#fff",animated:P=!0,style:A})=>e.jsxs(Q,{background:r,glowColor:o,borderColor:L,borderWidth:E,borderRadius:M,textColor:x,animated:P,disabled:t,clickable:!!s,tabIndex:t?-1:s?0:-1,onClick:t?void 0:b,style:A,children:[n&&e.jsx("span",{style:{display:"inline-flex",alignItems:"center",marginRight:2},children:n}),l,i&&!a&&e.jsx("span",{style:{display:"inline-flex",alignItems:"center",marginLeft:2},children:i}),a&&e.jsx(O,{size:"small",onClick:B=>{B.stopPropagation(),a()},sx:{color:x,background:"transparent",marginLeft:"3px",ml:.5,opacity:.82,"&:hover":{color:o,background:"#fff1",boxShadow:`0 0 9px 2px ${o}70`}},tabIndex:-1,disabled:t,"aria-label":"delete",children:e.jsx(J,{fontSize:"small"})})]});try{g.displayName="GlowChip",g.__docgenInfo={description:"",displayName:"GlowChip",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"ReactNode"}},startIcon:{defaultValue:null,description:"",name:"startIcon",required:!1,type:{name:"ReactNode"}},endIcon:{defaultValue:null,description:"",name:"endIcon",required:!1,type:{name:"ReactNode"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"(() => void) | undefined"}},clickable:{defaultValue:null,description:"",name:"clickable",required:!1,type:{name:"boolean | undefined"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void) | undefined"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},background:{defaultValue:{value:"linear-gradient(100deg, #6366f1 35%, #05ffa1 100%)"},description:"",name:"background",required:!1,type:{name:"string | undefined"}},glowColor:{defaultValue:{value:"#8b5cf6"},description:"",name:"glowColor",required:!1,type:{name:"string | undefined"}},borderColor:{defaultValue:{value:"#05ffa1"},description:"",name:"borderColor",required:!1,type:{name:"string | undefined"}},borderWidth:{defaultValue:{value:"2.5"},description:"",name:"borderWidth",required:!1,type:{name:"number | undefined"}},borderRadius:{defaultValue:{value:"20"},description:"",name:"borderRadius",required:!1,type:{name:"string | number | undefined"}},textColor:{defaultValue:{value:"#fff"},description:"",name:"textColor",required:!1,type:{name:"string | undefined"}},animated:{defaultValue:{value:"true"},description:"",name:"animated",required:!1,type:{name:"boolean | undefined"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}}}}}catch{}const U=N(e.jsx("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})),me={title:"Components/GlowChip",component:g,argTypes:{label:{control:"text"},clickable:{control:"boolean"},disabled:{control:"boolean"},animated:{control:"boolean"},borderRadius:{control:{type:"number",min:0,max:30}},onDelete:{action:"delete"}},args:{label:"Glowing Chip",clickable:!1,animated:!0}},d={},c={args:{clickable:!0,onClick:()=>alert("Clicked!")}},p={args:{label:"With Icons",startIcon:e.jsx(F,{fontSize:"small"}),endIcon:e.jsx(U,{fontSize:"small"})}},u={args:{label:"Deletable Chip",onDelete:()=>alert("Delete action")}},m={args:{label:"Disabled",disabled:!0}},f={args:{label:"Custom Colors",background:"linear-gradient(90deg,#9333ea,#38bdf8 85%)",glowColor:"#38bdf8",borderColor:"#9333ea",textColor:"#20123a",borderRadius:12}};var C,h,y;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(y=(h=d.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var S,k,I;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    clickable: true,
    onClick: () => alert('Clicked!')
  }
}`,...(I=(k=c.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var v,q,D;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'With Icons',
    startIcon: <StarIcon fontSize="small" />,
    endIcon: <CheckIcon fontSize="small" />
  }
}`,...(D=(q=p.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var V,w,j;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Deletable Chip',
    onDelete: () => alert('Delete action')
  }
}`,...(j=(w=u.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var R,_,z;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    disabled: true
  }
}`,...(z=(_=m.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var $,W,G;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Custom Colors',
    background: 'linear-gradient(90deg,#9333ea,#38bdf8 85%)',
    glowColor: '#38bdf8',
    borderColor: '#9333ea',
    textColor: '#20123a',
    borderRadius: 12
  }
}`,...(G=(W=f.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};const fe=["Default","Clickable","WithIcons","Deletable","Disabled","CustomStyle"];export{c as Clickable,f as CustomStyle,d as Default,u as Deletable,m as Disabled,p as WithIcons,fe as __namedExportsOrder,me as default};
