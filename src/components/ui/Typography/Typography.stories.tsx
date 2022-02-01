import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Typography from './Typography';

export default {
  title: 'Ui/Typography',
  component: Typography,
  argTypes: {},
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Sodales neque sodales ut etiam sit amet
    nisl purus in. Neque viverra justo nec ultrices dui sapien eget mi proin. Nunc
    faucibus a pellentesque sit amet. Etiam dignissim diam quis enim. Quis varius quam
    quisque id diam vel quam elementum. Vel elit scelerisque mauris pellentesque
    pulvinar pellentesque habitant. Pretium quam vulputate dignissim suspendisse. Mattis
    vulputate enim nulla aliquet porttitor lacus luctus. Arcu cursus euismod quis
    viverra nibh cras pulvinar. Morbi tristique senectus et netus et malesuada fames ac.
    A condimentum vitae sapien pellentesque. Tempus imperdiet nulla malesuada
    pellentesque elit eget gravida cum. Bibendum neque egestas congue quisque. Malesuada
    pellentesque elit eget gravida cum sociis natoque penatibus. Dolor sit amet
    consectetur adipiscing elit pellentesque. Non enim praesent elementum facilisis leo
    vel fringilla est. Pellentesque habitant morbi tristique senectus et netus et
    malesuada. Amet volutpat consequat mauris nunc congue nisi vitae suscipit. Sit amet
    mattis vulputate enim nulla. Curabitur vitae nunc sed velit dignissim. Morbi enim
    nunc faucibus a. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit
    ullamcorper dignissim. At erat pellentesque adipiscing commodo elit at imperdiet dui
    accumsan. Fusce id velit ut tortor pretium. Sollicitudin ac orci phasellus egestas
    tellus. Pretium fusce id velit ut tortor.
  </Typography>
);

export const Normal = Template.bind({});
Normal.args = {};
