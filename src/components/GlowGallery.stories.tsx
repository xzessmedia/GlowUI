import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowGallery, { GlowGalleryProps } from './GlowGallery';

const sampleImages = [
  {
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400',
    alt: 'Mountain',
    caption: 'Beautiful mountain morning',
    extra: <span style={{
      background: '#fff2',
      color: '#fff',
      borderRadius: 12,
      padding: '2px 9px',
      fontSize: 12
    }}>✨</span>
  },
  {
    src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400',
    alt: 'Forest',
    caption: 'Lush forest magic'
  },
  {
    src: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=400',
    alt: 'City',
    caption: 'City at night'
  }
];

const meta: Meta<GlowGalleryProps> = {
  title: 'Ultra Fancy/GlowGallery',
  component: GlowGallery,
  args: {
    images: sampleImages,
    columns: 3,
    gap: 18,
    borderRadius: 20,
    overlayOnHover: true,
    showCaptionsInLightbox: true,
  },
  argTypes: {
    images: { control: false },
    overlayOnHover: { control: 'boolean' },
    columns: { control: 'number', min: 1, max: 6 },
    borderRadius: { control: 'number' },
  }
};

export default meta;
type Story = StoryObj<GlowGalleryProps>;

export const Basic: Story = {
  args: {},
};

export const TwoColumns: Story = {
  args: { columns: 2 },
};

export const NoHoverOverlay: Story = {
  args: { overlayOnHover: false },
};