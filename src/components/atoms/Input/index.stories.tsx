/* eslint-disable prettier/prettier */
import { Meta } from '@storybook/react';
import { Input, InputProps } from './index';

export default {
  title: 'Atoms/Input',
} as Meta;

export const general = (args: InputProps) => <Input {...args} />;
general.args = {
  invaild: false,
  disabled: false,
  placeholder: '입력 해주세요.',
  inputType: 'text',
};
