import React from 'react';
import * as S from './style';
import ROUTES from '../../../commons/routes';
import { useState } from 'react';
import validator from 'validator';
import { useAppThunkDispatch } from '../../../redux/store';
import { ModalLoading } from '../../index';

import { login } from '../../../redux/actions/auth';

export interface ModalItemProps {}

export const LoginItemModal = ({}: ModalItemProps): React.ReactElement => {
  const dispatch = useAppThunkDispatch();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Loading, setLoading] = useState(false);

  const onEmailHandler = (e: any) => {
    setEmail(e.currentTarget.value);
  };
  const onPasswordHandler = (e: any) => {
    setPassword(e.currentTarget.value);
  };
  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    let body = {
      email: Email,
      password: Password,
    };
    dispatch(login(body)).then(() => {
      window.location.replace('/');
      setLoading(false);
    });
  };
  return (
    <S.AllWrap>
      {Loading ? <ModalLoading /> : ''}
      <S.ModalLoginTitle>로그인</S.ModalLoginTitle>
      <S.ModalLoginForm onSubmit={onSubmitHandler}>
        <S.ModalInput
          placeholder="이메일을 입력해주세요"
          value={Email}
          onChange={onEmailHandler}
          inputType="email"
        />
        {validator.isEmail(Email) ? (
          <S.ModalLoginValid>✔</S.ModalLoginValid>
        ) : (
          <S.ModalLoginInvalid>
            * 이메일을 입력해주시기 바랍니다.
          </S.ModalLoginInvalid>
        )}
        <S.ModalInput
          inputType="password"
          placeholder="비밀번호를 입력해주세요"
          value={Password}
          onChange={onPasswordHandler}
        />
        {validator.isEmpty(Password) ? (
          <S.ModalLoginInvalid>
            * 비밀번호를 입력해주시기 바랍니다.
          </S.ModalLoginInvalid>
        ) : (
          <S.ModalLoginValid>✔</S.ModalLoginValid>
        )}
        <S.ModalLoginCheckWrap>
          <S.ModalInput id="idSave" inputType="checkbox" />
          <S.ModalLabel htmlFor="idSave">아이디 저장</S.ModalLabel>
          <S.ModalRePassword>비밀번호 재설정</S.ModalRePassword>
        </S.ModalLoginCheckWrap>
        {validator.isEmpty(Email) || validator.isEmpty(Password) ? (
          <S.ModalNo>로그인</S.ModalNo>
        ) : (
          <S.ModalBtn btntype="default">로그인</S.ModalBtn>
        )}
      </S.ModalLoginForm>
      <S.ModalAddMem>
        아직 회원이 아니세요?
        <S.ModalLinkState btntype="gray" btnLink={ROUTES.JOIN}>
          이메일로 회원가입
        </S.ModalLinkState>
      </S.ModalAddMem>
    </S.AllWrap>
  );
};
