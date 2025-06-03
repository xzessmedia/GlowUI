import React from 'react';
import { styled, keyframes } from '@mui/material/styles';

const pulseAnim = keyframes`
  0%,100% { filter: drop-shadow(0 0 12px #38bdf855); opacity: 1; }
  50% { filter: drop-shadow(0 0 32px #8b5cf688) brightness(1.13); opacity: 0.85; }
`;

const Container = styled('div')<{
  $palette?: string[];
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

// --- Piano Sheet SVG Rendering ---
function PianoSheet({ data, palette = ['#8b5cf6', '#38bdf8', '#facc15'], glow = 1.1, animated = true }) {
  // data: array of notes [{note: 'C4', duration: 'q'}, ...]
  const notes = data && data.length ? data : [
    { note: 'G4', duration: 'q' },
    { note: 'A4', duration: '8' },
    { note: 'B4', duration: 'q' },
    { note: 'C5', duration: 'h' },
  ];
  const staffColor = palette[0];
  const noteColor = palette[1];
  return (
    <svg width={396} height={120} viewBox="0 0 396 120">
      {/* Staff lines */}
      {[0, 1, 2, 3, 4].map(i => (
        <rect key={i} y={35 + i * 16} x={18} width={360} height={2.9} rx={1.5}
          style={{ fill: staffColor, filter: `drop-shadow(0 0 9px ${staffColor}66)` }} />
      ))}
      {/* Animated notes */}
      {notes.map((n, idx) => {
        const ypos = 99 - ['C4','D4','E4','F4','G4','A4','B4','C5','D5','E5'].indexOf(n.note) * 8;
        const duration = n.duration;
        // Shape: 'q'=filled, 'h'=empty, '8'=with tail
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
              filter: `drop-shadow(0 0 18px ${noteColor}66)` + (animated ? ' blur(0.2px)' : ''),
              animation: animated ? `${pulseAnim} 2.7s ${0.22 * idx}s infinite` : undefined,
              opacity: 0.97,
            }}
          />
        );
      })}
    </svg>
  );
}

// --- Guitar Tab SVG Rendering ---
function GuitarTab({ data, palette = ['#f472b6', '#38bdf8', '#8b5cf6'], glow = 1.1, animated = true }) {
  // data: array of {string:0-5, fret:number}
  const notes = data && data.length ? data : [
    { string: 0, fret: 3 }, { string: 1, fret: 2 }, { string: 2, fret: 0 },
    { string: 3, fret: 0 }, { string: 4, fret: 0 }, { string: 5, fret: 3 }
  ];
  const stringColor = palette[1];
  return (
    <svg width={355} height={85} viewBox="0 0 355 85">
      {/* Strings */}
      {Array.from({length:6}).map((_,s)=>(
        <rect key={s} y={18 + s*11} x={27} width={305} height={2.6} rx={1.1} style={{ fill: stringColor, filter: `drop-shadow(0 0 7px ${stringColor}77)` }}/>
      ))}
      {/* Frets */}
      {Array.from({length:6}).map((_,f)=>(
        <rect key={f} x={72+f*45} y={11} width={4.3} height={66} rx={3} fill={palette[0]} style={{ filter: `drop-shadow(0 0 4px ${palette[0]}55)` }}/>
      ))}
      {/* Fret Numbers (Notes) */}
      {notes.map((n, idx) => (
        <g key={idx} style={{ filter: `drop-shadow(0 0 9.5px ${palette[2]}99)`, animation: animated ? `${pulseAnim} 2.1s ${0.18*idx}s infinite` : undefined }}>
          <circle cx={72 + n.fret * 45} cy={23 + n.string * 11} r={8} fill={palette[2]} opacity={0.98} />
          <text x={72 + n.fret * 45} y={27 + n.string * 11} textAnchor="middle" fontWeight="bold" fontSize={14} fill="#fff" style={{fontFamily:'Inter'}}> {n.fret}</text>
        </g>
      ))}
    </svg>
  );
}

// --- Guitar Chord Diagram SVG ---
function GuitarChords({ data, palette = ['#f472b6', '#38bdf8', '#facc15'], glow = 1.1, animated = true }) {
  // data: shape { name, frets: [fret per string], fingers: [optionally] }
  const chord = data || {
    name: 'E',
    frets: [0, 2, 2, 1, 0, 0]
  };
  return (
    <svg width={170} height={120} viewBox="0 0 170 120">
      <text x={85} y={22} textAnchor="middle" fontWeight="bold" fontSize={22} fill={palette[0]} style={{textShadow:'0 0 8px #fff8'}}>{chord.name}</text>
      {/* Strings */}
      {Array.from({length:6}).map((_,i)=>(
        <rect key={i} x={30+i*18} y={40} width={2.7} height={70} rx={1.6} fill={palette[1]} style={{ filter: `drop-shadow(0 0 9px ${palette[1]}66)` }}/>
      ))}
      {/* Frets */}
      {Array.from({length:5}).map((_,i)=>(
        <rect key={i} x={27} y={56+i*14} width={108} height={3.1} rx={1.3} fill={palette[2]} opacity={0.93} style={{filter:`drop-shadow(0 0 6px ${palette[2]}66)`}} />
      ))}
      {/* Notes/Circle overlays */}
      {chord.frets.map((fret, s) => (
        fret > 0 ? (
          <circle
            key={s}
            cx={30 + s * 18}
            cy={55 + (fret - 1) * 14}
            r={6}
            fill={palette[0]}
            style={{ filter: `drop-shadow(0 0 17px ${palette[0]}99)`, animation: animated ? `${pulseAnim} 2.9s ${0.11 * s}s infinite` : undefined }}
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
            style={{fontFamily:'Inter', filter:`drop-shadow(0 0 8px #38bdf866)`}}
          >
            o
          </text>
        )
      ))}
    </svg>
  );
}

// --- Rhythmic Notation (Percussion/Beats/Claps) ---
function Rhythmic({ data, palette = ["#05ffa1", "#facc15", "#8b5cf6"], glow = 1.1, animated = true }) {
  // data: string pattern ("x x . - o") or [{type:verb, accent:bool}]
  let seq = [];
  if (typeof data === 'string') {
    seq = data.split(/\s+/).map(c => c.trim());
  } else if (Array.isArray(data)) {
    seq = data;
  } else {
    seq = ["x", "-", ".", "x"];
  }
  return (
    <svg width={63*seq.length+30} height={60} viewBox={`0 0 ${63*seq.length+30} 60`}>
      {/* Timeline */}
      <rect x={18} y={29} width={seq.length*60} height={3.5} rx={1.6} fill={palette[0]} style={{ filter: `drop-shadow(0 0 12px ${palette[0]}66)` }}/>  
      {/* Events */}
      {seq.map((hit, i) => {
        let fill = palette[2];
        let label = '';
        if(hit === 'x' || hit.type==='hit') { fill = palette[1]; label = '●'; }
        else if(hit === '-' || hit.type==='rest') { fill = '#747'; label = '—'; }
        else if(hit === '.' || hit.type==='soft') { fill = palette[0]; label = '•'; }
        else if(hit === 'o' || hit.type==='clap') { fill = '#f472b6'; label = '○'; }
        else if(typeof hit === 'string') { label = hit; }
        return (
          <text
            key={i}
            x={40 + i*60}
            y={38}
            textAnchor="middle"
            fontWeight={900}
            fontSize={29}
            fill={fill}
            opacity={0.93}
            style={{filter: `drop-shadow(0 0 18px ${fill}66)`, animation: animated ? `${pulseAnim} 1.7s ${0.16*i}s infinite` : undefined}}
          >{label}</text>
        );
      })}
    </svg>
  );
}

// --- Main GlowNotation Component ---
export interface GlowNotationProps {
  mode: 'piano-sheet' | 'guitar-tab' | 'guitar-chords' | 'rhythmic';
  data?: any;
  palette?: string[];
  glowIntensity?: number;
  animated?: boolean;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  style?: React.CSSProperties;
}

const GlowNotation: React.FC<GlowNotationProps> = ({
  mode,
  data,
  palette,
  glowIntensity = 1.13,
  animated = true,
  title,
  subtitle,
  style,
}) => {
  return (
    <Container $palette={palette} $glow={glowIntensity} style={style}>
      {title && <Title>{title}</Title>}
      {subtitle && <SubTitle>{subtitle}</SubTitle>}
      {mode === 'piano-sheet' && <PianoSheet data={data} palette={palette} glow={glowIntensity} animated={animated} />}
      {mode === 'guitar-tab' && <GuitarTab data={data} palette={palette} glow={glowIntensity} animated={animated} />}
      {mode === 'guitar-chords' && <GuitarChords data={data} palette={palette} glow={glowIntensity} animated={animated} />}
      {mode === 'rhythmic' && <Rhythmic data={data} palette={palette} glow={glowIntensity} animated={animated} />}
    </Container>
  );
};

export default GlowNotation;
