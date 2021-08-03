import React from 'react';
import * as S from './style';
import ROUTES from '../../../commons/routes';
export interface ModalItemProps {}

export function RegisterItemModal({}: ModalItemProps): React.ReactElement {
  return (
    <>
      <S.ModalCommonTitle>회원가입</S.ModalCommonTitle>
      <S.ModalCommonWrap>
        <S.ModalInputWrap>
          <S.ModalRegisterLabel htmlFor="name">이름</S.ModalRegisterLabel>
          <S.ModalRegisterInput id="name" />
        </S.ModalInputWrap>
        <S.ModalInputWrap>
          <S.ModalRegisterLabel htmlFor="email">이메일</S.ModalRegisterLabel>
          <S.ModalRegisterEmail id="email" /> <S.ModalEmailAt>@</S.ModalEmailAt>
          <S.ModalEmailTail name="" id="">
            <option value="">aa</option>
          </S.ModalEmailTail>
        </S.ModalInputWrap>
        <S.ModalInputWrap>
          <S.ModalRegisterLabel htmlFor="password1">
            비밀번호
          </S.ModalRegisterLabel>
          <S.ModalRegisterInput id="password1" inputType="password" />
        </S.ModalInputWrap>
        <S.ModalInputWrap>
          <S.ModalRegisterLabel htmlFor="password2">
            비밀번호 확인
          </S.ModalRegisterLabel>
          <S.ModalRegisterInput id="password2" inputType="password" />
        </S.ModalInputWrap>
        <S.ModalInputWrap>
          <S.ModalRegisterLabel htmlFor="tel">휴대폰 번호</S.ModalRegisterLabel>
          <S.ModalTelInput id="tel" inputType="tel" />
          <S.ModalTelAt>-</S.ModalTelAt> <S.ModalTelInput inputType="tel" />
          <S.ModalTelAt>-</S.ModalTelAt> <S.ModalTelInput inputType="tel" />
          <S.ModalTelConfirm btnType="secondary">
            인증번호 요청
          </S.ModalTelConfirm>
        </S.ModalInputWrap>
        <S.ModalInputWrap>
          {/* <S.ModalRegisterLabel htmlFor="tel"></S.ModalRegisterLabel> */}
          <S.ModalTelInputCheck inputType="tel" />
          <S.ModalTelConfirm btnType="secondary">
            인증번호 요청
          </S.ModalTelConfirm>
        </S.ModalInputWrap>
      </S.ModalCommonWrap>
      <S.ModalBtn btnType="secondary">이메일 회원가입</S.ModalBtn>
    </>
  );
}
