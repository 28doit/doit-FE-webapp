import React from 'react';
import * as S from './style';

export interface BtnProps {
  children?: React.ReactElement | string;
  disable?: boolean;
  btntype?: string;
  btnOnClick?: (e: any) => void;
}

export interface LinkBtnProps extends BtnProps {
  btnLink: string;
}

export const Btn = ({
  children,
  btnOnClick,
  ...props
}: BtnProps): React.ReactElement => {
  return (
    <S.Btn onClick={btnOnClick} {...props}>
      {children}
    </S.Btn>
  );
};

export const LinkBtn = ({
  children,
  btnLink,
  btnOnClick,
  ...props
}: LinkBtnProps): React.ReactElement => {
  return (
    <S.LinkBtn onClick={btnOnClick} to={btnLink} {...props}>
      {children}
    </S.LinkBtn>
  );
};
