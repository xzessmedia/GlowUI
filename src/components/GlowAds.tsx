import React, { useState } from 'react';
import { styled, keyframes } from '@mui/material/styles';
import Box from '@mui/material/Box';
import GlowCard from './GlowCard';
import GlowingButton from './GlowingButton';
import GlowIconButton from './GlowIconButton';

const pulseGlow = keyframes`
  0%,100% { box-shadow: 0 0 44px 14px #38bdf822, 0 0 130px 64px #05ffa144; }
  55% { box-shadow: 0 0 104px 54px #8b5cf6bb, 0 0 190px 92px #f472b666; }
`;

const AdBadge = styled('div')({
  fontSize: 11.8,
  fontWeight: 700,
  color: '#fff',
  background: 'linear-gradient(92deg,#fc46a6 40%,#8b5cf6 120%)',
  borderRadius: 7,
  padding: '3px 11px 3px 11px',
  boxShadow: '0 0 8px #fc46a690',
  letterSpacing: '.02em',
  marginRight: 12,
  textTransform: 'uppercase',
  display: 'inline-block',
});
const ImageBox = styled(Box)({
  flex: '0 0 auto',
  alignSelf: 'flex-start',
  borderRadius: 16,
  overflow: 'hidden',
  boxShadow: '0 0 29px #8b5cf688',
  marginRight: 18,
  background: '#121128',
  minWidth: 60,
});

export interface GlowAdsProps {
  headline?: React.ReactNode;
  subline?: React.ReactNode;
  image?: string;
  ctaLabel?: React.ReactNode;
  ctaHref?: string;
  onCtaClick?: () => void;
  badge?: React.ReactNode;
  colorVariant?: 'primary' | 'secondary' | undefined;
  borderRadius?: number | string;
  layout?: 'banner' | 'square' | 'horizontal' | 'vertical' | 'fullwidth';
  gradient?: string;
  animated?: boolean;
  children?: React.ReactNode;
  overlay?: React.ReactNode;
  onClose?: () => void;
  dismissible?: boolean;
  style?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
}

const GlowAds: React.FC<GlowAdsProps> = ({
  headline,
  subline,
  image,
  ctaLabel,
  ctaHref,
  onCtaClick,
  badge = 'Ad',
  colorVariant = 'accent',
  borderRadius = 22,
  layout = 'horizontal',
  gradient,
  animated = true,
  overlay,
  onClose,
  dismissible = false,
  children,
  style,
  contentStyle,
}) => {
  const [closed, setClosed] = useState(false);
  if (closed) return null;
  const isHorizontal = layout === 'horizontal' || layout === 'banner' || layout === 'fullwidth';
  return (
    <GlowCard
      glass
      glow
      animated={animated}
      borderRadius={borderRadius}
      gradient={
        gradient ||
        (colorVariant === 'accent'
          ? 'linear-gradient(112deg,#38bdf888 0%,#8b5cf6 60%,#05ffa1 120%)'
          : colorVariant === 'primary'
          ? 'linear-gradient(113deg,#6366f1 40%,#38bdf8 120%)'
          : 'linear-gradient(120deg,#f472b6 40%,#9333ea 100%)')
      }
      style={{
        padding: isHorizontal ? '18px 34px 17px 18px' : '22px 17px',
        minHeight: 88,
        display: isHorizontal ? 'flex' : 'block',
        alignItems: 'center',
        width: layout === 'fullwidth' ? '100%' : undefined,
        position: 'relative',
        animation: animated ? `${pulseGlow} 9.2s ease-in-out infinite alternate` : undefined,
        ...style,
      }}
      contentStyle={contentStyle}
      overlay={overlay}
    >
      {dismissible && (
        <GlowIconButton
          onClick={() => { setClosed(true); onClose?.(); }}
          shape="circle"
          colorVariant="accent"
          style={{ position: 'absolute', top: 12, right: 12, zIndex: 9 }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M5.2 5.1l7.7 7.9m0-7.9L5.2 13" stroke="#fff" strokeWidth="2.1" strokeLinecap="round"/></svg>
        </GlowIconButton>
      )}
      {image && (
        <ImageBox style={{ width: isHorizontal ? 74 : '94%', height: isHorizontal ? 74 : 130 }}>
          <img
            src={image}
            alt="ad visual"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              borderRadius: 16,
              pointerEvents: 'none',
            }}
          />
        </ImageBox>
      )}
      <Box sx={{ flex: 1, minWidth: 0, textAlign: isHorizontal ? 'left' : 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
          {badge && <AdBadge>{badge}</AdBadge>}
          <span style={{ fontWeight: 900, fontSize: 19.5, letterSpacing: '.01em', color: '#fff', textShadow: '0 0 16px #8b5cf688' }}>{headline}</span>
        </div>
        {subline && (
          <div style={{ fontSize: 14.5, fontWeight: 400, marginTop: 2, color: '#05ffa1', opacity: .92, textShadow: '0 0 10px #8b5cf644' }}>{subline}</div>
        )}
        {children}
        {ctaLabel && (
          <div style={{ marginTop: 9 }}>
            <GlowingButton
              onClick={onCtaClick}
              style={{ fontWeight: 800, padding: '8px 27px', fontSize: 16.5, borderRadius: 30, letterSpacing: '0.03em' }}
              glowIntensity={1.09}
              {...(ctaHref ? { component: 'a', href: ctaHref, target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {ctaLabel}
            </GlowingButton>
          </div>
        )}
      </Box>
    </GlowCard>
  );
};

export default GlowAds;
