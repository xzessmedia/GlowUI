import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowPalette from './GlowPalette';

const sampleColors = [
  '#6366f1', '#38bdf8', '#05ffa1', '#f472b6', '#facc15', '#9333ea', '#181b39'
];

const meta: Meta = {
  title: 'Ultra Fancy/GlowPalette',
  component: GlowPalette,
  args: {
    colors: sampleColors,
    selected: '#6366f1',
    size: 'large',
    glow: true,
    onSelect: undefined,
  },
  argTypes: {
    colors: { control: 'object' },
    selected: { control: 'color' },
    size: { control: 'radio', options: ['small', 'medium', 'large'] },
    glow: { control: 'boolean' },
    onSelect: { action: 'onSelect' }
  }
};

export default meta;
type Story = StoryObj;

export const Playground: Story = {
  args: {},
};
