import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{s as E,b as m,r as q}from"./styled-E20cg9_9.js";import{r as W}from"./index-D4lIrffr.js";import{g as L,a as U,c as v}from"./generateUtilityClasses-CPRdC64H.js";import{u as H,c as D,m as g}from"./DefaultPropsProvider-CvIgHTDT.js";import{c as O}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{B as Y}from"./ButtonBase-C51aHjoN.js";import{k as J}from"./emotion-react.browser.esm-BCZ8YnH8.js";import{c as P}from"./createSvgIcon-BT-PT3Kt.js";import{R as K}from"./RocketLaunch-B78fFXVq.js";import"./useTimeout-COwD6Zpp.js";import"./useForkRef-zqhjcRVs.js";import"./isFocusVisible-B8k4qzLc.js";function Q(a){return U("MuiFab",a)}const y=L("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),X=a=>{const{color:r,variant:o,classes:t,size:e}=a,c={root:["root",o,`size${m(e)}`,r==="inherit"?"colorInherit":r]},p=D(c,Q,t);return{...t,...p}},Z=E(Y,{name:"MuiFab",slot:"Root",shouldForwardProp:a=>q(a)||a==="classes",overridesResolver:(a,r)=>{const{ownerState:o}=a;return[r.root,r[o.variant],r[`size${m(o.size)}`],o.color==="inherit"&&r.colorInherit,r[m(o.size)],r[o.color]]}})(g(({theme:a})=>{var r,o;return{...a.typography.button,minHeight:36,transition:a.transitions.create(["background-color","box-shadow","border-color"],{duration:a.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(a.vars||a).zIndex.fab,boxShadow:(a.vars||a).shadows[6],"&:active":{boxShadow:(a.vars||a).shadows[12]},color:a.vars?a.vars.palette.grey[900]:(o=(r=a.palette).getContrastText)==null?void 0:o.call(r,a.palette.grey[300]),backgroundColor:(a.vars||a).palette.grey[300],"&:hover":{backgroundColor:(a.vars||a).palette.grey.A100,"@media (hover: none)":{backgroundColor:(a.vars||a).palette.grey[300]},textDecoration:"none"},[`&.${y.focusVisible}`]:{boxShadow:(a.vars||a).shadows[6]},variants:[{props:{size:"small"},style:{width:40,height:40}},{props:{size:"medium"},style:{width:48,height:48}},{props:{variant:"extended"},style:{borderRadius:48/2,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48}},{props:{variant:"extended",size:"small"},style:{width:"auto",padding:"0 8px",borderRadius:34/2,minWidth:34,height:34}},{props:{variant:"extended",size:"medium"},style:{width:"auto",padding:"0 16px",borderRadius:40/2,minWidth:40,height:40}},{props:{color:"inherit"},style:{color:"inherit"}}]}}),g(({theme:a})=>({variants:[...Object.entries(a.palette).filter(O(["dark","contrastText"])).map(([r])=>({props:{color:r},style:{color:(a.vars||a).palette[r].contrastText,backgroundColor:(a.vars||a).palette[r].main,"&:hover":{backgroundColor:(a.vars||a).palette[r].dark,"@media (hover: none)":{backgroundColor:(a.vars||a).palette[r].main}}}}))]})),g(({theme:a})=>({[`&.${y.disabled}`]:{color:(a.vars||a).palette.action.disabled,boxShadow:(a.vars||a).shadows[0],backgroundColor:(a.vars||a).palette.action.disabledBackground}}))),aa=W.forwardRef(function(r,o){const t=H({props:r,name:"MuiFab"}),{children:e,className:c,color:p="default",component:b="button",disabled:x=!1,disableFocusRipple:h=!1,focusVisibleClassName:N,size:B="large",variant:_="circular",...G}=t,w={...t,color:p,component:b,disabled:x,disableFocusRipple:h,size:B,variant:_},u=X(w);return n.jsx(Z,{className:v(u.root,c),component:b,disabled:x,focusRipple:!h,focusVisibleClassName:v(u.focusVisible,N),ownerState:w,ref:o,...G,classes:u,children:e})}),ra=J`
  0%, 100% { box-shadow: 0 0 18px 6px #8b5cf650, 0 0 32px 10px #38bdf830; }
  50% { box-shadow: 0 0 38px 13px #f472b680, 0 0 64px 19px #9333ea70; }
`,oa=E(aa,{shouldForwardProp:a=>a!=="colorVariant"})(({theme:a,colorVariant:r="primary",glowIntensity:o=1})=>{const t={primary:{main:"#6366f1",glow:"#8b5cf6",gradTo:"#38bdf8"},secondary:{main:"#f472b6",glow:"#9333ea",gradTo:"#8b5cf6"},accent:{main:"#05ffa1",glow:"#76eaff",gradTo:"#38bdf8"}},e=t[r]??t.primary;return{background:`linear-gradient(135deg, ${e.main} 10%, ${e.gradTo} 90%)`,color:"#fff",fontWeight:700,fontSize:"1.25rem",letterSpacing:"0.04em",boxShadow:`0 0 ${28*o}px ${e.glow}60, 0 0 ${56*o}px ${e.main}20`,border:`2.2px solid ${e.glow}80`,filter:"contrast(1.15) drop-shadow(0 0 9px #fff6)",transition:"all 0.22s cubic-bezier(.45,.8,.55,1.05)",animation:`${ra} 2.5s ease-in-out infinite alternate`,"&:hover, &:focus":{background:`linear-gradient(125deg, ${e.gradTo} 18%, ${e.main} 100%)`,boxShadow:`0 0 ${40*o}px ${e.glow}90, 0 0 ${72*o}px ${e.main}40`,transform:"scale(1.07) translateY(-2px) rotate(-3deg)",borderColor:`${e.gradTo}cc`},"&:active":{background:`linear-gradient(135deg, ${e.main} 28%, ${e.gradTo} 72%)`,transform:"scale(0.95)",boxShadow:`0 0 18px ${e.glow}50`},"&.Mui-disabled":{background:"#2d3748",color:"#fff8",borderColor:"#4b5563b5",boxShadow:"none",opacity:.6}}}),f=({colorVariant:a="primary",glowIntensity:r=1,label:o,children:t,...e})=>n.jsxs(oa,{colorVariant:a,glowIntensity:r,...e,children:[t,o&&n.jsx("span",{style:{marginLeft:"8px",fontWeight:500,fontSize:"1rem",letterSpacing:"0.05em"},children:o})]});try{f.displayName="GlowFab",f.__docgenInfo={description:"",displayName:"GlowFab",props:{colorVariant:{defaultValue:{value:"primary"},description:"",name:"colorVariant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"secondary"'},{value:'"accent"'}]}},glowIntensity:{defaultValue:{value:"1"},description:"",name:"glowIntensity",required:!1,type:{name:"number | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements> | undefined"}}}}}catch{}const T=P(n.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"})),ea=P(n.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"})),xa={title:"Ultra Fancy/GlowFab",component:f,argTypes:{color:{control:"color"},size:{control:"radio",options:["small","medium","large"]},glow:{control:"boolean"},animated:{control:"boolean"},variant:{control:"radio",options:["circular","extended"]}}},s={args:{children:n.jsx(T,{}),color:"#05ffa1",size:"large",glow:!0,animated:!0,variant:"circular"},parameters:{docs:{description:{story:"Neon aqua floating action button with intense glow."}},backgrounds:{default:"dark"}}},i={args:{children:n.jsxs(n.Fragment,{children:[n.jsx(ea,{})," Edit Mode"]}),color:"#f472b6",size:"medium",glow:!0,animated:!0,variant:"extended"},parameters:{docs:{description:{story:"Pink, glowing, extended FAB with edit icon."}},backgrounds:{default:"dark"}}},d={args:{children:n.jsx(K,{fontSize:"large"}),color:"#9333ea",size:"large",glow:!0,animated:!0,variant:"circular"},parameters:{docs:{description:{story:"Purple rocket FAB — for launching something epic!"}},backgrounds:{default:"dark"}}},l={args:{children:n.jsx(T,{}),color:"#7c7c7c",size:"small",glow:!1,animated:!1,variant:"circular"},parameters:{docs:{description:{story:"Minimal, non-glowing grey FAB."}},backgrounds:{default:"light"}}};var k,z,F;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: <AddIcon />,
    color: '#05ffa1',
    size: 'large',
    glow: true,
    animated: true,
    variant: 'circular'
  },
  parameters: {
    docs: {
      description: {
        story: 'Neon aqua floating action button with intense glow.'
      }
    },
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(F=(z=s.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var S,$,C;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: <><EditIcon /> Edit Mode</>,
    color: '#f472b6',
    size: 'medium',
    glow: true,
    animated: true,
    variant: 'extended'
  },
  parameters: {
    docs: {
      description: {
        story: 'Pink, glowing, extended FAB with edit icon.'
      }
    },
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(C=($=i.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};var R,M,V;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: <RocketLaunchIcon fontSize="large" />,
    color: '#9333ea',
    size: 'large',
    glow: true,
    animated: true,
    variant: 'circular'
  },
  parameters: {
    docs: {
      description: {
        story: 'Purple rocket FAB — for launching something epic!'
      }
    },
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(V=(M=d.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var I,j,A;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: <AddIcon />,
    color: '#7c7c7c',
    size: 'small',
    glow: false,
    animated: false,
    variant: 'circular'
  },
  parameters: {
    docs: {
      description: {
        story: 'Minimal, non-glowing grey FAB.'
      }
    },
    backgrounds: {
      default: 'light'
    }
  }
}`,...(A=(j=l.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};const ha=["NeonAdd","PinkExtendedEdit","RocketPurple","MinimalGrey"];export{l as MinimalGrey,s as NeonAdd,i as PinkExtendedEdit,d as RocketPurple,ha as __namedExportsOrder,xa as default};
