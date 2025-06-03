import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowChatBubble from './GlowChatBubble';

const meta: Meta = {
  title: 'Components/GlowChatBubble',
  component: GlowChatBubble,
  argTypes: {
    mine: { control: 'boolean' },
    animated: { control: 'boolean' },
    message: { control: 'text' },
    name: { control: 'text' },
    avatarSrc: { control: 'text' },
    timestamp: { control: 'text' },
  },
  args: {
    message: 'Hello! This is a glowing chat bubble.',
    name: 'Sky',
    mine: false,
    animated: true,
    timestamp: '4:36 PM',
    avatarSrc: 'https://randomuser.me/api/portraits/men/11.jpg'
  }
};

export default meta;

export const UserBubble: StoryObj = {};

export const MyBubble: StoryObj = {
  args: {
    mine: true,
    avatarSrc: 'https://randomuser.me/api/portraits/women/12.jpg',
    name: 'Me',
    message: 'Nice! This one is mine!'
  }
};

export const NoAvatar: StoryObj = {
  args: {
    avatarSrc: undefined,
    message: 'Bubble without avatar',
    name: 'Unknown'
  }
};

export const NotAnimated: StoryObj = {
  args: {
    animated: false
  }
};