import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { joinUser } from '../../redux/actions/user_actions';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 20px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`;

const BInput = styled.input`
  position: relative;
  overflow: hidden;
  width: 30%;
  height: 40px;
  margin: 0 0 20px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`;
const BSelect = styled.select`
  position: relative;
  overflow: hidden;
  width: 30%;
  height: 40px;
  margin: 0 0 20px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`;
const CButton = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 49px;
  width: 100%;
  height: 49px;
  margin: 16px 0 7px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 0;
  background-color: #2f4f4f;
`;
const Button = styled.button`
  font-size: 18px;
  font-weight: 700;
  line-height: 49px;
  width: 100%;
  height: 49px;
  margin: 16px 0 7px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 0;
  background-color: #03c75a;
`;
const Select = styled.select`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 20px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`;

const JoinForm: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [Email, setEmail] = useState('');
  const [Name, setName] = useState('');
  const [NickName, setNickName] = useState('');
  const [Gender, setGender] = useState('');
  const [Phone, setPhone] = useState('');
  const [Birth, setBirth] = useState({
    Year: '',
    Month: '',
    Day: '',
  });
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [Check, setCheck] = useState(false);

  const onEmailHandler = (e: any) => {
    setEmail(e.currentTarget.value);
  };
  const onNameHandler = (e: any) => {
    setName(e.currentTarget.value);
  };
  const onNickNameHandler = (e: any) => {
    setNickName(e.currentTarget.value);
  };
  const onGenderHandler = (e: any) => {
    setGender(e.currentTarget.value);
  };
  const onPhoneHandler = (e: any) => {
    setPhone(e.currentTarget.value);
  };
  const { Year, Month, Day } = Birth;
  const onBirthHandler = (e: any) => {
    setBirth({
      ...Birth,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  const onPasswordHandler = (e: any) => {
    setPassword(e.currentTarget.value);
  };
  const onConfirmPasswordHandler = (e: any) => {
    setConfirmPassword(e.currentTarget.value);
  };
  const onCheckHandler = (e: any) => {
    setCheck(!Check);
  };
  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    if (Password !== ConfirmPassword) {
      return alert('비밀번호가 일치 하지 않습니다.');
    }
    let body = {
      email: Email,
      name: Name,
      nickname: NickName,
      gender: Gender === 'M' ? true : false,
      phone: Phone,
      birth: Year.concat(Month, Day),
      password: Password,
    };
    dispatch(joinUser(body)); // then 오류 고쳐야 하는데 잘 모르겠음
    // .then((response: any) => {
    //   if (response.payload.joinSuccess) {
    //     history.replace('/');
    //   } else {
    //     alert('Error');
    //   }
    // });
    console.log(body);
    history.replace('/');
  };
  return (
    <Container>
      <Form onSubmit={onSubmitHandler}>
        <label>이메일</label>
        <Input
          required
          type="email"
          placeholder="이메일"
          value={Email}
          onChange={onEmailHandler}
        />
        <label>이름</label>
        <Input
          required
          type="text"
          placeholder="이름"
          value={Name}
          onChange={onNameHandler}
        />
        <label>닉네임</label>
        <Input
          required
          type="text"
          placeholder="닉네임"
          value={NickName}
          onChange={onNickNameHandler}
        />
        <label>성별</label>
        <Select onChange={onGenderHandler} value={Gender} required>
          <option>성별</option>
          <option value="M">남자</option>
          <option value="F">여자</option>
        </Select>
        <label>전화번호</label>
        <Input
          required
          type="text"
          placeholder="- 빼고 입력"
          value={Phone}
          onChange={onPhoneHandler}
        />
        <label>생년월일</label>
        <div
          className="birth_container"
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <BInput
            required
            type="text"
            placeholder="년 (4자)"
            value={Year}
            name="Year"
            onChange={onBirthHandler}
          />
          <BSelect
            onChange={onBirthHandler}
            value={Month}
            name="Month"
            required
          >
            <option>월</option>
            <option value="01">1</option>
            <option value="02">2</option>
            <option value="03">3</option>
            <option value="04">4</option>
            <option value="05">5</option>
            <option value="06">6</option>
            <option value="07">7</option>
            <option value="08">8</option>
            <option value="09">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </BSelect>
          <BInput
            required
            type="text"
            placeholder="일"
            value={Day}
            name="Day"
            onChange={onBirthHandler}
          />
        </div>
        <label>비밀번호</label>
        <Input
          required
          type="password"
          value={Password}
          placeholder="비밀번호"
          onChange={onPasswordHandler}
        />
        <label>비밀번호 확인</label>
        <Input
          required
          type="password"
          value={ConfirmPassword}
          placeholder="비밀번호 확인"
          onChange={onConfirmPasswordHandler}
        />
        <label>약관 동의</label>
        <div className="agree_check">
          <Input type="checkbox" onClick={onCheckHandler} />
        </div>
        {Check ? (
          <Button type="submit">회원 가입</Button>
        ) : (
          <CButton>약관을 동의 해주세요!</CButton>
        )}
      </Form>
    </Container>
  );
};

export default JoinForm;
