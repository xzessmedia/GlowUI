import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowRules from './GlowRules';

const sampleRules = [
  { label: 'No spamming', important: true },
  { label: 'Be kind', important: true },
  { label: 'Share knowledge', important: false },
];

const meta: Meta = {
  title: 'Ultra Fancy/GlowRules',
  component: GlowRules,
  args: {
    rules: sampleRules,
    glow: true,
  },
  argTypes: {
    rules: { control: false },
    glow: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj;

export const Playground: Story = { args: {} };
