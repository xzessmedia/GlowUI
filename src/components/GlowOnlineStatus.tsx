import React from 'react';
import { styled, keyframes } from '@mui/material/styles';

const pulseGlow = keyframes`
  0%,100% { box-shadow: 0 0 14px 3px currentColor, 0 0 34px 7px #fff3; opacity:1; }
  60% { box-shadow: 0 0 16px 8px currentColor, 0 0 42px 24px #05ffa133; opacity:.82; }
`;

const statusColors = {
  online: '#05ffa1',
  idle: '#facc15',
  dnd: '#fb7185',
  offline: '#6b7280',
};

const StatusDot = styled('span')<{
  status: keyof typeof statusColors;
  size: number;
  animated: boolean;
}>(({ status, size, animated }) => ({
  display: 'inline-block',
  width: size,
  height: size,
  borderRadius: '999px',
  background: statusColors[status] || statusColors['offline'],
  color: statusColors[status] || statusColors['offline'],
  border: '2.5px solid #16192f',
  boxShadow: `0 0 17px 2px ${statusColors[status] || '#8885'}`,
  position: 'relative',
  animation: animated ? `${pulseGlow} 1.8s cubic-bezier(.6,1.44,.2,1.12) infinite alternate` : undefined,
  transition: 'background 0.13s, box-shadow 0.19s',
}));

export interface GlowOnlineStatusProps {
  status?: 'online' | 'idle' | 'dnd' | 'offline';
  size?: number;
  animated?: boolean;
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

const GlowOnlineStatus: React.FC<GlowOnlineStatusProps> = ({
  status = 'offline',
  size = 16,
  animated = true,
  style,
  className,
  title,
}) => (
  <StatusDot
    status={status}
    size={size}
    animated={animated}
    style={style}
    className={className}
    title={title || status.charAt(0).toUpperCase() + status.slice(1)}
  />
);

export default GlowOnlineStatus;
