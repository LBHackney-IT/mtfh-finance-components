import type { ComponentMeta, ComponentStory } from '@storybook/react';
import FileInput from './FileInput';

export default {
  title: 'Ui/FileInput',
  component: FileInput,
  argTypes: {},
} as ComponentMeta<typeof FileInput>;

const Template: ComponentStory<typeof FileInput> = (args) => <FileInput {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  id: 'id',
  name: 'file',
  label: 'This is label',
};
