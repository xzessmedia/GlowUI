import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as le}from"./index-D4lIrffr.js";import{G as de}from"./GlowCard-Cw-SdvFf.js";import{G as ce}from"./GlowingButton-BpSJAL0Z.js";import{G as ue}from"./GlowIconButton-DYTUiHIS.js";import{s as $}from"./styled-DketRv4I.js";import{B as K}from"./Box-84RDQgna.js";import{k as pe}from"./emotion-react.browser.esm-CzyYH6Xe.js";import"./Button-DmibqXmy.js";import"./generateUtilityClasses-CPRdC64H.js";import"./DefaultPropsProvider-Bcp8l54b.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-DF_PSzS1.js";import"./ButtonBase-IUfDptLI.js";import"./useTimeout-COwD6Zpp.js";import"./useForkRef-zqhjcRVs.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DcGBhv6q.js";import"./IconButton-jhZesD6s.js";import"./useTheme-BIUNiYwk.js";import"./extendSxProp-B_2SO387.js";const me=pe`
  0%,100% { box-shadow: 0 0 44px 14px #38bdf822, 0 0 130px 64px #05ffa144; }
  55% { box-shadow: 0 0 104px 54px #8b5cf6bb, 0 0 190px 92px #f472b666; }
`,f="'Inter', 'Plus Jakarta Sans', 'Segoe UI', 'Montserrat', 'sans-serif'",fe=$("div")({fontSize:11.8,fontWeight:800,fontFamily:f,color:"#fff",background:"linear-gradient(92deg,#fc46a6 40%,#8b5cf6 120%)",borderRadius:7,padding:"3px 11px 3px 11px",boxShadow:"0 0 8px #fc46a690",letterSpacing:".07em",marginRight:12,textTransform:"uppercase",display:"inline-block"}),ge=$(K)({flex:"0 0 auto",alignSelf:"flex-start",borderRadius:16,overflow:"hidden",boxShadow:"0 0 29px #8b5cf688",marginRight:18,background:"#121128",minWidth:60}),r=({headline:a,subline:b,image:h,ctaLabel:y,ctaHref:x,onCtaClick:Q,badge:w="Ad",colorVariant:v="accent",borderRadius:Y=22,layout:t="horizontal",gradient:ee,animated:S=!0,overlay:ae,onClose:g,dismissible:ne=!1,children:re,style:te,contentStyle:ie})=>{const[oe,se]=le.useState(!1);if(oe)return null;const n=t==="horizontal"||t==="banner"||t==="fullwidth";return e.jsxs(de,{glass:!0,glow:!0,animated:S,borderRadius:Y,gradient:ee||(v==="accent"?"linear-gradient(112deg,#38bdf888 0%,#8b5cf6 60%,#05ffa1 120%)":v==="primary"?"linear-gradient(113deg,#6366f1 40%,#38bdf8 120%)":"linear-gradient(120deg,#f472b6 40%,#9333ea 100%)"),style:{padding:n?"18px 34px 17px 18px":"22px 17px",minHeight:88,display:n?"flex":"block",alignItems:"center",width:t==="fullwidth"?"100%":void 0,position:"relative",animation:S?`${me} 9.2s ease-in-out infinite alternate`:void 0,...te},contentStyle:ie,overlay:ae,children:[ne&&e.jsx(ue,{onClick:()=>{se(!0),g==null||g()},shape:"circle",colorVariant:"accent",style:{position:"absolute",top:12,right:12,zIndex:9,background:"rgba(32,18,58,0.27)"},children:e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:e.jsx("path",{d:"M5.2 5.1l7.7 7.9m0-7.9L5.2 13",stroke:"#fff",strokeWidth:"2.1",strokeLinecap:"round"})})}),h&&e.jsx(ge,{style:{width:n?74:"94%",height:n?74:130},children:e.jsx("img",{src:h,alt:"ad visual",style:{width:"100%",height:"100%",objectFit:"cover",display:"block",borderRadius:16,pointerEvents:"none",boxShadow:"0 0 18px #05ffa1bb"}})}),e.jsxs(K,{sx:{flex:1,minWidth:0,textAlign:n?"left":"center"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9,marginBottom:".11em"},children:[w&&e.jsx(fe,{children:w}),e.jsxs("span",{style:{fontWeight:900,fontSize:20.5,fontFamily:f,letterSpacing:".03em",color:"#fff",textShadow:"0 0 16px #8b5cf688,0 0 2px #05ffa199",textTransform:"uppercase",lineHeight:1.12},children:[" ",a]})]}),b&&e.jsx("div",{style:{fontSize:15.6,fontWeight:600,fontFamily:f,marginTop:2,color:"#05ffa1",opacity:1,textShadow:"0 0 10px #8b5cf644",wordBreak:"break-word",letterSpacing:".01em"},children:b}),re,y&&e.jsx("div",{style:{marginTop:13},children:e.jsx(ce,{onClick:Q,style:{fontWeight:900,fontFamily:f,padding:"10px 30px",fontSize:16.7,borderRadius:31,letterSpacing:".045em",textTransform:"uppercase",boxShadow:"0 0 33px #8b5cf655"},glowIntensity:1.19,...x?{component:"a",href:x,target:"_blank",rel:"noopener noreferrer"}:{},children:y})})]})]})};try{r.displayName="GlowAds",r.__docgenInfo={description:"",displayName:"GlowAds",props:{headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"ReactNode"}},subline:{defaultValue:null,description:"",name:"subline",required:!1,type:{name:"ReactNode"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string | undefined"}},ctaLabel:{defaultValue:null,description:"",name:"ctaLabel",required:!1,type:{name:"ReactNode"}},ctaHref:{defaultValue:null,description:"",name:"ctaHref",required:!1,type:{name:"string | undefined"}},onCtaClick:{defaultValue:null,description:"",name:"onCtaClick",required:!1,type:{name:"(() => void) | undefined"}},badge:{defaultValue:{value:"Ad"},description:"",name:"badge",required:!1,type:{name:"ReactNode"}},colorVariant:{defaultValue:{value:"accent"},description:"",name:"colorVariant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"secondary"'}]}},borderRadius:{defaultValue:{value:"22"},description:"",name:"borderRadius",required:!1,type:{name:"string | number | undefined"}},layout:{defaultValue:{value:"horizontal"},description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"banner"'},{value:'"square"'},{value:'"horizontal"'},{value:'"vertical"'},{value:'"fullwidth"'}]}},gradient:{defaultValue:null,description:"",name:"gradient",required:!1,type:{name:"string | undefined"}},animated:{defaultValue:{value:"true"},description:"",name:"animated",required:!1,type:{name:"boolean | undefined"}},overlay:{defaultValue:null,description:"",name:"overlay",required:!1,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}},dismissible:{defaultValue:{value:"false"},description:"",name:"dismissible",required:!1,type:{name:"boolean | undefined"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},contentStyle:{defaultValue:null,description:"",name:"contentStyle",required:!1,type:{name:"CSSProperties | undefined"}}}}}catch{}const We={title:"Components/GlowAds",component:r,argTypes:{gradient:{control:"text"},borderRadius:{control:{type:"number",min:0,max:60,step:1}},colorVariant:{control:"select",options:["primary","secondary","accent"]},layout:{control:"select",options:["banner","square","horizontal","vertical","fullwidth"]},animated:{control:"boolean"},dismissible:{control:"boolean"}},args:{headline:"Glow up your workflow!",subline:"Try the AI-powered toolkit for visually stunning automation.",image:"https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1000",ctaLabel:"Get started",badge:"Ad",colorVariant:"primary",gradient:void 0,borderRadius:22,layout:"horizontal",animated:!0,dismissible:!1}},i={render:a=>e.jsx(r,{...a})},o={args:{colorVariant:"accent",gradient:"linear-gradient(117deg,#20123a 0%,#05ffa1 60%,#8b5cf6 120%)",badge:"NEON",headline:"Ultra Neon Sale! 🚀",subline:"Save up to 70% on all design tools. Endless glow, infinite style.",image:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000",ctaLabel:"Shop Neon"}},s={args:{dismissible:!0,onClose:()=>alert("Ad closed!"),badge:"NEW",headline:"Dismissible Ad",subline:"This promo can be closed for non-intrusive UX."},render:a=>e.jsx(r,{...a})},l={args:{gradient:"linear-gradient(120deg,#00c6fb 0%,#005bea 100%)",headline:"Blue Ocean",badge:"Premium",colorVariant:"primary",image:"https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1000",ctaLabel:"Learn More",subline:"Explore the new depth of vivid UI. Make users swim in beauty."}},d={args:{layout:"vertical",borderRadius:30,badge:"HOT",colorVariant:"secondary",headline:"Glow Vertically",image:"https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1000",ctaLabel:"Vertical Ad",subline:"Perfect for stories and mobile banners."}},c={args:{headline:"Flexible Messaging",image:"https://images.unsplash.com/photo-1603415526960-f7e0328d8d70?q=80&w=1000",subline:"Plush footers and inline content await.",children:e.jsxs("div",{style:{marginTop:10,color:"#fff",textShadow:"0 0 6px #38bdf8cc",fontWeight:600},children:[e.jsx("b",{children:"Bonus:"})," Includes a ",e.jsx("i",{children:"14-day free trial"})," and an infinite launch effect."]})}},u={args:{layout:"fullwidth",badge:"FULLWIDTH",gradient:"linear-gradient(107deg,#fc46a6 0%,#8b5cf6 55%,#181b39 120%)",colorVariant:"secondary",borderRadius:0,headline:"Massive full-width Glow!",subline:"For landing pages and big banners with impact.",image:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000",ctaLabel:"See more"}},p={args:{layout:"square",badge:"GLITZ",colorVariant:"accent",gradient:"linear-gradient(140deg,#181b39 30%,#05ffa1 110%)",borderRadius:20,headline:"Square Profile",image:"https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1000",subline:"Boxed. Balanced. Beautiful.",ctaLabel:"Square CTA"}},m={args:{layout:"banner",colorVariant:"primary",animated:!0,badge:"DEAL",headline:"Animated Banner",subline:"Pulse and glow to grab attention.",image:"https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1000",ctaLabel:"Banner Button",borderRadius:60}};var q,V,A;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => <GlowAds {...args} />
}`,...(A=(V=i.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var L,B,R;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    colorVariant: 'accent',
    gradient: 'linear-gradient(117deg,#20123a 0%,#05ffa1 60%,#8b5cf6 120%)',
    badge: 'NEON',
    headline: 'Ultra Neon Sale! 🚀',
    subline: 'Save up to 70% on all design tools. Endless glow, infinite style.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000',
    ctaLabel: 'Shop Neon'
  }
}`,...(R=(B=o.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var k,G,j;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    dismissible: true,
    onClose: () => alert('Ad closed!'),
    badge: 'NEW',
    headline: 'Dismissible Ad',
    subline: 'This promo can be closed for non-intrusive UX.'
  },
  render: args => <GlowAds {...args} />
}`,...(j=(G=s.parameters)==null?void 0:G.docs)==null?void 0:j.source}}};var N,T,I;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    gradient: 'linear-gradient(120deg,#00c6fb 0%,#005bea 100%)',
    headline: 'Blue Ocean',
    badge: 'Premium',
    colorVariant: 'primary',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1000',
    ctaLabel: 'Learn More',
    subline: 'Explore the new depth of vivid UI. Make users swim in beauty.'
  }
}`,...(I=(T=l.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var C,F,W;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    layout: 'vertical',
    borderRadius: 30,
    badge: 'HOT',
    colorVariant: 'secondary',
    headline: 'Glow Vertically',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1000',
    ctaLabel: 'Vertical Ad',
    subline: 'Perfect for stories and mobile banners.'
  }
}`,...(W=(F=d.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var E,P,z;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    headline: 'Flexible Messaging',
    image: 'https://images.unsplash.com/photo-1603415526960-f7e0328d8d70?q=80&w=1000',
    subline: 'Plush footers and inline content await.',
    children: <div style={{
      marginTop: 10,
      color: '#fff',
      textShadow: '0 0 6px #38bdf8cc',
      fontWeight: 600
    }}>
        <b>Bonus:</b> Includes a <i>14-day free trial</i> and an infinite launch effect.
      </div>
  }
}`,...(z=(P=c.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var _,D,M;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    layout: 'fullwidth',
    badge: 'FULLWIDTH',
    gradient: 'linear-gradient(107deg,#fc46a6 0%,#8b5cf6 55%,#181b39 120%)',
    colorVariant: 'secondary',
    borderRadius: 0,
    headline: 'Massive full-width Glow!',
    subline: 'For landing pages and big banners with impact.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000',
    ctaLabel: 'See more'
  }
}`,...(M=(D=u.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var U,H,O;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    layout: 'square',
    badge: 'GLITZ',
    colorVariant: 'accent',
    gradient: 'linear-gradient(140deg,#181b39 30%,#05ffa1 110%)',
    borderRadius: 20,
    headline: 'Square Profile',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1000',
    subline: 'Boxed. Balanced. Beautiful.',
    ctaLabel: 'Square CTA'
  }
}`,...(O=(H=p.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var X,Z,J;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    layout: 'banner',
    colorVariant: 'primary',
    animated: true,
    badge: 'DEAL',
    headline: 'Animated Banner',
    subline: 'Pulse and glow to grab attention.',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1000',
    ctaLabel: 'Banner Button',
    borderRadius: 60
  }
}`,...(J=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};const Ee=["Default","NeonAccent","Dismissible","CustomGradient","VerticalLayout","WithChildren","FullwidthShowcase","FancySquare","AnimatedBanner"];export{m as AnimatedBanner,l as CustomGradient,i as Default,s as Dismissible,p as FancySquare,u as FullwidthShowcase,o as NeonAccent,d as VerticalLayout,c as WithChildren,Ee as __namedExportsOrder,We as default};
