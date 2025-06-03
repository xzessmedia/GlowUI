/**
 * GlowMaskInput.tsx — Ultra Fancy Masked Input for Glow UI
 * Pattern masking for credit card, dates, phone numbers & custom structures.
 *
 * Key Features:
 *  - Vibrant, glowing user interface (matches all Glow UI components)
 *  - Flexible mask: use # for digit, A (upper), a (lower), * (alphanumeric), literals
 *  - Auto-formatting as you type; impossible to enter invalid chars/format
 *  - Animated glow on focus/error/valid/invalid
 *  - Customizable (color, size, border radius, error display, disabled, etc.)
 *  - Easy to use: <GlowMaskInput mask="#### #### #### ####" ... />
 *
 * See also: src/utils/GlowMask.ts
 */

import React, { useRef, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import GlowInput from './GlowInput';
import {
  formatWithMask, unmask, validForMask, getMaskRegex
} from '../utils/GlowMask';

const ErrorMsg = styled('div')({
  color: '#fb7185',
  fontWeight: 700,
  marginTop: 4,
  fontSize: 13,
  textShadow: '0 0 10px #fb718544',
});

export interface GlowMaskInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  mask: string;
  value: string;
  onChange: (formatted: string, raw: string) => void;
  label?: string;
  colorVariantOverride?: 'primary' | 'secondary' | 'accent';
  disabled?: boolean;
  error?: boolean;
  errorMsg?: React.ReactNode;
  helperText?: React.ReactNode;
  borderRadius?: number | string;
  glowIntensity?: number;
}

/**
 * GlowMaskInput React Component
 * @param props See GlowMaskInputProps for options
 */
const GlowMaskInput: React.FC<GlowMaskInputProps> = ({
  mask,
  value,
  onChange,
  label,
  colorVariantOverride = 'primary',
  disabled = false,
  error = false,
  errorMsg,
  helperText,
  borderRadius,
  glowIntensity,
  ...inputProps
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  // Get the value masked (shown in the field)
  const formatted = formatWithMask(unmask(value, mask), mask);

  // Check if input is valid (full length, and matches mask)
  const isValid = getMaskRegex(mask).test(formatted);

  // Only allow legal values to be typed (no invalid chars, auto insert mask literals)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawNext = unmask(e.target.value, mask);
    if (validForMask(rawNext, mask)) {
      // Format and emit
      onChange(formatWithMask(rawNext, mask), rawNext);
    } // else ignore illegal char
  };

  // Visual cues (glow animation, border), handle focus etc.
  // Delegated to GlowInput for max. reuse

  return (
    <Box>
      <GlowInput
        ref={inputRef}
        label={label || mask}
        value={formatted}
        colorVariant={colorVariantOverride}
        borderRadius={borderRadius}
        glowIntensity={error ? 2.1 : glowIntensity}
        disabled={disabled}
        error={error || (!disabled && value && !isValid)}
        onChange={handleChange}
        autoComplete="off"
        style={{ letterSpacing: '0.12em', fontWeight: 600, fontSize: 17 }}
        {...inputProps}
      />
      {!disabled && value && (!isValid || error) && (
        <ErrorMsg>
          {errorMsg || 'Invalid format.'}
        </ErrorMsg>
      )}
      {helperText && !error && (
        <div style={{ color: '#05ffa1', fontWeight: 500, fontSize: 13.3, marginTop: 3, textShadow: '0 0 8px #38bdf822' }}>{helperText}</div>
      )}
    </Box>
  );
};

export default GlowMaskInput;
