import React from 'react';
import Avatar, { AvatarProps } from '@mui/material/Avatar';
import { styled, keyframes } from '@mui/material/styles';

// Animated neon glow
const glowPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 0px 0 #0000, 0 1px 16px 4px #8b5cf677, 0 0 32px 12px #38bdf833;
  }
  70% {
    box-shadow: 0 0 22px 4px #f472b670, 0 0 42px 14px #38bdf8aa;
  }
`;

const StyledGlowAvatar = styled(Avatar, {
  shouldForwardProp: (prop) => !['colorVariant', 'glow', 'shape', 'animated'].includes(prop as string),
})<{
  colorVariant?: 'primary' | 'secondary' | 'accent';
  glow?: boolean;
  shape?: 'circle' | 'rounded' | 'squircle';
  animated?: boolean;
}>(({ colorVariant = 'primary', glow = true, shape = 'circle', animated = true }) => {
  const palette: Record<string, { glow: string; grad: string; bg: string }> = {
    primary: { glow: '#8b5cf6', grad: 'linear-gradient(135deg, #6366f1 60%, #f472b6 100%)', bg: '#1e1b4b' },
    secondary: { glow: '#f472b6', grad: 'linear-gradient(135deg, #f472b6 40%, #9333ea 100%)', bg: '#3f133a' },
    accent: { glow: '#05ffa1', grad: 'linear-gradient(135deg, #05ffa1 40%, #6366f1 100%)', bg: '#062926' },
  };
  const style = palette[colorVariant] || palette.primary;

  let radius = '50%';
  if (shape === 'rounded') radius = '16px';
  if (shape === 'squircle') radius = '36%';

  return {
    background: style.grad,
    color: '#fff',
    border: `2.5px solid ${style.glow}`,
    borderRadius: radius,
    boxShadow: glow
      ? `0 0 14px 4px ${style.glow}60, 0 1.5px 18px 4px ${style.glow}33`
      : undefined,
    transition: 'box-shadow 0.24s, border-color 0.18s',
    ...(animated && glow
      ? {
          animation: `${glowPulse} 2.4s alternate infinite`
        }
      : {}),
    overflow: 'hidden',
    fontWeight: 700,
    fontSize: '1.15em',
    letterSpacing: '0.06em',
  };
});

interface GlowAvatarProps extends AvatarProps {
  colorVariant?: 'primary' | 'secondary' | 'accent';
  glow?: boolean;
  shape?: 'circle' | 'rounded' | 'squircle';
  animated?: boolean;
}

const GlowAvatar: React.FC<GlowAvatarProps> = ({
  colorVariant = 'primary',
  glow = true,
  shape = 'circle',
  animated = true,
  ...rest
}) => (
  <StyledGlowAvatar
    colorVariant={colorVariant}
    glow={glow}
    shape={shape}
    animated={animated}
    {...rest}
  />
);

export default GlowAvatar;