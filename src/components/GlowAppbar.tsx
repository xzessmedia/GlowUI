import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled, keyframes } from '@mui/material/styles';

// Animation for glowing neon
const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px 10px #7c3aed88, 0 0 60px 20px #6366f188;
    filter: blur(0.8px);
  }
  50% {
    box-shadow: 0 0 50px 24px #f472b698, 0 0 120px 42px #38bdf888;
    filter: blur(2px);
  }
`;

// Animation for animated gradient background
const gradientMove = keyframes`
  0% { background-position: 0% 50%;}
  50% { background-position: 100% 50%;}
  100% { background-position: 0% 50%;}
`;

const NeonWave = styled('div')({
  position: 'absolute',
  top: 0, left: 0, width: '100%', height: '100%',
  pointerEvents: 'none',
  zIndex: 0,
  background: 'radial-gradient(ellipse at 40% 10%, #85f5ff44 0%, #a78bfa11 60%, transparent 80%)',
  mixBlendMode: 'screen',
  animation: `${glow} 2.8s infinite alternate`,
});

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'variantStyle'
})<{ variantStyle?: 'neon' | 'gradient' | 'classic' }>(
  ({ theme, variantStyle = 'neon' }) => {
    let styles: any = {
      position: 'relative',
      overflow: 'visible',
      boxShadow: 'none',
    };
    if (variantStyle === 'gradient') {
      styles = {
        ...styles,
        background: 'linear-gradient(90deg, #6366f1 5%, #f472b6 60%, #38bdf8 100%)',
        backgroundSize: '200% 200%',
        animation: `${gradientMove} 5s linear infinite`,
      };
    }
    if (variantStyle === 'neon') {
      styles = {
        ...styles,
        background: 'linear-gradient(135deg, #9333ea 60%, #38bdf888 100%)',
        boxShadow: '0 0 42px 4px #8b5cf6bb, 0 4px 24px 2px #38bdf888',
        filter: 'drop-shadow(0 2px 16px #f472b6bb)',
        borderBottom: '2px solid #f472b6bb',
      };
    }
    if (variantStyle === 'classic') {
      styles = {
        ...styles,
        background: theme.palette.primary.main,
      };
    }
    return styles;
  }
);

interface GlowAppbarProps {
  title?: React.ReactNode;
  left?: React.ReactNode;
  right?: React.ReactNode;
  variantStyle?: 'neon' | 'gradient' | 'classic';
  fancy?: boolean;
  children?: React.ReactNode;
}

const GlowAppbar: React.FC<GlowAppbarProps> = ({
  title = 'Glow Appbar',
  left,
  right,
  variantStyle = 'neon',
  fancy = true,
  children,
}) => {
  return (
    <StyledAppBar variantStyle={variantStyle} position="static" elevation={0}>
      {fancy && variantStyle === 'neon' && <NeonWave />}
      <Toolbar sx={{ zIndex: 1, position: 'relative', minHeight: 70 }}>
        {left && <Box mr={2}>{left}</Box>}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 900,
            letterSpacing: '0.08em',
            textShadow: '0 0 5px #fff5, 0 0 22px #8b5cf6ad',
            color: '#fff',
            textTransform: 'uppercase',
            flex: 1,
          }}
        >
          {title}
        </Typography>
        {children}
        {right && <Box ml={2}>{right}</Box>}
      </Toolbar>
    </StyledAppBar>
  );
};

export default GlowAppbar;