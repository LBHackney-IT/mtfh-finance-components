import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Select from './Select';

export default {
  title: 'Ui/Select',
  component: Select,
  argTypes: {},
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

const options = [
  {
    value: 'item 1',
    label: 'item 1',
  },
];

export const Normal = Template.bind({});
Normal.args = {
  name: 'select',
  options,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  name: 'select',
  options,
  label: 'This is label',
};

export const WithErrorMessage = Template.bind({});
WithErrorMessage.args = {
  name: 'select',
  options,
  errorMessage: 'The error message',
};

export const WithBorder = Template.bind({});
WithBorder.args = {
  name: 'select',
  options,
  withBorder: true,
};
