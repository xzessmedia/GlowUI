import React, { useRef, useEffect } from 'react';
import { styled, keyframes } from '@mui/material/styles';
import Box from '@mui/material/Box';
import GlowCard from './GlowCard';
import GlowChatBubble, { GlowChatBubbleProps } from './GlowChatBubble';
import GlowInput from './GlowInput';

const chatAnim = keyframes`
  0%,100% { box-shadow: 0 0 36px #8b5cf642, 0 0 88px 28px #8b5cf644; }
  45% { box-shadow: 0 0 120px 40px #05ffa1aa, 0 0 220px 78px #38bdf866; }
`;

const ChatSurface = styled(GlowCard)({
  height: '530px',
  maxWidth: 470,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 38,
  overflow: 'hidden',
  animation: `${chatAnim} 6.9s cubic-bezier(.53,.32,.81,1.2) infinite alternate`,
  position: 'relative',
});
const ChatHeader = styled('div')({
  padding: '20px 25px 10px 28px',
  fontSize: 20,
  fontWeight: 900,
  color: '#fff',
  background: 'linear-gradient(93deg,#8b5cf644 40%,#38bdf850 120%)',
  letterSpacing: '.01em',
  textShadow: '0 0 14px #38bdf8aa',
  borderTopLeftRadius: 38,
  borderTopRightRadius: 38,
  borderBottom: '2.5px solid #161b32',
  zIndex: 3,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});
const ChatScrollArea = styled(Box)({
  flex: 1,
  overflowY: 'auto',
  padding: '15px 24px 16px 24px',
  display: 'flex',
  flexDirection: 'column',
  gap: 9,
  background: 'radial-gradient(ellipse at 26% 74%, #181b39 40%, #38bdf814 90%)',
  scrollbarWidth: 'thin',
});
const FooterInputWrap = styled('div')({
  width: '100%',
  background: 'linear-gradient(120deg,#181b39 60%,#38bdf811 110%)',
  padding: '11px 22px 14px 20px',
  borderTop: '2px solid #1e1b4b11',
  zIndex: 2,
  display: 'flex',
  gap: 11,
  alignItems: 'center',
});

export interface GlowChatProps {
  bubbles: GlowChatBubbleProps[];
  header?: React.ReactNode;
  onSend?: (msg: string) => void;
  inputPlaceholder?: string;
  inputProps?: React.ComponentProps<typeof GlowInput>;
  style?: React.CSSProperties;
  chatStyle?: React.CSSProperties;
  footer?: React.ReactNode;
}

const GlowChat: React.FC<GlowChatProps> = ({
  bubbles,
  header = 'Glow Chat',
  onSend,
  inputPlaceholder = 'Message…',
  inputProps,
  style,
  chatStyle,
  footer,
}) => {
  const [input, setInput] = React.useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  // auto scroll to latest
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [bubbles.length]);

  return (
    <ChatSurface style={style}>
      <ChatHeader>{header}</ChatHeader>
      <ChatScrollArea ref={scrollRef} style={chatStyle}>
        {bubbles.map((b, i) => (
          <GlowChatBubble key={i} {...b} />
        ))}
        {footer}
      </ChatScrollArea>
      <FooterInputWrap>
        <GlowInput
          label={inputPlaceholder}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter' && input.trim() && onSend) {
              onSend(input.trim());
              setInput('');
            }
          }}
          colorVariant="primary"
          style={{ flex: 1 }}
          {...inputProps}
        />
      </FooterInputWrap>
    </ChatSurface>
  );
};

export default GlowChat;
