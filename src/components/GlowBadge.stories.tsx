import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowBadge from './GlowBadge';
import GlowAvatar from './GlowAvatar';

const meta: Meta = {
  title: 'Components/GlowBadge',
  component: GlowBadge,
  argTypes: {
    background: { control: 'color' },
    borderColor: { control: 'color' },
    glowColor: { control: 'color' },
    animated: { control: 'boolean' },
    size: { control: { type: 'number', min: 16, max: 64, step: 1 } },
    position: {
      control: 'radio',
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right', 'center'],
    },
    offset: { control: { type: 'number', min: -32, max: 32, step: 1 } },
  },
  args: {
    children: 5,
    animated: true,
    size: 30,
    position: 'top-right',
    offset: -10,
  },
};

export default meta;

export const Default: StoryObj = {};

export const LargeGlowBadge: StoryObj = {
  args: { children: 99, size: 40, glowColor: '#05ffa1', borderColor: '#05ffa1' }
};

export const CenteredBadge: StoryObj = {
  args: { position: 'center', children: '★', background: '#f472b6', size: 36 }
};

export const WithAvatarOverlay: StoryObj = {
  render: (args) => (
    <GlowBadge
      {...args}
      asOverlayFor={
        <GlowAvatar
          src='https://randomuser.me/api/portraits/women/44.jpg'
          size={54}
          shape='squircle'
        />
      }
      children="!"
      glowColor="#f472b6"
      borderColor="#f472b6"
      size={24}
      offset={-6}
    />
  ),
};

export const CustomStyle: StoryObj = {
  args: {
    children: 'New',
    background: 'linear-gradient(120deg,#05ffa1,#8b5cf6 80%)',
    borderColor: '#8b5cf6',
    glowColor: '#05ffa1',
    size: 32,
    fontSize: 14,
  },
};