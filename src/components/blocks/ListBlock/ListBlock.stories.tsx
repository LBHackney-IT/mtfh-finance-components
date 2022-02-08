import type { ComponentMeta, ComponentStory } from '@storybook/react';
import ListBlock from './ListBlock';

export default {
  title: 'Block/ListBlock',
  component: ListBlock,
  argTypes: {},
} as ComponentMeta<typeof ListBlock>;

const Template: ComponentStory<typeof ListBlock> = (args) => <ListBlock {...args} />;

const base = {
  name: 'This is the name',
  description: 'This is the description',
  data: [
    {
      value: 'value',
      label: 'Label',
    },
    {
      value: 'value2',
      label: 'Label2',
    },
  ],
};

export const Home = Template.bind({});
Home.args = {
  iconType: 'home',
  className: '',
  ...base,
};

export const Garage = Template.bind({});
Garage.args = {
  iconType: 'garage',
  className: '',
  ...base,
};
