import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { WithBorder } from '../Input/Input.stories';
import DateInput from './DateInput';

export default {
  title: 'Ui/DateInput',
  component: DateInput,
  argTypes: {},
} as ComponentMeta<typeof DateInput>;

const Template: ComponentStory<typeof DateInput> = (args) => <DateInput {...args} />;

const base = {
  label: 'Input field label',
  dateValues: {
    day: '04',
    month: '06',
    year: '1989',
  },
};

export const Normal = Template.bind({});
Normal.args = {
  ...base,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...base,
  disabled: true,
};

export const withBorder = Template.bind({});
WithBorder.args = {
  ...base,
  withBorder: true,
};

export const WithErrorMessage = Template.bind({});
WithErrorMessage.args = {
  ...base,
  errorMessage: 'This is the error',
};
