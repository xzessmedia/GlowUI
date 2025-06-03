import React, { useState } from 'react';
import { styled, keyframes } from '@mui/material/styles';
import Box from '@mui/material/Box';
import GlowCard from './GlowCard';
import GlowingButton from './GlowingButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';
import WarningIcon from '@mui/icons-material/WarningAmber';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ruleGlowAnim = keyframes`
  0%,100% { box-shadow: 0 0 12px #05ffa160, 0 0 30px #8b5cf640; }
  55% { box-shadow: 0 0 24px #38bdf880, 0 0 42px #8b5cf660; }
`;

const RulebookHeader = styled('div')({
  fontWeight: 900,
  fontSize: 26,
  color: '#fff',
  letterSpacing: '.031em',
  marginBottom: 10,
  textShadow: '0 0 16px #8b5cf6b6,0 2px 18px #38bdf8aa',
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  justifyContent: 'center',
});

const RuleList = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 14,
  marginTop: 5,
  paddingBottom: 7,
});

const ruleColors = {
  success: { color: '#05ffa1', shadow: '#05ffa170', Icon: CheckCircleIcon },
  warning: { color: '#fbbf24', shadow: '#fbbf2466', Icon: WarningIcon },
  error:   { color: '#ef4444', shadow: '#ef444460', Icon: ErrorIcon },
  info:    { color: '#38bdf8', shadow: '#38bdf860', Icon: InfoIcon },
  default: { color: '#8b5cf6', shadow: '#8b5cf666', Icon: InfoIcon }
};

const RuleCard = styled('div')<{status?: any, featured?: boolean, expanded?: boolean}>(
  ({ status = 'default', featured, expanded }) => {
    const glowColor = ruleColors[status]?.shadow || ruleColors.default.shadow;
    return {
      background: featured
        ? 'linear-gradient(110deg, #05ffa110 50%, #8b5cf625 100%)'
        : 'linear-gradient(110deg, #181b39 70%, #38bdf822 105%)',
      borderRadius: 19,
      boxShadow: `0 0 14px 1.5px ${glowColor}`,
      padding: `20px 20px ${expanded ? '18px' : '14px'} 20px`,
      transition: 'all .31s cubic-bezier(.72, .1, .82, .89)',
      position: 'relative',
      cursor: 'pointer',
      animation: featured ? `${ruleGlowAnim} 7s infinite alternate` : undefined,
      border: featured ? '2.7px solid #05ffa199' : '1.3px solid #38bdf822',
      userSelect: 'none',
    };
  }
);

const RuleTitle = styled('div')<{status?:string}>(({status}) => ({
  fontWeight: 700,
  fontSize: 18,
  color: ruleColors[status as keyof typeof ruleColors]?.color || ruleColors.default.color,
  marginBottom: 5,
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  textShadow: '0 0 7px #05ffa144, 0 2px 6px #8b5cf677'
}));

const RuleDesc = styled('div')(() => ({
  fontWeight: 400,
  fontSize: 15.2,
  color: "#fff",
  textShadow: '0 0 6px #8b5cf633',
  marginBottom: 0,
  lineHeight: 1.55,
  opacity: 0.96,
  marginTop: 2
}));

const RuleTag = styled('span')({
  display: 'inline-block',
  background: 'linear-gradient(98deg,#38bdf822 60%,#8b5cf633 120%)',
  color: '#05ffa1',
  borderRadius: 7,
  fontSize: 12.5,
  padding: '2.5px 9px',
  marginRight: 5,
  marginBottom: 2,
  fontWeight: 500,
  letterSpacing: '.01em',
});

const ExpandIconBox = styled('span')<{expanded?:boolean}>(({expanded}) => ({
  transition: 'transform 0.3s cubic-bezier(.42,2.12,.58,1.21)',
  transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
  display: 'flex',
  alignItems: 'center',
}));

// ------- Types -------

export interface GlowRule {
  title: React.ReactNode;
  description?: React.ReactNode;
  status?: 'success' | 'warning' | 'error' | 'info' | 'default';
  tags?: string[];
  featured?: boolean;
  icon?: React.ReactNode;
  expandable?: boolean;
  expandedByDefault?: boolean;
  children?: GlowRule[];
}

export interface GlowRulesProps {
  rules: GlowRule[];
  header?: React.ReactNode;
  style?: React.CSSProperties;
  cardStyle?: React.CSSProperties;
  onRuleClick?: (idx: number) => void;
}

const GlowRules: React.FC<GlowRulesProps> = ({
  rules = [],
  header = 'Rulebook',
  style,
  cardStyle,
  onRuleClick,
}) => {
  // Track expanded rules for expandable ones
  const [expanded, setExpanded] = useState<{[k:number]:boolean}>({});

  const handleExpand = (idx: number) => setExpanded(e => ({
    ...e,
    [idx]: !e[idx]
  }));

  return (
    <GlowCard
      glass glow animated
      gradient='linear-gradient(120deg,#181b39 55%,#38bdf855 110%)'
      borderRadius={32}
      style={{
        maxWidth: 620,
        minWidth: 300,
        width: '100%',
        ...style, ...cardStyle
      }}
    >
      {header && <RulebookHeader>{header}</RulebookHeader>}
      <RuleList>
        {rules.map((rule, i) => {
          const status = rule.status || 'default';
          const colorSet = ruleColors[status] || ruleColors.default;
          const Icon = rule.icon || colorSet.Icon;
          const expand = rule.expandable;
          const isExpanded = expanded[i] ?? rule.expandedByDefault ?? false;
          return (
            <RuleCard
              key={i} 
              status={status}
              featured={rule.featured}
              expanded={expand && isExpanded}
              onClick={() => {
                if(expand) handleExpand(i);
                onRuleClick?.(i);
              }}
            >
              <RuleTitle status={status}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  fontSize: 21,
                  filter: `drop-shadow(0 0 6px ${colorSet.color}a0)`
                }}>
                  {typeof Icon === 'function' ? <Icon sx={{fontSize: 19, color: colorSet.color}} /> : Icon}
                </span>
                {rule.title}
                {expand && (
                  <ExpandIconBox expanded={isExpanded}>
                    <ExpandMoreIcon sx={{
                      color: colorSet.color,
                      fontSize: 22,
                      filter: 'drop-shadow(0 0 3px #05ffa133)'
                    }} />
                  </ExpandIconBox>
                )}
              </RuleTitle>
              {(isExpanded || !expand) && (
                <>
                  {rule.description && <RuleDesc>{rule.description}</RuleDesc>}
                  <div>
                    {rule.tags && rule.tags.map((tag, tidx) => <RuleTag key={tidx}>{tag}</RuleTag>)}
                  </div>
                  {rule.children && (
                    <Box sx={{ mt: 1, pl: 2.8, borderLeft: '2px solid #8b5cf633'}}>
                      <GlowRules rules={rule.children} header={null}/>
                    </Box>
                  )}
                </>
              )}
            </RuleCard>
          );
        })}
      </RuleList>
    </GlowCard>
  );
};

export default GlowRules;