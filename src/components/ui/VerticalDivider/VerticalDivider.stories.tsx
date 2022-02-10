import type { ComponentMeta, ComponentStory } from '@storybook/react';
import VerticalDivider from './VerticalDivider';

export default {
  title: 'Ui/VerticalDivider',
  component: VerticalDivider,
  argTypes: {},
} as ComponentMeta<typeof VerticalDivider>;

const Template: ComponentStory<typeof VerticalDivider> = (args) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
    }}
  >
    foo
    <VerticalDivider {...args} />
    bar
  </div>
);

export const Normal = Template.bind({});
Normal.args = {
  className: '',
};
