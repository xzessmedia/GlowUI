import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowTypography from './GlowTypography';

const meta: Meta = {
  title: 'Ultra Fancy/GlowTypography',
  component: GlowTypography,
  args: {
    children: 'Glowing Headline',
    variant: 'h4',
    color: '#38bdf8',
    glow: true,
  },
  argTypes: {
    children: { control: 'text' },
    variant: { control: 'select', options: ['h1','h2','h3','h4','h5','h6','subtitle1','subtitle2','body1','body2','caption','overline'] },
    color: { control: 'color' },
    glow: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj;

export const Playground: Story = { args: {} };

export const GradientHeadline: Story = {
  args: {
    children: 'Gradient Rainbow Headline',
    variant: 'h2',
    color: 'linear-gradient(90deg, #f472b6 0%, #9333ea 45%, #38bdf8 100%)',
    glow: true
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: { description: { story: '🌈 Animated gradient, intense multi-color headline.' } }
  }
};

export const ElectricSubTitle: Story = {
  args: {
    children: 'Electric Blue Subtitle',
    variant: 'h5',
    color: '#38bdf8',
    glow: true
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: { description: { story: '⚡ Vivid blue subtitle, sharp glow for high-impact sections.' } }
  }
};
export const SoftPastelBody: Story = {
  args: {
    children: 'Lovely soft pastel body text for serene UIs.',
    variant: 'body1',
    color: '#ffb3e6',
    glow: true
  },
  parameters: {
    backgrounds: { default: 'light' },
    docs: { description: { story: '🎀 Gentle pink glow, body1 style, fits pastel dashboards.' } }
  }
};

export const NeonError: Story = {
  args: {
    children: 'Error: Something glitched!',
    variant: 'body2',
    color: '#ff0055',
    glow: true
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: { description: { story: '🚨 Neon error red, body2, outstanding for alerts.' } }
  }
};

export const AnimatedLive: Story = {
  render: (args) => (
    <div style={{
      background: 'linear-gradient(120deg, #0f2027 0%, #2c5364 100%)',
      padding: 44,
      borderRadius: 19,
      textAlign: 'center'
    }}>
      <GlowTypography
        {...args}
        variant="h3"
        color="linear-gradient(90deg, #05ffa1 0%, #38bdf8 40%, #8b5cf6 75%)"
        glow
      >
        <span role="img" aria-label="rocket">🚀</span> Animated Glow Typography Demo
      </GlowTypography>
      <div style={{ marginTop: 16, color: '#fff9', fontSize: 18 }}>Change the controls to see instant updates!</div>
    </div>
  ),
  args: {
    glow: true
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: { description: { story: '💡 Animated, live-edit sample for designers & devs.' } }
  }
};
