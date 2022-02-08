import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Popup from './Popup';

export default {
  title: 'Layout/Popup',
  component: Popup,
  argTypes: {},
} as ComponentMeta<typeof Popup>;

const Template: ComponentStory<typeof Popup> = (args) => <Popup {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    trigger: "Hover me",
    bottomText: "This is the bottom text",
    topText: "This is the top text",
    goTo: "/home"
};
