import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowProfileCard from './GlowProfileCard';

const meta: Meta = {
  title: 'Ultra Fancy/GlowProfileCard',
  component: GlowProfileCard,
  args: {
    name: 'Taylor Swift',
    title: 'Pop Star',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    status: 'online',
    bio: 'Making the whole world shimmer ✨',
    glow: true,
  },
  argTypes: {
    name: { control: 'text' },
    title: { control: 'text' },
    avatar: { control: 'text' },
    status: { control: 'radio', options: ['online', 'offline', 'away'] },
    bio: { control: 'text' },
    glow: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj;

export const Playground: Story = { args: {} };
