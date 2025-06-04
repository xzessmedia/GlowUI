import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{s as z}from"./styled-DketRv4I.js";import{F}from"./Fab-BgQP_o2X.js";import{k as S}from"./emotion-react.browser.esm-CzyYH6Xe.js";import{A as $}from"./Add-DSA7GguY.js";import{c as A}from"./createSvgIcon-DyKWnwtn.js";import{R as E}from"./RocketLaunch-kIPW6Dwa.js";import"./index-D4lIrffr.js";import"./generateUtilityClasses-CPRdC64H.js";import"./DefaultPropsProvider-Bcp8l54b.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-IUfDptLI.js";import"./useTimeout-COwD6Zpp.js";import"./useForkRef-zqhjcRVs.js";import"./isFocusVisible-B8k4qzLc.js";const j=A(r.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"})),_=S`
  0%, 100% { box-shadow: 0 0 18px 6px #8b5cf650, 0 0 32px 10px #38bdf830; }
  50% { box-shadow: 0 0 38px 13px #f472b680, 0 0 64px 19px #9333ea70; }
`,I=z(F,{shouldForwardProp:o=>o!=="colorVariant"})(({theme:o,colorVariant:s="primary",glowIntensity:a=1})=>{const n={primary:{main:"#6366f1",glow:"#8b5cf6",gradTo:"#38bdf8"},secondary:{main:"#f472b6",glow:"#9333ea",gradTo:"#8b5cf6"},accent:{main:"#05ffa1",glow:"#76eaff",gradTo:"#38bdf8"}},e=n[s]??n.primary;return{background:`linear-gradient(135deg, ${e.main} 10%, ${e.gradTo} 90%)`,color:"#fff",fontWeight:700,fontSize:"1.25rem",letterSpacing:"0.04em",boxShadow:`0 0 ${28*a}px ${e.glow}60, 0 0 ${56*a}px ${e.main}20`,border:`2.2px solid ${e.glow}80`,filter:"contrast(1.15) drop-shadow(0 0 9px #fff6)",transition:"all 0.22s cubic-bezier(.45,.8,.55,1.05)",animation:`${_} 2.5s ease-in-out infinite alternate`,"&:hover, &:focus":{background:`linear-gradient(125deg, ${e.gradTo} 18%, ${e.main} 100%)`,boxShadow:`0 0 ${40*a}px ${e.glow}90, 0 0 ${72*a}px ${e.main}40`,transform:"scale(1.07) translateY(-2px) rotate(-3deg)",borderColor:`${e.gradTo}cc`},"&:active":{background:`linear-gradient(135deg, ${e.main} 28%, ${e.gradTo} 72%)`,transform:"scale(0.95)",boxShadow:`0 0 18px ${e.glow}50`},"&.Mui-disabled":{background:"#2d3748",color:"#fff8",borderColor:"#4b5563b5",boxShadow:"none",opacity:.6}}}),l=({colorVariant:o="primary",glowIntensity:s=1,label:a,children:n,...e})=>r.jsxs(I,{colorVariant:o,glowIntensity:s,...e,children:[n,a&&r.jsx("span",{style:{marginLeft:"8px",fontWeight:500,fontSize:"1rem",letterSpacing:"0.05em"},children:a})]});try{l.displayName="GlowFab",l.__docgenInfo={description:"",displayName:"GlowFab",props:{colorVariant:{defaultValue:{value:"primary"},description:"",name:"colorVariant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"secondary"'},{value:'"accent"'}]}},glowIntensity:{defaultValue:{value:"1"},description:"",name:"glowIntensity",required:!1,type:{name:"number | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements> | undefined"}}}}}catch{}const D={title:"Ultra Fancy/GlowFab",component:l,argTypes:{color:{control:"color"},size:{control:"radio",options:["small","medium","large"]},glow:{control:"boolean"},animated:{control:"boolean"},variant:{control:"radio",options:["circular","extended"]}}},t={args:{children:r.jsx($,{}),color:"#05ffa1",size:"large",glow:!0,animated:!0,variant:"circular"},parameters:{docs:{description:{story:"Neon aqua floating action button with intense glow."}},backgrounds:{default:"dark"}}},i={args:{children:r.jsxs(r.Fragment,{children:[r.jsx(j,{})," Edit Mode"]}),color:"#f472b6",size:"medium",glow:!0,animated:!0,variant:"extended"},parameters:{docs:{description:{story:"Pink, glowing, extended FAB with edit icon."}},backgrounds:{default:"dark"}}},c={args:{children:r.jsx(E,{fontSize:"large"}),color:"#9333ea",size:"large",glow:!0,animated:!0,variant:"circular"},parameters:{docs:{description:{story:"Purple rocket FAB — for launching something epic!"}},backgrounds:{default:"dark"}}},d={args:{children:r.jsx($,{}),color:"#7c7c7c",size:"small",glow:!1,animated:!1,variant:"circular"},parameters:{docs:{description:{story:"Minimal, non-glowing grey FAB."}},backgrounds:{default:"light"}}};var m,p,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,f,b;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,w,h;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(h=(w=c.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var y,k,v;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(v=(k=d.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const H=["NeonAdd","PinkExtendedEdit","RocketPurple","MinimalGrey"];export{d as MinimalGrey,t as NeonAdd,i as PinkExtendedEdit,c as RocketPurple,H as __namedExportsOrder,D as default};
