import React from 'react';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled, keyframes } from '@mui/material/styles';

// Neon Glow Animation
const glowHover = keyframes`
  0%, 100% {
    box-shadow: 0 0 14px 6px #6366f155, 0 0 38px 15px #8b5cf633;
  }
  60% {
    box-shadow: 0 0 28px 12px #f472b677, 0 0 80px 22px #38bdf88e;
  }
`;

const StyledGlowIconButton = styled(IconButton, {
  shouldForwardProp: (prop) =>
    !['colorVariant', 'glow', 'animated', 'shape'].includes(prop as string),
})<{
  colorVariant?: 'primary' | 'secondary' | 'accent';
  glow?: boolean;
  animated?: boolean;
  shape?: 'circle' | 'rounded' | 'squircle';
}>(({ colorVariant = 'primary', glow = true, animated = true, shape = 'circle' }) => {
  const palette: Record<string, { glow: string; back: string; hover: string }> = {
    primary:   { glow: '#8b5cf6', back: '#6366f140', hover: '#38bdf88c' },
    secondary: { glow: '#f472b6', back: '#9333ea30', hover: '#f472b6a0' },
    accent:    { glow: '#05ffa1', back: '#05ffa160', hover: '#38bdf8b0' }
  };
  const curr = palette[colorVariant] || palette.primary;

  let radius = '50%';
  if (shape === 'rounded') radius = '12px';
  if (shape === 'squircle') radius = '36%';

  return {
    background: curr.back,
    borderRadius: radius,
    border: glow ? `2.5px solid ${curr.glow}` : undefined,
    boxShadow: glow ? `0 0 18px 4px ${curr.glow}70` : undefined,
    transition: 'box-shadow 200ms, border-color 150ms, background 150ms, transform 120ms',
    color: '#fff',
    ...(animated && glow ? {
      animation: `${glowHover} 2.2s alternate infinite`
    } : {}),
    '&:hover': {
      background: curr.hover,
      transform: 'scale(1.12) rotate(-4deg)',
      borderColor: curr.hover,
      boxShadow: glow
        ? `0 0 40px 16px ${curr.glow}cf, 0 2.5px 16px 8px ${curr.hover}80`
        : undefined,
    },
    '&:active': {
      transform: 'scale(0.95) rotate(0deg)',
      transition: 'all 80ms',
    },
    '&.Mui-disabled': {
      background: '#2d374820',
      color: '#fff7',
      borderColor: '#e5e7eb40',
      boxShadow: 'none',
      opacity: 0.5,
    },
  };
});

interface GlowIconButtonProps extends IconButtonProps {
  colorVariant?: 'primary' | 'secondary' | 'accent';
  glow?: boolean;
  animated?: boolean;
  shape?: 'circle' | 'rounded' | 'squircle';
}

const GlowIconButton: React.FC<GlowIconButtonProps> = ({
  colorVariant = 'primary',
  glow = true,
  animated = true,
  shape = 'circle',
  ...rest
}) => (
  <StyledGlowIconButton
    colorVariant={colorVariant}
    glow={glow}
    animated={animated}
    shape={shape}
    {...rest}
  />
);

export default GlowIconButton;