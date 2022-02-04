import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Hint from './Hint';

export default {
  title: 'Ui/Hint',
  component: Hint,
  argTypes: {},
} as ComponentMeta<typeof Hint>;

const Template: ComponentStory<typeof Hint> = (args) => <Hint {...args} />;

export const Warning = Template.bind({});
Warning.args = {
  text: 'Hint text',
  iconType: 'warning',
};
