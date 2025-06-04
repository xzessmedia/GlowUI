import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as w}from"./index-D4lIrffr.js";import{G as ge}from"./GlowCard-Cw-SdvFf.js";import{s as be}from"./styled-DketRv4I.js";import{B as C}from"./Box-84RDQgna.js";import{k as ye}from"./emotion-react.browser.esm-CzyYH6Xe.js";import"./generateUtilityClasses-CPRdC64H.js";import"./useTheme-BIUNiYwk.js";import"./extendSxProp-B_2SO387.js";const b="'JetBrains Mono', 'Fira Mono', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', monospace",xe=ye`
  0%,100% { box-shadow: 0 0 44px 8px #8b5cf655, 0 0 120px 44px #38bdf833; }
  45% { box-shadow: 0 0 120px 44px #05ffa1bb, 0 0 180px 74px #8b5cf644; }
`,he=be(ge)(({animated:e})=>({position:"relative",background:"radial-gradient(ellipse at 25% 0%, #181b39 50%, #38bdf822 100%)",fontSize:15.6,fontFamily:b,borderRadius:21,boxShadow:"0 0 60px 18px #8b5cf633, 0 0 120px 54px #38bdf844",padding:0,overflow:"auto",margin:"1.5em 0",lineHeight:1.7,animation:e?`${xe} 6.5s cubic-bezier(.53,.32,.81,1.2) infinite alternate`:void 0,color:"#f1f5f9",maxWidth:"100%",fontWeight:500,wordBreak:"break-word"})),Se=(e,oe)=>`<span>${e.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</span>`,y=({code:e,language:oe="js",title:x,showCopy:ne=!0,borderRadius:o=21,colorVariant:a="accent",animated:te=!0,fontSize:se=15.6,maxHeight:ie=400,lineNumbers:le=!1,style:de,contentStyle:ce})=>{const ue=w.useRef(null),[n,h]=w.useState(!1),me=Se(e),pe=e.split(`
`).length,fe=()=>{navigator.clipboard.writeText(e),h(!0),setTimeout(()=>h(!1),1350)};return r.jsxs(he,{style:{borderRadius:o,...de},animated:te,gradient:a==="primary"?"linear-gradient(111deg,#6366f1df 22%,#38bdf866 143%)":a==="secondary"?"linear-gradient(115deg,#f472b6bb 8%,#8b5cf6 122%)":"linear-gradient(108deg,#181b3999 0%,#05ffa1 140%)",contentStyle:{...ce,padding:0},children:[x&&r.jsx(C,{sx:{px:2.8,py:1.2,background:a==="primary"?"#6366f1":a==="secondary"?"#f472b6":"#05ffa1",fontWeight:900,fontSize:16,fontFamily:"'Inter', 'Plus Jakarta Sans', 'Segoe UI', sans-serif",color:a==="accent"?"#20123a":"#fff",letterSpacing:".045em",textTransform:"uppercase",borderTopLeftRadius:o,borderTopRightRadius:o},children:x}),r.jsxs(C,{sx:{position:"relative",width:"100%"},children:[ne&&r.jsx("button",{"aria-label":n?"Copied!":"Copy code",onClick:fe,style:{position:"absolute",top:9,right:12,zIndex:2,fontWeight:700,fontSize:12.8,padding:"3.7px 10px",borderRadius:12,color:n?"#20123a":"#fff",background:n?"linear-gradient(96deg,#05ffa1 50%,#38bdf8 120%)":"linear-gradient(110deg,#6366f166 40%,#181b3944 130%)",border:"none",boxShadow:"0 0 12px #8b5cf655",cursor:"pointer",transition:"background .15s, color .11s",fontFamily:"'Inter', 'Plus Jakarta Sans', 'Segoe UI', sans-serif",letterSpacing:".02em"},children:n?"Copied ✔":"Copy"}),r.jsxs("pre",{ref:ue,style:{margin:0,fontFamily:b,background:"none",border:"none",borderRadius:o,padding:"22px 21px 23px 21px",fontSize:se,maxHeight:ie,overflow:"auto",minWidth:0,boxShadow:"none",display:"flex",gap:0},children:[le&&r.jsx("code",{style:{textAlign:"right",userSelect:"none",color:"#38bdf877",paddingRight:"1.6em",fontStyle:"normal",fontFamily:b,fontVariantNumeric:"tabular-nums",fontWeight:600},children:Array.from({length:pe},(Ce,S)=>r.jsx("div",{style:{lineHeight:1.7},children:S+1},S))}),r.jsx("code",{style:{minWidth:0,width:"100%",display:"block",fontFamily:b},dangerouslySetInnerHTML:{__html:me}})]})]})]})};try{y.displayName="GlowCode",y.__docgenInfo={description:"",displayName:"GlowCode",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},language:{defaultValue:{value:"js"},description:"",name:"language",required:!1,type:{name:"string | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},showCopy:{defaultValue:{value:"true"},description:"",name:"showCopy",required:!1,type:{name:"boolean | undefined"}},borderRadius:{defaultValue:{value:"21"},description:"",name:"borderRadius",required:!1,type:{name:"string | number | undefined"}},colorVariant:{defaultValue:{value:"accent"},description:"",name:"colorVariant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"secondary"'},{value:'"accent"'}]}},animated:{defaultValue:{value:"true"},description:"",name:"animated",required:!1,type:{name:"boolean | undefined"}},fontSize:{defaultValue:{value:"15.6"},description:"",name:"fontSize",required:!1,type:{name:"string | number | undefined"}},maxHeight:{defaultValue:{value:"400"},description:"",name:"maxHeight",required:!1,type:{name:"string | number | undefined"}},lineNumbers:{defaultValue:{value:"false"},description:"",name:"lineNumbers",required:!1,type:{name:"boolean | undefined"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},contentStyle:{defaultValue:null,description:"",name:"contentStyle",required:!1,type:{name:"CSSProperties | undefined"}}}}}catch{}const ae=`
function greet(name) {
  return 'Hello, ' + name + '!';
}
console.log(greet('World'));`.trim(),Ge={title:"Components/GlowCode",component:y,argTypes:{colorVariant:{control:"radio",options:["primary","secondary","accent"]},borderRadius:{control:{type:"number",min:0,max:40}},animated:{control:"boolean"},showCopy:{control:"boolean"},lineNumbers:{control:"boolean"},fontSize:{control:{type:"number",min:10,max:40}},maxHeight:{control:{type:"number",min:100,max:800}},title:{control:"text"}},args:{code:ae,language:"js",showCopy:!0,colorVariant:"accent",animated:!0,borderRadius:21,fontSize:16,maxHeight:400,lineNumbers:!1,title:"JavaScript Example"}},t={},s={args:{lineNumbers:!0,title:"Line Numbers Enabled"}},i={args:{colorVariant:"secondary",title:"Secondary Theme",showCopy:!1}},l={args:{animated:!1,title:"No Animation"}},d={args:{borderRadius:3,title:"Rounded Corners: 3px"}},c={args:{fontSize:26,title:"Huge Font"}},u={args:{maxHeight:600,code:ae+`
`.repeat(30)+"// ...many lines..."}},m={args:{colorVariant:"accent",animated:!0,borderRadius:30,fontSize:18,title:"Electric Accent",code:`const ultra = "⚡️ Ultra vibrant! ⚡️";
alert(ultra);`}},p={args:{colorVariant:"primary",animated:!0,borderRadius:40,fontSize:20,title:"Neon Party!",code:['const neon = ["#05FFA1", "#38BDF8", "#F472B6"];',"neon.forEach(color => {","  document.body.style.background = color;","});",'console.log("Ultra Glow 🌈");'].join(`
`)}},f={args:{colorVariant:"secondary",animated:!0,borderRadius:12,fontSize:14,title:"Gradient Flex",code:`body {
  background: radial-gradient(ellipse at top, #05ffa1 0%, #6366f1 100%);
  color: #fff;
}`}},g={args:{lineNumbers:!0,showCopy:!0,animated:!0,borderRadius:21,colorVariant:"primary",fontSize:18,maxHeight:500,title:"🚀 All Features Demo",code:["function wow(feature) {","  return `Glow: ${feature}!`;","}",'console.log(wow("Everything"));'].join(`
`)}};var F,v,R;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(R=(v=t.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var N,V,z;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    lineNumbers: true,
    title: 'Line Numbers Enabled'
  }
}`,...(z=(V=s.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var j,k,A;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    colorVariant: 'secondary',
    title: 'Secondary Theme',
    showCopy: false
  }
}`,...(A=(k=i.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var G,E,H;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    animated: false,
    title: 'No Animation'
  }
}`,...(H=(E=l.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var _,q,T;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    borderRadius: 3,
    title: 'Rounded Corners: 3px'
  }
}`,...(T=(q=d.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var W,B,L;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    fontSize: 26,
    title: 'Huge Font'
  }
}`,...(L=(B=c.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var P,U,I;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    maxHeight: 600,
    code: sampleCode + '\\n'.repeat(30) + '// ...many lines...'
  }
}`,...(I=(U=u.parameters)==null?void 0:U.docs)==null?void 0:I.source}}};var D,M,J;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    colorVariant: 'accent',
    animated: true,
    borderRadius: 30,
    fontSize: 18,
    title: 'Electric Accent',
    code: 'const ultra = "⚡️ Ultra vibrant! ⚡️";\\nalert(ultra);'
  }
}`,...(J=(M=m.parameters)==null?void 0:M.docs)==null?void 0:J.source}}};var $,O,K;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    colorVariant: 'primary',
    animated: true,
    borderRadius: 40,
    fontSize: 20,
    title: 'Neon Party!',
    code: ['const neon = ["#05FFA1", "#38BDF8", "#F472B6"];', 'neon.forEach(color => {', "  document.body.style.background = color;", '});', 'console.log("Ultra Glow 🌈");'].join('\\n')
  }
}`,...(K=(O=p.parameters)==null?void 0:O.docs)==null?void 0:K.source}}};var Q,X,Y;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    colorVariant: 'secondary',
    animated: true,
    borderRadius: 12,
    fontSize: 14,
    title: 'Gradient Flex',
    code: 'body {\\n  background: radial-gradient(ellipse at top, #05ffa1 0%, #6366f1 100%);\\n  color: #fff;\\n}'
  }
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    lineNumbers: true,
    showCopy: true,
    animated: true,
    borderRadius: 21,
    colorVariant: 'primary',
    fontSize: 18,
    maxHeight: 500,
    title: '🚀 All Features Demo',
    code: ['function wow(feature) {', '  return \`Glow: \${feature}!\`;', '}', 'console.log(wow("Everything"));'].join('\\n')
  }
}`,...(re=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};const Ee=["Default","WithLineNumbers","Secondary","NotAnimated","CustomBorderRadius","ExtraLargeFont","TallCode","UltraAccent","NeonParty","GradientShowcase","AllFeatures"];export{g as AllFeatures,d as CustomBorderRadius,t as Default,c as ExtraLargeFont,f as GradientShowcase,p as NeonParty,l as NotAnimated,i as Secondary,u as TallCode,m as UltraAccent,s as WithLineNumbers,Ee as __namedExportsOrder,Ge as default};
