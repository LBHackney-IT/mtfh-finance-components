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
