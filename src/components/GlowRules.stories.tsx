import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GlowRules, { GlowRule } from './GlowRules';

const sampleRules: GlowRule[] = [
  {
    title: 'Be Respectful',
    description: 'Treat everyone in the community with kindness and professionalism.',
    status: 'success',
    featured: true,
    tags: ['Respect', 'Kindness'],
  },
  {
    title: 'No Spam or Promotions 🚫',
    description: 'Avoid posting irrelevant links or advertisements.',
    status: 'error',
    tags: ['No-Spam'],
    expandable: true,
    children: [
      {
        title: 'Share Relevant Links',
        description: 'Please only share links that are helpful to the discussion.',
        status: 'info',
        tags: ['Good Practice'],
      },
    ],
  },
  {
    title: 'Share Your Knowledge 📚',
    description: 'Help others by sharing expertise freely—everyone’s growth helps the whole group.',
    status: 'info',
    tags: ['Community', 'Growth'],
    featured: true,
  },
  {
    title: 'Be Accountable',
    description: 'Behave online as you would in-person; demonstrate integrity in all actions.',
    status: 'warning',
    tags: ['Integrity'],
    expandable: true,
    children: [
      {
        title: 'No Bullying or Harassment',
        description: 'Insults, hate speech, or personal attacks are not tolerated.',
        status: 'error',
        tags: ['Safety'],
      },
    ],
  },
  {
    title: 'Stay Curious!',
    description: 'Ask questions—every question is a chance for the whole community to learn.',
    status: 'success',
    tags: ['Curiosity', 'Learning'],
  },
];

const lightGlowRules: GlowRule[] = [
  {
    title: 'Collaboration',
    description: 'Work together to achieve shared goals.',
    status: 'info',
    tags: ['Teamwork', 'Support'],
    featured: true,
  },
  {
    title: 'Innovation',
    description: 'Encourage new ideas and creative problem solving.',
    status: 'success',
    tags: ['Ideas', 'Improve'],
    featured: true,
  },
  {
    title: 'Transparency',
    description: 'Communicate openly and honestly at all times.',
    status: 'warning',
    tags: ['Openness', 'Honesty'],
  },
];

const gradientRules: GlowRule[] = [
  {
    title: 'Diversity 🌈',
    description: 'Embrace the differences that make us strong and unique.',
    status: 'success',
    tags: ['Unique', 'Together'],
    featured: true,
  },
  {
    title: 'Empathy 🤝',
    description: 'Understand and care for others’ perspectives and feelings.',
    status: 'info',
    tags: ['Understanding'],
  },
  {
    title: 'Growth 🚀',
    description: 'Pursue learning, improvement, and adaptation in all you do.',
    status: 'success',
    tags: ['Learning'],
  },
];

// --- META ---
const meta: Meta<typeof GlowRules> = {
  title: 'Ultra Fancy/GlowRules',
  component: GlowRules,
  decorators: [
    (Story, { parameters }) => (
      <div
        style={{
          minHeight: '100vh',
          background: parameters.backgroundOverride ||
            'linear-gradient(135deg, #202031 60%, #00ff99 240%)',
          padding: '40px 0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    rules: { control: false },
    header: { control: false },
    style: { control: false },
    cardStyle: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof GlowRules>;

// --- STORIES ---

export const Playground: Story = {
  args: {
    rules: sampleRules,
    orientation: 'vertical',
    ruleGap: 20,
    showHeader: true,
    header: (
      <span
        style={{
          fontWeight: 900,
          fontSize: 30,
          letterSpacing: '0.03em',
          background: 'linear-gradient(90deg,#38d1c4,#8b5cf6,#00ff99,#ef4444)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 2px 20px #38bdf888, 0 4px 32px #9333ea99',
          display: 'inline-block',
        }}
      >
        🌟 Community Glow Rules 🌟
      </span>
    ),
    style: {
      boxShadow: '0 12px 40px 0 rgba(0,255,153,0.23), 0 2px 12px 0 #8b5cf6bb',
      borderRadius: 32,
      border: '2px solid #00ff99',
      padding: '4px',
      background: 'rgba(28,20,51,0.98)',
    },
    cardStyle: {
      background: 'linear-gradient(115deg, #181b39 60%, #00ff9940 140%)',
    },
    showIcons: true,
    showTags: true,
    tagGradient: 'linear-gradient(90deg,#00ff99,#8b5cf6)',
  },
};

export const HorizontalShowcase: Story = {
  args: {
    rules: sampleRules,
    orientation: 'horizontal',
    ruleGap: 36,
    showHeader: true,
    header: (
      <span
        style={{
          fontWeight: 900,
          fontSize: 28,
          letterSpacing: '0.03em',
          background: 'linear-gradient(90deg,#00ff99,#ffab00,#8b5cf6,#ef4444)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          display: 'inline-block',
        }}
      >
        <span role="img" aria-label="row">↔️</span> Horizontal Glow Rules
      </span>
    ),
    style: {
      boxShadow: '0 8px 24px #ffab0036',
      borderRadius: 36,
      background: 'rgba(40,29,49,0.98)',
      border: '2px solid #ffab00',
      padding: 5,
    },
    cardStyle: {
      background: 'linear-gradient(92deg, #ffa72622 70%, #8b5cf620 110%)',
    },
    showIcons: true,
    showTags: true,
    tagGradient: 'linear-gradient(90deg,#ffab00,#00ff99)',
  },
};

export const CustomTagRender: Story = {
  args: {
    rules: sampleRules,
    orientation: 'vertical',
    showTags: true,
    tagGradient: 'linear-gradient(90deg,#ff5cf6,#00ff99)',
    customRenderTag: (tag: string) => (
      <span
        style={{
          display: 'inline-block',
          marginRight: 7,
          marginBottom: 3,
          padding: '2px 11px',
          fontWeight: 700,
          borderRadius: 8,
          background:
            'linear-gradient(92deg, #ff5cf6 80%, #00ff99 140%)',
          color: '#fff',
          boxShadow: '0 0 12px #ff5cf688, 0 0 6px #00ff9977',
          letterSpacing: '.04em',
        }}
      >
        🌈 {tag.toUpperCase()}
      </span>
    ),
  },
};

export const NoHeaderMinimalist: Story = {
  args: {
    rules: sampleRules,
    orientation: 'vertical',
    showHeader: false,
    style: {
      background: 'rgba(22,22,28,0.97)',
      border: '1.5px solid #2f404a',
      borderRadius: 20,
      padding: 6
    },
    cardStyle: {
      background: 'linear-gradient(120deg,#232137 60%,#242b36 110%)',
    },
    showIcons: false,
    showTags: false,
  },
};

export const LightOnWhite: Story = {
  args: {
    rules: lightGlowRules,
    orientation: 'vertical',
    showHeader: true,
    header: (
      <span
        style={{
          fontWeight: 900,
          fontSize: 30,
          background: 'linear-gradient(88deg,#38d1c4,#00ff99 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        ✨ Team Whiteboard ✨
      </span>
    ),
    style: {
      boxShadow: '0 8px 24px rgba(56,209,196,0.14)',
      borderRadius: 30,
      background: 'rgba(255,255,255,0.87)',
      border: '2px solid #38d1c4',
    },
    cardStyle: {
      background: 'linear-gradient(92deg, #e6fff9 70%, #38d1c411 120%)',
    },
    tagGradient: 'linear-gradient(90deg,#38d1c4,#00ff99)',
  },
  parameters: {
    backgroundOverride: 'linear-gradient(120deg, #e4f5f1 70%, #ffffff 100%)',
  },
};

export const RainbowGradient: Story = {
  args: {
    rules: gradientRules,
    orientation: 'vertical',
    showHeader: true,
    header: (
      <span
        style={{
          fontWeight: 900,
          fontSize: 30,
          letterSpacing: '0.03em',
          background: 'linear-gradient(90deg,#ff5cf6,#00ff99,#ffab00,#38d1c4,#ef4444)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          display: 'inline-block',
        }}
      >
        🌈 Rainbow Principles
      </span>
    ),
    style: {
      boxShadow: '0 6px 32px 0 #ff5cf666,0 2px 18px 0 #00ff9977',
      borderRadius: 28,
      background: 'rgba(250,230,255,0.96)',
      border: '2px solid #ff5cf6',
    },
    cardStyle: {
      background: 'linear-gradient(108deg, #ffe4fa 60%, #fffcfa 110%)',
    },
    tagGradient: 'linear-gradient(90deg,#ff5cf6,#00ff99,#ffab00,#38d1c4,#ef4444)',
  },
  parameters: {
    backgroundOverride: 'linear-gradient(120deg,#fff7fc 70%,#e6fff9 120%)',
  },
};

export const NestedAndExpandable: Story = {
  args: {
    rules: [
      {
        title: 'Top Level Rule',
        description: 'This rule is expandable and has many levels.',
        status: 'info',
        tags: ['Expandable'],
        expandable: true,
        children: [
          {
            title: 'Sub Rule 1',
            description: 'First nested rule.',
            status: 'success',
            tags: ['Child'],
            expandable: true,
            children: [
              {
                title: 'Sub Sub Rule',
                description: 'Second nested rule!',
                status: 'warning',
                tags: ['Grandchild'],
              },
            ],
          },
          {
            title: 'Sub Rule 2',
            description: 'Another nested rule, not expandable.',
            status: 'error',
            tags: ['Child'],
          },
        ],
      },
    ],
    orientation: 'vertical',
    showHeader: true,
    header: (
      <span
        style={{
          fontWeight: 900,
          fontSize: 26,
          letterSpacing: '0.06em',
          background: 'linear-gradient(87deg,#ff9800,#00ff99,#8b5cf6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        🧩 Expandable/Nested Showcase
      </span>
    ),
    style: {
      boxShadow: '0 4px 20px #ff980060',
      borderRadius: 24,
      background: '#1e1e28',
      border: '2px solid #ff9800',
    },
    cardStyle: { background: 'linear-gradient(120deg,#1e1e28 80%,#ff980033 120%)' },
    tagGradient: 'linear-gradient(90deg,#ff9800,#8b5cf6,#00ff99)',
  },
  parameters: {
    backgroundOverride: 'linear-gradient(132deg,#211e24 60%,#ff9800 240%)',
  },
};
