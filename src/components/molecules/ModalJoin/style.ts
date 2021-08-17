import styled from 'styled-components';
import { Input, Label, Btn } from '../..';

export const JoinTitle = styled.h2`
  height: 60px;
  padding: 0 30px;
  border-bottom: 1px solid #ebebeb;
  font-size: 22px;
  line-height: 60px;
  text-align: center;
`;

export const JoinCommonWrap = styled.div``;

export const JoinForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const JoinLabel = styled(Label)`
  float: left;
  width: 100px;
  margin: 0;
  font-size: 15px;
  line-height: 46px;
  cursor: default;
`;

export const JoinEmailWrap = styled.div`
  width: 100%;
  display: flex;
`;

export const JoinEmailCheck = styled.div`
  display: flex;
  align-items: center;
  width: 10%;
  font-weight: 700;
  background-color: #f75a58;
  justify-content: center;
  margin-left: 5px;
  color: white;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
`;

export const JoinBirthInput = styled(Input)`
  width: 25%;
  height: 40px;
`;

export const JoinBirthDiv = styled.div`
  display: flex;
  justify-content: start;
`;

export const JoinBirthSelect = styled.select`
  overflow: hidden;
  width: 25%;
  height: 40px;
  margin: 0 25px 15px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`;

export const JoinGenderSelect = styled.select`
  overflow: hidden;
  width: 25%;
  height: 40px;
  margin: 0 0 15px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`;

export const JoinInputWrap = styled.div`
  &::after {
    display: block;
    content: '';
    clear: both;
  }
  & + & {
    margin: 20px 0 0;
  }
  width: 80%;
`;

export const JoinInput = styled(Input)`
  width: 90%;
  margin: 0 0 5px;
`;

export const JoinEmailInput = styled(Input)`
  width: 80%;
  margin: 0 0 5px;
`;

export const JoinSelectWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const JoinPreDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const JoinPre = styled.pre`
  background-color: rgb(238, 238, 238);
  width: 90%;
  height: 120px;
  padding: 20px;
  overflow-y: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
  line-height: 1.5;
  font-size: 10px;
`;

export const JoinPreCheck = styled(Input)`
  width: 40px;
  height: 40px;
  margin-left: 20px;
`;

export const JoinValid = styled.span`
  color: #03c75a;
  font-size: 12px;
  font-weight: bold;
  display: inline-block;
`;

export const JoinInvalid = styled.span`
  color: red;
  font-size: 12px;
  font-weight: bold;
  display: inline-block;
`;

export const JoinValidSelect = styled.span`
  color: #03c75a;
  font-size: 12px;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 20px;
`;

export const JoinInvalidSelect = styled.span`
  color: red;
  font-size: 12px;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 20px;
`;

export const JoinFinish = styled(Btn)`
  width: 50%;
  height: 30px;
  margin-top: 60px;
  line-height: 0;
  margin: 0;
  margin-top: 60px;
  font-size: 16px;
`;

export const JoinNotFinish = styled.div`
  width: 50%;
  height: 30px;
  margin-top: 60px;
  background-color: #2f4f4f;
  text-align: center;
  line-height: 2;
  color: #ffffff;
  font-weight: 700;
  font-size: 14px;
`;
