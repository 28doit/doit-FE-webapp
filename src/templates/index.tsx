import React from 'react';
import * as S from './style';
import { Header } from '../components/index';

export interface BaseProps {
  children: React.ReactNode;
  full?: boolean;
}

export const BaseTemplate = ({
  full,
  children,
}: BaseProps): React.ReactElement => {
  return (
    <S.Container>
      <S.HeaderWrap>
        <Header />
      </S.HeaderWrap>
      {full ? (
        <S.BaseWrap full>{children}</S.BaseWrap>
      ) : (
        <S.BaseWrap className="inner">{children}</S.BaseWrap>
      )}
    </S.Container>
  );
};
