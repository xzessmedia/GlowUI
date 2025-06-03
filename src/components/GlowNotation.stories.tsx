import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowNotation from './GlowNotation';

const meta: Meta = {
  title: 'Ultra Fancy/GlowNotation',
  component: GlowNotation,
  args: {
    children: 'This is important!',
    kind: 'info',
    glow: true,
  },
  argTypes: {
    children: { control: 'text' },
    kind: { control: 'radio', options: ['info', 'warning', 'success', 'error', 'tip'] },
    glow: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj;

export const Playground: Story = { args: {} };

export const FancyInfo: Story = {
  args: {
    kind: 'info',
    children: 'ℹ️ Need more info? This notation glows with blue aqua!'
  }
};

export const WarningFire: Story = {
  args: {
    kind: 'warning',
    children: '⚠️ This is a wild warning! Vibrant yellow/orange glow.'
  }
};

export const SuccessGreen: Story = {
  args: {
    kind: 'success',
    children: '✅ Success! Everything went ultra-fancy!' ,
    glow: true
  }
};

export const ErrorRed: Story = {
  args: {
    kind: 'error',
    children: '⛔ Danger! Something glitched — bright red!' ,
    glow: true
  }
};

export const TipNeon: Story = {
  args: {
    kind: 'tip',
    children: '💡 Quick Tip: You can use custom story backgrounds to make this *pop*.' ,
    glow: true
  },
  parameters: {
    backgrounds: { default: 'dark' }
  }
};
