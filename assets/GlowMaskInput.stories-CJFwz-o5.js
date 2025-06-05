import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as ae,R as A}from"./index-D4lIrffr.js";import{G as ne}from"./GlowInput-gIi35lRx.js";import{B as te}from"./Box-84RDQgna.js";import{s as se}from"./styled-DketRv4I.js";import"./generateUtilityClasses-CPRdC64H.js";import"./useTheme-BIUNiYwk.js";import"./extendSxProp-B_2SO387.js";function v(e,n){let a="",r=0;for(let l=0;l<n.length&&r<e.length;l++){const t=n[l],o=e[r];if(t==="#")if(/[0-9]/.test(o))a+=o,r++;else break;else if(t==="A")if(/[A-Z]/.test(o))a+=o,r++;else break;else if(t==="a")if(/[a-z]/.test(o))a+=o,r++;else break;else if(t==="*")if(/[a-zA-Z0-9]/.test(o))a+=o,r++;else break;else a+=t,o===t&&r++}return a}function I(e,n){let a="",r=0;for(let l=0;l<n.length&&r<e.length;l++){const t=n[l],o=e[r];if(["#","A","a","*"].includes(t))a+=o,r++;else if(o===t)r++;else{for(;r<e.length&&e[r]!==t;)r++;r++}}return a}function oe(e){let n="";for(let a=0;a<e.length;a++){const r=e[a];r==="#"?n+="[0-9]":r==="A"?n+="[A-Z]":r==="a"?n+="[a-z]":r==="*"?n+="[a-zA-Z0-9]":n+=r.replace(/[.*+?^${}()|[\]\\]/g,"$&")}return new RegExp("^"+n+"$")}function le(e,n){let a=0;for(let r=0;r<n.length&&a<e.length;r++){const l=n[r],t=e[a];if(l==="#"){if(!/[0-9]/.test(t))return!1;a++}else if(l==="A"){if(!/[A-Z]/.test(t))return!1;a++}else if(l==="a"){if(!/[a-z]/.test(t))return!1;a++}else if(l==="*"){if(!/[a-zA-Z0-9]/.test(t))return!1;a++}else t===l&&a++}return!0}const ie=se("div")({color:"#fb7185",fontWeight:700,marginTop:4,fontSize:13,textShadow:"0 0 10px #fb718544"}),y=({mask:e,value:n,onChange:a,label:r,colorVariantOverride:l="primary",disabled:t=!1,error:o=!1,errorMsg:J,helperText:b,borderRadius:K,glowIntensity:L,...Q})=>{const Y=ae.useRef(null),w=v(I(n,e),e),x=oe(e).test(w),ee=re=>{const k=I(re.target.value,e);le(k,e)&&a(v(k,e),k)};return s.jsxs(te,{children:[s.jsx(ne,{ref:Y,label:r||e,value:w,colorVariant:l,borderRadius:K,glowIntensity:o?2.1:L,disabled:t,error:o||!t&&n&&!x,onChange:ee,autoComplete:"off",style:{letterSpacing:"0.12em",fontWeight:600,fontSize:17},...Q}),!t&&n&&(!x||o)&&s.jsx(ie,{children:J||"Invalid format."}),b&&!o&&s.jsx("div",{style:{color:"#05ffa1",fontWeight:500,fontSize:13.3,marginTop:3,textShadow:"0 0 8px #38bdf822"},children:b})]})};try{y.displayName="GlowMaskInput",y.__docgenInfo={description:"GlowMaskInput React Component",displayName:"GlowMaskInput",props:{mask:{defaultValue:null,description:"",name:"mask",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(formatted: string, raw: string) => void"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},colorVariantOverride:{defaultValue:{value:"primary"},description:"",name:"colorVariantOverride",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"secondary"'},{value:'"accent"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean | undefined"}},errorMsg:{defaultValue:null,description:"",name:"errorMsg",required:!1,type:{name:"ReactNode"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"ReactNode"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"string | number | undefined"}},glowIntensity:{defaultValue:null,description:"",name:"glowIntensity",required:!1,type:{name:"number | undefined"}}}}}catch{}const ye={title:"Ultra Fancy/GlowMaskInput",component:y,args:{label:"Phone",mask:"(999) 999-9999",value:"",glow:!0},argTypes:{label:{control:"text"},mask:{control:"text"},value:{control:"text"},glow:{control:"boolean"},onChange:{action:"onChange"},helperText:{control:"text"}}};function i(e){const[n,a]=A.useState(""),[r,l]=A.useState("");return s.jsxs("div",{style:{padding:24,background:"#161d2e",borderRadius:16},children:[s.jsx(y,{...e,value:n,onChange:(t,o)=>{a(t),l(o)}}),s.jsxs("div",{style:{marginTop:7,color:"#7cf2c6",fontWeight:600,fontSize:14},children:[s.jsx("span",{children:"Masked Value: "}),s.jsx("span",{style:{color:"#facc15",letterSpacing:1},children:n}),s.jsx("br",{}),s.jsx("span",{children:"Raw Value: "}),s.jsx("span",{style:{color:"#8b5cf6",letterSpacing:1},children:r})]})]})}const d={render:e=>s.jsx(i,{...e}),args:{label:"Try Any Mask!",mask:"****-9999",glow:!0,value:""},parameters:{docs:{description:{story:"Freely try any mask and see how values are formatted and parsed."}}}},u={render:e=>s.jsx(i,{...e}),args:{label:"Neon Phone",mask:"+1 (999) 999-9999",glow:!0,value:""},parameters:{backgrounds:{default:"dark"},docs:{description:{story:"📱 Neon aqua glow and US mask, great for onboarding flows."}}}},c={render:e=>s.jsx(i,{...e}),args:{label:"Credit Card",mask:"9999 9999 9999 9999",glow:!0,value:""},parameters:{backgrounds:{default:"dark"},docs:{description:{story:"💳 Credit card input, for payment UIs."}}}},p={render:e=>s.jsx(i,{...e}),args:{label:"Birthday",mask:"99/99/9999",glow:!0,value:""},parameters:{backgrounds:{default:"light"},docs:{description:{story:"🎂 Pastel for birthday/date entry."}}}},m={render:e=>s.jsx(i,{...e}),args:{label:"No Glow Minimal",mask:"AA-999",glow:!1,value:""},parameters:{backgrounds:{default:"light"},docs:{description:{story:"Minimal non-glowing style for clean UI."}}}},g={render:e=>s.jsx(i,{...e}),args:{label:"IBAN",mask:"AA99 9999 9999 9999 9999 99",glow:!0,value:"",helperText:"Enter an International Bank Account Number."},parameters:{backgrounds:{default:"light"},docs:{description:{story:"🏦 International Bank Account (IBAN) mask for financial apps."}}}},f={render:e=>s.jsx(i,{...e}),args:{label:"German Phone",mask:"+49 (999) 99999999",glow:!0,value:"",helperText:"Format: +49 (XXX) XXXXXXXX"},parameters:{backgrounds:{default:"light"},docs:{description:{story:"📞 German phone with country code."}}}},h={render:e=>s.jsx(i,{...e}),args:{label:"VAT Number",mask:"AAA 999 999 99",glow:!0,value:"",helperText:"Example: DEU 123 456 78"},parameters:{backgrounds:{default:"light"},docs:{description:{story:"🧾 VAT ID mask (example for Europe)."}}}};var C,M,N;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <ControlledGlowMaskInput {...args} />,
  args: {
    label: 'Try Any Mask!',
    mask: '****-9999',
    glow: true,
    value: ''
  },
  parameters: {
    docs: {
      description: {
        story: 'Freely try any mask and see how values are formatted and parsed.'
      }
    }
  }
}`,...(N=(M=d.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var G,j,V;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => <ControlledGlowMaskInput {...args} />,
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
}`,...(V=(j=u.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var X,S,T;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => <ControlledGlowMaskInput {...args} />,
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
        story: '💳 Credit card input, for payment UIs.'
      }
    }
  }
}`,...(T=(S=c.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var B,P,R;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <ControlledGlowMaskInput {...args} />,
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
        story: '🎂 Pastel for birthday/date entry.'
      }
    }
  }
}`,...(R=(P=p.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var q,E,z;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => <ControlledGlowMaskInput {...args} />,
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
        story: 'Minimal non-glowing style for clean UI.'
      }
    }
  }
}`,...(z=(E=m.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var _,U,F;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <ControlledGlowMaskInput {...args} />,
  args: {
    label: 'IBAN',
    mask: 'AA99 9999 9999 9999 9999 99',
    glow: true,
    value: '',
    helperText: 'Enter an International Bank Account Number.'
  },
  parameters: {
    backgrounds: {
      default: 'light'
    },
    docs: {
      description: {
        story: '🏦 International Bank Account (IBAN) mask for financial apps.'
      }
    }
  }
}`,...(F=(U=g.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var Z,W,D;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: args => <ControlledGlowMaskInput {...args} />,
  args: {
    label: 'German Phone',
    mask: '+49 (999) 99999999',
    glow: true,
    value: '',
    helperText: 'Format: +49 (XXX) XXXXXXXX'
  },
  parameters: {
    backgrounds: {
      default: 'light'
    },
    docs: {
      description: {
        story: '📞 German phone with country code.'
      }
    }
  }
}`,...(D=(W=f.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var O,$,H;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <ControlledGlowMaskInput {...args} />,
  args: {
    label: 'VAT Number',
    mask: 'AAA 999 999 99',
    glow: true,
    value: '',
    helperText: 'Example: DEU 123 456 78'
  },
  parameters: {
    backgrounds: {
      default: 'light'
    },
    docs: {
      description: {
        story: '🧾 VAT ID mask (example for Europe).'
      }
    }
  }
}`,...(H=($=h.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};const ke=["Playground","NeonPhone","CreditCardAurora","BirthdayPastel","NoGlowMinimal","IBAN","GermanPhone","VATNumber"];export{p as BirthdayPastel,c as CreditCardAurora,f as GermanPhone,g as IBAN,u as NeonPhone,m as NoGlowMinimal,d as Playground,h as VATNumber,ke as __namedExportsOrder,ye as default};
