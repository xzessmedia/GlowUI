import React from 'react';
import { styled, keyframes } from '@mui/material/styles';

const fillAnim = keyframes`
  0%   { background-position: 0% 50%;}
  100% { background-position: 100% 50%;}
`;
const glowAnim = keyframes`
  0%,100% { box-shadow: 0 0 18px 4px #8b5cf675, 0 0 44px 15px #38bdf87a; }
  50%     { box-shadow: 0 0 33px 12px #f472b6ba, 0 0 99px 33px #9333ea76;}
`;

const BarWrapper = styled('div')<{
  barHeight: number;
  background: string;
  borderRadius: number;
}>(({ barHeight, background, borderRadius }) => ({
  width: '100%',
  background,
  borderRadius,
  height: barHeight,
  boxShadow: '0 2px 12px #0af4',
  overflow: 'hidden',
  position: 'relative',
}));
const FancyBar = styled('div')<{
  barColor: string;
  animated: boolean;
  barRadius: number;
  value: number;
  glow: boolean;
}>(({ barColor, animated, barRadius, value, glow }) => ({
  height: '100%',
  width: `${Math.max(0, Math.min(value, 100))}%`,
  background: barColor,
  borderRadius: barRadius,
  transition: 'width 0.43s cubic-bezier(.78,0,.31,1), background 0.18s',
  ...(animated && {
    backgroundSize: '300% 300%',
    animation: `${fillAnim} 4s linear infinite alternate`
  }),
  ...(glow && {
    boxShadow: `0 0 18px 4px #8b5cf675, 0 0 44px 15px #38bdf87a`,
    animation: `${glowAnim} 2.9s alternate infinite`
  }),
}));

export interface GlowProgressProps {
  value: number; // 0–100
  barColor?: string;
  background?: string;
  height?: number;
  borderRadius?: number;
  glow?: boolean;
  animated?: boolean;
  style?: React.CSSProperties;
}

const GlowProgress: React.FC<GlowProgressProps> = ({
  value,
  barColor = 'linear-gradient(90deg, #6366f1 5%, #05ffa1 100%)',
  background = 'linear-gradient(90deg, #18142e 10%, #2bd6ff15 100%)',
  height = 14,
  borderRadius = 32,
  glow = true,
  animated = true,
  style
}) => (
  <BarWrapper barHeight={height} background={background} borderRadius={borderRadius} style={style}>
    <FancyBar
      value={value}
      barColor={barColor}
      animated={animated}
      barRadius={borderRadius}
      glow={glow}
    />
  </BarWrapper>
);

export default GlowProgress;