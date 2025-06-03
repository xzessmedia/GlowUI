import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowNotation from './GlowNotation';

const meta: Meta = {
  title: 'Ultra Fancy/GlowNotation',
  component: GlowNotation,
  args: {
    children: 'This is important!',
    kind: 'info',
    glow: true,
  },
  argTypes: {
    children: { control: 'text' },
    kind: { control: 'radio', options: ['info', 'warning', 'success', 'error', 'tip'] },
    glow: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj;

export const Playground: Story = { args: {} };
