/* eslint-disable prettier/prettier */
import { Meta } from '@storybook/react';
import { RegisterItemModal, ModalItemProps } from './index';

export default {
  title: 'Molecules/ModalJoin',
} as Meta;

export const Template = (args: ModalItemProps) => (
  <RegisterItemModal {...args} />
);
