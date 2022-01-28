import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import InfoItemsList from './InfoItemsList';

export default {
  title: 'Layout/InfoItemsList',
  component: InfoItemsList,
  argTypes: {},
} as ComponentMeta<typeof InfoItemsList>;

const Template: ComponentStory<typeof InfoItemsList> = (args) => (
  <InfoItemsList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
