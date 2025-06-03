import React from 'react';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import { styled, keyframes } from '@mui/material/styles';

// Glowing animation on selection
const glowPop = keyframes`
  0% {
    box-shadow: 0 0 0px 0 #0000;
    transform: scale(1);
  }
  55% {
    box-shadow: 0 0 20px 10px #8b5cf677, 0 0 40px 20px #38bdf855;
    transform: scale(1.15);
  }
  70% {
    box-shadow: 0 0 28px 16px #f472b688, 0 0 64px 36px #38bdf8aa;
    transform: scale(1.11);
  }
  100% {
    box-shadow: 0 0 10px 2px #8b5cf666;
    transform: scale(1);
  }
`;

const StyledGlowCheckbox = styled(Checkbox, {
  shouldForwardProp: (prop) =>
    !['colorVariant', 'glow', 'animated'].includes(prop as string),
})<{
  colorVariant?: 'primary' | 'secondary' | 'accent';
  glow?: boolean;
  animated?: boolean;
}>(({ colorVariant = 'primary', glow = true, animated = true }) => {
  const palette: Record<string, { glow: string; check: string; bg: string }> = {
    primary:   { glow: '#8b5cf6', check: '#6366f1', bg: '#20133d' },
    secondary: { glow: '#f472b6', check: '#9333ea', bg: '#2d143e' },
    accent:    { glow: '#05ffa1', check: '#38bdf8', bg: '#084236' }
  };
  const curr = palette[colorVariant] || palette.primary;

  return {
    '& .MuiSvgIcon-root': {
      fontSize: 30,
      borderRadius: 8,
      background: `${curr.bg}`,
      boxShadow: glow
        ? `0 0 12px 2px ${curr.glow}bb`
        : undefined,
      border: `2.2px solid ${curr.glow}`,
      color: '#fff',
      transition:
        'box-shadow 0.22s, border-color 0.22s, background 0.22s, color 0.22s, transform 0.18s',
    },
    '&.Mui-checked .MuiSvgIcon-root': {
      background: `linear-gradient(135deg, ${curr.check} 60%, ${curr.glow} 100%)`,
      color: '#fff',
      boxShadow: glow
        ? `0 0 32px 8px ${curr.glow}a8, 0 0 22px 8px ${curr.check}cc`
        : undefined,
      borderColor: curr.glow,
      ...(animated && glow
        ? {
            animation: `${glowPop} 0.74s cubic-bezier(0.2, 2.1, 0.4, 0.95)`,
          }
        : {}),
    },
    '&:hover .MuiSvgIcon-root': {
      borderColor: curr.check,
      background: `linear-gradient(90deg, ${curr.bg} 70%, ${curr.check} 110%)`,
      boxShadow: glow
        ? `0 0 22px 7px ${curr.glow}b0, 0 0 16px 7px ${curr.check}6a`
        : undefined,
    },
    '&.Mui-disabled .MuiSvgIcon-root': {
      color: '#fff7',
      background: '#394054',
      borderColor: '#e5e7eb80',
      boxShadow: 'none',
      opacity: 0.6,
    },
  };
});

interface GlowCheckboxProps extends CheckboxProps {
  colorVariant?: 'primary' | 'secondary' | 'accent';
  glow?: boolean;
  animated?: boolean;
}

const GlowCheckbox: React.FC<GlowCheckboxProps> = ({
  colorVariant = 'primary',
  glow = true,
  animated = true,
  ...rest
}) => (
  <StyledGlowCheckbox
    colorVariant={colorVariant}
    glow={glow}
    animated={animated}
    {...rest}
  />
);

export default GlowCheckbox;