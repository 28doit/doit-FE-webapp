import React, { useState } from 'react';
import { useHistory } from 'react-router';
import * as S from './style';
import { re_password } from '../../../redux/services/auth.service';
import ROUTES from '../../../commons/routes';
import { ModalLoadingItem } from '../../index';
import { PC, Tablet, Mobile } from '../../../MediaQuery';

export interface ModalRePasswordItemProps {}

export const ModalRePasswordItem =
  ({}: ModalRePasswordItemProps): React.ReactElement => {
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
                {ReOk ? <PC_SuccessModal /> : ''}
                <S.PC_Title>비밀번호 재설정</S.PC_Title>
                <S.PC_Form onSubmit={onSubmitHandler}>
                  <S.PC_Box box="input">
                    <S.PC_Label htmlFor="reName">이름</S.PC_Label>
                    <S.PC_Input
                      id="reName"
                      name="Name"
                      value={Name}
                      placeholder="이름을 입력해주세요"
                      inputType="text"
                      onChange={onChangeUser}
                    />
                  </S.PC_Box>
                  <S.PC_Box box="input">
                    <S.PC_Label htmlFor="reEmail">이메일</S.PC_Label>
                    <S.PC_Input
                      id="reEmail"
                      name="Email"
                      value={Email}
                      placeholder="이메일을 입력하세요"
                      inputType="text"
                      onChange={onChangeUser}
                    />
                  </S.PC_Box>
                  <S.PC_Box box="input">
                    <S.PC_Label htmlFor="rePhone">전화 번호</S.PC_Label>
                    <S.PC_Input
                      id="rePhone"
                      name="Phone"
                      value={Phone}
                      placeholder="- 빼고 입력"
                      inputType="text"
                      onChange={onChangeUser}
                    />
                  </S.PC_Box>
                  <S.PC_Btn b_type="default" btntype="default">
                    확인
                  </S.PC_Btn>
                </S.PC_Form>
              </S.PC_Container>
            </S.PC_Inner>
          </S.PC_Overlay>
        </PC>
      </>
    );
  };

export const PC_SuccessModal = (): React.ReactElement => {
  const history = useHistory();
  const onReOkHandler = (e: any) => {
    e.preventDefault();
    history.replace(ROUTES.LOGIN);
  };
  return (
    <S.PC_Background>
      <S.PC_Box box="success">
        이메일을 확인해주세요!
        <S.PC_Btn b_type="success" btnOnClick={onReOkHandler}>
          로그인 화면으로
        </S.PC_Btn>
      </S.PC_Box>
    </S.PC_Background>
  );
};
