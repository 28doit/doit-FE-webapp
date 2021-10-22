/* eslint-disable prettier/prettier */
import { Meta } from '@storybook/react';
import { ModalRegisterItem, RegisterItemProps } from './index';

export default {
  title: 'Molecules/ModalJoin',
} as Meta;

export const Template = (args: RegisterItemProps) => (
  <ModalRegisterItem {...args} />
);
