import React, { useState, InputHTMLAttributes, ReactNode } from 'react';
import { styled } from '@mui/material/styles';

interface GlowInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  colorVariant?: 'primary' | 'secondary';
  glowIntensity?: number;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

const GlowInputWrapper = styled('div')<{
  focused: boolean;
  colorVariant: 'primary' | 'secondary';
  glowIntensity: number;
}>(({ theme, focused, colorVariant, glowIntensity }) => {
  const primaryColor = theme.palette?.primary?.main || '#6366f1';
  const secondaryColor = theme.palette?.secondary?.main || '#8b5cf6';
  const activeColor = colorVariant === 'primary' ? primaryColor : secondaryColor;
  return {
    position: 'relative',
    margin: '24px 0',
    display: 'flex',
    alignItems: 'center',
    background: `linear-gradient(120deg, ${activeColor}22 0%, #ffffff22 100%)`,
    borderRadius: 14,
    padding: '2px 14px',
    boxShadow: focused
      ? `0 0 ${30 * glowIntensity}px ${activeColor}88, 0 0 ${60 * glowIntensity}px ${activeColor}33, 0 2px 16px #2222`
      : `0 2px 12px ${activeColor}18`,
    transition: 'box-shadow 0.35s cubic-bezier(0.4,0,0.2,1), background 0.25s',
    overflow: 'hidden',
    minWidth: 280,
  };
});

const GlowInputField = styled('input')<{
  colorVariant: 'primary' | 'secondary';
}>(({ theme, colorVariant }) => {
  const primaryColor = theme.palette?.primary?.main || '#6366f1';
  const secondaryColor = theme.palette?.secondary?.main || '#8b5cf6';
  const activeColor = colorVariant === 'primary' ? primaryColor : secondaryColor;
  return {
    outline: 'none',
    border: 'none',
    background: 'transparent',
    color: '#fff',
    fontSize: 18,
    padding: '14px 0',
    flex: 1,
    zIndex: 2,
    fontFamily: 'inherit',
    fontWeight: 500,
    letterSpacing: 0.3,
    caretColor: activeColor,
    // Hide native autofill background
    '&:-webkit-autofill': {
      WebkitBoxShadow: '0 0 0 100px #191e28 inset',
      WebkitTextFillColor: '#fff',
    },
  };
});

const GlowInputLabel = styled('label')<{
  focused: boolean;
  filled: boolean;
  colorVariant: 'primary' | 'secondary';
}>(({ theme, focused, filled, colorVariant }) => {
  const primaryColor = theme.palette.primary.main || '#6366f1';
  const secondaryColor = theme.palette.secondary.main || '#8b5cf6';
  const glowColor = colorVariant === 'primary' ? primaryColor : secondaryColor;
  return {
    position: 'absolute',
    left: 18,
    top: focused || filled ? 4 : '50%',
    fontSize: focused || filled ? 13 : 18,
    color: focused || filled ? glowColor : '#aaa',
    fontWeight: focused || filled ? 700 : 500,
    pointerEvents: 'none',
    transform: focused || filled ? 'translateY(0)' : 'translateY(-50%)',
    letterSpacing: 0.2,
    transition: 'all 0.21s cubic-bezier(.74,.1,.3,1.4)',
    textShadow: focused
      ? `0 0 8px ${glowColor}99, 0 0 2px #fff2`
      : 'none',
    zIndex: 3,
    textTransform: 'uppercase',
    userSelect: 'none'
  };
});

const GlowBar = styled('span')<{
  focused: boolean;
  colorVariant: 'primary' | 'secondary';
}>(({ theme, focused, colorVariant }) => {
  const primaryColor = theme.palette.primary.main || '#6366f1';
  const secondaryColor = theme.palette.secondary.main || '#8b5cf6';
  const activeColor = colorVariant === 'primary' ? primaryColor : secondaryColor;
  return {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '8%',
    width: focused ? '84%' : '0%',
    height: 4,
    borderRadius: 8,
    background: `linear-gradient(90deg, ${activeColor}cc 0%, #fff3 100%)`,
    boxShadow: focused ? `0 0 12px ${activeColor}bb` : undefined,
    transition: 'all 0.28s cubic-bezier(.99,.26,.17,.81)',
    zIndex: 2,
  };
});

const IconWrapper = styled('span')({
  display: 'flex',
  alignItems: 'center',
  marginRight: 8,
  color: '#fff8',
  zIndex: 5,
});

const GlowInput: React.FC<GlowInputProps> = ({
  label,
  colorVariant = 'primary',
  glowIntensity = 1.2,
  leadingIcon,
  trailingIcon,
  value,
  onFocus,
  onBlur,
  ...inputProps
}) => {
  const [focused, setFocused] = useState(false);

  const isFilled = Boolean(
    typeof value === 'string' && value.length > 0 ||
    typeof value === 'number' && value !== ''
  );

  return (
    <GlowInputWrapper
      focused={focused}
      colorVariant={colorVariant}
      glowIntensity={glowIntensity}
    >
      {leadingIcon && <IconWrapper>{leadingIcon}</IconWrapper>}
      <GlowInputField
        {...inputProps}
        colorVariant={colorVariant}
        onFocus={e => {
          setFocused(true);
          onFocus?.(e);
        }}
        onBlur={e => {
          setFocused(false);
          onBlur?.(e);
        }}
        value={value}
        autoComplete="off"
        spellCheck={false}
        style={{}}
      />
      {label && (
        <GlowInputLabel
          focused={focused}
          filled={isFilled}
          colorVariant={colorVariant}
        >
          {label}
        </GlowInputLabel>
      )}
      <GlowBar focused={focused} colorVariant={colorVariant} />
      {trailingIcon && <IconWrapper style={{ marginLeft: 8, marginRight: 0 }}>{trailingIcon}</IconWrapper>}
    </GlowInputWrapper>
  );
};

export default GlowInput;