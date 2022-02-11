import type { ComponentMeta, ComponentStory } from '@storybook/react';
import LeftMenu from './LeftMenu';
import Home from '../../../assets/home.svg';
import Garage from '../../../assets/garage.svg';

export default {
  title: 'Layout/LeftMenu',
  component: LeftMenu,
  argTypes: {},
} as ComponentMeta<typeof LeftMenu>;

const Template: ComponentStory<typeof LeftMenu> = (args) => <LeftMenu {...args} />;

export const AnchorLink = Template.bind({});
AnchorLink.args = {
  regularLinks: [
    {
      buttonProps: {
        text: 'First link',
      },
      id: 23,
    },
    {
      buttonProps: {
        text: 'Second link',
      },
      id: 24,
    },
  ],
};

export const PageLink = Template.bind({});
PageLink.args = {
  regularLinks: [
    {
      icon: <Home />,
      buttonProps: {
        text: 'Home',
        route: '/home',
      },
    },
    {
      icon: <Garage />,
      buttonProps: {
        text: 'Contact Us',
        route: '/contact',
      },
    },
  ],
};
