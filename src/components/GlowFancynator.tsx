/*******
 * GlowFancynator.tsx
 * 
 * A magical component that makes ANYTHING inside ultra-fancy with vibrant Glow effects!
 * Wrap any content in <GlowFancynator> to instantly make it vibrant, glowing, and animated.
 ******/
import React, { useRef, useEffect, useState } from 'react';
import { styled, keyframes } from '@mui/system';
import Box from '@mui/material/Box';
import type { CSSObject } from '@emotion/react';

const shimmerGlow = keyframes`
  0%, 100% { 
    box-shadow: 0 0 40px 10px #8b5cf666, 0 0 100px 40px #38bdf833;
    filter: saturate(1.2) contrast(1.1);
  }
  33% { 
    box-shadow: 0 0 80px 20px #05ffa177, 0 0 140px 80px #9333ea44;
    filter: saturate(1.5) contrast(1.2);
  }
  66% { 
    box-shadow: 0 0 60px 15px #f472b688, 0 0 120px 60px #6366f133;
    filter: saturate(1.3) contrast(1.15);
  }
`;

const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-5px) rotate(0.5deg); }
  75% { transform: translateY(5px) rotate(-0.5deg); }
`;

const GlowFancynatorContainer = styled(Box)<{
  $intensity?: number;
  $color?: 'primary' | 'secondary' | 'accent' | 'rainbow';
  $animation?: 'subtle' | 'medium' | 'wild';
  $type?: 'text' | 'image' | 'component' | 'auto';
}>(({ $intensity = 1, $color = 'rainbow', $animation = 'medium', $type = 'auto' }) => {
  const gradients = {
    primary: 'linear-gradient(90deg, #6366f1 0%, #38bdf8 50%, #8b5cf6 100%)',
    secondary: 'linear-gradient(90deg, #f472b6 0%, #9333ea 50%, #8b5cf6 100%)',
    accent: 'linear-gradient(90deg, #05ffa1 0%, #38bdf8 50%, #6366f1 100%)',
    rainbow: 'linear-gradient(90deg, #f472b6 0%, #9333ea 20%, #8b5cf6 40%, #6366f1 60%, #38bdf8 80%, #05ffa1 100%)'
  };
  const speeds = {
    subtle: '8s',
    medium: '5s',
    wild: '3s'
  };

  const baseStyles: CSSObject = {
    position: 'relative',
    zIndex: 1,
    animation: `${float} ${speeds[$animation]} ease-in-out infinite`,
    transition: 'all 0.3s ease',
    boxShadow: `0 0 ${30 * $intensity}px ${$intensity * 8}px #8b5cf644`,
    filter: `saturate(${1 + $intensity * 0.3}) contrast(${1 + $intensity * 0.1})`,
    overflow: 'visible',
    '&:hover': {
      transform: 'scale(1.03)',
      boxShadow: `0 0 ${50 * $intensity}px ${$intensity * 15}px #05ffa166`,
      filter: `saturate(${1.5 + $intensity * 0.3}) contrast(${1.2 + $intensity * 0.1})`,
    }
  };

  const textStyles: CSSObject = {
    background: gradients[$color],
    backgroundSize: '200% 200%',
    backgroundClip: 'text',
    color: 'transparent',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: `0 0 ${10 * $intensity}px #8b5cf6bb`,
    fontWeight: 'bold',
    letterSpacing: '0.02em',
    animation: `${gradientMove} ${speeds[$animation]} ease infinite, ${float} ${speeds[$animation]} ease-in-out infinite`,
  };

  const imageStyles: CSSObject = {
    borderRadius: 20,
    padding: $intensity * 0.2 + 'rem',
    background: gradients[$color],
    backgroundSize: '200% 200%',
    animation: `${gradientMove} ${speeds[$animation]} ease infinite, ${shimmerGlow} ${speeds[$animation]} ease-in-out infinite`,
    '& img': {
      borderRadius: 16,
      width: '100%',
      height: 'auto',
      display: 'block'
    }
  };

  const componentStyles: CSSObject = {
    padding: $intensity * 0.5 + 'rem',
    borderRadius: 25,
    background: `linear-gradient(135deg, #181b3955 55%, #38bdf811 100%)`,
    backgroundSize: '200% 200%',
    animation: `${shimmerGlow} ${speeds[$animation]} ease-in-out infinite`,
    border: `2px solid transparent`,
    borderImage: gradients[$color],
    borderImageSlice: 1,
  };

  if ($type === 'text') return { ...baseStyles, ...textStyles } as CSSObject;
  if ($type === 'image') return { ...baseStyles, ...imageStyles } as CSSObject;
  if ($type === 'component') return { ...baseStyles, ...componentStyles } as CSSObject;
  
  return { 
    ...baseStyles, 
    animation: `${shimmerGlow} ${speeds[$animation]} ease-in-out infinite`,
    borderRadius: 15,
    '& img': { maxWidth: '100%', borderRadius: 12 },
    '& h1, & h2, & h3, & h4, & h5, & h6, & p': {
      color: '#fff',
      textShadow: `0 0 ${6 * $intensity}px #8b5cf6bb`,
    },
    '& button, & a': {
      position: 'relative',
      zIndex: 2,
      transition: 'all 0.2s ease',
      '&:hover': {
        transform: 'scale(1.05) translateY(-2px)',
        boxShadow: `0 0 ${20 * $intensity}px ${$intensity * 5}px #05ffa166`
      }
    }
  } as CSSObject;
});

export interface GlowFancynatorProps {
  children: React.ReactNode;
  intensity?: number; // 0.5 to 3 (default: 1)
  color?: 'primary' | 'secondary' | 'accent' | 'rainbow';
  animation?: 'subtle' | 'medium' | 'wild';
  type?: 'text' | 'image' | 'component' | 'auto';
  className?: string;
  style?: React.CSSProperties;
}

const GlowFancynator: React.FC<GlowFancynatorProps> = ({
  children,
  intensity = 1,
  color = 'rainbow',
  animation = 'medium',
  type = 'auto',
  className,
  style
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    // Could add auto-detection logic here
  }, [type]);

  return (
    <GlowFancynatorContainer
      ref={containerRef}
      $intensity={intensity}
      $color={color}
      $animation={animation}
      $type={type}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
        ...style
      }}
    >
      {children}
    </GlowFancynatorContainer>
  );
};

export default GlowFancynator;