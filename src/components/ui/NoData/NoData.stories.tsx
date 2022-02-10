import type { ComponentMeta, ComponentStory } from '@storybook/react';
import NoData from './NoData';

export default {
  title: 'Ui/NoData',
  component: NoData,
  argTypes: {},
} as ComponentMeta<typeof NoData>;

const Template: ComponentStory<typeof NoData> = (args) => <NoData {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  className: '',
};
