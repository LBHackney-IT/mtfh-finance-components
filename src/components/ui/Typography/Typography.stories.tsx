import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Typography from './Typography';
import type { TypographySize } from './index';

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

export const H1 = Template.bind({});
H1.args = {
  variant: 'h1',
};

export const H2 = Template.bind({});
H2.args = {
  variant: 'h2',
};

export const H3 = Template.bind({});
H3.args = {
  variant: 'h3',
};

export const H4 = Template.bind({});
H4.args = {
  variant: 'h4',
};

export const H5 = Template.bind({});
H5.args = {
  variant: 'h5',
};

export const CaptionM = Template.bind({});
CaptionM.args = {
  variant: 'caption',
  size: 'm',
};

export const CaptionL = Template.bind({});
CaptionL.args = {
  variant: 'caption',
  size: 'l',
};

export const CaptionXl = Template.bind({});
CaptionXl.args = {
  variant: 'caption',
  size: 'xl',
};

export const BodyL = Template.bind({});
BodyL.args = {
  variant: 'body',
  size: 'l',
};

export const BodyM = Template.bind({});
BodyM.args = {
  variant: 'body',
  size: 'm',
};

export const BodyS = Template.bind({});
BodyS.args = {
  variant: 'body',
  size: 's',
};

export const BodyXs = Template.bind({});
BodyXs.args = {
  variant: 'body',
  size: 'xs',
};

export const Weight300 = Template.bind({});
Weight300.args = {
  size: 300 as unknown as TypographySize,
};

export const Weight400 = Template.bind({});
Weight400.args = {
  size: 400 as unknown as TypographySize,
};

export const Weight600 = Template.bind({});
Weight600.args = {
  size: 600 as unknown as TypographySize,
};

export const Weight700 = Template.bind({});
Weight700.args = {
  size: 700 as unknown as TypographySize,
};
