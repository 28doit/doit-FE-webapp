import React from 'react';
import * as S from './style';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { joinUser } from '../../../redux/actions/user_actions';

export interface ModalItemProps {}

export const RegisterItemModal = ({}: ModalItemProps): React.ReactElement => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [Account, setAccount] = useState({
    nEmail: '',
    nName: '',
    nNickName: '',
    nGender: '',
    nPhone: '',
    nPassword: '',
    nConfirmPassword: '',
    nYear: '',
    nMonth: '',
    nDay: '',
  });
  const [Check, setCheck] = useState(false);

  const {
    nEmail,
    nName,
    nNickName,
    nGender,
    nPhone,
    nPassword,
    nConfirmPassword,
    nYear,
    nMonth,
    nDay,
  } = Account;

  const onChangeAccount = (e: any) => {
    setAccount({
      ...Account,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const onCheckHandler = (e: any) => {
    setCheck(!Check);
  };

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    if (nPassword !== nConfirmPassword) {
      return alert('비밀번호가 일치 하지 않습니다.');
    }
    let body = {
      email: nEmail,
      userName: nName,
      nickName: nNickName,
      //sex: Gender === 'M' ? true : false,
      sex: 1,
      phoneNumber: nPhone,
      password: nPassword,
      userYear: nYear,
      userMonth: nMonth,
      userDay: nDay,
      type: 1,
      gallCount: 0,
      userSubscribeCount: 0,
      profileImageLocation: '1',
    };
    console.log(body);

    const joinResult = dispatch(joinUser(body));

    if (joinResult.payload.success) {
      history.replace('/');
    } else {
      alert('회원가입에 실패 했습니다.');
      history.replace('/join');
    }
  };

  return (
    <>
      <S.ModalCommonTitle>회원가입</S.ModalCommonTitle>
      <S.ModalCommonWrap>
        <S.ModalJoinForm>
          <S.ModalInputWrap>
            <S.ModalRegisterLabel htmlFor="name">이름</S.ModalRegisterLabel>
            <S.ModalRegisterInput
              id="name"
              name="nName"
              inputType="text"
              placeholder="이름"
              value={nName}
              onChange={onChangeAccount}
            />
          </S.ModalInputWrap>
          <S.ModalInputWrap>
            <S.ModalRegisterLabel htmlFor="nickName">
              닉네임
            </S.ModalRegisterLabel>
            <S.ModalRegisterNickName
              id="nickName"
              name="nNickName"
              inputType="text"
              placeholder="닉네임"
              value={nNickName}
              onChange={onChangeAccount}
            />
          </S.ModalInputWrap>
          <S.ModalInputWrap>
            <S.ModalRegisterLabel htmlFor="email">이메일</S.ModalRegisterLabel>
            <S.ModalRegisterEmail
              id="email"
              name="nEmail"
              inputType="email"
              placeholder="이메일"
              value={nEmail}
              onChange={onChangeAccount}
            />
            {/* <S.ModalEmailAt>@</S.ModalEmailAt>
            <S.ModalEmailTail name="" id="">
              <option value="">aa</option>
            </S.ModalEmailTail> */}
          </S.ModalInputWrap>
          <S.ModalInputWrap>
            <S.ModalRegisterLabel htmlFor="password1">
              비밀번호
            </S.ModalRegisterLabel>
            <S.ModalRegisterInput
              id="password1"
              name="nPassword"
              inputType="password"
              value={nPassword}
              placeholder="비밀번호"
              onChange={onChangeAccount}
            />
          </S.ModalInputWrap>
          <S.ModalInputWrap>
            <S.ModalRegisterLabel htmlFor="password2">
              비밀번호 확인
            </S.ModalRegisterLabel>
            <S.ModalRegisterInput
              id="password2"
              name="nConfirmPassword"
              inputType="password"
              value={nConfirmPassword}
              placeholder="비밀번호 확인"
              onChange={onChangeAccount}
            />
          </S.ModalInputWrap>
          <S.ModaleSelectWrap>
            <S.ModalRegisterLabel htmlFor="birth">
              생년월일
            </S.ModalRegisterLabel>
            <S.ModalBirthDiv>
              <S.ModalRegisterBirth
                id="birth"
                inputType="text"
                placeholder="년 (4자)"
                value={nYear}
                name="nYear"
                onChange={onChangeAccount}
              />
              <S.ModalSelect
                onChange={onChangeAccount}
                value={nMonth}
                name="nMonth"
              >
                <option>월</option>
                <option value="01">1월</option>
                <option value="02">2월</option>
                <option value="03">3월</option>
                <option value="04">4월</option>
                <option value="05">5월</option>
                <option value="06">6월</option>
                <option value="07">7월</option>
                <option value="08">8월</option>
                <option value="09">9월</option>
                <option value="10">10월</option>
                <option value="11">11월</option>
                <option value="12">12월</option>
              </S.ModalSelect>
              <S.ModalRegisterBirth
                inputType="text"
                placeholder="일"
                value={nDay}
                name="nDay"
                onChange={onChangeAccount}
              />
            </S.ModalBirthDiv>
          </S.ModaleSelectWrap>
          <S.ModaleSelectWrap>
            <S.ModalRegisterLabel htmlFor="gender">성별</S.ModalRegisterLabel>
            <S.ModalSelect
              id="gender"
              onChange={onChangeAccount}
              value={nGender}
              name="nGender"
            >
              <option>성별</option>
              <option value="M">남자</option>
              <option value="F">여자</option>
            </S.ModalSelect>
          </S.ModaleSelectWrap>
          <S.ModalInputWrap>
            <S.ModalRegisterLabel htmlFor="phone">
              휴대폰 번호
            </S.ModalRegisterLabel>
            <S.ModalTelInput
              id="phone"
              name="nPhone"
              inputType="text"
              placeholder="- 빼고 입력"
              value={nPhone}
              onChange={onChangeAccount}
            />
            {/* <S.ModalTelAt>-</S.ModalTelAt> <S.ModalTelInput inputType="tel" />
            <S.ModalTelAt>-</S.ModalTelAt> <S.ModalTelInput inputType="tel" />
            <S.ModalTelConfirm btntype="secondary">
              인증번호 요청
            </S.ModalTelConfirm> */}
          </S.ModalInputWrap>
          {/* <S.ModalInputWrap>
            <S.ModalTelInputCheck inputType="tel" />
            <S.ModalTelConfirm btntype="secondary">
              인증번호 요청
            </S.ModalTelConfirm>
          </S.ModalInputWrap> */}
          <S.ModalInputWrap>
            <S.ModalRegisterLabel htmlFor="agree">
              약관동의
            </S.ModalRegisterLabel>
            <S.ModalCheck inputType="checkbox" onClick={onCheckHandler} />
          </S.ModalInputWrap>
          {Check ? (
            <S.ModalAgreeYes btntype="submit">회원 가입</S.ModalAgreeYes>
          ) : (
            <S.ModalAgreeNo btntype="gray">
              약관을 동의 해주세요!
            </S.ModalAgreeNo>
          )}
        </S.ModalJoinForm>
      </S.ModalCommonWrap>
    </>
  );
};
