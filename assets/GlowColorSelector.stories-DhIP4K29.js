import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{R as H}from"./index-D4lIrffr.js";import{G as Y}from"./GlowPalette-BlFmm6_F.js";import{B as Z}from"./Box-84RDQgna.js";import{T as ee}from"./Typography-CPCMMGuq.js";import{s as re}from"./styled-DketRv4I.js";import{P as oe}from"./Popover-vuXRV2RG.js";import"./emotion-react.browser.esm-CzyYH6Xe.js";import"./generateUtilityClasses-CPRdC64H.js";import"./useTheme-BIUNiYwk.js";import"./extendSxProp-B_2SO387.js";import"./index-o8klx2Nf.js";import"./DefaultPropsProvider-Bcp8l54b.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlot-aXQ8NPmW.js";import"./useForkRef-zqhjcRVs.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-Claz4S-Y.js";import"./useTheme-DW2JKlpt.js";import"./utils-CqeGdR9Y.js";import"./useTimeout-COwD6Zpp.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";import"./getReactElementRef-rGhWSfJO.js";import"./mergeSlotProps-uRZWNtH4.js";import"./Modal-CISbEoY5.js";import"./Portal-CqAdRi_j.js";import"./Fade-Bcnby8sK.js";import"./Paper-ZsONHF7B.js";const ae=re("button")(({$color:r,$size:e,$animated:a})=>({width:e,height:e,minWidth:e,minHeight:e,borderRadius:"50%",border:"2.7px solid #fff",background:r,boxShadow:`0 0 32px 4px ${r}bb, 0 0 60px 11px #8b5cf655, 0 3px 26px #0002`,outline:"3px solid #fff2",cursor:"pointer",transition:"box-shadow 0.19s, outline 0.14s, transform 0.13s",filter:"brightness(1.18) drop-shadow(0 0 9px #fff4)",display:"flex",alignItems:"center",justifyContent:"center",margin:0,padding:0,position:"relative",zIndex:3,":hover":{transform:"scale(1.08)",boxShadow:`0 0 36px 10px ${r}, 0 0 60px 27px #38bdf8ac`,outline:"3.5px solid #facc158a"},":focus":{outline:"4px solid #facc1577",zIndex:9}})),ne=["#8b5cf6","#38bdf8","#f472b6","#facc15","#00ff99","#f87171","#4338ca","#05ffa1","#6366f1","#181825"],m=({colors:r=ne,value:e,swatchSize:a=36,animated:n=!0,showLabel:J=!0,onChange:g,label:K="Farbe auswählen",style:Q})=>{const[h,b]=H.useState(null),X=!!h,y=e||r[0];return o.jsxs(Z,{style:Q,children:[J&&o.jsx(ee,{variant:"subtitle2",sx:{color:"#38bdf8",fontWeight:700,mb:.5},children:K}),o.jsx(ae,{$color:y,$size:a,$animated:n,onClick:w=>b(w.currentTarget),"aria-label":"Farbwähler öffnen"}),o.jsx(oe,{open:X,anchorEl:h,onClose:()=>b(null),anchorOrigin:{vertical:"bottom",horizontal:"left"},slotProps:{paper:{sx:{boxShadow:"0 0 44px #38bdf884",borderRadius:4,bgcolor:"#222b",px:2,py:2}}},children:o.jsx(Y,{colors:r,swatchSize:a,selected:y,animated:n,onSelect:w=>{b(null),g==null||g(w)},style:{margin:8,maxWidth:285}})})]})};try{m.displayName="GlowColorSelector",m.__docgenInfo={description:"",displayName:"GlowColorSelector",props:{colors:{defaultValue:{value:`[
  '#8b5cf6', '#38bdf8', '#f472b6', '#facc15', '#00ff99', '#f87171', '#4338ca', '#05ffa1', '#6366f1', '#181825'
]`},description:"",name:"colors",required:!1,type:{name:"string[] | undefined"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | undefined"}},swatchSize:{defaultValue:{value:"36"},description:"",name:"swatchSize",required:!1,type:{name:"number | undefined"}},animated:{defaultValue:{value:"true"},description:"",name:"animated",required:!1,type:{name:"boolean | undefined"}},showLabel:{defaultValue:{value:"true"},description:"",name:"showLabel",required:!1,type:{name:"boolean | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((color: string) => void) | undefined"}},label:{defaultValue:{value:"Farbe auswählen"},description:"",name:"label",required:!1,type:{name:"ReactNode"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}}}}}catch{}const Ne={title:"Ultra Fancy/GlowColorSelector",component:m,argTypes:{value:{control:"color"},glow:{control:"boolean"},size:{control:"radio",options:["small","medium","large"]},mode:{control:"radio",options:["picker","palette","wheel"]},onChange:{action:"onChange"}}},t={args:{value:"#ff00ff",glow:!0,size:"large",mode:"palette",colors:["#ff0080","#ff4000","#ff8000","#ffff00","#80ff00","#00ff40","#00ffff","#0080ff","#4000ff","#8000ff","#ff00ff","#ff0040"]},parameters:{backgrounds:{default:"dark"},docs:{description:{story:"🌈 A vibrant rainbow color palette with intense glow effects!"}}}},s={args:{value:"#00ffff",glow:!0,size:"large",mode:"wheel",colors:["#00ffff","#ff00ff","#ffff00","#00ff00","#ff0080","#8000ff","#0080ff","#ff4000"]},parameters:{backgrounds:{default:"dark"},docs:{description:{story:"⚡ Cyberpunk neon colors with electric glow for futuristic UIs!"}}}},f={args:{value:"#ffb3e6",glow:!0,size:"medium",mode:"palette",colors:["#ffb3e6","#b3e6ff","#e6ffb3","#ffe6b3","#e6b3ff","#b3ffb3","#ffccb3","#ccb3ff"]},parameters:{backgrounds:{default:"light"},docs:{description:{story:"🎀 Soft pastel colors with gentle glow for elegant designs!"}}}},l={args:{value:"#006699",glow:!0,size:"large",mode:"picker",colors:["#001122","#003366","#006699","#0099cc","#00ccff","#33ddff","#66eeff","#99f6ff"]},parameters:{backgrounds:{default:"dark"},docs:{description:{story:"🌊 Deep ocean blues with aquatic glow effects!"}}}},c={args:{value:"#ff6600",glow:!0,size:"large",mode:"palette",colors:["#ff3300","#ff6600","#ff9900","#ffcc00","#ffff33","#ff9966","#ff6699","#ff3399"]},parameters:{backgrounds:{default:"dark"},docs:{description:{story:"🌅 Warm sunset colors with golden hour glow!"}}}},i={args:{value:"#228b22",glow:!0,size:"medium",mode:"wheel",colors:["#006400","#228b22","#32cd32","#7fff00","#adff2f","#98fb98","#90ee90","#00ff7f"]},parameters:{backgrounds:{default:"dark"},docs:{description:{story:"🌲 Fresh forest greens with natural earth glow!"}}}},d={args:{value:"#9933cc",glow:!0,size:"large",mode:"palette",colors:["#4b0082","#6a0dad","#7b68ee","#9370db","#9932cc","#ba55d3","#da70d6","#ee82ee"]},parameters:{backgrounds:{default:"dark"},docs:{description:{story:"✨ Cosmic purples with mystical galaxy glow!"}}}},u={args:{value:"#666666",glow:!1,size:"small",mode:"picker",colors:["#000000","#333333","#666666","#999999","#cccccc","#ffffff"]},parameters:{backgrounds:{default:"light"},docs:{description:{story:"⚫ Clean monochrome palette without glow for minimal designs."}}}},p={render:r=>{const[e,a]=H.useState("#ff0080");return o.jsxs("div",{style:{padding:40,background:"linear-gradient(135deg, #1a1a2e, #16213e)",borderRadius:20},children:[o.jsx("h3",{style:{color:"#fff",marginBottom:20,textAlign:"center"},children:"🎨 Interactive Color Selector Demo"}),o.jsx(m,{...r,value:e,onChange:n=>a(n)}),o.jsxs("div",{style:{marginTop:30,padding:20,borderRadius:15,background:e,color:"#fff",textAlign:"center",fontWeight:"bold",boxShadow:`0 0 40px ${e}80`},children:["Selected: ",e]})]})},args:{glow:!0,size:"large",mode:"palette",colors:["#ff0080","#00ff80","#8000ff","#ff8000","#0080ff","#ff0040","#40ff00","#8040ff"]},parameters:{backgrounds:{default:"dark"},docs:{description:{story:"🎯 Interactive demo showing real-time color selection with live preview!"}}}};var x,v,k;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    value: '#ff00ff',
    glow: true,
    size: 'large',
    mode: 'palette',
    colors: ['#ff0080', '#ff4000', '#ff8000', '#ffff00', '#80ff00', '#00ff40', '#00ffff', '#0080ff', '#4000ff', '#8000ff', '#ff00ff', '#ff0040']
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        story: '🌈 A vibrant rainbow color palette with intense glow effects!'
      }
    }
  }
}`,...(k=(v=t.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var S,C,z;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    value: '#00ffff',
    glow: true,
    size: 'large',
    mode: 'wheel',
    colors: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080', '#8000ff', '#0080ff', '#ff4000']
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        story: '⚡ Cyberpunk neon colors with electric glow for futuristic UIs!'
      }
    }
  }
}`,...(z=(C=s.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var R,j,I;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    value: '#ffb3e6',
    glow: true,
    size: 'medium',
    mode: 'palette',
    colors: ['#ffb3e6', '#b3e6ff', '#e6ffb3', '#ffe6b3', '#e6b3ff', '#b3ffb3', '#ffccb3', '#ccb3ff']
  },
  parameters: {
    backgrounds: {
      default: 'light'
    },
    docs: {
      description: {
        story: '🎀 Soft pastel colors with gentle glow for elegant designs!'
      }
    }
  }
}`,...(I=(j=f.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var P,V,q;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    value: '#006699',
    glow: true,
    size: 'large',
    mode: 'picker',
    colors: ['#001122', '#003366', '#006699', '#0099cc', '#00ccff', '#33ddff', '#66eeff', '#99f6ff']
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        story: '🌊 Deep ocean blues with aquatic glow effects!'
      }
    }
  }
}`,...(q=(V=l.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var _,G,D;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    value: '#ff6600',
    glow: true,
    size: 'large',
    mode: 'palette',
    colors: ['#ff3300', '#ff6600', '#ff9900', '#ffcc00', '#ffff33', '#ff9966', '#ff6699', '#ff3399']
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        story: '🌅 Warm sunset colors with golden hour glow!'
      }
    }
  }
}`,...(D=(G=c.parameters)==null?void 0:G.docs)==null?void 0:D.source}}};var F,A,N;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    value: '#228b22',
    glow: true,
    size: 'medium',
    mode: 'wheel',
    colors: ['#006400', '#228b22', '#32cd32', '#7fff00', '#adff2f', '#98fb98', '#90ee90', '#00ff7f']
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        story: '🌲 Fresh forest greens with natural earth glow!'
      }
    }
  }
}`,...(N=(A=i.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var W,T,B;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    value: '#9933cc',
    glow: true,
    size: 'large',
    mode: 'palette',
    colors: ['#4b0082', '#6a0dad', '#7b68ee', '#9370db', '#9932cc', '#ba55d3', '#da70d6', '#ee82ee']
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        story: '✨ Cosmic purples with mystical galaxy glow!'
      }
    }
  }
}`,...(B=(T=d.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var E,M,O;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    value: '#666666',
    glow: false,
    size: 'small',
    mode: 'picker',
    colors: ['#000000', '#333333', '#666666', '#999999', '#cccccc', '#ffffff']
  },
  parameters: {
    backgrounds: {
      default: 'light'
    },
    docs: {
      description: {
        story: '⚫ Clean monochrome palette without glow for minimal designs.'
      }
    }
  }
}`,...(O=(M=u.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var U,$,L;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => {
    const [selectedColor, setSelectedColor] = React.useState('#ff0080');
    return <div style={{
      padding: 40,
      background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
      borderRadius: 20
    }}>
        <h3 style={{
        color: '#fff',
        marginBottom: 20,
        textAlign: 'center'
      }}>
          🎨 Interactive Color Selector Demo
        </h3>
        <GlowColorSelector {...args} value={selectedColor} onChange={color => setSelectedColor(color)} />
        <div style={{
        marginTop: 30,
        padding: 20,
        borderRadius: 15,
        background: selectedColor,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        boxShadow: \`0 0 40px \${selectedColor}80\`
      }}>
          Selected: {selectedColor}
        </div>
      </div>;
  },
  args: {
    glow: true,
    size: 'large',
    mode: 'palette',
    colors: ['#ff0080', '#00ff80', '#8000ff', '#ff8000', '#0080ff', '#ff0040', '#40ff00', '#8040ff']
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        story: '🎯 Interactive demo showing real-time color selection with live preview!'
      }
    }
  }
}`,...(L=($=p.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};const We=["VibrantRainbow","NeonCyberPunk","PastelDream","OceanDepths","SunsetVibes","NatureForest","GalaxyPurple","MinimalMono","Interactive"];export{d as GalaxyPurple,p as Interactive,u as MinimalMono,i as NatureForest,s as NeonCyberPunk,l as OceanDepths,f as PastelDream,c as SunsetVibes,t as VibrantRainbow,We as __namedExportsOrder,Ne as default};
