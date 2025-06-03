import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowAvatar from './GlowAvatar';

const meta: Meta = {
  title: 'Components/GlowAvatar',
  component: GlowAvatar,
  argTypes: {
    colorVariant: {
      control: 'radio',
      options: ['primary', 'secondary', 'accent'],
    },
    glow: { control: 'boolean' },
    animated: { control: 'boolean' },
    shape: { control: 'radio', options: ['circle', 'rounded', 'squircle'] },
    src: { control: 'text' },
    alt: { control: 'text' }
  },
  args: {
    colorVariant: 'primary',
    glow: true,
    animated: true,
    shape: 'circle',
    alt: 'Avatar',
    children: 'AB',
  },
};

export default meta;

export const Default: StoryObj = {
  args: {}
};

export const WithImage: StoryObj = {
  args: {
    src: 'https://randomuser.me/api/portraits/men/32.jpg',
    children: undefined
  }
};

export const SquircleAccent: StoryObj = {
  args: {
    colorVariant: 'accent',
    shape: 'squircle',
    children: 'SQ'
  }
};

export const NoGlow: StoryObj = {
  args: {
    glow: false,
    animated: false,
    children: 'NO'
  }
};

export const AllShapes: StoryObj = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 18 }}>
      <GlowAvatar {...args} shape="circle" />
      <GlowAvatar {...args} shape="rounded" />
      <GlowAvatar {...args} shape="squircle" />
    </div>
  ),
};