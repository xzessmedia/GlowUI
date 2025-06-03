import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowChip from './GlowChip';
import CheckIcon from '@mui/icons-material/Check';
import StarIcon from '@mui/icons-material/Star';

const meta: Meta = {
  title: 'Components/GlowChip',
  component: GlowChip,
  argTypes: {
    label: { control: 'text' },
    clickable: { control: 'boolean' },
    disabled: { control: 'boolean' },
    animated: { control: 'boolean' },
    borderRadius: { control: { type: 'number', min: 0, max: 30 } },
    onDelete: { action: 'delete' }
  },
  args: {
    label: 'Glowing Chip',
    clickable: false,
    animated: true
  }
};

export default meta;

export const Default: StoryObj = {};

export const Clickable: StoryObj = {
  args: { clickable: true, onClick: () => alert('Clicked!') }
};

export const WithIcons: StoryObj = {
  args: {
    label: 'With Icons',
    startIcon: <StarIcon fontSize="small" />,
    endIcon: <CheckIcon fontSize="small" />
  }
};

export const Deletable: StoryObj = {
  args: {
    label: 'Deletable Chip',
    onDelete: () => alert('Delete action')
  }
};

export const Disabled: StoryObj = {
  args: {
    label: 'Disabled',
    disabled: true
  }
};

export const CustomStyle: StoryObj = {
  args: {
    label: 'Custom Colors',
    background: 'linear-gradient(90deg,#9333ea,#38bdf8 85%)',
    glowColor: '#38bdf8',
    borderColor: '#9333ea',
    textColor: '#20123a',
    borderRadius: 12
  }
};