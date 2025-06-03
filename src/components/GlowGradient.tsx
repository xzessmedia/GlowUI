import React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';

// Utility to create a CSS gradient string
const makeGradient = ({
  direction = '135deg',
  colors = ['#6366f1', '#38bdf8', '#f472b6'],
}) =>
  `linear-gradient(${direction}, ${colors.join(', ')})`;

const StyledGlowGradient = styled(Box, {
  shouldForwardProp: (prop) =>
    ![
      'gradientDirection',
      'gradientColors',
      'borderColor',
      'borderWidth',
      'borderRadius',
      'boxShadow',
    ].includes(prop as string),
})<{
  gradientDirection?: string;
  gradientColors?: string[];
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number | string;
  boxShadow?: string;
}>(
  ({
    gradientDirection = '135deg',
    gradientColors = ['#6366f1', '#38bdf8', '#f472b6'],
    borderColor = '#fff8',
    borderWidth = 3,
    borderRadius = 18,
    boxShadow = '0 0 36px 8px #8b5cf655, 0 0 42px 14px #38bdf850',
  }) => ({
    position: 'relative',
    background: makeGradient({ direction: gradientDirection, colors: gradientColors }),
    border: `${borderWidth}px solid ${borderColor}`,
    borderRadius,
    boxShadow,
    color: '#fff',
    overflow: 'hidden',
    transition: 'box-shadow 0.18s, border 0.16s',
  })
);

interface GlowGradientProps extends BoxProps {
  gradientDirection?: string;
  gradientColors?: string[];
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number | string;
  boxShadow?: string;
  children?: React.ReactNode;
}

const GlowGradient: React.FC<GlowGradientProps> = ({
  gradientDirection,
  gradientColors,
  borderColor,
  borderWidth,
  borderRadius,
  boxShadow,
  children,
  ...rest
}) => (
  <StyledGlowGradient
    gradientDirection={gradientDirection}
    gradientColors={gradientColors}
    borderColor={borderColor}
    borderWidth={borderWidth}
    borderRadius={borderRadius}
    boxShadow={boxShadow}
    {...rest}
  >
    {children}
  </StyledGlowGradient>
);

export default GlowGradient;