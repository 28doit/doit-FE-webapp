/* eslint-disable prettier/prettier */
import { Story, Meta } from '@storybook/react';
import { ImageDetailItem, ImageDetailItemProps } from './index';
import Test from '../../../assets/test3.jpg';
import ProImg from '../../../assets/shiba.svg';

export default {
  title: 'Organisms/ImageDetail',
  component: ImageDetailItem,
} as Meta;

const Template: Story<ImageDetailItemProps> = (args) => (
  <ImageDetailItem {...args} />
);

export const general = Template.bind({});
