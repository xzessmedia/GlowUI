import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{B as b}from"./Box-DtklFzPK.js";import{s as f}from"./styled-E20cg9_9.js";import{k as $}from"./emotion-react.browser.esm-BCZ8YnH8.js";import"./generateUtilityClasses-CPRdC64H.js";import"./index-D4lIrffr.js";import"./useTheme-DpPGzAox.js";import"./extendSxProp-CmprK5U1.js";const z=$`
  0%,100% {
    box-shadow: 0 0 26px 8px #8b5cf680, 0 0 54px 24px #38bdf850;
    border-color: #38bdf8;
  }
  50% {
    box-shadow: 0 0 44px 14px #05ffa1bb, 0 0 72px 28px #9333ea42;
    border-color: #05ffa1;
  }
`,B=f(b)(({gradient:t="linear-gradient(110deg,#6366f1 60%,#38bdf8 100%)",glowColor:n="#8b5cf6",borderColor:r="#38bdf8",borderRadius:u=18,borderWidth:m=3,animated:l=!0,clickable:o=!1})=>({background:t,borderRadius:u,border:`${m}px solid ${r}`,boxShadow:`0 0 18px 2px ${n}70, 0 0 26px 13px ${r}22`,...l?{animation:`${z} 4.2s alternate infinite`}:{},color:"#fff",flex:1,textAlign:"center",padding:"20px 12px 16px 12px",margin:"0 8px",minWidth:90,minHeight:94,position:"relative",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:o?"pointer":"default",transition:"box-shadow 0.22s, border-color 0.16s, background 0.15s, transform 0.13s","&:hover":o?{boxShadow:`0 0 43px 12px ${n}b8, 0 0 60px 25px ${r}72`,background:"linear-gradient(120deg,#05ffa1bb 30%,#38bdf8bb 150%)",borderColor:"#05ffa1",transform:"scale(1.05)"}:void 0,"&:active":o?{transform:"scale(0.97)"}:void 0})),N=f("div")({fontSize:15.7,fontWeight:600,opacity:.95,marginBottom:1,textShadow:"0 0 8px #38bdf855, 0 2px 14px #8b5cf630"}),I=f("div")({fontSize:33,fontWeight:900,lineHeight:1.12,letterSpacing:"0.02em",textShadow:"0 0 26px #8b5cf6bb, 0 2px 9px #05ffa1bb"}),T=f("div")({fontSize:13.2,fontWeight:400,opacity:.77,marginTop:3}),g=({stats:t,gap:n=24,borderRadius:r=20,animated:u=!0,style:m,header:l,footer:o})=>a.jsxs(b,{sx:{display:"flex",flexDirection:"column",alignItems:"stretch",gap:.6,width:"100%",...m},children:[l&&a.jsx("div",{style:{textAlign:"center",fontWeight:800,fontSize:22,marginBottom:17,letterSpacing:"0.03em",color:"#fff",textShadow:"0 0 15px #38bdf8bb, 0 0 22px #05ffa1a9"},children:l}),a.jsx(b,{sx:{display:"flex",gap:n,justifyContent:"center",alignItems:"stretch",width:"100%"},children:t.map((e,C)=>a.jsxs(B,{gradient:e.gradient,glowColor:e.glowColor,borderColor:e.borderColor,borderRadius:e.borderRadius??r,borderWidth:e.borderWidth??3,animated:e.animated??u,clickable:e.clickable,onClick:e.onClick,style:e.style,children:[e.icon&&a.jsx("span",{style:{fontSize:32,marginBottom:10,display:"block",filter:"drop-shadow(0 0 9px #8b5cf6aa)"},children:e.icon}),a.jsx(N,{children:e.label}),a.jsx(I,{children:e.value}),e.sublabel&&a.jsx(T,{children:e.sublabel})]},C))}),o&&a.jsx("div",{style:{textAlign:"center",fontWeight:500,fontSize:16,opacity:.88,marginTop:15,color:"#05ffa1",textShadow:"0 0 6px #9333ea60"},children:o})]});try{g.displayName="GlowStats",g.__docgenInfo={description:"",displayName:"GlowStats",props:{stats:{defaultValue:null,description:"",name:"stats",required:!0,type:{name:"GlowStatItem[]"}},gap:{defaultValue:{value:"24"},description:"",name:"gap",required:!1,type:{name:"string | number | undefined"}},borderRadius:{defaultValue:{value:"20"},description:"",name:"borderRadius",required:!1,type:{name:"string | number | undefined"}},animated:{defaultValue:{value:"true"},description:"",name:"animated",required:!1,type:{name:"boolean | undefined"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"ReactNode"}}}}}catch{}const O={title:"Ultra Fancy/GlowStats",component:g,argTypes:{value:{control:"number"},label:{control:"text"},glow:{control:"boolean"},icon:{control:"text"},color:{control:"color"}}},i={args:{label:"Active Users",value:3127,color:"#38bdf8",glow:!0,icon:"👥"}},s={args:{label:"All-Time Visits",value:888888,color:"linear-gradient(90deg, #f472b6, #38bdf8 40%, #8b5cf6)",glow:!0,icon:"🌈"},parameters:{docs:{description:{story:"Stats block with a full rainbow linear-gradient background and strong glow!"}}}},c={args:{label:"Hearts Sent",value:500234,color:"#f472b6",glow:!0,icon:"💖"}},d={args:{label:"Gold Stars",value:1789,color:"#facc15",glow:!0,icon:"⭐"}},p={args:{label:"Minimal",value:0,color:"#7c7c7c",glow:!1,icon:"📋"}};var x,S,h;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Active Users',
    value: 3127,
    color: '#38bdf8',
    glow: true,
    icon: '👥'
  }
}`,...(h=(S=i.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var w,y,v;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'All-Time Visits',
    value: 888_888,
    color: 'linear-gradient(90deg, #f472b6, #38bdf8 40%, #8b5cf6)',
    glow: true,
    icon: '🌈'
  },
  parameters: {
    docs: {
      description: {
        story: 'Stats block with a full rainbow linear-gradient background and strong glow!'
      }
    }
  }
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var k,j,_;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Hearts Sent',
    value: 500_234,
    color: '#f472b6',
    glow: true,
    icon: '💖'
  }
}`,...(_=(j=c.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var A,V,G;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Gold Stars',
    value: 1789,
    color: '#facc15',
    glow: true,
    icon: '⭐'
  }
}`,...(G=(V=d.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var R,W,q;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Minimal',
    value: 0,
    color: '#7c7c7c',
    glow: false,
    icon: '📋'
  }
}`,...(q=(W=p.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};const J=["ActiveUsers","RainbowStats","Pinky","NeonGold","MinimalStat"];export{i as ActiveUsers,p as MinimalStat,d as NeonGold,c as Pinky,s as RainbowStats,J as __namedExportsOrder,O as default};
