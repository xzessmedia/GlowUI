import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{s as F}from"./styled-DketRv4I.js";import{k as I}from"./emotion-react.browser.esm-CzyYH6Xe.js";import"./index-D4lIrffr.js";const N=I`
  0%,100% { background-position: 0% 55%; box-shadow: 0 0 40px 10px #8b5cf677, 0 0 100px 30px #6366f133; }
  50% { background-position: 100% 47%; box-shadow: 0 0 110px 45px #38bdf877, 0 0 190px 62px #9333ea44; }
`,b={primary:{gradient:"linear-gradient(90deg,#6366f1 10%, #38bdf8 60%, #8b5cf6 100%)",glow:"#8b5cf6"},secondary:{gradient:"linear-gradient(90deg,#f472b6 10%, #9333ea 60%, #8b5cf6 100%)",glow:"#f472b6"},accent:{gradient:"linear-gradient(90deg,#05ffa1 10%, #38bdf8 70%, #8b5cf6 95%)",glow:"#05ffa1"}},z=F("div")(({variant:n,width:i,height:o,borderRadius:d,colorVariant:u,animated:p})=>{const t=b[u]||b.primary,a={width:i,height:o,borderRadius:n==="circle"?"50%":d,background:t.gradient,position:"relative",opacity:.93,boxShadow:`0 0 44px 6px ${t.glow}33, 0 0 66px 14px ${t.glow}22`,overflow:"hidden",filter:"blur(0px) contrast(1.1)",transition:"box-shadow 0.29s, background 0.22s",animation:p?`${N} 2.15s infinite alternate cubic-bezier(.74,.2,.6,1.13)`:void 0,margin:n==="text"?"8px 0":void 0};return n==="text"&&(a.height=o??19,a.borderRadius=d??8,a.maxWidth=i??"100%"),a}),r=({variant:n="rect",width:i=n==="circle"?64:n==="text"?"100%":120,height:o=n==="circle"?64:n==="text"?18:20,borderRadius:d=n==="circle"?"50%":16,colorVariant:u="primary",animated:p=!0,style:t,className:a})=>e.jsx(z,{variant:n,width:i,height:o,borderRadius:d,colorVariant:u,animated:p,style:t,className:a});try{r.displayName="GlowSkeleton",r.__docgenInfo={description:"",displayName:"GlowSkeleton",props:{variant:{defaultValue:{value:"rect"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"circle"'},{value:'"rect"'},{value:'"text"'}]}},width:{defaultValue:{value:"variant === 'circle' ? 64 : variant === 'text' ? '100%' : 120"},description:"",name:"width",required:!1,type:{name:"string | number | undefined"}},height:{defaultValue:{value:"variant === 'circle' ? 64 : variant === 'text' ? 18 : 20"},description:"",name:"height",required:!1,type:{name:"string | number | undefined"}},borderRadius:{defaultValue:{value:"variant === 'circle' ? '50%' : 16"},description:"",name:"borderRadius",required:!1,type:{name:"string | number | undefined"}},colorVariant:{defaultValue:{value:"primary"},description:"",name:"colorVariant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"secondary"'},{value:'"accent"'}]}},animated:{defaultValue:{value:"true"},description:"",name:"animated",required:!1,type:{name:"boolean | undefined"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}}}catch{}const E={title:"Ultra Fancy/GlowSkeleton",component:r,argTypes:{width:{control:"number",min:16,max:640},height:{control:"number",min:8,max:240},circle:{control:"boolean"},glow:{control:"boolean"},style:{control:"object"}},decorators:[n=>e.jsx("div",{style:{minHeight:"100vh",background:"linear-gradient(120deg,#232137 58%,#00ff99 250%)",padding:40,display:"flex",flexDirection:"column",alignItems:"center",gap:35},children:n()})]},l={args:{width:220,height:34,circle:!1,glow:!0}},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:24},children:[e.jsx(r,{width:40,height:40,circle:!0,glow:!0,style:{background:"linear-gradient(135deg, #8b5cf6 50%, #00ff99 120%)"}}),e.jsx(r,{width:120,height:24,glow:!0,style:{background:"linear-gradient(90deg,#00ff99,#8b5cf6)"}}),e.jsx(r,{width:85,height:24,glow:!1,style:{background:"linear-gradient(90deg,#fbbf24,#38bdf8)"}}),e.jsx(r,{width:180,height:34,glow:!0,style:{borderRadius:18,background:"linear-gradient(90deg,#ef4444,#fbbf24 90%)"}})]})},c={render:()=>e.jsxs("div",{children:[e.jsx(r,{width:330,height:44,glow:!0,style:{animation:"pulseglow 1.3s infinite alternate",background:"linear-gradient(270deg,#8b5cf6 50%,#00ff99 120%)",borderRadius:16,boxShadow:"0 6px 22px #05ffa133,0 1px 9px #8b5cf666"}}),e.jsx("style",{children:`
        @keyframes pulseglow {
          from { filter: drop-shadow(0 0 18px #00ff9977); opacity: 0.85; }
          to   { filter: drop-shadow(0 0 36px #8b5cf6ee); opacity: 1; }
        }
        `})]})},f={render:()=>e.jsx(r,{width:360,height:18,glow:!0,style:{borderRadius:12,background:"linear-gradient(90deg,#ff5cf6 0%,#00ff99 55%,#ffab00 95%,#38d1c4 110%)",boxShadow:"0 2px 18px #00ff9933,0 2px 32px #8b5cf633",animation:"slidebg 2s linear infinite",backgroundSize:"200% 100%"},children:e.jsx("style",{children:`
        @keyframes slidebg {
          0%   { background-position: 0 0; }
          100% { background-position: 100% 0; }
        }
        `})})},g={args:{width:48,height:48,circle:!0,glow:!0,style:{background:"linear-gradient(120deg, #38bdf8 50%, #f472b6 120%)",boxShadow:"0 0 22px #38d1c499, 0 0 38px #8b5cf644",animation:"brighten 1.5s infinite alternate"}},render:({...n})=>e.jsxs(e.Fragment,{children:[e.jsx(r,{...n}),e.jsx("style",{children:`
        @keyframes brighten {
          from { filter: brightness(1.08); }
          to   { filter: brightness(1.32); }
        }
        `})]})};var m,h,x;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    width: 220,
    height: 34,
    circle: false,
    glow: true
  }
}`,...(x=(h=l.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var w,y,k;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 24
  }}>
      <GlowSkeleton width={40} height={40} circle glow style={{
      background: 'linear-gradient(135deg, #8b5cf6 50%, #00ff99 120%)'
    }} />
      <GlowSkeleton width={120} height={24} glow style={{
      background: 'linear-gradient(90deg,#00ff99,#8b5cf6)'
    }} />
      <GlowSkeleton width={85} height={24} glow={false} style={{
      background: 'linear-gradient(90deg,#fbbf24,#38bdf8)'
    }} />
      <GlowSkeleton width={180} height={34} glow style={{
      borderRadius: 18,
      background: 'linear-gradient(90deg,#ef4444,#fbbf24 90%)'
    }} />
    </div>
}`,...(k=(y=s.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var S,v,j;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div>
      <GlowSkeleton width={330} height={44} glow style={{
      animation: 'pulseglow 1.3s infinite alternate',
      background: 'linear-gradient(270deg,#8b5cf6 50%,#00ff99 120%)',
      borderRadius: 16,
      boxShadow: '0 6px 22px #05ffa133,0 1px 9px #8b5cf666'
    }} />
      <style>
        {\`
        @keyframes pulseglow {
          from { filter: drop-shadow(0 0 18px #00ff9977); opacity: 0.85; }
          to   { filter: drop-shadow(0 0 36px #8b5cf6ee); opacity: 1; }
        }
        \`}
      </style>
    </div>
}`,...(j=(v=c.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var R,G,V;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <GlowSkeleton width={360} height={18} glow style={{
    borderRadius: 12,
    background: 'linear-gradient(90deg,#ff5cf6 0%,#00ff99 55%,#ffab00 95%,#38d1c4 110%)',
    boxShadow: '0 2px 18px #00ff9933,0 2px 32px #8b5cf633',
    animation: 'slidebg 2s linear infinite',
    backgroundSize: '200% 100%'
  }}>
      <style>
        {\`
        @keyframes slidebg {
          0%   { background-position: 0 0; }
          100% { background-position: 100% 0; }
        }
        \`}
      </style>
    </GlowSkeleton>
}`,...(V=(G=f.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var _,q,P;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    width: 48,
    height: 48,
    circle: true,
    glow: true,
    style: {
      background: 'linear-gradient(120deg, #38bdf8 50%, #f472b6 120%)',
      boxShadow: '0 0 22px #38d1c499, 0 0 38px #8b5cf644',
      animation: 'brighten 1.5s infinite alternate'
    }
  },
  render: ({
    ...args
  }) => <>
      <GlowSkeleton {...args} />
      <style>
        {\`
        @keyframes brighten {
          from { filter: brightness(1.08); }
          to   { filter: brightness(1.32); }
        }
        \`}
      </style>
    </>
}`,...(P=(q=g.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};const L=["Playground","FancyRow","AnimatedPulse","RainbowLoaderBar","CircleIconPulse"];export{c as AnimatedPulse,g as CircleIconPulse,s as FancyRow,l as Playground,f as RainbowLoaderBar,L as __namedExportsOrder,E as default};
