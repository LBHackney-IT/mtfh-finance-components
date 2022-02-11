import type { ComponentMeta, ComponentStory } from '@storybook/react';
import OverlayModal from './OverlayModal';

export default {
  title: 'Modals/OverlayModal',
  component: OverlayModal,
  argTypes: {},
} as ComponentMeta<typeof OverlayModal>;

const Template: ComponentStory<typeof OverlayModal> = (args) => (
  <OverlayModal {...args}>
    <div>Overlay modal content</div>
  </OverlayModal>
);

export const Open = Template.bind({});
Open.args = {
  isOpen: true,
};
