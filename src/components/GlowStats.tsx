import React from 'react';
import { styled, keyframes } from '@mui/material/styles';
import Box from '@mui/material/Box';
import GlowTypography, { GlowTypographyProps } from './GlowTypography';

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
  glow?: boolean;
  color?: string;
}>(({ glow = true, color = '#38bdf8' }) => ({
  background: typeof color === 'string' && color.startsWith('linear-gradient')
    ? color
    : `linear-gradient(110deg,${color}60 60%,${color} 100%)`,
  borderRadius: 18,
  border: `3px solid ${(typeof color === 'string' && !color.startsWith('linear-gradient')) ? color : '#38bdf8'}`,
  boxShadow: `0 0 18px 2px #8b5cf670, 0 0 26px 13px #38bdf822`,
  ...(glow ? { animation: `${glowAnim} 4.2s alternate infinite` } : {}),
  color: "#fff",
  textAlign: 'center',
  padding: '20px 12px 16px 12px',
  minWidth: 90,
  minHeight: 94,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'default',
    transition: 'box-shadow 0.22s, border-color 0.16s, background 0.15s, transform 0.13s',
}));

export interface GlowStatsProps {
  value: number | string;
  label: string;
  glow?: boolean;
  icon?: React.ReactNode;
  color?: string;
  style?: React.CSSProperties;
  gradientLabel?: string;
  gradientValue?: string;
  labelTypographyProps?: Partial<GlowTypographyProps>;
  valueTypographyProps?: Partial<GlowTypographyProps>;
}

const GlowStats: React.FC<GlowStatsProps> = ({
  value,
  label,
  glow = true,
  icon,
  color = '#38bdf8',
  style,
  gradientLabel,
  gradientValue,
  labelTypographyProps,
  valueTypographyProps,
}) => (
  <StatBox glow={glow} color={color} sx={style}>
    {icon && (
            <span style={{ fontSize: 32, marginBottom: 10, display: 'block', filter: 'drop-shadow(0 0 9px #8b5cf6aa)' }}>
        {icon}
      </span>
    )}
    <GlowTypography
      variant="subtitle2"
      fontWeight={700}
      glow
      gradient={gradientLabel || (typeof color === 'string' && color.startsWith('linear-gradient')
        ? color
        : `linear-gradient(93deg,#8b5cf6,#38bdf8,${color})`)}
      sx={{
        mb: 0.4,
        letterSpacing: 0.01,
        opacity: 0.95,
        textShadow: '0 0 8px #38bdf855, 0 2px 14px #8b5cf630',
        ...labelTypographyProps?.sx,
      }}
      {...labelTypographyProps}
    >
      {label}
    </GlowTypography>
    <GlowTypography
      variant="h3"
      fontWeight={900}
      glow
      glowColor={typeof color === 'string' && color.startsWith('linear-gradient') ? '#8b5cf6' : color}
      gradient={gradientValue || (typeof color === 'string' && color.startsWith('linear-gradient')
        ? color
        : `linear-gradient(90deg,#8b5cf6,${color})`)}
      sx={{
        lineHeight: 1.12,
        letterSpacing: '0.02em',
        textShadow: '0 0 26px #8b5cf6bb, 0 2px 9px #05ffa1bb',
        ...valueTypographyProps?.sx,
      }}
      {...valueTypographyProps}
    >
      {value}
    </GlowTypography>
  </StatBox>
);

export default GlowStats;