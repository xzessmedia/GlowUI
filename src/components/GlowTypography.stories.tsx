import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowTypography from './GlowTypography';

const meta: Meta = {
  title: 'Ultra Fancy/GlowTypography',
  component: GlowTypography,
  args: {
    children: 'Glowing Headline',
    variant: 'h4',
    color: '#38bdf8',
    glow: true,
  },
  argTypes: {
    children: { control: 'text' },
    variant: { control: 'select', options: ['h1','h2','h3','h4','h5','h6','subtitle1','subtitle2','body1','body2','caption','overline'] },
    color: { control: 'color' },
    glow: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj;

export const Playground: Story = { args: {} };
