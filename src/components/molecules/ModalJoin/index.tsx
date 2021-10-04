import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import * as S from './style';
import PLUS from '../../../assets/plus.svg';
import PURPLE from '../../../assets/purple.jpg';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import { Nregister } from '../../../redux/actions/auth';
import { useAppThunkDispatch } from '../../../redux/store';
import { ModalLoading } from '../../index';
import { email_check } from '../../../redux/services/auth.service';
import ROUTES from '../../../commons/routes';
import { PC, Tablet, Mobile } from '../../../MediaQuery';

export interface ModalItemProps {}

export const RegisterItemModal = ({}: ModalItemProps): React.ReactElement => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const history = useHistory();

  useEffect(() => {
    currentUser
      ? (history.replace(ROUTES.HOME), alert('이미 로그인 한 유저입니다.'))
      : '';
  }, []);

  const dispatch = useAppThunkDispatch();
  const NickNameRegex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;
  const NameRegex = /^[가-힣]+$/;
  const [Account, setAccount] = useState({
    Email: '',
    Name: '',
    NickName: '',
    Gender: '',
    Phone: '',
    Password: '',
    ConfirmPassword: '',
    Year: '',
    Month: '',
    Day: '',
    ImgBase64: PURPLE,
    ImgFile: null,
  });

  const [Loading, setLoading] = useState(false); // 화면 로딩 창
  const [Check, setCheck] = useState(false); // 약관 동의 체크박스 체크했는지 판별
  const [EmailDuplicate, setEmailDuplicate] = useState(true); // 중복 이메일인지 판별하는 state - true면 중복, false면 사용 가능
  const [IsCheck, setIsCheck] = useState(false); // 이메일 중복을 했는지 안했는지 판별하는 state - 중복 확인 후 사용가능하면 true로 변함

  const {
    Email,
    Name,
    NickName,
    Gender,
    Phone,
    Password,
    ConfirmPassword,
    Year,
    Month,
    Day,
    ImgBase64,
    ImgFile,
  } = Account;

  const onChangeImgHandler = (e: any) => {
    e.preventDefault();
    let reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setAccount({
          ...Account,
          ['ImgBase64']: base64.toString(),
          ['ImgFile']: e.target.files[0],
        });
      }
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setAccount({
        ...Account,
        ['ImgFile']: e.target.files[0],
      });
    }
  };

  const onChangeAccount = (e: any) => {
    setAccount({
      ...Account,
      [e.currentTarget.name]: e.currentTarget.value,
    });

    if (e.currentTarget.name === 'Email' && !e.currentTarget.value) {
      // 사용자가 이메일을 다시 입력 할 경우 초기화
      setIsCheck(false);
      setEmailDuplicate(true);
    }
  };

  const onEmailHandler = () => {
    email_check(Email)
      .then((response) => {
        console.log(response);
        response.data.isvalue
          ? (setEmailDuplicate(true), setIsCheck(true))
          : (setEmailDuplicate(false), setIsCheck(true));
      })
      .catch(() => {
        alert(
          '잠시 오류가 발생하였습니다. 잠시 후 다시 시도해주시기 바랍니다.',
        );
      });
    //setEmailDuplicate(false), setIsCheck(true);
  };

  const onCheckHandler = () => {
    setCheck(!Check);
  };

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    let formData = new FormData();
    if (Password !== ConfirmPassword) {
      return alert('비밀번호가 일치 하지 않습니다.');
    }

    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        console.log('salt!' + err);
      }
      bcrypt.hash(Password, salt, function (err, hash) {
        if (err) {
          console.log('hash!' + err);
        }

        const data = {
          email: Email,
          name: Name,
          nickName: NickName,
          phoneNumber: Phone,
          sex: Gender,
          profileImageLocation: ImgFile,
          userYear: Year,
          userMonth: Month,
          userDay: Day,
          password: hash,
          type: 1,
          gallCount: 0,
          userSubscribeCount: 0,
        };

        formData.append('email', Email);
        formData.append('name', Name);
        formData.append('nickName', NickName);
        formData.append('phoneNumber', Phone);
        formData.append('sex', Gender);
        formData.append('images', ImgFile || '{}');
        formData.append('userYear', Year);
        formData.append('userMonth', Month);
        formData.append('userDay', Day);
        formData.append('password', Password);
        formData.append('type', '1');
        formData.append('gallaryCount', '0');
        formData.append('userSubscribeCount', '0');

        console.log(data);

        dispatch(Nregister(formData))
          .then(() => {
            setLoading(false);
            history.replace(`${ROUTES.NOTICE}/join-email`);
          })
          .catch(() => {
            alert(
              '잠시 오류가 발생하였습니다. 잠시 후 다시 시도해주시기 바랍니다.',
            );
            window.location.replace(ROUTES.JOIN);
          });
      });
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
            {Loading ? <ModalLoading /> : ''}
            <S.PC_Title>회원가입</S.PC_Title>
            <S.PC_Conatiner>
              <S.PC_Wrap wrap_type="img">
                <S.PC_Box box="img">
                  <S.PC_Img src={ImgBase64} img_type="preview" />
                </S.PC_Box>
                <S.PC_Label htmlFor="imageIn" lab_type="img">
                  <S.PC_Img src={PLUS} img_type="btn" />
                </S.PC_Label>
              </S.PC_Wrap>
              <S.PC_Input
                input_type="img"
                id="imageIn"
                inputType="file"
                inputAccept="image/*"
                name="file"
                onChange={onChangeImgHandler}
              />
              <S.PC_Form onSubmit={onSubmitHandler}>
                <S.PC_Wrap wrap_type="default">
                  <S.PC_Label htmlFor="name" lab_type="input">
                    이름
                  </S.PC_Label>
                  <S.PC_Input
                    input_type="default"
                    id="name"
                    name="Name"
                    inputType="text"
                    placeholder="이름"
                    value={Name}
                    onChange={onChangeAccount}
                  />
                  {NameRegex.test(Name) ? (
                    validator.isLength(Name, { min: 2, max: 12 }) ? (
                      <S.PC_Valid v_type="default">✔ 통과.</S.PC_Valid>
                    ) : (
                      <S.PC_Invalid nv_type="default">
                        ❌ 한글 이름을 입력하세요.
                      </S.PC_Invalid>
                    )
                  ) : (
                    <S.PC_Invalid nv_type="default">
                      ❌ 한글 이름을 입력하세요.
                    </S.PC_Invalid>
                  )}
                </S.PC_Wrap>
                <S.PC_Wrap wrap_type="default">
                  <S.PC_Label htmlFor="nickName" lab_type="input">
                    닉네임
                  </S.PC_Label>
                  <S.PC_Input
                    input_type="default"
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
                      <S.PC_Invalid nv_type="default">
                        ❌ 형식에 맞는 닉네임을 입력하세요.
                      </S.PC_Invalid>
                    )
                  ) : (
                    <S.PC_Invalid nv_type="default">
                      ❌ 띄어쓰기, 특수문자는 사용 불가합니다.
                    </S.PC_Invalid>
                  )}
                </S.PC_Wrap>
                <S.PC_Wrap wrap_type="default">
                  <S.PC_Label htmlFor="email" lab_type="input">
                    이메일
                  </S.PC_Label>
                  <S.PC_Wrap wrap_type="email">
                    <S.PC_Input
                      input_type="email"
                      id="email"
                      name="Email"
                      inputType="email"
                      placeholder="이메일"
                      value={Email}
                      onChange={onChangeAccount}
                    />
                    <S.PC_EmailCheck onClick={onEmailHandler}>
                      확인
                    </S.PC_EmailCheck>
                  </S.PC_Wrap>
                  {validator.isEmail(Email) ? (
                    IsCheck ? (
                      EmailDuplicate ? (
                        <S.PC_Invalid nv_type="default">
                          ❌ 이미 가입 한 이메일 입니다.
                        </S.PC_Invalid>
                      ) : (
                        <S.PC_Valid v_type="default">
                          ✔ 사용할 수 있는 이메일 입니다.
                        </S.PC_Valid>
                      )
                    ) : (
                      <S.PC_Invalid nv_type="default">
                        ❌ 이메일 중복을 확인해주세요.
                      </S.PC_Invalid>
                    )
                  ) : (
                    <S.PC_Invalid nv_type="default">
                      ❌ 이메일을 입력하세요.
                    </S.PC_Invalid>
                  )}
                </S.PC_Wrap>
                <S.PC_Wrap wrap_type="default">
                  <S.PC_Label htmlFor="password1" lab_type="input">
                    비밀번호
                  </S.PC_Label>
                  <S.PC_Input
                    input_type="default"
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
                    <S.PC_Invalid nv_type="default">
                      ❌ 형식에 맞는 비밀번호를 입력하세요.
                    </S.PC_Invalid>
                  )}
                </S.PC_Wrap>
                <S.PC_Wrap wrap_type="default">
                  <S.PC_Label htmlFor="password2" lab_type="input">
                    비밀번호 확인
                  </S.PC_Label>
                  <S.PC_Input
                    input_type="default"
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
                    <S.PC_Invalid nv_type="select">
                      ❌ 비밀번호가 일치하지 않습니다.
                    </S.PC_Invalid>
                  )}
                </S.PC_Wrap>
                <S.PC_Wrap wrap_type="select">
                  <S.PC_Label htmlFor="birth" lab_type="input">
                    생년월일
                  </S.PC_Label>
                  <S.PC_Box box="birth">
                    <S.PC_Input
                      input_type="birth"
                      id="birth"
                      inputType="text"
                      placeholder="년 (4자)"
                      value={Year}
                      name="Year"
                      onChange={onChangeAccount}
                    />
                    <S.PC_Select
                      onChange={onChangeAccount}
                      value={Month}
                      name="Month"
                      s_type="birth"
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
                    </S.PC_Select>
                    <S.PC_Input
                      input_type="birth"
                      inputType="text"
                      placeholder="일 (2자)"
                      value={Day}
                      name="Day"
                      onChange={onChangeAccount}
                    />
                  </S.PC_Box>
                  {validator.isAfter(Year, '1899') ? (
                    validator.isBefore(Year, '2001') ? (
                      validator.isDate(Year + '-' + Month + '-' + Day) ? (
                        <S.PC_Valid v_type="select">✔ 정상입니다.</S.PC_Valid>
                      ) : (
                        <S.PC_Invalid nv_type="select">
                          ❌ 정상적인 날짜를 입력하세요.
                        </S.PC_Invalid>
                      )
                    ) : (
                      <S.PC_Invalid nv_type="select">
                        ❌ 20살 이상만 가입할 수 있습니다.
                      </S.PC_Invalid>
                    )
                  ) : (
                    <S.PC_Invalid nv_type="select">
                      ❌ 1900년 이후 가입자만 가입할 수 있습니다.
                    </S.PC_Invalid>
                  )}
                </S.PC_Wrap>
                <S.PC_Wrap wrap_type="select">
                  <S.PC_Label htmlFor="gender" lab_type="input">
                    성별
                  </S.PC_Label>
                  <S.PC_Select
                    id="gender"
                    onChange={onChangeAccount}
                    value={Gender}
                    name="Gender"
                    s_type="gender"
                  >
                    <option value="">성별</option>
                    <option value="1">남자</option>
                    <option value="0">여자</option>
                  </S.PC_Select>
                  {validator.isEmpty(Gender) ? (
                    <S.PC_Invalid nv_type="select">
                      ❌ 성별을 선택하세요.
                    </S.PC_Invalid>
                  ) : (
                    <S.PC_Valid v_type="select">
                      ✔ 성별을 선택하셨습니다.
                    </S.PC_Valid>
                  )}
                </S.PC_Wrap>
                <S.PC_Wrap wrap_type="default">
                  <S.PC_Label htmlFor="phone" lab_type="input">
                    휴대폰 번호
                  </S.PC_Label>
                  <S.PC_Input
                    input_type="default"
                    id="phone"
                    name="Phone"
                    inputType="text"
                    placeholder="- 빼고 입력"
                    value={Phone}
                    onChange={onChangeAccount}
                  />
                  {Phone.substr(0, 1) !== '0' ? (
                    <S.PC_Invalid nv_type="select">
                      ❌ 휴대폰 번호를 입력하세요.
                    </S.PC_Invalid>
                  ) : validator.isLength(Phone, { min: 11, max: 11 }) ? (
                    validator.isMobilePhone('+82' + Phone.substring(1, 11), [
                      'ko-KR',
                    ]) ? (
                      <S.PC_Valid v_type="select">
                        ✔ 휴대폰 번호를 입력하셨습니다.
                      </S.PC_Valid>
                    ) : (
                      <S.PC_Invalid nv_type="select">
                        ❌ 휴대폰 번호를 입력하세요.
                      </S.PC_Invalid>
                    )
                  ) : (
                    <S.PC_Invalid nv_type="select">
                      ❌ 휴대폰 번호를 입력하세요.
                    </S.PC_Invalid>
                  )}
                </S.PC_Wrap>
                <S.PC_Wrap wrap_type="select">
                  <S.PC_Label htmlFor="agree" lab_type="input">
                    약관동의
                  </S.PC_Label>
                  <S.PC_Box box="pre">
                    <S.PC_Pre>
                      제1조(목적) 이 약관은 업체 회사(전자상거래 사업자)가
                      운영하는 업체 사이버 몰(이하 “몰”이라 한다)에서 제공하는
                      인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어
                      사이버 몰과 이용자의 권리․의무 및 책임사항을 규정함을
                      목적으로 합니다.
                      <br></br>
                      <br></br>
                      ※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그
                      성질에 반하지 않는 한 이 약관을 준용합니다.」
                      <br></br>
                      <br></br>
                      제2조(정의)<br></br>
                      <br></br> ① “몰”이란 업체 회사가 재화 또는 용역(이하 “재화
                      등”이라 함)을 이용자에게 제공하기 위하여 컴퓨터 등
                      정보통신설비를 이용하여 재화 등을 거래할 수 있도록 설정한
                      가상의 영업장을 말하며, 아울러 사이버몰을 운영하는
                      사업자의 의미로도 사용합니다.<br></br>
                      <br></br> ② “이용자”란 “몰”에 접속하여 이 약관에 따라
                      “몰”이 제공하는 서비스를 받는 회원 및 비회원을 말합니다. ③
                      ‘회원’이라 함은 “몰”에 회원등록을 한 자로서, 계속적으로
                      “몰”이 제공하는 서비스를 이용할 수 있는 자를 말합니다.
                      <br></br>
                      <br></br> ④ ‘비회원’이라 함은 회원에 가입하지 않고 “몰”이
                      제공하는 서비스를 이용하는 자를 말합니다. <br></br>
                      <br></br>제3조<br></br>
                      <br></br> (약관 등의 명시와 설명 및 개정) <br></br>
                      <br></br>① “몰”은 이 약관의 내용과 상호 및 대표자 성명,
                      영업소 소재지 주소(소비자의 불만을 처리할 수 있는 곳의
                      주소를 포함), 전화번호․모사전송번호․전자우편주소,
                      사업자등록번호, 통신판매업 신고번호, 개인정보관리책임자
                      등을 이용자가 쉽게 알 수 있도록 00 사이버몰의 초기
                      서비스화면(전면)에 게시합니다. 다만, 약관의 내용은
                      이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다.{' '}
                      <br></br>
                      <br></br>② “몰은 이용자가 약관에 동의하기에 앞서 약관에
                      정하여져 있는 내용 중 청약철회․배송책임․환불조건 등과 같은
                      중요한 내용을 이용자가 이해할 수 있도록 별도의 연결화면
                      또는 팝업화면 등을 제공하여 이용자의 확인을 구하여야
                      합니다. <br></br>
                      <br></br>③ “몰”은 「전자상거래 등에서의 소비자보호에 관한
                      법률」, 「약관의 규제에 관한 법률」, 「전자문서 및
                      전자거래기본법」, 「전자금융거래법」, 「전자서명법」,
                      「정보통신망 이용촉진 및 정보보호 등에 관한 법률」,
                      「방문판매 등에 관한 법률」, 「소비자기본법」 등 관련 법을
                      위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.{' '}
                      <br></br>
                      <br></br>④ “몰”이 약관을 개정할 경우에는 적용일자 및
                      개정사유를 명시하여 현행약관과 함께 몰의 초기화면에 그
                      적용일자 7일 이전부터 적용일자 전일까지 공지합니다. 다만,
                      이용자에게 불리하게 약관내용을 변경하는 경우에는 최소한
                      30일 이상의 사전 유예기간을 두고 공지합니다. 이 경우
                      "몰“은 개정 전 내용과 개정 후 내용을 명확하게 비교하여
                      이용자가 알기 쉽도록 표시합니다. <br></br>
                      <br></br>⑤ “몰”이 약관을 개정할 경우에는 그 개정약관은 그
                      적용일자 이후에 체결되는 계약에만 적용되고 그 이전에 이미
                      체결된 계약에 대해서는 개정 전의 약관조항이 그대로
                      적용됩니다. 다만 이미 계약을 체결한 이용자가 개정약관
                      조항의 적용을 받기를 원하는 뜻을 제3항에 의한 개정약관의
                      공지기간 내에 “몰”에 송신하여 “몰”의 동의를 받은 경우에는
                      개정약관 조항이 적용됩니다.
                      <br></br>
                      <br></br>⑥ 이 약관에서 정하지 아니한 사항과 이 약관의
                      해석에 관하여는 전자상거래 등에서의 소비자보호에 관한
                      법률, 약관의 규제 등에 관한 법률, 공정거래위원회가 정하는
                      「전자상거래 등에서의 소비자 보호지침」 및 관계법령 또는
                      상관례에 따릅니다.
                      <br></br>
                      <br></br>제4조(서비스의 제공 및 변경) <br></br>
                      <br></br>① “몰”은 다음과 같은 업무를 수행합니다. <br></br>
                      <br></br>1. 재화 또는 용역에 대한 정보 제공 및 구매계약의
                      체결 2. 구매계약이 체결된 재화 또는 용역의 배송 3. 기타
                      “몰”이 정하는 업무 <br></br>
                      <br></br>② “몰”은 재화 또는 용역의 품절 또는 기술적 사양의
                      변경 등의 경우에는 장차 체결되는 계약에 의해 제공할 재화
                      또는 용역의 내용을 변경할 수 있습니다. 이 경우에는 변경된
                      재화 또는 용역의 내용 및 제공일자를 명시하여 현재의 재화
                      또는 용역의 내용을 게시한 곳에 즉시 공지합니다. <br></br>
                      <br></br>③ “몰”이 제공하기로 이용자와 계약을 체결한
                      서비스의 내용을 재화 등의 품절 또는 기술적 사양의 변경
                      등의 사유로 변경할 경우에는 그 사유를 이용자에게 통지
                      가능한 주소로 즉시 통지합니다. <br></br>
                      <br></br>④ 전항의 경우 “몰”은 이로 인하여 이용자가 입은
                      손해를 배상합니다. 다만, “몰”이 고의 또는 과실이 없음을
                      입증하는 경우에는 그러하지 아니합니다. <br></br>
                      <br></br>제5조(서비스의 중단)<br></br>
                      <br></br> ① “몰”은 컴퓨터 등 정보통신설비의 보수점검․교체
                      및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의
                      제공을 일시적으로 중단할 수 있습니다. <br></br>
                      <br></br>② “몰”은 제1항의 사유로 서비스의 제공이
                      일시적으로 중단됨으로 인하여 이용자 또는 제3자가 입은
                      손해에 대하여 배상합니다. 단, “몰”이 고의 또는 과실이
                      없음을 입증하는 경우에는 그러하지 아니합니다. <br></br>
                    </S.PC_Pre>
                    <S.PC_Input
                      input_type="precheck"
                      inputType="checkbox"
                      onClick={onCheckHandler}
                    />
                  </S.PC_Box>
                </S.PC_Wrap>
                {Check &&
                NameRegex.test(Name) &&
                validator.isLength(Name, { min: 2, max: 12 }) &&
                NickNameRegex.test(NickName) &&
                validator.isLength(NickName, { min: 4, max: 12 }) &&
                validator.isEmail(Email) &&
                IsCheck === true &&
                validator.isStrongPassword(Password) &&
                validator.equals(Password, ConfirmPassword) &&
                ConfirmPassword !== '' &&
                validator.isAfter(Year, '1899') &&
                validator.isBefore(Year, '2001') &&
                validator.isDate(Year + '-' + Month + '-' + Day) &&
                !validator.isEmpty(Gender) &&
                Phone.substr(0, 1) === '0' &&
                validator.isLength(Phone, { min: 11, max: 11 }) &&
                validator.isMobilePhone('+82' + Phone.substring(1, 11), [
                  'ko-KR',
                ]) ? (
                  <S.PC_Submit btntype="submit">회원 가입</S.PC_Submit>
                ) : (
                  <S.PC_NoSubmit>약관을 동의 해주세요!</S.PC_NoSubmit>
                )}
              </S.PC_Form>
            </S.PC_Conatiner>
          </S.PC_Inner>
        </S.PC_Overlay>
      </PC>
    </>
  );
};
