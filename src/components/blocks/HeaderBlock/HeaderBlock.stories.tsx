import type { ComponentMeta, ComponentStory } from '@storybook/react';
import HeaderBlock from './HeaderBlock';

export default {
  title: 'Blocks/HeaderBlock',
  component: HeaderBlock,
  argTypes: {},
} as ComponentMeta<typeof HeaderBlock>;

const Template: ComponentStory<typeof HeaderBlock> = (args) => (
  <HeaderBlock {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  title: 'This is the title',
  subtitle: 'This is the subtitle',
  description: 'This is the description',
  className: '',
};
