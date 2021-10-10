/* eslint-disable prettier/prettier */
import { Meta } from '@storybook/react';
import { LoginItemModal, ModalItemProps } from './index';

export default {
  title: 'Molecules/ModalLogin',
} as Meta;

export const Template = (args: ModalItemProps) => <LoginItemModal {...args} />;
