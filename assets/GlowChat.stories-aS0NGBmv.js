import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as q,r as f}from"./index-D4lIrffr.js";import{G as D}from"./GlowCard-Cw-SdvFf.js";import{G as W}from"./GlowChatBubble-D9ghL29W.js";import{G as E}from"./GlowInput-B8UxI7n2.js";import{s as m}from"./styled-DketRv4I.js";import{B as M}from"./Box-84RDQgna.js";import{k as H}from"./emotion-react.browser.esm-CzyYH6Xe.js";import"./GlowAvatar-BAgRIvgp.js";import"./Avatar-C1UTtoQi.js";import"./generateUtilityClasses-CPRdC64H.js";import"./DefaultPropsProvider-Bcp8l54b.js";import"./createSvgIcon-DyKWnwtn.js";import"./useSlot-aXQ8NPmW.js";import"./useForkRef-zqhjcRVs.js";import"./useTheme-BIUNiYwk.js";import"./extendSxProp-B_2SO387.js";const N=H`
  0%,100% { box-shadow: 0 0 36px #8b5cf642, 0 0 88px 28px #8b5cf644; }
  45% { box-shadow: 0 0 120px 40px #05ffa1aa, 0 0 220px 78px #38bdf866; }
`,z=m(D)({height:"530px",maxWidth:470,width:"100%",display:"flex",flexDirection:"column",borderRadius:38,overflow:"hidden",animation:`${N} 6.9s cubic-bezier(.53,.32,.81,1.2) infinite alternate`,position:"relative"}),A=m("div")({padding:"20px 25px 10px 28px",fontSize:20,fontWeight:900,color:"#fff",background:"linear-gradient(93deg,#8b5cf644 40%,#38bdf850 120%)",letterSpacing:".01em",textShadow:"0 0 14px #38bdf8aa",borderTopLeftRadius:38,borderTopRightRadius:38,borderBottom:"2.5px solid #161b32",zIndex:3,position:"relative",display:"flex",alignItems:"center",justifyContent:"space-between"}),Y=m(M)({flex:1,overflowY:"auto",padding:"15px 24px 16px 24px",display:"flex",flexDirection:"column",gap:9,background:"radial-gradient(ellipse at 26% 74%, #181b39 40%, #38bdf814 90%)",scrollbarWidth:"thin"}),F=m("div")({width:"100%",background:"linear-gradient(120deg,#181b39 60%,#38bdf811 110%)",padding:"11px 22px 14px 20px",borderTop:"2px solid #1e1b4b11",zIndex:2,display:"flex",gap:11,alignItems:"center"}),d=({bubbles:t,header:a="Glow Chat",onSend:o,inputPlaceholder:u="Message…",inputProps:T,style:B,chatStyle:_,footer:I})=>{const[c,g]=q.useState(""),s=f.useRef(null);return f.useEffect(()=>{s.current&&(s.current.scrollTop=s.current.scrollHeight)},[t.length]),e.jsxs(z,{style:B,children:[e.jsx(A,{children:a}),e.jsxs(Y,{ref:s,style:_,children:[t.map((r,V)=>e.jsx(W,{...r},V)),I]}),e.jsx(F,{children:e.jsx(E,{label:u,value:c,onChange:r=>g(r.target.value),onKeyDown:r=>{r.key==="Enter"&&c.trim()&&o&&(o(c.trim()),g(""))},colorVariant:"primary",style:{flex:1},...T})})]})};try{d.displayName="GlowChat",d.__docgenInfo={description:"",displayName:"GlowChat",props:{bubbles:{defaultValue:null,description:"",name:"bubbles",required:!0,type:{name:"GlowChatBubbleProps[]"}},header:{defaultValue:{value:"Glow Chat"},description:"",name:"header",required:!1,type:{name:"ReactNode"}},onSend:{defaultValue:null,description:"",name:"onSend",required:!1,type:{name:"((msg: string) => void) | undefined"}},inputPlaceholder:{defaultValue:{value:"Message…"},description:"",name:"inputPlaceholder",required:!1,type:{name:"string | undefined"}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!1,type:{name:"GlowInputProps | undefined"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},chatStyle:{defaultValue:null,description:"",name:"chatStyle",required:!1,type:{name:"CSSProperties | undefined"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"ReactNode"}}}}}catch{}const R=[{message:"👋 Hello! Welcome to GlowChat.",name:"Sky",avatarSrc:"https://randomuser.me/api/portraits/men/11.jpg",timestamp:"4:33 PM"},{mine:!0,message:"Hi Sky! This looks awesome. 💎",name:"You",avatarSrc:"https://randomuser.me/api/portraits/women/12.jpg",timestamp:"4:34 PM"},{message:"Thanks! Want to try sending a message?",name:"Sky",avatarSrc:"https://randomuser.me/api/portraits/men/11.jpg",timestamp:"4:34 PM"}],le={title:"Components/GlowChat",component:d,parameters:{layout:"centered"},args:{bubbles:R,header:"GlowChat Demo",inputPlaceholder:"Type your message…"}},n={},i={render:t=>{const[a,o]=f.useState(R);return e.jsx(d,{...t,bubbles:a,onSend:u=>o([...a,{mine:!0,message:u,name:"You",avatarSrc:"https://randomuser.me/api/portraits/women/12.jpg",timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}])})}},l={args:{header:null}},p={args:{footer:e.jsx("div",{style:{color:"#a7f6f5",textAlign:"center",marginTop:10},children:"End of chat"})}};var b,h,x;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var y,S,w;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    const [bubbles, setBubbles] = useState(baseBubbles);
    return <GlowChat {...args} bubbles={bubbles} onSend={msg => setBubbles([...bubbles, {
      mine: true,
      message: msg,
      name: 'You',
      avatarSrc: 'https://randomuser.me/api/portraits/women/12.jpg',
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      })
    }])} />;
  }
}`,...(w=(S=i.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var C,v,G;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    header: null
  }
}`,...(G=(v=l.parameters)==null?void 0:v.docs)==null?void 0:G.source}}};var j,P,k;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    footer: <div style={{
      color: '#a7f6f5',
      textAlign: 'center',
      marginTop: 10
    }}>End of chat</div>
  }
}`,...(k=(P=p.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};const pe=["Default","SendMessage","NoHeader","WithFooter"];export{n as Default,l as NoHeader,i as SendMessage,p as WithFooter,pe as __namedExportsOrder,le as default};
