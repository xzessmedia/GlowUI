import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-D4lIrffr.js";import{G as a}from"./GlowLightbox-DTpXjXZH.js";import"./Close-BbJCIoac.js";import"./createSvgIcon-DyKWnwtn.js";import"./generateUtilityClasses-CPRdC64H.js";import"./DefaultPropsProvider-Bcp8l54b.js";import"./styled-DketRv4I.js";import"./Fade-Bcnby8sK.js";import"./useTheme-DW2JKlpt.js";import"./useTheme-BIUNiYwk.js";import"./utils-CqeGdR9Y.js";import"./useTimeout-COwD6Zpp.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";import"./useForkRef-zqhjcRVs.js";import"./getReactElementRef-rGhWSfJO.js";import"./IconButton-jhZesD6s.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-DF_PSzS1.js";import"./ButtonBase-IUfDptLI.js";import"./emotion-react.browser.esm-CzyYH6Xe.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DcGBhv6q.js";const r=[{src:"https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=680",alt:"Forest",caption:"Enchanted Forest with Emerald Glow ✨"},{src:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=680",alt:"Mountain",caption:"Majestic Mountain in Mystical Purple"},{src:"https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=680",alt:"City",caption:"City Nights — Cyberblue Pulse"}],Y={title:"Ultra Fancy/GlowLightbox",component:a},o={render:s=>{const[e,u]=p.useState(0),[b,d]=p.useState(!1);return t.jsxs("div",{style:{textAlign:"center",padding:24},children:[t.jsx("h3",{style:{color:"#fff",marginBottom:12},children:"🌈 Click an image for Lightbox"}),t.jsx("div",{style:{display:"flex",gap:24,justifyContent:"center"},children:r.map((i,l)=>t.jsx("img",{src:i.src,alt:i.alt,style:{width:100,borderRadius:16,boxShadow:`0 0 24px ${l===e?"#05ffa1":"#6366f1"}80`,cursor:"pointer"},onClick:()=>{u(l),d(!0)}},i.src))}),t.jsx(a,{...s,open:b,borderColor:["#05ffa1","#9333ea","#38bdf8"][e%3],borderRadius:32,glass:!0,onClose:()=>d(!1),children:t.jsxs("div",{style:{width:"100%",textAlign:"center"},children:[t.jsx("img",{src:r[e].src,alt:r[e].alt,style:{width:"100%",maxWidth:420,borderRadius:20,boxShadow:"0 0 44px #05ffa185, 0 2px 18px #9333ea99",margin:"0 auto"}}),t.jsx("div",{style:{color:"#fff",fontSize:18,marginTop:24,textShadow:"0 2px 20px #6366f1cc, 0 0 8px #05ffa177"},children:r[e].caption})]})})]})}},n={render:s=>t.jsx(a,{...s,open:!0,borderColor:"#ff00cc",borderRadius:44,glass:!0,onClose:()=>{},children:t.jsxs("div",{style:{padding:38,color:"#fff",background:"linear-gradient(115deg,#1f103a88 70%,#38bdf888 130%)",textAlign:"center",borderRadius:26,margin:12},children:[t.jsx("h2",{style:{margin:0},children:"🌟 Custom Glass Content"}),t.jsxs("p",{style:{fontWeight:500},children:["You can use ",t.jsx("b",{children:"any JSX inside"})," a GlowLightbox.",t.jsx("br",{}),"This variant is great for dialogs, tips, wizards, or anything popup!"]})]})})};var c,m,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    const [idx, setIdx] = useState(0);
    const [open, setOpen] = useState(false);
    return <div style={{
      textAlign: 'center',
      padding: 24
    }}>
        <h3 style={{
        color: '#fff',
        marginBottom: 12
      }}>🌈 Click an image for Lightbox</h3>
        <div style={{
        display: 'flex',
        gap: 24,
        justifyContent: 'center'
      }}>
          {demoImages.map((img, i) => <img key={img.src} src={img.src} alt={img.alt} style={{
          width: 100,
          borderRadius: 16,
          boxShadow: \`0 0 24px \${i === idx ? '#05ffa1' : '#6366f1'}80\`,
          cursor: 'pointer'
        }} onClick={() => {
          setIdx(i);
          setOpen(true);
        }} />)}
        </div>
        <GlowLightbox {...args} open={open} borderColor={['#05ffa1', '#9333ea', '#38bdf8'][idx % 3]} borderRadius={32} glass={true} onClose={() => setOpen(false)}>
          <div style={{
          width: '100%',
          textAlign: 'center'
        }}>
            <img src={demoImages[idx].src} alt={demoImages[idx].alt} style={{
            width: '100%',
            maxWidth: 420,
            borderRadius: 20,
            boxShadow: '0 0 44px #05ffa185, 0 2px 18px #9333ea99',
            margin: '0 auto'
          }} />
            <div style={{
            color: '#fff',
            fontSize: 18,
            marginTop: 24,
            textShadow: '0 2px 20px #6366f1cc, 0 0 8px #05ffa177'
          }}>{demoImages[idx].caption}</div>
          </div>
        </GlowLightbox>
      </div>;
  }
}`,...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var f,x,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <GlowLightbox {...args} open={true} borderColor="#ff00cc" borderRadius={44} glass={true} onClose={() => {}}>
      <div style={{
      padding: 38,
      color: '#fff',
      background: 'linear-gradient(115deg,#1f103a88 70%,#38bdf888 130%)',
      textAlign: 'center',
      borderRadius: 26,
      margin: 12
    }}>
        <h2 style={{
        margin: 0
      }}>🌟 Custom Glass Content</h2>
        <p style={{
        fontWeight: 500
      }}>You can use <b>any JSX inside</b> a GlowLightbox.<br />This variant is great for dialogs, tips, wizards, or anything popup!</p>
      </div>
    </GlowLightbox>
}`,...(h=(x=n.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const _=["InteractiveGallery","NeonGlassPanel"];export{o as InteractiveGallery,n as NeonGlassPanel,_ as __namedExportsOrder,Y as default};
