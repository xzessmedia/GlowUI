import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowCanvas from './GlowCanvas';

const meta: Meta = {
  title: 'Components/GlowCanvas',
  component: GlowCanvas,
  argTypes: {
    width: { control: { type: 'number', min: 100, max: 900, step: 10 } },
    height: { control: { type: 'number', min: 100, max: 800, step: 10 } },
    lineWidth: { control: { type: 'number', min: 2, max: 20, step: 1 } },
    color: { control: 'color' },
  },
  args: {
    width: 420,
    height: 320,
    lineWidth: 6,
    color: '#8b5cf6'
  },
};

export default meta;

export const Default: StoryObj = {};

export const LargeCanvas: StoryObj = {
  args: { width: 700, height: 480 }
};

export const SmallCanvas: StoryObj = {
  args: { width: 280, height: 180 }
};

export const ThickerPen: StoryObj = {
  args: { lineWidth: 13 }
};

export const CustomColor: StoryObj = {
  args: { color: '#fb7185' }
};