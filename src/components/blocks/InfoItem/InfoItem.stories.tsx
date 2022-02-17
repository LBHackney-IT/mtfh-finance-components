import type { ComponentMeta, ComponentStory } from '@storybook/react';
import InfoItem from './InfoItem';

export default {
  title: 'Blocks/InfoItem',
  component: InfoItem,
  argTypes: {},
} as ComponentMeta<typeof InfoItem>;

const Template: ComponentStory<typeof InfoItem> = (args) => <InfoItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  label: 'This is the label',
  value: 'This is the value',
};
