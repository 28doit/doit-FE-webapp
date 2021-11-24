import React, { useLayoutEffect, useState } from 'react';
import * as S from './style';
import { useHistory } from 'react-router-dom';
import { useAppThunkDispatch } from '../../../redux/store';
import validator from 'validator';
import { RootStateOrAny, useSelector } from 'react-redux';
import { ModalLoadingItem } from '../../index';
import {
  expired_check,
  edit_user_profile,
} from '../../../redux/services/auth.service';
import { Nlogout } from '../../../redux/actions/auth';
import ROUTES from '../../../commons/routes';
import PLUS from '../../../assets/plus.svg';
import PURPLE from '../../../assets/purple.jpg';
import { PC, Tablet, Mobile } from '../../../MediaQuery';

export interface EditProfileItemProps {}

export const EditProfileItem =
  ({}: EditProfileItemProps): React.ReactElement => {
    const { user: currentUser } = useSelector(
      (state: RootStateOrAny) => state.auth,
    );
    const dispatch = useAppThunkDispatch();
    const [data, setData] = useState({
      email: '',
      sex: 1,
      phone: '',
      month: '',
      year: '',
      day: '',
      name: '',
    });
    const [Loading, setLoading] = useState(false);

    useLayoutEffect(() => {
      const getUser = async () => {
        await expired_check(currentUser.token, currentUser.email)
          .then((response) => {
            console.log(response.data);
            if (response.data.Token === false) {
              alert('시간이 만료되었습니다. 다시 로그인 해주세요');
              dispatch(Nlogout());
              window.location.replace(ROUTES.LOGIN);
            } else {
              const userData = response.data;
              setData({
                ...data,
                ['email']: userData.Email,
                ['name']: userData.Name,
                ['sex']: userData.sex,
                ['year']: userData.Year,
                ['month']: userData.Month,
                ['day']: userData.Day,
                ['phone']: userData.PhoneNumber,
              });
            }
          })
          .catch(() => {
            alert(
              '잠시 오류가 발생하였습니다. 잠시 후 다시 시도해주시기 바랍니다.',
            );
            setLoading(false);
            window.location.replace(ROUTES.MYDASH);
          });
        setLoading(false);
      };
      setLoading(true);
      currentUser ? getUser() : window.location.replace(ROUTES.LOGIN);
    }, []);

    const history = useHistory();
    const NickNameRegex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;
    const [Account, setAccount] = useState({
      NickName: '',
      Password: '',
      ConfirmPassword: '',
      NImgFile: null,
      ImgBase64: PURPLE,
    });
    const { NickName, Password, ConfirmPassword, NImgFile, ImgBase64 } =
      Account;

    const onChangeImgHandler = (e: any) => {
      e.preventDefault();
      let reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result;
        if (base64) {
          setAccount({
            ...Account,
            ['ImgBase64']: base64.toString(),
            ['NImgFile']: e.target.files[0],
          });
        }
      };
      if (e.target.files[0]) {
        reader.readAsDataURL(e.target.files[0]);
        setAccount({
          ...Account,
          ['NImgFile']: e.target.files[0],
        });
      }
    };

    const onChangeAccount = (e: any) => {
      setAccount({
        ...Account,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    };

    const onSubmitHandler = (e: any) => {
      e.preventDefault();
      let formData = new FormData();
      formData.append('images', NImgFile || '{}');
      formData.append('idx', '2006');
      formData.append('nickName', NickName);
      formData.append('password', Password);
      if (Password !== ConfirmPassword) {
        return alert('비밀번호가 일치 하지 않습니다.');
      }
      edit_user_profile(formData)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
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
              {Loading ? <ModalLoadingItem /> : ''}
              <S.PC_Title>내 정보 관리</S.PC_Title>
              <S.PC_Wrap w_type="default">
                <S.PC_Wrap w_type="img">
                  <S.PC_Wrap w_type="preview">
                    <S.PC_Img i_type="preview" src={ImgBase64} />
                  </S.PC_Wrap>
                  <S.PC_Label l_type="img" htmlFor="imageIn">
                    <S.PC_Img i_type="img" src={PLUS} />
                  </S.PC_Label>
                </S.PC_Wrap>
                <S.PC_Input
                  i_type="img"
                  id="imageIn"
                  inputType="file"
                  inputAccept="image/*"
                  name="file"
                  onChange={onChangeImgHandler}
                />
                <S.PC_Form onSubmit={onSubmitHandler}>
                  <S.PC_Wrap w_type="input">
                    <S.PC_Label l_type="default" htmlFor="name">
                      이름
                    </S.PC_Label>
                    <S.PC_Input
                      i_type="default"
                      id="name"
                      inputType="text"
                      placeholder={data.name}
                      disabled={true}
                    />
                  </S.PC_Wrap>
                  <S.PC_Wrap w_type="input">
                    <S.PC_Label l_type="default" htmlFor="nickName">
                      닉네임
                    </S.PC_Label>
                    <S.PC_Input
                      i_type="default"
                      id="nickName"
                      name="NickName"
                      inputType="text"
                      placeholder="4자 ~ 12자 영문, 숫자, 한글"
                      value={NickName}
                      onChange={onChangeAccount}
                    />
                    {NickNameRegex.test(NickName) ? (
                      validator.isLength(NickName, { min: 4, max: 12 }) ? (
                        <S.PC_Valid v_type="default">
                          ✔ 사용할 수 있는 닉네임 입니다.
                        </S.PC_Valid>
                      ) : (
                        <S.PC_Invalid n_type="default">
                          ❌ 형식에 맞는 닉네임을 입력하세요.
                        </S.PC_Invalid>
                      )
                    ) : (
                      <S.PC_Invalid n_type="default">
                        ❌ 띄어쓰기, 특수문자는 사용 불가합니다.
                      </S.PC_Invalid>
                    )}
                  </S.PC_Wrap>
                  <S.PC_Wrap w_type="input">
                    <S.PC_Label l_type="default" htmlFor="email">
                      이메일
                    </S.PC_Label>
                    <S.PC_Input
                      i_type="default"
                      id="email"
                      inputType="email"
                      placeholder={data.email}
                      disabled={true}
                    />
                  </S.PC_Wrap>
                  <S.PC_Wrap w_type="input">
                    <S.PC_Label l_type="default" htmlFor="password1">
                      비밀번호
                    </S.PC_Label>
                    <S.PC_Input
                      i_type="default"
                      id="password1"
                      name="Password"
                      inputType="password"
                      value={Password}
                      placeholder="비밀번호"
                      onChange={onChangeAccount}
                    />
                    {validator.isStrongPassword(Password) ? (
                      <S.PC_Valid v_type="default">
                        ✔ 사용할 수 있는 비밀번호 입니다.
                      </S.PC_Valid>
                    ) : (
                      <S.PC_Invalid n_type="default">
                        ❌ 형식에 맞는 비밀번호를 입력하세요.
                      </S.PC_Invalid>
                    )}
                  </S.PC_Wrap>
                  <S.PC_Wrap w_type="input">
                    <S.PC_Label l_type="default" htmlFor="password2">
                      비밀번호 확인
                    </S.PC_Label>
                    <S.PC_Input
                      i_type="default"
                      id="password2"
                      name="ConfirmPassword"
                      inputType="password"
                      value={ConfirmPassword}
                      placeholder="비밀번호 확인"
                      onChange={onChangeAccount}
                    />
                    {validator.equals(Password, ConfirmPassword) &&
                    ConfirmPassword !== '' ? (
                      <S.PC_Valid v_type="select">
                        ✔ 비밀번호가 일치 합니다.
                      </S.PC_Valid>
                    ) : (
                      <S.PC_Invalid n_type="select">
                        ❌ 비밀번호가 일치하지 않습니다.
                      </S.PC_Invalid>
                    )}
                  </S.PC_Wrap>
                  <S.PC_Wrap w_type="select">
                    <S.PC_Label l_type="default" htmlFor="birth">
                      생년월일
                    </S.PC_Label>
                    <S.PC_Wrap w_type="birth">
                      <S.PC_Input
                        i_type="birth"
                        id="birth"
                        inputType="text"
                        placeholder={data.year}
                        disabled={true}
                      />
                      <S.PC_Select s_type="birth" disabled={true}>
                        <option>{data.month + '월'}</option>
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
                      </S.PC_Select>
                      <S.PC_Input
                        i_type="birth"
                        inputType="text"
                        placeholder={data.day}
                        disabled={true}
                      />
                    </S.PC_Wrap>
                  </S.PC_Wrap>
                  <S.PC_Wrap w_type="select">
                    <S.PC_Label l_type="default" htmlFor="gender">
                      성별
                    </S.PC_Label>
                    <S.PC_Select s_type="gender" id="gender" disabled={true}>
                      <option>{data.sex ? '남자' : '여자'}</option>
                      <option value="M">남자</option>
                      <option value="F">여자</option>
                    </S.PC_Select>
                  </S.PC_Wrap>
                  <S.PC_Wrap w_type="input">
                    <S.PC_Label l_type="default" htmlFor="phone">
                      휴대폰 번호
                    </S.PC_Label>
                    <S.PC_Input
                      i_type="default"
                      id="phone"
                      inputType="text"
                      placeholder={data.phone}
                      disabled={true}
                    />
                  </S.PC_Wrap>
                  {NickNameRegex.test(NickName) &&
                  validator.isStrongPassword(Password) &&
                  validator.equals(Password, ConfirmPassword) &&
                  ConfirmPassword !== '' ? (
                    <S.PC_Submit btntype="submit">수정 완료</S.PC_Submit>
                  ) : (
                    <S.PC_NoSubmit>형식에 맞게 입력해주세요</S.PC_NoSubmit>
                  )}
                </S.PC_Form>
              </S.PC_Wrap>
            </S.PC_Inner>
          </S.PC_Overlay>
        </PC>
      </>
    );
  };
