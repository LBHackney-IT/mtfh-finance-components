import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Accordion from './Accordion';

export default {
  title: 'Ui/Accordion',
  component: Accordion,
  argTypes: {},
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args}>
    <div>Click me</div>
  </Accordion>
);

export const Normal = Template.bind({});
Normal.args = {};
