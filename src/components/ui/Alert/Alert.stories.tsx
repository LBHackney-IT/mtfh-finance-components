import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Alert from './Alert';

export default {
  title: 'Ui/Alert',
  component: Alert,
  argTypes: {},
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} >Alert</Alert>;

export const Success = Template.bind({});
Success.args = {
  severity: "success"
};

export const Info = Template.bind({});
Info.args = {
  severity: "info"
};

export const Error = Template.bind({});
Error.args = {
  severity: "error"
};
