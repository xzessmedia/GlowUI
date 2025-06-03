import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import GlowImage from './GlowImage';
import GlowLightbox from './GlowLightbox';

interface GlowGalleryImage {
  src: string;
  alt?: string;
  caption?: React.ReactNode;
  extra?: React.ReactNode; // Optional extra overlay or badge
}

export interface GlowGalleryProps {
  images: GlowGalleryImage[];
  columns?: number;
  gap?: number | string;
  borderRadius?: number | string;
  imageGlowColor?: string;
  imageBorderColor?: string;
  imageBorderWidth?: number;
  lightboxBorderColor?: string;
  lightboxBorderRadius?: number | string;
  lightboxBgGlass?: boolean;
  overlayOnHover?: boolean;
  showCaptionsInLightbox?: boolean;
  style?: React.CSSProperties;
}

const GalleryGrid = styled(Box)<{ columns: number; gap: number | string }>(({ columns, gap }) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${columns}, 1fr)`,
  gap,
  width: '100%',
}));

const HoverOverlay = styled('div')({
  position: 'absolute',
  inset: 0,
  borderRadius: 'inherit',
  background: 'linear-gradient(140deg, #6366f158 70%, #9333ea5c 130%)',
  opacity: 0,
  zIndex: 2,
  color: '#fff',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  transition: 'opacity 0.18s',
  fontWeight: 700,
  fontSize: '1.14rem',
  letterSpacing: '0.04em',
  padding: 16,
  pointerEvents: 'none',
  textShadow: '0 0 9px #8b5cf6, 0 0 22px #38bdf866',
});

const ImageBox = styled('div')({
  position: 'relative',
  width: '100%',
  aspectRatio: '1/1',
  cursor: 'pointer',
  overflow: 'visible',
  '&:hover': {
    zIndex: 2,
  },
  '&:hover .GlowGallery__HoverOverlay': {
    opacity: 1,
  },
  '&:focus-within .GlowGallery__HoverOverlay': {
    opacity: 1,
  },
});

const GlowGallery: React.FC<GlowGalleryProps> = ({
  images,
  columns = 3,
  gap = 22,
  borderRadius = 20,
  imageGlowColor = '#8b5cf6',
  imageBorderColor = '#38bdf8',
  imageBorderWidth = 2.5,
  lightboxBorderColor = '#9333ea',
  lightboxBorderRadius = 32,
  lightboxBgGlass = true,
  overlayOnHover = true,
  showCaptionsInLightbox = true,
  style,
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const openLightbox = (idx: number) => {
    setActiveIdx(idx);
    setLightboxOpen(true);
  };
  const closeLightbox = () => setLightboxOpen(false);

  return (
    <>
      <GalleryGrid columns={columns} gap={gap} style={style}>
        {images.map((img, idx) => (
          <ImageBox
            key={img.src + idx}
            tabIndex={0}
            onClick={() => openLightbox(idx)}
            onKeyDown={e => (e.key === 'Enter' ? openLightbox(idx) : undefined)}
            style={{ borderRadius }}
            aria-label={
              img.caption
                ? typeof img.caption === 'string'
                  ? img.caption
                  : img.alt ?? 'view image'
                : img.alt ?? `view image #${idx + 1}`
            }
          >
            <GlowImage
              src={img.src}
              alt={img.alt}
              borderRadius={borderRadius}
              glowColor={imageGlowColor}
              borderColor={imageBorderColor}
              borderWidth={imageBorderWidth}
              animated
              hoverGlow
              aspectRatio="1/1"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                zIndex: 1,
                position: 'relative',
                pointerEvents: 'none',
              }}
            />
            {img.extra && (
              <div style={{
                position: 'absolute',
                top: 8, right: 8,
                zIndex: 3,
                pointerEvents: 'auto',
              }}>{img.extra}</div>
            )}
            {overlayOnHover && img.caption && (
              <HoverOverlay className="GlowGallery__HoverOverlay">
                {img.caption}
              </HoverOverlay>
            )}
          </ImageBox>
        ))}
      </GalleryGrid>

      {/* Lightbox */}
      <GlowLightbox
        open={lightboxOpen}
        onClose={closeLightbox}
        borderColor={lightboxBorderColor}
        borderRadius={lightboxBorderRadius}
        glass={lightboxBgGlass}
        maxWidth={600}
        animated
      >
        {images[activeIdx] && (
          <div style={{ width: '100%', textAlign: 'center' }}>
            <GlowImage
              src={images[activeIdx].src}
              alt={images[activeIdx].alt}
              borderRadius={lightboxBorderRadius}
              glowColor={imageGlowColor}
              borderColor={lightboxBorderColor}
              borderWidth={2}
              hoverGlow={false}
              animated
              aspectRatio="auto"
              style={{ width: '100%', height: 'auto', maxHeight: 400, margin: '0 auto' }}
            />
            {showCaptionsInLightbox && images[activeIdx].caption && (
              <div
                style={{
                  marginTop: 20,
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: 18,
                  textShadow: '0 0 9px #9333ea90, 0 0 22px #38bdf877',
                  letterSpacing: '0.06em',
                }}>
                {images[activeIdx].caption}
              </div>
            )}
          </div>
        )}
      </GlowLightbox>
    </>
  );
};

export default GlowGallery;