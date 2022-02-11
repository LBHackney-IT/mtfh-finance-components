import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Sorts from './Sorts';
import { useSorts } from '../../../hooks/index';

export default {
  title: 'Ui/Sorts',
  component: Sorts,
  argTypes: {},
} as ComponentMeta<typeof Sorts>;

const Template: ComponentStory<typeof Sorts> = (args) => {
  const sortArgs = useSorts();

  return <Sorts {...args} {...sortArgs}  />;
};

export const Normal = Template.bind({});
Normal.args = {
    options: [{
      id: "foo",
      label: "item 1"
    }, {
      id: 'bar',
      label: 'item 2'
    }]
};
