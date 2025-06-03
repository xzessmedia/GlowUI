import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowCalendar from './GlowCalendar';

const meta: Meta = {
  title: 'Ultra Fancy/GlowCalendar',
  component: GlowCalendar,
  args: {
    month: 4,
    year: 2024,
    highlightToday: true,
    glow: true,
  },
  argTypes: {
    month: { control: 'number', min: 1, max: 12 },
    year: { control: 'number' },
    highlightToday: { control: 'boolean' },
    glow: { control: 'boolean' },
    onSelectDay: { action: 'onSelectDay' }
  },
};

export default meta;
type Story = StoryObj;

export const Playground: Story = {
  args: {},
};
