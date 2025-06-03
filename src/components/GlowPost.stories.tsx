import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowPost from './GlowPost';

const meta: Meta = {
  title: 'Ultra Fancy/GlowPost',
  component: GlowPost,
  args: {
    title: 'Shimmer from the Top! 🌟',
    author: 'Ada Lovelace',
    content: 'Check out this ultra-fancy glowing post. Glows everywhere!',
    date: '2024-06-01',
    glow: true,
  },
  argTypes: {
    title: { control: 'text' },
    author: { control: 'text' },
    content: { control: 'text' },
    date: { control: 'text' },
    glow: { control: 'boolean' }
  },
};

export default meta;
type Story = StoryObj;

export const Playground: Story = { args: {} };
