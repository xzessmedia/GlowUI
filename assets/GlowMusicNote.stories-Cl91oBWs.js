import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{G as o}from"./GlowMusicNote-cWj65Lze.js";import"./styled-DketRv4I.js";import"./index-D4lIrffr.js";import"./emotion-react.browser.esm-CzyYH6Xe.js";const A={title:"Ultra Fancy/GlowMusicNote",component:o,argTypes:{noteType:{control:"select",options:["quarter","half","whole","eighth","sixteenth",void 0]},clefType:{control:"select",options:["treble","bass","alto",void 0]},accidental:{control:"select",options:["sharp","flat","natural",void 0]},color:{control:"color"},animated:{control:"boolean"},size:{control:"number",min:16,max:100,step:1},showStemDown:{control:"boolean"},speedBpm:{control:"number",min:10,max:350},speedUnit:{control:"select",options:["bpm","ms"]}},args:{color:"#8b5cf6",animated:!1,size:46,showStemDown:!1}},t={render:()=>e.jsxs("div",{style:{display:"flex",gap:32,fontSize:24,alignItems:"center"},children:[e.jsx(o,{clefType:"treble",color:"#38bdf8",size:70}),e.jsx(o,{clefType:"bass",color:"#8b5cf6",size:70}),e.jsx(o,{clefType:"alto",color:"#facc15",size:70})]})},r={render:()=>e.jsxs("div",{style:{display:"flex",gap:32,fontSize:20,alignItems:"center"},children:[e.jsx(o,{noteType:"whole",color:"#eee"}),e.jsx(o,{noteType:"half",color:"#38bdf8"}),e.jsx(o,{noteType:"quarter",color:"#8b5cf6"}),e.jsx(o,{noteType:"eighth",color:"#f472b6"}),e.jsx(o,{noteType:"sixteenth",color:"#a21caf"})]})},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:32,fontSize:18,alignItems:"center"},children:[e.jsx(o,{noteType:"quarter",color:"#8b5cf6",showStemDown:!1}),e.jsx(o,{noteType:"quarter",color:"#8b5cf6",showStemDown:!0}),e.jsx("span",{style:{fontSize:16,opacity:.75},children:"Up / Down stem"})]})},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:32,fontSize:18,alignItems:"center"},children:[e.jsx(o,{noteType:"quarter",color:"#8b5cf6",accidental:"sharp"}),e.jsx(o,{noteType:"quarter",color:"#38bdf8",accidental:"flat"}),e.jsx(o,{noteType:"quarter",color:"#facc15",accidental:"natural"})]})},a={args:{noteType:"quarter",speedBpm:120,speedUnit:"bpm",color:"#38bdf8"}},c={args:{noteType:"eighth",accidental:"flat",color:"#f472b6",animated:!0,size:60,speedBpm:180,speedUnit:"bpm"}};var l,i,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 32,
    fontSize: 24,
    alignItems: 'center'
  }}>
      <GlowMusicNote clefType='treble' color='#38bdf8' size={70} />
      <GlowMusicNote clefType='bass' color='#8b5cf6' size={70} />
      <GlowMusicNote clefType='alto' color='#facc15' size={70} />
    </div>
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var d,m,f;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 32,
    fontSize: 20,
    alignItems: 'center'
  }}>
      <GlowMusicNote noteType='whole' color='#eee' />
      <GlowMusicNote noteType='half' color='#38bdf8' />
      <GlowMusicNote noteType='quarter' color='#8b5cf6' />
      <GlowMusicNote noteType='eighth' color='#f472b6' />
      <GlowMusicNote noteType='sixteenth' color='#a21caf' />
    </div>
}`,...(f=(m=r.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var u,y,b;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 32,
    fontSize: 18,
    alignItems: 'center'
  }}>
      <GlowMusicNote noteType='quarter' color='#8b5cf6' showStemDown={false} />
      <GlowMusicNote noteType='quarter' color='#8b5cf6' showStemDown={true} />
      <span style={{
      fontSize: 16,
      opacity: 0.75
    }}>Up / Down stem</span>
    </div>
}`,...(b=(y=n.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var g,x,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 32,
    fontSize: 18,
    alignItems: 'center'
  }}>
      <GlowMusicNote noteType='quarter' color='#8b5cf6' accidental='sharp' />
      <GlowMusicNote noteType='quarter' color='#38bdf8' accidental='flat' />
      <GlowMusicNote noteType='quarter' color='#facc15' accidental='natural' />
    </div>
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var T,w,S;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    noteType: 'quarter',
    speedBpm: 120,
    speedUnit: 'bpm',
    color: '#38bdf8'
  }
}`,...(S=(w=a.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var j,z,M;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    noteType: 'eighth',
    accidental: 'flat',
    color: '#f472b6',
    animated: true,
    size: 60,
    speedBpm: 180,
    speedUnit: 'bpm'
  }
}`,...(M=(z=c.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};const I=["AllClefs","AllNotes","StemDirections","AllAccidentals","MetronomeMark","Playground"];export{s as AllAccidentals,t as AllClefs,r as AllNotes,a as MetronomeMark,c as Playground,n as StemDirections,I as __namedExportsOrder,A as default};
