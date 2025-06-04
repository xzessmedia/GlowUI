import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowGradientEditor from './GlowGradientEditor';
import GlowCard from './GlowCard';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// Simple theme state for demo
const starterTheme = {
  primary: {
    gradient: 'linear-gradient(112deg,#38bdf8 0%,#05ffa1 60%,#8b5cf6 100%)',
    stops: [
      { color: '#38bdf8', pos: 0 },
      { color: '#05ffa1', pos: 60 },
      { color: '#8b5cf6', pos: 100 },
    ],
    angle: 112,
  },
  secondary: {
    gradient: 'linear-gradient(132deg,#f472b6 10%,#9333ea 100%)',
    stops: [
      { color: '#f472b6', pos: 10 },
      { color: '#9333ea', pos: 100 },
    ],
    angle: 132,
  },
};

const meta: Meta = {
  title: 'Fancy Tools/GlowThemeEditor (Demo)',
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'dark' },
  },
};
export default meta;

const PreviewBlock = ({ label, gradient, children, style = {} }: any) => (
  <GlowCard
    glass
    animated
    style={{ marginBottom: 45, background: 'none', border: 'none', ...style }}
    borderRadius={22}
    gradient={gradient}
    contentStyle={{ minHeight: 70, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 25, padding: '1.3em 2em' }}
  >
    <Typography sx={{ fontFamily: `'Inter','Plus Jakarta Sans',sans-serif`, fontWeight: 800, color: '#fff', fontSize: 20, letterSpacing: '.04em', textTransform:'uppercase' }}>
      {label}
    </Typography>
    {children}
  </GlowCard>
);

export const InteractiveThemeBuilder: StoryObj = {
  render: () => {
    const [theme, setTheme] = useState(starterTheme);
    const handleGradient = (which: 'primary' | 'secondary', grad: string, stops: any, angle: number) => {
      setTheme((th) => ({
        ...th,
        [which]: { gradient: grad, stops, angle },
      }));
    };
    return (
      <Box sx={{ minHeight: '100vh', background: 'radial-gradient(ellipse at top,#20123a 10%,#181b39 110%)', p: 5 }}>
        <Typography sx={{
          fontFamily: `'Inter','Plus Jakarta Sans',sans-serif`,
          fontWeight: 900,
          fontSize: 32,
          color: '#05ffa1',
          mb: 2,
          letterSpacing: '.07em',
          textShadow: '0 0 26px #38bdf8',
          textTransform: 'uppercase',
        }}>
          ✨ Build Your Ultra Fancy Glow Theme
        </Typography>
        <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <Box>
            <GlowGradientEditor
              value={theme.primary.gradient}
              stops={theme.primary.stops}
              angle={theme.primary.angle}
              borderRadius={22}
              animated
              onChange={(g, s, a) => handleGradient('primary', g, s, a)}
              style={{ marginBottom: 20 }}
            />
            <PreviewBlock label="Primary Gradient" gradient={theme.primary.gradient}>
              <Button variant="contained" style={{
                background: theme.primary.gradient,
                color: '#fff',
                fontWeight: 900,
                fontSize: 16,
                borderRadius: 15,
                boxShadow: '0 0 12px #8b5cf655',
                textTransform: 'uppercase',
              }}>
                Primary Button
              </Button>
            </PreviewBlock>
          </Box>
          <Box>
            <GlowGradientEditor
              value={theme.secondary.gradient}
              stops={theme.secondary.stops}
              angle={theme.secondary.angle}
              borderRadius={22}
              animated
              onChange={(g, s, a) => handleGradient('secondary', g, s, a)}
              style={{ marginBottom: 20 }}
            />
            <PreviewBlock label="Secondary Gradient" gradient={theme.secondary.gradient}>
              <Button variant="contained" style={{
                background: theme.secondary.gradient,
                color: '#fff',
                fontWeight: 900,
                fontSize: 16,
                borderRadius: 15,
                boxShadow: '0 0 12px #fc46a655',
                textTransform: 'uppercase',
              }}>
                Secondary Button
              </Button>
            </PreviewBlock>
          </Box>
        </Box>
      </Box>
    );
  }
};
