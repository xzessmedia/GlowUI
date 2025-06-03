import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowBox from './GlowBox';

const meta: Meta = {
  title: 'Components/GlowBox',
  component: GlowBox,
  argTypes: {
    colorVariant: { control: 'radio', options: ['primary', 'secondary', 'accent'] },
    rounded: { control: 'boolean' },
    glow: { control: 'boolean' },
    gradient: { control: 'boolean' },
    animated: { control: 'boolean' }
  },
  args: {
    colorVariant: 'primary',
    rounded: true,
    glow: true,
    gradient: true,
    animated: true,
    children: 'This is a glowing box. You can toggle its effects.'
  }
};

export default meta;

export const Default: StoryObj = {};

export const AllVariants: StoryObj = {
  render: (args) => (
    <div style={{display: 'flex', gap: 24, alignItems: 'flex-end'}}>
      <GlowBox {...args} colorVariant="primary" children="Primary" />
      <GlowBox {...args} colorVariant="secondary" children="Secondary" />
      <GlowBox {...args} colorVariant="accent" children="Accent" />
    </div>
  ),
};

export const NoGlow: StoryObj = {
  args: { glow: false, animated: false }
};

export const FlatCorners: StoryObj = {
  args: { rounded: false }
};

export const Static: StoryObj = {
  args: { animated: false }
};