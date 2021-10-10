import React from 'react';
import * as S from './style';
import BIcon from '../../../assets/search.svg';

export interface FormInputProps {
  htmlFor?: string;
  children?: string | React.ReactElement;
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
  invalid?: boolean;
  captionContent?: string;
  inputTitle?: string;
  buttonContent?: string;
  value?: string | number;
  formClcik?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormInput = ({
  children,
  invalid,
  captionContent,
  htmlFor,
  inputTitle,
  buttonContent,
  formClcik,
  ...props
}: FormInputProps): React.ReactElement => {
  return (
    <S.FormInputContainer>
      <S.FormInput {...props} />
      {invalid && <S.FormCaption {...props}>{captionContent}</S.FormCaption>}
      <S.FormBtn btntype="default" btnOnClick={formClcik}>
        {buttonContent ? (
          buttonContent
        ) : (
          <S.SearchIcon src={BIcon} alt="검색 아이콘" />
        )}
      </S.FormBtn>
    </S.FormInputContainer>
  );
};
