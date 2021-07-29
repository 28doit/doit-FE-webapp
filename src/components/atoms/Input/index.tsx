import React from 'react';
import * as S from './style';

export interface InputProps {
  id?: string;
  inputType?: string;
  invalid?: boolean;
  disabled?: boolean;
  defaultValue?: string;
  placeholder?: string;
  value?: string | number;
  height?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent) => void;
}

export const Input = ({
  id,
  inputType,
  ...props
}: InputProps): React.ReactElement => {
  return (
    <>
      <S.Input type={inputType} id={id} autoComplete="off" {...props} />
    </>
  );
};
