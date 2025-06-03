/**
 * GlowResponsive.tsx
 * Ultra-fancy, vibrant, responsive Glow Container
 *
 * Features:
 *  - 100% width with maxWidth breakpoints (xs-sm-md-lg-xl)
 *  - Responsive padding, margin, direction, alignment (props)
 *  - Glow animated background and border by default
 *  - Grid OR flex layout with Glow style (props)
 *  - The perfect base for sections, layouts, dashboards, pages
 *  - Children are always responsive (no overflow)
 *
 * Props (see interface for full docs):
 *  <GlowResponsive maxWidth="lg" p={4} align="center" direction="row">...
 */
import React from 'react';
import { styled, keyframes } from '@mui/material/styles';
import Box from '@mui/material/Box';

const breakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

const responsiveGlow = keyframes`
  0%,100% { box-shadow: 0 0 38px 12px #8b5cf677, 0 0 110px 60px #38bdf855; }
  55% { box-shadow: 0 0 120px 48px #05ffa1aa, 0 0 190px 92px #9333ea66; }
`;

const maxWidths = {
  xs: 540,
  sm: 680,
  md: 860,
  lg: 1240,
  xl: 1620,
};

interface StyledGlowRespBoxProps {
  $maxWidth?: keyof typeof maxWidths;
  $p?: number;
  $px?: number;
  $py?: number;
  $align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  $justify?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'space-between';
  $direction?: 'row' | 'column';
  $flex?: boolean;
}
const GlowRespBox = styled(Box, {
  shouldForwardProp: (prop) =>
    !['$maxWidth', '$p', '$py', '$px', '$align', '$justify', '$direction', '$flex'].includes(
      prop as string
    ),
})<StyledGlowRespBoxProps>(
  ({
    $maxWidth = 'md',
    $p = 3,
    $py,
    $px,
    $align = 'flex-start',
    $justify = 'flex-start',
    $direction = 'column',
    $flex = false,
  }) => ({
    width: '100%',
    margin: '0 auto',
    maxWidth: maxWidths[$maxWidth] || maxWidths.md,
    padding: `${$py ?? $p ?? 3}rem ${$px ?? $p ?? 3}rem`,
    display: $flex ? 'flex' : 'block',
    flexDirection: $flex ? $direction : undefined,
    alignItems: $flex ? $align : undefined,
    justifyContent: $flex ? $justify : undefined,
    minWidth: 0,
    background: 'linear-gradient(115deg, #181b3936 65%, #38bdf822 110%)',
    borderRadius: 35,
    animation: `${responsiveGlow} 8s infinite alternate`,
    boxShadow: '0 0 36px 13px #8b5cf644, 0 4px 100px 50px #38bdf822',
    position: 'relative',
    overflow: 'visible',
    '@media (max-width:1200px)': { maxWidth: maxWidths.md },
    '@media (max-width:900px)': { maxWidth: maxWidths.sm },
    '@media (max-width:600px)': {
      maxWidth: '98vw',
      borderRadius: 21,
      padding: '1.2rem 0.8rem',
    },
  })
);

export interface GlowResponsiveProps {
  children?: React.ReactNode;
  maxWidth?: keyof typeof maxWidths;
  p?: number;   // uniform padding (rem)
  px?: number;  // horizontal padding (rem)
  py?: number;  // vertical padding (rem)
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'stretch' | 'space-between';
  direction?: 'row' | 'column';
  flex?: boolean; // flex mode (vs. block)
  style?: React.CSSProperties;
  className?: string;
}

/**
 * GlowResponsive — supercharged Glow responsive container
 * See code comments above for flexible use.
 */
const GlowResponsive: React.FC<GlowResponsiveProps> = ({
  children,
  maxWidth = 'md',
  p = 3,
  px,
  py,
  align = 'start',
  justify = 'start',
  direction = 'column',
  flex = false,
  style,
  className,
}) => (
  <GlowRespBox
    $maxWidth={maxWidth}
    $p={p}
    $px={px}
    $py={py}
    $align={
      align === 'start'
        ? 'flex-start'
        : align === 'end'
        ? 'flex-end'
        : align
    }
    $justify={
      justify === 'start'
        ? 'flex-start'
        : justify === 'end'
        ? 'flex-end'
        : justify
    }
    $direction={direction}
    $flex={flex}
    style={style}
    className={className}
  >
    {children}
  </GlowRespBox>
);

export default GlowResponsive;
