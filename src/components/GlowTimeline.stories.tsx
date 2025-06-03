import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowTimeline from './GlowTimeline';

const events = [
  { label: 'Project kickoff', time: '2024-05-01', color: '#6366f1' },
  { label: 'Alpha release', time: '2024-06-15', color: '#38bdf8' },
  { label: 'Beta users', time: '2024-07-07', color: '#facc15' },
  { label: 'Global Launch', time: '2024-09-30', color: '#05ffa1' },
];

const meta: Meta = {
  title: 'Ultra Fancy/GlowTimeline',
  component: GlowTimeline,
  args: {
    events,
    orientation: 'vertical',
    glow: true,
    lineColor: '#8b5cf6',
  },
  argTypes: {
    events: { control: false },
    orientation: { control: 'radio', options: ['vertical','horizontal'] },
    glow: { control: 'boolean' },
    lineColor: { control: 'color' },
  }
};

export default meta;
type Story = StoryObj;

export const Playground: Story = { args: {} };

export const Horizontal: Story = {
  args: { orientation: 'horizontal' }
};
