import React from 'react';
import { styled, keyframes } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';

const chipAnim = keyframes`
  0%,100% {
    box-shadow: 0 0 17px 3px #8b5cf6aa, 0 0 34px 17px #05ffa1bb;
    border-color: #8b5cf6;
  }
  40% {
    box-shadow: 0 0 27px 7px #f472b6c0, 0 0 50px 18px #05ffa1bb;
    border-color: #f472b6;
  }
`;

const StyledGlowChip = styled('div')<{
  background: string;
  borderColor: string;
  borderWidth: number;
  glowColor: string;
  textColor: string;
  borderRadius: number | string;
  animated: boolean;
  disabled?: boolean;
  clickable?: boolean;
}>(
  ({
    background,
    borderColor,
    borderWidth,
    glowColor,
    textColor,
    borderRadius,
    animated,
    disabled,
    clickable,
  }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: 7,
    minHeight: 34,
    fontWeight: 700,
    fontSize: 15.2,
    letterSpacing: '0.04em',
    padding: '0 14px',
    borderRadius,
    background,
    color: textColor,
    border: `${borderWidth}px solid ${borderColor}`,
    boxShadow: `0 0 17px 3px ${glowColor}a5, 0 0 28px 9px ${borderColor}60`,
    transition:
      'box-shadow 0.18s, border 0.18s, background 0.16s, color 0.18s, transform 0.12s',
    userSelect: 'none',
    cursor: disabled ? 'not-allowed' : clickable ? 'pointer' : 'default',
    opacity: disabled ? 0.56 : 1,
    ...(animated && !disabled
      ? { animation: `${chipAnim} 3.2s alternate infinite` }
      : {}),
    position: 'relative',
    outline: 'none',
    '&:hover': clickable && !disabled
      ? {
        boxShadow: `0 0 37px 12px ${glowColor}bb, 0 0 48px 18px ${borderColor}bb`,
        transform: 'scale(1.06)',
        background,
      }
      : undefined,
    '&:active': clickable && !disabled
      ? {
        transform: 'scale(0.96)',
        borderColor: glowColor,
      }
      : undefined,
  })
);

export interface GlowChipProps {
  label: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onDelete?: () => void;
  clickable?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  background?: string;
  glowColor?: string;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: string | number;
  textColor?: string;
  animated?: boolean;
  style?: React.CSSProperties;
}

const GlowChip: React.FC<GlowChipProps> = ({
  label,
  startIcon,
  endIcon,
  onDelete,
  clickable,
  onClick,
  disabled = false,
  background = 'linear-gradient(100deg, #6366f1 35%, #05ffa1 100%)',
  glowColor = '#8b5cf6',
  borderColor = '#05ffa1',
  borderWidth = 2.5,
  borderRadius = 20,
  textColor = '#fff',
  animated = true,
  style,
}) => (
  <StyledGlowChip
    background={background}
    glowColor={glowColor}
    borderColor={borderColor}
    borderWidth={borderWidth}
    borderRadius={borderRadius}
    textColor={textColor}
    animated={animated}
    disabled={disabled}
    clickable={!!clickable}
    tabIndex={disabled ? -1 : clickable ? 0 : -1}
    onClick={disabled ? undefined : onClick}
    style={style}
  >
    {startIcon && (
      <span style={{ display: 'inline-flex', alignItems: 'center', marginRight: 2 }}>
        {startIcon}
      </span>
    )}
    {label}
    {endIcon && !onDelete && (
      <span style={{ display: 'inline-flex', alignItems: 'center', marginLeft: 2 }}>
        {endIcon}
      </span>
    )}
    {onDelete && (
      <IconButton
        size="small"
        onClick={e => {
          e.stopPropagation();
          onDelete();
        }}
        sx={{
          color: textColor,
          background: 'transparent',
          marginLeft: '3px',
          ml: 0.5,
          opacity: 0.82,
          '&:hover': {
            color: glowColor,
            background: '#fff1',
            boxShadow: `0 0 9px 2px ${glowColor}70`,
          },
        }}
        tabIndex={-1}
        disabled={disabled}
        aria-label="delete"
      >
        <CancelIcon fontSize="small" />
      </IconButton>
    )}
  </StyledGlowChip>
);

export default GlowChip;