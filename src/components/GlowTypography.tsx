import React from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { styled, keyframes } from '@mui/material/styles';

// Keyframes for animated glow
const glowAnim = keyframes`
  0%, 100% {
    text-shadow:
      0 0 8px #8b5cf6cc,
      0 0 20px #38bdf8aa,
      0 2px 18px #f472b6bb;
  }
  48% {
    text-shadow:
      0 0 20px #f472b6cc,
      0 0 38px #38bdf8cc,
      0 3px 28px #8b5cf6cc;
  }
`;

// Keyframes for animated gradient text (optional)
const gradientAnim = keyframes`
  from { background-position: 0% 60%;}
  to { background-position: 100% 60%;}
`;

const StyledGlowTypography = styled(Typography, {
  shouldForwardProp: (prop) =>
    !['glow', 'glowColor', 'glowIntensity', 'animated', 'gradientText', 'gradientColors', 'gradientAngle'].includes(prop as string),
})<{
  glow?: boolean;
  glowColor?: string;
  glowIntensity?: number;
  animated?: boolean;
  gradientText?: boolean;
  gradientColors?: string[];
  gradientAngle?: string;
}>(
  ({
    glow = true,
    glowColor = "#8b5cf6",
    glowIntensity = 1.11,
    animated = true,
    gradientText = false,
    gradientColors = ["#6366f1", "#f472b6", "#38bdf8"],
    gradientAngle = "120deg",
  }) => ({
    position: 'relative',
    color: gradientText ? "transparent" : "#fff",
    fontWeight: 800,
    textTransform: 'inherit',
    letterSpacing: '0.03em',
    ...(glow && {
      textShadow: `
        0 0 ${10 * glowIntensity}px ${glowColor},
        0 0 ${34 * glowIntensity}px #38bdf880,
        0 2px ${18 * glowIntensity}px #f472b688
      `,
      ...(animated && {
        animation: `${glowAnim} 2.7s alternate infinite`
      }),
    }),
    ...(gradientText && {
      background: `linear-gradient(${gradientAngle}, ${gradientColors.join(', ')})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      backgroundSize: '220% 220%',
      backgroundPosition: '0% 60%',
      animation: animated
        ? `${gradientAnim} 3.6s linear infinite alternate`
        : undefined,
      filter: 'drop-shadow(0 0 12px #38bdf866)',
    }),
    transition: 'text-shadow 0.16s, background 0.16s'
  })
);

export interface GlowTypographyProps extends TypographyProps {
  glow?: boolean;
  glowColor?: string;
  glowIntensity?: number;
  animated?: boolean;
  gradientText?: boolean;
  gradientColors?: string[];
  gradientAngle?: string;
}

const GlowTypography: React.FC<GlowTypographyProps> = ({
  glow = true,
  glowColor,
  glowIntensity,
  animated = true,
  gradientText = false,
  gradientColors,
  gradientAngle,
  ...rest
}) => (
  <StyledGlowTypography
    glow={glow}
    glowColor={glowColor}
    glowIntensity={glowIntensity}
    animated={animated}
    gradientText={gradientText}
    gradientColors={gradientColors}
    gradientAngle={gradientAngle}
    {...rest}
  />
);

export default GlowTypography;