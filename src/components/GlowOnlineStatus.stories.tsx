import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowOnlineStatus from './GlowOnlineStatus';

const meta: Meta = {
  title: 'Ultra Fancy/GlowOnlineStatus',
  component: GlowOnlineStatus,
  args: {
    online: true,
    size: 34,
    label: 'Online',
  },
  argTypes: {
    online: { control: 'boolean' },
    size: { control: 'number', min: 14, max: 100 },
    label: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj;

export const Playground: Story = {
  args: {},
};

export const Offline: Story = {
  args: { online: false, label: 'Offline' },
};