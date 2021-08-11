import React from 'react';
import * as S from './style';

export interface ModalLoadingProps {}

export const ModalLoading = ({}: ModalLoadingProps): React.ReactElement => {
  return (
    <S.LoadingBackground>
      <S.LoadingBox>로딩 중</S.LoadingBox>
    </S.LoadingBackground>
  );
};
