import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowTimeline, { GlowTimelineProps, GlowTimelineTrack } from './GlowTimeline';
import GlowTypography from './GlowTypography';

const duration = 100;
const colors = ['#05ffa1', '#38bdf8', '#fbbf24', '#ef4444', '#8b5cf6', '#a21caf'];

const ultraFancyContent = [
  <GlowTypography fontWeight={900} fontSize={18} gradient="linear-gradient(90deg,#05ffa1 20%,#38bdf8 74%,#8b5cf6 100%)" shadowColors={["0 1px 8px #222", "0 1px 14px #fff"]} style={{ color: '#fff', textShadow: '0 2px 5px #000b' }}>🎬 Scene 1</GlowTypography>,
  <GlowTypography fontWeight={800} fontSize={15} gradient="linear-gradient(90deg,#fbbf24,#38d1c4)" shadowColors={["0 1px 12px #111", "0 1px 14px #fff"]} style={{ color: '#222', textShadow: '0 2px 6px #000b' }}>🖼️ Overlay</GlowTypography>,
  <GlowTypography fontWeight={800} fontSize={15} gradient="linear-gradient(90deg,#fbbf24,#fff176)" glowColor="#facc15" glowIntensity={1.15} style={{ color: '#222', textShadow: '0 2px 6px #333b' }}>✨ FX Swoosh</GlowTypography>,
  <GlowTypography fontWeight={800} fontSize={15} gradient="linear-gradient(90deg,#ef4444,#fbbf24)" glowColor="#ef4444" glowIntensity={1.08} style={{ color: '#fff', textShadow: '0 2px 8px #111' }}>🔥 Transition</GlowTypography>,
];

const tracks: GlowTimelineTrack[] = [
  {
    id: 'video',
    label: <GlowTypography fontWeight={700} fontSize={15}>Video</GlowTypography>,
    elements: [
      { id: 'v1', start: 0, end: 40, content: ultraFancyContent[0], color: colors[0], glow: true },
      { id: 'v2', start: 40, end: 100, content: <GlowTypography fontWeight={800} fontSize={15}>🎬 Scene 2</GlowTypography>, color: colors[1], glow: true },
    ],
  },
  {
    id: 'overlay',
    label: <GlowTypography fontWeight={700} fontSize={15} gradient="linear-gradient(90deg,#fbbf24,#38d1c4)">Overlay</GlowTypography>,
    elements: [
      { id: 'o1', start: 22, end: 44, content: ultraFancyContent[1], color: colors[2] },
    ],
  },
  {
    id: 'fx',
    label: <GlowTypography fontWeight={700} fontSize={15} gradient="linear-gradient(90deg,#38bdf8,#8b5cf6)">FX</GlowTypography>,
    elements: [
      { id: 'fx1', start: 30, end: 38, content: ultraFancyContent[2], color: colors[2], glow: true },
      { id: 'fx2', start: 55, end: 67, content: ultraFancyContent[3], color: colors[3] },
    ],
  },
];

const grids = {
  seconds: { type: 'time', step: 10, labelInterval: 20, unit: 1, unitLabel: 's' },
  frames: {
    type: 'frames', step: 25, labelInterval: 50, unit: 1, unitLabel: 'f',
    timecodeFormatter: (mark: number) => `Frame ${mark}`,
  },
  timecode: {
    type: 'custom', step: 25, labelInterval: 50, unit: 1, unitLabel: '',
    timecodeFormatter: (mark: number) => {
      const fps = 25;
      const totalSecs = Math.floor(mark / fps);
      const frames = mark % fps;
      const mm = String(Math.floor(totalSecs / 60)).padStart(2, '0');
      const ss = String(totalSecs % 60).padStart(2, '0');
      const ff = String(frames).padStart(2, '0');
      return `${mm}:${ss}:${ff}`;
    },
  },
  beats: {
    type: 'custom', step: 4, labelInterval: 8, unit: 1, unitLabel: '',
    timecodeFormatter: (mark: number) => `Beat ${mark+1}`,
  },
};

const meta: Meta = {
  title: 'Ultra Fancy/GlowTimeline',
  component: GlowTimeline,
  args: {
    duration,
    tracks,
    orientation: 'horizontal',
    glow: true,
    grid: grids.seconds,
    lineColor: '#8b5cf6',
    header: 'Video Editor Timeline',
  },
  argTypes: {
    duration: { control: 'number', min:1, max:300 },
    orientation: { control: 'radio', options: ['vertical','horizontal'] },
    glow: { control: 'boolean' },
    lineColor: { control: 'color' },
    header: { control: 'text' },
    grid: { control: false },
    tracks: { control: false },
  }
};

export default meta;
type Story = StoryObj<GlowTimelineProps>;

export const Playground: Story = { args: {} };

export const Frames: Story = {
  args: {
    grid: grids.frames,
    duration: 150,
    header: 'Frames Timeline',
  }
};

export const Timecode: Story = {
  args: {
    grid: grids.timecode,
    duration: 200,
    header: 'Timecode Timeline (25fps)',
  },
};

export const Beats: Story = {
  args: {
    grid: grids.beats,
    duration: 32,
    header: 'Beats Timeline',
  },
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    header: 'Vertical Timeline',
    grid: grids.seconds,
  }
};
