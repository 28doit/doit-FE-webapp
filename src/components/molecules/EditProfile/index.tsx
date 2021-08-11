import React from 'react';
import * as S from './style';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { register } from '../../../actions/auth';
import { useAppThunkDispatch } from '../../../store';
import validator from 'validator';

export interface ModalItemProps {}

export const EditProfileModal = ({}: ModalItemProps): React.ReactElement => {
  const dispatch = useAppThunkDispatch();
  const { user: currentUser } = useSelector((state) => state.auth);
  const history = useHistory();
  const NickNameRegex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;

  const [Account, setAccount] = useState({
    NickName: '',
    Phone: '',
    Password: '',
    ConfirmPassword: '',
  });
  const { NickName, Phone, Password, ConfirmPassword } = Account;
  console.log(currentUser);
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

    let body = {
      nickName: NickName,
      phoneNumber: Phone,
      password: Password,
      email: currentUser.user.email,
      userName: currentUser.user.userName,
      sex: currentUser.user.sex,
      userYear: currentUser.user.userYear,
      userMonth: currentUser.user.userMonth,
      userDay: currentUser.user.userDay,
      type: 1,
      gallaryCount: 0,
      userSubscribeCount: 0,
      profileImageLocation: '',
    };
    console.log(body);

    dispatch(register(body)).then(() => {
      history.replace('/user/edit-profile');
    });
  };

  return (
    <>
      <S.ModalCommonTitle>내 정보 관리</S.ModalCommonTitle>
      <S.ModalCommonWrap>
        <S.ModalJoinForm onSubmit={onSubmitHandler}>
          <S.ModalInputWrap>
            <S.ModalRegisterLabel htmlFor="name">이름</S.ModalRegisterLabel>
            <S.ModalRegisterInput
              id="name"
              inputType="text"
              placeholder={currentUser.user.userName}
              disabled={true}
            />
          </S.ModalInputWrap>
          <S.ModalInputWrap>
            <S.ModalRegisterLabel htmlFor="nickName">
              닉네임
            </S.ModalRegisterLabel>
            <S.ModalRegisterNickName
              id="nickName"
              name="NickName"
              inputType="text"
              placeholder="4자 ~ 12자 영문, 숫자, 한글"
              value={NickName}
              onChange={onChangeAccount}
            />
            {NickNameRegex.test(NickName) ? (
              validator.isLength(NickName, { min: 4, max: 12 }) ? (
                <S.ModalJoinValid>
                  ✔ 사용할 수 있는 닉네임 입니다.
                </S.ModalJoinValid>
              ) : (
                <S.ModalJoinInvalid>
                  ❌ 형식에 맞는 닉네임을 입력하세요.
                </S.ModalJoinInvalid>
              )
            ) : (
              <S.ModalJoinInvalid>
                ❌ 띄어쓰기, 특수문자는 사용 불가합니다.
              </S.ModalJoinInvalid>
            )}
          </S.ModalInputWrap>
          <S.ModalInputWrap>
            <S.ModalRegisterLabel htmlFor="email">이메일</S.ModalRegisterLabel>
            <S.ModalRegisterEmail
              id="email"
              inputType="email"
              placeholder={currentUser.user.email}
              disabled={true}
            />
          </S.ModalInputWrap>
          <S.ModalInputWrap>
            <S.ModalRegisterLabel htmlFor="password1">
              비밀번호
            </S.ModalRegisterLabel>
            <S.ModalRegisterInput
              id="password1"
              name="Password"
              inputType="password"
              value={Password}
              placeholder="비밀번호"
              onChange={onChangeAccount}
            />
            {validator.isStrongPassword(Password) ? (
              <S.ModalJoinValid>
                ✔ 사용할 수 있는 비밀번호 입니다.
              </S.ModalJoinValid>
            ) : (
              <S.ModalJoinInvalid>
                ❌ 형식에 맞는 비밀번호를 입력하세요.
              </S.ModalJoinInvalid>
            )}
          </S.ModalInputWrap>
          <S.ModalInputWrap>
            <S.ModalRegisterLabel htmlFor="password2">
              비밀번호 확인
            </S.ModalRegisterLabel>
            <S.ModalRegisterInput
              id="password2"
              name="ConfirmPassword"
              inputType="password"
              value={ConfirmPassword}
              placeholder="비밀번호 확인"
              onChange={onChangeAccount}
            />
            {validator.equals(Password, ConfirmPassword) &&
            ConfirmPassword !== '' ? (
              <S.ModalJoinSelectValid>
                ✔ 비밀번호가 일치 합니다.
              </S.ModalJoinSelectValid>
            ) : (
              <S.ModalJoinSelectInvalid>
                ❌ 비밀번호가 일치하지 않습니다.
              </S.ModalJoinSelectInvalid>
            )}
          </S.ModalInputWrap>
          <S.ModaleSelectWrap>
            <S.ModalRegisterLabel htmlFor="birth">
              생년월일
            </S.ModalRegisterLabel>
            <S.ModalBirthDiv>
              <S.ModalRegisterBirth
                id="birth"
                inputType="text"
                placeholder={currentUser.user.userYear}
                disabled={true}
              />
              <S.ModalSelect disabled={true}>
                <option>{currentUser.user.userMonth}</option>
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
                placeholder={currentUser.user.userDay}
                disabled={true}
              />
            </S.ModalBirthDiv>
          </S.ModaleSelectWrap>
          <S.ModaleSelectWrap>
            <S.ModalRegisterLabel htmlFor="gender">성별</S.ModalRegisterLabel>
            <S.ModalGenderSelect id="gender" disabled={true}>
              <option value="">
                {currentUser.user.sex === 1 ? '남자' : '여자'}
              </option>
              <option value="M">남자</option>
              <option value="F">여자</option>
            </S.ModalGenderSelect>
          </S.ModaleSelectWrap>
          <S.ModalInputWrap>
            <S.ModalRegisterLabel htmlFor="phone">
              휴대폰 번호
            </S.ModalRegisterLabel>
            <S.ModalTelInput
              id="phone"
              name="Phone"
              inputType="text"
              placeholder="- 빼고 입력"
              value={Phone}
              onChange={onChangeAccount}
            />
            {Phone.substr(0, 1) !== '0' ? (
              <S.ModalJoinSelectInvalid>
                ❌ 휴대폰 번호를 입력하세요.
              </S.ModalJoinSelectInvalid>
            ) : validator.isLength(Phone, { min: 11, max: 11 }) ? (
              validator.isMobilePhone('+82' + Phone.substring(1, 11), [
                'ko-KR',
              ]) ? (
                <S.ModalJoinSelectValid>
                  ✔ 휴대폰 번호를 입력하셨습니다.
                </S.ModalJoinSelectValid>
              ) : (
                <S.ModalJoinSelectInvalid>
                  ❌ 휴대폰 번호를 입력하세요.
                </S.ModalJoinSelectInvalid>
              )
            ) : (
              <S.ModalJoinSelectInvalid>
                ❌ 휴대폰 번호를 입력하세요.
              </S.ModalJoinSelectInvalid>
            )}
          </S.ModalInputWrap>
          {NickNameRegex.test(NickName) &&
          validator.isLength(NickName, { min: 4, max: 12 }) &&
          validator.isStrongPassword(Password) &&
          validator.equals(Password, ConfirmPassword) &&
          ConfirmPassword !== '' &&
          Phone.substr(0, 1) === '0' &&
          validator.isLength(Phone, { min: 11, max: 11 }) &&
          validator.isMobilePhone('+82' + Phone.substring(1, 11), ['ko-KR']) ? (
            <S.ModalAgreeYes btntype="submit">수정 완료</S.ModalAgreeYes>
          ) : (
            <S.ModalAgreeNo>형식에 맞게 입력해주세요</S.ModalAgreeNo>
          )}
        </S.ModalJoinForm>
      </S.ModalCommonWrap>
    </>
  );
};
