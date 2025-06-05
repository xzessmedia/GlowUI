import React from 'react';
import { styled, keyframes } from '@mui/material/styles';
import Box from '@mui/material/Box';
import GlowCard from './GlowCard';
import GlowingButton from './GlowingButton';

const glowBarAnim = keyframes`
  0% { filter: brightness(1) saturate(1.1); }
  50% { filter: brightness(1.19) saturate(2.5); box-shadow: 0 0 14px #38bdf888, 0 0 30px #8b5cf688; }
  100% { filter: brightness(1) saturate(1.1); }
`;

const Bar = styled('div')<{
  $fill: number;
  $color: string;
  $glow: boolean;
  $animated: boolean;
}>(({ $fill, $color, $glow, $animated }) => ({
  height: '22px',
  width: `${$fill * 100}%`,
  minWidth: $fill > 0 ? '14%' : '6%',
  borderRadius: 25,
  background: `linear-gradient(93deg, ${$color}, #38bdf8 90%)`,
  boxShadow: $glow ? `0 0 15px 2px ${$color}99, 0 0 60px 10px #38bdf855` : undefined,
  transition: 'width 0.68s cubic-bezier(.7,.11,.42,.99)',
  animation: $animated ? `${glowBarAnim} 3.2s ease-in-out infinite alternate` : undefined,
  position: 'relative',
}));

const OptionWrap = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  margin: '11px 0',
  cursor: 'pointer',
  zIndex: 1,
});

const OptionText = styled('div')({
  fontWeight: 700,
  fontSize: 17,
  color: '#fff',
  letterSpacing: '0.01em',
  textShadow: '0 2px 8px #38bdf8ad, 0 4px 22px #9333ea44',
  padding: '2px 0',
});

export interface GlowPollOption {
  label: React.ReactNode;
  value: string | number;
  color?: string;
  icon?: React.ReactNode;
}

export interface GlowPollProps {
  question: React.ReactNode;
  options: GlowPollOption[];
  value?: string | number | (string | number)[];
  onChange?: (value: string | number | (string | number)[]) => void;
  multiple?: boolean;
  disabled?: boolean;
  showResults?: boolean;
  results?: number[];
  gradient?: string;
  glowBars?: boolean;
  animatedBars?: boolean;
  cardProps?: any;
  optionRenderer?: (opt: GlowPollOption, idx: number, props: {
    selected: boolean,
    disabled: boolean,
    percent: number,
    handleClick: () => void
  }) => React.ReactNode;
  footer?: React.ReactNode;
  style?: React.CSSProperties;
}

const vibrantColors = [
  '#8b5cf6', '#38bdf8', '#f472b6', '#facc15', '#05ffa1', '#f472b6', '#7c3aed', '#6366f1'
];

const GlowPoll: React.FC<GlowPollProps> = ({
  question,
  options,
  value,
  onChange,
  multiple = false,
  disabled = false,
  showResults = false,
  results = [],
  gradient,
  glowBars = true,
  animatedBars = true,
  cardProps = {},
  optionRenderer,
  footer,
  style,
}) => {
  const totalVotes = results.reduce((a, b) => a + b, 0);
  const fallbackResults = options.map((_, i) => Math.round(Math.abs(Math.sin(i + 2)) * 100));
  const fallbackTotal = fallbackResults.reduce((a, b) => a + b, 0) || 1;

  const selected = Array.isArray(value) ? value : value ? [value] : [];

  const handleOptionClick = (idx: number) => {
    if (disabled || showResults) return;
    const val = options[idx].value;
    let next;
    if (multiple) {
      if (selected.includes(val)) {
        next = selected.filter(v => v !== val);
      } else {
        next = [...selected, val];
      }
    } else {
      next = val;
    }
    onChange?.(next);
  };

  return (
    <GlowCard
      gradient={gradient}
      glow
      animated
      borderRadius={37}
      style={{ maxWidth: 470, minWidth: 240, margin: '0 auto', ...style }}
      {...cardProps}
    >
      <div style={{ padding: '25px 29px 12px 29px', fontWeight: 800, fontSize: 23, letterSpacing: '0.01em' }}>{question}</div>
      <div>
        {options.map((opt, idx) => {
          const color = opt.color || vibrantColors[idx % vibrantColors.length];
          const isSelected = selected.includes(opt.value);
          const percent = showResults
            ? results[idx] || (fallbackResults[idx] * 100) / fallbackTotal
            : 0;
          const Option = optionRenderer ? optionRenderer(opt, idx, {
            selected: isSelected,
            disabled,
            percent,
            handleClick: () => handleOptionClick(idx)
          }) : (
            <OptionWrap
              onClick={() => handleOptionClick(idx)}
              style={{ opacity: disabled ? 0.64 : 1 }}
            >
              {opt.icon}
              <OptionText style={isSelected ? {
                color: color,
                textShadow: `0 0 12px ${color}cc, 0 0 22px #38bdf866`
                } : {}}>
                {opt.label}
              </OptionText>
              {showResults && (
                <Box sx={{ flex: 1, ml: 2, mr: 3, minWidth: 60 }}>
                  <Bar
                    $fill={percent / 100}
                    $color={color}
                    $glow={glowBars}
                    $animated={animatedBars}
                  />
                  <div style={{ position: 'absolute', right: 9, top: 2, fontSize: 15, color: '#fff', fontWeight: 500 }}>{Math.round(percent)}%</div>
                </Box>
              )}
            </OptionWrap>
          );
          return (
            <React.Fragment key={idx}>{Option}</React.Fragment>
          );
        })}
      </div>
      <Box mt={2} mb={2} display="flex" justifyContent="flex-end" alignItems="center">
        {!showResults && (
          <GlowingButton
            onClick={() => onChange?.(selected)}
            colorVariant="primary"
            glowIntensity={1.15}
            disabled={disabled || !selected.length}
            style={{ minWidth: 110 }}
          >
            Vote
          </GlowingButton>
        )}
      </Box>
      {!!footer && <div style={{ padding: '0 22px 15px 22px' }}>{footer}</div>}
    </GlowCard>
  );
};

export default GlowPoll;
