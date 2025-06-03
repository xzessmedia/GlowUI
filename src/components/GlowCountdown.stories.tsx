import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowCountdown from './GlowCountdown';

const meta: Meta = {
  title: 'Ultra Fancy/GlowCountdown',
  component: GlowCountdown,
  args: {
    seconds: 40,
    running: false,
    onComplete: undefined,
    glow: true,
  },
  argTypes: {
    seconds: { control: 'number', min: 1 },
    running: { control: 'boolean' },
    glow: { control: 'boolean' },
    onComplete: { action: 'onComplete' },
  },
};

export default meta;
type Story = StoryObj;

export const Playground: Story = { args: {} };
