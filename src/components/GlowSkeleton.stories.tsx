import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowSkeleton from './GlowSkeleton';

const meta: Meta = {
  title: 'Ultra Fancy/GlowSkeleton',
  component: GlowSkeleton,
  args: {
    width: 220,
    height: 34,
    circle: false,
    glow: true,
  },
  argTypes: {
    width: { control: 'number', min: 16, max: 640 },
    height: { control: 'number', min: 8, max: 240 },
    circle: { control: 'boolean' },
    glow: { control: 'boolean' },
  }
};

export default meta;
type Story = StoryObj;

export const Playground: Story = { args: {} };
