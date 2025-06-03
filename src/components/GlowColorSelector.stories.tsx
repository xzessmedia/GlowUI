import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowColorSelector from './GlowColorSelector';

const meta: Meta = {
  title: 'Ultra Fancy/GlowColorSelector',
  component: GlowColorSelector,
  argTypes: {
    value: { control: 'color' },
    glow: { control: 'boolean' },
    size: { control: 'radio', options: ['small', 'medium', 'large'] },
    mode: { control: 'radio', options: ['picker', 'palette', 'wheel'] },
    onChange: { action: 'onChange' }
  }
};

export default meta;
type Story = StoryObj;

export const VibrantRainbow: Story = {
  args: {
    value: '#ff00ff',
    glow: true,
    size: 'large',
    mode: 'palette',
    colors: [
      '#ff0080', '#ff4000', '#ff8000', '#ffff00', 
      '#80ff00', '#00ff40', '#00ffff', '#0080ff',
      '#4000ff', '#8000ff', '#ff00ff', '#ff0040'
    ]
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: '🌈 A vibrant rainbow color palette with intense glow effects!'
      }
    }
  }
};

export const NeonCyberPunk: Story = {
  args: {
    value: '#00ffff',
    glow: true,
    size: 'large',
    mode: 'wheel',
    colors: [
      '#00ffff', '#ff00ff', '#ffff00', '#00ff00',
      '#ff0080', '#8000ff', '#0080ff', '#ff4000'
    ]
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: '⚡ Cyberpunk neon colors with electric glow for futuristic UIs!'
      }
    }
  }
};

export const PastelDream: Story = {
  args: {
    value: '#ffb3e6',
    glow: true,
    size: 'medium',
    mode: 'palette',
    colors: [
      '#ffb3e6', '#b3e6ff', '#e6ffb3', '#ffe6b3',
      '#e6b3ff', '#b3ffb3', '#ffccb3', '#ccb3ff'
    ]
  },
  parameters: {
    backgrounds: { default: 'light' },
    docs: {
      description: {
        story: '🎀 Soft pastel colors with gentle glow for elegant designs!'
      }
    }
  }
};

export const OceanDepths: Story = {
  args: {
    value: '#006699',
    glow: true,
    size: 'large',
    mode: 'picker',
    colors: [
      '#001122', '#003366', '#006699', '#0099cc',
      '#00ccff', '#33ddff', '#66eeff', '#99f6ff'
    ]
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: '🌊 Deep ocean blues with aquatic glow effects!'
      }
    }
  }
};

export const SunsetVibes: Story = {
  args: {
    value: '#ff6600',
    glow: true,
    size: 'large',
    mode: 'palette',
    colors: [
      '#ff3300', '#ff6600', '#ff9900', '#ffcc00',
      '#ffff33', '#ff9966', '#ff6699', '#ff3399'
    ]
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: '🌅 Warm sunset colors with golden hour glow!'
      }
    }
  }
};

export const NatureForest: Story = {
  args: {
    value: '#228b22',
    glow: true,
    size: 'medium',
    mode: 'wheel',
    colors: [
      '#006400', '#228b22', '#32cd32', '#7fff00',
      '#adff2f', '#98fb98', '#90ee90', '#00ff7f'
    ]
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: '🌲 Fresh forest greens with natural earth glow!'
      }
    }
  }
};

export const GalaxyPurple: Story = {
  args: {
    value: '#9933cc',
    glow: true,
    size: 'large',
    mode: 'palette',
    colors: [
      '#4b0082', '#6a0dad', '#7b68ee', '#9370db',
      '#9932cc', '#ba55d3', '#da70d6', '#ee82ee'
    ]
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: '✨ Cosmic purples with mystical galaxy glow!'
      }
    }
  }
};

export const MinimalMono: Story = {
  args: {
    value: '#666666',
    glow: false,
    size: 'small',
    mode: 'picker',
    colors: [
      '#000000', '#333333', '#666666', '#999999',
      '#cccccc', '#ffffff'
    ]
  },
  parameters: {
    backgrounds: { default: 'light' },
    docs: {
      description: {
        story: '⚫ Clean monochrome palette without glow for minimal designs.'
      }
    }
  }
};

export const Interactive: Story = {
  render: (args) => {
    const [selectedColor, setSelectedColor] = React.useState('#ff0080');
    return (
      <div style={{ padding: 40, background: 'linear-gradient(135deg, #1a1a2e, #16213e)', borderRadius: 20 }}>
        <h3 style={{ color: '#fff', marginBottom: 20, textAlign: 'center' }}>
          🎨 Interactive Color Selector Demo
        </h3>
        <GlowColorSelector
          {...args}
          value={selectedColor}
          onChange={(color) => setSelectedColor(color)}
        />
        <div style={{
          marginTop: 30,
          padding: 20,
          borderRadius: 15,
          background: selectedColor,
          color: '#fff',
          textAlign: 'center',
          fontWeight: 'bold',
          boxShadow: `0 0 40px ${selectedColor}80`
        }}>
          Selected: {selectedColor}
        </div>
      </div>
    );
  },
  args: {
    glow: true,
    size: 'large',
    mode: 'palette',
    colors: [
      '#ff0080', '#00ff80', '#8000ff', '#ff8000',
      '#0080ff', '#ff0040', '#40ff00', '#8040ff'
    ]
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: '🎯 Interactive demo showing real-time color selection with live preview!'
      }
    }
  }
};