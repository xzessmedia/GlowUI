import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowLightbox from './GlowLightbox';

const demoImages = [
  {
    src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=680',
    alt: 'Forest',
    caption: 'Enchanted Forest with Emerald Glow ✨'
  },
  {
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=680',
    alt: 'Mountain',
    caption: 'Majestic Mountain in Mystical Purple'
  },
  {
    src: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=680',
    alt: 'City',
    caption: 'City Nights — Cyberblue Pulse'
  }
];

const meta: Meta = {
  title: 'Ultra Fancy/GlowLightbox',
  component: GlowLightbox,
};

export default meta;
type Story = StoryObj;

export const InteractiveGallery: Story = {
  render: (args) => {
    const [idx, setIdx] = useState(0);
    const [open, setOpen] = useState(false);
    return (
      <div style={{ textAlign: 'center', padding: 24 }}>
        <h3 style={{ color: '#fff', marginBottom: 12 }}>🌈 Click an image for Lightbox</h3>
        <div style={{ display: 'flex', gap: 24, justifyContent: 'center' }}>
          {demoImages.map((img, i) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              style={{ width: 100, borderRadius: 16, boxShadow: `0 0 24px ${i===idx?'#05ffa1':'#6366f1'}80`, cursor: 'pointer' }}
              onClick={() => { setIdx(i); setOpen(true); }}
            />
          ))}
        </div>
        <GlowLightbox
          {...args}
          open={open}
          borderColor={[ '#05ffa1', '#9333ea', '#38bdf8' ][idx % 3]}
          borderRadius={32}
          glass={true}
          onClose={() => setOpen(false)}
        >
          <div style={{ width: '100%', textAlign: 'center' }}>
            <img src={demoImages[idx].src} alt={demoImages[idx].alt} style={{
              width: '100%', maxWidth: 420, borderRadius: 20, boxShadow: '0 0 44px #05ffa185, 0 2px 18px #9333ea99', margin: '0 auto' }} />
            <div style={{ color: '#fff', fontSize: 18, marginTop: 24, textShadow: '0 2px 20px #6366f1cc, 0 0 8px #05ffa177' }}>{demoImages[idx].caption}</div>
          </div>
        </GlowLightbox>
      </div>
    );
  }
};

export const NeonGlassPanel: Story = {
  render: (args) => (
    <GlowLightbox
      {...args}
      open={true}
      borderColor="#ff00cc"
      borderRadius={44}
      glass={true}
      onClose={()=>{}}
    >
      <div style={{
        padding: 38,
        color: '#fff',
        background: 'linear-gradient(115deg,#1f103a88 70%,#38bdf888 130%)',
        textAlign: 'center',
        borderRadius: 26,
        margin: 12
      }}>
        <h2 style={{margin: 0}}>🌟 Custom Glass Content</h2>
        <p style={{fontWeight: 500}}>You can use <b>any JSX inside</b> a GlowLightbox.<br/>This variant is great for dialogs, tips, wizards, or anything popup!</p>
      </div>
    </GlowLightbox>
  )
};
