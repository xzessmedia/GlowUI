import React from 'react';
import { styled, keyframes } from '@mui/material/styles';
import Box from '@mui/material/Box';
import GlowCard from './GlowCard';
import GlowAvatar from './GlowAvatar';

const postGlowAnim = keyframes`
  0%,100% { box-shadow: 0 0 70px 16px #05ffa150, 0 2px 120px 80px #8b5cf644; }
  55% { box-shadow: 0 0 130px 64px #38bdf8aa, 0 0 220px 120px #8b5cf666; }
`;

const Title = styled('div')({
  fontWeight: 900,
  fontSize: 2.1 + 'rem',
  letterSpacing: '.02em',
  color: '#fff',
  marginBottom: 6,
  textShadow: '0 0 21px #8b5cf677, 0 2px 22px #38bdf888',
  lineHeight: 1.16,
});
const Subtitle = styled('div')({
  fontSize: 1.16 + 'rem',
  color: '#05ffa1',
  opacity: 0.91,
  fontWeight: 500,
  marginBottom: 9,
});
const MetaRow = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  marginBottom: 8,
});
const ContentWrap = styled(Box)(({ theme }) => ({
  fontSize: 17,
  color: '#fff',
  margin: '10px 0',
  lineHeight: 1.7,
  fontWeight: 400,
  textShadow: '0 0 8px #8b5cf633',
  wordBreak: 'break-word',
}));
const Badge = styled('div')({
  display: 'inline-block',
  background: 'linear-gradient(92deg,#05ffa1 40%,#8b5cf6 120%)',
  color: '#20123a',
  fontWeight: 800,
  borderRadius: 7,
  fontSize: 11.9,
  marginRight: 10,
  padding: '4.2px 12px',
  boxShadow: '0 0 12px #05ffa175',
  letterSpacing: '.01em',
  textTransform: 'uppercase',
  marginBottom: 4,
});
const Tag = styled('span')({
  display: 'inline-block',
  background: 'linear-gradient(98deg,#38bdf822 60%,#8b5cf633 120%)',
  color: '#05ffa1',
  borderRadius: 9,
  fontSize: 13.2,
  padding: '3.7px 13px',
  marginRight: 7,
  marginBottom: 2,
  fontWeight: 600,
  letterSpacing: '.01em',
});
const FooterRow = styled('div')({
  marginTop: 16,
  paddingTop: 12,
  borderTop: '1.5px solid #38bdf814',
  display: 'flex',
  alignItems: 'center',
  gap: 14,
  color: '#05ffa1',
  fontWeight: 600,
  fontSize: 15.4,
});

export interface GlowPostProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  date?: React.ReactNode;
  author?: React.ReactNode;
  authorAvatar?: string;
  bannerImage?: string;
  content: React.ReactNode;
  tags?: (string | React.ReactNode)[];
  badge?: React.ReactNode;
  overlay?: React.ReactNode;
  actions?: React.ReactNode;
  featured?: boolean;
  style?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  footer?: React.ReactNode;
}

const GlowPost: React.FC<GlowPostProps> = ({
  title,
  subtitle,
  date,
  author,
  authorAvatar,
  bannerImage,
  content,
  tags,
  badge,
  overlay,
  actions,
  featured = false,
  style,
  contentStyle,
  footer,
}) => (
  <GlowCard
    glow
    animated
    borderRadius={36}
    glass
    gradient={featured
      ? 'linear-gradient(120deg,#05ffa130 20%,#8b5cf655 80%)'
      : 'linear-gradient(120deg,#181b39 60%,#38bdf833 105%)'}
    style={{
      maxWidth: 780,
      width: '100%',
      margin: '0 auto',
      marginBottom: 34,
      position: 'relative',
      animation: featured ? `${postGlowAnim} 6s infinite alternate` : undefined,
      ...style,
    }}
    contentStyle={contentStyle}
    overlay={overlay}
  >
    {/* Banner */}
    {bannerImage && (
      <Box sx={{
        width: '100%',
        borderTopLeftRadius: 36,
        borderTopRightRadius: 36,
        overflow: 'hidden',
        marginBottom: 11,
        boxShadow: '0 4px 46px #8b5cf633',
      }}>
        <img
          src={bannerImage}
          alt="banner"
          style={{ width: '100%', display: 'block', maxHeight: 270, objectFit: 'cover' }}
        />
      </Box>
    )}
    {/* Badge/top info */}
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 1 }}>
      {badge && <Badge>{badge}</Badge>}
      {tags && tags.length > 0 && (
        <div>{tags.map((tag, i) => <Tag key={i}>{tag}</Tag>)}</div>
      )}
    </Box>
    {/* Title/subtitle */}
    <Title>{title}</Title>
    {subtitle && <Subtitle>{subtitle}</Subtitle>}
    {/* Author/date row */}
    {(author || date) && (
      <MetaRow>
        {authorAvatar && (
          <GlowAvatar src={authorAvatar} alt="author" colorVariant='primary' shape="circle" style={{ width: 33, height: 33 }} />
        )}
        {author && <span style={{ fontWeight: 600, fontSize: 15.8 }}>{author}</span>}
        {date && <span style={{ fontWeight: 400, opacity: 0.79, fontSize: 14, paddingLeft: 4 }}>{date}</span>}
        {actions && <Box sx={{ flex: 1, textAlign: 'right' }}>{actions}</Box>}
      </MetaRow>
    )}
    {/* Post content */}
    <ContentWrap>{content}</ContentWrap>
    {/* Optional custom footer */}
    {footer && <FooterRow>{footer}</FooterRow>}
  </GlowCard>
);

export default GlowPost;
