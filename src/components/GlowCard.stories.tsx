import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowCard from './GlowCard';

const meta: Meta = {
  title: 'Components/GlowCard',
  component: GlowCard,
  argTypes: {
    glow: { control: 'boolean' },
    glass: { control: 'boolean' },
    animated: { control: 'boolean' },
    borderRadius: { control: { type: 'number', min: 0, max: 60 } },
    gradient: { control: 'text' }
  },
  args: {
    header: 'Card header',
    footer: 'Card footer',
    children: 'This is a glowing, glassy card with customizable header and footer.',
    glow: true,
    glass: true,
    animated: true,
    borderRadius: 28
  }
};

export default meta;

export const Default: StoryObj = {};

export const NoGlow: StoryObj = {
  args: { glow: false }
};

export const NoGlass: StoryObj = {
  args: { glass: false }
};

export const Static: StoryObj = {
  args: { animated: false }
};

export const CustomGradient: StoryObj = {
  args: { gradient: 'linear-gradient(100deg, #05ffa1 0%, #9333ea 100%)' }
};

export const WithOverlay: StoryObj = {
  args: {
    overlay: <div style={{
      width: '100%', height: '100%', background: 'radial-gradient(circle,#05ffa122 30%,transparent 100%)'
    }} />
  }
};