/* eslint-disable prettier/prettier */
import { Meta } from '@storybook/react';
import { EditProfileModal, ModalItemProps } from './index';

export default {
  title: 'Molecules/EditProfile',
} as Meta;

export const Template = (args: ModalItemProps) => (
  <EditProfileModal {...args} />
);
