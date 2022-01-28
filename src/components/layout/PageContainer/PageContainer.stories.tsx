import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import PageContainer from './PageContainer';

export default {
  title: 'Layout/PageContainer',
  component: PageContainer,
  argTypes: {},
} as ComponentMeta<typeof PageContainer>;

const Template: ComponentStory<typeof PageContainer> = (args) => (
  <PageContainer {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
