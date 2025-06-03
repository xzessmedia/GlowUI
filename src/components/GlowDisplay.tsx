import React from "react";
import { styled, keyframes } from "@mui/material/styles";
import Box from "@mui/material/Box";
import GlowCard from "./GlowCard";
import GlowingButton from "./GlowingButton";
import Badge from "@mui/material/Badge";

const outerPulse = keyframes`
  0%,100% { box-shadow: 0 0 54px 25px #05ffa166, 0 0 190px 80px #8b5cf655; }
  50%   { box-shadow: 0 0 110px 60px #8b5cf6aa, 0 0 320px 110px #38bdf844; }
`;

const ImageGlowWrapper = styled("div")<{
  glowColor: string;
  borderRadius: number | string;
  animated: boolean;
}>(({ glowColor, borderRadius, animated }) => ({
  position: "relative",
  overflow: "visible",
  borderRadius,
  background: "rgba(24,25,56,.87)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: `0 0 72px 21px ${glowColor}77, 0 0 132px 70px ${glowColor}55`,
  filter: "contrast(1.17)",
  animation: animated ? `${outerPulse} 7s cubic-bezier(.6,.05,.9,.4) infinite alternate` : undefined,
  'img': {
    borderRadius,
    background: '#121233',
    width: '100%',
    height: 'auto',
    boxShadow: `0 0 38px 10px ${glowColor}55`,
    display: 'block',
  }
}));

const BadgeWrapper = styled('div')({
  position: 'absolute',
  top: 10,
  left: 14,
  zIndex: 10,
  display: 'flex',
  gap: 10,
});

const InfoBox = styled(Box)<{ align: 'left' | 'center' | 'right' }>(({ align }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center',
  justifyContent: 'center',
  gap: '8px',
  padding: '8px 0',
  textShadow: '0 2px 18px #8b5cf6bb, 0 2px 8px #9333ea44',
}));

export interface GlowDisplayProps {
  image: string;
  title: React.ReactNode;
  price: React.ReactNode;
  onClick?: () => void;
  ctaLabel?: React.ReactNode;
  direction?: 'row' | 'column';
  badgeContent?: React.ReactNode[];
  glowColor?: string;
  borderRadius?: number | string;
  animated?: boolean;
  overlay?: React.ReactNode;
  infoAlign?: 'left' | 'center' | 'right';
  style?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  ctaProps?: React.ComponentProps<typeof GlowingButton>;
  ctaGlow?: number;
}

const GlowDisplay: React.FC<GlowDisplayProps> = ({
  image,
  title,
  price,
  onClick,
  ctaLabel = "Buy Now",
  direction = "row",
  badgeContent,
  glowColor = "#8b5cf6",
  borderRadius = 32,
  animated = true,
  overlay,
  infoAlign = 'center',
  style,
  contentStyle,
  ctaProps = {},
  ctaGlow = 1.23,
}) => (
  <GlowCard
    glass
    glow
    animated
    borderRadius={borderRadius}
    gradient={`linear-gradient(120deg, #101031 60%, ${glowColor} 120%)`}
    style={{ padding: 0, display: 'flex', flexDirection: direction, alignItems: 'stretch', minHeight: 320, ...style }}
    contentStyle={{ padding: 0, display: 'flex', flexDirection: direction, alignItems: 'stretch', ...contentStyle }}
    overlay={overlay}
  >
    <Box sx={{ flex: direction === 'row' ? '0 0 265px' : '0 0 auto', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 280, minWidth: 210, p: direction === 'row' ? '38px 0 38px 18px' : '38px 0 0 0' }}>
      {badgeContent?.length && (
        <BadgeWrapper>
          {badgeContent.map((b, i) => <span key={i}>{b}</span>)}
        </BadgeWrapper>
      )}
      <ImageGlowWrapper glowColor={glowColor} borderRadius={borderRadius} animated={animated}>
        <img src={image} alt="Product" />
      </ImageGlowWrapper>
    </Box>
    <InfoBox align={infoAlign} sx={{ flex: 1, justifyContent: 'center', px: 0, py: 0, minWidth: 0 }}>
      <div style={{ fontSize: 27, fontWeight: 800, color: '#fff', lineHeight: 1.18 }}>{title}</div>
      <div style={{ fontSize: 22, fontWeight: 600, color: '#05ffa1', margin: '4px 0 8px 0', letterSpacing: '0.04em' }}>{price}</div>
      <GlowingButton
        onClick={onClick}
        style={{ fontWeight: 800, padding: '11px 34px', fontSize: 19, marginTop: 6, letterSpacing: '0.04em', borderRadius: 88 }}
        glowIntensity={ctaGlow}
        {...ctaProps}
      >{ctaLabel}</GlowingButton>
    </InfoBox>
  </GlowCard>
);

export default GlowDisplay;
