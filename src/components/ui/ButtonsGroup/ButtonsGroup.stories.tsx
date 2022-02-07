import type { ComponentMeta, ComponentStory } from '@storybook/react';
import ButtonsGroup from './ButtonsGroup';

export default {
  title: 'Ui/ButtonsGroup',
  component: ButtonsGroup,
  argTypes: {},
} as ComponentMeta<typeof ButtonsGroup>;

const Template: ComponentStory<typeof ButtonsGroup> = (args) => (
  <ButtonsGroup {...args} />
);

export const FirstSelected = Template.bind({});
FirstSelected.args = {
  leftText: 'left text',
  rightText: 'right text',
  toggle: () => {},
  isFirstSelected: true,
};
