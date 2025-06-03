import React from 'react';
import Fab, { FabProps } from '@mui/material/Fab';
import { styled, keyframes } from '@mui/material/styles';

const glowAnimation = keyframes`
  0%, 100% { box-shadow: 0 0 18px 6px #8b5cf650, 0 0 32px 10px #38bdf830; }
  50% { box-shadow: 0 0 38px 13px #f472b680, 0 0 64px 19px #9333ea70; }
`;

const StyledGlowFab = styled(Fab, {
  shouldForwardProp: (prop) => prop !== 'colorVariant',
})<{
  colorVariant?: 'primary' | 'secondary' | 'accent';
  glowIntensity?: number;
}>(({ theme, colorVariant = 'primary', glowIntensity = 1 }) => {
  // Pick glow/gradient colors based on variant
  const palette: Record<string, { main: string; glow: string; gradTo: string }> = {
    primary:   { main: '#6366f1', glow: '#8b5cf6', gradTo: '#38bdf8' },
    secondary: { main: '#f472b6', glow: '#9333ea', gradTo: '#8b5cf6' },
    accent:    { main: '#05ffa1', glow: '#76eaff', gradTo: '#38bdf8' }
  };
  const curr = palette[colorVariant] ?? palette.primary;
  return {
    background: `linear-gradient(135deg, ${curr.main} 10%, ${curr.gradTo} 90%)`,
    color: '#fff',
    fontWeight: 700,
    fontSize: '1.25rem',
    letterSpacing: '0.04em',
    boxShadow: `0 0 ${28 * glowIntensity}px ${curr.glow}60, 0 0 ${56 * glowIntensity}px ${curr.main}20`,
    border: `2.2px solid ${curr.glow}80`,
    filter: 'contrast(1.15) drop-shadow(0 0 9px #fff6)',
    transition: 'all 0.22s cubic-bezier(.45,.8,.55,1.05)',
    animation: `${glowAnimation} 2.5s ease-in-out infinite alternate`,
    '&:hover, &:focus': {
      background: `linear-gradient(125deg, ${curr.gradTo} 18%, ${curr.main} 100%)`,
      boxShadow: `0 0 ${40 * glowIntensity}px ${curr.glow}90, 0 0 ${72 * glowIntensity}px ${curr.main}40`,
      transform: 'scale(1.07) translateY(-2px) rotate(-3deg)',
      borderColor: `${curr.gradTo}cc`,
    },
    '&:active': {
      background: `linear-gradient(135deg, ${curr.main} 28%, ${curr.gradTo} 72%)`,
      transform: 'scale(0.95)',
      boxShadow: `0 0 18px ${curr.glow}50`,
    },
    '&.Mui-disabled': {
      background: '#2d3748',
      color: '#fff8',
      borderColor: '#4b5563b5',
      boxShadow: 'none',
      opacity: 0.60,
    },
  };
});

interface GlowFabProps extends FabProps {
  colorVariant?: 'primary' | 'secondary' | 'accent';
  glowIntensity?: number;
  label?: React.ReactNode;
}

const GlowFab: React.FC<GlowFabProps> = ({
  colorVariant = 'primary',
  glowIntensity = 1,
  label,
  children,
  ...rest
}) => {
  return (
    <StyledGlowFab
      colorVariant={colorVariant}
      glowIntensity={glowIntensity}
      {...rest}
    >
      {children}
      {label && (
        <span style={{
          marginLeft: '8px',
          fontWeight: 500,
          fontSize: '1rem',
          letterSpacing: '0.05em',
        }}>
          {label}
        </span>
      )}
    </StyledGlowFab>
  );
};

export default GlowFab;