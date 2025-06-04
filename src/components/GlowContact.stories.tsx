import React from 'react';
import GlowContact from './GlowContact';

export default {
  title: 'Components/GlowContact',
  component: GlowContact,
  args: {
    name: 'Alex Chen',
    email: 'alex.chen@growly.app',
    status: 'online',
    isVerified: true,
    avatar: '',
  },
  argTypes: {
    status: {
      control: 'radio',
      options: ['online', 'away', 'offline'],
    },
  }
};

export const Default = {
  args: {
    name: 'Alex Chen',
    email: 'alex.chen@growly.app',
    status: 'online',
    isVerified: true
  }
};

export const Away = {
  args: {
    name: 'Maria Rodriguez',
    email: 'maria.r@garden.com',
    status: 'away',
    isVerified: true,
  }
};

export const Offline = {
  args: {
    name: 'Tom Wilson',
    email: 'tom.wilson@plants.io',
    status: 'offline',
    lastSeen: new Date(Date.now() - 2 * 60 * 60 * 1000),
  }
};

export const NoAvatar = {
  args: {
    name: 'No Avatar User',
    email: 'no.avatar@example.com',
    status: 'offline',
  }
};
