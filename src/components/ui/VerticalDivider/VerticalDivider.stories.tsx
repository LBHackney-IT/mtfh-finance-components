import type { ComponentMeta, ComponentStory } from '@storybook/react';
import VerticalDivider from './VerticalDivider';

export default {
  title: 'Ui/VerticalDivider',
  component: VerticalDivider,
  argTypes: {},
} as ComponentMeta<typeof VerticalDivider>;

const Template: ComponentStory<typeof VerticalDivider> = (args) => (
  <div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur sapien
    a est commodo, a tempor mauris lacinia. Sed sed nulla placerat, rhoncus leo sed,
    semper turpis. Nulla facilisi. Sed id risus facilisis eros hendrerit porta ac vel
    purus. Ut eget iaculis erat. Donec eget semper odio, eu tristique augue. Phasellus
    tristique risus et ultrices ullamcorper. Proin eget lacinia arcu, vel eleifend
    justo.
    <VerticalDivider {...args} />; Lorem ipsum dolor sit amet, consectetur adipiscing
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
