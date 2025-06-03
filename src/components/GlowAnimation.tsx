import React from 'react';
import { styled, keyframes, css } from '@mui/material/styles';
import Fade from '@mui/material/Fade';

// PREDEFINED EFFECTS
const keyframesMap: Record<string, ReturnType<typeof keyframes>> = {
  neonFade: keyframes`
    0% { opacity: 0; filter: blur(10px) brightness(0.7); transform: scale(0.93);}
    40% { opacity: 1; filter: blur(5px) brightness(1.5); }
    70% { filter: blur(2px) brightness(1.15);}
    100% { opacity: 1; filter: blur(0px) brightness(1);}
  `,
  popScale: keyframes`
    0% { opacity: 0; transform: scale(0.7) rotate(-10deg);}
    55% { opacity: 1; transform: scale(1.08) rotate(2deg);}
    85% { transform: scale(0.97) rotate(-2deg);}
    100% { opacity: 1; transform: scale(1) rotate(0);}
  `,
  slideUp: keyframes`
    0% { opacity: 0; transform: translateY(80px) scale(0.92);}
    55% { opacity: 1; transform: translateY(-10px) scale(1.04);}
    100% { opacity: 1; transform: translateY(0) scale(1);}
  `,
  glassPulse: keyframes`
    0%,100% { box-shadow: 0 0 32px 12px #8b5cf640, 0 0 88px 30px #05ffa155;}
    50% { box-shadow: 0 0 80px 18px #f472b6a9, 0 0 200px 42px #38bdf86e; }
  `,
  flipY: keyframes`
    0% { opacity: 0.2; transform: perspective(500px) rotateY(90deg) scale(.85); }
    80% { opacity: 1; transform: perspective(500px) rotateY(-4deg) scale(1.06);}
    100% { opacity: 1; transform: perspective(500px) rotateY(0deg) scale(1);}
  `,
  // Any custom effect can be added here
};

type EffectKey = keyof typeof keyframesMap;

const getEffectCss = ({
  effect,
  duration,
  delay,
  color,
  vibrant,
  glassy,
}: {
  effect: EffectKey | string;
  duration: number;
  delay: number;
  color?: string;
  vibrant?: boolean;
  glassy?: boolean;
}) => {
  // Vibrant overlays, glows, and glass backgrounds
  let vibrantShadow =
    vibrant
      ? `
    filter: drop-shadow(0 0 6px #05ffa1aa) drop-shadow(0 0 16px #8b5cf676);
    box-shadow: 0 0 36px 10px ${color ?? '#05ffa1'}33, 0 0 98px 24px #38bdf860;
    ${glassy
      ? 'backdrop-filter: blur(15px) saturate(1.25); background: linear-gradient(120deg, #292656aa 50%, #05ffa172 120%);'
      : ''}
    `
      : '';
  return css`
    animation: ${typeof keyframesMap[effect as EffectKey] === 'function'
      ? keyframesMap[effect as EffectKey]
      : keyframesMap.neonFade
    } ${duration}ms cubic-bezier(.74,.19,.13,.98) ${delay}ms both;
    ${vibrantShadow}
    will-change: opacity, transform, filter, box-shadow;
  `;
};

const GlowAnimated = styled('div', {
  shouldForwardProp: (prop) => !['effect', 'duration', 'delay', 'color', 'vibrant', 'glassy'].includes(prop as string)
})<{
  effect: EffectKey | string;
  duration: number;
  delay: number;
  color?: string;
  vibrant?: boolean;
  glassy?: boolean;
}>(({ effect, duration, delay, color, vibrant, glassy }) => ({
  display: 'inline-block',
  ...getEffectCss({ effect, duration, delay, color, vibrant, glassy }),
}));

export interface GlowAnimationProps {
  in?: boolean; // Control show/hide ("mount/unmount" if used)
  effect?: EffectKey | string;
  duration?: number; // ms
  delay?: number; // ms
  vibrant?: boolean;
  glassy?: boolean;
  color?: string;
  children: React.ReactNode;
  mountOnEnter?: boolean;
  unmountOnExit?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const GlowAnimation: React.FC<GlowAnimationProps> = ({
  in: open = true,
  effect = 'neonFade',
  duration = 1100,
  delay = 0,
  vibrant = true,
  glassy = false,
  color,
  children,
  mountOnEnter = false,
  unmountOnExit = false,
  style,
  className,
}) => {
  // Use MUI Fade for enter/exit (fade out when closed)
  return (
    <Fade
      in={open}
      timeout={duration / 2}
      mountOnEnter={mountOnEnter}
      unmountOnExit={unmountOnExit}
      appear
    >
      <GlowAnimated
        effect={effect}
        duration={duration}
        delay={delay}
        vibrant={vibrant}
        glassy={glassy}
        color={color}
        className={className}
        style={style}
      >
        {children}
      </GlowAnimated>
    </Fade>
  );
};

export default GlowAnimation;