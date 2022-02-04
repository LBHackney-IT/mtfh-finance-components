import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Accordion, AccordionDetails, AccordionSummary } from './index';

export default {
  title: 'Ui/Accordion',
  component: Accordion,
  argTypes: {},
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args}>
    <AccordionSummary>Accordion Summary</AccordionSummary>

    <AccordionDetails>Accordion Details</AccordionDetails>
  </Accordion>
);

export const Expanded = Template.bind({});
Expanded.args = {
  isExpanded: true,
};
