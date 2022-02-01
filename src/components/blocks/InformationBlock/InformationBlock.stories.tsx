import type { ComponentMeta, ComponentStory } from '@storybook/react';
import InformationBlock from './InformationBlock';

export default {
  title: 'Blocks/InformationBlock',
  component: InformationBlock,
  argTypes: {},
} as ComponentMeta<typeof InformationBlock>;

const Template: ComponentStory<typeof InformationBlock> = () => {
  const data = [
    {
      id: 123,
      value: 'foo',
      label: 'bar',
    },
  ];

  return (
    <InformationBlock
      header="Totals"
      data={data}
      icon="icon"
      variant="main"
      dataInRow
    />
  );
};

export const Normal = Template.bind({});
Normal.args = {};
