import type { ComponentMeta, ComponentStory } from '@storybook/react';
import LeftMenuButton from './LeftMenuButton';
import Home from '../../../assets/home.svg';

export default {
  title: 'Layout/LeftMenuButton',
  component: LeftMenuButton,
  argTypes: {},
} as ComponentMeta<typeof LeftMenuButton>;

const Template: ComponentStory<typeof LeftMenuButton> = (args) => (
  <LeftMenuButton {...args} />
);

const base = {
  buttonProps: {
    route: '/home',
    text: 'Home',
  },
};

export const Normal = Template.bind({});
Normal.args = {
  ...base,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...base,
  icon: <Home />,
};
