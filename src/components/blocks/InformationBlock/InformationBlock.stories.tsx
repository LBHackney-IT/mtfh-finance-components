import type { ComponentMeta, ComponentStory } from '@storybook/react';
import InformationBlock from './InformationBlock';

export default {
  title: 'Blocks/InformationBlock',
  component: InformationBlock,
  argTypes: {},
} as ComponentMeta<typeof InformationBlock>;

const Template: ComponentStory<typeof InformationBlock> = (args) => (
  <InformationBlock {...args} />
);

const data = [
  {
    id: 123,
    value: 'foo',
    label: 'bar',
  },
  {
    id: 124,
    value: 'foo2',
    label: 'bar2',
  },
];

export const Main = Template.bind({});
Main.args = {
  header: 'Totals',
  data,
  icon: 'icon',
  variant: 'main',
};

export const Regular = Template.bind({});
Regular.args = {
  header: 'Totals',
  data,
  icon: 'icon',
  variant: 'regular',
};

export const DataInColumn = Template.bind({});
DataInColumn.args = {
  header: 'Totals',
  data,
  icon: 'icon',
  variant: 'main',
  dataInRow: false,
};

export const DataInRow = Template.bind({});
DataInRow.args = {
  header: 'Totals',
  data,
  icon: 'icon',
  variant: 'main',
  dataInRow: true,
};
