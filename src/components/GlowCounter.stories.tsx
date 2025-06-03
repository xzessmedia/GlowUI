import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowCounter, { GlowCounterProps } from './GlowCounter';

const meta: Meta<GlowCounterProps> = {
  title: 'Ultra Fancy/GlowCounter',
  component: GlowCounter,
  args: {
    value: 7,
    min: 0,
    max: 42,
    step: 1,
    label: 'Stars',
    animated: true,
    showButtons: true,
    glowIntensity: 1.12
  },
  argTypes: {
    value: { control: 'number' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    animated: { control: 'boolean' },
    showButtons: { control: 'boolean' },
    glowIntensity: { control: { type: 'range', min: 0.5, max: 2, step: 0.02 } },
    palette: { control: false }, // (advanced use)
    label: { control: 'text' }
  },
};

export default meta;
type Story = StoryObj<GlowCounterProps>;

export const Playground: Story = {
  args: {}
};

export const DisabledButtons: Story = {
  args: {
    value: 10,
    min: 10,
    max: 10,
    showButtons: true,
    label: 'Fixed Value'
  }
};

export const WithoutButtons: Story = {
  args: {
    showButtons: false,
    value: 21,
    label: 'Read-Only',
    animated: false
  }
};
