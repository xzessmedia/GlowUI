import React from 'react';
import { styled, keyframes } from '@mui/material/styles';

const notePulse = keyframes`
  0%,100% { filter: drop-shadow(0 0 12px #38bdf855); opacity: 1; }
  50% { filter: drop-shadow(0 0 25px #8b5cf677) brightness(1.11); opacity: 0.92; }
`;

const NoteSvg = styled('svg')<{
  $color: string;
  $animated: boolean;
  $size: number;
}>(({ $color, $animated, $size }) => ({
  display: 'inline-block',
  verticalAlign: 'middle',
  width: $size,
  height: $size * 1.2,
  fill: $color,
  filter: `drop-shadow(0 0 6px ${$color}88)`,
  animation: $animated ? `${notePulse} 1.7s infinite` : undefined,
  transition: 'filter 0.22s',
}));

export type MusicNoteType = 'quarter' | 'half' | 'whole' | 'eighth' | 'sixteenth';
export type ClefType = 'treble' | 'bass' | 'alto';
export type AccidentalType = 'sharp' | 'flat' | 'natural';

export interface GlowMusicNoteProps {
  noteType?: MusicNoteType;
  clefType?: ClefType;
  accidental?: AccidentalType;
  color?: string;
  size?: number;
  animated?: boolean;
  showStemDown?: boolean;
  style?: React.CSSProperties;
  speedBpm?: number;
  speedUnit?: 'bpm' | 'ms';
}

const clefs: Record<ClefType, React.ReactNode> = {
  treble: (
    <path d="M29 7q-7 2-10 10.5t0 18.5q3 7 10 8t10.5-6.5q2.5-6.5-3-10t-10-1.5q-4 3-1 8.5t10.5 7.5" stroke="#38bdf8" strokeWidth="2.2" fill="none" />
  ),
  bass: (
    <>
      <circle cx={38} cy={40} r={3.7} fill="#8b5cf6" />
      <circle cx={34} cy={48} r={2.2} fill="#8b5cf6" />
      <circle cx={44} cy={48} r={2.2} fill="#8b5cf6" />
      <path d="M30 38 Q12 35 18 22 t22 6" stroke="#8b5cf6" strokeWidth="2.8" fill="none" />
    </>
  ),
  alto: (
    <>
      <rect x={25} y={32} width={12} height={23} rx={6} fill="#facc15" opacity={0.8} />
      <rect x={32} y={32} width={3} height={23} rx={1.5} fill="#facc15" />
      <rect x={30} y={40} width={7} height={2.2} fill="#facc15" />
      <rect x={30} y={45} width={7} height={2.2} fill="#facc15" />
    </>
  ),
};

const accidentals: Record<AccidentalType, React.ReactNode> = {
  sharp: (
    <text x="2" y="36" fontSize="40" fontWeight="bold" fill="#38bdf8" fontFamily="'Noto Sans Symbols','Arial'">♯</text>
  ),
  flat: (
    <text x="2" y="37" fontSize="40" fontWeight="bold" fill="#38bdf8" fontFamily="'Noto Sans Symbols','Arial'">♭</text>
  ),
  natural: (
    <text x="2" y="36" fontSize="38" fontWeight="bold" fill="#38bdf8" fontFamily="'Noto Sans Symbols','Arial'">♮</text>
  ),
};

const notePaths: Record<MusicNoteType, React.ReactNode> = {
  whole: (
    <ellipse cx="24" cy="38" rx="14" ry="9" fill="#fff" stroke="currentColor" strokeWidth="2.2" />
  ),
  half: (
    <>
      <ellipse cx="24" cy="38" rx="14" ry="9" fill="#fff" stroke="currentColor" strokeWidth="2.2" />
      <rect x="37" y="15" width="3.4" height="27" rx="1.3" fill="currentColor" />
    </>
  ),
  quarter: (
    <>
      <ellipse cx="24" cy="38" rx="13" ry="8" fill="currentColor" stroke="#fff" strokeWidth="1.2" />
      <rect x="34" y="15" width="3.4" height="27" rx="1.3" fill="currentColor" />
    </>
  ),
  eighth: (
    <>
      <ellipse cx="24" cy="38" rx="13" ry="8" fill="currentColor" stroke="#fff" strokeWidth="1.2" />
      <rect x="34" y="15" width="3.4" height="27" rx="1.3" fill="currentColor" />
      <path d="M36 18 Q50 12 37 32" stroke="currentColor" strokeWidth="2.1" fill="none" />
    </>
  ),
  sixteenth: (
    <>
      <ellipse cx="24" cy="38" rx="13" ry="8" fill="currentColor" stroke="#fff" strokeWidth="1.2" />
      <rect x="34" y="15" width="3.4" height="27" rx="1.3" fill="currentColor" />
      <path d="M36 18 Q50 12 37 32" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M36 22 Q47 19 37 37" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </>
  ),
};

const viewBoxes: Record<MusicNoteType | ClefType, string> = {
  whole: '0 0 48 64',
  half: '0 0 48 64',
  quarter: '0 0 48 64',
  eighth: '0 0 48 64',
  sixteenth: '0 0 48 64',
  treble: '0 0 60 64',
  bass: '0 0 64 62',
  alto: '0 0 60 64',
};

const GlowMusicNote: React.FC<GlowMusicNoteProps> = ({
  noteType,
  clefType,
  accidental,
  color = '#8b5cf6',
  animated = false,
  size = 46,
  showStemDown = false,
  style,
  speedBpm,
  speedUnit = 'bpm'
}) => {
  let path: React.ReactNode = null;
  let viewBox: string | undefined;
  if (clefType) {
    path = clefs[clefType];
    viewBox = viewBoxes[clefType];
  } else if (noteType) {
    path = notePaths[noteType];
    viewBox = viewBoxes[noteType];
  }
  if (!path || !viewBox) return null;

  return (
    <span style={{display:'inline-block', ...style}}>
      <NoteSvg $color={color} $animated={animated} $size={size} viewBox={viewBox} style={{transform: showStemDown ? 'scaleY(-1)' : undefined}}>
        {accidental && <g>{accidentals[accidental]}</g>}
        {path}
      </NoteSvg>
      {speedBpm && (
        <span style={{ 
          fontSize: size/2.1, 
          marginLeft: size/14, 
          verticalAlign: 'middle', 
          fontWeight: 700, 
          color,
          textShadow:'0 2px 8px #2227'
        }}>
          {noteType === 'quarter' ? '♩' : noteType === 'eighth' ? '♪' : ''} = {speedBpm} {speedUnit}
        </span>
      )}
    </span>
  );
};

export default GlowMusicNote;