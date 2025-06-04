import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowGantt, { GlowGanttTask } from './GlowGantt';

// Provide a base date for demo
const now = new Date();
function daysFromNow(n: number) {
  return new Date(now.getTime() + n * 24 * 60 * 60 * 1000);
}
const exampleTasks: GlowGanttTask[] = [
  {
    id: 'design',
    title: 'Design',
    subtitle: 'Wireframes, UI, and concepts',
    startDate: daysFromNow(0),
    endDate: daysFromNow(7),
    status: 'completed',
    assignee: { name: 'Alice', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
    featured: true,
  },
  {
    id: 'dev',
    title: 'Development',
    subtitle: 'App implementation',
    startDate: daysFromNow(5),
    endDate: daysFromNow(21),
    status: 'in-progress',
    assignee: { name: 'Bob', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
  },
  {
    id: 'test',
    title: 'Testing',
    subtitle: 'Quality Assurance',
    startDate: daysFromNow(20),
    endDate: daysFromNow(30),
    status: 'pending',
    assignee: { name: 'Carol' },
  },
  {
    id: 'ship',
    title: 'Release',
    subtitle: 'Launch day 🚀',
    startDate: daysFromNow(30),
    endDate: daysFromNow(32),
    status: 'pending',
    assignee: { name: 'Dana', avatar: 'https://randomuser.me/api/portraits/women/37.jpg' },
    featured: true,
  }
];

const meta: Meta = {
  title: 'Ultra Fancy/GlowGantt',
  component: GlowGantt,
  args: {
    tasks: exampleTasks,
    glow: true,
    timelineUnit: 'weeks'
  },
  argTypes: {
    tasks: { control: false },
    glow: { control: 'boolean' },
    timelineUnit: { control: 'radio', options: ['days', 'weeks', 'months'] }
  },
};

export default meta;
type Story = StoryObj;

export const Playground: Story = { args: {} };
