import type { ComponentMeta, ComponentStory } from '@storybook/react';
import AssetIcon from './AssetIcon';

export default {
  title: 'Ui/AssetIcon',
  component: AssetIcon,
  argTypes: {},
} as ComponentMeta<typeof AssetIcon>;

const Template: ComponentStory<typeof AssetIcon> = (args) => <AssetIcon {...args} />;

export const Garage = Template.bind({});
Garage.args = { type: 'garage' };

export const Home = Template.bind({});
Home.args = { type: 'home' };

export const IsBig = Template.bind({});
IsBig.args = { type: 'home', isBig: true };
