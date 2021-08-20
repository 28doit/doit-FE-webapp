import React, { useState } from 'react';
import { useHistory } from 'react-router';
import * as S from './style';
import { re_password } from '../../../redux/services/auth.service';
import ROUTES from '../../../commons/routes';
import { ModalLoading } from '../../index';

export interface ModalItemProps {}

export const RePasswordModal = ({}: ModalItemProps): React.ReactElement => {
  const history = useHistory();
  const [ReOk, setReOk] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [User, setUser] = useState({
    Email: '',
    Name: '',
    Phone: '',
  });
  const { Email, Name, Phone } = User;

  const onChangeUser = (e: any) => {
    setUser({
      ...User,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    setLoading(true);
    re_password(Email, Name, Phone)
      .then((response) => {
        console.log(response);
        setLoading(true);
        response.data ? setReOk(true) : alert('정보가 일치 하지 않습니다.'),
          history.replace(ROUTES.REPASSWORD);
      })
      .catch(() => {
        alert(
          '잠시 오류가 발생하였습니다. 잠시 후 다시 시도해주시기 바랍니다.',
        );
        window.location.replace(ROUTES.REPASSWORD);
      });
  };

  return (
    <S.RePasswordContainer>
      {Loading ? <ModalLoading /> : ''}
      {ReOk ? <RePasswordSuccessModal /> : ''}
      <S.RePasswordTitle>비밀번호 재설정</S.RePasswordTitle>
      <S.RePasswordForm onSubmit={onSubmitHandler}>
        <S.RePasswordInputWrap>
          <S.RePasswordLabel htmlFor="reName">이름</S.RePasswordLabel>
          <S.RePasswordInput
            id="reName"
            name="Name"
            value={Name}
            placeholder="이름을 입력해주세요"
            inputType="text"
            onChange={onChangeUser}
          />
        </S.RePasswordInputWrap>
        <S.RePasswordInputWrap>
          <S.RePasswordLabel htmlFor="reEmail">이메일</S.RePasswordLabel>
          <S.RePasswordInput
            id="reEmail"
            name="Email"
            value={Email}
            placeholder="이메일을 입력하세요"
            inputType="text"
            onChange={onChangeUser}
          />
        </S.RePasswordInputWrap>
        <S.RePasswordInputWrap>
          <S.RePasswordLabel htmlFor="rePhone">전화 번호</S.RePasswordLabel>
          <S.RePasswordInput
            id="rePhone"
            name="Phone"
            value={Phone}
            placeholder="- 빼고 입력"
            inputType="text"
            onChange={onChangeUser}
          />
        </S.RePasswordInputWrap>
        <S.RePasswordBtn btntype="default">확인</S.RePasswordBtn>
      </S.RePasswordForm>
    </S.RePasswordContainer>
  );
};

export const RePasswordSuccessModal =
  ({}: ModalItemProps): React.ReactElement => {
    const history = useHistory();
    const onReOkHandler = (e: any) => {
      e.preventDefault();
      history.replace(ROUTES.LOGIN);
    };
    return (
      <S.SuccessBackground>
        <S.SuccessBox>
          이메일을 확인해주세요!
          <S.SuccessBtn btnOnClick={onReOkHandler}>
            로그인 화면으로
          </S.SuccessBtn>
        </S.SuccessBox>
      </S.SuccessBackground>
    );
  };
