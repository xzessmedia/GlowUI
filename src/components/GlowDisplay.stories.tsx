import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowDisplay from './GlowDisplay';
import GlowBadge from './GlowBadge';

const meta: Meta = {
  title: 'Components/GlowDisplay',
  component: GlowDisplay,
  argTypes: {
    glowColor: { control: 'color' },
    animated: { control: 'boolean' },
    borderRadius: { control: { type: 'number', min: 0, max: 80 } },
    infoAlign: { control: 'radio', options: ['left', 'center', 'right'] }
  },
  args: {
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=420',
    title: 'Starfield Headphones',
    price: '$399 USD',
    ctaLabel: 'Buy Now',
    glowColor: '#8b5cf6',
    borderRadius: 32,
    animated: true,
    infoAlign: 'center'
  }
};

export default meta;

export const Default: StoryObj = {};

export const WithBadges: StoryObj = {
  args: {
    badgeContent: [
      <GlowBadge key={1} children='New' size={26} glowColor="#05ffa1" />,
      <GlowBadge key={2} children={<span role="img" aria-label="star">⭐</span>} size={24} />
    ]
  }
};

export const ColumnLayout: StoryObj = {
  args: {
    direction: 'column',
    infoAlign: 'left'
  }
};

export const AccentGlow: StoryObj = {
  args: { glowColor: '#05ffa1' }
};

export const CustomCTA: StoryObj = {
  args: {
    ctaLabel: 'Learn More',
    ctaGlow: 1.6,
    ctaProps: { colorVariant: 'primary' }
  }
};