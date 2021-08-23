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
  name?: string;
  inputAccept?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent) => void;
  onClick?: (e: any) => void;
}

export const Input = ({
  id,
  inputType,
  inputAccept,
  ...props
}: InputProps): React.ReactElement => {
  return (
    <>
      <S.Input
        type={inputType}
        id={id}
        autoComplete="off"
        accept={inputAccept}
        {...props}
      />
    </>
  );
};
