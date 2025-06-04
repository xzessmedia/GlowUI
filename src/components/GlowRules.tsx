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
import GlowTypography from './GlowTypography';

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

type RuleStatus = keyof typeof ruleColors;

const RuleCard = styled('div')<{
  status?: RuleStatus;
  featured?: boolean;
  expanded?: boolean;
}>(
  ({ status = 'default', featured, expanded }) => {
    const glowColor = ruleColors[status as RuleStatus]?.shadow || ruleColors.default.shadow;
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

const RuleTitle = styled('div')<{status?: RuleStatus}>(({status}) => ({
  fontWeight: 700,
  fontSize: 18,
  color: ruleColors[status ?? 'default']?.color || ruleColors.default.color,
  marginBottom: 5,
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  textShadow: '0 0 7px #05ffa144, 0 2px 6px #8b5cf677'
}));

const ExpandIconBox = styled('span')<{expanded?:boolean}>(({expanded}) => ({
  transition: 'transform 0.3s cubic-bezier(.42,2.12,.58,1.21)',
  transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
  display: 'flex',
  alignItems: 'center',
}));

export interface GlowRule {
  title: React.ReactNode;
  description?: React.ReactNode;
  status?: RuleStatus;
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

  orientation?: 'vertical' | 'horizontal' | 'grid';
  ruleGap?: number | string;
  showHeader?: boolean;
  stickyHeader?: boolean;
  maxNestingDepth?: number;
  defaultExpandDepth?: number;
  cardBorderRadius?: number | string;
  cardShadow?: string;
  animationDuration?: number;
  showTags?: boolean;
  tagVariant?: 'chip' | 'pill' | 'text';
  tagGradient?: string;
  showIcons?: boolean;
  iconSize?: number;
  customRenderTitle?: (rule: GlowRule) => React.ReactNode;
  customRenderDescription?: (rule: GlowRule) => React.ReactNode;
  customRenderTag?: (tag: string, rule: GlowRule) => React.ReactNode;
  customRenderCard?: (rule: GlowRule, children: React.ReactNode) => React.ReactNode;
}

const GlowRules: React.FC<GlowRulesProps> = ({
  rules = [],
  header = 'Rulebook',
  style,
  cardStyle,
  onRuleClick,
  orientation = 'vertical',
  ruleGap = 14,
  showHeader = true,
  showTags = true,
  tagGradient = 'linear-gradient(90deg,#00ff99,#8b5cf6)',
  customRenderTitle,
  customRenderDescription,
  customRenderTag,
  customRenderCard,
  showIcons = true,
  iconSize = 19,
}) => {
  const [expanded, setExpanded] = useState<{[k:number]:boolean}>({});
  const handleExpand = (idx: number) => setExpanded(e => ({...e, [idx]: !e[idx]}));
  return (
    <GlowCard
      glass glow animated
      gradient='linear-gradient(120deg,#181b39 55%,#38bdf855 110%)'
      borderRadius={32}
      style={{
        maxWidth: orientation === 'vertical' ? 620 : undefined,
        minWidth: 300,
        width: '100%',
        ...style, ...cardStyle
      }}
    >
      {showHeader && header && <RulebookHeader>{header}</RulebookHeader>}
      <RuleList
        sx={{
          flexDirection: orientation === 'horizontal' ? 'row' : 'column',
          gap: ruleGap,
          flexWrap: orientation === 'horizontal' ? 'wrap' : undefined,
        }}
      >
        {rules.map((rule, i) => {
          const status = rule.status || 'default';
          const colorSet = ruleColors[status] || ruleColors.default;
          const Icon = rule.icon || colorSet.Icon;
          const expand = rule.expandable;
          const isExpanded = expanded[i] ?? rule.expandedByDefault ?? false;
          let cardContent = (
            <>
              <RuleTitle status={status as RuleStatus}>
                {showIcons && Icon && typeof Icon === 'function' ? (
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    fontSize: iconSize,
                    marginRight: 6,
                    filter: `drop-shadow(0 0 6px ${colorSet.color}a0)`
                  }}>
                    <Icon sx={{ fontSize: iconSize, color: colorSet.color }} />
                  </span>
                ) : null}
                {customRenderTitle
                  ? customRenderTitle(rule)
                  : (
                      <GlowTypography
                        variant="h6"
                        clipText
                        glow
                        gradient={status === 'success' ? 'linear-gradient(90deg,#00ff99,#38d1c4)' : status === 'error' ? 'linear-gradient(90deg,#ef4444,#f472b6)' : status === 'info' ? 'linear-gradient(90deg,#38bdf8,#8b5cf6)' : status === 'warning' ? 'linear-gradient(90deg,#ffab00,#00ff99)' : 'linear-gradient(90deg,#8b5cf6,#38d1c4,#00ff99)'}
                        fontWeight={900}
                        sx={{ display: 'inline-block', ml: 0.7 }}
                      >
                        {rule.title}
                      </GlowTypography>
                    )
                }
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
                  {rule.description && (
                    customRenderDescription
                      ? customRenderDescription(rule)
                      : (
                          <GlowTypography variant="body2" glow glowColor={colorSet.color} fontWeight={500} clipText={false} sx={{ mb: 0.5, mt: 0.2 }}>
                            {rule.description}
                          </GlowTypography>
                        )
                  )}
                  <div>
                    {showTags && rule.tags && rule.tags.map((tag, tidx) => (
                      customRenderTag
                        ? customRenderTag(tag, rule)
                        : (
                            <GlowTypography
                              key={tidx}
                              variant="caption"
                              glow
                              clipText
                              gradient={tagGradient}
                              fontWeight={600}
                              sx={{
                                display: 'inline-block',
                                mr: 1,
                                mb: 0.5,
                                px: 1.5,
                                py: 0.2,
                                borderRadius: 6,
                                background: 'rgba(0,255,153,0.08)'
                              }}
                            >
                              {tag}
                            </GlowTypography>
                          )
                    ))}
                  </div>
                  {rule.children && (
                    <Box sx={{ mt: 1, pl: 2.8, borderLeft: '2px solid #8b5cf633'}}>
                      <GlowRules
                        rules={rule.children}
                        header={null}
                        orientation={orientation}
                        ruleGap={ruleGap}
                        showTags={showTags}
                        tagGradient={tagGradient}
                        showIcons={showIcons}
                        iconSize={iconSize}
                        customRenderTitle={customRenderTitle}
                        customRenderDescription={customRenderDescription}
                        customRenderTag={customRenderTag}
                        customRenderCard={customRenderCard}
                      />
                    </Box>
                  )}
                </>
              )}
            </>
          );
          return customRenderCard
            ? customRenderCard(rule, cardContent)
            : (
                <RuleCard
                  key={i}
                  status={status as RuleStatus}
                  featured={rule.featured}
                  expanded={expand && isExpanded}
                  onClick={() => {
                    if(expand) handleExpand(i);
                    onRuleClick?.(i);
                  }}
                >
                  {cardContent}
                </RuleCard>
              );
        })}
      </RuleList>
    </GlowCard>
  );
};

export default GlowRules;
