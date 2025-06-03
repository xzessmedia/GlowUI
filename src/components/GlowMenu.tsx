import React from 'react';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem, { MenuItemProps } from '@mui/material/MenuItem';
import { styled, keyframes } from '@mui/material/styles';

// Neon/gradient background animation
const neonGrad = keyframes`
  0%,100% { background-position: 0% 50%;}
  50% { background-position: 100% 50%;}
`;

const StyledMenu = styled(Menu)<{
  glowColor?: string;
  gradColors?: string[];
  gradAngle?: string;
  borderColor?: string;
  borderRadius?: number | string;
  animated?: boolean;
}>(
  ({
    glowColor = '#8b5cf6',
    gradColors = ['#6366f1', '#38bdf8', '#f472b6'],
    gradAngle = '120deg',
    borderColor = '#9333ea',
    borderRadius = 22,
    animated = true
  }) => ({
    '& .MuiPaper-root': {
      background: `linear-gradient(${gradAngle}, ${gradColors.join(', ')})`,
      backgroundSize: '220% 220%',
      backgroundPosition: '0% 50%',
      borderRadius,
      border: `2.5px solid ${borderColor}`,
      boxShadow: `0 0 32px 8px ${glowColor}99, 0 4px 44px 8px #000a`,
      color: '#fff',
      padding: 0,
      ...(animated && {
        animation: `${neonGrad} 5.6s ease-in-out infinite alternate`
      }),
      overflow: 'hidden',
      minWidth: 190,
    }
  })
);

const StyledMenuItem = styled(MenuItem)<{
  glowColor?: string;
  activeColor?: string;
  gradHover?: string;
  borderRadius?: number | string;
  animated?: boolean;
}>(
  ({
    glowColor = '#38bdf8',
    activeColor = '#f472b6',
    gradHover = 'linear-gradient(90deg, #f472b688 50%, #9333ea66 110%)',
    borderRadius = 12,
    animated = true
  }) => ({
    fontWeight: 600,
    letterSpacing: '0.01em',
    borderRadius,
    color: '#fff',
    position: 'relative',
    zIndex: 1,
    transition: 'background 0.18s, box-shadow 0.16s, color 0.16s',
    '&:hover, &.Mui-focusVisible': {
      background: gradHover,
      color: '#fff',
      boxShadow:
        animated
          ? `0 0 14px 4px ${glowColor}cc, 0 0 24px 7px ${activeColor}99`
          : undefined,
      textShadow: `0 0 12px ${glowColor}`,
      outline: 'none',
    }
  })
);

export interface GlowMenuProps extends Omit<MenuProps, 'children'> {
  open: boolean;
  anchorEl: MenuProps['anchorEl'];
  onClose: MenuProps['onClose'];
  items: {
    label: React.ReactNode;
    onClick?: () => void;
    icon?: React.ReactNode;
    disabled?: boolean;
    sx?: MenuItemProps['sx'];
    key?: React.Key;
  }[];
  glowColor?: string;
  gradColors?: string[];
  gradAngle?: string;
  borderColor?: string;
  borderRadius?: number | string;
  animated?: boolean;
  MenuItemProps?: Partial<MenuItemProps>;
}

const GlowMenu: React.FC<GlowMenuProps> = ({
  open,
  anchorEl,
  onClose,
  items,
  glowColor = '#8b5cf6',
  gradColors = ['#6366f1', '#38bdf8', '#f472b6'],
  gradAngle = '120deg',
  borderColor = '#9333ea',
  borderRadius = 22,
  animated = true,
  MenuItemProps: outerMenuItemProps = {},
  ...rest
}) => (
  <StyledMenu
    open={open}
    anchorEl={anchorEl}
    onClose={onClose}
    glowColor={glowColor}
    gradColors={gradColors}
    gradAngle={gradAngle}
    borderColor={borderColor}
    borderRadius={borderRadius}
    animated={animated}
    {...rest}
  >
    {items.map((item, idx) => (
      <StyledMenuItem
        key={item.key ?? idx}
        onClick={(event) => {
          if (!item.disabled && item.onClick) item.onClick();
          onClose?.(event, 'backdropClick');
        }}
        disabled={item.disabled}
        glowColor={glowColor}
        activeColor={gradColors[2] || '#f472b6'}
        borderRadius={borderRadius}
        animated={animated}
        sx={item.sx}
        {...outerMenuItemProps}
      >
        {item.icon && (
          <span style={{ marginRight: 14, display: 'inline-flex', alignItems: 'center', opacity: 0.86 }}>
            {item.icon}
          </span>
        )}
        {item.label}
      </StyledMenuItem>
    ))}
  </StyledMenu>
);

export default GlowMenu;