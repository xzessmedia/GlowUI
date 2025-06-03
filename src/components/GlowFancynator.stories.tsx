import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowFancynator, { GlowFancynatorProps } from './GlowFancynator';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

const meta: Meta<GlowFancynatorProps> = {
  title: 'Ultra Fancy/GlowFancynator',
  component: GlowFancynator,
  argTypes: {
    intensity: { control: { type: 'range', min: 0.5, max: 3, step: 0.1 } },
    color: { control: 'radio', options: ['primary', 'secondary', 'accent', 'rainbow'] },
    animation: { control: 'radio', options: ['subtle', 'medium', 'wild'] },
    type: { control: 'radio', options: ['text', 'image', 'component', 'auto'] },
  },
  args: {
    intensity: 1,
    color: 'rainbow',
    animation: 'medium',
    type: 'auto',
    children: 'Make anything glow! ✨',
  },
};

export default meta;
type Story = StoryObj<GlowFancynatorProps>;

export const TextGlow: Story = {
  args: {
    type: 'text',
    children: 'Ultra-glow FANCY text',
    color: 'accent',
    intensity: 1.2,
    animation: 'wild',
  }
};

export const ButtonGlow: Story = {
  args: {
    type: 'component',
    color: 'primary',
    animation: 'medium',
    intensity: 1.5,
    children: <Button variant="contained">Glowing Button</Button>
  },
};

export const ImageGlow: Story = {
  args: {
    type: 'image',
    intensity: 1.7,
    color: 'rainbow',
    animation: 'wild',
    children: (
      <Avatar
        src="https://randomuser.me/api/portraits/men/40.jpg"
        alt="Fancy Avatar"
        sx={{ width: 120, height: 120 }}
      />
    )
  }
};

export const ComponentGlow: Story = {
  args: {
    type: 'component',
    intensity: 2.3,
    color: 'secondary',
    animation: 'subtle',
    children: (
      <div>
        <h3>Glowing Card</h3>
        <p>This entire card is glowing and beautiful. 🌈</p>
      </div>
    ),
  }
};

export const AutoType: Story = {
  args: {
    type: 'auto',
    intensity: 1,
    color: 'rainbow',
    animation: 'medium',
    children: <span>Let me auto-glow and guess!</span>,
  }
};
