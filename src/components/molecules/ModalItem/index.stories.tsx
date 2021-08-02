/* eslint-disable prettier/prettier */
import React from 'react';
import { Meta } from '@storybook/react';
import { LoginModal, RegisterModal, ModalItemProps } from './index';

export default {
  title: 'Molecules/ModalItem',
} as Meta;

export const Template1 = (args: ModalItemProps) => <LoginModal {...args} />;
export const Template2 = (args: ModalItemProps) => <RegisterModal {...args} />;
