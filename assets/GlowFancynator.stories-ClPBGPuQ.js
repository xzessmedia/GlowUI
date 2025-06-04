import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./index-D4lIrffr.js";import{s as q}from"./styled-BHBknfHf.js";import{B as N}from"./Box-DtklFzPK.js";import{k as w}from"./emotion-react.browser.esm-BCZ8YnH8.js";import{B as z}from"./Button-KpGnCCbr.js";import{A as E}from"./Avatar-BehKZVe7.js";import"./styled-E20cg9_9.js";import"./generateUtilityClasses-CPRdC64H.js";import"./useTheme-DpPGzAox.js";import"./extendSxProp-CmprK5U1.js";import"./DefaultPropsProvider-CvIgHTDT.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-DF_PSzS1.js";import"./ButtonBase-C51aHjoN.js";import"./useTimeout-COwD6Zpp.js";import"./useForkRef-zqhjcRVs.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Dxfyvpqy.js";import"./createSvgIcon-BT-PT3Kt.js";import"./useSlot-aXQ8NPmW.js";const x=w`
  0%, 100% { 
    box-shadow: 0 0 40px 10px #8b5cf666, 0 0 100px 40px #38bdf833;
    filter: saturate(1.2) contrast(1.1);
  }
  33% { 
    box-shadow: 0 0 80px 20px #05ffa177, 0 0 140px 80px #9333ea44;
    filter: saturate(1.5) contrast(1.2);
  }
  66% { 
    box-shadow: 0 0 60px 15px #f472b688, 0 0 120px 60px #6366f133;
    filter: saturate(1.3) contrast(1.15);
  }
`,h=w`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,v=w`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-5px) rotate(0.5deg); }
  75% { transform: translateY(5px) rotate(-0.5deg); }
`,W=q(N)(({$intensity:e=1,$color:i="rainbow",$animation:a="medium",$type:s="auto"})=>{const o={primary:"linear-gradient(90deg, #6366f1 0%, #38bdf8 50%, #8b5cf6 100%)",secondary:"linear-gradient(90deg, #f472b6 0%, #9333ea 50%, #8b5cf6 100%)",accent:"linear-gradient(90deg, #05ffa1 0%, #38bdf8 50%, #6366f1 100%)",rainbow:"linear-gradient(90deg, #f472b6 0%, #9333ea 20%, #8b5cf6 40%, #6366f1 60%, #38bdf8 80%, #05ffa1 100%)"},t={subtle:"8s",medium:"5s",wild:"3s"},n={position:"relative",zIndex:1,animation:`${v} ${t[a]} ease-in-out infinite`,transition:"all 0.3s ease",boxShadow:`0 0 ${30*e}px ${e*8}px #8b5cf644`,filter:`saturate(${1+e*.3}) contrast(${1+e*.1})`,overflow:"visible","&:hover":{transform:"scale(1.03)",boxShadow:`0 0 ${50*e}px ${e*15}px #05ffa166`,filter:`saturate(${1.5+e*.3}) contrast(${1.2+e*.1})`}},l={background:o[i],backgroundSize:"200% 200%",backgroundClip:"text",color:"transparent",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",textShadow:`0 0 ${10*e}px #8b5cf6bb`,fontWeight:"bold",letterSpacing:"0.02em",animation:`${h} ${t[a]} ease infinite, ${v} ${t[a]} ease-in-out infinite`},f={borderRadius:20,padding:e*.2+"rem",background:o[i],backgroundSize:"200% 200%",animation:`${h} ${t[a]} ease infinite, ${x} ${t[a]} ease-in-out infinite`,"& img":{borderRadius:16,width:"100%",height:"auto",display:"block"}},g={padding:e*.5+"rem",borderRadius:25,background:"linear-gradient(135deg, #181b3955 55%, #38bdf811 100%)",backgroundSize:"200% 200%",animation:`${x} ${t[a]} ease-in-out infinite`,border:"2px solid transparent",borderImage:o[i],borderImageSlice:1};return s==="text"?{...n,...l}:s==="image"?{...n,...f}:s==="component"?{...n,...g}:{...n,animation:`${x} ${t[a]} ease-in-out infinite`,borderRadius:15,"& img":{maxWidth:"100%",borderRadius:12},"& h1, & h2, & h3, & h4, & h5, & h6, & p":{color:"#fff",textShadow:`0 0 ${6*e}px #8b5cf6bb`},"& button, & a":{position:"relative",zIndex:2,transition:"all 0.2s ease","&:hover":{transform:"scale(1.05) translateY(-2px)",boxShadow:`0 0 ${20*e}px ${e*5}px #05ffa166`}}}}),y=({children:e,intensity:i=1,color:a="rainbow",animation:s="medium",type:o="auto",className:t,style:n})=>{const[l,f]=b.useState(!1),g=b.useRef(null);return b.useEffect(()=>{f(!0)},[o]),r.jsx(W,{ref:g,$intensity:i,$color:a,$animation:s,$type:o,className:t,style:{opacity:l?1:0,transform:l?"translateY(0)":"translateY(20px)",transition:"opacity 0.5s ease, transform 0.5s ease",...n},children:e})};try{y.displayName="GlowFancynator",y.__docgenInfo={description:"",displayName:"GlowFancynator",props:{intensity:{defaultValue:{value:"1"},description:"",name:"intensity",required:!1,type:{name:"number | undefined"}},color:{defaultValue:{value:"rainbow"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"secondary"'},{value:'"accent"'},{value:'"rainbow"'}]}},animation:{defaultValue:{value:"medium"},description:"",name:"animation",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"subtle"'},{value:'"medium"'},{value:'"wild"'}]}},type:{defaultValue:{value:"auto"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"text"'},{value:'"image"'},{value:'"component"'},{value:'"auto"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}}}}}catch{}const de={title:"Ultra Fancy/GlowFancynator",component:y,argTypes:{intensity:{control:{type:"range",min:.5,max:3,step:.1}},color:{control:"radio",options:["primary","secondary","accent","rainbow"]},animation:{control:"radio",options:["subtle","medium","wild"]},type:{control:"radio",options:["text","image","component","auto"]}},args:{intensity:1,color:"rainbow",animation:"medium",type:"auto",children:"Make anything glow! ✨"}},d={args:{type:"text",children:"Ultra-glow FANCY text",color:"accent",intensity:1.2,animation:"wild"}},c={args:{type:"component",color:"primary",animation:"medium",intensity:1.5,children:r.jsx(z,{variant:"contained",children:"Glowing Button"})}},m={args:{type:"image",intensity:1.7,color:"rainbow",animation:"wild",children:r.jsx(E,{src:"https://randomuser.me/api/portraits/men/40.jpg",alt:"Fancy Avatar",sx:{width:120,height:120}})}},p={args:{type:"component",intensity:2.3,color:"secondary",animation:"subtle",children:r.jsxs("div",{children:[r.jsx("h3",{children:"Glowing Card"}),r.jsx("p",{children:"This entire card is glowing and beautiful. 🌈"})]})}},u={args:{type:"auto",intensity:1,color:"rainbow",animation:"medium",children:r.jsx("span",{children:"Let me auto-glow and guess!"})}};var S,G,k;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    type: 'text',
    children: 'Ultra-glow FANCY text',
    color: 'accent',
    intensity: 1.2,
    animation: 'wild'
  }
}`,...(k=(G=d.parameters)==null?void 0:G.docs)==null?void 0:k.source}}};var j,B,C;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    type: 'component',
    color: 'primary',
    animation: 'medium',
    intensity: 1.5,
    children: <Button variant="contained">Glowing Button</Button>
  }
}`,...(C=(B=c.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var F,_,A;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    type: 'image',
    intensity: 1.7,
    color: 'rainbow',
    animation: 'wild',
    children: <Avatar src="https://randomuser.me/api/portraits/men/40.jpg" alt="Fancy Avatar" sx={{
      width: 120,
      height: 120
    }} />
  }
}`,...(A=(_=m.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var I,R,T;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    type: 'component',
    intensity: 2.3,
    color: 'secondary',
    animation: 'subtle',
    children: <div>
        <h3>Glowing Card</h3>
        <p>This entire card is glowing and beautiful. 🌈</p>
      </div>
  }
}`,...(T=(R=p.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var V,Y,$;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    type: 'auto',
    intensity: 1,
    color: 'rainbow',
    animation: 'medium',
    children: <span>Let me auto-glow and guess!</span>
  }
}`,...($=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};const ce=["TextGlow","ButtonGlow","ImageGlow","ComponentGlow","AutoType"];export{u as AutoType,c as ButtonGlow,p as ComponentGlow,m as ImageGlow,d as TextGlow,ce as __namedExportsOrder,de as default};
