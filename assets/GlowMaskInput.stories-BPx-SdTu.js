import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as F,R as L}from"./index-D4lIrffr.js";import{G as H}from"./GlowInput-B0GdIZ8g.js";import{B as J}from"./Box-DtklFzPK.js";import{s as K}from"./styled-E20cg9_9.js";import"./generateUtilityClasses-CPRdC64H.js";import"./useTheme-DpPGzAox.js";import"./extendSxProp-CmprK5U1.js";function b(n,r){let a="",e=0;for(let o=0;o<r.length&&e<n.length;o++){const t=r[o],s=n[e];if(t==="#")if(/[0-9]/.test(s))a+=s,e++;else break;else if(t==="A")if(/[A-Z]/.test(s))a+=s,e++;else break;else if(t==="a")if(/[a-z]/.test(s))a+=s,e++;else break;else if(t==="*")if(/[a-zA-Z0-9]/.test(s))a+=s,e++;else break;else a+=t,s===t&&e++}return a}function v(n,r){let a="",e=0;for(let o=0;o<r.length&&e<n.length;o++){const t=r[o],s=n[e];if(["#","A","a","*"].includes(t))a+=s,e++;else if(s===t)e++;else{for(;e<n.length&&n[e]!==t;)e++;e++}}return a}function Q(n){let r="";for(let a=0;a<n.length;a++){const e=n[a];e==="#"?r+="[0-9]":e==="A"?r+="[A-Z]":e==="a"?r+="[a-z]":e==="*"?r+="[a-zA-Z0-9]":r+=e.replace(/[.*+?^${}()|[\]\\]/g,"$&")}return new RegExp("^"+r+"$")}function X(n,r){let a=0;for(let e=0;e<r.length&&a<n.length;e++){const o=r[e],t=n[a];if(o==="#"){if(!/[0-9]/.test(t))return!1;a++}else if(o==="A"){if(!/[A-Z]/.test(t))return!1;a++}else if(o==="a"){if(!/[a-z]/.test(t))return!1;a++}else if(o==="*"){if(!/[a-zA-Z0-9]/.test(t))return!1;a++}else t===o&&a++}return!0}const Y=K("div")({color:"#fb7185",fontWeight:700,marginTop:4,fontSize:13,textShadow:"0 0 10px #fb718544"}),g=({mask:n,value:r,onChange:a,label:e,colorVariantOverride:o="primary",disabled:t=!1,error:s=!1,errorMsg:U,helperText:h,borderRadius:W,glowIntensity:Z,...E})=>{const O=F.useRef(null),y=b(v(r,n),n),k=Q(n).test(y),$=D=>{const m=v(D.target.value,n);X(m,n)&&a(b(m,n),m)};return l.jsxs(J,{children:[l.jsx(H,{ref:O,label:e||n,value:y,colorVariant:o,borderRadius:W,glowIntensity:s?2.1:Z,disabled:t,error:s||!t&&r&&!k,onChange:$,autoComplete:"off",style:{letterSpacing:"0.12em",fontWeight:600,fontSize:17},...E}),!t&&r&&(!k||s)&&l.jsx(Y,{children:U||"Invalid format."}),h&&!s&&l.jsx("div",{style:{color:"#05ffa1",fontWeight:500,fontSize:13.3,marginTop:3,textShadow:"0 0 8px #38bdf822"},children:h})]})};try{g.displayName="GlowMaskInput",g.__docgenInfo={description:"GlowMaskInput React Component",displayName:"GlowMaskInput",props:{mask:{defaultValue:null,description:"",name:"mask",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(formatted: string, raw: string) => void"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},colorVariantOverride:{defaultValue:{value:"primary"},description:"",name:"colorVariantOverride",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"secondary"'},{value:'"accent"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean | undefined"}},errorMsg:{defaultValue:null,description:"",name:"errorMsg",required:!1,type:{name:"ReactNode"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"ReactNode"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"string | number | undefined"}},glowIntensity:{defaultValue:null,description:"",name:"glowIntensity",required:!1,type:{name:"number | undefined"}}}}}catch{}const ie={title:"Ultra Fancy/GlowMaskInput",component:g,args:{label:"Phone",mask:"(999) 999-9999",value:"",glow:!0},argTypes:{label:{control:"text"},mask:{control:"text"},value:{control:"text"},glow:{control:"boolean"},onChange:{action:"onChange"}}},i={args:{}},d={args:{label:"Neon Phone",mask:"+1 (999) 999-9999",glow:!0,value:""},parameters:{backgrounds:{default:"dark"},docs:{description:{story:"📱 Neon aqua glow and US mask, great for onboarding flows."}}}},u={args:{label:"Credit Card",mask:"9999 9999 9999 9999",glow:!0,value:""},parameters:{backgrounds:{default:"dark"},docs:{description:{story:"💳 Credit card input with intense purple/blue glow, for payment UIs."}}}},c={args:{label:"Birthday",mask:"99/99/9999",glow:!0,value:""},parameters:{backgrounds:{default:"light"},docs:{description:{story:"🎂 Soft pink/green pastel for birthday or date entry fields."}}}},f={args:{label:"No Glow Minimal",mask:"AA-999",glow:!1,value:""},parameters:{backgrounds:{default:"light"},docs:{description:{story:"Minimalistic, non-glowing style for clean admin/data UI."}}}},p={render:n=>{const[r,a]=L.useState("");return l.jsxs("div",{style:{padding:44,background:"radial-gradient(ellipse at top left, #0ff 10%, #38bdf8 60%, #8b5cf6 100%)",borderRadius:24},children:[l.jsx("h4",{style:{color:"#fff",marginBottom:18},children:"🔤 Live Mask Input"}),l.jsx(g,{mask:"",...n,value:r,onChange:e=>a(e)}),l.jsxs("div",{style:{marginTop:16,color:"#fff",fontWeight:600},children:[l.jsx("span",{children:"Masked Value: "}),l.jsx("span",{style:{color:"#facc15",letterSpacing:1},children:r})]})]})},args:{label:"Try Any Mask!",mask:"****-9999",glow:!0,value:""},parameters:{backgrounds:{default:"dark"},docs:{description:{story:"🎯 Interactive: Type and see the mask & glow in action live!"}}}};var w,x,C;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {}
}`,...(C=(x=i.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var M,I,V;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Neon Phone',
    mask: '+1 (999) 999-9999',
    glow: true,
    value: ''
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        story: '📱 Neon aqua glow and US mask, great for onboarding flows.'
      }
    }
  }
}`,...(V=(I=d.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var S,A,j;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Credit Card',
    mask: '9999 9999 9999 9999',
    glow: true,
    value: ''
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        story: '💳 Credit card input with intense purple/blue glow, for payment UIs.'
      }
    }
  }
}`,...(j=(A=u.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var N,R,q;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Birthday',
    mask: '99/99/9999',
    glow: true,
    value: ''
  },
  parameters: {
    backgrounds: {
      default: 'light'
    },
    docs: {
      description: {
        story: '🎂 Soft pink/green pastel for birthday or date entry fields.'
      }
    }
  }
}`,...(q=(R=c.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var G,T,_;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: 'No Glow Minimal',
    mask: 'AA-999',
    glow: false,
    value: ''
  },
  parameters: {
    backgrounds: {
      default: 'light'
    },
    docs: {
      description: {
        story: 'Minimalistic, non-glowing style for clean admin/data UI.'
      }
    }
  }
}`,...(_=(T=f.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var z,P,B;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => {
    const [val, setVal] = React.useState('');
    return <div style={{
      padding: 44,
      background: 'radial-gradient(ellipse at top left, #0ff 10%, #38bdf8 60%, #8b5cf6 100%)',
      borderRadius: 24
    }}>
        <h4 style={{
        color: '#fff',
        marginBottom: 18
      }}>🔤 Live Mask Input</h4>
        <GlowMaskInput mask={''} {...args} value={val} onChange={newValue => setVal(newValue)} />
        <div style={{
        marginTop: 16,
        color: '#fff',
        fontWeight: 600
      }}>
          <span>Masked Value: </span>
          <span style={{
          color: '#facc15',
          letterSpacing: 1
        }}>{val}</span>
        </div>
      </div>;
  },
  args: {
    label: 'Try Any Mask!',
    mask: '****-9999',
    glow: true,
    value: ''
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        story: '🎯 Interactive: Type and see the mask & glow in action live!'
      }
    }
  }
}`,...(B=(P=p.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};const de=["Playground","NeonPhone","CreditCardAurora","BirthdayPastel","NoGlowMinimal","InteractiveDemo"];export{c as BirthdayPastel,u as CreditCardAurora,p as InteractiveDemo,d as NeonPhone,f as NoGlowMinimal,i as Playground,de as __namedExportsOrder,ie as default};
