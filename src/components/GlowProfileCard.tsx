import React from 'react';
import Box from '@mui/material/Box';
import GlowCard from './GlowCard';
import GlowAvatar from './GlowAvatar';
import GlowTypography from './GlowTypography';

export interface GlowProfileCardProps {
  avatar?: React.ReactNode;
  name?: React.ReactNode;
  status?: React.ReactNode;
  meta?: React.ReactNode;
  actions?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  cover?: React.ReactNode; // For a fancy cover/banner
  overlay?: React.ReactNode; // Absolute layer over the card
  additionalContent?: React.ReactNode; // For badges, links, etc.
  gradient?: string;
  glass?: boolean;
  glow?: boolean;
  animated?: boolean;
  borderRadius?: number | string;
  borderColor?: string;
  borderWidth?: number;
  boxShadow?: string;
  style?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
}

const GlowProfileCard: React.FC<GlowProfileCardProps> = ({
  avatar,
  name,
  status,
  meta,
  actions,
  description,
  footer,
  cover,
  overlay,
  additionalContent,
  gradient,
  glass = true,
  glow = true,
  animated = true,
  borderRadius = 30,
  borderColor = '#38bdf8',
  borderWidth = 4,
  boxShadow,
  style,
  contentStyle,
}) => (
  <GlowCard
    gradient={gradient}
    glass={glass}
    glow={glow}
    animated={animated}
    borderRadius={borderRadius}
    borderColor={borderColor}
    borderWidth={borderWidth}
    boxShadow={boxShadow}
    overlay={overlay}
    style={{ width: 370, maxWidth: '96vw', padding: 0, ...style }}
    contentStyle={{
      padding: 0,
      ...contentStyle,
    }}
  >
    {/* Cover image/banner slot */}
    {cover && (
      <Box
        sx={{
          position: 'relative',
          minHeight: 70,
          width: '100%',
          overflow: 'hidden',
          borderTopLeftRadius: borderRadius,
          borderTopRightRadius: borderRadius,
          background: 'rgba(0,0,0,.10)',
        }}
      >
        {cover}
        {/* Optionally place avatar overlay here! */}
      </Box>
    )}

    {/* Profile row */}
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 0.5,
        p: 0,
        mt: cover ? -46 : 3.5,
        mb: 0.5,
        position: 'relative',
      }}
    >
      {avatar ?? (
        <GlowAvatar
          src=""
          alt="Profile"
          style={{
            marginTop: cover ? 0 : 12,
            marginBottom: 3,
            width: 82,
            height: 82,
            border: '3px solid #05ffa1',
            boxShadow: '0 0 0 6px #38bdf830',
            fontSize: '2.1rem',
            background: '#20123a',
          }}
          colorVariant="accent"
        >?</GlowAvatar>
      )}
      {additionalContent && (
        <Box
          sx={{
            position: 'absolute',
            top: 7,
            right: 20,
            zIndex: 2,
          }}
        >
          {additionalContent}
        </Box>
      )}
    </Box>

    {/* Main info */}
    <Box sx={{ textAlign: 'center', mt: 1, mb: 1.5 }}>
      {name ?? (
        <GlowTypography variant="h5" gradientText animated style={{ marginBottom: 2 }}>
          Your Name
        </GlowTypography>
      )}
      {status}
      {meta && (
        <Box sx={{ mt: 0.6, fontSize: 15, fontWeight: 500, color: '#cffafe', opacity: 0.94 }}>
          {meta}
        </Box>
      )}
    </Box>

    {/* Description */}
    {(description || actions) && (
      <Box
        sx={{
          px: 4,
          mt: 1,
          mb: 1.5,
          textAlign: 'center',
          fontSize: 16.2,
          color: '#fff',
          opacity: 0.98,
          fontWeight: 400,
        }}
      >
        {description}
      </Box>
    )}

    {/* Actions row */}
    {actions && (
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 0.8 }}>
        {actions}
      </Box>
    )}

    {/* Footer slot */}
    {footer && (
      <Box sx={{ borderTop: '1.4px solid #fff2', mt: 2, pt: 1.1, textAlign: 'center' }}>
        {footer}
      </Box>
    )}
  </GlowCard>
);

export default GlowProfileCard;