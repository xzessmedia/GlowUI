import React from 'react';
import { styled, keyframes } from '@mui/material/styles';
import GlowMusicNote, { ClefType, MusicNoteType, AccidentalType } from './GlowMusicNote';

const pulseAnim = keyframes`
  0%,100% { filter: drop-shadow(0 0 12px #38bdf855); opacity: 1; }
  50% { filter: drop-shadow(0 0 32px #8b5cf688) brightness(1.13); opacity: 0.85; }
`;

const Container = styled('div')<{
  $palette?: readonly string[];
  $glow?: number;
}>(({ $palette, $glow }) => ({
  background: 'linear-gradient(114deg, #1e2e40 65%, #38bdf822 120%)',
  borderRadius: 24,
  padding: 28,
  margin: '0 auto',
  boxShadow: `0 0 60px 8px ${($palette && $palette[1]) || '#38bdf8'}33, 0 0 140px 32px #8b5cf644`,
  border: `2.4px solid ${($palette && $palette[0]) || '#8b5cf6'}`,
  position: 'relative',
  display: 'inline-block',
  minWidth: 320,
  minHeight: 80,
  filter: $glow ? `drop-shadow(0 0 ${16 * $glow}px #8b5cf677)` : undefined,
  transition: 'box-shadow 0.22s',
}));

const Title = styled('div')({
  fontSize: 22,
  fontWeight: 800,
  color: '#fff',
  letterSpacing: '0.01em',
  textShadow: '0 2px 14px #38bdf8bb',
  marginBottom: 7,
});

const SubTitle = styled('div')({
  fontSize: 16,
  color: '#7dd3fc',
  fontWeight: 500,
  marginBottom: 19,
});

export type NoteDuration = 'q' | 'h' | '8';

export interface PianoSheetNote {
  note: 'C4' | 'D4' | 'E4' | 'F4' | 'G4' | 'A4' | 'B4' | 'C5' | 'D5' | 'E5';
  duration: NoteDuration;
}

export interface GuitarTabNote {
  string: 0 | 1 | 2 | 3 | 4 | 5;
  fret: number;
}

export interface GuitarChordShape {
  name: string;
  frets: [number, number, number, number, number, number];
}

export type RhythmEvent = 'x' | '.' | '-' | 'o';

export type GlowNotationData =
  | PianoSheetNote[]
  | GuitarTabNote[]
  | GuitarChordShape
  | RhythmEvent[]
  | string;

// --------------------- Enhanced Piano Partiture (Uses GlowMusicNote) ---------------------

interface StaffNote {
  note: PianoSheetNote['note'];
  duration: MusicNoteType;
  accidental?: AccidentalType;
  stemDown?: boolean;
}

interface PianoStaffProps {
  clef?: ClefType;
  notes: StaffNote[];
  palette?: readonly string[];
  speedBpm?: number;
  animated?: boolean;
}

function PianoStaff({
  clef = 'treble',
  notes,
  palette = ['#8b5cf6', '#38bdf8', '#facc15'],
  speedBpm,
  animated = true,
}: PianoStaffProps) {
  const leftPad = 70;
  const xStep = 52;
  const yBase = 99;
  const yDelta = 8;
  const noteOrder: PianoSheetNote['note'][] = [
    'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5',
  ];
  return (
    <svg width={leftPad + notes.length * xStep + 32} height={120} viewBox={`0 0 ${leftPad + notes.length * xStep + 32} 120`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          y={35 + i * 16}
          x={14}
          width={leftPad + notes.length * xStep}
          height={2.4}
          rx={1.2}
          style={{ fill: palette[0], filter: `drop-shadow(0 0 7px ${palette[0]}77)` }}
        />
      ))}
      <foreignObject x={10} y={26} width={54} height={70}>
        <GlowMusicNote clefType={clef} color={palette[1]} size={54} />
      </foreignObject>
      {speedBpm && (
        <foreignObject x={54} y={12} width={90} height={36}>
          <GlowMusicNote noteType="quarter" color={palette[1]} size={39} speedBpm={speedBpm} speedUnit="bpm" />
        </foreignObject>
      )}
      {notes.map((nt, i) => {
        const yIdx = noteOrder.indexOf(nt.note);
        const ypos = yIdx >= 0 ? yBase - yIdx * yDelta : yBase;
        return (
          <foreignObject key={i} x={leftPad + i * xStep} y={ypos - 35} width={38} height={65}>
            <GlowMusicNote
              noteType={nt.duration}
              accidental={nt.accidental}
              color={palette[2]}
              size={39}
              animated={animated}
              showStemDown={nt.stemDown}
            />
          </foreignObject>
        );
      })}
    </svg>
  );
}

// --------------------- Renderers ---------------------

function PianoSheet({
  data,
  palette = ['#8b5cf6', '#38bdf8', '#facc15'],
  glow = 1.1,
  animated = true,
}: {
  data: PianoSheetNote[];
  palette?: readonly string[];
  glow?: number;
  animated?: boolean;
}) {
  const notes: PianoSheetNote[] =
    data && data.length
      ? data
      : [
          { note: 'G4', duration: 'q' },
          { note: 'A4', duration: '8' },
          { note: 'B4', duration: 'q' },
          { note: 'C5', duration: 'h' },
        ];
  const staffColor = palette[0];
  const noteColor = palette[1];
  const noteOrder: PianoSheetNote['note'][] = [
    'C4',
    'D4',
    'E4',
    'F4',
    'G4',
    'A4',
    'B4',
    'C5',
    'D5',
    'E5',
  ];
  return (
    <svg width={396} height={120} viewBox="0 0 396 120">
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          y={35 + i * 16}
          x={18}
          width={360}
          height={2.9}
          rx={1.5}
          style={{
            fill: staffColor,
            filter: `drop-shadow(0 0 9px ${staffColor}66)`,
          }}
        />
      ))}
      {notes.map((n, idx) => {
        const i = noteOrder.indexOf(n.note);
        const ypos = i >= 0 ? 99 - i * 8 : 99;
        return (
          <ellipse
            key={idx}
            cx={60 + idx * 48}
            cy={ypos}
            rx={13}
            ry={9}
            fill={noteColor}
            stroke={palette[2]}
            strokeWidth={2.3}
            style={{
              filter:
                `drop-shadow(0 0 18px ${noteColor}66)` +
                (animated ? ' blur(0.2px)' : ''),
              animation: animated
                ? `${pulseAnim} 2.7s ${0.22 * idx}s infinite`
                : undefined,
              opacity: 0.97,
            }}
          />
        );
      })}
    </svg>
  );
}

function GuitarTab({
  data,
  palette = ['#f472b6', '#38bdf8', '#8b5cf6'],
  glow = 1.1,
  animated = true,
}: {
  data: GuitarTabNote[];
  palette?: readonly string[];
  glow?: number;
  animated?: boolean;
}) {
  const notes: GuitarTabNote[] =
    data && data.length
      ? data
      : [
          { string: 0, fret: 3 },
          { string: 1, fret: 2 },
          { string: 2, fret: 0 },
          { string: 3, fret: 0 },
          { string: 4, fret: 0 },
          { string: 5, fret: 3 },
        ];
  const stringColor = palette[1];
  return (
    <svg width={355} height={85} viewBox="0 0 355 85">
      {Array.from({ length: 6 }).map((_, s) => (
        <rect
          key={s}
          y={18 + s * 11}
          x={27}
          width={305}
          height={2.6}
          rx={1.1}
          style={{
            fill: stringColor,
            filter: `drop-shadow(0 0 7px ${stringColor}77)`,
          }}
        />
      ))}
      {Array.from({ length: 6 }).map((_, f) => (
        <rect
          key={f}
          x={72 + f * 45}
          y={11}
          width={4.3}
          height={66}
          rx={3}
          fill={palette[0]}
          style={{ filter: `drop-shadow(0 0 4px ${palette[0]}55)` }}
        />
      ))}
      {notes.map((n, idx) => (
        <g
          key={idx}
          style={{
            filter: `drop-shadow(0 0 9.5px ${palette[2]}99)`,
            animation: animated
              ? `${pulseAnim} 2.1s ${0.18 * idx}s infinite`
              : undefined,
          }}
        >
          <circle
            cx={72 + n.fret * 45}
            cy={23 + n.string * 11}
            r={8}
            fill={palette[2]}
            opacity={0.98}
          />
          <text
            x={72 + n.fret * 45}
            y={27 + n.string * 11}
            textAnchor="middle"
            fontWeight="bold"
            fontSize={14}
            fill="#fff"
            style={{ fontFamily: 'Inter' }}
          >
            {n.fret}
          </text>
        </g>
      ))}
    </svg>
  );
}

function GuitarChords({
  data,
  palette = ['#f472b6', '#38bdf8', '#facc15'],
  glow = 1.1,
  animated = true,
}: {
  data: GuitarChordShape;
  palette?: readonly string[];
  glow?: number;
  animated?: boolean;
}) {
  const chord = data ?? {
    name: 'E',
    frets: [0, 2, 2, 1, 0, 0] as [number, number, number, number, number, number],
  };
  return (
    <svg width={170} height={120} viewBox="0 0 170 120">
      <text
        x={85}
        y={22}
        textAnchor="middle"
        fontWeight="bold"
        fontSize={22}
        fill={palette[0]}
        style={{ textShadow: '0 0 8px #fff8' }}
      >
        {chord.name}
      </text>
      {Array.from({ length: 6 }).map((_, i) => (
        <rect
          key={i}
          x={30 + i * 18}
          y={40}
          width={2.7}
          height={70}
          rx={1.6}
          fill={palette[1]}
          style={{ filter: `drop-shadow(0 0 9px ${palette[1]}66)` }}
        />
      ))}
      {Array.from({ length: 5 }).map((_, i) => (
        <rect
          key={i}
          x={27}
          y={56 + i * 14}
          width={108}
          height={3.1}
          rx={1.3}
          fill={palette[2]}
          opacity={0.93}
          style={{ filter: `drop-shadow(0 0 6px ${palette[2]}66)` }}
        />
      ))}
      {chord.frets.map((fret, s) =>
        fret > 0 ? (
          <circle
            key={s}
            cx={30 + s * 18}
            cy={55 + (fret - 1) * 14}
            r={6}
            fill={palette[0]}
            style={{
              filter: `drop-shadow(0 0 17px ${palette[0]}99)`,
              animation: animated
                ? `${pulseAnim} 2.9s ${0.11 * s}s infinite`
                : undefined,
            }}
            opacity={0.96}
          />
        ) : (
          <text
            key={s}
            x={30 + s * 18}
            y={45}
            textAnchor="middle"
            fontWeight="bold"
            fontSize={13}
            fill={palette[1]}
            style={{
              fontFamily: 'Inter',
              filter: `drop-shadow(0 0 8px #38bdf866)`,
            }}
          >
            o
          </text>
        )
      )}
    </svg>
  );
}

function Rhythmic({
  data,
  palette = ['#05ffa1', '#facc15', '#8b5cf6'],
  glow = 1.1,
  animated = true,
}: {
  data: RhythmEvent[] | string;
  palette?: readonly string[];
  glow?: number;
  animated?: boolean;
}) {
  let seq: RhythmEvent[];
  if (typeof data === 'string') {
    seq = data.split(/\s+/).map((c) => c.trim() as RhythmEvent);
  } else if (Array.isArray(data)) {
    seq = data as RhythmEvent[];
  } else {
    seq = ['x', '-', '.', 'x'];
  }
  return (
    <svg width={63 * seq.length + 30} height={60} viewBox={`0 0 ${63 * seq.length + 30} 60`}>
      <rect
        x={18}
        y={29}
        width={seq.length * 60}
        height={3.5}
        rx={1.6}
        fill={palette[0]}
        style={{ filter: `drop-shadow(0 0 12px ${palette[0]}66)` }}
      />
      {seq.map((hit, i) => {
        let fill = palette[2];
        let label = '';
        if (hit === 'x') {
          fill = palette[1];
          label = '●';
        } else if (hit === '-') {
          fill = '#747';
          label = '—';
        } else if (hit === '.') {
          fill = palette[0];
          label = '•';
        } else if (hit === 'o') {
          fill = '#f472b6';
          label = '○';
        } else {
          label = hit;
        }
        return (
          <text
            key={i}
            x={40 + i * 60}
            y={38}
            textAnchor="middle"
            fontWeight={900}
            fontSize={29}
            fill={fill}
            opacity={0.93}
            style={{
              filter: `drop-shadow(0 0 18px ${fill}66)`,
              animation: animated ? `${pulseAnim} 1.7s ${0.16 * i}s infinite` : undefined,
            }}
          >
            {label}
          </text>
        );
      })}
    </svg>
  );
}

// --------------------- Main GlowNotation Component ---------------------
export interface GlowNotationProps {
  mode: 'piano-sheet' | 'guitar-tab' | 'guitar-chords' | 'rhythmic';
  data: GlowNotationData;
  palette?: readonly string[];
  glowIntensity?: number;
  animated?: boolean;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  style?: React.CSSProperties;
}

const GlowNotation: React.FC<
  GlowNotationProps & {
    clef?: ClefType;
    staffNotes?: StaffNote[];
    speedBpm?: number;
  }
> = ({
  mode,
  data,
  palette,
  glowIntensity = 1.13,
  animated = true,
  title,
  subtitle,
  style,
  clef,
  staffNotes,
  speedBpm,
}) => {
  return (
    <Container $palette={palette} $glow={glowIntensity} style={style}>
      {title && <Title>{title}</Title>}
      {subtitle && <SubTitle>{subtitle}</SubTitle>}
      {mode === 'piano-sheet' && Array.isArray(staffNotes) && staffNotes.length > 0 ? (
        <PianoStaff clef={clef} notes={staffNotes} palette={palette} speedBpm={speedBpm} animated={animated} />
      ) : null}
      {mode === 'piano-sheet' && (!staffNotes || staffNotes.length === 0) && Array.isArray(data) && (
        <PianoSheet data={data as PianoSheetNote[]} palette={palette} glow={glowIntensity} animated={animated} />
      )}
      {mode === 'guitar-tab' && Array.isArray(data) && (
        <GuitarTab data={data as GuitarTabNote[]} palette={palette} glow={glowIntensity} animated={animated} />
      )}
      {mode === 'guitar-chords' && !Array.isArray(data) && typeof data === 'object' && (
        <GuitarChords data={data as GuitarChordShape} palette={palette} glow={glowIntensity} animated={animated} />
      )}
      {mode === 'rhythmic' && (Array.isArray(data) || typeof data === 'string') && (
        <Rhythmic data={data as RhythmEvent[] | string} palette={palette} glow={glowIntensity} animated={animated} />
      )}
    </Container>
  );
};

export default GlowNotation;
