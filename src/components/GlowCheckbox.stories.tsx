import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowCheckbox from './GlowCheckbox';

const meta: Meta = {
  title: 'Components/GlowCheckbox',
  component: GlowCheckbox,
  argTypes: {
    colorVariant: { control: 'radio', options: ['primary', 'secondary', 'accent'] },
    glow: { control: 'boolean' },
    animated: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    colorVariant: 'primary',
    glow: true,
    animated: true,
    disabled: false,
  },
};

export default meta;

export const Default: StoryObj = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return (
      <GlowCheckbox {...args} checked={checked} onChange={() => setChecked(!checked)} />
    );
  }
};

export const Variants: StoryObj = {
  render: (args) => (
    <>
      <GlowCheckbox {...args} colorVariant="primary" defaultChecked /> Primary <br />
      <GlowCheckbox {...args} colorVariant="secondary" /> Secondary <br />
      <GlowCheckbox {...args} colorVariant="accent" /> Accent
    </>
  ),
};

export const NotAnimated: StoryObj = {
  args: { animated: false },
  render: (args) => <GlowCheckbox {...args} />,
};

export const Disabled: StoryObj = {
  args: { disabled: true },
  render: (args) => <GlowCheckbox {...args} />,
};