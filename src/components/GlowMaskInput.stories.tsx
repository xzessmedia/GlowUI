import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowMaskInput from './GlowMaskInput';

const meta: Meta = {
  title: 'Ultra Fancy/GlowMaskInput',
  component: GlowMaskInput,
  args: {
    label: 'Phone',
    mask: '(999) 999-9999',
    value: '',
    glow: true,
  },
  argTypes: {
    label: { control: 'text' },
    mask: { control: 'text' },
    value: { control: 'text' },
    glow: { control: 'boolean' },
    onChange: { action: 'onChange' },
  },
};

export default meta;


type Story = StoryObj;

export const Playground: Story = { args: {} };

export const NeonPhone: Story = {
  args: {
    label: 'Neon Phone',
    mask: '+1 (999) 999-9999',
    glow: true,
    value: '',
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: { description: { story: '📱 Neon aqua glow and US mask, great for onboarding flows.' } }
  }
};

export const CreditCardAurora: Story = {
  args: {
    label: 'Credit Card',
    mask: '9999 9999 9999 9999',
    glow: true,
    value: '',
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: { description: { story: '💳 Credit card input with intense purple/blue glow, for payment UIs.' } }
  }
};

export const BirthdayPastel: Story = {
  args: {
    label: 'Birthday',
    mask: '99/99/9999',
    glow: true,
    value: '',
  },
  parameters: {
    backgrounds: { default: 'light' },
    docs: { description: { story: '🎂 Soft pink/green pastel for birthday or date entry fields.' } }
  }
};

export const NoGlowMinimal: Story = {
  args: {
    label: 'No Glow Minimal',
    mask: 'AA-999',
    glow: false,
    value: '',
  },
  parameters: {
    backgrounds: { default: 'light' },
    docs: { description: { story: 'Minimalistic, non-glowing style for clean admin/data UI.' } }
  }
};

export const InteractiveDemo: Story = {
  render: (args) => {
    const [val, setVal] = React.useState('');
    return (
      <div style={{ padding: 44, background: 'radial-gradient(ellipse at top left, #0ff 10%, #38bdf8 60%, #8b5cf6 100%)', borderRadius: 24 }}>
        <h4 style={{ color: '#fff', marginBottom: 18 }}>🔤 Live Mask Input</h4>
        <GlowMaskInput
        mask={''} {...args}
        value={val}
        onChange={newValue => setVal(newValue)}       />
        <div style={{ marginTop: 16, color: '#fff', fontWeight: 600 }}>
          <span>Masked Value: </span>
          <span style={{ color: '#facc15', letterSpacing: 1 }}>{val}</span>
        </div>
      </div>
    );
  },
  args: {
    label: 'Try Any Mask!',
    mask: '****-9999',
    glow: true,
    value: '',
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: { description: { story: '🎯 Interactive: Type and see the mask & glow in action live!' } }
  }
};
