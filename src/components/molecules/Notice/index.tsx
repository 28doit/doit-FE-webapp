import * as S from './style';
import React from 'react';
import ROUTES from '../../../commons/routes';

export interface NoticeProps {}

export const NoticeItem = ({}: NoticeProps): React.ReactElement => {
  const onJoinEmailClick = (e: any) => {
    return window.location.replace(`${ROUTES.LOGIN}`);
  };

  return (
    <S.NoticeContainer>
      <S.NoticeBox>
        <S.NoticeH1>
          회원가입시에 이용한 이메일을 이용하여 인증을 해주시기 바랍니다.
        </S.NoticeH1>
        <S.NoticeP>
          이메일 인증을 하지 않을 경우 로그인이 불가능 합니다.
        </S.NoticeP>
        <S.NoticeBtn btnOnClick={onJoinEmailClick}>
          로그인 하러 가기
        </S.NoticeBtn>
      </S.NoticeBox>
    </S.NoticeContainer>
  );
};
