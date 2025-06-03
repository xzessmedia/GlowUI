import React, { ReactNode, useMemo } from 'react';
import { createTheme, ThemeProvider, ThemeOptions } from '@mui/material/styles';
import type { Shadows } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

type GlowThemeConfig = {
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
  glowIntensity: number;
  borderRadius: number;
};

type GlowThemeProviderProps = {
  config: GlowThemeConfig;
  children: ReactNode;
};

export const createGlowTheme = (config: GlowThemeConfig): ThemeOptions => ({
  palette: {
    primary: {
      main: config.primaryColor,
    },
    secondary: {
      main: config.secondaryColor,
    },
  },
  typography: {
    fontFamily: config.fontFamily,
  },
  shape: {
    borderRadius: config.borderRadius,
  },
  shadows: Array(25).fill(
    `0 4px 6px -1px rgba(${config.primaryColor}, ${config.glowIntensity})`
  ) as Shadows,
});

export const GlowThemeProvider: React.FC<GlowThemeProviderProps> = ({ config, children }) => {
  const theme = useMemo(() => createTheme(createGlowTheme(config)), [config]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};