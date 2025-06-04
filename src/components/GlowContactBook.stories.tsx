import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowContactBook from './GlowContactBook';

const contacts = [
  {
    name: "Sky Doe",
    status: "online",
    avatarSrc: "https://randomuser.me/api/portraits/men/34.jpg",
    statusText: "Available for collab",
  },
  {
    name: "Jane Sun",
    status: "idle",
    accentColor: "secondary",
    avatarSrc: "https://randomuser.me/api/portraits/women/43.jpg",
    statusText: "Designing...",
  },
  {
    name: "Finn Wolf",
    status: "offline",
    accentColor: "primary",
    avatarSrc: "https://randomuser.me/api/portraits/men/78.jpg",
    statusText: "Offline",
  },
];

const groups = [
  {
    label: "Designers",
    contacts: [contacts[1]],
  },
  {
    label: "Developers",
    contacts: [contacts[0], contacts[2]],
  },
];

const meta: Meta = {
  title: 'Components/GlowContactBook',
  component: GlowContactBook,
  args: {
    open: true,
    onClose: () => {},
  },
};

export default meta;

export const Default: StoryObj = {
  args: {
    contacts,
    showSearch: true,
    header: 'Contacts',
  },
};

export const Grouped: StoryObj = {
  args: {
    groups,
    showSearch: true,
    header: 'Contacts',
  },
};

export const NoSearch: StoryObj = {
  args: {
    contacts,
    showSearch: false,
    header: 'Contacts',
  },
};

export const AddContact: StoryObj = {
  render: (args) => {
    const [list, setList] = useState([...contacts]);
    return (
      <GlowContactBook
        {...args}
        contacts={list}
        showSearch={true}
        header="Contacts"
        addContactHandler={() => setList([...list, {
          name: "New User",
          status: "online",
          statusText: "Just added!",
          accentColor: "accent"
        }])}
      />
    );
  }
};

export const Empty: StoryObj = {
  args: {
    contacts: [],
    showSearch: true,
    header: 'Contacts',
  },
};
