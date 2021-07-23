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

const JoinForm: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [Email, setEmail] = useState('');
  const [Name, setName] = useState('');
  const [NickName, setNickName] = useState('');
  const [Phone, setPhone] = useState('');
  const [Birth, setBirth] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const onEmailHandler = (e: any) => {
    setEmail(e.currentTarget.value);
  };
  const onNameHandler = (e: any) => {
    setName(e.currentTarget.value);
  };
  const onNickNameHandler = (e: any) => {
    setNickName(e.currentTarget.value);
  };
  const onPhoneHandler = (e: any) => {
    setPhone(e.currentTarget.value);
  };
  const onBirthHandler = (e: any) => {
    setBirth(e.currentTarget.value);
  };
  const onPasswordHandler = (e: any) => {
    setPassword(e.currentTarget.value);
  };
  const onConfirmPasswordHandler = (e: any) => {
    setConfirmPassword(e.currentTarget.value);
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
      phone: Phone,
      birth: Birth,
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
    history.replace('/');
  };
  return (
    <Container>
      <Form onSubmit={onSubmitHandler}>
        <label>이메일</label>
        <Input
          type="email"
          placeholder="이메일"
          value={Email}
          onChange={onEmailHandler}
        />
        <label>이름</label>
        <Input
          type="text"
          placeholder="이름"
          value={Name}
          onChange={onNameHandler}
        />
        <label>닉네임</label>
        <Input
          type="text"
          placeholder="닉네임"
          value={NickName}
          onChange={onNickNameHandler}
        />
        <label>전화번호</label>
        <Input
          type="text"
          placeholder="전화번호 ex) 01012345678"
          value={Phone}
          onChange={onPhoneHandler}
        />
        <label>생년월일</label>
        <Input
          type="text"
          placeholder="생년월일 ex) 980101"
          value={Birth}
          onChange={onBirthHandler}
        />
        <label>비밀번호</label>
        <Input
          type="password"
          value={Password}
          placeholder="비밀번호"
          onChange={onPasswordHandler}
        />
        <label>비밀번호 확인</label>
        <Input
          type="password"
          value={ConfirmPassword}
          placeholder="비밀번호 확인"
          onChange={onConfirmPasswordHandler}
        />
        <Button type="submit">회원 가입</Button>
      </Form>
    </Container>
  );
};

export default JoinForm;
