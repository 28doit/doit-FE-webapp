/* eslint-disable prettier/prettier */
import { Meta } from '@storybook/react';
import { ModalLoginItem, ModalLoginItemProps } from './index';

export default {
  title: 'Molecules/ModalLogin',
} as Meta;

export const Template = (args: ModalLoginItemProps) => (
  <ModalLoginItem {...args} />
);
