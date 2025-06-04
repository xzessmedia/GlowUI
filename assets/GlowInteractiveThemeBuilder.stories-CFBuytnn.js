import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-D4lIrffr.js";import{G as P,S as M}from"./GlowGradientEditor-Byc0al3Z.js";import{G as $}from"./GlowCard-Cw-SdvFf.js";import{G as L}from"./GlowThemeProvider-PORSu_0b.js";import{B as g}from"./Box-84RDQgna.js";import{T as u}from"./Typography-CPCMMGuq.js";import{B as W}from"./Button-DmibqXmy.js";import{T as D}from"./TextField-CzQo89nJ.js";import{g as j,a as U,c as A}from"./generateUtilityClasses-CPRdC64H.js";import{s as Y,r as J,e as G}from"./styled-DketRv4I.js";import{u as q,c as K,m as Q}from"./DefaultPropsProvider-Bcp8l54b.js";import{L as k}from"./ListContext-Bx4YLmZN.js";import{a as X}from"./useTimeout-COwD6Zpp.js";import{u as Z}from"./useForkRef-zqhjcRVs.js";import{B as ee}from"./ButtonBase-IUfDptLI.js";import{l as z}from"./listItemTextClasses-B7GF_tSs.js";import"./Add-DSA7GguY.js";import"./createSvgIcon-DyKWnwtn.js";import"./index-BtzQAOoK.js";import"./useControlled-D7G9nFfn.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlot-aXQ8NPmW.js";import"./isFocusVisible-B8k4qzLc.js";import"./isHostComponent-DVu5iVWx.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useSlotProps-D-fgJt7b.js";import"./IconButton-jhZesD6s.js";import"./useId-DF_PSzS1.js";import"./CircularProgress-DcGBhv6q.js";import"./emotion-react.browser.esm-CzyYH6Xe.js";import"./useTheme-BIUNiYwk.js";import"./index-o8klx2Nf.js";import"./extendSxProp-B_2SO387.js";import"./useFormControl-Djn6XZQb.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Popover-vuXRV2RG.js";import"./Grow-Claz4S-Y.js";import"./useTheme-DW2JKlpt.js";import"./utils-CqeGdR9Y.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";import"./getReactElementRef-rGhWSfJO.js";import"./mergeSlotProps-uRZWNtH4.js";import"./Modal-CISbEoY5.js";import"./Portal-CqAdRi_j.js";import"./Fade-Bcnby8sK.js";import"./Paper-ZsONHF7B.js";import"./isMuiElement-B6DUnSYx.js";const O=j("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),E=j("MuiListItemIcon",["root","alignItemsFlexStart"]);function te(e){return U("MuiMenuItem",e)}const v=j("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),ne=(e,n)=>{const{ownerState:s}=e;return[n.root,s.dense&&n.dense,s.divider&&n.divider,!s.disableGutters&&n.gutters]},oe=e=>{const{disabled:n,dense:s,divider:d,disableGutters:l,selected:b,classes:p}=e,o=K({root:["root",s&&"dense",n&&"disabled",!l&&"gutters",d&&"divider",b&&"selected"]},te,p);return{...p,...o}},re=Y(ee,{shouldForwardProp:e=>J(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:ne})(Q(({theme:e})=>({...e.typography.body1,display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap","&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${v.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:G(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${v.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:G(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${v.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:G(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:G(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${v.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${v.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${O.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${O.inset}`]:{marginLeft:52},[`& .${z.root}`]:{marginTop:0,marginBottom:0},[`& .${z.inset}`]:{paddingLeft:36},[`& .${E.root}`]:{minWidth:36},variants:[{props:({ownerState:n})=>!n.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:n})=>n.divider,style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:n})=>!n.dense,style:{[e.breakpoints.up("sm")]:{minHeight:"auto"}}},{props:({ownerState:n})=>n.dense,style:{minHeight:32,paddingTop:4,paddingBottom:4,...e.typography.body2,[`& .${E.root} svg`]:{fontSize:"1.25rem"}}}]}))),ae=i.forwardRef(function(n,s){const d=q({props:n,name:"MuiMenuItem"}),{autoFocus:l=!1,component:b="li",dense:p=!1,divider:C=!1,disableGutters:o=!1,focusVisibleClassName:B,role:m="menuitem",tabIndex:w,className:T,...F}=d,x=i.useContext(k),c=i.useMemo(()=>({dense:p||x.dense||!1,disableGutters:o}),[x.dense,p,o]),S=i.useRef(null);X(()=>{l&&S.current&&S.current.focus()},[l]);const R={...d,dense:c.dense,divider:C,disableGutters:o},h=oe(d),r=Z(S,s);let a;return d.disabled||(a=w!==void 0?w:-1),t.jsx(k.Provider,{value:c,children:t.jsx(re,{ref:r,role:m,tabIndex:a,component:b,focusVisibleClassName:A(h.focusVisible,B),className:A(h.root,T),...F,ownerState:R,classes:h})})}),y=[{label:"Electric Blue",stops:[{color:"#38bdf8",pos:8},{color:"#818cf8",pos:45},{color:"#05ffa1",pos:100}],angle:114},{label:"Candy Pink",stops:[{color:"#f472b6",pos:10},{color:"#fc46a6",pos:48},{color:"#8b5cf6",pos:100}],angle:119},{label:"Aurora",stops:[{color:"#38bdf8",pos:4},{color:"#9333ea",pos:41},{color:"#05ffa1",pos:96}],angle:111},{label:"Royal",stops:[{color:"#6366f1",pos:5},{color:"#8b5cf6",pos:44},{color:"#20123a",pos:100}],angle:121},{label:"Shadow Gradient",stops:[{color:"#20123a",pos:0},{color:"#6366f180",pos:55},{color:"#05ffa1",pos:100}],angle:106}],N=[{value:"Inter, 'Plus Jakarta Sans', sans-serif",label:"Inter / Plus Jakarta"},{value:"'JetBrains Mono', monospace",label:"JetBrains Mono"},{value:"'Fira Mono', monospace",label:"Fira Mono"},{value:"Montserrat, 'Segoe UI', sans-serif",label:"Montserrat"},{value:"system-ui, sans-serif",label:"System UI"}],nt={title:"Fancy Tools/GlowInteractiveThemeBuilder",parameters:{layout:"fullscreen",backgrounds:{default:"dark"}}},I={render:()=>{const[e,n]=i.useState(y[0].stops),[s,d]=i.useState(y[0].angle),[l,b]=i.useState(y[1].stops),[p,C]=i.useState(y[1].angle),[o,B]=i.useState(N[0].value),[m,w]=i.useState(22),[T,F]=i.useState(.9);function x(r){var a;return((a=r[0])==null?void 0:a.color)||"#38bdf8"}const c=(r,a)=>`linear-gradient(${a}deg, ${r.map(f=>`${f.color} ${f.pos}%`).join(", ")})`,S=x(e),R=x(l),h={primaryColor:S,secondaryColor:R,fontFamily:o,glowIntensity:T,borderRadius:m};return t.jsx(L,{config:h,children:t.jsxs(g,{sx:{minHeight:"100vh",background:"radial-gradient(ellipse at top, #181b39 10%, #20123a 140%)",p:5},children:[t.jsx(u,{sx:{fontFamily:o,fontWeight:900,fontSize:31,color:"#05ffa1",mb:2,letterSpacing:".07em",textShadow:"0 0 30px #38bdf8",textTransform:"uppercase"},children:"🎨 Interactive Glow Theme Builder"}),t.jsxs(g,{sx:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"flex-start"},children:[t.jsxs(g,{children:[t.jsx(u,{sx:{mb:1.3,fontWeight:800,color:"#fff",fontFamily:o,letterSpacing:".04em",fontSize:15.7},children:"PRIMARY Gradient & Button Presets"}),t.jsx(P,{stops:e,angle:s,presets:y,onChange:(r,a,f)=>{n(a),d(f)},animated:!0,borderRadius:18}),t.jsx($,{glow:!0,glass:!0,animated:!0,gradient:c(e,s),borderRadius:m,style:{marginTop:12,width:260},contentStyle:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:48},children:t.jsx(W,{style:{background:c(e,s),color:"#fff",fontWeight:800,fontSize:16,borderRadius:13,padding:"6px 28px",letterSpacing:".03em",fontFamily:o},children:"Primary Glow"})})]}),t.jsxs(g,{children:[t.jsx(u,{sx:{mb:1.3,fontWeight:800,color:"#fff",fontFamily:o,letterSpacing:".04em",fontSize:15.7},children:"SECONDARY Gradient Presets"}),t.jsx(P,{stops:l,angle:p,presets:y.slice(1),onChange:(r,a,f)=>{b(a),C(f)},animated:!0,borderRadius:18}),t.jsx($,{glow:!0,glass:!0,animated:!0,gradient:c(l,p),borderRadius:m,style:{marginTop:12,width:260},contentStyle:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:48},children:t.jsx(W,{style:{background:c(l,p),color:"#fff",fontWeight:800,fontSize:16,borderRadius:13,padding:"6px 28px",letterSpacing:".03em",fontFamily:o},children:"Secondary Glow"})})]}),t.jsxs(g,{sx:{minWidth:240,bgcolor:"rgba(56,189,248,0.09)",borderRadius:9,p:2.7,mt:2.7},children:[t.jsx(u,{sx:{fontWeight:900,color:"#fff",fontSize:17,mb:2,letterSpacing:".025em",fontFamily:o},children:"Theme Settings"}),t.jsx(D,{select:!0,label:"Font Family",size:"small",fullWidth:!0,value:o,onChange:r=>B(r.target.value),sx:{mb:2,bgcolor:"#181b39cc",color:"#8b5cf6"},children:N.map(r=>t.jsx(ae,{value:r.value,children:r.label},r.label))}),t.jsx(u,{sx:{fontWeight:700,color:"#05ffa1",mt:2,mb:.8,fontSize:15,fontFamily:o},children:"Glow Intensity"}),t.jsx(M,{min:.2,max:2,step:.01,value:T,onChange:(r,a)=>F(Number(a)),sx:{"& .MuiSlider-thumb":{color:"#05ffa1"},my:1,mb:2}}),t.jsx(u,{sx:{fontWeight:700,color:"#f472b6",fontSize:15,fontFamily:o},children:"Card/Button radius"}),t.jsx(M,{min:0,max:34,value:m,onChange:(r,a)=>w(Number(a)),sx:{"& .MuiSlider-thumb":{color:"#f472b6"},my:1,mb:2}}),t.jsxs(g,{sx:{color:"#fff",mt:2,opacity:.87,fontWeight:400,fontSize:13,fontFamily:o},children:[t.jsx("b",{children:"Tip:"})," You can copy gradient CSS from the gradient editor!"]})]})]})]})})}};var _,H,V;I.parameters={...I.parameters,docs:{...(_=I.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [primaryStops, setPrimaryStops] = useState(vibrantPresets[0].stops);
    const [primaryAngle, setPrimaryAngle] = useState(vibrantPresets[0].angle);
    const [secondaryStops, setSecondaryStops] = useState(vibrantPresets[1].stops);
    const [secondaryAngle, setSecondaryAngle] = useState(vibrantPresets[1].angle);
    const [font, setFont] = useState(fontPresets[0].value);
    const [radius, setRadius] = useState(22);
    const [glow, setGlow] = useState(0.9);
    function stopsToMain(stops) {
      return stops[0]?.color || '#38bdf8';
    }
    const stopsToGradient = (stops, angle) => \`linear-gradient(\${angle}deg, \${stops.map(s => \`\${s.color} \${s.pos}%\`).join(', ')})\`;
    const primaryColor = stopsToMain(primaryStops);
    const secondaryColor = stopsToMain(secondaryStops);
    const themeConfig = {
      primaryColor,
      secondaryColor,
      fontFamily: font,
      glowIntensity: glow,
      borderRadius: radius
    };
    return <GlowThemeProvider config={themeConfig}>
        <Box sx={{
        minHeight: '100vh',
        background: 'radial-gradient(ellipse at top, #181b39 10%, #20123a 140%)',
        p: 5
      }}>
          <Typography sx={{
          fontFamily: font,
          fontWeight: 900,
          fontSize: 31,
          color: '#05ffa1',
          mb: 2,
          letterSpacing: '.07em',
          textShadow: '0 0 30px #38bdf8',
          textTransform: 'uppercase'
        }}>
            🎨 Interactive Glow Theme Builder
          </Typography>
          <Box sx={{
          display: 'flex',
          gap: 8,
          flexWrap: 'wrap',
          alignItems: 'flex-start'
        }}>
            <Box>
              <Typography sx={{
              mb: 1.3,
              fontWeight: 800,
              color: '#fff',
              fontFamily: font,
              letterSpacing: '.04em',
              fontSize: 15.7
            }}>
                PRIMARY Gradient & Button Presets
              </Typography>
              <GlowGradientEditor stops={primaryStops} angle={primaryAngle} presets={vibrantPresets} onChange={(_, stops, angle) => {
              setPrimaryStops(stops);
              setPrimaryAngle(angle);
            }} animated borderRadius={18} />
              <GlowCard glow glass animated gradient={stopsToGradient(primaryStops, primaryAngle)} borderRadius={radius} style={{
              marginTop: 12,
              width: 260
            }} contentStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 48
            }}>
                <Button style={{
                background: stopsToGradient(primaryStops, primaryAngle),
                color: '#fff',
                fontWeight: 800,
                fontSize: 16,
                borderRadius: 13,
                padding: '6px 28px',
                letterSpacing: '.03em',
                fontFamily: font
              }}>
                  Primary Glow
                </Button>
              </GlowCard>
            </Box>
            <Box>
              <Typography sx={{
              mb: 1.3,
              fontWeight: 800,
              color: '#fff',
              fontFamily: font,
              letterSpacing: '.04em',
              fontSize: 15.7
            }}>
                SECONDARY Gradient Presets
              </Typography>
              <GlowGradientEditor stops={secondaryStops} angle={secondaryAngle} presets={vibrantPresets.slice(1)} onChange={(_, stops, angle) => {
              setSecondaryStops(stops);
              setSecondaryAngle(angle);
            }} animated borderRadius={18} />
              <GlowCard glow glass animated gradient={stopsToGradient(secondaryStops, secondaryAngle)} borderRadius={radius} style={{
              marginTop: 12,
              width: 260
            }} contentStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 48
            }}>
                <Button style={{
                background: stopsToGradient(secondaryStops, secondaryAngle),
                color: '#fff',
                fontWeight: 800,
                fontSize: 16,
                borderRadius: 13,
                padding: '6px 28px',
                letterSpacing: '.03em',
                fontFamily: font
              }}>
                  Secondary Glow
                </Button>
              </GlowCard>
            </Box>
            <Box sx={{
            minWidth: 240,
            bgcolor: 'rgba(56,189,248,0.09)',
            borderRadius: 9,
            p: 2.7,
            mt: 2.7
          }}>
              <Typography sx={{
              fontWeight: 900,
              color: '#fff',
              fontSize: 17,
              mb: 2,
              letterSpacing: '.025em',
              fontFamily: font
            }}>
                Theme Settings
              </Typography>
              <TextField select label="Font Family" size="small" fullWidth value={font} onChange={e => setFont(e.target.value)} sx={{
              mb: 2,
              bgcolor: '#181b39cc',
              color: '#8b5cf6'
            }}>
                {fontPresets.map(f => <MenuItem key={f.label} value={f.value}>{f.label}</MenuItem>)}
              </TextField>
              <Typography sx={{
              fontWeight: 700,
              color: '#05ffa1',
              mt: 2,
              mb: 0.8,
              fontSize: 15,
              fontFamily: font
            }}>Glow Intensity</Typography>
              <Slider min={0.2} max={2} step={0.01} value={glow} onChange={(_, v) => setGlow(Number(v))} sx={{
              '& .MuiSlider-thumb': {
                color: '#05ffa1'
              },
              my: 1,
              mb: 2
            }} />
              <Typography sx={{
              fontWeight: 700,
              color: '#f472b6',
              fontSize: 15,
              fontFamily: font
            }}>Card/Button radius</Typography>
              <Slider min={0} max={34} value={radius} onChange={(_, v) => setRadius(Number(v))} sx={{
              '& .MuiSlider-thumb': {
                color: '#f472b6'
              },
              my: 1,
              mb: 2
            }} />
              <Box sx={{
              color: '#fff',
              mt: 2,
              opacity: .87,
              fontWeight: 400,
              fontSize: 13,
              fontFamily: font
            }}>
                <b>Tip:</b> You can copy gradient CSS from the gradient editor!
              </Box>
            </Box>
          </Box>
        </Box>
      </GlowThemeProvider>;
  }
}`,...(V=(H=I.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};const ot=["BuildGlowThemeInteractively"];export{I as BuildGlowThemeInteractively,ot as __namedExportsOrder,nt as default};
