import React from 'react';
import { styled, keyframes } from '@mui/material/styles';

const glowAnim = keyframes`
  0%,100% { filter: drop-shadow(0 0 10px #fff5) brightness(1.05); }
  55% { filter: drop-shadow(0 0 32px #38bdf8CC) brightness(1.25); }
`;

const PaletteWrap = styled('div')<{
  $gap?: number;
}>(({ $gap }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: $gap ?? 18,
  alignItems: 'center',
  justifyContent: 'center',
}));

const Swatch = styled('button')<{
  $color: string;
  $selected: boolean;
  $size: number;
  $animated?: boolean;
}>(({ $color, $selected, $size, $animated }) => ({
  width: $size,
  height: $size,
  minWidth: $size,
  minHeight: $size,
  borderRadius: '50%',
  border: $selected ? `2.8px solid #fff` : '2px solid transparent',
  background: $color,
  boxShadow: $selected
    ? `0 0 26px 6px ${$color}99, 0 0 48px 16px #8b5cf688, 0 2px 24px #0002`
    : `0 0 18px 3px ${$color}22, 0 2px 18px #0006`,
  outline: $selected ? `2.2px solid #fff2` : undefined,
  cursor: 'pointer',
  transition: 'box-shadow 0.18s, border-color 0.2s, outline 0.13s, transform 0.12s',
  filter: $selected ? `brightness(1.23) drop-shadow(0 0 13px #fff7)` : "",
  animation: $animated ? `${glowAnim} 2.2s infinite alternate` : undefined,
  position: 'relative',
  zIndex: $selected ? 3 : 1,
  margin: 0,
  padding: 0,
  ':hover': {
    transform: 'scale(1.14)',
    boxShadow: `0 0 26px 9px ${$color}aa, 0 0 60px 32px #38bdf8aa`,
    borderColor: '#fff3',
    filter: 'brightness(1.08)',
  },
  ':focus': {
    outline: `3px solid #facc1599`,
    zIndex: 9,
  }
}));

export interface GlowPaletteProps {
  colors?: string[];
  gap?: number;
  swatchSize?: number;
  selected?: string;
  animated?: boolean;
  onSelect?: (color: string) => void;
  style?: React.CSSProperties;
  className?: string;
}

const defaultColors = [
  '#8b5cf6', '#38bdf8', '#f472b6', '#facc15', '#00ff99', '#f87171', '#4338ca', '#05ffa1', '#6366f1', '#181825'
];

const GlowPalette: React.FC<GlowPaletteProps> = ({
  colors = defaultColors,
  gap = 18,
  swatchSize = 38,
  selected,
  animated = true,
  onSelect,
  style,
  className,
}) => {
  return (
    <PaletteWrap $gap={gap} style={style} className={className}>
      {colors.map(color => (
        <Swatch
          key={color}
          $color={color}
          $selected={selected === color}
          $size={swatchSize}
          $animated={animated}
          tabIndex={0}
          onClick={() => onSelect?.(color)}
          aria-label={`Choose color ${color}`}
        >
          {selected === color && (
            <span style={{
              position: 'absolute',
              left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
              color: '#fff',
              fontWeight: 900, fontSize: swatchSize/2.8,
              textShadow: '0 0 14px #fff, 0 0 8px #4338cabb'
            }}>✓</span>
          )}
        </Swatch>
      ))}
    </PaletteWrap>
  );
};

export default GlowPalette;
