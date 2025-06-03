import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowGenderSelector from './GlowGenderSelector';

const meta: Meta = {
  title: 'Ultra Fancy/GlowGenderSelector',
  component: GlowGenderSelector,
  args: {
    value: '',
    glow: true,
    onChange: undefined,
  },
  argTypes: {
    value: { control: 'text' },
    glow: { control: 'boolean' },
    onChange: { action: 'onChange' },
  }
};

export default meta;
type Story = StoryObj;

export const Playground: Story = { args: {} };
