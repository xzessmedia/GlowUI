import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowInput from './GlowInput';

const meta: Meta = {
  title: 'Ultra Fancy/GlowInput',
  component: GlowInput,
  args: {
    label: 'Glowing Label',
    placeholder: 'Type here...',
    glow: true,
    error: false,
    helperText: '',
    value: '',
  },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    glow: { control: 'boolean' },
    error: { control: 'boolean' },
    helperText: { control: 'text' },
    value: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj;

export const Playground: Story = {
  args: {},
};

export const Error: Story = {
  args: {
    error: true,
    helperText: 'Something went wrong!',
    value: 'Uh oh!'
  },
};
