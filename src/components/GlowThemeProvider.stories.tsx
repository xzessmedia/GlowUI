import React from 'react';
import { GlowThemeProvider } from '../theme/GlowThemeProvider';
import GlowingButton from './GlowingButton';
import { Card, Typography, Box } from '@mui/material';

export default {
  title: 'Theme/GlowThemeProvider',
  component: GlowThemeProvider,
};

const DemoContent = () => (
  <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
    <Typography variant="h4" gutterBottom>Ultra Fancy UI</Typography>
    <GlowingButton>Try Me!</GlowingButton>
    <Card sx={{ mt: 3, p: 2, bgcolor: 'background.paper', color: 'text.primary', borderRadius: 3 }}>
      <Typography sx={{ fontWeight: 600 }}>Vibrant Theme Demo Card</Typography>
      <Typography variant="body2">Typography and color showcase.</Typography>
    </Card>
  </Box>
);

export const NeonGlow = () => (
  <GlowThemeProvider
    config={{
      primaryColor: '#00fff7',
      secondaryColor: '#ea00ff',
      fontFamily: 'Orbitron, "Fira Sans", Arial, sans-serif',
      glowIntensity: 1.4,
      borderRadius: 18,
    }}
  >
    <DemoContent />
  </GlowThemeProvider>
);

export const SunsetParty = () => (
  <GlowThemeProvider
    config={{
      primaryColor: '#ff4a00',
      secondaryColor: '#ffe700',
      fontFamily: 'Pacifico, cursive, Arial, sans-serif',
      glowIntensity: 1.25,
      borderRadius: 28,
    }}
  >
    <DemoContent />
  </GlowThemeProvider>
);

export const CyberpunkViolet = () => (
  <GlowThemeProvider
    config={{
      primaryColor: '#b026ff',
      secondaryColor: '#ffb800',
      fontFamily: 'Share Tech Mono, monospace',
      glowIntensity: 1.8,
      borderRadius: 24,
    }}
  >
    <DemoContent />
  </GlowThemeProvider>
);

export const MintPastel = () => (
  <GlowThemeProvider
    config={{
      primaryColor: '#b6ffe0',
      secondaryColor: '#85f6ff',
      fontFamily: 'Comfortaa, Arial, sans-serif',
      glowIntensity: 0.6,
      borderRadius: 16,
    }}
  >
    <DemoContent />
  </GlowThemeProvider>
);

export const UltraContrast = () => (
  <GlowThemeProvider
    config={{
      primaryColor: '#fff',
      secondaryColor: '#000',
      fontFamily: 'Impact, Arial Black, sans-serif',
      glowIntensity: 2.2,
      borderRadius: 10,
    }}
  >
    <DemoContent />
  </GlowThemeProvider>
);
