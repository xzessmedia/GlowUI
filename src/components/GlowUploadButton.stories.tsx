import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowUploadButton from './GlowUploadButton';

const meta: Meta = {
  title: 'Ultra Fancy/GlowUploadButton',
  component: GlowUploadButton,
  args: {
    label: 'Upload File',
    glow: true,
    loading: false,
    disabled: false,
  },
  argTypes: {
    label: { control: 'text' },
    glow: { control: 'boolean' },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onChange: { action: 'onChange' },
  },
};

export default meta;
type Story = StoryObj;

export const Playground: Story = { args: {} };

export const Loading: Story = {
  args: { loading: true, label: 'Uploading...' }
};
