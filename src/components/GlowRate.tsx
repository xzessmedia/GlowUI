import React from 'react';
import { styled, keyframes } from '@mui/material/styles';
import Box from '@mui/material/Box';

const glowStarAnim = keyframes`
  0% { filter: drop-shadow(0 0 8px #facc15aa); }
  70% { filter: drop-shadow(0 0 24px #ffe066cc) brightness(1.25); }
  100% { filter: drop-shadow(0 0 8px #facc15aa); }
`;

const StarWrap = styled('span')<{
  $active: boolean;
  $glow: boolean;
  $size: number;
  $animated: boolean;
  $vibrantActive?: string;
  $vibrantInactive?: string;
}>(({ $active, $glow, $size, $animated, $vibrantActive, $vibrantInactive }) => ({
  display: 'inline-block',
  margin: '0 4px',
  fontSize: $size,
  color: $active ? ($vibrantActive || '#facc15') : ($vibrantInactive || '#b4bbc4'),
  cursor: 'pointer',
  transform: $active ? 'scale(1.18)' : undefined,
  transition: 'color 0.18s, transform 0.19s',
  filter: $glow && $active ? `drop-shadow(0 0 8px ${$vibrantActive || '#facc15'}99)` : 'none',
  animation: $active && $animated ? `${glowStarAnim} 2.2s cubic-bezier(.56,1.1,.44,1.09) infinite alternate` : undefined,
  userSelect: 'none',
}));

export interface GlowRateProps {
  value: number;
  count?: number;
  onChange?: (val: number) => void;
  disabled?: boolean;
  icon?: React.ReactNode; // Custom active icon (default star)
  iconInactive?: React.ReactNode; // Custom inactive icon
  allowHalf?: boolean;
  size?: number;
  vibrantActive?: string; // Color
  vibrantInactive?: string;
  glow?: boolean;
  animated?: boolean;
  label?: React.ReactNode;
  helper?: React.ReactNode;
  error?: boolean;
  readOnly?: boolean;
  style?: React.CSSProperties;
}

const defaultStar = (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'block' }}>
    <path d="M12 17.3l6.18 3.7-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l5.46 4.73L6.82 21z" />
  </svg>
);
const defaultStarInactive = (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'block', opacity: 0.6 }}>
    <path d="M12 14.3l4.09 2.45-1.09-4.81L18 8.66l-4.9-.42L12 3 10.9 8.24l-4.9.42 3.01 3.28-1.09 4.81z" />
  </svg>
);

export const GlowRate: React.FC<GlowRateProps> = ({
  value,
  count = 5,
  onChange,
  disabled = false,
  icon,
  iconInactive,
  allowHalf = false,
  size = 38,
  vibrantActive = '#facc15',
  vibrantInactive = '#6366f1',
  glow = true,
  animated = true,
  label,
  helper,
  error = false,
  readOnly = false,
  style,
}) => {
  const [hoverVal, setHoverVal] = React.useState<number | null>(null);

  const handleClick = (i: number, half: boolean) => {
    if (disabled || readOnly) return;
    let v = i + 1;
    if (allowHalf && half) v -= 0.5;
    onChange?.(v);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start" style={style}>
      {label && <div style={{ fontWeight: 700, color: error ? '#fb7185' : '#fff', fontSize: 18, marginBottom: 8 }}>{label}</div>}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 5 }}>
        {Array.from({ length: count }).map((_, i) => {
          let active = false, halfActive = false;
          const displayVal = hoverVal !== null ? hoverVal : value;
          if (allowHalf && displayVal >= i + 0.5 && displayVal < i + 1) {
            halfActive = true;
          } else if (displayVal >= i + 1) {
            active = true;
          }
          return (
            <span key={i} style={{ position: 'relative', display: 'inline-block', lineHeight: 0 }}>
              {/* Full/Active part */}
              <StarWrap
                onMouseEnter={() => !disabled && !readOnly && setHoverVal(allowHalf ? i + 0.5 : i + 1)}
                onMouseLeave={() => setHoverVal(null)}
                onClick={() => handleClick(i, false)}
                $active={active}
                $glow={glow}
                $size={size}
                $animated={animated}
                $vibrantActive={vibrantActive}
                $vibrantInactive={vibrantInactive}
                style={{ zIndex: 2 }}
              >
                {active ? icon || defaultStar : iconInactive || defaultStarInactive}
              </StarWrap>
              {/* Half part, if hovered at 0.5 step */}
              {allowHalf && (
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '50%',
                    height: '100%',
                    zIndex: 3,
                    overflow: 'hidden',
                    pointerEvents: 'auto',
                  }}
                  onMouseEnter={() => !disabled && !readOnly && setHoverVal(i + 0.5)}
                  onMouseLeave={() => setHoverVal(null)}
                  onClick={() => handleClick(i, true)}
                >
                  <StarWrap
                    $active={true}
                    $glow={glow}
                    $size={size}
                    $animated={animated}
                    $vibrantActive={vibrantActive}
                    style={{ pointerEvents: 'none' }}
                  >
                    {icon || defaultStar}
                  </StarWrap>
                </span>
              )}
            </span>
          );
        })}
      </div>
      {helper && (
        <div style={{ color: error ? '#fb7185' : '#05ffa1', fontWeight: 500, fontSize: 13.3, marginTop: 3, textShadow: error ? '0 0 8px #fb718588' : '0 0 8px #38bdf822' }}>{helper}</div>
      )}
    </Box>
  );
};

export default GlowRate;
