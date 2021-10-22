import React, { useEffect, useState } from 'react';
import * as S from './style';
import ROUTES from '../../../commons/routes';
import validator from 'validator';
import { useAppThunkDispatch } from '../../../redux/store';
import { ModalLoadingItem } from '../../index';
import { Nlogin } from '../../../redux/actions/auth';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { PC, Tablet, Mobile } from '../../../MediaQuery';

export interface ModalLoginItemProps {}

export const ModalLoginItem = ({}: ModalLoginItemProps): React.ReactElement => {
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
        if (data.email && data.token && data.isValue === 1) {
          history.replace(ROUTES.HOME);
        } else if (data.isValue === 2) {
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
    <>
      <Mobile>
        <div>모바일</div>
      </Mobile>
      <Tablet>
        <div>태블릿</div>
      </Tablet>
      <PC>
        <S.PC_Overlay>
          <S.PC_Inner>
            <S.PC_Container>
              {Loading ? <ModalLoadingItem /> : ''}
              <S.PC_Title>로그인</S.PC_Title>
              <S.PC_Form onSubmit={onSubmitHandler}>
                <S.PC_Input
                  placeholder="이메일을 입력해주세요"
                  value={Email}
                  onChange={onEmailHandler}
                  inputType="email"
                />
                {validator.isEmail(Email) ? (
                  <S.PC_Span s_type="valid">✔</S.PC_Span>
                ) : (
                  <S.PC_Span s_type="invalid">
                    * 이메일을 입력해주시기 바랍니다.
                  </S.PC_Span>
                )}
                <S.PC_Input
                  inputType="password"
                  placeholder="비밀번호를 입력해주세요"
                  value={Password}
                  onChange={onPasswordHandler}
                />
                {validator.isEmpty(Password) ? (
                  <S.PC_Span s_type="invalid">
                    * 비밀번호를 입력해주시기 바랍니다.
                  </S.PC_Span>
                ) : (
                  <S.PC_Span s_type="valid">✔</S.PC_Span>
                )}
                <S.PC_CheckWrap>
                  <S.PC_Input id="idSave" inputType="checkbox" />
                  <S.PC_Label htmlFor="idSave">아이디 저장</S.PC_Label>
                  <S.PC_Span onClick={onRePasswordHandler} s_type="repwd">
                    비밀번호 재설정
                  </S.PC_Span>
                </S.PC_CheckWrap>
                {validator.isEmpty(Email) || validator.isEmpty(Password) ? (
                  <S.PC_No>로그인</S.PC_No>
                ) : (
                  <S.PC_Btn btntype="default">로그인</S.PC_Btn>
                )}
              </S.PC_Form>
              <S.PC_Join>
                아직 회원이 아니세요?
                <S.PC_LinkState btntype="gray" btnLink={ROUTES.JOIN}>
                  이메일로 회원가입
                </S.PC_LinkState>
              </S.PC_Join>
            </S.PC_Container>
          </S.PC_Inner>
        </S.PC_Overlay>
      </PC>
    </>
  );
};
