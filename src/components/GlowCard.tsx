import React from 'react';
import { styled, keyframes } from '@mui/material/styles';
import Box from '@mui/material/Box';

const glowAnim = keyframes`
  0%,100% {
    box-shadow: 0 0 40px 8px #8b5cf6aa, 0 0 86px 32px #38bdf888;
    border-color: #8b5cf6;
  }
  40% {
    box-shadow: 0 0 80px 18px #f472b6c0, 0 0 120px 62px #38bdf8bb;
    border-color: #f472b6;
  }
`;

const defaultGradient = 'linear-gradient(135deg, #6366f1 0%, #38bdf8 70%, #f472b6 100%)';

const StyledGlowCard = styled(Box, {
  shouldForwardProp: (prop) =>
    ![
      'gradient',
      'glass',
      'glow',
      'animated',
      'borderRadius',
      'borderColor',
      'borderWidth',
      'boxShadow',
    ].includes(prop as string),
})<{
  gradient?: string;
  glass?: boolean;
  glow?: boolean;
  animated?: boolean;
  borderRadius?: number | string;
  borderColor?: string;
  borderWidth?: number;
  boxShadow?: string;
}>(
  ({
    gradient = defaultGradient,
    glass = true,
    glow = true,
    animated = true,
    borderRadius = 28,
    borderColor = '#8b5cf6',
    borderWidth = 3.5,
    boxShadow,
  }) => ({
    position: 'relative',
    background: glass
      ? `linear-gradient(115deg, #36387244 60%, #38bdf828 120%), ${gradient}`
      : gradient,
    borderRadius,
    border: `${borderWidth}px solid ${borderColor}`,
    boxShadow:
      boxShadow ||
      (glow
        ? '0 0 60px 10px #8b5cf6aa, 0 0 120px 90px #38bdf855'
        : '0 4px 18px 3px #0001'),
    transition: 'box-shadow 0.22s, border-color 0.19s, background 0.13s, transform 0.11s',
    ...(glow && animated
      ? {
          animation: `${glowAnim} 4.8s cubic-bezier(.69,1.6,.32,.82) infinite alternate`,
        }
      : {}),
    overflow: 'hidden',
    color: '#fff',
    padding: 0,
  })
);

export interface GlowCardProps {
  children?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  gradient?: string;
  glass?: boolean;
  glow?: boolean;
  animated?: boolean;
  borderRadius?: number | string;
  borderColor?: string;
  borderWidth?: number;
  boxShadow?: string;
  style?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  headerStyle?: React.CSSProperties;
  footerStyle?: React.CSSProperties;
  overlay?: React.ReactNode;
}

const GlowCard: React.FC<GlowCardProps> = ({
  children,
  header,
  footer,
  gradient,
  glass = true,
  glow = true,
  animated = true,
  borderRadius = 28,
  borderColor = '#8b5cf6',
  borderWidth = 3.5,
  boxShadow,
  style,
  headerStyle,
  footerStyle,
  contentStyle,
  overlay,
}) => (
  <StyledGlowCard
    gradient={gradient}
    glass={glass}
    glow={glow}
    animated={animated}
    borderRadius={borderRadius}
    borderColor={borderColor}
    borderWidth={borderWidth}
    boxShadow={boxShadow}
    style={style}
  >
    {overlay && (
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 3,
          pointerEvents: 'none',
          borderRadius,
        }}
      >
        {overlay}
      </Box>
    )}
    {header && (
      <Box
        sx={{
          padding: '20px 26px 12px 26px',
          fontWeight: 800,
          fontSize: 23,
          letterSpacing: '0.01em',
          textShadow: '0 2px 8px #38bdf8ad, 0 4px 22px #9333ea44',
          zIndex: 2,
        }}
        style={headerStyle}
      >
        {header}
      </Box>
    )}
    <Box
      sx={{
        padding: header || footer ? '4px 26px 18px 26px' : '18px 26px',
        fontWeight: 500,
        fontSize: 18,
        zIndex: 2,
        position: 'relative',
      }}
      style={contentStyle}
    >
      {children}
    </Box>
    {footer && (
      <Box
        sx={{
          borderTop: '1.4px solid #fff1',
          marginTop: 3,
          padding: '12px 26px 19px 26px',
          zIndex: 2,
        }}
        style={footerStyle}
      >
        {footer}
      </Box>
    )}
  </StyledGlowCard>
);

export default GlowCard;