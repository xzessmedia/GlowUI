import React from 'react';
import { styled, keyframes } from '@mui/material/styles';
import Box from '@mui/material/Box';
import GlowAvatar from './GlowAvatar';

const bubbleGlowAnim = keyframes`
  0%, 100% { box-shadow: 0 0 38px 10px #8b5cf655, 0 0 90px 40px #38bdf855; }
  50% { box-shadow: 0 0 80px 23px #05ffa1bb, 0 0 130px 75px #8b5cf644; }
`;

const Bubble = styled('div')<{
  mine: boolean;
  accent: string;
  animated: boolean;
}>(({ mine, accent, animated }) => ({
  background: mine
    ? `linear-gradient(100deg, #38bdf880 28%, #05ffa1cc 80%)`
    : `linear-gradient(100deg, #181b39dd 48%, ${accent}b7 130%)`,
  color: '#fff',
  padding: '13px 18px',
  borderRadius: mine ? '19px 24px 8px 24px' : '24px 19px 24px 8px',
  margin: '2px 0',
  fontSize: 16.5,
  fontWeight: 500,
  lineHeight: 1.56,
  textShadow: '0 0 12px #8b5cf633',
  boxShadow: mine
    ? '0 0 22px 8px #05ffa166, 0 6px 29px #8b5cf644'
    : '0 0 16px 6px #8b5cf633, 0 4px 22px #38bdf844',
  position: 'relative',
  animation: animated ? `${bubbleGlowAnim} 5s ease-in-out infinite alternate` : undefined,
  transition: 'background 0.18s, box-shadow 0.16s',
}));

const MetaLine = styled('div')<{
  mine: boolean;
}>(({ mine }) => ({
  fontSize: 13.2,
  opacity: 0.72,
  color: mine ? '#c4fff7' : '#b7c3fa',
  margin: mine ? '2px 0 0 16px' : '2px 16px 0 0',
  textAlign: mine ? 'right' : 'left',
  display: 'flex',
  alignItems: 'center',
  gap: 7,
  minHeight: 22,
  fontWeight: 400,
}));

export interface GlowChatBubbleProps {
  message: React.ReactNode;
  mine?: boolean;
  name?: React.ReactNode;
  avatarSrc?: string;
  avatarAlt?: string;
  timestamp?: React.ReactNode;
  status?: React.ReactNode;
  accentColor?: string; // fallback for theme accent
  animated?: boolean;
  style?: React.CSSProperties;
}

const GlowChatBubble: React.FC<GlowChatBubbleProps> = ({
  message,
  mine = false,
  name,
  avatarSrc,
  avatarAlt = 'User',
  timestamp,
  status,
  accentColor = '#8b5cf6',
  animated = true,
  style,
}) => (
  <Box sx={{
    display: 'flex',
    flexDirection: mine ? 'row-reverse' : 'row',
    alignItems: 'flex-end',
    gap: 1.9,
    margin: mine ? '0 0 0 17%' : '0 17% 0 0',
    width: '100%',
  }}>
    <Box sx={{ minWidth: 38, height: 38 }}>
      {avatarSrc && <GlowAvatar src={avatarSrc} alt={avatarAlt} shape="circle" colorVariant={mine ? 'accent' : 'primary'} animated style={{ width: 38, height: 38 }} />}
    </Box>
    <Box sx={{ flexGrow: 1, maxWidth: '100%', minWidth: 0 }}>
      <Bubble mine={mine} accent={accentColor} animated={animated} style={style}>
        {message}
      </Bubble>
      <MetaLine mine={mine}>
        {name && <span style={{ fontWeight: 700, fontSize: 13.3 }}>{name}</span>}
        {timestamp && <span>{timestamp}</span>}
        {status}
      </MetaLine>
    </Box>
  </Box>
);

export default GlowChatBubble;
