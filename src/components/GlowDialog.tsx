import React from 'react';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import { styled, keyframes } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

// Fancy background gradient animation
const gradientAnim = keyframes`
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
`;

const glowBorder = keyframes`
  0% { box-shadow: 0 0 32px 4px #38bdf8cc, 0 0 66px 12px #9333ea85;}
  100% { box-shadow: 0 0 54px 16px #f472b6aa, 0 0 72px 22px #8b5cf655; }
`;

const StyledDialog = styled(Dialog)<{ colorVariant?: 'primary' | 'secondary' | 'accent' }>(({ colorVariant = 'primary' }) => {
  const palette: Record<string, { glow: string; grad1: string; grad2: string }> = {
    primary:   { glow: '#8b5cf6ee', grad1: '#6366f1cc', grad2: '#38bdf8d0' },
    secondary: { glow: '#f472b6', grad1: '#f472b6cc', grad2: '#9333ead0' },
    accent:    { glow: '#05ffa1', grad1: '#05ffa1d0', grad2: '#6366f1d0' }
  };
  const curr = palette[colorVariant] ?? palette.primary;
  return {
    '& .MuiPaper-root': {
      background: `linear-gradient(120deg, ${curr.grad1} 0%, ${curr.grad2} 100%)`,
      backgroundSize: '200% 200%',
      animation: `${gradientAnim} 5s ease-in-out infinite alternate`,
      borderRadius: '20px',
      position: 'relative',
      border: `3.5px solid ${curr.glow}`,
      boxShadow: `0 0 33px 5px ${curr.glow}70, 0 12px 72px 8px ${curr.glow}22`,
      filter: 'drop-shadow(0 3px 24px #fff3)',
      padding: '1px',
      overflow: 'visible',
      animationName: [gradientAnim, glowBorder].join(', '),
      animationDuration: '5s, 3.6s',
      animationTimingFunction: 'ease-in-out, ease-in-out',
      animationIterationCount: 'infinite, infinite',
    }
  };
});

const StyledTitle = styled(DialogTitle)({
  fontWeight: 900,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: '#fff',
  textShadow: '0 0 9px #8b5cf6, 0 0 22px #38bdf855',
  fontSize: '1.45rem',
  paddingRight: 48,
});

const GlowCloseBtn = styled(IconButton)({
  position: 'absolute',
  right: 16,
  top: 18,
  color: '#fff',
  background: 'rgba(68, 32, 99, 0.22)',
  backdropFilter: 'blur(1.5px)',
  borderRadius: '50%',
  boxShadow: '0 0 8px 2px #a78bfa80',
  zIndex: 2,
  transition: 'background 150ms, box-shadow 200ms',
  '&:hover': {
    background: '#8b5cf6ed',
    boxShadow: '0 0 18px 4px #8b5cf6bb',
  }
});

// Optional glassmorphic overlay for extra fanciness
const Glassmorph = styled('div')({
  position: 'absolute',
  inset: 0,
  zIndex: 0,
  pointerEvents: 'none',
  background: 'radial-gradient(ellipse at 60% 20%, #fff7 0%, #fff2 60%, transparent 100%)',
  backdropFilter: 'blur(8px) brightness(1.21)',
  borderRadius: 20,
  opacity: 0.9,
});

interface GlowDialogProps extends DialogProps {
  colorVariant?: 'primary' | 'secondary' | 'accent';
  title?: React.ReactNode;
  onClose?: () => void;
  actions?: React.ReactNode;
  fancyGlass?: boolean;
}

const GlowDialog: React.FC<GlowDialogProps> = ({
  colorVariant = 'primary',
  title,
  onClose,
  children,
  actions,
  fancyGlass = true,
  ...rest
}) => (
  <StyledDialog colorVariant={colorVariant} {...rest}>
    {fancyGlass && <Glassmorph />}
    <StyledTitle>
      {title}
      {onClose && (
        <GlowCloseBtn aria-label="close" onClick={onClose}><CloseIcon /></GlowCloseBtn>
      )}
    </StyledTitle>
    <DialogContent
      sx={{
        position: 'relative',
        zIndex: 1,
        color: '#fff',
        fontWeight: 500,
        fontSize: '1.12rem',
        textShadow: '0 0 6px #4f46e560',
      }}
    >
      {children}
    </DialogContent>
    {actions && (
      <DialogActions sx={{ zIndex: 1, borderTop: '1.5px solid #a78bfa30', marginTop: 1 }}>
        {actions}
      </DialogActions>
    )}
  </StyledDialog>
);

export default GlowDialog;