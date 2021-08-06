/* eslint-disable prettier/prettier */
import { Meta } from '@storybook/react';
import { FormInput, FormInputProps } from './index';

export default {
  title: 'Molecules/FormInput',
} as Meta;

export const general = (args: FormInputProps) => <FormInput {...args} />;
general.args = {
  disabled: false,
  required: false,
  invalid: true,
  captionContent: '에러',
  placeholder: '이메일을 입력해 주세요',
  inputTitle: '이에일 타이틀',
  buttonContent: '검색',
};
