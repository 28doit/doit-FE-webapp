import React from 'react';
import * as S from './style';

export interface BtnProps {
  children?: React.ReactElement | string;
  disable?: boolean;
  btntype?: string;
  btnOnClick?: (e: any) => void;
  btnId?: string;
}

export interface LinkBtnProps extends BtnProps {
  btnLink: string;
}

export const Btn = ({
  children,
  btnOnClick,
  btnId,
  ...props
}: BtnProps): React.ReactElement => {
  return (
    <S.Btn onClick={btnOnClick} id={btnId} {...props}>
      {children}
    </S.Btn>
  );
};

export const LinkBtn = ({
  children,
  btnLink,
  btnOnClick,
  btnId,
  ...props
}: LinkBtnProps): React.ReactElement => {
  return (
    <S.LinkBtn onClick={btnOnClick} to={btnLink} id={btnId} {...props}>
      {children}
    </S.LinkBtn>
  );
};
