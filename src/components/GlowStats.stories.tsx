import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowStats from './GlowStats';

const meta: Meta = {
  title: 'Ultra Fancy/GlowStats',
  component: GlowStats,
  args: {
    label: 'Active Users',
    value: 3127,
    glow: true,
    icon: '👥',
    color: '#38bdf8'
  },
  argTypes: {
    label: { control: 'text' },
    value: { control: 'number' },
    glow: { control: 'boolean' },
    icon: { control: 'text' },
    color: { control: 'color' }
  }
};

export default meta;
type Story = StoryObj;

export const Playground: Story = { args: {} };
