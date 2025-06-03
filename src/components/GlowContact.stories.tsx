import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowContact from './GlowContact';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GlowIconButton from './GlowIconButton';

const meta: Meta = {
  title: 'Components/GlowContact',
  component: GlowContact,
  argTypes: {
    name: { control: 'text' },
    status: {
      control: 'radio',
      options: ['online', 'idle', 'dnd', 'offline'],
    },
    accentColor: { control: 'radio', options: ['primary', 'secondary', 'accent'] },
  },
  args: {
    name: 'Sky Doe',
    status: 'online',
    accentColor: 'accent',
    avatarSrc: 'https://randomuser.me/api/portraits/men/34.jpg',
    statusText: 'Available for collab',
    actions: (
      <GlowIconButton colorVariant="primary" aria-label="options">
        <MoreVertIcon />
      </GlowIconButton>
    ),
  },
};

export default meta;

export const Default: StoryObj = {};

export const Offline: StoryObj = {
  args: { status: 'offline', statusText: 'Last seen 2 hours ago' }
};

export const NoAvatar: StoryObj = {
  args: { avatarSrc: undefined, statusText: 'No photo' }
};

export const NoActions: StoryObj = {
  args: { actions: null }
};

export const Primary: StoryObj = {
  args: { accentColor: 'primary' }
};

export const Secondary: StoryObj = {
  args: { accentColor: 'secondary' }
};