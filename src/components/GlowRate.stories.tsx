import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowRate from './GlowRate';

const meta: Meta = {
  title: 'Ultra Fancy/GlowRate',
  component: GlowRate,
  args: {
    value: 4,
    max: 5,
    glow: true,
    disabled: false,
  },
  argTypes: {
    value: { control: 'number', min: 0, max: 10 },
    max: { control: 'number', min: 1, max: 10 },
    glow: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onChange: { action: 'onChange' },
  }
};

export default meta;
type Story = StoryObj;

export const Playground: Story = { args: {} };
