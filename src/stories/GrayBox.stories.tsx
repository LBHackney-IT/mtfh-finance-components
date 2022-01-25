import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import GrayBox from '../components/layout/GrayBox/GrayBox';

export default {
  title: 'Example/GrayBox',
  component: GrayBox,
  argTypes: {},
} as ComponentMeta<typeof GrayBox>;

const Template: ComponentStory<typeof GrayBox> = (args) => <GrayBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
