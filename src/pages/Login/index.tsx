import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/actions/user_actions';

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

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const onEmailHandler = (e: any) => {
    setEmail(e.currentTarget.value);
  };
  const onPasswordHandler = (e: any) => {
    setPassword(e.currentTarget.value);
  };
  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    let body = {
      email: Email,
      password: Password,
    };
    dispatch(loginUser(body)); // then 오류 고쳐야 하는데 잘 모르겠음
    // .then((response: any) => {
    //   if (response.payload.joinSuccess) {
    //     history.replace('/login');
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
          placeholder="이메일을 입력해주세요"
          value={Email}
          onChange={onEmailHandler}
        />
        <label>비밀번호</label>
        <Input
          type="password"
          value={Password}
          placeholder="비밀번호를 입력해주세요"
          onChange={onPasswordHandler}
        />
        <Button type="submit">로그인</Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
