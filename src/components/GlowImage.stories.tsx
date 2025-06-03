import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowImage, { GlowImageProps } from './GlowImage';

const meta: Meta<GlowImageProps> = {
  title: 'Ultra Fancy/GlowImage',
  component: GlowImage,
  args: {
    src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400',
    alt: 'Sparkling Lake',
    borderRadius: 24,
    glowColor: '#8b5cf6',
    borderColor: '#38bdf8',
    animated: true,
    aspectRatio: '1.2/1',
    hoverGlow: true,
    style: { maxWidth: 300 }
  }
};

export default meta;
type Story = StoryObj<GlowImageProps>;

export const Basic: Story = {
  args: {}
};

export const NoAnimation: Story = {
  args: { animated: false }
};

export const CustomGlow: Story = {
  args: {
    glowColor: '#f472b6',
    borderColor: '#9333ea',
    borderRadius: 40,
    borderWidth: 6
  }
};