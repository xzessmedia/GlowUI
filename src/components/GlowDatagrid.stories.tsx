import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowDatagrid, { GlowDatagridColumn } from './GlowDatagrid';
import GlowBadge from './GlowBadge';

const rows = [
  { id: 1, name: 'Sky Doe', status: 'Active', score: 93 },
  { id: 2, name: 'Jane Sun', status: 'Idle', score: 78 },
  { id: 3, name: 'Finn Wolf', status: 'Offline', score: 47 },
];

const columns: GlowDatagridColumn[] = [
  {
    key: 'name',
    header: 'Name',
    sortable: true,
    colGlow: '#8b5cf6'
  },
  {
    key: 'status',
    header: 'Status',
    colGlow: '#05ffa1',
    render: (row) =>
      <GlowBadge
        children={row.status}
        glowColor={row.status === 'Active' ? '#05ffa1' : row.status === 'Idle' ? '#facc15' : '#6366f1'}
        background={row.status === 'Active' ? '#0fa' : row.status === 'Idle' ? '#facc15' : '#6366f1'}
        size={22}
      />
  },
  {
    key: 'score',
    header: 'Score',
    align: 'right',
    sortable: true,
    colGlow: '#38bdf8'
  }
];

const meta: Meta = {
  title: 'Components/GlowDatagrid',
  component: GlowDatagrid,
  args: {
    columns,
    data: rows,
    keyField: 'id'
  }
};

export default meta;

export const Default: StoryObj = {};

export const Empty: StoryObj = {
  args: { data: [] }
};

export const CustomGradient: StoryObj = {
  args: {
    gradient: 'linear-gradient(112deg,#38bdf8 40%,#f472b6 130%)'
  }
};

export const NotAnimated: StoryObj = {
  args: { animated: false }
};