import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowTypography from './GlowTypography';

const meta: Meta = {
  title: 'Components/GlowTypography',
  component: GlowTypography,
  args: {
    children: 'Ultra Fancy Vibrant Headline',
    variant: 'h3',
    glow: true,
    glowColor: '#00ff99',
    glowIntensity: 1.17,
    gradient:
      'linear-gradient(85deg,#00ff99 0%,#36d1c4 40%,#8b5cf6 85%,#fff92f 95%)',
    gradientDir: '85deg',
    shadowColors: [
      '0 0 13px #00ff99b0',
      '0 2px 21px #36d1c4b0',
      '0 4px 34px #8b5cf6cc',
      '0 4px 40px #00e676aa',
    ],
    fontWeight: 900,
    clipText: true,
  },
  argTypes: {
    children: { control: 'text' },
    variant: {
      control: 'select',
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'caption',
        'overline',
      ],
    },
    glow: { control: 'boolean' },
    glowColor: { control: 'color' },
    glowIntensity: { control: { type: 'number', min: 0.5, max: 2, step: 0.05 } },
    gradient: { control: 'text' },
    gradientDir: { control: 'text' },
    shadowColors: { control: 'object' },
    fontWeight: { control: { type: 'number', min: 100, max: 900, step: 100 } },
    clipText: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = { args: {} };

export const ContactName: Story = {
  args: {
    children: 'Alex Chen',
    variant: 'h6',
    glow: true,
    glowColor: '#00ff99',
    glowIntensity: 1.1,
    sx: { fontWeight: 700, letterSpacing: '0.01em' },
    gradient: 'linear-gradient(90deg,#00ff99 0%,#36d1c4 50%,#8b5cf6 95%)',
    shadowColors: [
      '0 0 8px #00ff99d8',
      '0 2px 13px #36d1c4aa',
      '0 4px 19px #8b5cf668',
    ],
    clipText: true,
  },
};

export const DialogHeadline: Story = {
  args: {
    children: 'Kontakte',
    variant: 'h4',
    glow: true,
    glowColor: '#00ff99',
    glowIntensity: 1.23,
    sx: { fontWeight: 900, letterSpacing: '0.01em' },
    gradient: 'linear-gradient(90deg,#00ff99,#36d1c4,#00e676 80%)',
    shadowColors: [
      '0 0 13px #00ff99b0',
      '0 2px 21px #36d1c4b0',
      '0 4px 34px #8b5cf6cc',
      '0 4px 40px #00e676aa',
    ],
    clipText: true,
  },
};

export const CustomColor: Story = {
  args: {
    children: 'Custom Glow Color',
    variant: 'h3',
    glow: true,
    glowColor: '#8b5cf6',
    glowIntensity: 1.45,
    gradient: 'linear-gradient(90deg,#8b5cf6,#1fb6ff,#f7971e 80%)',
    shadowColors: [
      '0 0 15px #8b5cf688',
      '0 2px 18px #1fb6ffa8',
      '0 4px 36px #f7971e77',
    ],
    clipText: true,
  },
};
