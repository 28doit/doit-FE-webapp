/* eslint-disable prettier/prettier */
import { Meta } from '@storybook/react';
import { UploadImageItem, UploadImageItemProps } from './index';

export default {
  title: 'Molecules/UploadImage',
} as Meta;

export const Template = (args: UploadImageItemProps) => (
  <UploadImageItem {...args} />
);
