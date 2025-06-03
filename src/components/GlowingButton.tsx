import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

interface GlowingButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  colorVariant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  glowIntensity?: number;
}

const StyledGlowButton = styled(Button, {
  shouldForwardProp: (prop) => !['glowIntensity', 'colorVariant'].includes(prop as string),
})<{ glowIntensity?: number; colorVariant?: 'primary' | 'secondary' }>(({ theme, glowIntensity = 0.8, colorVariant = 'primary' }) => {
  const primaryColor = '#6366f1';
  const secondaryColor = '#8b5cf6';
  const currentColor = colorVariant === 'primary' ? primaryColor : secondaryColor;
  
  return {
    position: 'relative',
    padding: '12px 32px',
    borderRadius: '12px',
    border: 'none',
    background: `linear-gradient(135deg, ${currentColor} 0%, ${colorVariant === 'primary' ? '#4f46e5' : '#7c3aed'} 100%)`,
    color: '#ffffff',
    fontWeight: 600,
    fontSize: '16px',
    fontFamily: 'Inter, sans-serif',
    textTransform: 'none',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    
    // Glow effect
    boxShadow: `
      0 0 ${20 * glowIntensity}px ${currentColor}40,
      0 0 ${40 * glowIntensity}px ${currentColor}20,
      0 4px 15px rgba(0, 0, 0, 0.2)
    `,
    
    // Pseudo-element for animated border
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
    },
    
    // Hover effects
    '&:hover': {
      transform: 'translateY(-2px) scale(1.02)',
      boxShadow: `
        0 0 ${30 * glowIntensity}px ${currentColor}60,
        0 0 ${60 * glowIntensity}px ${currentColor}30,
        0 8px 25px rgba(0, 0, 0, 0.3)
      `,
      
      '&::before': {
        opacity: 1,
      },
    },
    
    // Active/pressed state
    '&:active': {
      transform: 'translateY(0) scale(0.98)',
      transition: 'all 0.1s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    
    // Disabled state
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
    
    // Size variants
    ...(size === 'small' && {
      padding: '8px 24px',
      fontSize: '14px',
    }),
    
    ...(size === 'large' && {
      padding: '16px 40px',
      fontSize: '18px',
    }),
  };
});

const GlowingButton: React.FC<GlowingButtonProps> = ({ 
  children = 'Glow Button',
  onClick,
  colorVariant = 'primary',
  size = 'medium',
  disabled = false,
  glowIntensity = 0.8,
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
      glowIntensity={glowIntensity}
      colorVariant={colorVariant}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isPressed ? 'translateY(0) scale(0.98)' : undefined,
      }}
    >
      {children}
    </StyledGlowButton>
  );
};

export default GlowingButton;