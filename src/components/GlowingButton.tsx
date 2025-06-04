import React, { useState } from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export interface GlowingButtonProps extends ButtonProps {
  glowIntensity?: number;
}

const StyledGlowButton = styled(Button, {
  shouldForwardProp: (prop) => !['glowIntensity', 'colorVariant', 'size'].includes(prop as string),
})<GlowingButtonProps>(
  ({
    theme,
  glowIntensity = 0.8,
    color = 'primary',
    size = 'medium',
    disabled,
}) => {
    const primaryColor = '#6366f1';
    const primaryDark = '#4f46e5';
    const secondaryColor = '#8b5cf6';
    const secondaryDark = '#7c3aed';
    const currentColor = color === 'primary' ? primaryColor : secondaryColor;
    const currentDark = color === 'primary' ? primaryDark : secondaryDark;

    return {
      position: 'relative',
      padding:
        size === 'small'
        ? '8px 24px'
        : size === 'large'
          ? '16px 40px'
          : '12px 32px',
      borderRadius: '12px',
      border: 'none',
      background: `linear-gradient(135deg, ${currentColor} 0%, ${currentDark} 100%)`,
      color: '#ffffff',
      fontWeight: 600,
      fontSize:
        size === 'small'
        ? '14px'
        : size === 'large'
          ? '18px'
          : '16px',
      fontFamily: 'inherit', // was 'Inter, sans-serif'
      textTransform: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      overflow: 'hidden',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: disabled
        ? `0 0 ${10 * glowIntensity}px ${currentColor}20`
        : `
          0 0 ${20 * glowIntensity}px ${currentColor}40,
          0 0 ${40 * glowIntensity}px ${currentColor}20,
        0 4px 15px rgba(0, 0, 0, 0.2)
      `,
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: '12px',
        padding: '2px',
        background: `linear-gradient(135deg, ${currentColor}, #ffffff40, ${currentColor})`,
        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        maskComposite: 'exclude',
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        opacity: 0.6,
        pointerEvents: 'none',
      },
      '&:hover': {
        ...(disabled
          ? {
        transform: 'none',
        boxShadow: `0 0 ${10 * glowIntensity}px ${currentColor}20`,
            }
          : {
              transform: 'translateY(-2px) scale(1.02)',
              boxShadow: `
                0 0 ${30 * glowIntensity}px ${currentColor}60,
                0 0 ${60 * glowIntensity}px ${currentColor}30,
                0 8px 25px rgba(0, 0, 0, 0.3)
              `,
              '&::before': {
                opacity: 1,
      },
      }),
      },
      '&:active': {
        ...(disabled
          ? {}
          : {
              transform: 'translateY(0) scale(0.98)',
              transition: 'all 0.1s cubic-bezier(0.4, 0, 0.2, 1)',
            }),
      },
      '&:disabled': {
        opacity: 0.5,
        cursor: 'not-allowed',
        transform: 'none',
        boxShadow: `0 0 ${10 * glowIntensity}px ${currentColor}20`,
        '&:hover': {
          transform: 'none',
          boxShadow: `0 0 ${10 * glowIntensity}px ${currentColor}20`,
        },
      },
};
  }
);

const GlowingButton: React.FC<GlowingButtonProps> = ({ 
  children = 'Glow Button',
  glowIntensity = 0.8,
  color = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  ...rest
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => setIsPressed(false);

  return (
    <StyledGlowButton
      variant="contained"
      onClick={onClick}
      disabled={disabled}
      color={color}
      size={size}
      glowIntensity={glowIntensity}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      style={{
        ...(rest.style || {}),
        transform: isPressed ? 'translateY(0) scale(0.98)' : undefined,
      }}
      {...rest}
    >
      {children}
    </StyledGlowButton>
  );
};

export default GlowingButton;