import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowResponsive from './GlowResponsive';

const meta: Meta = {
  title: 'Ultra Fancy/GlowResponsive',
  component: GlowResponsive,
  args: {
    children: <div style={{ padding: 32, color: '#fff' }}>
      Resize your Storybook or window to test how this glows on every screen!
    </div>,
    breakpoints: ['xs', 'sm', 'md', 'lg'],
    glow: true,
  },
  argTypes: {
    breakpoints: { control: 'object' },
    glow: { control: 'boolean' },
    children: { control: false }
  }
};

export default meta;
type Story = StoryObj;

export const Playground: Story = { args: {} };
