import type { ComponentMeta, ComponentStory } from '@storybook/react';
import RadioButtons from './RadioButtons';

export default {
  title: 'Ui/RadioButtons',
  component: RadioButtons,
  argTypes: {},
} as ComponentMeta<typeof RadioButtons>;

const Template: ComponentStory<typeof RadioButtons> = (args) => (
  <RadioButtons {...args} />
);

const options = [
  {
    value: 'foo',
    label: 'foo',
  },
  {
    value: 'bar',
    label: 'bar',
  },
];

export const Normal = Template.bind({});
Normal.args = {
  checkedItemId: 'foo',
  options,
  onChange: () => {},
};

export const IsHorizontal = Template.bind({});
IsHorizontal.args = {
  isHorizontal: true,
  checkedItemId: 'foo',
  options,
  onChange: () => {},
};
