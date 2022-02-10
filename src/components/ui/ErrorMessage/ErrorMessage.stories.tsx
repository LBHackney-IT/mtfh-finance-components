import type { ComponentMeta, ComponentStory } from '@storybook/react';
import ErrorMessage from './ErrorMessage';

export default {
  title: 'Ui/ErrorMessage',
  component: ErrorMessage,
  argTypes: {},
} as ComponentMeta<typeof ErrorMessage>;

const Template: ComponentStory<typeof ErrorMessage> = (args) => (
  <ErrorMessage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  text: 'This is the error message',
  className: '',
};
