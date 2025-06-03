import React, { useRef, useState } from 'react';
import { styled, keyframes } from '@mui/material/styles';
import Popover from '@mui/material/Popover';
import Grow from '@mui/material/Grow';
import Box from '@mui/material/Box';
import GlowingButton from './GlowingButton';
import GlowCard from './GlowCard';
import GlowIconButton from './GlowIconButton';

const popGlowAnim = keyframes`
  0%, 100% { box-shadow: 0 0 44px 8px #8b5cf666, 0 0 112px 32px #9333ea33; }
  50% { box-shadow: 0 0 120px 44px #05ffa1bb, 0 0 210px 80px #38bdf844; }
`;

const GlowSurface = styled(GlowCard)(({ theme }) => ({
  minWidth: 470,
  maxWidth: 1200,
  minHeight: 188,
  borderRadius: 30,
  padding: '22px 32px 26px 32px',
  background: 'linear-gradient(113deg,#151531 55%,#38bdf888 130%)',
  filter: 'drop-shadow(0 12px 36px #05ffa165)',
  animation: `${popGlowAnim} 7s cubic-bezier(.53,.32,.81,1.2) infinite alternate`,
  border: '3.3px solid #8b5cf6',
  boxShadow: '0 0 92px 32px #8b5cf666',
  overflow: 'visible',
  color: '#fff',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  gap: 44,
}));

// MegaMenu section layout styles
const Column = styled(Box)({
  flex: '1 1 190px',
  minWidth: 180,
  maxWidth: 340,
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});
const SectionHeader = styled('div')({
  fontWeight: 800,
  fontSize: 17,
  letterSpacing: '0.04em',
  marginBottom: 5,
  marginTop: 1,
  color: '#05ffa1',
  textShadow: '0 0 14px #38bdf8bb, 0 2px 14px #9333ea44'
});
const ItemLink = styled('a')({
  fontSize: 15.7,
  fontWeight: 500,
  color: '#fff',
  textDecoration: 'none',
  borderRadius: 10,
  padding: '8px 19px 8px 11px',
  margin: '1.5px 0',
  background: 'linear-gradient(90deg,#22225800 50%,#38bdf811 120%)',
  boxShadow: '0 0 10px #8b5cf60a',
  transition: 'background 0.15s, color 0.13s',
  display: 'flex',
  alignItems: 'center',
  gap: 11,
  cursor: 'pointer',
  '&:hover, &:focus': {
    background: 'linear-gradient(90deg,#38bdf840 26%,#05ffa1bb 138%)',
    color: '#1e293b',
    outline: 'none',
  },
});
const PromoBox = styled(Box)({
  borderRadius: 22,
  marginTop: 21,
  background: 'linear-gradient(118deg,#05ffa125 70%,#8b5cf644 108%)',
  padding: '13px 28px',
  textAlign: 'center',
  fontWeight: 700,
  color: '#38bdf8',
  boxShadow: '0 0 32px #8b5cf635',
  fontSize: 18,
  letterSpacing: '0.01em',
});

export interface GlowMegaMenuSection {
  header?: React.ReactNode;
  items: { label: React.ReactNode; href?: string; icon?: React.ReactNode; onClick?: () => void }[];
}

export interface GlowMegaMenuProps {
  label?: React.ReactNode;
  icon?: React.ReactNode;
  sections?: GlowMegaMenuSection[];
  promo?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  anchorOrigin?: { vertical: 'top' | 'bottom'; horizontal: 'left' | 'right' };
  transformOrigin?: { vertical: 'top' | 'bottom'; horizontal: 'left' | 'right' };
  children?: React.ReactNode;  // for completely custom content
  triggerProps?: React.ComponentProps<typeof GlowingButton>;
  style?: React.CSSProperties;
  menuStyle?: React.CSSProperties;
}

const defaultAnchor = { vertical: 'bottom', horizontal: 'left' };
const defaultTransform = { vertical: 'top', horizontal: 'left' };

const GlowMegaMenu: React.FC<GlowMegaMenuProps> = ({
  label = 'Menu',
  icon,
  sections,
  promo,
  children,
  open: openProp,
  onOpenChange,
  anchorOrigin = defaultAnchor,
  transformOrigin = defaultTransform,
  triggerProps,
  style,
  menuStyle,
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = typeof openProp === 'boolean' ? openProp : internalOpen;
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleOpen = () => {
    setInternalOpen(true);
    onOpenChange?.(true);
  };
  const handleClose = () => {
    setInternalOpen(false);
    onOpenChange?.(false);
  };

  // Keyboard accessibility (arrow/esc)
  const onKeyDown: React.KeyboardEventHandler = (e) => {
    if (e.key === 'Escape') {
      handleClose();
      anchorRef.current?.focus();
    }
  };

  return (
    <>
      <GlowingButton
        ref={anchorRef}
        colorVariant="primary"
        glowIntensity={1.1}
        onClick={handleOpen}
        style={{ fontWeight: 800, fontSize: 17, letterSpacing: '.02em', padding: '10px 33px', borderRadius: 44, ...triggerProps?.style }}
        {...triggerProps}
      >
        {icon && <span style={{ marginRight: 11 }}>{icon}</span>}
        {label}
      </GlowingButton>
      <Popover
        open={open}
        anchorEl={anchorRef.current}
        onClose={handleClose}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        PaperProps={{ style: { background: 'none', boxShadow: 'none', overflow: 'visible', ...menuStyle } }}
        slotProps={{ root: { onKeyDown } }}
        transitionDuration={210}
        TransitionComponent={Grow}
        disableRestoreFocus
      >
        <GlowSurface style={style}>
          {children ? (
            children
          ) : (
            <>
              {sections && sections.length > 0 && (
                <>
                  {sections.map((section, idx) => (
                    <Column key={idx}>
                      {section.header && <SectionHeader>{section.header}</SectionHeader>}
                      {section.items.map((item, i) => (
                        item.href ? (
                          <ItemLink href={item.href} key={i} tabIndex={0}>
                            {item.icon && <span>{item.icon}</span>}
                            {item.label}
                          </ItemLink>
                        ) : (
                          <ItemLink
                            as="button"
                            key={i}
                            tabIndex={0}
                            style={{ background: 'none', cursor: 'pointer', border: 'none' }}
                            onClick={item.onClick}
                          >
                            {item.icon && <span>{item.icon}</span>}
                            {item.label}
                          </ItemLink>
                        )
                      ))}
                    </Column>
                  ))}
                </>
              )}
              {/* Promo */}
              {promo && <PromoBox>{promo}</PromoBox>}
            </>
          )}
          {/* Absolute close btn (top-right) */}
          <GlowIconButton onClick={handleClose} style={{ position: 'absolute', top: 11, right: 11, zIndex: 9, background: '#1113', border: 'none' }}>
            <svg width="19" height="19" viewBox="0 0 18 18" fill="none"><path d="M5.2 5.1l7.7 7.9m0-7.9L5.2 13" stroke="#fff" strokeWidth="2.1" strokeLinecap="round"/></svg>
          </GlowIconButton>
        </GlowSurface>
      </Popover>
    </>
  );
};

export default GlowMegaMenu;
