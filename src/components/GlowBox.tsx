import React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import { styled, keyframes } from '@mui/material/styles';

const glowEffect = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px 4px #38bdf860, 0 0 72px 16px #8b5cf633;
    filter: blur(0.5px);
  }
  50% {
    box-shadow: 0 0 38px 12px #f472b670, 0 0 124px 22px #38bdf885;
    filter: blur(1.5px);
  }
`;

const StyledGlowBox = styled(Box, {
  shouldForwardProp: (prop) =>
    !['colorVariant', 'rounded', 'glow', 'gradient', 'animated'].includes(prop as string),
})<{
  colorVariant?: 'primary' | 'secondary' | 'accent';
  rounded?: boolean;
  glow?: boolean;
  gradient?: boolean;
  animated?: boolean;
}>(({ theme, colorVariant = 'primary', rounded, glow, gradient, animated }) => {
  const palette: Record<string, { base: string; glow: string; gradTo: string }> = {
    primary:   { base: '#181b39cc', glow: '#6366f1aa', gradTo: '#38bdf899' },
    secondary: { base: '#330D2885', glow: '#f472b6b8', gradTo: '#9333ea99' },
    accent:    { base: '#12382acc', glow: '#05ffa1ab', gradTo: '#38bdf899' }
  };
  const curr = palette[colorVariant] ?? palette.primary;
  let background = curr.base;
  if (gradient) {
    background = `linear-gradient(113deg, ${curr.base} 65%, ${curr.gradTo} 100%)`;
  }
  return {
    background,
    borderRadius: rounded ? 22 : 10,
    border: `2.8px solid ${curr.glow}`,
    boxShadow: glow
      ? `0 0 32px 8px ${curr.glow}55, 0 1.5px 22px 5px ${curr.gradTo}70`
      : '0 1.5px 22px 5px #0002',
    color: '#fff',
    fontWeight: 500,
    position: 'relative',
    overflow: 'hidden',
    backdropFilter: 'blur(0.5px) brightness(1.12)',
    transition: 'box-shadow 0.22s, border 0.18s, background 0.18s',
    ...(animated && glow
      ? {
          animation: `${glowEffect} 3s ease-in-out infinite alternate`
        }
      : {}),
    '&:hover': {
      boxShadow: glow
        ? `0 0 52px 18px ${curr.glow}88, 0 3.5px 32px 8px ${curr.gradTo}a0`
        : undefined,
      borderColor: `${curr.gradTo}`,
      background: gradient
        ? `linear-gradient(120deg, ${curr.base} 35%, ${curr.gradTo} 110%)`
        : undefined,
    },
  };
});

interface GlowBoxProps extends BoxProps {
  colorVariant?: 'primary' | 'secondary' | 'accent';
  rounded?: boolean;
  glow?: boolean;
  gradient?: boolean;
  animated?: boolean;
  children?: React.ReactNode;
}

const GlowBox: React.FC<GlowBoxProps> = ({
  colorVariant = 'primary',
  rounded = true,
  glow = true,
  gradient = true,
  animated = true,
  children,
  ...rest
}) => (
  <StyledGlowBox
    colorVariant={colorVariant}
    rounded={rounded}
    glow={glow}
    gradient={gradient}
    animated={animated}
    {...rest}
  >
    {children}
  </StyledGlowBox>
);

export default GlowBox;