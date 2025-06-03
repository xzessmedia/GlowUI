import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowSlideshow from './GlowSlideshow';

const vibrantSlides = [
  {
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600',
    caption: '🌄 Mountain Sunrise — Intense Purple Glow',
    glowColor: '#8b5cf6'
  },
  {
    src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600',
    caption: '🌲 Enchanted Forest — Emerald Shine',
    glowColor: '#05ffa1'
  },
  {
    src: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=600',
    caption: '🏙️ City at Night — Electric Cyber Blue',
    glowColor: '#38bdf8'
  },
  {
    src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600',
    caption: '🌅 Candy Clouds — Bubblegum Sunset',
    glowColor: '#f472b6'
  }
];

const meta: Meta = {
  title: 'Ultra Fancy/GlowSlideshow',
  component: GlowSlideshow,
  args: {
    slides: vibrantSlides,
    autoPlay: true,
    interval: 2200,
    glow: true,
    borderRadius: 30
  },
  argTypes: {
    slides: { control: false },
    autoPlay: { control: 'boolean' },
    interval: { control: 'number', min: 500, max: 10000 },
    glow: { control: 'boolean' },
    borderRadius: { control: 'number', min: 0, max: 88 }
  }
};

export default meta;
type Story = StoryObj;

export const VibrantShowcase: Story = {
  args: {},
};

export const ManualPastel: Story = {
  args: {
    slides: [
      {
        src: 'https://images.unsplash.com/photo-1468227018948-f7263d9d57ac?w=600',
        caption: '🍧 Soft Ice Cream Hues',
        glowColor: '#ace7ff'
      },
      {
        src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600',
        caption: '🎀 Pastel Rose Mornings',
        glowColor: '#ffb3e6'
      }
    ],
    autoPlay: false,
    glow: true,
    interval: 3500,
    borderRadius: 44
  },
  parameters: {
    docs: { description: { story: 'Gentle pastels with dreamy glows; perfect for portfolios or gentle UI.' } }
  }
};

export const WildNeonCyber: Story = {
  args: {
    slides: [
      {
        src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600',
        caption: '💎 Neon Forest',
        glowColor: '#05ffa1'
      },
      {
        src: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=600',
        caption: '🌃 Tech Noir City',
        glowColor: '#38bdf8'
      },
      {
        src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600',
        caption: '🛸 Luminous Mountain',
        glowColor: '#9333ea'
      }
    ],
    autoPlay: true,
    interval: 1200,
    glow: true,
    borderRadius: 30
  },
  parameters: {
    docs: { description: { story: 'Rapid neon effects—perfect for club/festival themes or cyberpunk dashboards.' } }
  }
};

export const CustomShapeAndNoGlow: Story = {
  args: {
    slides: vibrantSlides,
    autoPlay: false,
    borderRadius: 6,
    glow: false
  },
  parameters: {
    docs: { description: { story: 'Rounded rectangles, animation off and glow disabled for ultra-minimal mode...' } }
  }
};
