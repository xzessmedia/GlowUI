import React from 'react';
import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import GlowPalette from './GlowPalette';

const PreviewSwatch = styled('button')<{
  $color: string;
  $size: number;
  $animated: boolean;
}>(({ $color, $size, $animated }) => ({
  width: $size,
  height: $size,
  minWidth: $size,
  minHeight: $size,
  borderRadius: '50%',
  border: `2.7px solid #fff` ,
  background: $color,
  boxShadow: `0 0 32px 4px ${$color}bb, 0 0 60px 11px #8b5cf655, 0 3px 26px #0002`,
  outline: `3px solid #fff2`,
  cursor: 'pointer',
  transition: 'box-shadow 0.19s, outline 0.14s, transform 0.13s',
  filter: `brightness(1.18) drop-shadow(0 0 9px #fff4)` ,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 0,
  padding: 0,
  position: 'relative',
  zIndex: 3,
  ':hover': {
    transform: 'scale(1.08)',
    boxShadow: `0 0 36px 10px ${$color}, 0 0 60px 27px #38bdf8ac`,
    outline: '3.5px solid #facc158a',
  },
  ':focus': {
    outline: `4px solid #facc1577`,
    zIndex: 9,
  }
}));

export interface GlowColorSelectorProps {
  colors?: string[];
  value?: string;
  swatchSize?: number;
  animated?: boolean;
  showLabel?: boolean;
  onChange?: (color: string) => void;
  label?: React.ReactNode;
  style?: React.CSSProperties;
}

const defaultColors = [
  '#8b5cf6', '#38bdf8', '#f472b6', '#facc15', '#00ff99', '#f87171', '#4338ca', '#05ffa1', '#6366f1', '#181825'
];

const GlowColorSelector: React.FC<GlowColorSelectorProps> = ({
  colors = defaultColors,
  value,
  swatchSize = 36,
  animated = true,
  showLabel = true,
  onChange,
  label = 'Farbe auswählen',
  style,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const current = value || colors[0];
  return (
    <Box style={style}>
      {showLabel && (
        <Typography variant="subtitle2" sx={{ color: '#38bdf8', fontWeight: 700, mb: 0.5 }}>{label}</Typography>
      )}
      <PreviewSwatch
        $color={current}
        $size={swatchSize}
        $animated={animated}
        onClick={e => setAnchorEl(e.currentTarget)}
        aria-label="Farbwähler öffnen"
      />
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        slotProps={{ paper: { sx: { boxShadow: '0 0 44px #38bdf884', borderRadius: 4, bgcolor:'#222b', px: 2, py: 2 } } }}
      >
        <GlowPalette
          colors={colors}
          swatchSize={swatchSize}
          selected={current}
          animated={animated}
          onSelect={(c) => { setAnchorEl(null); onChange?.(c); }}
          style={{ margin: 8, maxWidth: 285 }}
        />
      </Popover>
    </Box>
  );
};

export default GlowColorSelector;
