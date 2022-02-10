import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Loader from './Loader';

export default {
  title: 'Ui/Loader',
  component: Loader,
  argTypes: {},
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Loading = Template.bind({});
Loading.args = { isLoading: true };
