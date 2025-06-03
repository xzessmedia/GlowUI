import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowAppbar from './GlowAppbar';
import { GlowThemeProvider } from '../theme/GlowThemeProvider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';

const themeConfig = {
  primaryColor: '#6366f1',
  secondaryColor: '#f472b6',
  fontFamily: 'Montserrat, Arial, sans-serif',
  glowIntensity: 0.22,
  borderRadius: 16,
};

const meta: Meta = {
  title: 'Components/GlowAppbar',
  component: GlowAppbar,
  decorators: [
    (Story) => (
      <GlowThemeProvider config={themeConfig}>
        <div style={{ background: '#181433', minHeight: '100vh', padding: 0 }}>
          <Story />
        </div>
      </GlowThemeProvider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    variantStyle: {
      control: 'radio',
      options: ['neon', 'gradient', 'classic'],
    },
    fancy: { control: 'boolean' }
  },
  args: {
    title: 'Glow Appbar',
    variantStyle: 'neon',
    fancy: true,
  },
};

export default meta;

export const Neon: StoryObj = {
  args: {
    variantStyle: 'neon',
    fancy: true,
    left: (
      <IconButton>
        <MenuIcon sx={{ color: '#fff' }} />
      </IconButton>
    ),
    right: (
      <IconButton>
        <SettingsIcon sx={{ color: '#fff' }} />
      </IconButton>
    ),
  },
};

export const Gradient: StoryObj = {
  args: {
    variantStyle: 'gradient',
    fancy: false,
  },
};

export const Classic: StoryObj = {
  args: {
    variantStyle: 'classic',
    fancy: false,
  },
};

export const WithChildren: StoryObj = {
  args: {
    children: (
      <span style={{ color: '#05ffa1', marginLeft: 16, fontWeight: 700 }}>
        <span role="img" aria-label="star">✨</span> Pro UI
      </span>
    ),
  },
};