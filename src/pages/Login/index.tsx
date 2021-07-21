import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { AxiosLogin } from '../../services/axiosLogin';

interface Props {
  disabled?: boolean;
}

const Container = styled.div`
  margin-top: 100px;
  padding: 20px;
`;

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`;

// eslint-disable-next-line prettier/prettier
const Button = styled.div<Props>`
  font-size: 18px;
  font-weight: 700;
  line-height: 49px;
  display: block;
  width: 100%;
  height: 49px;
  margin: 16px 0 7px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 0;
  background-color: #03c75a;
  ${({ disabled }) =>
    disabled &&
    `
    background-color: #efefef;
  `}
`;

const LoginForm: React.FC = () => {
  const history = useHistory();
  const [account, setAccount] = useState({ email: '', password: '' });
  const onChangeAccount = (e: any) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
    console.log(account);
  };
  const onSubmitAccount = async () => {
    try {
      await AxiosLogin(account);
      history.replace('/');
      window.alert(`${account.email}님 환영합니다.`);
    } catch (error) {
      window.alert(error);
    }
  };
  return (
    <Container>
      <Input
        id="email"
        name="email"
        placeholder="이메일을 입력해주세요"
        onChange={onChangeAccount}
      />
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={onChangeAccount}
      />
      <Button onClick={onSubmitAccount}>로그인</Button>
    </Container>
  );
};

export default LoginForm;
