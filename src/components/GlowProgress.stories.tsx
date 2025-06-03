import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowProgress from './GlowProgress';

const meta: Meta = {
  title: 'Ultra Fancy/GlowProgress',
  component: GlowProgress,
  args: {
    value: 60,
    max: 100,
    glow: true,
    label: 'Loading...'
  },
  argTypes: {
    value: { control: 'number', min: 0, max: 100 },
    max: { control: 'number', min: 1 },
    glow: { control: 'boolean' },
    label: { control: 'text' }
  }
};

export default meta;
type Story = StoryObj;

export const Playground: Story = { args: {} };
