import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import InfoItemsList from './InfoItemsList';

export default {
  title: 'Layout/InfoItemsList',
  component: InfoItemsList,
  argTypes: {},
} as ComponentMeta<typeof InfoItemsList>;

const Template: ComponentStory<typeof InfoItemsList> = (args) => (
  <InfoItemsList {...args}>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </InfoItemsList>
);

export const Normal = Template.bind({});
Normal.args = {};
