import * as S from './style';
import React from 'react';
import ROUTES from '../../../commons/routes';
import { PC, Tablet, Mobile } from '../../../MediaQuery';

export interface NoticeItemProps {}

export const NoticeItem = ({}: NoticeItemProps): React.ReactElement => {
  const onJoinEmailClick = (e: any) => {
    return window.location.replace(`${ROUTES.LOGIN}`);
  };

  return (
    <>
      <Mobile>
        <div>모바일</div>
      </Mobile>
      <Tablet>
        <div>태블릿</div>
      </Tablet>
      <PC>
        <S.PC_Container>
          <S.PC_Box>
            <S.PC_H1>
              회원가입시에 이용한 이메일을 이용하여 인증을 해주시기 바랍니다.
            </S.PC_H1>
            <S.PC_P>
              이메일 인증을 하지 않을 경우 로그인이 불가능 합니다.
            </S.PC_P>
            <S.PC_Btn btnOnClick={onJoinEmailClick}>로그인 하러 가기</S.PC_Btn>
          </S.PC_Box>
        </S.PC_Container>
      </PC>
    </>
  );
};
