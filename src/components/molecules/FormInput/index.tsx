import React from 'react';
import * as S from './style';
import BIcon from '../../../assets/cats.svg';

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
}

export const FormInput = ({
  children,
  invalid,
  captionContent,
  htmlFor,
  inputTitle,
  buttonContent,
  ...props
}: FormInputProps): React.ReactElement => {
  return (
    <>
      {children && htmlFor ? (
        <S.FormInputContainer>
          <S.FormLabel htmlFor={htmlFor} {...props}>
            {children}
          </S.FormLabel>
          <S.FormInput id={htmlFor} {...props} />
          {invalid && (
            <S.FormCaption {...props}>{captionContent}</S.FormCaption>
          )}
        </S.FormInputContainer>
      ) : (
        <S.FormInputContainer>
          <S.FormBtn btntype="border_none">
            {buttonContent ? (
              buttonContent
            ) : (
              <S.SearchIcon src={BIcon} alt="검색 아이콘" />
            )}
          </S.FormBtn>
          <S.FormInput {...props} />
        </S.FormInputContainer>
      )}
    </>
  );
};
