import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowStats from './GlowStats';

const meta: Meta<typeof GlowStats> = {
  title: 'Ultra Fancy/GlowStats',
  component: GlowStats,
  argTypes: {
    value: { control: 'number' },
    label: { control: 'text' },
    glow: { control: 'boolean' },
    icon: { control: 'text' },
    color: { control: 'color' },
    style: { control: 'object' },
    gradientLabel: { control: 'text' },
    gradientValue: { control: 'text' },
    labelTypographyProps: { control: false },
    valueTypographyProps: { control: false },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(120deg,#181f28 60%,#00ff99 240%)',
          padding: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 48,
          flexWrap: 'wrap',
        }}
      >
        {Story()}
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof GlowStats>;

export const Playground: Story = {
  args: {
    label: 'Active Users',
    value: 3127,
    color: '#38bdf8',
    glow: true,
    icon: '👥',
    gradientLabel: 'linear-gradient(90deg,#00ff99,#38bdf8,#8b5cf6)',
    gradientValue: 'linear-gradient(90deg,#38bdf8,#8b5cf6 70%)',
    labelTypographyProps: { variant: 'subtitle1', fontWeight: 700, sx: { fontSize: 19, letterSpacing: 0.02 } },
    valueTypographyProps: { variant: 'h2', fontWeight: 900, sx: { fontSize: 44 } },
  }
};

// --- Multiple Vibrant Variants, All with Explicit Args ---

export const GradientBanner: Story = {
  args: {
    label: 'Rainbow Total',
    value: '1,234,567',
    color: 'linear-gradient(90deg, #ff5cf6, #00ff99 70%, #ffab00 110%)',
    glow: true,
    icon: '🌈',
    gradientLabel: 'linear-gradient(90deg,#ff5cf6,#00ff99)',
    gradientValue: 'linear-gradient(90deg,#00ff99,#ffab00)',
    labelTypographyProps: { variant: 'h5', fontWeight: 800, sx: { fontSize: 21 } },
    valueTypographyProps: { variant: 'h2', sx: { fontSize: 46 } }
  },
};

export const ModernNeon: Story = {
  args: {
    label: 'Lumens',
    value: 42000,
    color: '#8b5cf6',
    glow: true,
    icon: '💡',
    gradientLabel: 'linear-gradient(90deg,#8b5cf6,#38bdf8)',
    gradientValue: 'linear-gradient(90deg,#00ff99,#8b5cf6)',
    labelTypographyProps: { variant: 'subtitle2', fontWeight: 700 },
    valueTypographyProps: { variant: 'h1', fontWeight: 900 }
  },
};

export const LargeOutline: Story = {
  args: {
    label: 'Engagement Rate',
    value: '89.9%',
    color: 'linear-gradient(90deg,#f472b6,#38bdf8 40%,#8b5cf6)',
    glow: true,
    icon: '📈',
    style: {
      border: '3px solid #f472b6',
      boxShadow: '0 0 39px #f472b6cc,0 0 12px #38bdf8b8',
      padding: '32px 20px 28px 20px'
    },
    gradientLabel: 'linear-gradient(90deg,#f472b6,#8b5cf6)',
    gradientValue: 'linear-gradient(90deg,#8b5cf6,#38bdf8)',
    labelTypographyProps: { fontWeight: 700, sx: { fontSize: 24 } },
    valueTypographyProps: { fontWeight: 900, sx: { fontSize: 53 } },
  }
};

export const MinimalMonochrome: Story = {
  args: {
    label: 'Minimal',
    value: 0,
    color: '#7c7c7c',
    glow: false,
    icon: '📋',
    gradientLabel: undefined,
    gradientValue: undefined,
    labelTypographyProps: { variant: 'caption', fontWeight: 600, sx: { fontSize: 13, opacity: 0.8 } },
    valueTypographyProps: { variant: 'h4', fontWeight: 900, sx: { fontSize: 30, color: '#bbb' } },
    style: {
      border: '1.5px solid #7c7c7c',
      background: 'rgba(34,34,34,0.9)',
      boxShadow: 'none'
    }
  }
};

export const CustomTypography: Story = {
  args: {
    label: 'Cursive Stat',
    value: 123,
    color: '#38bdf8',
    glow: true,
    icon: '✒️',
    gradientLabel: 'linear-gradient(98deg,#e66465,#9198e5)',
    gradientValue: 'linear-gradient(93deg,#f472b6,#8b5cf6,#38bdf8 80%)',
    labelTypographyProps: {
      variant: 'h6',
      fontWeight: 700,
      sx: {
        fontFamily: 'Pacifico, cursive',
        fontSize: 22,
        letterSpacing: 0.03,
      }
    },
    valueTypographyProps: {
      variant: 'h2',
      fontWeight: 900,
      sx: {
        fontFamily: 'Monoton, cursive',
        fontSize: 42,
        letterSpacing: 0.09,
      }
    }
  }
};

// ------ Fix: Use a name property for render-only stories! ------
export const FancyRow: Story = {
  name: 'Fancy Row',
  render: () => (
    <div style={{ display: 'flex', gap: 32 }}>
      <GlowStats
        label="Fire Reactions"
        value={12345}
        color="#ef4444"
        glow
        icon="🔥"
        labelTypographyProps={{ sx: { fontSize: 17 } }}
        valueTypographyProps={{ sx: { fontSize: 34 } }}
        style={{ border: '2px solid #ef4444' }}
      />
      <GlowStats
        label="Supporters"
        value={314}
        color="#00ff99"
        glow
        icon="🤗"
        labelTypographyProps={{ sx: { fontSize: 17 } }}
        valueTypographyProps={{ sx: { fontSize: 34 } }}
        style={{ border: '2px solid #00ff99' }}
      />
      <GlowStats
        label="Cloud Uptime"
        value={99.99}
        color="linear-gradient(90deg,#38bdf8,#a5b4fc)"
        glow
        icon="☁️"
        labelTypographyProps={{ sx: { fontSize: 17 } }}
        valueTypographyProps={{ sx: { fontSize: 34 } }}
        style={{ border: '2px solid #38bdf8' }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A row of different vibrant GlowStats blocks for dashboard/overview use.'
      },
    },
  },
};
