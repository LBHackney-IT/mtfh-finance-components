import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Checkbox from './Checkbox';

export default {
  title: 'Ui/Checkbox',
  component: Checkbox,
  argTypes: {},
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

const defaultArgs = {
  title: 'This is the title',
  description: 'This is the description',
  name: 'foo',
  label: 'bar',
  onChange: () => {},
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  ...defaultArgs,
};
