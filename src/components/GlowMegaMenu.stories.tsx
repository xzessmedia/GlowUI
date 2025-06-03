import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowMegaMenu from './GlowMegaMenu';

const meta: Meta = {
  title: 'Ultra Fancy/GlowMegaMenu',
  component: GlowMegaMenu,
  args: {
    open: true,
    items: [
      { label: 'Home', icon: '🏠', href: '#' },
      { label: 'Features', icon: '✨', href: '#' },
      { label: 'Pricing', icon: '💸', href: '#' },
      { label: 'Account', icon: '👤', href: '#' }
    ],
    glow: true,
  },
  argTypes: {
    open: { control: 'boolean' },
    items: { control: 'object' },
    glow: { control: 'boolean' },
    onSelect: { action: 'onSelect' }
  }
};

export default meta;
type Story = StoryObj;

export const Playground: Story = { args: {} };
