import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowTable from './GlowTable';
import GlowTypography from './GlowTypography';

const columns = ['ID', 'Name', 'Role'];
const data = [
  { ID: 1, Name: 'Alex Chen', Role: 'Founder' },
  { ID: 2, Name: 'Maria Rodriguez', Role: 'Backend Dev' },
  { ID: 3, Name: 'Charlie', Role: 'Design Lead' },
  { ID: 4, Name: 'Sam S.', Role: 'Frontend' },
];

const headerLabels = {
  ID: <GlowTypography clipText glow={false} fontWeight={800} gradient="linear-gradient(90deg,#c3dafe,#38bdf8)">#</GlowTypography>,
  Name: <GlowTypography clipText glow={false} fontWeight={800} gradient="linear-gradient(90deg,#b4c4f9,#6366f1)">👤 Name</GlowTypography>,
  Role: <GlowTypography clipText glow={false} fontWeight={800} gradient="linear-gradient(90deg,#ffd699,#fbbf24)">💼 Role</GlowTypography>,
};

const columnStyles = {
  ID: { minWidth: 66, maxWidth: 90, fontSize: 17 },
  Name: { minWidth: 160, fontSize: 17 },
  Role: { minWidth: 120, fontSize: 17 },
};

const align: { [col: string]: 'left' | 'center' | 'right' } = {
  ID: 'left',
  Name: 'left',
  Role: 'left'
};

const meta: Meta<typeof GlowTable> = {
  title: 'Ultra Fancy/GlowTable',
  component: GlowTable,
  args: {
    columns,
    data,
    striped: false,
    glass: true,
    hoverHighlight: true,
    gradient: 'linear-gradient(97deg,#232137 55%,#8b5cf680 140%)',
    sortable: true,
    exportFab: true,
  },
  argTypes: {
    columns: { control: { type: 'check', options: columns } },
    striped: { control: 'boolean' },
    glass: { control: 'boolean' },
    hoverHighlight: { control: 'boolean' },
    gradient: { control: 'text' },
    sortable: { control: 'boolean' },
    exportFab: { control: 'boolean' },
    columnStyles: { control: false },
    align: { control: false },
    headerLabels: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof GlowTable>;

export const Playground: Story = {
  render: (args) => {
    const filteredData = args.data.map((row: any) =>
      Object.fromEntries(Object.entries(row).filter(([k]) => args.columns.includes(k)))
    );
    return (
      <GlowTable
        {...args}
        columns={args.columns}
        data={filteredData}
        headerLabels={headerLabels}
        columnStyles={columnStyles}
        align={align}
      />
    );
  },
};

export const GentleStripes: Story = {
  args: {
    striped: true,
    gradient: 'linear-gradient(90deg,#232137,#7c83fa 70%,#e0eaff 140%)',
  },
  render: (args) => (
    <GlowTable
      {...args}
      columns={args.columns}
      data={args.data}
      headerLabels={headerLabels}
      columnStyles={columnStyles}
      align={align}
    />
  ),
};

export const MinimalGlass: Story = {
  args: {
    striped: false,
    glass: true,
    gradient: 'linear-gradient(95deg,#212b40 65%,#89a3ff50 140%)',
    hoverHighlight: false,
    exportFab: false,
  },
  render: (args) => (
    <GlowTable
      {...args}
      columns={args.columns}
      data={args.data}
      headerLabels={headerLabels}
      columnStyles={columnStyles}
      align={align}
    />
  ),
};