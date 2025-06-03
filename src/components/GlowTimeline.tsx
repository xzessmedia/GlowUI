import React from 'react';
import { styled, keyframes } from '@mui/material/styles';
import Box from '@mui/material/Box';
import GlowCard from './GlowCard';
import GlowAvatar from './GlowAvatar';

const timelineGlowAnim = keyframes`
  0%,100% { box-shadow: 0 0 20px 4px #05ffa140, 0 0 40px 8px #8b5cf630; }
  50% { box-shadow: 0 0 30px 8px #38bdf860, 0 0 60px 16px #8b5cf640; }
`;

const TimelineContainer = styled('div')({
  position: 'relative',
  paddingLeft: 40,
});

const TimelineLine = styled('div')({
  position: 'absolute',
  left: 20,
  top: 0,
  bottom: 0,
  width: 3,
  background: 'linear-gradient(180deg, #05ffa1 0%, #38bdf8 50%, #8b5cf6 100%)',
  borderRadius: 2,
  boxShadow: '0 0 12px #05ffa166, 0 0 24px #38bdf844',
});

const TimelineItem = styled('div')<{ featured?: boolean }>(({ featured }) => ({
  position: 'relative',
  marginBottom: 24,
  paddingLeft: 24,
  '&:last-child': {
    marginBottom: 0,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    left: -32,
    top: 8,
    width: 14,
    height: 14,
    borderRadius: '50%',
    background: featured 
      ? 'linear-gradient(135deg, #05ffa1 0%, #38bdf8 100%)'
      : 'linear-gradient(135deg, #38bdf8 0%, #8b5cf6 100%)',
    border: '2px solid #181b39',
    boxShadow: featured
      ? '0 0 16px #05ffa180, 0 0 32px #38bdf860'
      : '0 0 12px #38bdf880, 0 0 24px #8b5cf650',
    animation: featured ? `${timelineGlowAnim} 3s infinite alternate` : undefined,
    zIndex: 2,
  },
}));

const ItemHeader = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  marginBottom: 8,
});

const ItemTitle = styled('div')<{ featured?: boolean }>(({ featured }) => ({
  fontWeight: 700,
  fontSize: 18,
  color: '#fff',
  textShadow: featured 
    ? '0 0 16px #05ffa177, 0 2px 18px #38bdf888'
    : '0 0 12px #8b5cf677, 0 2px 14px #38bdf866',
  lineHeight: 1.2,
}));

const ItemTime = styled('div')({
  fontSize: 14,
  color: '#05ffa1',
  fontWeight: 600,
  opacity: 0.9,
  marginLeft: 'auto',
});

const ItemSubtitle = styled('div')({
  fontSize: 15,
  color: '#38bdf8',
  fontWeight: 500,
  marginBottom: 6,
  opacity: 0.92,
});

const ItemContent = styled('div')({
  fontSize: 15,
  color: '#fff',
  lineHeight: 1.6,
  opacity: 0.9,
  marginBottom: 8,
});

const ItemMeta = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  marginTop: 8,
});

const ItemBadge = styled('span')<{ variant?: 'success' | 'warning' | 'error' | 'info' }>(({ variant = 'info' }) => {
  const colors = {
    success: { bg: '#05ffa1', text: '#0a3d2e' },
    warning: { bg: '#fbbf24', text: '#451a03' },
    error: { bg: '#ef4444', text: '#450a0a' },
    info: { bg: '#38bdf8', text: '#0c4a6e' },
  };
  
  return {
    display: 'inline-block',
    background: colors[variant].bg,
    color: colors[variant].text,
    fontWeight: 700,
    borderRadius: 6,
    fontSize: 11,
    padding: '3px 8px',
    textTransform: 'uppercase',
    letterSpacing: '.02em',
    boxShadow: `0 0 8px ${colors[variant].bg}60`,
  };
});

const ItemTag = styled('span')({
  display: 'inline-block',
  background: 'linear-gradient(98deg, #38bdf822 60%, #8b5cf633 120%)',
  color: '#05ffa1',
  borderRadius: 8,
  fontSize: 12,
  padding: '2px 8px',
  fontWeight: 500,
  marginRight: 4,
});

export interface GlowTimelineItemProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  content?: React.ReactNode;
  time?: React.ReactNode;
  avatar?: string;
  avatarVariant?: 'primary' | 'secondary' | 'accent';
  badge?: {
    text: React.ReactNode;
    variant?: 'success' | 'warning' | 'error' | 'info';
  };
  tags?: string[];
  featured?: boolean;
  actions?: React.ReactNode;
}

export interface GlowTimelineProps {
  items: GlowTimelineItemProps[];
  header?: React.ReactNode;
  style?: React.CSSProperties;
  cardStyle?: React.CSSProperties;
  animated?: boolean;
}

const TimelineHeader = styled('div')({
  fontWeight: 900,
  fontSize: 24,
  letterSpacing: '.03em',
  color: '#fff',
  marginBottom: 20,
  textShadow: '0 0 18px #8b5cf677, 0 2px 20px #38bdf888',
  textAlign: 'center',
});

const GlowTimeline: React.FC<GlowTimelineProps> = ({
  items = [],
  header,
  style,
  cardStyle,
  animated = true,
}) => (
  <GlowCard
    glass
    glow
    animated={animated}
    gradient="linear-gradient(120deg, #181b39 60%, #38bdf844 110%)"
    borderRadius={32}
    style={{
      maxWidth: 600,
      width: '100%',
      margin: '0 auto',
      ...style,
      ...cardStyle,
    }}
  >
    {header && <TimelineHeader>{header}</TimelineHeader>}
    <TimelineContainer>
      <TimelineLine />
      {items.map((item, index) => (
        <TimelineItem key={index} featured={item.featured}>
          <ItemHeader>
            {item.avatar && (
              <GlowAvatar
                src={item.avatar}
                alt="timeline item"
                colorVariant={item.avatarVariant || 'primary'}
                shape="circle"
                style={{ width: 32, height: 32 }}
              />
            )}
            <div style={{ flex: 1 }}>
              <ItemTitle featured={item.featured}>{item.title}</ItemTitle>
              {item.subtitle && <ItemSubtitle>{item.subtitle}</ItemSubtitle>}
            </div>
            {item.time && <ItemTime>{item.time}</ItemTime>}
          </ItemHeader>
          
          {item.content && <ItemContent>{item.content}</ItemContent>}
          
          <ItemMeta>
            {item.badge && (
              <ItemBadge variant={item.badge.variant}>
                {item.badge.text}
              </ItemBadge>
            )}
            {item.tags && item.tags.map((tag, i) => (
              <ItemTag key={i}>{tag}</ItemTag>
            ))}
            {item.actions && (
              <Box sx={{ marginLeft: 'auto' }}>{item.actions}</Box>
            )}
          </ItemMeta>
        </TimelineItem>
      ))}
    </TimelineContainer>
  </GlowCard>
);

export default GlowTimeline;