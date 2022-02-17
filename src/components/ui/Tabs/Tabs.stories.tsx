import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Tabs from './Tabs';
import { useTabs } from '../../../hooks/index';

export default {
  title: 'Ui/Tabs',
  component: Tabs,
  argTypes: {},
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => {
  const tabs = {
    home: <div>Home</div>,
    garage: <div>Garage</div>,
  };

  const { tabsProps, tabContent } = useTabs(tabs);

  return (
    <div>
      <Tabs {...args} {...tabsProps} />
      {tabContent}
    </div>
  );
};

export const Normal = Template.bind({});
Normal.args = {};
