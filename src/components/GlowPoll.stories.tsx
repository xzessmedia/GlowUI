import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowPoll from './GlowPoll';

const demoOptions = [
  { label: 'Neon Pink', color: '#ff00cc', votes: 11 },
  { label: 'Aqua Blue', color: '#05ffa1', votes: 29 },
  { label: 'Sunrise Gold', color: '#facc15', votes: 17 },
  { label: 'Purple Haze', color: '#8b5cf6', votes: 8 }
];

const meta: Meta = {
  title: 'Ultra Fancy/GlowPoll',
  component: GlowPoll,
  args: {
    question: 'Pick your ultra glow theme:',
    options: demoOptions,
    userVote: null,
    loading: false,
    showResults: true,
    glow: true
  },
  argTypes: {
    question: { control: 'text' },
    options: { control: false },
    userVote: { control: 'number' },
    loading: { control: 'boolean' },
    showResults: { control: 'boolean' },
    glow: { control: 'boolean' },
    onVote: { action: 'onVote' }
  }
};

export default meta;
type Story = StoryObj;

export const ElectricNeon: Story = { args: {} };

export const LoadingResults: Story = {
  args: {
    loading: true,
    showResults: true,
    glow: true,
    question: 'Loading energetic poll...'
  }
};

export const HiddenResults: Story = {
  args: {
    showResults: false,
    userVote: null,
    glow: true,
    question: 'Which color would you vote for next release?'
  }
};
