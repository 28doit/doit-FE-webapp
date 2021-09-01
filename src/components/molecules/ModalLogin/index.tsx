import React, { useEffect, useState } from 'react';
import * as S from './style';
import ROUTES from '../../../commons/routes';
import validator from 'validator';
import { useAppThunkDispatch } from '../../../redux/store';
import { ModalLoading } from '../../index';
import { Nlogin } from '../../../redux/actions/auth';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

export interface ModalItemProps {}

export const LoginItemModal = ({}: ModalItemProps): React.ReactElement => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const history = useHistory();

  useEffect(() => {
    currentUser
      ? (history.replace(ROUTES.HOME), alert('이미 로그인 한 유저입니다.'))
      : '';
  }, []);

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
  const onRePasswordHandler = (e: any) => {
    e.preventDefault();
    history.replace('/re-password');
  };
  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    dispatch(Nlogin(Email, Password))
      .then((data) => {
        setLoading(false);
        console.log(data);
        if (data.name && data.token && data.isvalue === 1) {
          history.replace(ROUTES.HOME);
        } else if (data.isvalue === 2) {
          alert('이메일로 가서 인증을 완료해주시기 바랍니다.');
          window.location.replace(ROUTES.LOGIN);
        } else {
          alert('비밀번호 또는 이메일이 틀렸습니다.');
          window.location.replace(ROUTES.LOGIN);
        }
      })
      .catch(() => {
        alert(
          '잠시 오류가 발생하였습니다. 잠시 후 다시 시도해주시기 바랍니다.',
        );
        setLoading(false);
        window.location.replace(ROUTES.LOGIN);
      });
  };

  return (
    <S.LoginContainer>
      {Loading ? <ModalLoading /> : ''}
      <S.LoginTitle>로그인</S.LoginTitle>
      <S.LoginForm onSubmit={onSubmitHandler}>
        <S.LoginInput
          placeholder="이메일을 입력해주세요"
          value={Email}
          onChange={onEmailHandler}
          inputType="email"
        />
        {validator.isEmail(Email) ? (
          <S.LoginValid>✔</S.LoginValid>
        ) : (
          <S.LoginInvalid>* 이메일을 입력해주시기 바랍니다.</S.LoginInvalid>
        )}
        <S.LoginInput
          inputType="password"
          placeholder="비밀번호를 입력해주세요"
          value={Password}
          onChange={onPasswordHandler}
        />
        {validator.isEmpty(Password) ? (
          <S.LoginInvalid>* 비밀번호를 입력해주시기 바랍니다.</S.LoginInvalid>
        ) : (
          <S.LoginValid>✔</S.LoginValid>
        )}
        <S.LoginCheckWrap>
          <S.LoginInput id="idSave" inputType="checkbox" />
          <S.LoginLabel htmlFor="idSave">아이디 저장</S.LoginLabel>
          <S.LoginRePassword onClick={onRePasswordHandler}>
            비밀번호 재설정
          </S.LoginRePassword>
        </S.LoginCheckWrap>
        {validator.isEmpty(Email) || validator.isEmpty(Password) ? (
          <S.LoginNo>로그인</S.LoginNo>
        ) : (
          <S.LoginBtn btntype="default">로그인</S.LoginBtn>
        )}
      </S.LoginForm>
      <S.GoToJoin>
        아직 회원이 아니세요?
        <S.LoginLinkState btntype="gray" btnLink={ROUTES.JOIN}>
          이메일로 회원가입
        </S.LoginLinkState>
      </S.GoToJoin>
    </S.LoginContainer>
  );
};
