/* eslint-disable prettier/prettier */
import { Meta } from '@storybook/react';
import { ModalFindIdItem, ModalFindIdItemProps } from './index';

export default {
  title: 'Molecules/ModalFindId',
} as Meta;

export const Template = (args: ModalFindIdItemProps) => (
  <ModalFindIdItem {...args} />
);
