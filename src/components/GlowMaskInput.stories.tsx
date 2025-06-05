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
    helperText: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj;

function ControlledGlowMaskInput(props: any) {
    const [val, setVal] = React.useState('');
    const [raw, setRaw] = React.useState('');
    return (
    <div style={{ padding: 24, background: '#161d2e', borderRadius: 16 }}>
        <GlowMaskInput
        {...props}
        value={val}
          onChange={(formatted, rawValue) => {
            setVal(formatted);
            setRaw(rawValue);
          }}
        />
      <div style={{ marginTop: 7, color: '#7cf2c6', fontWeight: 600, fontSize: 14 }}>
        <span>Masked Value: </span><span style={{ color: '#facc15', letterSpacing: 1 }}>{val}</span><br />
        <span>Raw Value: </span><span style={{ color: '#8b5cf6', letterSpacing: 1 }}>{raw}</span>
      </div>
      </div>
    );
}

export const Playground: Story = {
  render: (args) => <ControlledGlowMaskInput {...args} />,
  args: {
    label: 'Try Any Mask!',
    mask: '****-9999',
    glow: true,
    value: '',
  },
  parameters: {
    docs: { description: { story: 'Freely try any mask and see how values are formatted and parsed.' } },
  },
};

export const NeonPhone: Story = {
  render: (args) => <ControlledGlowMaskInput {...args} />,
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
  render: (args) => <ControlledGlowMaskInput {...args} />,
  args: {
    label: 'Credit Card',
    mask: '9999 9999 9999 9999',
    glow: true,
    value: '',
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: { description: { story: '💳 Credit card input, for payment UIs.' } }
  }
};

export const BirthdayPastel: Story = {
  render: (args) => <ControlledGlowMaskInput {...args} />,
  args: {
    label: 'Birthday',
    mask: '99/99/9999',
    glow: true,
    value: '',
  },
  parameters: {
    backgrounds: { default: 'light' },
    docs: { description: { story: '🎂 Pastel for birthday/date entry.' } }
  }
};

export const NoGlowMinimal: Story = {
  render: (args) => <ControlledGlowMaskInput {...args} />,
  args: {
    label: 'No Glow Minimal',
    mask: 'AA-999',
    glow: false,
    value: '',
  },
  parameters: {
    backgrounds: { default: 'light' },
    docs: { description: { story: 'Minimal non-glowing style for clean UI.' } }
  }
};

export const IBAN: Story = {
  render: (args) => <ControlledGlowMaskInput {...args} />,
  args: {
    label: 'IBAN',
    mask: 'AA99 9999 9999 9999 9999 99',
    glow: true,
    value: '',
    helperText: 'Enter an International Bank Account Number.'
  },
  parameters: {
    backgrounds: { default: 'light' },
    docs: { description: { story: '🏦 International Bank Account (IBAN) mask for financial apps.' } }
  }
};

export const GermanPhone: Story = {
  render: (args) => <ControlledGlowMaskInput {...args} />,
  args: {
    label: 'German Phone',
    mask: '+49 (999) 99999999',
    glow: true,
    value: '',
    helperText: 'Format: +49 (XXX) XXXXXXXX',
  },
  parameters: {
    backgrounds: { default: 'light' },
    docs: { description: { story: '📞 German phone with country code.' } }
  }
};

export const VATNumber: Story = {
  render: (args) => <ControlledGlowMaskInput {...args} />,
  args: {
    label: 'VAT Number',
    mask: 'AAA 999 999 99',
    glow: true,
    value: '',
    helperText: 'Example: DEU 123 456 78',
  },
  parameters: {
    backgrounds: { default: 'light' },
    docs: { description: { story: '🧾 VAT ID mask (example for Europe).' } }
  }
};
