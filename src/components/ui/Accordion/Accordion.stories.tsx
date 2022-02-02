import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Accordion, AccordionDetails, AccordionSummary } from './index';

export default {
  title: 'Ui/Accordion',
  component: Accordion,
  argTypes: {},
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args}>
    <AccordionSummary>Foo</AccordionSummary>

    <AccordionDetails>Bar</AccordionDetails>
  </Accordion>
);

export const Expanded = Template.bind({});
Expanded.args = {
  isExpanded: true,
};

export const NotExpanded = Template.bind({});
NotExpanded.args = {
  isExpanded: false,
};
