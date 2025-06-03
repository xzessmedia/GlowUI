import React, { useRef, useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import GlowCard from './GlowCard';
import GlowIconButton from './GlowIconButton';

const Toolbar = styled('div')({
  display: 'flex',
  gap: 10,
  padding: '9px 14px 7px 14px',
  alignItems: 'center',
  background:
    'linear-gradient(90deg,#101031 42%,#38bdf822 120%)',
  borderRadius: '22px 22px 0 0',
  borderBottom: '2.5px solid #232547',
});

const GlowCanvasWrap = styled(GlowCard)({
  padding: 0,
  overflow: 'hidden',
  borderRadius: 26,
  background: 'linear-gradient(120deg, #1a193d 60%, #38bdf844 120%)',
  boxShadow: '0 0 46px 12px #05ffa144',
  position: 'relative',
  userSelect: 'none',
});

const COLORS = [
  '#8b5cf6', // Glow primary
  '#05ffa1', // Glow accent
  '#38bdf8', // Blue cyan
  '#f472b6', // Pink
  '#facc15', // Yellow
  '#fb7185', // Rose
];

export interface GlowCanvasProps {
  width?: number | string;
  height?: number | string;
  lineWidth?: number;
  color?: string;
  style?: React.CSSProperties;
}

const GlowCanvas: React.FC<GlowCanvasProps> = ({
  width = 420,
  height = 320,
  lineWidth = 6,
  color = COLORS[0],
  style,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [drawing, setDrawing] = useState(false);
  const [currentColor, setCurrentColor] = useState(color);
  const [currentWidth, setCurrentWidth] = useState(lineWidth);
  const [paths, setPaths] = useState<{color: string; width: number; points: {x:number,y:number}[]}[]>([]);

  // Undo
  const undo = () => setPaths(p => p.slice(0, -1));

  // Clear
  const clear = () => setPaths([]);

  // Export PNG
  const exportPNG = () => {
    const url = canvasRef.current?.toDataURL('image/png');
    if (url) {
      const link = document.createElement('a');
      link.href = url;
      link.download = 'glow-canvas.png';
      link.click();
    }
  };

  // Draw all paths
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    for (const path of paths) {
      ctx.save();
      ctx.strokeStyle = path.color;
      ctx.shadowColor = path.color;
      ctx.lineWidth = path.width;
      ctx.shadowBlur = 16 + Math.max(10, path.width * 2);

      ctx.beginPath();
      path.points.forEach((pt, i) => {
        if (i === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      });
      ctx.stroke();
      ctx.restore();
    }
  }, [paths, width, height]);

  // Drawing handlers
  const getPointer = (e: React.PointerEvent) => {
    const rect = (e.target as HTMLCanvasElement).getBoundingClientRect();
    return {
      x: Math.round((e.clientX - rect.left) * (canvasRef.current?.width! / rect.width)),
      y: Math.round((e.clientY - rect.top) * (canvasRef.current?.height! / rect.height)),
    };
  };

  const onPointerDown = (e: React.PointerEvent) => {
    setDrawing(true);
    const pt = getPointer(e);
    setPaths(prev => prev.concat({ color: currentColor, width: currentWidth, points: [pt] }));
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!drawing) return;
    const pt = getPointer(e);
    setPaths(prev => {
      const copy = prev.slice();
      copy[copy.length - 1] = {
        ...copy[copy.length - 1],
        points: [...copy[copy.length - 1].points, pt]
      };
      return copy;
    });
  };

  const onPointerUp = () => setDrawing(false);

  // Responsive/CSS sizing
  const actualW = typeof width === 'number' ? width : 420;
  const actualH = typeof height === 'number' ? height : 320;

  return (
    <GlowCanvasWrap style={{ width, minWidth: 230, ...style }}>
      <Toolbar>
        <GlowIconButton title="Undo" onClick={undo} shape="circle"><svg width="19" height="19" viewBox="0 0 19 19"><path d="M7.2 2.8 2.5 7.5l4.7 4.7" stroke="#fff" strokeWidth="2.1" strokeLinecap="round" fill="none"/><path d="M4.4 7.6h5.8a5 5 0 1 1 0 10H7" stroke="#05ffa1" strokeWidth="1.7" strokeLinecap="round" fill="none"/></svg></GlowIconButton>
        <GlowIconButton title="Clear" onClick={clear} shape="circle"><svg width="19" height="19" viewBox="0 0 19 19"><rect x="3.8" y="3.9" width="11.4" height="11.5" rx="2.6" fill="#8b5cf6" stroke="#fff" strokeWidth="2"/><path d="M6 13 13 6M13 13 6 6" stroke="#fff" strokeWidth="2.1" strokeLinecap="round"/></svg></GlowIconButton>
        <GlowIconButton title="Download as PNG" onClick={exportPNG} shape="circle"><svg width="19" height="19" viewBox="0 0 19 19"><path d="M9.5 2v12.5m0 0-4.5-4.5m4.5 4.5 4.5-4.5" stroke="#8b5cf6" strokeWidth="1.7" strokeLinecap="round" fill="none"/><rect x="3.3" y="15.2" width="12.3" height="1.3" rx="0.6" fill="#05ffa1"/></svg></GlowIconButton>
        <span style={{ marginLeft: 12 }}>Color: </span>
        {COLORS.map((clr, i) => (
          <button
            key={i}
            style={{
              background: clr,
              width: 22,
              height: 22,
              border: clr === currentColor ? '2.3px solid #fff' : '2.3px solid #222c',
              borderRadius: 7,
              outline: clr === currentColor ? '2px solid #05ffa1' : 'none',
              margin: '0 3px',
              boxShadow: `0 0 14px ${clr}66`,
              cursor: 'pointer',
              transition: 'border .12s',
              position: 'relative',
            }}
            aria-label={`Pick color ${clr}`}
            onClick={() => setCurrentColor(clr)}
          />
        ))}
        <span style={{ marginLeft: 14 }}>Width: </span>
        <input
          type="range"
          min={2}
          max={20}
          value={currentWidth}
          style={{ height: 2, verticalAlign: 'middle', marginLeft: 4 }}
          onChange={e => setCurrentWidth(+e.target.value)}
        />
        <span style={{ minWidth: 20, display: 'inline-block', marginLeft: 3 }}>{currentWidth}</span>
      </Toolbar>
      <Box sx={{ background: 'transparent', position: 'relative', width: '100%', minHeight: 180 }}>
        <canvas
          ref={canvasRef}
          width={actualW}
          height={actualH}
          style={
            {
              width: '100%',
              height: height,
              touchAction: 'none',
              cursor: drawing ? 'crosshair' : 'pointer',
              background: 'radial-gradient(ellipse at top left, #101031 60%, #8b5cf622 100%)',
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              display: 'block',
            } as React.CSSProperties
          }
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        />
      </Box>
    </GlowCanvasWrap>
  );
};

export default GlowCanvas;
