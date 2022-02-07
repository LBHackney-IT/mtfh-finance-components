import type { ComponentMeta, ComponentStory } from '@storybook/react';
import EmailLink from './EmailLink';

export default {
  title: 'Ui/EmailLink',
  component: EmailLink,
  argTypes: {},
} as ComponentMeta<typeof EmailLink>;

const Template: ComponentStory<typeof EmailLink> = (args) => <EmailLink {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  href: 'example@test.com',
};
