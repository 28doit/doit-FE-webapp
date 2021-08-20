import styled from 'styled-components';
import { Input, Label, Btn, LinkBtn } from '../..';

export const RePasswordContainer = styled.div``;

export const RePasswordForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const RePasswordInputWrap = styled.div`
  width: 90%;
`;

export const RePasswordTitle = styled.h2`
  margin: 0 0 20px;
  font-size: 25px;
  text-align: center;
`;

export const RePasswordLabel = styled(Label)`
  float: left;
  width: 100px;
  margin: 0;
  font-size: 15px;
  line-height: 46px;
  cursor: default;
`;

export const RePasswordInput = styled(Input)`
  width: 90%;
  margin: 0 0 5px;
`;

export const RePasswordBtn = styled(Btn)`
  width: 40%;
  height: 40px;
  margin-top: 60px;
  line-height: 0;
  font-size: 16px;
`;

export const SuccessBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SuccessBox = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 600px;
  height: 300px;
  flex-direction: column;
  font-size: 18px;
  font-weight: 700;
`;

export const SuccessBtn = styled(Btn)`
  width: 400px;
  height: 40px;
  line-height: 0;
  margin: 0;
  font-size: 16px;
  margin-top: 60px;
`;
