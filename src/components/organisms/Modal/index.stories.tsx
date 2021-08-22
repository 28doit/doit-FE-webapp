/* eslint-disable prettier/prettier */
import { Meta } from '@storybook/react/types-6-0';
import {
  ModalProps,
  LoginModal,
  RegisterModal,
  RePassword,
  EditProfile,
  UploadImage,
} from './index';

export default {
  title: 'Organisms/Modal',
} as Meta;

export const Login = () => <LoginModal />;

export const Register = () => <RegisterModal />;

export const Edit = () => <EditProfile />;

export const RePwd = () => <RePassword />;

export const UploadImg = () => <UploadImage />;
