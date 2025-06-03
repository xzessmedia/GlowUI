import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowChat from './GlowChat';

const baseBubbles = [
  {
    message: '👋 Hello! Welcome to GlowChat.',
    name: 'Sky', 
    avatarSrc: 'https://randomuser.me/api/portraits/men/11.jpg', 
    timestamp: '4:33 PM'
  },
  {
    mine: true,
    message: "Hi Sky! This looks awesome. 💎",
    name: 'You', 
    avatarSrc: 'https://randomuser.me/api/portraits/women/12.jpg', 
    timestamp: '4:34 PM'
  },
  {
    message: 'Thanks! Want to try sending a message?',
    name: 'Sky', 
    avatarSrc: 'https://randomuser.me/api/portraits/men/11.jpg',
    timestamp: '4:34 PM'
  }
];

const meta: Meta = {
  title: 'Components/GlowChat',
  component: GlowChat,
  parameters: {
    layout: 'centered',
  },
  args: {
    bubbles: baseBubbles,
    header: 'GlowChat Demo',
    inputPlaceholder: 'Type your message…',
  }
};

export default meta;

export const Default: StoryObj = {};

export const SendMessage: StoryObj = {
  render: (args) => {
    const [bubbles, setBubbles] = useState(baseBubbles);
    return (
      <GlowChat
        {...args}
        bubbles={bubbles}
        onSend={msg =>
          setBubbles([
            ...bubbles,
            {
              mine: true,
              message: msg,
              name: 'You',
              avatarSrc: 'https://randomuser.me/api/portraits/women/12.jpg',
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
          ])
        }
      />
    );
  }
};

export const NoHeader: StoryObj = {
  args: { header: null }
};

export const WithFooter: StoryObj = {
  args: { footer: <div style={{ color: '#a7f6f5', textAlign: 'center', marginTop: 10 }}>End of chat</div> }
};