import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowGradientEditor from './GlowGradientEditor';
import GlowCard from './GlowCard';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import MenuItem from '@mui/material/MenuItem';
import { GlowThemeProvider } from '../theme/GlowThemeProvider';

const vibrantPresets = [
  {
    label: 'Electric Blue',
    stops: [ { color: '#38bdf8', pos: 8 }, { color: '#818cf8', pos: 45 }, { color: '#05ffa1', pos: 100 } ],
    angle: 114
  },
  {
    label: 'Candy Pink',
    stops: [ { color: '#f472b6', pos: 10 }, { color: '#fc46a6', pos: 48 }, { color: '#8b5cf6', pos: 100 } ],
    angle: 119
  },
  {
    label: 'Aurora',
    stops: [ { color: '#38bdf8', pos: 4 }, { color: '#9333ea', pos: 41 }, { color: '#05ffa1', pos: 96 } ],
    angle: 111
  },
  {
    label: 'Royal',
    stops: [ { color: '#6366f1', pos: 5 }, { color: '#8b5cf6', pos: 44 }, { color: '#20123a', pos: 100 } ],
    angle: 121
  },
  {
    label: 'Shadow Gradient',
    stops: [ { color: '#20123a', pos: 0 }, { color: '#6366f180', pos: 55 }, { color: '#05ffa1', pos: 100 } ],
    angle: 106
  },
];

const fontPresets = [
  { value: `Inter, 'Plus Jakarta Sans', sans-serif`, label: 'Inter / Plus Jakarta' },
  { value: `'JetBrains Mono', monospace`, label: 'JetBrains Mono' },
  { value: `'Fira Mono', monospace`, label: 'Fira Mono' },
  { value: `Montserrat, 'Segoe UI', sans-serif`, label: 'Montserrat' },
  { value: `system-ui, sans-serif`, label: 'System UI' },
];

const meta: Meta = {
  title: 'Fancy Tools/GlowInteractiveThemeBuilder',
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'dark' },
  },
};
export default meta;

export const BuildGlowThemeInteractively: StoryObj = {
  render: () => {
    const [primaryStops, setPrimaryStops] = useState(vibrantPresets[0].stops);
    const [primaryAngle, setPrimaryAngle] = useState(vibrantPresets[0].angle);
    const [secondaryStops, setSecondaryStops] = useState(vibrantPresets[1].stops);
    const [secondaryAngle, setSecondaryAngle] = useState(vibrantPresets[1].angle);
    const [font, setFont] = useState(fontPresets[0].value);
    const [radius, setRadius] = useState(22);
    const [glow, setGlow] = useState(0.9);

    function stopsToMain(stops) {
      return stops[0]?.color || '#38bdf8';
    }
    const stopsToGradient = (stops, angle) => `linear-gradient(${angle}deg, ${stops.map(s=>`${s.color} ${s.pos}%`).join(', ')})`;
    
    const primaryColor = stopsToMain(primaryStops);
    const secondaryColor = stopsToMain(secondaryStops);
    const themeConfig = {
      primaryColor,
      secondaryColor,
      fontFamily: font,
      glowIntensity: glow,
      borderRadius: radius
    };

    return (
      <GlowThemeProvider config={themeConfig}>
        <Box sx={{ minHeight: '100vh', background: 'radial-gradient(ellipse at top, #181b39 10%, #20123a 140%)', p: 5 }}>
          <Typography sx={{
            fontFamily: font,
            fontWeight: 900,
            fontSize: 31,
            color: '#05ffa1',
            mb: 2,
            letterSpacing: '.07em',
            textShadow: '0 0 30px #38bdf8',
            textTransform: 'uppercase',
          }}>
            🎨 Interactive Glow Theme Builder
          </Typography>
          <Box sx={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'flex-start' }}>
            <Box>
              <Typography sx={{ mb:1.3, fontWeight:800, color:'#fff', fontFamily: font, letterSpacing: '.04em', fontSize:15.7 }}>
                PRIMARY Gradient & Button Presets
              </Typography>
              <GlowGradientEditor
                stops={primaryStops}
                angle={primaryAngle}
                presets={vibrantPresets}
                onChange={(_, stops, angle) => { setPrimaryStops(stops); setPrimaryAngle(angle); }}
                animated
                borderRadius={18}
              />
              <GlowCard
                glow
                glass
                animated
                gradient={stopsToGradient(primaryStops, primaryAngle)}
                borderRadius={radius}
                style={{ marginTop: 12, width: 260 }}
                contentStyle={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 48 }}
              >
                <Button style={{
                  background: stopsToGradient(primaryStops, primaryAngle),
                  color:'#fff', fontWeight: 800, fontSize:16, borderRadius:13, padding:'6px 28px', letterSpacing:'.03em', fontFamily: font
                }}>
                  Primary Glow
                </Button>
              </GlowCard>
            </Box>
            <Box>
              <Typography sx={{ mb:1.3, fontWeight:800, color:'#fff', fontFamily: font, letterSpacing: '.04em', fontSize:15.7 }}>
                SECONDARY Gradient Presets
              </Typography>
              <GlowGradientEditor
                stops={secondaryStops}
                angle={secondaryAngle}
                presets={vibrantPresets.slice(1)}
                onChange={(_, stops, angle) => { setSecondaryStops(stops); setSecondaryAngle(angle); }}
                animated
                borderRadius={18}
              />
              <GlowCard
                glow
                glass
                animated
                gradient={stopsToGradient(secondaryStops, secondaryAngle)}
                borderRadius={radius}
                style={{ marginTop: 12, width: 260 }}
                contentStyle={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 48 }}
              >
                <Button style={{
                  background: stopsToGradient(secondaryStops, secondaryAngle),
                  color:'#fff', fontWeight: 800, fontSize:16, borderRadius:13, padding:'6px 28px', letterSpacing:'.03em', fontFamily: font
                }}>
                  Secondary Glow
                </Button>
              </GlowCard>
            </Box>
            <Box sx={{ minWidth: 240, bgcolor:'rgba(56,189,248,0.09)', borderRadius: 9, p:2.7, mt: 2.7 }}>
              <Typography sx={{ fontWeight:900, color:'#fff', fontSize:17, mb: 2, letterSpacing:'.025em', fontFamily: font }}>
                Theme Settings
              </Typography>
              <TextField
                select label="Font Family"
                size="small" fullWidth
                value={font}
                onChange={e=>setFont(e.target.value)}
                sx={{mb:2,bgcolor:'#181b39cc',color:'#8b5cf6'}}
              >
                {fontPresets.map(f => (
                  <MenuItem key={f.label} value={f.value}>{f.label}</MenuItem>
                ))}
              </TextField>
              <Typography sx={{fontWeight:700,color:'#05ffa1',mt:2,mb:0.8,fontSize:15,fontFamily: font}}>Glow Intensity</Typography>
              <Slider
                min={0.2} max={2} step={0.01}
                value={glow}
                onChange={(_,v)=>setGlow(Number(v))}
                sx={{'& .MuiSlider-thumb':{color:'#05ffa1'},my:1,mb:2}}
              />
              <Typography sx={{fontWeight:700,color:'#f472b6', fontSize:15,fontFamily: font}}>Card/Button radius</Typography>
              <Slider
                min={0} max={34}
                value={radius}
                onChange={(_,v)=>setRadius(Number(v))}
                sx={{'& .MuiSlider-thumb':{color:'#f472b6'},my:1,mb:2}}
              />
              <Box sx={{ color: '#fff', mt: 2, opacity: .87, fontWeight:400,fontSize:13,fontFamily: font }}>
                <b>Tip:</b> You can copy gradient CSS from the gradient editor!
              </Box>
            </Box>
          </Box>
        </Box>
      </GlowThemeProvider>
    );
  }
}
