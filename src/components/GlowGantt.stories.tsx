import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowGantt from './GlowGantt';

const exampleTasks = [
  { label: 'Design', start: 1, end: 6, color: '#38bdf8' },
  { label: 'Development', start: 3, end: 11, color: '#6366f1' },
  { label: 'Testing', start: 9, end: 13, color: '#f472b6' }
];

const meta: Meta = {
  title: 'Ultra Fancy/GlowGantt',
  component: GlowGantt,
  args: {
    tasks: exampleTasks,
    weeks: 14,
    glow: true,
  },
  argTypes: {
    tasks: { control: false },
    weeks: { control: 'number', min: 1 },
    glow: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj;

export const Playground: Story = { args: {} };
