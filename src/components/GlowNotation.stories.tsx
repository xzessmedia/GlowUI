import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowNotation, { GlowNotationProps } from './GlowNotation';
import GlowMusicNote from './GlowMusicNote';

const meta: Meta<GlowNotationProps> = {
  title: 'Ultra Fancy/GlowNotation',
  component: GlowNotation,
  argTypes: {
    mode: {
      control: 'select',
      options: ['piano-sheet', 'guitar-tab', 'guitar-chords', 'rhythmic'],
    },
    data: { control: false },
    palette: { control: false },
    glowIntensity: { control: 'number', min: 0.5, max: 3, step: 0.05 },
    animated: { control: 'boolean' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    style: { control: false },
    clef: { control: 'select', options: ['treble', 'bass', 'alto', undefined] },
    staffNotes: { control: false },
    speedBpm: { control: 'number', min: 30, max: 200, step: 1 },
  },
  args: {
    mode: 'piano-sheet',
    data: [
      { note: 'C4', duration: 'q' },
      { note: 'E4', duration: 'q' },
      { note: 'G4', duration: 'q' },
      { note: 'C5', duration: 'h' }
    ],
    title: 'Piano melody',
    subtitle: 'Simple piano partition',
    glowIntensity: 1.13,
    animated: true,
    palette: undefined,
  },
};

export default meta;
type Story = StoryObj<GlowNotationProps>;

export const PianoSheet: Story = {
  args: {
    mode: 'piano-sheet',
    title: 'Piano Melody (Staff)',
    subtitle: 'G4 → A4 → B4 → C5',
    data: [
      { note: 'G4', duration: 'q' },
      { note: 'A4', duration: '8' },
      { note: 'B4', duration: 'q' },
      { note: 'C5', duration: 'h' },
    ],
    palette: ['#8b5cf6', '#38bdf8', '#facc15'],
    animated: true,
    glowIntensity: 1.1,
  }
};

export const GuitarTab: Story = {
  args: {
    mode: 'guitar-tab',
    title: 'Guitar Tab Demo',
    subtitle: 'E minor chord frets',
    data: [
      { string: 0, fret: 0 },
      { string: 1, fret: 0 },
      { string: 2, fret: 0 },
      { string: 3, fret: 2 },
      { string: 4, fret: 2 },
      { string: 5, fret: 0 },
    ],
    palette: ['#f472b6', '#38bdf8', '#8b5cf6'],
    animated: true,
    glowIntensity: 1.15,
  }
};

export const GuitarChords: Story = {
  args: {
    mode: 'guitar-chords',
    title: 'Guitar Chord (E maj)',
    subtitle: 'Open E major shape',
    data: { name: 'E', frets: [0, 2, 2, 1, 0, 0] },
    palette: ['#f472b6', '#38bdf8', '#facc15'],
    animated: true,
    glowIntensity: 1.18,
  }
};

export const Rhythm: Story = {
  args: {
    mode: 'rhythmic',
    title: 'Rhythm Pattern',
    subtitle: 'x = strong, . = ghost, - = rest, o = clap',
    data: 'x . - o x - . o x',
    palette: ["#05ffa1", "#facc15", "#8b5cf6"],
    animated: true,
    glowIntensity: 1.09,
  }
};

export const OnlyPiano: Story = {
  args: {
    mode: 'piano-sheet',
    data: [
      { note: 'C4', duration: 'q' },
      { note: 'E4', duration: 'q' },
      { note: 'G4', duration: 'q' },
      { note: 'C5', duration: 'h' }
    ]
  }
};

export const Playground: Story = { args: {} };

export const AllClefsAndSymbols: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection:'row', gap: 36, alignItems: 'center', padding: 24 }}>
      <GlowMusicNote clefType="treble" color="#38bdf8" size={65} />
      <GlowMusicNote clefType="bass" color="#8b5cf6" size={62} />
      <GlowMusicNote clefType="alto" color="#facc15" size={62} />
      <GlowMusicNote noteType='quarter' color='#8b5cf6' />
      <GlowMusicNote noteType='half' color='#38bdf8' />
      <GlowMusicNote noteType='eighth' color='#f472b6' />
      <GlowMusicNote noteType='sixteenth' color='#a21caf' animated />
      <GlowMusicNote noteType='quarter' color='#eab308' accidental='sharp' />
      <GlowMusicNote noteType='quarter' color='#eab308' accidental='flat' />
      <GlowMusicNote noteType='quarter' color='#eab308' accidental='natural' />
    </div>
  ),
  args: {},
};

export const PianoPartitionClassic: Story = {
  name: 'Classic Staff Partition',
  args: {
    mode: 'piano-sheet',
    clef: 'treble',
    staffNotes: [
      { note: 'G4', duration: 'quarter' },
      { note: 'A4', duration: 'quarter', accidental:'sharp' },
      { note: 'B4', duration: 'eighth' },
      { note: 'C5', duration: 'quarter', accidental:'flat' },
      { note: 'E5', duration: 'half', accidental:'natural', stemDown: true }
    ],
    speedBpm: 120,
    palette: ['#8b5cf6', '#38bdf8', '#facc15'],
    animated: true,
    glowIntensity: 1.15,
    title: 'Piano Classic Partition',
    subtitle: 'Clef, notes, accidentals, and tempo',
  }
};
