import React from 'react';
import { styled, keyframes } from '@mui/material/styles';
import GlowCard from './GlowCard';

const pulse = keyframes`
  0%,100% { filter: drop-shadow(0 0 12px #38bdf855); }
  50% { filter: drop-shadow(0 0 32px #8b5cf688) brightness(1.13); }
`;

const TimeBox = styled('span')<{
  $color: string;
  $glow: number;
  $animated: boolean;
}>(({ $color, $glow, $animated }) => ({
  display: 'inline-block',
  margin: '0 6px',
  minWidth: 54,
  fontWeight: 900,
  fontSize: 42,
  letterSpacing: '0.03em',
  borderRadius: 13,
  color: '#fff',
  background: `linear-gradient(92deg,${$color},#38bdf8 95%)`,
  boxShadow: `0 0 28px 7px ${$color}44, 0 0 90px 16px #38bdf877` + ($glow>1 ? `,0 0 48px 33px #fff8`:''),
  padding: '11px 6px 9px 6px',
  textShadow: `0 2px 12px ${$color}cc, 0 1px 9px #38bdf8dd`,
  filter: $glow>1 ? `drop-shadow(0 0 ${13*$glow}px #facc15bb)` : undefined,
  animation: $animated ? `${pulse} 1.8s infinite alternate` : undefined,
}));

function formatParts(s: number) {
  const d = Math.floor(s/86400), h = Math.floor((s%86400)/3600), m = Math.floor((s%3600)/60), sec = s % 60;
  return { d, h, m, s: sec };
}

export interface GlowCountdownProps {
  /** Countdown in seconds or until date (Date or ISO string) */
  until: number | Date | string;
  onEnd?: () => void;
  showLabels?: boolean;
  showDays?: boolean;
  showHours?: boolean;
  showMinutes?: boolean;
  showSeconds?: boolean;
  animated?: boolean;
  palette?: string[];
  glowIntensity?: number;
  gradient?: string;
  style?: React.CSSProperties;
  cardProps?: any;
}

const defaultPalette = ['#facc15', '#38bdf8', '#8b5cf6', '#f472b6', '#05ffa1'];

const GlowCountdown: React.FC<GlowCountdownProps> = ({
  until,
  onEnd,
  showLabels = true,
  showDays = true,
  showHours = true,
  showMinutes = true,
  showSeconds = true,
  animated = true,
  palette = defaultPalette,
  glowIntensity = 1.23,
  gradient,
  style,
  cardProps,
}) => {
  const [left, setLeft] = React.useState<number>(() => getLeft());
  const colors = palette;
  function getLeft() {
    if (typeof until === 'number') {
      return until;
    } else {
      const ts = typeof until === 'string' ? Date.parse(until) : until.getTime();
      return Math.max(0, Math.floor((ts - Date.now()) / 1000));
    }
  }
  React.useEffect(() => {
    if (left <= 0) return;
    const timer = setInterval(() => {
      setLeft(l => {
        if (l <= 1) {
          setTimeout(()=>onEnd?.(), 150);
          clearInterval(timer);
          return 0;
        }
        return l - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
    // eslint-disable-next-line
  }, [until]);
  const { d, h, m, s } = formatParts(left);
  return (
    <GlowCard
      glass
      glow
      animated
      borderRadius={28}
      gradient={gradient}
      style={{ padding: 18, display: 'inline-block', minWidth: 260, ...style }}
      {...cardProps}
    >
      {showDays && (
        <TimeBox $color={colors[0]} $glow={glowIntensity} $animated={animated}>{d.toString().padStart(2,'0')}</TimeBox>
      )}
      {showDays && <span style={{ fontSize: 31, fontWeight: 800, color: '#fff', textShadow: '0 0 9px #6366f1cc', marginBottom: 2 }}>:</span>}
      {showHours && (
        <TimeBox $color={colors[1]} $glow={glowIntensity} $animated={animated}>{h.toString().padStart(2,'0')}</TimeBox>
      )}
      {showHours && <span style={{ fontSize: 31, fontWeight: 800, color: '#fff', textShadow: '0 0 9px #8b5cf699', marginBottom: 2 }}>:</span>}
      {showMinutes && (
        <TimeBox $color={colors[2]} $glow={glowIntensity} $animated={animated}>{m.toString().padStart(2,'0')}</TimeBox>
      )}
      {showMinutes && <span style={{ fontSize: 31, fontWeight: 800, color: '#fff', textShadow: '0 0 9px #f472b677', marginBottom: 2 }}>:</span>}
      {showSeconds && (
        <TimeBox $color={colors[3]} $glow={glowIntensity} $animated={animated}>{s.toString().padStart(2,'0')}</TimeBox>
      )}
      {showLabels && (
        <div style={{ marginTop: 9, display: 'flex', gap: 17, justifyContent: 'center', fontSize: 13.5, fontWeight: 600, color: '#facc1577', letterSpacing: '.01em', textShadow: '0 2px 10px #fff6' }}>
          {showDays && <span>Tage</span>}
          {showHours && <span>Stunden</span>}
          {showMinutes && <span>Min</span>}
          {showSeconds && <span>Sek</span>}
        </div>
      )}
    </GlowCard>
  );
};

export default GlowCountdown;
