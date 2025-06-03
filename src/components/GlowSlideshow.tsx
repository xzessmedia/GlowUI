/**
 * GlowSlideshow.tsx — Ultra Fancy/Animated Vibrant Slideshow/Carousel
 *
 * Features:
 *  - Accepts array of images (or custom slide React nodes)
 *  - Glow animated borders and vibrant navigation
 *  - Keyboard, touch, and mouse navigation
 *  - Flexible: autoplay, looping, custom timing, captions, overlays
 *  - Extensible: Use for hero, gallery, portfolio, product slides, etc.
 *  - Fully responsive, Glow-themed controls and indicators
 */
import React, { useRef, useEffect, useState } from 'react';
import { styled, keyframes } from '@mui/material/styles';
import Box from '@mui/material/Box';
import GlowIconButton from './GlowIconButton';

const slideAnim = keyframes`
  0%,100% { box-shadow: 0 0 64px 24px #8b5cf655, 0 0 110px 56px #05ffa144; }
  50% { box-shadow: 0 0 120px 45px #38bdf8bb, 0 0 180px 84px #8b5cf677; }
`;

const GlowSlideWrap = styled('div')({
  borderRadius: 26,
  overflow: 'hidden',
  position: 'relative',
  boxShadow: '0 0 44px 13px #05ffa155',
  background: 'linear-gradient(120deg,#181b39 60%,#05ffa144 110%)',
  minHeight: 220,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  animation: `${slideAnim} 7s infinite alternate`,
  width: '100%',
  userSelect: 'none',
});

const Indicators = styled('div')({
  position: 'absolute',
  bottom: 17,
  left: 0,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  gap: 10,
  zIndex: 6,
});

const IndicatorDot = styled('button')<{ active: boolean }>(({ active }) => ({
  width: active ? 16 : 11,
  height: active ? 16 : 11,
  borderRadius: '50%',
  background: active
    ? 'linear-gradient(115deg,#05ffa1 30%,#38bdf8 80%)'
    : 'linear-gradient(115deg,#38bdf866 30%,#8b5cf655 120%)',
  border: 'none',
  outline: active ? '2px solid #8b5cf6' : 'none',
  boxShadow: active
    ? '0 0 10px #8b5cf6bb, 0 0 20px #05ffa1a3'
    : '0 0 4px #05ffa155',
  cursor: 'pointer',
  transition: 'all .16s',
}));

export interface GlowSlideshowSlide {
  src?: string;
  type?: 'image' | 'video' | 'custom';
  alt?: string;
  caption?: React.ReactNode;
  node?: React.ReactNode; // for 'custom'
}

export interface GlowSlideshowProps {
  slides: (GlowSlideshowSlide | string | React.ReactNode)[];
  autoplay?: boolean;
  interval?: number;
  loop?: boolean;
  showIndicators?: boolean;
  showArrows?: boolean;
  colorVariant?: 'primary' | 'secondary' | 'accent';
  radius?: number | string;
  height?: number | string;
  onSlideChange?: (idx: number) => void;
  style?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
}

const GlowSlideshow: React.FC<GlowSlideshowProps> = ({
  slides,
  autoplay = false,
  interval = 3400,
  loop = true,
  showIndicators = true,
  showArrows = true,
  colorVariant = 'accent',
  radius = 26,
  height = 310,
  onSlideChange,
  style,
  contentStyle,
}) => {
  const [idx, setIdx] = useState(0);
  const timerRef = useRef<number>();

  const realSlides = slides.map((s): GlowSlideshowSlide => {
    if (typeof s === 'string') return { src: s, type: 'image' };
    if (React.isValidElement(s)) return { node: s, type: 'custom' };
    return s;
  });
  const N = realSlides.length;

  // Autoplay effect
  useEffect(() => {
    if (autoplay && N > 1) {
      timerRef.current = window.setTimeout(() => {
        setIdx(i => (i + 1) % N);
      }, interval);
      return () => clearTimeout(timerRef.current);
    }
  }, [autoplay, interval, idx, N]);

  // Slide change callback
  useEffect(() => {
    if (onSlideChange) onSlideChange(idx);
  }, [idx, onSlideChange]);

  const next = () => setIdx(i => (i < N - 1 ? i + 1 : loop ? 0 : i));
  const prev = () => setIdx(i => (i > 0 ? i - 1 : loop ? N - 1 : i));

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
    // eslint-disable-next-line
  }, [N]);

  // Touch/Swipe navigation
  const touch = useRef<{ x: number; y: number } | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touch.current) return;
    const dx = e.changedTouches[0].clientX - touch.current.x;
    if (Math.abs(dx) > 40) {
      if (dx > 0) prev();
      else next();
    }
    touch.current = null;
  };

  // Render slide node
  const renderSlide = (slide: GlowSlideshowSlide) => {
    if (slide.type === 'custom') return slide.node;
    if (slide.type === 'video')
      return (
        <video
          src={slide.src}
          autoPlay
          loop
          muted
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: radius }}
        />
      );
    // Default: image
    return (
      <img
        src={slide.src}
        alt={slide.alt || ''}
        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: radius }}
        draggable={false}
      />
    );
  };

  return (
    <GlowSlideWrap style={{ borderRadius: radius, height, ...style }}>
      {/* Slide area */}
      <Box
        sx={{
          width: '100%',
          height: height,
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        style={contentStyle}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {renderSlide(realSlides[idx])}
        {/* Caption/overlay */}
        {realSlides[idx].caption && (
          <Box
            sx={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              fontSize: 18,
              fontWeight: 700,
              color: '#fff',
              background: 'linear-gradient(135deg,#181b398c 25%,#38bdf844 95%)',
              px: 3,
              py: 2,
              textShadow: '0 0 12px #8b5cf666',
              borderBottomLeftRadius: radius,
              borderBottomRightRadius: radius,
            }}
          >
            {realSlides[idx].caption}
          </Box>
        )}
        {/* Arrows */}
        {showArrows && N > 1 && (
          <>
            <GlowIconButton
              aria-label="Previous slide"
              onClick={prev}
              style={{
                position: 'absolute',
                left: 13,
                top: 'calc(50% - 23px)',
                zIndex: 7,
                border: 'none',
                background: '#1b1838ee',
              }}
              colorVariant={colorVariant}
            >
              <svg height="23" width="23" viewBox="0 0 23 23" fill="none"><path d="M16 2.5 7.8 11.5 16 20.5" stroke="#05ffa1" strokeWidth="2.1" strokeLinecap="round"/></svg>
            </GlowIconButton>
            <GlowIconButton
              aria-label="Next slide"
              onClick={next}
              style={{
                position: 'absolute',
                right: 13,
                top: 'calc(50% - 23px)',
                zIndex: 7,
                border: 'none',
                background: '#1b1838ee',
              }}
              colorVariant={colorVariant}
            >
              <svg height="23" width="23" viewBox="0 0 23 23" fill="none"><path d="M7 2.5l8.2 9-8.2 9" stroke="#05ffa1" strokeWidth="2.1" strokeLinecap="round"/></svg>
            </GlowIconButton>
          </>
        )}
        {/* Indicators */}
        {showIndicators && N > 1 && (
          <Indicators>
            {realSlides.map((s, i) => (
              <IndicatorDot
                key={i}
                active={i === idx}
                aria-label={i === idx ? 'Current slide' : `Go to slide ${i + 1}`}
                tabIndex={0}
                onClick={() => setIdx(i)}
              />
            ))}
          </Indicators>
        )}
      </Box>
    </GlowSlideWrap>
  );
};

export default GlowSlideshow;
