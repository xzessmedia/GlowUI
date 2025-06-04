import React from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

// Presets for common gradients and glows
const GRADIENTS = {
  primary: 'linear-gradient(90deg,#00ff99 0%,#36d1c4 60%,#8b5cf6 100%)',
  secondary: 'linear-gradient(90deg,#f472b6,#8b5cf6,#38d1c4)',
  warning: 'linear-gradient(90deg,#ffab00,#00ff99)',
  error: 'linear-gradient(90deg,#ef4444,#ffab00)',
  success: 'linear-gradient(90deg,#00ff99,#38d1c4)',
};

const DEFAULT_SHADOWS = [
  '0 0 8px #00ff99',
  '0 2px 16px #36d1c4',
  '0 4px 22px #8b5cf6a8',
  '0 5px 28px #05ffa197',
];

const StyledGlowTypography = styled(Typography, {
  shouldForwardProp: (prop) =>
    ![
      'glow',
      'glowColor',
      'glowIntensity',
      'gradient',
      'shadowColors',
      'clipText'
    ].includes(prop as string),
})<{
  glow?: boolean;
  glowColor?: string;
  glowIntensity?: number;
  gradient?: string;
  shadowColors?: string[];
  fontWeight?: number | string;
  clipText?: boolean;
}>(
  ({
  glow = true,
    glowColor = '#00ff99',
    glowIntensity = 1.1,
    gradient = GRADIENTS.primary,
    shadowColors = DEFAULT_SHADOWS,
    fontWeight = 700,
    clipText = false,
  }) => ({
    color: clipText ? 'transparent' : undefined,
    fontWeight,
    letterSpacing: '0.012em',
    ...(clipText && {
      background: gradient,
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textFillColor: 'transparent',
    }),
    ...(glow && {
      textShadow:
        shadowColors.map((s) => s).join(',') +
        `,0 0 ${10 * glowIntensity}px ${glowColor}`,
      filter: `drop-shadow(0 0 ${14 * glowIntensity}px ${glowColor})`,
    }),
    transition: 'text-shadow 0.16s, color 0.22s, background 0.21s',
    cursor: 'inherit'
  })
);

export interface GlowTypographyProps extends TypographyProps {
  glow?: boolean;
  glowColor?: string;
  glowIntensity?: number;
  gradient?: string;
  shadowColors?: string[];
  fontWeight?: number | string;
  clipText?: boolean;
}

const GlowTypography: React.FC<GlowTypographyProps> = ({
  glow = true,
  glowColor,
  glowIntensity,
  gradient,
  shadowColors,
  fontWeight,
  clipText = false,
  ...rest
}) => (
  <StyledGlowTypography
    glow={glow}
    glowColor={glowColor}
    glowIntensity={glowIntensity}
    gradient={gradient}
    shadowColors={shadowColors}
    fontWeight={fontWeight}
    clipText={clipText}
    {...rest}
  />
);

export default GlowTypography;