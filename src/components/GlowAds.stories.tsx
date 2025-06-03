import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowAds, { GlowAdsProps } from './GlowAds';

const meta: Meta<GlowAdsProps> = {
  title: 'Components/GlowAds',
  component: GlowAds,
  argTypes: {
    gradient: { control: 'text' },
    borderRadius: { control: { type: 'number', min: 0, max: 60, step: 1 } },
    colorVariant: {
      control: 'select',
      options: ['primary', 'secondary', 'accent'],
    },
    layout: {
      control: 'select',
      options: ['banner', 'square', 'horizontal', 'vertical', 'fullwidth'],
    },
    animated: { control: 'boolean' },
    dismissible: { control: 'boolean' },
  },
  args: {
    headline: 'Glow up your workflow!',
    subline: 'Try the AI-powered toolkit for visually stunning automation.',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1000',
    ctaLabel: 'Get started',
    badge: 'Ad',
    colorVariant: 'accent',
    gradient: undefined,
    borderRadius: 22,
    layout: 'horizontal',
    animated: true,
    dismissible: false,
  },
};

export default meta;

export const Default: StoryObj<GlowAdsProps> = {
  render: (args) => <GlowAds {...args} />,
};

export const Dismissible: StoryObj<GlowAdsProps> = {
  args: {
    dismissible: true,
    onClose: () => alert('Ad closed!'),
  },
  render: (args) => <GlowAds {...args} />,
};

export const CustomGradient: StoryObj<GlowAdsProps> = {
  args: {
    gradient:
      'linear-gradient(120deg, #00c6fb 0%, #005bea 100%)',
  },
  render: (args) => <GlowAds {...args} />,
};

export const VerticalLayout: StoryObj<GlowAdsProps> = {
  args: {
    layout: 'vertical',
    borderRadius: 30,
  },
  render: (args) => <GlowAds {...args} />,
};

export const WithChildren: StoryObj<GlowAdsProps> = {
  args: {
    children: <div style={{ marginTop: 10, color: '#fff' }}><b>Bonus:</b> Includes a <i>14-day free trial</i>.</div>,
  },
  render: (args) => <GlowAds {...args} />,
};
