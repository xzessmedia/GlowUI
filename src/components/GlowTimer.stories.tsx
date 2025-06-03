import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowTimer from './GlowTimer';

const meta: Meta = {
  title: 'Ultra Fancy/GlowTimer',
  component: GlowTimer,
  args: {
    duration: 65,
    running: false,
    glow: true,
    showSeconds: true
  },
  argTypes: {
    duration: { control: 'number', min: 1 },
    running: { control: 'boolean' },
    glow: { control: 'boolean' },
    showSeconds: { control: 'boolean' },
    onFinish: { action: 'onFinish' }
  }
};

export default meta;
type Story = StoryObj;

export const Playground: Story = {
  args: {},
};
