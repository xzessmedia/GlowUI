import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import GlowingButton from './GlowingButton';

export default {
  title: 'Components/GlowingButton',
  component: GlowingButton,
} as ComponentMeta<typeof GlowingButton>;

const Template: ComponentStory<typeof GlowingButton> = () => <GlowingButton />;

export const Primary = Template.bind({});
Primary.args = {};