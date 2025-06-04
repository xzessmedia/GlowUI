import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./index-D4lIrffr.js";import{G as m}from"./GlowGradientEditor-Byc0al3Z.js";import{G as b}from"./GlowCard-Cw-SdvFf.js";import{B as i}from"./Box-84RDQgna.js";import{T as h}from"./Typography-CPCMMGuq.js";import{B as p}from"./Button-DmibqXmy.js";import"./Add-DSA7GguY.js";import"./createSvgIcon-DyKWnwtn.js";import"./generateUtilityClasses-CPRdC64H.js";import"./DefaultPropsProvider-Bcp8l54b.js";import"./styled-DketRv4I.js";import"./index-BtzQAOoK.js";import"./useControlled-D7G9nFfn.js";import"./useForkRef-zqhjcRVs.js";import"./useTimeout-COwD6Zpp.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlot-aXQ8NPmW.js";import"./isFocusVisible-B8k4qzLc.js";import"./isHostComponent-DVu5iVWx.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useSlotProps-D-fgJt7b.js";import"./TextField-CzQo89nJ.js";import"./useId-DF_PSzS1.js";import"./useFormControl-Djn6XZQb.js";import"./index-o8klx2Nf.js";import"./useTheme-BIUNiYwk.js";import"./emotion-react.browser.esm-CzyYH6Xe.js";import"./extendSxProp-B_2SO387.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Popover-vuXRV2RG.js";import"./Grow-Claz4S-Y.js";import"./useTheme-DW2JKlpt.js";import"./utils-CqeGdR9Y.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";import"./getReactElementRef-rGhWSfJO.js";import"./mergeSlotProps-uRZWNtH4.js";import"./Modal-CISbEoY5.js";import"./Portal-CqAdRi_j.js";import"./Fade-Bcnby8sK.js";import"./Paper-ZsONHF7B.js";import"./ListContext-Bx4YLmZN.js";import"./isMuiElement-B6DUnSYx.js";import"./IconButton-jhZesD6s.js";import"./ButtonBase-IUfDptLI.js";import"./CircularProgress-DcGBhv6q.js";const B={primary:{gradient:"linear-gradient(112deg,#38bdf8 0%,#05ffa1 60%,#8b5cf6 100%)",stops:[{color:"#38bdf8",pos:0},{color:"#05ffa1",pos:60},{color:"#8b5cf6",pos:100}],angle:112},secondary:{gradient:"linear-gradient(132deg,#f472b6 10%,#9333ea 100%)",stops:[{color:"#f472b6",pos:10},{color:"#9333ea",pos:100}],angle:132}},hr={title:"Fancy Tools/GlowThemeEditor (Demo)",parameters:{layout:"fullscreen",backgrounds:{default:"dark"}}},l=({label:e,gradient:d,children:n,style:t={}})=>r.jsxs(b,{glass:!0,animated:!0,style:{marginBottom:45,background:"none",border:"none",...t},borderRadius:22,gradient:d,contentStyle:{minHeight:70,display:"flex",alignItems:"center",justifyContent:"flex-start",gap:25,padding:"1.3em 2em"},children:[r.jsx(h,{sx:{fontFamily:"'Inter','Plus Jakarta Sans',sans-serif",fontWeight:800,color:"#fff",fontSize:20,letterSpacing:".04em",textTransform:"uppercase"},children:e}),n]}),s={render:()=>{const[e,d]=x.useState(B),n=(t,a,o,u)=>{d(y=>({...y,[t]:{gradient:a,stops:o,angle:u}}))};return r.jsxs(i,{sx:{minHeight:"100vh",background:"radial-gradient(ellipse at top,#20123a 10%,#181b39 110%)",p:5},children:[r.jsx(h,{sx:{fontFamily:"'Inter','Plus Jakarta Sans',sans-serif",fontWeight:900,fontSize:32,color:"#05ffa1",mb:2,letterSpacing:".07em",textShadow:"0 0 26px #38bdf8",textTransform:"uppercase"},children:"✨ Build Your Ultra Fancy Glow Theme"}),r.jsxs(i,{sx:{display:"flex",gap:4,flexWrap:"wrap",alignItems:"flex-start"},children:[r.jsxs(i,{children:[r.jsx(m,{value:e.primary.gradient,stops:e.primary.stops,angle:e.primary.angle,borderRadius:22,animated:!0,onChange:(t,a,o)=>n("primary",t,a,o),style:{marginBottom:20}}),r.jsx(l,{label:"Primary Gradient",gradient:e.primary.gradient,children:r.jsx(p,{variant:"contained",style:{background:e.primary.gradient,color:"#fff",fontWeight:900,fontSize:16,borderRadius:15,boxShadow:"0 0 12px #8b5cf655",textTransform:"uppercase"},children:"Primary Button"})})]}),r.jsxs(i,{children:[r.jsx(m,{value:e.secondary.gradient,stops:e.secondary.stops,angle:e.secondary.angle,borderRadius:22,animated:!0,onChange:(t,a,o)=>n("secondary",t,a,o),style:{marginBottom:20}}),r.jsx(l,{label:"Secondary Gradient",gradient:e.secondary.gradient,children:r.jsx(p,{variant:"contained",style:{background:e.secondary.gradient,color:"#fff",fontWeight:900,fontSize:16,borderRadius:15,boxShadow:"0 0 12px #fc46a655",textTransform:"uppercase"},children:"Secondary Button"})})]})]})]})}};var c,g,f;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const [theme, setTheme] = useState(starterTheme);
    const handleGradient = (which: 'primary' | 'secondary', grad: string, stops: any, angle: number) => {
      setTheme(th => ({
        ...th,
        [which]: {
          gradient: grad,
          stops,
          angle
        }
      }));
    };
    return <Box sx={{
      minHeight: '100vh',
      background: 'radial-gradient(ellipse at top,#20123a 10%,#181b39 110%)',
      p: 5
    }}>
        <Typography sx={{
        fontFamily: \`'Inter','Plus Jakarta Sans',sans-serif\`,
        fontWeight: 900,
        fontSize: 32,
        color: '#05ffa1',
        mb: 2,
        letterSpacing: '.07em',
        textShadow: '0 0 26px #38bdf8',
        textTransform: 'uppercase'
      }}>
          ✨ Build Your Ultra Fancy Glow Theme
        </Typography>
        <Box sx={{
        display: 'flex',
        gap: 4,
        flexWrap: 'wrap',
        alignItems: 'flex-start'
      }}>
          <Box>
            <GlowGradientEditor value={theme.primary.gradient} stops={theme.primary.stops} angle={theme.primary.angle} borderRadius={22} animated onChange={(g, s, a) => handleGradient('primary', g, s, a)} style={{
            marginBottom: 20
          }} />
            <PreviewBlock label="Primary Gradient" gradient={theme.primary.gradient}>
              <Button variant="contained" style={{
              background: theme.primary.gradient,
              color: '#fff',
              fontWeight: 900,
              fontSize: 16,
              borderRadius: 15,
              boxShadow: '0 0 12px #8b5cf655',
              textTransform: 'uppercase'
            }}>
                Primary Button
              </Button>
            </PreviewBlock>
          </Box>
          <Box>
            <GlowGradientEditor value={theme.secondary.gradient} stops={theme.secondary.stops} angle={theme.secondary.angle} borderRadius={22} animated onChange={(g, s, a) => handleGradient('secondary', g, s, a)} style={{
            marginBottom: 20
          }} />
            <PreviewBlock label="Secondary Gradient" gradient={theme.secondary.gradient}>
              <Button variant="contained" style={{
              background: theme.secondary.gradient,
              color: '#fff',
              fontWeight: 900,
              fontSize: 16,
              borderRadius: 15,
              boxShadow: '0 0 12px #fc46a655',
              textTransform: 'uppercase'
            }}>
                Secondary Button
              </Button>
            </PreviewBlock>
          </Box>
        </Box>
      </Box>;
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const ur=["InteractiveThemeBuilder"];export{s as InteractiveThemeBuilder,ur as __namedExportsOrder,hr as default};
