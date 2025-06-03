import React from 'react';
import { styled, keyframes } from '@mui/material/styles';
import GlowCard from './GlowCard';
import GlowingButton from './GlowingButton';

const timerPulse = keyframes`
  0%,100% { filter: drop-shadow(0 0 12px #38bdf855); }
  50% { filter: drop-shadow(0 0 30px #8b5cf677) brightness(1.11); }
`;

const Digits = styled('span')<{
  $color: string,
  $glow: number,
  $animated: boolean
}>(({ $color, $glow, $animated }) => ({
  display: 'inline-block',
  fontWeight: 900,
  fontSize: 48,
  minWidth: 71,
  letterSpacing: '.02em',
  color: '#fff',
  background: `linear-gradient(93deg,${$color},#38bdf8 89%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textShadow: `0 5px 17px ${$color}cc, 0 2px 26px #facc1555`,
  filter: $glow>1 ? `drop-shadow(0 0 ${13*$glow}px #facc15bb)` : undefined,
  animation: $animated ? `${timerPulse} 1.7s infinite alternate` : undefined,
  transition: 'all 0.18s cubic-bezier(.44,1.27,.78,.77)',
  margin: '0 8px',
}));

function fmt(secs: number) {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
}

export interface GlowTimerProps {
  initial?: number;
  running?: boolean;
  animated?: boolean;
  palette?: string[];
  glowIntensity?: number;
  showButtons?: boolean;
  label?: React.ReactNode;
  onTick?: (elapsed: number) => void;
  onChange?: (v: number) => void;
  max?: number;
  style?: React.CSSProperties;
  cardProps?: any;
}

const defaultPalette = ['#f472b6','#38bdf8','#facc15','#8b5cf6','#05ffa1'];

const GlowTimer: React.FC<GlowTimerProps> = ({
  initial = 0,
  running: runningProp,
  animated = true,
  palette = defaultPalette,
  glowIntensity = 1.2,
  showButtons = true,
  label,
  onTick,
  onChange,
  max = Infinity,
  style,
  cardProps,
}) => {
  const [time, setTime] = React.useState(initial);
  const [running, setRunning] = React.useState(runningProp ?? false);
  React.useEffect(() => { setTime(initial); }, [initial]);
  React.useEffect(() => { if(runningProp!==undefined) setRunning(runningProp); }, [runningProp]);
  React.useEffect(() => {
    let tid: NodeJS.Timeout;
    if (running) {
      tid = setInterval(() => {
        setTime(t => {
          if (t+1 > max) return t;
          onTick?.(t+1);
          onChange?.(t+1);
          return t+1;
        });
      }, 1000);
    }
    return () => tid && clearInterval(tid);
    // eslint-disable-next-line
  }, [running, max]);
  const colors = palette;
  return (
    <GlowCard
      glass glow animated borderRadius={28}
      style={{padding:17, display:'inline-flex', minWidth:210, alignItems:'center', gap:14, ...style}}
      {...cardProps}
    >
      <Digits $color={colors[0]} $glow={glowIntensity} $animated={animated}>{fmt(time)}</Digits>
      {showButtons && (
        <>
          <GlowingButton
            size="small"
            colorVariant={running ? 'secondary' : 'primary'}
            onClick={() => setRunning(v => !v)}
            glowIntensity={running ? 0.95 : 1.2}
            style={{ minWidth: 44, fontWeight: 700, borderRadius: 13, marginLeft: 5 }}
          >{running ? 'Pause' : 'Start'}</GlowingButton>
          <GlowingButton
            size="small"
            colorVariant="primary"
            onClick={() => { setTime(0); setRunning(false); }}
            glowIntensity={1.08}
            style={{ minWidth: 44, fontWeight: 700, borderRadius: 13, marginLeft: 5 }}
          >Reset</GlowingButton>
        </>
      )}
      {label && <span style={{ fontWeight: 600, fontSize: 16, color: '#facc15', marginLeft: 17 }}>{label}</span>}
    </GlowCard>
  );
};

export default GlowTimer;
