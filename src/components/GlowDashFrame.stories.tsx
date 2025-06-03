import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowDashFrame from './GlowDashFrame';

const meta: Meta = {
  title: 'Components/GlowDashFrame',
  component: GlowDashFrame,
  argTypes: {
    glass: { control: 'boolean' },
    animated: { control: 'boolean' },
    borderRadius: { control: { type: 'number', min: 0, max: 80 } },
    borderColor: { control: 'color' },
  },
  args: {
    header: 'Neon Dashboard',
    sidebar: <div style={{ color: '#fff', padding: 18 }}>Sidebar Nav<br /><br />Links Here</div>,
    toolbar: <div style={{ color: '#8b5cf6', fontWeight: 700 }}>Toolbar/Actions</div>,
    main: <div style={{ color: '#fff', fontSize: 18 }}>Main dashboard content goes here.<br /><br />Try toggling variants!</div>,
    footer: <>Footer &copy; 2024</>,
    glass: true,
    animated: true,
    borderRadius: 38,
    borderColor: '#38bdf8',
  }
};

export default meta;

export const Default: StoryObj = {};

export const NoSidebar: StoryObj = {
  args: { sidebar: null }
};

export const NoFooter: StoryObj = {
  args: { footer: null }
};

export const Static: StoryObj = {
  args: { animated: false }
};

export const CustomGradient: StoryObj = {
  args: {
    gradient: 'linear-gradient(112deg,#4338ca 40%,#f472b6 130%)'
  }
};