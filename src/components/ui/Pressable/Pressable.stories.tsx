import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Pressable from './Pressable';

export default {
  title: 'Ui/Pressable',
  component: Pressable,
  argTypes: {},
} as ComponentMeta<typeof Pressable>;

const Template: ComponentStory<typeof Pressable> = (args) => (
  <Pressable {...args}>Click me</Pressable>
);

export const Normal = Template.bind({});
Normal.args = {};

export const H3 = Template.bind({});
H3.args = {
  children: <h3>Click me</h3>,
};

export const H5 = Template.bind({});
H5.args = {
  children: <h5>Click me</h5>,
};
