import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowSkeleton from './GlowSkeleton';

const meta: Meta<typeof GlowSkeleton> = {
  title: 'Ultra Fancy/GlowSkeleton',
  component: GlowSkeleton,
  argTypes: {
    width: { control: 'number', min: 16, max: 640 },
    height: { control: 'number', min: 8, max: 240 },
    circle: { control: 'boolean' },
    glow: { control: 'boolean' },
    style: { control: 'object' },
  },
  decorators: [
    Story => (
      <div
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(120deg,#232137 58%,#00ff99 250%)',
          padding: 40,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 35,
        }}
      >
        {Story()}
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof GlowSkeleton>;

// -- Stories demonstrating fancyness and flexibility --

export const Playground: Story = {
  args: { width: 220, height: 34, circle: false, glow: true },
};

export const FancyRow: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24 }}>
      <GlowSkeleton width={40} height={40} circle glow style={{ background: 'linear-gradient(135deg, #8b5cf6 50%, #00ff99 120%)' }} />
      <GlowSkeleton width={120} height={24} glow style={{ background: 'linear-gradient(90deg,#00ff99,#8b5cf6)' }} />
      <GlowSkeleton width={85} height={24} glow={false} style={{ background: 'linear-gradient(90deg,#fbbf24,#38bdf8)' }} />
      <GlowSkeleton width={180} height={34} glow style={{ borderRadius: 18, background: 'linear-gradient(90deg,#ef4444,#fbbf24 90%)' }} />
    </div>
  )
};

export const AnimatedPulse: Story = {
  render: () => (
    <div>
      <GlowSkeleton
        width={330}
        height={44}
        glow
        style={{
          animation: 'pulseglow 1.3s infinite alternate',
          background: 'linear-gradient(270deg,#8b5cf6 50%,#00ff99 120%)',
          borderRadius: 16,
          boxShadow: '0 6px 22px #05ffa133,0 1px 9px #8b5cf666',
        }}
      />
      <style>
        {`
        @keyframes pulseglow {
          from { filter: drop-shadow(0 0 18px #00ff9977); opacity: 0.85; }
          to   { filter: drop-shadow(0 0 36px #8b5cf6ee); opacity: 1; }
        }
        `}
      </style>
    </div>
  ),
};

export const RainbowLoaderBar: Story = {
  render: () => (
    <GlowSkeleton
      width={360}
      height={18}
      glow
      style={{
        borderRadius: 12,
        background: 'linear-gradient(90deg,#ff5cf6 0%,#00ff99 55%,#ffab00 95%,#38d1c4 110%)',
        boxShadow: '0 2px 18px #00ff9933,0 2px 32px #8b5cf633',
        animation: 'slidebg 2s linear infinite',
        backgroundSize: '200% 100%',
      }}
    >
      <style>
        {`
        @keyframes slidebg {
          0%   { background-position: 0 0; }
          100% { background-position: 100% 0; }
        }
        `}
      </style>
    </GlowSkeleton>
  ),
};

export const CircleIconPulse: Story = {
  args: {
    width: 48,
    height: 48,
    circle: true,
    glow: true,
    style: {
      background: 'linear-gradient(120deg, #38bdf8 50%, #f472b6 120%)',
      boxShadow: '0 0 22px #38d1c499, 0 0 38px #8b5cf644',
      animation: 'brighten 1.5s infinite alternate'
    }
  },
  render: ({ ...args }) => (
    <>
      <GlowSkeleton {...args} />
      <style>
        {`
        @keyframes brighten {
          from { filter: brightness(1.08); }
          to   { filter: brightness(1.32); }
        }
        `}
      </style>
    </>
  )
};