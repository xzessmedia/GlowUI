import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{G as u}from"./GlowTypography-Dv6LR60i.js";import{s as N}from"./styled-DketRv4I.js";import{B as U}from"./Box-84RDQgna.js";import{k as E}from"./emotion-react.browser.esm-CzyYH6Xe.js";import"./Typography-CPCMMGuq.js";import"./index-D4lIrffr.js";import"./generateUtilityClasses-CPRdC64H.js";import"./index-o8klx2Nf.js";import"./useTheme-BIUNiYwk.js";import"./extendSxProp-B_2SO387.js";import"./DefaultPropsProvider-Bcp8l54b.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const H=E`
  0%,100% {
    box-shadow: 0 0 26px 8px #8b5cf680, 0 0 54px 24px #38bdf850;
    border-color: #38bdf8;
  }
  50% {
    box-shadow: 0 0 44px 14px #05ffa1bb, 0 0 72px 28px #9333ea42;
    border-color: #05ffa1;
  }
`,I=N(U)(({glow:r=!0,color:a="#38bdf8"})=>({background:typeof a=="string"&&a.startsWith("linear-gradient")?a:`linear-gradient(110deg,${a}60 60%,${a} 100%)`,borderRadius:18,border:`3px solid ${typeof a=="string"&&!a.startsWith("linear-gradient")?a:"#38bdf8"}`,boxShadow:"0 0 18px 2px #8b5cf670, 0 0 26px 13px #38bdf822",...r?{animation:`${H} 4.2s alternate infinite`}:{},color:"#fff",textAlign:"center",padding:"20px 12px 16px 12px",minWidth:90,minHeight:94,position:"relative",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:"default",transition:"box-shadow 0.22s, border-color 0.16s, background 0.15s, transform 0.13s"})),t=({value:r,label:a,glow:_=!0,icon:b,color:e="#38bdf8",style:A,gradientLabel:B,gradientValue:$,labelTypographyProps:o,valueTypographyProps:i})=>n.jsxs(I,{glow:_,color:e,sx:A,children:[b&&n.jsx("span",{style:{fontSize:32,marginBottom:10,display:"block",filter:"drop-shadow(0 0 9px #8b5cf6aa)"},children:b}),n.jsx(u,{variant:"subtitle2",fontWeight:700,glow:!0,gradient:B||(typeof e=="string"&&e.startsWith("linear-gradient")?e:`linear-gradient(93deg,#8b5cf6,#38bdf8,${e})`),sx:{mb:.4,letterSpacing:.01,opacity:.95,textShadow:"0 0 8px #38bdf855, 0 2px 14px #8b5cf630",...o==null?void 0:o.sx},...o,children:a}),n.jsx(u,{variant:"h3",fontWeight:900,glow:!0,glowColor:typeof e=="string"&&e.startsWith("linear-gradient")?"#8b5cf6":e,gradient:$||(typeof e=="string"&&e.startsWith("linear-gradient")?e:`linear-gradient(90deg,#8b5cf6,${e})`),sx:{lineHeight:1.12,letterSpacing:"0.02em",textShadow:"0 0 26px #8b5cf6bb, 0 2px 9px #05ffa1bb",...i==null?void 0:i.sx},...i,children:r})]});try{t.displayName="GlowStats",t.__docgenInfo={description:"",displayName:"GlowStats",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | number"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},glow:{defaultValue:{value:"true"},description:"",name:"glow",required:!1,type:{name:"boolean | undefined"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},color:{defaultValue:{value:"#38bdf8"},description:"",name:"color",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},gradientLabel:{defaultValue:null,description:"",name:"gradientLabel",required:!1,type:{name:"string | undefined"}},gradientValue:{defaultValue:null,description:"",name:"gradientValue",required:!1,type:{name:"string | undefined"}},labelTypographyProps:{defaultValue:null,description:"",name:"labelTypographyProps",required:!1,type:{name:"Partial<GlowTypographyProps> | undefined"}},valueTypographyProps:{defaultValue:null,description:"",name:"valueTypographyProps",required:!1,type:{name:"Partial<GlowTypographyProps> | undefined"}}}}}catch{}const oe={title:"Ultra Fancy/GlowStats",component:t,argTypes:{value:{control:"number"},label:{control:"text"},glow:{control:"boolean"},icon:{control:"text"},color:{control:"color"},style:{control:"object"},gradientLabel:{control:"text"},gradientValue:{control:"text"},labelTypographyProps:{control:!1},valueTypographyProps:{control:!1}},decorators:[r=>n.jsx("div",{style:{minHeight:"100vh",background:"linear-gradient(120deg,#181f28 60%,#00ff99 240%)",padding:40,display:"flex",alignItems:"center",justifyContent:"center",gap:48,flexWrap:"wrap"},children:r()})]},l={args:{label:"Active Users",value:3127,color:"#38bdf8",glow:!0,icon:"👥",gradientLabel:"linear-gradient(90deg,#00ff99,#38bdf8,#8b5cf6)",gradientValue:"linear-gradient(90deg,#38bdf8,#8b5cf6 70%)",labelTypographyProps:{variant:"subtitle1",fontWeight:700,sx:{fontSize:19,letterSpacing:.02}},valueTypographyProps:{variant:"h2",fontWeight:900,sx:{fontSize:44}}}},s={args:{label:"Rainbow Total",value:"1,234,567",color:"linear-gradient(90deg, #ff5cf6, #00ff99 70%, #ffab00 110%)",glow:!0,icon:"🌈",gradientLabel:"linear-gradient(90deg,#ff5cf6,#00ff99)",gradientValue:"linear-gradient(90deg,#00ff99,#ffab00)",labelTypographyProps:{variant:"h5",fontWeight:800,sx:{fontSize:21}},valueTypographyProps:{variant:"h2",sx:{fontSize:46}}}},d={args:{label:"Lumens",value:42e3,color:"#8b5cf6",glow:!0,icon:"💡",gradientLabel:"linear-gradient(90deg,#8b5cf6,#38bdf8)",gradientValue:"linear-gradient(90deg,#00ff99,#8b5cf6)",labelTypographyProps:{variant:"subtitle2",fontWeight:700},valueTypographyProps:{variant:"h1",fontWeight:900}}},p={args:{label:"Engagement Rate",value:"89.9%",color:"linear-gradient(90deg,#f472b6,#38bdf8 40%,#8b5cf6)",glow:!0,icon:"📈",style:{border:"3px solid #f472b6",boxShadow:"0 0 39px #f472b6cc,0 0 12px #38bdf8b8",padding:"32px 20px 28px 20px"},gradientLabel:"linear-gradient(90deg,#f472b6,#8b5cf6)",gradientValue:"linear-gradient(90deg,#8b5cf6,#38bdf8)",labelTypographyProps:{fontWeight:700,sx:{fontSize:24}},valueTypographyProps:{fontWeight:900,sx:{fontSize:53}}}},f={args:{label:"Minimal",value:0,color:"#7c7c7c",glow:!1,icon:"📋",gradientLabel:void 0,gradientValue:void 0,labelTypographyProps:{variant:"caption",fontWeight:600,sx:{fontSize:13,opacity:.8}},valueTypographyProps:{variant:"h4",fontWeight:900,sx:{fontSize:30,color:"#bbb"}},style:{border:"1.5px solid #7c7c7c",background:"rgba(34,34,34,0.9)",boxShadow:"none"}}},g={args:{label:"Cursive Stat",value:123,color:"#38bdf8",glow:!0,icon:"✒️",gradientLabel:"linear-gradient(98deg,#e66465,#9198e5)",gradientValue:"linear-gradient(93deg,#f472b6,#8b5cf6,#38bdf8 80%)",labelTypographyProps:{variant:"h6",fontWeight:700,sx:{fontFamily:"Pacifico, cursive",fontSize:22,letterSpacing:.03}},valueTypographyProps:{variant:"h2",fontWeight:900,sx:{fontFamily:"Monoton, cursive",fontSize:42,letterSpacing:.09}}}},c={name:"Fancy Row",render:()=>n.jsxs("div",{style:{display:"flex",gap:32},children:[n.jsx(t,{label:"Fire Reactions",value:12345,color:"#ef4444",glow:!0,icon:"🔥",labelTypographyProps:{sx:{fontSize:17}},valueTypographyProps:{sx:{fontSize:34}},style:{border:"2px solid #ef4444"}}),n.jsx(t,{label:"Supporters",value:314,color:"#00ff99",glow:!0,icon:"🤗",labelTypographyProps:{sx:{fontSize:17}},valueTypographyProps:{sx:{fontSize:34}},style:{border:"2px solid #00ff99"}}),n.jsx(t,{label:"Cloud Uptime",value:99.99,color:"linear-gradient(90deg,#38bdf8,#a5b4fc)",glow:!0,icon:"☁️",labelTypographyProps:{sx:{fontSize:17}},valueTypographyProps:{sx:{fontSize:34}},style:{border:"2px solid #38bdf8"}})]}),parameters:{docs:{description:{story:"A row of different vibrant GlowStats blocks for dashboard/overview use."}}}};var y,x,m;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Active Users',
    value: 3127,
    color: '#38bdf8',
    glow: true,
    icon: '👥',
    gradientLabel: 'linear-gradient(90deg,#00ff99,#38bdf8,#8b5cf6)',
    gradientValue: 'linear-gradient(90deg,#38bdf8,#8b5cf6 70%)',
    labelTypographyProps: {
      variant: 'subtitle1',
      fontWeight: 700,
      sx: {
        fontSize: 19,
        letterSpacing: 0.02
      }
    },
    valueTypographyProps: {
      variant: 'h2',
      fontWeight: 900,
      sx: {
        fontSize: 44
      }
    }
  }
}`,...(m=(x=l.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};var h,v,S;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Rainbow Total',
    value: '1,234,567',
    color: 'linear-gradient(90deg, #ff5cf6, #00ff99 70%, #ffab00 110%)',
    glow: true,
    icon: '🌈',
    gradientLabel: 'linear-gradient(90deg,#ff5cf6,#00ff99)',
    gradientValue: 'linear-gradient(90deg,#00ff99,#ffab00)',
    labelTypographyProps: {
      variant: 'h5',
      fontWeight: 800,
      sx: {
        fontSize: 21
      }
    },
    valueTypographyProps: {
      variant: 'h2',
      sx: {
        fontSize: 46
      }
    }
  }
}`,...(S=(v=s.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var w,P,T;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Lumens',
    value: 42000,
    color: '#8b5cf6',
    glow: true,
    icon: '💡',
    gradientLabel: 'linear-gradient(90deg,#8b5cf6,#38bdf8)',
    gradientValue: 'linear-gradient(90deg,#00ff99,#8b5cf6)',
    labelTypographyProps: {
      variant: 'subtitle2',
      fontWeight: 700
    },
    valueTypographyProps: {
      variant: 'h1',
      fontWeight: 900
    }
  }
}`,...(T=(P=d.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var z,W,V;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Engagement Rate',
    value: '89.9%',
    color: 'linear-gradient(90deg,#f472b6,#38bdf8 40%,#8b5cf6)',
    glow: true,
    icon: '📈',
    style: {
      border: '3px solid #f472b6',
      boxShadow: '0 0 39px #f472b6cc,0 0 12px #38bdf8b8',
      padding: '32px 20px 28px 20px'
    },
    gradientLabel: 'linear-gradient(90deg,#f472b6,#8b5cf6)',
    gradientValue: 'linear-gradient(90deg,#8b5cf6,#38bdf8)',
    labelTypographyProps: {
      fontWeight: 700,
      sx: {
        fontSize: 24
      }
    },
    valueTypographyProps: {
      fontWeight: 900,
      sx: {
        fontSize: 53
      }
    }
  }
}`,...(V=(W=p.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var L,G,j;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Minimal',
    value: 0,
    color: '#7c7c7c',
    glow: false,
    icon: '📋',
    gradientLabel: undefined,
    gradientValue: undefined,
    labelTypographyProps: {
      variant: 'caption',
      fontWeight: 600,
      sx: {
        fontSize: 13,
        opacity: 0.8
      }
    },
    valueTypographyProps: {
      variant: 'h4',
      fontWeight: 900,
      sx: {
        fontSize: 30,
        color: '#bbb'
      }
    },
    style: {
      border: '1.5px solid #7c7c7c',
      background: 'rgba(34,34,34,0.9)',
      boxShadow: 'none'
    }
  }
}`,...(j=(G=f.parameters)==null?void 0:G.docs)==null?void 0:j.source}}};var R,F,k;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Cursive Stat',
    value: 123,
    color: '#38bdf8',
    glow: true,
    icon: '✒️',
    gradientLabel: 'linear-gradient(98deg,#e66465,#9198e5)',
    gradientValue: 'linear-gradient(93deg,#f472b6,#8b5cf6,#38bdf8 80%)',
    labelTypographyProps: {
      variant: 'h6',
      fontWeight: 700,
      sx: {
        fontFamily: 'Pacifico, cursive',
        fontSize: 22,
        letterSpacing: 0.03
      }
    },
    valueTypographyProps: {
      variant: 'h2',
      fontWeight: 900,
      sx: {
        fontFamily: 'Monoton, cursive',
        fontSize: 42,
        letterSpacing: 0.09
      }
    }
  }
}`,...(k=(F=g.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var q,C,M;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Fancy Row',
  render: () => <div style={{
    display: 'flex',
    gap: 32
  }}>
      <GlowStats label="Fire Reactions" value={12345} color="#ef4444" glow icon="🔥" labelTypographyProps={{
      sx: {
        fontSize: 17
      }
    }} valueTypographyProps={{
      sx: {
        fontSize: 34
      }
    }} style={{
      border: '2px solid #ef4444'
    }} />
      <GlowStats label="Supporters" value={314} color="#00ff99" glow icon="🤗" labelTypographyProps={{
      sx: {
        fontSize: 17
      }
    }} valueTypographyProps={{
      sx: {
        fontSize: 34
      }
    }} style={{
      border: '2px solid #00ff99'
    }} />
      <GlowStats label="Cloud Uptime" value={99.99} color="linear-gradient(90deg,#38bdf8,#a5b4fc)" glow icon="☁️" labelTypographyProps={{
      sx: {
        fontSize: 17
      }
    }} valueTypographyProps={{
      sx: {
        fontSize: 34
      }
    }} style={{
      border: '2px solid #38bdf8'
    }} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'A row of different vibrant GlowStats blocks for dashboard/overview use.'
      }
    }
  }
}`,...(M=(C=c.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};const ie=["Playground","GradientBanner","ModernNeon","LargeOutline","MinimalMonochrome","CustomTypography","FancyRow"];export{g as CustomTypography,c as FancyRow,s as GradientBanner,p as LargeOutline,f as MinimalMonochrome,d as ModernNeon,l as Playground,ie as __namedExportsOrder,oe as default};
