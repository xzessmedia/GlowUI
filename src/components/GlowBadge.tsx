import React from 'react';
import { styled, keyframes } from '@mui/material/styles';

// Neon animated ring
const ringGlowAnim = keyframes`
  0%,100% {
    box-shadow: 0 0 14px 2px #8b5cf6ea, 0 0 38px 10px #38bdf855;
    border-color: #8b5cf6;
  }
  60% {
    box-shadow: 0 0 28px 9px #f472b6d1, 0 0 74px 28px #38bdf8a3;
    border-color: #f472b6;
  }
`;
const StyledBadgeWrapper = styled('span')<{
  size: number;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  offset: number;
  parentRelative: boolean;
}>(({ size, position = 'top-right', offset, parentRelative }) => {
  const pos: any = {
    'top-left':   { top: offset, left: offset },
    'top-right':  { top: offset, right: offset },
    'bottom-left':{ bottom: offset, left: offset },
    'bottom-right':{ bottom: offset, right: offset },
    'center':     { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }
  }[position] || { top: offset, right: offset };
  return {
    display: 'inline-block',
    position: parentRelative ? 'absolute' : 'relative',
    zIndex: 2,
    ...pos,
  };
});
const StyledGlowBadge = styled('span')<{
  size: number;
  background: string;
  border: string;
  color: string;
  animated: boolean;
  boxShadow: string;
  fontSize: number;
}>(
  ({ size, background, border, color, animated, boxShadow, fontSize }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: size, minHeight: size,
    width: size, height: size,
    borderRadius: '50%',
    border,
    color,
    fontWeight: 700,
    fontSize,
    background,
    boxShadow,
    transition: 'box-shadow 0.16s, border 0.16s, background 0.14s',
    ...(animated
      ? { animation: `${ringGlowAnim} 2.6s alternate infinite` }
      : {}),
    userSelect: 'none',
    lineHeight: 1,
    overflow: 'hidden'
  })
);

export interface GlowBadgeProps {
  children?: React.ReactNode;        // Badge content
  size?: number;                     // px size of badge circle
  background?: string;               // bg color/gradient
  borderColor?: string;              // neon border color
  borderWidth?: number;
  color?: string;                    // content color
  glowColor?: string;                // neon glow color
  boxShadow?: string;                // for advanced shadow override
  fontSize?: number;
  animated?: boolean;
  position?: 'top-left'|'top-right'|'bottom-left'|'bottom-right'|'center';
  offset?: number;
  asOverlayFor?: React.ReactNode;    // If set, renders badge overlayed on top of this (relative parent)
  style?: React.CSSProperties;
}

const GlowBadge: React.FC<GlowBadgeProps> = ({
  children,
  size = 28,
  background = 'linear-gradient(120deg, #6366f1, #f472b6 60%, #38bdf8 100%)',
  borderColor = '#8b5cf6',
  borderWidth = 2.4,
  color = '#fff',
  glowColor = '#38bdf8',
  boxShadow,
  fontSize,
  animated = true,
  position = 'top-right',
  offset = -10,
  asOverlayFor,
  style,
}) => {
  const badge = (
    <StyledGlowBadge
      size={size}
      background={background}
      border={`${borderWidth}px solid ${borderColor}`}
      color={color}
      animated={animated}
      boxShadow={
        boxShadow ||
        `0 0 18px 4px ${glowColor}85, 0 0 32px 9px ${borderColor}99`
      }
      fontSize={fontSize || (size > 32 ? size * 0.57 : size * 0.70)}
      style={style}
    >
      {children}
    </StyledGlowBadge>
  );

  if (asOverlayFor) {
    return (
      <span style={{ display: 'inline-block', position: 'relative' }}>
        {asOverlayFor}
        <StyledBadgeWrapper
          size={size}
          position={position}
          offset={offset}
          parentRelative={true}
        >
          {badge}
        </StyledBadgeWrapper>
      </span>
    );
  }
  return (
    <StyledBadgeWrapper
      size={size}
      position={position}
      offset={offset}
      parentRelative={false}
    >
      {badge}
    </StyledBadgeWrapper>
  );
};

export default GlowBadge;