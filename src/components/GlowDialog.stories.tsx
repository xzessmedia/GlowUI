import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowDialog from './GlowDialog';
import GlowingButton from './GlowingButton';

const meta: Meta = {
  title: 'Components/GlowDialog',
  component: GlowDialog,
  argTypes: {
    colorVariant: { control: 'radio', options: ['primary', 'secondary', 'accent'] },
    open: { control: 'boolean' },
    fancyGlass: { control: 'boolean' }
  },
  args: {
    colorVariant: 'primary',
    open: true,
    title: 'Glowing Dialog',
    fancyGlass: true
  }
};

export default meta;

export const Default: StoryObj = {
  args: {
    children: 'This is a glowing dialog with animated borders and glass background.',
    actions: <>
      <GlowingButton colorVariant="secondary">Cancel</GlowingButton>
      <GlowingButton colorVariant="primary">Confirm</GlowingButton>
    </>
  }
};

export const Controlled: StoryObj = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <GlowingButton colorVariant="primary" onClick={() => setOpen(true)}>Open Dialog</GlowingButton>
        <GlowDialog {...args} open={open} onClose={() => setOpen(false)} />
      </>
    );
  }
};

export const Secondary: StoryObj = {
  args: { colorVariant: 'secondary', title: 'Secondary Dialog' }
};

export const NotFancy: StoryObj = {
  args: { fancyGlass: false, title: 'No Glassmorph' }
};