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
general.args = {
  imgSrc: Test,
  isSubscribe: true,
  proFileImg: ProImg,
  isAuthSubScribe: true,
  author: 'poeynus',
  likePeople: '20',
  viewCount: 1123,
  downloadCount: 234,
  likeCount: 532,
  resolution: '6240X4160 / 72dpi(웹용)',
  imgSize: '7.16MB',
  uploadDate: '2021년 8월 26일',
  cameraInfo: 'Canon EOS 6D Mark II',
  locationInfo: '경상북도',
};
