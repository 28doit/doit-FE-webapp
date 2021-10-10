/* eslint-disable prettier/prettier */
import { Story, Meta } from '@storybook/react';
import { ImageDetail, ImageDetailProps } from './index';
import Test from '../../../assets/test3.jpg';
import ProImg from '../../../assets/shiba.svg';

export default {
  title: 'Organisms/ImageDetail',
  component: ImageDetail,
} as Meta;

const Template: Story<ImageDetailProps> = (args) => <ImageDetail {...args} />;

export const general = Template.bind({});

