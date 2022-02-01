import type { ComponentMeta, ComponentStory } from '@storybook/react';
import GrayBox from './GrayBox';

export default {
  title: 'Layout/GrayBox',
  component: GrayBox,
  argTypes: {},
} as ComponentMeta<typeof GrayBox>;

const Template: ComponentStory<typeof GrayBox> = (args) => <GrayBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
