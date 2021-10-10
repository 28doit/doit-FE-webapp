/* eslint-disable prettier/prettier */
import { Meta } from '@storybook/react';
import { UploadImageModal, UploadItemProps } from './index';

export default {
  title: 'Molecules/UploadImage',
} as Meta;

export const Template = (args: UploadItemProps) => (
  <UploadImageModal {...args} />
);
