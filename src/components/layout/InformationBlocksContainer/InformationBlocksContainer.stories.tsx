import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import InformationBlocksContainer from './InformationBlocksContainer';
import InformationBlock from '../../blocks/InformationBlock';

export default {
  title: 'Layout/InformationBlocksContainer',
  component: InformationBlocksContainer,
  argTypes: {},
} as ComponentMeta<typeof InformationBlocksContainer>;

const Template: ComponentStory<typeof InformationBlocksContainer> = (args) => {
  const data = [
    {
      id: 123,
      value: 'hello',
      label: 'world',
    },
  ];

  return (
    <InformationBlocksContainer {...args}>
      <InformationBlock
        header="Totals"
        data={data}
        icon="icon"
        variant="main"
        dataInRow
      />
    </InformationBlocksContainer>
  );
};

export const Normal = Template.bind({});
Normal.args = {};
