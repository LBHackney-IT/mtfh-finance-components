import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from './Input';

export default {
  title: 'Ui/Input',
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

const base = {
  classNameContainer: '',
  classNameInput: '',
};

export const Normal = Template.bind({});
Normal.args = {
  name: 'name',
  label: 'Name',
  ...base,
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'name',
  label: 'Name',
  disabled: true,
  ...base,
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  name: 'name',
  label: 'Name',
  description: 'This is the description',
  ...base,
};

export const WithError = Template.bind({});
WithDescription.args = {
  name: 'name',
  label: 'Name',
  withError: true,
  ...base,
};

export const WithBorder = Template.bind({});
WithBorder.args = {
  name: 'name',
  label: 'Name',
  withBorder: true,
  ...base,
};
