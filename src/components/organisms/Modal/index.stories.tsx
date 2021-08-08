/* eslint-disable prettier/prettier */
import { Meta } from '@storybook/react/types-6-0';
import { LoginModal, RegisterModal, ModalProps } from './index';

export default {
  title: 'Organisms/Modal',
} as Meta;

export const Login = () => <LoginModal />;

export const Register = () => <RegisterModal />;
