import styled from 'styled-components';
import { Input, Label, Btn, LinkBtn } from '../..';
import CheckIcon from '../../../assets/check_square.svg';
import CheckOn from '../../../assets/check_on.svg';

export const ModalCommonTitle = styled.h2`
  height: 60px;
  padding: 0 30px;
  border-bottom: 1px solid #ebebeb;
  font-size: 22px;
  line-height: 60px;
  text-align: center;
`;

export const ModalJoinValid = styled.span`
  color: #03c75a;
  font-size: 12px;
  font-weight: bold;
  display: inline-block;
`;

export const ModalJoinSelectValid = styled.span`
  color: #03c75a;
  font-size: 12px;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 20px;
`;

export const ModalJoinInvalid = styled.span`
  color: red;
  font-size: 12px;
  font-weight: bold;
  display: inline-block;
`;

export const ModalJoinSelectInvalid = styled.span`
  color: red;
  font-size: 12px;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 20px;
`;

export const ModalJoinForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ModaleSelectWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const ModalCheck = styled(Input)`
  width: 40px;
  height: 40px;
  margin-left: 20px;
`;

export const ModalRegisterBirth = styled(Input)`
  width: 25%;
  height: 40px;
`;

export const ModalSelect = styled.select`
  overflow: hidden;
  width: 25%;
  height: 40px;
  margin: 0 25px 15px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`;

export const ModalGenderSelect = styled.select`
  overflow: hidden;
  width: 25%;
  height: 40px;
  margin: 0 0 15px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`;

export const ModalBirthDiv = styled.div`
  display: flex;
  justify-content: start;
`;

export const ModalTermDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const ModalCommonWrap = styled.div``;

export const ModalInputWrap = styled.div`
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

export const ModalRegisterLabel = styled(Label)`
  float: left;
  width: 100px;
  margin: 0;
  font-size: 15px;
  line-height: 46px;
  cursor: default;
`;

export const ModalRegisterNickName = styled(Input)`
  width: 90%;
  margin: 0 0 5px;
`;

export const ModalRegisterInput = styled(Input)`
  width: 90%;
  margin: 0 0 5px;
`;

export const ModalRegisterEmail = styled(Input)`
  width: 90%;
  margin: 0 0 5px;
`;

export const ModalEmailAt = styled.span`
  display: inline-block;
  width: 25px;
  text-align: center;
`;

export const ModalEmailTail = styled.select`
  width: calc(100% - 25px - 100px - 128px);
  height: 46px;
  border: 1px solid #dddfe1;
`;

export const ModalTelInput = styled(Input)`
  width: 90%;
  margin: 0 0 5px;
`;

export const ModalTelInputCheck = styled(Input)`
  width: 320px;
  margin: 0 0 0 100px;
`;

export const ModalTelAt = styled.span`
  display: inline-block;
  width: 22px;
  text-align: center;
`;

export const ModalTelConfirm = styled(Btn)`
  width: calc(100% - 100px - 320px - 10px);
  height: 46px;
  margin: 0 0 0 10px;
`;

export const ModalPre = styled.pre`
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

export const ModalAgreeYes = styled(Btn)`
  width: 50%;
  height: 30px;
  margin-top: 60px;
  line-height: 0;
  margin: 0;
  margin-top: 60px;
  font-size: 16px;
`;

export const ModalAgreeNo = styled.div`
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

export const TermsTxt = styled(Label)`
  display: block;
  position: relative;
  width: 100%;
  height: 30px;
  margin: 30px 0 6px;
  line-height: 30px;
  color: #000000;
  cursor: default;
  &::after {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 30px;
    height: 30px;
    background: url(${CheckIcon}) no-repeat;
  }
  input[type='checkbox']:checked + &::after {
    background: url(${CheckOn}) no-repeat;
  }
`;

export const TermsRequired = styled.span`
  color: #1564f9;
`;

export const ModalBtn = styled(Btn)`
  width: 100%;
  height: 60px;
  margin: 10px 0 0;
`;
