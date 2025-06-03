import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowLogin from './GlowLogin';

const meta: Meta = {
  title: 'Ultra Fancy/GlowLogin',
  component: GlowLogin,
  args: {
    onSubmit: undefined,
    loading: false,
    error: '',
  },
  argTypes: {
    loading: { control: 'boolean' },
    error: { control: 'text' },
    onSubmit: { action: 'onSubmit' },
  }
};

export default meta;
type Story = StoryObj;

export const Playground: Story = { args: {} };

export const Loading: Story = { args: { loading: true } };

export const Error: Story = {
  args: {
    error: 'Invalid credentials, try again!'
  }
};
