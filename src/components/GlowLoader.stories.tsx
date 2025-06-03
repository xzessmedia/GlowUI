import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowLoader from './GlowLoader';

const meta: Meta = {
  title: 'Ultra Fancy/GlowLoader',
  component: GlowLoader,
  args: {
    size: 62,
    color: '#38bdf8',
    glow: true,
    text: '',
    speed: 1.1
  },
  argTypes: {
    size: { control: 'number', min: 8, max: 240 },
    color: { control: 'color' },
    glow: { control: 'boolean' },
    text: { control: 'text' },
    speed: { control: 'number', min: 0.2, max: 10, step: 0.05 }
  },
};

export default meta;
type Story = StoryObj;

export const Playground: Story = { args: {} };