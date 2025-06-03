import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowDocument from './GlowDocument';

const demoText = `
# Glowing Markdown Document

This is a **vibrant story example** for the GlowDocument component. 🎉

- Uses different headers and content
- Code: ` + '`console.log("glow!")`' + `
- [Links look neon!](#)

> Fancy blockquotes shimmer in the dark.

## Neon Table
| Name   | Value |
| ------ | ----- |
| Alice  | 80    |
| Bob    | 95    |
| Clara  | 70    |
`;

const meta: Meta = {
  title: 'Ultra Fancy/GlowDocument',
  component: GlowDocument,
  args: {
    value: demoText,
    language: 'markdown',
    glow: true,
    fontSize: 19,
    showLineNumbers: false
  },
  argTypes: {
    value: { control: 'text' },
    language: { control: 'select', options: ['markdown', 'typescript', 'tsx', 'javascript', 'python', 'text'] },
    glow: { control: 'boolean' },
    fontSize: { control: 'number', min: 10, max: 38 },
    showLineNumbers: { control: 'boolean' },
  }
};

export default meta;
type Story = StoryObj;

export const NeonMarkdown: Story = { args: {} };

export const TypeScriptCode: Story = {
  args: {
    value: `/** Ultra purple glowing typescript example */\nexport const answer:number = 42;\nconsole.log(answer);`,
    language: 'typescript',
    glow: true,
    showLineNumbers: true,
    fontSize: 17
  },
  parameters: {
    docs: {
      description: {
        story: 'Typescript code with electric blue and purple glow.'
      }
    }
  }
};

export const RetroTerminal: Story = {
  args: {
    value: 'npm run ultra-glow',
    language: 'text',
    glow: true,
    showLineNumbers: false,
    fontSize: 21
  },
  parameters: {
    docs: {
      description: {
        story: 'Looks like a glowy terminal command.'
      }
    }
  }
};
