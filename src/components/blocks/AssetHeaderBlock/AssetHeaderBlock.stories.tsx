import type { ComponentMeta, ComponentStory } from '@storybook/react';
import AssetHeaderBlock from './AssetHeaderBlock';

export default {
  title: 'Block/AssetHeaderBlock',
  component: AssetHeaderBlock,
  argTypes: {},
} as ComponentMeta<typeof AssetHeaderBlock>;

const Template: ComponentStory<typeof AssetHeaderBlock> = (args) => (
  <AssetHeaderBlock {...args} />
);

export const Block = Template.bind({});
Block.args = {
  assetType: 'Block',
};

export const Estate = Template.bind({});
Estate.args = {
  assetType: 'Estate',
};
