import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowGradient from './GlowGradient';

const meta: Meta = {
  title: 'Ultra Fancy/GlowGradient',
  component: GlowGradient,
  args: {
    gradientDirection: '135deg',
    gradientColors: ['#6366f1', '#38bdf8', '#f472b6'],
    borderColor: '#fff9',
    borderWidth: 4,
    borderRadius: 26,
    boxShadow: undefined,
    children: (
      <div style={{
        padding: 36, textAlign: 'center',
        fontWeight: 700, fontSize: 22, color: '#fff'
      }}>
        <span role="img" aria-label="glow">🌈</span> Glowing Gradient Example
      </div>
    )
  },
  argTypes: {
    gradientColors: { control: 'object' },
    gradientDirection: { control: 'text' }
  }
};
export default meta;

export const Basic = {};

export const AccentPalette = {
  args: {
    gradientColors: ['#05ffa1', '#38bdf8', '#6366f1'],
    borderColor: '#05ffa150'
  }
};