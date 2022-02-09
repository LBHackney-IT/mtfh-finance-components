import type { ComponentMeta, ComponentStory } from '@storybook/react';
import ModalButtons from './ModalButtons';

export default {
  title: 'Modals/ModalButtons',
  component: ModalButtons,
  argTypes: {},
} as ComponentMeta<typeof ModalButtons>;

const Template: ComponentStory<typeof ModalButtons> = (args) => (
  <ModalButtons {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  withCancel: false,
};

export const WithCancel = Template.bind({});
WithCancel.args = {
  withCancel: true,
};

export const IsLoading = Template.bind({});
IsLoading.args = {
  confirmProps: {
    isLoading: true,
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  confirmProps: {
    disabled: true,
  },
};
