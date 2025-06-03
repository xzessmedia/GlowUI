import React, { ReactNode, useState, useCallback } from 'react';
import { styled, keyframes } from '@mui/material/styles';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

// Fancy backdrop animation
const backdropAnim = keyframes`
  0% { backdrop-filter: blur(0px) brightness(0.92);}
  100% { backdrop-filter: blur(10px) brightness(1.09);}
`;

// Neon/glowy border animation
const neonAnim = keyframes`
  0%, 100% {
    box-shadow: 0 0 48px 14px #8b5cf6a0, 0 0 120px 32px #38bdf860;
    border-color: #8b5cf6;
  }
  50% {
    box-shadow: 0 0 84px 26px #f472b6d0, 0 0 200px 60px #38bdf8b0;
    border-color: #f472b6;
  }
`;

const Backdrop = styled('div')<{
  glass?: boolean;
  zIndex?: number;
}>(({ glass = true, zIndex = 1400 }) => ({
  position: 'fixed',
  zIndex,
  top: 0, left: 0, width: '100vw', height: '100vh',
  background: glass
    ? 'linear-gradient(120deg,#241d4aEE 50%,#38bdf859 120%)'
    : '#222d',
  animation: `${backdropAnim} 1s cubic-bezier(.32,1.7,.81,.71) forwards`,
  transition: 'background 0.2s, backdrop-filter 0.25s',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const NeonPanel = styled('div')<{
  borderRadius?: number | string;
  borderWidth?: number;
  borderColor?: string;
  glass?: boolean;
  maxWidth?: number | string;
  maxHeight?: number | string;
  animated?: boolean;
}>(
  ({
    borderRadius = 28,
    borderWidth = 4,
    borderColor = '#8b5cf6',
    glass = true,
    maxWidth = '88vw',
    maxHeight = '88vh',
    animated = true,
  }) => ({
    position: 'relative',
    borderRadius,
    border: `${borderWidth}px solid ${borderColor}`,
    maxWidth,
    maxHeight,
    width: 'auto',
    minWidth: 300,
    background:
      'linear-gradient(125deg,#282c67da 40%,#38bdf866 100%)',
    overflow: 'auto',
    boxShadow:
      '0 0 44px 16px #8b5cf6bb, 0 10px 98px 25px #38bdf855',
    animation: animated
      ? `${neonAnim} 5.2s ease-in-out infinite alternate` : undefined,
    transition:
      'box-shadow 0.29s, border-color 0.18s, background 0.14s, transform 0.19s',
    ...(glass
      ? {
          backdropFilter: 'blur(10px) saturate(1.25)',
          background:
            'linear-gradient(120deg, #32348f99 45%, #38bdf844 120%)',
        }
      : {}),
  })
);

const NeonCloseBtn = styled(IconButton)({
  position: 'absolute',
  top: 18,
  right: 18,
  zIndex: 2,
  color: '#fff',
  background: 'rgba(68, 32, 99, 0.22)',
  backdropFilter: 'blur(1.5px)',
  borderRadius: '50%',
  boxShadow: '0 0 14px 3px #8b5cf6a0',
  transition: 'background 150ms, box-shadow 200ms',
  '&:hover': {
    background: '#f472b6d2',
    boxShadow: '0 0 22px 7px #f472b6cc',
  },
});

export interface GlowLightboxProps {
  open?: boolean;
  onClose?: () => void;
  trigger?: ReactNode; // Child to trigger open (e.g. small img, card, etc.)
  children?: ReactNode; // What to show in the lightbox
  borderRadius?: string | number;
  borderWidth?: number;
  borderColor?: string;
  glass?: boolean;
  maxWidth?: number | string;
  maxHeight?: number | string;
  animated?: boolean;
  showCloseButton?: boolean;
  // optionally auto focus on open, etc.
}

const GlowLightbox: React.FC<GlowLightboxProps> = ({
  open: openControlled,
  onClose,
  trigger,
  children,
  borderRadius = 28,
  borderWidth = 4,
  borderColor = "#8b5cf6",
  glass = true,
  maxWidth = '88vw',
  maxHeight = '88vh',
  animated = true,
  showCloseButton = true,
}) => {
  // Internal open state for uncontrolled use
  const [internalOpen, setInternalOpen] = useState(false);
  const open = openControlled !== undefined ? openControlled : internalOpen;

  const handleOpen = useCallback(() => setInternalOpen(true), []);
  const handleClose = useCallback(() => {
    setInternalOpen(false);
    onClose && onClose();
  }, [onClose]);

  // Open on trigger click when not controlled
  const triggerWithProps = trigger
    ? React.cloneElement(trigger as any, {
        onClick: (...args: any[]) => {
          if (typeof (trigger as any).props?.onClick === 'function')
            (trigger as any).props.onClick(...args);
          handleOpen();
        },
        style: { cursor: 'pointer', ...(trigger as any).props?.style },
      })
    : null;

  return (
    <>
      {/* Trigger */}
      {triggerWithProps}
      {/* Lightbox Overlay */}
      <Fade in={!!open}>
        <Backdrop
          glass={glass}
          style={{
            pointerEvents: open ? 'auto' : 'none',
            opacity: open ? 1 : 0,
          }}
          onClick={handleClose}
        >
          {/* Stop propagation: close only when clicking the backdrop, not the panel */}
          <NeonPanel
            borderRadius={borderRadius}
            borderWidth={borderWidth}
            borderColor={borderColor}
            glass={glass}
            maxWidth={maxWidth}
            maxHeight={maxHeight}
            animated={animated}
            onClick={e => e.stopPropagation()}
          >
            {showCloseButton && (
              <NeonCloseBtn onClick={handleClose} aria-label="Close">
                <CloseIcon />
              </NeonCloseBtn>
            )}
            <div style={{ padding: 32, minHeight: 140 }}>
              {children}
            </div>
          </NeonPanel>
        </Backdrop>
      </Fade>
    </>
  );
};

export default GlowLightbox;