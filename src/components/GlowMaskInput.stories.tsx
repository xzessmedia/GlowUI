import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowMaskInput from './GlowMaskInput';

const meta: Meta = {
  title: 'Ultra Fancy/GlowMaskInput',
  component: GlowMaskInput,
  args: {
    label: 'Phone',
    mask: '(999) 999-9999',
    value: '',
    glow: true,
  },
  argTypes: {
    label: { control: 'text' },
    mask: { control: 'text' },
    value: { control: 'text' },
    glow: { control: 'boolean' },
    onChange: { action: 'onChange' },
  },
};

export default meta;
type Story = StoryObj;

export const Playground: Story = { args: {} };
