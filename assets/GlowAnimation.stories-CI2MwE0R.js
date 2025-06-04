import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as k}from"./index-D4lIrffr.js";import{F as C}from"./Fade-Bcnby8sK.js";import{s as $}from"./styled-DketRv4I.js";import{c as T,k as d}from"./emotion-react.browser.esm-CzyYH6Xe.js";import{B as t}from"./Box-84RDQgna.js";import{B as W}from"./Button-DmibqXmy.js";import"./useTheme-DW2JKlpt.js";import"./useTheme-BIUNiYwk.js";import"./utils-CqeGdR9Y.js";import"./useTimeout-COwD6Zpp.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";import"./useForkRef-zqhjcRVs.js";import"./getReactElementRef-rGhWSfJO.js";import"./generateUtilityClasses-CPRdC64H.js";import"./extendSxProp-B_2SO387.js";import"./DefaultPropsProvider-Bcp8l54b.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-DF_PSzS1.js";import"./ButtonBase-IUfDptLI.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DcGBhv6q.js";const g={neonFade:d`
    0% { opacity: 0; filter: blur(10px) brightness(0.7); transform: scale(0.93);}
    40% { opacity: 1; filter: blur(5px) brightness(1.5); }
    70% { filter: blur(2px) brightness(1.15);}
    100% { opacity: 1; filter: blur(0px) brightness(1);}
  `,popScale:d`
    0% { opacity: 0; transform: scale(0.7) rotate(-10deg);}
    55% { opacity: 1; transform: scale(1.08) rotate(2deg);}
    85% { transform: scale(0.97) rotate(-2deg);}
    100% { opacity: 1; transform: scale(1) rotate(0);}
  `,slideUp:d`
    0% { opacity: 0; transform: translateY(80px) scale(0.92);}
    55% { opacity: 1; transform: translateY(-10px) scale(1.04);}
    100% { opacity: 1; transform: translateY(0) scale(1);}
  `,glassPulse:d`
    0%,100% { box-shadow: 0 0 32px 12px #8b5cf640, 0 0 88px 30px #05ffa155;}
    50% { box-shadow: 0 0 80px 18px #f472b6a9, 0 0 200px 42px #38bdf86e; }
  `,flipY:d`
    0% { opacity: 0.2; transform: perspective(500px) rotateY(90deg) scale(.85); }
    80% { opacity: 1; transform: perspective(500px) rotateY(-4deg) scale(1.06);}
    100% { opacity: 1; transform: perspective(500px) rotateY(0deg) scale(1);}
  `},N=({effect:e,duration:a,delay:o,color:n,vibrant:i,glassy:l})=>{let x=i?`
    filter: drop-shadow(0 0 6px #05ffa1aa) drop-shadow(0 0 16px #8b5cf676);
    box-shadow: 0 0 36px 10px ${n??"#05ffa1"}33, 0 0 98px 24px #38bdf860;
    ${l?"backdrop-filter: blur(15px) saturate(1.25); background: linear-gradient(120deg, #292656aa 50%, #05ffa172 120%);":""}
    `:"";return T`
    animation: ${typeof g[e]=="function"?g[e]:g.neonFade} ${a}ms cubic-bezier(.74,.19,.13,.98) ${o}ms both;
    ${x}
    will-change: opacity, transform, filter, box-shadow;
  `},U=$("div",{shouldForwardProp:e=>!["effect","duration","delay","color","vibrant","glassy"].includes(e)})(({effect:e,duration:a,delay:o,color:n,vibrant:i,glassy:l})=>({display:"inline-block",...N({effect:e,duration:a,delay:o,color:n,vibrant:i,glassy:l})})),s=({in:e=!0,effect:a="neonFade",duration:o=1100,delay:n=0,vibrant:i=!0,glassy:l=!1,color:x,children:F,mountOnEnter:D=!1,unmountOnExit:R=!1,style:Y,className:_})=>r.jsx(C,{in:e,timeout:o/2,mountOnEnter:D,unmountOnExit:R,appear:!0,children:r.jsx(U,{effect:a,duration:o,delay:n,vibrant:i,glassy:l,color:x,className:_,style:Y,children:F})});try{s.displayName="GlowAnimation",s.__docgenInfo={description:"",displayName:"GlowAnimation",props:{in:{defaultValue:null,description:"",name:"in",required:!1,type:{name:"boolean | undefined"}},effect:{defaultValue:{value:"neonFade"},description:"",name:"effect",required:!1,type:{name:"string | undefined"}},duration:{defaultValue:{value:"1100"},description:"",name:"duration",required:!1,type:{name:"number | undefined"}},delay:{defaultValue:{value:"0"},description:"",name:"delay",required:!1,type:{name:"number | undefined"}},vibrant:{defaultValue:{value:"true"},description:"",name:"vibrant",required:!1,type:{name:"boolean | undefined"}},glassy:{defaultValue:{value:"false"},description:"",name:"glassy",required:!1,type:{name:"boolean | undefined"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string | undefined"}},mountOnEnter:{defaultValue:{value:"false"},description:"",name:"mountOnEnter",required:!1,type:{name:"boolean | undefined"}},unmountOnExit:{defaultValue:{value:"false"},description:"",name:"unmountOnExit",required:!1,type:{name:"boolean | undefined"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}}}catch{}const ue={title:"Components/GlowAnimation",component:s,argTypes:{effect:{options:["neonFade","popScale","slideUp","glassPulse","flipY"],control:"select"},duration:{control:{type:"number",min:100,max:3e3,step:100}},delay:{control:{type:"number",min:0,max:3e3,step:100}},vibrant:{control:"boolean"},glassy:{control:"boolean"},color:{control:"color"}},args:{effect:"neonFade",duration:1100,delay:0,vibrant:!0,glassy:!1,color:"#05ffa1",children:r.jsx(t,{sx:{p:3,fontWeight:700,fontSize:22,borderRadius:3,bgcolor:"#151322",color:"#fff"},children:"Glowing Content"})}},p={render:e=>r.jsx(s,{...e})},c={render:e=>r.jsx(t,{sx:{display:"flex",gap:3},children:["neonFade","popScale","slideUp","glassPulse","flipY"].map(a=>r.jsx(s,{...e,effect:a,children:r.jsx(t,{sx:{p:2,minWidth:90,textAlign:"center",bgcolor:"#201e41",borderRadius:2,color:"#fff"},children:a})},a))})},f={args:{vibrant:!0,glassy:!0,effect:"glassPulse",children:r.jsx(t,{sx:{p:2,borderRadius:2,bgcolor:"#120f25",color:"#fff"},children:"Vibrant + Glassy Pulse"})}},u={render:e=>{const[a,o]=k.useState(!0);return r.jsxs(t,{children:[r.jsx(W,{variant:"contained",sx:{mb:2},onClick:()=>o(n=>!n),children:a?"Hide":"Show"}),r.jsx(s,{...e,in:a,mountOnEnter:!0,unmountOnExit:!0,children:r.jsx(t,{sx:{p:2,bgcolor:"#252349",borderRadius:2,color:"#fff"},children:"Toggle Me!"})})]})}},m={args:{effect:"popScale",duration:2e3,delay:800,children:r.jsx(t,{sx:{p:3,bgcolor:"#170f20",borderRadius:2,color:"#fff"},children:"Delayed and Slow Pop"})}};var b,y,h;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <GlowAnimation {...args} />
}`,...(h=(y=p.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var w,v,S;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <Box sx={{
    display: 'flex',
    gap: 3
  }}>
      {['neonFade', 'popScale', 'slideUp', 'glassPulse', 'flipY'].map(effect => <GlowAnimation key={effect} {...args} effect={effect as any}>
          <Box sx={{
        p: 2,
        minWidth: 90,
        textAlign: 'center',
        bgcolor: '#201e41',
        borderRadius: 2,
        color: '#fff'
      }}>{effect}</Box>
        </GlowAnimation>)}
    </Box>
}`,...(S=(v=c.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var B,V,A;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    vibrant: true,
    glassy: true,
    effect: 'glassPulse',
    children: <Box sx={{
      p: 2,
      borderRadius: 2,
      bgcolor: '#120f25',
      color: '#fff'
    }}>Vibrant + Glassy Pulse</Box>
  }
}`,...(A=(V=f.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var j,G,E;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(true);
    return <Box>
        <Button variant="contained" sx={{
        mb: 2
      }} onClick={() => setOpen(v => !v)}>
          {open ? 'Hide' : 'Show'}
        </Button>
        <GlowAnimation {...args} in={open} mountOnEnter unmountOnExit>
          <Box sx={{
          p: 2,
          bgcolor: '#252349',
          borderRadius: 2,
          color: '#fff'
        }}>Toggle Me!</Box>
        </GlowAnimation>
      </Box>;
  }
}`,...(E=(G=u.parameters)==null?void 0:G.docs)==null?void 0:E.source}}};var O,P,q;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    effect: 'popScale',
    duration: 2000,
    delay: 800,
    children: <Box sx={{
      p: 3,
      bgcolor: '#170f20',
      borderRadius: 2,
      color: '#fff'
    }}>Delayed and Slow Pop</Box>
  }
}`,...(q=(P=m.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};const me=["Default","WithDifferentEffects","VibrantAndGlassy","ToggleVisibility","CustomDelayAndDuration"];export{m as CustomDelayAndDuration,p as Default,u as ToggleVisibility,f as VibrantAndGlassy,c as WithDifferentEffects,me as __namedExportsOrder,ue as default};
