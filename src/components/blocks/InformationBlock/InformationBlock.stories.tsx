import type { ComponentMeta, ComponentStory } from '@storybook/react';
import InformationBlock from './InformationBlock';

export default {
  title: 'DataInColumn/DataInRow',
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

export const NoDataRow = Template.bind({});
NoDataRow.args = {
  header: 'Totals',
  data,
  icon: 'icon',
  variant: 'main',
  dataInRow: false,
};

export const WithDataRow = Template.bind({});
WithDataRow.args = {
  header: 'Totals',
  data,
  icon: 'icon',
  variant: 'main',
  dataInRow: true,
};
