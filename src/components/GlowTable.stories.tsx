import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowTable from './GlowTable';

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'name', headerName: 'Name' },
  { field: 'role', headerName: 'Role' }
];
const rows = [
  { id: 1, name: 'Alice', role: 'Leader' },
  { id: 2, name: 'Bob', role: 'Developer' },
  { id: 3, name: 'Charlie', role: 'Designer' }
];

const meta: Meta = {
  title: 'Ultra Fancy/GlowTable',
  component: GlowTable,
  args: {
    columns,
    rows,
    glow: true,
    striped: true
  },
  argTypes: {
    columns: { control: false },
    rows: { control: false },
    glow: { control: 'boolean' },
    striped: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj;

export const Playground: Story = { args: {} };
