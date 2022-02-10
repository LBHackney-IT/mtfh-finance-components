import type { ComponentMeta, ComponentStory } from '@storybook/react';
import HorizontalDivider from './HorizontalDivider';

export default {
  title: 'Ui/HorizontalDivider',
  component: HorizontalDivider,
  argTypes: {},
} as ComponentMeta<typeof HorizontalDivider>;

const Template: ComponentStory<typeof HorizontalDivider> = (args) => (
  <div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur sapien
    a est commodo, a tempor mauris lacinia. Sed sed nulla placerat, rhoncus leo sed,
    semper turpis. Nulla facilisi. Sed id risus facilisis eros hendrerit porta ac vel
    purus. Ut eget iaculis erat. Donec eget semper odio, eu tristique augue. Phasellus
    tristique risus et ultrices ullamcorper. Proin eget lacinia arcu, vel eleifend
    justo.
    <HorizontalDivider {...args} />; Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Curabitur efficitur sapien a est commodo, a tempor mauris lacinia. Sed sed
    nulla placerat, rhoncus leo sed, semper turpis. Nulla facilisi. Sed id risus
    facilisis eros hendrerit porta ac vel purus. Ut eget iaculis erat. Donec eget semper
    odio, eu tristique augue. Phasellus tristique risus et ultrices ullamcorper. Proin
    eget lacinia arcu, vel eleifend justo.
  </div>
);

export const Normal = Template.bind({});
Normal.args = {
  className: '',
};
