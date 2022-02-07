import type { ComponentMeta, ComponentStory } from '@storybook/react';
import LeftBorderContainer from './LeftBorderContainer';

export default {
  title: 'Layout/LeftBorderContainer',
  component: LeftBorderContainer,
  argTypes: {},
} as ComponentMeta<typeof LeftBorderContainer>;

const Template: ComponentStory<typeof LeftBorderContainer> = (args) => (
  <LeftBorderContainer enabled {...args}>
    This is the content
  </LeftBorderContainer>
);

export const Enabled = Template.bind({});
Enabled.args = {
  enabled: true,
};

export const NoError = Template.bind({});
NoError.args = {
  hasError: false,
};

export const HasError = Template.bind({});
HasError.args = {
  hasError: true,
};
