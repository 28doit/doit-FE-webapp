import styled from 'styled-components';
import { Input, Label, Btn } from '../..';

export const EditTitle = styled.h2`
  height: 60px;
  padding: 0 30px;
  border-bottom: 1px solid #ebebeb;
  font-size: 22px;
  line-height: 60px;
  text-align: center;
`;

export const EditCommonWrap = styled.div``;

export const EditForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const EditLabel = styled(Label)`
  float: left;
  width: 100px;
  margin: 0;
  font-size: 15px;
  line-height: 46px;
  cursor: default;
`;

export const EditBirthInput = styled(Input)`
  width: 25%;
  height: 40px;
`;

export const EditBirthDiv = styled.div`
  display: flex;
  justify-content: start;
`;

export const EditBirthSelect = styled.select`
  overflow: hidden;
  width: 25%;
  height: 40px;
  margin: 0 25px 15px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`;

export const EditGenderSelect = styled.select`
  overflow: hidden;
  width: 25%;
  height: 40px;
  margin: 0 0 15px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`;

export const EditInputWrap = styled.div`
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

export const EditInput = styled(Input)`
  width: 90%;
  margin: 0 0 5px;
`;

export const EditEmailInput = styled(Input)`
  width: 80%;
  margin: 0 0 5px;
`;

export const EditSelectWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const EditValid = styled.span`
  color: #03c75a;
  font-size: 12px;
  font-weight: bold;
  display: inline-block;
`;

export const EditInvalid = styled.span`
  color: red;
  font-size: 12px;
  font-weight: bold;
  display: inline-block;
`;

export const EditValidSelect = styled.span`
  color: #03c75a;
  font-size: 12px;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 20px;
`;

export const EditInvalidSelect = styled.span`
  color: red;
  font-size: 12px;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 20px;
`;

export const EditFinish = styled(Btn)`
  width: 50%;
  height: 30px;
  margin-top: 60px;
  line-height: 0;
  margin: 0;
  margin-top: 60px;
  font-size: 16px;
`;

export const EditNotFinish = styled.div`
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
