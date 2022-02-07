import type { ComponentMeta, ComponentStory } from '@storybook/react';
import DateInput from './DateInput';

export default {
  title: 'Ui/DateInput',
  component: DateInput,
  argTypes: {},
} as ComponentMeta<typeof DateInput>;

const Template: ComponentStory<typeof DateInput> = (args) => <DateInput {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  label: 'Input field label',
  dateValues: {
    day: '04',
    month: '06',
    year: '1989',
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Input field label',
  dateValues: {
    day: '04',
    month: '06',
    year: '1989',
  },
  disabled: true,
};

export const withBorder = Template.bind({});
WithBorder.args = {
  label: 'Input field label',
  dateValues: {
    day: '04',
    month: '06',
    year: '1989',
  },
  withBorder: true,
};

export const WithErrorMessage = Template.bind({});
WithErrorMessage.args = {
  label: 'Input field label',
  dateValues: {
    day: '04',
    month: '06',
    year: '1989',
  },
  errorMessage: 'This is the error',
};
