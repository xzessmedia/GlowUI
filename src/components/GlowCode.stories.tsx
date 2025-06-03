import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowCode from './GlowCode';

const sampleCode = `
function greet(name) {
  return 'Hello, ' + name + '!';
}
console.log(greet('World'));`.trim();

const meta: Meta = {
  title: 'Components/GlowCode',
  component: GlowCode,
  argTypes: {
    colorVariant: { control: 'radio', options: ['primary', 'secondary', 'accent'] },
    borderRadius: { control: { type: 'number', min: 0, max: 40 } },
    animated: { control: 'boolean' },
    showCopy: { control: 'boolean' },
    lineNumbers: { control: 'boolean' }
  },
  args: {
    code: sampleCode,
    language: 'js',
    showCopy: true,
    colorVariant: 'accent',
    animated: true,
    borderRadius: 21,
    lineNumbers: false,
    title: 'JavaScript Example'
  }
};

export default meta;

export const Default: StoryObj = {};

export const WithLineNumbers: StoryObj = {
  args: { lineNumbers: true }
};

export const Secondary: StoryObj = {
  args: { colorVariant: 'secondary', title: 'Secondary Badge', showCopy: false }
};

export const NotAnimated: StoryObj = {
  args: { animated: false }
};

export const CustomBorderRadius: StoryObj = {
  args: { borderRadius: 3 }
};