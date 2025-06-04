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
    colorVariant: 'primary',
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

export const NeonAccent: StoryObj<GlowAdsProps> = {
  args: {
    colorVariant: 'accent',
    gradient: 'linear-gradient(117deg,#20123a 0%,#05ffa1 60%,#8b5cf6 120%)',
    badge: 'NEON',
    headline: 'Ultra Neon Sale! 🚀',
    subline: 'Save up to 70% on all design tools. Endless glow, infinite style.' ,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000',
    ctaLabel: 'Shop Neon',
  },
};

export const Dismissible: StoryObj<GlowAdsProps> = {
  args: {
    dismissible: true,
    onClose: () => alert('Ad closed!'),
    badge: 'NEW',
    headline: 'Dismissible Ad',
    subline: 'This promo can be closed for non-intrusive UX.',
  },
  render: (args) => <GlowAds {...args} />,
};

export const CustomGradient: StoryObj<GlowAdsProps> = {
  args: {
    gradient: 'linear-gradient(120deg,#00c6fb 0%,#005bea 100%)',
    headline: 'Blue Ocean',
    badge: 'Premium',
    colorVariant: 'primary',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1000',
    ctaLabel: 'Learn More',
    subline: 'Explore the new depth of vivid UI. Make users swim in beauty.'
  },
};

export const VerticalLayout: StoryObj<GlowAdsProps> = {
  args: {
    layout: 'vertical',
    borderRadius: 30,
    badge: 'HOT',
    colorVariant: 'secondary',
    headline: 'Glow Vertically',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1000',
    ctaLabel: 'Vertical Ad',
    subline: 'Perfect for stories and mobile banners.',
  },
};

export const WithChildren: StoryObj<GlowAdsProps> = {
  args: {
    headline: 'Flexible Messaging',
    image: 'https://images.unsplash.com/photo-1603415526960-f7e0328d8d70?q=80&w=1000',
    subline: 'Plush footers and inline content await.',
    children: (
      <div style={{ marginTop: 10, color: '#fff', textShadow: '0 0 6px #38bdf8cc', fontWeight: 600 }}>
        <b>Bonus:</b> Includes a <i>14-day free trial</i> and an infinite launch effect.
      </div>
    ),
  },
};

export const FullwidthShowcase: StoryObj<GlowAdsProps> = {
  args: {
    layout: 'fullwidth',
    badge: 'FULLWIDTH',
    gradient: 'linear-gradient(107deg,#fc46a6 0%,#8b5cf6 55%,#181b39 120%)',
    colorVariant: 'secondary',
    borderRadius: 0,
    headline: 'Massive full-width Glow!',
    subline: 'For landing pages and big banners with impact.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000',
    ctaLabel: 'See more',
  }
};

export const FancySquare: StoryObj<GlowAdsProps> = {
  args: {
    layout: 'square',
    badge: 'GLITZ',
    colorVariant: 'accent',
    gradient:'linear-gradient(140deg,#181b39 30%,#05ffa1 110%)',
    borderRadius: 20,
    headline: 'Square Profile',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1000',
    subline: 'Boxed. Balanced. Beautiful.',
    ctaLabel: 'Square CTA',
  },
};

export const AnimatedBanner: StoryObj<GlowAdsProps> = {
  args: {
    layout: 'banner',
    colorVariant: 'primary',
    animated: true,
    badge: 'DEAL',
    headline: 'Animated Banner',
    subline:'Pulse and glow to grab attention.',
    image:'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1000',
    ctaLabel: 'Banner Button',
    borderRadius: 60,
  },
};
