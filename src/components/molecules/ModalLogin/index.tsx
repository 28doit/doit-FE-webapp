import React from 'react';
import * as S from './style';
import ROUTES from '../../../commons/routes';
export interface ModalItemProps {}

export function LoginItemModal({}: ModalItemProps): React.ReactElement {
  return (
    <>
      <S.ModalLoginTitle>로그인</S.ModalLoginTitle>
      <S.ModalInput placeholder="아이디" />
      <S.ModalInput inputType="password" placeholder="비밀번호" />
      <S.ModalLoginCheckWrap>
        <S.ModalInput id="idSave" inputType="checkbox" />
        <S.ModalLabel htmlFor="idSave">아이디 저장</S.ModalLabel>
        <S.ModalRePassword>비밀번호 재설정</S.ModalRePassword>
      </S.ModalLoginCheckWrap>
      <S.ModalBtn btnType="secondary">로그인</S.ModalBtn>
      <S.ModalAddMem>
        아직 회원이 아니세요?
        <S.ModalLinkState btnType="gray" btnLink={ROUTES.JOIN}>
          이메일로 회원가입
        </S.ModalLinkState>
      </S.ModalAddMem>
    </>
  );
}
