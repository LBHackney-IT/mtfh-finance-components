import type { ComponentMeta, ComponentStory } from '@storybook/react';
import InputSearch from './InputSearch';

export default {
  title: 'Specific/InputSearch',
  component: InputSearch,
  argTypes: {},
} as ComponentMeta<typeof InputSearch>;

const Template: ComponentStory<typeof InputSearch> = (args) => (
  <InputSearch {...args} />
);

const base = {
  value: 'Search value',
  textButton: 'Search',
  onChange: () => {},
};

export const Normal = Template.bind({});
Normal.args = {
  ...base,
};

export const Loading = Template.bind({});
Loading.args = {
  ...base,
  isLoading: true,
};

export const WithOutEnterEffect = Template.bind({});
Loading.args = {
  ...base,
  withOnEnter: false,
};
