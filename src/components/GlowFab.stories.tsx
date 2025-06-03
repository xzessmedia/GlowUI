import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowFab from './GlowFab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const meta: Meta = {
  title: 'Ultra Fancy/GlowFab',
  component: GlowFab,
  argTypes: {
    color: { control: 'color' },
    size: { control: 'radio', options: ['small', 'medium', 'large'] },
    glow: { control: 'boolean' },
    animated: { control: 'boolean' },
    variant: { control: 'radio', options: ['circular', 'extended'] },
  },
};

export default meta;
type Story = StoryObj;

export const NeonAdd: Story = {
  args: {
    children: <AddIcon />,
    color: '#05ffa1',
    size: 'large',
    glow: true,
    animated: true,
    variant: 'circular'
  },
  parameters: {
    docs: { description: { story: 'Neon aqua floating action button with intense glow.' } },
    backgrounds: { default: 'dark' }
  }
};

export const PinkExtendedEdit: Story = {
  args: {
    children: <><EditIcon /> Edit Mode</>,
    color: '#f472b6',
    size: 'medium',
    glow: true,
    animated: true,
    variant: 'extended'
  },
  parameters: {
    docs: { description: { story: 'Pink, glowing, extended FAB with edit icon.' } },
    backgrounds: { default: 'dark' }
  }
};

export const RocketPurple: Story = {
  args: {
    children: <RocketLaunchIcon fontSize="large" />, 
    color: '#9333ea',
    size: 'large',
    glow: true,
    animated: true,
    variant: 'circular'
  },
  parameters: {
    docs: { description: { story: 'Purple rocket FAB — for launching something epic!' } },
    backgrounds: { default: 'dark' }
  }
};

export const MinimalGrey: Story = {
  args: {
    children: <AddIcon />, 
    color: '#7c7c7c',
    size: 'small',
    glow: false,
    animated: false,
    variant: 'circular'
  },
  parameters: {
    docs: { description: { story: 'Minimal, non-glowing grey FAB.' } },
    backgrounds: { default: 'light' }
  }
};
