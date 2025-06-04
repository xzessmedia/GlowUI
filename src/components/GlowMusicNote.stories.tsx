import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowMusicNote from './GlowMusicNote';

const meta: Meta<typeof GlowMusicNote> = {
  title: 'Ultra Fancy/GlowMusicNote',
  component: GlowMusicNote,
  argTypes: {
    noteType: { control: 'select', options: ['quarter', 'half', 'whole', 'eighth', 'sixteenth', undefined] },
    clefType: { control: 'select', options: ['treble', 'bass', 'alto', undefined] },
    accidental: { control: 'select', options: ['sharp', 'flat', 'natural', undefined] },
    color: { control: 'color' },
    animated: { control: 'boolean' },
    size: { control: 'number', min: 16, max: 100, step: 1 },
    showStemDown: { control: 'boolean' },
    speedBpm: { control: 'number', min: 10, max: 350 },
    speedUnit: { control: 'select', options: ['bpm', 'ms'] },
  },
  args: {
    color: '#8b5cf6',
    animated: false,
    size: 46,
    showStemDown: false,
  }
};

export default meta;
type Story = StoryObj<typeof GlowMusicNote>;

export const AllClefs: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 32, fontSize: 24, alignItems: 'center' }}>
      <GlowMusicNote clefType='treble' color='#38bdf8' size={70} />
      <GlowMusicNote clefType='bass' color='#8b5cf6' size={70} />
      <GlowMusicNote clefType='alto' color='#facc15' size={70} />
    </div>
  )
};

export const AllNotes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 32, fontSize: 20, alignItems: 'center' }}>
      <GlowMusicNote noteType='whole' color='#eee' />
      <GlowMusicNote noteType='half' color='#38bdf8' />
      <GlowMusicNote noteType='quarter' color='#8b5cf6' />
      <GlowMusicNote noteType='eighth' color='#f472b6' />
      <GlowMusicNote noteType='sixteenth' color='#a21caf' />
    </div>
  )
};

export const StemDirections: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 32, fontSize: 18, alignItems: 'center' }}>
      <GlowMusicNote noteType='quarter' color='#8b5cf6' showStemDown={false} />
      <GlowMusicNote noteType='quarter' color='#8b5cf6' showStemDown={true} />
      <span style={{fontSize:16,opacity:0.75}}>Up / Down stem</span>
    </div>
  )
};

export const AllAccidentals: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 32, fontSize: 18, alignItems: 'center' }}>
      <GlowMusicNote noteType='quarter' color='#8b5cf6' accidental='sharp' />
      <GlowMusicNote noteType='quarter' color='#38bdf8' accidental='flat' />
      <GlowMusicNote noteType='quarter' color='#facc15' accidental='natural' />
    </div>
  )
};

export const MetronomeMark: Story = {
  args: {
    noteType: 'quarter',
    speedBpm: 120,
    speedUnit: 'bpm',
    color: '#38bdf8'
  }
};

export const Playground: Story = {
  args: {
    noteType: 'eighth',
    accidental: 'flat',
    color: '#f472b6',
    animated: true,
    size: 60,
    speedBpm: 180,
    speedUnit: 'bpm',
  }
};
