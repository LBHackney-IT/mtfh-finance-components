import type { ComponentMeta, ComponentStory } from '@storybook/react';
import CheckboxSmall from './CheckboxSmall';

export default {
  title: 'Ui/CheckboxSmall',
  component: CheckboxSmall,
  argTypes: {},
} as ComponentMeta<typeof CheckboxSmall>;

const Template: ComponentStory<typeof CheckboxSmall> = (args) => (
  <CheckboxSmall {...args} />
);

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
