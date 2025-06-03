import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowAnimation, { GlowAnimationProps } from './GlowAnimation';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const meta: Meta<GlowAnimationProps> = {
  title: 'Components/GlowAnimation',
  component: GlowAnimation,
  argTypes: {
    effect: {
      options: ['neonFade', 'popScale', 'slideUp', 'glassPulse', 'flipY'],
      control: 'select',
    },
    duration: { control: { type: 'number', min: 100, max: 3000, step: 100 } },
    delay: { control: { type: 'number', min: 0, max: 3000, step: 100 } },
    vibrant: { control: 'boolean' },
    glassy: { control: 'boolean' },
    color: { control: 'color' },
  },
  args: {
    effect: 'neonFade',
    duration: 1100,
    delay: 0,
    vibrant: true,
    glassy: false,
    color: '#05ffa1',
    children: <Box sx={{ p: 3, fontWeight: 700, fontSize: 22, borderRadius: 3, bgcolor: '#151322', color: '#fff' }}>Glowing Content</Box>
  },
};

export default meta;

export const Default: StoryObj<GlowAnimationProps> = {
  render: (args) => <GlowAnimation {...args} />,
};

export const WithDifferentEffects: StoryObj = {
  render: (args) => (
    <Box sx={{ display: 'flex', gap: 3 }}>
      {['neonFade', 'popScale', 'slideUp', 'glassPulse', 'flipY'].map((effect) => (
        <GlowAnimation key={effect} {...args} effect={effect as any}>
          <Box sx={{ p: 2, minWidth: 90, textAlign: 'center', bgcolor: '#201e41', borderRadius: 2, color: '#fff' }}>{effect}</Box>
        </GlowAnimation>
      ))}
    </Box>
  ),
};

export const VibrantAndGlassy: StoryObj = {
  args: {
    vibrant: true,
    glassy: true,
    effect: 'glassPulse',
    children: <Box sx={{ p: 2, borderRadius: 2, bgcolor: '#120f25', color: '#fff' }}>Vibrant + Glassy Pulse</Box>,
  },
};

export const ToggleVisibility: StoryObj = {
  render: (args) => {
    const [open, setOpen] = useState(true);
    return (
      <Box>
        <Button variant="contained" sx={{ mb: 2 }} onClick={() => setOpen((v) => !v)}>
          {open ? 'Hide' : 'Show'}
        </Button>
        <GlowAnimation {...args} in={open} mountOnEnter unmountOnExit>
          <Box sx={{ p: 2, bgcolor: '#252349', borderRadius: 2, color: '#fff' }}>Toggle Me!</Box>
        </GlowAnimation>
      </Box>
    );
  },
};

export const CustomDelayAndDuration: StoryObj = {
  args: {
    effect: 'popScale',
    duration: 2000,
    delay: 800,
    children: <Box sx={{ p: 3, bgcolor: '#170f20', borderRadius: 2, color: '#fff' }}>Delayed and Slow Pop</Box>,
  },
};