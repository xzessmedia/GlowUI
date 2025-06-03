import React from 'react';
import { styled, keyframes } from '@mui/material/styles';
import Box from '@mui/material/Box';
import GlowCard from './GlowCard';
import GlowingButton from './GlowingButton';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import TransgenderIcon from '@mui/icons-material/Transgender';
import Diversity3Icon from '@mui/icons-material/Diversity3';

const glowAnim = keyframes`
  0%,100% { box-shadow: 0 0 12px #05ffa160, 0 0 30px #8b5cf640; }
  55% { box-shadow: 0 0 24px #38bdf880, 0 0 42px #8b5cf660; }
`;

const SelectorHeader = styled('div')({
  fontWeight: 900,
  fontSize: 22,
  color: '#fff',
  marginBottom: 11,
  letterSpacing: '.031em',
  textShadow: '0 0 9px #8b5cf688,0 2px 14px #38bdf866',
  textAlign: 'center',
});

const OptionGrid = styled('div')({
  display: 'flex',
  gap: 22,
  justifyContent: 'center',
});

const OptionCard = styled('div')<{
  selected?: boolean,
  color?: string
}>(({ selected, color = '#38bdf8' }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minWidth: 90,
  padding: '24px 14px 15px 14px',
  borderRadius: 18,
  background: selected 
    ? `linear-gradient(110deg, ${color}20 60%, #8b5cf620 100%)` 
    : 'linear-gradient(120deg,#181b39 70%,#38bdf810 105%)',
  border: selected ? `2px solid ${color}` : '1.5px solid #38bdf822',
  cursor: 'pointer',
  transition: 'all .22s cubic-bezier(.72,.1,.82,.89)',
  boxShadow: selected
    ? `0 0 16px 2px ${color}99, 0 2px 22px #8b5cf655`
    : `0 0 8px 1.5px #05ffa120, 0 2px 8px #8b5cf622`,
  animation: selected ? `${glowAnim} 2.2s infinite alternate` : undefined,
  userSelect: 'none',
}));

const OptionLabel = styled('div')({
  marginTop: 9,
  fontWeight: 700,
  fontSize: 15.5,
  color: '#fff',
  letterSpacing: '.01em',
  textShadow: '0 0 9px #38bdf844,0 2px 8px #8b5cf688',
});

const otherColors = {
  male:    { color: '#38bdf8', Icon: MaleIcon },
  female:  { color: '#fb37eb', Icon: FemaleIcon },
  trans:   { color: '#05ffa1', Icon: TransgenderIcon },
  other:   { color: '#a3a3ff', Icon: Diversity3Icon },
};

export type GlowGenderValue = 'male' | 'female' | 'trans' | 'other' | string;

export interface GlowGenderSelectorOption {
  value: GlowGenderValue;
  label: React.ReactNode;
  color?: string;
  Icon?: typeof MaleIcon;
  custom?: boolean;
}

export interface GlowGenderSelectorProps {
  value: GlowGenderValue;
  onChange: (value: GlowGenderValue) => void;
  withCustom?: boolean;
  customLabel?: string;
  customPlaceholder?: string;
  header?: React.ReactNode;
  style?: React.CSSProperties;
}

const builtInOptions: GlowGenderSelectorOption[] = [
  { value: 'male', label: 'Male',   color: otherColors.male.color,   Icon: otherColors.male.Icon },
  { value: 'female', label: 'Female', color: otherColors.female.color, Icon: otherColors.female.Icon },
  { value: 'trans',  label: 'Trans / Nonbinary',  color: otherColors.trans.color,  Icon: otherColors.trans.Icon },
  { value: 'other', label: 'Other', color: otherColors.other.color, Icon: otherColors.other.Icon }
];

const GlowGenderSelector: React.FC<GlowGenderSelectorProps> = ({
  value,
  onChange,
  withCustom = true,
  customLabel = 'Custom',
  customPlaceholder = 'Your gender...',
  header = 'Select Gender',
  style = {},
}) => {
  const [customInput, setCustomInput] = React.useState(
    value !== 'male' && value !== 'female' && value !== 'trans' && value !== 'other'
      ? value
      : ''
  );

  const isCustom = 
    value !== 'male' &&
    value !== 'female' &&
    value !== 'trans' &&
    value !== 'other';

  return (
    <GlowCard
      glass glow animated
      borderRadius={26}
      gradient="linear-gradient(120deg,#181b39 64%,#38bdf822 108%)"
      style={{
        maxWidth: 420,
        minWidth: 200,
        ...style,
      }}
    >
      {header && <SelectorHeader>{header}</SelectorHeader>}
      <OptionGrid>
        {builtInOptions.map(opt => (
          <OptionCard
            key={opt.value}
            selected={value === opt.value}
            color={opt.color}
            onClick={() => { onChange(opt.value); setCustomInput(''); }}
          >
            <opt.Icon sx={{ fontSize: 34, color: opt.color, filter: `drop-shadow(0 0 4px ${opt.color}80)` }} />
            <OptionLabel>{opt.label}</OptionLabel>
          </OptionCard>
        ))}
        {withCustom && (
          <OptionCard
            selected={isCustom}
            color={'#ffe169'}
            onClick={() => onChange(customInput || 'other')}
            style={{ minWidth: 110 }}
          >
            <Diversity3Icon sx={{ fontSize: 32, color: '#ffe169', filter: 'drop-shadow(0 0 4px #ffe16990)' }} />
            <OptionLabel>{customLabel}</OptionLabel>
            {isCustom && (
              <input
                type="text"
                value={customInput}
                onChange={e => {
                  setCustomInput(e.target.value);
                  onChange(e.target.value);
                }}
                placeholder={customPlaceholder}
                style={{
                  background: 'rgba(24,27,57,0.9)',
                  border: 'none',
                  outline: 'none',
                  borderRadius: 8,
                  fontSize: 15,
                  padding: '7px 10px',
                  marginTop: 8,
                  color: '#fff',
                  boxShadow: '0 0 6px #8b5cf640'
                }}
              />
            )}
          </OptionCard>
        )}
      </OptionGrid>
    </GlowCard>
  );
};

export default GlowGenderSelector;