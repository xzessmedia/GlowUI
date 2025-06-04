import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{G as c}from"./GlowAvatar-BAgRIvgp.js";import"./styled-DketRv4I.js";import"./index-D4lIrffr.js";import"./Avatar-C1UTtoQi.js";import"./generateUtilityClasses-CPRdC64H.js";import"./DefaultPropsProvider-Bcp8l54b.js";import"./createSvgIcon-DyKWnwtn.js";import"./useSlot-aXQ8NPmW.js";import"./useForkRef-zqhjcRVs.js";import"./emotion-react.browser.esm-CzyYH6Xe.js";const W={title:"Components/GlowAvatar",component:c,argTypes:{colorVariant:{control:"radio",options:["primary","secondary","accent"]},glow:{control:"boolean"},animated:{control:"boolean"},shape:{control:"radio",options:["circle","rounded","squircle"]},src:{control:"text"},alt:{control:"text"}},args:{colorVariant:"primary",glow:!0,animated:!0,shape:"circle",alt:"Avatar",children:"AB"}},e={args:{}},a={args:{src:"https://randomuser.me/api/portraits/men/32.jpg",children:void 0}},o={args:{colorVariant:"accent",shape:"squircle",children:"SQ"}},s={args:{glow:!1,animated:!1,children:"NO"}},t={render:n=>r.jsxs("div",{style:{display:"flex",gap:18},children:[r.jsx(c,{...n,shape:"circle"}),r.jsx(c,{...n,shape:"rounded"}),r.jsx(c,{...n,shape:"squircle"})]})};var i,l,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {}
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,d,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    src: 'https://randomuser.me/api/portraits/men/32.jpg',
    children: undefined
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,h,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    colorVariant: 'accent',
    shape: 'squircle',
    children: 'SQ'
  }
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,w,A;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    glow: false,
    animated: false,
    children: 'NO'
  }
}`,...(A=(w=s.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var S,v,j;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 18
  }}>
      <GlowAvatar {...args} shape="circle" />
      <GlowAvatar {...args} shape="rounded" />
      <GlowAvatar {...args} shape="squircle" />
    </div>
}`,...(j=(v=t.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};const _=["Default","WithImage","SquircleAccent","NoGlow","AllShapes"];export{t as AllShapes,e as Default,s as NoGlow,o as SquircleAccent,a as WithImage,_ as __namedExportsOrder,W as default};
