import React, { useState } from 'react';
import { styled, keyframes } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import GlowCard from './GlowCard';

const pulseAnim = keyframes`
  0%,100% { box-shadow: 0 0 20px 2px #05ffa199, 0 0 40px 15px #8b5cf644; }
  55% { box-shadow: 0 0 70px 30px #38bdf8cc, 0 0 120px 50px #f472b655; }
`;

const GradientPreview = styled('div')<{
  gradient: string;
  borderRadius?: string | number;
  animated?: boolean;
}>(({ gradient, borderRadius, animated }) => ({
  minHeight: 92,
  borderRadius: borderRadius ?? 18,
  background: gradient,
  transition: 'background .35s',
  boxShadow: '0 0 44px #05ffa1cc, 0 0 13px #8b5cf688',
  outline: '2.5px solid #48ddea44',
  position: 'relative',
  marginBottom: 16,
  animation: animated ? `${pulseAnim} 7.7s infinite cubic-bezier(.5, .19,.89, 1.16) alternate` : undefined,
}));

function defaultStops() {
  return [
    { color: '#38bdf8', pos: 0 },
    { color: '#05ffa1', pos: 60 },
    { color: '#8b5cf6', pos: 100 },
  ];
}

function toGradient(stops: { color: string; pos: number }[], angle: number) {
  return `linear-gradient(${angle}deg, ${stops
    .map((stop) => `${stop.color} ${stop.pos}%`)
    .join(', ')})`;
}

export interface GlowGradientEditorProps {
  value?: string;
  stops?: { color: string; pos: number }[];
  angle?: number;
  animated?: boolean;
  borderRadius?: number | string;
  onChange?: (gradient: string, stops: { color: string; pos: number }[], angle: number) => void;
  style?: React.CSSProperties;
  /** Optionally provide presets in the form
   * { label: string, stops: {color,pos}[], angle: number }
   */
  presets?: Array<{ label: string; stops: { color: string; pos: number }[]; angle: number }>;
}

const chromeColorInput = {
  border: 'none',
  background: 'none',
  width: 32,
  height: 32,
  margin: 0,
  padding: 0,
  outline: 'none',
  boxShadow: '0 0 4px #f472b644',
  borderRadius: 15,
  cursor: 'pointer',
};

const GlowGradientEditor: React.FC<GlowGradientEditorProps> = ({
  value,
  stops: propStops,
  angle: propAngle = 112,
  animated = true,
  borderRadius = 18,
  onChange,
  style,
  presets = [],
}) => {
  const [angle, setAngle] = useState(propAngle);
  const [stops, setStops] = useState<{ color: string; pos: number }[]>(
    propStops || defaultStops()
  );

  const previewGradient = value || toGradient(stops, angle);

  const handleStopColor = (idx: number, color: string) => {
    const next = stops.map((s, i) => i === idx ? { ...s, color } : s);
    setStops(next);
    onChange?.(toGradient(next, angle), next, angle);
  };
  const handleStopPos = (idx: number, pos: number) => {
    const next = stops.map((s, i) => i === idx ? { ...s, pos } : s);
    setStops(next);
    onChange?.(toGradient(next, angle), next, angle);
  };
  const handleAddStop = () => {
    const maxIdx = stops.length - 1;
    let insertIdx = Math.floor(maxIdx / 2) + 1;
    const prev = stops[insertIdx - 1];
    const next = stops[insertIdx];
    let newPos = (prev.pos + next.pos) / 2;
    setStops([
      ...stops.slice(0, insertIdx),
      { color: '#ffffff', pos: newPos },
      ...stops.slice(insertIdx),
    ]);
  };
  const handleRemoveStop = (idx: number) => {
    if (stops.length <= 2) return;
    setStops(stops.filter((_, i) => i !== idx));
  };
  const handleAngle = (val: number) => {
    setAngle(val);
    onChange?.(toGradient(stops, val), stops, val);
  };

  const handlePreset = (presetIdx: number) => {
    const preset = presets[presetIdx];
    setStops(preset.stops);
    setAngle(preset.angle);
    onChange?.(toGradient(preset.stops, preset.angle), preset.stops, preset.angle);
  };

  return (
    <GlowCard
      glass
      animated={animated}
      borderRadius={borderRadius}
      gradient={previewGradient}
      style={{ padding: 32, minWidth: 370, maxWidth: 452, ...style }}
    >
      <Box sx={{mb:2, display:'flex',gap:1.5,flexWrap:'wrap'}}>
        {presets?.length > 0 && presets.map((preset, i) => (
          <button
            type="button"
            key={preset.label}
            onClick={()=>handlePreset(i)}
            style={{
              background: toGradient(preset.stops, preset.angle),
              color: '#fff',
              fontWeight:800,
              border:'none',
              borderRadius: 13,
              padding: '2px 20px',
              marginRight: 4,
              fontFamily: 'inherit',
              fontSize: '0.99em',
              cursor: 'pointer',
              letterSpacing: '.045em',
              marginBottom:2,
              boxShadow: '0 0 12px #05ffa155',
              textShadow: '0 1px 3px #181b39c9',
              outline: 'none',
              transition: 'box-shadow .15s',
            }}
          >{preset.label}</button>
        ))}
      </Box>
      <Box sx={{mb: 2}}>
        <GradientPreview
          gradient={previewGradient}
          borderRadius={borderRadius}
          animated={animated}
        />
      </Box>
      <Box sx={{display: 'flex', alignItems: 'center', mb: 2, gap: 2}}>
        <span style={{fontWeight:900,fontSize:16.5,letterSpacing:'.02em',color:'#fff',fontFamily:`'Inter','Plus Jakarta Sans',sans-serif`,}}>Angle:</span>
        <Slider
          min={0} max={360}
          value={angle}
          onChange={(_,v)=>handleAngle(Number(v))}
          size="small"
          sx={{width:110, mx:2}}
        />
        <TextField
          size="small"
          variant="standard"
          InputProps={{
            inputProps: {
              min: 0, max: 360, type: 'number',
              style: { width: 45, background:'rgba(0,0,0,.12)',color:'#38bdf8',borderRadius:6, textAlign:'right',fontWeight:700}
            }
          }}
          value={angle}
          onChange={e => handleAngle(Number(e.target.value))}
        />
        <span style={{ color:'#8b5cf6', fontWeight:800,marginLeft:8}}>deg</span>
      </Box>

      <Box sx={{mb:2}}>
        <span style={{fontWeight:900,fontSize:16.5,letterSpacing:'.02em',color:'#fff',marginRight:8,fontFamily:`'Inter','Plus Jakarta Sans',sans-serif`,}}>Stops</span>
        <IconButton
          size="small"
          style={{ background:'#181b39', color:'#05ffa1',marginLeft:5,marginRight:3 }}
          onClick={handleAddStop}
          aria-label="Add color stop"
        >
          <AddIcon />
        </IconButton>
      </Box>
      {stops.map((stop, idx) => (
        <Box key={idx} sx={{display:'flex',alignItems:'center', mb:2, background:'rgba(32,18,58,.12)',borderRadius:10,p:1.2,gap:1}}>
          <input
            type="color"
            value={stop.color}
            onChange={e => handleStopColor(idx, e.target.value)}
            style={{...chromeColorInput, boxShadow:`0 0 0 2.5px ${stop.color}88`}}
            aria-label={`Color stop ${idx+1}`}
          />
          <Slider
            min={0} max={100}
            value={stop.pos}
            style={{ width: 80, marginLeft: 15, marginRight: 10 }}
            onChange={(_,v)=>handleStopPos(idx, Number(v))}
            size="small"
          />
          <TextField
            size="small"
            variant="standard"
            value={stop.pos}
            onChange={e => handleStopPos(idx, Number(e.target.value))}
            InputProps={{
              inputProps: {
                min:0,max:100,type:'number',
                style: {width:36,background:'rgba(0,0,0,.13)',color:'#8b5cf6',borderRadius:4,fontWeight:700}
              }
            }}
            sx={{mx:1}}
          />
          <span style={{fontWeight:700,color:'#8b5cf6'}}> % </span>
          <IconButton
            size="small"
            color="secondary"
            style={{ marginLeft: 6, opacity: stops.length > 2 ? 1 : 0.33 }}
            disabled={stops.length <= 2}
            onClick={() => handleRemoveStop(idx)}
            aria-label="Remove color stop"
          >
            <RemoveIcon />
          </IconButton>
        </Box>
      ))}
      <Box sx={{mt:3}}>
        <TextField
          label="CSS Gradient"
          value={previewGradient}
          fullWidth
          size="small"
          variant="filled"
          InputProps={{
            readOnly:true,
            style: {
              fontFamily:'monospace',background:'rgba(56,189,248,0.10)',
              color:'#05ffa1',fontWeight:600,fontSize:15,borderRadius:8}
          }}
        />
      </Box>
    </GlowCard>
  );
};

export default GlowGradientEditor;
