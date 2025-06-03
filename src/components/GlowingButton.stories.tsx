import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import GlowingButton from './GlowingButton';

const meta: Meta<typeof GlowingButton> = {
  title: 'Components/GlowingButton',
  component: GlowingButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Button content',
    },
    colorVariant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      description: 'Color theme of the button',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    glowIntensity: {
      control: { type: 'range', min: 0, max: 2, step: 0.1 },
      description: 'Intensity of the glow effect',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler function',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    colorVariant: 'primary',
  size: 'medium',
  disabled: false,
  glowIntensity: 0.8,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    colorVariant: 'secondary',
    size: 'medium',
  disabled: false,
  glowIntensity: 0.8,
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
  colorVariant: 'primary',
  size: 'small',
  disabled: false,
  glowIntensity: 0.8,
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
  colorVariant: 'primary',
    size: 'large',
    disabled: false,
  glowIntensity: 0.8,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
  colorVariant: 'primary',
  size: 'medium',
    disabled: true,
    glowIntensity: 0.8,
  },
};

export const HighGlow: Story = {
  args: {
    children: 'High Glow',
    colorVariant: 'primary',
  size: 'medium',
  disabled: false,
  glowIntensity: 1.5,
  },
};

export const LowGlow: Story = {
  args: {
    children: 'Low Glow',
    colorVariant: 'secondary',
    size: 'medium',
    disabled: false,
    glowIntensity: 0.3,
  },
};
export const AllVariants: Story = {
  render: () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <GlowingButton size="small" colorVariant="primary">Small Primary</GlowingButton>
      <GlowingButton size="medium" colorVariant="primary">Medium Primary</GlowingButton>
      <GlowingButton size="large" colorVariant="primary">Large Primary</GlowingButton>
    </div>
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <GlowingButton size="small" colorVariant="secondary">Small Secondary</GlowingButton>
      <GlowingButton size="medium" colorVariant="secondary">Medium Secondary</GlowingButton>
      <GlowingButton size="large" colorVariant="secondary">Large Secondary</GlowingButton>
    </div>
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <GlowingButton disabled>Disabled Primary</GlowingButton>
      <GlowingButton disabled colorVariant="secondary">Disabled Secondary</GlowingButton>
    </div>
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <GlowingButton glowIntensity={0.2}>Low Glow</GlowingButton>
      <GlowingButton glowIntensity={1.0}>Normal Glow</GlowingButton>
      <GlowingButton glowIntensity={1.8}>High Glow</GlowingButton>
    </div>
  </div>
  ),
};
