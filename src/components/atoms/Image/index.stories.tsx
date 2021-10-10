/* eslint-disable prettier/prettier */
import { Meta } from '@storybook/react';
import { Image, ImageProps } from './index';
import Cats from '../../../assets/cats.svg';

export default {
  title: 'Atoms/Image',
} as Meta;

export const general = (args: ImageProps) => <Image {...args} />;
general.args = {
  src: Cats,
  alt: '테스트 로고',
};
