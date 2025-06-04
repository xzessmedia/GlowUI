import React from 'react';
import { styled } from '@mui/material/styles';
import GlowCard from './GlowCard';
import GlowTypography from './GlowTypography';

interface TimelineGridConfig {
  type: 'time' | 'frames' | 'custom';
  step: number;
  labelInterval?: number;
  unit?: number;
  unitLabel?: string;
  timecodeFormatter?: (mark: number, idx: number) => React.ReactNode;
  style?: React.CSSProperties;
}

export interface GlowTimelineTrack {
  id: string;
  height?: number;
  label?: React.ReactNode;
  color?: string;
  elements: Array<{
    id: string;
    start: number;
    end: number;
    content: React.ReactNode;
    style?: React.CSSProperties;
    color?: string;
    glow?: boolean;
  }>;
}

export interface GlowTimelineProps {
  duration: number;
  tracks: GlowTimelineTrack[];
  grid?: TimelineGridConfig;
  header?: React.ReactNode;
  style?: React.CSSProperties;
  cardStyle?: React.CSSProperties;
  orientation?: 'horizontal' | 'vertical';
  glow?: boolean;
  lineColor?: string;
}

const TimelineGrid = styled('div')<{
  step: number;
  duration: number;
  orientation: 'horizontal' | 'vertical';
}>(({ step, duration, orientation }) => ({
  pointerEvents: 'none',
  position: 'absolute',
  zIndex: 2,
  inset: 0,
  ...(orientation === 'horizontal'
    ? {
        display: 'flex',
        flexDirection: 'row',
      width: '100%',
        height: '100%',
      }
    : {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
      }),
}));

const TrackContainer = styled('div')<{
  orientation: 'horizontal' | 'vertical';
}>(({ orientation }) => ({
  position: 'relative',
  width: '100%',
  display: 'flex',
  flexDirection: orientation === 'horizontal' ? 'column' : 'row',
  gap: 14,
  paddingBottom: 8,
}));

const TrackLabel = styled('div')({
  color: '#fff',
  fontWeight: 600,
  fontSize: 13,
  minWidth: 80,
  textAlign: 'right',
  paddingRight: 8,
  opacity: 0.8,
});

const TrackElements = styled('div')<{
  orientation: 'horizontal' | 'vertical';
}>(({ orientation }) => ({
  position: 'relative',
  flex: 1,
  height: orientation === 'horizontal' ? 32 : undefined,
  minHeight: 32,
  display: 'flex',
  flexDirection: orientation === 'horizontal' ? 'row' : 'column',
  ...(orientation === 'horizontal' && { alignItems: 'center' }),
}));

const GlowTimeline: React.FC<GlowTimelineProps> = ({
  duration,
  tracks,
  grid = { type: 'time', step: 10, labelInterval: 50, unit: 1 },
  header,
  style,
  cardStyle,
  orientation = 'horizontal',
  glow = true,
  lineColor = '#8b5cf6',
}) => {
  const stepSize = grid.step * (grid.unit ?? 1);
  const stepCount = Math.ceil(duration / stepSize);
  const toDisplay = (mark: number) => mark * (grid.unit ?? 1);
  const formatLabel =
    grid.timecodeFormatter ??
    ((mark: number) =>
      grid.type === 'frames'
        ? `${toDisplay(mark)}${grid.unitLabel || 'f'}`
        : grid.type === 'custom'
          ? `${toDisplay(mark)}${grid.unitLabel || ''}`
          : `${toDisplay(mark)}${grid.unitLabel || 's'}`);

  return (
    <GlowCard
      glass
      glow={glow}
      animated
      gradient="linear-gradient(120deg, #181b39 60%, #38bdf844 110%)"
      borderRadius={32}
      style={{
        width: '100%',
        maxWidth: 1200,
        margin: '0 auto',
        padding: 28,
        ...style,
        ...cardStyle,
    }}
  >
      {header && (
        <div
          style={{
            fontWeight: 900,
            fontSize: 26,
            color: '#fff',
            marginBottom: 12,
            textAlign: 'center',
            textShadow: '0 0 28px #8b5cf677, 0 1px 24px #38bdf8',
          }}
        >
          {header}
            </div>
            )}
      <div
        style={{
          position: 'relative',
          padding:
            orientation === 'horizontal'
              ? '30px 12px 16px 0'
              : '12px 0 12px 60px',
        }}
      >
        <TimelineGrid orientation={orientation} step={grid.step} duration={duration}>
          {Array.from({ length: stepCount + 1 }).map((_, i) => {
            const mark = i * grid.step;
            const mainColor = `hsl(${(360 / stepCount) * i},98%,66%)`;
            return (
              <div
                key={mark}
                style={{
                  ...(orientation === 'horizontal'
                    ? { left: `${(mark / duration) * 100}%`, position: 'absolute', top: 0, bottom: 0, borderLeft: `2px solid ${lineColor}` }
                    : { top: `${(mark / duration) * 100}%`, position: 'absolute', left: 0, right: 0, borderTop: `2px solid ${lineColor}` }),
                  opacity: 0.28 + 0.12 * Math.sin(i),
                  filter: `blur(${i % 3 === 0 ? 0 : 1}px)`,
                  zIndex: 0,
                }}
              >
                {(grid.labelInterval && i % Math.max(1, Math.round(grid.labelInterval / grid.step)) === 0) && (
                  <GlowTypography
                    fontWeight={900}
                    fontSize={11}
                    shadowColors={['0 0 10px #111', '0 1px 8px #fff8', '0 0 2px #05ffa1a0']}
                    gradient={`linear-gradient(90deg,${mainColor} 40%,#fff 100%)`}
                    glowColor={mainColor}
                    glowIntensity={2.1}
              style={{
                      position: 'absolute',
                      top: orientation === 'horizontal' ? -24 : 0,
                      left: orientation === 'horizontal' ? 0 : 8,
                      letterSpacing: '.04em',
                        textShadow: '0 1px 6px #000e',
                        color: '#fff',
                      textAlign: 'center',
                      pointerEvents: 'none',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
              }}
            >
                    {formatLabel(mark, i)}
                  </GlowTypography>
                )}
                    </div>
                  );
                })}
        </TimelineGrid>
        <TrackContainer orientation={orientation}>
          {tracks.map((track) => (
            <div
              key={track.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                height: track.height || 48,
              }}
            >
              {track.label && <TrackLabel>{track.label}</TrackLabel>}
              <TrackElements orientation={orientation}>
                {track.elements.map((item) => {
                  const len = Math.max(1, item.end - item.start);
                  const posPercent = (item.start / duration) * 100;
                  const sizePercent = (len / duration) * 100;
                  return (
                    <div
                      key={item.id}
                      style={{
                        position: 'absolute',
                        left:
                          orientation === 'horizontal'
                            ? `${posPercent}%`
                            : undefined,
                        width:
                          orientation === 'horizontal'
                            ? `${sizePercent}%`
                            : '100%',
                        top:
                          orientation === 'vertical'
                            ? `${posPercent}%`
                            : undefined,
                        height:
                          orientation === 'vertical'
                            ? `${sizePercent}%`
                            : '100%',
                        borderRadius: 18,
                        background:
                          item.color ||
                          'linear-gradient(90deg,#38bdf8a0 60%,#8b5cf6dd 110%)',
                        boxShadow:
                          item.glow !== false
                            ? '0 2px 24px 5px #05ffa160, 0 2px 48px 8px #8b5cf660'
                            : undefined,
                        zIndex: 10,
                        border: '2px solid #fff4',
                        transition: 'box-shadow 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 800,
                        fontSize: 14,
                        color: '#fff',
                        overflow: 'visible',
                        cursor: 'pointer',
                        padding: 4,
                        ...item.style,
                      }}
                    >
                      {item.content}
      </div>
  );
                })}
              </TrackElements>
            </div>
          ))}
        </TrackContainer>
      </div>
    </GlowCard>
  );
};

export default GlowTimeline;