import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import GlowAvatar from './GlowAvatar';
import GlowOnlineStatus from './GlowOnlineStatus';
import GlowIconButton from './GlowIconButton';

const ContactRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 18,
  padding: '11px 17px 11px 14px',
  borderRadius: 20,
  background: 'linear-gradient(92deg,#101031 68%,#38bdf812 110%)',
  boxShadow: '0 0 18px #8b5cf655',
  marginBottom: 8,
  transition: 'background 0.18s, box-shadow 0.18s',
  position: 'relative',
  '&:hover': {
    background: 'linear-gradient(96deg,#292365 55%,#05ffa133 124%)',
    boxShadow: '0 0 44px #05ffa140, 0 2px 16px #8b5cf655',
  },
}));

const NameLine = styled('div')({
  fontWeight: 700,
  fontSize: 18,
  color: '#fff',
  letterSpacing: '0.01em',
  textShadow: '0 2px 11px #8b5cf666',
});
const StatusLine = styled('div')({
  fontWeight: 400,
  fontSize: 14,
  color: '#a5f3fc',
  opacity: 0.95,
  marginTop: 2,
});

export interface GlowContactProps {
  name: React.ReactNode;
  status?: 'online' | 'idle' | 'dnd' | 'offline';
  avatarSrc?: string;
  avatarAlt?: string;
  accentColor?: 'primary' | 'secondary' | 'accent';
  statusText?: React.ReactNode;
  actions?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
}

const GlowContact: React.FC<GlowContactProps> = ({
  name,
  status = 'offline',
  avatarSrc,
  avatarAlt = 'Contact',
  accentColor = 'accent',
  statusText,
  actions,
  style,
  className,
  onClick,
}) => (
  <ContactRow style={style} className={className} tabIndex={0} onClick={onClick}>
    <Box sx={{ position: 'relative', width: 54, height: 54 }}>
      <GlowAvatar
        src={avatarSrc}
        alt={avatarAlt}
        colorVariant={accentColor}
        animated
        shape="circle"
        style={{ width: 54, height: 54 }}
      />
      <GlowOnlineStatus status={status} size={18} animated style={{ position: 'absolute', bottom: 3, right: 2, border: '2.4px solid #1e1b4b' }} />
    </Box>
    <Box sx={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
      <NameLine className="GlowContact__name">{name}</NameLine>
      {statusText && <StatusLine className="GlowContact__statusText">{statusText}</StatusLine>}
    </Box>
    {actions && (
      <Box sx={{ display: 'flex', gap: 1.6, ml: 2 }}>{actions}</Box>
    )}
  </ContactRow>
);

export default GlowContact;
