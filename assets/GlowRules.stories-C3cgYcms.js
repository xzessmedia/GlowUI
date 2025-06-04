import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as ue}from"./index-D4lIrffr.js";import{G as pe}from"./GlowCard-Cw-SdvFf.js";import{C as ge}from"./CheckCircle-DJ_0CNm_.js";import{c as w}from"./createSvgIcon-DyKWnwtn.js";import{G as I}from"./GlowTypography-Dv6LR60i.js";import{s as l}from"./styled-DketRv4I.js";import{B as oe}from"./Box-84RDQgna.js";import{k as be}from"./emotion-react.browser.esm-CzyYH6Xe.js";import"./generateUtilityClasses-CPRdC64H.js";import"./DefaultPropsProvider-Bcp8l54b.js";import"./Typography-CPCMMGuq.js";import"./index-o8klx2Nf.js";import"./useTheme-BIUNiYwk.js";import"./extendSxProp-B_2SO387.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const me=w(e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z"})),he=w(e.jsx("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"})),F=w(e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z"})),xe=w([e.jsx("path",{d:"M12 5.99 19.53 19H4.47zM12 2 1 21h22z"},"0"),e.jsx("path",{d:"M13 16h-2v2h2zm0-6h-2v5h2z"},"1")]),ye=be`
  0%,100% { box-shadow: 0 0 12px #05ffa160, 0 0 30px #8b5cf640; }
  55% { box-shadow: 0 0 24px #38bdf880, 0 0 42px #8b5cf660; }
`,we=l("div")({fontWeight:900,fontSize:26,color:"#fff",letterSpacing:".031em",marginBottom:10,textShadow:"0 0 16px #8b5cf6b6,0 2px 18px #38bdf8aa",display:"flex",alignItems:"center",gap:16,justifyContent:"center"}),ke=l(oe)({display:"flex",flexDirection:"column",gap:14,marginTop:5,paddingBottom:7}),d={success:{color:"#05ffa1",shadow:"#05ffa170",Icon:ge},warning:{color:"#fbbf24",shadow:"#fbbf2466",Icon:xe},error:{color:"#ef4444",shadow:"#ef444460",Icon:me},info:{color:"#38bdf8",shadow:"#38bdf860",Icon:F},default:{color:"#8b5cf6",shadow:"#8b5cf666",Icon:F}},Se=l("div")(({status:n="default",featured:r,expanded:S})=>{var o;const v=((o=d[n])==null?void 0:o.shadow)||d.default.shadow;return{background:r?"linear-gradient(110deg, #05ffa110 50%, #8b5cf625 100%)":"linear-gradient(110deg, #181b39 70%, #38bdf822 105%)",borderRadius:19,boxShadow:`0 0 14px 1.5px ${v}`,padding:`20px 20px ${S?"18px":"14px"} 20px`,transition:"all .31s cubic-bezier(.72, .1, .82, .89)",position:"relative",cursor:"pointer",animation:r?`${ye} 7s infinite alternate`:void 0,border:r?"2.7px solid #05ffa199":"1.3px solid #38bdf822",userSelect:"none"}}),ve=l("div")(({status:n})=>{var r;return{fontWeight:700,fontSize:18,color:((r=d[n??"default"])==null?void 0:r.color)||d.default.color,marginBottom:5,display:"flex",alignItems:"center",gap:8,textShadow:"0 0 7px #05ffa144, 0 2px 6px #8b5cf677"}}),Re=l("span")(({expanded:n})=>({transition:"transform 0.3s cubic-bezier(.42,2.12,.58,1.21)",transform:n?"rotate(180deg)":"rotate(0deg)",display:"flex",alignItems:"center"})),y=({rules:n=[],header:r="Rulebook",style:S,cardStyle:v,onRuleClick:o,orientation:f="vertical",ruleGap:H=14,showHeader:de=!0,showTags:q=!0,tagGradient:V="linear-gradient(90deg,#00ff99,#8b5cf6)",customRenderTitle:R,customRenderDescription:C,customRenderTag:W,customRenderCard:G,showIcons:B=!0,iconSize:T=19})=>{const[se,le]=ue.useState({}),fe=a=>le(t=>({...t,[a]:!t[a]}));return e.jsxs(pe,{glass:!0,glow:!0,animated:!0,gradient:"linear-gradient(120deg,#181b39 55%,#38bdf855 110%)",borderRadius:32,style:{maxWidth:f==="vertical"?620:void 0,minWidth:300,width:"100%",...S,...v},children:[de&&r&&e.jsx(we,{children:r}),e.jsx(ke,{sx:{flexDirection:f==="horizontal"?"row":"column",gap:H,flexWrap:f==="horizontal"?"wrap":void 0},children:n.map((a,t)=>{const i=a.status||"default",s=d[i]||d.default,j=a.icon||s.Icon,c=a.expandable,z=se[t]??a.expandedByDefault??!1;let E=e.jsxs(e.Fragment,{children:[e.jsxs(ve,{status:i,children:[B&&j&&typeof j=="function"?e.jsx("span",{style:{display:"inline-flex",alignItems:"center",fontSize:T,marginRight:6,filter:`drop-shadow(0 0 6px ${s.color}a0)`},children:e.jsx(j,{sx:{fontSize:T,color:s.color}})}):null,R?R(a):e.jsx(I,{variant:"h6",clipText:!0,glow:!0,gradient:i==="success"?"linear-gradient(90deg,#00ff99,#38d1c4)":i==="error"?"linear-gradient(90deg,#ef4444,#f472b6)":i==="info"?"linear-gradient(90deg,#38bdf8,#8b5cf6)":i==="warning"?"linear-gradient(90deg,#ffab00,#00ff99)":"linear-gradient(90deg,#8b5cf6,#38d1c4,#00ff99)",fontWeight:900,sx:{display:"inline-block",ml:.7},children:a.title}),c&&e.jsx(Re,{expanded:z,children:e.jsx(he,{sx:{color:s.color,fontSize:22,filter:"drop-shadow(0 0 3px #05ffa133)"}})})]}),(z||!c)&&e.jsxs(e.Fragment,{children:[a.description&&(C?C(a):e.jsx(I,{variant:"body2",glow:!0,glowColor:s.color,fontWeight:500,clipText:!1,sx:{mb:.5,mt:.2},children:a.description})),e.jsx("div",{children:q&&a.tags&&a.tags.map((N,ce)=>W?W(N,a):e.jsx(I,{variant:"caption",glow:!0,clipText:!0,gradient:V,fontWeight:600,sx:{display:"inline-block",mr:1,mb:.5,px:1.5,py:.2,borderRadius:6,background:"rgba(0,255,153,0.08)"},children:N},ce))}),a.children&&e.jsx(oe,{sx:{mt:1,pl:2.8,borderLeft:"2px solid #8b5cf633"},children:e.jsx(y,{rules:a.children,header:null,orientation:f,ruleGap:H,showTags:q,tagGradient:V,showIcons:B,iconSize:T,customRenderTitle:R,customRenderDescription:C,customRenderTag:W,customRenderCard:G})})]})]});return G?G(a,E):e.jsx(Se,{status:i,featured:a.featured,expanded:c&&z,onClick:()=>{c&&fe(t),o==null||o(t)},children:E},t)})})]})};try{y.displayName="GlowRules",y.__docgenInfo={description:"",displayName:"GlowRules",props:{rules:{defaultValue:{value:"[]"},description:"",name:"rules",required:!1,type:{name:"GlowRule[]"}},header:{defaultValue:{value:"Rulebook"},description:"",name:"header",required:!1,type:{name:"ReactNode"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},cardStyle:{defaultValue:null,description:"",name:"cardStyle",required:!1,type:{name:"CSSProperties | undefined"}},onRuleClick:{defaultValue:null,description:"",name:"onRuleClick",required:!1,type:{name:"((idx: number) => void) | undefined"}},orientation:{defaultValue:{value:"vertical"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"grid"'},{value:'"horizontal"'},{value:'"vertical"'}]}},ruleGap:{defaultValue:{value:"14"},description:"",name:"ruleGap",required:!1,type:{name:"string | number | undefined"}},showHeader:{defaultValue:{value:"true"},description:"",name:"showHeader",required:!1,type:{name:"boolean | undefined"}},stickyHeader:{defaultValue:null,description:"",name:"stickyHeader",required:!1,type:{name:"boolean | undefined"}},maxNestingDepth:{defaultValue:null,description:"",name:"maxNestingDepth",required:!1,type:{name:"number | undefined"}},defaultExpandDepth:{defaultValue:null,description:"",name:"defaultExpandDepth",required:!1,type:{name:"number | undefined"}},cardBorderRadius:{defaultValue:null,description:"",name:"cardBorderRadius",required:!1,type:{name:"string | number | undefined"}},cardShadow:{defaultValue:null,description:"",name:"cardShadow",required:!1,type:{name:"string | undefined"}},animationDuration:{defaultValue:null,description:"",name:"animationDuration",required:!1,type:{name:"number | undefined"}},showTags:{defaultValue:{value:"true"},description:"",name:"showTags",required:!1,type:{name:"boolean | undefined"}},tagVariant:{defaultValue:null,description:"",name:"tagVariant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"text"'},{value:'"chip"'},{value:'"pill"'}]}},tagGradient:{defaultValue:{value:"linear-gradient(90deg,#00ff99,#8b5cf6)"},description:"",name:"tagGradient",required:!1,type:{name:"string | undefined"}},showIcons:{defaultValue:{value:"true"},description:"",name:"showIcons",required:!1,type:{name:"boolean | undefined"}},iconSize:{defaultValue:{value:"19"},description:"",name:"iconSize",required:!1,type:{name:"number | undefined"}},customRenderTitle:{defaultValue:null,description:"",name:"customRenderTitle",required:!1,type:{name:"((rule: GlowRule) => ReactNode) | undefined"}},customRenderDescription:{defaultValue:null,description:"",name:"customRenderDescription",required:!1,type:{name:"((rule: GlowRule) => ReactNode) | undefined"}},customRenderTag:{defaultValue:null,description:"",name:"customRenderTag",required:!1,type:{name:"((tag: string, rule: GlowRule) => ReactNode) | undefined"}},customRenderCard:{defaultValue:null,description:"",name:"customRenderCard",required:!1,type:{name:"((rule: GlowRule, children: ReactNode) => ReactNode) | undefined"}}}}}catch{}const k=[{title:"Be Respectful",description:"Treat everyone in the community with kindness and professionalism.",status:"success",featured:!0,tags:["Respect","Kindness"]},{title:"No Spam or Promotions 🚫",description:"Avoid posting irrelevant links or advertisements.",status:"error",tags:["No-Spam"],expandable:!0,children:[{title:"Share Relevant Links",description:"Please only share links that are helpful to the discussion.",status:"info",tags:["Good Practice"]}]},{title:"Share Your Knowledge 📚",description:"Help others by sharing expertise freely—everyone’s growth helps the whole group.",status:"info",tags:["Community","Growth"],featured:!0},{title:"Be Accountable",description:"Behave online as you would in-person; demonstrate integrity in all actions.",status:"warning",tags:["Integrity"],expandable:!0,children:[{title:"No Bullying or Harassment",description:"Insults, hate speech, or personal attacks are not tolerated.",status:"error",tags:["Safety"]}]},{title:"Stay Curious!",description:"Ask questions—every question is a chance for the whole community to learn.",status:"success",tags:["Curiosity","Learning"]}],Ce=[{title:"Collaboration",description:"Work together to achieve shared goals.",status:"info",tags:["Teamwork","Support"],featured:!0},{title:"Innovation",description:"Encourage new ideas and creative problem solving.",status:"success",tags:["Ideas","Improve"],featured:!0},{title:"Transparency",description:"Communicate openly and honestly at all times.",status:"warning",tags:["Openness","Honesty"]}],We=[{title:"Diversity 🌈",description:"Embrace the differences that make us strong and unique.",status:"success",tags:["Unique","Together"],featured:!0},{title:"Empathy 🤝",description:"Understand and care for others’ perspectives and feelings.",status:"info",tags:["Understanding"]},{title:"Growth 🚀",description:"Pursue learning, improvement, and adaptation in all you do.",status:"success",tags:["Learning"]}],Le={title:"Ultra Fancy/GlowRules",component:y,decorators:[(n,{parameters:r})=>e.jsx("div",{style:{minHeight:"100vh",background:r.backgroundOverride||"linear-gradient(135deg, #202031 60%, #00ff99 240%)",padding:"40px 0",display:"flex",justifyContent:"center",alignItems:"flex-start"},children:e.jsx(n,{})})],argTypes:{rules:{control:!1},header:{control:!1},style:{control:!1},cardStyle:{control:!1}}},u={args:{rules:k,orientation:"vertical",ruleGap:20,showHeader:!0,header:e.jsx("span",{style:{fontWeight:900,fontSize:30,letterSpacing:"0.03em",background:"linear-gradient(90deg,#38d1c4,#8b5cf6,#00ff99,#ef4444)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",textShadow:"0 2px 20px #38bdf888, 0 4px 32px #9333ea99",display:"inline-block"},children:"🌟 Community Glow Rules 🌟"}),style:{boxShadow:"0 12px 40px 0 rgba(0,255,153,0.23), 0 2px 12px 0 #8b5cf6bb",borderRadius:32,border:"2px solid #00ff99",padding:"4px",background:"rgba(28,20,51,0.98)"},cardStyle:{background:"linear-gradient(115deg, #181b39 60%, #00ff9940 140%)"},showIcons:!0,showTags:!0,tagGradient:"linear-gradient(90deg,#00ff99,#8b5cf6)"}},p={args:{rules:k,orientation:"horizontal",ruleGap:36,showHeader:!0,header:e.jsxs("span",{style:{fontWeight:900,fontSize:28,letterSpacing:"0.03em",background:"linear-gradient(90deg,#00ff99,#ffab00,#8b5cf6,#ef4444)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",display:"inline-block"},children:[e.jsx("span",{role:"img","aria-label":"row",children:"↔️"})," Horizontal Glow Rules"]}),style:{boxShadow:"0 8px 24px #ffab0036",borderRadius:36,background:"rgba(40,29,49,0.98)",border:"2px solid #ffab00",padding:5},cardStyle:{background:"linear-gradient(92deg, #ffa72622 70%, #8b5cf620 110%)"},showIcons:!0,showTags:!0,tagGradient:"linear-gradient(90deg,#ffab00,#00ff99)"}},g={args:{rules:k,orientation:"vertical",showTags:!0,tagGradient:"linear-gradient(90deg,#ff5cf6,#00ff99)",customRenderTag:n=>e.jsxs("span",{style:{display:"inline-block",marginRight:7,marginBottom:3,padding:"2px 11px",fontWeight:700,borderRadius:8,background:"linear-gradient(92deg, #ff5cf6 80%, #00ff99 140%)",color:"#fff",boxShadow:"0 0 12px #ff5cf688, 0 0 6px #00ff9977",letterSpacing:".04em"},children:["🌈 ",n.toUpperCase()]})}},b={args:{rules:k,orientation:"vertical",showHeader:!1,style:{background:"rgba(22,22,28,0.97)",border:"1.5px solid #2f404a",borderRadius:20,padding:6},cardStyle:{background:"linear-gradient(120deg,#232137 60%,#242b36 110%)"},showIcons:!1,showTags:!1}},m={args:{rules:Ce,orientation:"vertical",showHeader:!0,header:e.jsx("span",{style:{fontWeight:900,fontSize:30,background:"linear-gradient(88deg,#38d1c4,#00ff99 90%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"✨ Team Whiteboard ✨"}),style:{boxShadow:"0 8px 24px rgba(56,209,196,0.14)",borderRadius:30,background:"rgba(255,255,255,0.87)",border:"2px solid #38d1c4"},cardStyle:{background:"linear-gradient(92deg, #e6fff9 70%, #38d1c411 120%)"},tagGradient:"linear-gradient(90deg,#38d1c4,#00ff99)"},parameters:{backgroundOverride:"linear-gradient(120deg, #e4f5f1 70%, #ffffff 100%)"}},h={args:{rules:We,orientation:"vertical",showHeader:!0,header:e.jsx("span",{style:{fontWeight:900,fontSize:30,letterSpacing:"0.03em",background:"linear-gradient(90deg,#ff5cf6,#00ff99,#ffab00,#38d1c4,#ef4444)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",display:"inline-block"},children:"🌈 Rainbow Principles"}),style:{boxShadow:"0 6px 32px 0 #ff5cf666,0 2px 18px 0 #00ff9977",borderRadius:28,background:"rgba(250,230,255,0.96)",border:"2px solid #ff5cf6"},cardStyle:{background:"linear-gradient(108deg, #ffe4fa 60%, #fffcfa 110%)"},tagGradient:"linear-gradient(90deg,#ff5cf6,#00ff99,#ffab00,#38d1c4,#ef4444)"},parameters:{backgroundOverride:"linear-gradient(120deg,#fff7fc 70%,#e6fff9 120%)"}},x={args:{rules:[{title:"Top Level Rule",description:"This rule is expandable and has many levels.",status:"info",tags:["Expandable"],expandable:!0,children:[{title:"Sub Rule 1",description:"First nested rule.",status:"success",tags:["Child"],expandable:!0,children:[{title:"Sub Sub Rule",description:"Second nested rule!",status:"warning",tags:["Grandchild"]}]},{title:"Sub Rule 2",description:"Another nested rule, not expandable.",status:"error",tags:["Child"]}]}],orientation:"vertical",showHeader:!0,header:e.jsx("span",{style:{fontWeight:900,fontSize:26,letterSpacing:"0.06em",background:"linear-gradient(87deg,#ff9800,#00ff99,#8b5cf6)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"🧩 Expandable/Nested Showcase"}),style:{boxShadow:"0 4px 20px #ff980060",borderRadius:24,background:"#1e1e28",border:"2px solid #ff9800"},cardStyle:{background:"linear-gradient(120deg,#1e1e28 80%,#ff980033 120%)"},tagGradient:"linear-gradient(90deg,#ff9800,#8b5cf6,#00ff99)"},parameters:{backgroundOverride:"linear-gradient(132deg,#211e24 60%,#ff9800 240%)"}};var O,D,P;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    rules: sampleRules,
    orientation: 'vertical',
    ruleGap: 20,
    showHeader: true,
    header: <span style={{
      fontWeight: 900,
      fontSize: 30,
      letterSpacing: '0.03em',
      background: 'linear-gradient(90deg,#38d1c4,#8b5cf6,#00ff99,#ef4444)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textShadow: '0 2px 20px #38bdf888, 0 4px 32px #9333ea99',
      display: 'inline-block'
    }}>
        🌟 Community Glow Rules 🌟
      </span>,
    style: {
      boxShadow: '0 12px 40px 0 rgba(0,255,153,0.23), 0 2px 12px 0 #8b5cf6bb',
      borderRadius: 32,
      border: '2px solid #00ff99',
      padding: '4px',
      background: 'rgba(28,20,51,0.98)'
    },
    cardStyle: {
      background: 'linear-gradient(115deg, #181b39 60%, #00ff9940 140%)'
    },
    showIcons: true,
    showTags: true,
    tagGradient: 'linear-gradient(90deg,#00ff99,#8b5cf6)'
  }
}`,...(P=(D=u.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var _,L,M;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    rules: sampleRules,
    orientation: 'horizontal',
    ruleGap: 36,
    showHeader: true,
    header: <span style={{
      fontWeight: 900,
      fontSize: 28,
      letterSpacing: '0.03em',
      background: 'linear-gradient(90deg,#00ff99,#ffab00,#8b5cf6,#ef4444)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      display: 'inline-block'
    }}>
        <span role="img" aria-label="row">↔️</span> Horizontal Glow Rules
      </span>,
    style: {
      boxShadow: '0 8px 24px #ffab0036',
      borderRadius: 36,
      background: 'rgba(40,29,49,0.98)',
      border: '2px solid #ffab00',
      padding: 5
    },
    cardStyle: {
      background: 'linear-gradient(92deg, #ffa72622 70%, #8b5cf620 110%)'
    },
    showIcons: true,
    showTags: true,
    tagGradient: 'linear-gradient(90deg,#ffab00,#00ff99)'
  }
}`,...(M=(L=p.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var A,U,$;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    rules: sampleRules,
    orientation: 'vertical',
    showTags: true,
    tagGradient: 'linear-gradient(90deg,#ff5cf6,#00ff99)',
    customRenderTag: (tag: string) => <span style={{
      display: 'inline-block',
      marginRight: 7,
      marginBottom: 3,
      padding: '2px 11px',
      fontWeight: 700,
      borderRadius: 8,
      background: 'linear-gradient(92deg, #ff5cf6 80%, #00ff99 140%)',
      color: '#fff',
      boxShadow: '0 0 12px #ff5cf688, 0 0 6px #00ff9977',
      letterSpacing: '.04em'
    }}>
        🌈 {tag.toUpperCase()}
      </span>
  }
}`,...($=(U=g.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var K,Y,J;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    rules: sampleRules,
    orientation: 'vertical',
    showHeader: false,
    style: {
      background: 'rgba(22,22,28,0.97)',
      border: '1.5px solid #2f404a',
      borderRadius: 20,
      padding: 6
    },
    cardStyle: {
      background: 'linear-gradient(120deg,#232137 60%,#242b36 110%)'
    },
    showIcons: false,
    showTags: false
  }
}`,...(J=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var Q,X,Z;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    rules: lightGlowRules,
    orientation: 'vertical',
    showHeader: true,
    header: <span style={{
      fontWeight: 900,
      fontSize: 30,
      background: 'linear-gradient(88deg,#38d1c4,#00ff99 90%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }}>
        ✨ Team Whiteboard ✨
      </span>,
    style: {
      boxShadow: '0 8px 24px rgba(56,209,196,0.14)',
      borderRadius: 30,
      background: 'rgba(255,255,255,0.87)',
      border: '2px solid #38d1c4'
    },
    cardStyle: {
      background: 'linear-gradient(92deg, #e6fff9 70%, #38d1c411 120%)'
    },
    tagGradient: 'linear-gradient(90deg,#38d1c4,#00ff99)'
  },
  parameters: {
    backgroundOverride: 'linear-gradient(120deg, #e4f5f1 70%, #ffffff 100%)'
  }
}`,...(Z=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ae,ne;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    rules: gradientRules,
    orientation: 'vertical',
    showHeader: true,
    header: <span style={{
      fontWeight: 900,
      fontSize: 30,
      letterSpacing: '0.03em',
      background: 'linear-gradient(90deg,#ff5cf6,#00ff99,#ffab00,#38d1c4,#ef4444)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      display: 'inline-block'
    }}>
        🌈 Rainbow Principles
      </span>,
    style: {
      boxShadow: '0 6px 32px 0 #ff5cf666,0 2px 18px 0 #00ff9977',
      borderRadius: 28,
      background: 'rgba(250,230,255,0.96)',
      border: '2px solid #ff5cf6'
    },
    cardStyle: {
      background: 'linear-gradient(108deg, #ffe4fa 60%, #fffcfa 110%)'
    },
    tagGradient: 'linear-gradient(90deg,#ff5cf6,#00ff99,#ffab00,#38d1c4,#ef4444)'
  },
  parameters: {
    backgroundOverride: 'linear-gradient(120deg,#fff7fc 70%,#e6fff9 120%)'
  }
}`,...(ne=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var re,te,ie;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    rules: [{
      title: 'Top Level Rule',
      description: 'This rule is expandable and has many levels.',
      status: 'info',
      tags: ['Expandable'],
      expandable: true,
      children: [{
        title: 'Sub Rule 1',
        description: 'First nested rule.',
        status: 'success',
        tags: ['Child'],
        expandable: true,
        children: [{
          title: 'Sub Sub Rule',
          description: 'Second nested rule!',
          status: 'warning',
          tags: ['Grandchild']
        }]
      }, {
        title: 'Sub Rule 2',
        description: 'Another nested rule, not expandable.',
        status: 'error',
        tags: ['Child']
      }]
    }],
    orientation: 'vertical',
    showHeader: true,
    header: <span style={{
      fontWeight: 900,
      fontSize: 26,
      letterSpacing: '0.06em',
      background: 'linear-gradient(87deg,#ff9800,#00ff99,#8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }}>
        🧩 Expandable/Nested Showcase
      </span>,
    style: {
      boxShadow: '0 4px 20px #ff980060',
      borderRadius: 24,
      background: '#1e1e28',
      border: '2px solid #ff9800'
    },
    cardStyle: {
      background: 'linear-gradient(120deg,#1e1e28 80%,#ff980033 120%)'
    },
    tagGradient: 'linear-gradient(90deg,#ff9800,#8b5cf6,#00ff99)'
  },
  parameters: {
    backgroundOverride: 'linear-gradient(132deg,#211e24 60%,#ff9800 240%)'
  }
}`,...(ie=(te=x.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};const Me=["Playground","HorizontalShowcase","CustomTagRender","NoHeaderMinimalist","LightOnWhite","RainbowGradient","NestedAndExpandable"];export{g as CustomTagRender,p as HorizontalShowcase,m as LightOnWhite,x as NestedAndExpandable,b as NoHeaderMinimalist,u as Playground,h as RainbowGradient,Me as __namedExportsOrder,Le as default};
