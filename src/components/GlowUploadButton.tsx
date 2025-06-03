import React, { useRef, useState } from 'react';
import { styled, keyframes } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

// Glowing animation
const glowAnim = keyframes`
  0% { box-shadow: 0 0 18px 7px #38bdf870, 0 0 44px 21px #8b5cf650; }
  50% { box-shadow: 0 0 36px 16px #f472b6a1, 0 0 72px 42px #6366f180; }
  100% { box-shadow: 0 0 18px 7px #38bdf870, 0 0 44px 21px #8b5cf650; }
`;

const StyledButton = styled('button')<{
  color1: string;
  color2: string;
  glowColor: string;
  borderRadius?: number | string;
  gradientAngle?: string;
  size?: 'small' | 'medium' | 'large';
  animated?: boolean;
}>(
  ({
    color1,
    color2,
    glowColor,
    borderRadius = 15,
    gradientAngle = '110deg',
    size = 'medium',
    animated = true,
  }) => {
    let padding = '10px 28px';
    let fontSize = '1.08rem';
    if (size === 'small') { padding = '5px 16px'; fontSize = '0.99rem'; }
    if (size === 'large') { padding = '18px 40px'; fontSize = '1.19rem'; }
    return {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      justifyContent: 'center',
      fontWeight: 700,
      letterSpacing: '0.06em',
      fontSize,
      border: 'none',
      borderRadius,
      background: `linear-gradient(${gradientAngle}, ${color1}, ${color2})`,
      color: '#fff',
      cursor: 'pointer',
      boxShadow: `0 0 28px 7px ${glowColor}90, 0 0 44px 18px ${color2}70`,
      transition: 'box-shadow 0.21s, background 0.18s, transform 0.13s',
      outline: 'none',
      position: 'relative',
      overflow: 'hidden',
      padding,
      ...(animated
        ? { animation: `${glowAnim} 2.4s infinite alternate` }
        : {}),
      '&:hover': {
        boxShadow: `0 0 52px 13px ${glowColor}cc, 0 0 80px 36px ${color1}90`,
        transform: 'scale(1.04) rotate(-1deg)',
      },
      '&:active': { transform: 'scale(0.97)' },
      '&:disabled': {
        opacity: 0.45,
        boxShadow: `0 0 8px 2px ${color2}50`,
        cursor: 'not-allowed',
      }
    };
  }
);

interface GlowUploadButtonProps {
  label?: React.ReactNode;
  icon?: React.ReactNode;
  color1?: string;
  color2?: string;
  glowColor?: string;
  gradientAngle?: string;
  borderRadius?: string | number;
  size?: 'small' | 'medium' | 'large';
  animated?: boolean;
  showProgressColor?: string;
  accept?: string;
  disabled?: boolean;
  onUpload?: (options: { file: File; dataUrl: string | null }) => void | Promise<void>;
  showLabel?: boolean;
  style?: React.CSSProperties;
}

const GlowUploadButton: React.FC<GlowUploadButtonProps> = ({
  label = "Upload Image",
  icon,
  color1 = "#6366f1",
  color2 = "#38bdf8",
  glowColor = "#8b5cf6",
  gradientAngle = "110deg",
  borderRadius = 15,
  size = "medium",
  animated = true,
  showProgressColor = "#9333ea",
  accept = "image/*",
  disabled = false,
  showLabel = true,
  style,
  onUpload,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleClick = () => {
    if (!disabled && inputRef.current) inputRef.current.click();
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;
    setUploading(true);
    const file = e.target.files[0];
    let dataUrl: string | null = null;
    try {
      dataUrl = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
      await onUpload?.({ file, dataUrl });
    } catch (err) {
      // Optionally handle error
    }
    setUploading(false);
    if (inputRef.current) inputRef.current.value = '';
  };

  return (
    <>
      <StyledButton
        type="button"
        onClick={handleClick}
        color1={color1}
        color2={color2}
        glowColor={glowColor}
        gradientAngle={gradientAngle}
        borderRadius={borderRadius}
        size={size}
        animated={animated}
        disabled={disabled || uploading}
        style={style}
      >
        {uploading ? (
          <CircularProgress
            size={size === 'large' ? 30 : size === 'small' ? 18 : 22}
            sx={{ color: showProgressColor }}
          />
        ) : (
          <>
            {icon !== undefined ? icon : <CloudUploadIcon sx={{ fontSize: size === "large" ? 32 : 22 }} />}
            {showLabel && <span>{label}</span>}
          </>
        )}
      </StyledButton>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        style={{ display: "none" }}
        onChange={handleChange}
        tabIndex={-1}
        disabled={disabled || uploading}
      />
    </>
  );
};

export default GlowUploadButton;