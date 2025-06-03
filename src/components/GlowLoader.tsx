import React from 'react';
import { styled, keyframes } from '@mui/material/styles';

const spinGlow = keyframes`
  0%   { box-shadow: 0 0 14px 2px #05ffa1cc, 0 0 44px 15px #38bdf88b; }
  100% { box-shadow: 0 0 44px 15px #8b5cf680, 0 0 84px 25px #05ffa180; }
`;
const spinnerAnim = keyframes`
  0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg);}
`;

const LoaderRing = styled('div')<{
  size: number;
  thickness: number;
  color1: string;
  color2: string;
  glow: boolean;
  animated: boolean;
}>(({ size, thickness, color1, color2, glow, animated }) => ({
  width: size,
  height: size,
  borderRadius: '50%',
  border: `${thickness}px solid transparent`,
  borderTop: `${thickness}px solid ${color1}`,
  borderRight: `${thickness}px solid ${color2}`,
  boxSizing: 'border-box',
  animation: [
    `${spinnerAnim} 1.1s linear infinite`,
    glow ? `${spinGlow} 2.9s alternate infinite` : undefined,
  ].filter(Boolean).join(', '),
  boxShadow: glow
    ? `0 0 14px 2px ${color1}98, 0 0 44px 15px ${color2}63`
    : undefined,
  background: 'transparent',
  position: 'relative',
  display: 'inline-block',
  transition: 'box-shadow 0.16s',
}));

export interface GlowLoaderProps {
  size?: number;
  thickness?: number;
  color1?: string;
  color2?: string;
  glow?: boolean;
  animated?: boolean;
  style?: React.CSSProperties;
}

const GlowLoader: React.FC<GlowLoaderProps> = ({
  size = 48,
  thickness = 7,
  color1 = '#6366f1',
  color2 = '#05ffa1',
  glow = true,
  animated = true,
  style,
}) => (
  <LoaderRing
    size={size}
    thickness={thickness}
    color1={color1}
    color2={color2}
    glow={glow}
    animated={animated}
    style={style}
  />
);

export default GlowLoader;