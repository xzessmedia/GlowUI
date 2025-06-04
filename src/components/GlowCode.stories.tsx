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
    lineNumbers: { control: 'boolean' },
    fontSize: { control: { type: 'number', min: 10, max: 40 } },
    maxHeight: { control: { type: 'number', min: 100, max: 800 } },
    title: { control: 'text' },
  },
  args: {
    code: sampleCode,
    language: 'js',
    showCopy: true,
    colorVariant: 'accent',
    animated: true,
    borderRadius: 21,
    fontSize: 16,
    maxHeight: 400,
    lineNumbers: false,
    title: 'JavaScript Example'
  }
};

export default meta;

export const Default: StoryObj = {};

export const WithLineNumbers: StoryObj = {
  args: { lineNumbers: true, title: 'Line Numbers Enabled' }
};

export const Secondary: StoryObj = {
  args: { colorVariant: 'secondary', title: 'Secondary Theme', showCopy: false }
};

export const NotAnimated: StoryObj = {
  args: { animated: false, title: 'No Animation' }
};

export const CustomBorderRadius: StoryObj = {
  args: { borderRadius: 3, title: 'Rounded Corners: 3px' }
};

export const ExtraLargeFont: StoryObj = {
  args: { fontSize: 26, title: 'Huge Font' }
};

export const TallCode: StoryObj = {
  args: { maxHeight: 600, code: sampleCode + '\n'.repeat(30) + '// ...many lines...' }
};

export const UltraAccent: StoryObj = {
  args: {
    colorVariant: 'accent',
    animated: true,
    borderRadius: 30,
    fontSize: 18,
    title: 'Electric Accent',
    code: 'const ultra = "⚡️ Ultra vibrant! ⚡️";\nalert(ultra);',
  }
};

export const NeonParty: StoryObj = {
  args: {
    colorVariant: 'primary',
    animated: true,
    borderRadius: 40,
    fontSize: 20,
    title: 'Neon Party!',
    code: [
      'const neon = ["#05FFA1", "#38BDF8", "#F472B6"];',
      'neon.forEach(color => {',
      "  document.body.style.background = color;",
      '});',
      'console.log("Ultra Glow 🌈");',
    ].join('\n'),
  },
};

export const GradientShowcase: StoryObj = {
  args: {
    colorVariant: 'secondary',
    animated: true,
    borderRadius: 12,
    fontSize: 14,
    title: 'Gradient Flex',
    code: 'body {\n  background: radial-gradient(ellipse at top, #05ffa1 0%, #6366f1 100%);\n  color: #fff;\n}',
  },
};

export const AllFeatures: StoryObj = {
  args: {
    lineNumbers: true,
    showCopy: true,
    animated: true,
    borderRadius: 21,
    colorVariant: 'primary',
    fontSize: 18,
    maxHeight: 500,
    title: '🚀 All Features Demo',
    code: [
      'function wow(feature) {',
      '  return `Glow: ${feature}!`;',
      '}',
      'console.log(wow("Everything"));',
    ].join('\n'),
  }
};
