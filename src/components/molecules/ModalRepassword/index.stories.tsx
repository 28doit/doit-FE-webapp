/* eslint-disable prettier/prettier */
import { Meta } from '@storybook/react';
import { RePasswordModal, ModalItemProps } from './index';

export default {
  title: 'Molecules/ModalRePassword',
} as Meta;

export const Template = (args: ModalItemProps) => <RePasswordModal {...args} />;
