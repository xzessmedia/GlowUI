import React from 'react';
import { styled, keyframes } from '@mui/material/styles';

const glowPulse = keyframes`
  0%,100% { background-position: 0% 55%; box-shadow: 0 0 40px 10px #8b5cf677, 0 0 100px 30px #6366f133; }
  50% { background-position: 100% 47%; box-shadow: 0 0 110px 45px #38bdf877, 0 0 190px 62px #9333ea44; }
`;

const colorMap = {
  primary: {
    gradient: 'linear-gradient(90deg,#6366f1 10%, #38bdf8 60%, #8b5cf6 100%)',
    glow: '#8b5cf6',
  },
  secondary: {
    gradient: 'linear-gradient(90deg,#f472b6 10%, #9333ea 60%, #8b5cf6 100%)',
    glow: '#f472b6',
  },
  accent: {
    gradient: 'linear-gradient(90deg,#05ffa1 10%, #38bdf8 70%, #8b5cf6 95%)',
    glow: '#05ffa1',
  },
};

const StyledSkeleton = styled('div')<{
  variant: 'rect' | 'circle' | 'text';
  width: string | number;
  height: string | number;
  borderRadius: string | number;
  colorVariant: 'primary' | 'secondary' | 'accent';
  animated: boolean;
}>(({ variant, width, height, borderRadius, colorVariant, animated }) => {
  const palette = colorMap[colorVariant] || colorMap.primary;
  const style: React.CSSProperties = {
    width,
    height,
    borderRadius: variant === 'circle' ? '50%' : borderRadius,
    background: palette.gradient,
    position: 'relative',
    opacity: 0.93,
    boxShadow: `0 0 44px 6px ${palette.glow}33, 0 0 66px 14px ${palette.glow}22`,
    overflow: 'hidden',
    filter: 'blur(0px) contrast(1.1)',
    transition: 'box-shadow 0.29s, background 0.22s',
    animation: animated ? `${glowPulse} 2.15s infinite alternate cubic-bezier(.74,.2,.6,1.13)` : undefined,
    margin: variant === 'text' ? '8px 0' : undefined,
  };
  if (variant === 'text') {
    style.height = height ?? 19;
    style.borderRadius = borderRadius ?? 8;
    style.maxWidth = width ?? '100%';
  }
  return style;
});

export interface GlowSkeletonProps {
  variant?: 'rect' | 'circle' | 'text';
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  colorVariant?: 'primary' | 'secondary' | 'accent';
  animated?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const GlowSkeleton: React.FC<GlowSkeletonProps> = ({
  variant = 'rect',
  width = variant === 'circle' ? 64 : variant === 'text' ? '100%' : 120,
  height = variant === 'circle' ? 64 : variant === 'text' ? 18 : 20,
  borderRadius = variant === 'circle' ? '50%' : 16,
  colorVariant = 'primary',
  animated = true,
  style,
  className,
}) => (
  <StyledSkeleton
    variant={variant}
    width={width}
    height={height}
    borderRadius={borderRadius}
    colorVariant={colorVariant}
    animated={animated}
    style={style}
    className={className}
  />
);

export default GlowSkeleton;
