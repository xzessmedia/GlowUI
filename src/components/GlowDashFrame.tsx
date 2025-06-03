import React from 'react';
import { styled, keyframes } from '@mui/material/styles';
import Box from '@mui/material/Box';

// Neon dashboard frame animation
const glowDashAnim = keyframes`
  0%,100% {
    box-shadow: 0 0 46px 8px #05ffa16a, 0 0 120px 60px #8b5cf64e;
    border-color: #38bdf8;
  }
  40% {
    box-shadow: 0 0 88px 23px #9333ea95, 0 0 200px 120px #f472b661;
    border-color: #9333ea;
  }
`;

// Ultra-fancy background wrapper
const GlowDashOuter = styled(Box)<{
  gradient?: string;
  borderRadius?: number | string;
  glass?: boolean;
  borderColor?: string;
  borderWidth?: number;
  animated?: boolean;
}>(
  ({
    gradient = 'linear-gradient(120deg,#1e1b4b 70%,#38bdf8 130%)',
    borderRadius = 38,
    glass = true,
    borderColor = '#38bdf8',
    borderWidth = 5,
    animated = true,
  }) => ({
    position: "relative",
    minHeight: "94vh",
    width: "100%",
    background: glass
      ? `linear-gradient(120deg, #312e8188 56%, #1e1b4baa 130%), ${gradient}`
      : gradient,
    borderRadius,
    border: `${borderWidth}px solid ${borderColor}`,
    boxShadow: '0 0 60px 24px #9333ea59, 0 4px 220px 30px #05ffa126',
    overflow: "hidden",
    transition: 'box-shadow 0.22s, border-color 0.19s, background 0.19s',
    ...(animated
      ? { animation: `${glowDashAnim} 6.3s alternate infinite` }
      : {}),
    display: "flex",
    flexDirection: "column",
    zIndex: 0,
  })
);

// Main dashboard body (side/main vertical responsive)
const DashBody = styled('div')({
  display: "flex",
  flexDirection: "row",
  flex: 1,
  minHeight: 0,
  minWidth: 0,
  width: "100%",
  position: "relative",
  zIndex: 1,
  '@media (max-width: 950px)': {
    flexDirection: "column",
  }
});

// Sidebar
const DashSidebar = styled(Box)<{borderColor?: string}>(({ borderColor = '#38bdf8' }) => ({
  minWidth: 220,
  maxWidth: 320,
  width: '20vw',
  borderRight: `2.5px solid ${borderColor}55`,
  background: 'linear-gradient(120deg, #1e293b88 10%, #9333ea11 100%)',
  backdropFilter: "blur(2px)",
  color: '#fff',
  zIndex: 2,
  position: "relative",
  transition: "border 0.16s",
  '@media (max-width: 950px)': {
    width: "100%", minWidth: 0, maxWidth: 'auto', borderRight: 0, borderBottom: `2.5px solid ${borderColor}55`,
  }
}));

// Main content
const DashMain = styled(Box)({
  flex: 1,
  minWidth: 0,
  minHeight: 0,
  zIndex: 1,
  position: "relative",
  padding: "38px 32px 33px 32px",
  display: "flex",
  flexDirection: "column",
  gap: 32,
});

// Toolbar
const DashToolbar = styled(Box)({
  padding: "18px 36px 0 36px",
  minHeight: 70,
  zIndex: 8,
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 18,
});

// Footer
const DashFooter = styled(Box)({
  padding: "16px 36px 16px 36px",
  background: 'linear-gradient(90deg, #312e8166 60%, #8b5cf622 100%)',
  borderTop: '2px solid #38bdf822',
  textAlign: "center",
  minHeight: 62,
  color: "#05ffa1",
  fontWeight: 600,
  fontSize: 18,
  zIndex: 2,
  position: "relative",
});

export interface GlowDashFrameProps {
  header?: React.ReactNode;
  sidebar?: React.ReactNode;
  toolbar?: React.ReactNode;
  main?: React.ReactNode;
  footer?: React.ReactNode;
  floating?: React.ReactNode;
  overlay?: React.ReactNode;
  background?: React.ReactNode;
  gradient?: string;
  glass?: boolean;
  borderColor?: string;
  borderRadius?: number | string;
  borderWidth?: number;
  animated?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const GlowDashFrame: React.FC<GlowDashFrameProps> = ({
  header,
  sidebar,
  toolbar,
  main,
  footer,
  floating,
  overlay,
  background,
  gradient,
  glass = true,
  borderColor = '#38bdf8',
  borderRadius = 38,
  borderWidth = 5,
  animated = true,
  style,
  className,
}) => (
  <GlowDashOuter
    gradient={gradient}
    glass={glass}
    borderColor={borderColor}
    borderRadius={borderRadius}
    borderWidth={borderWidth}
    animated={animated}
    style={style}
    className={className}
  >
    {background && <Box
      sx={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
      {background}
    </Box>}
    {header && (
      <Box
        sx={{
          fontWeight: 900,
          fontSize: 27,
          letterSpacing: ".01em",
          px: 4, pt: 3, pb: 2,
          color: "#05ffa1",
          textShadow: '0 2px 12px #38bdf8b8, 0 4px 78px #9333ea73',
          zIndex: 3,
          position: "relative",
        }}>
        {header}
      </Box>
    )}
    {toolbar && (
      <DashToolbar>{toolbar}</DashToolbar>
    )}
    <DashBody>
      {sidebar && (
        <DashSidebar borderColor={borderColor}>{sidebar}</DashSidebar>
      )}
      <DashMain>
        {main}
      </DashMain>
    </DashBody>
    {footer && (
      <DashFooter>{footer}</DashFooter>
    )}
    {floating && (
      <Box
        sx={{
          position: "fixed",
          right: 44,
          bottom: 44,
          zIndex: 999,
        }}>
        {floating}
      </Box>
    )}
    {overlay && (
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          zIndex: 99990,
          pointerEvents: "auto",
        }}>
        {overlay}
      </Box>
    )}
  </GlowDashOuter>
);

export default GlowDashFrame;