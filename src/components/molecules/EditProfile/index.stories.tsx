/* eslint-disable prettier/prettier */
import { Meta } from '@storybook/react';
import { EditProfileItem, EditProfileItemProps } from './index';

export default {
  title: 'Molecules/EditProfile',
} as Meta;

export const Template = (args: EditProfileItemProps) => (
  <EditProfileItem {...args} />
);
