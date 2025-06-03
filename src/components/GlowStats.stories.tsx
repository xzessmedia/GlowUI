import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowStats from './GlowStats';

const meta: Meta = {
  title: 'Ultra Fancy/GlowStats',
  component: GlowStats,
  argTypes: {
    value: { control: 'number' },
    label: { control: 'text' },
    glow: { control: 'boolean' },
    icon: { control: 'text' },
    color: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj;

export const ActiveUsers: Story = {
  args: {
    label: 'Active Users',
    value: 3127,
    color: '#38bdf8',
    glow: true,
    icon: '👥',
  }
};

export const RainbowStats: Story = {
  args: {
    label: 'All-Time Visits',
    value: 888_888,
    color: 'linear-gradient(90deg, #f472b6, #38bdf8 40%, #8b5cf6)',
    glow: true,
    icon: '🌈',
  },
  parameters: { docs: { description: { story: 'Stats block with a full rainbow linear-gradient background and strong glow!' } } }
};

export const Pinky: Story = {
  args: {
    label: 'Hearts Sent',
    value: 500_234,
    color: '#f472b6',
    glow: true,
    icon: '💖',
  },
};

export const NeonGold: Story = {
  args: {
    label: 'Gold Stars',
    value: 1789,
    color: '#facc15',
    glow: true,
    icon: '⭐',
  }
};

export const MinimalStat: Story = {
  args: {
    label: 'Minimal',
    value: 0,
    color: '#7c7c7c',
    glow: false,
    icon: '📋',
  }
};
