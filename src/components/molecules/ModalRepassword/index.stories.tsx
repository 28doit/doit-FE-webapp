/* eslint-disable prettier/prettier */
import { Meta } from '@storybook/react';
import { ModalRePasswordItem, ModalRePasswordItemProps } from './index';

export default {
  title: 'Molecules/ModalRePassword',
} as Meta;

export const Template = (args: ModalRePasswordItemProps) => (
  <ModalRePasswordItem {...args} />
);
