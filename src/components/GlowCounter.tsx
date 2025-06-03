import React from 'react';
import { styled, keyframes } from '@mui/material/styles';
import GlowCard from './GlowCard';
import GlowingButton from './GlowingButton';

const countGlow = keyframes`
  0%,100% { filter: drop-shadow(0 0 9px #05ffa177); }
  67% { filter: drop-shadow(0 0 22px #facc15cc) brightness(1.11); }
`;

const Value = styled('span')<{
  $color: string;
  $glow: number;
  $animated: boolean;
}>(({ $color, $glow, $animated }) => ({
  display: 'inline-block',
  fontWeight: 900,
  fontSize: 52,
  minWidth: 65,
  letterSpacing: '.03em',
  color: '#fff',
  background: `linear-gradient(91deg,${$color},#38bdf8 85%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textShadow: `0 4px 18px ${$color}99, 0 2px 18px #facc1555`,
  filter: $glow>1 ? `drop-shadow(0 0 ${13*$glow}px #facc15bb)` : undefined,
  animation: $animated ? `${countGlow} 1.7s infinite alternate` : undefined,
  transition: 'all 0.17s cubic-bezier(.34,1.37,.88,.77)',
  margin: '0 8px',
}));

export interface GlowCounterProps {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  animated?: boolean;
  palette?: string[];
  glowIntensity?: number;
  label?: React.ReactNode;
  showButtons?: boolean;
  onChange?: (n: number) => void;
  style?: React.CSSProperties;
  cardProps?: any;
}

const defaultPalette = ['#05ffa1', '#6366f1', '#facc15', '#38bdf8', '#f472b6'];

const GlowCounter: React.FC<GlowCounterProps> = ({
  value = 0,
  min = -Infinity,
  max = Infinity,
  step = 1,
  animated = true,
  palette = defaultPalette,
  glowIntensity = 1.14,
  label,
  showButtons = true,
  onChange,
  style,
  cardProps,
}) => {
  const [internal, setInternal] = React.useState(value);
  React.useEffect(() => { setInternal(value); }, [value]);
  const colors = palette;
  function change(val: number) {
    val = Math.max(min, Math.min(val, max));
    setInternal(val);
    onChange?.(val);
  }
  return (
    <GlowCard
      glass
      glow
      animated
      borderRadius={28}
      style={{ padding: 17, display:'inline-flex', minWidth: 170, alignItems: 'center', gap: 16, ...style }}
      {...cardProps}
    >
      {showButtons && (
        <GlowingButton
          size="small"
          colorVariant="secondary"
          disabled={internal <= min}
          glowIntensity={0.9}
          style={{ minWidth: 34, fontWeight: 800, borderRadius: 13 }}
          onClick={() => change(internal - step)}
        >-</GlowingButton>
      )}
      <Value $color={colors[0]} $glow={glowIntensity} $animated={animated}>
        {internal}
      </Value>
      {showButtons && (
        <GlowingButton
          size="small"
          colorVariant="primary"
          glowIntensity={1.2}
          disabled={internal >= max}
          style={{ minWidth: 34, fontWeight: 800, borderRadius: 13 }}
          onClick={() => change(internal + step)}
        >+</GlowingButton>
      )}
      {label && <span style={{ fontWeight: 600, fontSize: 17, color: '#38bdf8', marginLeft: 19 }}>{label}</span>}
    </GlowCard>
  );
};

export default GlowCounter;
