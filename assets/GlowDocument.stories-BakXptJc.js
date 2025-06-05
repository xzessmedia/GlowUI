import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{G as R}from"./GlowCard-Cw-SdvFf.js";import{G as W}from"./GlowingButton-C1yPZkMI.js";import{D as _}from"./Download-Dd4QXTxo.js";import{s as u}from"./styled-DketRv4I.js";import"./Box-84RDQgna.js";import"./generateUtilityClasses-CPRdC64H.js";import"./index-D4lIrffr.js";import"./useTheme-BIUNiYwk.js";import"./extendSxProp-B_2SO387.js";import"./emotion-react.browser.esm-CzyYH6Xe.js";import"./Button-DmibqXmy.js";import"./DefaultPropsProvider-Bcp8l54b.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-DF_PSzS1.js";import"./ButtonBase-IUfDptLI.js";import"./useTimeout-COwD6Zpp.js";import"./useForkRef-zqhjcRVs.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DcGBhv6q.js";import"./createSvgIcon-DyKWnwtn.js";const B=u("div")({position:"absolute",bottom:22,right:30,zIndex:20,display:"flex",flexDirection:"column",gap:12}),P=u("div")({padding:"38px 46px 38px 46px",fontSize:19,lineHeight:1.74,color:"#fff",background:"rgba(35, 45, 97, 0.30)",borderRadius:17,boxShadow:"0 0 68px 0 #6366f180, 0 0 120px 32px #38bdf855, 0 0 0 1.5px #fff1",transition:"box-shadow 0.2s",position:"relative",overflow:"auto"}),U=u("h1")({fontWeight:900,fontSize:2.15*19,margin:"0 0 18px 0",background:"linear-gradient(91deg,#8b5cf6 30%,#38bdf8 70%,#f472b6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",letterSpacing:.01,textShadow:"0 5px 22px #38bdf866, 0 2px 14px #8b5cf644"}),H=u("h2")({fontWeight:700,fontSize:1.35*19,margin:"24px 0 8px 0",color:"#38bdf8",letterSpacing:.01,textShadow:"0 2px 8px #8b5cf6cc"});function I(e,r,i="glowdoc"){let t;switch(r){case"txt":t=new Blob([e],{type:"text/plain"});break;case"md":t=new Blob([e],{type:"text/markdown"});break;case"docx":t=new Blob([e],{type:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"});break;case"pdf":t=new Blob([e],{type:"application/pdf"});break;default:t=new Blob([e],{type:"application/octet-stream"});break}const a=document.createElement("a");a.href=URL.createObjectURL(t),a.download=`${i}.${r}`,a.click()}const g={pdf:"PDF",docx:"Word",md:"MD",txt:"TXT"},m=({children:e,title:r,subtitle:i,gradient:t,glass:a=!0,glow:V=!0,animated:q=!0,borderRadius:G=38,exportFab:N=!0,exportFormats:T=["pdf","docx","md","txt"],exportData:z,onExport:c,style:L,cardProps:j={},fabPosition:C})=>{const F=typeof e=="string"?e:z||(()=>{var o,l,f;try{return((f=(l=(o=e==null?void 0:e.props)==null?void 0:o.children)==null?void 0:l.toString)==null?void 0:f.call(l))||"Glow Document"}catch{return"Glow Document"}})();return n.jsxs(R,{gradient:t,glass:a,glow:V,animated:q,borderRadius:G,style:{minHeight:220,minWidth:340,maxWidth:900,margin:"0 auto",position:"relative",...L},...j,children:[r&&n.jsx(U,{children:r}),i&&n.jsx(H,{children:i}),n.jsx(P,{children:e}),N&&n.jsx(B,{style:C,children:T.map(o=>n.jsxs(W,{colorVariant:"secondary",size:"small",glowIntensity:1.25,onClick:()=>(c==null?void 0:c(o))??I(F,o),style:{minWidth:75,fontWeight:800,fontSize:16},title:`Download as ${g[o]}`,children:[n.jsx(_,{style:{fontSize:18,marginRight:6}}),g[o]]},o))})]})};try{m.displayName="GlowDocument",m.__docgenInfo={description:"",displayName:"GlowDocument",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"ReactNode"}},gradient:{defaultValue:null,description:"",name:"gradient",required:!1,type:{name:"string | undefined"}},glass:{defaultValue:{value:"true"},description:"",name:"glass",required:!1,type:{name:"boolean | undefined"}},glow:{defaultValue:{value:"true"},description:"",name:"glow",required:!1,type:{name:"boolean | undefined"}},animated:{defaultValue:{value:"true"},description:"",name:"animated",required:!1,type:{name:"boolean | undefined"}},borderRadius:{defaultValue:{value:"38"},description:"",name:"borderRadius",required:!1,type:{name:"string | number | undefined"}},exportFab:{defaultValue:{value:"true"},description:"",name:"exportFab",required:!1,type:{name:"boolean | undefined"}},exportFormats:{defaultValue:{value:"['pdf', 'docx', 'md', 'txt']"},description:"",name:"exportFormats",required:!1,type:{name:"GlowDocumentFormat[] | undefined"}},exportData:{defaultValue:null,description:"",name:"exportData",required:!1,type:{name:"string | undefined"}},onExport:{defaultValue:null,description:"",name:"onExport",required:!1,type:{name:"((fmt: GlowDocumentFormat) => void) | undefined"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},cardProps:{defaultValue:{value:"{}"},description:"",name:"cardProps",required:!1,type:{name:"any"}},fabPosition:{defaultValue:null,description:"",name:"fabPosition",required:!1,type:{name:"CSSProperties | undefined"}}}}}catch{}const M=`
# Glowing Markdown Document

This is a **vibrant story example** for the GlowDocument component. 🎉

- Uses different headers and content
- Code: \`console.log("glow!")\`
- [Links look neon!](#)

> Fancy blockquotes shimmer in the dark.

## Neon Table
| Name   | Value |
| ------ | ----- |
| Alice  | 80    |
| Bob    | 95    |
| Clara  | 70    |
`,ue={title:"Ultra Fancy/GlowDocument",component:m,args:{value:M,language:"markdown",glow:!0,fontSize:19,showLineNumbers:!1},argTypes:{value:{control:"text"},language:{control:"select",options:["markdown","typescript","tsx","javascript","python","text"]},glow:{control:"boolean"},fontSize:{control:"number",min:10,max:38},showLineNumbers:{control:"boolean"}}},s={args:{}},p={args:{value:`/** Ultra purple glowing typescript example */
export const answer:number = 42;
console.log(answer);`,language:"typescript",glow:!0,showLineNumbers:!0,fontSize:17},parameters:{docs:{description:{story:"Typescript code with electric blue and purple glow."}}}},d={args:{value:"npm run ultra-glow",language:"text",glow:!0,showLineNumbers:!1,fontSize:21},parameters:{docs:{description:{story:"Looks like a glowy terminal command."}}}};var x,w,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {}
}`,...(b=(w=s.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var y,h,k;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    value: \`/** Ultra purple glowing typescript example */\\nexport const answer:number = 42;\\nconsole.log(answer);\`,
    language: 'typescript',
    glow: true,
    showLineNumbers: true,
    fontSize: 17
  },
  parameters: {
    docs: {
      description: {
        story: 'Typescript code with electric blue and purple glow.'
      }
    }
  }
}`,...(k=(h=p.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var S,v,D;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    value: 'npm run ultra-glow',
    language: 'text',
    glow: true,
    showLineNumbers: false,
    fontSize: 21
  },
  parameters: {
    docs: {
      description: {
        story: 'Looks like a glowy terminal command.'
      }
    }
  }
}`,...(D=(v=d.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};const ce=["NeonMarkdown","TypeScriptCode","RetroTerminal"];export{s as NeonMarkdown,d as RetroTerminal,p as TypeScriptCode,ce as __namedExportsOrder,ue as default};
