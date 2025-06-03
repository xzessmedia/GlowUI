import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowIconButton from './GlowIconButton';
import StarIcon from '@mui/icons-material/Star';
import BoltIcon from '@mui/icons-material/Bolt';

const meta: Meta = {
  title: 'Ultra Fancy/GlowIconButton',
  component: GlowIconButton,
  argTypes: {
    colorVariant: { control: 'radio', options: ['primary', 'secondary', 'accent'] },
    shape: { control: 'radio', options: ['circle', 'rounded', 'squircle'] },
    glow: { control: 'boolean' },
    animated: { control: 'boolean' }
  }
};
export default meta;

export const StarButton: StoryObj = {
  args: {
    colorVariant: 'primary',
    shape: 'circle',
    children: <StarIcon fontSize="large" />
  }
};

export const BoltRounded: StoryObj = {
  args: {
    colorVariant: 'accent',
    shape: 'rounded',
    children: <BoltIcon fontSize="large" />
  }
};

export const NoGlow: StoryObj = {
  args: {
    animated: false,
    glow: false,
    children: <StarIcon fontSize="large" />
  }
};