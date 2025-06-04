import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{G as d}from"./GlowMusicNote-cWj65Lze.js";import{s as S}from"./styled-DketRv4I.js";import{k as X}from"./emotion-react.browser.esm-CzyYH6Xe.js";import"./index-D4lIrffr.js";const q=X`
  0%,100% { filter: drop-shadow(0 0 12px #38bdf855); opacity: 1; }
  50% { filter: drop-shadow(0 0 32px #8b5cf688) brightness(1.13); opacity: 0.85; }
`,Y=S("div")(({$palette:n,$glow:t})=>({background:"linear-gradient(114deg, #1e2e40 65%, #38bdf822 120%)",borderRadius:24,padding:28,margin:"0 auto",boxShadow:`0 0 60px 8px ${n&&n[1]||"#38bdf8"}33, 0 0 140px 32px #8b5cf644`,border:`2.4px solid ${n&&n[0]||"#8b5cf6"}`,position:"relative",display:"inline-block",minWidth:320,minHeight:80,filter:t?`drop-shadow(0 0 ${16*t}px #8b5cf677)`:void 0,transition:"box-shadow 0.22s"})),Z=S("div")({fontSize:22,fontWeight:800,color:"#fff",letterSpacing:"0.01em",textShadow:"0 2px 14px #38bdf8bb",marginBottom:7}),ee=S("div")({fontSize:16,color:"#7dd3fc",fontWeight:500,marginBottom:19});function te({clef:n="treble",notes:t,palette:l=["#8b5cf6","#38bdf8","#facc15"],speedBpm:s,animated:o=!0}){const u=["C4","D4","E4","F4","G4","A4","B4","C5","D5","E5"];return e.jsxs("svg",{width:70+t.length*52+32,height:120,viewBox:`0 0 ${70+t.length*52+32} 120`,children:[[0,1,2,3,4].map(f=>e.jsx("rect",{y:35+f*16,x:14,width:70+t.length*52,height:2.4,rx:1.2,style:{fill:l[0],filter:`drop-shadow(0 0 7px ${l[0]}77)`}},f)),e.jsx("foreignObject",{x:10,y:26,width:54,height:70,children:e.jsx(d,{clefType:n,color:l[1],size:54})}),s&&e.jsx("foreignObject",{x:54,y:12,width:90,height:36,children:e.jsx(d,{noteType:"quarter",color:l[1],size:39,speedBpm:s,speedUnit:"bpm"})}),t.map((f,p)=>{const C=u.indexOf(f.note),Q=C>=0?99-C*8:99;return e.jsx("foreignObject",{x:70+p*52,y:Q-35,width:38,height:65,children:e.jsx(d,{noteType:f.duration,accidental:f.accidental,color:l[2],size:39,animated:o,showStemDown:f.stemDown})},p)})]})}function re({data:n,palette:t=["#8b5cf6","#38bdf8","#facc15"],glow:l=1.1,animated:s=!0}){const o=n&&n.length?n:[{note:"G4",duration:"q"},{note:"A4",duration:"8"},{note:"B4",duration:"q"},{note:"C5",duration:"h"}],a=t[0],r=t[1],i=["C4","D4","E4","F4","G4","A4","B4","C5","D5","E5"];return e.jsxs("svg",{width:396,height:120,viewBox:"0 0 396 120",children:[[0,1,2,3,4].map(c=>e.jsx("rect",{y:35+c*16,x:18,width:360,height:2.9,rx:1.5,style:{fill:a,filter:`drop-shadow(0 0 9px ${a}66)`}},c)),o.map((c,u)=>{const f=i.indexOf(c.note),p=f>=0?99-f*8:99;return e.jsx("ellipse",{cx:60+u*48,cy:p,rx:13,ry:9,fill:r,stroke:t[2],strokeWidth:2.3,style:{filter:`drop-shadow(0 0 18px ${r}66)`+(s?" blur(0.2px)":""),animation:s?`${q} 2.7s ${.22*u}s infinite`:void 0,opacity:.97}},u)})]})}function ne({data:n,palette:t=["#f472b6","#38bdf8","#8b5cf6"],glow:l=1.1,animated:s=!0}){const o=n&&n.length?n:[{string:0,fret:3},{string:1,fret:2},{string:2,fret:0},{string:3,fret:0},{string:4,fret:0},{string:5,fret:3}],a=t[1];return e.jsxs("svg",{width:355,height:85,viewBox:"0 0 355 85",children:[Array.from({length:6}).map((r,i)=>e.jsx("rect",{y:18+i*11,x:27,width:305,height:2.6,rx:1.1,style:{fill:a,filter:`drop-shadow(0 0 7px ${a}77)`}},i)),Array.from({length:6}).map((r,i)=>e.jsx("rect",{x:72+i*45,y:11,width:4.3,height:66,rx:3,fill:t[0],style:{filter:`drop-shadow(0 0 4px ${t[0]}55)`}},i)),o.map((r,i)=>e.jsxs("g",{style:{filter:`drop-shadow(0 0 9.5px ${t[2]}99)`,animation:s?`${q} 2.1s ${.18*i}s infinite`:void 0},children:[e.jsx("circle",{cx:72+r.fret*45,cy:23+r.string*11,r:8,fill:t[2],opacity:.98}),e.jsx("text",{x:72+r.fret*45,y:27+r.string*11,textAnchor:"middle",fontWeight:"bold",fontSize:14,fill:"#fff",style:{fontFamily:"Inter"},children:r.fret})]},i))]})}function oe({data:n,palette:t=["#f472b6","#38bdf8","#facc15"],glow:l=1.1,animated:s=!0}){const o=n??{name:"E",frets:[0,2,2,1,0,0]};return e.jsxs("svg",{width:170,height:120,viewBox:"0 0 170 120",children:[e.jsx("text",{x:85,y:22,textAnchor:"middle",fontWeight:"bold",fontSize:22,fill:t[0],style:{textShadow:"0 0 8px #fff8"},children:o.name}),Array.from({length:6}).map((a,r)=>e.jsx("rect",{x:30+r*18,y:40,width:2.7,height:70,rx:1.6,fill:t[1],style:{filter:`drop-shadow(0 0 9px ${t[1]}66)`}},r)),Array.from({length:5}).map((a,r)=>e.jsx("rect",{x:27,y:56+r*14,width:108,height:3.1,rx:1.3,fill:t[2],opacity:.93,style:{filter:`drop-shadow(0 0 6px ${t[2]}66)`}},r)),o.frets.map((a,r)=>a>0?e.jsx("circle",{cx:30+r*18,cy:55+(a-1)*14,r:6,fill:t[0],style:{filter:`drop-shadow(0 0 17px ${t[0]}99)`,animation:s?`${q} 2.9s ${.11*r}s infinite`:void 0},opacity:.96},r):e.jsx("text",{x:30+r*18,y:45,textAnchor:"middle",fontWeight:"bold",fontSize:13,fill:t[1],style:{fontFamily:"Inter",filter:"drop-shadow(0 0 8px #38bdf866)"},children:"o"},r))]})}function ae({data:n,palette:t=["#05ffa1","#facc15","#8b5cf6"],glow:l=1.1,animated:s=!0}){let o;return typeof n=="string"?o=n.split(/\s+/).map(a=>a.trim()):Array.isArray(n)?o=n:o=["x","-",".","x"],e.jsxs("svg",{width:63*o.length+30,height:60,viewBox:`0 0 ${63*o.length+30} 60`,children:[e.jsx("rect",{x:18,y:29,width:o.length*60,height:3.5,rx:1.6,fill:t[0],style:{filter:`drop-shadow(0 0 12px ${t[0]}66)`}}),o.map((a,r)=>{let i=t[2],c="";return a==="x"?(i=t[1],c="●"):a==="-"?(i="#747",c="—"):a==="."?(i=t[0],c="•"):a==="o"?(i="#f472b6",c="○"):c=a,e.jsx("text",{x:40+r*60,y:38,textAnchor:"middle",fontWeight:900,fontSize:29,fill:i,opacity:.93,style:{filter:`drop-shadow(0 0 18px ${i}66)`,animation:s?`${q} 1.7s ${.16*r}s infinite`:void 0},children:c},r)})]})}const G=({mode:n,data:t,palette:l,glowIntensity:s=1.13,animated:o=!0,title:a,subtitle:r,style:i,clef:c,staffNotes:u,speedBpm:f})=>e.jsxs(Y,{$palette:l,$glow:s,style:i,children:[a&&e.jsx(Z,{children:a}),r&&e.jsx(ee,{children:r}),n==="piano-sheet"&&Array.isArray(u)&&u.length>0?e.jsx(te,{clef:c,notes:u,palette:l,speedBpm:f,animated:o}):null,n==="piano-sheet"&&(!u||u.length===0)&&Array.isArray(t)&&e.jsx(re,{data:t,palette:l,glow:s,animated:o}),n==="guitar-tab"&&Array.isArray(t)&&e.jsx(ne,{data:t,palette:l,glow:s,animated:o}),n==="guitar-chords"&&!Array.isArray(t)&&typeof t=="object"&&e.jsx(oe,{data:t,palette:l,glow:s,animated:o}),n==="rhythmic"&&(Array.isArray(t)||typeof t=="string")&&e.jsx(ae,{data:t,palette:l,glow:s,animated:o})]});try{G.displayName="GlowNotation",G.__docgenInfo={description:"",displayName:"GlowNotation",props:{mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"piano-sheet"'},{value:'"guitar-tab"'},{value:'"guitar-chords"'},{value:'"rhythmic"'}]}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"GlowNotationData"}},palette:{defaultValue:null,description:"",name:"palette",required:!1,type:{name:"readonly string[] | undefined"}},glowIntensity:{defaultValue:{value:"1.13"},description:"",name:"glowIntensity",required:!1,type:{name:"number | undefined"}},animated:{defaultValue:{value:"true"},description:"",name:"animated",required:!1,type:{name:"boolean | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"ReactNode"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},clef:{defaultValue:null,description:"",name:"clef",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"treble"'},{value:'"bass"'},{value:'"alto"'}]}},staffNotes:{defaultValue:null,description:"",name:"staffNotes",required:!1,type:{name:"StaffNote[] | undefined"}},speedBpm:{defaultValue:null,description:"",name:"speedBpm",required:!1,type:{name:"number | undefined"}}}}}catch{}const fe={title:"Ultra Fancy/GlowNotation",component:G,argTypes:{mode:{control:"select",options:["piano-sheet","guitar-tab","guitar-chords","rhythmic"]},data:{control:!1},palette:{control:!1},glowIntensity:{control:"number",min:.5,max:3,step:.05},animated:{control:"boolean"},title:{control:"text"},subtitle:{control:"text"},style:{control:!1},clef:{control:"select",options:["treble","bass","alto",void 0]},staffNotes:{control:!1},speedBpm:{control:"number",min:30,max:200,step:1}},args:{mode:"piano-sheet",data:[{note:"C4",duration:"q"},{note:"E4",duration:"q"},{note:"G4",duration:"q"},{note:"C5",duration:"h"}],title:"Piano melody",subtitle:"Simple piano partition",glowIntensity:1.13,animated:!0,palette:void 0}},h={args:{mode:"piano-sheet",title:"Piano Melody (Staff)",subtitle:"G4 → A4 → B4 → C5",data:[{note:"G4",duration:"q"},{note:"A4",duration:"8"},{note:"B4",duration:"q"},{note:"C5",duration:"h"}],palette:["#8b5cf6","#38bdf8","#facc15"],animated:!0,glowIntensity:1.1}},m={args:{mode:"guitar-tab",title:"Guitar Tab Demo",subtitle:"E minor chord frets",data:[{string:0,fret:0},{string:1,fret:0},{string:2,fret:0},{string:3,fret:2},{string:4,fret:2},{string:5,fret:0}],palette:["#f472b6","#38bdf8","#8b5cf6"],animated:!0,glowIntensity:1.15}},g={args:{mode:"guitar-chords",title:"Guitar Chord (E maj)",subtitle:"Open E major shape",data:{name:"E",frets:[0,2,2,1,0,0]},palette:["#f472b6","#38bdf8","#facc15"],animated:!0,glowIntensity:1.18}},y={args:{mode:"rhythmic",title:"Rhythm Pattern",subtitle:"x = strong, . = ghost, - = rest, o = clap",data:"x . - o x - . o x",palette:["#05ffa1","#facc15","#8b5cf6"],animated:!0,glowIntensity:1.09}},x={args:{mode:"piano-sheet",data:[{note:"C4",duration:"q"},{note:"E4",duration:"q"},{note:"G4",duration:"q"},{note:"C5",duration:"h"}]}},b={args:{}},w={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:36,alignItems:"center",padding:24},children:[e.jsx(d,{clefType:"treble",color:"#38bdf8",size:65}),e.jsx(d,{clefType:"bass",color:"#8b5cf6",size:62}),e.jsx(d,{clefType:"alto",color:"#facc15",size:62}),e.jsx(d,{noteType:"quarter",color:"#8b5cf6"}),e.jsx(d,{noteType:"half",color:"#38bdf8"}),e.jsx(d,{noteType:"eighth",color:"#f472b6"}),e.jsx(d,{noteType:"sixteenth",color:"#a21caf",animated:!0}),e.jsx(d,{noteType:"quarter",color:"#eab308",accidental:"sharp"}),e.jsx(d,{noteType:"quarter",color:"#eab308",accidental:"flat"}),e.jsx(d,{noteType:"quarter",color:"#eab308",accidental:"natural"})]}),args:{}},j={name:"Classic Staff Partition",args:{mode:"piano-sheet",clef:"treble",staffNotes:[{note:"G4",duration:"quarter"},{note:"A4",duration:"quarter",accidental:"sharp"},{note:"B4",duration:"eighth"},{note:"C5",duration:"quarter",accidental:"flat"},{note:"E5",duration:"half",accidental:"natural",stemDown:!0}],speedBpm:120,palette:["#8b5cf6","#38bdf8","#facc15"],animated:!0,glowIntensity:1.15,title:"Piano Classic Partition",subtitle:"Clef, notes, accidentals, and tempo"}};var v,A,T;h.parameters={...h.parameters,docs:{...(v=h.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    mode: 'piano-sheet',
    title: 'Piano Melody (Staff)',
    subtitle: 'G4 → A4 → B4 → C5',
    data: [{
      note: 'G4',
      duration: 'q'
    }, {
      note: 'A4',
      duration: '8'
    }, {
      note: 'B4',
      duration: 'q'
    }, {
      note: 'C5',
      duration: 'h'
    }],
    palette: ['#8b5cf6', '#38bdf8', '#facc15'],
    animated: true,
    glowIntensity: 1.1
  }
}`,...(T=(A=h.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var P,$,B;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    mode: 'guitar-tab',
    title: 'Guitar Tab Demo',
    subtitle: 'E minor chord frets',
    data: [{
      string: 0,
      fret: 0
    }, {
      string: 1,
      fret: 0
    }, {
      string: 2,
      fret: 0
    }, {
      string: 3,
      fret: 2
    }, {
      string: 4,
      fret: 2
    }, {
      string: 5,
      fret: 0
    }],
    palette: ['#f472b6', '#38bdf8', '#8b5cf6'],
    animated: true,
    glowIntensity: 1.15
  }
}`,...(B=($=m.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var N,E,I;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    mode: 'guitar-chords',
    title: 'Guitar Chord (E maj)',
    subtitle: 'Open E major shape',
    data: {
      name: 'E',
      frets: [0, 2, 2, 1, 0, 0]
    },
    palette: ['#f472b6', '#38bdf8', '#facc15'],
    animated: true,
    glowIntensity: 1.18
  }
}`,...(I=(E=g.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var z,D,_;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    mode: 'rhythmic',
    title: 'Rhythm Pattern',
    subtitle: 'x = strong, . = ghost, - = rest, o = clap',
    data: 'x . - o x - . o x',
    palette: ["#05ffa1", "#facc15", "#8b5cf6"],
    animated: true,
    glowIntensity: 1.09
  }
}`,...(_=(D=y.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var M,O,V;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    mode: 'piano-sheet',
    data: [{
      note: 'C4',
      duration: 'q'
    }, {
      note: 'E4',
      duration: 'q'
    }, {
      note: 'G4',
      duration: 'q'
    }, {
      note: 'C5',
      duration: 'h'
    }]
  }
}`,...(V=(O=x.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var R,W,k;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {}
}`,...(k=(W=b.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var F,U,H;w.parameters={...w.parameters,docs:{...(F=w.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'row',
    gap: 36,
    alignItems: 'center',
    padding: 24
  }}>
      <GlowMusicNote clefType="treble" color="#38bdf8" size={65} />
      <GlowMusicNote clefType="bass" color="#8b5cf6" size={62} />
      <GlowMusicNote clefType="alto" color="#facc15" size={62} />
      <GlowMusicNote noteType='quarter' color='#8b5cf6' />
      <GlowMusicNote noteType='half' color='#38bdf8' />
      <GlowMusicNote noteType='eighth' color='#f472b6' />
      <GlowMusicNote noteType='sixteenth' color='#a21caf' animated />
      <GlowMusicNote noteType='quarter' color='#eab308' accidental='sharp' />
      <GlowMusicNote noteType='quarter' color='#eab308' accidental='flat' />
      <GlowMusicNote noteType='quarter' color='#eab308' accidental='natural' />
    </div>,
  args: {}
}`,...(H=(U=w.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var J,K,L;j.parameters={...j.parameters,docs:{...(J=j.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Classic Staff Partition',
  args: {
    mode: 'piano-sheet',
    clef: 'treble',
    staffNotes: [{
      note: 'G4',
      duration: 'quarter'
    }, {
      note: 'A4',
      duration: 'quarter',
      accidental: 'sharp'
    }, {
      note: 'B4',
      duration: 'eighth'
    }, {
      note: 'C5',
      duration: 'quarter',
      accidental: 'flat'
    }, {
      note: 'E5',
      duration: 'half',
      accidental: 'natural',
      stemDown: true
    }],
    speedBpm: 120,
    palette: ['#8b5cf6', '#38bdf8', '#facc15'],
    animated: true,
    glowIntensity: 1.15,
    title: 'Piano Classic Partition',
    subtitle: 'Clef, notes, accidentals, and tempo'
  }
}`,...(L=(K=j.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};const ue=["PianoSheet","GuitarTab","GuitarChords","Rhythm","OnlyPiano","Playground","AllClefsAndSymbols","PianoPartitionClassic"];export{w as AllClefsAndSymbols,g as GuitarChords,m as GuitarTab,x as OnlyPiano,j as PianoPartitionClassic,h as PianoSheet,b as Playground,y as Rhythm,ue as __namedExportsOrder,fe as default};
