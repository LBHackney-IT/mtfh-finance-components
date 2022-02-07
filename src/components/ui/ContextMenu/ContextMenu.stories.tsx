import type { ComponentMeta, ComponentStory } from '@storybook/react';
import ContextMenu from './ContextMenu';
import MoreIcon from '../../../assets/more.svg';
import HomeIcon from '../../../assets/home.svg';
import GarageIcon from '../../../assets/garage.svg';

export default {
  title: 'Ui/ContextMenu',
  component: ContextMenu,
  argTypes: {},
} as ComponentMeta<typeof ContextMenu>;

const Template: ComponentStory<typeof ContextMenu> = (args) => (
  <ContextMenu {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  options: [
    {
      icon: <HomeIcon />,
      label: 'This is the home label',
      onClick: () => {},
    },
    {
      icon: <GarageIcon />,
      label: 'This is the garage label',
      onClick: () => {},
    },
  ],
  icon: <MoreIcon />,
  testId: '',
};
