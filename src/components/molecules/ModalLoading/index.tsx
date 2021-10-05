import React from 'react';
import * as S from './style';
import { PC, Tablet, Mobile } from '../../../MediaQuery';

export interface ModalLoadingProps {}

export const ModalLoading = ({}: ModalLoadingProps): React.ReactElement => {
  return (
    <>
      <Mobile>
        <div>모바일</div>
      </Mobile>
      <Tablet>
        <div>태블릿</div>
      </Tablet>
      <PC>
        <S.PC_Background>
          <S.PC_Box>로딩 중</S.PC_Box>
        </S.PC_Background>
      </PC>
    </>
  );
};
