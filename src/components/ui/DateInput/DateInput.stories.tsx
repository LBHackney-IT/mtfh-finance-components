import type { ComponentMeta, ComponentStory } from '@storybook/react';
import DateInput from './DateInput';
import { useDateInput } from '../../../hooks/index';

export default {
  title: 'Ui/DateInput',
  component: DateInput,
  argTypes: {},
} as ComponentMeta<typeof DateInput>;

const Template: ComponentStory<typeof DateInput> = (args) => {
  const { dateValues, onChange } = useDateInput();

  console.log('check value', dateValues, onChange.toString());

  return <DateInput dateValues={dateValues} onChange={onChange} {...args} />;
};

export const Normal = Template.bind({});
Normal.args = {
  label: 'Input field label',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Input field label',
  disabled: true,
};

export const WithBorder = Template.bind({});
WithBorder.args = {
  label: 'Input field label',
  withBorder: true,
};

export const WithErrorMessage = Template.bind({});
WithErrorMessage.args = {
  label: 'Input field label',
  errorMessage: 'This is the error',
};

export const WithErrorMessageAndBorder = Template.bind({});
WithErrorMessageAndBorder.args = {
  label: 'Input field label',
  withBorder: true,
  errorMessage: 'This is the error',
};
