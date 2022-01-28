import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import InformationBlocksContainer from './InformationBlocksContainer';

export default {
  title: 'Layout/InformationBlocksContainer',
  component: InformationBlocksContainer,
  argTypes: {},
} as ComponentMeta<typeof InformationBlocksContainer>;

const Template: ComponentStory<typeof InformationBlocksContainer> = (args) => (
  <InformationBlocksContainer {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
