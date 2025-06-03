import React from 'react';
import { styled, keyframes } from '@mui/material/styles';
import Box from '@mui/material/Box';

const glowAnim = keyframes`
  0%,100% {
    box-shadow: 0 0 26px 8px #8b5cf680, 0 0 54px 24px #38bdf850;
    border-color: #38bdf8;
  }
  50% {
    box-shadow: 0 0 44px 14px #05ffa1bb, 0 0 72px 28px #9333ea42;
    border-color: #05ffa1;
  }
`;

const StatBox = styled(Box)<{
  gradient?: string;
  glowColor?: string;
  borderColor?: string;
  borderRadius?: number | string;
  borderWidth?: number;
  animated?: boolean;
  clickable?: boolean;
}>(
  ({
    gradient = 'linear-gradient(110deg,#6366f1 60%,#38bdf8 100%)',
    glowColor = '#8b5cf6',
    borderColor = '#38bdf8',
    borderRadius = 18,
    borderWidth = 3,
    animated = true,
    clickable = false,
  }) => ({
    background: gradient,
    borderRadius,
    border: `${borderWidth}px solid ${borderColor}`,
    boxShadow: `0 0 18px 2px ${glowColor}70, 0 0 26px 13px ${borderColor}22`,
    ...(animated ? { animation: `${glowAnim} 4.2s alternate infinite` } : {}),
    color: "#fff",
    flex: 1,
    textAlign: 'center',
    padding: '20px 12px 16px 12px',
    margin: '0 8px',
    minWidth: 90,
    minHeight: 94,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: clickable ? 'pointer' : 'default',
    transition: 'box-shadow 0.22s, border-color 0.16s, background 0.15s, transform 0.13s',
    '&:hover': clickable ? {
      boxShadow: `0 0 43px 12px ${glowColor}b8, 0 0 60px 25px ${borderColor}72`,
      background:
        'linear-gradient(120deg,#05ffa1bb 30%,#38bdf8bb 150%)',
      borderColor: '#05ffa1',
      transform: "scale(1.05)",
    } : undefined,
    '&:active': clickable ? {
      transform: "scale(0.97)"
    } : undefined,
  })
);

const StatLabel = styled('div')({
  fontSize: 15.7,
  fontWeight: 600,
  opacity: 0.95,
  marginBottom: 1,
  textShadow: '0 0 8px #38bdf855, 0 2px 14px #8b5cf630'
});
const StatValue = styled('div')({
  fontSize: 33,
  fontWeight: 900,
  lineHeight: 1.12,
  letterSpacing: '0.02em',
  textShadow: '0 0 26px #8b5cf6bb, 0 2px 9px #05ffa1bb'
});
const StatSub = styled('div')({
  fontSize: 13.2,
  fontWeight: 400,
  opacity: 0.77,
  marginTop: 3,
});

export interface GlowStatItem {
  label: React.ReactNode;
  value: React.ReactNode;
  sublabel?: React.ReactNode;
  icon?: React.ReactNode;
  gradient?: string;
  glowColor?: string;
  borderColor?: string;
  borderRadius?: number | string;
  borderWidth?: number;
  animated?: boolean;
  clickable?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export interface GlowStatsProps {
  stats: GlowStatItem[];
  gap?: number | string;
  borderRadius?: number | string;
  animated?: boolean;
  style?: React.CSSProperties;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

const GlowStats: React.FC<GlowStatsProps> = ({
  stats,
  gap = 24,
  borderRadius = 20,
  animated = true,
  style,
  header,
  footer,
}) => (
  <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 0.6,
    width: '100%',
    ...style,
  }}>
    {header && <div style={{
      textAlign: 'center',
      fontWeight: 800,
      fontSize: 22,
      marginBottom: 17,
      letterSpacing: '0.03em',
      color: '#fff',
      textShadow: '0 0 15px #38bdf8bb, 0 0 22px #05ffa1a9'
    }}>{header}</div>}
    <Box sx={{
      display: 'flex',
      gap,
      justifyContent: 'center',
      alignItems: 'stretch',
      width: '100%'
    }}>
      {stats.map((s, i) => (
        <StatBox
          key={i}
          gradient={s.gradient}
          glowColor={s.glowColor}
          borderColor={s.borderColor}
          borderRadius={s.borderRadius ?? borderRadius}
          borderWidth={s.borderWidth ?? 3}
          animated={s.animated ?? animated}
          clickable={s.clickable}
          onClick={s.onClick}
          style={s.style}
        >
          {s.icon && (
            <span style={{ fontSize: 32, marginBottom: 10, display: 'block', filter: 'drop-shadow(0 0 9px #8b5cf6aa)' }}>
              {s.icon}
            </span>
          )}
          <StatLabel>{s.label}</StatLabel>
          <StatValue>{s.value}</StatValue>
          {s.sublabel && <StatSub>{s.sublabel}</StatSub>}
        </StatBox>
      ))}
    </Box>
    {footer && <div style={{
      textAlign: 'center',
      fontWeight: 500,
      fontSize: 16,
      opacity: 0.88,
      marginTop: 15,
      color: '#05ffa1',
      textShadow: '0 0 6px #9333ea60'
    }}>{footer}</div>}
  </Box>
);

export default GlowStats;