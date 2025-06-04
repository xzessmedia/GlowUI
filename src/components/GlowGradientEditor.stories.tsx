import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowGradientEditor from './GlowGradientEditor';

const meta: Meta = {
  title: 'Fancy Tools/GlowGradientEditor',
  component: GlowGradientEditor,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
};

export default meta;

export const Default: StoryObj = {
  render: (args) => <GlowGradientEditor {...args} />,
};

export const NoAnimation: StoryObj = {
  args: {
    animated: false,
  },
};

export const CustomStops: StoryObj = {
  args: {
    stops: [
      { color: '#f472b6', pos: 10 },
      { color: '#38bdf8', pos: 50 },
      { color: '#05ffa1', pos: 85 },
    ],
    angle: 144,
  },
};

export const CirclePreview: StoryObj = {
  args: {
    borderRadius: 70,
  },
};

export const Playground: StoryObj = {
  args: {
    borderRadius: 25,
    animated: true,
  },
};
