import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Table from './Table';

export default {
  title: 'Ui/Table',
  component: Table,
  argTypes: {},
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => {
  return <Table {...args} />;
};

const data = [{ name: 'Clark' }];

export const Normal = Template.bind({});
Normal.args = {
  data,
  columns: [{ Header: 'Name', accessor: 'name' }],
};

export const Bold = Template.bind({});
Bold.args = {
  data,
  columns: [{ Header: 'Name', accessor: 'name', bold: true }],
};

export const LightWeight = Template.bind({});
LightWeight.args = {
  data,
  columns: [{ Header: 'Name', accessor: 'name', lightWeight: true }],
};

export const BoldHeader = Template.bind({});
BoldHeader.args = {
  data,
  columns: [{ Header: 'Name', accessor: 'name', boldHeader: true }],
};

export const Numeric = Template.bind({});
Numeric.args = {
  data,
  columns: [{ Header: 'Name', accessor: 'name', isNumeric: true }],
};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
  data,
  columns: [{ Header: 'Name', accessor: 'name', customWidth: 333 }],
};

export const WithPagination = Template.bind({});
WithPagination.args = {
  data,
  columns: [{ Header: 'Name', accessor: 'name', customWidth: 333 }],
  pagination: {
    pageCount: 3,
    totalCount: 15,
    currentPage: 1,
    onPageChange: () => {},
  },
};

export const WithTokenPagination = Template.bind({});
WithTokenPagination.args = {
  data,
  columns: [{ Header: 'Name', accessor: 'name', customWidth: 333 }],
  tokenPagination: {
    hasNext: true,
    hasPrevious: false,
    goNext: () => {},
    goPrevious: () => {},
    resetPagination: () => {},
  },
};
