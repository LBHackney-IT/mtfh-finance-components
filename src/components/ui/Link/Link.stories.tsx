import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Link from './Link';

export default {
  title: 'Ui/Link',
  component: Link,
  argTypes: {},
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => (
  <Link {...args}>Link Name</Link>
);

export const Normal = Template.bind({});
Normal.args = {
  className: '',
  href: '/about-us',
};
