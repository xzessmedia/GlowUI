import React from 'react';
import { styled, keyframes } from '@mui/material/styles';

const glowPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 28px 8px #6366f1aa, 0 0 54px 14px #38bdf877;
  }
  66% {
    box-shadow: 0 0 40px 18px #f472b6bb, 0 0 80px 30px #9333ea87;
  }
`;

const StyledWrapper = styled('div')<{
  glowColor: string;
  shadow: string;
  borderRadius: string | number;
  animated?: boolean;
  hoverGlow?: boolean;
  borderWidth: number;
  borderColor: string;
}>(
  ({
    glowColor,
    shadow,
    borderRadius,
    animated = true,
    hoverGlow = true,
    borderWidth,
    borderColor,
  }) => ({
    display: 'inline-block',
    padding: 0,
    position: 'relative',
    borderRadius,
    border: `${borderWidth}px solid ${borderColor}`,
    boxShadow: shadow
      ? shadow
      : `0 0 32px 10px ${glowColor}80, 0 0 46px 18px ${glowColor}44`,
    transition: 'box-shadow 0.25s, border-color 0.15s, transform 0.13s',
    ...(animated
      ? { animation: `${glowPulse} 3.2s alternate infinite` }
      : {}),
    '&:hover': hoverGlow
      ? {
          boxShadow: `0 0 70px 30px ${glowColor}, 0 0 190px 80px ${glowColor}55`,
          transform: 'scale(1.03)',
        }
      : {},
    background: 'rgba(30,22,54,0.13)',
    overflow: 'hidden',
  })
);

const StyledImage = styled('img')<{
  borderRadius: string | number;
}>(({ borderRadius }) => ({
  width: '100%',
  height: '100%',
  display: 'block',
  borderRadius,
  objectFit: 'cover',
  boxShadow: 'none',
  pointerEvents: 'none',
  userSelect: 'none',
}));

export interface GlowImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  glowColor?: string;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: string | number;
  shadow?: string;
  animated?: boolean;
  hoverGlow?: boolean;
  aspectRatio?: string;
  wrapperStyle?: React.CSSProperties;
}

const GlowImage: React.FC<GlowImageProps> = ({
  glowColor = '#8b5cf6',
  borderColor = '#38bdf8',
  borderWidth = 3,
  borderRadius = 20,
  shadow,
  animated = true,
  hoverGlow = true,
  aspectRatio,
  wrapperStyle,
  ...imgProps
}) => (
  <StyledWrapper
    glowColor={glowColor}
    borderColor={borderColor}
    borderWidth={borderWidth}
    shadow={shadow || ''}
    borderRadius={borderRadius}
    animated={animated}
    hoverGlow={hoverGlow}
    style={{
      ...(aspectRatio
        ? { aspectRatio, width: '100%', height: 'auto', maxWidth: '100%' }
        : {}),
      ...wrapperStyle,
    }}
  >
    <StyledImage
      {...imgProps}
      borderRadius={borderRadius}
      style={{
        ...(imgProps.style || {}),
        ...(aspectRatio ? { width: '100%', height: 'auto', maxWidth: '100%' } : {}),
      }}
    />
  </StyledWrapper>
);

export default GlowImage;