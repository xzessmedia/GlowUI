import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as s,R as O}from"./index-D4lIrffr.js";import{G as j}from"./GlowIconButton-DYTUiHIS.js";import{s as y}from"./styled-DketRv4I.js";import{B as I}from"./Box-84RDQgna.js";import{k as Y}from"./emotion-react.browser.esm-CzyYH6Xe.js";import"./IconButton-jhZesD6s.js";import"./generateUtilityClasses-CPRdC64H.js";import"./DefaultPropsProvider-Bcp8l54b.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-DF_PSzS1.js";import"./ButtonBase-IUfDptLI.js";import"./useTimeout-COwD6Zpp.js";import"./useForkRef-zqhjcRVs.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DcGBhv6q.js";import"./useTheme-BIUNiYwk.js";import"./extendSxProp-B_2SO387.js";const J=Y`
  0%,100% { box-shadow: 0 0 64px 24px #8b5cf655, 0 0 110px 56px #05ffa144; }
  50% { box-shadow: 0 0 120px 45px #38bdf8bb, 0 0 180px 84px #8b5cf677; }
`,K=y("div")({borderRadius:26,overflow:"hidden",position:"relative",boxShadow:"0 0 44px 13px #05ffa155",background:"linear-gradient(120deg,#181b39 60%,#05ffa144 110%)",minHeight:220,display:"flex",alignItems:"center",justifyContent:"center",animation:`${J} 7s infinite alternate`,width:"100%",userSelect:"none"}),Q=y("div")({position:"absolute",bottom:17,left:0,width:"100%",display:"flex",justifyContent:"center",gap:10,zIndex:6}),Z=y("button")(({active:r})=>({width:r?16:11,height:r?16:11,borderRadius:"50%",background:r?"linear-gradient(115deg,#05ffa1 30%,#38bdf8 80%)":"linear-gradient(115deg,#38bdf866 30%,#8b5cf655 120%)",border:"none",outline:r?"2px solid #8b5cf6":"none",boxShadow:r?"0 0 10px #8b5cf6bb, 0 0 20px #05ffa1a3":"0 0 4px #05ffa155",cursor:"pointer",transition:"all .16s"})),w=({slides:r,autoplay:x=!1,interval:v=3400,loop:S=!0,showIndicators:W=!0,showArrows:z=!0,colorVariant:C="accent",radius:i=26,height:R=310,onSlideChange:h,style:H,contentStyle:U})=>{const[n,d]=s.useState(0),k=s.useRef(),l=r.map(e=>typeof e=="string"?{src:e,type:"image"}:O.isValidElement(e)?{node:e,type:"custom"}:e),a=l.length;s.useEffect(()=>{if(x&&a>1)return k.current=window.setTimeout(()=>{d(e=>(e+1)%a)},v),()=>clearTimeout(k.current)},[x,v,n,a]),s.useEffect(()=>{h&&h(n)},[n,h]);const b=()=>d(e=>e<a-1?e+1:S?0:e),g=()=>d(e=>e>0?e-1:S?a-1:e);s.useEffect(()=>{const e=t=>{t.key==="ArrowRight"&&b(),t.key==="ArrowLeft"&&g()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[a]);const c=s.useRef(null),X=e=>{c.current={x:e.touches[0].clientX,y:e.touches[0].clientY}},$=e=>{if(!c.current)return;const t=e.changedTouches[0].clientX-c.current.x;Math.abs(t)>40&&(t>0?g():b()),c.current=null},D=e=>e.type==="custom"?e.node:e.type==="video"?o.jsx("video",{src:e.src,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:i}}):o.jsx("img",{src:e.src,alt:e.alt||"",style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:i},draggable:!1});return o.jsx(K,{style:{borderRadius:i,height:R,...H},children:o.jsxs(I,{sx:{width:"100%",height:R,position:"relative",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"},style:U,onTouchStart:X,onTouchEnd:$,children:[D(l[n]),l[n].caption&&o.jsx(I,{sx:{position:"absolute",left:0,bottom:0,width:"100%",fontSize:18,fontWeight:700,color:"#fff",background:"linear-gradient(135deg,#181b398c 25%,#38bdf844 95%)",px:3,py:2,textShadow:"0 0 12px #8b5cf666",borderBottomLeftRadius:i,borderBottomRightRadius:i},children:l[n].caption}),z&&a>1&&o.jsxs(o.Fragment,{children:[o.jsx(j,{"aria-label":"Previous slide",onClick:g,style:{position:"absolute",left:13,top:"calc(50% - 23px)",zIndex:7,border:"none",background:"#1b1838ee"},colorVariant:C,children:o.jsx("svg",{height:"23",width:"23",viewBox:"0 0 23 23",fill:"none",children:o.jsx("path",{d:"M16 2.5 7.8 11.5 16 20.5",stroke:"#05ffa1",strokeWidth:"2.1",strokeLinecap:"round"})})}),o.jsx(j,{"aria-label":"Next slide",onClick:b,style:{position:"absolute",right:13,top:"calc(50% - 23px)",zIndex:7,border:"none",background:"#1b1838ee"},colorVariant:C,children:o.jsx("svg",{height:"23",width:"23",viewBox:"0 0 23 23",fill:"none",children:o.jsx("path",{d:"M7 2.5l8.2 9-8.2 9",stroke:"#05ffa1",strokeWidth:"2.1",strokeLinecap:"round"})})})]}),W&&a>1&&o.jsx(Q,{children:l.map((e,t)=>o.jsx(Z,{active:t===n,"aria-label":t===n?"Current slide":`Go to slide ${t+1}`,tabIndex:0,onClick:()=>d(t)},t))})]})})};try{w.displayName="GlowSlideshow",w.__docgenInfo={description:"",displayName:"GlowSlideshow",props:{slides:{defaultValue:null,description:"",name:"slides",required:!0,type:{name:"(ReactNode | GlowSlideshowSlide)[]"}},autoplay:{defaultValue:{value:"false"},description:"",name:"autoplay",required:!1,type:{name:"boolean | undefined"}},interval:{defaultValue:{value:"3400"},description:"",name:"interval",required:!1,type:{name:"number | undefined"}},loop:{defaultValue:{value:"true"},description:"",name:"loop",required:!1,type:{name:"boolean | undefined"}},showIndicators:{defaultValue:{value:"true"},description:"",name:"showIndicators",required:!1,type:{name:"boolean | undefined"}},showArrows:{defaultValue:{value:"true"},description:"",name:"showArrows",required:!1,type:{name:"boolean | undefined"}},colorVariant:{defaultValue:{value:"accent"},description:"",name:"colorVariant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"secondary"'},{value:'"accent"'}]}},radius:{defaultValue:{value:"26"},description:"",name:"radius",required:!1,type:{name:"string | number | undefined"}},height:{defaultValue:{value:"310"},description:"",name:"height",required:!1,type:{name:"string | number | undefined"}},onSlideChange:{defaultValue:null,description:"",name:"onSlideChange",required:!1,type:{name:"((idx: number) => void) | undefined"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},contentStyle:{defaultValue:null,description:"",name:"contentStyle",required:!1,type:{name:"CSSProperties | undefined"}}}}}catch{}const F=[{src:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",caption:"🌄 Mountain Sunrise — Intense Purple Glow",glowColor:"#8b5cf6"},{src:"https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600",caption:"🌲 Enchanted Forest — Emerald Shine",glowColor:"#05ffa1"},{src:"https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=600",caption:"🏙️ City at Night — Electric Cyber Blue",glowColor:"#38bdf8"},{src:"https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600",caption:"🌅 Candy Clouds — Bubblegum Sunset",glowColor:"#f472b6"}],we={title:"Ultra Fancy/GlowSlideshow",component:w,args:{slides:F,autoPlay:!0,interval:2200,glow:!0,borderRadius:30},argTypes:{slides:{control:!1},autoPlay:{control:"boolean"},interval:{control:"number",min:500,max:1e4},glow:{control:"boolean"},borderRadius:{control:"number",min:0,max:88}}},u={args:{}},p={args:{slides:[{src:"https://images.unsplash.com/photo-1468227018948-f7263d9d57ac?w=600",caption:"🍧 Soft Ice Cream Hues",glowColor:"#ace7ff"},{src:"https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600",caption:"🎀 Pastel Rose Mornings",glowColor:"#ffb3e6"}],autoPlay:!1,glow:!0,interval:3500,borderRadius:44},parameters:{docs:{description:{story:"Gentle pastels with dreamy glows; perfect for portfolios or gentle UI."}}}},f={args:{slides:[{src:"https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600",caption:"💎 Neon Forest",glowColor:"#05ffa1"},{src:"https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=600",caption:"🌃 Tech Noir City",glowColor:"#38bdf8"},{src:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",caption:"🛸 Luminous Mountain",glowColor:"#9333ea"}],autoPlay:!0,interval:1200,glow:!0,borderRadius:30},parameters:{docs:{description:{story:"Rapid neon effects—perfect for club/festival themes or cyberpunk dashboards."}}}},m={args:{slides:F,autoPlay:!1,borderRadius:6,glow:!1},parameters:{docs:{description:{story:"Rounded rectangles, animation off and glow disabled for ultra-minimal mode..."}}}};var P,V,G;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {}
}`,...(G=(V=u.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var N,E,q;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    slides: [{
      src: 'https://images.unsplash.com/photo-1468227018948-f7263d9d57ac?w=600',
      caption: '🍧 Soft Ice Cream Hues',
      glowColor: '#ace7ff'
    }, {
      src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600',
      caption: '🎀 Pastel Rose Mornings',
      glowColor: '#ffb3e6'
    }],
    autoPlay: false,
    glow: true,
    interval: 3500,
    borderRadius: 44
  },
  parameters: {
    docs: {
      description: {
        story: 'Gentle pastels with dreamy glows; perfect for portfolios or gentle UI.'
      }
    }
  }
}`,...(q=(E=p.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var M,_,B;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    slides: [{
      src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600',
      caption: '💎 Neon Forest',
      glowColor: '#05ffa1'
    }, {
      src: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=600',
      caption: '🌃 Tech Noir City',
      glowColor: '#38bdf8'
    }, {
      src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600',
      caption: '🛸 Luminous Mountain',
      glowColor: '#9333ea'
    }],
    autoPlay: true,
    interval: 1200,
    glow: true,
    borderRadius: 30
  },
  parameters: {
    docs: {
      description: {
        story: 'Rapid neon effects—perfect for club/festival themes or cyberpunk dashboards.'
      }
    }
  }
}`,...(B=(_=f.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var L,T,A;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    slides: vibrantSlides,
    autoPlay: false,
    borderRadius: 6,
    glow: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Rounded rectangles, animation off and glow disabled for ultra-minimal mode...'
      }
    }
  }
}`,...(A=(T=m.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};const ye=["VibrantShowcase","ManualPastel","WildNeonCyber","CustomShapeAndNoGlow"];export{m as CustomShapeAndNoGlow,p as ManualPastel,u as VibrantShowcase,f as WildNeonCyber,ye as __namedExportsOrder,we as default};
