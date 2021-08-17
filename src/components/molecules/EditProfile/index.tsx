import React, { useEffect, useState } from 'react';
import * as S from './style';
import { useHistory } from 'react-router-dom';
import { useAppThunkDispatch } from '../../../redux/store';
import validator from 'validator';
import { useSelector } from 'react-redux';

export interface ModalItemProps {}

export const EditProfileModal = ({}: ModalItemProps): React.ReactElement => {
  const { user: currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    //axios 통신으로 백에 토큰이 만료되었는지 물어보면 될 듯
    currentUser ? console.log('Hi user!') : window.location.replace('/login');
  }, []);

  const dispatch = useAppThunkDispatch();
  const history = useHistory();
  const NickNameRegex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;
  const [Account, setAccount] = useState({
    NickName: '',
    Password: '',
    ConfirmPassword: '',
  });
  const { NickName, Password, ConfirmPassword } = Account;

  const onChangeAccount = (e: any) => {
    setAccount({
      ...Account,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();

    if (Password !== ConfirmPassword) {
      return alert('비밀번호가 일치 하지 않습니다.');
    }

    //사용자 정보 수정하는 통신 보내면 됨
  };

  return (
    <>
      <S.EditTitle>내 정보 관리</S.EditTitle>
      <S.EditCommonWrap>
        <S.EditForm onSubmit={onSubmitHandler}>
          <S.EditInputWrap>
            <S.EditLabel htmlFor="name">이름</S.EditLabel>
            <S.EditInput
              id="name"
              inputType="text"
              placeholder="사용자 이름"
              disabled={true}
            />
          </S.EditInputWrap>
          <S.EditInputWrap>
            <S.EditLabel htmlFor="nickName">닉네임</S.EditLabel>
            <S.EditInput
              id="nickName"
              name="NickName"
              inputType="text"
              placeholder="4자 ~ 12자 영문, 숫자, 한글"
              value={NickName}
              onChange={onChangeAccount}
            />
            {NickNameRegex.test(NickName) ? (
              validator.isLength(NickName, { min: 4, max: 12 }) ? (
                <S.EditValid>✔ 사용할 수 있는 닉네임 입니다.</S.EditValid>
              ) : (
                <S.EditInvalid>
                  ❌ 형식에 맞는 닉네임을 입력하세요.
                </S.EditInvalid>
              )
            ) : (
              <S.EditInvalid>
                ❌ 띄어쓰기, 특수문자는 사용 불가합니다.
              </S.EditInvalid>
            )}
          </S.EditInputWrap>
          <S.EditInputWrap>
            <S.EditLabel htmlFor="email">이메일</S.EditLabel>
            <S.EditEmailInput
              id="email"
              inputType="email"
              placeholder="사용자 이메일"
              disabled={true}
            />
          </S.EditInputWrap>
          <S.EditInputWrap>
            <S.EditLabel htmlFor="password1">비밀번호</S.EditLabel>
            <S.EditInput
              id="password1"
              name="Password"
              inputType="password"
              value={Password}
              placeholder="비밀번호"
              onChange={onChangeAccount}
            />
            {validator.isStrongPassword(Password) ? (
              <S.EditValid>✔ 사용할 수 있는 비밀번호 입니다.</S.EditValid>
            ) : (
              <S.EditInvalid>
                ❌ 형식에 맞는 비밀번호를 입력하세요.
              </S.EditInvalid>
            )}
          </S.EditInputWrap>
          <S.EditInputWrap>
            <S.EditLabel htmlFor="password2">비밀번호 확인</S.EditLabel>
            <S.EditInput
              id="password2"
              name="ConfirmPassword"
              inputType="password"
              value="{ConfirmPassword}"
              placeholder="비밀번호 확인"
              onChange={onChangeAccount}
            />
            {validator.equals(Password, ConfirmPassword) &&
            ConfirmPassword !== '' ? (
              <S.EditValidSelect>✔ 비밀번호가 일치 합니다.</S.EditValidSelect>
            ) : (
              <S.EditInvalidSelect>
                ❌ 비밀번호가 일치하지 않습니다.
              </S.EditInvalidSelect>
            )}
          </S.EditInputWrap>
          <S.EditSelectWrap>
            <S.EditLabel htmlFor="birth">생년월일</S.EditLabel>
            <S.EditBirthDiv>
              <S.EditBirthInput
                id="birth"
                inputType="text"
                placeholder="사용자 년"
                disabled={true}
              />
              <S.EditBirthSelect disabled={true}>
                <option>사용자 월</option>
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
              </S.EditBirthSelect>
              <S.EditBirthInput
                inputType="text"
                placeholder="사용자 일"
                disabled={true}
              />
            </S.EditBirthDiv>
          </S.EditSelectWrap>
          <S.EditSelectWrap>
            <S.EditLabel htmlFor="gender">성별</S.EditLabel>
            <S.EditGenderSelect id="gender" disabled={true}>
              <option>사용자 성별</option>
              <option value="M">남자</option>
              <option value="F">여자</option>
            </S.EditGenderSelect>
          </S.EditSelectWrap>
          <S.EditInputWrap>
            <S.EditLabel htmlFor="phone">휴대폰 번호</S.EditLabel>
            <S.EditInput
              id="phone"
              inputType="text"
              placeholder="사용자 휴대폰 번호"
              disabled={true}
            />
          </S.EditInputWrap>
          {NickNameRegex.test(NickName) &&
          validator.isStrongPassword(Password) &&
          validator.equals(Password, ConfirmPassword) &&
          ConfirmPassword !== '' ? (
            <S.EditFinish btntype="submit">수정 완료</S.EditFinish>
          ) : (
            <S.EditNotFinish>형식에 맞게 입력해주세요</S.EditNotFinish>
          )}
        </S.EditForm>
      </S.EditCommonWrap>
    </>
  );
};
